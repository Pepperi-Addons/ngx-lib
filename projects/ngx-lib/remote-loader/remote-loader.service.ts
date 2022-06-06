import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import {PepAddonService, PepHttpService, PepSessionService} from '@pepperi-addons/ngx-lib';
import { PepRemoteLoaderOptions } from './remote-loader.model';
import { IAddonBlockLoaderDialogOptions, IAddonBlockLoaderOptions, IBlockLoaderData } from './remote-loader.model';
import { PepAddonBlockLoaderComponent } from './addon-block-loader.component';
import { MatDialogRef } from '@angular/material/dialog';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';
import { ActivatedRoute } from '@angular/router';

@Injectable({ 
    providedIn: 'root' 
})
export class PepRemoteLoaderService {
    
    constructor(
        private httpService: PepHttpService,
        private sessionService: PepSessionService,
        private addonService: PepAddonService,
        private route: ActivatedRoute,
    ) {
        //
    }

    getRemoteLoaderOptions(blockLoaderData: IBlockLoaderData, remoteEntry = ''): PepRemoteLoaderOptions {
        return {
            addonId: blockLoaderData.relation.AddonUUID,
            remoteEntry: remoteEntry.length > 0 ? remoteEntry : `${blockLoaderData.addonPublicBaseURL}${blockLoaderData.relation.AddonRelativeURL}.js`,
            remoteName: blockLoaderData.relation.AddonRelativeURL,
            exposedModule: `./${blockLoaderData.relation.ModuleName}`,
            componentName: blockLoaderData.relation.ComponentName, 
        }
    }

    private getAddonBaseUrl(addonUUID: string, fileName = 'api'): string {
        // For devServer run server on localhost.
        const devServer = this.route.snapshot.queryParamMap.get('devServer') === 'true';
        if(devServer) {
            return `http://localhost:4500/${fileName}`;
        } else {
            const baseUrl = this.sessionService.getPapiBaseUrl();
            return `${baseUrl}/addons/api/${addonUUID}/${fileName}`;
        }
    }
    
    async getBlockRemoteLoaderOptions(name: string): Promise<PepRemoteLoaderOptions> {
        return new Promise((resolve, reject) => {
            const pagesAddonUuid = this.addonService.getPagesAddonUUID();
            const pagesBaseUrl = this.getAddonBaseUrl(pagesAddonUuid, 'addon_blocks');
            const url = `${pagesBaseUrl}/get_addon_block_loader_data?name=${name}`;
            this.httpService.getHttpCall(url).toPromise().then((data: IBlockLoaderData) => {
                if (data) {
                    resolve(this.getRemoteLoaderOptions(data));
                } else {
                    reject(`Addon block with name - ${name} is not found`);
                }
            }); 
        });
    }
}
