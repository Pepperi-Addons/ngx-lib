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
    IPepFieldClickEvent,
} from '@pepperi-addons/ngx-lib';
import { IsUrlPipe } from './link.pipes';

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
    selector: 'pep-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepLinkComponent implements OnChanges, OnInit, OnDestroy {

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

        if (this._calculateFormattedValue) {
            this.setFormattedValue(value);
        }
    }
    get value(): string {
        return this._value;
    }

    protected formattedValue = '';
    // private _formattedValue = '';
    // /**
    //  * The formatted value.
    //  *
    //  * @memberof PepTextboxComponent
    //  */
    // @Input()
    // set formattedValue(value: string) {
        
    // }
    // get formattedValue(): string {
    //     return this._formattedValue;
    // }

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
    type: PepTextboxFieldType = 'link';

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
    @Input() textColor = '';
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    // @Input() lastFocusField: any;
    
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

    @Output()
    elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();

    @ViewChild('input') input: ElementRef;

    private _calculateFormattedValue = true;
    get calculateFormattedValue(): boolean {
        return this._calculateFormattedValue;
    }

    controlType = 'link';

    standAlone = false;
    isInEditMode = false;
    isInFocus: boolean;
    isUrl = false;

    constructor(
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        private element: ElementRef,
        private translate: TranslateService,
        private utilitiesService: PepUtilitiesService,
        private isUrlPipe: IsUrlPipe
    ) {
        this.isInFocus = false;
    }

    private setFormattedValue(value: string) {
        this.formattedValue = value;
        this.updateFormFieldValue();
    }

    private updateFormFieldValue() {
        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            this.formattedValue
        );
    }

    get displayValue(): string {
        const res = this.formattedValue;

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
        });
        this.form = this.customizationService.getDefaultFromGroup(
            pepField,
            this.renderError
        );
    }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;

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

        this.updateFormFieldValue();
    }

    ngOnChanges(changes: any): void {
        if (this.standAlone) {
            this.setDefaultForm();
        }
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

    isValueValid(value: string): boolean {
        // TODO: Maybe need to check other types.
        const res = true;

        return res;
    }

    onChange(e: any): void {
        const value = e.target ? e.target.value : e;

        this.valueChange.emit(value);
    }

    onBlur(e: any): void {
        this.isInFocus = false;
        const value = e.target ? e.target.value : e;
        if (value !== this.value) {
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
                    this.formattedValue = value;
                }

                this.valueChange.emit(value);
            }
        }

        if (this.isInEditMode) {
            this.isInEditMode = false;
        }
    }

    onClick() {
        const output: IPepFieldClickEvent = {
            key: this.key,
            value: this.value,
            controlType: this.controlType
        }
        this.elementClick.emit(output);
    }

    anchorClicked(): void {
        const currentValue = this.value;
        if (currentValue.trim().length > 0) {
            const output: IPepFieldClickEvent = {
                key: this.key,
                value: this.value,
                controlType: this.controlType
            }
            this.elementClick.emit(output);
            if (this.isUrlPipe.transform(currentValue)) {
                window.open(currentValue);
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
