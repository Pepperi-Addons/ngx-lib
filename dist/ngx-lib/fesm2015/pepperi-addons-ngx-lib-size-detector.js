import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵclassMap, ɵɵpropertyInterpolate, ɵɵadvance, ɵɵtextInterpolate1, ɵɵdirectiveInject, ElementRef, ɵɵdefineComponent, ɵɵlistener, ɵɵresolveWindow, ɵɵtemplate, ɵɵproperty, ɵsetClassMetadata, Component, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgForOf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SCREEN_SIZE, LayoutService, PepperiModule } from '@pepperi-addons/ngx-lib';
import { DefaultShowHideDirective } from '@angular/flex-layout/extended';

function SizeDetectorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(s_r1.css + " " + (ctx_r0.prefix + s_r1.id));
    ɵɵpropertyInterpolate("fxShow.xs", s_r1.name == "xs");
    ɵɵpropertyInterpolate("fxShow.sm", s_r1.name == "sm");
    ɵɵpropertyInterpolate("fxShow.md", s_r1.name == "md");
    ɵɵpropertyInterpolate("fxShow.lg", s_r1.name == "lg");
    ɵɵpropertyInterpolate("fxShow.xl", s_r1.name == "xl");
    ɵɵadvance(1);
    ɵɵtextInterpolate1("The current screen size is - ", s_r1.name, "\n");
} }
class SizeDetectorComponent {
    constructor(element, layoutService) {
        this.element = element;
        this.layoutService = layoutService;
        this.prefix = 'is-';
        this.sizes = [
            {
                id: SCREEN_SIZE.XS,
                name: 'xs',
                css: `d-block d-sm-none`
            },
            {
                id: SCREEN_SIZE.SM,
                name: 'sm',
                css: `d-none d-sm-block d-md-none`
            },
            {
                id: SCREEN_SIZE.MD,
                name: 'md',
                css: `d-none d-md-block d-lg-none`
            },
            {
                id: SCREEN_SIZE.LG,
                name: 'lg',
                css: `d-none d-lg-block d-xl-none`
            },
            {
                id: SCREEN_SIZE.XL,
                name: 'xl',
                css: `d-none d-xl-block`
            },
        ];
    }
    onResize(event) {
        this.detectScreenSize();
    }
    ngAfterViewInit() {
        this.detectScreenSize();
    }
    detectScreenSize() {
        const currentSize = this.sizes.find(x => {
            const el = this.element.nativeElement.querySelector(`.${this.prefix}${x.id}`);
            const isVisible = window.getComputedStyle(el).display !== 'none';
            return isVisible;
        });
        this.layoutService.onResize(currentSize.id);
    }
}
SizeDetectorComponent.ɵfac = function SizeDetectorComponent_Factory(t) { return new (t || SizeDetectorComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LayoutService)); };
SizeDetectorComponent.ɵcmp = ɵɵdefineComponent({ type: SizeDetectorComponent, selectors: [["pep-size-detector"]], hostBindings: function SizeDetectorComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("resize", function SizeDetectorComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵɵresolveWindow);
    } }, decls: 1, vars: 1, consts: [[3, "fxShow.xs", "fxShow.sm", "fxShow.md", "fxShow.lg", "fxShow.xl", "class", 4, "ngFor", "ngForOf"], [3, "fxShow.xs", "fxShow.sm", "fxShow.md", "fxShow.lg", "fxShow.xl"]], template: function SizeDetectorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, SizeDetectorComponent_div_0_Template, 2, 9, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.sizes);
    } }, directives: [NgForOf, DefaultShowHideDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SizeDetectorComponent, [{
        type: Component,
        args: [{
                selector: 'pep-size-detector',
                templateUrl: './size-detector.component.html'
            }]
    }], function () { return [{ type: ElementRef }, { type: LayoutService }]; }, { onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();

class PepperiSizeDetectorModule {
}
PepperiSizeDetectorModule.ɵmod = ɵɵdefineNgModule({ type: PepperiSizeDetectorModule });
PepperiSizeDetectorModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiSizeDetectorModule_Factory(t) { return new (t || PepperiSizeDetectorModule)(); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            FlexLayoutModule,
            // Pepperi modules
            PepperiModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiSizeDetectorModule, { declarations: [SizeDetectorComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        // Pepperi modules
        PepperiModule], exports: [SizeDetectorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiSizeDetectorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    FlexLayoutModule,
                    // Pepperi modules
                    PepperiModule,
                ],
                exports: [SizeDetectorComponent],
                declarations: [SizeDetectorComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-lib/size-detector
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiSizeDetectorModule, SizeDetectorComponent };
//# sourceMappingURL=pepperi-addons-ngx-lib-size-detector.js.map
