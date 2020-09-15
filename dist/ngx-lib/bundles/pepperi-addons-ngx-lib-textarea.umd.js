(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/textbox-icon'), require('@pepperi-addons/ngx-lib/field-title'), require('@pepperi-addons/ngx-lib/dialog'), require('@angular/cdk/bidi'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/textarea', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/button', '@angular/material/form-field', '@angular/material/input', '@angular/material/icon', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/textbox-icon', '@pepperi-addons/ngx-lib/field-title', '@pepperi-addons/ngx-lib/dialog', '@angular/cdk/bidi', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].textarea = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.button, global.ng.material.formField, global.ng.material.input, global.ng.material.icon, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib']['textbox-icon'], global['pepperi-addons']['ngx-lib']['field-title'], global['pepperi-addons']['ngx-lib'].dialog, global.ng.cdk.bidi, global.translate));
}(this, (function (exports, i0, i4, i3, core, i10, i5, i7, i11, i2, i1, i8, i9, i1$1, i6, i13) { 'use strict';

    var _c0 = ["input"];
    function PepperiTextareaComponent_ng_template_1_pep_field_title_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-field-title", 11);
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r8 = i0.ɵɵreference(4);
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵproperty("label", ctx_r7.label)("required", ctx_r7.required)("disabled", ctx_r7.disabled)("maxFieldCharacters", ctx_r7.maxFieldCharacters)("xAlignment", ctx_r7.xAlignment)("showTitle", ctx_r7.showTitle)("inputLength", _r8.value == null ? null : _r8.value.length);
        }
    }
    var _c1 = function (a1) { return { color: "textColor", "text-align": a1 }; };
    function PepperiTextareaComponent_ng_template_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 12);
            i0.ɵɵpipe(1, "safeHtml");
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵstyleProp("height", ctx_r9.fieldHeight);
            i0.ɵɵpropertyInterpolate("title", ctx_r9.value);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(7, _c1, ctx_r9.xAlignment == "2" ? "right" : "left"))("innerHtml", i0.ɵɵpipeBind1(1, 5, ctx_r9.value), i0.ɵɵsanitizeHtml);
        }
    }
    var _c2 = function (a0, a1, a2, a3) { return { "right-alignment": a0, "one-row": a1, "stand-alone": a2, "pepperi-textarea-card-container": a3 }; };
    var _c3 = function (a0) { return { "pepperi-table-textarea": a0 }; };
    var _c4 = function (a0) { return { "card-one-row-icon": a0 }; };
    var _c5 = function (a0) { return { field: a0 }; };
    function PepperiTextareaComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 3);
            i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_template_1_pep_field_title_1_Template, 1, 7, "pep-field-title", 4);
            i0.ɵɵelementStart(2, "mat-form-field", 5);
            i0.ɵɵelementStart(3, "textarea", 6, 7);
            i0.ɵɵlistener("blur", function PepperiTextareaComponent_ng_template_1_Template_textarea_blur_3_listener($event) { i0.ɵɵrestoreView(_r11_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onBlur($event); });
            i0.ɵɵtext(5, "                ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, PepperiTextareaComponent_ng_template_1_div_6_Template, 2, 9, "div", 8);
            i0.ɵɵelementStart(7, "pep-textbox-icon", 9);
            i0.ɵɵlistener("iconClicked", function PepperiTextareaComponent_ng_template_1_Template_pep_textbox_icon_iconClicked_7_listener() { i0.ɵɵrestoreView(_r11_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.openDialog(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-error");
            i0.ɵɵelement(9, "span", 10);
            i0.ɵɵpipe(10, "translate");
            i0.ɵɵpipe(11, "translate");
            i0.ɵɵpipe(12, "translate");
            i0.ɵɵpipe(13, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var isFormView_r6 = ctx.isFormView;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(34, _c2, ctx_r1.xAlignment == "2", ctx_r1.rowSpan === 1, ctx_r1.standAlone, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", isFormView_r6);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("dir", ctx_r1.xAlignment == "2" ? "rtl" : "ltr");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(39, _c3, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable));
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("height", ctx_r1.fieldHeight);
            i0.ɵɵpropertyInterpolate("title", ctx_r1.value);
            i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.maxFieldCharacters > 0 ? ctx_r1.maxFieldCharacters : 99999);
            i0.ɵɵproperty("hidden", ctx_r1.readonly)("id", ctx_r1.key)("value", ctx_r1.value)("ngStyle", i0.ɵɵpureFunction1(41, _c1, ctx_r1.xAlignment == "2" ? "right" : "left"))("formControlName", ctx_r1.key)("disabled", ctx_r1.disabled);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r1.readonly);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r1.value)("label", ctx_r1.label)("type", ctx_r1.controlType)("disabled", ctx_r1.disabled)("ngClass", i0.ɵɵpureFunction1(43, _c4, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard && ctx_r1.rowSpan === 1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ctx_r1.required && ctx_r1.value.length == 0 ? i0.ɵɵpipeBind2(10, 22, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(45, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(11, 25, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(47, _c5, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.value.length == 0 ? i0.ɵɵpipeBind2(12, 28, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(49, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(13, 31, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(51, _c5, ctx_r1.label)));
        }
    }
    function PepperiTextareaComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c6 = function () { return { isFormView: true }; };
    function PepperiTextareaComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c6));
        }
    }
    function PepperiTextareaComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiTextareaComponent_ng_container_4_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c7 = function () { return { isFormView: false }; };
    function PepperiTextareaComponent_ng_container_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiTextareaComponent_ng_container_4_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c7));
        }
    }
    function PepperiTextareaComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 21);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r20 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r20.label);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx_r20.label, "\u00A0");
        }
    }
    var _c8 = function (a0) { return { "self-end": a0 }; };
    function PepperiTextareaComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 22);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r21 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c8, ctx_r21.value && ctx_r21.value !== ""));
        }
    }
    var _c9 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
    var _c10 = function (a0) { return { "-webkit-line-clamp": a0 }; };
    function PepperiTextareaComponent_ng_container_4_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵlistener("click", function PepperiTextareaComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(2); return !ctx_r22.disabled ? ctx_r22.cardTemplateClicked($event) : ""; });
            i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 18);
            i0.ɵɵelementStart(2, "span", 19);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, PepperiTextareaComponent_ng_container_4_ng_template_4_button_4_Template, 3, 3, "button", 20);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMap("text-align-" + ctx_r18.xAlignment);
            i0.ɵɵstyleProp("height", ctx_r18.fieldHeight);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(11, _c9, ctx_r18.rowSpan === 1, ctx_r18.isActive && !ctx_r18.disabled))("ngStyle", i0.ɵɵpureFunction1(14, _c10, ctx_r18.rowSpan));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r18.showTitle && ctx_r18.label != "");
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r18.value);
            i0.ɵɵproperty("id", ctx_r18.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r18.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r18.isActive && !ctx_r18.disabled);
        }
    }
    function PepperiTextareaComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 14);
            i0.ɵɵtemplate(2, PepperiTextareaComponent_ng_container_4_ng_template_2_Template, 1, 3, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiTextareaComponent_ng_container_4_ng_template_4_Template, 5, 16, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r15 = i0.ɵɵreference(3);
            var _r17 = i0.ɵɵreference(5);
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r15)("ngIfElse", _r17);
        }
    }
    function PepperiTextareaComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiTextareaComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c7));
        }
    }
    function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r38_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-textbox-icon", 32);
            i0.ɵɵlistener("iconClicked", function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_2_Template_pep_textbox_icon_iconClicked_0_listener() { i0.ɵɵrestoreView(_r38_1); var ctx_r37 = i0.ɵɵnextContext(4); return ctx_r37.openDialog(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r35 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("value", ctx_r35.value)("label", ctx_r35.label)("type", ctx_r35.controlType)("disabled", ctx_r35.disabled);
        }
    }
    function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r40_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-textbox-icon", 33);
            i0.ɵɵlistener("iconClicked", function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_3_Template_pep_textbox_icon_iconClicked_0_listener() { i0.ɵɵrestoreView(_r40_1); var ctx_r39 = i0.ɵɵnextContext(4); return ctx_r39.openDialog(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r36 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("value", ctx_r36.value)("label", ctx_r36.label)("type", ctx_r36.controlType)("disabled", ctx_r36.disabled);
        }
    }
    var _c11 = function (a0) { return { readonly: a0 }; };
    var _c12 = function (a0, a1) { return { color: a0, "text-align": a1 }; };
    function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 28);
            i0.ɵɵelement(1, "input", 29);
            i0.ɵɵtemplate(2, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_2_Template, 1, 4, "pep-textbox-icon", 30);
            i0.ɵɵtemplate(3, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_pep_textbox_icon_3_Template, 1, 4, "pep-textbox-icon", 31);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r32 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("dir", ctx_r32.xAlignment == "2" ? "rtl" : "ltr");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c11, ctx_r32.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r32.value);
            i0.ɵɵproperty("id", ctx_r32.key)("ngClass", i0.ɵɵpureFunction1(13, _c11, ctx_r32.disabled))("ngStyle", i0.ɵɵpureFunction2(15, _c12, ctx_r32.textColor, ctx_r32.xAlignment == "3" ? "center" : ctx_r32.xAlignment == "2" ? "right" : "left"))("formControlName", ctx_r32.key)("value", ctx_r32.value)("disabled", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r32.disabled && ctx_r32.xAlignment == "2");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r32.disabled && (ctx_r32.xAlignment == "1" || ctx_r32.xAlignment == "0"));
        }
    }
    function PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function PepperiTextareaComponent_ng_container_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 14);
            i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template, 4, 18, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, PepperiTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 0, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r31 = i0.ɵɵreference(2);
            var _r33 = i0.ɵɵreference(4);
            var ctx_r28 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngIf", (ctx_r28.value == null ? null : ctx_r28.value.length) > 0)("ngIfThen", _r31)("ngIfElse", _r33);
        }
    }
    function PepperiTextareaComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 14);
            i0.ɵɵtemplate(2, PepperiTextareaComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiTextareaComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r25 = i0.ɵɵreference(3);
            var _r27 = i0.ɵɵreference(5);
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r25)("ngIfElse", _r27);
        }
    }
    function PepperiTextareaComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiTextareaComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c6));
        }
    }
    var PepperiTextareaComponent = /** @class */ (function () {
        function PepperiTextareaComponent(dialogService, customizationService, renderer, element) {
            this.dialogService = dialogService;
            this.customizationService = customizationService;
            this.renderer = renderer;
            this.element = element;
            this.key = '';
            this.value = '';
            this.label = '';
            this.required = false;
            this.disabled = false;
            this.readonly = false;
            this.textColor = '';
            this.xAlignment = '0';
            this.rowSpan = 1;
            this.controlType = 'textarea';
            this.form = null;
            this.isActive = false;
            this.showTitle = true;
            this.layoutType = i2.LAYOUT_TYPE.PepperiForm;
            this.valueChanged = new i0.EventEmitter();
            this.LAYOUT_TYPE = i2.LAYOUT_TYPE;
            this.fieldHeight = '';
            this.standAlone = false;
            this.isInEditMode = false;
        }
        PepperiTextareaComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled, this.maxFieldCharacters);
                this.renderer.addClass(this.element.nativeElement, i2.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }
            this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
        };
        PepperiTextareaComponent.prototype.ngOnChanges = function (changes) {
            var self = this;
            setTimeout(function () {
                if (self.lastFocusField) {
                    self.lastFocusField.focus();
                    self.lastFocusField = null;
                }
            }, 100);
        };
        PepperiTextareaComponent.prototype.ngOnDestroy = function () {
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
        };
        PepperiTextareaComponent.prototype.onBlur = function (event) {
            var _this = this;
            var value = event.target ? event.target.value : event;
            this.changeValue(value, event.relatedTarget);
            setTimeout(function () {
                if (_this.isInEditMode) {
                    _this.isInEditMode = false;
                }
            }, 0);
        };
        PepperiTextareaComponent.prototype.changeValue = function (value, lastFocusedField) {
            if (lastFocusedField === void 0) { lastFocusedField = null; }
            if (value !== this.value) {
                this.value = value;
                this.customizationService.updateFormFieldValue(this.form, this.key, value);
                this.valueChanged.emit({ apiName: this.key, value: value, lastFocusedField: lastFocusedField });
            }
        };
        PepperiTextareaComponent.prototype.cardTemplateClicked = function (event) {
            this.openDialog();
        };
        PepperiTextareaComponent.prototype.openDialog = function () {
            var _this = this;
            // TODO:
            var data = new i1$1.DialogData({
                title: this.label,
                content: this.value,
                contentType: i1$1.DialogDataType.TextArea,
                contentData: { key: this.key, disabled: this.disabled },
                showFooter: true
            });
            var config = this.dialogService.getDialogConfig({
                maxWidth: '90vw',
                maxHeight: '90vh'
            });
            var dialogRef = this.dialogService.openDefaultDialog(data, config);
            dialogRef.afterClosed().subscribe(function (value) {
                if (value !== undefined && value !== null) {
                    _this.changeValue(value);
                }
            });
        };
        return PepperiTextareaComponent;
    }());
    PepperiTextareaComponent.ɵfac = function PepperiTextareaComponent_Factory(t) { return new (t || PepperiTextareaComponent)(i0.ɵɵdirectiveInject(i1$1.DialogService), i0.ɵɵdirectiveInject(i2.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PepperiTextareaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiTextareaComponent, selectors: [["pep-textarea"]], viewQuery: function PepperiTextareaComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
            }
        }, inputs: { key: "key", value: "value", label: "label", required: "required", disabled: "disabled", readonly: "readonly", maxFieldCharacters: "maxFieldCharacters", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", lastFocusField: "lastFocusField", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [1, "pepperi-textarea-container", 3, "ngClass"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength", 4, "ngIf"], ["appearance", "outline", 3, "dir", "ngClass"], ["matInput", "", 1, "body-sm", 3, "hidden", "id", "title", "value", "maxlength", "ngStyle", "formControlName", "disabled", "blur"], ["input", ""], ["class", "body-sm disable-text-div", 3, "title", "ngStyle", "innerHtml", "height", 4, "ngIf"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "ngClass", "iconClicked"], [1, "body-xs", 3, "title", "innerText"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", "inputLength"], [1, "body-sm", "disable-text-div", 3, "title", "ngStyle", "innerHtml"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["editBlock", ""], ["readOnlyBlock", ""], [1, "pepperi-textarea-card-container", "card-flex-container", 3, "ngClass", "ngStyle", "click"], ["class", " body-xs title no-shrink", 3, "title", 4, "ngIf"], [1, "body-sm", "value", "wrap", 3, "id", "title"], ["class", "pepperi-button weak card-edit-button self-start", "mat-button", "", 3, "ngClass", 4, "ngIf"], [1, "body-xs", "title", "no-shrink", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button", "self-start", 3, "ngClass"], ["name", "system_edit"], ["selectedBlock", ""], ["notSelectedBlock", ""], ["notEmptyBlock", ""], ["emptyBlock", ""], ["appearance", "outline", 1, "pepperi-report-textarea", 3, "dir", "ngClass"], ["matInput", "", "type", "text", 1, "body-sm", "pepperi-report-input", 3, "id", "ngClass", "ngStyle", "title", "formControlName", "value", "disabled"], ["matPrefix", "", 3, "value", "label", "type", "disabled", "iconClicked", 4, "ngIf"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "iconClicked", 4, "ngIf"], ["matPrefix", "", 3, "value", "label", "type", "disabled", "iconClicked"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "iconClicked"]], template: function PepperiTextareaComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, PepperiTextareaComponent_ng_template_1_Template, 14, 53, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, PepperiTextareaComponent_ng_container_3_Template, 2, 3, "ng-container", 2);
                i0.ɵɵtemplate(4, PepperiTextareaComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(5, PepperiTextareaComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(6, PepperiTextareaComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
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
        }, directives: [i3.NgControlStatusGroup, i3.FormGroupDirective, i4.NgIf, i4.NgClass, i5.MatFormField, i6.Dir, i7.MatInput, i3.DefaultValueAccessor, i3.MaxLengthValidator, i4.NgStyle, i3.NgControlStatus, i3.FormControlName, i8.PepperiTextboxIconComponent, i5.MatSuffix, i5.MatError, i9.PepperiFieldTitleComponent, i4.NgTemplateOutlet, i10.MatButton, i11.MatIcon, i1.PepperiIconComponent, i5.MatPrefix], pipes: [i13.TranslatePipe, i2.SafeHtmlPipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.disable-text-div[_ngcontent-%COMP%]{display:inline-block;margin:0;overflow-y:hidden;padding:.5rem 1.5rem .5rem 0;vertical-align:middle}.right-alignment[_ngcontent-%COMP%]   .disable-text-div[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiTextareaComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-textarea',
                        templateUrl: './textarea.component.html',
                        styleUrls: ['./textarea.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1$1.DialogService }, { type: i2.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], label: [{
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
                }], input: [{
                    type: i0.ViewChild,
                    args: ['input']
                }] });
    })();

    var PepperiTextareaModule = /** @class */ (function () {
        function PepperiTextareaModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1.pepperiIconSystemEdit
            ]);
        }
        return PepperiTextareaModule;
    }());
    PepperiTextareaModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiTextareaModule });
    PepperiTextareaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiTextareaModule_Factory(t) { return new (t || PepperiTextareaModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
                i4.CommonModule,
                i3.ReactiveFormsModule,
                i3.FormsModule,
                // Material modules,
                core.MatCommonModule,
                i10.MatButtonModule,
                i5.MatFormFieldModule,
                i7.MatInputModule,
                i11.MatIconModule,
                // Pepperi modules
                i2.PepperiModule,
                i1.PepperiIconModule,
                i9.PepperiFieldTitleModule,
                i8.PepperiTextboxIconModule,
                i1$1.PepperiDialogModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiTextareaModule, { declarations: [PepperiTextareaComponent], imports: [i4.CommonModule,
                i3.ReactiveFormsModule,
                i3.FormsModule,
                // Material modules,
                core.MatCommonModule,
                i10.MatButtonModule,
                i5.MatFormFieldModule,
                i7.MatInputModule,
                i11.MatIconModule,
                // Pepperi modules
                i2.PepperiModule,
                i1.PepperiIconModule,
                i9.PepperiFieldTitleModule,
                i8.PepperiTextboxIconModule,
                i1$1.PepperiDialogModule], exports: [PepperiTextareaComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiTextareaModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i3.ReactiveFormsModule,
                            i3.FormsModule,
                            // Material modules,
                            core.MatCommonModule,
                            i10.MatButtonModule,
                            i5.MatFormFieldModule,
                            i7.MatInputModule,
                            i11.MatIconModule,
                            // Pepperi modules
                            i2.PepperiModule,
                            i1.PepperiIconModule,
                            i9.PepperiFieldTitleModule,
                            i8.PepperiTextboxIconModule,
                            i1$1.PepperiDialogModule
                        ],
                        exports: [PepperiTextareaComponent],
                        declarations: [PepperiTextareaComponent],
                    }]
            }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/textarea
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiTextareaComponent = PepperiTextareaComponent;
    exports.PepperiTextareaModule = PepperiTextareaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-textarea.umd.js.map
