(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/core'), require('@angular/material/form-field'), require('@angular/material/menu'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/menu', ['exports', '@angular/core', '@angular/common', '@angular/material/core', '@angular/material/form-field', '@angular/material/menu', '@angular/material/icon', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].menu = {}), global.ng.core, global.ng.common, global.ng.material.core, global.ng.material.formField, global.ng.material.menu, global.ng.material.icon, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global.translate));
}(this, (function (exports, i0, i1, core, formField, i4, i2, ngxLib, i1$1, i5) { 'use strict';

    function PepperiMenuComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c0 = function (a0, a1, a2, a3, a4) { return { "lock-events": a0, "left-alignment": a1, "right-alignment": a2, "center-alignment": a3, "invert": a4 }; };
    function PepperiMenuComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 3);
            i0.ɵɵlistener("click", function PepperiMenuComponent_ng_template_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.menuClicked($event); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵclassMapInterpolate1("pepperi-menu pepperi-button icon-button weak ", ctx_r2.layoutType === ctx_r2.LAYOUT_TYPE.PepperiTable ? "sm" : "md", "");
            i0.ɵɵpropertyInterpolate("title", ctx_r2.label);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(5, _c0, ctx_r2.disabled, ctx_r2.xAlignment == "1" || ctx_r2.xAlignment == "0", ctx_r2.xAlignment == "2", ctx_r2.xAlignment == "3", ctx_r2.invertClass));
        }
    }
    function PepperiMenuComponent_ng_template_3_button_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 9);
            i0.ɵɵlistener("click", function PepperiMenuComponent_ng_template_3_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11_1); var option_r9 = ctx.$implicit; var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.menuItemClicked(option_r9.Key); });
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r9 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, option_r9.Value));
        }
    }
    var _c1 = function (a0, a1, a2, a3) { return { "left-alignment": a0, "right-alignment": a1, "center-alignment": a2, "invert": a3 }; };
    var _c2 = function (a0) { return { rtlMenu: a0 }; };
    function PepperiMenuComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 5);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-menu", 6, 7);
            i0.ɵɵtemplate(5, PepperiMenuComponent_ng_template_3_button_5_Template, 4, 3, "button", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r7 = i0.ɵɵreference(4);
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵclassMapInterpolate1("pepperi-menu pepperi-button icon-button weak ", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiTable ? "sm" : "md", "");
            i0.ɵɵpropertyInterpolate("title", ctx_r4.label);
            i0.ɵɵproperty("matMenuTriggerFor", _r7)("ngClass", i0.ɵɵpureFunction4(9, _c1, ctx_r4.xAlignment == "1" || ctx_r4.xAlignment == "0", ctx_r4.xAlignment == "2", ctx_r4.xAlignment == "3", ctx_r4.invertClass));
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("xPosition", ctx_r4.xAlignment == "2" ? "after" : "before");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(14, _c2, ctx_r4.xAlignment == "2"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r4.options);
        }
    }
    var PepperiMenuComponent = /** @class */ (function () {
        function PepperiMenuComponent() {
            this.key = '';
            this.label = '';
            this.disabled = false;
            this.xAlignment = '0';
            // @Input() hasSubMenu = false;
            this.options = [];
            this.invertClass = true;
            this.controlType = 'menu';
            this.layoutType = ngxLib.LAYOUT_TYPE.PepperiForm;
            this.elementClicked = new i0.EventEmitter();
            this.notifyMenuItemClicked = new i0.EventEmitter();
            this.LAYOUT_TYPE = ngxLib.LAYOUT_TYPE;
        }
        PepperiMenuComponent.prototype.ngOnDestroy = function () {
            if (this.elementClicked) {
                this.elementClicked.unsubscribe();
            }
            if (this.notifyMenuItemClicked) {
                this.notifyMenuItemClicked.unsubscribe();
            }
        };
        PepperiMenuComponent.prototype.menuClicked = function (event) {
            this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
        };
        PepperiMenuComponent.prototype.menuItemClicked = function (itemKey) {
            this.notifyMenuItemClicked.emit({ apiName: itemKey });
        };
        return PepperiMenuComponent;
    }());
    PepperiMenuComponent.ɵfac = function PepperiMenuComponent_Factory(t) { return new (t || PepperiMenuComponent)(); };
    PepperiMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiMenuComponent, selectors: [["pep-menu"]], inputs: { key: "key", label: "label", disabled: "disabled", xAlignment: "xAlignment", options: "options", invertClass: "invertClass", layoutType: "layoutType" }, outputs: { elementClicked: "elementClicked", notifyMenuItemClicked: "notifyMenuItemClicked" }, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["noSubMenuBlock", ""], ["subMenuBlock", ""], ["mat-button", "", 3, "title", "ngClass", "click"], ["name", "system_menu"], ["mat-button", "", "menu-blur", "", 3, "matMenuTriggerFor", "ngClass", "title"], [3, "xPosition", "ngClass"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]], template: function PepperiMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PepperiMenuComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
                i0.ɵɵtemplate(1, PepperiMenuComponent_ng_template_1_Template, 3, 11, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, PepperiMenuComponent_ng_template_3_Template, 6, 16, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(2);
                var _r3 = i0.ɵɵreference(4);
                i0.ɵɵproperty("ngIf", (ctx.options == null ? null : ctx.options.length) > 0)("ngIfThen", _r3)("ngIfElse", _r1);
            }
        }, directives: [i1.NgIf, i1.NgClass, i2.MatIcon, i1$1.PepperiIconComponent, i4.MatMenuTrigger, i4._MatMenu, i1.NgForOf, i4.MatMenuItem], pipes: [i5.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.pepperi-menu[_ngcontent-%COMP%]{cursor:pointer}.pepperi-menu.left-alignment[_ngcontent-%COMP%]{justify-self:flex-start}.pepperi-menu.center-alignment[_ngcontent-%COMP%]{-ms-grid-column-align:center;justify-self:center}.pepperi-menu.right-alignment[_ngcontent-%COMP%]{justify-self:flex-end}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiMenuComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-menu',
                        templateUrl: './menu.component.html',
                        styleUrls: ['./menu.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return []; }, { key: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], xAlignment: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], invertClass: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], elementClicked: [{
                    type: i0.Output
                }], notifyMenuItemClicked: [{
                    type: i0.Output
                }] });
    })();

    var PepperiMenuModule = /** @class */ (function () {
        function PepperiMenuModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconSystemMenu
            ]);
        }
        return PepperiMenuModule;
    }());
    PepperiMenuModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiMenuModule });
    PepperiMenuModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiMenuModule_Factory(t) { return new (t || PepperiMenuModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i1.CommonModule,
                // Material modules,
                core.MatCommonModule,
                formField.MatFormFieldModule,
                i4.MatMenuModule,
                i2.MatIconModule,
                // Pepperi modules
                ngxLib.PepperiModule,
                i1$1.PepperiIconModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiMenuModule, { declarations: [PepperiMenuComponent], imports: [i1.CommonModule,
                // Material modules,
                core.MatCommonModule,
                formField.MatFormFieldModule,
                i4.MatMenuModule,
                i2.MatIconModule,
                // Pepperi modules
                ngxLib.PepperiModule,
                i1$1.PepperiIconModule], exports: [PepperiMenuComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiMenuModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            // Material modules,
                            core.MatCommonModule,
                            formField.MatFormFieldModule,
                            i4.MatMenuModule,
                            i2.MatIconModule,
                            // Pepperi modules
                            ngxLib.PepperiModule,
                            i1$1.PepperiIconModule
                        ],
                        exports: [PepperiMenuComponent],
                        declarations: [PepperiMenuComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/menu
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiMenuComponent = PepperiMenuComponent;
    exports.PepperiMenuModule = PepperiMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-menu.umd.js.map
