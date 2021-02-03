import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
    DateAdapter,
    MatCommonModule,
    MatNativeDateModule,
    MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import {
    DatetimeAdapter,
    MatDatetimepickerModule,
    MatNativeDatetimeModule,
    MAT_DATETIME_FORMATS,
} from '@mat-datetimepicker/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MomentDatetimeAdapter } from '@mat-datetimepicker/moment';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemEdit,
} from '@pepperi-addons/ngx-lib/icon';
import { PepTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';

import { PepDateComponent } from './date.component';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatDatetimepickerModule,
        MatNativeDatetimeModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
        PepFieldTitleModule,
        PepTextboxIconModule,
    ],
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
    exports: [PepDateComponent],
    declarations: [PepDateComponent],
})
export class PepDateModule {
    constructor(
        private pepIconRegistry: PepIconRegistry,
        private translate: TranslateService,
        private adapter: DateAdapter<any>
    ) {
        this.pepIconRegistry.registerIcons([pepIconSystemEdit]);

        const culture = this.translate.getBrowserCultureLang() || 'en-US'; // this.userLang,
        this.adapter.setLocale(culture);
    }
}
