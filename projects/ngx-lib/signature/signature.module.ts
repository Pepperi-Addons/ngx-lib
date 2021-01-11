import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { SignaturePadModule } from 'ngx-signaturepad';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemBin,
    pepIconSystemSignature,
    pepIconSystemClose,
} from '@pepperi-addons/ngx-lib/icon';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepFilesUploaderModule } from '@pepperi-addons/ngx-lib/files-uploader';
import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { PepSignatureComponent } from './signature.component';

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
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
        PepFieldTitleModule,
        PepFilesUploaderModule,
        PepDialogModule,
    ],
    exports: [PepSignatureComponent],
    declarations: [PepSignatureComponent],
})
export class PepSignatureModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemBin,
            pepIconSystemSignature,
            pepIconSystemClose,
        ]);
    }
}
