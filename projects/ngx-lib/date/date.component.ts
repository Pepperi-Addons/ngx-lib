import { Component, ElementRef, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, Renderer2, OnDestroy, OnChanges, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { DatetimeAdapter, MAT_DATETIME_FORMATS } from '@mat-datetimepicker/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MomentDatetimeAdapter } from '@mat-datetimepicker/moment';
import { TranslateService } from '@ngx-translate/core';
import { PepUtilitiesService, PepLayoutType, PepCustomizationService, PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT, IPepFieldValueChangeEvent, PepDateFieldType, PepDateField } from '@pepperi-addons/ngx-lib';

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
    @Input() type: PepDateFieldType = 'date';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() textColor = '';
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    @Input() minValue = 0;
    @Input() maxValue = 0;

    controlType = 'date';

    @Input() form: FormGroup = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() layoutType: PepLayoutType = 'form';

    @Output() valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();
    @ViewChild('datetimePicker') datetimePicker: any;

    @ViewChild('input') input: ElementRef;

    standAlone = false;
    isInEditMode = false;
    dateModel: Date;
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
                disabled: this.disabled
            });
            this.form = this.customizationService.getDefaultFromGroup(pepField);

            this.formattedValue = this.formattedValue || this.value;

            this.renderer.addClass(this.element.nativeElement, PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }

        this.showTime = this.type === 'datetime';

        if (this.minValue > 0) {
            this.minDate = new Date(this.minValue * 1000 * 60 * 60 * 24);
        }

        if (this.maxValue > 0) {
            this.maxDate = new Date(this.maxValue * 1000 * 60 * 60 * 24);
        }

        this.initDate();
    }

    ngOnChanges(changes: any): void {
        if (this.standAlone) {
            this.formattedValue = this.formattedValue || this.value;
        }
    }
    
    ngOnDestroy(): void {
        if (this.valueChange) {
            this.valueChange.unsubscribe();
        }
    }

    initDate(): void {
        const culture = this.translate.getBrowserCultureLang() || 'en-US'; // this.userLang,
        this.adapter.setLocale(culture);

        if (this.value.indexOf('1900-1-1') >= 0 ||
            this.value.indexOf('1900-01-01') >= 0 ||
            this.value.indexOf('1970-1-1') >= 0 ||
            this.value.indexOf('1970-01-01') >= 0) {
            this.value = '';
            this.formattedValue = '';
            this.dateModel = null;
        } else {
            this.dateModel = this.utilitiesService.parseDate(this.value, this.showTime);
        }
    }

    openDatetimePicker(datetimePicker): void {
        datetimePicker.opened = false;
        datetimePicker.open();
    }

    onBlur(event: any): void {
        if (this.isInEditMode && !this.datetimePicker.opened) {
            this.isInEditMode = false;
        }
    }

    onDateChange(event: any): void {
        let value = '';
        if (event.value != null) {
            value = this.utilitiesService.stringifyDateWithOffset(event.value.toDate(), this.showTime);
        }

        this.customizationService.updateFormFieldValue(this.form, this.key, value);
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
