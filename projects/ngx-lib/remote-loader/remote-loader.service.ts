import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import {PepAddonService, PepHttpService, PepSessionService} from '@pepperi-addons/ngx-lib';
import { PepRemoteLoaderOptions } from './remote-loader.model';
import { IAddonBlockLoaderDialogOptions, IAddonBlockLoaderOptions, IBlockLoaderData } from './remote-loader.model';
import { PepAddonBlockLoaderComponent } from './addon-block-loader.component';
import { MatDialogRef } from '@angular/material/dialog';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';

@Injectable({ providedIn: 'root' })
export class PepRemoteLoaderService {
    
    constructor(
        private resolver: ComponentFactoryResolver,
        // private injector: Injector,
        private dialogService: PepDialogService,
        private httpService: PepHttpService,
        private sessionService: PepSessionService,
        private addonService: PepAddonService,
    ) {
        //
    }

    private loadAddonBlockInternal(options: IAddonBlockLoaderDialogOptions): PepAddonBlockLoaderComponent | null {
        if (options.container !== null) {
            const factory = this.resolver.resolveComponentFactory(PepAddonBlockLoaderComponent);
            const componentRef = options.container.createComponent(factory);
            const addonBlockInstance = componentRef.instance;

            addonBlockInstance.name = options.name;
            addonBlockInstance.hostObject = options.hostObject;

            addonBlockInstance.hostEvents.subscribe((event) => {
                if (options.hostEventsCallback) {
                    options.hostEventsCallback(event);
                }
            });

            return addonBlockInstance;
        } else {
            return null;
        }
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

    async getBlockRemoteLoaderOptions(name: string): Promise<PepRemoteLoaderOptions> {
        const baseUrl = this.sessionService.getPapiBaseUrl();
        const pagesAddonUuid = this.addonService.getPagesAddonUUID();
        const url = `${baseUrl}/addons/api/${pagesAddonUuid}/addon_blocks/get_addon_block_loader_data?name=${name}`;

        const blockLoaderData: IBlockLoaderData = await this.httpService.getPapiApiCall(url).toPromise(); 

        if (blockLoaderData) {
            return this.getRemoteLoaderOptions(blockLoaderData);
            
        } else {
            return Promise.reject(`Addon block with name - ${name} is not found`);
        }
    }

    loadAddonBlockInContainer(options: IAddonBlockLoaderOptions) {
        return this.loadAddonBlockInternal(options);
    }

    loadAddonBlockInDialog(options: IAddonBlockLoaderDialogOptions): MatDialogRef<PepAddonBlockLoaderComponent> | null {
        let dialogRef: MatDialogRef<PepAddonBlockLoaderComponent> | null = null;
        const addonBlockInstance = this.loadAddonBlockInternal(options);

        if (addonBlockInstance) {
            addonBlockInstance.inDialog = true;
            const pepConfig = this.dialogService.getDialogConfig({ disableClose: false }, options.size || 'full-screen');
            const mergeConfig = {...options.config, ...pepConfig}; 
            const data = options.data || null;
            dialogRef = this.dialogService.openDialog(addonBlockInstance.dialogTemplate, data, mergeConfig);
        }

        return dialogRef;
    }
}
