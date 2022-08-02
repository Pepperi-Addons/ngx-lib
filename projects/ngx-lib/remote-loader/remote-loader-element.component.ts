import { AfterContentInit, Component, ElementRef, EventEmitter, Input, OnChanges, Optional, Output, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PepAddonService } from '@pepperi-addons/ngx-lib';
import { PepRemoteLoaderOptions } from './remote-loader.model';

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

    async ngAfterContentInit() {
        try {
            const t0 = performance.now();
            
            // When this implemented in ngAfterContentInit function this code is unnecessary.
            // if (this.element) {
            //     this.renderer.removeChild(this.el.nativeElement, this.element);
            // }

            const options = this.options ?? this.route.snapshot.data as PepRemoteLoaderOptions;

            if (this.options?.addonId && (this.options.type === 'module' || this.options.type === 'script')) {
                const lastSlashIndex = this.options.remoteEntry?.lastIndexOf('/') || -1;
                
                if (lastSlashIndex > 0) {
                    const publicPath = this.options.remoteEntry.substring(0, lastSlashIndex + 1);
                    this.pepAddonService.setAddonStaticFolder(publicPath, this.options.addonId);
                }
            }

            await loadRemoteModule(options);

            this.element = this.renderer.createElement(options.elementName);
            this.populateProps();
            this.setupEvents();

            this.renderer.appendChild(this.el.nativeElement, this.element);

            const t1 = performance.now();
            console.log('remote module wc load performance: ' + (t1-t0)/1000);

            this.load.emit();
        }
        catch(error) {
            console.error(error);
        }
    }
}