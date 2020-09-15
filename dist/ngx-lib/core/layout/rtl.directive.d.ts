import { Renderer2, ElementRef, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';
import * as i0 from "@angular/core";
export declare class RtlClassDirective implements OnInit {
    private layoutService;
    private renderer;
    private element;
    constructor(layoutService: LayoutService, renderer: Renderer2, element: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<RtlClassDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<RtlClassDirective, "[pepRtlClass]", never, {}, {}, never>;
}
export declare class RtlDirectionDirective implements OnInit {
    private layoutService;
    private renderer;
    private element;
    constructor(layoutService: LayoutService, renderer: Renderer2, element: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<RtlDirectionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<RtlDirectionDirective, "[pepRtlDirection]", never, {}, {}, never>;
}
