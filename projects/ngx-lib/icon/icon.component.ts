import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional, ViewEncapsulation, Renderer2 } from '@angular/core';
import { PepIconRegistry } from './icon-registry.service';
import { DOCUMENT } from '@angular/common';
import { UtilitiesService } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-icon',
    template: `
        <ng-content></ng-content>
    `,
    styles: [`
        :host {
            display: inline-grid;
            align-items: center;
            justify-items: center;
            width: inherit;
            height: inherit;
        }

        :host::ng-deep svg {
            width: inherit;
            height: inherit;
        }

        :host::ng-deep svg.spin {
            animation: rotation 2s infinite linear;
        }

        @keyframes rotation {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(359deg);
            }
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepIconComponent {
    private svgIcon: SVGElement;

    @Input()
    set spin(spin: boolean) {
        if (spin) {
            this.renderer.addClass(this.svgIcon, 'spin');
        }
    }

    @Input()
    set name(iconName: string) {
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        const svgData = this.iconRegistry.getIcon(iconName);
        this.svgIcon = this.utilitiesService.getSvgElementFromString(this.document, svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
        this.renderer.addClass(this.svgIcon, 'svg-icon');

        this.setFill();
    }

    private _fill = null;
    @Input()
    set fill(value: string) {
        this._fill = value;
        this.setFill();
    }

    constructor(
        private renderer: Renderer2,
        private element: ElementRef,
        private utilitiesService: UtilitiesService,
        private iconRegistry: PepIconRegistry,
        @Optional() @Inject(DOCUMENT) private document: any) {
    }

    private setFill(): void {
        if (this.svgIcon && this._fill) {
            this.renderer.setStyle(this.svgIcon, 'fill', this._fill);
        }
    }
}
