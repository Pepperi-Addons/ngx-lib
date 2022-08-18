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
    HostBinding,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    PepTextboxFieldType,
    PepTextboxField,
    PepFieldBase,
    PepUtilitiesService,
} from '@pepperi-addons/ngx-lib';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** error when invalid control is dirty or touched */
export class TextErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const validateOnDirty = form?.form?.controls?.['validateOnDirty']?.value;
        return !!(validateOnDirty && control && control.invalid && (control.dirty || control.touched));
    }
}

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
    styleUrls: ['./textbox.component.scss', './textbox.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepTextboxComponent implements OnChanges, OnInit, OnDestroy {

    @HostBinding('attr.data-qa') dataQa = '';

    private _key = '';
    /**
     * The text box key
     *
     * @memberof PepTextboxComponent
     */
    @Input()
    set key(value) {
        this._key = value;
        this.dataQa = value;
    }
    get key(): string {
        return this._key;
    }

    private _value = '';
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
        this.setFormattedValue(value);
    }
    get value(): string {
        return this._value;
    }

    private _formattedValue = '';
    /**
     * The formatted value.
     *
     * @memberof PepTextboxComponent
     */
    @Input()
    set formattedValue(value: string) {
        // Do nothing.
        // if (!value) {
        //     value = '';
        // }

        // if (this._calculateFormattedValue) {
        //     this._calculateFormattedValue = false;
        // }

        // this.setFormattedValue(value);
    }
    get formattedValue(): string {
        return this._formattedValue;
    }

    private _minFractionDigits: number = NaN;
    @Input()
    set minFractionDigits(value: number) {
        this._minFractionDigits = value;
        this.setFormattedValue(this.value);
    }
    get minFractionDigits(): number {
        return this._minFractionDigits;
    }

    private _maxFractionDigits: number = NaN;
    @Input()
    set maxFractionDigits(value: number) {
        this._maxFractionDigits = value;
        this.setFormattedValue(this.value);
    }
    get maxFractionDigits(): number {
        return this._maxFractionDigits;
    }

    /**
     * The accessory sign.
     *
     * @memberof PepTextboxComponent
     */
    @Input() accessory = '';

    /**
     * The title of the textbox.
     *
     * @memberof PepTextboxComponent
     */
    @Input() label = '';

    /**
     * The placeholder (relevant only for children - if parent isn't null).
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
    private _type: PepTextboxFieldType = 'text';
    @Input()
    set type(value: PepTextboxFieldType) {
        this._type = value;

        if (this.value) {
            this.setFormattedValue(this.value);
        }
    }
    get type(): PepTextboxFieldType {
        return this._type;
    }

    /**
     * If the textbox is mandatory
     *
     * @memberof PepTextboxComponent
     */
    @Input() mandatory = false;

    // TODO: Check if should remove disabled and keep only readonly.
    /**
     * If the textbox is disabled.
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
    @Input() hint: string;
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
    @Input() regex: string | RegExp;
    @Input() regexError = '';

    /**
     * The value change event.
     *
     * @type {EventEmitter<string>}
     * @memberof PepTextboxComponent
     */
    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();

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

    matcher = new TextErrorStateMatcher();

    constructor(
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
            if (this.type === 'currency') {
                this._formattedValue = this.utilitiesService.formatCurrency(value, this.accessory, this.minFractionDigits, this.maxFractionDigits);
            } else if (this.type === 'percentage') {
                this._formattedValue = this.utilitiesService.formatPercent(value, this.minFractionDigits, this.maxFractionDigits);
            } else if (this.type === 'real') {
                this._formattedValue = this.utilitiesService.formatDecimal(value, this.minFractionDigits, this.maxFractionDigits);
            } else if (this.type === 'int') {
                this._formattedValue = this.utilitiesService.formatNumber(value);
            } else if (this.type === 'duration') {
                this._formattedValue = this.utilitiesService.formatDuration(value, { duration: 'seconds' });
            } else {
                this._formattedValue = value;
            }
        } else {
            this._formattedValue = value;
        }

        this.updateFormFieldValue();
    }

    private updateFormFieldValue() {
        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            this.formattedValue,
            this.parentFieldKey
        );
    }

    get displayValue(): string {
        let res = '';

        if (this.type == 'link') {
            res = this.formattedValue;
        } else if (this.isNumberType()) {
            res = this.isInFocus ? (this.value.length > 0 ? this.utilitiesService.formatDecimal(this.value, this.minFractionDigits, this.maxFractionDigits) : '') : this.formattedValue;
        } else {
            res = this.isInFocus ? this.value : this.formattedValue;
        }

        return res;
    }

    private setDefaultForm(): void {
        const pepField = new PepTextboxField({
            key: this.key,
            value: this.value,
            mandatory: this.mandatory,
            readonly: this.readonly,
            disabled: this.disabled,
            maxFieldCharacters: this.maxFieldCharacters,
            type: this.type,
            minValue: this.minValue,
            maxValue: this.maxValue,
            regex: this.regex
        });
        this.form = this.customizationService.getDefaultFromGroup(
            pepField,
            this.renderError
        );        
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

            this.setDefaultForm();

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );

            if (!this.renderTitle) {
                this.renderer.addClass(
                    this.element.nativeElement,
                    PepCustomizationService.STAND_ALONE_FIELD_NO_SPACING_CLASS_NAME
                );
            }
        }
        //flag to indicate whether validation on dirty is required        
        this.form.addControl('validateOnDirty', new FormControl(this.type === 'text'));

        this.readonly = this.type === 'duration' ? true : this.readonly; // Hack until we develop Timer UI for editing Duration field

        //load default error text
        if (this.type === 'text' && this.regex && !this.regexError) {
            this.translate.get('MESSAGES.ERROR_INVALID_PATTERN').subscribe(text => this.regexError = text);
        }

        this.updateFormFieldValue();
    }

    ngOnChanges(changes: any): void {
        if (this.standAlone) {
            this.setDefaultForm();
        }

        this.readonly = this.type === 'duration' ? true : this.readonly; // Hack until we develop Timer UI for editing Duration field
    }

    ngOnDestroy(): void {
        //
    }

    onFocus(event: any): void {
        this.isInFocus = true;

        // select the value in focus (DI-18246 improvement)
        setTimeout(() => {
            const eventTarget = event.target || event.srcElement;
            if (eventTarget) {
                eventTarget.select();
            }
        }, 0);
    }

    isDecimal(): boolean {
        let res = false;

        if (this.isNumberType()) {
            if (this.type === 'currency' || this.type === 'real') {
                res = true;
            }
        }

        return res;
    }

    isNumberType(): boolean {
        return (
            this.type === 'percentage' ||
            this.type === 'int' ||
            this.type === 'currency' ||
            this.type === 'real'
        );
    }

    isValueValid(value: string): boolean {
        let res = false;

        if (this.isNumberType()) {
            if (value === '') {
                res = this.mandatory ? false : true;
            } else {
                const numberValue = this.utilitiesService.coerceNumberProperty(
                    value
                );
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
                const currentValue = this.utilitiesService.coerceNumberProperty(
                    this.value
                );
                const newValue = this.utilitiesService.coerceNumberProperty(
                    value
                );

                res = currentValue !== newValue;
            }
        } else {
            res = true;
        }

        return res;
    }

    onChange(e: any): void {
        const value = e.target ? e.target.value : e;

        this.valueChange.emit(value);
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

                // // If the user is setting the formatted value then set the value till the user format it and return it back.
                // if (!this._calculateFormattedValue) {
                //     this._formattedValue = value;
                // }

                this.valueChange.emit(value);
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
