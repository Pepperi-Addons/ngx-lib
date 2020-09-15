import { ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵgetCurrentView, ɵɵelementStart, ɵɵtemplate, ɵɵpipe, ɵɵlistener, ɵɵrestoreView, ɵɵelementEnd, ɵɵpureFunction4, ɵɵadvance, ɵɵpropertyInterpolate, ɵɵpureFunction1, ɵɵclassMapInterpolate1, ɵɵstyleProp, ɵɵpipeBind1, ɵɵsanitizeHtml, ɵɵpipeBind2, ɵɵelementContainer, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵreference, ɵɵpureFunction0, ɵɵtext, ɵɵtextInterpolate1, ɵɵclassMap, ɵɵpureFunction2, ɵɵtemplateRefExtractor, EventEmitter, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵviewQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgStyle, NgTemplateOutlet, CommonModule } from '@angular/common';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, NgModel, RequiredValidator, NgSelectOption, ɵangular_packages_forms_forms_x, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatSuffix, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDialogClose, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { LAYOUT_TYPE, CustomizationService, SafeHtmlPipe, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemEdit, pepperiIconSystemClose, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiTextboxIconComponent, PepperiTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { DialogService, PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { Dir } from '@angular/cdk/bidi';
import { TranslatePipe } from '@ngx-translate/core';

const _c0 = ["richTextEditorDialogTemplate"];
function PepperiRichHtmlTextareaComponent_ng_template_1_pep_field_title_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-field-title", 12);
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵproperty("label", ctx_r11.label)("required", ctx_r11.required)("disabled", ctx_r11.disabled)("maxFieldCharacters", ctx_r11.maxFieldCharacters)("xAlignment", ctx_r11.xAlignment)("showTitle", ctx_r11.showTitle);
} }
const _c1 = function (a0, a1, a2, a3) { return { "right-alignment": a0, "one-row": a1, "stand-alone": a2, "pepperi-textarea-card-container": a3 }; };
const _c2 = function (a0) { return { "pepperi-table-textarea": a0 }; };
const _c3 = function (a0) { return { "text-align": a0 }; };
const _c4 = function (a0) { return { "card-one-row-icon": a0 }; };
const _c5 = function (a0) { return { field: a0 }; };
function PepperiRichHtmlTextareaComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_template_1_pep_field_title_1_Template, 1, 6, "pep-field-title", 6);
    ɵɵelementStart(2, "mat-form-field", 7);
    ɵɵelement(3, "textarea", 8);
    ɵɵelement(4, "div", 9);
    ɵɵpipe(5, "safeHtml");
    ɵɵelementStart(6, "pep-textbox-icon", 10);
    ɵɵlistener("iconClicked", function PepperiRichHtmlTextareaComponent_ng_template_1_Template_pep_textbox_icon_iconClicked_6_listener() { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(); return ctx_r12.openDialog(); });
    ɵɵelementEnd();
    ɵɵelementStart(7, "mat-error");
    ɵɵelement(8, "span", 11);
    ɵɵpipe(9, "translate");
    ɵɵpipe(10, "translate");
    ɵɵpipe(11, "translate");
    ɵɵpipe(12, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const isFormView_r10 = ctx.isFormView;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction4(34, _c1, ctx_r1.xAlignment == "2", !isFormView_r10 && ctx_r1.rowSpan === 1, ctx_r1.standAlone, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", isFormView_r10);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("dir", ctx_r1.xAlignment == "2" ? "rtl" : "ltr");
    ɵɵproperty("ngClass", ɵɵpureFunction1(39, _c2, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable));
    ɵɵadvance(1);
    ɵɵproperty("hidden", true)("formControlName", ctx_r1.key);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("body-sm rich-text-cont ", ctx_r1.readonly ? "disable-scroll" : "", " ql-editor ");
    ɵɵstyleProp("height", ctx_r1.fieldHeight);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(41, _c3, ctx_r1.xAlignment == "2" ? "right" : "left"))("innerHtml", ɵɵpipeBind1(5, 20, ctx_r1.value), ɵɵsanitizeHtml);
    ɵɵadvance(2);
    ɵɵproperty("value", ctx_r1.value)("label", ctx_r1.label)("type", ctx_r1.controlType)("disabled", ctx_r1.disabled)("ngClass", ɵɵpureFunction1(43, _c4, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard && ctx_r1.rowSpan === 1));
    ɵɵadvance(2);
    ɵɵproperty("title", ctx_r1.required && ctx_r1.value.length == 0 ? ɵɵpipeBind2(9, 22, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(45, _c5, ctx_r1.label)) : ɵɵpipeBind2(10, 25, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(47, _c5, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.value.length == 0 ? ɵɵpipeBind2(11, 28, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(49, _c5, ctx_r1.label)) : ɵɵpipeBind2(12, 31, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(51, _c5, ctx_r1.label)));
} }
function PepperiRichHtmlTextareaComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c6 = function () { return { isFormView: true }; };
function PepperiRichHtmlTextareaComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c6));
} }
function PepperiRichHtmlTextareaComponent_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ctx_r15.label);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r15.label, ":\u00A0");
} }
const _c7 = function (a0) { return { "self-end": a0 }; };
function PepperiRichHtmlTextareaComponent_ng_container_4_button_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 19);
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 20);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c7, ctx_r16.value && ctx_r16.value !== ""));
} }
const _c8 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
const _c9 = function (a0) { return { "-webkit-line-clamp": a0 }; };
function PepperiRichHtmlTextareaComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵlistener("click", function PepperiRichHtmlTextareaComponent_ng_container_4_Template_div_click_1_listener($event) { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(); return !ctx_r17.disabled ? ctx_r17.cardTemplateClicked($event) : ""; });
    ɵɵtemplate(2, PepperiRichHtmlTextareaComponent_ng_container_4_span_2_Template, 2, 2, "span", 15);
    ɵɵelement(3, "span", 16);
    ɵɵpipe(4, "safeHtml");
    ɵɵtemplate(5, PepperiRichHtmlTextareaComponent_ng_container_4_button_5_Template, 3, 3, "button", 17);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap("text-align-" + ctx_r3.xAlignment);
    ɵɵstyleProp("height", ctx_r3.fieldHeight);
    ɵɵproperty("ngClass", ɵɵpureFunction2(12, _c8, ctx_r3.rowSpan === 1, ctx_r3.isActive && !ctx_r3.disabled))("ngStyle", ɵɵpureFunction1(15, _c9, ctx_r3.rowSpan));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.showTitle && ctx_r3.label != "");
    ɵɵadvance(1);
    ɵɵproperty("id", ctx_r3.key)("innerHtml", ɵɵpipeBind1(4, 10, ctx_r3.value), ɵɵsanitizeHtml);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.isActive && !ctx_r3.disabled);
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c10 = function () { return { isFormView: false }; };
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c10));
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵelement(1, "span", 27);
    ɵɵpipe(2, "safeHtml");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("id", ctx_r27.key)("innerHtml", ɵɵpipeBind1(2, 2, ctx_r27.value), ɵɵsanitizeHtml);
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\u00A0");
    ɵɵelementEnd();
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 21);
    ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template, 3, 4, "ng-template", null, 24, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 0, "ng-template", null, 25, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r26 = ɵɵreference(2);
    const _r28 = ɵɵreference(4);
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", (ctx_r23.value == null ? null : ctx_r23.value.length) > 0)("ngIfThen", _r26)("ngIfElse", _r28);
} }
function PepperiRichHtmlTextareaComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵɵtemplate(2, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 22, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 23, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r20 = ɵɵreference(3);
    const _r22 = ɵɵreference(5);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r20)("ngIfElse", _r22);
} }
function PepperiRichHtmlTextareaComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiRichHtmlTextareaComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c6));
} }
function PepperiRichHtmlTextareaComponent_ng_template_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiRichHtmlTextareaComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵelementStart(1, "button", 29);
    ɵɵelementStart(2, "mat-icon");
    ɵɵelement(3, "pep-icon", 30);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(4, PepperiRichHtmlTextareaComponent_ng_template_7_ng_container_4_Template, 1, 0, "ng-container", 31);
    ɵɵelementStart(5, "div", 32);
    ɵɵelementStart(6, "div", 33);
    ɵɵelementStart(7, "button", 34);
    ɵɵtext(8);
    ɵɵpipe(9, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 35);
    ɵɵtext(11);
    ɵɵpipe(12, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const _r8 = ɵɵreference(10);
    ɵɵadvance(1);
    ɵɵproperty("mat-dialog-close", null);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", _r8);
    ɵɵadvance(3);
    ɵɵproperty("mat-dialog-close", ctx_r7.quillContent || "")("disabled", ctx_r7.disabled);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 7, "ACTIONS.SAVE"), " ");
    ɵɵadvance(2);
    ɵɵproperty("mat-dialog-close", null);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 9, "ACTIONS.CANCEL"), " ");
} }
function PepperiRichHtmlTextareaComponent_ng_template_9_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 38);
    ɵɵelementStart(1, "span", 39);
    ɵɵelement(2, "button", 40);
    ɵɵelement(3, "button", 41);
    ɵɵelement(4, "button", 42);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span", 39);
    ɵɵelement(6, "button", 43);
    ɵɵelement(7, "button", 44);
    ɵɵelementEnd();
    ɵɵelementStart(8, "span", 39);
    ɵɵelement(9, "button", 45);
    ɵɵelement(10, "button", 46);
    ɵɵelementEnd();
    ɵɵelementStart(11, "span", 39);
    ɵɵelement(12, "select", 47);
    ɵɵelementEnd();
    ɵɵelementStart(13, "span", 39);
    ɵɵelementStart(14, "select", 48);
    ɵɵelement(15, "option", 49);
    ɵɵelement(16, "option", 50);
    ɵɵelement(17, "option", 51);
    ɵɵelement(18, "option", 52);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PepperiRichHtmlTextareaComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "quill-editor", 36);
    ɵɵlistener("ngModelChange", function PepperiRichHtmlTextareaComponent_ng_template_9_Template_quill_editor_ngModelChange_0_listener($event) { ɵɵrestoreView(_r34); const ctx_r33 = ɵɵnextContext(); return ctx_r33.quillContent = $event; });
    ɵɵpipe(1, "translate");
    ɵɵtemplate(2, PepperiRichHtmlTextareaComponent_ng_template_9_div_2_Template, 19, 0, "div", 37);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 7, "RICH_TEXTAREA.HINT"));
    ɵɵproperty("ngModel", ctx_r9.quillContent)("sanitize", true)("readOnly", ctx_r9.disabled)("maxLength", ctx_r9.maxFieldCharacters)("required", ctx_r9.required);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r9.disabled);
} }
class PepperiRichHtmlTextareaComponent {
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
PepperiRichHtmlTextareaComponent.ɵfac = function PepperiRichHtmlTextareaComponent_Factory(t) { return new (t || PepperiRichHtmlTextareaComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(DialogService), ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
PepperiRichHtmlTextareaComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiRichHtmlTextareaComponent, selectors: [["pep-rich-html-textarea"]], viewQuery: function PepperiRichHtmlTextareaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.richTextEditorDialogTemplate = _t.first);
    } }, inputs: { key: "key", value: "value", label: "label", required: "required", disabled: "disabled", readonly: "readonly", maxFieldCharacters: "maxFieldCharacters", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, decls: 11, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], ["richTextEditorDialogTemplate", ""], ["quilTemplate", ""], [1, "pepperi-textarea-container", 3, "ngClass"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", 4, "ngIf"], ["appearance", "outline", 3, "dir", "ngClass"], ["matInput", "", 3, "hidden", "formControlName"], [3, "ngStyle", "innerHtml"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "ngClass", "iconClicked"], [1, "body-xs", 3, "title", "innerText"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pepperi-textarea-card-container", "card-flex-container", 3, "ngClass", "ngStyle", "click"], ["class", "body-xs title no-shrink", 3, "title", 4, "ngIf"], [1, "body-sm", "value", "wrap", 3, "id", "innerHtml"], ["class", "pepperi-button weak card-edit-button self-start", "mat-button", "", 3, "ngClass", 4, "ngIf"], [1, "body-xs", "title", "no-shrink", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button", "self-start", 3, "ngClass"], ["name", "system_edit"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["selectedBlock", ""], ["notSelectedBlock", ""], ["notEmptyBlock", ""], ["emptyBlock", ""], [1, "pepperi-textarea-card-container", "card-flex-container", "one-row"], [1, "wrap", 3, "id", "innerHtml"], [1, "rich-text-editor-container"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], [4, "ngTemplateOutlet"], ["mat-dialog-actions", "", 1, "pepperi-border-top"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "strong", "pull-right", "flip", 3, "mat-dialog-close", "disabled"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["id", "quill-editor", "theme", "", 3, "placeholder", "ngModel", "sanitize", "readOnly", "maxLength", "required", "ngModelChange"], ["quill-editor-toolbar", "", "class", "spacing-element-negative pepperi-border-bottom", 4, "ngIf"], ["quill-editor-toolbar", "", 1, "spacing-element-negative", "pepperi-border-bottom"], [1, "ql-formats"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-bold"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-italic"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-underline"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-link"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-image"], ["mat-button", "", "value", "ordered", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-list"], ["mat-button", "", "value", "bullet", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-list"], [1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-color"], [1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-align"], ["selected", ""], ["value", "center"], ["value", "right"], ["value", "justify"]], template: function PepperiRichHtmlTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_template_1_Template, 13, 53, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PepperiRichHtmlTextareaComponent_ng_container_3_Template, 2, 3, "ng-container", 2);
        ɵɵtemplate(4, PepperiRichHtmlTextareaComponent_ng_container_4_Template, 6, 17, "ng-container", 2);
        ɵɵtemplate(5, PepperiRichHtmlTextareaComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(6, PepperiRichHtmlTextareaComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
        ɵɵelementContainerEnd();
        ɵɵtemplate(7, PepperiRichHtmlTextareaComponent_ng_template_7_Template, 13, 11, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵtemplate(9, PepperiRichHtmlTextareaComponent_ng_template_9_Template, 3, 9, "ng-template", null, 4, ɵɵtemplateRefExtractor);
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
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, NgClass, MatFormField, Dir, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, NgStyle, PepperiTextboxIconComponent, MatSuffix, MatError, PepperiFieldTitleComponent, NgTemplateOutlet, MatButton, MatIcon, PepperiIconComponent, MatDialogClose, MatDialogActions, QuillEditorComponent, NgModel, RequiredValidator, NgSelectOption, ɵangular_packages_forms_forms_x], pipes: [SafeHtmlPipe, TranslatePipe], styles: ["[_nghost-%COMP%]{display:block;height:inherit}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiRichHtmlTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'pep-rich-html-textarea',
                templateUrl: './rich-html-textarea.component.html',
                styleUrls: ['./rich-html-textarea.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DomSanitizer }, { type: DialogService }, { type: CustomizationService }, { type: Renderer2 }, { type: ElementRef }]; }, { key: [{
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

class PepperiRichHtmlTextareaModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemClose
        ]);
    }
}
PepperiRichHtmlTextareaModule.ɵmod = ɵɵdefineNgModule({ type: PepperiRichHtmlTextareaModule });
PepperiRichHtmlTextareaModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiRichHtmlTextareaModule_Factory(t) { return new (t || PepperiRichHtmlTextareaModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            BrowserModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatMenuModule,
            MatIconModule,
            MatDialogModule,
            // External modules
            QuillModule.forRoot(),
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiTextboxIconModule,
            PepperiDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiRichHtmlTextareaModule, { declarations: [PepperiRichHtmlTextareaComponent], imports: [CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule, QuillModule, 
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiTextboxIconModule,
        PepperiDialogModule], exports: [PepperiRichHtmlTextareaComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiRichHtmlTextareaModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    BrowserModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatMenuModule,
                    MatIconModule,
                    MatDialogModule,
                    // External modules
                    QuillModule.forRoot(),
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiTextboxIconModule,
                    PepperiDialogModule
                ],
                exports: [PepperiRichHtmlTextareaComponent],
                declarations: [PepperiRichHtmlTextareaComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/rich-html-textarea
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiRichHtmlTextareaComponent, PepperiRichHtmlTextareaModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-rich-html-textarea.js.map
