import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, PepperiIconRegistry, pepperiIconSystemClose } from '@pepperi-addons/ngx-lib/icon';

import { PepperiDefaultDialogComponent } from './dialog.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule
    ],
    exports: [ ],
    declarations: [PepperiDefaultDialogComponent],
})
export class PepperiDialogModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemClose
        ]);
    }
}
