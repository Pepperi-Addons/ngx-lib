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
    IPepFieldValueChangeEvent,
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
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    @Input() options: Array<IPepOption> = [];

    controlType = 'select';

    // @Input() field: PepFieldBase;
    @Input() form: FormGroup = null;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() parentFieldKey: string = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() emptyOption = true;

    @Output()
    valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();
    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('select') select: MatSelect;

    standAlone = false;
    isInEditMode = false;
    // isFocus: boolean = false;
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

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            // this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
            const pepField = new PepSelectField({
                key: this.key,
                value: this.value,
                required: this.required,
                readonly: this.readonly,
                disabled: this.disabled,
            });
            this.form = this.customizationService.getDefaultFromGroup(pepField);

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );
        }
    }

    ngOnChanges(changes: any): void {
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
        // if (this.valueChange) {
        //     this.valueChange.unsubscribe();
        // }

        // if (this.formValidationChange) {
        //     this.formValidationChange.unsubscribe();
        // }
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
        this.setFieldFormattedValue(value);
        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            value,
            this.parentFieldKey
        );

        if (this.required) {
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

        this.valueChange.emit({ key: this.key, value });
    }

    cardTemplateClicked(event: any): void {
        this.isInEditMode = true;

        setTimeout(() => {
            this.select.open();
        }, 0);
    }
}
