import { coerceNumberProperty, _isNumberValue } from '@angular/cdk/coercion';
import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    ElementRef,
    ViewChild,
    Renderer2,
    OnDestroy,
    ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldValueChangeEvent,
    PepTextboxFieldType,
    PepTextboxField,
    PepFieldBase,
    PepUtilitiesService,
} from '@pepperi-addons/ngx-lib';

/**
 * This is a text box input component that can be use to 
 *
 * @export
 * @class PepTextboxComponent
 * @implements {OnChanges}
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
    selector: 'pep-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepTextboxComponent implements OnChanges, OnInit, OnDestroy {
    /**
     * @ignore
     *
     * @memberof PepTextboxComponent
     */
    @Input() key = '';

    /**
     * @ignore
     *
     * @private
     * @memberof PepTextboxComponent
     */
    private _value = null;
    /**
     * The value of the text box.
     *
     * @memberof PepTextboxComponent
     */
    @Input()
    set value(value: string) {
        if (!value) {
            value = '';
        }

        this._value = value;

        if (this._calculateFormattedValue) {
            this.setFormattedValue(value);
        }
    }
    get value(): string {
        return this._value;
    }

    /**
     * @ignore
     *
     * @private
     * @memberof PepTextboxComponent
     */
    private _formattedValue = null;
    /**
     * @ignore
     *
     * @memberof PepTextboxComponent
     */
    @Input()
    set formattedValue(value: string) {
        if (!value) {
            value = '';
        }

        if (this._calculateFormattedValue) {
            this._calculateFormattedValue = false;
        }

        this.setFormattedValue(value);
    }
    get formattedValue(): string {
        return this._formattedValue;
    }

    /**
     * The title of the textbox.
     *
     * @memberof PepTextboxComponent
     */
    @Input() label = '';

    /**
     * @ignore
     *
     * @memberof PepTextboxComponent
     */
    @Input() placeholder = '';

    /**
     * The type of the textbox.
     *
     * @type {PepTextboxFieldType}
     * @memberof PepTextboxComponent
     */
    @Input() type: PepTextboxFieldType = 'text';

    // TODO: change to mandatory
    /**
     * If the textbox is mandatory
     *
     * @memberof PepTextboxComponent
     */
    @Input() required = false;

    // TODO: Check if should remove disabled and keep only readonly.
    /**
     * @ignore
     *
     * @memberof PepTextboxComponent
     */
    @Input() disabled = false;

    /**
     * If the textbox is readonly
     *
     * @memberof PepTextboxComponent
     */
    @Input() readonly = false;
    @Input() maxFieldCharacters: number;
    @Input() textColor = '';
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    // @Input() lastFocusField: any;
    @Input() minValue = NaN;
    @Input() maxValue = NaN;

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

    @Input() form: FormGroup = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() renderTitle = true;
    @Input() renderError = true;
    @Input() renderSymbol = true;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() parentFieldKey: string = null;

    /**
     * The value change event.
     *
     * @type {EventEmitter<IPepFieldValueChangeEvent>}
     * @memberof PepTextboxComponent
     */
    @Output()
    valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();
    // TODO: Change to fieldValueChange.
    // @Output()
    // valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();

    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('input') input: ElementRef;

    private _calculateFormattedValue = true;
    get calculateFormattedValue(): boolean {
        return this._calculateFormattedValue;
    }

    controlType = 'textbox';

    standAlone = false;
    isInEditMode = false;
    isInFocus: boolean;

    constructor(
        public fb: FormBuilder,
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        private element: ElementRef,
        private translate: TranslateService,
        private utilitiesService: PepUtilitiesService
    ) {
        this.isInFocus = false;
    }

    private setFormattedValue(value: string) {
        if (this._calculateFormattedValue) {
            this._formattedValue = this.isNumberType()
                ? this.utilitiesService.formatNumber(value)
                : value;
        } else {
            this._formattedValue = value;
        }

        // Need timeout for UI.
        setTimeout(() => {
            this.customizationService.updateFormFieldValue(
                this.form,
                this.key,
                this.formattedValue,
                this.parentFieldKey
            );
        }, 0);
    }

    private getField(): PepFieldBase {
        const pepField = new PepTextboxField({
            key: this.key,
            value: this.value,
            required: this.required,
            readonly: this.readonly,
            disabled: this.disabled,
            maxFieldCharacters: this.maxFieldCharacters,
            type: this.type,
            minValue: this.minValue,
            maxValue: this.maxValue,
        });

        return pepField;
    }

    get displayValue(): string {
        let res = '';

        if (this.type == 'link') {
            res = this.formattedValue;
        } else {
            res = this.isInFocus ? this.value : this.formattedValue;
        }

        return res;
    }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;

            this.minValue =
                isNaN(this.minValue) && !isNaN(this.maxValue)
                    ? 0
                    : this.minValue;
            this.maxValue =
                isNaN(this.maxValue) && !isNaN(this.minValue)
                    ? 99999
                    : this.maxValue;

            const pepField = this.getField();
            this.form = this.customizationService.getDefaultFromGroup(
                pepField,
                this.renderError
            );

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );
        }

        this.readonly = this.type === 'duration' ? true : this.readonly; // Hack until we develop Timer UI for editing Duration field
    }

    ngOnChanges(changes: any): void {
        this.readonly = this.type === 'duration' ? true : this.readonly; // Hack until we develop Timer UI for editing Duration field
    }

    ngOnDestroy(): void {
        //
    }

    onFocus(e: any): void {
        this.isInFocus = true;
    }

    isNumberType(): boolean {
        return (
            this.type === 'percentage' ||
            this.type === 'currency' ||
            this.type === 'int' ||
            this.type === 'real'
        );
    }

    isValueValid(value: string): boolean {
        let res = false;

        if (this.isNumberType()) {
            if (value === '') {
                res = this.required ? false : true;
            } else {
                const numberValue = coerceNumberProperty(value);
                res =
                    numberValue >= this.minValue &&
                    numberValue <= this.maxValue;
            }
        } else {
            // TODO: Maybe need to check other types.
            res = true;
        }

        return res;
    }

    isDifferentValue(value: string): boolean {
        let res = false;

        if (this.isNumberType()) {
            if (this.value === '' || value === '') {
                res = true;
            } else {
                const currentValue = coerceNumberProperty(this.value);
                const newValue = coerceNumberProperty(value);

                res = currentValue !== newValue;
            }
        } else {
            res = true;
        }

        return res;
    }

    onChange(e: any): void {
        const value = e.target ? e.target.value : e;

        // TODO: uncomment
        // this.valueChange.emit(value);
    }

    onBlur(e: any): void {
        this.isInFocus = false;
        const value = e.target ? e.target.value : e;
        if (value !== this.value && this.isDifferentValue(value)) {
            // If renderError is false and the new value is not valid.
            if (!this.renderError && !this.isValueValid(value)) {
                this.renderer.setProperty(
                    this.input.nativeElement,
                    'value',
                    this.value
                );
            } else {
                this.value = value;

                // If the user is setting the formatted value then set the value till the user format it and return it back.
                if (!this._calculateFormattedValue) {
                    this._formattedValue = value;
                }

                // TODO: Rename to fieldValueChange.
                this.valueChange.emit({
                    key: this.key,
                    value,
                    lastFocusedField: e.relatedTarget,
                });
            }
        }

        if (this.isInEditMode) {
            this.isInEditMode = false;
        }
    }

    anchorClicked(): void {
        const currentValue = this.value;
        if (currentValue.trim().length > 0) {
            switch (this.type) {
                case 'email':
                    window.open('mailto:' + currentValue, 'email');
                    break;
                case 'phone':
                    window.open('tel:' + currentValue, 'tel');
                    break;
                case 'link':
                    window.open(currentValue);
                    break;
                default:
                    break;
            }
        }
    }

    cardTemplateClicked(event: any): void {
        this.isInEditMode = true;

        setTimeout(() => {
            this.input.nativeElement.focus();
        }, 0);
    }
}
