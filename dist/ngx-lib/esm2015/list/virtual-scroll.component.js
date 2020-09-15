import { Component, ContentChild, ElementRef, EventEmitter, Input, NgModule, NgZone, Output, ViewChild } from '@angular/core';
import * as tween from '@tweenjs/tween.js';
import * as i0 from "@angular/core";
const _c0 = ["container"];
const _c1 = ["content"];
const _c2 = ["shim"];
const _c3 = ["*"];
export class VirtualScrollComponent {
    constructor(element, renderer, zone) {
        this.element = element;
        this.renderer = renderer;
        this.zone = zone;
        //@Input()
        //items: any[] = [];
        this.totalRows = 0;
        this.bufferAmount = 0;
        this.scrollAnimationTime = 1500;
        this.doNotCheckAngularZone = false;
        this.refreshHandler = () => {
            this.refresh(true);
        };
        this.isTable = false;
        //@Output()
        //update: EventEmitter<any[]> = new EventEmitter<any[]>();
        //viewPortItems: any[];
        this.change = new EventEmitter();
        this.load = new EventEmitter();
        this.start = new EventEmitter();
        this.end = new EventEmitter();
        this.startupLoop = true;
        /** Cache of the last scroll height to prevent setting CSS when not needed. */
        this.lastScrollHeight = -1;
        /** Cache of the last top padding to prevent setting CSS when not needed. */
        this.lastTopPadding = -1;
    }
    set parentScroll(element) {
        if (this._parentScroll === element) {
            return;
        }
        this._parentScroll = element;
        this.addParentEventHandlers(this._parentScroll);
    }
    get parentScroll() {
        return this._parentScroll;
    }
    ngOnInit() {
        this.scrollbarWidth = 0; // this.element.nativeElement.offsetWidth - this.element.nativeElement.clientWidth;
        this.scrollbarHeight = 0; // this.element.nativeElement.offsetHeight - this.element.nativeElement.clientHeight;
        if (!this.parentScroll) {
            this.addParentEventHandlers(this.element.nativeElement);
        }
    }
    ngOnDestroy() {
        this.removeParentEventHandlers();
    }
    ngOnChanges(changes) {
        this.previousStart = undefined;
        this.previousEnd = undefined;
        const totalRows = changes.totalRows || {};
        if ((changes.totalRows !== undefined && totalRows.previousValue === undefined) ||
            totalRows.previousValue !== undefined) {
            this.startupLoop = true;
        }
        var ieVer = this.detectIE();
        var headerRowHeight = '34px';
        // Set padding top for the table view because the header row.
        //this.renderer.setStyle(this.contentElementRef.nativeElement, 'padding-top', this.isTable ? headerRowHeight : '0');
        if (!ieVer || ieVer >= 16) {
            // not IE and version < 16
            this.renderer.setStyle(this.element.nativeElement, 'top', '0');
        }
        else {
            this.renderer.setStyle(this.element.nativeElement, 'top', headerRowHeight);
        }
        //Only for IE browsers
        /*  let ua = navigator.userAgent;
        if (this.isTable && (ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0 || ua.indexOf('Edge/') >= 0)) {
            this.renderer.setStyle(this.element.nativeElement, 'top', headerRowHeight);
        }
        else {
            this.renderer.setStyle(this.element.nativeElement, 'top', '0');
        }*/
        this.refresh();
    }
    detectIE() {
        var ua = window.navigator.userAgent;
        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge 12 (Spartan)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge 13
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return false;
    }
    refresh(forceViewportUpdate = false) {
        this.zone.runOutsideAngular(() => {
            requestAnimationFrame(() => this.calculateItems(forceViewportUpdate));
        });
    }
    scrollInto(index) {
        let el = this.parentScroll instanceof Window ? document.body : this.parentScroll || this.element.nativeElement;
        let offsetTop = this.getElementsOffset();
        //let index: number = (this.items || []).indexOf(item);
        if (index < 0 || index >= this.totalRows)
            return;
        let d = this.calculateDimensions();
        let scrollTop = Math.floor(index / d.itemsPerRow) * d.childHeight - d.childHeight * Math.min(index, this.bufferAmount);
        let animationRequest;
        if (this.currentTween !== undefined) {
            this.currentTween.stop();
        }
        // totally disable animate
        if (!this.scrollAnimationTime) {
            el.scrollTop = scrollTop;
            return;
        }
        this.currentTween = new tween.Tween({ scrollTop: el.scrollTop })
            .to({ scrollTop }, this.scrollAnimationTime)
            .easing(tween.Easing.Quadratic.Out)
            .onUpdate(data => {
            if (isNaN(data.scrollTop)) {
                return;
            }
            this.renderer.setProperty(el, 'scrollTop', data.scrollTop);
            this.refresh(true);
        })
            .onStop(() => {
            cancelAnimationFrame(animationRequest);
        })
            .start();
        const animate = (time) => {
            this.currentTween.update(time);
            if (this.currentTween._object.scrollTop !== scrollTop) {
                this.zone.runOutsideAngular(() => {
                    animationRequest = requestAnimationFrame(animate);
                });
            }
        };
        animate();
    }
    addParentEventHandlers(parentScroll) {
        this.removeParentEventHandlers();
        if (parentScroll) {
            this.zone.runOutsideAngular(() => {
                this.disposeScrollHandler = this.renderer.listen(parentScroll, 'mousewheel', _.throttle(this.refreshHandler, 20, { leading: false, trailing: true }));
                this.renderer.listen(parentScroll, 'scroll', _.debounce(this.refreshHandler, 150));
                //this.renderer.listen(parentScroll, 'scroll', _.debounce(_.throttle(this.refreshHandler, 150), 50));
                if (parentScroll instanceof Window) {
                    this.disposeScrollHandler = this.renderer.listen('window', 'resize', _.debounce(this.refreshHandler, 250));
                }
            });
        }
    }
    removeParentEventHandlers() {
        if (this.disposeScrollHandler) {
            this.disposeScrollHandler();
            this.disposeScrollHandler = undefined;
        }
        if (this.disposeResizeHandler) {
            this.disposeResizeHandler();
            this.disposeResizeHandler = undefined;
        }
    }
    countItemsPerRow() {
        let offsetTop;
        let itemsPerRow;
        let children = this.contentElementRef.nativeElement.children;
        for (itemsPerRow = 0; itemsPerRow < children.length; itemsPerRow++) {
            if (offsetTop != undefined && offsetTop !== children[itemsPerRow].offsetTop)
                break;
            offsetTop = children[itemsPerRow].offsetTop;
        }
        return itemsPerRow;
    }
    getElementsOffset() {
        let offsetTop = 0;
        if (this.containerElementRef && this.containerElementRef.nativeElement) {
            offsetTop += this.containerElementRef.nativeElement.offsetTop;
        }
        if (this.parentScroll) {
            offsetTop += this.element.nativeElement.offsetTop;
        }
        return offsetTop;
    }
    calculateDimensions() {
        let el = this.parentScroll instanceof Window ? document.body : this.parentScroll || this.element.nativeElement;
        let itemCount = this.totalRows;
        let viewWidth = el.clientWidth - this.scrollbarWidth;
        let viewHeight = el.clientHeight - this.scrollbarHeight;
        let contentDimensions;
        if (this.childWidth == undefined || this.childHeight == undefined) {
            let content = this.contentElementRef.nativeElement;
            if (this.containerElementRef && this.containerElementRef.nativeElement) {
                content = this.containerElementRef.nativeElement;
            }
            contentDimensions = content.children[0]
                ? content.children[0].getBoundingClientRect()
                : {
                    width: viewWidth,
                    height: viewHeight
                };
        }
        let childWidth = this.childWidth || contentDimensions.width;
        let childHeight = this.childHeight || contentDimensions.height;
        let itemsPerRow = Math.max(1, this.countItemsPerRow());
        let itemsPerRowByCalc = Math.max(1, Math.floor(viewWidth / childWidth));
        let itemsPerCol = Math.max(1, Math.floor(viewHeight / childHeight));
        let elScrollTop = this.parentScroll instanceof Window ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 : el.scrollTop;
        let scrollTop = Math.max(0, elScrollTop);
        var scrollHeight = childHeight * Math.floor(itemCount / itemsPerRow) + (itemCount % itemsPerRow != 0 ? childHeight : 0);
        let ua = navigator.userAgent;
        /*if (this.isTable && (ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0 || ua.indexOf('Edge/') >= 0)) {
            scrollHeight += 34;
        }*/
        if (itemsPerCol === 1 && Math.floor((scrollTop / scrollHeight) * itemCount) + itemsPerRowByCalc >= itemCount) {
            itemsPerRow = itemsPerRowByCalc;
        }
        if (scrollHeight !== this.lastScrollHeight) {
            this.renderer.setStyle(this.shimElementRef.nativeElement, 'height', `${scrollHeight}px`);
            this.lastScrollHeight = scrollHeight;
        }
        return {
            itemCount: itemCount,
            viewWidth: viewWidth,
            viewHeight: viewHeight,
            childWidth: childWidth,
            childHeight: childHeight,
            itemsPerRow: itemsPerRow,
            itemsPerCol: itemsPerCol,
            itemsPerRowByCalc: itemsPerRowByCalc,
            scrollHeight
        };
    }
    calculateItems(forceViewportUpdate = false) {
        if (!this.doNotCheckAngularZone) {
            NgZone.assertNotInAngularZone();
        }
        let el = this.parentScroll instanceof Window ? document.body : this.parentScroll || this.element.nativeElement;
        let d = this.calculateDimensions();
        //let items = this.items || [];
        let offsetTop = this.getElementsOffset();
        let elScrollTop = this.parentScroll instanceof Window ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 : el.scrollTop;
        if (elScrollTop > d.scrollHeight) {
            elScrollTop = d.scrollHeight + offsetTop;
        }
        let scrollTop = Math.max(0, elScrollTop - offsetTop);
        let indexByScrollTop = ((scrollTop / d.scrollHeight) * d.itemCount) / d.itemsPerRow;
        let end = Math.min(d.itemCount, Math.ceil(indexByScrollTop) * d.itemsPerRow + d.itemsPerRow * (d.itemsPerCol + 1));
        let maxStartEnd = end;
        const modEnd = end % d.itemsPerRow;
        if (modEnd) {
            maxStartEnd = end + d.itemsPerRow - modEnd;
        }
        let maxStart = Math.max(0, maxStartEnd - d.itemsPerCol * d.itemsPerRow - d.itemsPerRow);
        let start = Math.min(maxStart, Math.floor(indexByScrollTop) * d.itemsPerRow);
        let startRow = Math.ceil(start / d.itemsPerRow);
        const topPadding = this.totalRows === 0 ? 0 : d.childHeight * startRow - d.childHeight * Math.min(startRow, this.bufferAmount);
        if (topPadding !== this.lastTopPadding) {
            this.renderer.setStyle(this.contentElementRef.nativeElement, 'transform', `translateY(${topPadding}px)`);
            this.renderer.setStyle(this.contentElementRef.nativeElement, 'webkitTransform', `translateY(${topPadding}px)`);
            this.lastTopPadding = topPadding;
        }
        let buffer = this.bufferAmount * d.itemsPerRow;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= buffer;
        start = Math.max(0, start);
        end += buffer;
        end = Math.min(this.totalRows, end);
        if (start !== this.previousStart || end !== this.previousEnd || forceViewportUpdate === true) {
            this.zone.run(() => {
                // update the scroll list
                end = end >= 0 ? end : 0; // To prevent from accidentally selecting the entire array with a negative 1 (-1) in the end position.
                //this.viewPortItems = this.items.slice(start, end);
                //this.update.emit(this.viewPortItems);
                // emit 'start' event
                //if (start !== this.previousStart && this.startupLoop === false) {
                //    this.start.emit({ start, end });
                //}
                // emit 'end' event
                //if (end !== this.previousEnd && this.startupLoop === false) {
                //    this.end.emit({ start, end });
                //}
                // To know if to add at the start of the list or at the end.
                let addAtStart = this.previousEnd >= end;
                this.previousStart = start;
                this.previousEnd = end;
                if (this.startupLoop === true) {
                    this.refresh();
                }
                else {
                    let calculatedChildHeight = d.childHeight;
                    this.change.emit({ start, end, addAtStart, calculatedChildHeight });
                }
            });
        }
        else if (this.startupLoop === true) {
            this.startupLoop = false;
            // Added to know when the scroll is ready (UI elements are displayed already).
            this.load.emit();
            this.refresh();
        }
    }
}
VirtualScrollComponent.ɵfac = function VirtualScrollComponent_Factory(t) { return new (t || VirtualScrollComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.NgZone)); };
VirtualScrollComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VirtualScrollComponent, selectors: [["virtual-scroll"], ["", "virtualScroll", ""]], contentQueries: function VirtualScrollComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containerElementRef = _t.first);
    } }, viewQuery: function VirtualScrollComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c1, true, ElementRef);
        i0.ɵɵviewQuery(_c2, true, ElementRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElementRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.shimElementRef = _t.first);
    } }, hostVars: 2, hostBindings: function VirtualScrollComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("overflow-y", ctx.parentScroll ? "hidden" : "auto");
    } }, inputs: { totalRows: "totalRows", scrollbarWidth: "scrollbarWidth", scrollbarHeight: "scrollbarHeight", childWidth: "childWidth", childHeight: "childHeight", bufferAmount: "bufferAmount", scrollAnimationTime: "scrollAnimationTime", doNotCheckAngularZone: "doNotCheckAngularZone", parentScroll: "parentScroll", isTable: "isTable" }, outputs: { change: "change", load: "load", start: "start", end: "end" }, exportAs: ["virtualScroll"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 5, vars: 0, consts: [[1, "total-padding"], ["shim", ""], [1, "scrollable-content"], ["content", ""]], template: function VirtualScrollComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelement(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%] {\n        overflow: hidden;\n        position: relative;\n        display: block;\n        -webkit-overflow-scrolling: touch;\n    }\n    .scrollable-content[_ngcontent-%COMP%] {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        //   z-index:495;\n    }\n    .total-padding[_ngcontent-%COMP%] {\n        width: 1px;\n        opacity: 0;\n    }\n\n    .rtl[_ngcontent-%COMP%] {\n        .scrollable-content {\n            left: unset;\n            right: 0;\n        }\n    }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(VirtualScrollComponent, [{
        type: Component,
        args: [{
                selector: 'virtual-scroll,[virtualScroll]',
                exportAs: 'virtualScroll',
                template: `
        <div class="total-padding" #shim></div>
        <div class="scrollable-content" #content>
            <ng-content></ng-content>
        </div>
    `,
                host: {
                    '[style.overflow-y]': "parentScroll ? 'hidden' : 'auto'"
                },
                styles: [
                    `
    :host {
        overflow: hidden;
        position: relative;
        display: block;
        -webkit-overflow-scrolling: touch;
    }
    .scrollable-content {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        //   z-index:495;
    }
    .total-padding {
        width: 1px;
        opacity: 0;
    }

    .rtl {
        .scrollable-content {
            left: unset;
            right: 0;
        }
    }
  `
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, { totalRows: [{
            type: Input
        }], scrollbarWidth: [{
            type: Input
        }], scrollbarHeight: [{
            type: Input
        }], childWidth: [{
            type: Input
        }], childHeight: [{
            type: Input
        }], bufferAmount: [{
            type: Input
        }], scrollAnimationTime: [{
            type: Input
        }], doNotCheckAngularZone: [{
            type: Input
        }], parentScroll: [{
            type: Input
        }], isTable: [{
            type: Input
        }], change: [{
            type: Output
        }], load: [{
            type: Output
        }], start: [{
            type: Output
        }], end: [{
            type: Output
        }], contentElementRef: [{
            type: ViewChild,
            args: ['content', { read: ElementRef }]
        }], shimElementRef: [{
            type: ViewChild,
            args: ['shim', { read: ElementRef }]
        }], containerElementRef: [{
            type: ContentChild,
            args: ['container']
        }] }); })();
export class VirtualScrollModule {
}
VirtualScrollModule.ɵmod = i0.ɵɵdefineNgModule({ type: VirtualScrollModule });
VirtualScrollModule.ɵinj = i0.ɵɵdefineInjector({ factory: function VirtualScrollModule_Factory(t) { return new (t || VirtualScrollModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(VirtualScrollModule, { declarations: [VirtualScrollComponent], exports: [VirtualScrollComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(VirtualScrollModule, [{
        type: NgModule,
        args: [{
                exports: [VirtualScrollComponent],
                declarations: [VirtualScrollComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9saXN0L3ZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUM1RCxNQUFNLEVBQTRCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEtBQUssS0FBSyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUFzRDNDLE1BQU0sT0FBTyxzQkFBc0I7SUF1Ri9CLFlBQW1CLE9BQW1CLEVBQVUsUUFBbUIsRUFBVSxJQUFZO1FBQXRFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQXRGekYsVUFBVTtRQUNWLG9CQUFvQjtRQUdwQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBZXRCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBR3pCLHdCQUFtQixHQUFXLElBQUksQ0FBQztRQUduQywwQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFFL0IsbUJBQWMsR0FBRyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUE7UUFnQkQsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixXQUFXO1FBQ1gsMERBQTBEO1FBQzFELHVCQUF1QjtRQUd2QixXQUFNLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFHcEUsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBR2xELFVBQUssR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUduRSxRQUFHLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFh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QkFETCxNQUFNO1lBSVAsSUFBSTtrQkFESCxNQUFNO1lBSVAsS0FBSztrQkFESixNQUFNO1lBSVAsR0FBRztrQkFERixNQUFNO1lBSVAsaUJBQWlCO2tCQURoQixTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFJMUMsY0FBYztrQkFEYixTQUFTO21CQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFJdkMsbUJBQW1CO2tCQURsQixZQUFZO21CQUFDLFdBQVc7O0FBaVc3QixNQUFNLE9BQU8sbUJBQW1COzt1REFBbkIsbUJBQW1CO3FIQUFuQixtQkFBbUI7d0ZBQW5CLG1CQUFtQixtQkF2YW5CLHNCQUFzQixhQUF0QixzQkFBc0I7a0RBdWF0QixtQkFBbUI7Y0FKL0IsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUNqQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ01vZHVsZSwgTmdab25lLCBPbkNoYW5nZXMsXHJcbiAgICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgdHdlZW4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZUV2ZW50IHtcclxuICAgIHN0YXJ0PzogbnVtYmVyO1xyXG4gICAgZW5kPzogbnVtYmVyO1xyXG4gICAgZnJvbUluZGV4PzogbnVtYmVyO1xyXG4gICAgdG9JbmRleD86IG51bWJlcjtcclxuICAgIGFkZEF0U3RhcnQ/OiBib29sZWFuO1xyXG4gICAgY2FsY3VsYXRlZENoaWxkSGVpZ2h0PzogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmlydHVhbC1zY3JvbGwsW3ZpcnR1YWxTY3JvbGxdJyxcclxuICAgIGV4cG9ydEFzOiAndmlydHVhbFNjcm9sbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1wYWRkaW5nXCIgI3NoaW0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbGFibGUtY29udGVudFwiICNjb250ZW50PlxyXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbc3R5bGUub3ZlcmZsb3cteV0nOiBcInBhcmVudFNjcm9sbCA/ICdoaWRkZW4nIDogJ2F1dG8nXCJcclxuICAgIH0sXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgfVxyXG4gICAgLnNjcm9sbGFibGUtY29udGVudCB7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyAgIHotaW5kZXg6NDk1O1xyXG4gICAgfVxyXG4gICAgLnRvdGFsLXBhZGRpbmcge1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAucnRsIHtcclxuICAgICAgICAuc2Nyb2xsYWJsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaXJ0dWFsU2Nyb2xsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICAvL0BJbnB1dCgpXHJcbiAgICAvL2l0ZW1zOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICB0b3RhbFJvd3M6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNjcm9sbGJhcldpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNjcm9sbGJhckhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBjaGlsZFdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGNoaWxkSGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGJ1ZmZlckFtb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2Nyb2xsQW5pbWF0aW9uVGltZTogbnVtYmVyID0gMTUwMDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZG9Ob3RDaGVja0FuZ3VsYXJab25lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSByZWZyZXNoSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnJlZnJlc2godHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9wYXJlbnRTY3JvbGw6IEVsZW1lbnQgfCBXaW5kb3c7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IHBhcmVudFNjcm9sbChlbGVtZW50OiBFbGVtZW50IHwgV2luZG93KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudFNjcm9sbCA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BhcmVudFNjcm9sbCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5hZGRQYXJlbnRFdmVudEhhbmRsZXJzKHRoaXMuX3BhcmVudFNjcm9sbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhcmVudFNjcm9sbCgpOiBFbGVtZW50IHwgV2luZG93IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50U2Nyb2xsO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBpc1RhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy9AT3V0cHV0KClcclxuICAgIC8vdXBkYXRlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuICAgIC8vdmlld1BvcnRJdGVtczogYW55W107XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENoYW5nZUV2ZW50PigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgbG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHN0YXJ0OiBFdmVudEVtaXR0ZXI8Q2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFuZ2VFdmVudD4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIGVuZDogRXZlbnRFbWl0dGVyPENoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhbmdlRXZlbnQ+KCk7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxyXG4gICAgY29udGVudEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnc2hpbScsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxyXG4gICAgc2hpbUVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZCgnY29udGFpbmVyJylcclxuICAgIGNvbnRhaW5lckVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgcHJldmlvdXNTdGFydDogbnVtYmVyO1xyXG4gICAgcHJldmlvdXNFbmQ6IG51bWJlcjtcclxuICAgIHN0YXJ0dXBMb29wOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGN1cnJlbnRUd2VlbjogYW55O1xyXG5cclxuICAgIHByaXZhdGUgZGlzcG9zZVNjcm9sbEhhbmRsZXI6ICgpID0+IHZvaWQgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGRpc3Bvc2VSZXNpemVIYW5kbGVyOiAoKSA9PiB2b2lkIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKiBDYWNoZSBvZiB0aGUgbGFzdCBzY3JvbGwgaGVpZ2h0IHRvIHByZXZlbnQgc2V0dGluZyBDU1Mgd2hlbiBub3QgbmVlZGVkLiAqL1xyXG4gICAgcHJpdmF0ZSBsYXN0U2Nyb2xsSGVpZ2h0ID0gLTE7XHJcblxyXG4gICAgLyoqIENhY2hlIG9mIHRoZSBsYXN0IHRvcCBwYWRkaW5nIHRvIHByZXZlbnQgc2V0dGluZyBDU1Mgd2hlbiBub3QgbmVlZGVkLiAqL1xyXG4gICAgcHJpdmF0ZSBsYXN0VG9wUGFkZGluZyA9IC0xO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gMDsgLy8gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICB0aGlzLnNjcm9sbGJhckhlaWdodCA9IDA7IC8vIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAtIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudFNjcm9sbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFBhcmVudEV2ZW50SGFuZGxlcnModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZVBhcmVudEV2ZW50SGFuZGxlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1N0YXJ0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNFbmQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dzID0gKGNoYW5nZXMgYXMgYW55KS50b3RhbFJvd3MgfHwge307XHJcbiAgICAgICAgaWYgKCgoY2hhbmdlcyBhcyBhbnkpLnRvdGFsUm93cyAhPT0gdW5kZWZpbmVkICYmIHRvdGFsUm93cy5wcmV2aW91c1ZhbHVlID09PSB1bmRlZmluZWQpIHx8XHJcbiAgICAgICAgICAgIHRvdGFsUm93cy5wcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydHVwTG9vcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaWVWZXIgPSB0aGlzLmRldGVjdElFKCk7XHJcbiAgICAgICAgdmFyIGhlYWRlclJvd0hlaWdodCA9ICczNHB4JztcclxuXHJcbiAgICAgICAgLy8gU2V0IHBhZGRpbmcgdG9wIGZvciB0aGUgdGFibGUgdmlldyBiZWNhdXNlIHRoZSBoZWFkZXIgcm93LlxyXG4gICAgICAgIC8vdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdwYWRkaW5nLXRvcCcsIHRoaXMuaXNUYWJsZSA/IGhlYWRlclJvd0hlaWdodCA6ICcwJyk7XHJcblxyXG4gICAgICAgIGlmICghaWVWZXIgfHwgaWVWZXIgPj0gMTYpIHtcclxuICAgICAgICAgICAgLy8gbm90IElFIGFuZCB2ZXJzaW9uIDwgMTZcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvcCcsICcwJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGhlYWRlclJvd0hlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL09ubHkgZm9yIElFIGJyb3dzZXJzXHJcbiAgICAgICAgLyogIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYWJsZSAmJiAodWEuaW5kZXhPZignTVNJRSAnKSA+PSAwIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgPj0gMCB8fCB1YS5pbmRleE9mKCdFZGdlLycpID49IDApKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBoZWFkZXJSb3dIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvcCcsICcwJyk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdElFKCk6IGFueSB7XHJcbiAgICAgICAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblxyXG4gICAgICAgIC8vIFRlc3QgdmFsdWVzOyBVbmNvbW1lbnQgdG8gY2hlY2sgcmVzdWx0IOKAplxyXG5cclxuICAgICAgICAvLyBJRSAxMFxyXG4gICAgICAgIC8vIHVhID0gJ01vemlsbGEvNS4wIChjb21wYXRpYmxlOyBNU0lFIDEwLjA7IFdpbmRvd3MgTlQgNi4yOyBUcmlkZW50LzYuMCknO1xyXG5cclxuICAgICAgICAvLyBJRSAxMVxyXG4gICAgICAgIC8vIHVhID0gJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDYuMzsgVHJpZGVudC83LjA7IHJ2OjExLjApIGxpa2UgR2Vja28nO1xyXG5cclxuICAgICAgICAvLyBFZGdlIDEyIChTcGFydGFuKVxyXG4gICAgICAgIC8vIHVhID0gJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdPVzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMzkuMC4yMTcxLjcxIFNhZmFyaS81MzcuMzYgRWRnZS8xMi4wJztcclxuXHJcbiAgICAgICAgLy8gRWRnZSAxM1xyXG4gICAgICAgIC8vIHVhID0gJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS80Ni4wLjI0ODYuMCBTYWZhcmkvNTM3LjM2IEVkZ2UvMTMuMTA1ODYnO1xyXG5cclxuICAgICAgICB2YXIgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJyk7XHJcbiAgICAgICAgaWYgKG1zaWUgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodWEuc3Vic3RyaW5nKG1zaWUgKyA1LCB1YS5pbmRleE9mKCcuJywgbXNpZSkpLCAxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdHJpZGVudCA9IHVhLmluZGV4T2YoJ1RyaWRlbnQvJyk7XHJcbiAgICAgICAgaWYgKHRyaWRlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIElFIDExID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxyXG4gICAgICAgICAgICB2YXIgcnYgPSB1YS5pbmRleE9mKCdydjonKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhydiArIDMsIHVhLmluZGV4T2YoJy4nLCBydikpLCAxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZWRnZSA9IHVhLmluZGV4T2YoJ0VkZ2UvJyk7XHJcbiAgICAgICAgaWYgKGVkZ2UgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIEVkZ2UgKElFIDEyKykgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcoZWRnZSArIDUsIHVhLmluZGV4T2YoJy4nLCBlZGdlKSksIDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG90aGVyIGJyb3dzZXJcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaChmb3JjZVZpZXdwb3J0VXBkYXRlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5jYWxjdWxhdGVJdGVtcyhmb3JjZVZpZXdwb3J0VXBkYXRlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsSW50byhpbmRleDogYW55KSB7XHJcbiAgICAgICAgbGV0IGVsOiBFbGVtZW50ID0gdGhpcy5wYXJlbnRTY3JvbGwgaW5zdGFuY2VvZiBXaW5kb3cgPyBkb2N1bWVudC5ib2R5IDogdGhpcy5wYXJlbnRTY3JvbGwgfHwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IG9mZnNldFRvcCA9IHRoaXMuZ2V0RWxlbWVudHNPZmZzZXQoKTtcclxuICAgICAgICAvL2xldCBpbmRleDogbnVtYmVyID0gKHRoaXMuaXRlbXMgfHwgW10pLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLnRvdGFsUm93cykgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgZCA9IHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gICAgICAgIGxldCBzY3JvbGxUb3AgPSBNYXRoLmZsb29yKGluZGV4IC8gZC5pdGVtc1BlclJvdykgKiBkLmNoaWxkSGVpZ2h0IC0gZC5jaGlsZEhlaWdodCAqIE1hdGgubWluKGluZGV4LCB0aGlzLmJ1ZmZlckFtb3VudCk7XHJcblxyXG4gICAgICAgIGxldCBhbmltYXRpb25SZXF1ZXN0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VHdlZW4gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmN1cnJlbnRUd2Vlbi5zdG9wKCk7IH1cclxuXHJcbiAgICAgICAgLy8gdG90YWxseSBkaXNhYmxlIGFuaW1hdGVcclxuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsQW5pbWF0aW9uVGltZSkge1xyXG4gICAgICAgICAgICBlbC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFR3ZWVuID0gbmV3IHR3ZWVuLlR3ZWVuKHsgc2Nyb2xsVG9wOiBlbC5zY3JvbGxUb3AgfSlcclxuICAgICAgICAgICAgLnRvKHsgc2Nyb2xsVG9wIH0sIHRoaXMuc2Nyb2xsQW5pbWF0aW9uVGltZSlcclxuICAgICAgICAgICAgLmVhc2luZyh0d2Vlbi5FYXNpbmcuUXVhZHJhdGljLk91dClcclxuICAgICAgICAgICAgLm9uVXBkYXRlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKGRhdGEuc2Nyb2xsVG9wKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoZWwsICdzY3JvbGxUb3AnLCBkYXRhLnNjcm9sbFRvcCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2godHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vblN0b3AoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uUmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRlID0gKHRpbWU/KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFR3ZWVuLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFR3ZWVuLl9vYmplY3Quc2Nyb2xsVG9wICE9PSBzY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUmVxdWVzdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkUGFyZW50RXZlbnRIYW5kbGVycyhwYXJlbnRTY3JvbGw6IEVsZW1lbnQgfCBXaW5kb3cpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZVBhcmVudEV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgICBpZiAocGFyZW50U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VTY3JvbGxIYW5kbGVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4ocGFyZW50U2Nyb2xsLCAnbW91c2V3aGVlbCcsIF8udGhyb3R0bGUodGhpcy5yZWZyZXNoSGFuZGxlciwgMjAsIHsgbGVhZGluZzogZmFsc2UsIHRyYWlsaW5nOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHBhcmVudFNjcm9sbCwgJ3Njcm9sbCcsIF8uZGVib3VuY2UodGhpcy5yZWZyZXNoSGFuZGxlciwgMTUwKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy90aGlzLnJlbmRlcmVyLmxpc3RlbihwYXJlbnRTY3JvbGwsICdzY3JvbGwnLCBfLmRlYm91bmNlKF8udGhyb3R0bGUodGhpcy5yZWZyZXNoSGFuZGxlciwgMTUwKSwgNTApKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50U2Nyb2xsIGluc3RhbmNlb2YgV2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlU2Nyb2xsSGFuZGxlciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgXy5kZWJvdW5jZSh0aGlzLnJlZnJlc2hIYW5kbGVyLCAyNTApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlUGFyZW50RXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNwb3NlU2Nyb2xsSGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2VTY3JvbGxIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcG9zZVNjcm9sbEhhbmRsZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRpc3Bvc2VSZXNpemVIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcG9zZVJlc2l6ZUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlUmVzaXplSGFuZGxlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3VudEl0ZW1zUGVyUm93KCkge1xyXG4gICAgICAgIGxldCBvZmZzZXRUb3A7XHJcbiAgICAgICAgbGV0IGl0ZW1zUGVyUm93O1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY29udGVudEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGl0ZW1zUGVyUm93ID0gMDsgaXRlbXNQZXJSb3cgPCBjaGlsZHJlbi5sZW5ndGg7IGl0ZW1zUGVyUm93KyspIHtcclxuICAgICAgICAgICAgaWYgKG9mZnNldFRvcCAhPSB1bmRlZmluZWQgJiYgb2Zmc2V0VG9wICE9PSBjaGlsZHJlbltpdGVtc1BlclJvd10ub2Zmc2V0VG9wKSBicmVhaztcclxuICAgICAgICAgICAgb2Zmc2V0VG9wID0gY2hpbGRyZW5baXRlbXNQZXJSb3ddLm9mZnNldFRvcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zUGVyUm93O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RWxlbWVudHNPZmZzZXQoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgb2Zmc2V0VG9wID0gMDtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJFbGVtZW50UmVmICYmIHRoaXMuY29udGFpbmVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIG9mZnNldFRvcCArPSB0aGlzLmNvbnRhaW5lckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudFNjcm9sbCkge1xyXG4gICAgICAgICAgICBvZmZzZXRUb3AgKz0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2Zmc2V0VG9wO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlRGltZW5zaW9ucygpIHtcclxuICAgICAgICBsZXQgZWw6IEVsZW1lbnQgPSB0aGlzLnBhcmVudFNjcm9sbCBpbnN0YW5jZW9mIFdpbmRvdyA/IGRvY3VtZW50LmJvZHkgOiB0aGlzLnBhcmVudFNjcm9sbCB8fCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgaXRlbUNvdW50ID0gdGhpcy50b3RhbFJvd3M7XHJcbiAgICAgICAgbGV0IHZpZXdXaWR0aCA9IGVsLmNsaWVudFdpZHRoIC0gdGhpcy5zY3JvbGxiYXJXaWR0aDtcclxuICAgICAgICBsZXQgdmlld0hlaWdodCA9IGVsLmNsaWVudEhlaWdodCAtIHRoaXMuc2Nyb2xsYmFySGVpZ2h0O1xyXG5cclxuICAgICAgICBsZXQgY29udGVudERpbWVuc2lvbnM7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRXaWR0aCA9PSB1bmRlZmluZWQgfHwgdGhpcy5jaGlsZEhlaWdodCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5lckVsZW1lbnRSZWYgJiYgdGhpcy5jb250YWluZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZW50RGltZW5zaW9ucyA9IGNvbnRlbnQuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgICAgID8gY29udGVudC5jaGlsZHJlblswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZpZXdXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZpZXdIZWlnaHRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2hpbGRXaWR0aCA9IHRoaXMuY2hpbGRXaWR0aCB8fCBjb250ZW50RGltZW5zaW9ucy53aWR0aDtcclxuICAgICAgICBsZXQgY2hpbGRIZWlnaHQgPSB0aGlzLmNoaWxkSGVpZ2h0IHx8IGNvbnRlbnREaW1lbnNpb25zLmhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW1zUGVyUm93ID0gTWF0aC5tYXgoMSwgdGhpcy5jb3VudEl0ZW1zUGVyUm93KCkpO1xyXG4gICAgICAgIGxldCBpdGVtc1BlclJvd0J5Q2FsYyA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3Iodmlld1dpZHRoIC8gY2hpbGRXaWR0aCkpO1xyXG4gICAgICAgIGxldCBpdGVtc1BlckNvbCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3Iodmlld0hlaWdodCAvIGNoaWxkSGVpZ2h0KSk7XHJcbiAgICAgICAgbGV0IGVsU2Nyb2xsVG9wID0gdGhpcy5wYXJlbnRTY3JvbGwgaW5zdGFuY2VvZiBXaW5kb3cgPyB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwIDogZWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGxldCBzY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBlbFNjcm9sbFRvcCk7XHJcblxyXG4gICAgICAgIHZhciBzY3JvbGxIZWlnaHQgPSBjaGlsZEhlaWdodCAqIE1hdGguZmxvb3IoaXRlbUNvdW50IC8gaXRlbXNQZXJSb3cpICsgKGl0ZW1Db3VudCAlIGl0ZW1zUGVyUm93ICE9IDAgPyBjaGlsZEhlaWdodCA6IDApO1xyXG5cclxuICAgICAgICBsZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgICAgIC8qaWYgKHRoaXMuaXNUYWJsZSAmJiAodWEuaW5kZXhPZignTVNJRSAnKSA+PSAwIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgPj0gMCB8fCB1YS5pbmRleE9mKCdFZGdlLycpID49IDApKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCArPSAzNDtcclxuICAgICAgICB9Ki9cclxuICAgICAgICBpZiAoaXRlbXNQZXJDb2wgPT09IDEgJiYgTWF0aC5mbG9vcigoc2Nyb2xsVG9wIC8gc2Nyb2xsSGVpZ2h0KSAqIGl0ZW1Db3VudCkgKyBpdGVtc1BlclJvd0J5Q2FsYyA+PSBpdGVtQ291bnQpIHtcclxuICAgICAgICAgICAgaXRlbXNQZXJSb3cgPSBpdGVtc1BlclJvd0J5Q2FsYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGxIZWlnaHQgIT09IHRoaXMubGFzdFNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2hpbUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3Njcm9sbEhlaWdodH1weGApO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTY3JvbGxIZWlnaHQgPSBzY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpdGVtQ291bnQ6IGl0ZW1Db3VudCxcclxuICAgICAgICAgICAgdmlld1dpZHRoOiB2aWV3V2lkdGgsXHJcbiAgICAgICAgICAgIHZpZXdIZWlnaHQ6IHZpZXdIZWlnaHQsXHJcbiAgICAgICAgICAgIGNoaWxkV2lkdGg6IGNoaWxkV2lkdGgsXHJcbiAgICAgICAgICAgIGNoaWxkSGVpZ2h0OiBjaGlsZEhlaWdodCxcclxuICAgICAgICAgICAgaXRlbXNQZXJSb3c6IGl0ZW1zUGVyUm93LFxyXG4gICAgICAgICAgICBpdGVtc1BlckNvbDogaXRlbXNQZXJDb2wsXHJcbiAgICAgICAgICAgIGl0ZW1zUGVyUm93QnlDYWxjOiBpdGVtc1BlclJvd0J5Q2FsYyxcclxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGN1bGF0ZUl0ZW1zKGZvcmNlVmlld3BvcnRVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5kb05vdENoZWNrQW5ndWxhclpvbmUpIHtcclxuICAgICAgICAgICAgTmdab25lLmFzc2VydE5vdEluQW5ndWxhclpvbmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBlbCA9IHRoaXMucGFyZW50U2Nyb2xsIGluc3RhbmNlb2YgV2luZG93ID8gZG9jdW1lbnQuYm9keSA6IHRoaXMucGFyZW50U2Nyb2xsIHx8IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5jYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgICAgIC8vbGV0IGl0ZW1zID0gdGhpcy5pdGVtcyB8fCBbXTtcclxuICAgICAgICBsZXQgb2Zmc2V0VG9wID0gdGhpcy5nZXRFbGVtZW50c09mZnNldCgpO1xyXG4gICAgICAgIGxldCBlbFNjcm9sbFRvcCA9IHRoaXMucGFyZW50U2Nyb2xsIGluc3RhbmNlb2YgV2luZG93ID8gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMCA6IGVsLnNjcm9sbFRvcDtcclxuXHJcbiAgICAgICAgaWYgKGVsU2Nyb2xsVG9wID4gZC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgZWxTY3JvbGxUb3AgPSBkLnNjcm9sbEhlaWdodCArIG9mZnNldFRvcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBlbFNjcm9sbFRvcCAtIG9mZnNldFRvcCk7XHJcbiAgICAgICAgbGV0IGluZGV4QnlTY3JvbGxUb3AgPSAoKHNjcm9sbFRvcCAvIGQuc2Nyb2xsSGVpZ2h0KSAqIGQuaXRlbUNvdW50KSAvIGQuaXRlbXNQZXJSb3c7XHJcbiAgICAgICAgbGV0IGVuZCA9IE1hdGgubWluKGQuaXRlbUNvdW50LCBNYXRoLmNlaWwoaW5kZXhCeVNjcm9sbFRvcCkgKiBkLml0ZW1zUGVyUm93ICsgZC5pdGVtc1BlclJvdyAqIChkLml0ZW1zUGVyQ29sICsgMSkpO1xyXG5cclxuICAgICAgICBsZXQgbWF4U3RhcnRFbmQgPSBlbmQ7XHJcbiAgICAgICAgY29uc3QgbW9kRW5kID0gZW5kICUgZC5pdGVtc1BlclJvdztcclxuICAgICAgICBpZiAobW9kRW5kKSB7XHJcbiAgICAgICAgICAgIG1heFN0YXJ0RW5kID0gZW5kICsgZC5pdGVtc1BlclJvdyAtIG1vZEVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1heFN0YXJ0ID0gTWF0aC5tYXgoMCwgbWF4U3RhcnRFbmQgLSBkLml0ZW1zUGVyQ29sICogZC5pdGVtc1BlclJvdyAtIGQuaXRlbXNQZXJSb3cpO1xyXG4gICAgICAgIGxldCBzdGFydCA9IE1hdGgubWluKG1heFN0YXJ0LCBNYXRoLmZsb29yKGluZGV4QnlTY3JvbGxUb3ApICogZC5pdGVtc1BlclJvdyk7XHJcblxyXG4gICAgICAgIGxldCBzdGFydFJvdyA9IE1hdGguY2VpbChzdGFydCAvIGQuaXRlbXNQZXJSb3cpO1xyXG5cclxuICAgICAgICBjb25zdCB0b3BQYWRkaW5nID0gdGhpcy50b3RhbFJvd3MgPT09IDAgPyAwIDogZC5jaGlsZEhlaWdodCAqIHN0YXJ0Um93IC0gZC5jaGlsZEhlaWdodCAqIE1hdGgubWluKHN0YXJ0Um93LCB0aGlzLmJ1ZmZlckFtb3VudCk7XHJcblxyXG4gICAgICAgIGlmICh0b3BQYWRkaW5nICE9PSB0aGlzLmxhc3RUb3BQYWRkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHt0b3BQYWRkaW5nfXB4KWApO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGVudEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dlYmtpdFRyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dG9wUGFkZGluZ31weClgKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG9wUGFkZGluZyA9IHRvcFBhZGRpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnVmZmVyID0gdGhpcy5idWZmZXJBbW91bnQgKiBkLml0ZW1zUGVyUm93O1xyXG4gICAgICAgIHN0YXJ0ID0gIWlzTmFOKHN0YXJ0KSA/IHN0YXJ0IDogLTE7XHJcbiAgICAgICAgZW5kID0gIWlzTmFOKGVuZCkgPyBlbmQgOiAtMTtcclxuICAgICAgICBzdGFydCAtPSBidWZmZXI7XHJcbiAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgwLCBzdGFydCk7XHJcbiAgICAgICAgZW5kICs9IGJ1ZmZlcjtcclxuICAgICAgICBlbmQgPSBNYXRoLm1pbih0aGlzLnRvdGFsUm93cywgZW5kKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0ICE9PSB0aGlzLnByZXZpb3VzU3RhcnQgfHwgZW5kICE9PSB0aGlzLnByZXZpb3VzRW5kIHx8IGZvcmNlVmlld3BvcnRVcGRhdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHNjcm9sbCBsaXN0XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBlbmQgPj0gMCA/IGVuZCA6IDA7IC8vIFRvIHByZXZlbnQgZnJvbSBhY2NpZGVudGFsbHkgc2VsZWN0aW5nIHRoZSBlbnRpcmUgYXJyYXkgd2l0aCBhIG5lZ2F0aXZlIDEgKC0xKSBpbiB0aGUgZW5kIHBvc2l0aW9uLlxyXG5cclxuICAgICAgICAgICAgICAgIC8vdGhpcy52aWV3UG9ydEl0ZW1zID0gdGhpcy5pdGVtcy5zbGljZShzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy51cGRhdGUuZW1pdCh0aGlzLnZpZXdQb3J0SXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVtaXQgJ3N0YXJ0JyBldmVudFxyXG4gICAgICAgICAgICAgICAgLy9pZiAoc3RhcnQgIT09IHRoaXMucHJldmlvdXNTdGFydCAmJiB0aGlzLnN0YXJ0dXBMb29wID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgdGhpcy5zdGFydC5lbWl0KHsgc3RhcnQsIGVuZCB9KTtcclxuICAgICAgICAgICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVtaXQgJ2VuZCcgZXZlbnRcclxuICAgICAgICAgICAgICAgIC8vaWYgKGVuZCAhPT0gdGhpcy5wcmV2aW91c0VuZCAmJiB0aGlzLnN0YXJ0dXBMb29wID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgdGhpcy5lbmQuZW1pdCh7IHN0YXJ0LCBlbmQgfSk7XHJcbiAgICAgICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUbyBrbm93IGlmIHRvIGFkZCBhdCB0aGUgc3RhcnQgb2YgdGhlIGxpc3Qgb3IgYXQgdGhlIGVuZC5cclxuICAgICAgICAgICAgICAgIGxldCBhZGRBdFN0YXJ0ID0gdGhpcy5wcmV2aW91c0VuZCA+PSBlbmQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RhcnQgPSBzdGFydDtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNFbmQgPSBlbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnR1cExvb3AgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGN1bGF0ZWRDaGlsZEhlaWdodCA9IGQuY2hpbGRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7IHN0YXJ0LCBlbmQsIGFkZEF0U3RhcnQsIGNhbGN1bGF0ZWRDaGlsZEhlaWdodCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXJ0dXBMb29wID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnR1cExvb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gQWRkZWQgdG8ga25vdyB3aGVuIHRoZSBzY3JvbGwgaXMgcmVhZHkgKFVJIGVsZW1lbnRzIGFyZSBkaXNwbGF5ZWQgYWxyZWFkeSkuXHJcbiAgICAgICAgICAgIHRoaXMubG9hZC5lbWl0KCk7IFxyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBleHBvcnRzOiBbVmlydHVhbFNjcm9sbENvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtWaXJ0dWFsU2Nyb2xsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlydHVhbFNjcm9sbE1vZHVsZSB7IH1cclxuIl19