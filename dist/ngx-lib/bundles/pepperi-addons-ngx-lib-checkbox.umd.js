(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/form-field'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/field-title'), require('@ngx-translate/core'), require('@angular/cdk/bidi')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/checkbox', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/form-field', '@angular/material/checkbox', '@angular/material/icon', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/field-title', '@ngx-translate/core', '@angular/cdk/bidi'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].checkbox = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.formField, global.ng.material.checkbox, global.ng.material.icon, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib']['field-title'], global.translate, global.ng.cdk.bidi));
}(this, (function (exports, i0, i4, i3, core, formField, i6, i8, i1, i1$1, i7, i2, i5) { 'use strict';

    function PepperiCheckboxComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiCheckboxComponent_ng_template_1_ng_template_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 10);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r11.label);
        }
    }
    function PepperiCheckboxComponent_ng_template_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵlistener("click", function PepperiCheckboxComponent_ng_template_1_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.toggleChecked($event); });
            i0.ɵɵpipe(1, "translate");
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementStart(3, "button", 8);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, PepperiCheckboxComponent_ng_template_1_ng_template_2_span_5_Template, 2, 1, "span", 9);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("title", (ctx_r8.label.length > 0 ? ctx_r8.label + ": " : "") + (ctx_r8.value.toLowerCase() == "true" || ctx_r8.value == "1" ? i0.ɵɵpipeBind1(1, 4, "CHECKBOX.TRUE") : i0.ɵɵpipeBind1(2, 6, "CHECKBOX.FALSE")));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("id", ctx_r8.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r8.value.toLowerCase() == "true" || ctx_r8.value == "1" ? ctx_r8.additionalValueObject.CheckedText : ctx_r8.additionalValueObject.UncheckedText, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r8.label.length > 0 && ctx_r8.layoutType !== ctx_r8.LAYOUT_TYPE.PepperiTable);
        }
    }
    function PepperiCheckboxComponent_ng_template_1_ng_template_4_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r14.label);
        }
    }
    function PepperiCheckboxComponent_ng_template_1_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-checkbox", 11);
            i0.ɵɵlistener("change", function PepperiCheckboxComponent_ng_template_1_ng_template_4_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onMaterialChange($event); });
            i0.ɵɵpipe(1, "translate");
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵtemplate(3, PepperiCheckboxComponent_ng_template_1_ng_template_4_span_3_Template, 2, 1, "span", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("name", ctx_r10.key)("title", (ctx_r10.label.length > 0 ? ctx_r10.label + ": " : "") + (ctx_r10.value.toLowerCase() == "true" || ctx_r10.value == "1" ? i0.ɵɵpipeBind1(1, 5, "CHECKBOX.TRUE") : i0.ɵɵpipeBind1(2, 7, "CHECKBOX.FALSE")))("checked", ctx_r10.value.toLowerCase() == "true" || ctx_r10.value == "1" ? true : false)("disabled", ctx_r10.disabled);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r10.label.length > 0 && ctx_r10.layoutType !== ctx_r10.LAYOUT_TYPE.PepperiTable);
        }
    }
    var _c0 = function (a0, a1, a2, a3, a4, a5, a6) { return { "disable": a0, "pepperi-report-checkbox": a1, "pepperi-card-checkbox": a2, "one-row": a3, "no-title": a4, "right-alignment pull-right flip": a5, "center-alignment": a6 }; };
    function PepperiCheckboxComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 3);
            i0.ɵɵtemplate(1, PepperiCheckboxComponent_ng_template_1_ng_container_1_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(2, PepperiCheckboxComponent_ng_template_1_ng_template_2_Template, 6, 8, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiCheckboxComponent_ng_template_1_ng_template_4_Template, 4, 9, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r7 = i0.ɵɵreference(3);
            var _r9 = i0.ɵɵreference(5);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵpropertyInterpolate("dir", ctx_r1.xAlignment == "2" ? "rtl" : "ltr");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction7(5, _c0, ctx_r1.disabled, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable && !ctx_r1.isActive, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard, ctx_r1.rowSpan === 1, ctx_r1.label.length == 0, ctx_r1.xAlignment == "2", ctx_r1.xAlignment == "3"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.type == "booleanText")("ngIfThen", _r7)("ngIfElse", _r9);
        }
    }
    function PepperiCheckboxComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiCheckboxComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "pep-field-title", 12);
            i0.ɵɵtemplate(2, PepperiCheckboxComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r2.label)("required", ctx_r2.required)("disabled", ctx_r2.disabled)("xAlignment", ctx_r2.xAlignment)("showTitle", false);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiCheckboxComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiCheckboxComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiCheckboxComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiCheckboxComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-icon", 18);
            i0.ɵɵpipe(1, "translate");
            i0.ɵɵelement(2, "pep-icon", 19);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵpropertyInterpolate("title", i0.ɵɵpipeBind1(1, 1, "CHECKBOX.TRUE"));
        }
    }
    function PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function PepperiCheckboxComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(1, PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_1_Template, 3, 3, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, PepperiCheckboxComponent_ng_container_5_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r25 = i0.ɵɵreference(2);
            var _r27 = i0.ɵɵreference(4);
            var ctx_r21 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngIf", ctx_r21.value.toLowerCase() == "true" || ctx_r21.value == "1")("ngIfThen", _r25)("ngIfElse", _r27);
        }
    }
    function PepperiCheckboxComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiCheckboxComponent_ng_container_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiCheckboxComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 13);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiCheckboxComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiCheckboxComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(2, PepperiCheckboxComponent_ng_container_5_ng_template_2_Template, 5, 3, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiCheckboxComponent_ng_container_5_ng_template_4_Template, 1, 1, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r20 = i0.ɵɵreference(3);
            var _r22 = i0.ɵɵreference(5);
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.key === "ItemHasActiveCampaign")("ngIfThen", _r20)("ngIfElse", _r22);
        }
    }
    function PepperiCheckboxComponent_ng_container_6_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiCheckboxComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "pep-field-title", 12);
            i0.ɵɵtemplate(2, PepperiCheckboxComponent_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r5.label)("required", ctx_r5.required)("disabled", ctx_r5.disabled)("xAlignment", ctx_r5.xAlignment)("showTitle", false);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    var PepperiCheckboxComponent = /** @class */ (function () {
        function PepperiCheckboxComponent(renderer, customizationService, translate, element) {
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
            this.layoutType = i1.LAYOUT_TYPE.PepperiForm;
            this.valueChanged = new i0.EventEmitter();
            this.LAYOUT_TYPE = i1.LAYOUT_TYPE;
            this.standAlone = false;
            this.jsonLib = JSON;
        }
        PepperiCheckboxComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled, 0, '', true);
                this.renderer.addClass(this.element.nativeElement, i1.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
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
        };
        PepperiCheckboxComponent.prototype.ngOnDestroy = function () {
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
        };
        PepperiCheckboxComponent.prototype.onMaterialChange = function (e) {
            this.changeValue(e.checked);
        };
        PepperiCheckboxComponent.prototype.toggleChecked = function (event) {
            if (!this.disabled) {
                var isChecked = this.value === 'true' || this.value === '1' ? true : false;
                this.value = (!isChecked).toString();
                this.changeValue(this.value);
            }
        };
        PepperiCheckboxComponent.prototype.changeValue = function (value) {
            this.customizationService.updateFormFieldValue(this.form, this.key, value);
            this.valueChanged.emit({ apiName: this.key, value: value });
        };
        return PepperiCheckboxComponent;
    }());
    PepperiCheckboxComponent.ɵfac = function PepperiCheckboxComponent_Factory(t) { return new (t || PepperiCheckboxComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i2.TranslateService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PepperiCheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiCheckboxComponent, selectors: [["pep-checkbox"]], inputs: { key: "key", value: "value", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", additionalValue: "additionalValue", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [1, "pepperi-checkbox-container", "pepperi-input", 3, "ngClass", "dir"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["booleanTextTemplate", ""], ["regularTemplate", ""], [1, "mat-checkbox-layout", "body-sm", 3, "title", "click"], [1, "mat-icon-button", "emoji-icon", "pull-left", "flip", 3, "id"], ["class", "mat-checkbox-label emoji-title", 4, "ngIf"], [1, "mat-checkbox-label", "emoji-title"], ["type", "checkbox", 1, "body-sm", "ellipsis", 3, "name", "title", "checked", "disabled", "change"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [4, "ngTemplateOutlet"], ["itemCampaignBlock", ""], ["checkboxBlock", ""], ["trueTemplate", ""], ["falseTemplate", ""], [1, "has-active-campaign", 3, "title"], ["name", "system_bolt"]], template: function PepperiCheckboxComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, PepperiCheckboxComponent_ng_template_1_Template, 6, 13, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, PepperiCheckboxComponent_ng_container_3_Template, 3, 6, "ng-container", 2);
                i0.ɵɵtemplate(4, PepperiCheckboxComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
                i0.ɵɵtemplate(5, PepperiCheckboxComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(6, PepperiCheckboxComponent_ng_container_6_Template, 3, 6, "ng-container", 2);
                i0.ɵɵelementContainerEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.Editmodal);
            }
        }, directives: [i3.NgControlStatusGroup, i3.FormGroupDirective, i4.NgIf, i4.NgClass, i5.Dir, i6.MatCheckbox, i7.PepperiFieldTitleComponent, i4.NgTemplateOutlet, i8.MatIcon, i1$1.PepperiIconComponent], pipes: [i2.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiCheckboxComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-checkbox',
                        templateUrl: './checkbox.component.html',
                        styleUrls: ['./checkbox.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i0.Renderer2 }, { type: i1.CustomizationService }, { type: i2.TranslateService }, { type: i0.ElementRef }]; }, { key: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], type: [{
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
                }], additionalValue: [{
                    type: i0.Input
                }], form: [{
                    type: i0.Input
                }], isActive: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], valueChanged: [{
                    type: i0.Output
                }] });
    })();

    var PepperiCheckboxModule = /** @class */ (function () {
        function PepperiCheckboxModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconSystemBolt
            ]);
        }
        return PepperiCheckboxModule;
    }());
    PepperiCheckboxModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiCheckboxModule });
    PepperiCheckboxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiCheckboxModule_Factory(t) { return new (t || PepperiCheckboxModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i4.CommonModule,
                i3.ReactiveFormsModule,
                i3.FormsModule,
                // Material modules
                core.MatCommonModule,
                formField.MatFormFieldModule,
                i6.MatCheckboxModule,
                i8.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i7.PepperiFieldTitleModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiCheckboxModule, { declarations: [PepperiCheckboxComponent], imports: [i4.CommonModule,
                i3.ReactiveFormsModule,
                i3.FormsModule,
                // Material modules
                core.MatCommonModule,
                formField.MatFormFieldModule,
                i6.MatCheckboxModule,
                i8.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i7.PepperiFieldTitleModule], exports: [PepperiCheckboxComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiCheckboxModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i3.ReactiveFormsModule,
                            i3.FormsModule,
                            // Material modules
                            core.MatCommonModule,
                            formField.MatFormFieldModule,
                            i6.MatCheckboxModule,
                            i8.MatIconModule,
                            // Pepperi modules
                            i1.PepperiModule,
                            i1$1.PepperiIconModule,
                            i7.PepperiFieldTitleModule
                        ],
                        exports: [PepperiCheckboxComponent],
                        declarations: [PepperiCheckboxComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/checkbox
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiCheckboxComponent = PepperiCheckboxComponent;
    exports.PepperiCheckboxModule = PepperiCheckboxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-checkbox.umd.js.map
