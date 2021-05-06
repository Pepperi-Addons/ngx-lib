import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepFilesUploaderModule } from '@pepperi-addons/ngx-lib/files-uploader';

import { PepAttachmentComponent } from './attachment.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepFieldTitleModule,
        PepFilesUploaderModule,
    ],
    exports: [PepAttachmentComponent],
    declarations: [PepAttachmentComponent],
})
export class PepAttachmentModule { }
