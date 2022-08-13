import { ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { IAddonBlockLoaderDialogOptions, IAddonBlockLoaderOptions, IBlockLoaderData } from './remote-loader.model';
import { PepAddonBlockLoaderComponent } from './addon-block-loader.component';
import { MatDialogRef } from '@angular/material/dialog';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';

@Injectable({ 
    providedIn: 'root' 
})
export class PepAddonBlockLoaderService {
    
    constructor(
        private dialogService: PepDialogService,
    ) {
        //
    }

    private loadAddonBlockInternal(options: IAddonBlockLoaderDialogOptions): ComponentRef<PepAddonBlockLoaderComponent> | null {
        if (options.container !== null) {
            const componentRef = options.container.createComponent(PepAddonBlockLoaderComponent);
            const addonBlockInstance = componentRef.instance;

            addonBlockInstance.name = options.name;
            addonBlockInstance.slugName = options.slugName;
            addonBlockInstance.blockType = options.blockType || 'AddonBlock';
            addonBlockInstance.addonId = options.addonUUID;
            addonBlockInstance.remoteEntry = options.blockRemoteEntry;
            addonBlockInstance.hostObject = options.hostObject;

            addonBlockInstance.hostEvents.subscribe((event) => {
                if (options.hostEventsCallback) {
                    options.hostEventsCallback(event);
                }
            });

            return componentRef;
        } else {
            return null;
        }
    }

    loadAddonBlockInContainer(options: IAddonBlockLoaderOptions): ComponentRef<PepAddonBlockLoaderComponent> | null  {
        return this.loadAddonBlockInternal(options);
    }

    loadAddonBlockInDialog(options: IAddonBlockLoaderDialogOptions): MatDialogRef<any> | null {
        const componentRef = this.loadAddonBlockInternal(options);
        
        if (componentRef) {
            const addonBlockInstance = componentRef.instance;
            const pepConfig = this.dialogService.getDialogConfig({ disableClose: false, panelClass: 'remote-loader-dialog' }, options.size || 'full-screen');
            const mergeConfig = {...options.config, ...pepConfig}; 
            const data = options.data || null;
            addonBlockInstance.dialogRef = this.dialogService.openDialog(addonBlockInstance.dialogTemplate, data, mergeConfig);
            addonBlockInstance.dialogRef.afterClosed().subscribe(() => {
                componentRef.hostView.detach();
                componentRef.hostView.destroy();
                componentRef.destroy();
            });
            return addonBlockInstance.dialogRef;

        } else {
            return null;
        }
    }
}
