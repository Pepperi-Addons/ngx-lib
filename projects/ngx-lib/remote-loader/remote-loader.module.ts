import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { PepRemoteLoaderComponent } from './remote-loader.component';
import { PepAddonBlockLoaderComponent } from './addon-block-loader.component';
import { PepRemoteLoaderService } from './remote-loader.service';

@NgModule({
    declarations: [
        PepRemoteLoaderComponent,
        PepAddonBlockLoaderComponent
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
        PepRemoteLoaderComponent,
        PepAddonBlockLoaderComponent
    ],
    providers: [
        PepRemoteLoaderService
    ]
})
export class PepRemoteLoaderModule {


}
