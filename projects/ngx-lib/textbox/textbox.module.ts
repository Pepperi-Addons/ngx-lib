import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemEdit,
} from '@pepperi-addons/ngx-lib/icon';
import { PepTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';

import { PepTextboxComponent } from './textbox.component';
import { PepTextboxValidationDirective } from './textbox-validation.directive';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
        PepFieldTitleModule,
        PepTextboxIconModule,
    ],
    exports: [PepTextboxComponent],
    declarations: [PepTextboxComponent, PepTextboxValidationDirective],
})
export class PepTextboxModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([pepIconSystemEdit]);
    }
}
