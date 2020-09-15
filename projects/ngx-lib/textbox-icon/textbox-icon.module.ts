
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

// import { PepperiModule } from '@pepperi-addons/ngx-lib';
import {
    PepperiIconModule,
    PepperiIconRegistry,
    pepperiIconNumberCoins,
    pepperiIconNumberPercent,
    pepperiIconNumberNumber,
    pepperiIconNumberDecimal,
    pepperiIconSystemPhone,
    pepperiIconSystemEmail,
    pepperiIconSystemLink,
    pepperiIconSystemFullScreen,
    pepperiIconSystemEdit,
    pepperiIconTimeDatetime,
    pepperiIconTimeCal
} from '@pepperi-addons/ngx-lib/icon';

import { PepperiTextboxIconComponent} from './textbox-icon.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        // Pepperi modules
        PepperiIconModule
    ],
    exports: [PepperiTextboxIconComponent],
    declarations: [PepperiTextboxIconComponent],
})
export class PepperiTextboxIconModule {

    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconNumberCoins,
            pepperiIconNumberPercent,
            pepperiIconNumberNumber,
            pepperiIconNumberDecimal,
            pepperiIconSystemPhone,
            pepperiIconSystemEmail,
            pepperiIconSystemLink,
            pepperiIconSystemFullScreen,
            pepperiIconSystemEdit,
            pepperiIconTimeDatetime,
            pepperiIconTimeCal
        ]);
    }
}
