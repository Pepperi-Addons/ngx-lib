import { Directive, OnInit, Input, Renderer2, ElementRef, Optional, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PepperiIconRegistry } from './icon-registry.service';

@Directive({
    selector: '[pepSvgIcon]',
})
export class PepperiIconDirective implements OnInit {
    @Input('pepSvgIcon') iconName: string;

    constructor(
        private renderer: Renderer2,
        private element: ElementRef,
        private iconRegistry: PepperiIconRegistry,
        @Optional() @Inject(DOCUMENT) private document: any) { }

    ngOnInit(): void {
        const svgData = this.iconRegistry.getIcon(this.iconName);
        const svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(svgIcon);
        this.renderer.addClass(svgIcon, 'svg-icon');
    }

    private svgElementFromString(svgContent: string): SVGElement {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
}
