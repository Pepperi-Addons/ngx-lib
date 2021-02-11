import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import {
    PepIconModule,
    PepIconRegistry,
    pepIconArrowRight,
    pepIconArrowLeft,
} from '@pepperi-addons/ngx-lib/icon';
import { PepMenuModule } from '@pepperi-addons/ngx-lib/menu';

import { PepBreadCrumbsComponent } from './bread-crumbs.component';
import { from } from 'rxjs';

@NgModule({
    imports: [
        CommonModule,
        // Material modules
        MatIconModule,
        MatMenuModule,
        // ngx-lib modules
        PepIconModule,
        // PepMenuModule
    ],
    exports: [PepBreadCrumbsComponent],
    declarations: [PepBreadCrumbsComponent],
})
export class PepBreadCrumbsModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconArrowRight,
            pepIconArrowLeft,
        ]);
    }
}
