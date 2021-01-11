import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PepIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';

import { PepButtonComponent } from './button.component';

@NgModule({
    imports: [
        CommonModule,
        // Material modules
        MatCommonModule,
        MatButtonModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
    ],
    exports: [PepButtonComponent],
    declarations: [PepButtonComponent],
})
export class PepButtonModule {}
