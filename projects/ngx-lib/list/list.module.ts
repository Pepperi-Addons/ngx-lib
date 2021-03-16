import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepBreadCrumbsModule } from '@pepperi-addons/ngx-lib/bread-crumbs';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepCarouselModule } from '@pepperi-addons/ngx-lib/carousel';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconArrowDown,
    pepIconArrowEither,
    pepIconArrowUp,
    pepIconSystemMust,
    pepIconArrowRight,
    pepIconArrowRightAlt,
    pepIconArrowLeft,
    pepIconArrowLeftAlt,
} from '@pepperi-addons/ngx-lib/icon';
import { PepFormModule } from '@pepperi-addons/ngx-lib/form';
import { PepMenuModule } from '@pepperi-addons/ngx-lib/menu';
import { PepTextboxModule } from '@pepperi-addons/ngx-lib/textbox';

import { PepListComponent } from './list.component';
import { PepListActionsComponent } from './list-actions.component';
import { PepListCarouselComponent } from './list-carousel.component';
import { PepListChooserComponent } from './list-chooser.component';
import { PepListPagerComponent } from './list-pager.component';
import { PepListSortingComponent } from './list-sorting.component';
import { PepListTotalComponent } from './list-total.component';
import { PepListViewsComponent } from './list-views.component';

const listComponents = [
    PepListComponent,
    PepListActionsComponent,
    PepListCarouselComponent,
    PepListChooserComponent,
    PepListPagerComponent,
    PepListSortingComponent,
    PepListTotalComponent,
    PepListViewsComponent,
];

// import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { PepVirtualScrollComponent } from './virtual-scroll.component';
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
        PepBreadCrumbsModule,
        PepButtonModule,
        PepCarouselModule,
        PepIconModule,
        PepFormModule,
        PepMenuModule,
        PepTextboxModule,
        // VirtualScrollerModule
    ],
    exports: [listComponents],
    declarations: [PepVirtualScrollComponent, listComponents],
})
export class PepListModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconArrowDown,
            pepIconArrowEither,
            pepIconArrowUp,
            pepIconSystemMust,
            pepIconArrowRight,
            pepIconArrowRightAlt,
            pepIconArrowLeft,
            pepIconArrowLeftAlt,
        ]);
    }
}
