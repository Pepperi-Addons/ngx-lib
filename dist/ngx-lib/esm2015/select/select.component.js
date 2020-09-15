import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/cdk/bidi";
import * as i6 from "@angular/material/select";
import * as i7 from "@angular/material/core";
import * as i8 from "@pepperi-addons/ngx-lib/field-title";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/icon";
import * as i11 from "@pepperi-addons/ngx-lib/icon";
import * as i12 from "@ngx-translate/core";
const _c0 = ["select"];
function PepperiSelectComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "LIST.NONE"));
} }
function PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r14.Key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r14.Value);
} }
const _c1 = function (a0) { return { "right-alignment": a0 }; };
const _c2 = function () { return { standalone: true }; };
const _c3 = function (a0) { return { field: a0 }; };
function PepperiSelectComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 6);
    i0.ɵɵelementStart(1, "mat-select", 7, 8);
    i0.ɵɵlistener("ngModelChange", function PepperiSelectComponent_ng_template_1_ng_template_1_Template_mat_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.selectedValueModel = $event; })("selectionChange", function PepperiSelectComponent_ng_template_1_ng_template_1_Template_mat_select_selectionChange_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.selectionChange($event); })("openedChange", function PepperiSelectComponent_ng_template_1_ng_template_1_Template_mat_select_openedChange_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.openedChange($event); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_4_Template, 3, 3, "mat-option", 9);
    i0.ɵɵtemplate(5, PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_5_Template, 2, 2, "mat-option", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-error");
    i0.ɵɵelement(7, "span", 11);
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("dir", ctx_r8.xAlignment === "2" ? "rtl" : "ltr");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("body-sm text-align-", ctx_r8.xAlignment, "");
    i0.ɵɵpropertyInterpolate("title", ctx_r8.formattedValue);
    i0.ɵɵproperty("required", ctx_r8.required ? ctx_r8.required : undefined)("id", ctx_r8.key)("ngClass", i0.ɵɵpureFunction1(24, _c1, ctx_r8.xAlignment == "2"))("placeholder", ctx_r8.disabled || ctx_r8.readonly ? "" : i0.ɵɵpipeBind1(3, 16, "SELECT.HINT"))("ngModel", ctx_r8.selectedValueModel)("ngModelOptions", i0.ɵɵpureFunction0(26, _c2))("disabled", ctx_r8.disabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r8.emptyOption);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.options);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", i0.ɵɵpipeBind2(8, 18, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(27, _c3, ctx_r8.label)))("innerText", i0.ɵɵpipeBind2(9, 21, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(29, _c3, ctx_r8.label)));
} }
function PepperiSelectComponent_ng_template_1_ng_template_3_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r21 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r21.Key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r21.Value);
} }
function PepperiSelectComponent_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 6);
    i0.ɵɵelementStart(1, "mat-select", 14, 8);
    i0.ɵɵlistener("ngModelChange", function PepperiSelectComponent_ng_template_1_ng_template_3_Template_mat_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.selectedValuesModel = $event; })("openedChange", function PepperiSelectComponent_ng_template_1_ng_template_3_Template_mat_select_openedChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.openedChange($event); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, PepperiSelectComponent_ng_template_1_ng_template_3_mat_option_4_Template, 2, 2, "mat-option", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-error");
    i0.ɵɵelement(6, "span", 11);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("dir", ctx_r10.xAlignment === "2" ? "rtl" : "ltr");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("body-sm text-align-", ctx_r10.xAlignment, "");
    i0.ɵɵpropertyInterpolate("title", ctx_r10.formattedValue);
    i0.ɵɵproperty("required", ctx_r10.required ? ctx_r10.required : undefined)("id", ctx_r10.key)("ngClass", i0.ɵɵpureFunction1(23, _c1, ctx_r10.xAlignment == "2"))("placeholder", ctx_r10.disabled || ctx_r10.readonly ? "" : i0.ɵɵpipeBind1(3, 15, "SELECT.HINT"))("ngModel", ctx_r10.selectedValuesModel)("ngModelOptions", i0.ɵɵpureFunction0(25, _c2))("disabled", ctx_r10.disabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r10.options);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", i0.ɵɵpipeBind2(7, 17, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(26, _c3, ctx_r10.label)))("innerText", i0.ɵɵpipeBind2(8, 20, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(28, _c3, ctx_r10.label)));
} }
function PepperiSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiSelectComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 3);
    i0.ɵɵtemplate(1, PepperiSelectComponent_ng_template_1_ng_template_1_Template, 10, 31, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, PepperiSelectComponent_ng_template_1_ng_template_3_Template, 9, 30, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(2);
    const _r9 = i0.ɵɵreference(4);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "multi")("ngIfThen", _r9)("ngIfElse", _r7);
} }
function PepperiSelectComponent_ng_container_3_pep_field_title_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-field-title", 17);
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("label", ctx_r25.label)("required", ctx_r25.required)("disabled", ctx_r25.disabled)("xAlignment", ctx_r25.xAlignment)("showTitle", ctx_r25.showTitle);
} }
function PepperiSelectComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiSelectComponent_ng_container_3_pep_field_title_1_Template, 1, 5, "pep-field-title", 15);
    i0.ɵɵtemplate(2, PepperiSelectComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.parentFieldKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiSelectComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_container_4_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c4 = function (a0) { return { "one-row": a0 }; };
function PepperiSelectComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, PepperiSelectComponent_ng_container_4_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c4, ctx_r29.rowSpan === 1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiSelectComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r33.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r33.label, "\u00A0");
} }
function PepperiSelectComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c5 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
function PepperiSelectComponent_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵlistener("click", function PepperiSelectComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(2); return !ctx_r35.disabled ? ctx_r35.cardTemplateClicked($event) : ""; });
    i0.ɵɵtemplate(1, PepperiSelectComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 22);
    i0.ɵɵelementStart(2, "span", 23);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PepperiSelectComponent_ng_container_4_ng_template_4_button_4_Template, 3, 0, "button", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap("text-align-" + ctx_r31.xAlignment);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c5, ctx_r31.rowSpan === 1, ctx_r31.isActive && !ctx_r31.disabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r31.showTitle && ctx_r31.label != "");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r31.formattedValue);
    i0.ɵɵproperty("id", ctx_r31.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r31.formattedValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r31.isActive && !ctx_r31.disabled);
} }
function PepperiSelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiSelectComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 3);
    i0.ɵɵtemplate(2, PepperiSelectComponent_ng_container_4_ng_template_2_Template, 2, 4, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiSelectComponent_ng_container_4_ng_template_4_Template, 5, 11, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r28 = i0.ɵɵreference(3);
    const _r30 = i0.ɵɵreference(5);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r28)("ngIfElse", _r30);
} }
function PepperiSelectComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiSelectComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 16);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
const _c6 = function (a0) { return { readonly: a0 }; };
function PepperiSelectComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r41.fieldFormattedValue);
    i0.ɵɵproperty("id", ctx_r41.key)("ngClass", i0.ɵɵpureFunction1(4, _c6, ctx_r41.disabled));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r41.fieldFormattedValue);
} }
function PepperiSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiSelectComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 3);
    i0.ɵɵtemplate(2, PepperiSelectComponent_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiSelectComponent_ng_container_5_ng_template_4_Template, 2, 6, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r38 = i0.ɵɵreference(3);
    const _r40 = i0.ɵɵreference(5);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r38)("ngIfElse", _r40);
} }
function PepperiSelectComponent_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "pep-field-title", 17);
    i0.ɵɵtemplate(2, PepperiSelectComponent_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r5.label)("required", ctx_r5.required)("disabled", ctx_r5.disabled)("xAlignment", ctx_r5.xAlignment)("showTitle", ctx_r5.showTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
export class PepperiSelectComponent {
    constructor(customizationService, renderer, element) {
        this.customizationService = customizationService;
        this.renderer = renderer;
        this.element = element;
        this.key = '';
        this.value = '';
        this.formattedValue = '';
        this.label = '';
        this.type = 'select';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.options = [];
        this.controlType = 'select';
        // @Input() field: PepperiFieldBase;
        this.form = null;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.parentFieldKey = null;
        this.isActive = false;
        this.showTitle = true;
        this.emptyOption = true;
        this.valueChanged = new EventEmitter();
        this.formValidationChanged = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.standAlone = false;
        this.isInEditMode = false;
        // isFocus: boolean = false;
        this.isMulti = false;
        this.fieldFormattedValue = '';
    }
    addOptionsIfNeeded() {
        if (this.isMulti) {
            // Go gor all selected and add to options if not exist
            // for (let i = 0; i < this.selectedValuesModel.length; i++) {
            for (const selectedValue of this.selectedValuesModel) {
                let valueNotExist = false;
                if (this.options && !this.options.find((opt) => opt.Key === selectedValue)) {
                    valueNotExist = true;
                }
                // Add it to options.
                if (valueNotExist) {
                    this.options.push({ Key: selectedValue, Value: selectedValue });
                }
            }
        }
        else {
            if (this.value && this.value !== '' && this.options && !this.options.find((opt) => opt.Key === this.value)) {
                this.options.push({ Key: this.value, Value: this.formattedValue });
            }
        }
    }
    ngOnInit() {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
    }
    ngOnChanges(changes) {
        this.isMulti = this.type === 'multi';
        if (this.isMulti) {
            this.selectedValuesModel = this.value.length > 0 ? this.value.split(';') : [];
        }
        else {
            this.selectedValueModel = this.value;
        }
        this.fieldFormattedValue = typeof this.value === 'string' ? this.value.replace(new RegExp(';', 'g'), ', ') : '';
        this.addOptionsIfNeeded();
    }
    ngOnDestroy() {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
        if (this.formValidationChanged) {
            this.formValidationChanged.unsubscribe();
        }
    }
    selectionChange(event) {
        // this.isFocus = false;
        if (!this.isMulti) {
            this.changeValue(this.selectedValueModel);
        }
    }
    openedChange(event) {
        // Only on close.
        if (!event) {
            if (this.isMulti) {
                // this.isFocus = false;
                this.changeValue(this.selectedValuesModel.join(';'));
            }
            if (this.isInEditMode) {
                this.isInEditMode = false;
            }
        }
    }
    changeValue(value) {
        this.formattedValue = value;
        this.customizationService.updateFormFieldValue(this.form, this.key, value, this.parentFieldKey);
        if (this.required) {
            const fieldControl = this.form.controls[this.key];
            if (value) {
                fieldControl.setErrors(null);
            }
            else {
                fieldControl.setErrors({
                    serverError: 'Required',
                });
            }
            this.formValidationChanged.emit(this.form.valid);
        }
        this.valueChanged.emit({ apiName: this.key, value });
    }
    cardTemplateClicked(event) {
        const self = this;
        this.isInEditMode = true;
        setTimeout(() => {
            self.select.open();
        }, 0);
    }
}
PepperiSelectComponent.ɵfac = function PepperiSelectComponent_Factory(t) { return new (t || PepperiSelectComponent)(i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PepperiSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiSelectComponent, selectors: [["pep-select"]], viewQuery: function PepperiSelectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.select = _t.first);
    } }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", options: "options", form: "form", layoutType: "layoutType", parentFieldKey: "parentFieldKey", isActive: "isActive", showTitle: "showTitle", emptyOption: "emptyOption" }, outputs: { valueChanged: "valueChanged", formValidationChanged: "formValidationChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["regularSelectBlock", ""], ["multiSelectBlock", ""], ["appearance", "outline", 3, "dir"], ["matInput", "", "disableOptionCentering", "", 3, "required", "id", "ngClass", "placeholder", "ngModel", "ngModelOptions", "disabled", "title", "ngModelChange", "selectionChange", "openedChange"], ["select", ""], ["value", "", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "body-xs", 3, "title", "innerText"], ["value", ""], [3, "value"], ["matInput", "", "disableOptionCentering", "", "multiple", "", 3, "required", "id", "ngClass", "placeholder", "ngModel", "ngModelOptions", "disabled", "title", "ngModelChange", "openedChange"], [3, "label", "required", "disabled", "xAlignment", "showTitle", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], ["editBlock", ""], ["readOnlyBlock", ""], [3, "ngClass"], [1, "pepperi-card-input", "card-flex-container", 3, "ngClass", "click"], ["class", "body-xs title", 3, "title", 4, "ngIf"], [1, "body-sm", "value", 3, "id", "title"], ["class", "pepperi-button weak card-edit-button", "mat-button", "", 4, "ngIf"], [1, "body-xs", "title", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button"], ["name", "system_edit"], ["selectedBlock", ""], ["notSelectedBlock", ""], [1, "body-sm", "pepperi-report-input", 3, "id", "ngClass", "title"]], template: function PepperiSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PepperiSelectComponent_ng_template_1_Template, 5, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PepperiSelectComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
        i0.ɵɵtemplate(4, PepperiSelectComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(5, PepperiSelectComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(6, PepperiSelectComponent_ng_container_6_Template, 3, 6, "ng-container", 2);
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
    } }, directives: [i2.NgControlStatusGroup, i2.FormGroupDirective, i3.NgIf, i4.MatFormField, i5.Dir, i6.MatSelect, i2.RequiredValidator, i3.NgClass, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i4.MatError, i7.MatOption, i3.NgTemplateOutlet, i8.PepperiFieldTitleComponent, i9.MatButton, i10.MatIcon, i11.PepperiIconComponent], pipes: [i12.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.material-additional-selection[_ngcontent-%COMP%]{font-size:.75em;opacity:.75}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiSelectComponent, [{
        type: Component,
        args: [{
                selector: 'pep-select',
                templateUrl: './select.component.html',
                styleUrls: ['./select.component.scss'],
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
        }], options: [{
            type: Input
        }], form: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], parentFieldKey: [{
            type: Input
        }], isActive: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], emptyOption: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }], formValidationChanged: [{
            type: Output
        }], select: [{
            type: ViewChild,
            args: ['select']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUNwRSx1QkFBdUIsRUFDMUIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDSHBFLHdCQUFxRzs7O0lBVXpGLHNDQUF5QztJQUFBLFlBQTZCOztJQUFBLGlCQUFhOztJQUExQyxlQUE2QjtJQUE3Qix1REFBNkI7OztJQUN0RSxzQ0FBZ0U7SUFBQSxZQUFrQjtJQUFBLGlCQUFhOzs7SUFBcEQsc0NBQW9CO0lBQUMsZUFBa0I7SUFBbEIsc0NBQWtCOzs7Ozs7O0lBVDFGLHlDQUNJO0lBQUEsd0NBT0k7SUFIQSw2UEFBZ0MsZ1BBQUEsdU9BQUE7O0lBR2hDLGlIQUF5QztJQUN6QyxrSEFBZ0U7SUFDcEUsaUJBQWE7SUFDYixpQ0FDSTtJQUFBLDJCQUNrRjs7O0lBQ3RGLGlCQUFZO0lBQ2hCLGlCQUFpQjs7O0lBZm9CLDBFQUE4QztJQUUzRSxlQUEyQztJQUEzQyx1RUFBMkM7SUFLM0Msd0RBQTRCO0lBTlosd0VBQTRDLGtCQUFBLGtFQUFBLCtGQUFBLHNDQUFBLCtDQUFBLDZCQUFBO0lBT2hELGVBQW1CO0lBQW5CLHlDQUFtQjtJQUNuQixlQUE4QjtJQUE5Qix3Q0FBOEI7SUFHcEIsZUFBa0U7SUFBbEUsc0hBQWtFLDZHQUFBOzs7SUFheEYsc0NBQWdFO0lBQUEsWUFBa0I7SUFBQSxpQkFBYTs7O0lBQXBELHNDQUFvQjtJQUFDLGVBQWtCO0lBQWxCLHNDQUFrQjs7OztJQVAxRix5Q0FDSTtJQUFBLHlDQU1JO0lBRkEsOFBBQWlDLHVPQUFBOztJQUVqQyxrSEFBZ0U7SUFDcEUsaUJBQWE7SUFDYixpQ0FBVztJQUFBLDJCQUM0RTs7O0lBQ3ZGLGlCQUFZO0lBQ2hCLGlCQUFpQjs7O0lBWm9CLDJFQUE4QztJQUUzRSxlQUEyQztJQUEzQyx3RUFBMkM7SUFJSSx5REFBNEI7SUFMM0QsMEVBQTRDLG1CQUFBLG1FQUFBLGlHQUFBLHdDQUFBLCtDQUFBLDhCQUFBO0lBTWhELGVBQThCO0lBQTlCLHlDQUE4QjtJQUViLGVBQWtFO0lBQWxFLHVIQUFrRSw4R0FBQTs7O0lBN0IzRyx1R0FBc0Y7SUFDdEYsd0lBQ0k7SUFpQkosdUlBQ0k7Ozs7O0lBcEJVLDZDQUF1RSxpQkFBQSxpQkFBQTs7O0lBcUNyRixzQ0FFa0I7OztJQUZ1QixxQ0FBZSw4QkFBQSw4QkFBQSxrQ0FBQSxnQ0FBQTs7O0lBR3hELHdCQUFpRTs7O0lBSnJFLDZCQUNJO0lBQUEsK0dBRUE7SUFDQSx5R0FBa0Q7SUFDdEQsMEJBQWU7Ozs7SUFKTSxlQUF1QjtJQUF2Qiw2Q0FBdUI7SUFHMUIsZUFBbUM7SUFBbkMsc0NBQW1DOzs7SUFJakQsd0JBQXNGOzs7SUFHOUUsd0JBQWlFOzs7O0lBRHJFLCtCQUNJO0lBQUEsdUhBQWtEO0lBQ3RELGlCQUFNOzs7O0lBRkQsMkVBQXNDO0lBQ3pCLGVBQW1DO0lBQW5DLHNDQUFtQzs7O0lBT2pELGdDQUN3QjtJQUFBLFlBQWlCO0lBQUEsaUJBQU87OztJQUE1QyxnREFBbUI7SUFBQyxlQUFpQjtJQUFqQixrREFBaUI7OztJQUV6QyxrQ0FDSTtJQUFBLGdDQUNJO0lBQUEsK0JBQ1c7SUFDZixpQkFBVztJQUNmLGlCQUFTOzs7OztJQVhiLCtCQUdJO0lBRHFDLDBQQUFtRCxFQUFFLElBQUM7SUFDM0YsdUdBQ3dCO0lBQ3hCLGdDQUFvRTtJQUFBLFlBQW9CO0lBQUEsaUJBQU87SUFDL0YsMkdBQ0k7SUFLUixpQkFBTTs7O0lBVkYsaURBQW9DO0lBRHBDLGtIQUFvRjtJQUU5RSxlQUFnQztJQUFoQywrREFBZ0M7SUFFckIsZUFBNEI7SUFBNUIseURBQTRCO0lBQXZDLGdDQUFVO0lBQW9ELGVBQW9CO0lBQXBCLDRDQUFvQjtJQUNoRixlQUE2QjtJQUE3Qiw0REFBNkI7OztJQWRqRCw2QkFDSTtJQUFBLHdHQUF1RTtJQUN2RSx3SUFDSTtJQUlKLHlJQUNJO0lBY1IsMEJBQWU7Ozs7O0lBckJHLGVBQXdEO0lBQXhELDBDQUF3RCxrQkFBQSxrQkFBQTs7O0lBd0J0RSx3QkFBc0c7OztJQUVsRyx3QkFBaUU7OztJQUFqRSx1SEFBa0Q7Ozs7SUFBcEMsc0NBQW1DOzs7O0lBR2pELGdDQUNzQztJQUFBLFlBQXlCO0lBQUEsaUJBQU87OztJQUFsRSw4REFBaUM7SUFEL0IsZ0NBQVUseURBQUE7SUFDc0IsZUFBeUI7SUFBekIsaURBQXlCOzs7SUFQdkUsNkJBQ0k7SUFBQSx3R0FBdUY7SUFDdkYsd0lBQ0k7SUFFSix3SUFDSTtJQUdSLDBCQUFlOzs7OztJQVJHLGVBQXdFO0lBQXhFLDBEQUF3RSxrQkFBQSxrQkFBQTs7O0lBY3RGLHdCQUFpRTs7O0lBSnJFLDZCQUNJO0lBQUEsc0NBRWtCO0lBQ2xCLHlHQUFrRDtJQUN0RCwwQkFBZTs7OztJQUpNLGVBQWU7SUFBZixvQ0FBZSw2QkFBQSw2QkFBQSxpQ0FBQSwrQkFBQTtJQUdsQixlQUFtQztJQUFuQyxzQ0FBbUM7O0FEdkV6RCxNQUFNLE9BQU8sc0JBQXNCO0lBcUMvQixZQUNZLG9CQUEwQyxFQUMxQyxRQUFtQixFQUNuQixPQUFtQjtRQUZuQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQXZDdEIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUNoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBRTNCLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBRXZCLG9DQUFvQztRQUMzQixTQUFJLEdBQWMsSUFBSSxDQUFDO1FBQ3ZCLGVBQVUsR0FBZ0IsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUNsRCxtQkFBYyxHQUFXLElBQUksQ0FBQztRQUM5QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFbEIsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxRCwwQkFBcUIsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUlyRixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLDRCQUE0QjtRQUM1QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR2hCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztJQUtVLENBQUM7SUFFNUIsa0JBQWtCO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLHNEQUFzRDtZQUN0RCw4REFBOEQ7WUFDOUQsS0FBSyxNQUFNLGFBQWEsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ2xELElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFFMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssYUFBYSxDQUFDLEVBQUU7b0JBQ3hFLGFBQWEsR0FBRyxJQUFJLENBQUM7aUJBQ3hCO2dCQUVELHFCQUFxQjtnQkFDckIsSUFBSSxhQUFhLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO2lCQUNuRTthQUNKO1NBQ0o7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4RyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQzthQUN0RTtTQUNKO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTdILElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDekc7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQVk7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQ2pGO2FBQU07WUFDSCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN4QztRQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVoSCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFVO1FBQ3RCLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDN0M7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDbkIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2Qsd0JBQXdCO2dCQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN4RDtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDN0I7U0FDSjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBVTtRQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELElBQUksS0FBSyxFQUFFO2dCQUNQLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0gsWUFBWSxDQUFDLFNBQVMsQ0FBQztvQkFDbkIsV0FBVyxFQUFFLFVBQVU7aUJBQzFCLENBQUMsQ0FBQzthQUNOO1lBQ0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFVO1FBQzFCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDOzs0RkEvSVEsc0JBQXNCOzJEQUF0QixzQkFBc0I7Ozs7OztRQ2RuQyxnQ0FDSTtRQUNBLHdIQUNJO1FBb0NKLHlGQUNJO1FBTUoseUZBQ0k7UUF1QkoseUZBQ0k7UUFVSix5RkFDSTtRQUtSLDBCQUFlOztRQXZGRCxvQ0FBa0I7UUF1Q2QsZUFBOEM7UUFBOUMscUVBQThDO1FBTzlDLGVBQThDO1FBQTlDLHFFQUE4QztRQXdCOUMsZUFBK0M7UUFBL0Msc0VBQStDO1FBVy9DLGVBQTRDO1FBQTVDLG1FQUE0Qzs7a0REbkVqRCxzQkFBc0I7Y0FObEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7d0hBRVksR0FBRztrQkFBWCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFLRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUVJLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxxQkFBcUI7a0JBQTlCLE1BQU07WUFFYyxNQUFNO2tCQUExQixTQUFTO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25EZXN0cm95LCBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3QgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBMQVlPVVRfVFlQRSwgQ3VzdG9taXphdGlvblNlcnZpY2UgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGVwLXNlbGVjdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3NlbGVjdC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoKSBrZXkgPSAnJztcclxuICAgIEBJbnB1dCgpIHZhbHVlID0gJyc7XHJcbiAgICBASW5wdXQoKSBmb3JtYXR0ZWRWYWx1ZSA9ICcnO1xyXG4gICAgQElucHV0KCkgbGFiZWwgPSAnJztcclxuICAgIEBJbnB1dCgpIHR5cGUgPSAnc2VsZWN0JztcclxuICAgIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHhBbGlnbm1lbnQgPSAnMCc7XHJcbiAgICBASW5wdXQoKSByb3dTcGFuID0gMTtcclxuICAgIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IFtdO1xyXG5cclxuICAgIGNvbnRyb2xUeXBlID0gJ3NlbGVjdCc7XHJcblxyXG4gICAgLy8gQElucHV0KCkgZmllbGQ6IFBlcHBlcmlGaWVsZEJhc2U7XHJcbiAgICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXAgPSBudWxsO1xyXG4gICAgQElucHV0KCkgbGF5b3V0VHlwZTogTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybTtcclxuICAgIEBJbnB1dCgpIHBhcmVudEZpZWxkS2V5OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgQElucHV0KCkgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBlbXB0eU9wdGlvbiA9IHRydWU7XHJcblxyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBmb3JtVmFsaWRhdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdzZWxlY3QnKSBzZWxlY3Q6IE1hdFNlbGVjdDtcclxuXHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG4gICAgc3RhbmRBbG9uZSA9IGZhbHNlO1xyXG4gICAgaXNJbkVkaXRNb2RlID0gZmFsc2U7XHJcbiAgICAvLyBpc0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc011bHRpID0gZmFsc2U7XHJcbiAgICBzZWxlY3RlZFZhbHVlc01vZGVsOiBzdHJpbmdbXTtcclxuICAgIHNlbGVjdGVkVmFsdWVNb2RlbDogc3RyaW5nO1xyXG4gICAgZmllbGRGb3JtYXR0ZWRWYWx1ZSA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgY3VzdG9taXphdGlvblNlcnZpY2U6IEN1c3RvbWl6YXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkT3B0aW9uc0lmTmVlZGVkKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGkpIHtcclxuICAgICAgICAgICAgLy8gR28gZ29yIGFsbCBzZWxlY3RlZCBhbmQgYWRkIHRvIG9wdGlvbnMgaWYgbm90IGV4aXN0XHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZFZhbHVlc01vZGVsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2VsZWN0ZWRWYWx1ZSBvZiB0aGlzLnNlbGVjdGVkVmFsdWVzTW9kZWwpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZU5vdEV4aXN0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiAhdGhpcy5vcHRpb25zLmZpbmQoKG9wdCkgPT4gb3B0LktleSA9PT0gc2VsZWN0ZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZU5vdEV4aXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgaXQgdG8gb3B0aW9ucy5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZU5vdEV4aXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2goeyBLZXk6IHNlbGVjdGVkVmFsdWUsIFZhbHVlOiBzZWxlY3RlZFZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZSAhPT0gJycgJiYgdGhpcy5vcHRpb25zICYmICF0aGlzLm9wdGlvbnMuZmluZCgob3B0KSA9PiBvcHQuS2V5ID09PSB0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2goeyBLZXk6IHRoaXMudmFsdWUsIFZhbHVlOiB0aGlzLmZvcm1hdHRlZFZhbHVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFuZEFsb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS5nZXREZWZhdWx0RnJvbUdyb3VwKHRoaXMua2V5LCB0aGlzLnZhbHVlLCB0aGlzLnJlcXVpcmVkLCB0aGlzLnJlYWRvbmx5LCB0aGlzLmRpc2FibGVkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlNUQU5EX0FMT05FX0ZJRUxEX0NMQVNTX05BTUUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzTXVsdGkgPSB0aGlzLnR5cGUgPT09ICdtdWx0aSc7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNdWx0aSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzTW9kZWwgPSB0aGlzLnZhbHVlLmxlbmd0aCA+IDAgPyB0aGlzLnZhbHVlLnNwbGl0KCc7JykgOiBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVNb2RlbCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmllbGRGb3JtYXR0ZWRWYWx1ZSA9IHR5cGVvZiB0aGlzLnZhbHVlID09PSAnc3RyaW5nJyA/IHRoaXMudmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKCc7JywgJ2cnKSwgJywgJykgOiAnJztcclxuXHJcbiAgICAgICAgdGhpcy5hZGRPcHRpb25zSWZOZWVkZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvcm1WYWxpZGF0aW9uQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1WYWxpZGF0aW9uQ2hhbmdlZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3Rpb25DaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuaXNGb2N1cyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5pc011bHRpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5zZWxlY3RlZFZhbHVlTW9kZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuZWRDaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIE9ubHkgb24gY2xvc2UuXHJcbiAgICAgICAgaWYgKCFldmVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc011bHRpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5zZWxlY3RlZFZhbHVlc01vZGVsLmpvaW4oJzsnKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5FZGl0TW9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0luRWRpdE1vZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UudXBkYXRlRm9ybUZpZWxkVmFsdWUodGhpcy5mb3JtLCB0aGlzLmtleSwgdmFsdWUsIHRoaXMucGFyZW50RmllbGRLZXkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZENvbnRyb2wgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkQ29udHJvbC5zZXRFcnJvcnMobnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZENvbnRyb2wuc2V0RXJyb3JzKHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJFcnJvcjogJ1JlcXVpcmVkJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybVZhbGlkYXRpb25DaGFuZ2VkLmVtaXQodGhpcy5mb3JtLnZhbGlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQoeyBhcGlOYW1lOiB0aGlzLmtleSwgdmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FyZFRlbXBsYXRlQ2xpY2tlZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pc0luRWRpdE1vZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5zZWxlY3Qub3BlbigpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgICA8IS0tIE5ldyBjb2RlIC0tPlxyXG4gICAgPG5nLXRlbXBsYXRlICNwZXBwZXJpVGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT0gJ211bHRpJzsgdGhlbiBtdWx0aVNlbGVjdEJsb2NrOyBlbHNlIHJlZ3VsYXJTZWxlY3RCbG9ja1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjcmVndWxhclNlbGVjdEJsb2NrPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBkaXI9XCJ7eyB4QWxpZ25tZW50ID09PSAnMicgPyAncnRsJyA6ICdsdHInIH19XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCAjc2VsZWN0IFtyZXF1aXJlZF09XCJyZXF1aXJlZCA/IHJlcXVpcmVkIDogdW5kZWZpbmVkXCIgbWF0SW5wdXQgZGlzYWJsZU9wdGlvbkNlbnRlcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYm9keS1zbSB0ZXh0LWFsaWduLXt7IHhBbGlnbm1lbnQgfX1cIiBbaWRdPVwia2V5XCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3JpZ2h0LWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzInfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImRpc2FibGVkIHx8IHJlYWRvbmx5ID8gJycgOiAoJ1NFTEVDVC5ISU5UJyB8IHRyYW5zbGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZU1vZGVsXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiIChvcGVuZWRDaGFuZ2UpPVwib3BlbmVkQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwie3sgZm9ybWF0dGVkVmFsdWUgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdJZj1cImVtcHR5T3B0aW9uXCIgdmFsdWU9XCJcIj57eyAnTElTVC5OT05FJyB8IHRyYW5zbGF0ZSB9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uLktleVwiPnt7IG9wdGlvbi5WYWx1ZSB9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZXJyb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJib2R5LXhzXCIgW3RpdGxlXT1cIidNRVNTQUdFUy5FUlJPUl9JU19SRVFVSVJFRCcgfCB0cmFuc2xhdGU6IHtmaWVsZDogbGFiZWx9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVyVGV4dF09XCInTUVTU0FHRVMuRVJST1JfSVNfUkVRVUlSRUQnIHwgdHJhbnNsYXRlOiB7ZmllbGQ6IGxhYmVsfVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWVycm9yPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNtdWx0aVNlbGVjdEJsb2NrPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBkaXI9XCJ7eyB4QWxpZ25tZW50ID09PSAnMicgPyAncnRsJyA6ICdsdHInIH19XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCAjc2VsZWN0IFtyZXF1aXJlZF09XCJyZXF1aXJlZCA/IHJlcXVpcmVkIDogdW5kZWZpbmVkXCIgbWF0SW5wdXQgZGlzYWJsZU9wdGlvbkNlbnRlcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYm9keS1zbSB0ZXh0LWFsaWduLXt7IHhBbGlnbm1lbnQgfX1cIiBbaWRdPVwia2V5XCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3JpZ2h0LWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzInfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImRpc2FibGVkIHx8IHJlYWRvbmx5ID8gJycgOiAoJ1NFTEVDVC5ISU5UJyB8IHRyYW5zbGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZXNNb2RlbFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIChvcGVuZWRDaGFuZ2UpPVwib3BlbmVkQ2hhbmdlKCRldmVudClcIiBtdWx0aXBsZSB0aXRsZT1cInt7IGZvcm1hdHRlZFZhbHVlIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi5LZXlcIj57eyBvcHRpb24uVmFsdWUgfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWVycm9yPjxzcGFuIGNsYXNzPVwiYm9keS14c1wiIFt0aXRsZV09XCInTUVTU0FHRVMuRVJST1JfSVNfUkVRVUlSRUQnIHwgdHJhbnNsYXRlOiB7ZmllbGQ6IGxhYmVsfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lclRleHRdPVwiJ01FU1NBR0VTLkVSUk9SX0lTX1JFUVVJUkVEJyB8IHRyYW5zbGF0ZToge2ZpZWxkOiBsYWJlbH1cIj4gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtXCI+XHJcbiAgICAgICAgPHBlcC1maWVsZC10aXRsZSAqbmdJZj1cIiFwYXJlbnRGaWVsZEtleVwiIFtsYWJlbF09XCJsYWJlbFwiIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFt4QWxpZ25tZW50XT1cInhBbGlnbm1lbnRcIiBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiPlxyXG4gICAgICAgIDwvcGVwLWZpZWxkLXRpdGxlPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpQ2FyZFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0luRWRpdE1vZGU7IHRoZW4gZWRpdEJsb2NrOyBlbHNlIHJlYWRPbmx5QmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2VkaXRCbG9jaz5cclxuICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7J29uZS1yb3cnOiByb3dTcGFuID09PSAxfVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjcmVhZE9ubHlCbG9jaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlcHBlcmktY2FyZC1pbnB1dCBjYXJkLWZsZXgtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnb25lLXJvdyc6IHJvd1NwYW4gPT09IDEsICdwZXBwZXJpLWJ1dHRvbiB3ZWFrJzogaXNBY3RpdmUgJiYgIWRpc2FibGVkfVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiJ3RleHQtYWxpZ24tJyArIHhBbGlnbm1lbnRcIiAoY2xpY2spPVwiIWRpc2FibGVkID8gY2FyZFRlbXBsYXRlQ2xpY2tlZCgkZXZlbnQpIDogJydcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd1RpdGxlICYmIGxhYmVsICE9ICcnXCIgY2xhc3M9XCJib2R5LXhzIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cInt7IGxhYmVsIH19XCI+e3sgbGFiZWwgfX0mbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBbaWRdPVwia2V5XCIgdGl0bGU9XCJ7eyBmb3JtYXR0ZWRWYWx1ZSB9fVwiIGNsYXNzPVwiYm9keS1zbSB2YWx1ZVwiPnt7IGZvcm1hdHRlZFZhbHVlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQWN0aXZlICYmICFkaXNhYmxlZFwiIGNsYXNzPVwicGVwcGVyaS1idXR0b24gd2VhayBjYXJkLWVkaXQtYnV0dG9uXCIgbWF0LWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwZXAtaWNvbiBuYW1lPVwic3lzdGVtX2VkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQWN0aXZlICYmICFkaXNhYmxlZDsgdGhlbiBzZWxlY3RlZEJsb2NrOyBlbHNlIG5vdFNlbGVjdGVkQmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI3NlbGVjdGVkQmxvY2s+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90U2VsZWN0ZWRCbG9jaz5cclxuICAgICAgICAgICAgPHNwYW4gW2lkXT1cImtleVwiIGNsYXNzPVwiYm9keS1zbSBwZXBwZXJpLXJlcG9ydC1pbnB1dFwiIFtuZ0NsYXNzXT1cIntyZWFkb25seTogZGlzYWJsZWR9XCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwie3sgZmllbGRGb3JtYXR0ZWRWYWx1ZSB9fVwiPnt7IGZpZWxkRm9ybWF0dGVkVmFsdWUgfX08L3NwYW4+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5FZGl0bW9kYWxcIj5cclxuICAgICAgICA8cGVwLWZpZWxkLXRpdGxlIFtsYWJlbF09XCJsYWJlbFwiIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFt4QWxpZ25tZW50XT1cInhBbGlnbm1lbnRcIlxyXG4gICAgICAgICAgICBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiPlxyXG4gICAgICAgIDwvcGVwLWZpZWxkLXRpdGxlPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj4iXX0=