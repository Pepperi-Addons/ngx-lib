import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepMenuModule } from '@pepperi-addons/ngx-lib/menu';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemMenu,
    pepIconSystemEdit,
} from '@pepperi-addons/ngx-lib/icon';
import { PepSearchModule } from '@pepperi-addons/ngx-lib/search';

import { PepTopBarComponent } from './top-bar.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        MatMenuModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepMenuModule,
        PepIconModule,
        PepSearchModule,
    ],
    exports: [PepTopBarComponent],
    declarations: [PepTopBarComponent],
})
export class PepTopBarModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemMenu,
            pepIconSystemEdit,
        ]);
    }
}
