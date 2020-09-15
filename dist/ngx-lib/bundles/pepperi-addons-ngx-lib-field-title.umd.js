(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/core'), require('@angular/material/form-field'), require('@pepperi-addons/ngx-lib/icon')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/field-title', ['exports', '@angular/core', '@angular/common', '@angular/material/core', '@angular/material/form-field', '@pepperi-addons/ngx-lib/icon'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib']['field-title'] = {}), global.ng.core, global.ng.common, global.ng.material.core, global.ng.material.formField, global['pepperi-addons']['ngx-lib'].icon));
}(this, (function (exports, i0, i1, core, i3, i1$1) { 'use strict';

    function PepperiFieldTitleComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 4);
            i0.ɵɵelement(1, "pep-icon", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", ctx_r0.xAlignment == "2" ? "pull-right flip" : "pull-left flip");
        }
    }
    var _c0 = function (a0) { return { "max-width": a0 }; };
    function PepperiFieldTitleComponent_mat_label_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-label", 6);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx_r1.maxFieldCharacters > 0 ? "85%" : "100%"));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r1.label, "");
        }
    }
    var _c1 = function (a0, a1) { return { "pull-right": a0, "pull-left": a1 }; };
    function PepperiFieldTitleComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 7);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c1, ctx_r2.xAlignment == "1" || ctx_r2.xAlignment == "0", ctx_r2.xAlignment == "2"));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2("\u00A0", ctx_r2.inputLength || 0, "/", ctx_r2.maxFieldCharacters, "");
        }
    }
    var _c2 = function (a0) { return { disable: a0 }; };
    var _c3 = function (a0) { return { "text-align": a0 }; };
    var PepperiFieldTitleComponent = /** @class */ (function () {
        function PepperiFieldTitleComponent() {
            this.label = '';
            this.required = false;
            this.disabled = false;
            this.maxFieldCharacters = 0;
            this.xAlignment = '0';
            this.showTitle = true;
            this.inputLength = 0;
        }
        return PepperiFieldTitleComponent;
    }());
    PepperiFieldTitleComponent.ɵfac = function PepperiFieldTitleComponent_Factory(t) { return new (t || PepperiFieldTitleComponent)(); };
    PepperiFieldTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiFieldTitleComponent, selectors: [["pep-field-title"]], inputs: { label: "label", required: "required", disabled: "disabled", maxFieldCharacters: "maxFieldCharacters", xAlignment: "xAlignment", showTitle: "showTitle", inputLength: "inputLength" }, decls: 4, vars: 9, consts: [[1, "mat-form-title", 3, "ngClass", "ngStyle"], ["class", "required", 3, "ngClass", 4, "ngIf"], ["class", "body-xs", 3, "ngStyle", 4, "ngIf"], ["class", "body-xs", 3, "ngClass", 4, "ngIf"], [1, "required", 3, "ngClass"], ["name", "system_must"], [1, "body-xs", 3, "ngStyle"], [1, "body-xs", 3, "ngClass"]], template: function PepperiFieldTitleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, PepperiFieldTitleComponent_span_1_Template, 2, 1, "span", 1);
                i0.ɵɵtemplate(2, PepperiFieldTitleComponent_mat_label_2_Template, 2, 4, "mat-label", 2);
                i0.ɵɵtemplate(3, PepperiFieldTitleComponent_span_3_Template, 2, 6, "span", 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c2, ctx.disabled))("ngStyle", i0.ɵɵpureFunction1(7, _c3, ctx.xAlignment == "3" ? "center" : ctx.xAlignment == "2" ? "right" : "left"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.required);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showTitle);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.maxFieldCharacters > 0);
            }
        }, directives: [i1.NgClass, i1.NgStyle, i1.NgIf, i1$1.PepperiIconComponent, i3.MatLabel], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;width:inherit}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiFieldTitleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-field-title',
                        templateUrl: './field-title.component.html',
                        styleUrls: ['./field-title.component.scss'],
                    }]
            }], function () { return []; }, { label: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], maxFieldCharacters: [{
                    type: i0.Input
                }], xAlignment: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], inputLength: [{
                    type: i0.Input
                }] });
    })();

    var PepperiFieldTitleModule = /** @class */ (function () {
        function PepperiFieldTitleModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconSystemMust
            ]);
        }
        return PepperiFieldTitleModule;
    }());
    PepperiFieldTitleModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiFieldTitleModule });
    PepperiFieldTitleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiFieldTitleModule_Factory(t) { return new (t || PepperiFieldTitleModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i1.CommonModule,
                // Material modules,
                core.MatCommonModule,
                i3.MatFormFieldModule,
                // Pepperi modules
                i1$1.PepperiIconModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiFieldTitleModule, { declarations: [PepperiFieldTitleComponent], imports: [i1.CommonModule,
                // Material modules,
                core.MatCommonModule,
                i3.MatFormFieldModule,
                // Pepperi modules
                i1$1.PepperiIconModule], exports: [PepperiFieldTitleComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiFieldTitleModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            // Material modules,
                            core.MatCommonModule,
                            i3.MatFormFieldModule,
                            // Pepperi modules
                            i1$1.PepperiIconModule
                        ],
                        exports: [PepperiFieldTitleComponent],
                        declarations: [PepperiFieldTitleComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/field-title
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiFieldTitleComponent = PepperiFieldTitleComponent;
    exports.PepperiFieldTitleModule = PepperiFieldTitleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-field-title.umd.js.map
