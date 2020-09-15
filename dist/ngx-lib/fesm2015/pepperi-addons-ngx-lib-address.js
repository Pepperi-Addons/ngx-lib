import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵpropertyInterpolate, ɵɵproperty, ɵɵtemplate, ɵɵclassMapInterpolate1, ɵɵadvance, ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, ɵɵtext, ɵɵtextInterpolate1, ɵɵpropertyInterpolate2, ɵɵpureFunction1, EventEmitter, ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgForOf, NgSwitch, NgSwitchCase, NgClass, CommonModule } from '@angular/common';
import { NgControlStatusGroup, FormGroupDirective, FormGroupName, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LAYOUT_TYPE, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiTextboxComponent, PepperiTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepperiSelectComponent, PepperiSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { Dir } from '@angular/cdk/bidi';

function PepperiAddressComponent_ng_container_1_div_3_pep_textbox_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-textbox", 8);
    ɵɵlistener("valueChanged", function PepperiAddressComponent_ng_container_1_div_3_pep_textbox_1_Template_pep_textbox_valueChanged_0_listener($event) { ɵɵrestoreView(_r9); const groupField_r4 = ɵɵnextContext().$implicit; const ctx_r8 = ɵɵnextContext(2); return ctx_r8.onValueChange($event, groupField_r4.key); });
    ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r4 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", groupField_r4.formattedValue);
    ɵɵproperty("layoutType", ctx_r6.layoutType)("form", ctx_r6.form)("key", groupField_r4.key)("value", groupField_r4.value)("formattedValue", groupField_r4.formattedValue)("label", groupField_r4.label)("placeholder", groupField_r4.placeholder)("type", groupField_r4.type)("required", groupField_r4.required)("disabled", groupField_r4.disabled)("readonly", groupField_r4.readonly)("xAlignment", groupField_r4.xAlignment)("rowSpan", groupField_r4.rowSpan)("parentFieldKey", ctx_r6.key);
} }
function PepperiAddressComponent_ng_container_1_div_3_pep_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-select", 9);
    ɵɵlistener("valueChanged", function PepperiAddressComponent_ng_container_1_div_3_pep_select_2_Template_pep_select_valueChanged_0_listener($event) { ɵɵrestoreView(_r13); const groupField_r4 = ɵɵnextContext().$implicit; const ctx_r12 = ɵɵnextContext(2); return ctx_r12.onValueChange($event, groupField_r4.key); });
    ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r4 = ɵɵnextContext().$implicit;
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", groupField_r4.formattedValue);
    ɵɵproperty("layoutType", ctx_r7.layoutType)("form", ctx_r7.form)("key", groupField_r4.key)("value", groupField_r4.value)("formattedValue", groupField_r4.formattedValue)("label", groupField_r4.label)("type", groupField_r4.type)("required", groupField_r4.required)("disabled", groupField_r4.disabled)("readonly", groupField_r4.readonly)("xAlignment", groupField_r4.xAlignment)("rowSpan", groupField_r4.rowSpan)("options", groupField_r4.options)("parentFieldKey", ctx_r7.key);
} }
function PepperiAddressComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, PepperiAddressComponent_ng_container_1_div_3_pep_textbox_1_Template, 1, 15, "pep-textbox", 6);
    ɵɵtemplate(2, PepperiAddressComponent_ng_container_1_div_3_pep_select_2_Template, 1, 15, "pep-select", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r4 = ctx.$implicit;
    ɵɵclassMapInterpolate1("pepperi-address-field columns-", groupField_r4.colSpan, "");
    ɵɵproperty("ngSwitch", groupField_r4.controlType);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "textbox");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "select");
} }
function PepperiAddressComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "pep-field-title", 2);
    ɵɵelementStart(2, "div", 3);
    ɵɵtemplate(3, PepperiAddressComponent_ng_container_1_div_3_Template, 3, 6, "div", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r0.label)("required", ctx_r0.required)("disabled", ctx_r0.disabled);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("dir", ctx_r0.xAlignment === "2" ? "rtl" : "ltr");
    ɵɵproperty("formGroupName", ctx_r0.key)("id", ctx_r0.key);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.groupFields);
} }
function PepperiAddressComponent_ng_container_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r16.label, "\u00A0");
} }
function PepperiAddressComponent_ng_container_2_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r18 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", groupField_r18.formattedValue, ",\u00A0");
} }
function PepperiAddressComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiAddressComponent_ng_container_2_ng_container_3_span_1_Template, 2, 1, "span", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const groupField_r18 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (groupField_r18 == null ? null : groupField_r18.formattedValue) != "");
} }
const _c0 = function (a0) { return [a0]; };
function PepperiAddressComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10);
    ɵɵtemplate(2, PepperiAddressComponent_ng_container_2_span_2_Template, 2, 1, "span", 11);
    ɵɵtemplate(3, PepperiAddressComponent_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵpropertyInterpolate2("title", "", ctx_r1.label, "\u00A0", ctx_r1.formattedValue, "");
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c0, "text-align-" + ctx_r1.xAlignment));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.label != "");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.groupFields);
} }
function PepperiAddressComponent_ng_container_3_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r23 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", groupField_r23.formattedValue, ",\u00A0");
} }
function PepperiAddressComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiAddressComponent_ng_container_3_ng_container_2_span_1_Template, 2, 1, "span", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const groupField_r23 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (groupField_r23 == null ? null : groupField_r23.formattedValue) != "");
} }
function PepperiAddressComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10);
    ɵɵtemplate(2, PepperiAddressComponent_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r2.formattedValue);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c0, "text-align-" + ctx_r2.xAlignment));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.groupFields);
} }
class PepperiAddressComponent {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.key = '';
        // @Input() value = '';
        this.formattedValue = '';
        this.label = '';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.form = null;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.valueChanged = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
    }
    ngOnInit() {
        this.renderer.addClass(this.element.nativeElement, 'pep-grouped-field');
    }
    ngOnChanges(changes) {
        setTimeout(() => {
            const focusedFieldParent = this.groupFields.filter(groupField => groupField.lastFocusField)[0];
            if (focusedFieldParent) {
                focusedFieldParent.lastFocusField.focus();
            }
        }, 100);
    }
    ngOnDestroy() {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }
    // Not in use for material
    onBlur(e, apiName) {
        const value = e.target ? e.target.value : e;
        this.changeValue({ apiName, value }, e.relatedTarget);
    }
    onValueChange(e, apiName) {
        if (e.target) {
            const input = e.target ? e.target.value : e;
            this.changeValue({ apiName, value: input.value });
        }
        else {
            this.changeValue(e);
        }
    }
    changeValue(obj, lastFocusedField = null) {
        const currentGroupField = this.groupFields.filter(groupField => groupField.key === obj.apiName)[0];
        if (currentGroupField.value !== obj.value) {
            // Set the value in the form controls
            if (this.form) {
                const formCtrl = this.form.get(this.key);
                if (formCtrl) {
                    formCtrl.get(obj.apiName).setValue(obj.value);
                }
            }
            this.valueChanged.emit({ apiName: obj.apiName, value: obj.value, lastFocusedField });
        }
    }
}
PepperiAddressComponent.ɵfac = function PepperiAddressComponent_Factory(t) { return new (t || PepperiAddressComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
PepperiAddressComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiAddressComponent, selectors: [["pep-address"]], inputs: { key: "key", formattedValue: "formattedValue", label: "label", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", groupFields: "groupFields", form: "form", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, features: [ɵɵNgOnChangesFeature], decls: 4, vars: 4, consts: [[3, "formGroup"], [4, "ngIf"], [1, "header", 3, "label", "required", "disabled"], [1, "pepperi-address-container", 3, "formGroupName", "id", "dir"], [3, "ngSwitch", "class", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "parentFieldKey", "valueChanged", 4, "ngSwitchCase"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "parentFieldKey", "valueChanged", 4, "ngSwitchCase"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "parentFieldKey", "valueChanged"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "parentFieldKey", "valueChanged"], [1, "pepperi-card-input", 3, "title", "ngClass"], ["class", "body-xs title", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "body-xs", "title"], ["class", "body-sm", 4, "ngIf"], [1, "body-sm"]], template: function PepperiAddressComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PepperiAddressComponent_ng_container_1_Template, 4, 7, "ng-container", 1);
        ɵɵtemplate(2, PepperiAddressComponent_ng_container_2_Template, 4, 7, "ng-container", 1);
        ɵɵtemplate(3, PepperiAddressComponent_ng_container_3_Template, 3, 5, "ng-container", 1);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, PepperiFieldTitleComponent, FormGroupName, Dir, NgForOf, NgSwitch, NgSwitchCase, PepperiTextboxComponent, PepperiSelectComponent, NgClass], styles: [".header[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:3;grid-column:1/span 3}.pepperi-address-container[_ngcontent-%COMP%]{-ms-grid-columns:(1fr)[3];border-radius:var(--pep-border-radius-md,.25rem);display:-ms-grid;display:grid;grid-column-gap:var(--pep-spacing-md,.75rem);grid-row-gap:var(--pep-spacing-md,.75rem);grid-template-columns:repeat(3,1fr);padding:.875rem var(--pep-spacing-md,.75rem)}.pepperi-address-container[_ngcontent-%COMP%]   .columns-2[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1/span 2}.pepperi-address-container[_ngcontent-%COMP%]   .columns-3[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:3;grid-column:1/span 3}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiAddressComponent, [{
        type: Component,
        args: [{
                selector: 'pep-address',
                templateUrl: './address.component.html',
                styleUrls: ['./address.component.scss'],
                // host: { 'class': 'pepperi-grouped-field' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { key: [{
            type: Input
        }], formattedValue: [{
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
        }], groupFields: [{
            type: Input
        }], form: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }] }); })();

class PepperiAddressModule {
}
PepperiAddressModule.ɵmod = ɵɵdefineNgModule({ type: PepperiAddressModule });
PepperiAddressModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiAddressModule_Factory(t) { return new (t || PepperiAddressModule)(); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatFormFieldModule,
            // Pepperi modules
            PepperiModule,
            PepperiTextboxModule,
            PepperiSelectModule,
            PepperiFieldTitleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiAddressModule, { declarations: [PepperiAddressComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        // Pepperi modules
        PepperiModule,
        PepperiTextboxModule,
        PepperiSelectModule,
        PepperiFieldTitleModule], exports: [PepperiAddressComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiAddressModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules
                    MatCommonModule,
                    MatFormFieldModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiTextboxModule,
                    PepperiSelectModule,
                    PepperiFieldTitleModule
                ],
                exports: [PepperiAddressComponent],
                declarations: [PepperiAddressComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-lib/address
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiAddressComponent, PepperiAddressModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-address.js.map
