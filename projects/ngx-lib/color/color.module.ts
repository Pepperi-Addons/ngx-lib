import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import {
    PepperiIconModule,
    PepperiIconRegistry,
    pepperiIconSystemEdit,
    pepperiIconSystemOk,
    pepperiIconSystemClose } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiTextboxModule } from '@pepperi-addons/ngx-lib/textbox';

import { PepperiColorComponent } from './color.component';
import { PepperiColorPickerComponent } from './color-picker.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatSliderModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiTextboxModule
    ],
    exports: [ PepperiColorComponent ],
    declarations: [ PepperiColorComponent, PepperiColorPickerComponent ],
})
export class PepperiColorModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemOk,
            pepperiIconSystemClose
        ]);
    }
}
