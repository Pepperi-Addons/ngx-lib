import { ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵproperty, ɵɵpureFunction1, ɵɵadvance, ɵɵpropertyInterpolate, EventEmitter, ɵɵdefineComponent, ɵɵtemplate, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { PepperiIconComponent, pepperiIconNumberCoins, pepperiIconNumberPercent, pepperiIconNumberNumber, pepperiIconNumberDecimal, pepperiIconSystemPhone, pepperiIconSystemEmail, pepperiIconSystemLink, pepperiIconSystemFullScreen, pepperiIconSystemEdit, pepperiIconTimeDatetime, pepperiIconTimeCal, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';

function PepperiTextboxIconComponent_mat_icon_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 3);
    ɵɵelement(1, "pep-icon", 4);
    ɵɵelementEnd();
} }
function PepperiTextboxIconComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 3);
    ɵɵelement(1, "pep-icon", 5);
    ɵɵelementEnd();
} }
function PepperiTextboxIconComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 3);
    ɵɵelement(1, "pep-icon", 6);
    ɵɵelementEnd();
} }
function PepperiTextboxIconComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 3);
    ɵɵelement(1, "pep-icon", 7);
    ɵɵelementEnd();
} }
const _c0 = function (a0) { return { disabled: a0 }; };
function PepperiTextboxIconComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function PepperiTextboxIconComponent_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(); return ctx_r11.iconButtonClicked(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r4.value.length === 0)("ngClass", ɵɵpureFunction1(2, _c0, ctx_r4.value.length === 0));
} }
function PepperiTextboxIconComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function PepperiTextboxIconComponent_button_5_Template_button_click_0_listener() { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(); return ctx_r13.iconButtonClicked(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 10);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r5.value.length === 0)("ngClass", ɵɵpureFunction1(2, _c0, ctx_r5.value.length === 0));
} }
function PepperiTextboxIconComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function PepperiTextboxIconComponent_button_6_Template_button_click_0_listener() { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(); return ctx_r15.iconButtonClicked(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r6.value.length === 0)("ngClass", ɵɵpureFunction1(2, _c0, ctx_r6.value.length === 0));
} }
function PepperiTextboxIconComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function PepperiTextboxIconComponent_button_7_Template_button_click_0_listener() { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(); return ctx_r17.iconButtonClicked(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PepperiTextboxIconComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function PepperiTextboxIconComponent_button_8_Template_button_click_0_listener() { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(); return ctx_r19.iconButtonClicked(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("name", ctx_r8.disabled ? "system_full_screen" : "system_edit");
} }
function PepperiTextboxIconComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function PepperiTextboxIconComponent_button_9_Template_button_click_0_listener() { ɵɵrestoreView(_r22); const ctx_r21 = ɵɵnextContext(); return ctx_r21.iconButtonClicked(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PepperiTextboxIconComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function PepperiTextboxIconComponent_button_10_Template_button_click_0_listener() { ɵɵrestoreView(_r24); const ctx_r23 = ɵɵnextContext(); return ctx_r23.iconButtonClicked(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
class PepperiTextboxIconComponent {
    constructor() {
        this.test = true;
        this.iconClicked = new EventEmitter();
    }
    iconButtonClicked() {
        const currentValue = this.value;
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
    }
}
PepperiTextboxIconComponent.ɵfac = function PepperiTextboxIconComponent_Factory(t) { return new (t || PepperiTextboxIconComponent)(); };
PepperiTextboxIconComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiTextboxIconComponent, selectors: [["pep-textbox-icon"]], inputs: { value: "value", label: "label", type: "type", disabled: "disabled" }, outputs: { iconClicked: "iconClicked" }, decls: 11, vars: 11, consts: [["class", "text-icon", 4, "ngIf"], ["class", "pepperi-button md regular", "mat-button", "", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["class", "pepperi-button md regular", "mat-button", "", 3, "click", 4, "ngIf"], [1, "text-icon"], ["name", "number_coins"], ["name", "number_percent"], ["name", "number_number"], ["name", "number_decimal"], ["mat-button", "", 1, "pepperi-button", "md", "regular", 3, "disabled", "ngClass", "click"], ["name", "system_phone"], ["name", "system_email"], ["name", "system_link"], ["mat-button", "", 1, "pepperi-button", "md", "regular", 3, "click"], ["name", "system_full_screen"], [3, "name"], ["name", "time_datetime"], ["name", "time_cal"]], template: function PepperiTextboxIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PepperiTextboxIconComponent_mat_icon_0_Template, 2, 0, "mat-icon", 0);
        ɵɵtemplate(1, PepperiTextboxIconComponent_mat_icon_1_Template, 2, 0, "mat-icon", 0);
        ɵɵtemplate(2, PepperiTextboxIconComponent_mat_icon_2_Template, 2, 0, "mat-icon", 0);
        ɵɵtemplate(3, PepperiTextboxIconComponent_mat_icon_3_Template, 2, 0, "mat-icon", 0);
        ɵɵtemplate(4, PepperiTextboxIconComponent_button_4_Template, 3, 4, "button", 1);
        ɵɵtemplate(5, PepperiTextboxIconComponent_button_5_Template, 3, 4, "button", 1);
        ɵɵtemplate(6, PepperiTextboxIconComponent_button_6_Template, 3, 4, "button", 1);
        ɵɵtemplate(7, PepperiTextboxIconComponent_button_7_Template, 3, 0, "button", 2);
        ɵɵtemplate(8, PepperiTextboxIconComponent_button_8_Template, 3, 1, "button", 2);
        ɵɵtemplate(9, PepperiTextboxIconComponent_button_9_Template, 3, 0, "button", 2);
        ɵɵtemplate(10, PepperiTextboxIconComponent_button_10_Template, 3, 0, "button", 2);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "currency");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "percentage");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "int");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "real");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.type === "phone");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.type === "email");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.type === "link");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.type === "textarea");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.type === "richhtmltextarea");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "datetime");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "date");
    } }, directives: [NgIf, MatIcon, PepperiIconComponent, MatButton, NgClass], styles: ["[_nghost-%COMP%]{display:flex}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiTextboxIconComponent, [{
        type: Component,
        args: [{
                selector: 'pep-textbox-icon',
                templateUrl: './textbox-icon.component.html',
                styleUrls: ['./textbox-icon.component.scss'],
            }]
    }], function () { return []; }, { value: [{
            type: Input
        }], label: [{
            type: Input
        }], type: [{
            type: Input
        }], disabled: [{
            type: Input
        }], iconClicked: [{
            type: Output
        }] }); })();

class PepperiTextboxIconModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconNumberCoins,
            pepperiIconNumberPercent,
            pepperiIconNumberNumber,
            pepperiIconNumberDecimal,
            pepperiIconSystemPhone,
            pepperiIconSystemEmail,
            pepperiIconSystemLink,
            pepperiIconSystemFullScreen,
            pepperiIconSystemEdit,
            pepperiIconTimeDatetime,
            pepperiIconTimeCal
        ]);
    }
}
PepperiTextboxIconModule.ɵmod = ɵɵdefineNgModule({ type: PepperiTextboxIconModule });
PepperiTextboxIconModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiTextboxIconModule_Factory(t) { return new (t || PepperiTextboxIconModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatIconModule,
            // Pepperi modules
            PepperiIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiTextboxIconModule, { declarations: [PepperiTextboxIconComponent], imports: [CommonModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        // Pepperi modules
        PepperiIconModule], exports: [PepperiTextboxIconComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiTextboxIconModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules,
                    MatCommonModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiIconModule
                ],
                exports: [PepperiTextboxIconComponent],
                declarations: [PepperiTextboxIconComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/textbox-icon
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiTextboxIconComponent, PepperiTextboxIconModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-textbox-icon.js.map
