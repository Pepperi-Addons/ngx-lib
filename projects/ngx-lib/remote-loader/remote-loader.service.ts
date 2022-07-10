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
        return {
            type: type,
            remoteEntry: blockRemoteEntry.length > 0 ? blockRemoteEntry : `${blockLoaderData.addonPublicBaseURL}${blockLoaderData.relation.AddonRelativeURL}.js`,
            exposedModule: `./${blockLoaderData.relation.ModuleName}`,
            componentName: blockLoaderData.relation.ComponentName, // For load the component from the module.
            remoteName: blockLoaderData.relation.AddonRelativeURL, // For script type, this is the name of the script.
            addonId: blockLoaderData.relation.AddonUUID, // For local use (adding the relative path to the assets).
        }
    }

    private getBlockLoaderDataUrl(name: string, blockType: PepBlockDataType = 'AddonBlock', pagesDevServer = ''): string {
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

        const url = `${pagesBaseUrl}/get_addon_block_loader_data?name=${name}&blockType=${blockType}`;
        return url;
    }

    
    async getBlockRemoteLoaderOptions(name: string, blockType: PepBlockDataType = 'AddonBlock', blockRemoteEntry = '', pagesDevServer = ''): Promise<PepRemoteLoaderOptions> {
        return new Promise((resolve, reject) => {
            const blockLoaderDataUrl = this.getBlockLoaderDataUrl(name, blockType, pagesDevServer);
            firstValueFrom(this.httpService.getHttpCall(blockLoaderDataUrl)).then((data: IBlockLoaderData) => {
                resolve(this.getRemoteLoaderOptions(data, blockRemoteEntry));
            }).catch(err => {
                reject(`Addon block with name - ${name} is not found for type - ${blockType}`);
            }); 
        });
    }
}
