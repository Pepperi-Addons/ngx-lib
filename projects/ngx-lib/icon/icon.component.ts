import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional, ViewEncapsulation, Renderer2 } from '@angular/core';
import { PepperiIconRegistry } from './icon-registry.service';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'pep-icon',
    template: `
        <ng-content></ng-content>
    `,
    styles: [`
        :host {
            display: inline-grid;
        }

        :host::ng-deep svg { width: 1.5rem; height: 1.5rem }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepperiIconComponent {
    private fillColor = null;
    private svgIcon: SVGElement;

    @Input()
    set name(iconName: string) {
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        const svgData = this.iconRegistry.getIcon(iconName);
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
        this.renderer.addClass(this.svgIcon, 'svg-icon');

        this.setFill();
    }

    @Input()
    set fill(value: string) {
        this.fillColor = value;
        this.setFill();
    }

    constructor(
        private renderer: Renderer2,
        private element: ElementRef,
        private iconRegistry: PepperiIconRegistry,
        @Optional() @Inject(DOCUMENT) private document: any) {
    }

    private svgElementFromString(svgContent: string): SVGElement {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }

    private setFill(): void {
        if (this.svgIcon && this.fillColor) {
            this.renderer.setStyle(this.svgIcon, 'fill', this.fillColor);
        }
    }
}
