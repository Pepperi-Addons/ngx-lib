import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { PepAddonBlockLoaderComponent } from './addon-block-loader.component';
import { PepAddonBlockLoaderService } from './addon-block-loader.service';

import { PepRemoteLoaderComponent } from './remote-loader.component';
import { PepRemoteLoaderService } from './remote-loader.service';

@NgModule({
    declarations: [
        PepAddonBlockLoaderComponent,
        PepRemoteLoaderComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        // Material modules,
        MatDialogModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepDialogModule,
    ],
    exports: [
        PepAddonBlockLoaderComponent,
        PepRemoteLoaderComponent,
    ],
    providers: [
        PepAddonBlockLoaderService,
        PepRemoteLoaderService
    ]
})
export class PepRemoteLoaderModule {


}
