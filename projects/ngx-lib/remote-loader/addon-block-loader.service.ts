import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { IAddonBlockLoaderDialogOptions, IAddonBlockLoaderOptions, IBlockLoaderData } from './remote-loader.model';
import { PepAddonBlockLoaderComponent } from './addon-block-loader.component';
import { MatDialogRef } from '@angular/material/dialog';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';

@Injectable({ 
    providedIn: 'root' 
})
export class PepAddonBlockLoaderService {
    
    constructor(
        private resolver: ComponentFactoryResolver,
        private dialogService: PepDialogService,
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
