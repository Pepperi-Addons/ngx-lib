import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepIconModule, PepIconRegistry, pepIconSystemClose } from '@pepperi-addons/ngx-lib/icon';

import { PepSideBarComponent } from './side-bar.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        MatIconModule,
        MatSidenavModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule
    ],
    exports: [ PepSideBarComponent ],
    declarations: [ PepSideBarComponent ],
})
export class PepSideBarModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemClose
        ]);
    }
}
