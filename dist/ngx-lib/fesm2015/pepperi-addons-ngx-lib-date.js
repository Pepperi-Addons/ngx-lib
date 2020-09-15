import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵreference, ɵɵelementEnd, ɵɵproperty, ɵɵelement, ɵɵpipe, ɵɵtemplate, ɵɵadvance, ɵɵpropertyInterpolate, ɵɵpureFunction2, ɵɵpureFunction0, ɵɵpipeBind2, ɵɵpureFunction1, ɵɵelementContainer, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵtext, ɵɵtextInterpolate1, ɵɵclassMap, ɵɵtextInterpolate, ɵɵtemplateRefExtractor, EventEmitter, ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgStyle, NgTemplateOutlet, NgClass, NgSwitch, NgSwitchDefault, CommonModule } from '@angular/common';
import { NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, NgModel, RequiredValidator, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatError, MatPrefix, MatSuffix, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { DatetimeAdapter, MAT_DATETIME_FORMATS, MatDatetimepickerInput, MatDatetimepicker, MatDatetimepickerModule, MatNativeDatetimeModule } from '@mat-datetimepicker/core';
import { LAYOUT_TYPE, CustomizationService, UtilitiesService, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemEdit, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiTextboxIconComponent, PepperiTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MomentDatetimeAdapter } from '@mat-datetimepicker/moment';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

const _c0 = ["datetimePicker"];
const _c1 = ["input"];
function PepperiDateComponent_ng_template_1_pep_textbox_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-textbox-icon", 11);
    ɵɵlistener("iconClicked", function PepperiDateComponent_ng_template_1_pep_textbox_icon_9_Template_pep_textbox_icon_iconClicked_0_listener() { ɵɵrestoreView(_r12); ɵɵnextContext(); const _r10 = ɵɵreference(12); const ctx_r11 = ɵɵnextContext(); return ctx_r11.openDatetimePicker(_r10); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r8.value)("label", ctx_r8.label)("type", ctx_r8.type)("disabled", ctx_r8.disabled);
} }
function PepperiDateComponent_ng_template_1_pep_textbox_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-textbox-icon", 12);
    ɵɵlistener("iconClicked", function PepperiDateComponent_ng_template_1_pep_textbox_icon_10_Template_pep_textbox_icon_iconClicked_0_listener() { ɵɵrestoreView(_r14); ɵɵnextContext(); const _r10 = ɵɵreference(12); const ctx_r13 = ɵɵnextContext(); return ctx_r13.openDatetimePicker(_r10); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r9.value)("label", ctx_r9.label)("type", ctx_r9.type)("disabled", ctx_r9.disabled);
} }
const _c2 = function (a0, a1) { return { color: a0, "text-align": a1 }; };
const _c3 = function () { return { standalone: true }; };
const _c4 = function (a0) { return { field: a0 }; };
function PepperiDateComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 3);
    ɵɵelementStart(1, "input", 4, 5);
    ɵɵlistener("ngModelChange", function PepperiDateComponent_ng_template_1_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(); return ctx_r15.dateModel = $event; })("dateChange", function PepperiDateComponent_ng_template_1_Template_input_dateChange_1_listener($event) { ɵɵrestoreView(_r16); const ctx_r17 = ɵɵnextContext(); return ctx_r17.onDateChange($event); })("click", function PepperiDateComponent_ng_template_1_Template_input_click_1_listener() { ɵɵrestoreView(_r16); const _r10 = ɵɵreference(12); const ctx_r18 = ɵɵnextContext(); return ctx_r18.openDatetimePicker(_r10); })("blur", function PepperiDateComponent_ng_template_1_Template_input_blur_1_listener($event) { ɵɵrestoreView(_r16); const ctx_r19 = ɵɵnextContext(); return ctx_r19.onBlur($event); });
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-error");
    ɵɵelement(4, "span", 6);
    ɵɵpipe(5, "translate");
    ɵɵpipe(6, "translate");
    ɵɵpipe(7, "translate");
    ɵɵpipe(8, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(9, PepperiDateComponent_ng_template_1_pep_textbox_icon_9_Template, 1, 4, "pep-textbox-icon", 7);
    ɵɵtemplate(10, PepperiDateComponent_ng_template_1_pep_textbox_icon_10_Template, 1, 4, "pep-textbox-icon", 8);
    ɵɵelement(11, "mat-datetimepicker", 9, 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const showIcon_r6 = ctx.showIcon;
    const _r10 = ɵɵreference(12);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r1.formattedValue);
    ɵɵproperty("id", ctx_r1.key)("ngStyle", ɵɵpureFunction2(27, _c2, ctx_r1.textColor, ctx_r1.xAlignment == "3" ? "center" : ctx_r1.xAlignment == "2" ? "right" : "left"))("ngModel", ctx_r1.dateModel)("ngModelOptions", ɵɵpureFunction0(30, _c3))("matDatetimepicker", _r10)("min", ctx_r1.minDate)("max", ctx_r1.maxDate)("required", ctx_r1.required)("disabled", ctx_r1.disabled);
    ɵɵadvance(3);
    ɵɵproperty("title", ctx_r1.required && ctx_r1.formattedValue.length == 0 ? ɵɵpipeBind2(5, 15, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(31, _c4, ctx_r1.label)) : ɵɵpipeBind2(6, 18, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(33, _c4, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.formattedValue.length == 0 ? ɵɵpipeBind2(7, 21, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(35, _c4, ctx_r1.label)) : ɵɵpipeBind2(8, 24, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(37, _c4, ctx_r1.label)));
    ɵɵadvance(5);
    ɵɵproperty("ngIf", showIcon_r6 && ctx_r1.xAlignment == "2");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", showIcon_r6 && ctx_r1.xAlignment == "1" || ctx_r1.xAlignment == "0");
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r1.showTime ? "datetime" : "date");
} }
function PepperiDateComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c5 = function () { return { showIcon: true }; };
function PepperiDateComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "pep-field-title", 13);
    ɵɵtemplate(2, PepperiDateComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r2.label)("required", ctx_r2.required)("disabled", ctx_r2.disabled)("xAlignment", ctx_r2.xAlignment)("showTitle", ctx_r2.showTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(7, _c5));
} }
function PepperiDateComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiDateComponent_ng_container_4_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c6 = function (a0) { return { "one-row": a0 }; };
const _c7 = function () { return { showIcon: false }; };
function PepperiDateComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, PepperiDateComponent_ng_container_4_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 14);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵɵnextContext(2);
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c6, ctx_r23.rowSpan === 1));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(5, _c7));
} }
function PepperiDateComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r27.label);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r27.label, "\u00A0");
} }
function PepperiDateComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 24);
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 25);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const _c8 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
function PepperiDateComponent_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19);
    ɵɵlistener("click", function PepperiDateComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { ɵɵrestoreView(_r30); const ctx_r29 = ɵɵnextContext(2); return !ctx_r29.disabled ? ctx_r29.cardTemplateClicked($event) : ""; });
    ɵɵtemplate(1, PepperiDateComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 20);
    ɵɵelementStart(2, "span", 21);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, PepperiDateComponent_ng_container_4_ng_template_4_button_4_Template, 3, 0, "button", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(2);
    ɵɵclassMap("text-align-" + ctx_r25.xAlignment);
    ɵɵproperty("ngClass", ɵɵpureFunction2(8, _c8, ctx_r25.rowSpan === 1, ctx_r25.isActive && !ctx_r25.disabled));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r25.showTitle && ctx_r25.label != "");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r25.formattedValue);
    ɵɵproperty("id", ctx_r25.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r25.formattedValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r25.isActive && !ctx_r25.disabled);
} }
function PepperiDateComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiDateComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵtemplate(2, PepperiDateComponent_ng_container_4_ng_template_2_Template, 2, 6, "ng-template", null, 16, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiDateComponent_ng_container_4_ng_template_4_Template, 5, 11, "ng-template", null, 17, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r22 = ɵɵreference(3);
    const _r24 = ɵɵreference(5);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r22)("ngIfElse", _r24);
} }
function PepperiDateComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiDateComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiDateComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiDateComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 14);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c5));
} }
function PepperiDateComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c9 = function (a0) { return { readonly: a0 }; };
function PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 32);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r42 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r42.formattedValue);
    ɵɵproperty("id", ctx_r42.key)("ngClass", ɵɵpureFunction1(4, _c9, ctx_r42.disabled));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r42.formattedValue);
} }
function PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 30);
    ɵɵtemplate(1, PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template, 3, 6, "ng-container", 31);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = ɵɵnextContext(3);
    ɵɵproperty("ngSwitch", ctx_r39.type);
} }
function PepperiDateComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 33);
    ɵɵtext(1, "\u00A0");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r41 = ɵɵnextContext(3);
    ɵɵproperty("id", ctx_r41.key);
} }
function PepperiDateComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiDateComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 15);
    ɵɵtemplate(1, PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_Template, 2, 1, "ng-template", null, 28, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, PepperiDateComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 1, "ng-template", null, 29, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r38 = ɵɵreference(2);
    const _r40 = ɵɵreference(4);
    const ctx_r35 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", (ctx_r35.formattedValue == null ? null : ctx_r35.formattedValue.length) > 0)("ngIfThen", _r38)("ngIfElse", _r40);
} }
function PepperiDateComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiDateComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵtemplate(2, PepperiDateComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 26, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiDateComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 27, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r32 = ɵɵreference(3);
    const _r34 = ɵɵreference(5);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r32)("ngIfElse", _r34);
} }
function PepperiDateComponent_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiDateComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "pep-field-title", 13);
    ɵɵtemplate(2, PepperiDateComponent_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r5.label)("required", ctx_r5.required)("disabled", ctx_r5.disabled)("xAlignment", ctx_r5.xAlignment)("showTitle", ctx_r5.showTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction0(7, _c5));
} }
class PepperiDateComponent {
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
PepperiDateComponent.ɵfac = function PepperiDateComponent_Factory(t) { return new (t || PepperiDateComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(UtilitiesService), ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(TranslateService), ɵɵdirectiveInject(DateAdapter)); };
PepperiDateComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiDateComponent, selectors: [["pep-date"]], viewQuery: function PepperiDateComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datetimePicker = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", minValue: "minValue", maxValue: "maxValue", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, features: [ɵɵProvidersFeature([
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
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PepperiDateComponent_ng_template_1_Template, 13, 39, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PepperiDateComponent_ng_container_3_Template, 3, 8, "ng-container", 2);
        ɵɵtemplate(4, PepperiDateComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(5, PepperiDateComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(6, PepperiDateComponent_ng_container_6_Template, 3, 8, "ng-container", 2);
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
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, MatFormField, MatInput, DefaultValueAccessor, MatDatetimepickerInput, NgStyle, NgControlStatus, NgModel, RequiredValidator, MatError, MatDatetimepicker, PepperiTextboxIconComponent, MatPrefix, MatSuffix, PepperiFieldTitleComponent, NgTemplateOutlet, NgClass, MatButton, MatIcon, PepperiIconComponent, NgSwitch, NgSwitchDefault], pipes: [TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiDateComponent, [{
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
    }], function () { return [{ type: ElementRef }, { type: UtilitiesService }, { type: CustomizationService }, { type: Renderer2 }, { type: TranslateService }, { type: DateAdapter }]; }, { key: [{
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

class PepperiDateModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit
        ]);
    }
}
PepperiDateModule.ɵmod = ɵɵdefineNgModule({ type: PepperiDateModule });
PepperiDateModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiDateModule_Factory(t) { return new (t || PepperiDateModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatDatetimepickerModule,
            MatNativeDatetimeModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiTextboxIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiDateModule, { declarations: [PepperiDateComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatDatetimepickerModule,
        MatNativeDatetimeModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiTextboxIconModule], exports: [PepperiDateComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiDateModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatButtonModule,
                    MatNativeDateModule,
                    MatDatepickerModule,
                    MatDatetimepickerModule,
                    MatNativeDatetimeModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiTextboxIconModule,
                ],
                exports: [PepperiDateComponent],
                declarations: [PepperiDateComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/date
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiDateComponent, PepperiDateModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-date.js.map
