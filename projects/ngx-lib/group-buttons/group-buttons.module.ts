import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconArrowUp,
    pepIconArrowDown,
} from '@pepperi-addons/ngx-lib/icon';

import { PepGroupButtonsComponent } from './group-buttons.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
    ],
    exports: [PepGroupButtonsComponent],
    declarations: [PepGroupButtonsComponent],
})
export class PepGroupButtonsModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([pepIconArrowUp, pepIconArrowDown]);
    }
}
