import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';

import { PepPageLayoutComponent } from './page-layout.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules,
        MatCommonModule,
        // ngx-lib modules
        PepNgxLibModule,
    ],
    exports: [PepPageLayoutComponent],
    declarations: [PepPageLayoutComponent],
})
export class PepPageLayoutModule { }
