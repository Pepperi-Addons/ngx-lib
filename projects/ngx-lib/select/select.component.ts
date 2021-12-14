import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    ChangeDetectionStrategy,
    OnDestroy,
    Renderer2,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import {
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    PepSelectFieldType,
    PepSelectField,
    IPepOption,
} from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepSelectComponent implements OnChanges, OnInit, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() label = '';
    @Input() type: PepSelectFieldType = 'select';
    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    @Input() options: Array<IPepOption> = [];

    private _visible = true;
    @Input()
    set visible(visible: boolean) {
        this._visible = visible;
        if (visible) {
            this.renderer.removeClass(
                this.element.nativeElement,
                'hidden-element'
            );
        } else {
            this.renderer.addClass(
                this.element.nativeElement,
                'hidden-element'
            );
        }
    }
    get visible(): boolean {
        return this._visible;
    }

    controlType = 'select';

    // @Input() field: PepFieldBase;
    @Input() form: FormGroup = null;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() parentFieldKey: string = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() emptyOption = true;
    @Input() renderTitle = true;

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();
    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('select') select: MatSelect;

    standAlone = false;
    isInEditMode = false;
    isMulti = false;
    selectedValuesModel: string[];
    selectedValueModel: string;
    fieldFormattedValue = '';

    constructor(
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        private element: ElementRef
    ) { }

    private addOptionsIfNeeded(): void {
        if (this.isMulti) {
            // Go gor all selected and add to options if not exist
            // for (let i = 0; i < this.selectedValuesModel.length; i++) {
            for (const selectedValue of this.selectedValuesModel) {
                let valueNotExist = false;

                if (
                    this.options &&
                    !this.options.find((opt) => opt.key === selectedValue)
                ) {
                    valueNotExist = true;
                }

                // Add it to options.
                if (valueNotExist) {
                    this.options.push({
                        key: selectedValue,
                        value: selectedValue,
                    });
                }
            }
        } else {
            if (
                this.value &&
                this.value !== '' &&
                this.options &&
                !this.options.find((opt) => opt.key === this.value)
            ) {
                this.options.push({ key: this.value, value: this.value });
            }
        }
    }

    private setFieldFormattedValue(value: any): void {
        if (this.isMulti) {
            if (this.selectedValuesModel.length > 0) {
                this.fieldFormattedValue = this.selectedValuesModel
                    .map((value) => {
                        return this.options.find((opt) => opt.key === value)
                            ?.value;
                    })
                    .join(', ');
            } else {
                this.fieldFormattedValue = '';
            }

            // this.fieldFormattedValue = typeof value === 'string' ? value.replace(new RegExp(';', 'g'), ', ') : '';
        } else {
            const selectedOpt = this.options.find((opt) => opt.key === value);

            if (selectedOpt) {
                this.fieldFormattedValue = selectedOpt.value;
            }
        }
    }

    private setDefaultForm(): void {
        const pepField = new PepSelectField({
            key: this.key,
            value: this.value,
            mandatory: this.mandatory,
            readonly: this.readonly,
            disabled: this.disabled,
        });
        this.form = this.customizationService.getDefaultFromGroup(pepField);
    }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            this.setDefaultForm();

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );
        }
    }

    ngOnChanges(changes: any): void {
        if (this.standAlone) {
            this.setDefaultForm();
        }

        this.isMulti = this.type === 'multi';
        if (this.isMulti) {
            this.selectedValuesModel =
                this.value.length > 0 ? this.value.split(';') : [];
        } else {
            this.selectedValueModel = this.value;
        }

        this.addOptionsIfNeeded();
        this.setFieldFormattedValue(this.value);
    }

    ngOnDestroy(): void {
        //
    }

    selectionChange(event: any): void {
        if (!this.isMulti) {
            this.changeValue(this.selectedValueModel);
        }
    }

    openedChange(event: any): void {
        // Only on close.
        if (!event) {
            if (this.isMulti) {
                this.changeValue(this.selectedValuesModel.join(';'));
            }

            if (this.isInEditMode) {
                this.isInEditMode = false;
            }
        }
    }

    changeValue(value: any): void {
        this.setFieldFormattedValue(value);
        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            // value,
            this.fieldFormattedValue,
            this.parentFieldKey
        );

        if (this.mandatory) {
            const fieldControl = this.form.controls[this.key];
            if (value) {
                fieldControl.setErrors(null);
            } else {
                fieldControl.setErrors({
                    serverError: 'Required',
                });
            }
            this.formValidationChange.emit(this.form.valid);
        }

        this.valueChange.emit(value);
    }

    cardTemplateClicked(event: any): void {
        this.isInEditMode = true;

        setTimeout(() => {
            this.select.open();
        }, 0);
    }
}
