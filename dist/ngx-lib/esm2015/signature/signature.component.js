import { Component, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/dialog";
import * as i2 from "@pepperi-addons/ngx-lib";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
import * as i9 from "@pepperi-addons/ngx-lib/icon";
import * as i10 from "@pepperi-addons/ngx-lib/field-title";
import * as i11 from "@angular/material/dialog";
import * as i12 from "angular2-signaturepad";
import * as i13 from "@ngx-translate/core";
const _c0 = ["signaturePad"];
const _c1 = ["signaturePopupPad"];
function PepperiSignatureComponent_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { "right-alignment": a0 }; };
function PepperiSignatureComponent_ng_template_2_ng_template_4_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_2_ng_template_4_button_0_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.deleteSignature($event); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c2, ctx_r14.xAlignment == "2"));
} }
const _c3 = function (a0) { return [a0]; };
function PepperiSignatureComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, PepperiSignatureComponent_ng_template_2_ng_template_4_button_0_Template, 3, 3, "button", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_2_ng_template_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.openSignModal(); });
    i0.ɵɵelementStart(2, "img", 15);
    i0.ɵɵlistener("error", function PepperiSignatureComponent_ng_template_2_ng_template_4_Template_img_error_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.errorHandler($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r11.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("max-height", ctx_r11.fieldHeight);
    i0.ɵɵproperty("src", ctx_r11.src, i0.ɵɵsanitizeUrl)("alt", ctx_r11.label)("ngClass", i0.ɵɵpureFunction1(6, _c3, "text-align-" + ctx_r11.xAlignment));
} }
function PepperiSignatureComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "pep-icon", 19);
    i0.ɵɵelementStart(2, "span", 20);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 1, ctx_r13.disabled ? "MESSAGES.INFO_MISSING_SIGNATURE" : "SIGNATURE.HINT"), " ");
} }
const _c4 = function (a0) { return { disable: a0 }; };
const _c5 = function (a0) { return { field: a0 }; };
function PepperiSignatureComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵtemplate(3, PepperiSignatureComponent_ng_template_2_ng_container_3_Template, 1, 0, "ng-container", 8);
    i0.ɵɵtemplate(4, PepperiSignatureComponent_ng_template_2_ng_template_4_Template, 3, 8, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(6, PepperiSignatureComponent_ng_template_2_ng_template_6_Template, 5, 3, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 11);
    i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_2_Template_input_click_8_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.openSignModal(); })("keypress", function PepperiSignatureComponent_ng_template_2_Template_input_keypress_8_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onKeyPress_OpenSignModal($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-error");
    i0.ɵɵelement(10, "span", 12);
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = i0.ɵɵreference(5);
    const _r12 = i0.ɵɵreference(7);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("height", ctx_r1.fieldHeight);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(25, _c4, ctx_r1.disabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.src != "")("ngIfThen", _r10)("ngIfElse", _r12);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("id", ctx_r1.key)("formControlName", ctx_r1.key)("value", ctx_r1.src)("disabled", ctx_r1.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r1.required && ctx_r1.src.length == 0 ? i0.ɵɵpipeBind2(11, 13, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(27, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(12, 16, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(29, _c5, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.src.length == 0 ? i0.ɵɵpipeBind2(13, 19, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(31, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(14, 22, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(33, _c5, ctx_r1.label)));
} }
function PepperiSignatureComponent_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c6 = function (a0, a1) { return { "one-row": a0, "stand-alone": a1 }; };
function PepperiSignatureComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵelement(2, "pep-field-title", 22);
    i0.ɵɵtemplate(3, PepperiSignatureComponent_ng_container_4_ng_container_3_Template, 1, 0, "ng-container", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c6, ctx_r2.rowSpan == 1, ctx_r2.standAlone));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r2.label)("required", ctx_r2.required)("disabled", ctx_r2.disabled)("xAlignment", ctx_r2.xAlignment)("showTitle", ctx_r2.showTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiSignatureComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiSignatureComponent_ng_container_5_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c7 = function (a0) { return { "one-row": a0 }; };
function PepperiSignatureComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_5_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c7, ctx_r26.rowSpan == 1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiSignatureComponent_ng_container_5_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c8 = function () { return { isTableView: false }; };
function PepperiSignatureComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_5_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(8);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c7, ctx_r28.rowSpan == 1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction0(5, _c8));
} }
function PepperiSignatureComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 8);
    i0.ɵɵtemplate(2, PepperiSignatureComponent_ng_container_5_ng_template_2_Template, 2, 4, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiSignatureComponent_ng_container_5_ng_template_4_Template, 2, 6, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r25 = i0.ɵɵreference(3);
    const _r27 = i0.ɵɵreference(5);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", false && ctx_r3.isActive && !ctx_r3.disabled)("ngIfThen", _r25)("ngIfElse", _r27);
} }
function PepperiSignatureComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiSignatureComponent_ng_container_6_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiSignatureComponent_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_6_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiSignatureComponent_ng_container_6_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c9 = function () { return { isTableView: true }; };
function PepperiSignatureComponent_ng_container_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_6_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c9));
} }
function PepperiSignatureComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 8);
    i0.ɵɵtemplate(2, PepperiSignatureComponent_ng_container_6_ng_template_2_Template, 2, 1, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiSignatureComponent_ng_container_6_ng_template_4_Template, 2, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r32 = i0.ɵɵreference(3);
    const _r34 = i0.ɵɵreference(5);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", false && ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r32)("ngIfElse", _r34);
} }
function PepperiSignatureComponent_ng_template_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiSignatureComponent_ng_template_7_ng_template_4_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 15);
    i0.ɵɵlistener("error", function PepperiSignatureComponent_ng_template_7_ng_template_4_img_1_Template_img_error_0_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(3); return ctx_r46.errorHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("max-height", ctx_r44.fieldHeight);
    i0.ɵɵproperty("src", ctx_r44.src, i0.ɵɵsanitizeUrl)("alt", ctx_r44.label)("ngClass", i0.ɵɵpureFunction1(5, _c3, "text-align-" + ctx_r44.xAlignment));
} }
function PepperiSignatureComponent_ng_template_7_ng_template_4_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 32);
    i0.ɵɵlistener("error", function PepperiSignatureComponent_ng_template_7_ng_template_4_img_2_Template_img_error_0_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r48 = i0.ɵɵnextContext(3); return ctx_r48.errorHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("max-height", ctx_r45.fieldHeight);
    i0.ɵɵproperty("src", ctx_r45.src, i0.ɵɵsanitizeUrl)("alt", ctx_r45.label)("ngClass", i0.ɵɵpureFunction1(5, _c3, "text-align-" + ctx_r45.xAlignment));
} }
function PepperiSignatureComponent_ng_template_7_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_7_ng_template_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(2); return ctx_r50.openSignModal(); });
    i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_template_7_ng_template_4_img_1_Template, 1, 7, "img", 30);
    i0.ɵɵtemplate(2, PepperiSignatureComponent_ng_template_7_ng_template_4_img_2_Template, 1, 7, "img", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const isTableView_r38 = i0.ɵɵnextContext().isTableView;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !isTableView_r38);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", isTableView_r38);
} }
function PepperiSignatureComponent_ng_template_7_ng_template_6_Template(rf, ctx) { }
function PepperiSignatureComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "div", 29);
    i0.ɵɵtemplate(3, PepperiSignatureComponent_ng_template_7_ng_container_3_Template, 1, 0, "ng-container", 8);
    i0.ɵɵtemplate(4, PepperiSignatureComponent_ng_template_7_ng_template_4_Template, 3, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(6, PepperiSignatureComponent_ng_template_7_ng_template_6_Template, 0, 0, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r40 = i0.ɵɵreference(5);
    const _r42 = i0.ɵɵreference(7);
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r6.src != "")("ngIfThen", _r40)("ngIfElse", _r42);
} }
function PepperiSignatureComponent_ng_template_9_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelementStart(1, "div", 42);
    i0.ɵɵelementStart(2, "button", 43);
    i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_9_div_10_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(2); return ctx_r55.saveSignModal($event); });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 44);
    i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_9_div_10_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r56); const ctx_r57 = i0.ɵɵnextContext(2); return ctx_r57.clearSignModal(); });
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r54.showActionBtn || ctx_r54.readonly || ctx_r54.disabled)("mat-dialog-close", ctx_r54.signatureURL);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 5, "ACTIONS.DONE"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r54.showActionBtn || ctx_r54.readonly || ctx_r54.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 7, "ACTIONS.CLEAR"), " ");
} }
function PepperiSignatureComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h2", 33);
    i0.ɵɵelementStart(1, "span", 34);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 35);
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵelement(6, "pep-icon", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 37);
    i0.ɵɵelementStart(8, "signature-pad", 38, 39);
    i0.ɵɵlistener("onBeginEvent", function PepperiSignatureComponent_ng_template_9_Template_signature_pad_onBeginEvent_8_listener() { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(); return ctx_r58.drawStart(); })("onEndEvent", function PepperiSignatureComponent_ng_template_9_Template_signature_pad_onEndEvent_8_listener() { i0.ɵɵrestoreView(_r59); const ctx_r60 = i0.ɵɵnextContext(); return ctx_r60.drawComplete(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, PepperiSignatureComponent_ng_template_9_div_10_Template, 8, 9, "div", 40);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, "SIGNATURE.DIALOG_TITLE"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mat-dialog-close", null);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r8.signaturePadOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.showActionBtn);
} }
export class PepperiSignatureComponent {
    constructor(dialogService, customizationService, fileService, cd, renderer, element) {
        this.dialogService = dialogService;
        this.customizationService = customizationService;
        this.fileService = fileService;
        this.cd = cd;
        this.renderer = renderer;
        this.element = element;
        this.key = '';
        this.src = '';
        this.label = '';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.signatureURL = '';
        // @Input() inDialog = false;
        this.controlType = 'signature';
        this.form = null;
        this.showTitle = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.isActive = false;
        this.valueChanged = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.fieldHeight = '';
        this.standAlone = false;
        this.dataURI = null;
        this.showActionBtn = true;
        this.isVisibleModal = false;
        this.acceptSignatureType = 'png';
        this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 2,
            canvasWidth: 500,
            canvasHeight: 300,
            penColor: 'rgb(151, 151, 151)'
        };
    }
    ngOnInit() {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.src, this.required, this.readonly, this.disabled);
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
        this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
    }
    ngOnChanges(changes) {
        if (changes.src && changes.src.currentValue.length > 0) {
            // Empty dataURI if there is change in the src.
            this.dataURI = null;
            // For clean the cache.
            // this.src = this.src ? this.src + '?t=' + new Date().toTimeString() : '';
        }
    }
    ngOnDestroy() {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }
    drawComplete() {
        // will be notified of szimek/signature_pad's onEnd event
    }
    drawStart() {
        // will be notified of szimek/signature_pad's onBegin event
    }
    openSignModal() {
        // If the signature is not empty open it in image viewer.
        if (this.standAlone && this.dataURI) {
            const fileStrArr = this.dataURI.fileStr.split(';');
            if (fileStrArr.length === 2) {
                const win = window.open('', '_blank');
                const contentType = fileStrArr[0].split(':')[1];
                const base64 = fileStrArr[1].split(',')[1];
                const blob = this.fileService.convertFromb64toBlob(base64, contentType);
                const url = URL.createObjectURL(blob);
                win.location.href = url;
            }
            // signature allready exits
        }
        else {
            this.signatureURL = this.src;
            this.openSignatoreDlg(this.signatureURL);
        }
    }
    openSignatoreDlg(src = '') {
        this.showActionBtn = this.signatureURL && this.signatureURL !== '' ? false : true;
        // const signatureData = new DialogData('', this.signaturePopupPad, DialogDataType.Template);
        const dialogRef = this.dialogService.openDialog(this.signaturePopupPad);
        dialogRef.afterOpened().subscribe(() => {
            this.afterDialogOpened();
        });
    }
    afterDialogOpened() {
        if (this.signatureURL && this.signatureURL !== '') {
            this.signaturePad.fromDataURL(this.signatureURL);
            this.signaturePad.off();
        }
    }
    clearSignModal() {
        this.signatureURL = '';
        this.signaturePad.clear();
        this.signaturePad.on();
    }
    deleteSignature(event) {
        this.signatureURL = '';
        this.changeValue(this.signatureURL);
        this.cd.detectChanges();
    }
    saveSignModal(event) {
        if (!this.signaturePad.isEmpty()) {
            this.signatureURL = this.signaturePad.toDataURL('image/png');
            const fileValue = JSON.stringify({
                acceptedExtensions: this.acceptSignatureType,
                fileStr: this.signatureURL,
                fileExt: this.acceptSignatureType
            });
            this.changeValue(fileValue);
        }
        else {
            this.signatureURL = '';
            this.changeValue(this.signatureURL);
        }
    }
    errorHandler(event) {
        this.signatureURL = this.src = ''; // this.blankImage;
    }
    changeValue(value, lastFocusedField = null) {
        this.dataURI = value.length > 0 ? JSON.parse(value) : null;
        this.src = this.standAlone && this.dataURI ? this.dataURI.fileStr : '';
        this.customizationService.updateFormFieldValue(this.form, this.key, this.dataURI ? this.dataURI.fileExt : '');
        this.valueChanged.emit({ apiName: this.key, value, controlType: this.controlType, lastFocusedField });
    }
    onKeyPress_OpenSignModal(event) {
        const e = event;
        if ([13, 32].indexOf(e.which) !== -1) {
            this.openSignModal();
        }
        e.preventDefault();
    }
}
PepperiSignatureComponent.ɵfac = function PepperiSignatureComponent_Factory(t) { return new (t || PepperiSignatureComponent)(i0.ɵɵdirectiveInject(i1.DialogService), i0.ɵɵdirectiveInject(i2.CustomizationService), i0.ɵɵdirectiveInject(i2.FileService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PepperiSignatureComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiSignatureComponent, selectors: [["pep-signature"]], viewQuery: function PepperiSignatureComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.signaturePad = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.signaturePopupPad = _t.first);
    } }, inputs: { key: "key", src: "src", label: "label", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", signatureURL: "signatureURL", form: "form", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive" }, outputs: { valueChanged: "valueChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 4, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], ["pepperiReadonlyTemplate", ""], ["signaturePopupPad", ""], ["appearance", "outline", 3, "formGroup"], [1, "pepperi-file-wrapper"], [1, "pepperi-file", "body-sm", 3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["withImg", ""], ["noImg", ""], ["matInput", "", "type", "text", "autocomplete", "off", "readonly", "", 1, "hidden-input", "signature", 3, "id", "formControlName", "value", "disabled", "click", "keypress"], [1, "body-xs", 3, "title", "innerText"], ["mat-button", "", "class", "pepperi-button icon-button weak md delete", "tabindex", "-1", 3, "ngClass", "click", 4, "ngIf"], [1, "pepperi-file-preview", 3, "click"], [1, "pepperi-file-preview-img", 3, "src", "alt", "ngClass", "error"], ["mat-button", "", "tabindex", "-1", 1, "pepperi-button", "icon-button", "weak", "md", "delete", 3, "ngClass", "click"], ["name", "system_bin"], [1, "ellipsis", "pepperi-file-message"], ["name", "system_signature"], [1, "body-sm", "ellipsis"], [1, "pepperi-file-container", 3, "ngClass"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [4, "ngTemplateOutlet"], ["selectedBlock", ""], ["notSelectedBlock", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pepperi-file-container", "one-row"], [1, "pepperi-file-container"], [1, "pepperi-file", "body-sm", "disable"], ["class", "pepperi-file-preview-img", 3, "src", "max-height", "alt", "ngClass", "error", 4, "ngIf"], ["class", "pepperi-report-file pepperi-file-preview-img", 3, "src", "max-height", "alt", "ngClass", "error", 4, "ngIf"], [1, "pepperi-report-file", "pepperi-file-preview-img", 3, "src", "alt", "ngClass", "error"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], [1, "pull-left", "flip", "ellipsis"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], ["mat-dialog-content", ""], [3, "options", "onBeginEvent", "onEndEvent"], ["signaturePad", ""], ["mat-dialog-actions", "", "class", " pepperi-border-top", 4, "ngIf"], ["mat-dialog-actions", "", 1, "pepperi-border-top"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "strong", "pull-right", "flip", 3, "disabled", "mat-dialog-close", "click"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "weak", "pull-right", "flip", 3, "disabled", "click"]], template: function PepperiSignatureComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵelementContainerStart(1);
        i0.ɵɵtemplate(2, PepperiSignatureComponent_ng_template_2_Template, 15, 35, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PepperiSignatureComponent_ng_container_4_Template, 4, 10, "ng-container", 2);
        i0.ɵɵtemplate(5, PepperiSignatureComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(6, PepperiSignatureComponent_ng_container_6_Template, 6, 3, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(7, PepperiSignatureComponent_ng_template_7_Template, 8, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(9, PepperiSignatureComponent_ng_template_9_Template, 11, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
    } }, directives: [i3.NgControlStatusGroup, i3.FormGroupDirective, i4.NgIf, i5.MatFormField, i4.NgClass, i6.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i5.MatError, i7.MatButton, i8.MatIcon, i9.PepperiIconComponent, i10.PepperiFieldTitleComponent, i4.NgTemplateOutlet, i11.MatDialogTitle, i11.MatDialogClose, i11.MatDialogContent, i12.SignaturePad, i11.MatDialogActions], pipes: [i13.TranslatePipe], styles: ["[_nghost-%COMP%]{display:block}signature-pad[_ngcontent-%COMP%]{display:-ms-grid;display:grid;height:inherit;width:inherit}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiSignatureComponent, [{
        type: Component,
        args: [{
                selector: 'pep-signature',
                styleUrls: ['./signature.component.scss'],
                templateUrl: './signature.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DialogService }, { type: i2.CustomizationService }, { type: i2.FileService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
            type: Input
        }], src: [{
            type: Input
        }], label: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }], xAlignment: [{
            type: Input
        }], rowSpan: [{
            type: Input
        }], signatureURL: [{
            type: Input
        }], form: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], isActive: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }], signaturePad: [{
            type: ViewChild,
            args: ['signaturePad']
        }], signaturePopupPad: [{
            type: ViewChild,
            args: ['signaturePopupPad', { read: TemplateRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NpZ25hdHVyZS9zaWduYXR1cmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFBcUIsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUNwRSx1QkFBdUIsRUFBb0MsV0FBVyxFQUN6RSxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQWUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0NqRSx3QkFBeUU7Ozs7O0lBRXJFLGtDQUdJO0lBSGlDLGlQQUFpQztJQUdsRSxnQ0FDSTtJQUFBLCtCQUNXO0lBQ2YsaUJBQVc7SUFDZixpQkFBUzs7O0lBTEwsK0VBQW9EOzs7OztJQUZ4RCw2R0FHSTtJQUtKLCtCQUNJO0lBRDhCLHVOQUF5QjtJQUN2RCwrQkFHSjtJQUZRLGtPQUE4QjtJQURsQyxpQkFHSjtJQUFBLGlCQUFNOzs7SUFaRSx3Q0FBaUI7SUFTSixlQUFnQztJQUFoQyxpREFBZ0M7SUFBNUMsbURBQVcsc0JBQUEsMkVBQUE7OztJQU1wQiwrQkFDSTtJQUFBLCtCQUNXO0lBQ1gsZ0NBQ0k7SUFBQSxZQUNKOztJQUFBLGlCQUFPO0lBQ1gsaUJBQU07OztJQUZFLGVBQ0o7SUFESSw4SEFDSjs7Ozs7O0lBekJwQix5Q0FDSTtJQUFBLDhCQUNJO0lBQUEsOEJBQ0k7SUFBQSwwR0FBMEQ7SUFDMUQseUlBQ0k7SUFjSiwwSUFDSTtJQVFSLGlCQUFNO0lBQ04saUNBR0o7SUFGNEMsME1BQXlCLDBOQUFBO0lBRGpFLGlCQUdKO0lBQUEsaUJBQU07SUFFTixpQ0FBVztJQUFB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QkFBWCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFLRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFFSSxZQUFZO2tCQUFyQixNQUFNO1lBRW9CLFlBQVk7a0JBQXRDLFNBQVM7bUJBQUMsY0FBYztZQUM4QixpQkFBaUI7a0JBQXZFLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTaWduYXR1cmVQYWQgfSBmcm9tICdhbmd1bGFyMi1zaWduYXR1cmVwYWQvc2lnbmF0dXJlLXBhZCc7XHJcbmltcG9ydCB7IEZpbGVTZXJ2aWNlLCBMQVlPVVRfVFlQRSwgQ3VzdG9taXphdGlvblNlcnZpY2UgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYic7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlcC1zaWduYXR1cmUnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc2lnbmF0dXJlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2lnbmF0dXJlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpU2lnbmF0dXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoKSBrZXkgPSAnJztcclxuICAgIEBJbnB1dCgpIHNyYyA9ICcnO1xyXG4gICAgQElucHV0KCkgbGFiZWwgPSAnJztcclxuICAgIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHhBbGlnbm1lbnQgPSAnMCc7XHJcbiAgICBASW5wdXQoKSByb3dTcGFuID0gMTtcclxuICAgIEBJbnB1dCgpIHNpZ25hdHVyZVVSTCA9ICcnO1xyXG4gICAgLy8gQElucHV0KCkgaW5EaWFsb2cgPSBmYWxzZTtcclxuXHJcbiAgICBjb250cm9sVHlwZSA9ICdzaWduYXR1cmUnO1xyXG5cclxuICAgIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cCA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBzaG93VGl0bGUgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgbGF5b3V0VHlwZTogTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybTtcclxuICAgIEBJbnB1dCgpIGlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdzaWduYXR1cmVQYWQnKSBzaWduYXR1cmVQYWQ6IFNpZ25hdHVyZVBhZDtcclxuICAgIEBWaWV3Q2hpbGQoJ3NpZ25hdHVyZVBvcHVwUGFkJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBzaWduYXR1cmVQb3B1cFBhZDogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG4gICAgZmllbGRIZWlnaHQgPSAnJztcclxuICAgIHN0YW5kQWxvbmUgPSBmYWxzZTtcclxuICAgIGRhdGFVUkkgPSBudWxsO1xyXG4gICAgc2hvd0FjdGlvbkJ0biA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIGlzVmlzaWJsZU1vZGFsID0gZmFsc2U7XHJcbiAgICBhY2NlcHRTaWduYXR1cmVUeXBlID0gJ3BuZyc7XHJcblxyXG4gICAgcHVibGljIHNpZ25hdHVyZVBhZE9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICAvLyBwYXNzZWQgdGhyb3VnaCB0byBzemltZWsvc2lnbmF0dXJlX3BhZCBjb25zdHJ1Y3RvclxyXG4gICAgICAgIG1pbldpZHRoOiAyLFxyXG4gICAgICAgIGNhbnZhc1dpZHRoOiA1MDAsXHJcbiAgICAgICAgY2FudmFzSGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgcGVuQ29sb3I6ICdyZ2IoMTUxLCAxNTEsIDE1MSknXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGN1c3RvbWl6YXRpb25TZXJ2aWNlOiBDdXN0b21pemF0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFuZEFsb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS5nZXREZWZhdWx0RnJvbUdyb3VwKHRoaXMua2V5LCB0aGlzLnNyYywgdGhpcy5yZXF1aXJlZCwgdGhpcy5yZWFkb25seSwgdGhpcy5kaXNhYmxlZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDdXN0b21pemF0aW9uU2VydmljZS5TVEFORF9BTE9ORV9GSUVMRF9DTEFTU19OQU1FKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGRIZWlnaHQgPSB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLmNhbGN1bGF0ZUZpZWxkSGVpZ2h0KHRoaXMubGF5b3V0VHlwZSwgdGhpcy5yb3dTcGFuLCB0aGlzLnN0YW5kQWxvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLnNyYyAmJiBjaGFuZ2VzLnNyYy5jdXJyZW50VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBFbXB0eSBkYXRhVVJJIGlmIHRoZXJlIGlzIGNoYW5nZSBpbiB0aGUgc3JjLlxyXG4gICAgICAgICAgICB0aGlzLmRhdGFVUkkgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9yIGNsZWFuIHRoZSBjYWNoZS5cclxuICAgICAgICAgICAgLy8gdGhpcy5zcmMgPSB0aGlzLnNyYyA/IHRoaXMuc3JjICsgJz90PScgKyBuZXcgRGF0ZSgpLnRvVGltZVN0cmluZygpIDogJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3Q29tcGxldGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gd2lsbCBiZSBub3RpZmllZCBvZiBzemltZWsvc2lnbmF0dXJlX3BhZCdzIG9uRW5kIGV2ZW50XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1N0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHdpbGwgYmUgbm90aWZpZWQgb2Ygc3ppbWVrL3NpZ25hdHVyZV9wYWQncyBvbkJlZ2luIGV2ZW50XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblNpZ25Nb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZiB0aGUgc2lnbmF0dXJlIGlzIG5vdCBlbXB0eSBvcGVuIGl0IGluIGltYWdlIHZpZXdlci5cclxuICAgICAgICBpZiAodGhpcy5zdGFuZEFsb25lICYmIHRoaXMuZGF0YVVSSSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlU3RyQXJyID0gdGhpcy5kYXRhVVJJLmZpbGVTdHIuc3BsaXQoJzsnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaWxlU3RyQXJyLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2luID0gd2luZG93Lm9wZW4oJycsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gZmlsZVN0ckFyclswXS5zcGxpdCgnOicpWzFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZmlsZVN0ckFyclsxXS5zcGxpdCgnLCcpWzFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IHRoaXMuZmlsZVNlcnZpY2UuY29udmVydEZyb21iNjR0b0Jsb2IoYmFzZTY0LCBjb250ZW50VHlwZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgd2luLmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc2lnbmF0dXJlIGFsbHJlYWR5IGV4aXRzXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaWduYXR1cmVVUkwgPSB0aGlzLnNyYztcclxuICAgICAgICAgICAgdGhpcy5vcGVuU2lnbmF0b3JlRGxnKHRoaXMuc2lnbmF0dXJlVVJMKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuU2lnbmF0b3JlRGxnKHNyYzogc3RyaW5nID0gJycpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3dBY3Rpb25CdG4gPSB0aGlzLnNpZ25hdHVyZVVSTCAmJiB0aGlzLnNpZ25hdHVyZVVSTCAhPT0gJycgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgLy8gY29uc3Qgc2lnbmF0dXJlRGF0YSA9IG5ldyBEaWFsb2dEYXRhKCcnLCB0aGlzLnNpZ25hdHVyZVBvcHVwUGFkLCBEaWFsb2dEYXRhVHlwZS5UZW1wbGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuRGlhbG9nKHRoaXMuc2lnbmF0dXJlUG9wdXBQYWQpO1xyXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlck9wZW5lZCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJEaWFsb2dPcGVuZWQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckRpYWxvZ09wZW5lZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaWduYXR1cmVVUkwgJiYgdGhpcy5zaWduYXR1cmVVUkwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbmF0dXJlUGFkLmZyb21EYXRhVVJMKHRoaXMuc2lnbmF0dXJlVVJMKTtcclxuICAgICAgICAgICAgdGhpcy5zaWduYXR1cmVQYWQub2ZmKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2lnbk1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2lnbmF0dXJlVVJMID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaWduYXR1cmVQYWQuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNpZ25hdHVyZVBhZC5vbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVNpZ25hdHVyZShldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaWduYXR1cmVVUkwgPSAnJztcclxuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuc2lnbmF0dXJlVVJMKTtcclxuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU2lnbk1vZGFsKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2lnbmF0dXJlUGFkLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25hdHVyZVVSTCA9IHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRXh0ZW5zaW9uczogdGhpcy5hY2NlcHRTaWduYXR1cmVUeXBlLFxyXG4gICAgICAgICAgICAgICAgZmlsZVN0cjogdGhpcy5zaWduYXR1cmVVUkwsXHJcbiAgICAgICAgICAgICAgICBmaWxlRXh0OiB0aGlzLmFjY2VwdFNpZ25hdHVyZVR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUoZmlsZVZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25hdHVyZVVSTCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuc2lnbmF0dXJlVVJMKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3JIYW5kbGVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNpZ25hdHVyZVVSTCA9IHRoaXMuc3JjID0gJyc7IC8vIHRoaXMuYmxhbmtJbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWYWx1ZSh2YWx1ZTogYW55LCBsYXN0Rm9jdXNlZEZpZWxkOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhVVJJID0gdmFsdWUubGVuZ3RoID4gMCA/IEpTT04ucGFyc2UodmFsdWUpIDogbnVsbDtcclxuICAgICAgICB0aGlzLnNyYyA9IHRoaXMuc3RhbmRBbG9uZSAmJiB0aGlzLmRhdGFVUkkgPyB0aGlzLmRhdGFVUkkuZmlsZVN0ciA6ICcnO1xyXG4gICAgICAgIHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UudXBkYXRlRm9ybUZpZWxkVmFsdWUodGhpcy5mb3JtLCB0aGlzLmtleSwgdGhpcy5kYXRhVVJJID8gdGhpcy5kYXRhVVJJLmZpbGVFeHQgOiAnJyk7XHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh7IGFwaU5hbWU6IHRoaXMua2V5LCB2YWx1ZSwgY29udHJvbFR5cGU6IHRoaXMuY29udHJvbFR5cGUsIGxhc3RGb2N1c2VkRmllbGQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlQcmVzc19PcGVuU2lnbk1vZGFsKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBlID0gZXZlbnQgYXMgS2V5Ym9hcmRFdmVudDtcclxuXHJcbiAgICAgICAgaWYgKFsxMywgMzJdLmluZGV4T2YoZS53aGljaCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblNpZ25Nb2RhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICAgIDwhLS0gTmV3IGNvZGUgLS0+XHJcbiAgICA8bmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjcGVwcGVyaVRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgW2Zvcm1Hcm91cF09XCJmb3JtXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWZpbGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWZpbGUgYm9keS1zbVwiIFtuZ0NsYXNzXT1cInsgZGlzYWJsZTogZGlzYWJsZWQgfVwiIFtzdHlsZS5oZWlnaHRdPVwiZmllbGRIZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNyYyAhPSAnJzsgdGhlbiB3aXRoSW1nOyBlbHNlIG5vSW1nXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjd2l0aEltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhZGlzYWJsZWRcIiBtYXQtYnV0dG9uIChjbGljayk9XCJkZWxldGVTaWduYXR1cmUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiB3ZWFrIG1kIGRlbGV0ZVwiIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3JpZ2h0LWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzInIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwZXAtaWNvbiBuYW1lPVwic3lzdGVtX2JpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWZpbGUtcHJldmlld1wiIChjbGljayk9XCJvcGVuU2lnbk1vZGFsKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwic3JjXCIgW3N0eWxlLm1heC1oZWlnaHRdPVwiZmllbGRIZWlnaHRcIiBjbGFzcz1cInBlcHBlcmktZmlsZS1wcmV2aWV3LWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJlcnJvckhhbmRsZXIoJGV2ZW50KVwiIFthbHRdPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJbJ3RleHQtYWxpZ24tJyArIHhBbGlnbm1lbnRdXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsbGlwc2lzIHBlcHBlcmktZmlsZS1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBlcC1pY29uIG5hbWU9XCJzeXN0ZW1fc2lnbmF0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvZHktc20gZWxsaXBzaXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgKGRpc2FibGVkID8gJ01FU1NBR0VTLklORk9fTUlTU0lOR19TSUdOQVRVUkUnIDogJ1NJR05BVFVSRS5ISU5UJykgfCB0cmFuc2xhdGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW2lkXT1cImtleVwiIG1hdElucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwia2V5XCIgY2xhc3M9XCJoaWRkZW4taW5wdXQgc2lnbmF0dXJlXCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic3JjXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGNsaWNrKT1cIm9wZW5TaWduTW9kYWwoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXlwcmVzcyk9XCJvbktleVByZXNzX09wZW5TaWduTW9kYWwoJGV2ZW50KVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHJlYWRvbmx5IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWF0LWVycm9yPjxzcGFuIGNsYXNzPVwiYm9keS14c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJyZXF1aXJlZCAmJiBzcmMubGVuZ3RoID09IDAgPyAoJ01FU1NBR0VTLkVSUk9SX0lTX1JFUVVJUkVEJyB8IHRyYW5zbGF0ZTogeyBmaWVsZDogbGFiZWwgfSkgOiAoJ01FU1NBR0VTLkVSUk9SX0lTX05PVF9WQUxJRCcgfCB0cmFuc2xhdGU6IHsgZmllbGQ6IGxhYmVsIH0pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVyVGV4dF09XCJyZXF1aXJlZCAmJiBzcmMubGVuZ3RoID09IDAgPyAoJ01FU1NBR0VTLkVSUk9SX0lTX1JFUVVJUkVEJyB8IHRyYW5zbGF0ZTogeyBmaWVsZDogbGFiZWwgfSkgOiAoJ01FU1NBR0VTLkVSUk9SX0lTX05PVF9WQUxJRCcgfCB0cmFuc2xhdGU6IHsgZmllbGQ6IGxhYmVsIH0pXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWZpbGUtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieyAnb25lLXJvdyc6IHJvd1NwYW4gPT0gMSwgJ3N0YW5kLWFsb25lJzogc3RhbmRBbG9uZX1cIj5cclxuICAgICAgICAgICAgICAgIDxwZXAtZmllbGQtdGl0bGUgW2xhYmVsXT1cImxhYmVsXCIgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW3hBbGlnbm1lbnRdPVwieEFsaWdubWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3Nob3dUaXRsZV09XCJzaG93VGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDwvcGVwLWZpZWxkLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlDYXJkXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmYWxzZSAmJiBpc0FjdGl2ZSAmJiAhZGlzYWJsZWQ7IHRoZW4gc2VsZWN0ZWRCbG9jazsgZWxzZSBub3RTZWxlY3RlZEJsb2NrXCI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI3NlbGVjdGVkQmxvY2s+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVwcGVyaS1maWxlLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsgJ29uZS1yb3cnOiByb3dTcGFuID09IDF9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90U2VsZWN0ZWRCbG9jaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWZpbGUtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieyAnb25lLXJvdyc6IHJvd1NwYW4gPT0gMSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlSZWFkb25seVRlbXBsYXRlOyBjb250ZXh0OiB7IGlzVGFibGVWaWV3OiBmYWxzZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmYWxzZSAmJiBpc0FjdGl2ZSAmJiAhZGlzYWJsZWQ7IHRoZW4gc2VsZWN0ZWRCbG9jazsgZWxzZSBub3RTZWxlY3RlZEJsb2NrXCI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI3NlbGVjdGVkQmxvY2s+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVwcGVyaS1maWxlLWNvbnRhaW5lciBvbmUtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90U2VsZWN0ZWRCbG9jaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWZpbGUtY29udGFpbmVyIG9uZS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGVwcGVyaVJlYWRvbmx5VGVtcGxhdGU7IGNvbnRleHQ6IHsgaXNUYWJsZVZpZXc6IHRydWV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS0gPG5nLWNvbnRhaW5lciAqbmdJZj1cImluRGlhbG9nID09PSB0cnVlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNpZ25hdHVyZVBvcHVwUGFkXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj4gLS0+XHJcblxyXG4gICAgPCEtLSA8ZGl2ICpuZ0lmPVwiaW5EaWFsb2cgPT09IGZhbHNlXCIgY2xhc3M9XCJzaWduYXR1cmUtYmFja2Ryb3AgbW9kYWxcIiBbbmdDbGFzc109XCJ7IGZhZGU6ICFpc1Zpc2libGVNb2RhbCB9XCIgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImdyaWRNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICBbbmdTdHlsZV09XCJ7IGRpc3BsYXk6IGlzVmlzaWJsZU1vZGFsID8gJ2Jsb2NrJyA6ICdub25lJyB9XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZ25hdHVyZS1tb2RhbCBtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzaWduYXR1cmVQb3B1cFBhZFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAtLT5cclxuXHJcbiAgICA8bmctdGVtcGxhdGUgI3BlcHBlcmlSZWFkb25seVRlbXBsYXRlIGxldC1pc1RhYmxlVmlldz1cImlzVGFibGVWaWV3XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBlcHBlcmktZmlsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlcHBlcmktZmlsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVwcGVyaS1maWxlIGJvZHktc20gZGlzYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzcmMgIT0gJyc7IHRoZW4gd2l0aEltZzsgZWxzZSBub0ltZ1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjd2l0aEltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlcHBlcmktZmlsZS1wcmV2aWV3XCIgKGNsaWNrKT1cIm9wZW5TaWduTW9kYWwoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cIiFpc1RhYmxlVmlld1wiIFtzcmNdPVwic3JjXCIgW3N0eWxlLm1heC1oZWlnaHRdPVwiZmllbGRIZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGVwcGVyaS1maWxlLXByZXZpZXctaW1nXCIgKGVycm9yKT1cImVycm9ySGFuZGxlcigkZXZlbnQpXCIgW2FsdF09XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiWyd0ZXh0LWFsaWduLScgKyB4QWxpZ25tZW50XVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiaXNUYWJsZVZpZXdcIiBbc3JjXT1cInNyY1wiIFtzdHlsZS5tYXgtaGVpZ2h0XT1cImZpZWxkSGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBlcHBlcmktcmVwb3J0LWZpbGUgcGVwcGVyaS1maWxlLXByZXZpZXctaW1nXCIgKGVycm9yKT1cImVycm9ySGFuZGxlcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWx0XT1cImxhYmVsXCIgW25nQ2xhc3NdPVwiWyd0ZXh0LWFsaWduLScgKyB4QWxpZ25tZW50XVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub0ltZz48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICA8bmctdGVtcGxhdGUgI3NpZ25hdHVyZVBvcHVwUGFkPlxyXG4gICAgICAgIDxoMiBtYXQtZGlhbG9nLXRpdGxlIGNsYXNzPVwicGVwcGVyaS1ib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0IGZsaXAgZWxsaXBzaXNcIj57eyAnU0lHTkFUVVJFLkRJQUxPR19USVRMRScgfCB0cmFuc2xhdGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJudWxsXCIgY2xhc3M9XCJwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHB1bGwtcmlnaHQgZmxpcFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwZXAtaWNvbiBuYW1lPVwic3lzdGVtX2Nsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxzaWduYXR1cmUtcGFkICNzaWduYXR1cmVQYWQgW29wdGlvbnNdPVwic2lnbmF0dXJlUGFkT3B0aW9uc1wiIChvbkJlZ2luRXZlbnQpPVwiZHJhd1N0YXJ0KClcIlxyXG4gICAgICAgICAgICAgICAgKG9uRW5kRXZlbnQpPVwiZHJhd0NvbXBsZXRlKClcIj5cclxuICAgICAgICAgICAgPC9zaWduYXR1cmUtcGFkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zICpuZ0lmPVwic2hvd0FjdGlvbkJ0blwiIGNsYXNzPVwiIHBlcHBlcmktYm9yZGVyLXRvcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2luZy1lbGVtZW50LW5lZ2F0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJzcGFjaW5nLWVsZW1lbnQgcGVwcGVyaS1idXR0b24gbWQgc3Ryb25nIHB1bGwtcmlnaHQgZmxpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFzaG93QWN0aW9uQnRuIHx8IHJlYWRvbmx5IHx8IGRpc2FibGVkXCIgKGNsaWNrKT1cInNhdmVTaWduTW9kYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW21hdC1kaWFsb2ctY2xvc2VdPVwic2lnbmF0dXJlVVJMXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgJ0FDVElPTlMuRE9ORScgfCB0cmFuc2xhdGUgfX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwic3BhY2luZy1lbGVtZW50IHBlcHBlcmktYnV0dG9uIG1kIHdlYWsgcHVsbC1yaWdodCBmbGlwXCJcclxuICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIXNob3dBY3Rpb25CdG4gfHwgcmVhZG9ubHkgfHwgZGlzYWJsZWRcIiAoY2xpY2spPVwiY2xlYXJTaWduTW9kYWwoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7ICdBQ1RJT05TLkNMRUFSJyB8IHRyYW5zbGF0ZSB9fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwvbmctY29udGFpbmVyPiJdfQ==