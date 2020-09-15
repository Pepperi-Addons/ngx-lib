import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import {
    PepperiIconModule,
    PepperiIconRegistry,
    pepperiIconArrowDown,
    pepperiIconArrowEither,
    pepperiIconArrowUp
} from '@pepperi-addons/ngx-lib/icon';
import { PepperiFormModule } from '@pepperi-addons/ngx-lib/form';

import { VirtualScrollModule } from './virtual-scroll.component';

import { PepperiListComponent } from './list.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFormModule,
        VirtualScrollModule
    ],
    exports: [ PepperiListComponent ],
    declarations: [ PepperiListComponent ],
})
export class PepperiListModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconArrowDown,
            pepperiIconArrowEither,
            pepperiIconArrowUp
        ]);
    }
}
