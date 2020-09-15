import { ɵɵelementContainer, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵpipe, ɵɵtemplate, ɵɵproperty, ɵɵpipeBind1, ɵɵtextInterpolate1, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵpropertyInterpolate, ɵɵpureFunction7, ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, EventEmitter, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgTemplateOutlet, CommonModule } from '@angular/common';
import { NgControlStatusGroup, FormGroupDirective, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LAYOUT_TYPE, CustomizationService, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemBolt, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { Dir } from '@angular/cdk/bidi';

function PepperiCheckboxComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_template_1_ng_template_2_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r11.label);
} }
function PepperiCheckboxComponent_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵlistener("click", function PepperiCheckboxComponent_ng_template_1_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(2); return ctx_r12.toggleChecked($event); });
    ɵɵpipe(1, "translate");
    ɵɵpipe(2, "translate");
    ɵɵelementStart(3, "button", 8);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, PepperiCheckboxComponent_ng_template_1_ng_template_2_span_5_Template, 2, 1, "span", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("title", (ctx_r8.label.length > 0 ? ctx_r8.label + ": " : "") + (ctx_r8.value.toLowerCase() == "true" || ctx_r8.value == "1" ? ɵɵpipeBind1(1, 4, "CHECKBOX.TRUE") : ɵɵpipeBind1(2, 6, "CHECKBOX.FALSE")));
    ɵɵadvance(3);
    ɵɵproperty("id", ctx_r8.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r8.value.toLowerCase() == "true" || ctx_r8.value == "1" ? ctx_r8.additionalValueObject.CheckedText : ctx_r8.additionalValueObject.UncheckedText, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.label.length > 0 && ctx_r8.layoutType !== ctx_r8.LAYOUT_TYPE.PepperiTable);
} }
function PepperiCheckboxComponent_ng_template_1_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r14.label);
} }
function PepperiCheckboxComponent_ng_template_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 11);
    ɵɵlistener("change", function PepperiCheckboxComponent_ng_template_1_ng_template_4_Template_mat_checkbox_change_0_listener($event) { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(2); return ctx_r15.onMaterialChange($event); });
    ɵɵpipe(1, "translate");
    ɵɵpipe(2, "translate");
    ɵɵtemplate(3, PepperiCheckboxComponent_ng_template_1_ng_template_4_span_3_Template, 2, 1, "span", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r10.key)("title", (ctx_r10.label.length > 0 ? ctx_r10.label + ": " : "") + (ctx_r10.value.toLowerCase() == "true" || ctx_r10.value == "1" ? ɵɵpipeBind1(1, 5, "CHECKBOX.TRUE") : ɵɵpipeBind1(2, 7, "CHECKBOX.FALSE")))("checked", ctx_r10.value.toLowerCase() == "true" || ctx_r10.value == "1" ? true : false)("disabled", ctx_r10.disabled);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r10.label.length > 0 && ctx_r10.layoutType !== ctx_r10.LAYOUT_TYPE.PepperiTable);
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6) { return { "disable": a0, "pepperi-report-checkbox": a1, "pepperi-card-checkbox": a2, "one-row": a3, "no-title": a4, "right-alignment pull-right flip": a5, "center-alignment": a6 }; };
function PepperiCheckboxComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, PepperiCheckboxComponent_ng_template_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(2, PepperiCheckboxComponent_ng_template_1_ng_template_2_Template, 6, 8, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiCheckboxComponent_ng_template_1_ng_template_4_Template, 4, 9, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = ɵɵreference(3);
    const _r9 = ɵɵreference(5);
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("dir", ctx_r1.xAlignment == "2" ? "rtl" : "ltr");
    ɵɵproperty("ngClass", ɵɵpureFunction7(5, _c0, ctx_r1.disabled, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable && !ctx_r1.isActive, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard, ctx_r1.rowSpan === 1, ctx_r1.label.length == 0, ctx_r1.xAlignment == "2", ctx_r1.xAlignment == "3"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.type == "booleanText")("ngIfThen", _r7)("ngIfElse", _r9);
} }
function PepperiCheckboxComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "pep-field-title", 12);
    ɵɵtemplate(2, PepperiCheckboxComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r2.label)("required", ctx_r2.required)("disabled", ctx_r2.disabled)("xAlignment", ctx_r2.xAlignment)("showTitle", false);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiCheckboxComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiCheckboxComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiCheckboxComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 18);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "pep-icon", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 1, "CHECKBOX.TRUE"));
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\u00A0");
    ɵɵelementEnd();
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(1, PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_1_Template, 3, 3, "ng-template", null, 16, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", null, 17, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r25 = ɵɵreference(2);
    const _r27 = ɵɵreference(4);
    const ctx_r21 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r21.value.toLowerCase() == "true" || ctx_r21.value == "1")("ngIfThen", _r25)("ngIfElse", _r27);
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiCheckboxComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 13);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiCheckboxComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiCheckboxComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(2, PepperiCheckboxComponent_ng_container_5_ng_template_2_Template, 5, 3, "ng-template", null, 14, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiCheckboxComponent_ng_container_5_ng_template_4_Template, 1, 1, "ng-template", null, 15, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r20 = ɵɵreference(3);
    const _r22 = ɵɵreference(5);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.key === "ItemHasActiveCampaign")("ngIfThen", _r20)("ngIfElse", _r22);
} }
function PepperiCheckboxComponent_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "pep-field-title", 12);
    ɵɵtemplate(2, PepperiCheckboxComponent_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r5.label)("required", ctx_r5.required)("disabled", ctx_r5.disabled)("xAlignment", ctx_r5.xAlignment)("showTitle", false);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
class PepperiCheckboxComponent {
    constructor(renderer, customizationService, translate, element) {
        this.renderer = renderer;
        this.customizationService = customizationService;
        this.translate = translate;
        this.element = element;
        this.key = '';
        this.value = '';
        this.label = '';
        this.type = 'checkbox'; // || 'booleanText'
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.controlType = 'checkbox';
        this.form = null;
        this.isActive = false;
        this.showTitle = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.valueChanged = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.standAlone = false;
        this.jsonLib = JSON;
    }
    ngOnInit() {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled, 0, '', true);
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
        if (this.type === 'booleanText') {
            try {
                if (typeof this.additionalValue === 'string') {
                    this.additionalValueObject = JSON.parse(this.additionalValue);
                }
                else {
                    this.additionalValueObject = this.additionalValue;
                }
            }
            catch (_a) {
                this.additionalValueObject = {
                    CheckedText: this.translate.instant('CHECKBOX.TRUE'),
                    UncheckedText: this.translate.instant('CHECKBOX.FALSE')
                };
            }
        }
    }
    ngOnDestroy() {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }
    onMaterialChange(e) {
        this.changeValue(e.checked);
    }
    toggleChecked(event) {
        if (!this.disabled) {
            const isChecked = this.value === 'true' || this.value === '1' ? true : false;
            this.value = (!isChecked).toString();
            this.changeValue(this.value);
        }
    }
    changeValue(value) {
        this.customizationService.updateFormFieldValue(this.form, this.key, value);
        this.valueChanged.emit({ apiName: this.key, value });
    }
}
PepperiCheckboxComponent.ɵfac = function PepperiCheckboxComponent_Factory(t) { return new (t || PepperiCheckboxComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(TranslateService), ɵɵdirectiveInject(ElementRef)); };
PepperiCheckboxComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiCheckboxComponent, selectors: [["pep-checkbox"]], inputs: { key: "key", value: "value", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", additionalValue: "additionalValue", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [1, "pepperi-checkbox-container", "pepperi-input", 3, "ngClass", "dir"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["booleanTextTemplate", ""], ["regularTemplate", ""], [1, "mat-checkbox-layout", "body-sm", 3, "title", "click"], [1, "mat-icon-button", "emoji-icon", "pull-left", "flip", 3, "id"], ["class", "mat-checkbox-label emoji-title", 4, "ngIf"], [1, "mat-checkbox-label", "emoji-title"], ["type", "checkbox", 1, "body-sm", "ellipsis", 3, "name", "title", "checked", "disabled", "change"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [4, "ngTemplateOutlet"], ["itemCampaignBlock", ""], ["checkboxBlock", ""], ["trueTemplate", ""], ["falseTemplate", ""], [1, "has-active-campaign", 3, "title"], ["name", "system_bolt"]], template: function PepperiCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PepperiCheckboxComponent_ng_template_1_Template, 6, 13, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PepperiCheckboxComponent_ng_container_3_Template, 3, 6, "ng-container", 2);
        ɵɵtemplate(4, PepperiCheckboxComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        ɵɵtemplate(5, PepperiCheckboxComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(6, PepperiCheckboxComponent_ng_container_6_Template, 3, 6, "ng-container", 2);
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
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, NgClass, Dir, MatCheckbox, PepperiFieldTitleComponent, NgTemplateOutlet, MatIcon, PepperiIconComponent], pipes: [TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'pep-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: Renderer2 }, { type: CustomizationService }, { type: TranslateService }, { type: ElementRef }]; }, { key: [{
            type: Input
        }], value: [{
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
        }], additionalValue: [{
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
        }] }); })();

class PepperiCheckboxModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemBolt
        ]);
    }
}
PepperiCheckboxModule.ɵmod = ɵɵdefineNgModule({ type: PepperiCheckboxModule });
PepperiCheckboxModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiCheckboxModule_Factory(t) { return new (t || PepperiCheckboxModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatFormFieldModule,
            MatCheckboxModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiCheckboxModule, { declarations: [PepperiCheckboxComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule], exports: [PepperiCheckboxComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules
                    MatCommonModule,
                    MatFormFieldModule,
                    MatCheckboxModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule
                ],
                exports: [PepperiCheckboxComponent],
                declarations: [PepperiCheckboxComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/checkbox
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiCheckboxComponent, PepperiCheckboxModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-checkbox.js.map
