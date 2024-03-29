import {
    Component,
    ElementRef,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    ViewChild,
    Renderer2,
    OnDestroy,
    OnChanges,
    Optional,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {
    DatetimeAdapter,
    MatDatetimepickerInputEvent,
    MAT_DATETIME_FORMATS,
} from '@mat-datetimepicker/core';
import { MomentDatetimeAdapter } from '@mat-datetimepicker/moment';
import {
    PepLayoutService,
    PepUtilitiesService,
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    PepDateFieldType,
    PepDateField,
} from '@pepperi-addons/ngx-lib';
import { Moment, utc } from 'moment/moment';
import { MomentUtcDateAdapter, MomentUtcDateTimeAdapter, MY_DATE_FORMATS } from './date.model';

// Set the calture for the adapter.
export function getCalture(layoutService: PepLayoutService) {
    const culture = layoutService.getCurrentLanguage();
    return culture;
}

@Component({
    selector: 'pep-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.scss', './date.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
        // The locale would typically be provided on the root module of your application. We do it at
        // the component level here, due to limitations of our example generation script.
        // { provide: MAT_DATE_LOCALE, useValue: 'he' },
        { provide: MAT_DATE_LOCALE, useFactory: getCalture, deps:[PepLayoutService] },

        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
        // `MatMomentDateModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        //{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        //{ provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        { provide: DateAdapter, useClass: MomentUtcDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
        { provide: DatetimeAdapter, useClass: MomentUtcDateTimeAdapter },
        //{ provide: MAT_DATETIME_FORMATS, useValue: MAT_NATIVE_DATETIME_FORMATS }
        { provide: MAT_DATETIME_FORMATS, useValue: MY_DATE_FORMATS },
    ],
})
export class PepDateComponent implements OnInit, OnChanges, OnDestroy {
    @Input() key = '';

    private _value = '';
    @Input()
    set value(value: string) {
        this._value = value;
        this.setDateModel();
    }
    get value() {
        return this._value;
    }

    protected formattedValue = '';
    // private _formattedValue = '';
    // @Input()
    // set formattedValue(value: string) {
    //     // if (!value) {
    //     //     value = '';
    //     // }

    //     // if (this._calculateFormattedValue) {
    //     //     this._calculateFormattedValue = false;
    //     // }

    //     // this.setFormattedValue(value);
    // }
    // get formattedValue(): string {
    //     return this._formattedValue;
    // }

    @Input() label = '';

    private _type: PepDateFieldType = 'date';
    @Input()
    set type(type: PepDateFieldType) {
        this._type = type;
        this.showTime = type === 'datetime';
    }
    get type(): PepDateFieldType {
        return this._type;
    }

    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() textColor = '';
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;

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

    // Minimum in thicks
    @Input()
    set minValue(value: number) {
        if (value > 0) {
            this.minDate = new Date(value * 1000 * 60 * 60 * 24);
        }
    }

    // Maximum in thicks
    @Input()
    set maxValue(value: number) {
        if (value > 0) {
            this.maxDate = new Date(value * 1000 * 60 * 60 * 24);
        }
    }

    // Minimum in date
    @Input()
    set minDateValue(date: string) {
        this.minDate = date ? new Date(date) : null;
    }

    // Maximum in date
    @Input()
    set maxDateValue(date: string) {
        this.maxDate = date ? new Date(date) : null;
    }

    controlType = 'date';

    @Input() form: FormGroup = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() renderTitle = true;
    @Input() renderError = true;
    @Input() renderSymbol = true;
    @Input() layoutType: PepLayoutType = 'form';

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();
    @ViewChild('datetimePicker') datetimePicker: any;

    @ViewChild('input') input: ElementRef;

    standAlone = false;
    isInEditMode = false;
    dateModel: Moment;
    minDate: Date;
    maxDate: Date;
    showDatepicker = false;
    showTime = false;

    constructor(
        private adapter: DateAdapter<any>,
        private element: ElementRef,
        private layoutService: PepLayoutService,
        private utilitiesService: PepUtilitiesService,
        private customizationService: PepCustomizationService,
        private renderer: Renderer2
    ) { }

    private setDefaultForm(): void {
        const pepField = new PepDateField({
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

            if (!this.renderTitle) {
                this.renderer.addClass(
                    this.element.nativeElement,
                    PepCustomizationService.STAND_ALONE_FIELD_NO_SPACING_CLASS_NAME
                );
            }
        }

        // This is not working for the dateModel so I use set calure in the useFactory: getCalture function.
        // const culture = this.layoutService.getCurrentLanguage();
        // this.adapter.setLocale(culture);

        this.setDateModel();
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

    private setFormattedValueFromModel(): void {
        if (this.dateModel === null || !this.dateModel.isValid()) {
            this.formattedValue = '';
        } else {
            const formatString = this.showTime
                ? MY_DATE_FORMATS.display.datetimeInput
                : MY_DATE_FORMATS.display.dateInput;
            this.formattedValue = this.adapter.format(this.dateModel, formatString);
        }
    }

    private setDateModel(): void {
        if (
            !this.value ||
            this.value === '' ||
            this.value.indexOf('1900-1-1') >= 0 ||
            this.value.indexOf('1900-01-01') >= 0 ||
            this.value.indexOf('1970-1-1') >= 0 ||
            this.value.indexOf('1970-01-01') >= 0
        ) {
            this._value = '';
            this.dateModel = null;
        } else {
            const parseDate = this.utilitiesService.parseDate(this.value, this.showTime);
            this.dateModel = utc(parseDate);
        }

        this.setFormattedValueFromModel();
    }

    openDatetimePicker(datetimePicker): void {
        datetimePicker.opened = false;
        datetimePicker.open();
    }

    onBlur(event: any): void {
        // Don't remove the timeout cause a bug DI-17819.
        setTimeout(() => {
            if (this.isInEditMode && !this.datetimePicker.opened) {
                this.isInEditMode = false;
            }
        }, 0);
    }

    private updateFormFieldValue() {
        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            // this.formattedValue
            this.value
        );
    }

    onDateChange(event: MatDatetimepickerInputEvent<Moment>): void {
        let value = '';
        if (event.value != null) {
            const date: Date = event.value.toDate();

            value = this.utilitiesService.stringifyDate(date, this.showTime);

            // Update the formatted value.
            this.setFormattedValueFromModel();
        }

        this._value = value;
        this.updateFormFieldValue();
        
        this.valueChange.emit(value);

        setTimeout(() => {
            if (this.isInEditMode) {
                this.isInEditMode = false;
            }
        }, 0);
    }

    cardTemplateClicked(event): void {
        this.isInEditMode = true;

        setTimeout(() => {
            this.input.nativeElement.focus();
            this.openDatetimePicker(this.datetimePicker);
        }, 0);
    }
}
