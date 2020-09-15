import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiFilesUploaderModule } from '@pepperi-addons/ngx-lib/files-uploader';

import { PepperiAttachmentComponent } from './attachment.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        // Pepperi modules
        PepperiModule,
        PepperiFieldTitleModule,
        PepperiFilesUploaderModule
    ],
    exports: [ PepperiAttachmentComponent ],
    declarations: [ PepperiAttachmentComponent ],
})
export class PepperiAttachmentModule {}
