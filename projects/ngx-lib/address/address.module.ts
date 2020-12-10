import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';

import { PepAddressComponent } from './address.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepTextboxModule,
        PepSelectModule,
        PepFieldTitleModule
    ],
    exports: [ PepAddressComponent ],
    declarations: [ PepAddressComponent ],
})
export class PepAddressModule {}
