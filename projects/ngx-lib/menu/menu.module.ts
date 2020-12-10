import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepIconModule, PepIconRegistry, pepIconSystemMenu } from '@pepperi-addons/ngx-lib/icon';

import { PepMenuComponent } from './menu.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule
    ],
    exports: [ PepMenuComponent ],
    declarations: [ PepMenuComponent ],
})
export class PepMenuModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemMenu
        ]);
    }
}
