import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepperiSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';

import { PepperiAddressComponent } from './address.component';

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
        PepperiTextboxModule,
        PepperiSelectModule,
        PepperiFieldTitleModule
    ],
    exports: [ PepperiAddressComponent ],
    declarations: [ PepperiAddressComponent ],
})
export class PepperiAddressModule {}
