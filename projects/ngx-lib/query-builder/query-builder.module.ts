import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PepSmartFiltersModule } from '@pepperi-addons/ngx-lib/smart-filters';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepGroupButtonsModule } from '@pepperi-addons/ngx-lib/group-buttons';

import { PepQueryBuilderService } from './query-builder.service';
import { PepOutputQueryService } from './common/services/output-query.service';
import { PepTypeConvertorService } from './common/services/type-convertor.service';

import { PepQueryBuilderComponent } from './query-builder.component';
import { PepQueryBuilderSectionComponent } from './query-builder-section/query-builder-section.component';
import { PepQueryBuilderItemComponent } from './query-builder-item/query-builder-item.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PepSelectModule,
        PepButtonModule,
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
        PepQueryBuilderService,
        PepOutputQueryService,
        PepTypeConvertorService
    ]
})
export class PepQueryBuilderModule { }
