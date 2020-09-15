import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LAYOUT_TYPE, STYLE_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import * as $ from 'jquery';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "@pepperi-addons/ngx-lib/field-title";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/icon";
import * as i9 from "@pepperi-addons/ngx-lib/icon";
import * as i10 from "@angular/material/badge";
import * as i11 from "./quantity-selector.pipes";
import * as i12 from "@ngx-translate/core";
const _c0 = ["QSCont"];
const _c1 = ["QSInput"];
function PepperiQuantitySelectorComponent_ng_template_1_pep_field_title_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-field-title", 6);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("label", ctx_r7.label)("required", ctx_r7.required)("disabled", ctx_r7.disabled)("showTitle", ctx_r7.showTitle)("xAlignment", ctx_r7.xAlignment);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1, a2) { return { caution: a0, md: a1, xs: a2 }; };
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r14.styleClass, " ellipsis");
    i0.ɵɵpropertyInterpolate("title", ctx_r14.formattedValue);
    i0.ɵɵproperty("id", ctx_r14.key)("ngClass", i0.ɵɵpureFunction3(7, _c2, ctx_r14.isCaution, ctx_r14.rowSpan !== 1, ctx_r14.rowSpan === 1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r14.formattedValue, " ");
} }
const _c3 = function (a0, a1) { return { caution: a0, "keep-background-on-focus": a1 }; };
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_4_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(4); return ctx_r21.decrement($event); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r18.isCaution && ctx_r18.styleClass !== ctx_r18.STYLE_TYPE.Strong, ctx_r18.styleClass === ctx_r18.STYLE_TYPE.Strong));
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_5_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(4); return ctx_r23.increment($event); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r19.isCaution && ctx_r19.styleClass !== ctx_r19.STYLE_TYPE.Strong, ctx_r19.styleClass === ctx_r19.STYLE_TYPE.Strong));
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r26 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(2, 2, msg_r26.Key), " : ", msg_r26.Value, " ");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_span_1_Template, 3, 4, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r20.messages);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 11);
    i0.ɵɵelementStart(1, "input", 12, 13);
    i0.ɵɵlistener("keypress", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.onKeyPress($event); })("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r28); return $event.target.setSelectionRange(0, 999); })("blur", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_blur_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r30 = i0.ɵɵnextContext(3); return ctx_r30.onBlur($event); })("focus", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_focus_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.onFocus($event); });
    i0.ɵɵpipe(3, "quantitySelectorNumber");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_4_Template, 3, 4, "button", 14);
    i0.ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_5_Template, 3, 4, "button", 15);
    i0.ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_Template, 2, 1, "mat-error", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("name", ctx_r16.key);
    i0.ɵɵpropertyInterpolate("title", ctx_r16.formattedValue);
    i0.ɵɵproperty("id", ctx_r16.key)("formControlName", ctx_r16.key)("value", ctx_r16.isFocus ? i0.ɵɵpipeBind2(3, 9, ctx_r16.value, ctx_r16.alowDecimal) : ctx_r16.formattedValue)("disabled", ctx_r16.disabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r16.showQsBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.showQsBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r16.messages == null ? null : ctx_r16.messages.length) > 0);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    i0.ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_2_Template, 2, 11, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template, 7, 12, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r13 = i0.ɵɵreference(3);
    const _r15 = i0.ɵɵreference(5);
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.readonly)("ngIfThen", _r13)("ngIfElse", _r15);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵtext(1, " X ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r34.styleClass, " disabled");
    i0.ɵɵproperty("id", ctx_r34.key)("ngClass", i0.ɵɵpureFunction3(5, _c2, ctx_r34.isCaution, ctx_r34.rowSpan !== 1, ctx_r34.rowSpan === 1));
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 27);
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("matBadge", ctx_r37.additionalValue);
    i0.ɵɵproperty("@showHide", ctx_r37.getAdditionalValue);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r42 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(2, 2, msg_r42.Key), " : ", msg_r42.Value, " ");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_span_1_Template, 3, 4, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r39.messages);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 28);
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("matBadge", ctx_r40.additionalValue);
    i0.ɵɵproperty("@showHide", ctx_r40.getAdditionalValue);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_0_Template, 1, 2, "span", 23);
    i0.ɵɵelementStart(1, "mat-form-field", 24);
    i0.ɵɵlistener("mouseleave", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_mat_form_field_mouseleave_1_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(3); return !ctx_r43.isFocus ? ctx_r43.onMatrixMouseleave($event) : null; });
    i0.ɵɵelementStart(2, "input", 25, 13);
    i0.ɵɵlistener("keypress", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_keypress_2_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r45 = i0.ɵɵnextContext(3); return ctx_r45.onKeyPress($event); })("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_click_2_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r46 = i0.ɵɵnextContext(3); ctx_r46.onMatrixClick($event); return $event.target.setSelectionRange(0, 999); })("blur", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_blur_2_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r47 = i0.ɵɵnextContext(3); return ctx_r47.onMatrixBlur($event); })("focus", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_focus_2_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r48 = i0.ɵɵnextContext(3); ctx_r48.onMatrixMouseEnter($event); return ctx_r48.onFocus($event); })("mouseenter", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_mouseenter_2_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r49 = i0.ɵɵnextContext(3); return ctx_r49.onMatrixMouseEnter($event); });
    i0.ɵɵpipe(4, "quantitySelectorNumber");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_Template, 2, 1, "mat-error", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_6_Template, 1, 2, "span", 26);
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r36.xAlignment == "2");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("name", ctx_r36.key);
    i0.ɵɵpropertyInterpolate("title", ctx_r36.formattedValue);
    i0.ɵɵproperty("id", ctx_r36.key)("formControlName", ctx_r36.key)("value", ctx_r36.isFocus ? i0.ɵɵpipeBind2(4, 9, ctx_r36.value, ctx_r36.alowDecimal) : ctx_r36.formattedValue)("disabled", ctx_r36.disabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r36.messages == null ? null : ctx_r36.messages.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r36.xAlignment != "2");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 7);
    i0.ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_2_Template, 2, 9, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template, 7, 12, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r33 = i0.ɵɵreference(3);
    const _r35 = i0.ɵɵreference(5);
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.readonly)("ngIfThen", _r33)("ngIfElse", _r35);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(3); return ctx_r55.enterChildren($event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r52.styleClass, " ellipsis");
    i0.ɵɵpropertyInterpolate("name", ctx_r52.key);
    i0.ɵɵproperty("id", ctx_r52.key)("ngClass", i0.ɵɵpureFunction3(12, _c2, ctx_r52.isCaution, ctx_r52.rowSpan !== 1, ctx_r52.rowSpan === 1))("title", i0.ɵɵpipeBind1(1, 8, "QS.ORDER"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 10, "QS.ORDER"), " ");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 34);
    i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r62 = i0.ɵɵnextContext(4); return ctx_r62.enterChildren($event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r59.styleClass, " ellipsis right-alignment");
    i0.ɵɵpropertyInterpolate("matBadge", ctx_r59.formattedValue);
    i0.ɵɵpropertyInterpolate("name", ctx_r59.key);
    i0.ɵɵproperty("matBadgeSize", ctx_r59.layoutType === ctx_r59.LAYOUT_TYPE.PepperiCard && ctx_r59.rowSpan === 1 ? "small" : "medium")("id", ctx_r59.key)("ngClass", i0.ɵɵpureFunction3(14, _c2, ctx_r59.isCaution, ctx_r59.rowSpan !== 1, ctx_r59.rowSpan === 1))("title", i0.ɵɵpipeBind1(1, 10, "QS.ORDER"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 12, "QS.ORDER"), " ");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r64 = i0.ɵɵnextContext(4); return ctx_r64.enterChildren($event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r61 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r61.styleClass, " ellipsis left-alignment");
    i0.ɵɵpropertyInterpolate("matBadge", ctx_r61.formattedValue);
    i0.ɵɵpropertyInterpolate("name", ctx_r61.key);
    i0.ɵɵproperty("matBadgeSize", ctx_r61.layoutType === ctx_r61.LAYOUT_TYPE.PepperiCard && ctx_r61.rowSpan === 1 ? "small" : "medium")("id", ctx_r61.key)("ngClass", i0.ɵɵpureFunction3(14, _c2, ctx_r61.isCaution, ctx_r61.rowSpan !== 1, ctx_r61.rowSpan === 1))("title", i0.ɵɵpipeBind1(1, 10, "QS.ORDER"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 12, "QS.ORDER"), " ");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 7);
    i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_1_Template, 4, 18, "ng-template", null, 32, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_3_Template, 4, 18, "ng-template", null, 33, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r58 = i0.ɵɵreference(2);
    const _r60 = i0.ɵɵreference(4);
    const ctx_r54 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r54.xAlignment == "2")("ngIfThen", _r58)("ngIfElse", _r60);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 7);
    i0.ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_2_Template, 4, 16, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 30, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r51 = i0.ɵɵreference(3);
    const _r53 = i0.ɵɵreference(5);
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.value == "0")("ngIfThen", _r51)("ngIfElse", _r53);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 36);
    i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_6_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(2); return ctx_r66.enterPackage($event); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r11.styleClass, " ellipsis");
    i0.ɵɵpropertyInterpolate("name", ctx_r11.key);
    i0.ɵɵpropertyInterpolate("title", i0.ɵɵpipeBind1(2, 9, "QS.ORDER"));
    i0.ɵɵproperty("id", ctx_r11.key)("ngClass", i0.ɵɵpureFunction3(13, _c2, ctx_r11.isCaution, ctx_r11.rowSpan !== 1, ctx_r11.rowSpan === 1));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(4, 11, "QS.ORDER"), " (", ctx_r11.formattedValue, ") ");
} }
const _c4 = function (a0, a1, a2, a3, a4) { return { "pepperi-table-quantity-selector": a0, "one-row": a1, caution: a2, "matrix-qs": a3, "zero-quantity": a4 }; };
function PepperiQuantitySelectorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3, 4);
    i0.ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_pep_field_title_2_Template, 1, 5, "pep-field-title", 5);
    i0.ɵɵtemplate(3, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_Template, 6, 3, "ng-container", 2);
    i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_Template, 6, 3, "ng-container", 2);
    i0.ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_Template, 6, 3, "ng-container", 2);
    i0.ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_template_1_ng_container_6_Template, 5, 17, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("pepperi-quantity-selector-container ", ctx_r1.styleClass, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(9, _c4, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable, ctx_r1.rowSpan === 1, ctx_r1.isCaution, ctx_r1.type === "qsForMatrix", ctx_r1.formattedValue === "0"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.layoutType !== ctx_r1.LAYOUT_TYPE.PepperiTable && ctx_r1.layoutType !== ctx_r1.LAYOUT_TYPE.PepperiCard);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "qs");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "qsForMatrix");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "button");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "packageButton");
} }
function PepperiQuantitySelectorComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiQuantitySelectorComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiQuantitySelectorComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiQuantitySelectorComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
export class PepperiQuantitySelectorComponent {
    constructor(cd, customizationService, renderer, element) {
        this.cd = cd;
        this.customizationService = customizationService;
        this.renderer = renderer;
        this.element = element;
        this.key = '';
        this.value = '';
        this.formattedValue = '';
        this.label = '';
        this.type = 'qs';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.textColor = '';
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.alowDecimal = false;
        this.additionalValue = '';
        this.controlType = 'qs';
        this.form = null;
        this.showTitle = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.isActive = false;
        this.valueChanged = new EventEmitter();
        this.elementClicked = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.standAlone = false;
        this.isFocus = false;
        this.isMatrixFocus = false;
        this.isCaution = false;
        this.messages = null;
        this.showQsBtn = false;
        this.sameElementInTheWantedRow = null;
        this.STYLE_TYPE = STYLE_TYPE;
        this.styleClass = STYLE_TYPE.Strong;
        this.isEmptyKey = false;
    }
    ngOnInit() {
        if (this.form === null) {
            if (this.key === '') {
                this.isEmptyKey = true;
            }
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
            this.formattedValue = this.formattedValue || this.value;
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
        this.setQsView();
        // TODO:
        // const self = this;
        // this.resize = Observable.fromEvent(window, 'resize')
        //     .debounceTime(100)
        //     .subscribe((event) => {
        //         self.setQsView();
        //     });
    }
    // TODO:
    ngAfterViewChecked() {
        setTimeout(() => {
            this.setQsView();
        }, 125);
    }
    ngOnChanges(changes) {
        // Bug fix for addons when the key is '' in the ngOnInit for some reson
        if (this.isEmptyKey && this.key !== '') {
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
        }
        this.isCaution = this.textColor === '#FF0000';
        const messages = this.notificationInfo && this.notificationInfo.length > 0 ? JSON.parse(this.notificationInfo).Messages : '';
        if (messages && messages.length > 0) {
            // Replace the msg keys.
            for (const msg of messages) {
                if (msg.Key === 'Inventory_Limit_Msg') {
                    msg.Key = 'MESSAGES.ERROR_INVENTORY_LIMIT';
                }
                else if (msg.Key === 'Case_Quantity_Limit_Msg') {
                    msg.Key = 'MESSAGES.ERROR_CASE_QUANTITY_LIMIT';
                }
                else if (msg.Key === 'Min_Quantity_Limit_Msg') {
                    msg.Key = 'MESSAGES.ERROR_MIN_QUANTITY_LIMIT';
                }
                else if (msg.Key === 'Max_Quantity_Limit_Msg') {
                    msg.Key = 'MESSAGES.ERROR_MAX_QUANTITY_LIMIT';
                }
            }
            this.messages = messages;
            const fieldControl = this.form.controls[this.key];
            fieldControl.setErrors({
                serverError: 'Error',
            });
            setTimeout(() => {
                if (this.QSInput && this.QSInput.nativeElement) {
                    this.QSInput.nativeElement.focus();
                }
            }, 150);
        }
        else {
            const self = this;
            setTimeout(() => {
                if (self.lastFocusField) {
                    self.lastFocusField.focus();
                    self.lastFocusField = null;
                }
                else {
                    self.focusToTheSameElementInTheWantedRow();
                }
            }, 100);
        }
    }
    ngOnDestroy() {
        if (this.resize) {
            this.resize.unsubscribe();
        }
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
        if (this.elementClicked) {
            this.elementClicked.unsubscribe();
        }
    }
    get getAdditionalValue() {
        return this.additionalValue.length > 0 ? 'show' : 'hide';
    }
    getSameElementInTheWantedRowByClassName(event, isNext = true) {
        const eventTarget = event.target || event.srcElement;
        let sameElementInTheWantedRowByClassName;
        let parentSelector;
        if (this.layoutType === LAYOUT_TYPE.PepperiTable) {
            parentSelector = sameElementInTheWantedRowByClassName = $(eventTarget).parents('.table-row');
        }
        else if (this.layoutType === LAYOUT_TYPE.PepperiCard) {
            parentSelector = sameElementInTheWantedRowByClassName = $(eventTarget).parents('.card-view');
            if (parentSelector.length === 0) {
                parentSelector = sameElementInTheWantedRowByClassName = $(eventTarget).parents('.line-view');
            }
        }
        if (isNext) {
            if (parentSelector.is(':last-child')) {
                sameElementInTheWantedRowByClassName = parentSelector
                    .parent()
                    .children()
                    .first()
                    .find('[name=' + this.key + ']');
            }
            else {
                sameElementInTheWantedRowByClassName = parentSelector.next().find('[name=' + this.key + ']');
            }
        }
        else {
            if (parentSelector.is(':first-child')) {
                sameElementInTheWantedRowByClassName = parentSelector
                    .parent()
                    .children()
                    .last()
                    .find('[name=' + this.key + ']');
            }
            else {
                sameElementInTheWantedRowByClassName = parentSelector.prev().find('[name=' + this.key + ']');
            }
        }
        return sameElementInTheWantedRowByClassName;
    }
    setSameElementInTheWantedRow(event, isNext = true) {
        // Navigate to the QS in the next row.
        // const target = event.target || event.srcElement;
        this.sameElementInTheWantedRow = this.getSameElementInTheWantedRowByClassName(event, isNext);
        this.QSInput.nativeElement.blur();
    }
    focusToTheSameElementInTheWantedRow() {
        if (this.sameElementInTheWantedRow) {
            // If this is regular item (qs and not button) .
            if (this.sameElementInTheWantedRow.is('input')) {
                this.sameElementInTheWantedRow.click().select();
            }
            else {
                this.sameElementInTheWantedRow.parent().click();
                this.sameElementInTheWantedRow.focus();
            }
            this.sameElementInTheWantedRow = null;
        }
    }
    cleanError() {
        const fieldControl = this.form.controls[this.key];
        // Clean the error message
        if (this.messages && this.messages.length > 0) {
            this.messages = this.notificationInfo = null;
            fieldControl.setErrors(null);
        }
    }
    onMatrixMouseEnter(event) {
        this.isMatrixFocus = true;
    }
    onMatrixMouseleave(event) {
        this.isMatrixFocus = false;
    }
    onMatrixClick(event) {
        this.isFocus = true;
        if (this.QSInput && this.QSInput.nativeElement) {
            this.QSInput.nativeElement.focus();
        }
    }
    onMatrixBlur(event) {
        if (!event.relatedTarget || event.relatedTarget.className.indexOf('qs') < 0) {
            this.isMatrixFocus = false;
        }
        this.onBlur(event);
    }
    onFocus(event) {
        this.isFocus = true;
    }
    onBlur(event) {
        this.isFocus = false;
        this.cleanError();
        const value = event.target ? event.target.value : event;
        if (parseFloat(this.value) !== parseFloat(value)) {
            this.value = value;
            this.formattedValue = value;
            this.customizationService.updateFormFieldValue(this.form, this.key, value);
            // this.propagateChange(this.value, event.relatedTarget);
            this.changeValue(this.value, event.relatedTarget);
        }
        else {
            this.focusToTheSameElementInTheWantedRow();
        }
    }
    changeValue(value, lastFocusedField = null) {
        this.valueChanged.emit({ apiName: this.key, value, controlType: this.controlType, lastFocusedField });
    }
    increment(event) {
        if (this.standAlone) {
            let tmp = parseFloat(this.value);
            this.value = this.formattedValue = (++tmp).toString();
            this.customizationService.updateFormFieldValue(this.form, this.key, this.value);
        }
        // this.propagateChange('+');
        this.changeValue('+', null);
        event.stopPropagation();
    }
    decrement(event) {
        if (this.standAlone) {
            let tmp = parseFloat(this.value);
            this.value = this.formattedValue = (--tmp).toString();
            this.customizationService.updateFormFieldValue(this.form, this.key, this.value);
        }
        // this.propagateChange('-');
        this.changeValue('-', null);
        event.stopPropagation();
    }
    enterChildren(event) {
        this.elementClicked.emit({ apiName: PepperiQuantitySelectorComponent.ENTER_CHILDREN, eventWhich: event.which });
    }
    enterPackage(event) {
        this.elementClicked.emit({
            apiName: PepperiQuantitySelectorComponent.ENTER_PACKAGE,
            eventWhich: event.which, otherData: this.notificationInfo
        });
    }
    setQsView() {
        if (this.layoutType === LAYOUT_TYPE.Editmodal ||
            this.layoutType === LAYOUT_TYPE.PepperiCard && this.rowSpan <= 1) {
            this.showQsBtn = false;
        }
        else {
            if (this.QSCont && this.QSCont.nativeElement) {
                this.showQsBtn = this.QSCont.nativeElement.clientWidth > 140;
            }
        }
        // Get state class from theme.
        // this.styleClass = this.customizationService.getThemeVariable(CustomizationService.STYLE_QS_KEY);
        this.styleClass = document.documentElement.style.getPropertyValue(CustomizationService.STYLE_QS_KEY);
        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
    }
    onKeyPress(event) {
        let inputChar = String.fromCharCode(event.charCode);
        const keyboardEvent = event;
        if (keyboardEvent.keyCode === 13) {
            this.setSameElementInTheWantedRow(keyboardEvent, !keyboardEvent.shiftKey);
            return true;
        }
        // TODO: Make it one function like in PepperiTextboxComponent
        if (
        /*[8, 9, 27, 13, 190].indexOf(keyboardEvent.keyCode) !== -1 ||*/
        // Allow: Ctrl+A
        (keyboardEvent.keyCode === 65 && keyboardEvent.ctrlKey === true) ||
            // Allow: Ctrl+C
            (keyboardEvent.keyCode === 67 && keyboardEvent.ctrlKey === true) ||
            // Allow: Ctrl+V
            (keyboardEvent.keyCode === 86 && keyboardEvent.ctrlKey === true) ||
            // Allow: Ctrl+X
            (keyboardEvent.keyCode === 88 &&
                keyboardEvent.ctrlKey === true) /*||
    // Allow: home, end, left, right
    (keyboardEvent.keyCode >= 35 && keyboardEvent.keyCode <= 39)*/) {
            // let it happen, don't do anything
            return true;
        }
        if (this.alowDecimal) {
            const decPoint = '.';
            const thousandSeparator = ',';
            const pattern = /^\d[\d,]*(\.\d+)?$/;
            if (keyboardEvent.keyCode === 46) {
                inputChar = inputChar + '0';
            }
            else if (keyboardEvent.keyCode === 44) {
                inputChar = inputChar + '000';
            }
            if (!pattern.test(event.target.value + inputChar)) {
                keyboardEvent.preventDefault();
            }
        }
        else {
            const pattern = /[0-9\+\-\ ]/;
            if (!pattern.test(inputChar)) {
                keyboardEvent.preventDefault();
            }
        }
    }
}
PepperiQuantitySelectorComponent.ENTER_CHILDREN = '[EnterChildren]';
PepperiQuantitySelectorComponent.ENTER_PACKAGE = '[EnterPackage]';
PepperiQuantitySelectorComponent.ɵfac = function PepperiQuantitySelectorComponent_Factory(t) { return new (t || PepperiQuantitySelectorComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PepperiQuantitySelectorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiQuantitySelectorComponent, selectors: [["pep-quantity-selector"]], viewQuery: function PepperiQuantitySelectorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.QSCont = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.QSInput = _t.first);
    } }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", lastFocusField: "lastFocusField", alowDecimal: "alowDecimal", additionalValue: "additionalValue", notificationInfo: "notificationInfo", form: "form", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive" }, outputs: { valueChanged: "valueChanged", elementClicked: "elementClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [3, "ngClass"], ["QSCont", ""], [3, "label", "required", "disabled", "showTitle", "xAlignment", 4, "ngIf"], [3, "label", "required", "disabled", "showTitle", "xAlignment"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["readonlyBlock", ""], ["editableQSBlock", ""], ["mat-button", "", "disabled", "true", 3, "id", "ngClass", "title"], ["appearance", "outline"], ["type", "decimalNumber", "inputmode", "decimal", "matInput", "", "autocomplete", "off", 1, "body-lg", "ellipsis", 3, "name", "title", "id", "formControlName", "value", "disabled", "keypress", "click", "blur", "focus"], ["QSInput", ""], ["mat-button", "", "matPrefix", "", "class", "pepperi-button icon-button sm weak qs-action", 3, "ngClass", "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "class", "pepperi-button icon-button sm weak qs-action", 3, "ngClass", "click", 4, "ngIf"], ["mat-button", "", "matPrefix", "", 1, "pepperi-button", "icon-button", "sm", "weak", "qs-action", 3, "ngClass", "click"], ["name", "number_minus"], ["mat-button", "", "matSuffix", "", 1, "pepperi-button", "icon-button", "sm", "weak", "qs-action", 3, "ngClass", "click"], ["name", "number_plus"], ["class", "qs-error body-xs", 4, "ngFor", "ngForOf"], [1, "qs-error", "body-xs"], ["mat-button", "", "disabled", "true", 3, "id", "ngClass"], ["class", "body-sm additional-value prefix", "matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 3, "matBadge", 4, "ngIf"], ["appearance", "outline", 3, "mouseleave"], ["type", "decimalNumber", "inputmode", "decimal", "matInput", "", "autocomplete", "off", 1, "body-sm", "ellipsis", 3, "name", "title", "id", "formControlName", "value", "disabled", "keypress", "click", "blur", "focus", "mouseenter"], ["class", "body-sm additional-value suffix", "matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 3, "matBadge", 4, "ngIf"], ["matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 1, "body-sm", "additional-value", "prefix", 3, "matBadge"], ["matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 1, "body-sm", "additional-value", "suffix", 3, "matBadge"], ["regularBlock", ""], ["withBadgeBlock", ""], ["mat-button", "", 3, "name", "id", "ngClass", "title", "click"], ["leftBadgeBlock", ""], ["rightBadgeBlock", ""], ["mat-button", "", "matBadgePosition", "before", 3, "matBadge", "matBadgeSize", "name", "id", "ngClass", "title", "click"], ["mat-button", "", "matBadgePosition", "after", 3, "matBadge", "matBadgeSize", "name", "id", "ngClass", "title", "click"], ["mat-button", "", 3, "name", "title", "id", "ngClass", "click"], [4, "ngTemplateOutlet"]], template: function PepperiQuantitySelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_Template, 7, 15, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PepperiQuantitySelectorComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_container_5_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
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
    } }, directives: [i2.NgControlStatusGroup, i2.FormGroupDirective, i3.NgIf, i3.NgClass, i4.PepperiFieldTitleComponent, i5.MatButton, i6.MatFormField, i7.MatInput, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i6.MatPrefix, i8.MatIcon, i9.PepperiIconComponent, i6.MatSuffix, i6.MatError, i3.NgForOf, i10.MatBadge, i3.NgTemplateOutlet], pipes: [i11.QuantitySelectorNumber, i12.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}.pepperi-quantity-selector-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:wrap;height:inherit;min-width:2rem;width:100%}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .pepperi-quantity-selector-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{font-weight:var(--pep-font-weight-bold,600);padding:0 .25rem;text-align:center;width:100%}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{height:unset}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]{width:100%}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .pepperi-button.qs-action[_ngcontent-%COMP%]{height:2rem!important;line-height:2rem;min-width:2rem;width:2rem!important}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .pepperi-button.qs-action[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:inherit;width:inherit}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .qs-error[_ngcontent-%COMP%]{display:block}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value[_ngcontent-%COMP%]{align-self:flex-start;display:flex;height:1.25rem;justify-content:flex-end;top:calc(var(--pep-spacing-xs, .25rem)*-1);transform:unset!important}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value.prefix[_ngcontent-%COMP%]{left:calc(var(--pep-spacing-sm, .5rem)*-1)!important}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value.suffix[_ngcontent-%COMP%]{right:calc(var(--pep-spacing-sm, .5rem)*-1)!important}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{-ms-text-overflow:ellipsis;border-radius:.625rem;max-width:inherit;min-width:1.5rem;overflow:hidden;padding:0 .5rem;text-overflow:ellipsis;white-space:nowrap;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;z-index:99}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{min-width:.5rem;padding:0 .25rem}.pepperi-quantity-selector-container.pepperi-table-quantity-selector[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]:not(.qs-action){height:2rem;line-height:2rem}.pepperi-quantity-selector-container.pepperi-table-quantity-selector[_ngcontent-%COMP%]   .pepperi-button.qs-action[_ngcontent-%COMP%]{height:1.5rem!important;line-height:1.5rem;min-width:1.5rem;width:1.5rem!important}"], data: { animation: [
            trigger('showHide', [
                state('show', style({
                    opacity: 1,
                    transform: 'scale(1)',
                })),
                state('hide', style({
                    opacity: 0,
                    transform: 'scale(0)',
                })),
                transition('show => hide', animate('250ms ease-out')),
                transition('hide => show', animate('250ms ease-in')),
            ]),
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiQuantitySelectorComponent, [{
        type: Component,
        args: [{
                selector: 'pep-quantity-selector',
                templateUrl: './quantity-selector.component.html',
                styleUrls: ['./quantity-selector.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('showHide', [
                        state('show', style({
                            opacity: 1,
                            transform: 'scale(1)',
                        })),
                        state('hide', style({
                            opacity: 0,
                            transform: 'scale(0)',
                        })),
                        transition('show => hide', animate('250ms ease-out')),
                        transition('hide => show', animate('250ms ease-in')),
                    ]),
                ],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
            type: Input
        }], value: [{
            type: Input
        }], formattedValue: [{
            type: Input
        }], label: [{
            type: Input
        }], type: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }], textColor: [{
            type: Input
        }], xAlignment: [{
            type: Input
        }], rowSpan: [{
            type: Input
        }], lastFocusField: [{
            type: Input
        }], alowDecimal: [{
            type: Input
        }], additionalValue: [{
            type: Input
        }], notificationInfo: [{
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
        }], elementClicked: [{
            type: Output
        }], QSCont: [{
            type: ViewChild,
            args: ['QSCont']
        }], QSInput: [{
            type: ViewChild,
            args: ['QSInput']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbnRpdHktc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9xdWFudGl0eS1zZWxlY3Rvci9xdWFudGl0eS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3F1YW50aXR5LXNlbGVjdG9yL3F1YW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBSVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUdULHVCQUF1QixHQUcxQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEYsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVGhCLHFDQUdrQjs7O0lBRmQsb0NBQWUsNkJBQUEsNkJBQUEsK0JBQUEsaUNBQUE7OztJQUtmLHdCQUF3Rjs7OztJQUVwRixrQ0FHSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUzs7O0lBSnFCLDZFQUFnRDtJQUUxRSx5REFBNEI7SUFGeEIsZ0NBQVUsd0dBQUE7SUFHZCxlQUNKO0lBREksdURBQ0o7Ozs7O0lBV0ksa0NBR0k7SUFIMkMsaVFBQTJCO0lBR3RFLGdDQUNJO0lBQUEsK0JBQ1c7SUFFZixpQkFBVztJQUNmLGlCQUFTOzs7SUFOTCw2S0FBa0k7Ozs7SUFPdEksa0NBR0k7SUFIMkMsaVFBQTJCO0lBR3RFLGdDQUNJO0lBQUEsK0JBQ1c7SUFFZixpQkFBVztJQUNmLGlCQUFTOzs7SUFOTCw2S0FBa0k7OztJQVFsSSxnQ0FBNkQ7SUFBQSxZQUN6Qzs7SUFBQSxpQkFBTzs7O0lBRGtDLGVBQ3pDO0lBRHlDLHdGQUN6Qzs7O0lBRnhCLGlDQUNJO0lBQUEsMklBQTZEO0lBRWpFLGlCQUFZOzs7SUFGdUIsZUFBNEI7SUFBNUIsMENBQTRCOzs7O0lBM0JuRSwwQ0FDSTtJQUFBLHFDQU9BO0lBSDBCLDhQQUErQix3S0FDNUMsZ0NBQWdDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFESyxxT0FBQSx3T0FBQTs7SUFKekQsaUJBT0E7SUFBQSxtSUFHSTtJQU1KLG1JQUdJO0lBTUosd0lBQ0k7SUFHUixpQkFBaUI7OztJQTdCcUQsZUFBZ0I7SUFBaEIsNkNBQWdCO0lBQ3JELHlEQUE0QjtJQUFvQixnQ0FBVSxnQ0FBQSw4R0FBQSw4QkFBQTtJQU0vRSxlQUFpQjtJQUFqQix3Q0FBaUI7SUFTakIsZUFBaUI7SUFBakIsd0NBQWlCO0lBU2QsZUFBNEI7SUFBNUIsc0ZBQTRCOzs7SUFwQ25ELDZCQUNJO0lBQUEsZ0lBQXlFO0lBQ3pFLGdLQUNJO0lBTUosZ0tBQ0k7SUFnQ1IsMEJBQWU7Ozs7O0lBekNHLGVBQTBEO0lBQTFELHNDQUEwRCxrQkFBQSxrQkFBQTs7O0lBNEN4RSx3QkFBd0Y7OztJQUVwRixrQ0FFSTtJQUFBLG1CQUNKO0lBQUEsaUJBQVM7OztJQUhxQiw2RUFBZ0Q7SUFBdEUsZ0NBQVUsd0dBQUE7OztJQVNsQiwyQkFFMEY7OztJQUR0Riw2REFBZ0M7SUFDYyxzREFBZ0M7OztJQWtCMUUsZ0NBQTZEO0lBQUEsWUFDekM7O0lBQUEsaUJBQU87OztJQURrQyxlQUN6QztJQUR5Qyx3RkFDekM7OztJQUZ4QixpQ0FDSTtJQUFBLDJJQUE2RDtJQUVqRSxpQkFBWTs7O0lBRnVCLGVBQTRCO0lBQTVCLDBDQUE0Qjs7O0lBS25FLDJCQUUwRjs7O0lBRHRGLDZEQUFnQztJQUNjLHNEQUFnQzs7OztJQTNCbEYsK0hBRW1GO0lBRW5GLDBDQUNJO0lBRGlDLHFTQUFzRCxJQUFJLElBQUM7SUFDNUYscUNBU0E7SUFMMEIsOFBBQStCLDRPQUNyQixnQ0FBZ0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQURsQiwyT0FBQSw0UUFBQSw2UEFBQTs7SUFKekQsaUJBU0E7SUFLQSx3SUFDSTtJQUdSLGlCQUFpQjtJQUVqQiwrSEFFbUY7OztJQTNCN0UsZ0RBQXlCO0lBS3VDLGVBQWdCO0lBQWhCLDZDQUFnQjtJQUM5RSx5REFBNEI7SUFBNkMsZ0NBQVUsZ0NBQUEsOEdBQUEsOEJBQUE7SUFhNUUsZUFBNEI7SUFBNUIsc0ZBQTRCO0lBTXJDLGVBQXlCO0lBQXpCLGdEQUF5Qjs7O0lBckN2Qyw2QkFDSTtJQUFBLGdJQUF5RTtJQUN6RSwrSkFDSTtJQUtKLGdLQUNJO0lBZ0NSLDBCQUFlOzs7OztJQXhDRyxlQUEwRDtJQUExRCxzQ0FBMEQsa0JBQUEsa0JBQUE7OztJQTJDeEUsd0JBQTBGOzs7O0lBRXRGLGtDQUdJO0lBRGlDLDRQQUErQjs7SUFDaEUsWUFDSjs7SUFBQSxpQkFBUzs7O0lBSjJCLDZFQUFnRDtJQUFqRSw2Q0FBZ0I7SUFBa0QsZ0NBQVUseUdBQUEsMkNBQUE7SUFHM0YsZUFDSjtJQURJLGtFQUNKOzs7SUFHQSx3QkFDZTs7OztJQUVYLGtDQUtJO0lBRGlDLDBRQUErQjs7SUFDaEUsWUFDSjs7SUFBQSxpQkFBUzs7O0lBSlksNkZBQWdFO0lBRmxFLDREQUErQjtJQUU5Qyw2Q0FBZ0I7SUFEaEIsbUlBQTZGLG1CQUFBLHlHQUFBLDRDQUFBO0lBSTdGLGVBQ0o7SUFESSxrRUFDSjs7OztJQUdBLGtDQUtJO0lBRGlDLDBRQUErQjs7SUFDaEUsWUFDSjs7SUFBQSxpQkFBUzs7O0lBSlksNEZBQStEO0lBRmpFLDREQUErQjtJQUU5Qyw2Q0FBZ0I7SUFEaEIsbUlBQTZGLG1CQUFBLHlHQUFBLDRDQUFBO0lBSTdGLGVBQ0o7SUFESSxrRUFDSjs7O0lBbEJKLDhJQUNBO0lBQ0EsK0tBQ0k7SUFRSiwrS0FDSTs7Ozs7SUFaVSxnREFBb0Usa0JBQUEsa0JBQUE7OztJQVYxRiw2QkFDSTtJQUFBLGdJQUEyRTtJQUMzRSxpS0FDSTtJQU1KLGdLQUNJO0lBcUJSLDBCQUFlOzs7OztJQTlCRyxlQUE0RDtJQUE1RCwyQ0FBNEQsa0JBQUEsa0JBQUE7Ozs7SUErQjlFLDZCQUNJO0lBQUEsa0NBSUk7SUFEQSw2T0FBOEI7O0lBQzlCLFlBQ0o7O0lBQUEsaUJBQVM7SUFDYiwwQkFBZTs7O0lBTFAsZUFBZ0Q7SUFBaEQsNkVBQWdEO0lBRGpDLDZDQUFnQjtJQUFDLG1FQUFvQztJQUNuQixnQ0FBVSx5R0FBQTtJQUczRCxlQUNKO0lBREksaUdBQ0o7Ozs7SUF6SVIsaUNBT0k7SUFBQSx1SEFHQTtJQUVBLGlIQUNJO0lBMkNKLGlIQUNJO0lBMENKLGlIQUNJO0lBK0JKLGtIQUNJO0lBT1IsaUJBQU07OztJQTNJTyx3RkFBNEQ7SUFBQyxpTkFNcEU7SUFDZSxlQUF5RjtJQUF6RixvSUFBeUY7SUFLNUYsZUFBb0I7SUFBcEIsMENBQW9CO0lBNENwQixlQUE2QjtJQUE3QixtREFBNkI7SUEyQzdCLGVBQXdCO0lBQXhCLDhDQUF3QjtJQWdDeEIsZUFBK0I7SUFBL0IscURBQStCOzs7SUFZakQsd0JBQWlFOzs7SUFEckUsNkJBQ0k7SUFBQSxtSEFBa0Q7SUFDdEQsMEJBQWU7Ozs7SUFERyxlQUFtQztJQUFuQyxzQ0FBbUM7OztJQUlqRCx3QkFBaUU7OztJQURyRSw2QkFDSTtJQUFBLG1IQUFrRDtJQUN0RCwwQkFBZTs7OztJQURHLGVBQW1DO0lBQW5DLHNDQUFtQzs7O0lBSWpELHdCQUFpRTs7O0lBRHJFLDZCQUNJO0lBQUEsbUhBQWtEO0lBQ3RELDBCQUFlOzs7O0lBREcsZUFBbUM7SUFBbkMsc0NBQW1DOzs7SUFJakQsd0JBQWlFOzs7SUFEckUsNkJBQ0k7SUFBQSxtSEFBa0Q7SUFDdEQsMEJBQWU7Ozs7SUFERyxlQUFtQztJQUFuQyxzQ0FBbUM7O0FEL0d6RCxNQUFNLE9BQU8sZ0NBQWdDO0lBZ0R6QyxZQUNZLEVBQXFCLEVBQ3JCLG9CQUEwQyxFQUMxQyxRQUFtQixFQUNuQixPQUFtQjtRQUhuQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQWhEdEIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUc5QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVWLFNBQUksR0FBYyxJQUFJLENBQUM7UUFDdkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixlQUFVLEdBQWdCLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDbEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFELG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFLdEUsZ0JBQVcsR0FBRyxXQUFXLENBQUM7UUFDMUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFlLElBQUksQ0FBQztRQUM1QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBR2xCLDhCQUF5QixHQUFHLElBQUksQ0FBQztRQUNqQyxlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLGVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQy9CLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFPZixDQUFDO0lBRUwsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDMUI7WUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3SCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztZQUV4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ3pHO1FBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLFFBQVE7UUFDUixxQkFBcUI7UUFDckIsdURBQXVEO1FBQ3ZELHlCQUF5QjtRQUN6Qiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLFVBQVU7SUFDZCxDQUFDO0lBRUQsUUFBUTtJQUNSLGtCQUFrQjtRQUNkLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFZO1FBQ3BCLHVFQUF1RTtRQUN2RSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEk7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDO1FBRTlDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3SCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQyx3QkFBd0I7WUFDeEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxRQUFRLEVBQUU7Z0JBQ3hCLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxxQkFBcUIsRUFBRTtvQkFDbkMsR0FBRyxDQUFDLEdBQUcsR0FBRyxnQ0FBZ0MsQ0FBQztpQkFDOUM7cUJBQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLHlCQUF5QixFQUFFO29CQUM5QyxHQUFHLENBQUMsR0FBRyxHQUFHLG9DQUFvQyxDQUFDO2lCQUNsRDtxQkFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssd0JBQXdCLEVBQUU7b0JBQzdDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsbUNBQW1DLENBQUM7aUJBQ2pEO3FCQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyx3QkFBd0IsRUFBRTtvQkFDN0MsR0FBRyxDQUFDLEdBQUcsR0FBRyxtQ0FBbUMsQ0FBQztpQkFDakQ7YUFDSjtZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBRXpCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsRCxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUNuQixXQUFXLEVBQUUsT0FBTzthQUN2QixDQUFDLENBQUM7WUFDSCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtvQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3RDO1lBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7YUFBTTtZQUNILE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztZQUNsQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7aUJBQzlCO3FCQUFNO29CQUNILElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxDQUFDO2lCQUM5QztZQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNYO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkM7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNsQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDN0QsQ0FBQztJQUVELHVDQUF1QyxDQUFDLEtBQVUsRUFBRSxNQUFNLEdBQUcsSUFBSTtRQUM3RCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDckQsSUFBSSxvQ0FBb0MsQ0FBQztRQUV6QyxJQUFJLGNBQWMsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDLFlBQVksRUFBRTtZQUM5QyxjQUFjLEdBQUcsb0NBQW9DLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRzthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLENBQUMsV0FBVyxFQUFFO1lBQ3BELGNBQWMsR0FBRyxvQ0FBb0MsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRTdGLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLGNBQWMsR0FBRyxvQ0FBb0MsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2hHO1NBQ0o7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksY0FBYyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDbEMsb0NBQW9DLEdBQUcsY0FBYztxQkFDaEQsTUFBTSxFQUFFO3FCQUNSLFFBQVEsRUFBRTtxQkFDVixLQUFLLEVBQUU7cUJBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ3hDO2lCQUFNO2dCQUNILG9DQUFvQyxHQUFHLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDaEc7U0FDSjthQUFNO1lBQ0gsSUFBSSxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNuQyxvQ0FBb0MsR0FBRyxjQUFjO3FCQUNoRCxNQUFNLEVBQUU7cUJBQ1IsUUFBUSxFQUFFO3FCQUNWLElBQUksRUFBRTtxQkFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDeEM7aUJBQU07Z0JBQ0gsb0NBQW9DLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNoRztTQUNKO1FBRUQsT0FBTyxvQ0FBb0MsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNEJBQTRCLENBQUMsS0FBVSxFQUFFLE1BQU0sR0FBRyxJQUFJO1FBQ2xELHNDQUFzQztRQUN0QyxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELG1DQUFtQztRQUMvQixJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNoQyxnREFBZ0Q7WUFDaEQsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDbkQ7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNoRCxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDMUM7WUFDRCxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDTixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEQsMEJBQTBCO1FBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBVTtRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBVTtRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDOUI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBVTtRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXhELElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUUzRSx5REFBeUQ7WUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0gsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLENBQUM7U0FDOUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVUsRUFBRSxtQkFBd0IsSUFBSTtRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ1gsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuRjtRQUVELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ1gsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuRjtRQUVELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0NBQWdDLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUUsZ0NBQWdDLENBQUMsYUFBYTtZQUN2RCxVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUM1RCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsU0FBUztRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLENBQUMsU0FBUztZQUN6QyxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7WUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO2FBQ2hFO1NBQ0o7UUFFRCw4QkFBOEI7UUFDOUIsbUdBQW1HO1FBQ25HLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFlLENBQUM7UUFFbkgsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBSztRQUNaLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sYUFBYSxHQUFHLEtBQXNCLENBQUM7UUFFN0MsSUFBSSxhQUFhLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFFLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCw2REFBNkQ7UUFDN0Q7UUFDSSxnRUFBZ0U7UUFDaEUsZ0JBQWdCO1FBQ2hCLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksYUFBYSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7WUFDaEUsZ0JBQWdCO1lBQ2hCLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksYUFBYSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7WUFDaEUsZ0JBQWdCO1lBQ2hCLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksYUFBYSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7WUFDaEUsZ0JBQWdCO1lBQ2hCLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUN6QixhQUFhLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDOztrRUFFMEIsRUFDaEU7WUFDRSxtQ0FBbUM7WUFDbkMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDckIsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUM7WUFDOUIsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUM7WUFDckMsSUFBSSxhQUFhLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtnQkFDOUIsU0FBUyxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxhQUFhLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtnQkFDckMsU0FBUyxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDakM7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsRUFBRTtnQkFDL0MsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ2xDO1NBQ0o7YUFBTTtZQUNILE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDMUIsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ2xDO1NBQ0o7SUFDTCxDQUFDOztBQW5YYSwrQ0FBYyxHQUFHLGlCQUFpQixDQUFDO0FBQ25DLDhDQUFhLEdBQUcsZ0JBQWdCLENBQUM7Z0hBRnRDLGdDQUFnQztxRUFBaEMsZ0NBQWdDOzs7Ozs7OztRQy9DN0MsZ0NBQ0k7UUFDQSxtSUFDSTtRQThJSixtR0FDSTtRQUdKLG1HQUNJO1FBR0osbUdBQ0k7UUFHSixtR0FDSTtRQUVSLDBCQUFlOztRQWhLRCxvQ0FBa0I7UUFpSmQsZUFBOEM7UUFBOUMscUVBQThDO1FBSTlDLGVBQThDO1FBQTlDLHFFQUE4QztRQUk5QyxlQUErQztRQUEvQyxzRUFBK0M7UUFJL0MsZUFBNEM7UUFBNUMsbUVBQTRDO201R0RuSTlDO1lBQ1IsT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDaEIsS0FBSyxDQUNELE1BQU0sRUFDTixLQUFLLENBQUM7b0JBQ0YsT0FBTyxFQUFFLENBQUM7b0JBQ1YsU0FBUyxFQUFFLFVBQVU7aUJBQ3hCLENBQUMsQ0FDTDtnQkFDRCxLQUFLLENBQ0QsTUFBTSxFQUNOLEtBQUssQ0FBQztvQkFDRixPQUFPLEVBQUUsQ0FBQztvQkFDVixTQUFTLEVBQUUsVUFBVTtpQkFDeEIsQ0FBQyxDQUNMO2dCQUNELFVBQVUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3JELFVBQVUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3ZELENBQUM7U0FDTDtrREFFUSxnQ0FBZ0M7Y0ExQjVDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztnQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRTtvQkFDUixPQUFPLENBQUMsVUFBVSxFQUFFO3dCQUNoQixLQUFLLENBQ0QsTUFBTSxFQUNOLEtBQUssQ0FBQzs0QkFDRixPQUFPLEVBQUUsQ0FBQzs0QkFDVixTQUFTLEVBQUUsVUFBVTt5QkFDeEIsQ0FBQyxDQUNMO3dCQUNELEtBQUssQ0FDRCxNQUFNLEVBQ04sS0FBSyxDQUFDOzRCQUNGLE9BQU8sRUFBRSxDQUFDOzRCQUNWLFNBQVMsRUFBRSxVQUFVO3lCQUN4QixDQUFDLENBQ0w7d0JBQ0QsVUFBVSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDckQsVUFBVSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQ3ZELENBQUM7aUJBQ0w7YUFDSjt3SkFLWSxHQUFHO2tCQUFYLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFJRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFFSSxZQUFZO2tCQUFyQixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUVjLE1BQU07a0JBQTFCLFNBQVM7bUJBQUMsUUFBUTtZQUNHLE9BQU87a0JBQTVCLFNBQVM7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgTEFZT1VUX1RZUEUsIFNUWUxFX1RZUEUsIEN1c3RvbWl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5cclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlcC1xdWFudGl0eS1zZWxlY3RvcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcXVhbnRpdHktc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcXVhbnRpdHktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIHRyaWdnZXIoJ3Nob3dIaWRlJywgW1xyXG4gICAgICAgICAgICBzdGF0ZShcclxuICAgICAgICAgICAgICAgICdzaG93JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHN0YXRlKFxyXG4gICAgICAgICAgICAgICAgJ2hpZGUnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignc2hvdyA9PiBoaWRlJywgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnKSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2hpZGUgPT4gc2hvdycsIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nKSksXHJcbiAgICAgICAgXSksXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaVF1YW50aXR5U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgRU5URVJfQ0hJTERSRU4gPSAnW0VudGVyQ2hpbGRyZW5dJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRU5URVJfUEFDS0FHRSA9ICdbRW50ZXJQYWNrYWdlXSc7XHJcblxyXG4gICAgQElucHV0KCkga2V5ID0gJyc7XHJcbiAgICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xyXG4gICAgQElucHV0KCkgZm9ybWF0dGVkVmFsdWUgPSAnJztcclxuICAgIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgICBASW5wdXQoKSB0eXBlID0gJ3FzJztcclxuICAgIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHRleHRDb2xvciA9ICcnO1xyXG4gICAgQElucHV0KCkgeEFsaWdubWVudCA9ICcwJztcclxuICAgIEBJbnB1dCgpIHJvd1NwYW4gPSAxO1xyXG4gICAgQElucHV0KCkgbGFzdEZvY3VzRmllbGQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGFsb3dEZWNpbWFsID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBhZGRpdGlvbmFsVmFsdWUgPSAnJztcclxuICAgIEBJbnB1dCgpIG5vdGlmaWNhdGlvbkluZm86IGFueTtcclxuXHJcbiAgICBjb250cm9sVHlwZSA9ICdxcyc7XHJcblxyXG4gICAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBsYXlvdXRUeXBlOiBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtO1xyXG4gICAgQElucHV0KCkgaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ1FTQ29udCcpIFFTQ29udDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ1FTSW5wdXQnKSBRU0lucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIExBWU9VVF9UWVBFID0gTEFZT1VUX1RZUEU7XHJcbiAgICBzdGFuZEFsb25lID0gZmFsc2U7XHJcbiAgICBpc0ZvY3VzID0gZmFsc2U7XHJcbiAgICBpc01hdHJpeEZvY3VzID0gZmFsc2U7XHJcblxyXG4gICAgaXNDYXV0aW9uID0gZmFsc2U7XHJcbiAgICBtZXNzYWdlczogQXJyYXk8YW55PiA9IG51bGw7XHJcbiAgICBzaG93UXNCdG4gPSBmYWxzZTtcclxuICAgIHJlc2l6ZTogYW55O1xyXG5cclxuICAgIHNhbWVFbGVtZW50SW5UaGVXYW50ZWRSb3cgPSBudWxsO1xyXG4gICAgU1RZTEVfVFlQRSA9IFNUWUxFX1RZUEU7XHJcbiAgICBzdHlsZUNsYXNzID0gU1RZTEVfVFlQRS5TdHJvbmc7XHJcbiAgICBpc0VtcHR5S2V5ID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjdXN0b21pemF0aW9uU2VydmljZTogQ3VzdG9taXphdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZlxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eUtleSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhbmRBbG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuZ2V0RGVmYXVsdEZyb21Hcm91cCh0aGlzLmtleSwgdGhpcy52YWx1ZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5yZWFkb25seSwgdGhpcy5kaXNhYmxlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdHRlZFZhbHVlIHx8IHRoaXMudmFsdWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDdXN0b21pemF0aW9uU2VydmljZS5TVEFORF9BTE9ORV9GSUVMRF9DTEFTU19OQU1FKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UXNWaWV3KCk7XHJcbiAgICAgICAgLy8gVE9ETzpcclxuICAgICAgICAvLyBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAvLyB0aGlzLnJlc2l6ZSA9IE9ic2VydmFibGUuZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAgICAgLy8gICAgIC5kZWJvdW5jZVRpbWUoMTAwKVxyXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgc2VsZi5zZXRRc1ZpZXcoKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzpcclxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRRc1ZpZXcoKTtcclxuICAgICAgICB9LCAxMjUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIEJ1ZyBmaXggZm9yIGFkZG9ucyB3aGVuIHRoZSBrZXkgaXMgJycgaW4gdGhlIG5nT25Jbml0IGZvciBzb21lIHJlc29uXHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eUtleSAmJiB0aGlzLmtleSAhPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS5nZXREZWZhdWx0RnJvbUdyb3VwKHRoaXMua2V5LCB0aGlzLnZhbHVlLCB0aGlzLnJlcXVpcmVkLCB0aGlzLnJlYWRvbmx5LCB0aGlzLmRpc2FibGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNDYXV0aW9uID0gdGhpcy50ZXh0Q29sb3IgPT09ICcjRkYwMDAwJztcclxuXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLm5vdGlmaWNhdGlvbkluZm8gJiYgdGhpcy5ub3RpZmljYXRpb25JbmZvLmxlbmd0aCA+IDAgPyBKU09OLnBhcnNlKHRoaXMubm90aWZpY2F0aW9uSW5mbykuTWVzc2FnZXMgOiAnJztcclxuICAgICAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBtc2cga2V5cy5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgbWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtc2cuS2V5ID09PSAnSW52ZW50b3J5X0xpbWl0X01zZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBtc2cuS2V5ID0gJ01FU1NBR0VTLkVSUk9SX0lOVkVOVE9SWV9MSU1JVCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1zZy5LZXkgPT09ICdDYXNlX1F1YW50aXR5X0xpbWl0X01zZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBtc2cuS2V5ID0gJ01FU1NBR0VTLkVSUk9SX0NBU0VfUVVBTlRJVFlfTElNSVQnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtc2cuS2V5ID09PSAnTWluX1F1YW50aXR5X0xpbWl0X01zZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBtc2cuS2V5ID0gJ01FU1NBR0VTLkVSUk9SX01JTl9RVUFOVElUWV9MSU1JVCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1zZy5LZXkgPT09ICdNYXhfUXVhbnRpdHlfTGltaXRfTXNnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1zZy5LZXkgPSAnTUVTU0FHRVMuRVJST1JfTUFYX1FVQU5USVRZX0xJTUlUJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmllbGRDb250cm9sID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcclxuICAgICAgICAgICAgZmllbGRDb250cm9sLnNldEVycm9ycyh7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJFcnJvcjogJ0Vycm9yJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuUVNJbnB1dCAmJiB0aGlzLlFTSW5wdXQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUVNJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDE1MCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubGFzdEZvY3VzRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxhc3RGb2N1c0ZpZWxkLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXN0Rm9jdXNGaWVsZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZm9jdXNUb1RoZVNhbWVFbGVtZW50SW5UaGVXYW50ZWRSb3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52YWx1ZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudENsaWNrZWQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldEFkZGl0aW9uYWxWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZGl0aW9uYWxWYWx1ZS5sZW5ndGggPiAwID8gJ3Nob3cnIDogJ2hpZGUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNhbWVFbGVtZW50SW5UaGVXYW50ZWRSb3dCeUNsYXNzTmFtZShldmVudDogYW55LCBpc05leHQgPSB0cnVlKTogYW55IHtcclxuICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xyXG4gICAgICAgIGxldCBzYW1lRWxlbWVudEluVGhlV2FudGVkUm93QnlDbGFzc05hbWU7XHJcblxyXG4gICAgICAgIGxldCBwYXJlbnRTZWxlY3RvcjtcclxuICAgICAgICBpZiAodGhpcy5sYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpVGFibGUpIHtcclxuICAgICAgICAgICAgcGFyZW50U2VsZWN0b3IgPSBzYW1lRWxlbWVudEluVGhlV2FudGVkUm93QnlDbGFzc05hbWUgPSAkKGV2ZW50VGFyZ2V0KS5wYXJlbnRzKCcudGFibGUtcm93Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlDYXJkKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFNlbGVjdG9yID0gc2FtZUVsZW1lbnRJblRoZVdhbnRlZFJvd0J5Q2xhc3NOYW1lID0gJChldmVudFRhcmdldCkucGFyZW50cygnLmNhcmQtdmlldycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcmVudFNlbGVjdG9yLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50U2VsZWN0b3IgPSBzYW1lRWxlbWVudEluVGhlV2FudGVkUm93QnlDbGFzc05hbWUgPSAkKGV2ZW50VGFyZ2V0KS5wYXJlbnRzKCcubGluZS12aWV3Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc05leHQpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmVudFNlbGVjdG9yLmlzKCc6bGFzdC1jaGlsZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1lRWxlbWVudEluVGhlV2FudGVkUm93QnlDbGFzc05hbWUgPSBwYXJlbnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnW25hbWU9JyArIHRoaXMua2V5ICsgJ10nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNhbWVFbGVtZW50SW5UaGVXYW50ZWRSb3dCeUNsYXNzTmFtZSA9IHBhcmVudFNlbGVjdG9yLm5leHQoKS5maW5kKCdbbmFtZT0nICsgdGhpcy5rZXkgKyAnXScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHBhcmVudFNlbGVjdG9yLmlzKCc6Zmlyc3QtY2hpbGQnKSkge1xyXG4gICAgICAgICAgICAgICAgc2FtZUVsZW1lbnRJblRoZVdhbnRlZFJvd0J5Q2xhc3NOYW1lID0gcGFyZW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5sYXN0KClcclxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnW25hbWU9JyArIHRoaXMua2V5ICsgJ10nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNhbWVFbGVtZW50SW5UaGVXYW50ZWRSb3dCeUNsYXNzTmFtZSA9IHBhcmVudFNlbGVjdG9yLnByZXYoKS5maW5kKCdbbmFtZT0nICsgdGhpcy5rZXkgKyAnXScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2FtZUVsZW1lbnRJblRoZVdhbnRlZFJvd0J5Q2xhc3NOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNhbWVFbGVtZW50SW5UaGVXYW50ZWRSb3coZXZlbnQ6IGFueSwgaXNOZXh0ID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5hdmlnYXRlIHRvIHRoZSBRUyBpbiB0aGUgbmV4dCByb3cuXHJcbiAgICAgICAgLy8gY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zYW1lRWxlbWVudEluVGhlV2FudGVkUm93ID0gdGhpcy5nZXRTYW1lRWxlbWVudEluVGhlV2FudGVkUm93QnlDbGFzc05hbWUoZXZlbnQsIGlzTmV4dCk7XHJcbiAgICAgICAgdGhpcy5RU0lucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzVG9UaGVTYW1lRWxlbWVudEluVGhlV2FudGVkUm93KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNhbWVFbGVtZW50SW5UaGVXYW50ZWRSb3cpIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyByZWd1bGFyIGl0ZW0gKHFzIGFuZCBub3QgYnV0dG9uKSAuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNhbWVFbGVtZW50SW5UaGVXYW50ZWRSb3cuaXMoJ2lucHV0JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2FtZUVsZW1lbnRJblRoZVdhbnRlZFJvdy5jbGljaygpLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYW1lRWxlbWVudEluVGhlV2FudGVkUm93LnBhcmVudCgpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhbWVFbGVtZW50SW5UaGVXYW50ZWRSb3cuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNhbWVFbGVtZW50SW5UaGVXYW50ZWRSb3cgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhbkVycm9yKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkQ29udHJvbCA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XHJcblxyXG4gICAgICAgIC8vIENsZWFuIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZXMgJiYgdGhpcy5tZXNzYWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLm5vdGlmaWNhdGlvbkluZm8gPSBudWxsO1xyXG4gICAgICAgICAgICBmaWVsZENvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1hdHJpeE1vdXNlRW50ZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNNYXRyaXhGb2N1cyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25NYXRyaXhNb3VzZWxlYXZlKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzTWF0cml4Rm9jdXMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1hdHJpeENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzRm9jdXMgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5RU0lucHV0ICYmIHRoaXMuUVNJbnB1dC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuUVNJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTWF0cml4Qmx1cihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ3FzJykgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNYXRyaXhGb2N1cyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vbkJsdXIoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNGb2N1cyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNsZWFuRXJyb3IoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiBldmVudDtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlRmxvYXQodGhpcy52YWx1ZSkgIT09IHBhcnNlRmxvYXQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLnVwZGF0ZUZvcm1GaWVsZFZhbHVlKHRoaXMuZm9ybSwgdGhpcy5rZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMudmFsdWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUb1RoZVNhbWVFbGVtZW50SW5UaGVXYW50ZWRSb3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVmFsdWUodmFsdWU6IGFueSwgbGFzdEZvY3VzZWRGaWVsZDogYW55ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQoeyBhcGlOYW1lOiB0aGlzLmtleSwgdmFsdWUsIGNvbnRyb2xUeXBlOiB0aGlzLmNvbnRyb2xUeXBlLCBsYXN0Rm9jdXNlZEZpZWxkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlbWVudChldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YW5kQWxvbmUpIHtcclxuICAgICAgICAgICAgbGV0IHRtcCA9IHBhcnNlRmxvYXQodGhpcy52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9ICgrK3RtcCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS51cGRhdGVGb3JtRmllbGRWYWx1ZSh0aGlzLmZvcm0sIHRoaXMua2V5LCB0aGlzLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMucHJvcGFnYXRlQ2hhbmdlKCcrJyk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSgnKycsIG51bGwpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY3JlbWVudChldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YW5kQWxvbmUpIHtcclxuICAgICAgICAgICAgbGV0IHRtcCA9IHBhcnNlRmxvYXQodGhpcy52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9ICgtLXRtcCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS51cGRhdGVGb3JtRmllbGRWYWx1ZSh0aGlzLmZvcm0sIHRoaXMua2V5LCB0aGlzLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMucHJvcGFnYXRlQ2hhbmdlKCctJyk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSgnLScsIG51bGwpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyQ2hpbGRyZW4oZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRDbGlja2VkLmVtaXQoeyBhcGlOYW1lOiBQZXBwZXJpUXVhbnRpdHlTZWxlY3RvckNvbXBvbmVudC5FTlRFUl9DSElMRFJFTiwgZXZlbnRXaGljaDogZXZlbnQud2hpY2ggfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXJQYWNrYWdlKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Q2xpY2tlZC5lbWl0KHtcclxuICAgICAgICAgICAgYXBpTmFtZTogUGVwcGVyaVF1YW50aXR5U2VsZWN0b3JDb21wb25lbnQuRU5URVJfUEFDS0FHRSxcclxuICAgICAgICAgICAgZXZlbnRXaGljaDogZXZlbnQud2hpY2gsIG90aGVyRGF0YTogdGhpcy5ub3RpZmljYXRpb25JbmZvXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UXNWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLkVkaXRtb2RhbCB8fFxyXG4gICAgICAgICAgICB0aGlzLmxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlDYXJkICYmIHRoaXMucm93U3BhbiA8PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1FzQnRuID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuUVNDb250ICYmIHRoaXMuUVNDb250Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1FzQnRuID0gdGhpcy5RU0NvbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA+IDE0MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2V0IHN0YXRlIGNsYXNzIGZyb20gdGhlbWUuXHJcbiAgICAgICAgLy8gdGhpcy5zdHlsZUNsYXNzID0gdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS5nZXRUaGVtZVZhcmlhYmxlKEN1c3RvbWl6YXRpb25TZXJ2aWNlLlNUWUxFX1FTX0tFWSk7XHJcbiAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoQ3VzdG9taXphdGlvblNlcnZpY2UuU1RZTEVfUVNfS0VZKSBhcyBTVFlMRV9UWVBFO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2RbJ2Rlc3Ryb3llZCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVByZXNzKGV2ZW50KTogYW55IHtcclxuICAgICAgICBsZXQgaW5wdXRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5jaGFyQ29kZSk7XHJcbiAgICAgICAgY29uc3Qga2V5Ym9hcmRFdmVudCA9IGV2ZW50IGFzIEtleWJvYXJkRXZlbnQ7XHJcblxyXG4gICAgICAgIGlmIChrZXlib2FyZEV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2FtZUVsZW1lbnRJblRoZVdhbnRlZFJvdyhrZXlib2FyZEV2ZW50LCAha2V5Ym9hcmRFdmVudC5zaGlmdEtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVE9ETzogTWFrZSBpdCBvbmUgZnVuY3Rpb24gbGlrZSBpbiBQZXBwZXJpVGV4dGJveENvbXBvbmVudFxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgLypbOCwgOSwgMjcsIDEzLCAxOTBdLmluZGV4T2Yoa2V5Ym9hcmRFdmVudC5rZXlDb2RlKSAhPT0gLTEgfHwqL1xyXG4gICAgICAgICAgICAvLyBBbGxvdzogQ3RybCtBXHJcbiAgICAgICAgICAgIChrZXlib2FyZEV2ZW50LmtleUNvZGUgPT09IDY1ICYmIGtleWJvYXJkRXZlbnQuY3RybEtleSA9PT0gdHJ1ZSkgfHxcclxuICAgICAgICAgICAgLy8gQWxsb3c6IEN0cmwrQ1xyXG4gICAgICAgICAgICAoa2V5Ym9hcmRFdmVudC5rZXlDb2RlID09PSA2NyAmJiBrZXlib2FyZEV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHx8XHJcbiAgICAgICAgICAgIC8vIEFsbG93OiBDdHJsK1ZcclxuICAgICAgICAgICAgKGtleWJvYXJkRXZlbnQua2V5Q29kZSA9PT0gODYgJiYga2V5Ym9hcmRFdmVudC5jdHJsS2V5ID09PSB0cnVlKSB8fFxyXG4gICAgICAgICAgICAvLyBBbGxvdzogQ3RybCtYXHJcbiAgICAgICAgICAgIChrZXlib2FyZEV2ZW50LmtleUNvZGUgPT09IDg4ICYmXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZEV2ZW50LmN0cmxLZXkgPT09IHRydWUpIC8qfHxcclxuICAgICAgICAgICAgLy8gQWxsb3c6IGhvbWUsIGVuZCwgbGVmdCwgcmlnaHRcclxuICAgICAgICAgICAgKGtleWJvYXJkRXZlbnQua2V5Q29kZSA+PSAzNSAmJiBrZXlib2FyZEV2ZW50LmtleUNvZGUgPD0gMzkpKi9cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gbGV0IGl0IGhhcHBlbiwgZG9uJ3QgZG8gYW55dGhpbmdcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hbG93RGVjaW1hbCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWNQb2ludCA9ICcuJztcclxuICAgICAgICAgICAgY29uc3QgdGhvdXNhbmRTZXBhcmF0b3IgPSAnLCc7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSAvXlxcZFtcXGQsXSooXFwuXFxkKyk/JC87XHJcbiAgICAgICAgICAgIGlmIChrZXlib2FyZEV2ZW50LmtleUNvZGUgPT09IDQ2KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dENoYXIgPSBpbnB1dENoYXIgKyAnMCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Ym9hcmRFdmVudC5rZXlDb2RlID09PSA0NCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDaGFyID0gaW5wdXRDaGFyICsgJzAwMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuLnRlc3QoZXZlbnQudGFyZ2V0LnZhbHVlICsgaW5wdXRDaGFyKSkge1xyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IC9bMC05XFwrXFwtXFwgXS87XHJcbiAgICAgICAgICAgIGlmICghcGF0dGVybi50ZXN0KGlucHV0Q2hhcikpIHtcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgPCEtLSBOZXcgY29kZSAtLT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjcGVwcGVyaVRlbXBsYXRlPlxyXG4gICAgICAgIDxkaXYgI1FTQ29udCBjbGFzcz1cInBlcHBlcmktcXVhbnRpdHktc2VsZWN0b3ItY29udGFpbmVyIHt7IHN0eWxlQ2xhc3MgfX1cIiBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgICAgICAgICAncGVwcGVyaS10YWJsZS1xdWFudGl0eS1zZWxlY3Rvcic6IGxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlUYWJsZSxcclxuICAgICAgICAgICAgICAgICdvbmUtcm93Jzogcm93U3BhbiA9PT0gMSxcclxuICAgICAgICAgICAgICAgIGNhdXRpb246IGlzQ2F1dGlvbixcclxuICAgICAgICAgICAgICAgICdtYXRyaXgtcXMnOiB0eXBlID09PSAncXNGb3JNYXRyaXgnLFxyXG4gICAgICAgICAgICAgICAgJ3plcm8tcXVhbnRpdHknOiBmb3JtYXR0ZWRWYWx1ZSA9PT0gJzAnXHJcbiAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgPHBlcC1maWVsZC10aXRsZSAqbmdJZj1cImxheW91dFR5cGUgIT09IExBWU9VVF9UWVBFLlBlcHBlcmlUYWJsZSAmJiBsYXlvdXRUeXBlICE9PSBMQVlPVVRfVFlQRS5QZXBwZXJpQ2FyZFwiXHJcbiAgICAgICAgICAgICAgICBbbGFiZWxdPVwibGFiZWxcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICBbeEFsaWdubWVudF09XCJ4QWxpZ25tZW50XCI+XHJcbiAgICAgICAgICAgIDwvcGVwLWZpZWxkLXRpdGxlPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT0gJ3FzJ1wiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlYWRvbmx5OyB0aGVuIHJlYWRvbmx5QmxvY2s7IGVsc2UgZWRpdGFibGVRU0Jsb2NrXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3JlYWRvbmx5QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbaWRdPVwia2V5XCIgbWF0LWJ1dHRvbiBjbGFzcz1cInBlcHBlcmktYnV0dG9uIHt7IHN0eWxlQ2xhc3MgfX0gZWxsaXBzaXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7Y2F1dGlvbjogaXNDYXV0aW9uLCBtZDogcm93U3BhbiAhPT0gMSwgeHM6IHJvd1NwYW4gPT09IDF9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJ7eyBmb3JtYXR0ZWRWYWx1ZSB9fVwiIGRpc2FibGVkPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBmb3JtYXR0ZWRWYWx1ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZWRpdGFibGVRU0Jsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRlY2ltYWxOdW1iZXJcIiBpbnB1dG1vZGU9XCJkZWNpbWFsXCIgbWF0SW5wdXQgI1FTSW5wdXQgbmFtZT1cInt7IGtleSB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvZHktbGcgZWxsaXBzaXNcIiB0aXRsZT1cInt7IGZvcm1hdHRlZFZhbHVlIH19XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgW2lkXT1cImtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiaXNGb2N1cyA/ICh2YWx1ZSB8IHF1YW50aXR5U2VsZWN0b3JOdW1iZXI6IGFsb3dEZWNpbWFsKSA6IGZvcm1hdHRlZFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChrZXlwcmVzcyk9XCJvbktleVByZXNzKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC50YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5KVwiIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd1FzQnRuXCIgbWF0LWJ1dHRvbiBtYXRQcmVmaXggKGNsaWNrKT1cImRlY3JlbWVudCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGVwcGVyaS1idXR0b24gaWNvbi1idXR0b24gc20gd2VhayBxcy1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2NhdXRpb246IGlzQ2F1dGlvbiAmJiBzdHlsZUNsYXNzICE9PSBTVFlMRV9UWVBFLlN0cm9uZywgJ2tlZXAtYmFja2dyb3VuZC1vbi1mb2N1cyc6IHN0eWxlQ2xhc3MgPT09IFNUWUxFX1RZUEUuU3Ryb25nfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwZXAtaWNvbiBuYW1lPVwibnVtYmVyX21pbnVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxzdmcgW3BlcFN2Z0ljb25dPVwiJ251bWJlci1taW51cydcIj48L3N2Zz4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dRc0J0blwiIG1hdC1idXR0b24gbWF0U3VmZml4IChjbGljayk9XCJpbmNyZW1lbnQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBlcHBlcmktYnV0dG9uIGljb24tYnV0dG9uIHNtIHdlYWsgcXMtYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntjYXV0aW9uOiBpc0NhdXRpb24gJiYgc3R5bGVDbGFzcyAhPT0gU1RZTEVfVFlQRS5TdHJvbmcsICdrZWVwLWJhY2tncm91bmQtb24tZm9jdXMnOiBzdHlsZUNsYXNzID09PSBTVFlMRV9UWVBFLlN0cm9uZ31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cIm51bWJlcl9wbHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxzdmcgW3BlcFN2Z0ljb25dPVwiJ251bWJlci1wbHVzJ1wiPjwvc3ZnPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwibWVzc2FnZXM/Lmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicXMtZXJyb3IgYm9keS14c1wiICpuZ0Zvcj1cImxldCBtc2cgb2YgbWVzc2FnZXNcIj4ge3sgbXNnLktleSB8IHRyYW5zbGF0ZSB9fSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbXNnLlZhbHVlIH19IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT0gJ3FzRm9yTWF0cml4J1wiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlYWRvbmx5OyB0aGVuIHJlYWRvbmx5QmxvY2s7IGVsc2UgZWRpdGFibGVRU0Jsb2NrXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3JlYWRvbmx5QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbaWRdPVwia2V5XCIgbWF0LWJ1dHRvbiBjbGFzcz1cInBlcHBlcmktYnV0dG9uIHt7IHN0eWxlQ2xhc3MgfX0gZGlzYWJsZWRcIiBkaXNhYmxlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7Y2F1dGlvbjogaXNDYXV0aW9uLCBtZDogcm93U3BhbiAhPT0gMSwgeHM6IHJvd1NwYW4gPT09IDF9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2VkaXRhYmxlUVNCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwiYm9keS1zbSBhZGRpdGlvbmFsLXZhbHVlIHB1bGwtbGVmdCBmbGlwXCIgW25nQ2xhc3NdPVwieEFsaWdubWVudCA9PSAnMicgPyAncHJlZml4JyA6ICdzdWZmaXgnXCIgbWF0QmFkZ2U9XCJ7eyBhZGRpdGlvbmFsVmFsdWUgfX1cIiBtYXRCYWRnZVBvc2l0aW9uPVwiYmVmb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0QmFkZ2VTaXplPVwicm93U3BhbiA9PT0gMSA/IHNtYWxsIDogbWVkaXVtXCIgW0BzaG93SGlkZV09XCJnZXRBZGRpdGlvbmFsVmFsdWVcIj48L3NwYW4+IC0tPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInhBbGlnbm1lbnQgPT0gJzInXCIgY2xhc3M9XCJib2R5LXNtIGFkZGl0aW9uYWwtdmFsdWUgcHJlZml4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0QmFkZ2U9XCJ7eyBhZGRpdGlvbmFsVmFsdWUgfX1cIiBtYXRCYWRnZVBvc2l0aW9uPVwiYmVmb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0QmFkZ2VTaXplPVwicm93U3BhbiA9PT0gMSA/IHNtYWxsIDogbWVkaXVtXCIgW0BzaG93SGlkZV09XCJnZXRBZGRpdGlvbmFsVmFsdWVcIj48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIChtb3VzZWxlYXZlKT1cIiFpc0ZvY3VzID8gb25NYXRyaXhNb3VzZWxlYXZlKCRldmVudCkgOiBudWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGVjaW1hbE51bWJlclwiIGlucHV0bW9kZT1cImRlY2ltYWxcIiBtYXRJbnB1dCAjUVNJbnB1dCBuYW1lPVwie3sga2V5IH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwie3sgZm9ybWF0dGVkVmFsdWUgfX1cIiBjbGFzcz1cImJvZHktc20gZWxsaXBzaXNcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBbaWRdPVwia2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwia2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJpc0ZvY3VzID8gKHZhbHVlIHwgcXVhbnRpdHlTZWxlY3Rvck51bWJlcjogYWxvd0RlY2ltYWwpIDogZm9ybWF0dGVkVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGtleXByZXNzKT1cIm9uS2V5UHJlc3MoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25NYXRyaXhDbGljaygkZXZlbnQpOyAkZXZlbnQudGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25NYXRyaXhCbHVyKCRldmVudClcIiAoZm9jdXMpPVwib25NYXRyaXhNb3VzZUVudGVyKCRldmVudCk7IG9uRm9jdXMoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJvbk1hdHJpeE1vdXNlRW50ZXIoJGV2ZW50KVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxzcGFuIG1hdFByZWZpeCAqbmdJZj1cInhBbGlnbm1lbnQgPT0gJzInXCIgY2xhc3M9XCJib2R5LXNtIGFkZGl0aW9uYWwtdmFsdWUgcHJlZml4XCIgbWF0QmFkZ2U9XCJ7eyBhZGRpdGlvbmFsVmFsdWUgfX1cIiBtYXRCYWRnZVBvc2l0aW9uPVwiYmVmb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdEJhZGdlU2l6ZT1cInJvd1NwYW4gPT09IDEgPyBzbWFsbCA6IG1lZGl1bVwiIFtAc2hvd0hpZGVdPVwiZ2V0QWRkaXRpb25hbFZhbHVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBtYXRTdWZmaXggKm5nSWY9XCJ4QWxpZ25tZW50ICE9ICcyJ1wiIGNsYXNzPVwiYm9keS1zbSBhZGRpdGlvbmFsLXZhbHVlIHN1ZmZpeFwiIG1hdEJhZGdlPVwie3sgYWRkaXRpb25hbFZhbHVlIH19XCIgbWF0QmFkZ2VQb3NpdGlvbj1cImJlZm9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRCYWRnZVNpemU9XCJyb3dTcGFuID09PSAxID8gc21hbGwgOiBtZWRpdW1cIiBbQHNob3dIaWRlXT1cImdldEFkZGl0aW9uYWxWYWx1ZVwiPjwvc3Bhbj4gLS0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwibWVzc2FnZXM/Lmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicXMtZXJyb3IgYm9keS14c1wiICpuZ0Zvcj1cImxldCBtc2cgb2YgbWVzc2FnZXNcIj4ge3sgbXNnLktleSB8IHRyYW5zbGF0ZSB9fSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbXNnLlZhbHVlIH19IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ4QWxpZ25tZW50ICE9ICcyJ1wiIGNsYXNzPVwiYm9keS1zbSBhZGRpdGlvbmFsLXZhbHVlIHN1ZmZpeFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdEJhZGdlPVwie3sgYWRkaXRpb25hbFZhbHVlIH19XCIgbWF0QmFkZ2VQb3NpdGlvbj1cImJlZm9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdEJhZGdlU2l6ZT1cInJvd1NwYW4gPT09IDEgPyBzbWFsbCA6IG1lZGl1bVwiIFtAc2hvd0hpZGVdPVwiZ2V0QWRkaXRpb25hbFZhbHVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSAnYnV0dG9uJ1wiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZhbHVlID09ICcwJzsgdGhlbiByZWd1bGFyQmxvY2s7IGVsc2Ugd2l0aEJhZGdlQmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjcmVndWxhckJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBuYW1lPVwie3sga2V5IH19XCIgY2xhc3M9XCJwZXBwZXJpLWJ1dHRvbiB7eyBzdHlsZUNsYXNzIH19IGVsbGlwc2lzXCIgW2lkXT1cImtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntjYXV0aW9uOiBpc0NhdXRpb24sIG1kOiByb3dTcGFuICE9PSAxLCB4czogcm93U3BhbiA9PT0gMX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiJ1FTLk9SREVSJyB8IHRyYW5zbGF0ZVwiIChjbGljayk9XCJlbnRlckNoaWxkcmVuKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJ1FTLk9SREVSJyB8IHRyYW5zbGF0ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjd2l0aEJhZGdlQmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInhBbGlnbm1lbnQgPT0gJzInOyB0aGVuIGxlZnRCYWRnZUJsb2NrOyBlbHNlIHJpZ2h0QmFkZ2VCbG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbGVmdEJhZGdlQmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRCYWRnZT1cInt7IGZvcm1hdHRlZFZhbHVlIH19XCIgbWF0QmFkZ2VQb3NpdGlvbj1cImJlZm9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF0QmFkZ2VTaXplXT1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlDYXJkICYmIHJvd1NwYW4gPT09IDEgPyAnc21hbGwnIDogJ21lZGl1bSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7IGtleSB9fVwiIGNsYXNzPVwicGVwcGVyaS1idXR0b24ge3sgc3R5bGVDbGFzcyB9fSBlbGxpcHNpcyByaWdodC1hbGlnbm1lbnRcIiBbaWRdPVwia2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntjYXV0aW9uOiBpc0NhdXRpb24sIG1kOiByb3dTcGFuICE9PSAxLCB4czogcm93U3BhbiA9PT0gMX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cIidRUy5PUkRFUicgfCB0cmFuc2xhdGVcIiAoY2xpY2spPVwiZW50ZXJDaGlsZHJlbigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAnUVMuT1JERVInIHwgdHJhbnNsYXRlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNyaWdodEJhZGdlQmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRCYWRnZT1cInt7IGZvcm1hdHRlZFZhbHVlIH19XCIgbWF0QmFkZ2VQb3NpdGlvbj1cImFmdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXRCYWRnZVNpemVdPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmQgJiYgcm93U3BhbiA9PT0gMSA/ICdzbWFsbCcgOiAnbWVkaXVtJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3sga2V5IH19XCIgY2xhc3M9XCJwZXBwZXJpLWJ1dHRvbiB7eyBzdHlsZUNsYXNzIH19IGVsbGlwc2lzIGxlZnQtYWxpZ25tZW50XCIgW2lkXT1cImtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7Y2F1dGlvbjogaXNDYXV0aW9uLCBtZDogcm93U3BhbiAhPT0gMSwgeHM6IHJvd1NwYW4gPT09IDF9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCInUVMuT1JERVInIHwgdHJhbnNsYXRlXCIgKGNsaWNrKT1cImVudGVyQ2hpbGRyZW4oJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJ1FTLk9SREVSJyB8IHRyYW5zbGF0ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09ICdwYWNrYWdlQnV0dG9uJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG5hbWU9XCJ7eyBrZXkgfX1cIiB0aXRsZT1cInt7ICdRUy5PUkRFUicgfCB0cmFuc2xhdGUgfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGVwcGVyaS1idXR0b24ge3sgc3R5bGVDbGFzcyB9fSBlbGxpcHNpc1wiIFtpZF09XCJrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntjYXV0aW9uOiBpc0NhdXRpb24sIG1kOiByb3dTcGFuICE9PSAxLCB4czogcm93U3BhbiA9PT0gMX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJlbnRlclBhY2thZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7ICdRUy5PUkRFUicgfCB0cmFuc2xhdGUgfX0gJiM0MDt7eyBmb3JtYXR0ZWRWYWx1ZSB9fSYjNDE7XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpQ2FyZFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpVGFibGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGVwcGVyaVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuRWRpdG1vZGFsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPiJdfQ==