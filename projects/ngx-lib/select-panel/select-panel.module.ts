import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PepIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepSelectPanelComponent } from './select-panel.component';

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
        PepFieldTitleModule,
    ],
    exports: [PepSelectPanelComponent],
    declarations: [PepSelectPanelComponent],
})
export class PepSelectPanelModule {}
