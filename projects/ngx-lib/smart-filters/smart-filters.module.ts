import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCommonModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepCheckboxModule } from '@pepperi-addons/ngx-lib/checkbox';
import { PepDateModule } from '@pepperi-addons/ngx-lib/date';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepSearchModule } from '@pepperi-addons/ngx-lib/search';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconNumberMinus,
    pepIconNumberPlus,
} from '@pepperi-addons/ngx-lib/icon';

// import { BaseFilterComponent } from './common/model/base-filter-component';
import { PepSmartFiltersComponent } from './smart-filters.component';
import { PepFilterActionsComponent } from './common/filter-actions.component';
import { PepBooleanFilterComponent } from './boolean-filter/boolean-filter.component';
import { PepDateFilterComponent } from './date-filter/date-filter.component';
import { PepMultiSelectFilterComponent } from './multi-select-filter/multi-select-filter.component';
import { PepNumberFilterComponent } from './number-filter/number-filter.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        // Material modules
        MatCommonModule,
        MatCheckboxModule,
        MatChipsModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        // External modules
        VirtualScrollerModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepCheckboxModule,
        PepDateModule,
        PepSelectModule,
        PepTextboxModule,
        PepSearchModule,
        PepIconModule,
    ],
    exports: [PepSmartFiltersComponent],
    declarations: [
        // BaseFilterComponent,
        PepSmartFiltersComponent,
        PepFilterActionsComponent,
        PepBooleanFilterComponent,
        PepDateFilterComponent,
        PepMultiSelectFilterComponent,
        PepNumberFilterComponent,
    ],
})
export class PepSmartFiltersModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconNumberMinus,
            pepIconNumberPlus,
        ]);
    }
}
