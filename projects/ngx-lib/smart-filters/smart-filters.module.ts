
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepIconModule, PepIconRegistry, pepIconNumberMinus, pepIconNumberPlus } from '@pepperi-addons/ngx-lib/icon';

import { SmartFiltersComponent} from './smart-filters.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule
    ],
    exports: [SmartFiltersComponent],
    declarations: [SmartFiltersComponent],
})
export class PepSmartFiltersModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconNumberMinus,
            pepIconNumberPlus
        ]);
    }
}