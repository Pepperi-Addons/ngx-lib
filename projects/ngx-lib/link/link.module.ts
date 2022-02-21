import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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

import { PepLinkComponent } from './link.component';
//import { PepTextboxValidationDirective } from './textbox-validation.directive';

import { IsUrlPipe } from './link.pipes';

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
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
        PepFieldTitleModule,
        PepTextboxIconModule,
    ],
    exports: [PepLinkComponent],
    declarations: [
        PepLinkComponent,
        //   PepTextboxValidationDirective,
        IsUrlPipe
    ],
    providers: [IsUrlPipe]
})
export class PepLinkModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([pepIconSystemEdit]);
    }
}
