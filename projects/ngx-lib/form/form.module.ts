import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { SignaturePadModule } from 'angular2-signaturepad';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import {
    PepperiIconModule,
    PepperiIconRegistry,
    pepperiIconIndicatorDotPlaceholder } from '@pepperi-addons/ngx-lib/icon';

import { PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { PepperiAddressModule } from '@pepperi-addons/ngx-lib/address';
import { PepperiAttachmentModule } from '@pepperi-addons/ngx-lib/attachment';
import { PepperiCheckboxModule } from '@pepperi-addons/ngx-lib/checkbox';
import { PepperiDateModule } from '@pepperi-addons/ngx-lib/date';
import { PepperiImageModule } from '@pepperi-addons/ngx-lib/image';
import { PepperiImagesFilmstripModule } from '@pepperi-addons/ngx-lib/images-filmstrip';
import { PepperiInternalButtonModule } from '@pepperi-addons/ngx-lib/internal-button';
// import { PepperiInternalPageModule } from '@pepperi-addons/ngx-lib/internal-page';
import { PepperiMenuModule } from '@pepperi-addons/ngx-lib/menu';
import { PepperiQuantitySelectorModule } from '@pepperi-addons/ngx-lib/quantity-selector';
import { PepperiRichHtmlTextareaModule } from '@pepperi-addons/ngx-lib/rich-html-textarea';
import { PepperiSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepperiSeparatorModule } from '@pepperi-addons/ngx-lib/separator';
import { PepperiSignatureModule } from '@pepperi-addons/ngx-lib/signature';
import { PepperiTextareaModule } from '@pepperi-addons/ngx-lib/textarea';
import { PepperiTextboxModule } from '@pepperi-addons/ngx-lib/textbox';

const pepperiComponentsModules = [
    PepperiAddressModule,
    PepperiAttachmentModule,
    PepperiCheckboxModule,
    PepperiDateModule,
    PepperiImageModule,
    PepperiImagesFilmstripModule,
    PepperiInternalButtonModule,
    // PepperiInternalPageModule,
    PepperiMenuModule,
    PepperiQuantitySelectorModule,
    PepperiRichHtmlTextareaModule,
    PepperiSelectModule,
    PepperiSeparatorModule,
    PepperiSignatureModule,
    PepperiTextareaModule,
    PepperiTextboxModule,
];

import { PepperiFormComponent } from './form.component';
import { PepperiFieldGeneratorComponent } from './field-generator.component';
import { PepperiIndicatorsComponent } from './indicators.component';
import { PepperiInternalPageComponent } from './internal-page.component';
import { PepperiInternalListComponent } from './internal-list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        // External modules
        SignaturePadModule,
        // Pepperi modules
        PepperiModule,
        PepperiDialogModule,
        PepperiIconModule,
        pepperiComponentsModules,
    ],
    exports: [PepperiFormComponent],
    declarations: [
        PepperiFormComponent,
        PepperiFieldGeneratorComponent,
        PepperiIndicatorsComponent,
        PepperiInternalPageComponent,
        PepperiInternalListComponent
    ],
})
export class PepperiFormModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconIndicatorDotPlaceholder
        ]);
    }
}
