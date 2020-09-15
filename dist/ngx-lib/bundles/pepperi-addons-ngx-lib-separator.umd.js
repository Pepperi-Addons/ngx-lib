(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@pepperi-addons/ngx-lib')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/separator', ['exports', '@angular/core', '@angular/common', '@pepperi-addons/ngx-lib'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].separator = {}), global.ng.core, global.ng.common, global['pepperi-addons']['ngx-lib']));
}(this, (function (exports, i0, i1, ngxLib) { 'use strict';

    function PepperiSeparatorComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiSeparatorComponent_ng_template_1_Template(rf, ctx) { }
    function PepperiSeparatorComponent_ng_template_3_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 4);
            i0.ɵɵelementStart(2, "span", 5);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("pepperi-separator-field wrap pepperi-border-bottom align-", ctx_r5.xAlignment, "");
            i0.ɵɵpropertyInterpolate("title", ctx_r5.label);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r5.label);
        }
    }
    function PepperiSeparatorComponent_ng_template_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 6);
            i0.ɵɵelementStart(2, "span", 7);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("pepperi-separator-field pepperi-small-separator-field pepperi-border-bottom text-align-", ctx_r6.xAlignment, "");
            i0.ɵɵpropertyInterpolate("dir", ctx_r6.xAlignment == "2" ? "rtl" : "ltr");
            i0.ɵɵpropertyInterpolate("title", ctx_r6.label);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r6.label);
        }
    }
    function PepperiSeparatorComponent_ng_template_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "label", 8);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r7.label);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r7.label);
        }
    }
    function PepperiSeparatorComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiSeparatorComponent_ng_template_3_ng_container_0_Template, 4, 5, "ng-container", 3);
            i0.ɵɵtemplate(1, PepperiSeparatorComponent_ng_template_3_ng_container_1_Template, 4, 6, "ng-container", 3);
            i0.ɵɵtemplate(2, PepperiSeparatorComponent_ng_template_3_ng_container_2_Template, 3, 2, "ng-container", 3);
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiForm);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiCard);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiTable);
        }
    }
    var PepperiSeparatorComponent = /** @class */ (function () {
        function PepperiSeparatorComponent(renderer, element) {
            this.renderer = renderer;
            this.element = element;
            this.key = '';
            this.label = '';
            this.xAlignment = '0';
            this.controlType = 'separator';
            this.form = null;
            this.layoutType = ngxLib.LAYOUT_TYPE.PepperiForm;
            this.LAYOUT_TYPE = ngxLib.LAYOUT_TYPE;
            this.standAlone = false;
        }
        PepperiSeparatorComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                this.standAlone = true;
                this.renderer.addClass(this.element.nativeElement, ngxLib.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }
        };
        return PepperiSeparatorComponent;
    }());
    PepperiSeparatorComponent.ɵfac = function PepperiSeparatorComponent_Factory(t) { return new (t || PepperiSeparatorComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PepperiSeparatorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiSeparatorComponent, selectors: [["pep-separator"]], inputs: { key: "key", label: "label", xAlignment: "xAlignment", form: "form", layoutType: "layoutType" }, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["emptyBlock", ""], ["separatorBlock", ""], [4, "ngIf"], [3, "title"], [1, "block-with-text", "body-md"], [3, "dir", "title"], [1, "small-block-with-text", "body-sm"], [1, "cl", 3, "title"]], template: function PepperiSeparatorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PepperiSeparatorComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
                i0.ɵɵtemplate(1, PepperiSeparatorComponent_ng_template_1_Template, 0, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, PepperiSeparatorComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(2);
                var _r3 = i0.ɵɵreference(4);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.Editmodal)("ngIfThen", _r1)("ngIfElse", _r3);
            }
        }, directives: [i1.NgIf], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiSeparatorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-separator',
                        templateUrl: './separator.component.html',
                        styleUrls: ['./separator.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], xAlignment: [{
                    type: i0.Input
                }], form: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }] });
    })();

    var PepperiSeparatorModule = /** @class */ (function () {
        function PepperiSeparatorModule() {
        }
        return PepperiSeparatorModule;
    }());
    PepperiSeparatorModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiSeparatorModule });
    PepperiSeparatorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiSeparatorModule_Factory(t) { return new (t || PepperiSeparatorModule)(); }, imports: [[
                i1.CommonModule,
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiSeparatorModule, { declarations: [PepperiSeparatorComponent], imports: [i1.CommonModule], exports: [PepperiSeparatorComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiSeparatorModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                        ],
                        exports: [PepperiSeparatorComponent],
                        declarations: [PepperiSeparatorComponent],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ngx-lib/separator
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiSeparatorComponent = PepperiSeparatorComponent;
    exports.PepperiSeparatorModule = PepperiSeparatorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-separator.umd.js.map
