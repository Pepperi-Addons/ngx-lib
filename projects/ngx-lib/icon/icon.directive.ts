import { Directive, OnInit, Input, Renderer2, ElementRef, Optional, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PepIconRegistry } from './icon-registry.service';
import { UtilitiesService } from '@pepperi-addons/ngx-lib';

@Directive({
    selector: '[pepSvgIcon]',
})
export class PepIconDirective implements OnInit {
    @Input('pepSvgIcon') iconName: string;

    constructor(
        private renderer: Renderer2,
        private element: ElementRef,
        private utilitiesService: UtilitiesService,
        private iconRegistry: PepIconRegistry,
        @Optional() @Inject(DOCUMENT) private document: any) { }

    ngOnInit(): void {
        const svgData = this.iconRegistry.getIcon(this.iconName);
        const svgIcon = this.utilitiesService.getSvgElementFromString(this.document, svgData);
        this.element.nativeElement.appendChild(svgIcon);
        this.renderer.addClass(svgIcon, 'svg-icon');
    }
}
