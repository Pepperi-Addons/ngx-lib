import { Injectable } from '@angular/core';
import { PepAddonService, PepHttpService, PepSessionService} from '@pepperi-addons/ngx-lib';
import { PepBlockDataType, PepRemoteLoaderOptions } from './remote-loader.model';
import { IBlockLoaderData } from './remote-loader.model';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

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

    getRemoteLoaderOptions(blockLoaderData: IBlockLoaderData, blockRemoteEntry = '', type: 'script' | 'module' | 'manifest' = 'module'): PepRemoteLoaderOptions {
        const exposedModule = blockLoaderData.relation.ElementsModule?.length > 0 ? blockLoaderData.relation.ElementsModule : blockLoaderData.relation.ModuleName;
        const res = {
            type: type,
            remoteEntry: blockRemoteEntry.length > 0 ? blockRemoteEntry : `${blockLoaderData.addonPublicBaseURL}${blockLoaderData.relation.AddonRelativeURL}.js`,
            remoteName: blockLoaderData.relation.AddonRelativeURL, // For script type, this is the name of the script.
            exposedModule: `./${exposedModule}`,
            addonId: blockLoaderData.relation.AddonUUID, // For local use (adding the relative path to the assets).
        }
        
        // If it's web components
        if (blockLoaderData.relation.ElementsModule?.length > 0) {
            res['elementName'] = blockLoaderData.relation.ElementName
        } else { // For load the component from the module.
            res['componentName'] = blockLoaderData.relation.ComponentName; 
        }

        return res;
    }

    private getBlockLoaderDataUrl(name: string, blockType: PepBlockDataType = 'AddonBlock', addonUUID = '', pagesDevServer = ''): string {
        const fileName = 'addon_blocks';
        const pagesAddonUuid = this.addonService.getPagesAddonUUID();
        let pagesBaseUrl;

        // For devServer run server on localhost.
        if(pagesDevServer.length > 0) {
            pagesBaseUrl = `${pagesDevServer}/${fileName}`;
        } else {
            const baseUrl = this.sessionService.getPapiBaseUrl();
            pagesBaseUrl = `${baseUrl}/addons/api/${pagesAddonUuid}/${fileName}`;
        }

        const url = `${pagesBaseUrl}/get_addon_block_loader_data?name=${name}&blockType=${blockType}&addonUUID=${addonUUID}`;
        return url;
    }

    async getBlockRemoteLoaderOptions(name: string, blockType: PepBlockDataType = 'AddonBlock', addonUUID = '', blockRemoteEntry = '', pagesDevServer = ''): Promise<PepRemoteLoaderOptions> {
        return new Promise((resolve, reject) => {
            const blockLoaderDataUrl = this.getBlockLoaderDataUrl(name, blockType, addonUUID, pagesDevServer);
            firstValueFrom(this.httpService.getHttpCall(blockLoaderDataUrl)).then((data: IBlockLoaderData) => {
                resolve(this.getRemoteLoaderOptions(data, blockRemoteEntry));
            }).catch(err => {
                reject(`Addon block with name - ${name} is not found for type - ${blockType}`);
            }); 
        });
    }
}
