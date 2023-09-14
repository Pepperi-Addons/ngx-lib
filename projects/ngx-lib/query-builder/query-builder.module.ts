import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PepSmartFiltersModule } from '@pepperi-addons/ngx-lib/smart-filters';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepGroupButtonsModule } from '@pepperi-addons/ngx-lib/group-buttons';

import { PepQueryBuilderComponent } from './query-builder.component';
import { PepQueryBuilderSectionComponent } from './query-builder-section/query-builder-section.component';
import { PepQueryBuilderItemComponent } from './query-builder-item/query-builder-item.component';

import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemBin,
} from '@pepperi-addons/ngx-lib/icon';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PepSelectModule,
        PepButtonModule,
        PepIconModule,
        PepGroupButtonsModule,
        PepSmartFiltersModule
    ],
    exports: [
        PepQueryBuilderComponent
    ],
    declarations: [
        PepQueryBuilderComponent,
        PepQueryBuilderSectionComponent,
        PepQueryBuilderItemComponent
    ],
    providers: [
        FormBuilder
    ]
})
export class PepQueryBuilderModule { 
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemBin,
        ]);
    }
}
