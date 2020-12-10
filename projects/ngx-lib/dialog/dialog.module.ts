import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepIconModule, PepIconRegistry, pepIconSystemClose } from '@pepperi-addons/ngx-lib/icon';

import { PepDefaultDialogComponent } from './default-dialog.component';
import { PepDialogComponent } from './dialog.component';

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
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule
    ],
    exports: [ PepDialogComponent ],
    declarations: [PepDefaultDialogComponent, PepDialogComponent],
})
export class PepDialogModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemClose
        ]);
    }
}
