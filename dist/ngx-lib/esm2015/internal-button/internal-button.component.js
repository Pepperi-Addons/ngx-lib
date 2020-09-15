import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import { GROUP_BUTTONS_VIEW_TYPE } from '@pepperi-addons/ngx-lib/group-buttons';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib";
import * as i2 from "@angular/common";
import * as i3 from "@pepperi-addons/ngx-lib/field-title";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@pepperi-addons/ngx-lib/icon";
import * as i7 from "@pepperi-addons/ngx-lib/group-buttons";
import * as i8 from "@angular/cdk/bidi";
import * as i9 from "@ngx-translate/core";
function PepperiInternalButtonComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1, a2, a3) { return { disabled: a0, "pull-left": a1, "pull-right": a2, "center-alignment": a3 }; };
function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.onButtonClicked($event); });
    i0.ɵɵelementStart(1, "span", 12);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon", 13);
    i0.ɵɵelementStart(5, "pep-icon", 14);
    i0.ɵɵlistener("click", function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template_pep_icon_click_5_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19.onButtonClicked($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r14.formattedValue);
    i0.ɵɵproperty("id", ctx_r14.key)("ngClass", i0.ɵɵpureFunction4(6, _c0, ctx_r14.disabled, ctx_r14.xAlignment == "1" || ctx_r14.xAlignment == "0", ctx_r14.xAlignment == "2", ctx_r14.xAlignment == "3"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, "ACTIONS.CREATE_NEW"));
} }
function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-group-buttons", 15);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("buttons", ctx_r16.referenceButtons)("buttonsClass", "md regular")("buttonsDisabled", false)("viewType", ctx_r16.GROUP_BUTTONS_VIEW_TYPE.Split);
} }
function PepperiInternalButtonComponent_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "pep-field-title", 8);
    i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template, 6, 11, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(5, PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_5_Template, 1, 4, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r13 = i0.ɵɵreference(4);
    const _r15 = i0.ɵɵreference(6);
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r9.label)("required", ctx_r9.required)("disabled", ctx_r9.disabled)("xAlignment", ctx_r9.xAlignment)("showTitle", ctx_r9.showTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.createNewReference)("ngIfThen", _r13)("ngIfElse", _r15);
} }
function PepperiInternalButtonComponent_ng_container_1_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_1_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 16);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(7);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function PepperiInternalButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_1_ng_template_2_Template, 7, 8, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_1_ng_template_4_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r8 = i0.ɵɵreference(3);
    const _r10 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.layoutType === ctx_r0.LAYOUT_TYPE.PepperiForm)("ngIfThen", _r8)("ngIfElse", _r10);
} }
function PepperiInternalButtonComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_2_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function () { return { internal: true }; };
function PepperiInternalButtonComponent_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 17);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c1));
} }
function PepperiInternalButtonComponent_ng_container_2_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_2_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 16);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(7);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function PepperiInternalButtonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_2_ng_template_2_Template, 1, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_2_ng_template_4_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r22 = i0.ɵɵreference(3);
    const _r24 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiForm)("ngIfThen", _r22)("ngIfElse", _r24);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_2_pep_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-icon", 21);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 19);
    i0.ɵɵlistener("click", function PepperiInternalButtonComponent_ng_container_3_ng_container_2_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.onButtonClicked($event); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_3_ng_container_2_pep_icon_3_Template, 1, 0, "pep-icon", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r28.key);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r28.key == "ObjectMenu");
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 17);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r3 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c1));
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r38.formattedValue);
    i0.ɵɵproperty("id", ctx_r38.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r38.formattedValue);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_Template, 1, 3, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_4_Template, 2, 3, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r35 = i0.ɵɵreference(3);
    const _r37 = i0.ɵɵreference(5);
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r29.layoutType === ctx_r29.LAYOUT_TYPE.PepperiTable)("ngIfThen", _r37)("ngIfElse", _r35);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function () { return { internal: false }; };
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 17);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r3 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c2));
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 16);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r5 = i0.ɵɵreference(7);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_Template, 1, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_Template, 1, 1, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r41 = i0.ɵɵreference(3);
    const _r43 = i0.ɵɵreference(5);
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r30.layoutType === ctx_r30.LAYOUT_TYPE.PepperiForm)("ngIfThen", _r41)("ngIfElse", _r43);
} }
function PepperiInternalButtonComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainerStart(1, 0);
    i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_3_ng_container_2_Template, 4, 2, "ng-container", 1);
    i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_3_ng_container_3_Template, 6, 3, "ng-container", 1);
    i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_3_ng_container_4_Template, 6, 3, "ng-container", 18);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r2.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "ObjectMenu");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "Agents" || "ContactPersons" || "Buyers");
} }
function PepperiInternalButtonComponent_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function PepperiInternalButtonComponent_ng_template_4_ng_template_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(2); return ctx_r53.onButtonClicked($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r50.formattedValue);
    i0.ɵɵpropertyInterpolate("dir", ctx_r50.xAlignment == "2" ? "rtl" : "ltr");
    i0.ɵɵproperty("id", ctx_r50.key)("disabled", ctx_r50.disabled)("ngClass", i0.ɵɵpureFunction4(6, _c0, ctx_r50.disabled, ctx_r50.xAlignment == "1" || ctx_r50.xAlignment == "0", ctx_r50.xAlignment == "2", ctx_r50.xAlignment == "3"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r50.formattedValue, " ");
} }
function PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵelement(4, "pep-icon", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "LIST.SELECT"), "\u00A0");
} }
function PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵelement(4, "pep-icon", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r59.formattedValue, "\u00A0", i0.ɵɵpipeBind1(2, 2, "LIST.SELECTED"), "\u00A0");
} }
function PepperiInternalButtonComponent_ng_template_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function PepperiInternalButtonComponent_ng_template_4_ng_template_5_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r61); const ctx_r60 = i0.ɵɵnextContext(2); return ctx_r60.openReferenceObjectInternal($event); });
    i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_2_Template, 5, 3, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_4_Template, 5, 4, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r56 = i0.ɵɵreference(3);
    const _r58 = i0.ɵɵreference(5);
    const ctx_r52 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r52.formattedValue);
    i0.ɵɵpropertyInterpolate("dir", ctx_r52.xAlignment == "2" ? "rtl" : "ltr");
    i0.ɵɵproperty("id", ctx_r52.key)("disabled", ctx_r52.disabled)("ngClass", i0.ɵɵpureFunction4(8, _c0, ctx_r52.disabled, ctx_r52.xAlignment == "1" || ctx_r52.xAlignment == "0", ctx_r52.xAlignment == "2", ctx_r52.xAlignment == "3"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r52.formattedValue == "0" || ctx_r52.formattedValue == "")("ngIfThen", _r56)("ngIfElse", _r58);
} }
function PepperiInternalButtonComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵelement(1, "pep-field-title", 8);
    i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_template_4_ng_container_2_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_template_4_ng_template_3_Template, 2, 11, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(5, PepperiInternalButtonComponent_ng_template_4_ng_template_5_Template, 6, 13, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const internal_r47 = ctx.internal;
    const _r49 = i0.ɵɵreference(4);
    const _r51 = i0.ɵɵreference(6);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r4.label)("required", ctx_r4.required)("disabled", ctx_r4.disabled)("xAlignment", ctx_r4.xAlignment)("showTitle", ctx_r4.showTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", internal_r47)("ngIfThen", _r51)("ngIfElse", _r49);
} }
function PepperiInternalButtonComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r67.formattedValue);
    i0.ɵɵproperty("id", ctx_r67.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r67.formattedValue, " ");
} }
function PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r68 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r68.formattedValue);
    i0.ɵɵproperty("id", ctx_r68.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r68.formattedValue, " ");
} }
function PepperiInternalButtonComponent_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 35);
    i0.ɵɵlistener("mousedown", function PepperiInternalButtonComponent_ng_template_6_ng_template_1_Template_a_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r70); const ctx_r69 = i0.ɵɵnextContext(2); return ctx_r69.hrefFunction($event); });
    i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_1_Template, 2, 3, "span", 36);
    i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_2_Template, 2, 3, "span", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r64 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("href", ctx_r64.value, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r64.layoutType === ctx_r64.LAYOUT_TYPE.PepperiTable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r64.layoutType !== ctx_r64.LAYOUT_TYPE.PepperiTable);
} }
function PepperiInternalButtonComponent_ng_template_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} }
function PepperiInternalButtonComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_template_6_ng_template_1_Template, 3, 3, "ng-template", null, 33, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_template_6_ng_template_3_Template, 2, 0, "ng-template", null, 34, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r63 = i0.ɵɵreference(2);
    const _r65 = i0.ɵɵreference(4);
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", (ctx_r6.formattedValue == null ? null : ctx_r6.formattedValue.length) > 0)("ngIfThen", _r63)("ngIfElse", _r65);
} }
export class PepperiInternalButtonComponent {
    constructor(customizationService, renderer, element) {
        this.customizationService = customizationService;
        this.renderer = renderer;
        this.element = element;
        this.key = '';
        this.value = '';
        this.formattedValue = '';
        this.label = '';
        this.type = 'button'; // || 'reference' || 'listofobjects' || 'Agents' || 'ContactPersons' || 'Buyers', etc
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.controlType = 'button';
        this.form = null;
        this.showTitle = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.elementClicked = new EventEmitter();
        this.valueChanged = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.GROUP_BUTTONS_VIEW_TYPE = GROUP_BUTTONS_VIEW_TYPE;
        this.standAlone = false;
        this.createNewReference = false;
        this.referenceButtons = [
            { Value: '', Class: '', Callback: () => this.onButtonClicked(event), Icon: null },
            { Value: '', Class: 'caution', Callback: () => this.remove(event), Icon: 'system_bin' },
        ];
    }
    ngOnInit() {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
            this.formattedValue = this.formattedValue || this.value;
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
    }
    ngOnChanges(changes) {
        if (this.type === 'reference') {
            this.createNewReference = this.value.length === 0;
            this.referenceButtons[0].Value = this.formattedValue;
        }
    }
    ngOnDestroy() {
        if (this.elementClicked) {
            this.elementClicked.unsubscribe();
        }
    }
    onButtonClicked(event) {
        if (this.type === 'reference') {
            const valueArr = this.value.split('/');
            this.elementClicked.emit({
                apiName: this.key,
                eventWhich: event.which,
                value: valueArr[valueArr.length - 1],
                referenceObjectInternalType: this.referenceObjectInternalType,
            });
        }
        else if (this.type === 'button' && true) {
            this.elementClicked.emit({
                apiName: this.key,
                eventWhich: event.which,
                value: this.value // should contain the program name
            });
        }
        else {
            this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
        }
    }
    hrefFunction(event) {
        if (event.which === 1 /*|| event.which === 2*/) {
            this.onButtonClicked(event);
        }
    }
    openReferenceObjectInternal(event) {
        this.elementClicked.emit({
            apiName: this.key,
            eventWhich: event.which,
            value: this.value,
            referenceObjectInternalType: this.referenceObjectInternalType
        });
    }
    remove(event) {
        this.value = '';
        this.valueChanged.emit({ apiName: this.key, value: this.value });
    }
}
PepperiInternalButtonComponent.ɵfac = function PepperiInternalButtonComponent_Factory(t) { return new (t || PepperiInternalButtonComponent)(i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PepperiInternalButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiInternalButtonComponent, selectors: [["pep-internal-button"]], inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", referenceObjectInternalType: "referenceObjectInternalType", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { elementClicked: "elementClicked", valueChanged: "valueChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 4, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["buttonTemplate", ""], ["linkTemplate", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], ["formBlock", ""], ["notFormBlock", ""], [1, "pepperi-button-container", "reference-button"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], ["newBlock", ""], ["existingBlock", ""], ["mat-button", "", 1, "pepperi-button", "md", "regular", 3, "id", "title", "ngClass", "click"], [1, "pull-left", "flip"], ["pepRtlClass", "", 1, "pull-right", "flip"], ["name", "number_plus", 3, "click"], [3, "buttons", "buttonsClass", "buttonsDisabled", "viewType"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngSwitchDefault"], [3, "title", "click"], ["name", "system_menu", 4, "ngIf"], ["name", "system_menu"], ["nonTableBlock", ""], ["tableBlock", ""], [1, "pepperi-report-input", "readonly", "body-sm", 3, "id", "title"], ["buttonBlock", ""], ["linkBlock", ""], [1, "pepperi-button-container"], ["regularButtonTemplate", ""], ["internalButtonTemplate", ""], ["mat-button", "", 1, "pepperi-button", "md", "regular", 3, "id", "title", "dir", "disabled", "ngClass", "click"], ["name", "number_plus"], ["name", "system_edit"], ["notEmptyBlock", ""], ["emptyBlock", ""], [1, "color-link", 3, "href", "mousedown"], ["class", "body-sm pepperi-report-input readonly", 3, "id", "title", 4, "ngIf"], ["class", "body-sm pepperi-card-input", "style", "display: block;", 3, "id", "title", 4, "ngIf"], [1, "body-sm", "pepperi-report-input", "readonly", 3, "id", "title"], [1, "body-sm", "pepperi-card-input", 2, "display", "block", 3, "id", "title"]], template: function PepperiInternalButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_1_Template, 6, 3, "ng-container", 1);
        i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_2_Template, 6, 3, "ng-container", 1);
        i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_3_Template, 5, 3, "ng-container", 1);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_template_4_Template, 7, 8, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, PepperiInternalButtonComponent_ng_template_6_Template, 5, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "reference");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "listofobjects");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "button");
    } }, directives: [i2.NgSwitch, i2.NgSwitchCase, i2.NgIf, i3.PepperiFieldTitleComponent, i4.MatButton, i2.NgClass, i5.MatIcon, i1.RtlClassDirective, i6.PepperiIconComponent, i7.GroupButtonsComponent, i2.NgTemplateOutlet, i2.NgSwitchDefault, i8.Dir], pipes: [i9.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.pepperi-button-container[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.pepperi-button-container[_ngcontent-%COMP%]   .center-alignment[_ngcontent-%COMP%]{left:50%;position:absolute;transform:translate(-50%)}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .split-buttons{float:left}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type, .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .split-buttons button:last-of-type{padding:0;width:1.5rem}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .pepperi-button mat-icon{margin-left:var(--pep-spacing-md,.75rem)}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]   mat-icon.rtl[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .pepperi-button mat-icon.rtl{margin-left:unset;margin-right:var(--pep-spacing-md,.75rem)}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .pepperi-button.last-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .pepperi-button.last-button mat-icon{margin:0}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiInternalButtonComponent, [{
        type: Component,
        args: [{
                selector: 'pep-internal-button',
                templateUrl: './internal-button.component.html',
                styleUrls: ['./internal-button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
            type: Input
        }], value: [{
            type: Input
        }], formattedValue: [{
            type: Input
        }], label: [{
            type: Input
        }], referenceObjectInternalType: [{
            type: Input
        }], type: [{
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
        }], form: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], elementClicked: [{
            type: Output
        }], valueChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvaW50ZXJuYWwtYnV0dG9uL2ludGVybmFsLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2ludGVybmFsLWJ1dHRvbi9pbnRlcm5hbC1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBRXJKLE9BQU8sRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQXNCLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7Ozs7OztJQ0Q1Rix3QkFBK0c7OztJQU12Ryx3QkFBMkY7Ozs7O0lBRXZGLGtDQU9JO0lBTkEsNFBBQWlDO0lBTWpDLGdDQUE2QjtJQUFBLFlBQXNDOztJQUFBLGlCQUFPO0lBQzFFLG9DQUNJO0lBQUEsb0NBQ1c7SUFEa0IsOFBBQWlDO0lBQzlELGlCQUFXO0lBQ2YsaUJBQVc7SUFDZixpQkFBUzs7O0lBWlUseURBQTRCO0lBQXZDLGdDQUFVLHVLQUFBO0lBT2UsZUFBc0M7SUFBdEMsZ0VBQXNDOzs7SUFRdkUsd0NBRW9COzs7SUFGRCxrREFBNEIsOEJBQUEsMEJBQUEsbURBQUE7OztJQXJCdkQsOEJBQ0k7SUFBQSxxQ0FFa0I7SUFDbEIsOEhBQTRFO0lBQzVFLDhKQUNJO0lBY0osOEpBQ0k7SUFJUixpQkFBTTs7Ozs7SUF4QmUsZUFBZTtJQUFmLG9DQUFlLDZCQUFBLDZCQUFBLGlDQUFBLCtCQUFBO0lBR2xCLGVBQTZEO0lBQTdELGdEQUE2RCxrQkFBQSxrQkFBQTs7O0lBd0IvRSx3QkFBOEQ7OztJQUE5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MUMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDt3SEFFWSxHQUFHO2tCQUFYLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csMkJBQTJCO2tCQUFuQyxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUlHLElBQUk7a0JBQVosS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBRUksY0FBYztrQkFBdkIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IExBWU9VVF9UWVBFLCBDdXN0b21pemF0aW9uU2VydmljZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgR1JPVVBfQlVUVE9OU19WSUVXX1RZUEUsIFBlcHBlcmlHcm91cEJ1dHRvbiB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2dyb3VwLWJ1dHRvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlcC1pbnRlcm5hbC1idXR0b24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ludGVybmFsLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9pbnRlcm5hbC1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaUludGVybmFsQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoKSBrZXkgPSAnJztcclxuICAgIEBJbnB1dCgpIHZhbHVlID0gJyc7XHJcbiAgICBASW5wdXQoKSBmb3JtYXR0ZWRWYWx1ZSA9ICcnO1xyXG4gICAgQElucHV0KCkgbGFiZWwgPSAnJztcclxuICAgIEBJbnB1dCgpIHJlZmVyZW5jZU9iamVjdEludGVybmFsVHlwZTogYW55O1xyXG4gICAgQElucHV0KCkgdHlwZSA9ICdidXR0b24nOyAvLyB8fCAncmVmZXJlbmNlJyB8fCAnbGlzdG9mb2JqZWN0cycgfHwgJ0FnZW50cycgfHwgJ0NvbnRhY3RQZXJzb25zJyB8fCAnQnV5ZXJzJywgZXRjXHJcbiAgICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSB4QWxpZ25tZW50ID0gJzAnO1xyXG4gICAgQElucHV0KCkgcm93U3BhbiA9IDE7XHJcblxyXG4gICAgY29udHJvbFR5cGUgPSAnYnV0dG9uJztcclxuXHJcbiAgICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXAgPSBudWxsO1xyXG4gICAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGxheW91dFR5cGU6IExBWU9VVF9UWVBFID0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm07XHJcblxyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG4gICAgR1JPVVBfQlVUVE9OU19WSUVXX1RZUEUgPSBHUk9VUF9CVVRUT05TX1ZJRVdfVFlQRTtcclxuXHJcbiAgICBzdGFuZEFsb25lID0gZmFsc2U7XHJcbiAgICBjcmVhdGVOZXdSZWZlcmVuY2UgPSBmYWxzZTtcclxuICAgIHJlZmVyZW5jZUJ1dHRvbnM6IEFycmF5PFBlcHBlcmlHcm91cEJ1dHRvbj4gPSBbXHJcbiAgICAgICAgeyBWYWx1ZTogJycsIENsYXNzOiAnJywgQ2FsbGJhY2s6ICgpID0+IHRoaXMub25CdXR0b25DbGlja2VkKGV2ZW50KSwgSWNvbjogbnVsbCB9LFxyXG4gICAgICAgIHsgVmFsdWU6ICcnLCBDbGFzczogJ2NhdXRpb24nLCBDYWxsYmFjazogKCkgPT4gdGhpcy5yZW1vdmUoZXZlbnQpLCBJY29uOiAnc3lzdGVtX2JpbicgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjdXN0b21pemF0aW9uU2VydmljZTogQ3VzdG9taXphdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YW5kQWxvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLmdldERlZmF1bHRGcm9tR3JvdXAodGhpcy5rZXksIHRoaXMudmFsdWUsIHRoaXMucmVxdWlyZWQsIHRoaXMucmVhZG9ubHksIHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXR0ZWRWYWx1ZSB8fCB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDdXN0b21pemF0aW9uU2VydmljZS5TVEFORF9BTE9ORV9GSUVMRF9DTEFTU19OQU1FKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3JlZmVyZW5jZScpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVOZXdSZWZlcmVuY2UgPSB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VCdXR0b25zWzBdLlZhbHVlID0gdGhpcy5mb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudENsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Q2xpY2tlZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrZWQoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAncmVmZXJlbmNlJykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUFyciA9IHRoaXMudmFsdWUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudENsaWNrZWQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICBhcGlOYW1lOiB0aGlzLmtleSxcclxuICAgICAgICAgICAgICAgIGV2ZW50V2hpY2g6IGV2ZW50LndoaWNoLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlQXJyW3ZhbHVlQXJyLmxlbmd0aCAtIDFdLCAvLyAucmVwbGFjZSgvW15hLXpBLVowLTkgXS9nLCAnJyksXHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VPYmplY3RJbnRlcm5hbFR5cGU6IHRoaXMucmVmZXJlbmNlT2JqZWN0SW50ZXJuYWxUeXBlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2J1dHRvbicgJiYgdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRDbGlja2VkLmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgYXBpTmFtZTogdGhpcy5rZXksXHJcbiAgICAgICAgICAgICAgICBldmVudFdoaWNoOiBldmVudC53aGljaCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlIC8vIHNob3VsZCBjb250YWluIHRoZSBwcm9ncmFtIG5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRDbGlja2VkLmVtaXQoeyBhcGlOYW1lOiB0aGlzLmtleSwgZXZlbnRXaGljaDogZXZlbnQud2hpY2ggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhyZWZGdW5jdGlvbihldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMSAvKnx8IGV2ZW50LndoaWNoID09PSAyKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrZWQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuUmVmZXJlbmNlT2JqZWN0SW50ZXJuYWwoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRDbGlja2VkLmVtaXQoe1xyXG4gICAgICAgICAgICBhcGlOYW1lOiB0aGlzLmtleSxcclxuICAgICAgICAgICAgZXZlbnRXaGljaDogZXZlbnQud2hpY2gsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICByZWZlcmVuY2VPYmplY3RJbnRlcm5hbFR5cGU6IHRoaXMucmVmZXJlbmNlT2JqZWN0SW50ZXJuYWxUeXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQoeyBhcGlOYW1lOiB0aGlzLmtleSwgdmFsdWU6IHRoaXMudmFsdWUgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHlwZVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3JlZmVyZW5jZSdcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm07IHRoZW4gZm9ybUJsb2NrOyBlbHNlIG5vdEZvcm1CbG9ja1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZm9ybUJsb2NrPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVwcGVyaS1idXR0b24tY29udGFpbmVyIHJlZmVyZW5jZS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxwZXAtZmllbGQtdGl0bGUgW2xhYmVsXT1cImxhYmVsXCIgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW3hBbGlnbm1lbnRdPVwieEFsaWdubWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3Nob3dUaXRsZV09XCJzaG93VGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDwvcGVwLWZpZWxkLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNyZWF0ZU5ld1JlZmVyZW5jZTsgdGhlbiBuZXdCbG9jazsgZWxzZSBleGlzdGluZ0Jsb2NrXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25ld0Jsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2lkXT1cImtleVwiIHRpdGxlPVwie3sgZm9ybWF0dGVkVmFsdWUgfX1cIiBtYXQtYnV0dG9uIGNsYXNzPVwicGVwcGVyaS1idXR0b24gbWQgcmVndWxhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrZWQoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwdWxsLWxlZnQnOiB4QWxpZ25tZW50ID09ICcxJyB8fCB4QWxpZ25tZW50ID09ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwdWxsLXJpZ2h0JzogeEFsaWdubWVudCA9PSAnMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2VudGVyLWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnQgZmxpcFwiPnt7ICdBQ1RJT05TLkNSRUFURV9ORVcnIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJwdWxsLXJpZ2h0IGZsaXBcIiBwZXBSdGxDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwZXAtaWNvbiBuYW1lPVwibnVtYmVyX3BsdXNcIiAoY2xpY2spPVwib25CdXR0b25DbGlja2VkKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGVwLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNleGlzdGluZ0Jsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwZXAtZ3JvdXAtYnV0dG9ucyBbYnV0dG9uc109XCJyZWZlcmVuY2VCdXR0b25zXCIgW2J1dHRvbnNDbGFzc109XCInbWQgcmVndWxhcidcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYnV0dG9uc0Rpc2FibGVkXT1cImZhbHNlXCIgW3ZpZXdUeXBlXT1cIkdST1VQX0JVVFRPTlNfVklFV19UWVBFLlNwbGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wZXAtZ3JvdXAtYnV0dG9ucz5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNub3RGb3JtQmxvY2s+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsaW5rVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2xpc3RvZm9iamVjdHMnXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtOyB0aGVuIGZvcm1CbG9jazsgZWxzZSBub3RGb3JtQmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2Zvcm1CbG9jaz5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1dHRvblRlbXBsYXRlOyBjb250ZXh0OiB7aW50ZXJuYWw6IHRydWV9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI25vdEZvcm1CbG9jaz5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxpbmtUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYnV0dG9uJ1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImtleVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInT2JqZWN0TWVudSdcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrZWQoJGV2ZW50KVwiIHRpdGxlPVwie3sga2V5IH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gKm5nSWY9XCJrZXkgPT0gJ09iamVjdE1lbnUnXCIgbmFtZT1cInN5c3RlbV9tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGVwLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInQWdlbnRzJyB8fCAnQ29udGFjdFBlcnNvbnMnIHx8ICdCdXllcnMnXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlOyB0aGVuIHRhYmxlQmxvY2s7IGVsc2Ugbm9uVGFibGVCbG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vblRhYmxlQmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1dHRvblRlbXBsYXRlOyBjb250ZXh0OiB7aW50ZXJuYWw6IHRydWV9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICN0YWJsZUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpZF09XCJrZXlcIiB0aXRsZT1cInt7IGZvcm1hdHRlZFZhbHVlIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwZXBwZXJpLXJlcG9ydC1pbnB1dCByZWFkb25seSBib2R5LXNtXCI+e3sgZm9ybWF0dGVkVmFsdWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybTsgdGhlbiBidXR0b25CbG9jazsgZWxzZSBsaW5rQmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjYnV0dG9uQmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1dHRvblRlbXBsYXRlOyBjb250ZXh0OiB7aW50ZXJuYWw6IGZhbHNlfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbGlua0Jsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsaW5rVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNidXR0b25UZW1wbGF0ZSBsZXQtaW50ZXJuYWw9XCJpbnRlcm5hbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBlcHBlcmktYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxwZXAtZmllbGQtdGl0bGUgW2xhYmVsXT1cImxhYmVsXCIgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW3hBbGlnbm1lbnRdPVwieEFsaWdubWVudFwiXHJcbiAgICAgICAgICAgIFtzaG93VGl0bGVdPVwic2hvd1RpdGxlXCI+XHJcbiAgICAgICAgPC9wZXAtZmllbGQtdGl0bGU+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnRlcm5hbDsgdGhlbiBpbnRlcm5hbEJ1dHRvblRlbXBsYXRlOyBlbHNlIHJlZ3VsYXJCdXR0b25UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjcmVndWxhckJ1dHRvblRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFtpZF09XCJrZXlcIiB0aXRsZT1cInt7IGZvcm1hdHRlZFZhbHVlIH19XCIgbWF0LWJ1dHRvbiBjbGFzcz1cInBlcHBlcmktYnV0dG9uIG1kIHJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgICAgZGlyPVwie3sgeEFsaWdubWVudCA9PSAnMicgPyAncnRsJyA6ICdsdHInIH19XCIgKGNsaWNrKT1cIm9uQnV0dG9uQ2xpY2tlZCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZGlzYWJsZWQsICdwdWxsLWxlZnQnOiB4QWxpZ25tZW50ID09ICcxJyB8fCB4QWxpZ25tZW50ID09ICcwJywgJ3B1bGwtcmlnaHQnOiB4QWxpZ25tZW50ID09ICcyJywgJ2NlbnRlci1hbGlnbm1lbnQnOiB4QWxpZ25tZW50ID09ICczJ31cIj5cclxuICAgICAgICAgICAgICAgIHt7IGZvcm1hdHRlZFZhbHVlIH19XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjaW50ZXJuYWxCdXR0b25UZW1wbGF0ZT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBbaWRdPVwia2V5XCIgdGl0bGU9XCJ7eyBmb3JtYXR0ZWRWYWx1ZSB9fVwiIG1hdC1idXR0b24gY2xhc3M9XCJwZXBwZXJpLWJ1dHRvbiBtZCByZWd1bGFyXCJcclxuICAgICAgICAgICAgICAgIGRpcj1cInt7IHhBbGlnbm1lbnQgPT0gJzInID8gJ3J0bCcgOiAnbHRyJyB9fVwiIChjbGljayk9XCJvcGVuUmVmZXJlbmNlT2JqZWN0SW50ZXJuYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBkaXNhYmxlZCwgJ3B1bGwtbGVmdCc6IHhBbGlnbm1lbnQgPT0gJzEnIHx8IHhBbGlnbm1lbnQgPT0gJzAnLCAncHVsbC1yaWdodCc6IHhBbGlnbm1lbnQgPT0gJzInLCAnY2VudGVyLWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzMnfVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1hdHRlZFZhbHVlID09ICcwJyB8fCBmb3JtYXR0ZWRWYWx1ZSA9PSAnJzsgdGhlbiBuZXdCbG9jazsgZWxzZSBleGlzdGluZ0Jsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbmV3QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnQgZmxpcFwiPnt7ICdMSVNULlNFTEVDVCcgfCB0cmFuc2xhdGUgfX0mbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cIm51bWJlcl9wbHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGVwLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2V4aXN0aW5nQmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnQgZmxpcFwiPnt7IGZvcm1hdHRlZFZhbHVlIH19Jm5ic3A7e3sgJ0xJU1QuU0VMRUNURUQnIHwgdHJhbnNsYXRlIH19Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBlcC1pY29uIG5hbWU9XCJzeXN0ZW1fZWRpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2xpbmtUZW1wbGF0ZT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtYXR0ZWRWYWx1ZT8ubGVuZ3RoID4gMDsgdGhlbiBub3RFbXB0eUJsb2NrOyBlbHNlIGVtcHR5QmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjbm90RW1wdHlCbG9jaz5cclxuICAgICAgICA8YSBocmVmPVwie3sgdmFsdWUgfX1cIiAobW91c2Vkb3duKT1cImhyZWZGdW5jdGlvbigkZXZlbnQpXCIgY2xhc3M9XCJjb2xvci1saW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlXCIgW2lkXT1cImtleVwiIHRpdGxlPVwie3sgZm9ybWF0dGVkVmFsdWUgfX1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJib2R5LXNtIHBlcHBlcmktcmVwb3J0LWlucHV0IHJlYWRvbmx5XCI+XHJcbiAgICAgICAgICAgICAgICB7eyBmb3JtYXR0ZWRWYWx1ZSB9fVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibGF5b3V0VHlwZSAhPT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlXCIgW2lkXT1cImtleVwiIHRpdGxlPVwie3sgZm9ybWF0dGVkVmFsdWUgfX1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJib2R5LXNtIHBlcHBlcmktY2FyZC1pbnB1dFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+XHJcbiAgICAgICAgICAgICAgICB7eyBmb3JtYXR0ZWRWYWx1ZSB9fVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZW1wdHlCbG9jaz5cclxuICAgICAgICA8c3Bhbj4mbmJzcDs8L3NwYW4+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==