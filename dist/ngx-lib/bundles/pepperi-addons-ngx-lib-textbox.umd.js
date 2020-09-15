(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/textbox-icon'), require('@pepperi-addons/ngx-lib/field-title'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/textbox', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/button', '@angular/material/form-field', '@angular/material/input', '@angular/material/icon', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/textbox-icon', '@pepperi-addons/ngx-lib/field-title', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].textbox = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.button, global.ng.material.formField, global.ng.material.input, global.ng.material.icon, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib']['textbox-icon'], global['pepperi-addons']['ngx-lib']['field-title'], global.translate));
}(this, (function (exports, i0, i3, i1, core, i8, i4, i5, i9, i2, i1$1, i7, i6, i11) { 'use strict';

    var _c0 = ["input"];
    function PepperiTextboxComponent_ng_template_1_pep_field_title_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-field-title", 13);
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r9 = i0.ɵɵreference(3);
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵproperty("label", ctx_r8.label)("required", ctx_r8.required)("disabled", ctx_r8.disabled)("maxFieldCharacters", ctx_r8.maxFieldCharacters)("xAlignment", ctx_r8.xAlignment)("showTitle", ctx_r8.showTitle)("inputLength", _r9.value == null ? null : _r9.value.length);
        }
    }
    function PepperiTextboxComponent_ng_template_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 14);
            i0.ɵɵelementStart(1, "a", 15);
            i0.ɵɵlistener("click", function PepperiTextboxComponent_ng_template_1_span_4_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r19_1); var ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.anchorClicked(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("id", ctx_r10.key)("name", ctx_r10.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r10.formattedValue, "");
        }
    }
    function PepperiTextboxComponent_ng_template_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c1 = function (a0) { return { field: a0 }; };
    function PepperiTextboxComponent_ng_template_1_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 16);
            i0.ɵɵpipe(1, "translate");
            i0.ɵɵpipe(2, "translate");
        }
        if (rf & 2) {
            var ctx_r13 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("title", i0.ɵɵpipeBind2(1, 2, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(8, _c1, ctx_r13.label)))("innerText", i0.ɵɵpipeBind2(2, 5, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(10, _c1, ctx_r13.label)));
        }
    }
    var _c2 = function (a0, a1) { return { min: a0, max: a1 }; };
    function PepperiTextboxComponent_ng_template_1_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 16);
            i0.ɵɵpipe(1, "toNumber");
            i0.ɵɵpipe(2, "toNumber");
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵpipe(5, "toNumber");
            i0.ɵɵpipe(6, "toNumber");
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵpipe(8, "translate");
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r9 = i0.ɵɵreference(3);
            var ctx_r15 = i0.ɵɵnextContext();
            i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 2, _r9.value) > ctx_r15.maxValue || i0.ɵɵpipeBind1(2, 4, _r9.value) < ctx_r15.minValue ? i0.ɵɵpipeBind2(3, 6, "MESSAGES.ERROR_RANGE_IS_NOT_VALID", i0.ɵɵpureFunction2(22, _c2, ctx_r15.minValue, ctx_r15.maxValue)) : i0.ɵɵpipeBind2(4, 9, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(25, _c1, ctx_r15.label)))("innerText", i0.ɵɵpipeBind1(5, 12, _r9.value) > ctx_r15.maxValue || i0.ɵɵpipeBind1(6, 14, _r9.value) < ctx_r15.minValue ? i0.ɵɵpipeBind2(7, 16, "MESSAGES.ERROR_RANGE_IS_NOT_VALID", i0.ɵɵpureFunction2(27, _c2, ctx_r15.minValue, ctx_r15.maxValue)) : i0.ɵɵpipeBind2(8, 19, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(30, _c1, ctx_r15.label)));
        }
    }
    function PepperiTextboxComponent_ng_template_1_pep_textbox_icon_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-textbox-icon", 17);
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", ctx_r16.value)("label", ctx_r16.label)("type", ctx_r16.type)("disabled", ctx_r16.disabled);
        }
    }
    function PepperiTextboxComponent_ng_template_1_pep_textbox_icon_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-textbox-icon", 18);
        }
        if (rf & 2) {
            var ctx_r17 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", ctx_r17.value)("label", ctx_r17.label)("type", ctx_r17.type)("disabled", ctx_r17.disabled);
        }
    }
    var _c3 = function (a0, a1) { return { color: a0, "text-align": a1 }; };
    var _c4 = function (a0) { return { "disable-hidden": a0 }; };
    function PepperiTextboxComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, PepperiTextboxComponent_ng_template_1_pep_field_title_0_Template, 1, 7, "pep-field-title", 3);
            i0.ɵɵelementStart(1, "mat-form-field", 4);
            i0.ɵɵelementStart(2, "input", 5, 6);
            i0.ɵɵlistener("keyup", function PepperiTextboxComponent_ng_template_1_Template_input_keyup_2_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onKeyUp($event); })("keypress", function PepperiTextboxComponent_ng_template_1_Template_input_keypress_2_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onKeyPress($event); })("blur", function PepperiTextboxComponent_ng_template_1_Template_input_blur_2_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onBlur($event); })("keyup.enter", function PepperiTextboxComponent_ng_template_1_Template_input_keyup_enter_2_listener($event) { i0.ɵɵrestoreView(_r21_1); return $event == null ? null : $event.currentTarget == null ? null : $event.currentTarget.blur(); })("focus", function PepperiTextboxComponent_ng_template_1_Template_input_focus_2_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onFocus($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_template_1_span_4_Template, 3, 3, "span", 7);
            i0.ɵɵelementStart(5, "mat-error");
            i0.ɵɵtemplate(6, PepperiTextboxComponent_ng_template_1_ng_container_6_Template, 1, 0, "ng-container", 8);
            i0.ɵɵtemplate(7, PepperiTextboxComponent_ng_template_1_ng_template_7_Template, 3, 12, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(9, PepperiTextboxComponent_ng_template_1_ng_template_9_Template, 9, 32, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, PepperiTextboxComponent_ng_template_1_pep_textbox_icon_11_Template, 1, 4, "pep-textbox-icon", 11);
            i0.ɵɵtemplate(12, PepperiTextboxComponent_ng_template_1_pep_textbox_icon_12_Template, 1, 4, "pep-textbox-icon", 12);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var isFormView_r6 = ctx.isFormView;
            var hasParent_r7 = ctx.hasParent;
            var _r9 = i0.ɵɵreference(3);
            var _r12 = i0.ɵɵreference(8);
            var _r14 = i0.ɵɵreference(10);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", isFormView_r6 && !hasParent_r7);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.maxFieldCharacters > 0 ? ctx_r1.maxFieldCharacters : 99999);
            i0.ɵɵpropertyInterpolate("title", ctx_r1.formattedValue);
            i0.ɵɵproperty("id", ctx_r1.key)("name", ctx_r1.key)("placeholder", hasParent_r7 && !ctx_r1.disabled ? ctx_r1.placeholder : "")("ngStyle", i0.ɵɵpureFunction2(18, _c3, ctx_r1.textColor, ctx_r1.xAlignment == "3" ? "center" : ctx_r1.xAlignment == "2" ? "right" : "left"))("formControlName", ctx_r1.key)("type", ctx_r1.type)("value", ctx_r1.type == "link" ? ctx_r1.formattedValue : ctx_r1.isFocus ? ctx_r1.value : ctx_r1.formattedValue)("disabled", ctx_r1.disabled)("ngClass", i0.ɵɵpureFunction1(21, _c4, ctx_r1.disabled && ctx_r1.formattedValue.length > 0 && (ctx_r1.type === "phone" || ctx_r1.type === "email" || ctx_r1.type === "link")));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r1.disabled && ctx_r1.formattedValue.length > 0 && (ctx_r1.type === "phone" || ctx_r1.type === "email" || ctx_r1.type === "link"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r1.required && _r9.value.length == 0)("ngIfThen", _r12)("ngIfElse", _r14);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", isFormView_r6 && ctx_r1.xAlignment == "2");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", isFormView_r6 && (ctx_r1.xAlignment == "1" || ctx_r1.xAlignment == "0"));
        }
    }
    function PepperiTextboxComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiTextboxComponent_ng_container_3_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c5 = function () { return { isFormView: true, hasParent: false }; };
    function PepperiTextboxComponent_ng_container_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiTextboxComponent_ng_container_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 21);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c5));
        }
    }
    function PepperiTextboxComponent_ng_container_3_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r33_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0, 22);
            i0.ɵɵelementStart(1, "mat-form-field", 4);
            i0.ɵɵelementStart(2, "input", 23);
            i0.ɵɵlistener("keyup", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_keyup_2_listener($event) { i0.ɵɵrestoreView(_r33_1); var ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.onKeyUp($event); })("keypress", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_keypress_2_listener($event) { i0.ɵɵrestoreView(_r33_1); var ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.onKeyPress($event); })("blur", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_blur_2_listener($event) { i0.ɵɵrestoreView(_r33_1); var ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.onBlur($event); })("keyup.enter", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_keyup_enter_2_listener($event) { i0.ɵɵrestoreView(_r33_1); return $event == null ? null : $event.currentTarget == null ? null : $event.currentTarget.blur(); })("focus", function PepperiTextboxComponent_ng_container_3_ng_template_4_Template_input_focus_2_listener($event) { i0.ɵɵrestoreView(_r33_1); var ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.onFocus($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r30 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("formGroupName", ctx_r30.parentFieldKey);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("title", ctx_r30.formattedValue);
            i0.ɵɵproperty("id", ctx_r30.key)("name", ctx_r30.key)("placeholder", !ctx_r30.disabled ? ctx_r30.placeholder : "")("formControlName", ctx_r30.key)("value", ctx_r30.value)("disabled", ctx_r30.disabled);
        }
    }
    function PepperiTextboxComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 8);
            i0.ɵɵtemplate(2, PepperiTextboxComponent_ng_container_3_ng_template_2_Template, 1, 3, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_container_3_ng_template_4_Template, 3, 8, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r27 = i0.ɵɵreference(3);
            var _r29 = i0.ɵɵreference(5);
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.parentFieldKey)("ngIfThen", _r29)("ngIfElse", _r27);
        }
    }
    function PepperiTextboxComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiTextboxComponent_ng_container_4_ng_template_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c6 = function (a0) { return { "one-row": a0 }; };
    var _c7 = function () { return { isFormView: false, hasParent: false }; };
    function PepperiTextboxComponent_ng_container_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 26);
            i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_4_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r40 = i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c6, ctx_r40.rowSpan === 1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(5, _c7));
        }
    }
    function PepperiTextboxComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 31);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r44 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r44.label);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx_r44.label, "\u00A0");
        }
    }
    function PepperiTextboxComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 32);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var _c8 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
    function PepperiTextboxComponent_ng_container_4_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r47_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 27);
            i0.ɵɵlistener("click", function PepperiTextboxComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r47_1); var ctx_r46 = i0.ɵɵnextContext(2); return !ctx_r46.disabled ? ctx_r46.cardTemplateClicked($event) : ""; });
            i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 28);
            i0.ɵɵelementStart(2, "span", 29);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_container_4_ng_template_4_button_4_Template, 3, 0, "button", 30);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r42 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMap("text-align-" + ctx_r42.xAlignment);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c8, ctx_r42.rowSpan === 1, ctx_r42.isActive && !ctx_r42.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r42.showTitle && ctx_r42.label != "");
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r42.formattedValue);
            i0.ɵɵproperty("id", ctx_r42.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r42.formattedValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r42.isActive && !ctx_r42.disabled);
        }
    }
    function PepperiTextboxComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 8);
            i0.ɵɵtemplate(2, PepperiTextboxComponent_ng_container_4_ng_template_2_Template, 2, 6, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_container_4_ng_template_4_Template, 5, 11, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r39 = i0.ɵɵreference(3);
            var _r41 = i0.ɵɵreference(5);
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r39)("ngIfElse", _r41);
        }
    }
    function PepperiTextboxComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiTextboxComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiTextboxComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiTextboxComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 21);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c7));
        }
    }
    function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c9 = function (a0) { return { "disable": a0 }; };
    function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 42);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r61 = i0.ɵɵnextContext(5);
            i0.ɵɵpropertyInterpolate("title", ctx_r61.formattedValue);
            i0.ɵɵpropertyInterpolate("href", ctx_r61.value ? ctx_r61.value : ctx_r61.formattedValue, i0.ɵɵsanitizeUrl);
            i0.ɵɵproperty("id", ctx_r61.key)("ngClass", i0.ɵɵpureFunction1(5, _c9, ctx_r61.disabled && ctx_r61.value === ""));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r61.formattedValue);
        }
    }
    function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_a_1_Template, 2, 7, "a", 41);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r59 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r59.formattedValue != null);
        }
    }
    var _c10 = function (a0) { return { "readonly": a0 }; };
    var _c11 = function (a0) { return { color: a0 }; };
    function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 43);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r60 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r60.formattedValue);
            i0.ɵɵproperty("id", ctx_r60.key)("ngClass", i0.ɵɵpureFunction1(5, _c10, ctx_r60.disabled))("ngStyle", i0.ɵɵpureFunction1(7, _c11, ctx_r60.textColor));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r60.formattedValue);
        }
    }
    function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 38);
            i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 39);
            i0.ɵɵtemplate(2, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_ng_container_2_Template, 3, 9, "ng-container", 40);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r56 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngSwitch", ctx_r56.type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "link");
        }
    }
    function PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 44);
            i0.ɵɵtext(1, "\u00A0");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r58 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("id", ctx_r58.key);
        }
    }
    function PepperiTextboxComponent_ng_container_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 8);
            i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_1_Template, 3, 2, "ng-template", null, 36, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, PepperiTextboxComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 1, "ng-template", null, 37, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r55 = i0.ɵɵreference(2);
            var _r57 = i0.ɵɵreference(4);
            var ctx_r52 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngIf", (ctx_r52.formattedValue == null ? null : ctx_r52.formattedValue.length) > 0)("ngIfThen", _r55)("ngIfElse", _r57);
        }
    }
    function PepperiTextboxComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 8);
            i0.ɵɵtemplate(2, PepperiTextboxComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 34, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r49 = i0.ɵɵreference(3);
            var _r51 = i0.ɵɵreference(5);
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r49)("ngIfElse", _r51);
        }
    }
    function PepperiTextboxComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiTextboxComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c5));
        }
    }
    var PepperiTextboxComponent = /** @class */ (function () {
        function PepperiTextboxComponent(fb, customizationService, renderer, element) {
            this.fb = fb;
            this.customizationService = customizationService;
            this.renderer = renderer;
            this.element = element;
            this.key = '';
            this.value = '';
            this.formattedValue = '';
            this.label = '';
            this.placeholder = '';
            this.type = 'text';
            this.required = false;
            this.disabled = false;
            this.readonly = false;
            this.textColor = '';
            this.xAlignment = '0';
            this.rowSpan = 1;
            this.minValue = NaN;
            this.maxValue = NaN;
            this.controlType = 'textbox';
            this.form = null;
            this.isActive = false;
            this.showTitle = true;
            this.layoutType = i2.LAYOUT_TYPE.PepperiForm;
            this.parentFieldKey = null;
            this.valueChanged = new i0.EventEmitter();
            this.formValidationChanged = new i0.EventEmitter();
            this.LAYOUT_TYPE = i2.LAYOUT_TYPE;
            this.standAlone = false;
            this.isInEditMode = false;
            this.isFocus = false;
        }
        PepperiTextboxComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                this.standAlone = true;
                this.minValue = isNaN(this.minValue) && !isNaN(this.maxValue) ? 0 : this.minValue;
                this.maxValue = isNaN(this.maxValue) && !isNaN(this.minValue) ? 99999 : this.maxValue;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled, this.maxFieldCharacters, this.type, false, true, this.minValue, this.maxValue);
                this.formattedValue = this.formattedValue || this.value;
                this.renderer.addClass(this.element.nativeElement, i2.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }
            this.readonly = this.type === 'duration' ? true : this.readonly; // Hack until we develop Timer UI for editing Duration field
        };
        PepperiTextboxComponent.prototype.ngOnChanges = function (changes) {
            this.readonly = this.type === 'duration' ? true : this.readonly; // Hack until we develop Timer UI for editing Duration field
            var self = this;
            setTimeout(function () {
                if (self.lastFocusField) {
                    self.lastFocusField.focus();
                    self.lastFocusField = null;
                }
                else {
                }
            }, 100);
        };
        PepperiTextboxComponent.prototype.ngOnDestroy = function () {
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
            if (this.formValidationChanged) {
                this.formValidationChanged.unsubscribe();
            }
        };
        PepperiTextboxComponent.prototype.onFocus = function (e) {
            this.isFocus = true;
        };
        PepperiTextboxComponent.prototype.onBlur = function (e) {
            this.isFocus = false;
            var value = e.target ? e.target.value : e;
            if (value !== this.value) {
                this.formattedValue = this.value = value;
                // There is formControl.setValue in the onKeyUp so we don't need it here.
                // this.propagateChange(value, e.relatedTarget);
                this.valueChanged.emit({
                    apiName: this.key,
                    value: value,
                    lastFocusedField: e.relatedTarget
                });
                // return true; // What this is for? Tomer.p comment this in 16.4.
            }
            if (this.isInEditMode) {
                this.isInEditMode = false;
            }
        };
        PepperiTextboxComponent.prototype.onKeyUp = function (event) {
            var value = event.target ? event.target.value : event;
            this.customizationService.updateFormFieldValue(this.form, this.key, value, this.parentFieldKey);
            this.formValidationChanged.emit(this.form.valid);
        };
        PepperiTextboxComponent.prototype.onKeyPress = function (event) {
            var inputChar = String.fromCharCode(event.charCode);
            var e = event;
            if ([8, 9, 13, 27, 190].indexOf(e.which) !== -1 ||
                // Allow: Ctrl+A
                (e.which === 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.which === 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+V
                (e.which === 86 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.which === 88 && e.ctrlKey === true) /*||
        // Allow: home, end, left, right
        (e.which >= 35 && e.which <= 39)*/) {
                // let it happen, don't do anything
                return true;
            }
            switch (this.type) {
                case 'int': {
                    var pattern = /[0-9\+\-\ ]/;
                    if (!pattern.test(inputChar)) {
                        e.preventDefault();
                    }
                    break;
                }
                case 'currency':
                case 'real': {
                    var decPoint = '.';
                    var thousandSeparator = ',';
                    var pattern = /^\d+(\.\d{1,9})?$/;
                    if (e.which === 46) {
                        inputChar = inputChar + '0';
                    }
                    else if (e.which === 44) {
                        inputChar = inputChar + '000';
                    }
                    if (!pattern.test(event.target.value + inputChar)) {
                        e.preventDefault();
                    }
                    break;
                }
                case 'phone': {
                    var pattern = /^[\d\.\-\+\(\)\*\#]+$/;
                    if (!pattern.test(event.target.value + inputChar)) {
                        e.preventDefault();
                    }
                    break;
                }
                case 'text': {
                    // if (this.maxFieldCharacters !== 0 && event.target.value.length >= this.maxFieldCharacters) {
                    //     e.preventDefault();
                    // }
                    break;
                }
            }
        };
        PepperiTextboxComponent.prototype.anchorClicked = function () {
            var currentValue = this.value;
            if (currentValue.trim().length > 0) {
                switch (this.type) {
                    case 'email':
                        window.open('mailto:' + currentValue, 'email');
                        break;
                    case 'phone':
                        window.open('tel:' + currentValue, 'tel');
                        break;
                    case 'link':
                        window.open(currentValue);
                        break;
                    default:
                        break;
                }
            }
        };
        PepperiTextboxComponent.prototype.cardTemplateClicked = function (event) {
            var self = this;
            this.isInEditMode = true;
            setTimeout(function () {
                self.input.nativeElement.focus();
            }, 0);
        };
        return PepperiTextboxComponent;
    }());
    PepperiTextboxComponent.ɵfac = function PepperiTextboxComponent_Factory(t) { return new (t || PepperiTextboxComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PepperiTextboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiTextboxComponent, selectors: [["pep-textbox"]], viewQuery: function PepperiTextboxComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
            }
        }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", placeholder: "placeholder", type: "type", required: "required", disabled: "disabled", readonly: "readonly", maxFieldCharacters: "maxFieldCharacters", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", lastFocusField: "lastFocusField", minValue: "minValue", maxValue: "maxValue", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType", parentFieldKey: "parentFieldKey" }, outputs: { valueChanged: "valueChanged", formValidationChanged: "formValidationChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", 1, "body-sm", 3, "id", "name", "maxlength", "placeholder", "ngStyle", "title", "formControlName", "type", "value", "disabled", "ngClass", "keyup", "keypress", "blur", "keyup.enter", "focus"], ["input", ""], ["class", "dis-grid", 4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["requiredError", ""], ["otherError", ""], ["matPrefix", "", 3, "value", "label", "type", "disabled", 4, "ngIf"], ["matSuffix", "", 3, "value", "label", "type", "disabled", 4, "ngIf"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength"], [1, "dis-grid"], ["href", "javascript:void(0)", 1, "color-link", "body-sm", 3, "id", "name", "click"], [1, "body-xs", 3, "title", "innerText"], ["matPrefix", "", 3, "value", "label", "type", "disabled"], ["matSuffix", "", 3, "value", "label", "type", "disabled"], ["regularBlock", ""], ["groupedBlock", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "formGroupName"], ["matInput", "", "autocomplete", "off", 1, "body-sm", 3, "id", "name", "placeholder", "title", "formControlName", "value", "disabled", "keyup", "keypress", "blur", "keyup.enter", "focus"], ["editBlock", ""], ["readOnlyBlock", ""], [3, "ngClass"], [1, "pepperi-card-input", "card-flex-container", 3, "ngClass", "click"], ["class", "body-xs title", 3, "title", 4, "ngIf"], [1, "body-sm", "value", 3, "id", "title"], ["class", "pepperi-button weak card-edit-button", "mat-button", "", 4, "ngIf"], [1, "body-xs", "title", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button"], ["name", "system_edit"], ["selectedBlock", ""], ["notSelectedBlock", ""], ["notEmptyBlock", ""], ["emptyBlock", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "color-link body-sm pepperi-report-input", "target", "_blank", 3, "id", "ngClass", "title", "href", 4, "ngIf"], ["target", "_blank", 1, "color-link", "body-sm", "pepperi-report-input", 3, "id", "ngClass", "title", "href"], [1, "body-sm", "pepperi-report-input", 3, "id", "ngClass", "title", "ngStyle"], [3, "id"]], template: function PepperiTextboxComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, PepperiTextboxComponent_ng_template_1_Template, 13, 23, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, PepperiTextboxComponent_ng_container_3_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(4, PepperiTextboxComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(5, PepperiTextboxComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(6, PepperiTextboxComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
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
        }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i3.NgIf, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.MaxLengthValidator, i3.NgStyle, i1.NgControlStatus, i1.FormControlName, i3.NgClass, i4.MatError, i6.PepperiFieldTitleComponent, i7.PepperiTextboxIconComponent, i4.MatPrefix, i4.MatSuffix, i3.NgTemplateOutlet, i1.FormGroupName, i8.MatButton, i9.MatIcon, i1$1.PepperiIconComponent, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault], pipes: [i11.TranslatePipe, i2.ToNumber], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.disable-hidden[_ngcontent-%COMP%]{display:none}.dis-grid[_ngcontent-%COMP%]{display:-ms-grid;display:grid}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiTextboxComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-textbox',
                        templateUrl: './textbox.component.html',
                        styleUrls: ['./textbox.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1.FormBuilder }, { type: i2.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], formattedValue: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], readonly: [{
                    type: i0.Input
                }], maxFieldCharacters: [{
                    type: i0.Input
                }], textColor: [{
                    type: i0.Input
                }], xAlignment: [{
                    type: i0.Input
                }], rowSpan: [{
                    type: i0.Input
                }], lastFocusField: [{
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
                }], parentFieldKey: [{
                    type: i0.Input
                }], valueChanged: [{
                    type: i0.Output
                }], formValidationChanged: [{
                    type: i0.Output
                }], input: [{
                    type: i0.ViewChild,
                    args: ['input']
                }] });
    })();

    var PepperiTextboxModule = /** @class */ (function () {
        function PepperiTextboxModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconSystemEdit
            ]);
        }
        return PepperiTextboxModule;
    }());
    PepperiTextboxModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiTextboxModule });
    PepperiTextboxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiTextboxModule_Factory(t) { return new (t || PepperiTextboxModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i3.CommonModule,
                i1.ReactiveFormsModule,
                i1.FormsModule,
                // Material modules,
                core.MatCommonModule,
                i8.MatButtonModule,
                i4.MatFormFieldModule,
                i5.MatInputModule,
                i9.MatIconModule,
                // Pepperi modules
                i2.PepperiModule,
                i1$1.PepperiIconModule,
                i6.PepperiFieldTitleModule,
                i7.PepperiTextboxIconModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiTextboxModule, { declarations: [PepperiTextboxComponent], imports: [i3.CommonModule,
                i1.ReactiveFormsModule,
                i1.FormsModule,
                // Material modules,
                core.MatCommonModule,
                i8.MatButtonModule,
                i4.MatFormFieldModule,
                i5.MatInputModule,
                i9.MatIconModule,
                // Pepperi modules
                i2.PepperiModule,
                i1$1.PepperiIconModule,
                i6.PepperiFieldTitleModule,
                i7.PepperiTextboxIconModule], exports: [PepperiTextboxComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiTextboxModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i1.ReactiveFormsModule,
                            i1.FormsModule,
                            // Material modules,
                            core.MatCommonModule,
                            i8.MatButtonModule,
                            i4.MatFormFieldModule,
                            i5.MatInputModule,
                            i9.MatIconModule,
                            // Pepperi modules
                            i2.PepperiModule,
                            i1$1.PepperiIconModule,
                            i6.PepperiFieldTitleModule,
                            i7.PepperiTextboxIconModule
                        ],
                        exports: [PepperiTextboxComponent,],
                        declarations: [PepperiTextboxComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/textbox
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiTextboxComponent = PepperiTextboxComponent;
    exports.PepperiTextboxModule = PepperiTextboxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-textbox.umd.js.map
