import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import {
    MatDatetimepickerModule,
    MatNativeDatetimeModule,
} from '@mat-datetimepicker/core';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemEdit,
} from '@pepperi-addons/ngx-lib/icon';
import { PepTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';

import { PepDateComponent } from './date.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
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
    exports: [PepDateComponent],
    declarations: [PepDateComponent],
})
export class PepDateModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([pepIconSystemEdit]);
    }
}
