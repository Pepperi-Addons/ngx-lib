import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemEdit,
    pepIconSystemOk,
    pepIconSystemClose,
} from '@pepperi-addons/ngx-lib/icon';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepTextboxModule } from '@pepperi-addons/ngx-lib/textbox';

import { PepColorComponent } from './color.component';
import { PepColorPickerComponent } from './color-picker.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        // Material modules
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatSliderModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepDialogModule,
        PepIconModule,
        PepFieldTitleModule,
        PepTextboxModule,
    ],
    exports: [PepColorComponent],
    declarations: [PepColorComponent, PepColorPickerComponent],
})
export class PepColorModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemEdit,
            pepIconSystemOk,
            pepIconSystemClose,
        ]);
    }
}
