import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';

import { PepSliderComponent } from './slider.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules
        MatCommonModule,
        MatSliderModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepFieldTitleModule,
    ],
    exports: [PepSliderComponent],
    declarations: [PepSliderComponent],
})
export class PepSliderModule { }
