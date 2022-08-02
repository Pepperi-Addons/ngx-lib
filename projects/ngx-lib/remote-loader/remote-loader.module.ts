import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';

import { PepAddonBlockLoaderComponent } from './addon-block-loader.component';
import { PepAddonBlockLoaderService } from './addon-block-loader.service';

import { PepRemoteLoaderComponent } from './remote-loader.component';
import { PepRemoteLoaderService } from './remote-loader.service';
import { PepRemoteLoaderElementComponent } from './remote-loader-element.component';

@NgModule({
    declarations: [
        PepAddonBlockLoaderComponent,
        PepRemoteLoaderComponent,
        PepRemoteLoaderElementComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ModuleFederationToolsModule,
        // Material modules,
        MatDialogModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepDialogModule,
    ],
    exports: [
        PepAddonBlockLoaderComponent,
        PepRemoteLoaderComponent,
        PepRemoteLoaderElementComponent
    ],
    providers: [
        PepAddonBlockLoaderService,
        PepRemoteLoaderService
    ]
})
export class PepRemoteLoaderModule {


}
