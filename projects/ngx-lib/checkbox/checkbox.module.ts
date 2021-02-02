import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemBolt,
} from '@pepperi-addons/ngx-lib/icon';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';

import { PepCheckboxComponent } from './checkbox.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
        PepFieldTitleModule,
    ],
    exports: [PepCheckboxComponent],
    declarations: [PepCheckboxComponent],
})
export class PepCheckboxModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([pepIconSystemBolt]);
    }
}
