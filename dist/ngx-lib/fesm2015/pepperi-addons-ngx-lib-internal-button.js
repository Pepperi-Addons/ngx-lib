import { ɵɵelementContainer, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵpropertyInterpolate, ɵɵproperty, ɵɵpureFunction4, ɵɵadvance, ɵɵtextInterpolate, ɵɵpipeBind1, ɵɵelement, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵpureFunction0, ɵɵtextInterpolate1, ɵɵtextInterpolate2, ɵɵsanitizeUrl, EventEmitter, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgIf, NgClass, NgTemplateOutlet, NgSwitchDefault, CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LAYOUT_TYPE, CustomizationService, RtlClassDirective, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemEdit, pepperiIconSystemMenu, pepperiIconNumberPlus, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { GROUP_BUTTONS_VIEW_TYPE, GroupButtonsComponent, PepperiGroupButtonsModule } from '@pepperi-addons/ngx-lib/group-buttons';
import { Dir } from '@angular/cdk/bidi';
import { TranslatePipe } from '@ngx-translate/core';

function PepperiInternalButtonComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1, a2, a3) { return { disabled: a0, "pull-left": a1, "pull-right": a2, "center-alignment": a3 }; };
function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template_button_click_0_listener($event) { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(3); return ctx_r17.onButtonClicked($event); });
    ɵɵelementStart(1, "span", 12);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-icon", 13);
    ɵɵelementStart(5, "pep-icon", 14);
    ɵɵlistener("click", function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template_pep_icon_click_5_listener($event) { ɵɵrestoreView(_r18); const ctx_r19 = ɵɵnextContext(3); return ctx_r19.onButtonClicked($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r14.formattedValue);
    ɵɵproperty("id", ctx_r14.key)("ngClass", ɵɵpureFunction4(6, _c0, ctx_r14.disabled, ctx_r14.xAlignment == "1" || ctx_r14.xAlignment == "0", ctx_r14.xAlignment == "2", ctx_r14.xAlignment == "3"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 4, "ACTIONS.CREATE_NEW"));
} }
function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-group-buttons", 15);
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵproperty("buttons", ctx_r16.referenceButtons)("buttonsClass", "md regular")("buttonsDisabled", false)("viewType", ctx_r16.GROUP_BUTTONS_VIEW_TYPE.Split);
} }
function PepperiInternalButtonComponent_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "pep-field-title", 8);
    ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template, 6, 11, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵtemplate(5, PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_5_Template, 1, 4, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r13 = ɵɵreference(4);
    const _r15 = ɵɵreference(6);
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r9.label)("required", ctx_r9.required)("disabled", ctx_r9.disabled)("xAlignment", ctx_r9.xAlignment)("showTitle", ctx_r9.showTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.createNewReference)("ngIfThen", _r13)("ngIfElse", _r15);
} }
function PepperiInternalButtonComponent_ng_container_1_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_1_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 16);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r5 = ɵɵreference(7);
    ɵɵproperty("ngTemplateOutlet", _r5);
} }
function PepperiInternalButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_1_ng_template_2_Template, 7, 8, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_1_ng_template_4_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r8 = ɵɵreference(3);
    const _r10 = ɵɵreference(5);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.layoutType === ctx_r0.LAYOUT_TYPE.PepperiForm)("ngIfThen", _r8)("ngIfElse", _r10);
} }
function PepperiInternalButtonComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_2_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c1 = function () { return { internal: true }; };
function PepperiInternalButtonComponent_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 17);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r3 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c1));
} }
function PepperiInternalButtonComponent_ng_container_2_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_2_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 16);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r5 = ɵɵreference(7);
    ɵɵproperty("ngTemplateOutlet", _r5);
} }
function PepperiInternalButtonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_2_ng_template_2_Template, 1, 3, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_2_ng_template_4_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r22 = ɵɵreference(3);
    const _r24 = ɵɵreference(5);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiForm)("ngIfThen", _r22)("ngIfElse", _r24);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_2_pep_icon_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-icon", 21);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 19);
    ɵɵlistener("click", function PepperiInternalButtonComponent_ng_container_3_ng_container_2_Template_span_click_1_listener($event) { ɵɵrestoreView(_r33); const ctx_r32 = ɵɵnextContext(2); return ctx_r32.onButtonClicked($event); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_3_ng_container_2_pep_icon_3_Template, 1, 0, "pep-icon", 20);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r28 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r28.key);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r28.key == "ObjectMenu");
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 17);
} if (rf & 2) {
    ɵɵnextContext(3);
    const _r3 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c1));
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r38.formattedValue);
    ɵɵproperty("id", ctx_r38.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r38.formattedValue);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_Template, 1, 3, "ng-template", null, 22, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_4_Template, 2, 3, "ng-template", null, 23, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r35 = ɵɵreference(3);
    const _r37 = ɵɵreference(5);
    const ctx_r29 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r29.layoutType === ctx_r29.LAYOUT_TYPE.PepperiTable)("ngIfThen", _r37)("ngIfElse", _r35);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2 = function () { return { internal: false }; };
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 17);
} if (rf & 2) {
    ɵɵnextContext(3);
    const _r3 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c2));
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 16);
} if (rf & 2) {
    ɵɵnextContext(3);
    const _r5 = ɵɵreference(7);
    ɵɵproperty("ngTemplateOutlet", _r5);
} }
function PepperiInternalButtonComponent_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_Template, 1, 3, "ng-template", null, 25, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_Template, 1, 1, "ng-template", null, 26, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r41 = ɵɵreference(3);
    const _r43 = ɵɵreference(5);
    const ctx_r30 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r30.layoutType === ctx_r30.LAYOUT_TYPE.PepperiForm)("ngIfThen", _r41)("ngIfElse", _r43);
} }
function PepperiInternalButtonComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainerStart(1, 0);
    ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_3_ng_container_2_Template, 4, 2, "ng-container", 1);
    ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_3_ng_container_3_Template, 6, 3, "ng-container", 1);
    ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_3_ng_container_4_Template, 6, 3, "ng-container", 18);
    ɵɵelementContainerEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", ctx_r2.key);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "ObjectMenu");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "Agents" || "ContactPersons" || "Buyers");
} }
function PepperiInternalButtonComponent_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵlistener("click", function PepperiInternalButtonComponent_ng_template_4_ng_template_3_Template_button_click_0_listener($event) { ɵɵrestoreView(_r54); const ctx_r53 = ɵɵnextContext(2); return ctx_r53.onButtonClicked($event); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r50 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ctx_r50.formattedValue);
    ɵɵpropertyInterpolate("dir", ctx_r50.xAlignment == "2" ? "rtl" : "ltr");
    ɵɵproperty("id", ctx_r50.key)("disabled", ctx_r50.disabled)("ngClass", ɵɵpureFunction4(6, _c0, ctx_r50.disabled, ctx_r50.xAlignment == "1" || ctx_r50.xAlignment == "0", ctx_r50.xAlignment == "2", ctx_r50.xAlignment == "3"));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r50.formattedValue, " ");
} }
function PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-icon");
    ɵɵelement(4, "pep-icon", 31);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(2, 1, "LIST.SELECT"), "\u00A0");
} }
function PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-icon");
    ɵɵelement(4, "pep-icon", 32);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r59 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate2("", ctx_r59.formattedValue, "\u00A0", ɵɵpipeBind1(2, 2, "LIST.SELECTED"), "\u00A0");
} }
function PepperiInternalButtonComponent_ng_template_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r61 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵlistener("click", function PepperiInternalButtonComponent_ng_template_4_ng_template_5_Template_button_click_0_listener($event) { ɵɵrestoreView(_r61); const ctx_r60 = ɵɵnextContext(2); return ctx_r60.openReferenceObjectInternal($event); });
    ɵɵtemplate(1, PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(2, PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_2_Template, 5, 3, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_4_Template, 5, 4, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r56 = ɵɵreference(3);
    const _r58 = ɵɵreference(5);
    const ctx_r52 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ctx_r52.formattedValue);
    ɵɵpropertyInterpolate("dir", ctx_r52.xAlignment == "2" ? "rtl" : "ltr");
    ɵɵproperty("id", ctx_r52.key)("disabled", ctx_r52.disabled)("ngClass", ɵɵpureFunction4(8, _c0, ctx_r52.disabled, ctx_r52.xAlignment == "1" || ctx_r52.xAlignment == "0", ctx_r52.xAlignment == "2", ctx_r52.xAlignment == "3"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r52.formattedValue == "0" || ctx_r52.formattedValue == "")("ngIfThen", _r56)("ngIfElse", _r58);
} }
function PepperiInternalButtonComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵelement(1, "pep-field-title", 8);
    ɵɵtemplate(2, PepperiInternalButtonComponent_ng_template_4_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(3, PepperiInternalButtonComponent_ng_template_4_ng_template_3_Template, 2, 11, "ng-template", null, 28, ɵɵtemplateRefExtractor);
    ɵɵtemplate(5, PepperiInternalButtonComponent_ng_template_4_ng_template_5_Template, 6, 13, "ng-template", null, 29, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const internal_r47 = ctx.internal;
    const _r49 = ɵɵreference(4);
    const _r51 = ɵɵreference(6);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r4.label)("required", ctx_r4.required)("disabled", ctx_r4.disabled)("xAlignment", ctx_r4.xAlignment)("showTitle", ctx_r4.showTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", internal_r47)("ngIfThen", _r51)("ngIfElse", _r49);
} }
function PepperiInternalButtonComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 38);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r67 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r67.formattedValue);
    ɵɵproperty("id", ctx_r67.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r67.formattedValue, " ");
} }
function PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 39);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r68 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r68.formattedValue);
    ɵɵproperty("id", ctx_r68.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r68.formattedValue, " ");
} }
function PepperiInternalButtonComponent_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r70 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 35);
    ɵɵlistener("mousedown", function PepperiInternalButtonComponent_ng_template_6_ng_template_1_Template_a_mousedown_0_listener($event) { ɵɵrestoreView(_r70); const ctx_r69 = ɵɵnextContext(2); return ctx_r69.hrefFunction($event); });
    ɵɵtemplate(1, PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_1_Template, 2, 3, "span", 36);
    ɵɵtemplate(2, PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_2_Template, 2, 3, "span", 37);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r64 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("href", ctx_r64.value, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r64.layoutType === ctx_r64.LAYOUT_TYPE.PepperiTable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r64.layoutType !== ctx_r64.LAYOUT_TYPE.PepperiTable);
} }
function PepperiInternalButtonComponent_ng_template_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\u00A0");
    ɵɵelementEnd();
} }
function PepperiInternalButtonComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiInternalButtonComponent_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(1, PepperiInternalButtonComponent_ng_template_6_ng_template_1_Template, 3, 3, "ng-template", null, 33, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, PepperiInternalButtonComponent_ng_template_6_ng_template_3_Template, 2, 0, "ng-template", null, 34, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r63 = ɵɵreference(2);
    const _r65 = ɵɵreference(4);
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("ngIf", (ctx_r6.formattedValue == null ? null : ctx_r6.formattedValue.length) > 0)("ngIfThen", _r63)("ngIfElse", _r65);
} }
class PepperiInternalButtonComponent {
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
PepperiInternalButtonComponent.ɵfac = function PepperiInternalButtonComponent_Factory(t) { return new (t || PepperiInternalButtonComponent)(ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
PepperiInternalButtonComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiInternalButtonComponent, selectors: [["pep-internal-button"]], inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", referenceObjectInternalType: "referenceObjectInternalType", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { elementClicked: "elementClicked", valueChanged: "valueChanged" }, features: [ɵɵNgOnChangesFeature], decls: 8, vars: 4, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["buttonTemplate", ""], ["linkTemplate", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], ["formBlock", ""], ["notFormBlock", ""], [1, "pepperi-button-container", "reference-button"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], ["newBlock", ""], ["existingBlock", ""], ["mat-button", "", 1, "pepperi-button", "md", "regular", 3, "id", "title", "ngClass", "click"], [1, "pull-left", "flip"], ["pepRtlClass", "", 1, "pull-right", "flip"], ["name", "number_plus", 3, "click"], [3, "buttons", "buttonsClass", "buttonsDisabled", "viewType"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngSwitchDefault"], [3, "title", "click"], ["name", "system_menu", 4, "ngIf"], ["name", "system_menu"], ["nonTableBlock", ""], ["tableBlock", ""], [1, "pepperi-report-input", "readonly", "body-sm", 3, "id", "title"], ["buttonBlock", ""], ["linkBlock", ""], [1, "pepperi-button-container"], ["regularButtonTemplate", ""], ["internalButtonTemplate", ""], ["mat-button", "", 1, "pepperi-button", "md", "regular", 3, "id", "title", "dir", "disabled", "ngClass", "click"], ["name", "number_plus"], ["name", "system_edit"], ["notEmptyBlock", ""], ["emptyBlock", ""], [1, "color-link", 3, "href", "mousedown"], ["class", "body-sm pepperi-report-input readonly", 3, "id", "title", 4, "ngIf"], ["class", "body-sm pepperi-card-input", "style", "display: block;", 3, "id", "title", 4, "ngIf"], [1, "body-sm", "pepperi-report-input", "readonly", 3, "id", "title"], [1, "body-sm", "pepperi-card-input", 2, "display", "block", 3, "id", "title"]], template: function PepperiInternalButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_1_Template, 6, 3, "ng-container", 1);
        ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_2_Template, 6, 3, "ng-container", 1);
        ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_3_Template, 5, 3, "ng-container", 1);
        ɵɵelementContainerEnd();
        ɵɵtemplate(4, PepperiInternalButtonComponent_ng_template_4_Template, 7, 8, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(6, PepperiInternalButtonComponent_ng_template_6_Template, 5, 3, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.type);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "reference");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "listofobjects");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "button");
    } }, directives: [NgSwitch, NgSwitchCase, NgIf, PepperiFieldTitleComponent, MatButton, NgClass, MatIcon, RtlClassDirective, PepperiIconComponent, GroupButtonsComponent, NgTemplateOutlet, NgSwitchDefault, Dir], pipes: [TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.pepperi-button-container[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.pepperi-button-container[_ngcontent-%COMP%]   .center-alignment[_ngcontent-%COMP%]{left:50%;position:absolute;transform:translate(-50%)}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .split-buttons{float:left}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type, .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .split-buttons button:last-of-type{padding:0;width:1.5rem}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .pepperi-button mat-icon{margin-left:var(--pep-spacing-md,.75rem)}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]   mat-icon.rtl[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .pepperi-button mat-icon.rtl{margin-left:unset;margin-right:var(--pep-spacing-md,.75rem)}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .pepperi-button.last-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .pepperi-button.last-button mat-icon{margin:0}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiInternalButtonComponent, [{
        type: Component,
        args: [{
                selector: 'pep-internal-button',
                templateUrl: './internal-button.component.html',
                styleUrls: ['./internal-button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: CustomizationService }, { type: Renderer2 }, { type: ElementRef }]; }, { key: [{
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

class PepperiInternalButtonModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemMenu,
            pepperiIconNumberPlus
        ]);
    }
}
PepperiInternalButtonModule.ɵmod = ɵɵdefineNgModule({ type: PepperiInternalButtonModule });
PepperiInternalButtonModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiInternalButtonModule_Factory(t) { return new (t || PepperiInternalButtonModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules,
            MatFormFieldModule,
            MatCommonModule,
            MatButtonModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiGroupButtonsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiInternalButtonModule, { declarations: [PepperiInternalButtonComponent], imports: [CommonModule,
        // Material modules,
        MatFormFieldModule,
        MatCommonModule,
        MatButtonModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiGroupButtonsModule], exports: [PepperiInternalButtonComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiInternalButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules,
                    MatFormFieldModule,
                    MatCommonModule,
                    MatButtonModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiGroupButtonsModule
                ],
                exports: [PepperiInternalButtonComponent],
                declarations: [PepperiInternalButtonComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/internal-button
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiInternalButtonComponent, PepperiInternalButtonModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-internal-button.js.map
