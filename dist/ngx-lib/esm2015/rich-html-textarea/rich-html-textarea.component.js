import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef, ViewChild } from '@angular/core';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@pepperi-addons/ngx-lib/dialog";
import * as i3 from "@pepperi-addons/ngx-lib";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/cdk/bidi";
import * as i8 from "@angular/material/input";
import * as i9 from "@pepperi-addons/ngx-lib/textbox-icon";
import * as i10 from "@pepperi-addons/ngx-lib/field-title";
import * as i11 from "@angular/material/button";
import * as i12 from "@angular/material/icon";
import * as i13 from "@pepperi-addons/ngx-lib/icon";
import * as i14 from "@angular/material/dialog";
import * as i15 from "ngx-quill";
import * as i16 from "@ngx-translate/core";
const _c0 = ["richTextEditorDialogTemplate"];
function PepperiRichHtmlTextareaComponent_ng_template_1_pep_field_title_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-field-title", 12);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("label", ctx_r11.label)("required", ctx_r11.required)("disabled", ctx_r11.disabled)("maxFieldCharacters", ctx_r11.maxFieldCharacters)("xAlignment", ctx_r11.xAlignment)("showTitle", ctx_r11.showTitle);
} }
const _c1 = function (a0, a1, a2, a3) { return { "right-alignment": a0, "one-row": a1, "stand-alone": a2, "pepperi-textarea-card-container": a3 }; };
const _c2 = function (a0) { return { "pepperi-table-textarea": a0 }; };
const _c3 = function (a0) { return { "text-align": a0 }; };
const _c4 = function (a0) { return { "card-one-row-icon": a0 }; };
const _c5 = function (a0) { return { field: a0 }; };
function PepperiRichHtmlTextareaComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_template_1_pep_field_title_1_Template, 1, 6, "pep-field-title", 6);
    i0.ɵɵelementStart(2, "mat-form-field", 7);
    i0.ɵɵelement(3, "textarea", 8);
    i0.ɵɵelement(4, "div", 9);
    i0.ɵɵpipe(5, "safeHtml");
    i0.ɵɵelementStart(6, "pep-textbox-icon", 10);
    i0.ɵɵlistener("iconClicked", function PepperiRichHtmlTextareaComponent_ng_template_1_Template_pep_textbox_icon_iconClicked_6_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.openDialog(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-error");
    i0.ɵɵelement(8, "span", 11);
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const isFormView_r10 = ctx.isFormView;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(34, _c1, ctx_r1.xAlignment == "2", !isFormView_r10 && ctx_r1.rowSpan === 1, ctx_r1.standAlone, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", isFormView_r10);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("dir", ctx_r1.xAlignment == "2" ? "rtl" : "ltr");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(39, _c2, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hidden", true)("formControlName", ctx_r1.key);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("body-sm rich-text-cont ", ctx_r1.readonly ? "disable-scroll" : "", " ql-editor ");
    i0.ɵɵstyleProp("height", ctx_r1.fieldHeight);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(41, _c3, ctx_r1.xAlignment == "2" ? "right" : "left"))("innerHtml", i0.ɵɵpipeBind1(5, 20, ctx_r1.value), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r1.value)("label", ctx_r1.label)("type", ctx_r1.controlType)("disabled", ctx_r1.disabled)("ngClass", i0.ɵɵpureFunction1(43, _c4, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard && ctx_r1.rowSpan === 1));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r1.required && ctx_r1.value.length == 0 ? i0.ɵɵpipeBind2(9, 22, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(45, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(10, 25, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(47, _c5, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.value.length == 0 ? i0.ɵɵpipeBind2(11, 28, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(49, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(12, 31, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(51, _c5, ctx_r1.label)));
} }
function PepperiRichHtmlTextareaComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c6 = function () { return { isFormView: true }; };
function PepperiRichHtmlTextareaComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c6));
} }
function PepperiRichHtmlTextareaComponent_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r15.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r15.label, ":\u00A0");
} }
const _c7 = function (a0) { return { "self-end": a0 }; };
function PepperiRichHtmlTextareaComponent_ng_container_4_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c7, ctx_r16.value && ctx_r16.value !== ""));
} }
const _c8 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
const _c9 = function (a0) { return { "-webkit-line-clamp": a0 }; };
function PepperiRichHtmlTextareaComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵlistener("click", function PepperiRichHtmlTextareaComponent_ng_container_4_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return !ctx_r17.disabled ? ctx_r17.cardTemplateClicked($event) : ""; });
    i0.ɵɵtemplate(2, PepperiRichHtmlTextareaComponent_ng_container_4_span_2_Template, 2, 2, "span", 15);
    i0.ɵɵelement(3, "span", 16);
    i0.ɵɵpipe(4, "safeHtml");
    i0.ɵɵtemplate(5, PepperiRichHtmlTextareaComponent_ng_container_4_button_5_Template, 3, 3, "button", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("text-align-" + ctx_r3.xAlignment);
    i0.ɵɵstyleProp("height", ctx_r3.fieldHeight);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(12, _c8, ctx_r3.rowSpan === 1, ctx_r3.isActive && !ctx_r3.disabled))("ngStyle", i0.ɵɵpureFunction1(15, _c9, ctx_r3.rowSpan));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.showTitle && ctx_r3.label != "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", ctx_r3.key)("innerHtml", i0.ɵɵpipeBind1(4, 10, ctx_r3.value), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.isActive && !ctx_r3.disabled);
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c10 = function () { return { isFormView: false }; };
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c10));
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelement(1, "span", 27);
    i0.ɵɵpipe(2, "safeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", ctx_r27.key)("innerHtml", i0.ɵɵpipeBind1(2, 2, ctx_r27.value), i0.ɵɵsanitizeHtml);
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 21);
    i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template, 3, 4, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 0, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r26 = i0.ɵɵreference(2);
    const _r28 = i0.ɵɵreference(4);
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", (ctx_r23.value == null ? null : ctx_r23.value.length) > 0)("ngIfThen", _r26)("ngIfElse", _r28);
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵtemplate(2, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r20 = i0.ɵɵreference(3);
    const _r22 = i0.ɵɵreference(5);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r20)("ngIfElse", _r22);
} }
function PepperiRichHtmlTextareaComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiRichHtmlTextareaComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c6));
} }
function PepperiRichHtmlTextareaComponent_ng_template_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiRichHtmlTextareaComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "button", 29);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵelement(3, "pep-icon", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PepperiRichHtmlTextareaComponent_ng_template_7_ng_container_4_Template, 1, 0, "ng-container", 31);
    i0.ɵɵelementStart(5, "div", 32);
    i0.ɵɵelementStart(6, "div", 33);
    i0.ɵɵelementStart(7, "button", 34);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 35);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const _r8 = i0.ɵɵreference(10);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mat-dialog-close", null);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r8);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("mat-dialog-close", ctx_r7.quillContent || "")("disabled", ctx_r7.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 7, "ACTIONS.SAVE"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mat-dialog-close", null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 9, "ACTIONS.CANCEL"), " ");
} }
function PepperiRichHtmlTextareaComponent_ng_template_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelementStart(1, "span", 39);
    i0.ɵɵelement(2, "button", 40);
    i0.ɵɵelement(3, "button", 41);
    i0.ɵɵelement(4, "button", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 39);
    i0.ɵɵelement(6, "button", 43);
    i0.ɵɵelement(7, "button", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 39);
    i0.ɵɵelement(9, "button", 45);
    i0.ɵɵelement(10, "button", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 39);
    i0.ɵɵelement(12, "select", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 39);
    i0.ɵɵelementStart(14, "select", 48);
    i0.ɵɵelement(15, "option", 49);
    i0.ɵɵelement(16, "option", 50);
    i0.ɵɵelement(17, "option", 51);
    i0.ɵɵelement(18, "option", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PepperiRichHtmlTextareaComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "quill-editor", 36);
    i0.ɵɵlistener("ngModelChange", function PepperiRichHtmlTextareaComponent_ng_template_9_Template_quill_editor_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.quillContent = $event; });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtemplate(2, PepperiRichHtmlTextareaComponent_ng_template_9_div_2_Template, 19, 0, "div", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(1, 7, "RICH_TEXTAREA.HINT"));
    i0.ɵɵproperty("ngModel", ctx_r9.quillContent)("sanitize", true)("readOnly", ctx_r9.disabled)("maxLength", ctx_r9.maxFieldCharacters)("required", ctx_r9.required);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r9.disabled);
} }
export class PepperiRichHtmlTextareaComponent {
    constructor(sanitizer, dialogService, customizationService, renderer, element) {
        this.sanitizer = sanitizer;
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
        this.maxFieldCharacters = 0;
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.controlType = 'richhtmltextarea';
        this.form = null;
        this.isActive = false;
        this.showTitle = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.valueChanged = new EventEmitter();
        this.quillContent = '';
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.fieldHeight = '';
        this.standAlone = false;
    }
    ngOnInit() {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled, this.maxFieldCharacters);
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
        this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
    }
    ngOnDestroy() {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
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
        this.quillContent = this.sanitizer.bypassSecurityTrustHtml(this.value);
        const config = this.dialogService.getDialogConfig({
            minWidth: '50vw',
            maxWidth: '90vw',
            maxHeight: '90vh',
        });
        const dialogRef = this.dialogService.openDialog(this.richTextEditorDialogTemplate, {}, config);
        dialogRef.afterClosed().subscribe(value => {
            if (value !== undefined && value !== null) {
                this.changeValue(value);
            }
        });
    }
}
PepperiRichHtmlTextareaComponent.ɵfac = function PepperiRichHtmlTextareaComponent_Factory(t) { return new (t || PepperiRichHtmlTextareaComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.DialogService), i0.ɵɵdirectiveInject(i3.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PepperiRichHtmlTextareaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiRichHtmlTextareaComponent, selectors: [["pep-rich-html-textarea"]], viewQuery: function PepperiRichHtmlTextareaComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.richTextEditorDialogTemplate = _t.first);
    } }, inputs: { key: "key", value: "value", label: "label", required: "required", disabled: "disabled", readonly: "readonly", maxFieldCharacters: "maxFieldCharacters", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, decls: 11, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], ["richTextEditorDialogTemplate", ""], ["quilTemplate", ""], [1, "pepperi-textarea-container", 3, "ngClass"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", 4, "ngIf"], ["appearance", "outline", 3, "dir", "ngClass"], ["matInput", "", 3, "hidden", "formControlName"], [3, "ngStyle", "innerHtml"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "ngClass", "iconClicked"], [1, "body-xs", 3, "title", "innerText"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pepperi-textarea-card-container", "card-flex-container", 3, "ngClass", "ngStyle", "click"], ["class", "body-xs title no-shrink", 3, "title", 4, "ngIf"], [1, "body-sm", "value", "wrap", 3, "id", "innerHtml"], ["class", "pepperi-button weak card-edit-button self-start", "mat-button", "", 3, "ngClass", 4, "ngIf"], [1, "body-xs", "title", "no-shrink", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button", "self-start", 3, "ngClass"], ["name", "system_edit"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["selectedBlock", ""], ["notSelectedBlock", ""], ["notEmptyBlock", ""], ["emptyBlock", ""], [1, "pepperi-textarea-card-container", "card-flex-container", "one-row"], [1, "wrap", 3, "id", "innerHtml"], [1, "rich-text-editor-container"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], [4, "ngTemplateOutlet"], ["mat-dialog-actions", "", 1, "pepperi-border-top"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "strong", "pull-right", "flip", 3, "mat-dialog-close", "disabled"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["id", "quill-editor", "theme", "", 3, "placeholder", "ngModel", "sanitize", "readOnly", "maxLength", "required", "ngModelChange"], ["quill-editor-toolbar", "", "class", "spacing-element-negative pepperi-border-bottom", 4, "ngIf"], ["quill-editor-toolbar", "", 1, "spacing-element-negative", "pepperi-border-bottom"], [1, "ql-formats"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-bold"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-italic"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-underline"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-link"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-image"], ["mat-button", "", "value", "ordered", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-list"], ["mat-button", "", "value", "bullet", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-list"], [1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-color"], [1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-align"], ["selected", ""], ["value", "center"], ["value", "right"], ["value", "justify"]], template: function PepperiRichHtmlTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_template_1_Template, 13, 53, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PepperiRichHtmlTextareaComponent_ng_container_3_Template, 2, 3, "ng-container", 2);
        i0.ɵɵtemplate(4, PepperiRichHtmlTextareaComponent_ng_container_4_Template, 6, 17, "ng-container", 2);
        i0.ɵɵtemplate(5, PepperiRichHtmlTextareaComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(6, PepperiRichHtmlTextareaComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(7, PepperiRichHtmlTextareaComponent_ng_template_7_Template, 13, 11, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(9, PepperiRichHtmlTextareaComponent_ng_template_9_Template, 3, 9, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
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
    } }, directives: [i4.NgControlStatusGroup, i4.FormGroupDirective, i5.NgIf, i5.NgClass, i6.MatFormField, i7.Dir, i8.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlName, i5.NgStyle, i9.PepperiTextboxIconComponent, i6.MatSuffix, i6.MatError, i10.PepperiFieldTitleComponent, i5.NgTemplateOutlet, i11.MatButton, i12.MatIcon, i13.PepperiIconComponent, i14.MatDialogClose, i14.MatDialogActions, i15.QuillEditorComponent, i4.NgModel, i4.RequiredValidator, i4.NgSelectOption, i4.ɵangular_packages_forms_forms_x], pipes: [i3.SafeHtmlPipe, i16.TranslatePipe], styles: ["[_nghost-%COMP%]{display:block;height:inherit}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiRichHtmlTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'pep-rich-html-textarea',
                templateUrl: './rich-html-textarea.component.html',
                styleUrls: ['./rich-html-textarea.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DomSanitizer }, { type: i2.DialogService }, { type: i3.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
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
        }], xAlignment: [{
            type: Input
        }], rowSpan: [{
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
        }], richTextEditorDialogTemplate: [{
            type: ViewChild,
            args: ['richTextEditorDialogTemplate', { read: TemplateRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaC1odG1sLXRleHRhcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvcmljaC1odG1sLXRleHRhcmVhL3JpY2gtaHRtbC10ZXh0YXJlYS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3JpY2gtaHRtbC10ZXh0YXJlYS9yaWNoLWh0bWwtdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDOUMsdUJBQXVCLEVBQW9DLFdBQVcsRUFBRSxTQUFTLEVBQ3BGLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBaEUsc0NBRWtCOzs7SUFGa0IscUNBQWUsOEJBQUEsOEJBQUEsa0RBQUEsa0NBQUEsZ0NBQUE7Ozs7Ozs7OztJQUZ2RCw4QkFFSTtJQUFBLHVIQUVBO0lBQ0EseUNBRUk7SUFBQSw4QkFBc0U7SUFDdEUseUJBR007O0lBTU4sNENBR21CO0lBRGYscU9BQTRCO0lBQ2hDLGlCQUFtQjtJQUNuQixpQ0FDSTtJQUFBLDJCQUVzTDs7Ozs7SUFDMUwsaUJBQVk7SUFDaEIsaUJBQWlCO0lBQ3JCLGlCQUFNOzs7O0lBM0JrQyxpTUFDeUM7SUFDNUQsZUFBa0I7SUFBbEIscUNBQWtCO0lBR0UsZUFBNkM7SUFBN0MseUVBQTZDO0lBQzlFLDRHQUFpRjtJQUN2RSxlQUFlO0lBQWYsNkJBQWUsK0JBQUE7SUFDcEIsZUFBOEU7SUFBOUUsNEdBQThFO0lBRS9FLDRDQUE0QjtJQUQ1QixrR0FBa0UscUVBQUE7SUFRMUMsZUFBZTtJQUFmLG9DQUFlLHVCQUFBLDRCQUFBLDZCQUFBLHNIQUFBO0lBTW5DLGVBQXNLO0lB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S0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFJRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFFSSxZQUFZO2tCQUFyQixNQUFNO1lBRTJELDRCQUE0QjtrQkFBN0YsU0FBUzttQkFBQyw4QkFBOEIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IExBWU9VVF9UWVBFLCBDdXN0b21pemF0aW9uU2VydmljZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSwgRGlhbG9nRGF0YSwgRGlhbG9nRGF0YVR5cGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9kaWFsb2cnO1xyXG5pbXBvcnQgeyBTYWZlSHRtbCwgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGVwLXJpY2gtaHRtbC10ZXh0YXJlYScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmljaC1odG1sLXRleHRhcmVhLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3JpY2gtaHRtbC10ZXh0YXJlYS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlSaWNoSHRtbFRleHRhcmVhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkga2V5ID0gJyc7XHJcbiAgICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xyXG4gICAgQElucHV0KCkgbGFiZWwgPSAnJztcclxuICAgIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIG1heEZpZWxkQ2hhcmFjdGVycyA9IDA7XHJcbiAgICBASW5wdXQoKSB4QWxpZ25tZW50ID0gJzAnO1xyXG4gICAgQElucHV0KCkgcm93U3BhbiA9IDE7XHJcblxyXG4gICAgY29udHJvbFR5cGUgPSAncmljaGh0bWx0ZXh0YXJlYSc7XHJcblxyXG4gICAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzaG93VGl0bGUgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgbGF5b3V0VHlwZTogTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybTtcclxuXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3JpY2hUZXh0RWRpdG9yRGlhbG9nVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHJpY2hUZXh0RWRpdG9yRGlhbG9nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBxdWlsbENvbnRlbnQ6IFNhZmVIdG1sID0gJyc7XHJcblxyXG4gICAgTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRTtcclxuICAgIGZpZWxkSGVpZ2h0ID0gJyc7XHJcbiAgICBzdGFuZEFsb25lID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgICAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjdXN0b21pemF0aW9uU2VydmljZTogQ3VzdG9taXphdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZlxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YW5kQWxvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLmdldERlZmF1bHRGcm9tR3JvdXAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleSwgdGhpcy52YWx1ZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5yZWFkb25seSwgdGhpcy5kaXNhYmxlZCwgdGhpcy5tYXhGaWVsZENoYXJhY3RlcnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgQ3VzdG9taXphdGlvblNlcnZpY2UuU1RBTkRfQUxPTkVfRklFTERfQ0xBU1NfTkFNRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpZWxkSGVpZ2h0ID0gdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS5jYWxjdWxhdGVGaWVsZEhlaWdodCh0aGlzLmxheW91dFR5cGUsIHRoaXMucm93U3BhbiwgdGhpcy5zdGFuZEFsb25lKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVmFsdWUodmFsdWU6IGFueSwgbGFzdEZvY3VzZWRGaWVsZDogYW55ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UudXBkYXRlRm9ybUZpZWxkVmFsdWUodGhpcy5mb3JtLCB0aGlzLmtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHsgYXBpTmFtZTogdGhpcy5rZXksIHZhbHVlLCBsYXN0Rm9jdXNlZEZpZWxkIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXJkVGVtcGxhdGVDbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wZW5EaWFsb2coKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGlhbG9nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucXVpbGxDb250ZW50ID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy52YWx1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZGlhbG9nU2VydmljZS5nZXREaWFsb2dDb25maWcoe1xyXG4gICAgICAgICAgICBtaW5XaWR0aDogJzUwdncnLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogJzkwdncnLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6ICc5MHZoJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW5EaWFsb2coXHJcbiAgICAgICAgICAgIHRoaXMucmljaFRleHRFZGl0b3JEaWFsb2dUZW1wbGF0ZSxcclxuICAgICAgICAgICAge30sXHJcbiAgICAgICAgICAgIGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgICA8IS0tIE5ldyBjb2RlIC0tPlxyXG4gICAgPG5nLXRlbXBsYXRlICNwZXBwZXJpVGVtcGxhdGUgbGV0LWlzRm9ybVZpZXc9XCJpc0Zvcm1WaWV3XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBlcHBlcmktdGV4dGFyZWEtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieyAncmlnaHQtYWxpZ25tZW50JzogeEFsaWdubWVudCA9PSAnMicsICdvbmUtcm93JzogIWlzRm9ybVZpZXcgJiYgcm93U3BhbiA9PT0gMSwgJ3N0YW5kLWFsb25lJzogc3RhbmRBbG9uZSxcclxuICAgICAgICAgICAgJ3BlcHBlcmktdGV4dGFyZWEtY2FyZC1jb250YWluZXInOiBsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpQ2FyZCAgfVwiPlxyXG4gICAgICAgICAgICA8cGVwLWZpZWxkLXRpdGxlICpuZ0lmPVwiaXNGb3JtVmlld1wiIFtsYWJlbF09XCJsYWJlbFwiIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICBbbWF4RmllbGRDaGFyYWN0ZXJzXT1cIm1heEZpZWxkQ2hhcmFjdGVyc1wiIFt4QWxpZ25tZW50XT1cInhBbGlnbm1lbnRcIiBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiPlxyXG4gICAgICAgICAgICA8L3BlcC1maWVsZC10aXRsZT5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgZGlyPVwie3sgeEFsaWdubWVudCA9PSAnMicgPyAncnRsJyA6ICdsdHInIH19XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3BlcHBlcmktdGFibGUtdGV4dGFyZWEnOiBsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpVGFibGUgfVwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFtoaWRkZW5dPVwidHJ1ZVwiIG1hdElucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwia2V5XCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5LXNtIHJpY2gtdGV4dC1jb250IHt7cmVhZG9ubHkgPyAnZGlzYWJsZS1zY3JvbGwnIDogJyd9fSBxbC1lZGl0b3IgXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7ICd0ZXh0LWFsaWduJzogeEFsaWdubWVudCA9PSAnMicgPyAncmlnaHQnIDogJ2xlZnQnIH1cIiBbaW5uZXJIdG1sXT1cInZhbHVlIHwgc2FmZUh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiZmllbGRIZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8cGVwLXRleHRib3gtaWNvbiAqbmdJZj1cInhBbGlnbm1lbnQgPT0gJzInXCIgbWF0UHJlZml4IFt2YWx1ZV09XCJ2YWx1ZVwiIFtsYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiY29udHJvbFR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2NhcmQtb25lLXJvdy1pY29uJzogbGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmQgJiYgcm93U3BhbiA9PT0gMSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAoaWNvbkNsaWNrZWQpPVwib3BlbkRpYWxvZygpXCI+XHJcbiAgICAgICAgICAgICAgICA8L3BlcC10ZXh0Ym94LWljb24+IC0tPlxyXG4gICAgICAgICAgICAgICAgPHBlcC10ZXh0Ym94LWljb24gbWF0U3VmZml4IFt2YWx1ZV09XCJ2YWx1ZVwiIFtsYWJlbF09XCJsYWJlbFwiIFt0eXBlXT1cImNvbnRyb2xUeXBlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdjYXJkLW9uZS1yb3ctaWNvbic6IGxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlDYXJkICYmIHJvd1NwYW4gPT09IDEgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGljb25DbGlja2VkKT1cIm9wZW5EaWFsb2coKVwiPlxyXG4gICAgICAgICAgICAgICAgPC9wZXAtdGV4dGJveC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1lcnJvcj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvZHkteHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVwicmVxdWlyZWQgJiYgdmFsdWUubGVuZ3RoID09IDAgPyAoJ01FU1NBR0VTLkVSUk9SX0lTX1JFUVVJUkVEJyB8IHRyYW5zbGF0ZTogeyBmaWVsZDogbGFiZWwgfSkgOiAoJ01FU1NBR0VTLkVSUk9SX0lTX05PVF9WQUxJRCcgfCB0cmFuc2xhdGU6IHsgZmllbGQ6IGxhYmVsIH0pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVyVGV4dF09XCJyZXF1aXJlZCAmJiB2YWx1ZS5sZW5ndGggPT0gMCA/ICgnTUVTU0FHRVMuRVJST1JfSVNfUkVRVUlSRUQnIHwgdHJhbnNsYXRlOiB7IGZpZWxkOiBsYWJlbCB9KSA6ICgnTUVTU0FHRVMuRVJST1JfSVNfTk9UX1ZBTElEJyB8IHRyYW5zbGF0ZTogeyBmaWVsZDogbGFiZWwgfSlcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZTsgY29udGV4dDogeyBpc0Zvcm1WaWV3OiB0cnVlIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpQ2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLXRleHRhcmVhLWNhcmQtY29udGFpbmVyIGNhcmQtZmxleC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J29uZS1yb3cnOiByb3dTcGFuID09PSAxLCAncGVwcGVyaS1idXR0b24gd2Vhayc6IGlzQWN0aXZlICYmICFkaXNhYmxlZCB9XCJcclxuICAgICAgICAgICAgW25nU3R5bGVdPVwieyAnLXdlYmtpdC1saW5lLWNsYW1wJzogcm93U3BhbiB9XCIgW2NsYXNzXT1cIid0ZXh0LWFsaWduLScgKyB4QWxpZ25tZW50XCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIiFkaXNhYmxlZCA/IGNhcmRUZW1wbGF0ZUNsaWNrZWQoJGV2ZW50KSA6ICcnXCIgW3N0eWxlLmhlaWdodF09XCJmaWVsZEhlaWdodFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dUaXRsZSAmJiBsYWJlbCAhPSAnJ1wiIGNsYXNzPVwiYm9keS14cyB0aXRsZSBuby1zaHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJ7eyBsYWJlbCB9fVwiPnt7IGxhYmVsIH19OiZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gW2lkXT1cImtleVwiIGNsYXNzPVwiYm9keS1zbSB2YWx1ZSB3cmFwXCIgW2lubmVySHRtbF09XCJ2YWx1ZSB8IHNhZmVIdG1sXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNBY3RpdmUgJiYgIWRpc2FibGVkXCIgY2xhc3M9XCJwZXBwZXJpLWJ1dHRvbiB3ZWFrIGNhcmQtZWRpdC1idXR0b24gc2VsZi1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3NlbGYtZW5kJyA6IHZhbHVlICYmIHZhbHVlICE9PSAnJ31cIiBtYXQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwZXAtaWNvbiBuYW1lPVwic3lzdGVtX2VkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQWN0aXZlICYmICFkaXNhYmxlZDsgdGhlbiBzZWxlY3RlZEJsb2NrOyBlbHNlIG5vdFNlbGVjdGVkQmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI3NlbGVjdGVkQmxvY2s+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGU7IGNvbnRleHQ6IHsgaXNGb3JtVmlldzogZmFsc2UgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNub3RTZWxlY3RlZEJsb2NrPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsdWU/Lmxlbmd0aCA+IDA7IHRoZW4gbm90RW1wdHlCbG9jazsgZWxzZSBlbXB0eUJsb2NrXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90RW1wdHlCbG9jaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLXRleHRhcmVhLWNhcmQtY29udGFpbmVyIGNhcmQtZmxleC1jb250YWluZXIgb25lLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpZF09XCJrZXlcIiBjbGFzcz1cIndyYXBcIiBbaW5uZXJIdG1sXT1cInZhbHVlIHwgc2FmZUh0bWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNlbXB0eUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuRWRpdG1vZGFsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZTsgY29udGV4dDogeyBpc0Zvcm1WaWV3OiB0cnVlIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcblxyXG48bmctdGVtcGxhdGUgI3JpY2hUZXh0RWRpdG9yRGlhbG9nVGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmljaC10ZXh0LWVkaXRvci1jb250YWluZXJcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwibnVsbFwiIGNsYXNzPVwicGVwcGVyaS1idXR0b24gaWNvbi1idXR0b24gbWQgd2VhayBwdWxsLXJpZ2h0IGZsaXBcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPHBlcC1pY29uIG5hbWU9XCJzeXN0ZW1fY2xvc2VcIj5cclxuICAgICAgICAgICAgICAgIDwvcGVwLWljb24+XHJcbiAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInF1aWxUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zIGNsYXNzPVwicGVwcGVyaS1ib3JkZXItdG9wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjaW5nLWVsZW1lbnQtbmVnYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJxdWlsbENvbnRlbnQgfHwgJydcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3BhY2luZy1lbGVtZW50IHBlcHBlcmktYnV0dG9uIG1kIHN0cm9uZyBwdWxsLXJpZ2h0IGZsaXBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eydBQ1RJT05TLlNBVkUnIHwgdHJhbnNsYXRlfX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXQtZGlhbG9nLWNsb3NlXT1cIm51bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3BhY2luZy1lbGVtZW50IHBlcHBlcmktYnV0dG9uIG1kIHdlYWsgcHVsbC1yaWdodCBmbGlwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3snQUNUSU9OUy5DQU5DRUwnIHwgdHJhbnNsYXRlfX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNxdWlsVGVtcGxhdGU+XHJcbiAgICA8cXVpbGwtZWRpdG9yIGlkPVwicXVpbGwtZWRpdG9yXCIgcGxhY2Vob2xkZXI9XCJ7eydSSUNIX1RFWFRBUkVBLkhJTlQnIHwgdHJhbnNsYXRlfX1cIiBbKG5nTW9kZWwpXT1cInF1aWxsQ29udGVudFwiXHJcbiAgICAgICAgW3Nhbml0aXplXT1cInRydWVcIiBbcmVhZE9ubHldPVwiZGlzYWJsZWRcIiBbbWF4TGVuZ3RoXT1cIm1heEZpZWxkQ2hhcmFjdGVyc1wiIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiIHRoZW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIiFkaXNhYmxlZFwiIHF1aWxsLWVkaXRvci10b29sYmFyIGNsYXNzPVwic3BhY2luZy1lbGVtZW50LW5lZ2F0aXZlIHBlcHBlcmktYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwicWwtZm9ybWF0c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHFsLWZvbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZXJpZlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtb25vc3BhY2VcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHFsLXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic21hbGxcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsYXJnZVwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJodWdlXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9zcGFuPiAtLT5cclxuICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cInFsLWZvcm1hdHNcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJzcGFjaW5nLWVsZW1lbnQgcGVwcGVyaS1idXR0b24gaWNvbi1idXR0b24gbWQgd2VhayBxbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFsc2VcIiBzZWxlY3RlZD48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L3NwYW4+IC0tPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInFsLWZvcm1hdHNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHFsLWJvbGRcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHFsLWl0YWxpY1wiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwic3BhY2luZy1lbGVtZW50IHBlcHBlcmktYnV0dG9uIGljb24tYnV0dG9uIG1kIHdlYWsgcWwtdW5kZXJsaW5lXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHFsLXN0cmlrZVwiPjwvYnV0dG9uPiAtLT5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInFsLWZvcm1hdHNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHFsLWxpbmtcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHFsLWltYWdlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxbC1mb3JtYXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJzcGFjaW5nLWVsZW1lbnQgcGVwcGVyaS1idXR0b24gaWNvbi1idXR0b24gbWQgd2VhayBxbC1saXN0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9yZGVyZWRcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHFsLWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYnVsbGV0XCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxbC1mb3JtYXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic3BhY2luZy1lbGVtZW50IHBlcHBlcmktYnV0dG9uIGljb24tYnV0dG9uIG1kIHdlYWsgcWwtY29sb3JcIj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPHNlbGVjdCBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHFsLWJhY2tncm91bmRcIj48L3NlbGVjdD4gLS0+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxbC1mb3JtYXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic3BhY2luZy1lbGVtZW50IHBlcHBlcmktYnV0dG9uIGljb24tYnV0dG9uIG1kIHdlYWsgcWwtYWxpZ25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZW50ZXJcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmlnaHRcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwianVzdGlmeVwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvcXVpbGwtZWRpdG9yPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==