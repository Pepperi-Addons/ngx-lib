import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemMenu,
    pepIconArrowRight,
} from '@pepperi-addons/ngx-lib/icon';

import { PepMenuComponent } from './menu.component';
import { PepMenuItemComponent } from './menu-item.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
    ],
    exports: [PepMenuComponent],
    declarations: [PepMenuComponent, PepMenuItemComponent],
})
export class PepMenuModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemMenu,
            pepIconArrowRight,
        ]);
    }
}
