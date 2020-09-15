import { ɵɵelement, ɵɵnextContext, ɵɵreference, ɵɵproperty, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵelementContainer, ɵɵpipe, ɵɵpipeBind2, ɵɵpureFunction1, ɵɵpipeBind1, ɵɵpureFunction2, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵpropertyInterpolate, ɵɵpureFunction0, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵclassMap, ɵɵtextInterpolate, ɵɵsanitizeUrl, EventEmitter, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgStyle, NgClass, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, CommonModule } from '@angular/common';
import { FormBuilder, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, MaxLengthValidator, NgControlStatus, FormControlName, FormGroupName, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatError, MatPrefix, MatSuffix, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LAYOUT_TYPE, CustomizationService, ToNumber, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemEdit, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiTextboxIconComponent, PepperiTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { TranslatePipe } from '@ngx-translate/core';

const _c0 = ["input"];
function PepperiTextboxComponent_ng_template_1_pep_field_title_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-field-title", 13);
} if (rf & 2) {
    ɵɵnextContext();
    const _r9 = ɵɵreference(3);
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("label", ctx_r8.label)("required", ctx_r8.required)("disabled", ctx_r8.disabled)("maxFieldCharacters", ctx_r8.maxFieldCharacters)("xAlignment", ctx_r8.xAlignment)("showTitle", ctx_r8.showTitle)("inputLength", _r9.value == null ? null : _r9.value.length);
} }
function PepperiTextboxComponent_ng_template_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 14);
    ɵɵelementStart(1, "a", 15);
    ɵɵlistener("click", function PepperiTextboxComponent_ng_template_1_span_4_Template_a_click_1_listener() { ɵɵrestoreView(_r19); const ctx_r18 = ɵɵnextContext(2); return ctx_r18.anchorClicked(); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("id", ctx_r10.key)("name", ctx_r10.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r10.formattedValue, "");
} }
function PepperiTextboxComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { field: a0 }; };
function PepperiTextboxComponent_ng_template_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 16);
    ɵɵpipe(1, "translate");
    ɵɵpipe(2, "translate");
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵproperty("title", ɵɵpipeBind2(1, 2, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(8, _c1, ctx_r13.label)))("innerText", ɵɵpipeBind2(2, 5, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(10, _c1, ctx_r13.label)));
} }
const _c2 = function (a0, a1) { return { min: a0, max: a1 }; };
function PepperiTextboxComponent_ng_template_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 16);
    ɵɵpipe(1, "toNumber");
    ɵɵpipe(2, "toNumber");
    ɵɵpipe(3, "translate");
    ɵɵpipe(4, "translate");
    ɵɵpipe(5, "toNumber");
    ɵɵpipe(6, "toNumber");
    ɵɵpipe(7, "translate");
    ɵɵpipe(8, "translate");
} if (rf & 2) {
    ɵɵnextContext();
    const _r9 = ɵɵreference(3);
    const ctx_r15 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 2, _r9.value) > ctx_r15.maxValue || ɵɵpipeBind1(2, 4, _r9.value) < ctx_r15.minValue ? ɵɵpipeBind2(3, 6, "MESSAGES.ERROR_RANGE_IS_NOT_VALID", ɵɵpureFunction2(22, _c2, ctx_r15.minValue, ctx_r15.maxValue)) : ɵɵpipeBind2(4, 9, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(25, _c1, ctx_r15.label)))("innerText", ɵɵpipeBind1(5, 12, _r9.value) > ctx_r15.maxValue || ɵɵpipeBind1(6, 14, _r9.value) < ctx_r15.minValue ? ɵɵpipeBind2(7, 16, "MESSAGES.ERROR_RANGE_IS_NOT_VALID", ɵɵpureFunction2(27, _c2, ctx_r15.minValue, ctx_r15.maxValue)) : ɵɵpipeBind2(8, 19, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(30, _c1, ctx_r15.label)));
} }
function PepperiTextboxComponent_ng_template_1_pep_textbox_icon_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-textbox-icon", 17);
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r16.value)("label", ctx_r16.label)("type", ctx_r16.type)("disabled", ctx_r16.disabled);
} }
function PepperiTextboxComponent_ng_template_1_pep_textbox_icon_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-textbox-icon", 18);
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r17.value)("label", ctx_r17.label)("type", ctx_r17.type)("disabled", ctx_r17.disabled);
} }
const _c3 = function (a0, a1) { return { color: a0, "text-align": a1 }; };
const _c4 = function (a0) { return { "disable-hidden": a0 }; };
function PepperiTextboxComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵtemplate(0, PepperiTextboxComponent_ng_template_1_pep_field_title_0_Template, 1, 7, "pep-field-title", 3);
    ɵɵelementStart(1, "mat-form-field", 4);
    ɵɵelementStart(2, "input", 5, 6);
    ɵɵlistener("keyup", function PepperiTextboxComponent_ng_template_1_Template_input_keyup_2_listener($event) { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(); return ctx_r20.onKeyUp($event); })("keypress", function PepperiTextboxComponent_ng_template_1_Template_input_keypress_2_listener($event) { ɵɵrestoreView(_r21); const ctx_r22 = ɵɵnextContext(); return ctx_r22.onKeyPress($event); })("blur", function PepperiTextboxComponent_ng_template_1_Template_input_blur_2_listener($event) { ɵɵrestoreView(_r21); const ctx_r23 = ɵɵnextContext(); return ctx_r23.onBlur($event); })("keyup.enter", function PepperiTextboxComponent_ng_template_1_Template_input_keyup_enter_2_listener($event) { ɵɵrestoreView(_r21); return $event == null ? null : $event.currentTarget == null ? null : $event.currentTarget.blur(); })("focus", function PepperiTextboxComponent_ng_template_1_Template_input_focus_2_listener($event) { ɵɵrestoreView(_r21); const ctx_r25 = ɵɵnextContext(); return ctx_r25.onFocus($event); });
    ɵɵelementEnd();
    ɵɵtemplate(4, PepperiTextboxComponent_ng_template_1_span_4_Template, 3, 3, "span", 7);
    ɵɵelementStart(5, "mat-error");
    ɵɵtemplate(6, PepperiTextboxComponent_ng_template_1_ng_container_6_Template, 1, 0, "ng-container", 8);
    ɵɵtemplate(7, PepperiTextboxComponent_ng_template_1_ng_template_7_Template, 3, 12, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵtemplate(9, PepperiTextboxComponent_ng_template_1_ng_template_9_Template, 9, 32, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵtemplate(11, PepperiTextboxComponent_ng_template_1_pep_textbox_icon_11_Template, 1, 4, "pep-textbox-icon", 11);
    ɵɵtemplate(12, PepperiTextboxComponent_ng_template_1_pep_textbox_icon_12_Template, 1, 4, "pep-textbox-icon", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const isFormView_r6 = ctx.isFormView;
    const hasParent_r7 = ctx.hasParent;
    const _r9 = ɵɵreference(3);
    const _r12 = ɵɵreference(8);
    const _r14 = ɵɵreference(10);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", isFormView_r6 && !hasParent_r7);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("maxlength", ctx_r1.maxFieldCharacters > 0 ? ctx_r1.maxFieldCharacters : 99999);
    ɵɵpropertyInterpolate("title", ctx_r1.formattedValue);
    ɵɵproperty("id", ctx_r1.key)("name", ctx_r1.key)("placeholder", hasParent_r7 && !ctx_r1.disabled ? ctx_r1.placeholder : "")("ngStyle", ɵɵpureFunction2(18, _c3, ctx_r1.textColor, ctx_r1.xAlignment == "3" ? "center" : ctx_r1.xAlignment == "2" ? "right" : "left"))("formControlName", ctx_r1.key)("type", ctx_r1.type)("value", ctx_r1.type == "link" ? ctx_r1.formattedValue : ctx_r1.isFocus ? ctx_r1.value : ctx_r1.formattedValue)("disabled", ctx_r1.disabled)("ngClass", ɵɵpureFunction1(21, _c4, ctx_r1.disabled && ctx_r1.formattedValue.length > 0 && (ctx_r1.type === "phone" || ctx_r1.type === "email" || ctx_r1.type === "link")));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.disabled && ctx_r1.formattedValue.length > 0 && (ctx_r1.type === "phone" || ctx_r1.type === "email" || ctx_r1.type === "link"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.required && _r9.value.length == 0)("ngIfThen", _r12)("ngIfElse", _r14);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", isFormView_r6 && ctx_r1.xAlignment == "2");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", isFormView_r6 && (ctx_r1.xAlignment == "1" || ctx_r1.xAlignment == "0"));
} }
function PepperiTextboxComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiTextboxComponent_ng_container_3_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c5 = function () { return { isFormView: true, hasParent: false }; };
function PepperiTextboxComponent_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiTextboxComponent_ng_container_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 21);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c5));
} }
function PepperiTextboxComponent_ng_container_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0, 22);
    ɵɵelementStart(1, "mat-form-field", 4);
    ɵɵelementStart(2, "input", 23);
    ɵɵlistener("keyup", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_keyup_2_listener($event) { ɵɵrestoreView(_r33); const ctx_r32 = ɵɵnextContext(2); return ctx_r32.onKeyUp($event); })("keypress", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_keypress_2_listener($event) { ɵɵrestoreView(_r33); const ctx_r34 = ɵɵnextContext(2); return ctx_r34.onKeyPress($event); })("blur", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_blur_2_listener($event) { ɵɵrestoreView(_r33); const ctx_r35 = ɵɵnextContext(2); return ctx_r35.onBlur($event); })("keyup.enter", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_keyup_enter_2_listener($event) { ɵɵrestoreView(_r33); return $event == null ? null : $event.currentTarget == null ? null : $event.currentTarget.blur(); })("focus", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_focus_2_listener($event) { ɵɵrestoreView(_r33); const ctx_r37 = ɵɵnextContext(2); return ctx_r37.onFocus($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r30 = ɵɵnextContext(2);
    ɵɵproperty("formGroupName", ctx_r30.parentFieldKey);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", ctx_r30.formattedValue);
    ɵɵproperty("id", ctx_r30.key)("name", ctx_r30.key)("placeholder", !ctx_r30.disabled ? ctx_r30.placeholder : "")("formControlName", ctx_r30.key)("value", ctx_r30.value)("disabled", ctx_r30.disabled);
} }
function PepperiTextboxComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiTextboxComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵtemplate(2, PepperiTextboxComponent_ng_container_3_ng_template_2_Template, 1, 3, "ng-template", null, 19, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiTextboxComponent_ng_container_3_ng_template_4_Template, 3, 8, "ng-template", null, 20, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r27 = ɵɵreference(3);
    const _r29 = ɵɵreference(5);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.parentFieldKey)("ngIfThen", _r29)("ngIfElse", _r27);
} }
function PepperiTextboxComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiTextboxComponent_ng_container_4_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c6 = function (a0) { return { "one-row": a0 }; };
const _c7 = function () { return { isFormView: false, hasParent: false }; };
function PepperiTextboxComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵtemplate(1, PepperiTextboxComponent_ng_container_4_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r40 = ɵɵnextContext(2);
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c6, ctx_r40.rowSpan === 1));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(5, _c7));
} }
function PepperiTextboxComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r44 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r44.label);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r44.label, "\u00A0");
} }
function PepperiTextboxComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 32);
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 33);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const _c8 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
function PepperiTextboxComponent_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27);
    ɵɵlistener("click", function PepperiTextboxComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { ɵɵrestoreView(_r47); const ctx_r46 = ɵɵnextContext(2); return !ctx_r46.disabled ? ctx_r46.cardTemplateClicked($event) : ""; });
    ɵɵtemplate(1, PepperiTextboxComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 28);
    ɵɵelementStart(2, "span", 29);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, PepperiTextboxComponent_ng_container_4_ng_template_4_button_4_Template, 3, 0, "button", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r42 = ɵɵnextContext(2);
    ɵɵclassMap("text-align-" + ctx_r42.xAlignment);
    ɵɵproperty("ngClass", ɵɵpureFunction2(8, _c8, ctx_r42.rowSpan === 1, ctx_r42.isActive && !ctx_r42.disabled));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r42.showTitle && ctx_r42.label != "");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r42.formattedValue);
    ɵɵproperty("id", ctx_r42.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r42.formattedValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r42.isActive && !ctx_r42.disabled);
} }
function PepperiTextboxComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiTextboxComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵtemplate(2, PepperiTextboxComponent_ng_container_4_ng_template_2_Template, 2, 6, "ng-template", null, 24, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiTextboxComponent_ng_container_4_ng_template_4_Template, 5, 11, "ng-template", null, 25, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r39 = ɵɵreference(3);
    const _r41 = ɵɵreference(5);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r39)("ngIfElse", _r41);
} }
function PepperiTextboxComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiTextboxComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiTextboxComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiTextboxComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 21);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c7));
} }
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c9 = function (a0) { return { "disable": a0 }; };
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 42);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r61 = ɵɵnextContext(5);
    ɵɵpropertyInterpolate("title", ctx_r61.formattedValue);
    ɵɵpropertyInterpolate("href", ctx_r61.value ? ctx_r61.value : ctx_r61.formattedValue, ɵɵsanitizeUrl);
    ɵɵproperty("id", ctx_r61.key)("ngClass", ɵɵpureFunction1(5, _c9, ctx_r61.disabled && ctx_r61.value === ""));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r61.formattedValue);
} }
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_a_1_Template, 2, 7, "a", 41);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r59 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r59.formattedValue != null);
} }
const _c10 = function (a0) { return { "readonly": a0 }; };
const _c11 = function (a0) { return { color: a0 }; };
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 43);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r60 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r60.formattedValue);
    ɵɵproperty("id", ctx_r60.key)("ngClass", ɵɵpureFunction1(5, _c10, ctx_r60.disabled))("ngStyle", ɵɵpureFunction1(7, _c11, ctx_r60.textColor));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r60.formattedValue);
} }
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 38);
    ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 39);
    ɵɵtemplate(2, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_2_Template, 3, 9, "ng-container", 40);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r56 = ɵɵnextContext(3);
    ɵɵproperty("ngSwitch", ctx_r56.type);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "link");
} }
function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 44);
    ɵɵtext(1, "\u00A0");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r58 = ɵɵnextContext(3);
    ɵɵproperty("id", ctx_r58.key);
} }
function PepperiTextboxComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 8);
    ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_Template, 3, 2, "ng-template", null, 36, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 1, "ng-template", null, 37, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r55 = ɵɵreference(2);
    const _r57 = ɵɵreference(4);
    const ctx_r52 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", (ctx_r52.formattedValue == null ? null : ctx_r52.formattedValue.length) > 0)("ngIfThen", _r55)("ngIfElse", _r57);
} }
function PepperiTextboxComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵtemplate(2, PepperiTextboxComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 34, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiTextboxComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 35, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r49 = ɵɵreference(3);
    const _r51 = ɵɵreference(5);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r49)("ngIfElse", _r51);
} }
function PepperiTextboxComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiTextboxComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiTextboxComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c5));
} }
class PepperiTextboxComponent {
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
PepperiTextboxComponent.ɵfac = function PepperiTextboxComponent_Factory(t) { return new (t || PepperiTextboxComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
PepperiTextboxComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiTextboxComponent, selectors: [["pep-textbox"]], viewQuery: function PepperiTextboxComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", placeholder: "placeholder", type: "type", required: "required", disabled: "disabled", readonly: "readonly", maxFieldCharacters: "maxFieldCharacters", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", lastFocusField: "lastFocusField", minValue: "minValue", maxValue: "maxValue", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType", parentFieldKey: "parentFieldKey" }, outputs: { valueChanged: "valueChanged", formValidationChanged: "formValidationChanged" }, features: [ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", 1, "body-sm", 3, "id", "name", "maxlength", "placeholder", "ngStyle", "title", "formControlName", "type", "value", "disabled", "ngClass", "keyup", "keypress", "blur", "keyup.enter", "focus"], ["input", ""], ["class", "dis-grid", 4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["requiredError", ""], ["otherError", ""], ["matPrefix", "", 3, "value", "label", "type", "disabled", 4, "ngIf"], ["matSuffix", "", 3, "value", "label", "type", "disabled", 4, "ngIf"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength"], [1, "dis-grid"], ["href", "javascript:void(0)", 1, "color-link", "body-sm", 3, "id", "name", "click"], [1, "body-xs", 3, "title", "innerText"], ["matPrefix", "", 3, "value", "label", "type", "disabled"], ["matSuffix", "", 3, "value", "label", "type", "disabled"], ["regularBlock", ""], ["groupedBlock", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "formGroupName"], ["matInput", "", "autocomplete", "off", 1, "body-sm", 3, "id", "name", "placeholder", "title", "formControlName", "value", "disabled", "keyup", "keypress", "blur", "keyup.enter", "focus"], ["editBlock", ""], ["readOnlyBlock", ""], [3, "ngClass"], [1, "pepperi-card-input", "card-flex-container", 3, "ngClass", "click"], ["class", "body-xs title", 3, "title", 4, "ngIf"], [1, "body-sm", "value", 3, "id", "title"], ["class", "pepperi-button weak card-edit-button", "mat-button", "", 4, "ngIf"], [1, "body-xs", "title", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button"], ["name", "system_edit"], ["selectedBlock", ""], ["notSelectedBlock", ""], ["notEmptyBlock", ""], ["emptyBlock", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "color-link body-sm pepperi-report-input", "target", "_blank", 3, "id", "ngClass", "title", "href", 4, "ngIf"], ["target", "_blank", 1, "color-link", "body-sm", "pepperi-report-input", 3, "id", "ngClass", "title", "href"], [1, "body-sm", "pepperi-report-input", 3, "id", "ngClass", "title", "ngStyle"], [3, "id"]], template: function PepperiTextboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PepperiTextboxComponent_ng_template_1_Template, 13, 23, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PepperiTextboxComponent_ng_container_3_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(4, PepperiTextboxComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(5, PepperiTextboxComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(6, PepperiTextboxComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
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
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, MatFormField, MatInput, DefaultValueAccessor, MaxLengthValidator, NgStyle, NgControlStatus, FormControlName, NgClass, MatError, PepperiFieldTitleComponent, PepperiTextboxIconComponent, MatPrefix, MatSuffix, NgTemplateOutlet, FormGroupName, MatButton, MatIcon, PepperiIconComponent, NgSwitch, NgSwitchCase, NgSwitchDefault], pipes: [TranslatePipe, ToNumber], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.disable-hidden[_ngcontent-%COMP%]{display:none}.dis-grid[_ngcontent-%COMP%]{display:-ms-grid;display:grid}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiTextboxComponent, [{
        type: Component,
        args: [{
                selector: 'pep-textbox',
                templateUrl: './textbox.component.html',
                styleUrls: ['./textbox.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: FormBuilder }, { type: CustomizationService }, { type: Renderer2 }, { type: ElementRef }]; }, { key: [{
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

class PepperiTextboxModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit
        ]);
    }
}
PepperiTextboxModule.ɵmod = ɵɵdefineNgModule({ type: PepperiTextboxModule });
PepperiTextboxModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiTextboxModule_Factory(t) { return new (t || PepperiTextboxModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
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
            PepperiTextboxIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiTextboxModule, { declarations: [PepperiTextboxComponent], imports: [CommonModule,
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
        PepperiTextboxIconModule], exports: [PepperiTextboxComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiTextboxModule, [{
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
                    PepperiTextboxIconModule
                ],
                exports: [PepperiTextboxComponent,],
                declarations: [PepperiTextboxComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/textbox
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiTextboxComponent, PepperiTextboxModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-textbox.js.map
