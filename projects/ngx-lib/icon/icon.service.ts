import { ElementRef, Inject, Injectable, Optional, Renderer2 } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { PepUtilitiesService } from '@pepperi-addons/ngx-lib';
import { PepIconRegistry } from './icon-registry.service';
import { PepIconType } from "./icon-generated.model";

@Injectable({
    providedIn: 'root',
})
export class PepIconService {
    constructor(
        private renderer: Renderer2,
        private utilitiesService: PepUtilitiesService,
        private iconRegistry: PepIconRegistry,
        @Optional() @Inject(DOCUMENT) private document: any) {
    }

    appendSvgIcon(element: ElementRef, iconName: PepIconType): SVGElement {
        const svgData = this.iconRegistry.getIcon(iconName);
        const svgIcon = this.utilitiesService.getSvgElementFromString(
            this.document,
            svgData
        );

        if (svgIcon) {
            element.nativeElement.appendChild(svgIcon);
            this.renderer.addClass(svgIcon, 'svg-icon');
        }

        return svgIcon;
    }

}