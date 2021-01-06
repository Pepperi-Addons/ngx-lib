import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { SignaturePadModule } from 'ngx-signaturepad';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemEdit,
    pepIconSystemMenu,
    pepIconNumberPlus,
    pepIconSystemBin,
    pepIconIndicatorDotPlaceholder,
} from '@pepperi-addons/ngx-lib/icon';

import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { PepAddressModule } from '@pepperi-addons/ngx-lib/address';
import { PepAttachmentModule } from '@pepperi-addons/ngx-lib/attachment';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepCheckboxModule } from '@pepperi-addons/ngx-lib/checkbox';
import { PepDateModule } from '@pepperi-addons/ngx-lib/date';
import { PepImageModule } from '@pepperi-addons/ngx-lib/image';
import { PepImagesFilmstripModule } from '@pepperi-addons/ngx-lib/images-filmstrip';
import { PepQuantitySelectorModule } from '@pepperi-addons/ngx-lib/quantity-selector';
import { PepRichHtmlTextareaModule } from '@pepperi-addons/ngx-lib/rich-html-textarea';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepSeparatorModule } from '@pepperi-addons/ngx-lib/separator';
import { PepSignatureModule } from '@pepperi-addons/ngx-lib/signature';
import { PepTextareaModule } from '@pepperi-addons/ngx-lib/textarea';
import { PepTextboxModule } from '@pepperi-addons/ngx-lib/textbox';

import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepGroupButtonsModule } from '@pepperi-addons/ngx-lib/group-buttons';

const pepComponentsModules = [
    PepAddressModule,
    PepAttachmentModule,
    PepButtonModule,
    PepCheckboxModule,
    PepDateModule,
    PepImageModule,
    PepImagesFilmstripModule,
    PepQuantitySelectorModule,
    PepRichHtmlTextareaModule,
    PepSelectModule,
    PepSeparatorModule,
    PepSignatureModule,
    PepTextareaModule,
    PepTextboxModule,
];

import { PepFormComponent } from './form.component';
import { PepFieldGeneratorComponent } from './field-generator.component';
import { PepIndicatorsComponent } from './indicators.component';
import { PepInternalButtonComponent } from './internal-button.component';
import { PepInternalListComponent } from './internal-list.component';
import { PepInternalMenuComponent } from './internal-menu.component';
import { PepInternalPageComponent } from './internal-page.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        // External modules
        SignaturePadModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepDialogModule,
        PepIconModule,
        pepComponentsModules,
        PepFieldTitleModule,
        PepGroupButtonsModule,
    ],
    exports: [PepFormComponent],
    declarations: [
        PepFormComponent,
        PepFieldGeneratorComponent,
        PepIndicatorsComponent,
        PepInternalButtonComponent,
        PepInternalListComponent,
        PepInternalMenuComponent,
        PepInternalPageComponent,
    ],
})
export class PepFormModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemEdit,
            pepIconSystemMenu,
            pepIconNumberPlus,
            pepIconSystemBin,
            pepIconIndicatorDotPlaceholder,
        ]);
    }
}
