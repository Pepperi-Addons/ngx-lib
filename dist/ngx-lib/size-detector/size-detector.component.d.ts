import { AfterViewInit, ElementRef } from '@angular/core';
import { LayoutService, SCREEN_SIZE } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
export declare class SizeDetectorComponent implements AfterViewInit {
    private element;
    private layoutService;
    prefix: string;
    sizes: {
        id: SCREEN_SIZE;
        name: string;
        css: string;
    }[];
    constructor(element: ElementRef, layoutService: LayoutService);
    onResize(event: any): void;
    ngAfterViewInit(): void;
    private detectScreenSize;
    static ɵfac: i0.ɵɵFactoryDef<SizeDetectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SizeDetectorComponent, "pep-size-detector", never, {}, {}, never, never>;
}
