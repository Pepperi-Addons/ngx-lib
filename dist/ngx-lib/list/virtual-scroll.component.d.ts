import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export interface ChangeEvent {
    start?: number;
    end?: number;
    fromIndex?: number;
    toIndex?: number;
    addAtStart?: boolean;
    calculatedChildHeight?: number;
}
export declare class VirtualScrollComponent implements OnInit, OnChanges, OnDestroy {
    element: ElementRef;
    private renderer;
    private zone;
    totalRows: number;
    scrollbarWidth: number;
    scrollbarHeight: number;
    childWidth: number;
    childHeight: number;
    bufferAmount: number;
    scrollAnimationTime: number;
    doNotCheckAngularZone: boolean;
    private refreshHandler;
    private _parentScroll;
    set parentScroll(element: Element | Window);
    get parentScroll(): Element | Window;
    isTable: boolean;
    change: EventEmitter<ChangeEvent>;
    load: EventEmitter<any>;
    start: EventEmitter<ChangeEvent>;
    end: EventEmitter<ChangeEvent>;
    contentElementRef: ElementRef;
    shimElementRef: ElementRef;
    containerElementRef: ElementRef;
    previousStart: number;
    previousEnd: number;
    startupLoop: boolean;
    currentTween: any;
    private disposeScrollHandler;
    private disposeResizeHandler;
    /** Cache of the last scroll height to prevent setting CSS when not needed. */
    private lastScrollHeight;
    /** Cache of the last top padding to prevent setting CSS when not needed. */
    private lastTopPadding;
    constructor(element: ElementRef, renderer: Renderer2, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    detectIE(): any;
    refresh(forceViewportUpdate?: boolean): void;
    scrollInto(index: any): void;
    private addParentEventHandlers;
    private removeParentEventHandlers;
    private countItemsPerRow;
    private getElementsOffset;
    private calculateDimensions;
    private calculateItems;
    static ɵfac: i0.ɵɵFactoryDef<VirtualScrollComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<VirtualScrollComponent, "virtual-scroll,[virtualScroll]", ["virtualScroll"], { "totalRows": "totalRows"; "scrollbarWidth": "scrollbarWidth"; "scrollbarHeight": "scrollbarHeight"; "childWidth": "childWidth"; "childHeight": "childHeight"; "bufferAmount": "bufferAmount"; "scrollAnimationTime": "scrollAnimationTime"; "doNotCheckAngularZone": "doNotCheckAngularZone"; "parentScroll": "parentScroll"; "isTable": "isTable"; }, { "change": "change"; "load": "load"; "start": "start"; "end": "end"; }, ["containerElementRef"], ["*"]>;
}
export declare class VirtualScrollModule {
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<VirtualScrollModule, [typeof VirtualScrollComponent], never, [typeof VirtualScrollComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<VirtualScrollModule>;
}
