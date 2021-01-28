import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemMust,
} from '@pepperi-addons/ngx-lib/icon';

import { PepFieldTitleComponent } from './field-title.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        MatIconModule,
        MatFormFieldModule,
        // ngx-lib modules
        PepIconModule,
    ],
    exports: [PepFieldTitleComponent],
    declarations: [PepFieldTitleComponent],
})
export class PepFieldTitleModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([pepIconSystemMust]);
    }
}
