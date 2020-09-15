import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, PepperiIconRegistry, pepperiIconSystemEdit, pepperiIconSystemClose } from '@pepperi-addons/ngx-lib/icon';
import { PepperiTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { QuillModule } from 'ngx-quill';

import { PepperiRichHtmlTextareaComponent } from './rich-html-textarea.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        // External modules
        QuillModule.forRoot(),
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiTextboxIconModule,
        PepperiDialogModule
    ],
    exports: [ PepperiRichHtmlTextareaComponent ],
    declarations: [ PepperiRichHtmlTextareaComponent ],
})
export class PepperiRichHtmlTextareaModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemClose
        ]);
    }
}
