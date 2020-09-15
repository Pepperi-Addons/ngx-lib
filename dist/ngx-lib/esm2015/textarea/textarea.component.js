import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import { DialogData, DialogDataType } from '@pepperi-addons/ngx-lib/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/dialog";
import * as i2 from "@pepperi-addons/ngx-lib";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/cdk/bidi";
import * as i7 from "@angular/material/input";
import * as i8 from "@pepperi-addons/ngx-lib/textbox-icon";
import * as i9 from "@pepperi-addons/ngx-lib/field-title";
import * as i10 from "@angular/material/button";
import * as i11 from "@angular/material/icon";
import * as i12 from "@pepperi-addons/ngx-lib/icon";
import * as i13 from "@ngx-translate/core";
const _c0 = ["input"];
function PepperiTextareaComponent_ng_template_1_pep_field_title_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-field-title", 11);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r8 = i0.ɵɵreference(4);
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("label", ctx_r7.label)("required", ctx_r7.required)("disabled", ctx_r7.disabled)("maxFieldCharacters", ctx_r7.maxFieldCharacters)("xAlignment", ctx_r7.xAlignment)("showTitle", ctx_r7.showTitle)("inputLength", _r8.value == null ? null : _r8.value.length);
} }
const _c1 = function (a1) { return { color: "textColor", "text-align": a1 }; };
function PepperiTextareaComponent_ng_template_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("height", ctx_r9.fieldHeight);
    i0.ɵɵpropertyInterpolate("title", ctx_r9.value);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(7, _c1, ctx_r9.xAlignment == "2" ? "right" : "left"))("innerHtml", i0.ɵɵpipeBind1(1, 5, ctx_r9.value), i0.ɵɵsanitizeHtml);
} }
const _c2 = function (a0, a1, a2, a3) { return { "right-alignment": a0, "one-row": a1, "stand-alone": a2, "pepperi-textarea-card-container": a3 }; };
const _c3 = function (a0) { return { "pepperi-table-textarea": a0 }; };
const _c4 = function (a0) { return { "card-one-row-icon": a0 }; };
const _c5 = function (a0) { return { field: a0 }; };
function PepperiTextareaComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_template_1_pep_field_title_1_Template, 1, 7, "pep-field-title", 4);
    i0.ɵɵelementStart(2, "mat-form-field", 5);
    i0.ɵɵelementStart(3, "textarea", 6, 7);
    i0.ɵɵlistener("blur", function PepperiTextareaComponent_ng_template_1_Template_textarea_blur_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onBlur($event); });
    i0.ɵɵtext(5, "                ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PepperiTextareaComponent_ng_template_1_div_6_Template, 2, 9, "div", 8);
    i0.ɵɵelementStart(7, "pep-textbox-icon", 9);
    i0.ɵɵlistener("iconClicked", function PepperiTextareaComponent_ng_template_1_Template_pep_textbox_icon_iconClicked_7_listener() { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.openDialog(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-error");
    i0.ɵɵelement(9, "span", 10);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const isFormView_r6 = ctx.isFormView;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(34, _c2, ctx_r1.xAlignment == "2", ctx_r1.rowSpan === 1, ctx_r1.standAlone, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", isFormView_r6);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("dir", ctx_r1.xAlignment == "2" ? "rtl" : "ltr");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(39, _c3, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("height", ctx_r1.fieldHeight);
    i0.ɵɵpropertyInterpolate("title", ctx_r1.value);
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.maxFieldCharacters > 0 ? ctx_r1.maxFieldCharacters : 99999);
    i0.ɵɵproperty("hidden", ctx_r1.readonly)("id", ctx_r1.key)("value", ctx_r1.value)("ngStyle", i0.ɵɵpureFunction1(41, _c1, ctx_r1.xAlignment == "2" ? "right" : "left"))("formControlName", ctx_r1.key)("disabled", ctx_r1.disabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.readonly);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r1.value)("label", ctx_r1.label)("type", ctx_r1.controlType)("disabled", ctx_r1.disabled)("ngClass", i0.ɵɵpureFunction1(43, _c4, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard && ctx_r1.rowSpan === 1));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r1.required && ctx_r1.value.length == 0 ? i0.ɵɵpipeBind2(10, 22, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(45, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(11, 25, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(47, _c5, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.value.length == 0 ? i0.ɵɵpipeBind2(12, 28, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(49, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(13, 31, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(51, _c5, ctx_r1.label)));
} }
function PepperiTextareaComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c6 = function () { return { isFormView: true }; };
function PepperiTextareaComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c6));
} }
function PepperiTextareaComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiTextareaComponent_ng_container_4_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c7 = function () { return { isFormView: false }; };
function PepperiTextareaComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiTextareaComponent_ng_container_4_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c7));
} }
function PepperiTextareaComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r20.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r20.label, "\u00A0");
} }
const _c8 = function (a0) { return { "self-end": a0 }; };
function PepperiTextareaComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c8, ctx_r21.value && ctx_r21.value !== ""));
} }
const _c9 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
const _c10 = function (a0) { return { "-webkit-line-clamp": a0 }; };
function PepperiTextareaComponent_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵlistener("click", function PepperiTextareaComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return !ctx_r22.disabled ? ctx_r22.cardTemplateClicked($event) : ""; });
    i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 18);
    i0.ɵɵelementStart(2, "span", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PepperiTextareaComponent_ng_container_4_ng_template_4_button_4_Template, 3, 3, "button", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap("text-align-" + ctx_r18.xAlignment);
    i0.ɵɵstyleProp("height", ctx_r18.fieldHeight);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(11, _c9, ctx_r18.rowSpan === 1, ctx_r18.isActive && !ctx_r18.disabled))("ngStyle", i0.ɵɵpureFunction1(14, _c10, ctx_r18.rowSpan));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.showTitle && ctx_r18.label != "");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r18.value);
    i0.ɵɵproperty("id", ctx_r18.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r18.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.isActive && !ctx_r18.disabled);
} }
function PepperiTextareaComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 14);
    i0.ɵɵtemplate(2, PepperiTextareaComponent_ng_container_4_ng_template_2_Template, 1, 3, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiTextareaComponent_ng_container_4_ng_template_4_Template, 5, 16, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r15 = i0.ɵɵreference(3);
    const _r17 = i0.ɵɵreference(5);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r15)("ngIfElse", _r17);
} }
function PepperiTextareaComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiTextareaComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c7));
} }
function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-textbox-icon", 32);
    i0.ɵɵlistener("iconClicked", function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_2_Template_pep_textbox_icon_iconClicked_0_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(4); return ctx_r37.openDialog(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("value", ctx_r35.value)("label", ctx_r35.label)("type", ctx_r35.controlType)("disabled", ctx_r35.disabled);
} }
function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-textbox-icon", 33);
    i0.ɵɵlistener("iconClicked", function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_3_Template_pep_textbox_icon_iconClicked_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(4); return ctx_r39.openDialog(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("value", ctx_r36.value)("label", ctx_r36.label)("type", ctx_r36.controlType)("disabled", ctx_r36.disabled);
} }
const _c11 = function (a0) { return { readonly: a0 }; };
const _c12 = function (a0, a1) { return { color: a0, "text-align": a1 }; };
function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 28);
    i0.ɵɵelement(1, "input", 29);
    i0.ɵɵtemplate(2, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_2_Template, 1, 4, "pep-textbox-icon", 30);
    i0.ɵɵtemplate(3, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_3_Template, 1, 4, "pep-textbox-icon", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("dir", ctx_r32.xAlignment == "2" ? "rtl" : "ltr");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c11, ctx_r32.disabled));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r32.value);
    i0.ɵɵproperty("id", ctx_r32.key)("ngClass", i0.ɵɵpureFunction1(13, _c11, ctx_r32.disabled))("ngStyle", i0.ɵɵpureFunction2(15, _c12, ctx_r32.textColor, ctx_r32.xAlignment == "3" ? "center" : ctx_r32.xAlignment == "2" ? "right" : "left"))("formControlName", ctx_r32.key)("value", ctx_r32.value)("disabled", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r32.disabled && ctx_r32.xAlignment == "2");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r32.disabled && (ctx_r32.xAlignment == "1" || ctx_r32.xAlignment == "0"));
} }
function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} }
function PepperiTextareaComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 14);
    i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template, 4, 18, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 0, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r31 = i0.ɵɵreference(2);
    const _r33 = i0.ɵɵreference(4);
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", (ctx_r28.value == null ? null : ctx_r28.value.length) > 0)("ngIfThen", _r31)("ngIfElse", _r33);
} }
function PepperiTextareaComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 14);
    i0.ɵɵtemplate(2, PepperiTextareaComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiTextareaComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r25 = i0.ɵɵreference(3);
    const _r27 = i0.ɵɵreference(5);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r25)("ngIfElse", _r27);
} }
function PepperiTextareaComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiTextareaComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c6));
} }
export class PepperiTextareaComponent {
    constructor(dialogService, customizationService, renderer, element) {
        this.dialogService = dialogService;
        this.customizationService = customizationService;
        this.renderer = renderer;
        this.element = element;
        this.key = '';
        this.value = '';
        this.label = '';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.textColor = '';
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.controlType = 'textarea';
        this.form = null;
        this.isActive = false;
        this.showTitle = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.valueChanged = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.fieldHeight = '';
        this.standAlone = false;
        this.isInEditMode = false;
    }
    ngOnInit() {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled, this.maxFieldCharacters);
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
        this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
    }
    ngOnChanges(changes) {
        const self = this;
        setTimeout(() => {
            if (self.lastFocusField) {
                self.lastFocusField.focus();
                self.lastFocusField = null;
            }
        }, 100);
    }
    ngOnDestroy() {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }
    onBlur(event) {
        const value = event.target ? event.target.value : event;
        this.changeValue(value, event.relatedTarget);
        setTimeout(() => {
            if (this.isInEditMode) {
                this.isInEditMode = false;
            }
        }, 0);
    }
    changeValue(value, lastFocusedField = null) {
        if (value !== this.value) {
            this.value = value;
            this.customizationService.updateFormFieldValue(this.form, this.key, value);
            this.valueChanged.emit({ apiName: this.key, value, lastFocusedField });
        }
    }
    cardTemplateClicked(event) {
        this.openDialog();
    }
    openDialog() {
        // TODO:
        const data = new DialogData({
            title: this.label,
            content: this.value,
            contentType: DialogDataType.TextArea,
            contentData: { key: this.key, disabled: this.disabled },
            showFooter: true
        });
        const config = this.dialogService.getDialogConfig({
            maxWidth: '90vw',
            maxHeight: '90vh'
        });
        const dialogRef = this.dialogService.openDefaultDialog(data, config);
        dialogRef.afterClosed().subscribe(value => {
            if (value !== undefined && value !== null) {
                this.changeValue(value);
            }
        });
    }
}
PepperiTextareaComponent.ɵfac = function PepperiTextareaComponent_Factory(t) { return new (t || PepperiTextareaComponent)(i0.ɵɵdirectiveInject(i1.DialogService), i0.ɵɵdirectiveInject(i2.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PepperiTextareaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiTextareaComponent, selectors: [["pep-textarea"]], viewQuery: function PepperiTextareaComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { key: "key", value: "value", label: "label", required: "required", disabled: "disabled", readonly: "readonly", maxFieldCharacters: "maxFieldCharacters", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", lastFocusField: "lastFocusField", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [1, "pepperi-textarea-container", 3, "ngClass"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength", 4, "ngIf"], ["appearance", "outline", 3, "dir", "ngClass"], ["matInput", "", 1, "body-sm", 3, "hidden", "id", "title", "value", "maxlength", "ngStyle", "formControlName", "disabled", "blur"], ["input", ""], ["class", "body-sm disable-text-div", 3, "title", "ngStyle", "innerHtml", "height", 4, "ngIf"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "ngClass", "iconClicked"], [1, "body-xs", 3, "title", "innerText"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength"], [1, "body-sm", "disable-text-div", 3, "title", "ngStyle", "innerHtml"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["editBlock", ""], ["readOnlyBlock", ""], [1, "pepperi-textarea-card-container", "card-flex-container", 3, "ngClass", "ngStyle", "click"], ["class", " body-xs title no-shrink", 3, "title", 4, "ngIf"], [1, "body-sm", "value", "wrap", 3, "id", "title"], ["class", "pepperi-button weak card-edit-button self-start", "mat-button", "", 3, "ngClass", 4, "ngIf"], [1, "body-xs", "title", "no-shrink", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button", "self-start", 3, "ngClass"], ["name", "system_edit"], ["selectedBlock", ""], ["notSelectedBlock", ""], ["notEmptyBlock", ""], ["emptyBlock", ""], ["appearance", "outline", 1, "pepperi-report-textarea", 3, "dir", "ngClass"], ["matInput", "", "type", "text", 1, "body-sm", "pepperi-report-input", 3, "id", "ngClass", "ngStyle", "title", "formControlName", "value", "disabled"], ["matPrefix", "", 3, "value", "label", "type", "disabled", "iconClicked", 4, "ngIf"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "iconClicked", 4, "ngIf"], ["matPrefix", "", 3, "value", "label", "type", "disabled", "iconClicked"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "iconClicked"]], template: function PepperiTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_template_1_Template, 14, 53, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PepperiTextareaComponent_ng_container_3_Template, 2, 3, "ng-container", 2);
        i0.ɵɵtemplate(4, PepperiTextareaComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(5, PepperiTextareaComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(6, PepperiTextareaComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
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
    } }, directives: [i3.NgControlStatusGroup, i3.FormGroupDirective, i4.NgIf, i4.NgClass, i5.MatFormField, i6.Dir, i7.MatInput, i3.DefaultValueAccessor, i3.MaxLengthValidator, i4.NgStyle, i3.NgControlStatus, i3.FormControlName, i8.PepperiTextboxIconComponent, i5.MatSuffix, i5.MatError, i9.PepperiFieldTitleComponent, i4.NgTemplateOutlet, i10.MatButton, i11.MatIcon, i12.PepperiIconComponent, i5.MatPrefix], pipes: [i13.TranslatePipe, i2.SafeHtmlPipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.disable-text-div[_ngcontent-%COMP%]{display:inline-block;margin:0;overflow-y:hidden;padding:.5rem 1.5rem .5rem 0;vertical-align:middle}.right-alignment[_ngcontent-%COMP%]   .disable-text-div[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'pep-textarea',
                templateUrl: './textarea.component.html',
                styleUrls: ['./textarea.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DialogService }, { type: i2.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
            type: Input
        }], value: [{
            type: Input
        }], label: [{
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
        }], form: [{
            type: Input
        }], isActive: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }], input: [{
            type: ViewChild,
            args: ['input']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUN6RCx1QkFBdUIsRUFBYyxTQUFTLEVBQ2pELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RSxPQUFPLEVBQWlCLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNEL0Usc0NBR2tCOzs7OztJQUhrQixvQ0FBZSw2QkFBQSw2QkFBQSxpREFBQSxpQ0FBQSwrQkFBQSw0REFBQTs7OztJQVkvQywwQkFHTTs7OztJQUQ2Qiw0Q0FBNEI7SUFGUiwrQ0FBbUI7SUFDdEUsaUdBQXNGLG9FQUFBOzs7Ozs7OztJQWZsRyw4QkFFSTtJQUFBLCtHQUdBO0lBQ0EseUNBRUk7SUFBQSxzQ0FLQTtJQUx5RSwrTUFBdUI7SUFLaEcsZ0NBQUE7SUFBQSxpQkFBVztJQUNYLHVGQUdBO0lBSUEsMkNBR21CO0lBRGYsNk5BQTRCO0lBQ2hDLGlCQUFtQjtJQUNuQixpQ0FDSTtJQUFBLDJCQUVzTDs7Ozs7SUFDMUwsaUJBQVk7SUFDaEIsaUJBQWlCO0lBQ3JCLGlCQUFNOzs7O0lBL0JrQyw4S0FDd0M7SUFDM0QsZUFBa0I7SUFBbEIsb0NBQWtCO0lBSUUsZUFBNkM7SUFBN0MseUVBQTZDO0lBQzlFLDRHQUFpRjtJQUtyRCxlQUE0QjtJQUE1Qiw0Q0FBNEI7SUFIcEQsK0NBQW1CO0lBQ25CLHdHQUFxRTtJ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QUNJO1FBa0NKLDJGQUNJO1FBR0osMkZBQ0k7UUF1QkosMkZBQ0k7UUEyQkosMkZBQ0k7UUFFUiwwQkFBZTs7UUFoR0Qsb0NBQWtCO1FBcUNkLGVBQThDO1FBQTlDLHFFQUE4QztRQUk5QyxlQUE4QztRQUE5QyxxRUFBOEM7UUF3QjlDLGVBQStDO1FBQS9DLHNFQUErQztRQTRCL0MsZUFBNEM7UUFBNUMsbUVBQTRDOztrREQvRWpELHdCQUF3QjtjQU5wQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDtvSkFFWSxHQUFHO2tCQUFYLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFJRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFFSSxZQUFZO2tCQUFyQixNQUFNO1lBRWEsS0FBSztrQkFBeEIsU0FBUzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uRGVzdHJveSwgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTEFZT1VUX1RZUEUsIEN1c3RvbWl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlLCBEaWFsb2dEYXRhLCBEaWFsb2dEYXRhVHlwZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2RpYWxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGVwLXRleHRhcmVhJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90ZXh0YXJlYS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlUZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkga2V5ID0gJyc7XHJcbiAgICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xyXG4gICAgQElucHV0KCkgbGFiZWwgPSAnJztcclxuICAgIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIG1heEZpZWxkQ2hhcmFjdGVyczogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgdGV4dENvbG9yID0gJyc7XHJcbiAgICBASW5wdXQoKSB4QWxpZ25tZW50ID0gJzAnO1xyXG4gICAgQElucHV0KCkgcm93U3BhbiA9IDE7XHJcbiAgICBASW5wdXQoKSBsYXN0Rm9jdXNGaWVsZDogYW55O1xyXG5cclxuICAgIGNvbnRyb2xUeXBlID0gJ3RleHRhcmVhJztcclxuXHJcbiAgICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXAgPSBudWxsO1xyXG4gICAgQElucHV0KCkgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBsYXlvdXRUeXBlOiBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtO1xyXG5cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG4gICAgZmllbGRIZWlnaHQgPSAnJztcclxuICAgIHN0YW5kQWxvbmUgPSBmYWxzZTtcclxuICAgIGlzSW5FZGl0TW9kZSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGN1c3RvbWl6YXRpb25TZXJ2aWNlOiBDdXN0b21pemF0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhbmRBbG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuZ2V0RGVmYXVsdEZyb21Hcm91cChcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5LCB0aGlzLnZhbHVlLCB0aGlzLnJlcXVpcmVkLCB0aGlzLnJlYWRvbmx5LCB0aGlzLmRpc2FibGVkLCB0aGlzLm1heEZpZWxkQ2hhcmFjdGVycyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDdXN0b21pemF0aW9uU2VydmljZS5TVEFORF9BTE9ORV9GSUVMRF9DTEFTU19OQU1FKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGRIZWlnaHQgPSB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLmNhbGN1bGF0ZUZpZWxkSGVpZ2h0KHRoaXMubGF5b3V0VHlwZSwgdGhpcy5yb3dTcGFuLCB0aGlzLnN0YW5kQWxvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5sYXN0Rm9jdXNGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sYXN0Rm9jdXNGaWVsZC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sYXN0Rm9jdXNGaWVsZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogZXZlbnQ7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSwgZXZlbnQucmVsYXRlZFRhcmdldCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0luRWRpdE1vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNJbkVkaXRNb2RlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWYWx1ZSh2YWx1ZTogYW55LCBsYXN0Rm9jdXNlZEZpZWxkOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS51cGRhdGVGb3JtRmllbGRWYWx1ZSh0aGlzLmZvcm0sIHRoaXMua2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQoeyBhcGlOYW1lOiB0aGlzLmtleSwgdmFsdWUsIGxhc3RGb2N1c2VkRmllbGQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhcmRUZW1wbGF0ZUNsaWNrZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3BlbkRpYWxvZygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5EaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVE9ETzpcclxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IERpYWxvZ0RhdGEoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5sYWJlbCxcclxuICAgICAgICAgICAgY29udGVudDogdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IERpYWxvZ0RhdGFUeXBlLlRleHRBcmVhLFxyXG4gICAgICAgICAgICBjb250ZW50RGF0YTogeyBrZXk6IHRoaXMua2V5LCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9LFxyXG4gICAgICAgICAgICBzaG93Rm9vdGVyOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZGlhbG9nU2VydmljZS5nZXREaWFsb2dDb25maWcoe1xyXG4gICAgICAgICAgICBtYXhXaWR0aDogJzkwdncnLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6ICc5MHZoJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbkRlZmF1bHREaWFsb2coZGF0YSwgY29uZmlnKTtcclxuXHJcbiAgICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICAgIDwhLS0gTmV3IGNvZGUgLS0+XHJcbiAgICA8bmctdGVtcGxhdGUgI3BlcHBlcmlUZW1wbGF0ZSBsZXQtaXNGb3JtVmlldz1cImlzRm9ybVZpZXdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGVwcGVyaS10ZXh0YXJlYS1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7ICdyaWdodC1hbGlnbm1lbnQnOiB4QWxpZ25tZW50ID09ICcyJywgJ29uZS1yb3cnOiByb3dTcGFuID09PSAxLCAnc3RhbmQtYWxvbmUnOiBzdGFuZEFsb25lLFxyXG4gICAgICAgICAgICAncGVwcGVyaS10ZXh0YXJlYS1jYXJkLWNvbnRhaW5lcic6IGxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlDYXJkIH1cIj5cclxuICAgICAgICAgICAgPHBlcC1maWVsZC10aXRsZSAqbmdJZj1cImlzRm9ybVZpZXdcIiBbbGFiZWxdPVwibGFiZWxcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgW21heEZpZWxkQ2hhcmFjdGVyc109XCJtYXhGaWVsZENoYXJhY3RlcnNcIiBbeEFsaWdubWVudF09XCJ4QWxpZ25tZW50XCIgW3Nob3dUaXRsZV09XCJzaG93VGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgW2lucHV0TGVuZ3RoXT1cImlucHV0LnZhbHVlPy5sZW5ndGhcIj5cclxuICAgICAgICAgICAgPC9wZXAtZmllbGQtdGl0bGU+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGRpcj1cInt7IHhBbGlnbm1lbnQgPT0gJzInID8gJ3J0bCcgOiAnbHRyJyB9fVwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdwZXBwZXJpLXRhYmxlLXRleHRhcmVhJzogbGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlIH1cIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSAjaW5wdXQgW2hpZGRlbl09XCJyZWFkb25seVwiIFtpZF09XCJrZXlcIiBjbGFzcz1cImJvZHktc21cIiBtYXRJbnB1dCAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJ7eyB2YWx1ZSB9fVwiIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3sgbWF4RmllbGRDaGFyYWN0ZXJzID4gMCA/IG1heEZpZWxkQ2hhcmFjdGVycyA6IDk5OTk5IH19XCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7IGNvbG9yOiAndGV4dENvbG9yJywgJ3RleHQtYWxpZ24nOiB4QWxpZ25tZW50ID09ICcyJyA/ICdyaWdodCcgOiAnbGVmdCcgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJrZXlcIiBbc3R5bGUuaGVpZ2h0XT1cImZpZWxkSGVpZ2h0XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlYWRvbmx5XCIgY2xhc3M9XCJib2R5LXNtIGRpc2FibGUtdGV4dC1kaXZcIiB0aXRsZT1cInt7IHZhbHVlIH19XCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7IGNvbG9yOiAndGV4dENvbG9yJywgJ3RleHQtYWxpZ24nOiB4QWxpZ25tZW50ID09ICcyJyA/ICdyaWdodCcgOiAnbGVmdCcgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2lubmVySHRtbF09XCJ2YWx1ZSB8IHNhZmVIdG1sXCIgW3N0eWxlLmhlaWdodF09XCJmaWVsZEhlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxwZXAtdGV4dGJveC1pY29uICpuZ0lmPVwieEFsaWdubWVudCA9PSAnMidcIiBtYXRQcmVmaXggW3ZhbHVlXT1cInZhbHVlXCIgW2xhYmVsXT1cImxhYmVsXCIgW3R5cGVdPVwiY29udHJvbFR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2NhcmQtb25lLXJvdy1pY29uJzogbGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmQgJiYgcm93U3BhbiA9PT0gMSB9XCIgKGljb25DbGlja2VkKT1cIm9wZW5EaWFsb2coKVwiPlxyXG4gICAgICAgICAgICAgICAgPC9wZXAtdGV4dGJveC1pY29uPiAtLT5cclxuICAgICAgICAgICAgICAgIDxwZXAtdGV4dGJveC1pY29uIG1hdFN1ZmZpeCBbdmFsdWVdPVwidmFsdWVcIiBbbGFiZWxdPVwibGFiZWxcIiBbdHlwZV09XCJjb250cm9sVHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnY2FyZC1vbmUtcm93LWljb24nOiBsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpQ2FyZCAmJiByb3dTcGFuID09PSAxIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChpY29uQ2xpY2tlZCk9XCJvcGVuRGlhbG9nKClcIj5cclxuICAgICAgICAgICAgICAgIDwvcGVwLXRleHRib3gtaWNvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZXJyb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJib2R5LXhzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cInJlcXVpcmVkICYmIHZhbHVlLmxlbmd0aCA9PSAwID8gKCdNRVNTQUdFUy5FUlJPUl9JU19SRVFVSVJFRCcgfCB0cmFuc2xhdGU6IHsgZmllbGQ6IGxhYmVsIH0pIDogKCdNRVNTQUdFUy5FUlJPUl9JU19OT1RfVkFMSUQnIHwgdHJhbnNsYXRlOiB7IGZpZWxkOiBsYWJlbCB9KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lclRleHRdPVwicmVxdWlyZWQgJiYgdmFsdWUubGVuZ3RoID09IDAgPyAoJ01FU1NBR0VTLkVSUk9SX0lTX1JFUVVJUkVEJyB8IHRyYW5zbGF0ZTogeyBmaWVsZDogbGFiZWwgfSkgOiAoJ01FU1NBR0VTLkVSUk9SX0lTX05PVF9WQUxJRCcgfCB0cmFuc2xhdGU6IHsgZmllbGQ6IGxhYmVsIH0pXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGU7IGNvbnRleHQ6IHsgaXNGb3JtVmlldzogdHJ1ZSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmRcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNJbkVkaXRNb2RlOyB0aGVuIGVkaXRCbG9jazsgZWxzZSByZWFkT25seUJsb2NrXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNlZGl0QmxvY2s+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGU7IGNvbnRleHQ6IHsgaXNGb3JtVmlldzogZmFsc2UgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNyZWFkT25seUJsb2NrPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVwcGVyaS10ZXh0YXJlYS1jYXJkLWNvbnRhaW5lciBjYXJkLWZsZXgtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnb25lLXJvdyc6IHJvd1NwYW4gPT09IDEsICdwZXBwZXJpLWJ1dHRvbiB3ZWFrJzogaXNBY3RpdmUgJiYgIWRpc2FibGVkIH1cIlxyXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieyAnLXdlYmtpdC1saW5lLWNsYW1wJzogcm93U3BhbiB9XCIgW2NsYXNzXT1cIid0ZXh0LWFsaWduLScgKyB4QWxpZ25tZW50XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCIhZGlzYWJsZWQgPyBjYXJkVGVtcGxhdGVDbGlja2VkKCRldmVudCkgOiAnJ1wiIFtzdHlsZS5oZWlnaHRdPVwiZmllbGRIZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIHNob3dUaXRsZSAmJiBsYWJlbCAhPScnXCIgY2xhc3M9XCIgYm9keS14cyB0aXRsZSBuby1zaHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwie3sgbGFiZWwgfX1cIj57eyBsYWJlbCB9fSZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIFtpZF09XCJrZXlcIiB0aXRsZT1cInt7IHZhbHVlIH19XCIgY2xhc3M9XCJib2R5LXNtIHZhbHVlIHdyYXBcIj57eyB2YWx1ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpc0FjdGl2ZSAmJiAhZGlzYWJsZWRcIiBjbGFzcz1cInBlcHBlcmktYnV0dG9uIHdlYWsgY2FyZC1lZGl0LWJ1dHRvbiBzZWxmLXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3NlbGYtZW5kJyA6IHZhbHVlICYmIHZhbHVlICE9PSAnJ31cIiBtYXQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBlcC1pY29uIG5hbWU9XCJzeXN0ZW1fZWRpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpVGFibGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNBY3RpdmUgJiYgIWRpc2FibGVkOyB0aGVuIHNlbGVjdGVkQmxvY2s7IGVsc2Ugbm90U2VsZWN0ZWRCbG9ja1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjc2VsZWN0ZWRCbG9jaz5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZTsgY29udGV4dDogeyBpc0Zvcm1WaWV3OiBmYWxzZSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI25vdFNlbGVjdGVkQmxvY2s+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2YWx1ZT8ubGVuZ3RoID4gMDsgdGhlbiBub3RFbXB0eUJsb2NrOyBlbHNlIGVtcHR5QmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub3RFbXB0eUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgZGlyPVwie3sgeEFsaWdubWVudCA9PSAnMicgPyAncnRsJyA6ICdsdHInIH19XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBlcHBlcmktcmVwb3J0LXRleHRhcmVhXCIgW25nQ2xhc3NdPVwieyByZWFkb25seTogZGlzYWJsZWQgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwia2V5XCIgY2xhc3M9XCJib2R5LXNtIHBlcHBlcmktcmVwb3J0LWlucHV0XCIgW25nQ2xhc3NdPVwieyByZWFkb25seTogZGlzYWJsZWQgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgY29sb3I6IHRleHRDb2xvciwgJ3RleHQtYWxpZ24nOiB4QWxpZ25tZW50ID09ICczJyA/ICdjZW50ZXInIDogeEFsaWdubWVudCA9PSAnMicgPyAncmlnaHQnIDogJ2xlZnQnIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cInt7IHZhbHVlIH19XCIgW2Zvcm1Db250cm9sTmFtZV09XCJrZXlcIiB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtkaXNhYmxlZF09XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGVwLXRleHRib3gtaWNvbiAqbmdJZj1cImRpc2FibGVkICYmIHhBbGlnbm1lbnQgPT0gJzInXCIgbWF0UHJlZml4IFt2YWx1ZV09XCJ2YWx1ZVwiIFtsYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImNvbnRyb2xUeXBlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGljb25DbGlja2VkKT1cIm9wZW5EaWFsb2coKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcGVwLXRleHRib3gtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cGVwLXRleHRib3gtaWNvbiAqbmdJZj1cImRpc2FibGVkICYmICh4QWxpZ25tZW50ID09ICcxJyB8fCB4QWxpZ25tZW50ID09ICcwJylcIiBtYXRTdWZmaXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCIgW2xhYmVsXT1cImxhYmVsXCIgW3R5cGVdPVwiY29udHJvbFR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaWNvbkNsaWNrZWQpPVwib3BlbkRpYWxvZygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wZXAtdGV4dGJveC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNlbXB0eUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuRWRpdG1vZGFsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZTsgY29udGV4dDogeyBpc0Zvcm1WaWV3OiB0cnVlIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj4iXX0=