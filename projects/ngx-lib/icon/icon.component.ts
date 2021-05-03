import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    ViewEncapsulation,
    Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PepUtilitiesService, PepColorService, IPepHslColor } from '@pepperi-addons/ngx-lib';
import { PepIconRegistry } from './icon-registry.service';
import { PepIconType } from './icon-generated.model';

@Component({
    selector: 'pep-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    // template: ` <ng-content></ng-content> `,
    // styles: [
    //     `
    //         :host {
    //             display: flex;
    //             align-items: center;
    //             justify-items: center;
    //             width: inherit;
    //             height: inherit;
    //             align-content: center;
    //             justify-content: center;
    //         }

    //         :host::ng-deep svg {
    //             width: inherit;
    //             height: inherit;
    //         }

    //         :host::ng-deep svg.spin {
    //             animation: rotation 2s infinite linear;
    //         }

    //         @keyframes rotation {
    //             from {
    //                 transform: rotate(0deg);
    //             }
    //             to {
    //                 transform: rotate(359deg);
    //             }
    //         }
    //     `,
    // ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepIconComponent {
    /**
     * @ignore
     *
     * @private
     * @type {SVGElement}
     * @memberof PepIconComponent
     */
    private svgIcon: SVGElement;

    /**
     * @ignore
     *
     * @private
     * @type {boolean}
     * @memberof PepIconComponent
     */
    private _spin: boolean = false;
    /**
     * If icon spin
     *
     * @memberof PepIconComponent
     */
    @Input()
    set spin(value: boolean) {
        this._spin = value;
        this.setSpin();
    }

    /**
     * The icon name. look in (#ICON LIST)
     *
     * @type {PepIconType} See {@link PepIconType}
     * @memberof PepIconComponent
     */
    @Input()
    set name(iconName: PepIconType) {
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        const svgData = this.iconRegistry.getIcon(iconName);
        this.svgIcon = this.utilitiesService.getSvgElementFromString(
            this.document,
            svgData
        );
        if (this.svgIcon) {
            this.element.nativeElement.appendChild(this.svgIcon);
            this.renderer.addClass(this.svgIcon, 'svg-icon');
            this.setFill();
            this.setSpin();
        }
    }

    /**
     * @ignore
     *
     * @private
     * @memberof PepIconComponent
     */
    private _fill = null;
    // TODO: Change to color.
    /**
     * The fill color of the icon like #cccccc
     *
     * @type {Color}
     * @memberof PepIconComponent
     */
    @Input()
    set fill(value: string) {
        this._fill = value;
        this.setFill();
    }

    constructor(
        private renderer: Renderer2,
        private element: ElementRef,
        private utilitiesService: PepUtilitiesService,
        private colorService: PepColorService,
        private iconRegistry: PepIconRegistry,
        @Optional() @Inject(DOCUMENT) private document: any
    ) { }

    /**
     * @ignore
     *
     * @private
     * @memberof PepIconComponent
     */
    private setFill(): void {
        if (this.svgIcon && this._fill) {
            const colorProperty = this.svgIcon.classList.contains('stroke') ? 'stroke' : 'fill';
            this.renderer.setStyle(this.svgIcon, colorProperty, this._fill);
        }
    }

    /**
     * @ignore
     *
     * @private
     * @memberof PepIconComponent
     */
    private setSpin(): void {
        if (this.svgIcon) {
            if (this._spin) {
                this.renderer.addClass(this.svgIcon, 'spin');
            } else {
                this.renderer.removeClass(this.svgIcon, 'spin');
            }
        }
    }
}
