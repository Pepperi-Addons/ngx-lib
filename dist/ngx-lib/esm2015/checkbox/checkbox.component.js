import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CustomizationService, LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/cdk/bidi";
import * as i6 from "@angular/material/checkbox";
import * as i7 from "@pepperi-addons/ngx-lib/field-title";
import * as i8 from "@angular/material/icon";
import * as i9 from "@pepperi-addons/ngx-lib/icon";
function PepperiCheckboxComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_template_1_ng_template_2_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r11.label);
} }
function PepperiCheckboxComponent_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function PepperiCheckboxComponent_ng_template_1_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.toggleChecked($event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementStart(3, "button", 8);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PepperiCheckboxComponent_ng_template_1_ng_template_2_span_5_Template, 2, 1, "span", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", (ctx_r8.label.length > 0 ? ctx_r8.label + ": " : "") + (ctx_r8.value.toLowerCase() == "true" || ctx_r8.value == "1" ? i0.ɵɵpipeBind1(1, 4, "CHECKBOX.TRUE") : i0.ɵɵpipeBind1(2, 6, "CHECKBOX.FALSE")));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("id", ctx_r8.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.value.toLowerCase() == "true" || ctx_r8.value == "1" ? ctx_r8.additionalValueObject.CheckedText : ctx_r8.additionalValueObject.UncheckedText, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.label.length > 0 && ctx_r8.layoutType !== ctx_r8.LAYOUT_TYPE.PepperiTable);
} }
function PepperiCheckboxComponent_ng_template_1_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.label);
} }
function PepperiCheckboxComponent_ng_template_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 11);
    i0.ɵɵlistener("change", function PepperiCheckboxComponent_ng_template_1_ng_template_4_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onMaterialChange($event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵtemplate(3, PepperiCheckboxComponent_ng_template_1_ng_template_4_span_3_Template, 2, 1, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("name", ctx_r10.key)("title", (ctx_r10.label.length > 0 ? ctx_r10.label + ": " : "") + (ctx_r10.value.toLowerCase() == "true" || ctx_r10.value == "1" ? i0.ɵɵpipeBind1(1, 5, "CHECKBOX.TRUE") : i0.ɵɵpipeBind1(2, 7, "CHECKBOX.FALSE")))("checked", ctx_r10.value.toLowerCase() == "true" || ctx_r10.value == "1" ? true : false)("disabled", ctx_r10.disabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r10.label.length > 0 && ctx_r10.layoutType !== ctx_r10.LAYOUT_TYPE.PepperiTable);
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6) { return { "disable": a0, "pepperi-report-checkbox": a1, "pepperi-card-checkbox": a2, "one-row": a3, "no-title": a4, "right-alignment pull-right flip": a5, "center-alignment": a6 }; };
function PepperiCheckboxComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, PepperiCheckboxComponent_ng_template_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(2, PepperiCheckboxComponent_ng_template_1_ng_template_2_Template, 6, 8, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiCheckboxComponent_ng_template_1_ng_template_4_Template, 4, 9, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(3);
    const _r9 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("dir", ctx_r1.xAlignment == "2" ? "rtl" : "ltr");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction7(5, _c0, ctx_r1.disabled, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable && !ctx_r1.isActive, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard, ctx_r1.rowSpan === 1, ctx_r1.label.length == 0, ctx_r1.xAlignment == "2", ctx_r1.xAlignment == "3"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "booleanText")("ngIfThen", _r7)("ngIfElse", _r9);
} }
function PepperiCheckboxComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "pep-field-title", 12);
    i0.ɵɵtemplate(2, PepperiCheckboxComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r2.label)("required", ctx_r2.required)("disabled", ctx_r2.disabled)("xAlignment", ctx_r2.xAlignment)("showTitle", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiCheckboxComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiCheckboxComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiCheckboxComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 18);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "pep-icon", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵpropertyInterpolate("title", i0.ɵɵpipeBind1(1, 1, "CHECKBOX.TRUE"));
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(1, PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_1_Template, 3, 3, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r25 = i0.ɵɵreference(2);
    const _r27 = i0.ɵɵreference(4);
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r21.value.toLowerCase() == "true" || ctx_r21.value == "1")("ngIfThen", _r25)("ngIfElse", _r27);
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiCheckboxComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 13);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiCheckboxComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiCheckboxComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(2, PepperiCheckboxComponent_ng_container_5_ng_template_2_Template, 5, 3, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiCheckboxComponent_ng_container_5_ng_template_4_Template, 1, 1, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r20 = i0.ɵɵreference(3);
    const _r22 = i0.ɵɵreference(5);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.key === "ItemHasActiveCampaign")("ngIfThen", _r20)("ngIfElse", _r22);
} }
function PepperiCheckboxComponent_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiCheckboxComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "pep-field-title", 12);
    i0.ɵɵtemplate(2, PepperiCheckboxComponent_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r5.label)("required", ctx_r5.required)("disabled", ctx_r5.disabled)("xAlignment", ctx_r5.xAlignment)("showTitle", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
export class PepperiCheckboxComponent {
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
PepperiCheckboxComponent.ɵfac = function PepperiCheckboxComponent_Factory(t) { return new (t || PepperiCheckboxComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i2.TranslateService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PepperiCheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiCheckboxComponent, selectors: [["pep-checkbox"]], inputs: { key: "key", value: "value", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", additionalValue: "additionalValue", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [1, "pepperi-checkbox-container", "pepperi-input", 3, "ngClass", "dir"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["booleanTextTemplate", ""], ["regularTemplate", ""], [1, "mat-checkbox-layout", "body-sm", 3, "title", "click"], [1, "mat-icon-button", "emoji-icon", "pull-left", "flip", 3, "id"], ["class", "mat-checkbox-label emoji-title", 4, "ngIf"], [1, "mat-checkbox-label", "emoji-title"], ["type", "checkbox", 1, "body-sm", "ellipsis", 3, "name", "title", "checked", "disabled", "change"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [4, "ngTemplateOutlet"], ["itemCampaignBlock", ""], ["checkboxBlock", ""], ["trueTemplate", ""], ["falseTemplate", ""], [1, "has-active-campaign", 3, "title"], ["name", "system_bolt"]], template: function PepperiCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PepperiCheckboxComponent_ng_template_1_Template, 6, 13, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PepperiCheckboxComponent_ng_container_3_Template, 3, 6, "ng-container", 2);
        i0.ɵɵtemplate(4, PepperiCheckboxComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(5, PepperiCheckboxComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(6, PepperiCheckboxComponent_ng_container_6_Template, 3, 6, "ng-container", 2);
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
    } }, directives: [i3.NgControlStatusGroup, i3.FormGroupDirective, i4.NgIf, i4.NgClass, i5.Dir, i6.MatCheckbox, i7.PepperiFieldTitleComponent, i4.NgTemplateOutlet, i8.MatIcon, i9.PepperiIconComponent], pipes: [i2.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'pep-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.CustomizationService }, { type: i2.TranslateService }, { type: i0.ElementRef }]; }, { key: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBRzFJLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7O0lDVWhFLHdCQUEyRzs7O0lBT25HLGdDQUMyQztJQUFBLFlBQVc7SUFBQSxpQkFBTzs7O0lBQWxCLGVBQVc7SUFBWCxtQ0FBVzs7OztJQU4xRCw4QkFFSTtJQUZDLGtPQUErQjs7O0lBRWhDLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFTO0lBQ1QsdUdBQzJDO0lBQy9DLGlCQUFNOzs7SUFORiw2TkFBbUs7SUFDM0osZUFBVTtJQUFWLCtCQUFVO0lBQ2QsZUFDSjtJQURJLG9MQUNKO0lBQ00sZUFBbUU7SUFBbkUsdUdBQW1FOzs7SUFRekUsNEJBQTBFO0lBQUEsWUFBVztJQUFBLGlCQUFPOzs7SUFBbEIsZUFBVztJQUFYLG1DQUFXOzs7O0lBSHpGLHdDQUdJO0lBSGdFLGdQQUFtQzs7O0lBR25HLHVHQUEwRTtJQUM5RSxpQkFBZTs7O0lBSkQsa0NBQVksb05BQUEseUZBQUEsOEJBQUE7SUFHaEIsZUFBbUU7SUFBbkUsMEdBQW1FOzs7O0lBekJyRiw4QkFTSTtJQUNBLHlHQUE0RjtJQUM1Rix3SUFDSTtJQVNKLHdJQUNJO0lBTVIsaUJBQU07Ozs7O0lBcEJDLHlFQUE2QztJQVJFLDBTQVFoRDtJQUVZLGVBQTZFO0lBQTdFLG1EQUE2RSxpQkFB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QVk7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25EZXN0cm95LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEN1c3RvbWl6YXRpb25TZXJ2aWNlLCBMQVlPVVRfVFlQRSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwZXAtY2hlY2tib3gnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIGtleSA9ICcnO1xyXG4gICAgQElucHV0KCkgdmFsdWUgPSAnJztcclxuICAgIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgICBASW5wdXQoKSB0eXBlID0gJ2NoZWNrYm94JzsgLy8gfHwgJ2Jvb2xlYW5UZXh0J1xyXG4gICAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgeEFsaWdubWVudCA9ICcwJztcclxuICAgIEBJbnB1dCgpIHJvd1NwYW4gPSAxO1xyXG4gICAgQElucHV0KCkgYWRkaXRpb25hbFZhbHVlOiBhbnk7XHJcblxyXG4gICAgY29udHJvbFR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICAgIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cCA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBpc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGxheW91dFR5cGU6IExBWU9VVF9UWVBFID0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm07XHJcblxyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG4gICAgc3RhbmRBbG9uZSA9IGZhbHNlO1xyXG5cclxuICAgIGFkZGl0aW9uYWxWYWx1ZU9iamVjdDogYW55O1xyXG4gICAgcHVibGljIGpzb25MaWIgPSBKU09OO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBwcml2YXRlIGN1c3RvbWl6YXRpb25TZXJ2aWNlOiBDdXN0b21pemF0aW9uU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZlxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhbmRBbG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuZ2V0RGVmYXVsdEZyb21Hcm91cCh0aGlzLmtleSwgdGhpcy52YWx1ZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5yZWFkb25seSwgdGhpcy5kaXNhYmxlZCwgMCwgJycsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgQ3VzdG9taXphdGlvblNlcnZpY2UuU1RBTkRfQUxPTkVfRklFTERfQ0xBU1NfTkFNRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnYm9vbGVhblRleHQnKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuYWRkaXRpb25hbFZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFZhbHVlT2JqZWN0ID0gSlNPTi5wYXJzZSh0aGlzLmFkZGl0aW9uYWxWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFZhbHVlT2JqZWN0ID0gdGhpcy5hZGRpdGlvbmFsVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsVmFsdWVPYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2tlZFRleHQ6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ0NIRUNLQk9YLlRSVUUnKSxcclxuICAgICAgICAgICAgICAgICAgICBVbmNoZWNrZWRUZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdDSEVDS0JPWC5GQUxTRScpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1hdGVyaWFsQ2hhbmdlKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUoZS5jaGVja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDaGVja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNDaGVja2VkOiBib29sZWFuID0gdGhpcy52YWx1ZSA9PT0gJ3RydWUnIHx8IHRoaXMudmFsdWUgPT09ICcxJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICghaXNDaGVja2VkKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS51cGRhdGVGb3JtRmllbGRWYWx1ZSh0aGlzLmZvcm0sIHRoaXMua2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh7IGFwaU5hbWU6IHRoaXMua2V5LCB2YWx1ZSB9KTtcclxuICAgIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgPCEtLSBOZXcgY29kZSAtLT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjcGVwcGVyaVRlbXBsYXRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWNoZWNrYm94LWNvbnRhaW5lciBwZXBwZXJpLWlucHV0XCIgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICAgICAgICAgJ2Rpc2FibGUnOiBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICdwZXBwZXJpLXJlcG9ydC1jaGVja2JveCc6IGxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlUYWJsZSAmJiAhaXNBY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAncGVwcGVyaS1jYXJkLWNoZWNrYm94JzogbGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmQsXHJcbiAgICAgICAgICAgICAgICAnb25lLXJvdyc6IHJvd1NwYW4gPT09IDEsXHJcbiAgICAgICAgICAgICAgICAnbm8tdGl0bGUnOiBsYWJlbC5sZW5ndGggPT0gMCxcclxuICAgICAgICAgICAgICAgICdyaWdodC1hbGlnbm1lbnQgcHVsbC1yaWdodCBmbGlwJzogeEFsaWdubWVudCA9PSAnMicsXHJcbiAgICAgICAgICAgICAgICAnY2VudGVyLWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzMnXHJcbiAgICAgICAgICAgIH1cIiBkaXI9XCJ7eyB4QWxpZ25tZW50ID09ICcyJyA/ICdydGwnIDogJ2x0cicgfX1cIj5cclxuICAgICAgICAgICAgPCEtLSAoY2xpY2spPVwidG9nZ2xlQ2hlY2tlZCgkZXZlbnQpXCIgLS0+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09ICdib29sZWFuVGV4dCc7IHRoZW4gYm9vbGVhblRleHRUZW1wbGF0ZTsgZWxzZSByZWd1bGFyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNib29sZWFuVGV4dFRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlQ2hlY2tlZCgkZXZlbnQpXCIgY2xhc3M9XCJtYXQtY2hlY2tib3gtbGF5b3V0IGJvZHktc21cIlxyXG4gICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCIobGFiZWwubGVuZ3RoID4gMCA/IGxhYmVsICsgJzogJyA6ICcnKSArICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJyB8fCB2YWx1ZSA9PSAnMScgPyAoJ0NIRUNLQk9YLlRSVUUnIHwgdHJhbnNsYXRlKSA6ICgnQ0hFQ0tCT1guRkFMU0UnIHwgdHJhbnNsYXRlKSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFtpZF09XCJrZXlcIiBjbGFzcz1cIm1hdC1pY29uLWJ1dHRvbiBlbW9qaS1pY29uIHB1bGwtbGVmdCBmbGlwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnIHx8IHZhbHVlID09ICcxJyA/IGFkZGl0aW9uYWxWYWx1ZU9iamVjdC5DaGVja2VkVGV4dCA6IGFkZGl0aW9uYWxWYWx1ZU9iamVjdC5VbmNoZWNrZWRUZXh0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJsYWJlbC5sZW5ndGggPiAwICYmIGxheW91dFR5cGUgIT09IExBWU9VVF9UWVBFLlBlcHBlcmlUYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWF0LWNoZWNrYm94LWxhYmVsIGVtb2ppLXRpdGxlXCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNyZWd1bGFyVGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IFtuYW1lXT1cImtleVwiIGNsYXNzPVwiYm9keS1zbSBlbGxpcHNpc1wiIHR5cGU9XCJjaGVja2JveFwiIChjaGFuZ2UpPVwib25NYXRlcmlhbENoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiKGxhYmVsLmxlbmd0aCA+IDAgPyBsYWJlbCArICc6ICcgOiAnJykgKyAodmFsdWUudG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScgfHwgdmFsdWUgPT0gJzEnID8gKCdDSEVDS0JPWC5UUlVFJyB8IHRyYW5zbGF0ZSkgOiAoJ0NIRUNLQk9YLkZBTFNFJyB8IHRyYW5zbGF0ZSkpXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJ2YWx1ZS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJyB8fCB2YWx1ZSA9PSAnMScgPyB0cnVlIDogZmFsc2VcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImxhYmVsLmxlbmd0aCA+IDAgJiYgbGF5b3V0VHlwZSAhPT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlXCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtXCI+XHJcbiAgICAgICAgPHBlcC1maWVsZC10aXRsZSBbbGFiZWxdPVwibGFiZWxcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbeEFsaWdubWVudF09XCJ4QWxpZ25tZW50XCJcclxuICAgICAgICAgICAgW3Nob3dUaXRsZV09XCJmYWxzZVwiPlxyXG4gICAgICAgIDwvcGVwLWZpZWxkLXRpdGxlPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpQ2FyZFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpVGFibGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwia2V5ID09PSAnSXRlbUhhc0FjdGl2ZUNhbXBhaWduJzsgdGhlbiBpdGVtQ2FtcGFpZ25CbG9jazsgZWxzZSBjaGVja2JveEJsb2NrXCI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNpdGVtQ2FtcGFpZ25CbG9jaz5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnIHx8IHZhbHVlID09ICcxJzsgdGhlbiB0cnVlVGVtcGxhdGU7IGVsc2UgZmFsc2VUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICN0cnVlVGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJoYXMtYWN0aXZlLWNhbXBhaWduXCIgdGl0bGU9XCJ7eyAnQ0hFQ0tCT1guVFJVRScgfCB0cmFuc2xhdGUgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInN5c3RlbV9ib2x0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZmFsc2VUZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjY2hlY2tib3hCbG9jaz5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuRWRpdG1vZGFsXCI+XHJcbiAgICAgICAgPHBlcC1maWVsZC10aXRsZSBbbGFiZWxdPVwibGFiZWxcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbeEFsaWdubWVudF09XCJ4QWxpZ25tZW50XCJcclxuICAgICAgICAgICAgW3Nob3dUaXRsZV09XCJmYWxzZVwiPlxyXG4gICAgICAgIDwvcGVwLWZpZWxkLXRpdGxlPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj4iXX0=