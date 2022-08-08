import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Injectable } from '@angular/core';
import { PepAddonService, PepHttpService, PepSessionService} from '@pepperi-addons/ngx-lib';
import { IPepRemoteLoaderParamsOptions, PepRemoteLoaderOptions } from './remote-loader.model';
import { IBlockLoaderData } from './remote-loader.model';

@Injectable({ 
    providedIn: 'root' 
})
export class PepRemoteLoaderService {
    
    constructor(
        private httpService: PepHttpService,
        private sessionService: PepSessionService,
        private addonService: PepAddonService
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

    private getBlockLoaderDataUrl(options: IPepRemoteLoaderParamsOptions): string {
        const fileName = 'addon_blocks';
        const pagesAddonUuid = this.addonService.getPagesAddonUUID();
        let pagesBaseUrl;

        // For devServer run server on localhost.
        if(options.pagesDevServer?.length > 0) {
            pagesBaseUrl = `${options.pagesDevServer}/${fileName}`;
        } else {
            const baseUrl = this.sessionService.getPapiBaseUrl();
            pagesBaseUrl = `${baseUrl}/addons/api/${pagesAddonUuid}/${fileName}`;
        }

        const url = `${pagesBaseUrl}/get_addon_block_loader_data?name=${options.name}&slugName=${options.slugName}&blockType=${options.blockType}&addonUUID=${options.addonUUID}`;
        return url;
    }

    async getBlockRemoteLoaderOptions(options: IPepRemoteLoaderParamsOptions): Promise<PepRemoteLoaderOptions> {
        options.blockType = options.blockType ?? 'AddonBlock';
        options.name = options.name ?? '';
        options.slugName = options.slugName ?? '';
        options.addonUUID = options.addonUUID ?? '';

        return new Promise((resolve, reject) => {
            if (options.name?.length > 0 || (options.slugName?.length > 0 && options.blockType === 'SettingsBlock')) {
                const blockLoaderDataUrl = this.getBlockLoaderDataUrl(options);
                this.httpService.getHttpCall(blockLoaderDataUrl).toPromise().then((data: IBlockLoaderData) => {
                    const ngVersionNumber = coerceNumberProperty(data.relation?.SubType?.toLocaleLowerCase().replace('ng', ''), 14);
                    const type = ngVersionNumber >= 14 ? 'module' : 'script';

                    resolve(this.getRemoteLoaderOptions(data, options.blockRemoteEntry, type));
                }).catch(err => {
                    reject(`Addon block with name - ${options.name} is not found for type - ${options.blockType}`);
                });
            } else {
                if (options.blockType === 'SettingsBlock') {
                    reject(`name is not supplied`);
                }
                else {
                    reject(`slugName is not supplied`);
                }
            }
        });
    }
}
