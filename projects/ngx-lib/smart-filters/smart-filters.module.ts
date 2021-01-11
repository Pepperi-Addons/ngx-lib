import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconNumberMinus,
    pepIconNumberPlus,
} from '@pepperi-addons/ngx-lib/icon';

import { PepSmartFiltersComponent } from './smart-filters.component';
import { PepSmartFilterBooleanComponent } from './smart-filter-boolean.component';
import { PepSmartFilterDateComponent } from './smart-filter-date.component';
import { PepSmartFilterDistinctValuesComponent } from './smart-filter-distinct-values.component';
import { PepSmartFilterNumberComponent } from './smart-filter-number.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatCheckboxModule,
        MatChipsModule,
        MatExpansionModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
    ],
    exports: [PepSmartFiltersComponent],
    declarations: [
        PepSmartFiltersComponent,
        PepSmartFilterBooleanComponent,
        PepSmartFilterDateComponent,
        PepSmartFilterDistinctValuesComponent,
        PepSmartFilterNumberComponent,
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
