(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/form-field'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/textbox'), require('@pepperi-addons/ngx-lib/select'), require('@pepperi-addons/ngx-lib/field-title'), require('@angular/cdk/bidi')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/address', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/form-field', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/textbox', '@pepperi-addons/ngx-lib/select', '@pepperi-addons/ngx-lib/field-title', '@angular/cdk/bidi'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].address = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.formField, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].textbox, global['pepperi-addons']['ngx-lib'].select, global['pepperi-addons']['ngx-lib']['field-title'], global.ng.cdk.bidi));
}(this, (function (exports, i0, i2, i1, core, formField, ngxLib, i5, i6, i3, i4) { 'use strict';

    function PepperiAddressComponent_ng_container_1_div_3_pep_textbox_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-textbox", 8);
            i0.ɵɵlistener("valueChanged", function PepperiAddressComponent_ng_container_1_div_3_pep_textbox_1_Template_pep_textbox_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var groupField_r4 = i0.ɵɵnextContext().$implicit; var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onValueChange($event, groupField_r4.key); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var groupField_r4 = i0.ɵɵnextContext().$implicit;
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("title", groupField_r4.formattedValue);
            i0.ɵɵproperty("layoutType", ctx_r6.layoutType)("form", ctx_r6.form)("key", groupField_r4.key)("value", groupField_r4.value)("formattedValue", groupField_r4.formattedValue)("label", groupField_r4.label)("placeholder", groupField_r4.placeholder)("type", groupField_r4.type)("required", groupField_r4.required)("disabled", groupField_r4.disabled)("readonly", groupField_r4.readonly)("xAlignment", groupField_r4.xAlignment)("rowSpan", groupField_r4.rowSpan)("parentFieldKey", ctx_r6.key);
        }
    }
    function PepperiAddressComponent_ng_container_1_div_3_pep_select_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-select", 9);
            i0.ɵɵlistener("valueChanged", function PepperiAddressComponent_ng_container_1_div_3_pep_select_2_Template_pep_select_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r13_1); var groupField_r4 = i0.ɵɵnextContext().$implicit; var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onValueChange($event, groupField_r4.key); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var groupField_r4 = i0.ɵɵnextContext().$implicit;
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("title", groupField_r4.formattedValue);
            i0.ɵɵproperty("layoutType", ctx_r7.layoutType)("form", ctx_r7.form)("key", groupField_r4.key)("value", groupField_r4.value)("formattedValue", groupField_r4.formattedValue)("label", groupField_r4.label)("type", groupField_r4.type)("required", groupField_r4.required)("disabled", groupField_r4.disabled)("readonly", groupField_r4.readonly)("xAlignment", groupField_r4.xAlignment)("rowSpan", groupField_r4.rowSpan)("options", groupField_r4.options)("parentFieldKey", ctx_r7.key);
        }
    }
    function PepperiAddressComponent_ng_container_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 5);
            i0.ɵɵtemplate(1, PepperiAddressComponent_ng_container_1_div_3_pep_textbox_1_Template, 1, 15, "pep-textbox", 6);
            i0.ɵɵtemplate(2, PepperiAddressComponent_ng_container_1_div_3_pep_select_2_Template, 1, 15, "pep-select", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var groupField_r4 = ctx.$implicit;
            i0.ɵɵclassMapInterpolate1("pepperi-address-field columns-", groupField_r4.colSpan, "");
            i0.ɵɵproperty("ngSwitch", groupField_r4.controlType);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "textbox");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "select");
        }
    }
    function PepperiAddressComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "pep-field-title", 2);
            i0.ɵɵelementStart(2, "div", 3);
            i0.ɵɵtemplate(3, PepperiAddressComponent_ng_container_1_div_3_Template, 3, 6, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r0.label)("required", ctx_r0.required)("disabled", ctx_r0.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("dir", ctx_r0.xAlignment === "2" ? "rtl" : "ltr");
            i0.ɵɵproperty("formGroupName", ctx_r0.key)("id", ctx_r0.key);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.groupFields);
        }
    }
    function PepperiAddressComponent_ng_container_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 13);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx_r16.label, "\u00A0");
        }
    }
    function PepperiAddressComponent_ng_container_2_ng_container_3_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 15);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var groupField_r18 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", groupField_r18.formattedValue, ",\u00A0");
        }
    }
    function PepperiAddressComponent_ng_container_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiAddressComponent_ng_container_2_ng_container_3_span_1_Template, 2, 1, "span", 14);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var groupField_r18 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (groupField_r18 == null ? null : groupField_r18.formattedValue) != "");
        }
    }
    var _c0 = function (a0) { return [a0]; };
    function PepperiAddressComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵtemplate(2, PepperiAddressComponent_ng_container_2_span_2_Template, 2, 1, "span", 11);
            i0.ɵɵtemplate(3, PepperiAddressComponent_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate2("title", "", ctx_r1.label, "\u00A0", ctx_r1.formattedValue, "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, "text-align-" + ctx_r1.xAlignment));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.label != "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r1.groupFields);
        }
    }
    function PepperiAddressComponent_ng_container_3_ng_container_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 15);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var groupField_r23 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", groupField_r23.formattedValue, ",\u00A0");
        }
    }
    function PepperiAddressComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiAddressComponent_ng_container_3_ng_container_2_span_1_Template, 2, 1, "span", 14);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var groupField_r23 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (groupField_r23 == null ? null : groupField_r23.formattedValue) != "");
        }
    }
    function PepperiAddressComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵtemplate(2, PepperiAddressComponent_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r2.formattedValue);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, "text-align-" + ctx_r2.xAlignment));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r2.groupFields);
        }
    }
    var PepperiAddressComponent = /** @class */ (function () {
        function PepperiAddressComponent(element, renderer) {
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
            this.layoutType = ngxLib.LAYOUT_TYPE.PepperiForm;
            this.valueChanged = new i0.EventEmitter();
            this.LAYOUT_TYPE = ngxLib.LAYOUT_TYPE;
        }
        PepperiAddressComponent.prototype.ngOnInit = function () {
            this.renderer.addClass(this.element.nativeElement, 'pep-grouped-field');
        };
        PepperiAddressComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            setTimeout(function () {
                var focusedFieldParent = _this.groupFields.filter(function (groupField) { return groupField.lastFocusField; })[0];
                if (focusedFieldParent) {
                    focusedFieldParent.lastFocusField.focus();
                }
            }, 100);
        };
        PepperiAddressComponent.prototype.ngOnDestroy = function () {
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
        };
        // Not in use for material
        PepperiAddressComponent.prototype.onBlur = function (e, apiName) {
            var value = e.target ? e.target.value : e;
            this.changeValue({ apiName: apiName, value: value }, e.relatedTarget);
        };
        PepperiAddressComponent.prototype.onValueChange = function (e, apiName) {
            if (e.target) {
                var input = e.target ? e.target.value : e;
                this.changeValue({ apiName: apiName, value: input.value });
            }
            else {
                this.changeValue(e);
            }
        };
        PepperiAddressComponent.prototype.changeValue = function (obj, lastFocusedField) {
            if (lastFocusedField === void 0) { lastFocusedField = null; }
            var currentGroupField = this.groupFields.filter(function (groupField) { return groupField.key === obj.apiName; })[0];
            if (currentGroupField.value !== obj.value) {
                // Set the value in the form controls
                if (this.form) {
                    var formCtrl = this.form.get(this.key);
                    if (formCtrl) {
                        formCtrl.get(obj.apiName).setValue(obj.value);
                    }
                }
                this.valueChanged.emit({ apiName: obj.apiName, value: obj.value, lastFocusedField: lastFocusedField });
            }
        };
        return PepperiAddressComponent;
    }());
    PepperiAddressComponent.ɵfac = function PepperiAddressComponent_Factory(t) { return new (t || PepperiAddressComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    PepperiAddressComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiAddressComponent, selectors: [["pep-address"]], inputs: { key: "key", formattedValue: "formattedValue", label: "label", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", groupFields: "groupFields", form: "form", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 4, consts: [[3, "formGroup"], [4, "ngIf"], [1, "header", 3, "label", "required", "disabled"], [1, "pepperi-address-container", 3, "formGroupName", "id", "dir"], [3, "ngSwitch", "class", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "parentFieldKey", "valueChanged", 4, "ngSwitchCase"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "parentFieldKey", "valueChanged", 4, "ngSwitchCase"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "parentFieldKey", "valueChanged"], [3, "layoutType", "title", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "parentFieldKey", "valueChanged"], [1, "pepperi-card-input", 3, "title", "ngClass"], ["class", "body-xs title", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "body-xs", "title"], ["class", "body-sm", 4, "ngIf"], [1, "body-sm"]], template: function PepperiAddressComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, PepperiAddressComponent_ng_container_1_Template, 4, 7, "ng-container", 1);
                i0.ɵɵtemplate(2, PepperiAddressComponent_ng_container_2_Template, 4, 7, "ng-container", 1);
                i0.ɵɵtemplate(3, PepperiAddressComponent_ng_container_3_Template, 3, 5, "ng-container", 1);
                i0.ɵɵelementContainerEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
            }
        }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i3.PepperiFieldTitleComponent, i1.FormGroupName, i4.Dir, i2.NgForOf, i2.NgSwitch, i2.NgSwitchCase, i5.PepperiTextboxComponent, i6.PepperiSelectComponent, i2.NgClass], styles: [".header[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:3;grid-column:1/span 3}.pepperi-address-container[_ngcontent-%COMP%]{-ms-grid-columns:(1fr)[3];border-radius:var(--pep-border-radius-md,.25rem);display:-ms-grid;display:grid;grid-column-gap:var(--pep-spacing-md,.75rem);grid-row-gap:var(--pep-spacing-md,.75rem);grid-template-columns:repeat(3,1fr);padding:.875rem var(--pep-spacing-md,.75rem)}.pepperi-address-container[_ngcontent-%COMP%]   .columns-2[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1/span 2}.pepperi-address-container[_ngcontent-%COMP%]   .columns-3[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:3;grid-column:1/span 3}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiAddressComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-address',
                        templateUrl: './address.component.html',
                        styleUrls: ['./address.component.scss'],
                        // host: { 'class': 'pepperi-grouped-field' },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { key: [{
                    type: i0.Input
                }], formattedValue: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], readonly: [{
                    type: i0.Input
                }], xAlignment: [{
                    type: i0.Input
                }], rowSpan: [{
                    type: i0.Input
                }], groupFields: [{
                    type: i0.Input
                }], form: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], valueChanged: [{
                    type: i0.Output
                }] });
    })();

    var PepperiAddressModule = /** @class */ (function () {
        function PepperiAddressModule() {
        }
        return PepperiAddressModule;
    }());
    PepperiAddressModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiAddressModule });
    PepperiAddressModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiAddressModule_Factory(t) { return new (t || PepperiAddressModule)(); }, imports: [[
                i2.CommonModule,
                i1.ReactiveFormsModule,
                i1.FormsModule,
                // Material modules
                core.MatCommonModule,
                formField.MatFormFieldModule,
                // Pepperi modules
                ngxLib.PepperiModule,
                i5.PepperiTextboxModule,
                i6.PepperiSelectModule,
                i3.PepperiFieldTitleModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiAddressModule, { declarations: [PepperiAddressComponent], imports: [i2.CommonModule,
                i1.ReactiveFormsModule,
                i1.FormsModule,
                // Material modules
                core.MatCommonModule,
                formField.MatFormFieldModule,
                // Pepperi modules
                ngxLib.PepperiModule,
                i5.PepperiTextboxModule,
                i6.PepperiSelectModule,
                i3.PepperiFieldTitleModule], exports: [PepperiAddressComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiAddressModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            i1.ReactiveFormsModule,
                            i1.FormsModule,
                            // Material modules
                            core.MatCommonModule,
                            formField.MatFormFieldModule,
                            // Pepperi modules
                            ngxLib.PepperiModule,
                            i5.PepperiTextboxModule,
                            i6.PepperiSelectModule,
                            i3.PepperiFieldTitleModule
                        ],
                        exports: [PepperiAddressComponent],
                        declarations: [PepperiAddressComponent],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ngx-lib/address
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiAddressComponent = PepperiAddressComponent;
    exports.PepperiAddressModule = PepperiAddressModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-address.umd.js.map
