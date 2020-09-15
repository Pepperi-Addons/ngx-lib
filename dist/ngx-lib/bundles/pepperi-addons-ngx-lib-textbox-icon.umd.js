(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib/icon')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/textbox-icon', ['exports', '@angular/core', '@angular/common', '@angular/material/core', '@angular/material/button', '@angular/material/form-field', '@angular/material/icon', '@pepperi-addons/ngx-lib/icon'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib']['textbox-icon'] = {}), global.ng.core, global.ng.common, global.ng.material.core, global.ng.material.button, global.ng.material.formField, global.ng.material.icon, global['pepperi-addons']['ngx-lib'].icon));
}(this, (function (exports, i0, i1, core, i4, formField, i2, i1$1) { 'use strict';

    function PepperiTextboxIconComponent_mat_icon_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-icon", 3);
            i0.ɵɵelement(1, "pep-icon", 4);
            i0.ɵɵelementEnd();
        }
    }
    function PepperiTextboxIconComponent_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-icon", 3);
            i0.ɵɵelement(1, "pep-icon", 5);
            i0.ɵɵelementEnd();
        }
    }
    function PepperiTextboxIconComponent_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-icon", 3);
            i0.ɵɵelement(1, "pep-icon", 6);
            i0.ɵɵelementEnd();
        }
    }
    function PepperiTextboxIconComponent_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-icon", 3);
            i0.ɵɵelement(1, "pep-icon", 7);
            i0.ɵɵelementEnd();
        }
    }
    var _c0 = function (a0) { return { disabled: a0 }; };
    function PepperiTextboxIconComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 8);
            i0.ɵɵlistener("click", function PepperiTextboxIconComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.iconButtonClicked(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("disabled", ctx_r4.value.length === 0)("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r4.value.length === 0));
        }
    }
    function PepperiTextboxIconComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 8);
            i0.ɵɵlistener("click", function PepperiTextboxIconComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.iconButtonClicked(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("disabled", ctx_r5.value.length === 0)("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r5.value.length === 0));
        }
    }
    function PepperiTextboxIconComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 8);
            i0.ɵɵlistener("click", function PepperiTextboxIconComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.iconButtonClicked(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵproperty("disabled", ctx_r6.value.length === 0)("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r6.value.length === 0));
        }
    }
    function PepperiTextboxIconComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 12);
            i0.ɵɵlistener("click", function PepperiTextboxIconComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.iconButtonClicked(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PepperiTextboxIconComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 12);
            i0.ɵɵlistener("click", function PepperiTextboxIconComponent_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.iconButtonClicked(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("name", ctx_r8.disabled ? "system_full_screen" : "system_edit");
        }
    }
    function PepperiTextboxIconComponent_button_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 12);
            i0.ɵɵlistener("click", function PepperiTextboxIconComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22_1); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.iconButtonClicked(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PepperiTextboxIconComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 12);
            i0.ɵɵlistener("click", function PepperiTextboxIconComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24_1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.iconButtonClicked(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var PepperiTextboxIconComponent = /** @class */ (function () {
        function PepperiTextboxIconComponent() {
            this.test = true;
            this.iconClicked = new i0.EventEmitter();
        }
        PepperiTextboxIconComponent.prototype.iconButtonClicked = function () {
            var currentValue = this.value;
            if (currentValue.toString().trim().length > 0) {
                switch (this.type) {
                    case 'email':
                        window.open('mailto:' + currentValue, 'email');
                        break;
                    case 'phone':
                        window.open('tel:' + currentValue, 'tel');
                        break;
                    case 'link':
                        window.open(currentValue);
                        break;
                    default:
                        break;
                }
            }
            this.iconClicked.emit();
        };
        return PepperiTextboxIconComponent;
    }());
    PepperiTextboxIconComponent.ɵfac = function PepperiTextboxIconComponent_Factory(t) { return new (t || PepperiTextboxIconComponent)(); };
    PepperiTextboxIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiTextboxIconComponent, selectors: [["pep-textbox-icon"]], inputs: { value: "value", label: "label", type: "type", disabled: "disabled" }, outputs: { iconClicked: "iconClicked" }, decls: 11, vars: 11, consts: [["class", "text-icon", 4, "ngIf"], ["class", "pepperi-button md regular", "mat-button", "", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["class", "pepperi-button md regular", "mat-button", "", 3, "click", 4, "ngIf"], [1, "text-icon"], ["name", "number_coins"], ["name", "number_percent"], ["name", "number_number"], ["name", "number_decimal"], ["mat-button", "", 1, "pepperi-button", "md", "regular", 3, "disabled", "ngClass", "click"], ["name", "system_phone"], ["name", "system_email"], ["name", "system_link"], ["mat-button", "", 1, "pepperi-button", "md", "regular", 3, "click"], ["name", "system_full_screen"], [3, "name"], ["name", "time_datetime"], ["name", "time_cal"]], template: function PepperiTextboxIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PepperiTextboxIconComponent_mat_icon_0_Template, 2, 0, "mat-icon", 0);
                i0.ɵɵtemplate(1, PepperiTextboxIconComponent_mat_icon_1_Template, 2, 0, "mat-icon", 0);
                i0.ɵɵtemplate(2, PepperiTextboxIconComponent_mat_icon_2_Template, 2, 0, "mat-icon", 0);
                i0.ɵɵtemplate(3, PepperiTextboxIconComponent_mat_icon_3_Template, 2, 0, "mat-icon", 0);
                i0.ɵɵtemplate(4, PepperiTextboxIconComponent_button_4_Template, 3, 4, "button", 1);
                i0.ɵɵtemplate(5, PepperiTextboxIconComponent_button_5_Template, 3, 4, "button", 1);
                i0.ɵɵtemplate(6, PepperiTextboxIconComponent_button_6_Template, 3, 4, "button", 1);
                i0.ɵɵtemplate(7, PepperiTextboxIconComponent_button_7_Template, 3, 0, "button", 2);
                i0.ɵɵtemplate(8, PepperiTextboxIconComponent_button_8_Template, 3, 1, "button", 2);
                i0.ɵɵtemplate(9, PepperiTextboxIconComponent_button_9_Template, 3, 0, "button", 2);
                i0.ɵɵtemplate(10, PepperiTextboxIconComponent_button_10_Template, 3, 0, "button", 2);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "currency");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "percentage");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "int");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "real");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.type === "phone");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.type === "email");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.type === "link");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.type === "textarea");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.type === "richhtmltextarea");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "datetime");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "date");
            }
        }, directives: [i1.NgIf, i2.MatIcon, i1$1.PepperiIconComponent, i4.MatButton, i1.NgClass], styles: ["[_nghost-%COMP%]{display:flex}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiTextboxIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-textbox-icon',
                        templateUrl: './textbox-icon.component.html',
                        styleUrls: ['./textbox-icon.component.scss'],
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], iconClicked: [{
                    type: i0.Output
                }] });
    })();

    var PepperiTextboxIconModule = /** @class */ (function () {
        function PepperiTextboxIconModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconNumberCoins,
                i1$1.pepperiIconNumberPercent,
                i1$1.pepperiIconNumberNumber,
                i1$1.pepperiIconNumberDecimal,
                i1$1.pepperiIconSystemPhone,
                i1$1.pepperiIconSystemEmail,
                i1$1.pepperiIconSystemLink,
                i1$1.pepperiIconSystemFullScreen,
                i1$1.pepperiIconSystemEdit,
                i1$1.pepperiIconTimeDatetime,
                i1$1.pepperiIconTimeCal
            ]);
        }
        return PepperiTextboxIconModule;
    }());
    PepperiTextboxIconModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiTextboxIconModule });
    PepperiTextboxIconModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiTextboxIconModule_Factory(t) { return new (t || PepperiTextboxIconModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i1.CommonModule,
                // Material modules,
                core.MatCommonModule,
                i4.MatButtonModule,
                formField.MatFormFieldModule,
                i2.MatIconModule,
                // Pepperi modules
                i1$1.PepperiIconModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiTextboxIconModule, { declarations: [PepperiTextboxIconComponent], imports: [i1.CommonModule,
                // Material modules,
                core.MatCommonModule,
                i4.MatButtonModule,
                formField.MatFormFieldModule,
                i2.MatIconModule,
                // Pepperi modules
                i1$1.PepperiIconModule], exports: [PepperiTextboxIconComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiTextboxIconModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            // Material modules,
                            core.MatCommonModule,
                            i4.MatButtonModule,
                            formField.MatFormFieldModule,
                            i2.MatIconModule,
                            // Pepperi modules
                            i1$1.PepperiIconModule
                        ],
                        exports: [PepperiTextboxIconComponent],
                        declarations: [PepperiTextboxIconComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/textbox-icon
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiTextboxIconComponent = PepperiTextboxIconComponent;
    exports.PepperiTextboxIconModule = PepperiTextboxIconModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-textbox-icon.umd.js.map
