import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@pepperi-addons/ngx-lib/field-title";
import * as i4 from "@angular/cdk/bidi";
import * as i5 from "@pepperi-addons/ngx-lib/textbox";
import * as i6 from "@pepperi-addons/ngx-lib/select";
function PepperiAddressComponent_ng_container_1_div_3_pep_textbox_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-textbox", 8);
    i0.ɵɵlistener("valueChanged", function PepperiAddressComponent_ng_container_1_div_3_pep_textbox_1_Template_pep_textbox_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r9); const groupField_r4 = i0.ɵɵnextContext().$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onValueChange($event, groupField_r4.key); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", groupField_r4.formattedValue);
    i0.ɵɵproperty("layoutType", ctx_r6.layoutType)("form", ctx_r6.form)("key", groupField_r4.key)("value", groupField_r4.value)("formattedValue", groupField_r4.formattedValue)("label", groupField_r4.label)("placeholder", groupField_r4.placeholder)("type", groupField_r4.type)("required", groupField_r4.required)("disabled", groupField_r4.disabled)("readonly", groupField_r4.readonly)("xAlignment", groupField_r4.xAlignment)("rowSpan", groupField_r4.rowSpan)("parentFieldKey", ctx_r6.key);
} }
function PepperiAddressComponent_ng_container_1_div_3_pep_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-select", 9);
    i0.ɵɵlistener("valueChanged", function PepperiAddressComponent_ng_container_1_div_3_pep_select_2_Template_pep_select_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r13); const groupField_r4 = i0.ɵɵnextContext().$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onValueChange($event, groupField_r4.key); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", groupField_r4.formattedValue);
    i0.ɵɵproperty("layoutType", ctx_r7.layoutType)("form", ctx_r7.form)("key", groupField_r4.key)("value", groupField_r4.value)("formattedValue", groupField_r4.formattedValue)("label", groupField_r4.label)("type", groupField_r4.type)("required", groupField_r4.required)("disabled", groupField_r4.disabled)("readonly", groupField_r4.readonly)("xAlignment", groupField_r4.xAlignment)("rowSpan", groupField_r4.rowSpan)("options", groupField_r4.options)("parentFieldKey", ctx_r7.key);
} }
function PepperiAddressComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, PepperiAddressComponent_ng_container_1_div_3_pep_textbox_1_Template, 1, 15, "pep-textbox", 6);
    i0.ɵɵtemplate(2, PepperiAddressComponent_ng_container_1_div_3_pep_select_2_Template, 1, 15, "pep-select", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r4 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("pepperi-address-field columns-", groupField_r4.colSpan, "");
    i0.ɵɵproperty("ngSwitch", groupField_r4.controlType);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "select");
} }
function PepperiAddressComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "pep-field-title", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, PepperiAddressComponent_ng_container_1_div_3_Template, 3, 6, "div", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r0.label)("required", ctx_r0.required)("disabled", ctx_r0.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("dir", ctx_r0.xAlignment === "2" ? "rtl" : "ltr");
    i0.ɵɵproperty("formGroupName", ctx_r0.key)("id", ctx_r0.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.groupFields);
} }
function PepperiAddressComponent_ng_container_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r16.label, "\u00A0");
} }
function PepperiAddressComponent_ng_container_2_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", groupField_r18.formattedValue, ",\u00A0");
} }
function PepperiAddressComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiAddressComponent_ng_container_2_ng_container_3_span_1_Template, 2, 1, "span", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const groupField_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (groupField_r18 == null ? null : groupField_r18.formattedValue) != "");
} }
const _c0 = function (a0) { return [a0]; };
function PepperiAddressComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtemplate(2, PepperiAddressComponent_ng_container_2_span_2_Template, 2, 1, "span", 11);
    i0.ɵɵtemplate(3, PepperiAddressComponent_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate2("title", "", ctx_r1.label, "\u00A0", ctx_r1.formattedValue, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, "text-align-" + ctx_r1.xAlignment));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.label != "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.groupFields);
} }
function PepperiAddressComponent_ng_container_3_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", groupField_r23.formattedValue, ",\u00A0");
} }
function PepperiAddressComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiAddressComponent_ng_container_3_ng_container_2_span_1_Template, 2, 1, "span", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const groupField_r23 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (groupField_r23 == null ? null : groupField_r23.formattedValue) != "");
} }
function PepperiAddressComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtemplate(2, PepperiAddressComponent_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r2.formattedValue);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, "text-align-" + ctx_r2.xAlignment));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.groupFields);
} }
export class PepperiAddressComponent {
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
PepperiAddressComponent.ɵfac = function PepperiAddressComponent_Factory(t) { return new (t || PepperiAddressComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PepperiAddressComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiAddressComponent, selectors: [["pep-address"]], inputs: { key: "key", formattedValue: "formattedValue", label: "label", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", groupFields: "groupFields", form: "form", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 4, consts: [[3, "formGroup"], [4, "ngIf"], [1, "header", 3, "label", "required", "disabled"], [1, "pepperi-address-container", 3, "formGroupName", "id", "dir"], [3, "ngSwitch", "class", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "parentFieldKey", "valueChanged", 4, "ngSwitchCase"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "parentFieldKey", "valueChanged", 4, "ngSwitchCase"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "parentFieldKey", "valueChanged"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "parentFieldKey", "valueChanged"], [1, "pepperi-card-input", 3, "title", "ngClass"], ["class", "body-xs title", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "body-xs", "title"], ["class", "body-sm", 4, "ngIf"], [1, "body-sm"]], template: function PepperiAddressComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PepperiAddressComponent_ng_container_1_Template, 4, 7, "ng-container", 1);
        i0.ɵɵtemplate(2, PepperiAddressComponent_ng_container_2_Template, 4, 7, "ng-container", 1);
        i0.ɵɵtemplate(3, PepperiAddressComponent_ng_container_3_Template, 3, 5, "ng-container", 1);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i3.PepperiFieldTitleComponent, i1.FormGroupName, i4.Dir, i2.NgForOf, i2.NgSwitch, i2.NgSwitchCase, i5.PepperiTextboxComponent, i6.PepperiSelectComponent, i2.NgClass], styles: [".header[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:3;grid-column:1/span 3}.pepperi-address-container[_ngcontent-%COMP%]{-ms-grid-columns:(1fr)[3];border-radius:var(--pep-border-radius-md,.25rem);display:-ms-grid;display:grid;grid-column-gap:var(--pep-spacing-md,.75rem);grid-row-gap:var(--pep-spacing-md,.75rem);grid-template-columns:repeat(3,1fr);padding:.875rem var(--pep-spacing-md,.75rem)}.pepperi-address-container[_ngcontent-%COMP%]   .columns-2[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1/span 2}.pepperi-address-container[_ngcontent-%COMP%]   .columns-3[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:3;grid-column:1/span 3}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiAddressComponent, [{
        type: Component,
        args: [{
                selector: 'pep-address',
                templateUrl: './address.component.html',
                styleUrls: ['./address.component.scss'],
                // host: { 'class': 'pepperi-grouped-field' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { key: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFFckosT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7O0lDTXRDLHNDQU9jO0lBRFYsa1VBQXNEO0lBQzFELGlCQUFjOzs7O0lBUG1ELCtEQUF1QztJQUFqRSw4Q0FBeUIscUJBQUEsMEJBQUEsOEJBQUEsZ0RBQUEsOEJBQUEsMENBQUEsNEJBQUEsb0NBQUEsb0NBQUEsb0NBQUEsd0NBQUEsa0NBQUEsOEJBQUE7Ozs7SUFTaEUscUNBTWE7SUFEYyxtVUFBc0Q7SUFDakYsaUJBQWE7Ozs7SUFOa0QsK0RBQXVDO0lBQWpFLDhDQUF5QixxQkFBQSwwQkFBQSw4QkFBQSxnREFBQSw4QkFBQSw0QkFBQSxvQ0FBQSxvQ0FBQSxvQ0FBQSx3Q0FBQSxrQ0FBQSxrQ0FBQSw4QkFBQTs7O0lBWGxFLDhCQUVJO0lBQUEsOEdBT0E7SUFFQSw0R0FNQTtJQUNKLGlCQUFNOzs7SUFqQkYsc0ZBQThEO0lBRDdELG9EQUFtQztJQUV2QixlQUF5QjtJQUF6Qix3Q0FBeUI7SUFTMUIsZUFBd0I7SUFBeEIsdUNBQXdCOzs7SUFoQmhELDZCQUNJO0lBQUEscUNBQ2tCO0lBQ2xCLDhCQUVJO0lBQUEsdUZBRUk7SUFpQlIsaUJBQU07SUFDViwwQkFBZTs7O0lBeEJNLGVBQWU7SUFBZixvQ0FBZSw2QkFBQSw2QkFBQTtJQUc1QixlQUE4QztJQUE5QywwRUFBOEM7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QUFFLENBQUMsQ0FBQztTQUN4RjtJQUNMLENBQUM7OzhGQXpFUSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1hwQyxnQ0FDSTtRQUFBLDBGQUNJO1FBMEJKLDBGQUNJO1FBVUosMEZBQ0k7UUFPUiwwQkFBZTs7UUEvQ0Qsb0NBQWtCO1FBQ2QsZUFBOEM7UUFBOUMscUVBQThDO1FBMkI5QyxlQUE4QztRQUE5QyxxRUFBOEM7UUFXOUMsZUFBK0M7UUFBL0Msc0VBQStDOztrREQ1QnBELHVCQUF1QjtjQVBuQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN2Qyw4Q0FBOEM7Z0JBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEO3FGQUVZLEdBQUc7a0JBQVgsS0FBSztZQUVHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUVHLElBQUk7a0JBQVosS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFFSSxZQUFZO2tCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25EZXN0cm95LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBMQVlPVVRfVFlQRSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwZXAtYWRkcmVzcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRkcmVzcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hZGRyZXNzLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICAvLyBob3N0OiB7ICdjbGFzcyc6ICdwZXBwZXJpLWdyb3VwZWQtZmllbGQnIH0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaUFkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIGtleSA9ICcnO1xyXG4gICAgLy8gQElucHV0KCkgdmFsdWUgPSAnJztcclxuICAgIEBJbnB1dCgpIGZvcm1hdHRlZFZhbHVlID0gJyc7XHJcbiAgICBASW5wdXQoKSBsYWJlbCA9ICcnO1xyXG4gICAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgeEFsaWdubWVudCA9ICcwJztcclxuICAgIEBJbnB1dCgpIHJvd1NwYW4gPSAxO1xyXG4gICAgQElucHV0KCkgZ3JvdXBGaWVsZHM6IEFycmF5PGFueT47XHJcblxyXG4gICAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGxheW91dFR5cGU6IExBWU9VVF9UWVBFID0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm07XHJcblxyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3BlcC1ncm91cGVkLWZpZWxkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkRmllbGRQYXJlbnQgPSB0aGlzLmdyb3VwRmllbGRzLmZpbHRlcihncm91cEZpZWxkID0+IGdyb3VwRmllbGQubGFzdEZvY3VzRmllbGQpWzBdO1xyXG4gICAgICAgICAgICBpZiAoZm9jdXNlZEZpZWxkUGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkRmllbGRQYXJlbnQubGFzdEZvY3VzRmllbGQuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdCBpbiB1c2UgZm9yIG1hdGVyaWFsXHJcbiAgICBvbkJsdXIoZTogYW55LCBhcGlOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0ID8gZS50YXJnZXQudmFsdWUgOiBlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUoeyBhcGlOYW1lLCB2YWx1ZSB9LCBlLnJlbGF0ZWRUYXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmFsdWVDaGFuZ2UoZTogYW55LCBhcGlOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldCA/IGUudGFyZ2V0LnZhbHVlIDogZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh7IGFwaU5hbWUsIHZhbHVlOiBpbnB1dC52YWx1ZSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWYWx1ZShvYmo6IGFueSwgbGFzdEZvY3VzZWRGaWVsZDogYW55ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRHcm91cEZpZWxkID0gdGhpcy5ncm91cEZpZWxkcy5maWx0ZXIoZ3JvdXBGaWVsZCA9PiBncm91cEZpZWxkLmtleSA9PT0gb2JqLmFwaU5hbWUpWzBdO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEdyb3VwRmllbGQudmFsdWUgIT09IG9iai52YWx1ZSkge1xyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHZhbHVlIGluIHRoZSBmb3JtIGNvbnRyb2xzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1DdHJsID0gdGhpcy5mb3JtLmdldCh0aGlzLmtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1DdHJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUN0cmwuZ2V0KG9iai5hcGlOYW1lKS5zZXRWYWx1ZShvYmoudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHsgYXBpTmFtZTogb2JqLmFwaU5hbWUsIHZhbHVlOiBvYmoudmFsdWUsIGxhc3RGb2N1c2VkRmllbGQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm1cIj5cclxuICAgICAgICA8cGVwLWZpZWxkLXRpdGxlIFtsYWJlbF09XCJsYWJlbFwiIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPC9wZXAtZmllbGQtdGl0bGU+XHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwTmFtZV09XCJrZXlcIiBbaWRdPVwia2V5XCIgY2xhc3M9XCJwZXBwZXJpLWFkZHJlc3MtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgZGlyPVwie3sgeEFsaWdubWVudCA9PT0gJzInID8gJ3J0bCcgOiAnbHRyJyB9fVwiPlxyXG4gICAgICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJncm91cEZpZWxkLmNvbnRyb2xUeXBlXCIgKm5nRm9yPVwibGV0IGdyb3VwRmllbGQgb2YgZ3JvdXBGaWVsZHM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwZXBwZXJpLWFkZHJlc3MtZmllbGQgY29sdW1ucy17eyBncm91cEZpZWxkLmNvbFNwYW4gfX1cIj5cclxuICAgICAgICAgICAgICAgIDxwZXAtdGV4dGJveCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRib3gnXCIgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiIHRpdGxlPVwie3sgZ3JvdXBGaWVsZC5mb3JtYXR0ZWRWYWx1ZSB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1dPVwiZm9ybVwiIFtrZXldPVwiZ3JvdXBGaWVsZC5rZXlcIiBbdmFsdWVdPVwiZ3JvdXBGaWVsZC52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdHRlZFZhbHVlXT1cImdyb3VwRmllbGQuZm9ybWF0dGVkVmFsdWVcIiBbbGFiZWxdPVwiZ3JvdXBGaWVsZC5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImdyb3VwRmllbGQucGxhY2Vob2xkZXJcIiBbdHlwZV09XCJncm91cEZpZWxkLnR5cGVcIiBbcmVxdWlyZWRdPVwiZ3JvdXBGaWVsZC5yZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImdyb3VwRmllbGQuZGlzYWJsZWRcIiBbcmVhZG9ubHldPVwiZ3JvdXBGaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3hBbGlnbm1lbnRdPVwiZ3JvdXBGaWVsZC54QWxpZ25tZW50XCIgW3Jvd1NwYW5dPVwiZ3JvdXBGaWVsZC5yb3dTcGFuXCIgW3BhcmVudEZpZWxkS2V5XT1cImtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlKCRldmVudCwgZ3JvdXBGaWVsZC5rZXkpXCI+XHJcbiAgICAgICAgICAgICAgICA8L3BlcC10ZXh0Ym94PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwZXAtc2VsZWN0ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiIFtsYXlvdXRUeXBlXT1cImxheW91dFR5cGVcIiB0aXRsZT1cInt7IGdyb3VwRmllbGQuZm9ybWF0dGVkVmFsdWUgfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtXT1cImZvcm1cIiBba2V5XT1cImdyb3VwRmllbGQua2V5XCIgW3ZhbHVlXT1cImdyb3VwRmllbGQudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtYXR0ZWRWYWx1ZV09XCJncm91cEZpZWxkLmZvcm1hdHRlZFZhbHVlXCIgW2xhYmVsXT1cImdyb3VwRmllbGQubGFiZWxcIiBbdHlwZV09XCJncm91cEZpZWxkLnR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJncm91cEZpZWxkLnJlcXVpcmVkXCIgW2Rpc2FibGVkXT1cImdyb3VwRmllbGQuZGlzYWJsZWRcIiBbcmVhZG9ubHldPVwiZ3JvdXBGaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3hBbGlnbm1lbnRdPVwiZ3JvdXBGaWVsZC54QWxpZ25tZW50XCIgW3Jvd1NwYW5dPVwiZ3JvdXBGaWVsZC5yb3dTcGFuXCIgW29wdGlvbnNdPVwiZ3JvdXBGaWVsZC5vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICBbcGFyZW50RmllbGRLZXldPVwia2V5XCIgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlKCRldmVudCwgZ3JvdXBGaWVsZC5rZXkpXCI+XHJcbiAgICAgICAgICAgICAgICA8L3BlcC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlDYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBlcHBlcmktY2FyZC1pbnB1dCBcIiB0aXRsZT1cInt7IGxhYmVsIH19Jm5ic3A7e3sgZm9ybWF0dGVkVmFsdWUgfX1cIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJbJ3RleHQtYWxpZ24tJyArIHhBbGlnbm1lbnRdXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibGFiZWwgIT0gJydcIiBjbGFzcz1cImJvZHkteHMgdGl0bGVcIj57eyBsYWJlbCB9fSZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZ3JvdXBGaWVsZCBvZiBncm91cEZpZWxkczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJncm91cEZpZWxkPy5mb3JtYXR0ZWRWYWx1ZSAhPSAnJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib2R5LXNtXCI+e3sgZ3JvdXBGaWVsZC5mb3JtYXR0ZWRWYWx1ZSB9fSwmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlUYWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWNhcmQtaW5wdXQgXCIgdGl0bGU9XCJ7eyBmb3JtYXR0ZWRWYWx1ZSB9fVwiIFtuZ0NsYXNzXT1cIlsndGV4dC1hbGlnbi0nICsgeEFsaWdubWVudF1cIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZ3JvdXBGaWVsZCBvZiBncm91cEZpZWxkczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJncm91cEZpZWxkPy5mb3JtYXR0ZWRWYWx1ZSAhPSAnJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib2R5LXNtXCI+e3sgZ3JvdXBGaWVsZC5mb3JtYXR0ZWRWYWx1ZSB9fSwmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=