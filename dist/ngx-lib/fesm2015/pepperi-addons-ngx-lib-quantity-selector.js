import { ɵɵdefinePipe, ɵsetClassMetadata, Pipe, ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵelementContainer, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵclassMapInterpolate1, ɵɵpropertyInterpolate, ɵɵpureFunction3, ɵɵadvance, ɵɵtextInterpolate1, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵpureFunction2, ɵɵpipe, ɵɵtextInterpolate2, ɵɵpipeBind1, ɵɵtemplate, ɵɵpipeBind2, ɵɵelementContainerStart, ɵɵtemplateRefExtractor, ɵɵelementContainerEnd, ɵɵreference, ɵɵpureFunction5, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormField, MatPrefix, MatSuffix, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatBadge, MatBadgeModule } from '@angular/material/badge';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LAYOUT_TYPE, STYLE_TYPE, CustomizationService, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconNumberMinus, pepperiIconNumberPlus, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as $ from 'jquery';
import { TranslatePipe } from '@ngx-translate/core';

class QuantitySelectorNumber {
    transform(value, allowDecimal) {
        const tmpValue = parseFloat(value);
        if (tmpValue === 0) {
            return '0';
        }
        else if (allowDecimal) {
            return tmpValue.toString();
        }
        else {
            return parseInt(value).toString();
        }
    }
}
QuantitySelectorNumber.ɵfac = function QuantitySelectorNumber_Factory(t) { return new (t || QuantitySelectorNumber)(); };
QuantitySelectorNumber.ɵpipe = ɵɵdefinePipe({ name: "quantitySelectorNumber", type: QuantitySelectorNumber, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QuantitySelectorNumber, [{
        type: Pipe,
        args: [{ name: 'quantitySelectorNumber' }]
    }], null, null); })();

const _c0 = ["QSCont"];
const _c1 = ["QSInput"];
function PepperiQuantitySelectorComponent_ng_template_1_pep_field_title_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-field-title", 6);
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("label", ctx_r7.label)("required", ctx_r7.required)("disabled", ctx_r7.disabled)("showTitle", ctx_r7.showTitle)("xAlignment", ctx_r7.xAlignment);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1, a2) { return { caution: a0, md: a1, xs: a2 }; };
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("pepperi-button ", ctx_r14.styleClass, " ellipsis");
    ɵɵpropertyInterpolate("title", ctx_r14.formattedValue);
    ɵɵproperty("id", ctx_r14.key)("ngClass", ɵɵpureFunction3(7, _c2, ctx_r14.isCaution, ctx_r14.rowSpan !== 1, ctx_r14.rowSpan === 1));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r14.formattedValue, " ");
} }
const _c3 = function (a0, a1) { return { caution: a0, "keep-background-on-focus": a1 }; };
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_4_Template_button_click_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r21 = ɵɵnextContext(4); return ctx_r21.decrement($event); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c3, ctx_r18.isCaution && ctx_r18.styleClass !== ctx_r18.STYLE_TYPE.Strong, ctx_r18.styleClass === ctx_r18.STYLE_TYPE.Strong));
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 18);
    ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_5_Template_button_click_0_listener($event) { ɵɵrestoreView(_r24); const ctx_r23 = ɵɵnextContext(4); return ctx_r23.increment($event); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 19);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c3, ctx_r19.isCaution && ctx_r19.styleClass !== ctx_r19.STYLE_TYPE.Strong, ctx_r19.styleClass === ctx_r19.STYLE_TYPE.Strong));
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const msg_r26 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, msg_r26.Key), " : ", msg_r26.Value, " ");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_span_1_Template, 3, 4, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r20.messages);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 11);
    ɵɵelementStart(1, "input", 12, 13);
    ɵɵlistener("keypress", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_keypress_1_listener($event) { ɵɵrestoreView(_r28); const ctx_r27 = ɵɵnextContext(3); return ctx_r27.onKeyPress($event); })("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_click_1_listener($event) { ɵɵrestoreView(_r28); return $event.target.setSelectionRange(0, 999); })("blur", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_blur_1_listener($event) { ɵɵrestoreView(_r28); const ctx_r30 = ɵɵnextContext(3); return ctx_r30.onBlur($event); })("focus", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_focus_1_listener($event) { ɵɵrestoreView(_r28); const ctx_r31 = ɵɵnextContext(3); return ctx_r31.onFocus($event); });
    ɵɵpipe(3, "quantitySelectorNumber");
    ɵɵelementEnd();
    ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_4_Template, 3, 4, "button", 14);
    ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_5_Template, 3, 4, "button", 15);
    ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_Template, 2, 1, "mat-error", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("name", ctx_r16.key);
    ɵɵpropertyInterpolate("title", ctx_r16.formattedValue);
    ɵɵproperty("id", ctx_r16.key)("formControlName", ctx_r16.key)("value", ctx_r16.isFocus ? ɵɵpipeBind2(3, 9, ctx_r16.value, ctx_r16.alowDecimal) : ctx_r16.formattedValue)("disabled", ctx_r16.disabled);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r16.showQsBtn);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r16.showQsBtn);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r16.messages == null ? null : ctx_r16.messages.length) > 0);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_2_Template, 2, 11, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template, 7, 12, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r13 = ɵɵreference(3);
    const _r15 = ɵɵreference(5);
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.readonly)("ngIfThen", _r13)("ngIfElse", _r15);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 22);
    ɵɵtext(1, " X ");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("pepperi-button ", ctx_r34.styleClass, " disabled");
    ɵɵproperty("id", ctx_r34.key)("ngClass", ɵɵpureFunction3(5, _c2, ctx_r34.isCaution, ctx_r34.rowSpan !== 1, ctx_r34.rowSpan === 1));
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 27);
} if (rf & 2) {
    const ctx_r37 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("matBadge", ctx_r37.additionalValue);
    ɵɵproperty("@showHide", ctx_r37.getAdditionalValue);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const msg_r42 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, msg_r42.Key), " : ", msg_r42.Value, " ");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_span_1_Template, 3, 4, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r39.messages);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 28);
} if (rf & 2) {
    const ctx_r40 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("matBadge", ctx_r40.additionalValue);
    ɵɵproperty("@showHide", ctx_r40.getAdditionalValue);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r44 = ɵɵgetCurrentView();
    ɵɵtemplate(0, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_0_Template, 1, 2, "span", 23);
    ɵɵelementStart(1, "mat-form-field", 24);
    ɵɵlistener("mouseleave", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_mat_form_field_mouseleave_1_listener($event) { ɵɵrestoreView(_r44); const ctx_r43 = ɵɵnextContext(3); return !ctx_r43.isFocus ? ctx_r43.onMatrixMouseleave($event) : null; });
    ɵɵelementStart(2, "input", 25, 13);
    ɵɵlistener("keypress", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_keypress_2_listener($event) { ɵɵrestoreView(_r44); const ctx_r45 = ɵɵnextContext(3); return ctx_r45.onKeyPress($event); })("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_click_2_listener($event) { ɵɵrestoreView(_r44); const ctx_r46 = ɵɵnextContext(3); ctx_r46.onMatrixClick($event); return $event.target.setSelectionRange(0, 999); })("blur", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_blur_2_listener($event) { ɵɵrestoreView(_r44); const ctx_r47 = ɵɵnextContext(3); return ctx_r47.onMatrixBlur($event); })("focus", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_focus_2_listener($event) { ɵɵrestoreView(_r44); const ctx_r48 = ɵɵnextContext(3); ctx_r48.onMatrixMouseEnter($event); return ctx_r48.onFocus($event); })("mouseenter", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_mouseenter_2_listener($event) { ɵɵrestoreView(_r44); const ctx_r49 = ɵɵnextContext(3); return ctx_r49.onMatrixMouseEnter($event); });
    ɵɵpipe(4, "quantitySelectorNumber");
    ɵɵelementEnd();
    ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_Template, 2, 1, "mat-error", 2);
    ɵɵelementEnd();
    ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_6_Template, 1, 2, "span", 26);
} if (rf & 2) {
    const ctx_r36 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r36.xAlignment == "2");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("name", ctx_r36.key);
    ɵɵpropertyInterpolate("title", ctx_r36.formattedValue);
    ɵɵproperty("id", ctx_r36.key)("formControlName", ctx_r36.key)("value", ctx_r36.isFocus ? ɵɵpipeBind2(4, 9, ctx_r36.value, ctx_r36.alowDecimal) : ctx_r36.formattedValue)("disabled", ctx_r36.disabled);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", (ctx_r36.messages == null ? null : ctx_r36.messages.length) > 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r36.xAlignment != "2");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_2_Template, 2, 9, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template, 7, 12, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r33 = ɵɵreference(3);
    const _r35 = ɵɵreference(5);
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.readonly)("ngIfThen", _r33)("ngIfElse", _r35);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r56 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 31);
    ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_2_Template_button_click_0_listener($event) { ɵɵrestoreView(_r56); const ctx_r55 = ɵɵnextContext(3); return ctx_r55.enterChildren($event); });
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("pepperi-button ", ctx_r52.styleClass, " ellipsis");
    ɵɵpropertyInterpolate("name", ctx_r52.key);
    ɵɵproperty("id", ctx_r52.key)("ngClass", ɵɵpureFunction3(12, _c2, ctx_r52.isCaution, ctx_r52.rowSpan !== 1, ctx_r52.rowSpan === 1))("title", ɵɵpipeBind1(1, 8, "QS.ORDER"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 10, "QS.ORDER"), " ");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 34);
    ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_1_Template_button_click_0_listener($event) { ɵɵrestoreView(_r63); const ctx_r62 = ɵɵnextContext(4); return ctx_r62.enterChildren($event); });
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r59 = ɵɵnextContext(4);
    ɵɵclassMapInterpolate1("pepperi-button ", ctx_r59.styleClass, " ellipsis right-alignment");
    ɵɵpropertyInterpolate("matBadge", ctx_r59.formattedValue);
    ɵɵpropertyInterpolate("name", ctx_r59.key);
    ɵɵproperty("matBadgeSize", ctx_r59.layoutType === ctx_r59.LAYOUT_TYPE.PepperiCard && ctx_r59.rowSpan === 1 ? "small" : "medium")("id", ctx_r59.key)("ngClass", ɵɵpureFunction3(14, _c2, ctx_r59.isCaution, ctx_r59.rowSpan !== 1, ctx_r59.rowSpan === 1))("title", ɵɵpipeBind1(1, 10, "QS.ORDER"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 12, "QS.ORDER"), " ");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 35);
    ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_3_Template_button_click_0_listener($event) { ɵɵrestoreView(_r65); const ctx_r64 = ɵɵnextContext(4); return ctx_r64.enterChildren($event); });
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r61 = ɵɵnextContext(4);
    ɵɵclassMapInterpolate1("pepperi-button ", ctx_r61.styleClass, " ellipsis left-alignment");
    ɵɵpropertyInterpolate("matBadge", ctx_r61.formattedValue);
    ɵɵpropertyInterpolate("name", ctx_r61.key);
    ɵɵproperty("matBadgeSize", ctx_r61.layoutType === ctx_r61.LAYOUT_TYPE.PepperiCard && ctx_r61.rowSpan === 1 ? "small" : "medium")("id", ctx_r61.key)("ngClass", ɵɵpureFunction3(14, _c2, ctx_r61.isCaution, ctx_r61.rowSpan !== 1, ctx_r61.rowSpan === 1))("title", ɵɵpipeBind1(1, 10, "QS.ORDER"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 12, "QS.ORDER"), " ");
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 7);
    ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_1_Template, 4, 18, "ng-template", null, 32, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_3_Template, 4, 18, "ng-template", null, 33, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r58 = ɵɵreference(2);
    const _r60 = ɵɵreference(4);
    const ctx_r54 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r54.xAlignment == "2")("ngIfThen", _r58)("ngIfElse", _r60);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_2_Template, 4, 16, "ng-template", null, 29, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 30, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r51 = ɵɵreference(3);
    const _r53 = ɵɵreference(5);
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.value == "0")("ngIfThen", _r51)("ngIfElse", _r53);
} }
function PepperiQuantitySelectorComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r67 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 36);
    ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_6_Template_button_click_1_listener($event) { ɵɵrestoreView(_r67); const ctx_r66 = ɵɵnextContext(2); return ctx_r66.enterPackage($event); });
    ɵɵpipe(2, "translate");
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("pepperi-button ", ctx_r11.styleClass, " ellipsis");
    ɵɵpropertyInterpolate("name", ctx_r11.key);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(2, 9, "QS.ORDER"));
    ɵɵproperty("id", ctx_r11.key)("ngClass", ɵɵpureFunction3(13, _c2, ctx_r11.isCaution, ctx_r11.rowSpan !== 1, ctx_r11.rowSpan === 1));
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(4, 11, "QS.ORDER"), " (", ctx_r11.formattedValue, ") ");
} }
const _c4 = function (a0, a1, a2, a3, a4) { return { "pepperi-table-quantity-selector": a0, "one-row": a1, caution: a2, "matrix-qs": a3, "zero-quantity": a4 }; };
function PepperiQuantitySelectorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3, 4);
    ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_pep_field_title_2_Template, 1, 5, "pep-field-title", 5);
    ɵɵtemplate(3, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_Template, 6, 3, "ng-container", 2);
    ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_Template, 6, 3, "ng-container", 2);
    ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_Template, 6, 3, "ng-container", 2);
    ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_template_1_ng_container_6_Template, 5, 17, "ng-container", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("pepperi-quantity-selector-container ", ctx_r1.styleClass, "");
    ɵɵproperty("ngClass", ɵɵpureFunction5(9, _c4, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable, ctx_r1.rowSpan === 1, ctx_r1.isCaution, ctx_r1.type === "qsForMatrix", ctx_r1.formattedValue === "0"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.layoutType !== ctx_r1.LAYOUT_TYPE.PepperiTable && ctx_r1.layoutType !== ctx_r1.LAYOUT_TYPE.PepperiCard);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.type == "qs");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.type == "qsForMatrix");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.type == "button");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.type == "packageButton");
} }
function PepperiQuantitySelectorComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 37);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiQuantitySelectorComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 37);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiQuantitySelectorComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 37);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiQuantitySelectorComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiQuantitySelectorComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 37);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
class PepperiQuantitySelectorComponent {
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
PepperiQuantitySelectorComponent.ɵfac = function PepperiQuantitySelectorComponent_Factory(t) { return new (t || PepperiQuantitySelectorComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
PepperiQuantitySelectorComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiQuantitySelectorComponent, selectors: [["pep-quantity-selector"]], viewQuery: function PepperiQuantitySelectorComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.QSCont = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.QSInput = _t.first);
    } }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", lastFocusField: "lastFocusField", alowDecimal: "alowDecimal", additionalValue: "additionalValue", notificationInfo: "notificationInfo", form: "form", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive" }, outputs: { valueChanged: "valueChanged", elementClicked: "elementClicked" }, features: [ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [3, "ngClass"], ["QSCont", ""], [3, "label", "required", "disabled", "showTitle", "xAlignment", 4, "ngIf"], [3, "label", "required", "disabled", "showTitle", "xAlignment"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["readonlyBlock", ""], ["editableQSBlock", ""], ["mat-button", "", "disabled", "true", 3, "id", "ngClass", "title"], ["appearance", "outline"], ["type", "decimalNumber", "inputmode", "decimal", "matInput", "", "autocomplete", "off", 1, "body-lg", "ellipsis", 3, "name", "title", "id", "formControlName", "value", "disabled", "keypress", "click", "blur", "focus"], ["QSInput", ""], ["mat-button", "", "matPrefix", "", "class", "pepperi-button icon-button sm weak qs-action", 3, "ngClass", "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "class", "pepperi-button icon-button sm weak qs-action", 3, "ngClass", "click", 4, "ngIf"], ["mat-button", "", "matPrefix", "", 1, "pepperi-button", "icon-button", "sm", "weak", "qs-action", 3, "ngClass", "click"], ["name", "number_minus"], ["mat-button", "", "matSuffix", "", 1, "pepperi-button", "icon-button", "sm", "weak", "qs-action", 3, "ngClass", "click"], ["name", "number_plus"], ["class", "qs-error body-xs", 4, "ngFor", "ngForOf"], [1, "qs-error", "body-xs"], ["mat-button", "", "disabled", "true", 3, "id", "ngClass"], ["class", "body-sm additional-value prefix", "matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 3, "matBadge", 4, "ngIf"], ["appearance", "outline", 3, "mouseleave"], ["type", "decimalNumber", "inputmode", "decimal", "matInput", "", "autocomplete", "off", 1, "body-sm", "ellipsis", 3, "name", "title", "id", "formControlName", "value", "disabled", "keypress", "click", "blur", "focus", "mouseenter"], ["class", "body-sm additional-value suffix", "matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 3, "matBadge", 4, "ngIf"], ["matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 1, "body-sm", "additional-value", "prefix", 3, "matBadge"], ["matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 1, "body-sm", "additional-value", "suffix", 3, "matBadge"], ["regularBlock", ""], ["withBadgeBlock", ""], ["mat-button", "", 3, "name", "id", "ngClass", "title", "click"], ["leftBadgeBlock", ""], ["rightBadgeBlock", ""], ["mat-button", "", "matBadgePosition", "before", 3, "matBadge", "matBadgeSize", "name", "id", "ngClass", "title", "click"], ["mat-button", "", "matBadgePosition", "after", 3, "matBadge", "matBadgeSize", "name", "id", "ngClass", "title", "click"], ["mat-button", "", 3, "name", "title", "id", "ngClass", "click"], [4, "ngTemplateOutlet"]], template: function PepperiQuantitySelectorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_Template, 7, 15, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PepperiQuantitySelectorComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_container_5_Template, 2, 1, "ng-container", 2);
        ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
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
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, NgClass, PepperiFieldTitleComponent, MatButton, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, MatPrefix, MatIcon, PepperiIconComponent, MatSuffix, MatError, NgForOf, MatBadge, NgTemplateOutlet], pipes: [QuantitySelectorNumber, TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}.pepperi-quantity-selector-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:wrap;height:inherit;min-width:2rem;width:100%}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .pepperi-quantity-selector-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{font-weight:var(--pep-font-weight-bold,600);padding:0 .25rem;text-align:center;width:100%}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{height:unset}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]{width:100%}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .pepperi-button.qs-action[_ngcontent-%COMP%]{height:2rem!important;line-height:2rem;min-width:2rem;width:2rem!important}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .pepperi-button.qs-action[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:inherit;width:inherit}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .qs-error[_ngcontent-%COMP%]{display:block}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value[_ngcontent-%COMP%]{align-self:flex-start;display:flex;height:1.25rem;justify-content:flex-end;top:calc(var(--pep-spacing-xs, .25rem)*-1);transform:unset!important}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value.prefix[_ngcontent-%COMP%]{left:calc(var(--pep-spacing-sm, .5rem)*-1)!important}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value.suffix[_ngcontent-%COMP%]{right:calc(var(--pep-spacing-sm, .5rem)*-1)!important}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{-ms-text-overflow:ellipsis;border-radius:.625rem;max-width:inherit;min-width:1.5rem;overflow:hidden;padding:0 .5rem;text-overflow:ellipsis;white-space:nowrap;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;z-index:99}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{min-width:.5rem;padding:0 .25rem}.pepperi-quantity-selector-container.pepperi-table-quantity-selector[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]:not(.qs-action){height:2rem;line-height:2rem}.pepperi-quantity-selector-container.pepperi-table-quantity-selector[_ngcontent-%COMP%]   .pepperi-button.qs-action[_ngcontent-%COMP%]{height:1.5rem!important;line-height:1.5rem;min-width:1.5rem;width:1.5rem!important}"], data: { animation: [
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiQuantitySelectorComponent, [{
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
    }], function () { return [{ type: ChangeDetectorRef }, { type: CustomizationService }, { type: Renderer2 }, { type: ElementRef }]; }, { key: [{
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

class PepperiQuantitySelectorModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconNumberMinus,
            pepperiIconNumberPlus
        ]);
    }
}
PepperiQuantitySelectorModule.ɵmod = ɵɵdefineNgModule({ type: PepperiQuantitySelectorModule });
PepperiQuantitySelectorModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiQuantitySelectorModule_Factory(t) { return new (t || PepperiQuantitySelectorModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatBadgeModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiQuantitySelectorModule, { declarations: [PepperiQuantitySelectorComponent, QuantitySelectorNumber], imports: [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatBadgeModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule], exports: [PepperiQuantitySelectorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiQuantitySelectorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules
                    MatCommonModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatButtonModule,
                    MatBadgeModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule
                ],
                exports: [PepperiQuantitySelectorComponent],
                declarations: [PepperiQuantitySelectorComponent, QuantitySelectorNumber],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/quantity-selector
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiQuantitySelectorComponent, PepperiQuantitySelectorModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-quantity-selector.js.map
