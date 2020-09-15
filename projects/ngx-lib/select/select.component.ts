import {
    Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild, ElementRef,
    ChangeDetectionStrategy, OnDestroy, Renderer2
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepperiSelectComponent implements OnChanges, OnInit, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() formattedValue = '';
    @Input() label = '';
    @Input() type = 'select';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment = '0';
    @Input() rowSpan = 1;
    @Input() options: any = [];

    controlType = 'select';

    // @Input() field: PepperiFieldBase;
    @Input() form: FormGroup = null;
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;
    @Input() parentFieldKey: string = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() emptyOption = true;

    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() formValidationChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('select') select: MatSelect;

    LAYOUT_TYPE = LAYOUT_TYPE;
    standAlone = false;
    isInEditMode = false;
    // isFocus: boolean = false;
    isMulti = false;
    selectedValuesModel: string[];
    selectedValueModel: string;
    fieldFormattedValue = '';

    constructor(
        private customizationService: CustomizationService,
        private renderer: Renderer2,
        private element: ElementRef) { }

    private addOptionsIfNeeded(): void {
        if (this.isMulti) {
            // Go gor all selected and add to options if not exist
            // for (let i = 0; i < this.selectedValuesModel.length; i++) {
            for (const selectedValue of this.selectedValuesModel) {
                let valueNotExist = false;

                if (this.options && !this.options.find((opt) => opt.Key === selectedValue)) {
                    valueNotExist = true;
                }

                // Add it to options.
                if (valueNotExist) {
                    this.options.push({ Key: selectedValue, Value: selectedValue });
                }
            }
        } else {
            if (this.value && this.value !== '' && this.options && !this.options.find((opt) => opt.Key === this.value)) {
                this.options.push({ Key: this.value, Value: this.formattedValue });
            }
        }
    }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);

            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
    }

    ngOnChanges(changes: any): void {
        this.isMulti = this.type === 'multi';
        if (this.isMulti) {
            this.selectedValuesModel = this.value.length > 0 ? this.value.split(';') : [];
        } else {
            this.selectedValueModel = this.value;
        }
        this.fieldFormattedValue = typeof this.value === 'string' ? this.value.replace(new RegExp(';', 'g'), ', ') : '';

        this.addOptionsIfNeeded();
    }

    ngOnDestroy(): void {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }

        if (this.formValidationChanged) {
            this.formValidationChanged.unsubscribe();
        }
    }

    selectionChange(event: any): void {
        // this.isFocus = false;
        if (!this.isMulti) {
            this.changeValue(this.selectedValueModel);
        }
    }

    openedChange(event: any): void {
        // Only on close.
        if (!event) {
            if (this.isMulti) {
                // this.isFocus = false;
                this.changeValue(this.selectedValuesModel.join(';'));
            }

            if (this.isInEditMode) {
                this.isInEditMode = false;
            }
        }
    }

    changeValue(value: any): void {
        this.formattedValue = value;
        this.customizationService.updateFormFieldValue(this.form, this.key, value, this.parentFieldKey);

        if (this.required) {
            const fieldControl = this.form.controls[this.key];
            if (value) {
                fieldControl.setErrors(null);
            } else {
                fieldControl.setErrors({
                    serverError: 'Required',
                });
            }
            this.formValidationChanged.emit(this.form.valid);
        }

        this.valueChanged.emit({ apiName: this.key, value });
    }

    cardTemplateClicked(event: any): void {
        const self = this;
        this.isInEditMode = true;

        setTimeout(() => {
            self.select.open();
        }, 0);
    }
}
