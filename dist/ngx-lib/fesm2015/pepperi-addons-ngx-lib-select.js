import { ɵɵelementContainer, ɵɵelementStart, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵpipeBind1, ɵɵproperty, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtemplate, ɵɵelement, ɵɵpropertyInterpolate, ɵɵclassMapInterpolate1, ɵɵpureFunction1, ɵɵpureFunction0, ɵɵpipeBind2, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵtextInterpolate1, ɵɵclassMap, ɵɵpureFunction2, EventEmitter, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { NgControlStatusGroup, FormGroupDirective, RequiredValidator, NgControlStatus, NgModel, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatOption, MatCommonModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LAYOUT_TYPE, CustomizationService, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemEdit, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { Dir } from '@angular/cdk/bidi';
import { TranslatePipe } from '@ngx-translate/core';

const _c0 = ["select"];
function PepperiSelectComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "LIST.NONE"));
} }
function PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    ɵɵproperty("value", option_r14.Key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r14.Value);
} }
const _c1 = function (a0) { return { "right-alignment": a0 }; };
const _c2 = function () { return { standalone: true }; };
const _c3 = function (a0) { return { field: a0 }; };
function PepperiSelectComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 6);
    ɵɵelementStart(1, "mat-select", 7, 8);
    ɵɵlistener("ngModelChange", function PepperiSelectComponent_ng_template_1_ng_template_1_Template_mat_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(2); return ctx_r15.selectedValueModel = $event; })("selectionChange", function PepperiSelectComponent_ng_template_1_ng_template_1_Template_mat_select_selectionChange_1_listener($event) { ɵɵrestoreView(_r16); const ctx_r17 = ɵɵnextContext(2); return ctx_r17.selectionChange($event); })("openedChange", function PepperiSelectComponent_ng_template_1_ng_template_1_Template_mat_select_openedChange_1_listener($event) { ɵɵrestoreView(_r16); const ctx_r18 = ɵɵnextContext(2); return ctx_r18.openedChange($event); });
    ɵɵpipe(3, "translate");
    ɵɵtemplate(4, PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_4_Template, 3, 3, "mat-option", 9);
    ɵɵtemplate(5, PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_5_Template, 2, 2, "mat-option", 10);
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-error");
    ɵɵelement(7, "span", 11);
    ɵɵpipe(8, "translate");
    ɵɵpipe(9, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("dir", ctx_r8.xAlignment === "2" ? "rtl" : "ltr");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("body-sm text-align-", ctx_r8.xAlignment, "");
    ɵɵpropertyInterpolate("title", ctx_r8.formattedValue);
    ɵɵproperty("required", ctx_r8.required ? ctx_r8.required : undefined)("id", ctx_r8.key)("ngClass", ɵɵpureFunction1(24, _c1, ctx_r8.xAlignment == "2"))("placeholder", ctx_r8.disabled || ctx_r8.readonly ? "" : ɵɵpipeBind1(3, 16, "SELECT.HINT"))("ngModel", ctx_r8.selectedValueModel)("ngModelOptions", ɵɵpureFunction0(26, _c2))("disabled", ctx_r8.disabled);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r8.emptyOption);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r8.options);
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind2(8, 18, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(27, _c3, ctx_r8.label)))("innerText", ɵɵpipeBind2(9, 21, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(29, _c3, ctx_r8.label)));
} }
function PepperiSelectComponent_ng_template_1_ng_template_3_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r21 = ctx.$implicit;
    ɵɵproperty("value", option_r21.Key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r21.Value);
} }
function PepperiSelectComponent_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 6);
    ɵɵelementStart(1, "mat-select", 14, 8);
    ɵɵlistener("ngModelChange", function PepperiSelectComponent_ng_template_1_ng_template_3_Template_mat_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(2); return ctx_r22.selectedValuesModel = $event; })("openedChange", function PepperiSelectComponent_ng_template_1_ng_template_3_Template_mat_select_openedChange_1_listener($event) { ɵɵrestoreView(_r23); const ctx_r24 = ɵɵnextContext(2); return ctx_r24.openedChange($event); });
    ɵɵpipe(3, "translate");
    ɵɵtemplate(4, PepperiSelectComponent_ng_template_1_ng_template_3_mat_option_4_Template, 2, 2, "mat-option", 10);
    ɵɵelementEnd();
    ɵɵelementStart(5, "mat-error");
    ɵɵelement(6, "span", 11);
    ɵɵpipe(7, "translate");
    ɵɵpipe(8, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("dir", ctx_r10.xAlignment === "2" ? "rtl" : "ltr");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("body-sm text-align-", ctx_r10.xAlignment, "");
    ɵɵpropertyInterpolate("title", ctx_r10.formattedValue);
    ɵɵproperty("required", ctx_r10.required ? ctx_r10.required : undefined)("id", ctx_r10.key)("ngClass", ɵɵpureFunction1(23, _c1, ctx_r10.xAlignment == "2"))("placeholder", ctx_r10.disabled || ctx_r10.readonly ? "" : ɵɵpipeBind1(3, 15, "SELECT.HINT"))("ngModel", ctx_r10.selectedValuesModel)("ngModelOptions", ɵɵpureFunction0(25, _c2))("disabled", ctx_r10.disabled);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r10.options);
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind2(7, 17, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(26, _c3, ctx_r10.label)))("innerText", ɵɵpipeBind2(8, 20, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(28, _c3, ctx_r10.label)));
} }
function PepperiSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiSelectComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 3);
    ɵɵtemplate(1, PepperiSelectComponent_ng_template_1_ng_template_1_Template, 10, 31, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, PepperiSelectComponent_ng_template_1_ng_template_3_Template, 9, 30, "ng-template", null, 5, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r7 = ɵɵreference(2);
    const _r9 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.type == "multi")("ngIfThen", _r9)("ngIfElse", _r7);
} }
function PepperiSelectComponent_ng_container_3_pep_field_title_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-field-title", 17);
} if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(2);
    ɵɵproperty("label", ctx_r25.label)("required", ctx_r25.required)("disabled", ctx_r25.disabled)("xAlignment", ctx_r25.xAlignment)("showTitle", ctx_r25.showTitle);
} }
function PepperiSelectComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiSelectComponent_ng_container_3_pep_field_title_1_Template, 1, 5, "pep-field-title", 15);
    ɵɵtemplate(2, PepperiSelectComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 16);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.parentFieldKey);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiSelectComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_container_4_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c4 = function (a0) { return { "one-row": a0 }; };
function PepperiSelectComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtemplate(1, PepperiSelectComponent_ng_container_4_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = ɵɵnextContext(2);
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c4, ctx_r29.rowSpan === 1));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiSelectComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r33.label);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r33.label, "\u00A0");
} }
function PepperiSelectComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 26);
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 27);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const _c5 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
function PepperiSelectComponent_ng_container_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r36 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21);
    ɵɵlistener("click", function PepperiSelectComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { ɵɵrestoreView(_r36); const ctx_r35 = ɵɵnextContext(2); return !ctx_r35.disabled ? ctx_r35.cardTemplateClicked($event) : ""; });
    ɵɵtemplate(1, PepperiSelectComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 22);
    ɵɵelementStart(2, "span", 23);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, PepperiSelectComponent_ng_container_4_ng_template_4_button_4_Template, 3, 0, "button", 24);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = ɵɵnextContext(2);
    ɵɵclassMap("text-align-" + ctx_r31.xAlignment);
    ɵɵproperty("ngClass", ɵɵpureFunction2(8, _c5, ctx_r31.rowSpan === 1, ctx_r31.isActive && !ctx_r31.disabled));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r31.showTitle && ctx_r31.label != "");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r31.formattedValue);
    ɵɵproperty("id", ctx_r31.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r31.formattedValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r31.isActive && !ctx_r31.disabled);
} }
function PepperiSelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiSelectComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵtemplate(2, PepperiSelectComponent_ng_container_4_ng_template_2_Template, 2, 4, "ng-template", null, 18, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiSelectComponent_ng_container_4_ng_template_4_Template, 5, 11, "ng-template", null, 19, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r28 = ɵɵreference(3);
    const _r30 = ɵɵreference(5);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r28)("ngIfElse", _r30);
} }
function PepperiSelectComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiSelectComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 16);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
const _c6 = function (a0) { return { readonly: a0 }; };
function PepperiSelectComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r41 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ctx_r41.fieldFormattedValue);
    ɵɵproperty("id", ctx_r41.key)("ngClass", ɵɵpureFunction1(4, _c6, ctx_r41.disabled));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r41.fieldFormattedValue);
} }
function PepperiSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiSelectComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵtemplate(2, PepperiSelectComponent_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 28, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiSelectComponent_ng_container_5_ng_template_4_Template, 2, 6, "ng-template", null, 29, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r38 = ɵɵreference(3);
    const _r40 = ɵɵreference(5);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r38)("ngIfElse", _r40);
} }
function PepperiSelectComponent_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiSelectComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "pep-field-title", 17);
    ɵɵtemplate(2, PepperiSelectComponent_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 16);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r5.label)("required", ctx_r5.required)("disabled", ctx_r5.disabled)("xAlignment", ctx_r5.xAlignment)("showTitle", ctx_r5.showTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
class PepperiSelectComponent {
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
PepperiSelectComponent.ɵfac = function PepperiSelectComponent_Factory(t) { return new (t || PepperiSelectComponent)(ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
PepperiSelectComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiSelectComponent, selectors: [["pep-select"]], viewQuery: function PepperiSelectComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.select = _t.first);
    } }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", options: "options", form: "form", layoutType: "layoutType", parentFieldKey: "parentFieldKey", isActive: "isActive", showTitle: "showTitle", emptyOption: "emptyOption" }, outputs: { valueChanged: "valueChanged", formValidationChanged: "formValidationChanged" }, features: [ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["regularSelectBlock", ""], ["multiSelectBlock", ""], ["appearance", "outline", 3, "dir"], ["matInput", "", "disableOptionCentering", "", 3, "required", "id", "ngClass", "placeholder", "ngModel", "ngModelOptions", "disabled", "title", "ngModelChange", "selectionChange", "openedChange"], ["select", ""], ["value", "", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "body-xs", 3, "title", "innerText"], ["value", ""], [3, "value"], ["matInput", "", "disableOptionCentering", "", "multiple", "", 3, "required", "id", "ngClass", "placeholder", "ngModel", "ngModelOptions", "disabled", "title", "ngModelChange", "openedChange"], [3, "label", "required", "disabled", "xAlignment", "showTitle", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], ["editBlock", ""], ["readOnlyBlock", ""], [3, "ngClass"], [1, "pepperi-card-input", "card-flex-container", 3, "ngClass", "click"], ["class", "body-xs title", 3, "title", 4, "ngIf"], [1, "body-sm", "value", 3, "id", "title"], ["class", "pepperi-button weak card-edit-button", "mat-button", "", 4, "ngIf"], [1, "body-xs", "title", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button"], ["name", "system_edit"], ["selectedBlock", ""], ["notSelectedBlock", ""], [1, "body-sm", "pepperi-report-input", 3, "id", "ngClass", "title"]], template: function PepperiSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PepperiSelectComponent_ng_template_1_Template, 5, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PepperiSelectComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
        ɵɵtemplate(4, PepperiSelectComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(5, PepperiSelectComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(6, PepperiSelectComponent_ng_container_6_Template, 3, 6, "ng-container", 2);
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
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, MatFormField, Dir, MatSelect, RequiredValidator, NgClass, NgControlStatus, NgModel, NgForOf, MatError, MatOption, NgTemplateOutlet, PepperiFieldTitleComponent, MatButton, MatIcon, PepperiIconComponent], pipes: [TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.material-additional-selection[_ngcontent-%COMP%]{font-size:.75em;opacity:.75}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiSelectComponent, [{
        type: Component,
        args: [{
                selector: 'pep-select',
                templateUrl: './select.component.html',
                styleUrls: ['./select.component.scss'],
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

class PepperiSelectModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit
        ]);
    }
}
PepperiSelectModule.ɵmod = ɵɵdefineNgModule({ type: PepperiSelectModule });
PepperiSelectModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiSelectModule_Factory(t) { return new (t || PepperiSelectModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatSelectModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiSelectModule, { declarations: [PepperiSelectComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule], exports: [PepperiSelectComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiSelectModule, [{
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
                    MatSelectModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule
                ],
                exports: [PepperiSelectComponent,],
                declarations: [PepperiSelectComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/select
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiSelectComponent, PepperiSelectModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-select.js.map
