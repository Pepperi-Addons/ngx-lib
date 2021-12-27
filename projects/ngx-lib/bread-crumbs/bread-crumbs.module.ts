import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconArrowRight,
    pepIconArrowLeft,
} from '@pepperi-addons/ngx-lib/icon';

import { PepBreadCrumbsComponent } from './bread-crumbs.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules
        MatIconModule,
        MatMenuModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule
    ],
    exports: [PepBreadCrumbsComponent],
    declarations: [PepBreadCrumbsComponent]
})
export class PepBreadCrumbsModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconArrowRight,
            pepIconArrowLeft,
        ]);
    }
}
