import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemBolt,
} from '@pepperi-addons/ngx-lib/icon';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';

import { PepChipComponent } from './chip.component';

@NgModule({
    declarations: [PepChipComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatChipsModule,
        MatIconModule,

        PepNgxLibModule,
        PepIconModule,
        PepFieldTitleModule,
    ],
    exports: [PepChipComponent]    
})
export class PepChipModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([pepIconSystemBolt]);
    }
}
