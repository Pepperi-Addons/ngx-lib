import { ɵɵelementContainer, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelement, ɵɵelementEnd, ɵɵproperty, ɵɵpureFunction1, ɵɵtemplate, ɵɵadvance, ɵɵstyleProp, ɵɵsanitizeUrl, ɵɵtext, ɵɵpipe, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵpipeBind2, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵpureFunction2, ɵɵpureFunction0, ɵɵtextInterpolate, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵviewQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgTemplateOutlet, CommonModule } from '@angular/common';
import { NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { SignaturePad, SignaturePadModule } from 'angular2-signaturepad';
import { LAYOUT_TYPE, CustomizationService, FileService, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemBin, pepperiIconSystemSignature, pepperiIconSystemClose, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiFilesUploaderModule } from '@pepperi-addons/ngx-lib/files-uploader';
import { DialogService, PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { TranslatePipe } from '@ngx-translate/core';

const _c0 = ["signaturePad"];
const _c1 = ["signaturePopupPad"];
function PepperiSignatureComponent_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { "right-alignment": a0 }; };
function PepperiSignatureComponent_ng_template_2_ng_template_4_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function PepperiSignatureComponent_ng_template_2_ng_template_4_button_0_Template_button_click_0_listener($event) { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(3); return ctx_r15.deleteSignature($event); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c2, ctx_r14.xAlignment == "2"));
} }
const _c3 = function (a0) { return [a0]; };
function PepperiSignatureComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵtemplate(0, PepperiSignatureComponent_ng_template_2_ng_template_4_button_0_Template, 3, 3, "button", 13);
    ɵɵelementStart(1, "div", 14);
    ɵɵlistener("click", function PepperiSignatureComponent_ng_template_2_ng_template_4_Template_div_click_1_listener() { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(2); return ctx_r17.openSignModal(); });
    ɵɵelementStart(2, "img", 15);
    ɵɵlistener("error", function PepperiSignatureComponent_ng_template_2_ng_template_4_Template_img_error_2_listener($event) { ɵɵrestoreView(_r18); const ctx_r19 = ɵɵnextContext(2); return ctx_r19.errorHandler($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r11.disabled);
    ɵɵadvance(2);
    ɵɵstyleProp("max-height", ctx_r11.fieldHeight);
    ɵɵproperty("src", ctx_r11.src, ɵɵsanitizeUrl)("alt", ctx_r11.label)("ngClass", ɵɵpureFunction1(6, _c3, "text-align-" + ctx_r11.xAlignment));
} }
function PepperiSignatureComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵelement(1, "pep-icon", 19);
    ɵɵelementStart(2, "span", 20);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 1, ctx_r13.disabled ? "MESSAGES.INFO_MISSING_SIGNATURE" : "SIGNATURE.HINT"), " ");
} }
const _c4 = function (a0) { return { disable: a0 }; };
const _c5 = function (a0) { return { field: a0 }; };
function PepperiSignatureComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 5);
    ɵɵelementStart(1, "div", 6);
    ɵɵelementStart(2, "div", 7);
    ɵɵtemplate(3, PepperiSignatureComponent_ng_template_2_ng_container_3_Template, 1, 0, "ng-container", 8);
    ɵɵtemplate(4, PepperiSignatureComponent_ng_template_2_ng_template_4_Template, 3, 8, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, PepperiSignatureComponent_ng_template_2_ng_template_6_Template, 5, 3, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(8, "input", 11);
    ɵɵlistener("click", function PepperiSignatureComponent_ng_template_2_Template_input_click_8_listener() { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(); return ctx_r20.openSignModal(); })("keypress", function PepperiSignatureComponent_ng_template_2_Template_input_keypress_8_listener($event) { ɵɵrestoreView(_r21); const ctx_r22 = ɵɵnextContext(); return ctx_r22.onKeyPress_OpenSignModal($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(9, "mat-error");
    ɵɵelement(10, "span", 12);
    ɵɵpipe(11, "translate");
    ɵɵpipe(12, "translate");
    ɵɵpipe(13, "translate");
    ɵɵpipe(14, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = ɵɵreference(5);
    const _r12 = ɵɵreference(7);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(2);
    ɵɵstyleProp("height", ctx_r1.fieldHeight);
    ɵɵproperty("ngClass", ɵɵpureFunction1(25, _c4, ctx_r1.disabled));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.src != "")("ngIfThen", _r10)("ngIfElse", _r12);
    ɵɵadvance(5);
    ɵɵproperty("id", ctx_r1.key)("formControlName", ctx_r1.key)("value", ctx_r1.src)("disabled", ctx_r1.disabled);
    ɵɵadvance(2);
    ɵɵproperty("title", ctx_r1.required && ctx_r1.src.length == 0 ? ɵɵpipeBind2(11, 13, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(27, _c5, ctx_r1.label)) : ɵɵpipeBind2(12, 16, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(29, _c5, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.src.length == 0 ? ɵɵpipeBind2(13, 19, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(31, _c5, ctx_r1.label)) : ɵɵpipeBind2(14, 22, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(33, _c5, ctx_r1.label)));
} }
function PepperiSignatureComponent_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c6 = function (a0, a1) { return { "one-row": a0, "stand-alone": a1 }; };
function PepperiSignatureComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 21);
    ɵɵelement(2, "pep-field-title", 22);
    ɵɵtemplate(3, PepperiSignatureComponent_ng_container_4_ng_container_3_Template, 1, 0, "ng-container", 23);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const _r0 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(7, _c6, ctx_r2.rowSpan == 1, ctx_r2.standAlone));
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r2.label)("required", ctx_r2.required)("disabled", ctx_r2.disabled)("xAlignment", ctx_r2.xAlignment)("showTitle", ctx_r2.showTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiSignatureComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiSignatureComponent_ng_container_5_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c7 = function (a0) { return { "one-row": a0 }; };
function PepperiSignatureComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, PepperiSignatureComponent_ng_container_5_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 23);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = ɵɵnextContext(2);
    const _r0 = ɵɵreference(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c7, ctx_r26.rowSpan == 1));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiSignatureComponent_ng_container_5_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c8 = function () { return { isTableView: false }; };
function PepperiSignatureComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, PepperiSignatureComponent_ng_container_5_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = ɵɵnextContext(2);
    const _r5 = ɵɵreference(8);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c7, ctx_r28.rowSpan == 1));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", ɵɵpureFunction0(5, _c8));
} }
function PepperiSignatureComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiSignatureComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵtemplate(2, PepperiSignatureComponent_ng_container_5_ng_template_2_Template, 2, 4, "ng-template", null, 24, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiSignatureComponent_ng_container_5_ng_template_4_Template, 2, 6, "ng-template", null, 25, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r25 = ɵɵreference(3);
    const _r27 = ɵɵreference(5);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", false && ctx_r3.isActive && !ctx_r3.disabled)("ngIfThen", _r25)("ngIfElse", _r27);
} }
function PepperiSignatureComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiSignatureComponent_ng_container_6_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiSignatureComponent_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, PepperiSignatureComponent_ng_container_6_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 23);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiSignatureComponent_ng_container_6_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c9 = function () { return { isTableView: true }; };
function PepperiSignatureComponent_ng_container_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, PepperiSignatureComponent_ng_container_6_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r5 = ɵɵreference(8);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c9));
} }
function PepperiSignatureComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiSignatureComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵtemplate(2, PepperiSignatureComponent_ng_container_6_ng_template_2_Template, 2, 1, "ng-template", null, 24, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiSignatureComponent_ng_container_6_ng_template_4_Template, 2, 3, "ng-template", null, 25, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r32 = ɵɵreference(3);
    const _r34 = ɵɵreference(5);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", false && ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r32)("ngIfElse", _r34);
} }
function PepperiSignatureComponent_ng_template_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiSignatureComponent_ng_template_7_ng_template_4_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 15);
    ɵɵlistener("error", function PepperiSignatureComponent_ng_template_7_ng_template_4_img_1_Template_img_error_0_listener($event) { ɵɵrestoreView(_r47); const ctx_r46 = ɵɵnextContext(3); return ctx_r46.errorHandler($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r44 = ɵɵnextContext(3);
    ɵɵstyleProp("max-height", ctx_r44.fieldHeight);
    ɵɵproperty("src", ctx_r44.src, ɵɵsanitizeUrl)("alt", ctx_r44.label)("ngClass", ɵɵpureFunction1(5, _c3, "text-align-" + ctx_r44.xAlignment));
} }
function PepperiSignatureComponent_ng_template_7_ng_template_4_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r49 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 32);
    ɵɵlistener("error", function PepperiSignatureComponent_ng_template_7_ng_template_4_img_2_Template_img_error_0_listener($event) { ɵɵrestoreView(_r49); const ctx_r48 = ɵɵnextContext(3); return ctx_r48.errorHandler($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r45 = ɵɵnextContext(3);
    ɵɵstyleProp("max-height", ctx_r45.fieldHeight);
    ɵɵproperty("src", ctx_r45.src, ɵɵsanitizeUrl)("alt", ctx_r45.label)("ngClass", ɵɵpureFunction1(5, _c3, "text-align-" + ctx_r45.xAlignment));
} }
function PepperiSignatureComponent_ng_template_7_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r51 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14);
    ɵɵlistener("click", function PepperiSignatureComponent_ng_template_7_ng_template_4_Template_div_click_0_listener() { ɵɵrestoreView(_r51); const ctx_r50 = ɵɵnextContext(2); return ctx_r50.openSignModal(); });
    ɵɵtemplate(1, PepperiSignatureComponent_ng_template_7_ng_template_4_img_1_Template, 1, 7, "img", 30);
    ɵɵtemplate(2, PepperiSignatureComponent_ng_template_7_ng_template_4_img_2_Template, 1, 7, "img", 31);
    ɵɵelementEnd();
} if (rf & 2) {
    const isTableView_r38 = ɵɵnextContext().isTableView;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !isTableView_r38);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", isTableView_r38);
} }
function PepperiSignatureComponent_ng_template_7_ng_template_6_Template(rf, ctx) { }
function PepperiSignatureComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵelementStart(1, "div", 6);
    ɵɵelementStart(2, "div", 29);
    ɵɵtemplate(3, PepperiSignatureComponent_ng_template_7_ng_container_3_Template, 1, 0, "ng-container", 8);
    ɵɵtemplate(4, PepperiSignatureComponent_ng_template_7_ng_template_4_Template, 3, 2, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, PepperiSignatureComponent_ng_template_7_ng_template_6_Template, 0, 0, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r40 = ɵɵreference(5);
    const _r42 = ɵɵreference(7);
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r6.src != "")("ngIfThen", _r40)("ngIfElse", _r42);
} }
function PepperiSignatureComponent_ng_template_9_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r56 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 41);
    ɵɵelementStart(1, "div", 42);
    ɵɵelementStart(2, "button", 43);
    ɵɵlistener("click", function PepperiSignatureComponent_ng_template_9_div_10_Template_button_click_2_listener($event) { ɵɵrestoreView(_r56); const ctx_r55 = ɵɵnextContext(2); return ctx_r55.saveSignModal($event); });
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 44);
    ɵɵlistener("click", function PepperiSignatureComponent_ng_template_9_div_10_Template_button_click_5_listener() { ɵɵrestoreView(_r56); const ctx_r57 = ɵɵnextContext(2); return ctx_r57.clearSignModal(); });
    ɵɵtext(6);
    ɵɵpipe(7, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r54 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r54.showActionBtn || ctx_r54.readonly || ctx_r54.disabled)("mat-dialog-close", ctx_r54.signatureURL);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 5, "ACTIONS.DONE"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r54.showActionBtn || ctx_r54.readonly || ctx_r54.disabled);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 7, "ACTIONS.CLEAR"), " ");
} }
function PepperiSignatureComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r59 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "h2", 33);
    ɵɵelementStart(1, "span", 34);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 35);
    ɵɵelementStart(5, "mat-icon");
    ɵɵelement(6, "pep-icon", 36);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 37);
    ɵɵelementStart(8, "signature-pad", 38, 39);
    ɵɵlistener("onBeginEvent", function PepperiSignatureComponent_ng_template_9_Template_signature_pad_onBeginEvent_8_listener() { ɵɵrestoreView(_r59); const ctx_r58 = ɵɵnextContext(); return ctx_r58.drawStart(); })("onEndEvent", function PepperiSignatureComponent_ng_template_9_Template_signature_pad_onEndEvent_8_listener() { ɵɵrestoreView(_r59); const ctx_r60 = ɵɵnextContext(); return ctx_r60.drawComplete(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, PepperiSignatureComponent_ng_template_9_div_10_Template, 8, 9, "div", 40);
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 4, "SIGNATURE.DIALOG_TITLE"));
    ɵɵadvance(2);
    ɵɵproperty("mat-dialog-close", null);
    ɵɵadvance(4);
    ɵɵproperty("options", ctx_r8.signaturePadOptions);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r8.showActionBtn);
} }
class PepperiSignatureComponent {
    constructor(dialogService, customizationService, fileService, cd, renderer, element) {
        this.dialogService = dialogService;
        this.customizationService = customizationService;
        this.fileService = fileService;
        this.cd = cd;
        this.renderer = renderer;
        this.element = element;
        this.key = '';
        this.src = '';
        this.label = '';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.signatureURL = '';
        // @Input() inDialog = false;
        this.controlType = 'signature';
        this.form = null;
        this.showTitle = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.isActive = false;
        this.valueChanged = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.fieldHeight = '';
        this.standAlone = false;
        this.dataURI = null;
        this.showActionBtn = true;
        this.isVisibleModal = false;
        this.acceptSignatureType = 'png';
        this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 2,
            canvasWidth: 500,
            canvasHeight: 300,
            penColor: 'rgb(151, 151, 151)'
        };
    }
    ngOnInit() {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.src, this.required, this.readonly, this.disabled);
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
        this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
    }
    ngOnChanges(changes) {
        if (changes.src && changes.src.currentValue.length > 0) {
            // Empty dataURI if there is change in the src.
            this.dataURI = null;
            // For clean the cache.
            // this.src = this.src ? this.src + '?t=' + new Date().toTimeString() : '';
        }
    }
    ngOnDestroy() {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }
    drawComplete() {
        // will be notified of szimek/signature_pad's onEnd event
    }
    drawStart() {
        // will be notified of szimek/signature_pad's onBegin event
    }
    openSignModal() {
        // If the signature is not empty open it in image viewer.
        if (this.standAlone && this.dataURI) {
            const fileStrArr = this.dataURI.fileStr.split(';');
            if (fileStrArr.length === 2) {
                const win = window.open('', '_blank');
                const contentType = fileStrArr[0].split(':')[1];
                const base64 = fileStrArr[1].split(',')[1];
                const blob = this.fileService.convertFromb64toBlob(base64, contentType);
                const url = URL.createObjectURL(blob);
                win.location.href = url;
            }
            // signature allready exits
        }
        else {
            this.signatureURL = this.src;
            this.openSignatoreDlg(this.signatureURL);
        }
    }
    openSignatoreDlg(src = '') {
        this.showActionBtn = this.signatureURL && this.signatureURL !== '' ? false : true;
        // const signatureData = new DialogData('', this.signaturePopupPad, DialogDataType.Template);
        const dialogRef = this.dialogService.openDialog(this.signaturePopupPad);
        dialogRef.afterOpened().subscribe(() => {
            this.afterDialogOpened();
        });
    }
    afterDialogOpened() {
        if (this.signatureURL && this.signatureURL !== '') {
            this.signaturePad.fromDataURL(this.signatureURL);
            this.signaturePad.off();
        }
    }
    clearSignModal() {
        this.signatureURL = '';
        this.signaturePad.clear();
        this.signaturePad.on();
    }
    deleteSignature(event) {
        this.signatureURL = '';
        this.changeValue(this.signatureURL);
        this.cd.detectChanges();
    }
    saveSignModal(event) {
        if (!this.signaturePad.isEmpty()) {
            this.signatureURL = this.signaturePad.toDataURL('image/png');
            const fileValue = JSON.stringify({
                acceptedExtensions: this.acceptSignatureType,
                fileStr: this.signatureURL,
                fileExt: this.acceptSignatureType
            });
            this.changeValue(fileValue);
        }
        else {
            this.signatureURL = '';
            this.changeValue(this.signatureURL);
        }
    }
    errorHandler(event) {
        this.signatureURL = this.src = ''; // this.blankImage;
    }
    changeValue(value, lastFocusedField = null) {
        this.dataURI = value.length > 0 ? JSON.parse(value) : null;
        this.src = this.standAlone && this.dataURI ? this.dataURI.fileStr : '';
        this.customizationService.updateFormFieldValue(this.form, this.key, this.dataURI ? this.dataURI.fileExt : '');
        this.valueChanged.emit({ apiName: this.key, value, controlType: this.controlType, lastFocusedField });
    }
    onKeyPress_OpenSignModal(event) {
        const e = event;
        if ([13, 32].indexOf(e.which) !== -1) {
            this.openSignModal();
        }
        e.preventDefault();
    }
}
PepperiSignatureComponent.ɵfac = function PepperiSignatureComponent_Factory(t) { return new (t || PepperiSignatureComponent)(ɵɵdirectiveInject(DialogService), ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(FileService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
PepperiSignatureComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiSignatureComponent, selectors: [["pep-signature"]], viewQuery: function PepperiSignatureComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.signaturePad = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.signaturePopupPad = _t.first);
    } }, inputs: { key: "key", src: "src", label: "label", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", signatureURL: "signatureURL", form: "form", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive" }, outputs: { valueChanged: "valueChanged" }, features: [ɵɵNgOnChangesFeature], decls: 11, vars: 4, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], ["pepperiReadonlyTemplate", ""], ["signaturePopupPad", ""], ["appearance", "outline", 3, "formGroup"], [1, "pepperi-file-wrapper"], [1, "pepperi-file", "body-sm", 3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["withImg", ""], ["noImg", ""], ["matInput", "", "type", "text", "autocomplete", "off", "readonly", "", 1, "hidden-input", "signature", 3, "id", "formControlName", "value", "disabled", "click", "keypress"], [1, "body-xs", 3, "title", "innerText"], ["mat-button", "", "class", "pepperi-button icon-button weak md delete", "tabindex", "-1", 3, "ngClass", "click", 4, "ngIf"], [1, "pepperi-file-preview", 3, "click"], [1, "pepperi-file-preview-img", 3, "src", "alt", "ngClass", "error"], ["mat-button", "", "tabindex", "-1", 1, "pepperi-button", "icon-button", "weak", "md", "delete", 3, "ngClass", "click"], ["name", "system_bin"], [1, "ellipsis", "pepperi-file-message"], ["name", "system_signature"], [1, "body-sm", "ellipsis"], [1, "pepperi-file-container", 3, "ngClass"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [4, "ngTemplateOutlet"], ["selectedBlock", ""], ["notSelectedBlock", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pepperi-file-container", "one-row"], [1, "pepperi-file-container"], [1, "pepperi-file", "body-sm", "disable"], ["class", "pepperi-file-preview-img", 3, "src", "max-height", "alt", "ngClass", "error", 4, "ngIf"], ["class", "pepperi-report-file pepperi-file-preview-img", 3, "src", "max-height", "alt", "ngClass", "error", 4, "ngIf"], [1, "pepperi-report-file", "pepperi-file-preview-img", 3, "src", "alt", "ngClass", "error"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], [1, "pull-left", "flip", "ellipsis"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], ["mat-dialog-content", ""], [3, "options", "onBeginEvent", "onEndEvent"], ["signaturePad", ""], ["mat-dialog-actions", "", "class", " pepperi-border-top", 4, "ngIf"], ["mat-dialog-actions", "", 1, "pepperi-border-top"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "strong", "pull-right", "flip", 3, "disabled", "mat-dialog-close", "click"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "weak", "pull-right", "flip", 3, "disabled", "click"]], template: function PepperiSignatureComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵelementContainerStart(1);
        ɵɵtemplate(2, PepperiSignatureComponent_ng_template_2_Template, 15, 35, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(4, PepperiSignatureComponent_ng_container_4_Template, 4, 10, "ng-container", 2);
        ɵɵtemplate(5, PepperiSignatureComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(6, PepperiSignatureComponent_ng_container_6_Template, 6, 3, "ng-container", 2);
        ɵɵelementContainerEnd();
        ɵɵtemplate(7, PepperiSignatureComponent_ng_template_7_Template, 8, 3, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵtemplate(9, PepperiSignatureComponent_ng_template_9_Template, 11, 6, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, MatFormField, NgClass, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, MatError, MatButton, MatIcon, PepperiIconComponent, PepperiFieldTitleComponent, NgTemplateOutlet, MatDialogTitle, MatDialogClose, MatDialogContent, SignaturePad, MatDialogActions], pipes: [TranslatePipe], styles: ["[_nghost-%COMP%]{display:block}signature-pad[_ngcontent-%COMP%]{display:-ms-grid;display:grid;height:inherit;width:inherit}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiSignatureComponent, [{
        type: Component,
        args: [{
                selector: 'pep-signature',
                styleUrls: ['./signature.component.scss'],
                templateUrl: './signature.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DialogService }, { type: CustomizationService }, { type: FileService }, { type: ChangeDetectorRef }, { type: Renderer2 }, { type: ElementRef }]; }, { key: [{
            type: Input
        }], src: [{
            type: Input
        }], label: [{
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
        }], signatureURL: [{
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
        }], signaturePad: [{
            type: ViewChild,
            args: ['signaturePad']
        }], signaturePopupPad: [{
            type: ViewChild,
            args: ['signaturePopupPad', { read: TemplateRef }]
        }] }); })();

class PepperiSignatureModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemBin,
            pepperiIconSystemSignature,
            pepperiIconSystemClose
        ]);
    }
}
PepperiSignatureModule.ɵmod = ɵɵdefineNgModule({ type: PepperiSignatureModule });
PepperiSignatureModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiSignatureModule_Factory(t) { return new (t || PepperiSignatureModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatDialogModule,
            // External modules
            SignaturePadModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiFilesUploaderModule,
            PepperiDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiSignatureModule, { declarations: [PepperiSignatureComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        // External modules
        SignaturePadModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiFilesUploaderModule,
        PepperiDialogModule], exports: [PepperiSignatureComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiSignatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules
                    MatCommonModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                    MatDialogModule,
                    // External modules
                    SignaturePadModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiFilesUploaderModule,
                    PepperiDialogModule
                ],
                exports: [PepperiSignatureComponent],
                declarations: [PepperiSignatureComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/signature
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiSignatureComponent, PepperiSignatureModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-signature.js.map
