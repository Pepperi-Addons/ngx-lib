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
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import {
    DatetimeAdapter,
    MatDatetimepickerInputEvent,
    MAT_DATETIME_FORMATS,
} from '@mat-datetimepicker/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MomentDatetimeAdapter } from '@mat-datetimepicker/moment';
import { TranslateService } from '@ngx-translate/core';
import {
    PepUtilitiesService,
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldValueChangeEvent,
    PepDateFieldType,
    PepDateField,
} from '@pepperi-addons/ngx-lib';
// import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
    selector: 'pep-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.scss'],
    providers: [
        // CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
        // The locale would typically be provided on the root module of your application. We do it at
        // the component level here, due to limitations of our example generation script.
        // { provide: MAT_DATE_LOCALE, useValue: 'en-US' },

        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
        // `MatMomentDateModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        { provide: DateAdapter, useClass: MomentDateAdapter },
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: 'L',
                    monthInput: 'MMMM',
                    timeInput: 'LT',
                    datetimeInput: 'L LT',
                },
                display: {
                    dateInput: 'L',
                    monthInput: 'MMMM',
                    datetimeInput: 'L LT',
                    timeInput: 'LT',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY',
                    popupHeaderDateLabel: 'ddd, DD MMM',
                },
            },
        },
        { provide: DatetimeAdapter, useClass: MomentDatetimeAdapter },
        // { provide: MAT_DATETIME_FORMATS, useValue: MAT_NATIVE_DATETIME_FORMATS }
        {
            provide: MAT_DATETIME_FORMATS,
            useValue: {
                parse: {
                    dateInput: 'L',
                    monthInput: 'MMMM',
                    timeInput: 'LT',
                    datetimeInput: 'L LT',
                },
                display: {
                    dateInput: 'L',
                    monthInput: 'MMMM',
                    datetimeInput: 'L LT',
                    timeInput: 'LT',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY',
                    popupHeaderDateLabel: 'ddd, DD MMM',
                },
            },
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepDateComponent implements OnInit, OnChanges, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() formattedValue = '';
    @Input() label = '';

    private _type: PepDateFieldType = 'date';
    @Input()
    set type(type: PepDateFieldType) {
        this._type = type;
    }
    get type(): PepDateFieldType {
        return this._type;
    }

    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() textColor = '';
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;

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
    valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();
    @ViewChild('datetimePicker') datetimePicker: any;

    @ViewChild('input') input: ElementRef;

    standAlone = false;
    isInEditMode = false;
    dateModel: moment.Moment;
    minDate: Date;
    maxDate: Date;
    showDatepicker = false;
    showTime = false;

    constructor(
        private element: ElementRef,
        private utilitiesService: PepUtilitiesService,
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        private adapter: DateAdapter<any>,
        private translate: TranslateService
    ) { }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            // this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
            const pepField = new PepDateField({
                key: this.key,
                value: this.value,
                required: this.required,
                readonly: this.readonly,
                disabled: this.disabled,
            });
            this.form = this.customizationService.getDefaultFromGroup(pepField);

            // this.formattedValue = this.formattedValue || this.value;

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );
        }

        this.showTime = this.type === 'datetime';

        this.initDate();
    }

    ngOnChanges(changes: any): void {
        // if (this.standAlone) {
        //     this.formattedValue = this.formattedValue || this.value;
        // }

        if (changes.value) {
            this.setDateModel();
        }
    }

    ngOnDestroy(): void {
        if (this.valueChange) {
            this.valueChange.unsubscribe();
        }
    }

    private initDate(): void {
        const culture = this.translate.getBrowserCultureLang() || 'en-US'; // this.userLang,
        this.adapter.setLocale(culture);

        this.setDateModel();
    }

    private setFormattedValueFromModel(): void {
        if (this.dateModel === null) {
            this.formattedValue = '';
        } else {
            this.formattedValue = this.showTime
                ? this.dateModel.toDate().toLocaleString()
                : this.dateModel.toDate().toLocaleDateString();
        }
    }

    private setDateModel(): void {
        if (
            this.value === null ||
            this.value.indexOf('1900-1-1') >= 0 ||
            this.value.indexOf('1900-01-01') >= 0 ||
            this.value.indexOf('1970-1-1') >= 0 ||
            this.value.indexOf('1970-01-01') >= 0
        ) {
            this.value = '';
            this.dateModel = null;
        } else {
            this.dateModel = moment(this.utilitiesService.parseDate(
                this.value,
                this.showTime
            ));
        }

        this.setFormattedValueFromModel();
    }

    openDatetimePicker(datetimePicker): void {
        datetimePicker.opened = false;
        datetimePicker.open();
    }

    onBlur(event: any): void {
        setTimeout(() => {
            if (this.isInEditMode && !this.datetimePicker.opened) {
                this.isInEditMode = false;
            }
        }, 0);
    }

    onDateChange(event: MatDatetimepickerInputEvent<moment.Moment>): void {
        let value = '';
        if (event.value != null) {
            const date: Date = event.value.toDate();

            value = this.utilitiesService.stringifyDate(
                date,
                this.showTime
            );

            // Update the formatted value.
            this.setFormattedValueFromModel();
        }

        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            value
        );
        this.valueChange.emit({ key: this.key, value });

        if (this.isInEditMode) {
            setTimeout(() => {
                this.isInEditMode = false;
            }, 0);
        }
    }

    cardTemplateClicked(event): void {
        this.isInEditMode = true;

        setTimeout(() => {
            this.input.nativeElement.focus();
            this.openDatetimePicker(this.datetimePicker);
        }, 0);
    }
}
