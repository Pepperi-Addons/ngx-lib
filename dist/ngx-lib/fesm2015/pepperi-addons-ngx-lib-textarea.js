import { ɵɵelement, ɵɵnextContext, ɵɵreference, ɵɵproperty, ɵɵpipe, ɵɵstyleProp, ɵɵpropertyInterpolate, ɵɵpureFunction1, ɵɵpipeBind1, ɵɵsanitizeHtml, ɵɵgetCurrentView, ɵɵelementStart, ɵɵtemplate, ɵɵlistener, ɵɵrestoreView, ɵɵtext, ɵɵelementEnd, ɵɵpureFunction4, ɵɵadvance, ɵɵpipeBind2, ɵɵelementContainer, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵpureFunction0, ɵɵtextInterpolate1, ɵɵclassMap, ɵɵpureFunction2, ɵɵtextInterpolate, ɵɵtemplateRefExtractor, EventEmitter, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgStyle, NgTemplateOutlet, CommonModule } from '@angular/common';
import { NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, MaxLengthValidator, NgControlStatus, FormControlName, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatSuffix, MatError, MatPrefix, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LAYOUT_TYPE, CustomizationService, SafeHtmlPipe, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemEdit, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiTextboxIconComponent, PepperiTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { DialogData, DialogDataType, DialogService, PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { Dir } from '@angular/cdk/bidi';
import { TranslatePipe } from '@ngx-translate/core';

const _c0 = ["input"];
function PepperiTextareaComponent_ng_template_1_pep_field_title_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-field-title", 11);
} if (rf & 2) {
    ɵɵnextContext();
    const _r8 = ɵɵreference(4);
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("label", ctx_r7.label)("required", ctx_r7.required)("disabled", ctx_r7.disabled)("maxFieldCharacters", ctx_r7.maxFieldCharacters)("xAlignment", ctx_r7.xAlignment)("showTitle", ctx_r7.showTitle)("inputLength", _r8.value == null ? null : _r8.value.length);
} }
const _c1 = function (a1) { return { color: "textColor", "text-align": a1 }; };
function PepperiTextareaComponent_ng_template_1_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 12);
    ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵstyleProp("height", ctx_r9.fieldHeight);
    ɵɵpropertyInterpolate("title", ctx_r9.value);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(7, _c1, ctx_r9.xAlignment == "2" ? "right" : "left"))("innerHtml", ɵɵpipeBind1(1, 5, ctx_r9.value), ɵɵsanitizeHtml);
} }
const _c2 = function (a0, a1, a2, a3) { return { "right-alignment": a0, "one-row": a1, "stand-alone": a2, "pepperi-textarea-card-container": a3 }; };
const _c3 = function (a0) { return { "pepperi-table-textarea": a0 }; };
const _c4 = function (a0) { return { "card-one-row-icon": a0 }; };
const _c5 = function (a0) { return { field: a0 }; };
function PepperiTextareaComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, PepperiTextareaComponent_ng_template_1_pep_field_title_1_Template, 1, 7, "pep-field-title", 4);
    ɵɵelementStart(2, "mat-form-field", 5);
    ɵɵelementStart(3, "textarea", 6, 7);
    ɵɵlistener("blur", function PepperiTextareaComponent_ng_template_1_Template_textarea_blur_3_listener($event) { ɵɵrestoreView(_r11); const ctx_r10 = ɵɵnextContext(); return ctx_r10.onBlur($event); });
    ɵɵtext(5, "                ");
    ɵɵelementEnd();
    ɵɵtemplate(6, PepperiTextareaComponent_ng_template_1_div_6_Template, 2, 9, "div", 8);
    ɵɵelementStart(7, "pep-textbox-icon", 9);
    ɵɵlistener("iconClicked", function PepperiTextareaComponent_ng_template_1_Template_pep_textbox_icon_iconClicked_7_listener() { ɵɵrestoreView(_r11); const ctx_r12 = ɵɵnextContext(); return ctx_r12.openDialog(); });
    ɵɵelementEnd();
    ɵɵelementStart(8, "mat-error");
    ɵɵelement(9, "span", 10);
    ɵɵpipe(10, "translate");
    ɵɵpipe(11, "translate");
    ɵɵpipe(12, "translate");
    ɵɵpipe(13, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const isFormView_r6 = ctx.isFormView;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction4(34, _c2, ctx_r1.xAlignment == "2", ctx_r1.rowSpan === 1, ctx_r1.standAlone, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", isFormView_r6);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("dir", ctx_r1.xAlignment == "2" ? "rtl" : "ltr");
    ɵɵproperty("ngClass", ɵɵpureFunction1(39, _c3, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable));
    ɵɵadvance(1);
    ɵɵstyleProp("height", ctx_r1.fieldHeight);
    ɵɵpropertyInterpolate("title", ctx_r1.value);
    ɵɵpropertyInterpolate("maxlength", ctx_r1.maxFieldCharacters > 0 ? ctx_r1.maxFieldCharacters : 99999);
    ɵɵproperty("hidden", ctx_r1.readonly)("id", ctx_r1.key)("value", ctx_r1.value)("ngStyle", ɵɵpureFunction1(41, _c1, ctx_r1.xAlignment == "2" ? "right" : "left"))("formControlName", ctx_r1.key)("disabled", ctx_r1.disabled);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.readonly);
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r1.value)("label", ctx_r1.label)("type", ctx_r1.controlType)("disabled", ctx_r1.disabled)("ngClass", ɵɵpureFunction1(43, _c4, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard && ctx_r1.rowSpan === 1));
    ɵɵadvance(2);
    ɵɵproperty("title", ctx_r1.required && ctx_r1.value.length == 0 ? ɵɵpipeBind2(10, 22, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(45, _c5, ctx_r1.label)) : ɵɵpipeBind2(11, 25, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(47, _c5, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.value.length == 0 ? ɵɵpipeBind2(12, 28, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(49, _c5, ctx_r1.label)) : ɵɵpipeBind2(13, 31, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(51, _c5, ctx_r1.label)));
} }
function PepperiTextareaComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c6 = function () { return { isFormView: true }; };
function PepperiTextareaComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiTextareaComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c6));
} }
function PepperiTextareaComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiTextareaComponent_ng_container_4_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c7 = function () { return { isFormView: false }; };
function PepperiTextareaComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiTextareaComponent_ng_container_4_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c7));
} }
function PepperiTextareaComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r20.label);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r20.label, "\u00A0");
} }
const _c8 = function (a0) { return { "self-end": a0 }; };
function PepperiTextareaComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 22);
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 23);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c8, ctx_r21.value && ctx_r21.value !== ""));
} }
const _c9 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
const _c10 = function (a0) { return { "-webkit-line-clamp": a0 }; };
function PepperiTextareaComponent_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17);
    ɵɵlistener("click", function PepperiTextareaComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(2); return !ctx_r22.disabled ? ctx_r22.cardTemplateClicked($event) : ""; });
    ɵɵtemplate(1, PepperiTextareaComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 18);
    ɵɵelementStart(2, "span", 19);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, PepperiTextareaComponent_ng_container_4_ng_template_4_button_4_Template, 3, 3, "button", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵclassMap("text-align-" + ctx_r18.xAlignment);
    ɵɵstyleProp("height", ctx_r18.fieldHeight);
    ɵɵproperty("ngClass", ɵɵpureFunction2(11, _c9, ctx_r18.rowSpan === 1, ctx_r18.isActive && !ctx_r18.disabled))("ngStyle", ɵɵpureFunction1(14, _c10, ctx_r18.rowSpan));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r18.showTitle && ctx_r18.label != "");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r18.value);
    ɵɵproperty("id", ctx_r18.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r18.value);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r18.isActive && !ctx_r18.disabled);
} }
function PepperiTextareaComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiTextareaComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 14);
    ɵɵtemplate(2, PepperiTextareaComponent_ng_container_4_ng_template_2_Template, 1, 3, "ng-template", null, 15, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiTextareaComponent_ng_container_4_ng_template_4_Template, 5, 16, "ng-template", null, 16, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r15 = ɵɵreference(3);
    const _r17 = ɵɵreference(5);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r15)("ngIfElse", _r17);
} }
function PepperiTextareaComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiTextareaComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c7));
} }
function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-textbox-icon", 32);
    ɵɵlistener("iconClicked", function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_2_Template_pep_textbox_icon_iconClicked_0_listener() { ɵɵrestoreView(_r38); const ctx_r37 = ɵɵnextContext(4); return ctx_r37.openDialog(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = ɵɵnextContext(4);
    ɵɵproperty("value", ctx_r35.value)("label", ctx_r35.label)("type", ctx_r35.controlType)("disabled", ctx_r35.disabled);
} }
function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-textbox-icon", 33);
    ɵɵlistener("iconClicked", function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_3_Template_pep_textbox_icon_iconClicked_0_listener() { ɵɵrestoreView(_r40); const ctx_r39 = ɵɵnextContext(4); return ctx_r39.openDialog(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = ɵɵnextContext(4);
    ɵɵproperty("value", ctx_r36.value)("label", ctx_r36.label)("type", ctx_r36.controlType)("disabled", ctx_r36.disabled);
} }
const _c11 = function (a0) { return { readonly: a0 }; };
const _c12 = function (a0, a1) { return { color: a0, "text-align": a1 }; };
function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field", 28);
    ɵɵelement(1, "input", 29);
    ɵɵtemplate(2, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_2_Template, 1, 4, "pep-textbox-icon", 30);
    ɵɵtemplate(3, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_3_Template, 1, 4, "pep-textbox-icon", 31);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("dir", ctx_r32.xAlignment == "2" ? "rtl" : "ltr");
    ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c11, ctx_r32.disabled));
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r32.value);
    ɵɵproperty("id", ctx_r32.key)("ngClass", ɵɵpureFunction1(13, _c11, ctx_r32.disabled))("ngStyle", ɵɵpureFunction2(15, _c12, ctx_r32.textColor, ctx_r32.xAlignment == "3" ? "center" : ctx_r32.xAlignment == "2" ? "right" : "left"))("formControlName", ctx_r32.key)("value", ctx_r32.value)("disabled", true);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r32.disabled && ctx_r32.xAlignment == "2");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r32.disabled && (ctx_r32.xAlignment == "1" || ctx_r32.xAlignment == "0"));
} }
function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\u00A0");
    ɵɵelementEnd();
} }
function PepperiTextareaComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 14);
    ɵɵtemplate(1, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template, 4, 18, "ng-template", null, 26, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 0, "ng-template", null, 27, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r31 = ɵɵreference(2);
    const _r33 = ɵɵreference(4);
    const ctx_r28 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", (ctx_r28.value == null ? null : ctx_r28.value.length) > 0)("ngIfThen", _r31)("ngIfElse", _r33);
} }
function PepperiTextareaComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiTextareaComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 14);
    ɵɵtemplate(2, PepperiTextareaComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 24, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiTextareaComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 25, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r25 = ɵɵreference(3);
    const _r27 = ɵɵreference(5);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r25)("ngIfElse", _r27);
} }
function PepperiTextareaComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiTextareaComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiTextareaComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c6));
} }
class PepperiTextareaComponent {
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
PepperiTextareaComponent.ɵfac = function PepperiTextareaComponent_Factory(t) { return new (t || PepperiTextareaComponent)(ɵɵdirectiveInject(DialogService), ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
PepperiTextareaComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiTextareaComponent, selectors: [["pep-textarea"]], viewQuery: function PepperiTextareaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { key: "key", value: "value", label: "label", required: "required", disabled: "disabled", readonly: "readonly", maxFieldCharacters: "maxFieldCharacters", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", lastFocusField: "lastFocusField", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, features: [ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [1, "pepperi-textarea-container", 3, "ngClass"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength", 4, "ngIf"], ["appearance", "outline", 3, "dir", "ngClass"], ["matInput", "", 1, "body-sm", 3, "hidden", "id", "title", "value", "maxlength", "ngStyle", "formControlName", "disabled", "blur"], ["input", ""], ["class", "body-sm disable-text-div", 3, "title", "ngStyle", "innerHtml", "height", 4, "ngIf"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "ngClass", "iconClicked"], [1, "body-xs", 3, "title", "innerText"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength"], [1, "body-sm", "disable-text-div", 3, "title", "ngStyle", "innerHtml"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["editBlock", ""], ["readOnlyBlock", ""], [1, "pepperi-textarea-card-container", "card-flex-container", 3, "ngClass", "ngStyle", "click"], ["class", " body-xs title no-shrink", 3, "title", 4, "ngIf"], [1, "body-sm", "value", "wrap", 3, "id", "title"], ["class", "pepperi-button weak card-edit-button self-start", "mat-button", "", 3, "ngClass", 4, "ngIf"], [1, "body-xs", "title", "no-shrink", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button", "self-start", 3, "ngClass"], ["name", "system_edit"], ["selectedBlock", ""], ["notSelectedBlock", ""], ["notEmptyBlock", ""], ["emptyBlock", ""], ["appearance", "outline", 1, "pepperi-report-textarea", 3, "dir", "ngClass"], ["matInput", "", "type", "text", 1, "body-sm", "pepperi-report-input", 3, "id", "ngClass", "ngStyle", "title", "formControlName", "value", "disabled"], ["matPrefix", "", 3, "value", "label", "type", "disabled", "iconClicked", 4, "ngIf"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "iconClicked", 4, "ngIf"], ["matPrefix", "", 3, "value", "label", "type", "disabled", "iconClicked"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "iconClicked"]], template: function PepperiTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PepperiTextareaComponent_ng_template_1_Template, 14, 53, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PepperiTextareaComponent_ng_container_3_Template, 2, 3, "ng-container", 2);
        ɵɵtemplate(4, PepperiTextareaComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(5, PepperiTextareaComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(6, PepperiTextareaComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.Editmodal);
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, NgClass, MatFormField, Dir, MatInput, DefaultValueAccessor, MaxLengthValidator, NgStyle, NgControlStatus, FormControlName, PepperiTextboxIconComponent, MatSuffix, MatError, PepperiFieldTitleComponent, NgTemplateOutlet, MatButton, MatIcon, PepperiIconComponent, MatPrefix], pipes: [TranslatePipe, SafeHtmlPipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.disable-text-div[_ngcontent-%COMP%]{display:inline-block;margin:0;overflow-y:hidden;padding:.5rem 1.5rem .5rem 0;vertical-align:middle}.right-alignment[_ngcontent-%COMP%]   .disable-text-div[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'pep-textarea',
                templateUrl: './textarea.component.html',
                styleUrls: ['./textarea.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DialogService }, { type: CustomizationService }, { type: Renderer2 }, { type: ElementRef }]; }, { key: [{
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

class PepperiTextareaModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit
        ]);
    }
}
PepperiTextareaModule.ɵmod = ɵɵdefineNgModule({ type: PepperiTextareaModule });
PepperiTextareaModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiTextareaModule_Factory(t) { return new (t || PepperiTextareaModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiTextboxIconModule,
            PepperiDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiTextareaModule, { declarations: [PepperiTextareaComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiTextboxIconModule,
        PepperiDialogModule], exports: [PepperiTextareaComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiTextareaModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiTextboxIconModule,
                    PepperiDialogModule
                ],
                exports: [PepperiTextareaComponent],
                declarations: [PepperiTextareaComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/textarea
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiTextareaComponent, PepperiTextareaModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-textarea.js.map
