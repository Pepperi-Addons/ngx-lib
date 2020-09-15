import { ElementRef, Renderer2 } from '@angular/core';
import { PepperiIconRegistry } from './icon-registry.service';
import * as i0 from "@angular/core";
export declare class PepperiIconComponent {
    private renderer;
    private element;
    private iconRegistry;
    private document;
    private fillColor;
    private svgIcon;
    set name(iconName: string);
    set fill(value: string);
    constructor(renderer: Renderer2, element: ElementRef, iconRegistry: PepperiIconRegistry, document: any);
    private svgElementFromString;
    private setFill;
    static ɵfac: i0.ɵɵFactoryDef<PepperiIconComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PepperiIconComponent, "pep-icon", never, { "name": "name"; "fill": "fill"; }, {}, never, ["*"]>;
}
