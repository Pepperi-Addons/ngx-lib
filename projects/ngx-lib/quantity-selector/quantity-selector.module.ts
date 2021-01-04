import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconNumberMinus,
    pepIconNumberPlus,
} from '@pepperi-addons/ngx-lib/icon';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';

import { PepQuantitySelectorComponent } from './quantity-selector.component';
import { PepQuantitySelectorNumberPipe } from './quantity-selector.pipes';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatBadgeModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
        PepFieldTitleModule,
    ],
    exports: [PepQuantitySelectorComponent],
    declarations: [PepQuantitySelectorComponent, PepQuantitySelectorNumberPipe],
})
export class PepQuantitySelectorModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconNumberMinus,
            pepIconNumberPlus,
        ]);
    }
}
