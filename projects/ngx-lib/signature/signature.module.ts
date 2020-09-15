import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { SignaturePadModule } from 'angular2-signaturepad';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import {
    PepperiIconModule,
    PepperiIconRegistry,
    pepperiIconSystemBin,
    pepperiIconSystemSignature,
    pepperiIconSystemClose
} from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiFilesUploaderModule } from '@pepperi-addons/ngx-lib/files-uploader';
import { PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { PepperiSignatureComponent } from './signature.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        // External modules
        SignaturePadModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiFilesUploaderModule,
        PepperiDialogModule
    ],
    exports: [ PepperiSignatureComponent ],
    declarations: [ PepperiSignatureComponent ],
})
export class PepperiSignatureModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemBin,
            pepperiIconSystemSignature,
            pepperiIconSystemClose
        ]);
    }
}
