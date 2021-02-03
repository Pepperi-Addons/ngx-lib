import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

// import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconNumberCoins,
    pepIconNumberPercent,
    pepIconNumberNumber,
    pepIconNumberDecimal,
    pepIconSystemPhone,
    pepIconSystemEmail,
    pepIconSystemLink,
    pepIconSystemFullScreen,
    pepIconSystemEdit,
    pepIconTimeDatetime,
    pepIconTimeCal,
} from '@pepperi-addons/ngx-lib/icon';

import { PepTextboxIconComponent } from './textbox-icon.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        // ngx-lib modules
        PepIconModule,
    ],
    exports: [PepTextboxIconComponent],
    declarations: [PepTextboxIconComponent],
})
export class PepTextboxIconModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconNumberCoins,
            pepIconNumberPercent,
            pepIconNumberNumber,
            pepIconNumberDecimal,
            pepIconSystemPhone,
            pepIconSystemEmail,
            pepIconSystemLink,
            pepIconSystemFullScreen,
            pepIconSystemEdit,
            pepIconTimeDatetime,
            pepIconTimeCal,
        ]);
    }
}
