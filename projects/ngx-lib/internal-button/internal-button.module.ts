import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import {
    PepperiIconModule,
    PepperiIconRegistry,
    pepperiIconSystemEdit,
    pepperiIconSystemMenu,
    pepperiIconNumberPlus
} from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiGroupButtonsModule } from '@pepperi-addons/ngx-lib/group-buttons';

import { PepperiInternalButtonComponent } from './internal-button.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatFormFieldModule,
        MatCommonModule,
        MatButtonModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiGroupButtonsModule
    ],
    exports: [ PepperiInternalButtonComponent ],
    declarations: [ PepperiInternalButtonComponent ],
})
export class PepperiInternalButtonModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemMenu,
            pepperiIconNumberPlus
        ]);
    }
}
