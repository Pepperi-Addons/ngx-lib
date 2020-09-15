import { EventEmitter, NgZone, ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵviewQuery, ɵɵstyleProp, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵelement, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵsetClassMetadata, Component, Input, Output, ViewChild, ContentChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵproperty, ɵɵpureFunction1, ɵɵclassMapInterpolate1, ɵɵpropertyInterpolate, ɵɵtextInterpolate1, ɵɵpipe, ɵɵpipeBind1, ɵɵtemplate, ɵɵpureFunction5, ɵɵelementContainer, ɵɵreference, ɵɵpureFunction2, ɵɵclassMap, ɵɵpureFunction3, ChangeDetectorRef, ɵɵresolveDocument, ɵɵresolveWindow, ɵɵtemplateRefExtractor, ɵɵinject } from '@angular/core';
import { NgIf, NgTemplateOutlet, NgClass, NgForOf, NgStyle, CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LAYOUT_TYPE, FIELD_TYPE, SCREEN_SIZE, LayoutService, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconArrowDown, pepperiIconArrowEither, pepperiIconArrowUp, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFormComponent, PepperiFormModule } from '@pepperi-addons/ngx-lib/form';
import { Tween, Easing } from '@tweenjs/tween.js';
import { delay } from 'rxjs/operators';
import disableScroll from 'disable-scroll';
import * as $ from 'jquery';
import { TranslatePipe } from '@ngx-translate/core';

const _c0 = ["container"];
const _c1 = ["content"];
const _c2 = ["shim"];
const _c3 = ["*"];
class VirtualScrollComponent {
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
        this.currentTween = new Tween({ scrollTop: el.scrollTop })
            .to({ scrollTop }, this.scrollAnimationTime)
            .easing(Easing.Quadratic.Out)
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
VirtualScrollComponent.ɵfac = function VirtualScrollComponent_Factory(t) { return new (t || VirtualScrollComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone)); };
VirtualScrollComponent.ɵcmp = ɵɵdefineComponent({ type: VirtualScrollComponent, selectors: [["virtual-scroll"], ["", "virtualScroll", ""]], contentQueries: function VirtualScrollComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerElementRef = _t.first);
    } }, viewQuery: function VirtualScrollComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c1, true, ElementRef);
        ɵɵviewQuery(_c2, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentElementRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.shimElementRef = _t.first);
    } }, hostVars: 2, hostBindings: function VirtualScrollComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵstyleProp("overflow-y", ctx.parentScroll ? "hidden" : "auto");
    } }, inputs: { totalRows: "totalRows", scrollbarWidth: "scrollbarWidth", scrollbarHeight: "scrollbarHeight", childWidth: "childWidth", childHeight: "childHeight", bufferAmount: "bufferAmount", scrollAnimationTime: "scrollAnimationTime", doNotCheckAngularZone: "doNotCheckAngularZone", parentScroll: "parentScroll", isTable: "isTable" }, outputs: { change: "change", load: "load", start: "start", end: "end" }, exportAs: ["virtualScroll"], features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 5, vars: 0, consts: [[1, "total-padding"], ["shim", ""], [1, "scrollable-content"], ["content", ""]], template: function VirtualScrollComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelement(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%] {\n        overflow: hidden;\n        position: relative;\n        display: block;\n        -webkit-overflow-scrolling: touch;\n    }\n    .scrollable-content[_ngcontent-%COMP%] {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        //   z-index:495;\n    }\n    .total-padding[_ngcontent-%COMP%] {\n        width: 1px;\n        opacity: 0;\n    }\n\n    .rtl[_ngcontent-%COMP%] {\n        .scrollable-content {\n            left: unset;\n            right: 0;\n        }\n    }"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(VirtualScrollComponent, [{
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
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: NgZone }]; }, { totalRows: [{
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
class VirtualScrollModule {
}
VirtualScrollModule.ɵmod = ɵɵdefineNgModule({ type: VirtualScrollModule });
VirtualScrollModule.ɵinj = ɵɵdefineInjector({ factory: function VirtualScrollModule_Factory(t) { return new (t || VirtualScrollModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(VirtualScrollModule, { declarations: [VirtualScrollComponent], exports: [VirtualScrollComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(VirtualScrollModule, [{
        type: NgModule,
        args: [{
                exports: [VirtualScrollComponent],
                declarations: [VirtualScrollComponent]
            }]
    }], null, null); })();

const _c0$1 = ["noVirtualScrollCont"];
const _c1$1 = ["tableHeader"];
const _c2$1 = ["selectAllCB"];
function PepperiListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.noDataFoundMsg);
} }
const _c3$1 = function (a0) { return { visibility: a0 }; };
function PepperiListComponent_ng_container_1_div_1_mat_checkbox_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 13, 14);
    ɵɵlistener("change", function PepperiListComponent_ng_container_1_div_1_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(3); return ctx_r14.selectAllItemsForActions($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c3$1, ctx_r11.selectionTypeForActions == ctx_r11.SELECTION_TYPE_FOR_ACTIONS.Single || ctx_r11.selectionTypeForActions == ctx_r11.SELECTION_TYPE_FOR_ACTIONS.Multi && ctx_r11.hideAllSelectionInMulti ? "hidden" : "visible"))("indeterminate", ctx_r11.isAllSelected ? ctx_r11.unSelectedItems.size > 0 && ctx_r11.unSelectedItems.size < ctx_r11.totalRows : ctx_r11.selectedItems.size > 0 && !ctx_r11.getIsAllSelectedForActions())("disabled", ctx_r11.disabled || ctx_r11.selectionTypeForActions === ctx_r11.SELECTION_TYPE_FOR_ACTIONS.Single)("checked", ctx_r11.getIsAllSelectedForActions());
} }
function PepperiListComponent_ng_container_1_div_1_div_5_label_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = ɵɵnextContext().$implicit;
    ɵɵclassMapInterpolate1("header-label body-sm pull-left flip text-align-", field_r16.Layout.XAlignment, "");
    ɵɵpropertyInterpolate("id", field_r16.ApiName);
    ɵɵpropertyInterpolate("title", field_r16.Title);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", field_r16.Title, " ");
} }
function PepperiListComponent_ng_container_1_div_1_div_5_label_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label", 21);
    ɵɵtext(1, "\u00A0");
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = ɵɵnextContext().$implicit;
    ɵɵpropertyInterpolate("id", field_r16.ApiName);
} }
function PepperiListComponent_ng_container_1_div_1_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 22);
    ɵɵlistener("mousedown", function PepperiListComponent_ng_container_1_div_1_div_5_div_3_Template_div_mousedown_0_listener($event) { ɵɵrestoreView(_r25); const field_r16 = ɵɵnextContext().$implicit; const ctx_r24 = ɵɵnextContext(3); return ctx_r24.onListResizeStart($event, field_r16.ApiName); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 23);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵelement(1, "pep-icon", 26);
    ɵɵelementEnd();
} }
const _c4 = function (a0) { return { "sort-by": a0 }; };
function PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 27);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "pep-icon", 28);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = ɵɵnextContext(2).$implicit;
    const ctx_r28 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 2, "LIST.SORT_ASC"));
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c4, field_r16.ApiName === ctx_r28.sortBy && ctx_r28.isAsc));
} }
function PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 27);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "pep-icon", 29);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = ɵɵnextContext(2).$implicit;
    const ctx_r29 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 2, "LIST.SORT_DESC"));
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c4, field_r16.ApiName === ctx_r29.sortBy && !ctx_r29.isAsc));
} }
const _c5 = function (a0) { return { "has-sorting": a0 }; };
function PepperiListComponent_ng_container_1_div_1_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtemplate(1, PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_1_Template, 2, 0, "mat-icon", 0);
    ɵɵtemplate(2, PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_2_Template, 3, 6, "mat-icon", 25);
    ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_3_Template, 3, 6, "mat-icon", 25);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = ɵɵnextContext().$implicit;
    const ctx_r21 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c5, field_r16.ApiName === ctx_r21.sortBy));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r16.ApiName !== ctx_r21.sortBy);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r16.ApiName === ctx_r21.sortBy && !ctx_r21.isAsc);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r16.ApiName === ctx_r21.sortBy && ctx_r21.isAsc);
} }
const _c6 = function (a0) { return { width: a0 }; };
const _c7 = function (a0, a1, a2, a3, a4) { return { "support-sorting": a0, "has-sorting": a1, "is-resizing": a2, "is-first": a3, "is-last": a4 }; };
function PepperiListComponent_ng_container_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15);
    ɵɵlistener("click", function PepperiListComponent_ng_container_1_div_1_div_5_Template_div_click_0_listener($event) { ɵɵrestoreView(_r34); const field_r16 = ctx.$implicit; const ctx_r33 = ɵɵnextContext(3); return ctx_r33.supportSorting ? ctx_r33.onListSortingChange(field_r16.ApiName, ctx_r33.sortBy !== null && ctx_r33.sortBy != field_r16.ApiName ? true : !ctx_r33.isAsc, $event) : false; });
    ɵɵtemplate(1, PepperiListComponent_ng_container_1_div_1_div_5_label_1_Template, 2, 6, "label", 16);
    ɵɵtemplate(2, PepperiListComponent_ng_container_1_div_1_div_5_label_2_Template, 2, 1, "label", 17);
    ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_1_div_5_div_3_Template, 3, 0, "div", 18);
    ɵɵtemplate(4, PepperiListComponent_ng_container_1_div_1_div_5_div_4_Template, 4, 6, "div", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = ctx.$implicit;
    const j_r17 = ctx.index;
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(6, _c6, field_r16.calcTitleColumnWidthString))("ngClass", ɵɵpureFunction5(8, _c7, ctx_r12.supportSorting, field_r16.ApiName === ctx_r12.sortBy, field_r16.ApiName === ctx_r12.pressedColumn, j_r17 === 0 && ctx_r12.selectionTypeForActions !== ctx_r12.SELECTION_TYPE_FOR_ACTIONS.Multi, j_r17 === (ctx_r12.uiControl == null ? null : ctx_r12.uiControl.ControlFields == null ? null : ctx_r12.uiControl.ControlFields.length) - 1));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r16.Title != "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r16.Title == "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r12.supportResizing);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r12.supportSorting);
} }
const _c8 = function (a0) { return { "below-header-and-top-bar": a0 }; };
function PepperiListComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8, 9);
    ɵɵlistener("mouseup", function PepperiListComponent_ng_container_1_div_1_Template_div_mouseup_0_listener($event) { ɵɵrestoreView(_r36); const ctx_r35 = ɵɵnextContext(2); return ctx_r35.onListResizeEnd($event); })("mouseenter", function PepperiListComponent_ng_container_1_div_1_Template_div_mouseenter_0_listener($event) { ɵɵrestoreView(_r36); const ctx_r37 = ɵɵnextContext(2); return ctx_r37.onListHeaderMouseEnter($event); })("mouseleave", function PepperiListComponent_ng_container_1_div_1_Template_div_mouseleave_0_listener($event) { ɵɵrestoreView(_r36); const ctx_r38 = ɵɵnextContext(2); return ctx_r38.onListHeaderMouseLeave($event); })("mousemove", function PepperiListComponent_ng_container_1_div_1_Template_div_mousemove_0_listener($event) { ɵɵrestoreView(_r36); const ctx_r39 = ɵɵnextContext(2); return ctx_r39.onListResize($event); });
    ɵɵelementStart(2, "fieldset", 10);
    ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_1_mat_checkbox_3_Template, 2, 6, "mat-checkbox", 11);
    ɵɵelementStart(4, "fieldset");
    ɵɵtemplate(5, PepperiListComponent_ng_container_1_div_1_div_5_Template, 5, 14, "div", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c8, ctx_r6.parentScroll == null));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r6.selectionTypeForActions !== ctx_r6.SELECTION_TYPE_FOR_ACTIONS.None);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r6.uiControl == null ? null : ctx_r6.uiControl.ControlFields);
} }
function PepperiListComponent_ng_container_1_virtual_scroll_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c9 = function (a0, a1) { return { "table-body": a0, "cards-body": a1 }; };
function PepperiListComponent_ng_container_1_virtual_scroll_2_Template(rf, ctx) { if (rf & 1) {
    const _r42 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "virtual-scroll", 30);
    ɵɵlistener("load", function PepperiListComponent_ng_container_1_virtual_scroll_2_Template_virtual_scroll_load_0_listener($event) { ɵɵrestoreView(_r42); const ctx_r41 = ɵɵnextContext(2); return ctx_r41.onListLoad($event); })("change", function PepperiListComponent_ng_container_1_virtual_scroll_2_Template_virtual_scroll_change_0_listener($event) { ɵɵrestoreView(_r42); const ctx_r43 = ɵɵnextContext(2); return ctx_r43.onListChange($event); });
    ɵɵtemplate(1, PepperiListComponent_ng_container_1_virtual_scroll_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    const _r2 = ɵɵreference(3);
    ɵɵproperty("totalRows", ctx_r7.totalRows)("isTable", ctx_r7.isTable)("parentScroll", ctx_r7.parentScroll ? ctx_r7.parentScroll : ctx_r7.nativeWindow)("bufferAmount", ctx_r7.isReport ? ctx_r7.isTable ? 20 : 3 : ctx_r7.isTable ? 15 : 3)("ngClass", ɵɵpureFunction2(6, _c9, ctx_r7.isTable, !ctx_r7.isTable));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2);
} }
function PepperiListComponent_ng_container_1_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiListComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 31, 32);
    ɵɵtemplate(2, PepperiListComponent_ng_container_1_div_3_ng_container_2_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    const _r2 = ɵɵreference(3);
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c9, ctx_r8.isTable, !ctx_r8.isTable));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r2);
} }
function PepperiListComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiListComponent_ng_container_1_div_1_Template, 6, 5, "div", 4);
    ɵɵtemplate(2, PepperiListComponent_ng_container_1_virtual_scroll_2_Template, 2, 9, "virtual-scroll", 5);
    ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_3_Template, 3, 5, "div", 6);
    ɵɵtemplate(4, PepperiListComponent_ng_container_1_ng_container_4_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r4 = ɵɵreference(5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.isTable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.useVirtualScroll);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.useVirtualScroll);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r4);
} }
function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_checkbox_3_Template(rf, ctx) { if (rf & 1) {
    const _r55 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 39);
    ɵɵlistener("change", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) { ɵɵrestoreView(_r55); const pepperiObjectInput_r47 = ɵɵnextContext(2).$implicit; const ctx_r54 = ɵɵnextContext(2); return ctx_r54.selectItemForActions($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
    ɵɵelementEnd();
} if (rf & 2) {
    const pepperiObjectInput_r47 = ɵɵnextContext(2).$implicit;
    const ctx_r52 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r52.getIsDisabled(pepperiObjectInput_r47))("ngStyle", ɵɵpureFunction1(3, _c3$1, ctx_r52.isTouchDevice || (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r52.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r52.hoveredItemId || ctx_r52.isAllSelected || ctx_r52.selectedItems.size > 0 ? "visible" : "hidden"))("checked", ctx_r52.getIsSelectedForActions(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type));
} }
function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r59 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-radio-button", 40);
    ɵɵlistener("change", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_radio_button_4_Template_mat_radio_button_change_0_listener($event) { ɵɵrestoreView(_r59); const pepperiObjectInput_r47 = ɵɵnextContext(2).$implicit; const ctx_r58 = ɵɵnextContext(2); return ctx_r58.selectItemForActions($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
    ɵɵelementEnd();
} if (rf & 2) {
    const pepperiObjectInput_r47 = ɵɵnextContext(2).$implicit;
    const ctx_r53 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r53.getIsDisabled(pepperiObjectInput_r47))("checked", ctx_r53.getIsSelectedForActions(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type));
} }
const _c10 = function (a0, a1) { return { selected: a0, highlighted: a1 }; };
const _c11 = function (a0, a1) { return { height: a0, visibility: a1 }; };
const _c12 = function (a0) { return { "background-color": a0 }; };
function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 34);
    ɵɵlistener("mouseenter", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseenter_1_listener($event) { ɵɵrestoreView(_r63); const pepperiObjectInput_r47 = ɵɵnextContext().$implicit; const ctx_r62 = ɵɵnextContext(2); return ctx_r62.onTableRowMouseEnter($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); })("mouseleave", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseleave_1_listener($event) { ɵɵrestoreView(_r63); const pepperiObjectInput_r47 = ɵɵnextContext().$implicit; const ctx_r65 = ɵɵnextContext(2); return ctx_r65.onTableRowMouseLeave($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
    ɵɵelementStart(2, "fieldset", 35);
    ɵɵtemplate(3, PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_checkbox_3_Template, 1, 5, "mat-checkbox", 36);
    ɵɵtemplate(4, PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_radio_button_4_Template, 1, 2, "mat-radio-button", 37);
    ɵɵelementStart(5, "pep-form", 38);
    ɵɵlistener("notifyValueChanged", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyValueChanged_5_listener($event) { ɵɵrestoreView(_r63); const ctx_r67 = ɵɵnextContext(3); return ctx_r67.onValueChanged($event); })("notifyFieldClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyFieldClicked_5_listener($event) { ɵɵrestoreView(_r63); const ctx_r68 = ɵɵnextContext(3); return ctx_r68.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyMenuItemClicked_5_listener($event) { ɵɵrestoreView(_r63); const ctx_r69 = ɵɵnextContext(3); return ctx_r69.onCustomizeFieldMenuClicked($event); })("click", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_click_5_listener($event) { ɵɵrestoreView(_r63); const pepperiObjectInput_r47 = ɵɵnextContext().$implicit; const ctx_r70 = ɵɵnextContext(2); return ctx_r70.itemClicked($event, pepperiObjectInput_r47); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const pepperiObjectInput_r47 = ɵɵnextContext().$implicit;
    const ctx_r50 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(19, _c10, ctx_r50.isItemSelected(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type), (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r50.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r50.selectedItemId))("ngStyle", ɵɵpureFunction2(22, _c11, ctx_r50.calculatedObjectHeight, ctx_r50.showItems || pepperiObjectInput_r47 ? "visible" : "hidden"));
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(25, _c12, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.BackgroundColor));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r50.selectionTypeForActions == ctx_r50.SELECTION_TYPE_FOR_ACTIONS.Multi || ctx_r50.selectionTypeForActions == ctx_r50.SELECTION_TYPE_FOR_ACTIONS.SingleAction);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r50.selectionTypeForActions == ctx_r50.SELECTION_TYPE_FOR_ACTIONS.Single);
    ɵɵadvance(1);
    ɵɵproperty("checkForChanges", ctx_r50.checkForChanges)("uiControlHeader", ctx_r50.uiControl)("firstFieldAsLink", ctx_r50.firstFieldAsLink)("pepperiObjectInput", pepperiObjectInput_r47)("canEditObject", !ctx_r50.disabled && (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.IsEditable))("objectId", ctx_r50.objectId)("parentId", ctx_r50.parentId)("searchCode", ctx_r50.searchCode)("lockEvents", ctx_r50.disableSelectionItems)("isReport", ctx_r50.isReport)("layoutType", ctx_r50.LAYOUT_TYPE.PepperiTable)("listType", ctx_r50.listType)("isActive", ((pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r50.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r50.selectedItemId || (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r50.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r50.hoveredItemId) && !ctx_r50.isTouchDevice)("pageType", ctx_r50.pageType);
} }
function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_mat_checkbox_2_Template(rf, ctx) { if (rf & 1) {
    const _r75 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 44);
    ɵɵlistener("change", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_mat_checkbox_2_Template_mat_checkbox_change_0_listener($event) { ɵɵrestoreView(_r75); const pepperiObjectInput_r47 = ɵɵnextContext(2).$implicit; const ctx_r74 = ɵɵnextContext(2); return ctx_r74.selectItemForActions($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
    ɵɵelementEnd();
} if (rf & 2) {
    const pepperiObjectInput_r47 = ɵɵnextContext(2).$implicit;
    const ctx_r73 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r73.getIsDisabled(pepperiObjectInput_r47))("checked", ctx_r73.getIsSelectedForActions(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type));
} }
const _c13 = function (a0, a1, a2) { return { selected: a0, highlighted: a1, cardView: a2 }; };
function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r79 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 41);
    ɵɵlistener("mouseenter", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseenter_1_listener($event) { ɵɵrestoreView(_r79); const pepperiObjectInput_r47 = ɵɵnextContext().$implicit; const ctx_r78 = ɵɵnextContext(2); return ctx_r78.onCardMouseEnter($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); })("mouseleave", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseleave_1_listener($event) { ɵɵrestoreView(_r79); const pepperiObjectInput_r47 = ɵɵnextContext().$implicit; const ctx_r81 = ɵɵnextContext(2); return ctx_r81.onCardMouseLeave($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
    ɵɵtemplate(2, PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_mat_checkbox_2_Template, 1, 2, "mat-checkbox", 42);
    ɵɵelementStart(3, "pep-form", 43);
    ɵɵlistener("notifyValueChanged", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyValueChanged_3_listener($event) { ɵɵrestoreView(_r79); const ctx_r83 = ɵɵnextContext(3); return ctx_r83.onValueChanged($event); })("notifyFieldClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyFieldClicked_3_listener($event) { ɵɵrestoreView(_r79); const ctx_r84 = ɵɵnextContext(3); return ctx_r84.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyMenuItemClicked_3_listener($event) { ɵɵrestoreView(_r79); const ctx_r85 = ɵɵnextContext(3); return ctx_r85.onCustomizeFieldMenuClicked($event); })("click", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_click_3_listener($event) { ɵɵrestoreView(_r79); const pepperiObjectInput_r47 = ɵɵnextContext().$implicit; const ctx_r86 = ɵɵnextContext(2); return ctx_r86.itemClicked($event, pepperiObjectInput_r47); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const pepperiObjectInput_r47 = ɵɵnextContext().$implicit;
    const ctx_r51 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r51.itemClass);
    ɵɵproperty("ngClass", ɵɵpureFunction3(19, _c13, ctx_r51.isItemSelected(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type), (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r51.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r51.selectedItemId, ctx_r51.isCardView))("ngStyle", ɵɵpureFunction2(23, _c11, ctx_r51.calculatedObjectHeight, ctx_r51.showItems || pepperiObjectInput_r47 ? "visible" : "hidden"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r51.showSelection);
    ɵɵadvance(1);
    ɵɵproperty("firstFieldAsLink", ctx_r51.isCardView ? ctx_r51.firstFieldAsLink : false)("checkForChanges", ctx_r51.checkForChanges)("uiControlHeader", ctx_r51.uiControl)("pepperiObjectInput", pepperiObjectInput_r47)("isCardView", ctx_r51.isCardView)("canEditObject", !ctx_r51.disabled && (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.IsEditable))("objectId", ctx_r51.objectId)("parentId", ctx_r51.parentId)("searchCode", ctx_r51.searchCode)("lockEvents", ctx_r51.disableSelectionItems)("layoutType", ctx_r51.getThumbnailsLayout())("listType", ctx_r51.listType)("isActive", ((pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r51.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r51.selectedItemId || (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r51.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r51.hoveredItemId) && !ctx_r51.isTouchDevice)("pageType", ctx_r51.pageType);
} }
function PepperiListComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template, 6, 27, "ng-container", 0);
    ɵɵtemplate(2, PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template, 4, 26, "ng-container", 0);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r46 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r46.isTable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r46.isTable);
} }
function PepperiListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiListComponent_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 33);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r3.scrollItems)("ngForTrackBy", ctx_r3.trackByFunc);
} }
function PepperiListComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 48);
    ɵɵelementStart(1, "label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r91 = ctx.$implicit;
    const j_r92 = ctx.index;
    const ctx_r90 = ɵɵnextContext(3);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c6, field_r91.calcTitleColumnWidthString));
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("total-label body-sm text-align-", field_r91.Layout.XAlignment, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r90.totalsRow[j_r92], " ");
} }
function PepperiListComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 46);
    ɵɵelementStart(1, "fieldset", 10);
    ɵɵtemplate(2, PepperiListComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 47);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r89 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r89.uiControl == null ? null : ctx_r89.uiControl.ControlFields);
} }
function PepperiListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiListComponent_ng_template_4_div_0_Template, 3, 1, "div", 45);
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", (ctx_r5.totalsRow == null ? null : ctx_r5.totalsRow.length) > 0 && ctx_r5.totalsRow.length <= (ctx_r5.uiControl == null ? null : ctx_r5.uiControl.ControlFields.length));
} }
var SELECTION_TYPE_FOR_ACTIONS;
(function (SELECTION_TYPE_FOR_ACTIONS) {
    SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["None"] = 0] = "None";
    SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["Single"] = 1] = "Single";
    SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["Multi"] = 2] = "Multi";
    SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["SingleAction"] = 3] = "SingleAction";
})(SELECTION_TYPE_FOR_ACTIONS || (SELECTION_TYPE_FOR_ACTIONS = {}));
var VIEW_TYPE;
(function (VIEW_TYPE) {
    VIEW_TYPE[VIEW_TYPE["None"] = 0] = "None";
    VIEW_TYPE[VIEW_TYPE["Card"] = 1] = "Card";
    VIEW_TYPE[VIEW_TYPE["Line"] = 2] = "Line";
    VIEW_TYPE[VIEW_TYPE["Table"] = 3] = "Table";
    VIEW_TYPE[VIEW_TYPE["Map"] = 4] = "Map";
})(VIEW_TYPE || (VIEW_TYPE = {}));
class SelectionData {
}
class PepperiListComponent {
    constructor(element, layoutService, cd, renderer) {
        this.element = element;
        this.layoutService = layoutService;
        this.cd = cd;
        this.renderer = renderer;
        this.currentListTypeTranslation = '';
        this.noDataFoundMsg = 'Items not found';
        this.selectionTypeForActions = SELECTION_TYPE_FOR_ACTIONS.Multi;
        this.hideAllSelectionInMulti = false;
        this.top = -1;
        this.listType = '';
        this.objectId = '0';
        this.parentId = '0';
        this.searchCode = '0';
        // @Input() showTopBorder = false;
        this.firstFieldAsLink = false;
        this.supportSorting = true;
        this.supportResizing = true;
        this.parentScroll = null;
        this.disabled = false;
        this.isPrinting = false;
        this.disableSelectionItems = false;
        this.isReport = false;
        this.layoutType = null;
        this.pageType = '';
        this.totalsRow = [];
        this.isTouchDevice = false;
        this.notifyThumbnailClicked = new EventEmitter();
        this.notifyFieldClicked = new EventEmitter();
        this.notifyMenuItemClicked = new EventEmitter();
        this.notifyValueChanged = new EventEmitter();
        this.notifyListChanged = new EventEmitter();
        this.notifySortingChanged = new EventEmitter();
        this.notifySelectedItemsChanged = new EventEmitter();
        this.notifySelectAllSingleActionClicked = new EventEmitter();
        this.notifySingleActionClicked = new EventEmitter();
        this.notifyListLoad = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.SELECTION_TYPE_FOR_ACTIONS = SELECTION_TYPE_FOR_ACTIONS;
        this.uiControl = null;
        this.totalRows = -1;
        this.isTable = false;
        this.hasColumnWidthOfTypePercentage = true;
        this.items = null;
        this.showSelection = false;
        this.isCardView = false;
        this.itemsCounter = 0;
        this.showItems = true;
        this.SEPARATOR = ',';
        this.isAllSelected = false;
        this.selectedItems = new Map();
        this.unSelectedItems = new Map();
        // public tableHeaderWidth: string;
        this.nativeWindow = null;
        this.selectedItemId = '';
        this.hoveredItemId = '';
        this.lockEvents = false;
        this.containerWidth = 0;
        // headerIsInFocus = false;
        // For resize
        this.pressedColumn = '';
        this.startX = 0;
        this.startWidth = 0;
        this.tableStartWidth = 0;
        // For sorting
        this.isAsc = true;
        this.sortBy = '';
        this.isUserSelected = false;
        this.checkForChanges = null;
        this.useVirtualScroll = true;
        this.layoutService.onResize$
            .pipe(delay(0))
            .subscribe(size => {
            this.screenSize = size;
        });
        // this.checkForChanges = new Date().getTime();
        // this.state.stateKey = location.href;
        this.nativeWindow = window;
    }
    ngOnInit() {
        this.containerWidth = 0;
    }
    ngOnChanges(changes) {
        if (this.containerWidth <= 0) {
            this.setContainerWidth();
        }
    }
    ngOnDestroy() {
        if (this.notifyValueChanged) {
            this.notifyValueChanged.unsubscribe();
        }
        if (this.notifyListChanged) {
            this.notifyListChanged.unsubscribe();
        }
        if (this.notifySortingChanged) {
            this.notifySortingChanged.unsubscribe();
        }
        if (this.notifyFieldClicked) {
            this.notifyFieldClicked.unsubscribe();
        }
        if (this.notifyMenuItemClicked) {
            this.notifyMenuItemClicked.unsubscribe();
        }
        if (this.notifyThumbnailClicked) {
            this.notifyThumbnailClicked.unsubscribe();
        }
        this.saveSortingToSession();
    }
    setContainerWidth() {
        const selectionCheckBoxWidth = this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi ? 44 : 0;
        const rowHeight = 40; // the table row height (2.5rem * 16font-size).
        const style = window.getComputedStyle(this.element.nativeElement.parentElement);
        // The container-fluid class padding left + right + border
        const containerFluidSpacing = parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);
        const parentContainer = this.element.nativeElement.parentElement.parentElement > 0 ?
            this.element.nativeElement.parentElement.parentElement : this.element.nativeElement.parentElement;
        // Calculate if vertical scroll should appear, if so set the scroll width. (this.totalRows + 1) + 1 is for the header row.
        const scrollWidth = parentContainer.clientHeight < rowHeight * (this.totalRows + 1) ? 18 : 0; // 18 is the default scroll width.
        // The selectionCheckBoxWidth width + containerFluidSpacing + scrollWidth.
        const rowHeaderWidthToSub = containerFluidSpacing + selectionCheckBoxWidth + scrollWidth;
        this.containerWidth = parentContainer.offsetWidth - rowHeaderWidthToSub;
    }
    saveSortingToSession() {
        // this.state.setItemInState(PepperiListComponent.SORT_BY_STATE_KEY, this.sortBy);
        // this.state.setItemInState(PepperiListComponent.ASCENDING_STATE_KEY, this.isAsc);
        // this.state.writeToSession();
    }
    onMouseDown(event) {
        const self = this;
        // if (!this.element.nativeElement.contains(event.target) || event.target.className === 'scrollable-content') {
        //     setTimeout(() => {
        //         if (self.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi || self.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
        //         }
        //         // self.selectedItemId = '';
        //         //self.hoveredItemId = '';
        //     }, 500);
        // }
    }
    removeTable() {
        this.cleanItems();
        this.uiControl = null;
    }
    getTopItems() {
        return this.isTable ? PepperiListComponent.TOP_ITEMS_TABLE : PepperiListComponent.TOP_ITEMS_THUMBNAILS;
    }
    toggleItems(isVisible) {
        this.showItems = isVisible;
        this.lockEvents = !isVisible;
        if (this.useVirtualScroll) {
            if (isVisible) {
                disableScroll.off();
            }
            else {
                disableScroll.on();
            }
        }
    }
    updateScrollItems(startIndex, endIndex, loadInChunks = true) {
        this.scrollItems = this.items.slice(startIndex, endIndex);
        // if (!loadInChunks) {
        //     this.scrollItems = this.items.slice(startIndex, endIndex).map((item) => item).filter((item) => item != null);
        // } else {
        //     // this.scrollItems = this.items.slice(startIndex, endIndex);
        //     const ITEMS_RENDERED_AT_ONCE = 15;//this.isTable ? 1 : 7;
        //     const INTERVAL_IN_MS = 10;
        //     let currentIndex = 0;
        //     const tmp = this.items.slice(startIndex, endIndex);
        //     // this.scrollItems = [];
        //     const interval = setInterval(() => {
        //         const nextIndex = currentIndex + ITEMS_RENDERED_AT_ONCE;
        //         for (let i = currentIndex; i < nextIndex; i++) {
        //             // if (currentIndex === 0) {
        //             //     this.scrollItems = [];
        //             // }
        //             if (i >= tmp.length) {
        //                 clearInterval(interval);
        //                 break;
        //             }
        //             if (this.scrollItems[i]) {
        //                 this.scrollItems[i] = tmp[i];
        //             } else {
        //                 this.scrollItems.push(tmp[i]);
        //             }
        //         }
        //         currentIndex += ITEMS_RENDERED_AT_ONCE;
        //     }, INTERVAL_IN_MS);
        // }
    }
    setSelectionItems(itemId, uniqItemId, isChecked) {
        // Set selected item checkbox
        if (this.isAllSelected) {
            if (isChecked) {
                this.unSelectedItems.delete(itemId);
                this.selectedItems.set(itemId, uniqItemId);
            }
            else {
                this.selectedItems.delete(itemId);
                this.unSelectedItems.set(itemId, uniqItemId);
            }
        }
        else {
            if (isChecked) {
                this.unSelectedItems.delete(itemId);
                this.selectedItems.set(itemId, uniqItemId);
            }
            else {
                this.selectedItems.delete(itemId);
                this.unSelectedItems.set(itemId, uniqItemId);
            }
        }
    }
    getUniqItemId(itemId, itemType = '') {
        return itemId + this.SEPARATOR + itemType;
    }
    isItemSelected(itemId, itemType = '') {
        let isSelected = false;
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction ||
            this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            isSelected = this.selectedItems.has(itemId) || this.isAllSelected && !this.unSelectedItems.has(itemId);
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            const uniqItemId = this.getUniqItemId(itemId, itemType);
            isSelected = uniqItemId === this.selectedItemId;
        }
        return isSelected;
    }
    setLayout() {
        const self = this;
        if (this.totalRows === 0 ||
            !this.uiControl ||
            !this.uiControl.ControlFields ||
            this.uiControl.ControlFields.length === 0) {
            return;
        }
        this.uiControl.ControlFields.forEach((cf) => {
            if (cf.ColumnWidth === 0) {
                cf.ColumnWidth = 10;
            }
            if (self.isTable &&
                (cf.FieldType === FIELD_TYPE.Image ||
                    // cf.FieldType === FIELD_TYPE.Indicators || ???
                    cf.FieldType === FIELD_TYPE.Signature ||
                    cf.FieldType === FIELD_TYPE.NumberIntegerQuantitySelector ||
                    cf.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                    cf.FieldType === FIELD_TYPE.NumberIntegerForMatrix ||
                    cf.FieldType === FIELD_TYPE.NumberRealForMatrix ||
                    cf.FieldType === FIELD_TYPE.Package ||
                    cf.ApiName === 'UnitsQuantity' ||
                    cf.ApiName === 'QuantitySelector')) {
                cf.Layout.XAlignment = 3;
            }
        });
        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
        // Set the columns width.
        if (this.containerWidth <= 0) {
            this.setContainerWidth();
        }
        this.calcColumnsWidth();
        this.checkForChanges = new Date().getTime();
    }
    calcColumnsWidth() {
        const fixedMultiple = 3.78; // for converting em to pixel.
        const length = this.uiControl.ControlFields.length;
        const selectionCheckBoxWidth = this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi ? 44 : 0;
        // Is table AND there is at least one column of width type of percentage.
        if (this.isTable) {
            if (this.uiControl && this.uiControl.ControlFields) {
                this.hasColumnWidthOfTypePercentage = this.uiControl.ControlFields.filter(cf => cf.ColumnWidthType === 1).length === 0;
            }
        }
        // If the columns size is fixed and the total is small then the container change it to percentage.
        if (!this.hasColumnWidthOfTypePercentage) {
            const totalFixedColsWidth = this.uiControl.ControlFields
                .map(cf => cf.ColumnWidth * fixedMultiple)
                .reduce((sum, current) => sum + current);
            if (window.innerWidth > totalFixedColsWidth) {
                this.hasColumnWidthOfTypePercentage = true;
            }
        }
        let totalCalcColsWidth = 0;
        // Calc by percentage
        if (this.hasColumnWidthOfTypePercentage) {
            const totalColsWidth = this.uiControl.ControlFields.map(cf => cf.ColumnWidth).reduce((sum, current) => sum + current);
            for (let index = 0; index < length; index++) {
                const uiControlField = this.uiControl.ControlFields[index];
                const calcColumnWidthPercentage = (100 / totalColsWidth) * uiControlField.ColumnWidth;
                uiControlField.calcColumnWidth = Math.floor((this.containerWidth * calcColumnWidthPercentage) / 100);
                if (index === length - 1) {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                        'calc(100% - ' + totalCalcColsWidth + 'px)'; // For 100%
                }
                else {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                        uiControlField.calcColumnWidth + 'px';
                    totalCalcColsWidth += uiControlField.calcColumnWidth;
                }
            }
            this.renderer.setStyle(this.element.nativeElement, 'width', 'inherit');
        }
        else {
            for (let index = 0; index < length; index++) {
                const uiControlField = this.uiControl.ControlFields[index];
                const currentFixedWidth = Math.floor(uiControlField.ColumnWidth * fixedMultiple);
                if (index === length - 1) {
                    uiControlField.calcTitleColumnWidthString = currentFixedWidth + 'px';
                    uiControlField.calcColumnWidthString = currentFixedWidth - 4 + 'px'; // -4 for the row padding.
                }
                else {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                        currentFixedWidth + 'px';
                }
                totalCalcColsWidth += currentFixedWidth;
            }
            this.renderer.setStyle(this.element.nativeElement, 'width', totalCalcColsWidth + selectionCheckBoxWidth + 'px');
        }
    }
    initResizeData() {
        this.startX = 0;
        this.startWidth = 0;
        this.tableStartWidth = 0;
        this.pressedColumn = '';
    }
    onListResizeStart(event, apiName) {
        this.pressedColumn = apiName;
        this.startX = event.x;
        this.startWidth = event.target.closest('.header-column').offsetWidth;
        if (this.useVirtualScroll) {
            this.tableStartWidth = this.virtualScroll.contentElementRef.nativeElement.offsetWidth;
        }
        else {
            // Set the tableStartWidth to the container offsetWidth
            this.tableStartWidth = this.noVirtualScrollCont.nativeElement.offsetWidth;
        }
    }
    onListResize(event) {
        if (this.pressedColumn.length > 0) {
            const widthToAdd = this.layoutService.isRtl() ? this.startX - event.x : event.x - this.startX;
            // Set the width of the column and the container of the whole columns.
            if (this.startWidth + widthToAdd >= PepperiListComponent.MINIMUM_COLUMN_WIDTH || widthToAdd > 0) {
                const length = this.uiControl.ControlFields.length;
                let totalCalcColsWidth = 0;
                for (let index = 0; index < length; index++) {
                    const uiControlField = this.uiControl.ControlFields[index];
                    if (index === length - 1) {
                        // Calc the last column only in percentage type.
                        if (this.hasColumnWidthOfTypePercentage) {
                            uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                                'calc(100% - ' + totalCalcColsWidth + 'px)'; // For 100%
                        }
                        else {
                            if (uiControlField.ApiName === this.pressedColumn) {
                                uiControlField.calcColumnWidth = this.startWidth + widthToAdd;
                                uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidth + 'px';
                                uiControlField.calcColumnWidthString = uiControlField.calcColumnWidth - 4 + 'px';
                            }
                        }
                    }
                    else if (uiControlField.ApiName === this.pressedColumn) {
                        uiControlField.calcColumnWidth = this.startWidth + widthToAdd;
                        uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                            uiControlField.calcColumnWidth + 'px';
                    }
                    totalCalcColsWidth += uiControlField.calcColumnWidth;
                }
                this.renderer.setStyle(this.element.nativeElement, 'width', this.tableStartWidth + widthToAdd + 'px');
            }
            this.checkForChanges = new Date().getTime();
        }
    }
    onListResizeEnd(event) {
        if (this.pressedColumn.length > 0) {
            if (event && $(event.srcElement).parents('.resizeBox').length > 0) {
                this.initResizeData();
            }
            else {
                // Set timeout 0 for onListSortingChange will have the pressedColumn.
                const self = this;
                setTimeout(() => {
                    self.initResizeData();
                }, 0);
            }
        }
    }
    onListSortingChange(sortBy, isAsc, event = null) {
        if (this.isPrinting) {
            return;
        }
        if (this.pressedColumn.length > 0 || (event && $(event.srcElement).parents('.resizeBox').length > 0)) {
            return;
        }
        if (this.sortBy !== sortBy || this.isAsc !== isAsc) {
            this.sortBy = sortBy;
            this.isAsc = isAsc;
            this.saveSortingToSession();
            this.notifySortingChanged.emit({ sortBy, isAsc });
        }
    }
    onListHeaderMouseEnter(event) {
        // this.headerIsInFocus = true;
    }
    onListHeaderMouseLeave(event) {
        // this.headerIsInFocus = false;
        this.onListResizeEnd(event);
        this.initResizeData();
    }
    onListChange(event) {
        if (this.isPrinting) {
            return;
        }
        // For other events do nothing.
        if (typeof event.start === 'undefined' || typeof event.end === 'undefined') {
            return;
        }
        this.calculatedObjectHeight = event.calculatedChildHeight + 'px';
        if (!this.lockEvents) {
            this.toggleItems(false);
            this.updateScrollItems(event.start, event.end, false);
            let getItemsFromApi = false;
            let index = event.start;
            while (!getItemsFromApi && index < event.end) {
                if (!this.items[index]) {
                    getItemsFromApi = true;
                }
                index++;
            }
            // Get bulk from api.
            if (getItemsFromApi) {
                const top = this.getTopItems() - 1;
                if (event.addAtStart) {
                    event.fromIndex = Math.max(event.start - (top - (event.end - event.start)), 0);
                    event.toIndex = event.end;
                }
                else {
                    event.fromIndex = event.start;
                    event.toIndex = Math.min(event.end + (top - (event.end - event.start)), this.totalRows);
                }
                this.notifyListChanged.emit(event);
                // this.lockEvents = true;
            }
            else {
                // this.scrollItems = this.items.slice(event.start, event.end);
                this.toggleItems(true);
            }
        }
    }
    // onScrollerListChange(event: any) {
    //     if (this.isPrinting) {
    //         return;
    //     }
    //     // For other events do nothing.
    //     if (typeof event.startIndex === 'undefined' || typeof event.endIndex === 'undefined') {
    //         return;
    //     }
    //     if (!this.lockEvents) {
    //         this.toggleItems(false);
    //         this.updateScrollItems(event.startIndex, event.endIndex);
    //         let getItemsFromApi = false;
    //         let index: number = event.startIndex;
    //         while (!getItemsFromApi && index < event.endIndex) {
    //             if (!this.items[index]) {
    //                 getItemsFromApi = true;
    //             }
    //             index++;
    //         }
    //         // Get bulk from api.
    //         if (getItemsFromApi) {
    //             const top = this.getTopItems() - 1;
    //             // if (event.addAtStart) {
    //             //     event.fromIndex = Math.max(event.start - (top - (event.end - event.start)), 0);
    //             //     event.toIndex = event.end;
    //             // } else {
    //             event.fromIndex = event.startIndex;
    //             event.toIndex = Math.min(event.endIndex + (top - (event.endIndex - event.startIndex)), this.totalRows);
    //             // }
    //             this.notifyListChanged.emit(event);
    //             // this.lockEvents = true;
    //         } else {
    //             // this.scrollItems = this.items.slice(event.start, event.end);
    //             this.toggleItems(true);
    //         }
    //     }
    // }
    onListLoad(event) {
        this.notifyListLoad.emit(event);
    }
    getParentContainer() {
        return this.parentScroll ? this.parentScroll : window;
    }
    onValueChanged(valueChanged) {
        if (this.disabled) {
            return;
        }
        this.notifyValueChanged.emit(valueChanged);
    }
    onCustomizeFieldClick(customizeFieldClickedData) {
        if (this.disabled) {
            return;
        }
        this.notifyFieldClicked.emit(customizeFieldClickedData);
    }
    onCustomizeFieldMenuClicked(customizeFieldClickedData) {
        if (this.disabled) {
            return;
        }
        this.notifyMenuItemClicked.emit(customizeFieldClickedData);
    }
    getIsDisabled(pepperiObjectInput) {
        if (this.disableSelectionItems) {
            return true;
        }
        else {
            const IsNotSelectableForActions = (pepperiObjectInput === null || pepperiObjectInput === void 0 ? void 0 : pepperiObjectInput.Data) && !pepperiObjectInput.Data.IsSelectableForActions;
            return IsNotSelectableForActions;
        }
    }
    getIsAllSelectedForActions() {
        let res = false;
        if (this.isAllSelected) {
            if (this.unSelectedItems.size === 0) {
                res = true;
            }
        }
        else {
            if (this.selectedItems.size === this.totalRows) {
                res = this.getIsAllSelected(this.scrollItems);
            }
            else if (this.selectedItems.size < this.totalRows) {
                // for (let index = 0; index < this.scrollItems.length; index++) {
                //     const pepperiObjectInput = this.scrollItems[index];
                for (const pepperiObjectInput of this.scrollItems) {
                    res = pepperiObjectInput && pepperiObjectInput.Data &&
                        this.selectedItems.has(pepperiObjectInput.Data.UID.toString());
                    if (!res) {
                        break;
                    }
                }
            }
        }
        return res;
    }
    setIsAllSelected(isChecked) {
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi ||
            this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
            this.selectAllCB.checked = isChecked;
            this.isAllSelected = isChecked;
        }
    }
    selectAllItemsForActions(e) {
        // For material checkbox || radio.
        const isChecked = e.source.checked;
        // Indeterminate mode
        let isIndeterminate = false;
        const currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
        if (currentList.size > 0) {
            isIndeterminate = true;
            this.isAllSelected = false;
            this.notifySelectedItemsChanged.emit(0);
            e.source.checked = false;
        }
        this.selectedItems.clear();
        this.unSelectedItems.clear();
        if (!isIndeterminate) {
            this.isAllSelected = isChecked;
            if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
                // Add all or remove all
                this.notifySelectAllSingleActionClicked.emit(isChecked);
            }
            else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
                if (!isChecked) {
                    this.notifySelectedItemsChanged.emit(0);
                    this.selectedItemId = '';
                }
                else {
                    const filteredItems = this.items.filter(item => item.Data && item.Data.IsSelectableForActions);
                    this.notifySelectedItemsChanged.emit(filteredItems.length);
                }
            }
        }
        else {
            if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
                // Remove all
                this.notifySelectAllSingleActionClicked.emit(false);
            }
        }
    }
    getIsSelectedForActions(itemId, isSelectableForActions, itemType = '') {
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            return this.selectedItemId === this.getUniqItemId(itemId, itemType);
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
            let res = this.isAllSelected || this.selectedItems.has(itemId);
            if (this.unSelectedItems.has(itemId)) {
                res = false;
            }
            return res;
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            if (!isSelectableForActions) {
                return false;
            }
            else {
                let res = this.isAllSelected || this.selectedItems.has(itemId);
                if (this.unSelectedItems.has(itemId)) {
                    res = false;
                }
                return res;
            }
        }
    }
    selectItemForActions(e, itemId, isSelectableForActions, itemType = '') {
        // For material checkbox || radio.
        const isChecked = e.source.checked;
        this.setItemClicked(itemId, isSelectableForActions, itemType, isChecked);
    }
    itemClicked(e, objectSingleData) {
        // Set seleted item
        const itemId = objectSingleData.Data.UID.toString();
        const itemType = objectSingleData.Data.Type.toString();
        let isChecked = false;
        if (objectSingleData && objectSingleData.Data && objectSingleData.Data.IsSelectableForActions) {
            this.selectedItemId = this.getUniqItemId(itemId, itemType);
            isChecked = true;
        }
        if (this.isTable) {
            if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
                this.setItemClicked(itemId, objectSingleData.Data.IsSelectableForActions, itemType, isChecked);
            }
            else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.None) {
                // Just mark the row as highlighted
                this.setItemClicked(itemId, objectSingleData.Data.IsSelectableForActions, itemType, true);
            }
        }
        else {
            if (this.disabled) {
                return;
            }
            this.notifyThumbnailClicked.emit(objectSingleData);
        }
    }
    setItemClicked(itemId, isSelectableForActions, itemType, isChecked) {
        const uniqItemId = this.getUniqItemId(itemId, itemType);
        // select the selected item.
        if (isChecked) {
            // Set seleted item
            this.selectedItemId = uniqItemId;
        }
        else {
            if (this.selectedItemId === uniqItemId) {
                this.selectedItemId = '';
            }
        }
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            this.notifySelectedItemsChanged.emit(this.selectedItemId.length === 0 ? 0 : 1);
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
            this.setSelectionItems(itemId, uniqItemId, isChecked);
            this.notifySingleActionClicked.emit({ id: itemId, selected: isChecked });
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            if (isSelectableForActions) {
                this.setSelectionItems(itemId, uniqItemId, isChecked);
                const currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
                const currentListCount = this.isAllSelected ? this.totalRows - currentList.size : currentList.size;
                this.notifySelectedItemsChanged.emit(currentListCount);
            }
        }
    }
    onTableRowMouseEnter(event, itemId, itemType) {
        if (this.isTouchDevice) {
            return;
        }
        const uniqItemId = this.getUniqItemId(itemId, itemType);
        this.hoveredItemId = uniqItemId;
    }
    onTableRowMouseLeave(event, itemId, itemType) {
        this.hoveredItemId = '';
    }
    onCardMouseEnter(event, itemId, itemType) {
        if (this.isTouchDevice) {
            return;
        }
        const uniqItemId = this.getUniqItemId(itemId, itemType);
        this.hoveredItemId = uniqItemId;
    }
    onCardMouseLeave(event, itemId, itemType) {
        this.hoveredItemId = '';
    }
    getThumbnailsLayout() {
        return this.layoutType == null ? LAYOUT_TYPE.PepperiCard : this.layoutType;
    }
    // call this function after resize + animation end
    winResize(e) {
        if (typeof this.virtualScroll !== 'undefined') {
            this.virtualScroll.refresh();
        }
        this.containerWidth = 0;
        this.setLayout();
    }
    trackByFunc(index, item) {
        return item && item.Data && item.Data.UID ? item.Data.UID : index;
        // let res: string = "";
        // if (item && item.Data && item.Data.UID) {
        //    res = item.Data.UID + "_" + this.listType + "_" + (this.isTable ? "Table" : "Thumbnails");
        // }
        // else {
        //    res = index + "_" + this.listType + "_" + (this.isTable ? "Table" : "Thumbnails");
        // }
        // return res;
    }
    cleanItems() {
        this.itemsCounter = 0;
        this.items = this.totalRows > 0 ? Array(this.totalRows) : [];
        this.scrollItems = [];
        this.calculatedObjectHeight = '';
    }
    getUIControl() {
        return this.uiControl;
    }
    initListData(uiControl, totalRows, items, viewType = VIEW_TYPE.Table, itemClass = '', showSelection = false) {
        // const selectedItemsFromState: Map<string, string> =
        //     this.state.getItemFromState(PepperiListComponent.SELECTED_ITEMS_STATE_KEY);
        // if (selectedItemsFromState != null && typeof selectedItemsFromState.size !== 'undefined' &&
        //     selectedItemsFromState.size > 0) {
        //     this.selectedItems = selectedItemsFromState;
        //     this.state.setItemInState(PepperiListComponent.SELECTED_ITEMS_STATE_KEY, new Map<string, string>());
        // } else {
        this.selectedItems.clear();
        // }
        // const unSelectedItemsFromState: Map<string, string> =
        //     this.state.getItemFromState(PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY);
        // if (unSelectedItemsFromState != null && typeof unSelectedItemsFromState.size !== 'undefined' &&
        //     unSelectedItemsFromState.size > 0) {
        //     this.unSelectedItems = unSelectedItemsFromState;
        //     this.state.setItemInState(PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY, new Map<string, string>());
        // } else {
        this.unSelectedItems.clear();
        // }
        // if (this.state.getItemFromState(PepperiListComponent.ALL_SELECTED_STATE_KEY) != null) {
        //     let isAllSelectedFromState = this.state.getItemFromState(PepperiListComponent.ALL_SELECTED_STATE_KEY);
        //     this.isAllSelected = isAllSelectedFromState && this.getIsAllSelected(items);
        //     this.state.setItemInState(PepperiListComponent.ALL_SELECTED_STATE_KEY, false);
        // } else {
        this.isAllSelected = false;
        // }
        // if (this.state.getItemFromState(PepperiListComponent.SORT_BY_STATE_KEY) !== '') {
        //     this.sortBy = this.state.getItemFromState(PepperiListComponent.SORT_BY_STATE_KEY);
        //     this.state.setItemInState(PepperiListComponent.SORT_BY_STATE_KEY, '');
        // }
        // if (this.state.getItemFromState(PepperiListComponent.ASCENDING_STATE_KEY) != null) {
        //     this.isAsc = this.state.getItemFromState(PepperiListComponent.ASCENDING_STATE_KEY);
        //     this.state.setItemInState(PepperiListComponent.ASCENDING_STATE_KEY, false);
        // }
        const currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
        const currentListCount = this.isAllSelected ? this.totalRows - currentList.size : currentList.size;
        this.notifySelectedItemsChanged.emit(currentListCount);
        this.isCardView = viewType === VIEW_TYPE.Card;
        this.showSelection = showSelection;
        this.uiControl = uiControl;
        this.itemClass = itemClass;
        this.selectedItemId = '';
        this.isTable = viewType === VIEW_TYPE.Table;
        this.totalRows = totalRows;
        // fix bug for the scrollTo that doesn't work on edge div , not window
        const scrollingElement = this.getParentContainer();
        if (scrollingElement === window) {
            scrollingElement.scrollTo(0, 0);
        }
        else {
            this.focusOnAnItem(0);
        }
        this.cleanItems();
        if (this.totalRows === items.length) {
            this.useVirtualScroll = false;
            this.updateListItems(items, null);
            this.onListLoad(null);
        }
        else {
            this.useVirtualScroll = true;
            const numberOfStartItems = this.getNumberOfStartItems();
            this.updateListItems(items, { start: 0, end: numberOfStartItems, fromIndex: 0, toIndex: numberOfStartItems, addAtStart: true });
            if (typeof this.virtualScroll !== 'undefined') {
                this.virtualScroll.refresh();
            }
        }
        this.setLayout();
    }
    getIsAllSelected(items) {
        let result = true;
        if (this.selectedItems.size > 0 && items.length > 0) {
            // for (let index = 0; index < items.length; index++) {
            // const pepperiObjectInput = items[index];
            for (const pepperiObjectInput of items) {
                if (!(pepperiObjectInput && pepperiObjectInput.Data && this.selectedItems.has(pepperiObjectInput.Data.UID.toString()))) {
                    result = false;
                    break;
                }
            }
        }
        else {
            result = false;
        }
        return result;
    }
    getNumberOfStartItems() {
        let numberOfStartItems = 20;
        if ((this.screenSize === SCREEN_SIZE.XL) ||
            (this.screenSize === SCREEN_SIZE.LG)) {
            numberOfStartItems = this.isTable ? 50 : 40;
        }
        else if (this.screenSize === SCREEN_SIZE.MD) {
            numberOfStartItems = this.isTable ? 30 : 20;
        }
        else if (this.screenSize === SCREEN_SIZE.SM) {
            numberOfStartItems = this.isTable ? 20 : 10;
        }
        else if (this.screenSize === SCREEN_SIZE.XS) {
            numberOfStartItems = this.isTable ? 15 : 5;
        }
        return numberOfStartItems;
    }
    setSelectedIds(selectedIds, items = null) {
        this.selectedItems.clear();
        this.isAllSelected = false;
        if (selectedIds) {
            // for (let i = 0; i < selected.length; i++) {
            for (const selectedId of selectedIds) {
                const tmp = selectedId.split(this.SEPARATOR);
                if (tmp && tmp.length > 0) {
                    const itemId = tmp[0];
                    const itemType = tmp.length > 1 ? tmp[1] : '';
                    this.selectedItems.set(itemId, this.getUniqItemId(itemId, itemType));
                }
            }
            this.isAllSelected = this.getIsAllSelected(items ? items : this.scrollItems); // this.selectedItems.Count() === this.totalRows;
            this.setSelectionDataInSession();
        }
        if (typeof this.virtualScroll !== 'undefined') {
            this.virtualScroll.refresh();
        }
    }
    setSelectionDataInSession() {
        // this.state.setItemInState(PepperiListComponent.SELECTED_ITEMS_STATE_KEY, this.selectedItems);
        // this.state.setItemInState(PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY, this.unSelectedItems);
        // this.state.setItemInState(PepperiListComponent.ALL_SELECTED_STATE_KEY, this.isAllSelected);
    }
    updateListItems(items, event) {
        if (this.useVirtualScroll) {
            // Clean array
            if (this.itemsCounter + items.length > PepperiListComponent.TOP_ITEMS_ARRAY) {
                this.cleanItems();
            }
            const startIndex = event.fromIndex ? event.fromIndex : event.start;
            for (let i = 0; i < items.length; i++) {
                if (!this.items[i + startIndex]) {
                    this.items[i + startIndex] = items[i];
                    this.itemsCounter += 1;
                }
            }
            this.updateScrollItems(event.start, event.end);
            this.toggleItems(true);
            // this.lockEvents = false;
        }
        else {
            this.scrollItems = this.items = items;
            this.itemsCounter = items.length;
        }
    }
    updateListItem(data) {
        let index = 0;
        // Update items list
        index = this.items.findIndex(i => i && i.Data && i.Data.UID === data.UID);
        if (index >= 0 && index < this.items.length) {
            this.items[index].Data = data;
        }
        // Update scrollItems list
        index = this.scrollItems.findIndex(i => i && i.Data && i.Data.UID === data.UID);
        if (index >= 0 && index < this.scrollItems.length) {
            this.scrollItems[index].Data = data;
            this.checkForChanges = new Date().getTime();
        }
    }
    focusOnAnItem(itemIndex) {
        if (typeof this.virtualScroll !== 'undefined') {
            this.virtualScroll.scrollInto(itemIndex);
        }
    }
    getSelectedItemsData(isForEdit = false) {
        const res = new SelectionData();
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            const tmp = this.selectedItemId.split(this.SEPARATOR);
            res.selectionType = 1;
            res.rows = [tmp[0]];
            res.rowTypes = [tmp[1]];
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            const items = [];
            const itemTypes = [];
            let selectionType = 1;
            let currentList = [];
            // For edit - only the selected items.
            if (isForEdit) {
                if (!this.isAllSelected) {
                    currentList = Array.from(this.selectedItems.values());
                }
                else {
                    // Get the id's of the items that not founded in unSelectedItems.
                    this.items.forEach(item => {
                        if (item && !this.unSelectedItems.has(item.Data.UID.toString())) {
                            currentList.push(this.getUniqItemId(item.Data.UID.toString(), item.Data.Type.toString()));
                        }
                    });
                }
            }
            else {
                // For delete - can be the unselected with select_all functionality.
                currentList = Array.from(this.isAllSelected ? this.unSelectedItems.values() : this.selectedItems.values());
                selectionType = this.isAllSelected ? 0 : 1;
            }
            currentList.forEach(item => {
                const tmp = item.split(this.SEPARATOR);
                if (tmp.length === 2) {
                    items.push(tmp[0]);
                    itemTypes.push(tmp[1]);
                }
            });
            res.selectionType = selectionType;
            res.rows = items;
            res.rowTypes = itemTypes;
        }
        return res;
    }
    initCollectionFromState(collectionType, collection) {
        if (collectionType === 'Selected') {
            collection.forEach(x => this.selectedItems.set(x, x));
        }
        else {
            collection.forEach(x => this.unSelectedItems.set(x, x));
        }
    }
    getIsItemEditable(uid) {
        const item = this.items.filter(x => x.Data.UID.toString() === uid);
        if (item.length > 0) {
            return item[0].Data.IsEditable;
        }
        else {
            return false;
        }
    }
    getItemDataByID(uid) {
        var _a;
        return (_a = this.items.find(item => item.Data.UID.toString() === uid)) === null || _a === void 0 ? void 0 : _a.Data;
        // const item = this.items.filter(x => x.Data.UID.toString() === uid);
        // if (item.length > 0) {
        //     return item[0].Data;
        // } else {
        //     return null;
        // }
    }
}
PepperiListComponent.TOP_ITEMS_DEFAULT = 100;
PepperiListComponent.TOP_ITEMS_TABLE = 100;
PepperiListComponent.TOP_ITEMS_THUMBNAILS = 100;
PepperiListComponent.TOP_ITEMS_ARRAY = 2500;
PepperiListComponent.SELECTED_ITEMS_STATE_KEY = 'SelectedItems';
PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY = 'UnSelectedItems';
PepperiListComponent.ALL_SELECTED_STATE_KEY = 'AllSelected';
PepperiListComponent.SORT_BY_STATE_KEY = 'SortBy';
PepperiListComponent.ASCENDING_STATE_KEY = 'IsAscending';
PepperiListComponent.MINIMUM_COLUMN_WIDTH = 48;
PepperiListComponent.ɵfac = function PepperiListComponent_Factory(t) { return new (t || PepperiListComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LayoutService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2)); };
PepperiListComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiListComponent, selectors: [["pep-list"]], viewQuery: function PepperiListComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(VirtualScrollComponent, true);
        ɵɵviewQuery(_c0$1, true);
        ɵɵviewQuery(_c1$1, true);
        ɵɵviewQuery(_c2$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.virtualScroll = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.noVirtualScrollCont = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableHeader = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectAllCB = _t.first);
    } }, hostBindings: function PepperiListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mousedown", function PepperiListComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); }, false, ɵɵresolveDocument)("resize", function PepperiListComponent_resize_HostBindingHandler($event) { return ctx.winResize($event); }, false, ɵɵresolveWindow);
    } }, inputs: { currentListTypeTranslation: "currentListTypeTranslation", noDataFoundMsg: "noDataFoundMsg", selectionTypeForActions: "selectionTypeForActions", hideAllSelectionInMulti: "hideAllSelectionInMulti", top: "top", listType: "listType", objectId: "objectId", parentId: "parentId", searchCode: "searchCode", firstFieldAsLink: "firstFieldAsLink", supportSorting: "supportSorting", supportResizing: "supportResizing", parentScroll: "parentScroll", disabled: "disabled", isPrinting: "isPrinting", disableSelectionItems: "disableSelectionItems", isReport: "isReport", layoutType: "layoutType", pageType: "pageType", totalsRow: "totalsRow", isTouchDevice: "isTouchDevice" }, outputs: { notifyThumbnailClicked: "notifyThumbnailClicked", notifyFieldClicked: "notifyFieldClicked", notifyMenuItemClicked: "notifyMenuItemClicked", notifyValueChanged: "notifyValueChanged", notifyListChanged: "notifyListChanged", notifySortingChanged: "notifySortingChanged", notifySelectedItemsChanged: "notifySelectedItemsChanged", notifySelectAllSingleActionClicked: "notifySelectAllSingleActionClicked", notifySingleActionClicked: "notifySingleActionClicked", notifyListLoad: "notifyListLoad" }, features: [ɵɵNgOnChangesFeature], decls: 6, vars: 2, consts: [[4, "ngIf"], ["listData", ""], ["listTotals", ""], [1, "no-data"], ["class", "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove", 4, "ngIf"], [3, "totalRows", "isTable", "parentScroll", "bufferAmount", "ngClass", "load", "change", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove"], ["tableHeader", ""], [1, "table-header-fieldset"], ["class", "pull-left flip row-selection", "type", "checkbox", 3, "ngStyle", "indeterminate", "disabled", "checked", "change", 4, "ngIf"], ["class", "header-column pull-left flip", 3, "ngStyle", "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "pull-left", "flip", "row-selection", 3, "ngStyle", "indeterminate", "disabled", "checked", "change"], ["selectAllCB", ""], [1, "header-column", "pull-left", "flip", 3, "ngStyle", "ngClass", "click"], [3, "id", "class", "title", 4, "ngIf"], ["class", "header-label body-sm pull-left flip", 3, "id", 4, "ngIf"], ["class", "resizeBox pull-right flip", 3, "mousedown", 4, "ngIf"], ["class", "sortingBox pull-left flip", 3, "ngClass", 4, "ngIf"], [3, "id", "title"], [1, "header-label", "body-sm", "pull-left", "flip", 3, "id"], [1, "resizeBox", "pull-right", "flip", 3, "mousedown"], ["name", "arrow-up", 1, "asc"], [1, "sortingBox", "pull-left", "flip", 3, "ngClass"], [3, "ngClass", "title", 4, "ngIf"], ["name", "arrow-either", 1, "asc"], [3, "ngClass", "title"], ["name", "arrow-down", 1, "asc"], ["name", "arrow-down", 1, "desc"], [3, "totalRows", "isTable", "parentScroll", "bufferAmount", "ngClass", "load", "change"], [3, "ngClass"], ["noVirtualScrollCont", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-row", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], [1, "table-row-fieldset", 3, "ngStyle"], ["type", "checkbox", "class", "pull-left flip row-selection", 3, "disabled", "ngStyle", "checked", "change", 4, "ngIf"], ["name", "selection", "class", "pull-left flip row-selection pepperi-radio-button", 3, "disabled", "checked", "change", 4, "ngIf"], [3, "checkForChanges", "uiControlHeader", "firstFieldAsLink", "pepperiObjectInput", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "isReport", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], ["type", "checkbox", 1, "pull-left", "flip", "row-selection", 3, "disabled", "ngStyle", "checked", "change"], ["name", "selection", 1, "pull-left", "flip", "row-selection", "pepperi-radio-button", 3, "disabled", "checked", "change"], [1, "pull-left", "flip", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], ["class", "pull-left flip card-selection", 3, "disabled", "checked", "change", 4, "ngIf"], [3, "firstFieldAsLink", "checkForChanges", "uiControlHeader", "pepperiObjectInput", "isCardView", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], [1, "pull-left", "flip", "card-selection", 3, "disabled", "checked", "change"], ["class", "table-total", 4, "ngIf"], [1, "table-total"], ["class", "total-column pull-left flip", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "total-column", "pull-left", "flip", 3, "ngStyle"]], template: function PepperiListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PepperiListComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        ɵɵtemplate(1, PepperiListComponent_ng_container_1_Template, 5, 4, "ng-container", 0);
        ɵɵtemplate(2, PepperiListComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(4, PepperiListComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.totalRows == 0);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.totalRows > 0);
    } }, directives: [NgIf, NgTemplateOutlet, NgClass, NgForOf, MatCheckbox, NgStyle, MatIcon, PepperiIconComponent, VirtualScrollComponent, PepperiFormComponent, MatRadioButton], pipes: [TranslatePipe], styles: ["[_nghost-%COMP%]{height:inherit}[_nghost-%COMP%]   virtual-scroll[_ngcontent-%COMP%]{min-height:calc(100% - 34px)}.no-data[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:100px;text-align:center}.table-header[_ngcontent-%COMP%]{top:0}.table-header.below-header-and-top-bar[_ngcontent-%COMP%]{top:calc(var(--pep-header-height, 4rem) + var(--pep-top-bar-spacing-top, 1.5rem) + var(--pep-top-bar-spacing-bottom, .5rem) + var(--pep-top-bar-field-height, 2.5rem))}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiListComponent, [{
        type: Component,
        args: [{
                selector: 'pep-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss'],
                host: {
                    // '[style.width]': "'inherit'",
                    '(document:mousedown)': 'onMouseDown($event)',
                    '(window:resize)': 'winResize($event)'
                    // '(window:mouseup)': 'onListResizeEnd($event)',
                    // '(window:mousemove)': 'onListResize($event)'
                }
                // changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ElementRef }, { type: LayoutService }, { type: ChangeDetectorRef }, { type: Renderer2 }]; }, { currentListTypeTranslation: [{
            type: Input
        }], noDataFoundMsg: [{
            type: Input
        }], selectionTypeForActions: [{
            type: Input
        }], hideAllSelectionInMulti: [{
            type: Input
        }], top: [{
            type: Input
        }], listType: [{
            type: Input
        }], objectId: [{
            type: Input
        }], parentId: [{
            type: Input
        }], searchCode: [{
            type: Input
        }], firstFieldAsLink: [{
            type: Input
        }], supportSorting: [{
            type: Input
        }], supportResizing: [{
            type: Input
        }], parentScroll: [{
            type: Input
        }], disabled: [{
            type: Input
        }], isPrinting: [{
            type: Input
        }], disableSelectionItems: [{
            type: Input
        }], isReport: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], pageType: [{
            type: Input
        }], totalsRow: [{
            type: Input
        }], isTouchDevice: [{
            type: Input
        }], notifyThumbnailClicked: [{
            type: Output
        }], notifyFieldClicked: [{
            type: Output
        }], notifyMenuItemClicked: [{
            type: Output
        }], notifyValueChanged: [{
            type: Output
        }], notifyListChanged: [{
            type: Output
        }], notifySortingChanged: [{
            type: Output
        }], notifySelectedItemsChanged: [{
            type: Output
        }], notifySelectAllSingleActionClicked: [{
            type: Output
        }], notifySingleActionClicked: [{
            type: Output
        }], notifyListLoad: [{
            type: Output
        }], virtualScroll: [{
            type: ViewChild,
            args: [VirtualScrollComponent]
        }], noVirtualScrollCont: [{
            type: ViewChild,
            args: ['noVirtualScrollCont']
        }], tableHeader: [{
            type: ViewChild,
            args: ['tableHeader']
        }], selectAllCB: [{
            type: ViewChild,
            args: ['selectAllCB']
        }] }); })();

class PepperiListModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconArrowDown,
            pepperiIconArrowEither,
            pepperiIconArrowUp
        ]);
    }
}
PepperiListModule.ɵmod = ɵɵdefineNgModule({ type: PepperiListModule });
PepperiListModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiListModule_Factory(t) { return new (t || PepperiListModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules,
            MatCommonModule,
            MatCheckboxModule,
            MatRadioModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFormModule,
            VirtualScrollModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiListModule, { declarations: [PepperiListComponent], imports: [CommonModule,
        // Material modules,
        MatCommonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFormModule,
        VirtualScrollModule], exports: [PepperiListComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiListModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules,
                    MatCommonModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFormModule,
                    VirtualScrollModule
                ],
                exports: [PepperiListComponent],
                declarations: [PepperiListComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/list
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiListComponent, PepperiListModule, SELECTION_TYPE_FOR_ACTIONS, SelectionData, VIEW_TYPE };
//# sourceMappingURL=pepperi-addons-ngx-lib-list.js.map
