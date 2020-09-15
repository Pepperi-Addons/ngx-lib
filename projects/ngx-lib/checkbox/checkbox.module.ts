import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, PepperiIconRegistry, pepperiIconSystemBolt } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';

import { PepperiCheckboxComponent } from './checkbox.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule
    ],
    exports: [ PepperiCheckboxComponent ],
    declarations: [ PepperiCheckboxComponent ],
})
export class PepperiCheckboxModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemBolt
        ]);
    }
}
