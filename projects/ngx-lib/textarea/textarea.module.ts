import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemEdit,
    pepIconSystemClose,
} from '@pepperi-addons/ngx-lib/icon';
import { PepTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { PepTextareaComponent } from './textarea.component';

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
        MatDialogModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
        PepFieldTitleModule,
        PepTextboxIconModule,
        PepDialogModule,
    ],
    exports: [PepTextareaComponent],
    declarations: [PepTextareaComponent],
})
export class PepTextareaModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemEdit,
            pepIconSystemClose,
        ]);
    }
}
