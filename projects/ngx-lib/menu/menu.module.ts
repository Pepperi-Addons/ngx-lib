import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, PepperiIconRegistry, pepperiIconSystemMenu } from '@pepperi-addons/ngx-lib/icon';

import { PepperiMenuComponent } from './menu.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule
    ],
    exports: [ PepperiMenuComponent ],
    declarations: [ PepperiMenuComponent ],
})
export class PepperiMenuModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemMenu
        ]);
    }
}
