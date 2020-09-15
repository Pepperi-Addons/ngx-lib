import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PepperiIconModule, PepperiIconRegistry, pepperiIconSystemMust } from '@pepperi-addons/ngx-lib/icon';

import { PepperiFieldTitleComponent } from './field-title.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        // Pepperi modules
        PepperiIconModule
    ],
    exports: [PepperiFieldTitleComponent],
    declarations: [PepperiFieldTitleComponent],
})
export class PepperiFieldTitleModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemMust
        ]);
    }
}
