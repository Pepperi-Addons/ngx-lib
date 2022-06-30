import { Injectable } from '@angular/core';
import { PepAddonService, PepHttpService, PepSessionService} from '@pepperi-addons/ngx-lib';
import { PepBlockDataType, PepRemoteLoaderOptions } from './remote-loader.model';
import { IBlockLoaderData } from './remote-loader.model';
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

    getRemoteLoaderOptions(blockLoaderData: IBlockLoaderData, remoteEntry = '', type: 'script' | 'module' | 'manifest' = 'module'): PepRemoteLoaderOptions {
        return {
            type: type,
            remoteEntry: remoteEntry.length > 0 ? remoteEntry : `${blockLoaderData.addonPublicBaseURL}${blockLoaderData.relation.AddonRelativeURL}.js`,
            exposedModule: `./${blockLoaderData.relation.ModuleName}`,
            componentName: blockLoaderData.relation.ComponentName, // For load the component from the module.
            remoteName: blockLoaderData.relation.AddonRelativeURL, // For script type, this is the name of the script.
            addonId: blockLoaderData.relation.AddonUUID, // For local use (adding the relative path to the assets).
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
    
    async getBlockRemoteLoaderOptions(name: string, blockType: PepBlockDataType = 'AddonBlock', remoteEntry = ''): Promise<PepRemoteLoaderOptions> {
        return new Promise((resolve, reject) => {
            const pagesAddonUuid = this.addonService.getPagesAddonUUID();
            const pagesBaseUrl = this.getAddonBaseUrl(pagesAddonUuid, 'addon_blocks');
            const url = `${pagesBaseUrl}/get_addon_block_loader_data?name=${name}&blockType=${blockType}`;
            this.httpService.getHttpCall(url).toPromise().then((data: IBlockLoaderData) => {
                resolve(this.getRemoteLoaderOptions(data, remoteEntry));
            }).catch(err => {
                reject(`Addon block with name - ${name} is not found for type - ${blockType}`);
            }); 
        });
    }
}
