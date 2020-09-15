import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { DatetimeAdapter, MAT_DATETIME_FORMATS } from '@mat-datetimepicker/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MomentDatetimeAdapter } from '@mat-datetimepicker/moment';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/input";
import * as i8 from "@mat-datetimepicker/core";
import * as i9 from "@pepperi-addons/ngx-lib/textbox-icon";
import * as i10 from "@pepperi-addons/ngx-lib/field-title";
import * as i11 from "@angular/material/button";
import * as i12 from "@angular/material/icon";
import * as i13 from "@pepperi-addons/ngx-lib/icon";
const _c0 = ["datetimePicker"];
const _c1 = ["input"];
function PepperiDateComponent_ng_template_1_pep_textbox_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-textbox-icon", 11);
    i0.ɵɵlistener("iconClicked", function PepperiDateComponent_ng_template_1_pep_textbox_icon_9_Template_pep_textbox_icon_iconClicked_0_listener() { i0.ɵɵrestoreView(_r12); i0.ɵɵnextContext(); const _r10 = i0.ɵɵreference(12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.openDatetimePicker(_r10); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r8.value)("label", ctx_r8.label)("type", ctx_r8.type)("disabled", ctx_r8.disabled);
} }
function PepperiDateComponent_ng_template_1_pep_textbox_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-textbox-icon", 12);
    i0.ɵɵlistener("iconClicked", function PepperiDateComponent_ng_template_1_pep_textbox_icon_10_Template_pep_textbox_icon_iconClicked_0_listener() { i0.ɵɵrestoreView(_r14); i0.ɵɵnextContext(); const _r10 = i0.ɵɵreference(12); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.openDatetimePicker(_r10); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r9.value)("label", ctx_r9.label)("type", ctx_r9.type)("disabled", ctx_r9.disabled);
} }
const _c2 = function (a0, a1) { return { color: a0, "text-align": a1 }; };
const _c3 = function () { return { standalone: true }; };
const _c4 = function (a0) { return { field: a0 }; };
function PepperiDateComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 3);
    i0.ɵɵelementStart(1, "input", 4, 5);
    i0.ɵɵlistener("ngModelChange", function PepperiDateComponent_ng_template_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.dateModel = $event; })("dateChange", function PepperiDateComponent_ng_template_1_Template_input_dateChange_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.onDateChange($event); })("click", function PepperiDateComponent_ng_template_1_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r16); const _r10 = i0.ɵɵreference(12); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.openDatetimePicker(_r10); })("blur", function PepperiDateComponent_ng_template_1_Template_input_blur_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-error");
    i0.ɵɵelement(4, "span", 6);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, PepperiDateComponent_ng_template_1_pep_textbox_icon_9_Template, 1, 4, "pep-textbox-icon", 7);
    i0.ɵɵtemplate(10, PepperiDateComponent_ng_template_1_pep_textbox_icon_10_Template, 1, 4, "pep-textbox-icon", 8);
    i0.ɵɵelement(11, "mat-datetimepicker", 9, 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const showIcon_r6 = ctx.showIcon;
    const _r10 = i0.ɵɵreference(12);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r1.formattedValue);
    i0.ɵɵproperty("id", ctx_r1.key)("ngStyle", i0.ɵɵpureFunction2(27, _c2, ctx_r1.textColor, ctx_r1.xAlignment == "3" ? "center" : ctx_r1.xAlignment == "2" ? "right" : "left"))("ngModel", ctx_r1.dateModel)("ngModelOptions", i0.ɵɵpureFunction0(30, _c3))("matDatetimepicker", _r10)("min", ctx_r1.minDate)("max", ctx_r1.maxDate)("required", ctx_r1.required)("disabled", ctx_r1.disabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("title", ctx_r1.required && ctx_r1.formattedValue.length == 0 ? i0.ɵɵpipeBind2(5, 15, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(31, _c4, ctx_r1.label)) : i0.ɵɵpipeBind2(6, 18, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(33, _c4, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.formattedValue.length == 0 ? i0.ɵɵpipeBind2(7, 21, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(35, _c4, ctx_r1.label)) : i0.ɵɵpipeBind2(8, 24, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(37, _c4, ctx_r1.label)));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", showIcon_r6 && ctx_r1.xAlignment == "2");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", showIcon_r6 && ctx_r1.xAlignment == "1" || ctx_r1.xAlignment == "0");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r1.showTime ? "datetime" : "date");
} }
function PepperiDateComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c5 = function () { return { showIcon: true }; };
function PepperiDateComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "pep-field-title", 13);
    i0.ɵɵtemplate(2, PepperiDateComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r2.label)("required", ctx_r2.required)("disabled", ctx_r2.disabled)("xAlignment", ctx_r2.xAlignment)("showTitle", ctx_r2.showTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(7, _c5));
} }
function PepperiDateComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiDateComponent_ng_container_4_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c6 = function (a0) { return { "one-row": a0 }; };
const _c7 = function () { return { showIcon: false }; };
function PepperiDateComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_4_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c6, ctx_r23.rowSpan === 1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(5, _c7));
} }
function PepperiDateComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r27.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r27.label, "\u00A0");
} }
function PepperiDateComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c8 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
function PepperiDateComponent_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵlistener("click", function PepperiDateComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return !ctx_r29.disabled ? ctx_r29.cardTemplateClicked($event) : ""; });
    i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 20);
    i0.ɵɵelementStart(2, "span", 21);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PepperiDateComponent_ng_container_4_ng_template_4_button_4_Template, 3, 0, "button", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap("text-align-" + ctx_r25.xAlignment);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c8, ctx_r25.rowSpan === 1, ctx_r25.isActive && !ctx_r25.disabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r25.showTitle && ctx_r25.label != "");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r25.formattedValue);
    i0.ɵɵproperty("id", ctx_r25.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r25.formattedValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r25.isActive && !ctx_r25.disabled);
} }
function PepperiDateComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 15);
    i0.ɵɵtemplate(2, PepperiDateComponent_ng_container_4_ng_template_2_Template, 2, 6, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiDateComponent_ng_container_4_ng_template_4_Template, 5, 11, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r22 = i0.ɵɵreference(3);
    const _r24 = i0.ɵɵreference(5);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r22)("ngIfElse", _r24);
} }
function PepperiDateComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiDateComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiDateComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiDateComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 14);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c5));
} }
function PepperiDateComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c9 = function (a0) { return { readonly: a0 }; };
function PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r42.formattedValue);
    i0.ɵɵproperty("id", ctx_r42.key)("ngClass", i0.ɵɵpureFunction1(4, _c9, ctx_r42.disabled));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r42.formattedValue);
} }
function PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 30);
    i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template, 3, 6, "ng-container", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngSwitch", ctx_r39.type);
} }
function PepperiDateComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("id", ctx_r41.key);
} }
function PepperiDateComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiDateComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 15);
    i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_Template, 2, 1, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, PepperiDateComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 1, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r38 = i0.ɵɵreference(2);
    const _r40 = i0.ɵɵreference(4);
    const ctx_r35 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", (ctx_r35.formattedValue == null ? null : ctx_r35.formattedValue.length) > 0)("ngIfThen", _r38)("ngIfElse", _r40);
} }
function PepperiDateComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 15);
    i0.ɵɵtemplate(2, PepperiDateComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiDateComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r32 = i0.ɵɵreference(3);
    const _r34 = i0.ɵɵreference(5);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r32)("ngIfElse", _r34);
} }
function PepperiDateComponent_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiDateComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "pep-field-title", 13);
    i0.ɵɵtemplate(2, PepperiDateComponent_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r5.label)("required", ctx_r5.required)("disabled", ctx_r5.disabled)("xAlignment", ctx_r5.xAlignment)("showTitle", ctx_r5.showTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(7, _c5));
} }
export class PepperiDateComponent {
    constructor(element, utilitiesService, customizationService, renderer, translate, adapter) {
        this.element = element;
        this.utilitiesService = utilitiesService;
        this.customizationService = customizationService;
        this.renderer = renderer;
        this.translate = translate;
        this.adapter = adapter;
        this.key = '';
        this.value = '';
        this.formattedValue = '';
        this.label = '';
        this.type = 'date';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.textColor = '';
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.minValue = 0;
        this.maxValue = 0;
        this.controlType = 'date';
        this.form = null;
        this.isActive = false;
        this.showTitle = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.valueChanged = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.standAlone = false;
        this.isInEditMode = false;
        this.showDatepicker = false;
        this.showTime = false;
    }
    ngOnInit() {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
            this.formattedValue = this.formattedValue || this.value;
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
        this.showTime = this.type === 'datetime';
        if (this.minValue > 0) {
            this.minDate = new Date(this.minValue * 1000 * 60 * 60 * 24);
        }
        if (this.maxValue > 0) {
            this.maxDate = new Date(this.maxValue * 1000 * 60 * 60 * 24);
        }
        this.initDate();
    }
    ngOnDestroy() {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }
    initDate() {
        const culture = this.translate.getBrowserCultureLang() || 'en-US'; // this.userLang,
        this.adapter.setLocale(culture);
        if (this.value.indexOf('1900-1-1') >= 0 ||
            this.value.indexOf('1900-01-01') >= 0 ||
            this.value.indexOf('1970-1-1') >= 0 ||
            this.value.indexOf('1970-01-01') >= 0) {
            this.value = '';
            this.formattedValue = '';
            this.dateModel = null;
        }
        else {
            this.dateModel = this.utilitiesService.parseDate(this.value, this.showTime);
        }
    }
    openDatetimePicker(datetimePicker) {
        datetimePicker.opened = false;
        datetimePicker.open();
    }
    onBlur(event) {
        if (this.isInEditMode && !this.datetimePicker.opened) {
            this.isInEditMode = false;
        }
    }
    onDateChange(event) {
        let value = '';
        if (event.value != null) {
            value = this.utilitiesService.stringifyDateWithOffset(event.value.toDate(), this.showTime);
        }
        this.customizationService.updateFormFieldValue(this.form, this.key, value);
        this.valueChanged.emit({ apiName: this.key, value });
        if (this.isInEditMode) {
            setTimeout(() => {
                this.isInEditMode = false;
            }, 0);
        }
    }
    cardTemplateClicked(event) {
        const self = this;
        this.isInEditMode = true;
        setTimeout(() => {
            self.input.nativeElement.focus();
            self.openDatetimePicker(self.datetimePicker);
        }, 0);
    }
}
PepperiDateComponent.ɵfac = function PepperiDateComponent_Factory(t) { return new (t || PepperiDateComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.UtilitiesService), i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.TranslateService), i0.ɵɵdirectiveInject(i3.DateAdapter)); };
PepperiDateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiDateComponent, selectors: [["pep-date"]], viewQuery: function PepperiDateComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datetimePicker = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", minValue: "minValue", maxValue: "maxValue", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, features: [i0.ɵɵProvidersFeature([
            // CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
            // The locale would typically be provided on the root module of your application. We do it at
            // the component level here, due to limitations of our example generation script.
            // { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
            // `MatMomentDateModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
            // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
            { provide: DateAdapter, useClass: MomentDateAdapter },
            {
                provide: MAT_DATE_FORMATS,
                useValue: {
                    parse: {
                        dateInput: 'L',
                        monthInput: 'MMMM',
                        timeInput: 'LT',
                        datetimeInput: 'L LT',
                    },
                    display: {
                        dateInput: 'L',
                        monthInput: 'MMMM',
                        datetimeInput: 'L LT',
                        timeInput: 'LT',
                        monthYearLabel: 'MMM YYYY',
                        dateA11yLabel: 'LL',
                        monthYearA11yLabel: 'MMMM YYYY',
                        popupHeaderDateLabel: 'ddd, DD MMM',
                    },
                },
            },
            { provide: DatetimeAdapter, useClass: MomentDatetimeAdapter },
            // { provide: MAT_DATETIME_FORMATS, useValue: MAT_NATIVE_DATETIME_FORMATS }
            {
                provide: MAT_DATETIME_FORMATS,
                useValue: {
                    parse: {
                        dateInput: 'L',
                        monthInput: 'MMMM',
                        timeInput: 'LT',
                        datetimeInput: 'L LT',
                    },
                    display: {
                        dateInput: 'L',
                        monthInput: 'MMMM',
                        datetimeInput: 'L LT',
                        timeInput: 'LT',
                        monthYearLabel: 'MMM YYYY',
                        dateA11yLabel: 'LL',
                        monthYearA11yLabel: 'MMMM YYYY',
                        popupHeaderDateLabel: 'ddd, DD MMM',
                    },
                },
            },
        ])], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "false", 1, "body-sm", 3, "id", "title", "ngStyle", "ngModel", "ngModelOptions", "matDatetimepicker", "min", "max", "required", "disabled", "ngModelChange", "dateChange", "click", "blur"], ["input", ""], [1, "body-xs", 3, "title", "innerText"], ["matPrefix", "", 3, "value", "label", "type", "disabled", "iconClicked", 4, "ngIf"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "iconClicked", 4, "ngIf"], ["openOnFocus", "false", "touchUi", "true", "timeInterval", "1", 3, "type"], ["datetimePicker", ""], ["matPrefix", "", 3, "value", "label", "type", "disabled", "iconClicked"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "iconClicked"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["editBlock", ""], ["readOnlyBlock", ""], [3, "ngClass"], [1, "pepperi-card-input", "card-flex-container", 3, "ngClass", "click"], ["class", "body-xs title", 3, "title", 4, "ngIf"], [1, "body-sm", "value", 3, "id", "title"], ["class", "pepperi-button weak card-edit-button", "mat-button", "", 4, "ngIf"], [1, "body-xs", "title", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button"], ["name", "system_edit"], ["selectedBlock", ""], ["notSelectedBlock", ""], ["notEmptyBlock", ""], ["emptyBlock", ""], [3, "ngSwitch"], [4, "ngSwitchDefault"], [1, "body-sm", "pepperi-report-input", 3, "id", "ngClass", "title"], [3, "id"]], template: function PepperiDateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PepperiDateComponent_ng_template_1_Template, 13, 39, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PepperiDateComponent_ng_container_3_Template, 3, 8, "ng-container", 2);
        i0.ɵɵtemplate(4, PepperiDateComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(5, PepperiDateComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(6, PepperiDateComponent_ng_container_6_Template, 3, 8, "ng-container", 2);
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
    } }, directives: [i4.NgControlStatusGroup, i4.FormGroupDirective, i5.NgIf, i6.MatFormField, i7.MatInput, i4.DefaultValueAccessor, i8.MatDatetimepickerInput, i5.NgStyle, i4.NgControlStatus, i4.NgModel, i4.RequiredValidator, i6.MatError, i8.MatDatetimepicker, i9.PepperiTextboxIconComponent, i6.MatPrefix, i6.MatSuffix, i10.PepperiFieldTitleComponent, i5.NgTemplateOutlet, i5.NgClass, i11.MatButton, i12.MatIcon, i13.PepperiIconComponent, i5.NgSwitch, i5.NgSwitchDefault], pipes: [i2.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiDateComponent, [{
        type: Component,
        args: [{
                selector: 'pep-date',
                templateUrl: './date.component.html',
                styleUrls: ['./date.component.scss'],
                providers: [
                    // CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
                    // The locale would typically be provided on the root module of your application. We do it at
                    // the component level here, due to limitations of our example generation script.
                    // { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    { provide: DateAdapter, useClass: MomentDateAdapter },
                    {
                        provide: MAT_DATE_FORMATS,
                        useValue: {
                            parse: {
                                dateInput: 'L',
                                monthInput: 'MMMM',
                                timeInput: 'LT',
                                datetimeInput: 'L LT',
                            },
                            display: {
                                dateInput: 'L',
                                monthInput: 'MMMM',
                                datetimeInput: 'L LT',
                                timeInput: 'LT',
                                monthYearLabel: 'MMM YYYY',
                                dateA11yLabel: 'LL',
                                monthYearA11yLabel: 'MMMM YYYY',
                                popupHeaderDateLabel: 'ddd, DD MMM',
                            },
                        },
                    },
                    { provide: DatetimeAdapter, useClass: MomentDatetimeAdapter },
                    // { provide: MAT_DATETIME_FORMATS, useValue: MAT_NATIVE_DATETIME_FORMATS }
                    {
                        provide: MAT_DATETIME_FORMATS,
                        useValue: {
                            parse: {
                                dateInput: 'L',
                                monthInput: 'MMMM',
                                timeInput: 'LT',
                                datetimeInput: 'L LT',
                            },
                            display: {
                                dateInput: 'L',
                                monthInput: 'MMMM',
                                datetimeInput: 'L LT',
                                timeInput: 'LT',
                                monthYearLabel: 'MMM YYYY',
                                dateA11yLabel: 'LL',
                                monthYearA11yLabel: 'MMMM YYYY',
                                popupHeaderDateLabel: 'ddd, DD MMM',
                            },
                        },
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.UtilitiesService }, { type: i1.CustomizationService }, { type: i0.Renderer2 }, { type: i2.TranslateService }, { type: i3.DateAdapter }]; }, { key: [{
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
        }], valueChanged: [{
            type: Output
        }], datetimePicker: [{
            type: ViewChild,
            args: ['datetimePicker']
        }], input: [{
            type: ViewChild,
            args: ['input']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2RhdGUvZGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2RhdGUvZGF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFzQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRXJKLE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFvQixXQUFXLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ09sRiw0Q0FFbUI7SUFEcUIsNlNBQWtEO0lBQzFGLGlCQUFtQjs7O0lBRitDLG9DQUFlLHVCQUFBLHFCQUFBLDZCQUFBOzs7O0lBR2pGLDRDQUVtQjtJQURxQyw4U0FBa0Q7SUFDMUcsaUJBQW1COzs7SUFGc0Usb0NBQWUsdUJBQUEscUJBQUEsNkJBQUE7Ozs7Ozs7SUFkNUcseUNBQ0k7SUFBQSxtQ0FNQTtJQUpJLDhOQUF1Qiw2TUFBQSxrT0FBQSwyTEFBQTtJQUYzQixpQkFNQTtJQUFBLGlDQUFXO0lBQUEsMEJBRW9MOzs7OztJQUMvTCxpQkFBWTtJQUNaLDZHQUVBO0lBQ0EsK0dBRUE7SUFDQSw2Q0FDeUQ7SUFDN0QsaUJBQWlCOzs7OztJQWxCWSxlQUE0QjtJQUE1Qix3REFBNEI7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LE1BQU07Z0NBQ3JCLFNBQVMsRUFBRSxJQUFJO2dDQUNmLGNBQWMsRUFBRSxVQUFVO2dDQUMxQixhQUFhLEVBQUUsSUFBSTtnQ0FDbkIsa0JBQWtCLEVBQUUsV0FBVztnQ0FDL0Isb0JBQW9CLEVBQUUsYUFBYTs2QkFDdEM7eUJBQ0o7cUJBQ0o7aUJBQ0o7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7Z05BRVksR0FBRztrQkFBWCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFJRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFFSSxZQUFZO2tCQUFyQixNQUFNO1lBQ3NCLGNBQWM7a0JBQTFDLFNBQVM7bUJBQUMsZ0JBQWdCO1lBRVAsS0FBSztrQkFBeEIsU0FBUzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCwgUmVuZGVyZXIyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIsIE1BVF9EQVRFVElNRV9GT1JNQVRTIH0gZnJvbSAnQG1hdC1kYXRldGltZXBpY2tlci9jb3JlJztcclxuaW1wb3J0IHsgTW9tZW50RGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XHJcbmltcG9ydCB7IE1vbWVudERhdGV0aW1lQWRhcHRlciB9IGZyb20gJ0BtYXQtZGF0ZXRpbWVwaWNrZXIvbW9tZW50JztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlLCBMQVlPVVRfVFlQRSwgQ3VzdG9taXphdGlvblNlcnZpY2UgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGVwLWRhdGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF0ZS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgLy8gQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgICAgLy8gVGhlIGxvY2FsZSB3b3VsZCB0eXBpY2FsbHkgYmUgcHJvdmlkZWQgb24gdGhlIHJvb3QgbW9kdWxlIG9mIHlvdXIgYXBwbGljYXRpb24uIFdlIGRvIGl0IGF0XHJcbiAgICAgICAgLy8gdGhlIGNvbXBvbmVudCBsZXZlbCBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2Ygb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXHJcbiAgICAgICAgLy8geyBwcm92aWRlOiBNQVRfREFURV9MT0NBTEUsIHVzZVZhbHVlOiAnZW4tVVMnIH0sXHJcblxyXG4gICAgICAgIC8vIGBNb21lbnREYXRlQWRhcHRlcmAgYW5kIGBNQVRfTU9NRU5UX0RBVEVfRk9STUFUU2AgY2FuIGJlIGF1dG9tYXRpY2FsbHkgcHJvdmlkZWQgYnkgaW1wb3J0aW5nXHJcbiAgICAgICAgLy8gYE1hdE1vbWVudERhdGVNb2R1bGVgIGluIHlvdXIgYXBwbGljYXRpb25zIHJvb3QgbW9kdWxlLiBXZSBwcm92aWRlIGl0IGF0IHRoZSBjb21wb25lbnQgbGV2ZWxcclxuICAgICAgICAvLyBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2Ygb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXHJcbiAgICAgICAgLy8geyBwcm92aWRlOiBEYXRlQWRhcHRlciwgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLCBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFXSB9LFxyXG4gICAgICAgIC8vIHsgcHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURV9GT1JNQVRTIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBEYXRlQWRhcHRlciwgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBNQVRfREFURV9GT1JNQVRTLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgcGFyc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQ6ICdMJyxcclxuICAgICAgICAgICAgICAgICAgICBtb250aElucHV0OiAnTU1NTScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZUlucHV0OiAnTFQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGV0aW1lSW5wdXQ6ICdMIExUJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0OiAnTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhJbnB1dDogJ01NTU0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGV0aW1lSW5wdXQ6ICdMIExUJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lSW5wdXQ6ICdMVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUExMXlMYWJlbDogJ0xMJyxcclxuICAgICAgICAgICAgICAgICAgICBtb250aFllYXJBMTF5TGFiZWw6ICdNTU1NIFlZWVknLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwSGVhZGVyRGF0ZUxhYmVsOiAnZGRkLCBERCBNTU0nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogRGF0ZXRpbWVBZGFwdGVyLCB1c2VDbGFzczogTW9tZW50RGF0ZXRpbWVBZGFwdGVyIH0sXHJcbiAgICAgICAgLy8geyBwcm92aWRlOiBNQVRfREFURVRJTUVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9OQVRJVkVfREFURVRJTUVfRk9STUFUUyB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBNQVRfREFURVRJTUVfRk9STUFUUyxcclxuICAgICAgICAgICAgdXNlVmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIHBhcnNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0OiAnTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhJbnB1dDogJ01NTU0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVJbnB1dDogJ0xUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRldGltZUlucHV0OiAnTCBMVCcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dDogJ0wnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoSW5wdXQ6ICdNTU1NJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRldGltZUlucHV0OiAnTCBMVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZUlucHV0OiAnTFQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoWWVhckxhYmVsOiAnTU1NIFlZWVknLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVBMTF5TGFiZWw6ICdMTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NTSBZWVlZJyxcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cEhlYWRlckRhdGVMYWJlbDogJ2RkZCwgREQgTU1NJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlEYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkga2V5ID0gJyc7XHJcbiAgICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xyXG4gICAgQElucHV0KCkgZm9ybWF0dGVkVmFsdWUgPSAnJztcclxuICAgIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgICBASW5wdXQoKSB0eXBlID0gJ2RhdGUnO1xyXG4gICAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgdGV4dENvbG9yID0gJyc7XHJcbiAgICBASW5wdXQoKSB4QWxpZ25tZW50ID0gJzAnO1xyXG4gICAgQElucHV0KCkgcm93U3BhbiA9IDE7XHJcbiAgICBASW5wdXQoKSBtaW5WYWx1ZSA9IDA7XHJcbiAgICBASW5wdXQoKSBtYXhWYWx1ZSA9IDA7XHJcblxyXG4gICAgY29udHJvbFR5cGUgPSAnZGF0ZSc7XHJcblxyXG4gICAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzaG93VGl0bGUgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgbGF5b3V0VHlwZTogTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybTtcclxuXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQFZpZXdDaGlsZCgnZGF0ZXRpbWVQaWNrZXInKSBkYXRldGltZVBpY2tlcjogYW55O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRTtcclxuICAgIHN0YW5kQWxvbmUgPSBmYWxzZTtcclxuICAgIGlzSW5FZGl0TW9kZSA9IGZhbHNlO1xyXG4gICAgZGF0ZU1vZGVsOiBEYXRlO1xyXG4gICAgbWluRGF0ZTogRGF0ZTtcclxuICAgIG1heERhdGU6IERhdGU7XHJcbiAgICBzaG93RGF0ZXBpY2tlciA9IGZhbHNlO1xyXG4gICAgc2hvd1RpbWUgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSB1dGlsaXRpZXNTZXJ2aWNlOiBVdGlsaXRpZXNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY3VzdG9taXphdGlvblNlcnZpY2U6IEN1c3RvbWl6YXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFkYXB0ZXI6IERhdGVBZGFwdGVyPGFueT5cclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YW5kQWxvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLmdldERlZmF1bHRGcm9tR3JvdXAodGhpcy5rZXksIHRoaXMudmFsdWUsIHRoaXMucmVxdWlyZWQsIHRoaXMucmVhZG9ubHksIHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXR0ZWRWYWx1ZSB8fCB0aGlzLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgQ3VzdG9taXphdGlvblNlcnZpY2UuU1RBTkRfQUxPTkVfRklFTERfQ0xBU1NfTkFNRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob3dUaW1lID0gdGhpcy50eXBlID09PSAnZGF0ZXRpbWUnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5taW5WYWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5taW5EYXRlID0gbmV3IERhdGUodGhpcy5taW5WYWx1ZSAqIDEwMDAgKiA2MCAqIDYwICogMjQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF4VmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RGF0ZSA9IG5ldyBEYXRlKHRoaXMubWF4VmFsdWUgKiAxMDAwICogNjAgKiA2MCAqIDI0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdERhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdERhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY3VsdHVyZSA9IHRoaXMudHJhbnNsYXRlLmdldEJyb3dzZXJDdWx0dXJlTGFuZygpIHx8ICdlbi1VUyc7IC8vIHRoaXMudXNlckxhbmcsXHJcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldExvY2FsZShjdWx0dXJlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUuaW5kZXhPZignMTkwMC0xLTEnKSA+PSAwIHx8XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUuaW5kZXhPZignMTkwMC0wMS0wMScpID49IDAgfHxcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5pbmRleE9mKCcxOTcwLTEtMScpID49IDAgfHxcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5pbmRleE9mKCcxOTcwLTAxLTAxJykgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5kYXRlTW9kZWwgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZU1vZGVsID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLnBhcnNlRGF0ZSh0aGlzLnZhbHVlLCB0aGlzLnNob3dUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkRhdGV0aW1lUGlja2VyKGRhdGV0aW1lUGlja2VyKTogdm9pZCB7XHJcbiAgICAgICAgZGF0ZXRpbWVQaWNrZXIub3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgZGF0ZXRpbWVQaWNrZXIub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbkVkaXRNb2RlICYmICF0aGlzLmRhdGV0aW1lUGlja2VyLm9wZW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzSW5FZGl0TW9kZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRhdGVDaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmIChldmVudC52YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLnN0cmluZ2lmeURhdGVXaXRoT2Zmc2V0KGV2ZW50LnZhbHVlLnRvRGF0ZSgpLCB0aGlzLnNob3dUaW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UudXBkYXRlRm9ybUZpZWxkVmFsdWUodGhpcy5mb3JtLCB0aGlzLmtleSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQoeyBhcGlOYW1lOiB0aGlzLmtleSwgdmFsdWUgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSW5FZGl0TW9kZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNJbkVkaXRNb2RlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXJkVGVtcGxhdGVDbGlja2VkKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pc0luRWRpdE1vZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHNlbGYub3BlbkRhdGV0aW1lUGlja2VyKHNlbGYuZGF0ZXRpbWVQaWNrZXIpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgICA8IS0tIE5ldyBjb2RlIC0tPlxyXG4gICAgPG5nLXRlbXBsYXRlICNwZXBwZXJpVGVtcGxhdGUgbGV0LXNob3dJY29uPVwic2hvd0ljb25cIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCBbaWRdPVwia2V5XCIgdGl0bGU9XCJ7eyBmb3JtYXR0ZWRWYWx1ZSB9fVwiIG1hdElucHV0IGNsYXNzPVwiYm9keS1zbVwiIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cIntjb2xvcjogdGV4dENvbG9yLCAndGV4dC1hbGlnbic6IHhBbGlnbm1lbnQgPT0gJzMnID8gJ2NlbnRlcicgOiB4QWxpZ25tZW50ID09ICcyJyA/ICdyaWdodCcgOiAnbGVmdCd9XCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0ZU1vZGVsXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIFttYXREYXRldGltZXBpY2tlcl09XCJkYXRldGltZVBpY2tlclwiXHJcbiAgICAgICAgICAgICAgICBbbWluXT1cIm1pbkRhdGVcIiBbbWF4XT1cIm1heERhdGVcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgKGRhdGVDaGFuZ2UpPVwib25EYXRlQ2hhbmdlKCRldmVudClcIiAoY2xpY2spPVwib3BlbkRhdGV0aW1lUGlja2VyKGRhdGV0aW1lUGlja2VyKVwiXHJcbiAgICAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiIC8+XHJcbiAgICAgICAgICAgIDxtYXQtZXJyb3I+PHNwYW4gY2xhc3M9XCJib2R5LXhzXCJcclxuICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVwicmVxdWlyZWQgJiYgZm9ybWF0dGVkVmFsdWUubGVuZ3RoID09IDAgPyAoJ01FU1NBR0VTLkVSUk9SX0lTX1JFUVVJUkVEJyB8IHRyYW5zbGF0ZToge2ZpZWxkOiBsYWJlbH0pIDogKCdNRVNTQUdFUy5FUlJPUl9JU19OT1RfVkFMSUQnIHwgdHJhbnNsYXRlOiB7ZmllbGQ6IGxhYmVsfSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtpbm5lclRleHRdPVwicmVxdWlyZWQgJiYgZm9ybWF0dGVkVmFsdWUubGVuZ3RoID09IDAgPyAoJ01FU1NBR0VTLkVSUk9SX0lTX1JFUVVJUkVEJyB8IHRyYW5zbGF0ZToge2ZpZWxkOiBsYWJlbH0pIDogKCdNRVNTQUdFUy5FUlJPUl9JU19OT1RfVkFMSUQnIHwgdHJhbnNsYXRlOiB7ZmllbGQ6IGxhYmVsfSlcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbWF0LWVycm9yPlxyXG4gICAgICAgICAgICA8cGVwLXRleHRib3gtaWNvbiAqbmdJZj1cInNob3dJY29uICYmIHhBbGlnbm1lbnQgPT0gJzInXCIgbWF0UHJlZml4IFt2YWx1ZV09XCJ2YWx1ZVwiIFtsYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBbdHlwZV09XCJ0eXBlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGljb25DbGlja2VkKT1cIm9wZW5EYXRldGltZVBpY2tlcihkYXRldGltZVBpY2tlcilcIj5cclxuICAgICAgICAgICAgPC9wZXAtdGV4dGJveC1pY29uPlxyXG4gICAgICAgICAgICA8cGVwLXRleHRib3gtaWNvbiAqbmdJZj1cIihzaG93SWNvbiAmJiB4QWxpZ25tZW50ID09ICcxJykgfHwgeEFsaWdubWVudCA9PSAnMCdcIiBtYXRTdWZmaXggW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCJsYWJlbFwiIFt0eXBlXT1cInR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoaWNvbkNsaWNrZWQpPVwib3BlbkRhdGV0aW1lUGlja2VyKGRhdGV0aW1lUGlja2VyKVwiPlxyXG4gICAgICAgICAgICA8L3BlcC10ZXh0Ym94LWljb24+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXRpbWVwaWNrZXIgI2RhdGV0aW1lUGlja2VyIFt0eXBlXT1cInNob3dUaW1lID8gJ2RhdGV0aW1lJyA6ICdkYXRlJ1wiIG9wZW5PbkZvY3VzPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgdG91Y2hVaT1cInRydWVcIiB0aW1lSW50ZXJ2YWw9XCIxXCI+PC9tYXQtZGF0ZXRpbWVwaWNrZXI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtXCI+XHJcbiAgICAgICAgPHBlcC1maWVsZC10aXRsZSBbbGFiZWxdPVwibGFiZWxcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbeEFsaWdubWVudF09XCJ4QWxpZ25tZW50XCJcclxuICAgICAgICAgICAgW3Nob3dUaXRsZV09XCJzaG93VGl0bGVcIj5cclxuICAgICAgICA8L3BlcC1maWVsZC10aXRsZT5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGVwcGVyaVRlbXBsYXRlOyBjb250ZXh0OiB7c2hvd0ljb246IHRydWV9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmRcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNJbkVkaXRNb2RlOyB0aGVuIGVkaXRCbG9jazsgZWxzZSByZWFkT25seUJsb2NrXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNlZGl0QmxvY2s+XHJcbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieydvbmUtcm93Jzogcm93U3BhbiA9PT0gMX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGU7IGNvbnRleHQ6IHtzaG93SWNvbjogZmFsc2V9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNyZWFkT25seUJsb2NrPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVwcGVyaS1jYXJkLWlucHV0IGNhcmQtZmxleC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydvbmUtcm93Jzogcm93U3BhbiA9PT0gMSwgJ3BlcHBlcmktYnV0dG9uIHdlYWsnOiBpc0FjdGl2ZSAmJiAhZGlzYWJsZWR9XCJcclxuICAgICAgICAgICAgICAgIFtjbGFzc109XCIndGV4dC1hbGlnbi0nICsgeEFsaWdubWVudFwiIChjbGljayk9XCIhZGlzYWJsZWQgPyBjYXJkVGVtcGxhdGVDbGlja2VkKCRldmVudCkgOiAnJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzaG93VGl0bGUgJiYgbGFiZWwgIT0gJydcIiBjbGFzcz1cImJvZHkteHMgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwie3sgbGFiZWwgfX1cIj57eyBsYWJlbCB9fSZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIFtpZF09XCJrZXlcIiB0aXRsZT1cInt7IGZvcm1hdHRlZFZhbHVlIH19XCIgY2xhc3M9XCJib2R5LXNtIHZhbHVlXCI+e3sgZm9ybWF0dGVkVmFsdWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNBY3RpdmUgJiYgIWRpc2FibGVkXCIgY2xhc3M9XCJwZXBwZXJpLWJ1dHRvbiB3ZWFrIGNhcmQtZWRpdC1idXR0b25cIiBtYXQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBlcC1pY29uIG5hbWU9XCJzeXN0ZW1fZWRpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpVGFibGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNBY3RpdmUgJiYgIWRpc2FibGVkOyB0aGVuIHNlbGVjdGVkQmxvY2s7IGVsc2Ugbm90U2VsZWN0ZWRCbG9ja1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjc2VsZWN0ZWRCbG9jaz5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZTsgY29udGV4dDoge3Nob3dJY29uOiB0cnVlfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNub3RTZWxlY3RlZEJsb2NrPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybWF0dGVkVmFsdWU/Lmxlbmd0aCA+IDA7IHRoZW4gbm90RW1wdHlCbG9jazsgZWxzZSBlbXB0eUJsb2NrXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90RW1wdHlCbG9jaz5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpZF09XCJrZXlcIiBjbGFzcz1cImJvZHktc20gcGVwcGVyaS1yZXBvcnQtaW5wdXRcIiBbbmdDbGFzc109XCJ7cmVhZG9ubHk6IGRpc2FibGVkfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cInt7IGZvcm1hdHRlZFZhbHVlIH19XCI+e3sgZm9ybWF0dGVkVmFsdWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNlbXB0eUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gW2lkXT1cImtleVwiPiZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLkVkaXRtb2RhbFwiPlxyXG4gICAgICAgIDxwZXAtZmllbGQtdGl0bGUgW2xhYmVsXT1cImxhYmVsXCIgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW3hBbGlnbm1lbnRdPVwieEFsaWdubWVudFwiXHJcbiAgICAgICAgICAgIFtzaG93VGl0bGVdPVwic2hvd1RpdGxlXCI+XHJcbiAgICAgICAgPC9wZXAtZmllbGQtdGl0bGU+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZTsgY29udGV4dDoge3Nob3dJY29uOiB0cnVlfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPiJdfQ==