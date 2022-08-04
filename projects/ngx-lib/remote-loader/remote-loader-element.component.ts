import { AfterContentInit, Component, ElementRef, EventEmitter, Input, OnChanges, Optional, Output, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PepAddonService } from '@pepperi-addons/ngx-lib';
import { PepRemoteLoaderOptions } from './remote-loader.model';
import { PepRemoteLoaderService } from './remote-loader.service';

@Component({
    selector: 'pep-remote-loader-element',
    template: `
        <!--<div #vc style="height: inherit;"></div>-->
    `,
    styles: [`
        :host { width:100%; height: inherit }
        :host::ng-deep > * {
            height: inherit;
        }
    `],
})
export class PepRemoteLoaderElementComponent implements AfterContentInit, OnChanges {
    @Input() options: PepRemoteLoaderOptions;
    @Input() props: { [prop: string]: unknown };
    @Input() events: { [event: string]: (event: Event) => void };

    @Output() load: EventEmitter<any> =  new EventEmitter();

    element: HTMLElement = null;

    constructor(
        private renderer: Renderer2,
        private el:ElementRef,
        private pepAddonService: PepAddonService,
        private remoteLoaderService: PepRemoteLoaderService,
        @Optional() private route: ActivatedRoute
    ) { 

    }

    ngOnChanges(): void {
        if (!this.element) return;

        this.populateProps();
    }

    private populateProps() {
        for (const prop in this.props) {
            this.element[prop] = this.props[prop];
        }
    }

    private setupEvents() {
        for (const event in this.events) {
            this.element.addEventListener(event, this.events[event]);
        }
    }

    private async loadOptionsFromRoute() {
        const params = this.route?.snapshot.params;
        const data = this.route?.snapshot.data;
        const blockName = params?.blockName || data?.blockName;
        
        if (blockName?.length > 0) {
            const addonUUID = params?.addonUUID || data?.addonUUID || '';
            const blockType = data?.blockType || 'SettingsBlock';
            const blockRemoteEntry = data?.blockRemoteEntry || '';

            this.options = await this.remoteLoaderService.getBlockRemoteLoaderOptions(blockName, blockType, addonUUID, blockRemoteEntry);

            const fileName = `${this.options['remoteName']}.js`;

            if (window.location.search.indexOf('dev=true') > 0) {
                this.options['remoteEntry'] = `http://localhost:4400/${fileName}`;
            }
        }
    }

    async ngAfterContentInit() {
        try {
            const t0 = performance.now();

            // If the options is not supplied then we need to get it from the route.
            if (!this.options) {
                await this.loadOptionsFromRoute();
            }

            if (!this.options) {
                throw new Error('No options supplied to the component.');
            } else {
                if (this.options?.addonId && (this.options.type === 'module' || this.options.type === 'script')) {
                    const lastSlashIndex = this.options.remoteEntry?.lastIndexOf('/') || -1;
                    
                    if (lastSlashIndex > 0) {
                        const publicPath = this.options.remoteEntry.substring(0, lastSlashIndex + 1);
                        this.pepAddonService.setAddonStaticFolder(publicPath, this.options.addonId);
                    }
                }
    
                await loadRemoteModule(this.options);
    
                this.element = this.renderer.createElement(this.options.elementName);
                this.populateProps();
                this.setupEvents();
    
                this.renderer.appendChild(this.el.nativeElement, this.element);
    
                const t1 = performance.now();
                console.log('remote module wc load performance: ' + (t1-t0)/1000);
    
                this.load.emit();
            }
        }
        catch(error) {
            console.error(error);
        }
    }
}