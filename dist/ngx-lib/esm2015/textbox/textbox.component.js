import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@pepperi-addons/ngx-lib";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@pepperi-addons/ngx-lib/field-title";
import * as i7 from "@pepperi-addons/ngx-lib/textbox-icon";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "@pepperi-addons/ngx-lib/icon";
import * as i11 from "@ngx-translate/core";
const _c0 = ["input"];
function PepperiTextboxComponent_ng_template_1_pep_field_title_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-field-title", 13);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r9 = i0.ɵɵreference(3);
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("label", ctx_r8.label)("required", ctx_r8.required)("disabled", ctx_r8.disabled)("maxFieldCharacters", ctx_r8.maxFieldCharacters)("xAlignment", ctx_r8.xAlignment)("showTitle", ctx_r8.showTitle)("inputLength", _r9.value == null ? null : _r9.value.length);
} }
function PepperiTextboxComponent_ng_template_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵelementStart(1, "a", 15);
    i0.ɵɵlistener("click", function PepperiTextboxComponent_ng_template_1_span_4_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.anchorClicked(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", ctx_r10.key)("name", ctx_r10.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.formattedValue, "");
} }
function PepperiTextboxComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { field: a0 }; };
function PepperiTextboxComponent_ng_template_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 16);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "translate");
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", i0.ɵɵpipeBind2(1, 2, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(8, _c1, ctx_r13.label)))("innerText", i0.ɵɵpipeBind2(2, 5, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(10, _c1, ctx_r13.label)));
} }
const _c2 = function (a0, a1) { return { min: a0, max: a1 }; };
function PepperiTextboxComponent_ng_template_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 16);
    i0.ɵɵpipe(1, "toNumber");
    i0.ɵɵpipe(2, "toNumber");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵpipe(5, "toNumber");
    i0.ɵɵpipe(6, "toNumber");
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵpipe(8, "translate");
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r9 = i0.ɵɵreference(3);
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 2, _r9.value) > ctx_r15.maxValue || i0.ɵɵpipeBind1(2, 4, _r9.value) < ctx_r15.minValue ? i0.ɵɵpipeBind2(3, 6, "MESSAGES.ERROR_RANGE_IS_NOT_VALID", i0.ɵɵpureFunction2(22, _c2, ctx_r15.minValue, ctx_r15.maxValue)) : i0.ɵɵpipeBind2(4, 9, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(25, _c1, ctx_r15.label)))("innerText", i0.ɵɵpipeBind1(5, 12, _r9.value) > ctx_r15.maxValue || i0.ɵɵpipeBind1(6, 14, _r9.value) < ctx_r15.minValue ? i0.ɵɵpipeBind2(7, 16, "MESSAGES.ERROR_RANGE_IS_NOT_VALID", i0.ɵɵpureFunction2(27, _c2, ctx_r15.minValue, ctx_r15.maxValue)) : i0.ɵɵpipeBind2(8, 19, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(30, _c1, ctx_r15.label)));
} }
function PepperiTextboxComponent_ng_template_1_pep_textbox_icon_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-textbox-icon", 17);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r16.value)("label", ctx_r16.label)("type", ctx_r16.type)("disabled", ctx_r16.disabled);
} }
function PepperiTextboxComponent_ng_template_1_pep_textbox_icon_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-textbox-icon", 18);
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r17.value)("label", ctx_r17.label)("type", ctx_r17.type)("disabled", ctx_r17.disabled);
} }
const _c3 = function (a0, a1) { return { color: a0, "text-align": a1 }; };
const _c4 = function (a0) { return { "disable-hidden": a0 }; };
function PepperiTextboxComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, PepperiTextboxComponent_ng_template_1_pep_field_title_0_Template, 1, 7, "pep-field-title", 3);
    i0.ɵɵelementStart(1, "mat-form-field", 4);
    i0.ɵɵelementStart(2, "input", 5, 6);
    i0.ɵɵlistener("keyup", function PepperiTextboxComponent_ng_template_1_Template_input_keyup_2_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onKeyUp($event); })("keypress", function PepperiTextboxComponent_ng_template_1_Template_input_keypress_2_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onKeyPress($event); })("blur", function PepperiTextboxComponent_ng_template_1_Template_input_blur_2_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onBlur($event); })("keyup.enter", function PepperiTextboxComponent_ng_template_1_Template_input_keyup_enter_2_listener($event) { i0.ɵɵrestoreView(_r21); return $event == null ? null : $event.currentTarget == null ? null : $event.currentTarget.blur(); })("focus", function PepperiTextboxComponent_ng_template_1_Template_input_focus_2_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onFocus($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_template_1_span_4_Template, 3, 3, "span", 7);
    i0.ɵɵelementStart(5, "mat-error");
    i0.ɵɵtemplate(6, PepperiTextboxComponent_ng_template_1_ng_container_6_Template, 1, 0, "ng-container", 8);
    i0.ɵɵtemplate(7, PepperiTextboxComponent_ng_template_1_ng_template_7_Template, 3, 12, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(9, PepperiTextboxComponent_ng_template_1_ng_template_9_Template, 9, 32, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, PepperiTextboxComponent_ng_template_1_pep_textbox_icon_11_Template, 1, 4, "pep-textbox-icon", 11);
    i0.ɵɵtemplate(12, PepperiTextboxComponent_ng_template_1_pep_textbox_icon_12_Template, 1, 4, "pep-textbox-icon", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const isFormView_r6 = ctx.isFormView;
    const hasParent_r7 = ctx.hasParent;
    const _r9 = i0.ɵɵreference(3);
    const _r12 = i0.ɵɵreference(8);
    const _r14 = i0.ɵɵreference(10);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", isFormView_r6 && !hasParent_r7);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.maxFieldCharacters > 0 ? ctx_r1.maxFieldCharacters : 99999);
    i0.ɵɵpropertyInterpolate("title", ctx_r1.formattedValue);
    i0.ɵɵproperty("id", ctx_r1.key)("name", ctx_r1.key)("placeholder", hasParent_r7 && !ctx_r1.disabled ? ctx_r1.placeholder : "")("ngStyle", i0.ɵɵpureFunction2(18, _c3, ctx_r1.textColor, ctx_r1.xAlignment == "3" ? "center" : ctx_r1.xAlignment == "2" ? "right" : "left"))("formControlName", ctx_r1.key)("type", ctx_r1.type)("value", ctx_r1.type == "link" ? ctx_r1.formattedValue : ctx_r1.isFocus ? ctx_r1.value : ctx_r1.formattedValue)("disabled", ctx_r1.disabled)("ngClass", i0.ɵɵpureFunction1(21, _c4, ctx_r1.disabled && ctx_r1.formattedValue.length > 0 && (ctx_r1.type === "phone" || ctx_r1.type === "email" || ctx_r1.type === "link")));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.disabled && ctx_r1.formattedValue.length > 0 && (ctx_r1.type === "phone" || ctx_r1.type === "email" || ctx_r1.type === "link"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.required && _r9.value.length == 0)("ngIfThen", _r12)("ngIfElse", _r14);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", isFormView_r6 && ctx_r1.xAlignment == "2");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", isFormView_r6 && (ctx_r1.xAlignment == "1" || ctx_r1.xAlignment == "0"));
} }
function PepperiTextboxComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiTextboxComponent_ng_container_3_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c5 = function () { return { isFormView: true, hasParent: false }; };
function PepperiTextboxComponent_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiTextboxComponent_ng_container_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 21);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c5));
} }
function PepperiTextboxComponent_ng_container_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 22);
    i0.ɵɵelementStart(1, "mat-form-field", 4);
    i0.ɵɵelementStart(2, "input", 23);
    i0.ɵɵlistener("keyup", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_keyup_2_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.onKeyUp($event); })("keypress", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_keypress_2_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.onKeyPress($event); })("blur", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_blur_2_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.onBlur($event); })("keyup.enter", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_keyup_enter_2_listener($event) { i0.ɵɵrestoreView(_r33); return $event == null ? null : $event.currentTarget == null ? null : $event.currentTarget.blur(); })("focus", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_focus_2_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.onFocus($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroupName", ctx_r30.parentFieldKey);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r30.formattedValue);
    i0.ɵɵproperty("id", ctx_r30.key)("name", ctx_r30.key)("placeholder", !ctx_r30.disabled ? ctx_r30.placeholder : "")("formControlName", ctx_r30.key)("value", ctx_r30.value)("disabled", ctx_r30.disabled);
} }
function PepperiTextboxComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 8);
    i0.ɵɵtemplate(2, PepperiTextboxComponent_ng_container_3_ng_template_2_Template, 1, 3, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_container_3_ng_template_4_Template, 3, 8, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r27 = i0.ɵɵreference(3);
    const _r29 = i0.ɵɵreference(5);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.parentFieldKey)("ngIfThen", _r29)("ngIfElse", _r27);
} }
function PepperiTextboxComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiTextboxComponent_ng_container_4_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c6 = function (a0) { return { "one-row": a0 }; };
const _c7 = function () { return { isFormView: false, hasParent: false }; };
function PepperiTextboxComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_4_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c6, ctx_r40.rowSpan === 1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(5, _c7));
} }
function PepperiTextboxComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r44.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r44.label, "\u00A0");
} }
function PepperiTextboxComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 32);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c8 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
function PepperiTextboxComponent_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵlistener("click", function PepperiTextboxComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(2); return !ctx_r46.disabled ? ctx_r46.cardTemplateClicked($event) : ""; });
    i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 28);
    i0.ɵɵelementStart(2, "span", 29);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_container_4_ng_template_4_button_4_Template, 3, 0, "button", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap("text-align-" + ctx_r42.xAlignment);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c8, ctx_r42.rowSpan === 1, ctx_r42.isActive && !ctx_r42.disabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r42.showTitle && ctx_r42.label != "");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r42.formattedValue);
    i0.ɵɵproperty("id", ctx_r42.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r42.formattedValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r42.isActive && !ctx_r42.disabled);
} }
function PepperiTextboxComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 8);
    i0.ɵɵtemplate(2, PepperiTextboxComponent_ng_container_4_ng_template_2_Template, 2, 6, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_container_4_ng_template_4_Template, 5, 11, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r39 = i0.ɵɵreference(3);
    const _r41 = i0.ɵɵreference(5);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r39)("ngIfElse", _r41);
} }
function PepperiTextboxComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiTextboxComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiTextboxComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiTextboxComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 21);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c7));
} }
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c9 = function (a0) { return { "disable": a0 }; };
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r61 = i0.ɵɵnextContext(5);
    i0.ɵɵpropertyInterpolate("title", ctx_r61.formattedValue);
    i0.ɵɵpropertyInterpolate("href", ctx_r61.value ? ctx_r61.value : ctx_r61.formattedValue, i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("id", ctx_r61.key)("ngClass", i0.ɵɵpureFunction1(5, _c9, ctx_r61.disabled && ctx_r61.value === ""));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r61.formattedValue);
} }
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_a_1_Template, 2, 7, "a", 41);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.formattedValue != null);
} }
const _c10 = function (a0) { return { "readonly": a0 }; };
const _c11 = function (a0) { return { color: a0 }; };
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 43);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r60 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r60.formattedValue);
    i0.ɵɵproperty("id", ctx_r60.key)("ngClass", i0.ɵɵpureFunction1(5, _c10, ctx_r60.disabled))("ngStyle", i0.ɵɵpureFunction1(7, _c11, ctx_r60.textColor));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r60.formattedValue);
} }
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 38);
    i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 39);
    i0.ɵɵtemplate(2, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_2_Template, 3, 9, "ng-container", 40);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r56 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngSwitch", ctx_r56.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "link");
} }
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 44);
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r58 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("id", ctx_r58.key);
} }
function PepperiTextboxComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 8);
    i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_Template, 3, 2, "ng-template", null, 36, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 1, "ng-template", null, 37, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r55 = i0.ɵɵreference(2);
    const _r57 = i0.ɵɵreference(4);
    const ctx_r52 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", (ctx_r52.formattedValue == null ? null : ctx_r52.formattedValue.length) > 0)("ngIfThen", _r55)("ngIfElse", _r57);
} }
function PepperiTextboxComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 8);
    i0.ɵɵtemplate(2, PepperiTextboxComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 34, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r49 = i0.ɵɵreference(3);
    const _r51 = i0.ɵɵreference(5);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r49)("ngIfElse", _r51);
} }
function PepperiTextboxComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiTextboxComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c5));
} }
export class PepperiTextboxComponent {
    constructor(fb, customizationService, renderer, element) {
        this.fb = fb;
        this.customizationService = customizationService;
        this.renderer = renderer;
        this.element = element;
        this.key = '';
        this.value = '';
        this.formattedValue = '';
        this.label = '';
        this.placeholder = '';
        this.type = 'text';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.textColor = '';
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.minValue = NaN;
        this.maxValue = NaN;
        this.controlType = 'textbox';
        this.form = null;
        this.isActive = false;
        this.showTitle = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.parentFieldKey = null;
        this.valueChanged = new EventEmitter();
        this.formValidationChanged = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.standAlone = false;
        this.isInEditMode = false;
        this.isFocus = false;
    }
    ngOnInit() {
        if (this.form === null) {
            this.standAlone = true;
            this.minValue = isNaN(this.minValue) && !isNaN(this.maxValue) ? 0 : this.minValue;
            this.maxValue = isNaN(this.maxValue) && !isNaN(this.minValue) ? 99999 : this.maxValue;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled, this.maxFieldCharacters, this.type, false, true, this.minValue, this.maxValue);
            this.formattedValue = this.formattedValue || this.value;
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
        this.readonly = this.type === 'duration' ? true : this.readonly; // Hack until we develop Timer UI for editing Duration field
    }
    ngOnChanges(changes) {
        this.readonly = this.type === 'duration' ? true : this.readonly; // Hack until we develop Timer UI for editing Duration field
        const self = this;
        setTimeout(() => {
            if (self.lastFocusField) {
                self.lastFocusField.focus();
                self.lastFocusField = null;
            }
            else {
            }
        }, 100);
    }
    ngOnDestroy() {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
        if (this.formValidationChanged) {
            this.formValidationChanged.unsubscribe();
        }
    }
    onFocus(e) {
        this.isFocus = true;
    }
    onBlur(e) {
        this.isFocus = false;
        const value = e.target ? e.target.value : e;
        if (value !== this.value) {
            this.formattedValue = this.value = value;
            // There is formControl.setValue in the onKeyUp so we don't need it here.
            // this.propagateChange(value, e.relatedTarget);
            this.valueChanged.emit({
                apiName: this.key,
                value,
                lastFocusedField: e.relatedTarget
            });
            // return true; // What this is for? Tomer.p comment this in 16.4.
        }
        if (this.isInEditMode) {
            this.isInEditMode = false;
        }
    }
    onKeyUp(event) {
        const value = event.target ? event.target.value : event;
        this.customizationService.updateFormFieldValue(this.form, this.key, value, this.parentFieldKey);
        this.formValidationChanged.emit(this.form.valid);
    }
    onKeyPress(event) {
        let inputChar = String.fromCharCode(event.charCode);
        const e = event;
        if ([8, 9, 13, 27, 190].indexOf(e.which) !== -1 ||
            // Allow: Ctrl+A
            (e.which === 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.which === 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.which === 86 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.which === 88 && e.ctrlKey === true) /*||
        // Allow: home, end, left, right
        (e.which >= 35 && e.which <= 39)*/) {
            // let it happen, don't do anything
            return true;
        }
        switch (this.type) {
            case 'int': {
                const pattern = /[0-9\+\-\ ]/;
                if (!pattern.test(inputChar)) {
                    e.preventDefault();
                }
                break;
            }
            case 'currency':
            case 'real': {
                const decPoint = '.';
                const thousandSeparator = ',';
                const pattern = /^\d+(\.\d{1,9})?$/;
                if (e.which === 46) {
                    inputChar = inputChar + '0';
                }
                else if (e.which === 44) {
                    inputChar = inputChar + '000';
                }
                if (!pattern.test(event.target.value + inputChar)) {
                    e.preventDefault();
                }
                break;
            }
            case 'phone': {
                const pattern = /^[\d\.\-\+\(\)\*\#]+$/;
                if (!pattern.test(event.target.value + inputChar)) {
                    e.preventDefault();
                }
                break;
            }
            case 'text': {
                // if (this.maxFieldCharacters !== 0 && event.target.value.length >= this.maxFieldCharacters) {
                //     e.preventDefault();
                // }
                break;
            }
        }
    }
    anchorClicked() {
        const currentValue = this.value;
        if (currentValue.trim().length > 0) {
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
    }
    cardTemplateClicked(event) {
        const self = this;
        this.isInEditMode = true;
        setTimeout(() => {
            self.input.nativeElement.focus();
        }, 0);
    }
}
PepperiTextboxComponent.ɵfac = function PepperiTextboxComponent_Factory(t) { return new (t || PepperiTextboxComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PepperiTextboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiTextboxComponent, selectors: [["pep-textbox"]], viewQuery: function PepperiTextboxComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", placeholder: "placeholder", type: "type", required: "required", disabled: "disabled", readonly: "readonly", maxFieldCharacters: "maxFieldCharacters", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", lastFocusField: "lastFocusField", minValue: "minValue", maxValue: "maxValue", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType", parentFieldKey: "parentFieldKey" }, outputs: { valueChanged: "valueChanged", formValidationChanged: "formValidationChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", 1, "body-sm", 3, "id", "name", "maxlength", "placeholder", "ngStyle", "title", "formControlName", "type", "value", "disabled", "ngClass", "keyup", "keypress", "blur", "keyup.enter", "focus"], ["input", ""], ["class", "dis-grid", 4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["requiredError", ""], ["otherError", ""], ["matPrefix", "", 3, "value", "label", "type", "disabled", 4, "ngIf"], ["matSuffix", "", 3, "value", "label", "type", "disabled", 4, "ngIf"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength"], [1, "dis-grid"], ["href", "javascript:void(0)", 1, "color-link", "body-sm", 3, "id", "name", "click"], [1, "body-xs", 3, "title", "innerText"], ["matPrefix", "", 3, "value", "label", "type", "disabled"], ["matSuffix", "", 3, "value", "label", "type", "disabled"], ["regularBlock", ""], ["groupedBlock", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "formGroupName"], ["matInput", "", "autocomplete", "off", 1, "body-sm", 3, "id", "name", "placeholder", "title", "formControlName", "value", "disabled", "keyup", "keypress", "blur", "keyup.enter", "focus"], ["editBlock", ""], ["readOnlyBlock", ""], [3, "ngClass"], [1, "pepperi-card-input", "card-flex-container", 3, "ngClass", "click"], ["class", "body-xs title", 3, "title", 4, "ngIf"], [1, "body-sm", "value", 3, "id", "title"], ["class", "pepperi-button weak card-edit-button", "mat-button", "", 4, "ngIf"], [1, "body-xs", "title", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button"], ["name", "system_edit"], ["selectedBlock", ""], ["notSelectedBlock", ""], ["notEmptyBlock", ""], ["emptyBlock", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "color-link body-sm pepperi-report-input", "target", "_blank", 3, "id", "ngClass", "title", "href", 4, "ngIf"], ["target", "_blank", 1, "color-link", "body-sm", "pepperi-report-input", 3, "id", "ngClass", "title", "href"], [1, "body-sm", "pepperi-report-input", 3, "id", "ngClass", "title", "ngStyle"], [3, "id"]], template: function PepperiTextboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_template_1_Template, 13, 23, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PepperiTextboxComponent_ng_container_3_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(5, PepperiTextboxComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(6, PepperiTextboxComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.Editmodal);
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i3.NgIf, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.MaxLengthValidator, i3.NgStyle, i1.NgControlStatus, i1.FormControlName, i3.NgClass, i4.MatError, i6.PepperiFieldTitleComponent, i7.PepperiTextboxIconComponent, i4.MatPrefix, i4.MatSuffix, i3.NgTemplateOutlet, i1.FormGroupName, i8.MatButton, i9.MatIcon, i10.PepperiIconComponent, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault], pipes: [i11.TranslatePipe, i2.ToNumber], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.disable-hidden[_ngcontent-%COMP%]{display:none}.dis-grid[_ngcontent-%COMP%]{display:-ms-grid;display:grid}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiTextboxComponent, [{
        type: Component,
        args: [{
                selector: 'pep-textbox',
                templateUrl: './textbox.component.html',
                styleUrls: ['./textbox.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
            type: Input
        }], value: [{
            type: Input
        }], formattedValue: [{
            type: Input
        }], label: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], type: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }], maxFieldCharacters: [{
            type: Input
        }], textColor: [{
            type: Input
        }], xAlignment: [{
            type: Input
        }], rowSpan: [{
            type: Input
        }], lastFocusField: [{
            type: Input
        }], minValue: [{
            type: Input
        }], maxValue: [{
            type: Input
        }], form: [{
            type: Input
        }], isActive: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], parentFieldKey: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }], formValidationChanged: [{
            type: Output
        }], input: [{
            type: ViewChild,
            args: ['input']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3RleHRib3gvdGV4dGJveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3RleHRib3gvdGV4dGJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDekQsdUJBQXVCLEVBQWMsU0FBUyxFQUNqRCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ0ZwRSxzQ0FHa0I7Ozs7O0lBSGdDLG9DQUFlLDZCQUFBLDZCQUFBLGlEQUFBLGlDQUFBLCtCQUFBLDREQUFBOzs7O0lBZTdELGdDQUdJO0lBQUEsNkJBQ2lDO0lBREosNE1BQXlCO0lBQ3JCLFlBQWtCO0lBQUEsaUJBQUk7SUFDM0QsaUJBQU87OztJQUZvRCxlQUFVO0lBQVYsZ0NBQVUscUJBQUE7SUFDaEMsZUFBa0I7SUFBbEIsc0RBQWtCOzs7SUFHbkQsd0JBQ2U7Ozs7SUFFWCwyQkFFTzs7Ozs7SUFGZSxxSEFBc0UsNkdBQUE7Ozs7SUFLNUYsMkJBS087Ozs7Ozs7Ozs7Ozs7SUFMZSwrVkFFZ0QsMFZBQUE7OztJQU85RSx1Q0FFbUI7OztJQUZpRCxxQ0FBZSx3QkFBQSxzQkFBQSw4QkFBQTs7O0lBR25GLHVDQUVtQjs7O0lBRndFLHFDQUFlLHdCQUFBLHNCQUFBLDhCQUFBOzs7Ozs7SUExQzlHLDhHQUdBO0lBQ0EseUNBQ0k7SUFBQSxtQ0FVQTtJQVRJLDhNQUF5QiwwTUFBQSw4TEFBQSw0TUFNViwyQkFBNkIsSUFObkIsaU1BQUE7SUFEN0IsaUJBVUE7SUFBQSx3RkFHSTtJQUdKLGlDQUNJO0lBQUEsd0dBQ0E7SUFD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RyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUlHLElBQUk7a0JBQVosS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFFSSxZQUFZO2tCQUFyQixNQUFNO1lBQ0cscUJBQXFCO2tCQUE5QixNQUFNO1lBRWEsS0FBSztrQkFBeEIsU0FBUzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFJlbmRlcmVyMiwgT25EZXN0cm95XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IExBWU9VVF9UWVBFLCBDdXN0b21pemF0aW9uU2VydmljZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwZXAtdGV4dGJveCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGV4dGJveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90ZXh0Ym94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaVRleHRib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIGtleSA9ICcnO1xyXG4gICAgQElucHV0KCkgdmFsdWUgPSAnJztcclxuICAgIEBJbnB1dCgpIGZvcm1hdHRlZFZhbHVlID0gJyc7XHJcbiAgICBASW5wdXQoKSBsYWJlbCA9ICcnO1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICAgIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XHJcbiAgICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBtYXhGaWVsZENoYXJhY3RlcnM6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIHRleHRDb2xvciA9ICcnO1xyXG4gICAgQElucHV0KCkgeEFsaWdubWVudCA9ICcwJztcclxuICAgIEBJbnB1dCgpIHJvd1NwYW4gPSAxO1xyXG4gICAgQElucHV0KCkgbGFzdEZvY3VzRmllbGQ6IGFueTtcclxuICAgIEBJbnB1dCgpIG1pblZhbHVlID0gTmFOO1xyXG4gICAgQElucHV0KCkgbWF4VmFsdWUgPSBOYU47XHJcblxyXG4gICAgY29udHJvbFR5cGUgPSAndGV4dGJveCc7XHJcblxyXG4gICAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzaG93VGl0bGUgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgbGF5b3V0VHlwZTogTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybTtcclxuICAgIEBJbnB1dCgpIHBhcmVudEZpZWxkS2V5OiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgZm9ybVZhbGlkYXRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG4gICAgc3RhbmRBbG9uZSA9IGZhbHNlO1xyXG4gICAgaXNJbkVkaXRNb2RlID0gZmFsc2U7XHJcbiAgICBpc0ZvY3VzID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIGN1c3RvbWl6YXRpb25TZXJ2aWNlOiBDdXN0b21pemF0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFuZEFsb25lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWluVmFsdWUgPSBpc05hTih0aGlzLm1pblZhbHVlKSAmJiAhaXNOYU4odGhpcy5tYXhWYWx1ZSkgPyAwIDogdGhpcy5taW5WYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IGlzTmFOKHRoaXMubWF4VmFsdWUpICYmICFpc05hTih0aGlzLm1pblZhbHVlKSA/IDk5OTk5IDogdGhpcy5tYXhWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS5nZXREZWZhdWx0RnJvbUdyb3VwKHRoaXMua2V5LCB0aGlzLnZhbHVlLCB0aGlzLnJlcXVpcmVkLCB0aGlzLnJlYWRvbmx5LCB0aGlzLmRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhGaWVsZENoYXJhY3RlcnMsIHRoaXMudHlwZSwgZmFsc2UsIHRydWUsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXR0ZWRWYWx1ZSB8fCB0aGlzLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgQ3VzdG9taXphdGlvblNlcnZpY2UuU1RBTkRfQUxPTkVfRklFTERfQ0xBU1NfTkFNRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gdGhpcy50eXBlID09PSAnZHVyYXRpb24nID8gdHJ1ZSA6IHRoaXMucmVhZG9ubHk7IC8vIEhhY2sgdW50aWwgd2UgZGV2ZWxvcCBUaW1lciBVSSBmb3IgZWRpdGluZyBEdXJhdGlvbiBmaWVsZFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSB0aGlzLnR5cGUgPT09ICdkdXJhdGlvbicgPyB0cnVlIDogdGhpcy5yZWFkb25seTsgLy8gSGFjayB1bnRpbCB3ZSBkZXZlbG9wIFRpbWVyIFVJIGZvciBlZGl0aW5nIER1cmF0aW9uIGZpZWxkXHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5sYXN0Rm9jdXNGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sYXN0Rm9jdXNGaWVsZC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sYXN0Rm9jdXNGaWVsZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybVZhbGlkYXRpb25DaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybVZhbGlkYXRpb25DaGFuZ2VkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0ZvY3VzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0ZvY3VzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQgPyBlLnRhcmdldC52YWx1ZSA6IGU7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSB0aGlzLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBUaGVyZSBpcyBmb3JtQ29udHJvbC5zZXRWYWx1ZSBpbiB0aGUgb25LZXlVcCBzbyB3ZSBkb24ndCBuZWVkIGl0IGhlcmUuXHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHZhbHVlLCBlLnJlbGF0ZWRUYXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgICAgICAgICAgIGFwaU5hbWU6IHRoaXMua2V5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0Rm9jdXNlZEZpZWxkOiBlLnJlbGF0ZWRUYXJnZXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0cnVlOyAvLyBXaGF0IHRoaXMgaXMgZm9yPyBUb21lci5wIGNvbW1lbnQgdGhpcyBpbiAxNi40LlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbkVkaXRNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJbkVkaXRNb2RlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5VXAoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogZXZlbnQ7XHJcbiAgICAgICAgdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS51cGRhdGVGb3JtRmllbGRWYWx1ZSh0aGlzLmZvcm0sIHRoaXMua2V5LCB2YWx1ZSwgdGhpcy5wYXJlbnRGaWVsZEtleSk7XHJcbiAgICAgICAgdGhpcy5mb3JtVmFsaWRhdGlvbkNoYW5nZWQuZW1pdCh0aGlzLmZvcm0udmFsaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5UHJlc3MoZXZlbnQ6IGFueSk6IGFueSB7XHJcbiAgICAgICAgbGV0IGlucHV0Q2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQuY2hhckNvZGUpO1xyXG4gICAgICAgIGNvbnN0IGUgPSBldmVudCBhcyBLZXlib2FyZEV2ZW50O1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIFs4LCA5LCAxMywgMjcsIDE5MF0uaW5kZXhPZihlLndoaWNoKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgLy8gQWxsb3c6IEN0cmwrQVxyXG4gICAgICAgICAgICAoZS53aGljaCA9PT0gNjUgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fFxyXG4gICAgICAgICAgICAvLyBBbGxvdzogQ3RybCtDXHJcbiAgICAgICAgICAgIChlLndoaWNoID09PSA2NyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8XHJcbiAgICAgICAgICAgIC8vIEFsbG93OiBDdHJsK1ZcclxuICAgICAgICAgICAgKGUud2hpY2ggPT09IDg2ICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHxcclxuICAgICAgICAgICAgLy8gQWxsb3c6IEN0cmwrWFxyXG4gICAgICAgICAgICAoZS53aGljaCA9PT0gODggJiYgZS5jdHJsS2V5ID09PSB0cnVlKSAvKnx8XHJcbiAgICAgICAgICAgIC8vIEFsbG93OiBob21lLCBlbmQsIGxlZnQsIHJpZ2h0XHJcbiAgICAgICAgICAgIChlLndoaWNoID49IDM1ICYmIGUud2hpY2ggPD0gMzkpKi9cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gbGV0IGl0IGhhcHBlbiwgZG9uJ3QgZG8gYW55dGhpbmdcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdpbnQnOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gL1swLTlcXCtcXC1cXCBdLztcclxuICAgICAgICAgICAgICAgIGlmICghcGF0dGVybi50ZXN0KGlucHV0Q2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdjdXJyZW5jeSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlYWwnOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNQb2ludCA9ICcuJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRob3VzYW5kU2VwYXJhdG9yID0gJywnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IC9eXFxkKyhcXC5cXGR7MSw5fSk/JC87XHJcbiAgICAgICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gNDYpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dENoYXIgPSBpbnB1dENoYXIgKyAnMCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IDQ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDaGFyID0gaW5wdXRDaGFyICsgJzAwMCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhdHRlcm4udGVzdChldmVudC50YXJnZXQudmFsdWUgKyBpbnB1dENoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gL15bXFxkXFwuXFwtXFwrXFwoXFwpXFwqXFwjXSskLztcclxuICAgICAgICAgICAgICAgIGlmICghcGF0dGVybi50ZXN0KGV2ZW50LnRhcmdldC52YWx1ZSArIGlucHV0Q2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICd0ZXh0Jzoge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMubWF4RmllbGRDaGFyYWN0ZXJzICE9PSAwICYmIGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPj0gdGhpcy5tYXhGaWVsZENoYXJhY3RlcnMpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmNob3JDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCdtYWlsdG86JyArIGN1cnJlbnRWYWx1ZSwgJ2VtYWlsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJ3RlbDonICsgY3VycmVudFZhbHVlLCAndGVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5rJzpcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihjdXJyZW50VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXJkVGVtcGxhdGVDbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmlzSW5FZGl0TW9kZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgPCEtLSBOZXcgY29kZSAtLT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjcGVwcGVyaVRlbXBsYXRlIGxldC1pc0Zvcm1WaWV3PVwiaXNGb3JtVmlld1wiIGxldC1oYXNQYXJlbnQ9XCJoYXNQYXJlbnRcIj5cclxuICAgICAgICA8cGVwLWZpZWxkLXRpdGxlICpuZ0lmPVwiaXNGb3JtVmlldyAmJiAhaGFzUGFyZW50XCIgW2xhYmVsXT1cImxhYmVsXCIgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgW21heEZpZWxkQ2hhcmFjdGVyc109XCJtYXhGaWVsZENoYXJhY3RlcnNcIiBbeEFsaWdubWVudF09XCJ4QWxpZ25tZW50XCIgW3Nob3dUaXRsZV09XCJzaG93VGl0bGVcIlxyXG4gICAgICAgICAgICBbaW5wdXRMZW5ndGhdPVwiaW5wdXQudmFsdWU/Lmxlbmd0aFwiPlxyXG4gICAgICAgIDwvcGVwLWZpZWxkLXRpdGxlPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgI2lucHV0IFtpZF09XCJrZXlcIiBbbmFtZV09XCJrZXlcIiBjbGFzcz1cIiBib2R5LXNtIFwiIG1hdElucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAoa2V5dXApPVwib25LZXlVcCgkZXZlbnQpXCIgKGtleXByZXNzKT1cIm9uS2V5UHJlc3MoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7eyBtYXhGaWVsZENoYXJhY3RlcnMgPiAwID8gbWF4RmllbGRDaGFyYWN0ZXJzIDogOTk5OTkgfX1cIlxyXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImhhc1BhcmVudCAmJiAhZGlzYWJsZWQgPyBwbGFjZWhvbGRlciA6ICcnXCJcclxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgY29sb3I6IHRleHRDb2xvciwgJ3RleHQtYWxpZ24nOiB4QWxpZ25tZW50ID09ICczJyA/ICdjZW50ZXInIDogeEFsaWdubWVudCA9PSAnMicgPyAncmlnaHQnIDogJ2xlZnQnIH1cIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJ7eyBmb3JtYXR0ZWRWYWx1ZSB9fVwiIFtmb3JtQ29udHJvbE5hbWVdPVwia2V5XCIgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwidHlwZSA9PSAnbGluaycgPyBmb3JtYXR0ZWRWYWx1ZSA6IChpc0ZvY3VzID8gdmFsdWUgOiBmb3JtYXR0ZWRWYWx1ZSlcIiAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwiJGV2ZW50Py5jdXJyZW50VGFyZ2V0Py5ibHVyKClcIiAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZGlzYWJsZS1oaWRkZW4nOiBkaXNhYmxlZCAmJiBmb3JtYXR0ZWRWYWx1ZS5sZW5ndGggPiAwICYmICh0eXBlID09PSAncGhvbmUnIHx8IHR5cGUgPT09ICdlbWFpbCcgfHwgdHlwZSA9PT0gJ2xpbmsnKX1cIiAvPlxyXG5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZGlzYWJsZWQgJiYgZm9ybWF0dGVkVmFsdWUubGVuZ3RoID4gMCAmJiAodHlwZSA9PT0gJ3Bob25lJyB8fCB0eXBlID09PSAnZW1haWwnIHx8IHR5cGUgPT09ICdsaW5rJylcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkaXMtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJhbmNob3JDbGlja2VkKClcIiBbaWRdPVwia2V5XCIgW25hbWVdPVwia2V5XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbG9yLWxpbmsgYm9keS1zbSBcIj4ge3tmb3JtYXR0ZWRWYWx1ZX19PC9hPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYXQtZXJyb3I+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVxdWlyZWQgJiYgaW5wdXQudmFsdWUubGVuZ3RoID09IDAgdGhlbiByZXF1aXJlZEVycm9yIGVsc2Ugb3RoZXJFcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3JlcXVpcmVkRXJyb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJib2R5LXhzXCIgW3RpdGxlXT1cIignTUVTU0FHRVMuRVJST1JfSVNfUkVRVUlSRUQnIHwgdHJhbnNsYXRlOiB7IGZpZWxkOiBsYWJlbCB9KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lclRleHRdPVwiKCdNRVNTQUdFUy5FUlJPUl9JU19SRVFVSVJFRCcgfCB0cmFuc2xhdGU6IHsgZmllbGQ6IGxhYmVsIH0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjb3RoZXJFcnJvcj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvZHkteHNcIiBbdGl0bGVdPVwiKGlucHV0LnZhbHVlIHwgdG9OdW1iZXIpID4gdGhpcy5tYXhWYWx1ZSB8fCAoaW5wdXQudmFsdWUgfCB0b051bWJlcikgPCB0aGlzLm1pblZhbHVlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgnTUVTU0FHRVMuRVJST1JfUkFOR0VfSVNfTk9UX1ZBTElEJyB8IHRyYW5zbGF0ZTogeyBtaW46IG1pblZhbHVlLCBtYXg6IG1heFZhbHVlIH0pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgnTUVTU0FHRVMuRVJST1JfSVNfTk9UX1ZBTElEJyB8IHRyYW5zbGF0ZTogeyBmaWVsZDogbGFiZWwgfSlcIiBbaW5uZXJUZXh0XT1cIihpbnB1dC52YWx1ZSB8IHRvTnVtYmVyKSA+IHRoaXMubWF4VmFsdWUgfHwgKGlucHV0LnZhbHVlIHwgdG9OdW1iZXIpIDwgdGhpcy5taW5WYWx1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJ01FU1NBR0VTLkVSUk9SX1JBTkdFX0lTX05PVF9WQUxJRCcgfCB0cmFuc2xhdGU6IHsgbWluOiBtaW5WYWx1ZSwgbWF4OiBtYXhWYWx1ZSB9KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJ01FU1NBR0VTLkVSUk9SX0lTX05PVF9WQUxJRCcgfCB0cmFuc2xhdGU6IHsgZmllbGQ6IGxhYmVsIH0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9tYXQtZXJyb3I+XHJcblxyXG4gICAgICAgICAgICA8cGVwLXRleHRib3gtaWNvbiAqbmdJZj1cImlzRm9ybVZpZXcgJiYgeEFsaWdubWVudCA9PSAnMidcIiBtYXRQcmVmaXggW3ZhbHVlXT1cInZhbHVlXCIgW2xhYmVsXT1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgIFt0eXBlXT1cInR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICAgICAgICAgICAgPC9wZXAtdGV4dGJveC1pY29uPlxyXG4gICAgICAgICAgICA8cGVwLXRleHRib3gtaWNvbiAqbmdJZj1cImlzRm9ybVZpZXcgJiYgKHhBbGlnbm1lbnQgPT0gJzEnIHx8IHhBbGlnbm1lbnQgPT0gJzAnKVwiIG1hdFN1ZmZpeCBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cImxhYmVsXCIgW3R5cGVdPVwidHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG4gICAgICAgICAgICA8L3BlcC10ZXh0Ym94LWljb24+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhcmVudEZpZWxkS2V5OyB0aGVuIGdyb3VwZWRCbG9jazsgZWxzZSByZWd1bGFyQmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI3JlZ3VsYXJCbG9jaz5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZTsgY29udGV4dDogeyBpc0Zvcm1WaWV3OiB0cnVlLCBoYXNQYXJlbnQ6IGZhbHNlIH1cIj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2dyb3VwZWRCbG9jaz5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwTmFtZV09XCJwYXJlbnRGaWVsZEtleVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFtpZF09XCJrZXlcIiBbbmFtZV09XCJrZXlcIiBjbGFzcz1cIiBib2R5LXNtIFwiIG1hdElucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJvbktleVVwKCRldmVudClcIiAoa2V5cHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIiFkaXNhYmxlZCA/IHBsYWNlaG9sZGVyIDogJydcIiB0aXRsZT1cInt7IGZvcm1hdHRlZFZhbHVlIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJrZXlcIiBbdmFsdWVdPVwidmFsdWVcIiAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCIkZXZlbnQ/LmN1cnJlbnRUYXJnZXQ/LmJsdXIoKVwiIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZTsgY29udGV4dDogeyBpc0Zvcm1WaWV3OiB0cnVlLCBoYXNQYXJlbnQ6IHRydWUgfVwiPjwvbmctY29udGFpbmVyPiAtLT5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpQ2FyZFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0luRWRpdE1vZGU7IHRoZW4gZWRpdEJsb2NrOyBlbHNlIHJlYWRPbmx5QmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2VkaXRCbG9jaz5cclxuICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7J29uZS1yb3cnOiByb3dTcGFuID09PSAxfVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZTsgY29udGV4dDogeyBpc0Zvcm1WaWV3OiBmYWxzZSwgaGFzUGFyZW50OiBmYWxzZSB9XCI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI3JlYWRPbmx5QmxvY2s+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWNhcmQtaW5wdXQgY2FyZC1mbGV4LWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J29uZS1yb3cnOiByb3dTcGFuID09PSAxLCAncGVwcGVyaS1idXR0b24gd2Vhayc6IGlzQWN0aXZlICYmICFkaXNhYmxlZH1cIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cIid0ZXh0LWFsaWduLScgKyB4QWxpZ25tZW50XCIgKGNsaWNrKT1cIiFkaXNhYmxlZCA/IGNhcmRUZW1wbGF0ZUNsaWNrZWQoJGV2ZW50KSA6ICcnXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dUaXRsZSAmJiBsYWJlbCAhPSAnJ1wiIGNsYXNzPVwiYm9keS14cyB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJ7eyBsYWJlbCB9fVwiPnt7IGxhYmVsIH19Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gW2lkXT1cImtleVwiIHRpdGxlPVwie3sgZm9ybWF0dGVkVmFsdWUgfX1cIiBjbGFzcz1cImJvZHktc20gdmFsdWVcIj57eyBmb3JtYXR0ZWRWYWx1ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpc0FjdGl2ZSAmJiAhZGlzYWJsZWRcIiBjbGFzcz1cInBlcHBlcmktYnV0dG9uIHdlYWsgY2FyZC1lZGl0LWJ1dHRvblwiIG1hdC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInN5c3RlbV9lZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGVwLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpVGFibGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNBY3RpdmUgJiYgIWRpc2FibGVkOyB0aGVuIHNlbGVjdGVkQmxvY2s7IGVsc2Ugbm90U2VsZWN0ZWRCbG9ja1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjc2VsZWN0ZWRCbG9jaz5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZTsgY29udGV4dDogeyBpc0Zvcm1WaWV3OiBmYWxzZSwgaGFzUGFyZW50OiBmYWxzZSB9XCI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNub3RTZWxlY3RlZEJsb2NrPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybWF0dGVkVmFsdWU/Lmxlbmd0aCA+IDA7IHRoZW4gbm90RW1wdHlCbG9jazsgZWxzZSBlbXB0eUJsb2NrXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90RW1wdHlCbG9jaz5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbGluaydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW2lkXT1cImtleVwiIGNsYXNzPVwiY29sb3ItbGluayBib2R5LXNtIHBlcHBlcmktcmVwb3J0LWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZGlzYWJsZSc6IChkaXNhYmxlZCAmJiB2YWx1ZSA9PT0gJycpfVwiICpuZ0lmPVwiZm9ybWF0dGVkVmFsdWUgIT0gbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cInt7IGZvcm1hdHRlZFZhbHVlIH19XCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ7eyB2YWx1ZSA/IHZhbHVlIDogZm9ybWF0dGVkVmFsdWUgfX1cIj57eyBmb3JtYXR0ZWRWYWx1ZSB9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpZF09XCJrZXlcIiBjbGFzcz1cImJvZHktc20gcGVwcGVyaS1yZXBvcnQtaW5wdXRcIiBbbmdDbGFzc109XCJ7J3JlYWRvbmx5JzogZGlzYWJsZWR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwie3sgZm9ybWF0dGVkVmFsdWUgfX1cIiBbbmdTdHlsZV09XCJ7IGNvbG9yOiB0ZXh0Q29sb3IgfVwiPnt7IGZvcm1hdHRlZFZhbHVlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZW1wdHlCbG9jaz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIFtpZF09XCJrZXlcIj4mbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5FZGl0bW9kYWxcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGVwcGVyaVRlbXBsYXRlOyBjb250ZXh0OiB7IGlzRm9ybVZpZXc6IHRydWUsIGhhc1BhcmVudDogZmFsc2UgfVwiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG48L25nLWNvbnRhaW5lcj4iXX0=