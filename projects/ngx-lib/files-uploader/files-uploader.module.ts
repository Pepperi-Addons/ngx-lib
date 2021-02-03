import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { FileUploadModule } from 'ng2-file-upload';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemBin,
    pepIconSystemAttach,
    pepIconSystemFileUploadCloud,
    pepIconSystemProcessing,
} from '@pepperi-addons/ngx-lib/icon';
import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { PepFilesUploaderComponent } from './files-uploader.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // External modules
        FileUploadModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
        PepDialogModule,
    ],
    exports: [PepFilesUploaderComponent],
    declarations: [PepFilesUploaderComponent],
})
export class PepFilesUploaderModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemBin,
            pepIconSystemAttach,
            pepIconSystemFileUploadCloud,
            pepIconSystemProcessing,
        ]);
    }
}
