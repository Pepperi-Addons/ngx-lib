import { PepAddonService } from '@pepperi-addons/ngx-lib';
import { Component, Input, OnChanges, ViewChild, ViewContainerRef, Injector, EventEmitter, Output, ComponentRef, SimpleChanges, createNgModuleRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PepRemoteLoaderOptions } from './remote-loader.model';

@Component({
    selector: 'pep-remote-loader',
    template: `
        <!-- <mat-spinner *ngIf="showSpinner; else placeHolder"></mat-spinner> -->
        <ng-template #placeHolder></ng-template>
    `
})
export class PepRemoteLoaderComponent implements OnChanges {
    @ViewChild('placeHolder', { read: ViewContainerRef, static: true }) viewContainer: ViewContainerRef;
    
    private _options: PepRemoteLoaderOptions = null;
    @Input()
    set options(value: PepRemoteLoaderOptions) {
        this._options = value;
        if (value) {
            this.loadModule();
        }
    }
    get options(): PepRemoteLoaderOptions {
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
    // showSpinner = true;
    
    private compRef: ComponentRef<any>;

    constructor(
        private injector: Injector,
        private pepAddonService: PepAddonService
    ) { }

    private setHostComponentIntoComponentRef() {
        if (this.hostObject && this.compRef?.instance) {
            this.compRef.instance.hostObject = this.hostObject;

            // TODO: Check if this is needed?? if not remove this.
            if (this.compRef?.instance?.ngOnChanges) {
                this.compRef.instance.ngOnChanges(this.hostObject);
            }
        }
    }

    async ngOnChanges(changes: SimpleChanges) {
        // if (changes?.options?.currentValue) {
        //     this.loadModule(changes?.options?.currentValue);
        // }
    }

    private async loadModule() {
        const t0 = performance.now();
        
        // Check if only need update
        if (!this.options?.update) {
            this.viewContainer?.clear();
            
            if (this.options?.noModule) { // Load Component
                const componentType = await loadRemoteModule(this.options).then(m => m[this.options.componentName]);
                this.compRef = this.viewContainer.createComponent(componentType, { injector: this.injector });
            } else { // Load Module
                if (this.options?.addonId && (this.options.type === 'module' || this.options.type === 'script')) {
                    const lastSlashIndex = this.options.remoteEntry?.lastIndexOf('/') || -1;
                    
                    if (lastSlashIndex > 0) {
                        const publicPath = this.options.remoteEntry.substring(0, lastSlashIndex + 1);
                        this.pepAddonService.setAddonStaticFolder(publicPath, this.options.addonId);
                    }
                }

                const module =  await loadRemoteModule(this.options).then(m => m);
                const moduleRef = createNgModuleRef(module[this.options.exposedModule.replace('./','')], this.injector);
                this.compRef = this.viewContainer.createComponent(module[this.options.componentName], { injector: this.injector, ngModuleRef: moduleRef });

                const t1 = performance.now();
                console.log('remote module load performance: ' + (t1-t0)/1000);
            }

            this.load.emit();
        }

        if (this.compRef) {
            this.setHostComponentIntoComponentRef();
            
            this.compRef?.instance['hostEvents']?.subscribe(e => {
                // switch(e.action){
                //     case 'addon-loaded':
                //         this.showSpinner = false;
                // }
                this.hostEvents.emit(e)
            });
        }
    }

    ngOnDestroy(): void {
        this.compRef?.destroy();
        this.viewContainer?.clear();
    }
}

