import { Inject, Injectable, Optional } from "@angular/core";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { MomentDatetimeAdapter } from '@mat-datetimepicker/moment';

@Injectable()
export class MomentUtcDateAdapter extends MomentDateAdapter {
    constructor(@Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string) {
        super(dateLocale);
    }
}

@Injectable()
export class MomentUtcDateTimeAdapter extends MomentDatetimeAdapter {
    constructor(@Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string) {
        super(dateLocale, { strict: false, useUtc: false }, new MomentUtcDateAdapter(dateLocale));
    }
}

export const MY_DATE_FORMATS = {
    parse: {
        dateInput: 'L',
        monthInput: 'MMMM',
        timeInput: 'LT',
        datetimeInput: 'L LT',
    },
    display: {
        dateInput: 'L',
        monthInput: 'MMMM',
        timeInput: 'LT',
        datetimeInput: 'L LT',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
        popupHeaderDateLabel: 'ddd, DD MMM',
    },
};
