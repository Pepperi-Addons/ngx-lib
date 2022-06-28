import { Component, ComponentRef, EventEmitter, Input, OnChanges, OnDestroy, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PepAddonService } from '@pepperi-addons/ngx-lib';
import { PepPluginOptions } from './plugin.model';
import { Subscription } from 'rxjs';
declare let __webpack_public_path__;

@Component({
    standalone: true,
    selector: 'pep-plugin-proxy',
    template: `
        <ng-container #placeHolder></ng-container>
    `
})
export class PepPluginProxyComponent implements OnChanges, OnDestroy {
    @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
    viewContainer: ViewContainerRef;
    
    private _options: PepPluginOptions = null;
    @Input()
    set options(value: PepPluginOptions) {
        this._options = value;
        if (value) {
            this.loadModule();
        }
    }
    get options(): PepPluginOptions {
        return this._options;
    }

    // This is the data passed by the API Design documentation.
    private _hostObject: any = null;
    @Input()
    set hostObject(value: any) { 
        this._hostObject = value;
        this.setHostComponentIntoComponentRef();
    }
    get hostObject(): any {
        return this._hostObject;
    }

    @Output() hostEvents: EventEmitter<any> =  new EventEmitter();
    @Output() load: EventEmitter<any> =  new EventEmitter();

    private compRef: ComponentRef<any>;
    private hostEvents$: Subscription;

    constructor(
        private pepAddonService: PepAddonService,
    ) { }

    private setHostComponentIntoComponentRef() {
        if (this.hostObject && this.compRef?.instance) {
            this.compRef.instance['hostObject'] = this.hostObject;

            // TODO: Check if this is needed?? if not remove this.
            // if (this.compRef?.instance?.ngOnChanges) {
            //     this.compRef.instance.ngOnChanges(this.hostObject);
            // }
        }
    }

    private async loadModule() {
        this.viewContainer.clear();
    
        debugger;
        
        if (this.options?.addonId && (this.options.type === 'module' || this.options.type === 'script')) {
            
            const lastSlashIndex = this.options.remoteEntry?.lastIndexOf('/') || -1;
            if (lastSlashIndex > 0) {
                // const publicPathArr = this.options.remoteEntry?.split('/');
                // const publicPath = publicPathArr.slice(0, publicPathArr.length - 1).join('/')+'/';
                // __webpack_public_path__ = publicPath;
    
                const publicPath = this.options.remoteEntry.substring(0, lastSlashIndex + 1);
                this.pepAddonService.setAddonStaticFolder(publicPath, this.options.addonId);
            }
        }

        const componentType = await loadRemoteModule(this.options).then(m => m[this.options.componentName]);
        this.compRef = this.viewContainer.createComponent(componentType);
        
        if (this.compRef) {
            this.setHostComponentIntoComponentRef();
            
            this.hostEvents$ = this.compRef.instance['hostEvents']?.subscribe((e: any) => {
                this.hostEvents.emit(e)
            });
        }

        this.load.emit();
    }

    ngOnChanges() {
    }
    
    ngOnDestroy(): void {
        if (this.hostEvents$) {
            this.hostEvents$.unsubscribe();
        }

        this.compRef?.destroy();
        this.viewContainer?.clear();
    }
}

