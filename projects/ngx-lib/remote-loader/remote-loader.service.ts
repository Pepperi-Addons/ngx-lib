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
        private resolver: ComponentFactoryResolver,
        // private injector: Injector,
        private dialogService: PepDialogService,
        private httpService: PepHttpService,
        private sessionService: PepSessionService,
        private addonService: PepAddonService,
        private route: ActivatedRoute,
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

    private getAddonBaseUrl(addonUUID: string, fileName: string = 'api'): string {
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

    loadAddonBlockInContainer(options: IAddonBlockLoaderOptions) {
        return this.loadAddonBlockInternal(options);
    }

    loadAddonBlockInDialog(options: IAddonBlockLoaderDialogOptions): MatDialogRef<any> | null {
        const addonBlockInstance = this.loadAddonBlockInternal(options);

        if (addonBlockInstance) {
            const pepConfig = this.dialogService.getDialogConfig({ disableClose: false, panelClass: 'remote-loader-dialog' }, options.size || 'full-screen');
            const mergeConfig = {...options.config, ...pepConfig}; 
            const data = options.data || null;
            addonBlockInstance.dialogRef = this.dialogService.openDialog(addonBlockInstance.dialogTemplate, data, mergeConfig);
            addonBlockInstance.dialogRef.afterClosed().subscribe(() => {
                addonBlockInstance.dialogRef = null;
            });
            return addonBlockInstance.dialogRef;

        } else {
            return null;
        }
    }
}
