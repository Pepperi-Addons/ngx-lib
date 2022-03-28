import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemClose,
} from '@pepperi-addons/ngx-lib/icon';

import { PepDefaultSnackBarComponent } from './default-snack-bar.component';
import { PepSnackBarComponent } from './snack-bar.component';
import { PepSnackBarService } from './snack-bar.service';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepButtonModule,
        PepIconModule,
    ],
    exports: [PepSnackBarComponent],
    declarations: [PepDefaultSnackBarComponent, PepSnackBarComponent],
    entryComponents: [PepDefaultSnackBarComponent],
    providers: [PepSnackBarService]
})
export class PepSnackBarModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([pepIconSystemClose]);
    }
}
