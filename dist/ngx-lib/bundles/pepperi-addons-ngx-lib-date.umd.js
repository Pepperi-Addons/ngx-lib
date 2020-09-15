(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/datepicker'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/icon'), require('@mat-datetimepicker/core'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/textbox-icon'), require('@pepperi-addons/ngx-lib/field-title'), require('@angular/material-moment-adapter'), require('@mat-datetimepicker/moment'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/date', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/button', '@angular/material/datepicker', '@angular/material/form-field', '@angular/material/input', '@angular/material/icon', '@mat-datetimepicker/core', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/textbox-icon', '@pepperi-addons/ngx-lib/field-title', '@angular/material-moment-adapter', '@mat-datetimepicker/moment', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].date = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.button, global.ng.material.datepicker, global.ng.material.formField, global.ng.material.input, global.ng.material.icon, global['datetimepicker-core'], global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib']['textbox-icon'], global['pepperi-addons']['ngx-lib']['field-title'], global.ng.materialMomentAdapter, global['datetimepicker-moment'], global.translate));
}(this, (function (exports, i0, i5, i4, i3, i11, datepicker, i6, i7, i12, i8, i1, i1$1, i9, i10, materialMomentAdapter, moment, i2) { 'use strict';

    var _c0 = ["datetimePicker"];
    var _c1 = ["input"];
    function PepperiDateComponent_ng_template_1_pep_textbox_icon_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-textbox-icon", 11);
            i0.ɵɵlistener("iconClicked", function PepperiDateComponent_ng_template_1_pep_textbox_icon_9_Template_pep_textbox_icon_iconClicked_0_listener() { i0.ɵɵrestoreView(_r12_1); i0.ɵɵnextContext(); var _r10 = i0.ɵɵreference(12); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.openDatetimePicker(_r10); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", ctx_r8.value)("label", ctx_r8.label)("type", ctx_r8.type)("disabled", ctx_r8.disabled);
        }
    }
    function PepperiDateComponent_ng_template_1_pep_textbox_icon_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-textbox-icon", 12);
            i0.ɵɵlistener("iconClicked", function PepperiDateComponent_ng_template_1_pep_textbox_icon_10_Template_pep_textbox_icon_iconClicked_0_listener() { i0.ɵɵrestoreView(_r14_1); i0.ɵɵnextContext(); var _r10 = i0.ɵɵreference(12); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.openDatetimePicker(_r10); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", ctx_r9.value)("label", ctx_r9.label)("type", ctx_r9.type)("disabled", ctx_r9.disabled);
        }
    }
    var _c2 = function (a0, a1) { return { color: a0, "text-align": a1 }; };
    var _c3 = function () { return { standalone: true }; };
    var _c4 = function (a0) { return { field: a0 }; };
    function PepperiDateComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 3);
            i0.ɵɵelementStart(1, "input", 4, 5);
            i0.ɵɵlistener("ngModelChange", function PepperiDateComponent_ng_template_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.dateModel = $event; })("dateChange", function PepperiDateComponent_ng_template_1_Template_input_dateChange_1_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.onDateChange($event); })("click", function PepperiDateComponent_ng_template_1_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r16_1); var _r10 = i0.ɵɵreference(12); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.openDatetimePicker(_r10); })("blur", function PepperiDateComponent_ng_template_1_Template_input_blur_1_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onBlur($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-error");
            i0.ɵɵelement(4, "span", 6);
            i0.ɵɵpipe(5, "translate");
            i0.ɵɵpipe(6, "translate");
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵpipe(8, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, PepperiDateComponent_ng_template_1_pep_textbox_icon_9_Template, 1, 4, "pep-textbox-icon", 7);
            i0.ɵɵtemplate(10, PepperiDateComponent_ng_template_1_pep_textbox_icon_10_Template, 1, 4, "pep-textbox-icon", 8);
            i0.ɵɵelement(11, "mat-datetimepicker", 9, 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var showIcon_r6 = ctx.showIcon;
            var _r10 = i0.ɵɵreference(12);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r1.formattedValue);
            i0.ɵɵproperty("id", ctx_r1.key)("ngStyle", i0.ɵɵpureFunction2(27, _c2, ctx_r1.textColor, ctx_r1.xAlignment == "3" ? "center" : ctx_r1.xAlignment == "2" ? "right" : "left"))("ngModel", ctx_r1.dateModel)("ngModelOptions", i0.ɵɵpureFunction0(30, _c3))("matDatetimepicker", _r10)("min", ctx_r1.minDate)("max", ctx_r1.maxDate)("required", ctx_r1.required)("disabled", ctx_r1.disabled);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx_r1.required && ctx_r1.formattedValue.length == 0 ? i0.ɵɵpipeBind2(5, 15, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(31, _c4, ctx_r1.label)) : i0.ɵɵpipeBind2(6, 18, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(33, _c4, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.formattedValue.length == 0 ? i0.ɵɵpipeBind2(7, 21, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(35, _c4, ctx_r1.label)) : i0.ɵɵpipeBind2(8, 24, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(37, _c4, ctx_r1.label)));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", showIcon_r6 && ctx_r1.xAlignment == "2");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", showIcon_r6 && ctx_r1.xAlignment == "1" || ctx_r1.xAlignment == "0");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("type", ctx_r1.showTime ? "datetime" : "date");
        }
    }
    function PepperiDateComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c5 = function () { return { showIcon: true }; };
    function PepperiDateComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "pep-field-title", 13);
            i0.ɵɵtemplate(2, PepperiDateComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 14);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r2.label)("required", ctx_r2.required)("disabled", ctx_r2.disabled)("xAlignment", ctx_r2.xAlignment)("showTitle", ctx_r2.showTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(7, _c5));
        }
    }
    function PepperiDateComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiDateComponent_ng_container_4_ng_template_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c6 = function (a0) { return { "one-row": a0 }; };
    var _c7 = function () { return { showIcon: false }; };
    function PepperiDateComponent_ng_container_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_4_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 14);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r23 = i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c6, ctx_r23.rowSpan === 1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(5, _c7));
        }
    }
    function PepperiDateComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 23);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r27 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r27.label);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx_r27.label, "\u00A0");
        }
    }
    function PepperiDateComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 24);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var _c8 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
    function PepperiDateComponent_ng_container_4_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r30_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵlistener("click", function PepperiDateComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r30_1); var ctx_r29 = i0.ɵɵnextContext(2); return !ctx_r29.disabled ? ctx_r29.cardTemplateClicked($event) : ""; });
            i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 20);
            i0.ɵɵelementStart(2, "span", 21);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, PepperiDateComponent_ng_container_4_ng_template_4_button_4_Template, 3, 0, "button", 22);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r25 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMap("text-align-" + ctx_r25.xAlignment);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c8, ctx_r25.rowSpan === 1, ctx_r25.isActive && !ctx_r25.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r25.showTitle && ctx_r25.label != "");
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r25.formattedValue);
            i0.ɵɵproperty("id", ctx_r25.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r25.formattedValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r25.isActive && !ctx_r25.disabled);
        }
    }
    function PepperiDateComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 15);
            i0.ɵɵtemplate(2, PepperiDateComponent_ng_container_4_ng_template_2_Template, 2, 6, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiDateComponent_ng_container_4_ng_template_4_Template, 5, 11, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r22 = i0.ɵɵreference(3);
            var _r24 = i0.ɵɵreference(5);
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r22)("ngIfElse", _r24);
        }
    }
    function PepperiDateComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiDateComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiDateComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiDateComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 14);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c5));
        }
    }
    function PepperiDateComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c9 = function (a0) { return { readonly: a0 }; };
    function PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 32);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r42 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r42.formattedValue);
            i0.ɵɵproperty("id", ctx_r42.key)("ngClass", i0.ɵɵpureFunction1(4, _c9, ctx_r42.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r42.formattedValue);
        }
    }
    function PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 30);
            i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template, 3, 6, "ng-container", 31);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r39 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngSwitch", ctx_r39.type);
        }
    }
    function PepperiDateComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 33);
            i0.ɵɵtext(1, "\u00A0");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r41 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("id", ctx_r41.key);
        }
    }
    function PepperiDateComponent_ng_container_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiDateComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 15);
            i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_5_ng_template_4_ng_template_1_Template, 2, 1, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, PepperiDateComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 1, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r38 = i0.ɵɵreference(2);
            var _r40 = i0.ɵɵreference(4);
            var ctx_r35 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngIf", (ctx_r35.formattedValue == null ? null : ctx_r35.formattedValue.length) > 0)("ngIfThen", _r38)("ngIfElse", _r40);
        }
    }
    function PepperiDateComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiDateComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 15);
            i0.ɵɵtemplate(2, PepperiDateComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiDateComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r32 = i0.ɵɵreference(3);
            var _r34 = i0.ɵɵreference(5);
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r32)("ngIfElse", _r34);
        }
    }
    function PepperiDateComponent_ng_container_6_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiDateComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "pep-field-title", 13);
            i0.ɵɵtemplate(2, PepperiDateComponent_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 14);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r5.label)("required", ctx_r5.required)("disabled", ctx_r5.disabled)("xAlignment", ctx_r5.xAlignment)("showTitle", ctx_r5.showTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(7, _c5));
        }
    }
    var PepperiDateComponent = /** @class */ (function () {
        function PepperiDateComponent(element, utilitiesService, customizationService, renderer, translate, adapter) {
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
            this.layoutType = i1.LAYOUT_TYPE.PepperiForm;
            this.valueChanged = new i0.EventEmitter();
            this.LAYOUT_TYPE = i1.LAYOUT_TYPE;
            this.standAlone = false;
            this.isInEditMode = false;
            this.showDatepicker = false;
            this.showTime = false;
        }
        PepperiDateComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
                this.formattedValue = this.formattedValue || this.value;
                this.renderer.addClass(this.element.nativeElement, i1.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }
            this.showTime = this.type === 'datetime';
            if (this.minValue > 0) {
                this.minDate = new Date(this.minValue * 1000 * 60 * 60 * 24);
            }
            if (this.maxValue > 0) {
                this.maxDate = new Date(this.maxValue * 1000 * 60 * 60 * 24);
            }
            this.initDate();
        };
        PepperiDateComponent.prototype.ngOnDestroy = function () {
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
        };
        PepperiDateComponent.prototype.initDate = function () {
            var culture = this.translate.getBrowserCultureLang() || 'en-US'; // this.userLang,
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
        };
        PepperiDateComponent.prototype.openDatetimePicker = function (datetimePicker) {
            datetimePicker.opened = false;
            datetimePicker.open();
        };
        PepperiDateComponent.prototype.onBlur = function (event) {
            if (this.isInEditMode && !this.datetimePicker.opened) {
                this.isInEditMode = false;
            }
        };
        PepperiDateComponent.prototype.onDateChange = function (event) {
            var _this = this;
            var value = '';
            if (event.value != null) {
                value = this.utilitiesService.stringifyDateWithOffset(event.value.toDate(), this.showTime);
            }
            this.customizationService.updateFormFieldValue(this.form, this.key, value);
            this.valueChanged.emit({ apiName: this.key, value: value });
            if (this.isInEditMode) {
                setTimeout(function () {
                    _this.isInEditMode = false;
                }, 0);
            }
        };
        PepperiDateComponent.prototype.cardTemplateClicked = function (event) {
            var self = this;
            this.isInEditMode = true;
            setTimeout(function () {
                self.input.nativeElement.focus();
                self.openDatetimePicker(self.datetimePicker);
            }, 0);
        };
        return PepperiDateComponent;
    }());
    PepperiDateComponent.ɵfac = function PepperiDateComponent_Factory(t) { return new (t || PepperiDateComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.UtilitiesService), i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.TranslateService), i0.ɵɵdirectiveInject(i3.DateAdapter)); };
    PepperiDateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiDateComponent, selectors: [["pep-date"]], viewQuery: function PepperiDateComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
                i0.ɵɵviewQuery(_c1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datetimePicker = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
            }
        }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", minValue: "minValue", maxValue: "maxValue", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, features: [i0.ɵɵProvidersFeature([
                // CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
                // The locale would typically be provided on the root module of your application. We do it at
                // the component level here, due to limitations of our example generation script.
                // { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                { provide: i3.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter },
                {
                    provide: i3.MAT_DATE_FORMATS,
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
                { provide: i8.DatetimeAdapter, useClass: moment.MomentDatetimeAdapter },
                // { provide: MAT_DATETIME_FORMATS, useValue: MAT_NATIVE_DATETIME_FORMATS }
                {
                    provide: i8.MAT_DATETIME_FORMATS,
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
            ])], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "false", 1, "body-sm", 3, "id", "title", "ngStyle", "ngModel", "ngModelOptions", "matDatetimepicker", "min", "max", "required", "disabled", "ngModelChange", "dateChange", "click", "blur"], ["input", ""], [1, "body-xs", 3, "title", "innerText"], ["matPrefix", "", 3, "value", "label", "type", "disabled", "iconClicked", 4, "ngIf"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "iconClicked", 4, "ngIf"], ["openOnFocus", "false", "touchUi", "true", "timeInterval", "1", 3, "type"], ["datetimePicker", ""], ["matPrefix", "", 3, "value", "label", "type", "disabled", "iconClicked"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "iconClicked"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["editBlock", ""], ["readOnlyBlock", ""], [3, "ngClass"], [1, "pepperi-card-input", "card-flex-container", 3, "ngClass", "click"], ["class", "body-xs title", 3, "title", 4, "ngIf"], [1, "body-sm", "value", 3, "id", "title"], ["class", "pepperi-button weak card-edit-button", "mat-button", "", 4, "ngIf"], [1, "body-xs", "title", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button"], ["name", "system_edit"], ["selectedBlock", ""], ["notSelectedBlock", ""], ["notEmptyBlock", ""], ["emptyBlock", ""], [3, "ngSwitch"], [4, "ngSwitchDefault"], [1, "body-sm", "pepperi-report-input", 3, "id", "ngClass", "title"], [3, "id"]], template: function PepperiDateComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, PepperiDateComponent_ng_template_1_Template, 13, 39, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, PepperiDateComponent_ng_container_3_Template, 3, 8, "ng-container", 2);
                i0.ɵɵtemplate(4, PepperiDateComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(5, PepperiDateComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(6, PepperiDateComponent_ng_container_6_Template, 3, 8, "ng-container", 2);
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
        }, directives: [i4.NgControlStatusGroup, i4.FormGroupDirective, i5.NgIf, i6.MatFormField, i7.MatInput, i4.DefaultValueAccessor, i8.MatDatetimepickerInput, i5.NgStyle, i4.NgControlStatus, i4.NgModel, i4.RequiredValidator, i6.MatError, i8.MatDatetimepicker, i9.PepperiTextboxIconComponent, i6.MatPrefix, i6.MatSuffix, i10.PepperiFieldTitleComponent, i5.NgTemplateOutlet, i5.NgClass, i11.MatButton, i12.MatIcon, i1$1.PepperiIconComponent, i5.NgSwitch, i5.NgSwitchDefault], pipes: [i2.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiDateComponent, [{
                type: i0.Component,
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
                            { provide: i3.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter },
                            {
                                provide: i3.MAT_DATE_FORMATS,
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
                            { provide: i8.DatetimeAdapter, useClass: moment.MomentDatetimeAdapter },
                            // { provide: MAT_DATETIME_FORMATS, useValue: MAT_NATIVE_DATETIME_FORMATS }
                            {
                                provide: i8.MAT_DATETIME_FORMATS,
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
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i1.UtilitiesService }, { type: i1.CustomizationService }, { type: i0.Renderer2 }, { type: i2.TranslateService }, { type: i3.DateAdapter }]; }, { key: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], formattedValue: [{
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
                }], textColor: [{
                    type: i0.Input
                }], xAlignment: [{
                    type: i0.Input
                }], rowSpan: [{
                    type: i0.Input
                }], minValue: [{
                    type: i0.Input
                }], maxValue: [{
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
                }], datetimePicker: [{
                    type: i0.ViewChild,
                    args: ['datetimePicker']
                }], input: [{
                    type: i0.ViewChild,
                    args: ['input']
                }] });
    })();

    var PepperiDateModule = /** @class */ (function () {
        function PepperiDateModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconSystemEdit
            ]);
        }
        return PepperiDateModule;
    }());
    PepperiDateModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiDateModule });
    PepperiDateModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiDateModule_Factory(t) { return new (t || PepperiDateModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i5.CommonModule,
                i4.ReactiveFormsModule,
                i4.FormsModule,
                // Material modules,
                i3.MatCommonModule,
                i11.MatButtonModule,
                i3.MatNativeDateModule,
                datepicker.MatDatepickerModule,
                i8.MatDatetimepickerModule,
                i8.MatNativeDatetimeModule,
                i6.MatFormFieldModule,
                i7.MatInputModule,
                i12.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i10.PepperiFieldTitleModule,
                i9.PepperiTextboxIconModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiDateModule, { declarations: [PepperiDateComponent], imports: [i5.CommonModule,
                i4.ReactiveFormsModule,
                i4.FormsModule,
                // Material modules,
                i3.MatCommonModule,
                i11.MatButtonModule,
                i3.MatNativeDateModule,
                datepicker.MatDatepickerModule,
                i8.MatDatetimepickerModule,
                i8.MatNativeDatetimeModule,
                i6.MatFormFieldModule,
                i7.MatInputModule,
                i12.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i10.PepperiFieldTitleModule,
                i9.PepperiTextboxIconModule], exports: [PepperiDateComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiDateModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i5.CommonModule,
                            i4.ReactiveFormsModule,
                            i4.FormsModule,
                            // Material modules,
                            i3.MatCommonModule,
                            i11.MatButtonModule,
                            i3.MatNativeDateModule,
                            datepicker.MatDatepickerModule,
                            i8.MatDatetimepickerModule,
                            i8.MatNativeDatetimeModule,
                            i6.MatFormFieldModule,
                            i7.MatInputModule,
                            i12.MatIconModule,
                            // Pepperi modules
                            i1.PepperiModule,
                            i1$1.PepperiIconModule,
                            i10.PepperiFieldTitleModule,
                            i9.PepperiTextboxIconModule,
                        ],
                        exports: [PepperiDateComponent],
                        declarations: [PepperiDateComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/date
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiDateComponent = PepperiDateComponent;
    exports.PepperiDateModule = PepperiDateModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-date.umd.js.map
