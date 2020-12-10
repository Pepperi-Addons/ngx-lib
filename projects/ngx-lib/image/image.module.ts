import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemMenu,
    pepIconSystemBolt,
    pepIconIndicatorDotPlaceholder
} from '@pepperi-addons/ngx-lib/icon';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepFilesUploaderModule } from '@pepperi-addons/ngx-lib/files-uploader';

import { PepImageComponent } from './image.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
        PepFieldTitleModule,
        PepFilesUploaderModule,
    ],
    exports: [ PepImageComponent ],
    declarations: [ PepImageComponent ],
})
export class PepImageModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemMenu,
            pepIconSystemBolt,
            pepIconIndicatorDotPlaceholder
        ]);
    }
}
