(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/flex-layout'), require('@pepperi-addons/ngx-lib'), require('@angular/flex-layout/extended')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/size-detector', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/flex-layout', '@pepperi-addons/ngx-lib', '@angular/flex-layout/extended'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib']['size-detector'] = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.flexLayout, global['pepperi-addons']['ngx-lib'], global.ng.flexLayout.extended));
}(this, (function (exports, i0, i2, forms, flexLayout, i1, i3) { 'use strict';

    function SizeDetectorComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var s_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵclassMap(s_r1.css + " " + (ctx_r0.prefix + s_r1.id));
            i0.ɵɵpropertyInterpolate("fxShow.xs", s_r1.name == "xs");
            i0.ɵɵpropertyInterpolate("fxShow.sm", s_r1.name == "sm");
            i0.ɵɵpropertyInterpolate("fxShow.md", s_r1.name == "md");
            i0.ɵɵpropertyInterpolate("fxShow.lg", s_r1.name == "lg");
            i0.ɵɵpropertyInterpolate("fxShow.xl", s_r1.name == "xl");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("The current screen size is - ", s_r1.name, "\n");
        }
    }
    var SizeDetectorComponent = /** @class */ (function () {
        function SizeDetectorComponent(element, layoutService) {
            this.element = element;
            this.layoutService = layoutService;
            this.prefix = 'is-';
            this.sizes = [
                {
                    id: i1.SCREEN_SIZE.XS,
                    name: 'xs',
                    css: "d-block d-sm-none"
                },
                {
                    id: i1.SCREEN_SIZE.SM,
                    name: 'sm',
                    css: "d-none d-sm-block d-md-none"
                },
                {
                    id: i1.SCREEN_SIZE.MD,
                    name: 'md',
                    css: "d-none d-md-block d-lg-none"
                },
                {
                    id: i1.SCREEN_SIZE.LG,
                    name: 'lg',
                    css: "d-none d-lg-block d-xl-none"
                },
                {
                    id: i1.SCREEN_SIZE.XL,
                    name: 'xl',
                    css: "d-none d-xl-block"
                },
            ];
        }
        SizeDetectorComponent.prototype.onResize = function (event) {
            this.detectScreenSize();
        };
        SizeDetectorComponent.prototype.ngAfterViewInit = function () {
            this.detectScreenSize();
        };
        SizeDetectorComponent.prototype.detectScreenSize = function () {
            var _this = this;
            var currentSize = this.sizes.find(function (x) {
                var el = _this.element.nativeElement.querySelector("." + _this.prefix + x.id);
                var isVisible = window.getComputedStyle(el).display !== 'none';
                return isVisible;
            });
            this.layoutService.onResize(currentSize.id);
        };
        return SizeDetectorComponent;
    }());
    SizeDetectorComponent.ɵfac = function SizeDetectorComponent_Factory(t) { return new (t || SizeDetectorComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LayoutService)); };
    SizeDetectorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SizeDetectorComponent, selectors: [["pep-size-detector"]], hostBindings: function SizeDetectorComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("resize", function SizeDetectorComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
            }
        }, decls: 1, vars: 1, consts: [[3, "fxShow.xs", "fxShow.sm", "fxShow.md", "fxShow.lg", "fxShow.xl", "class", 4, "ngFor", "ngForOf"], [3, "fxShow.xs", "fxShow.sm", "fxShow.md", "fxShow.lg", "fxShow.xl"]], template: function SizeDetectorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, SizeDetectorComponent_div_0_Template, 2, 9, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.sizes);
            }
        }, directives: [i2.NgForOf, i3.DefaultShowHideDirective], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SizeDetectorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-size-detector',
                        templateUrl: './size-detector.component.html'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i1.LayoutService }]; }, { onResize: [{
                    type: i0.HostListener,
                    args: ['window:resize', ['$event']]
                }] });
    })();

    var PepperiSizeDetectorModule = /** @class */ (function () {
        function PepperiSizeDetectorModule() {
        }
        return PepperiSizeDetectorModule;
    }());
    PepperiSizeDetectorModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiSizeDetectorModule });
    PepperiSizeDetectorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiSizeDetectorModule_Factory(t) { return new (t || PepperiSizeDetectorModule)(); }, imports: [[
                i2.CommonModule,
                forms.ReactiveFormsModule,
                forms.FormsModule,
                flexLayout.FlexLayoutModule,
                // Pepperi modules
                i1.PepperiModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiSizeDetectorModule, { declarations: [SizeDetectorComponent], imports: [i2.CommonModule,
                forms.ReactiveFormsModule,
                forms.FormsModule,
                flexLayout.FlexLayoutModule,
                // Pepperi modules
                i1.PepperiModule], exports: [SizeDetectorComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiSizeDetectorModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            flexLayout.FlexLayoutModule,
                            // Pepperi modules
                            i1.PepperiModule,
                        ],
                        exports: [SizeDetectorComponent],
                        declarations: [SizeDetectorComponent],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ngx-lib/size-detector
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiSizeDetectorModule = PepperiSizeDetectorModule;
    exports.SizeDetectorComponent = SizeDetectorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-size-detector.umd.js.map
