import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, PepperiIconRegistry, pepperiIconArrowUp, pepperiIconArrowDown } from '@pepperi-addons/ngx-lib/icon';

import { GroupButtonsComponent } from './group-buttons.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule
    ],
    exports: [ GroupButtonsComponent ],
    declarations: [ GroupButtonsComponent ],
})
export class PepperiGroupButtonsModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconArrowUp,
            pepperiIconArrowDown
        ]);
    }
}
