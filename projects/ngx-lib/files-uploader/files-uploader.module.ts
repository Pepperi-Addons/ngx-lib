import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { FileUploadModule } from 'ng2-file-upload';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import {
    PepperiIconModule,
    PepperiIconRegistry,
    pepperiIconSystemBin,
    pepperiIconSystemAttach,
    pepperiIconSystemFileUploadCloud,
    pepperiIconSystemProcessing
} from '@pepperi-addons/ngx-lib/icon';
import { PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { FilesUploaderComponent } from './files-uploader.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // External modules
        FileUploadModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiDialogModule
    ],
    exports: [FilesUploaderComponent],
    declarations: [FilesUploaderComponent],
})
export class PepperiFilesUploaderModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemBin,
            pepperiIconSystemAttach,
            pepperiIconSystemFileUploadCloud,
            pepperiIconSystemProcessing
        ]);
    }
}
