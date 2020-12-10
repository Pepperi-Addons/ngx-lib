import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconArrowDown,
    pepIconArrowEither,
    pepIconArrowUp,
    pepIconSystemMust
} from '@pepperi-addons/ngx-lib/icon';
import { PepFormModule } from '@pepperi-addons/ngx-lib/form';
import { PepMenuModule } from '@pepperi-addons/ngx-lib/menu';
import { PepBreadCrumbsModule } from '@pepperi-addons/ngx-lib/bread-crumbs';

import { VirtualScrollModule } from './virtual-scroll.component';

import { PepListComponent } from './list.component';
import { PepListActionsComponent } from './list-actions.component';
import { PepListChooserComponent } from './list-chooser.component';
import { PepListTotalComponent } from './list-total.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        MatMenuModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
        PepFormModule,
        PepMenuModule,
        PepBreadCrumbsModule,
        VirtualScrollModule
    ],
    exports: [ PepListComponent, PepListActionsComponent, PepListChooserComponent, PepListTotalComponent ],
    declarations: [ PepListComponent, PepListActionsComponent, PepListChooserComponent, PepListTotalComponent ],
})
export class PepListModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconArrowDown,
            pepIconArrowEither,
            pepIconArrowUp,
            pepIconSystemMust
        ]);
    }
}
