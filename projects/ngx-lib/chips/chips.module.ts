import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER, TAB, SEMICOLON } from '@angular/cdk/keycodes';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { 
    PepIconModule,
    PepIconRegistry,
    pepIconSystemBolt,
    pepIconSystemClose
} from '@pepperi-addons/ngx-lib/icon';

import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepChipsComponent } from './chips.component';

const pepIcons = [
    pepIconSystemBolt,
    pepIconSystemClose
];


@NgModule({
    declarations: [PepChipsComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,        
        MatCommonModule,
        MatFormFieldModule,
        MatChipsModule,
        MatIconModule,
        PepNgxLibModule,
        PepIconModule,
        PepFieldTitleModule,        
        PepButtonModule
    ],
    exports: [PepChipsComponent],
    providers: [
        {
          provide: MAT_CHIPS_DEFAULT_OPTIONS,
          useValue: {
            separatorKeyCodes: [ENTER, COMMA]
          }
        }
      ]    
})
export class PepChipsModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons(pepIcons);
    }
}
