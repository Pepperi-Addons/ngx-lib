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

import { PepIconType } from './icon-generated.model';
import { PepIconService } from './icon.service';

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
    private svgIcon: SVGElement;

    private _spin = false;
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

        this.svgIcon = this.pepIconService.getSvgIcon(iconName);
        
        if (this.svgIcon) {
            this.element.nativeElement.appendChild(this.svgIcon);
            this.setFill();
            this.setSpin();
        }
    }

    private _fill = null;
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
        private pepIconService: PepIconService
    ) { }

    /**
     * Set fill on the svg icon.
     *
     * @private
     * @memberof PepIconComponent
     */
    private setFill(): void {
        if (this.svgIcon && this._fill) {
            const colorProperty = this.svgIcon.classList.contains('stroke')
                ? 'stroke'
                : 'fill';
            this.renderer.setStyle(this.svgIcon, colorProperty, this._fill);
        }
    }

    /**
     * Toggle  spin class by spin property.
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
