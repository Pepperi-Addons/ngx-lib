(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/material/icon'), require('@angular/material/dialog'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/textbox-icon'), require('@pepperi-addons/ngx-lib/field-title'), require('@pepperi-addons/ngx-lib/dialog'), require('ngx-quill'), require('@angular/cdk/bidi'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/rich-html-textarea', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser', '@angular/forms', '@angular/material/core', '@angular/material/button', '@angular/material/form-field', '@angular/material/input', '@angular/material/menu', '@angular/material/icon', '@angular/material/dialog', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/textbox-icon', '@pepperi-addons/ngx-lib/field-title', '@pepperi-addons/ngx-lib/dialog', 'ngx-quill', '@angular/cdk/bidi', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib']['rich-html-textarea'] = {}), global.ng.core, global.ng.common, global.ng.platformBrowser, global.ng.forms, global.ng.material.core, global.ng.material.button, global.ng.material.formField, global.ng.material.input, global.ng.material.menu, global.ng.material.icon, global.ng.material.dialog, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib']['textbox-icon'], global['pepperi-addons']['ngx-lib']['field-title'], global['pepperi-addons']['ngx-lib'].dialog, global.quill, global.ng.cdk.bidi, global.translate));
}(this, (function (exports, i0, i5, i1, i4, core, i11, i6, i8, menu, i12, i14, i3, i2, i9, i10, i2$1, i15, i7, i16) { 'use strict';

    var _c0 = ["richTextEditorDialogTemplate"];
    function PepperiRichHtmlTextareaComponent_ng_template_1_pep_field_title_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-field-title", 12);
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("label", ctx_r11.label)("required", ctx_r11.required)("disabled", ctx_r11.disabled)("maxFieldCharacters", ctx_r11.maxFieldCharacters)("xAlignment", ctx_r11.xAlignment)("showTitle", ctx_r11.showTitle);
        }
    }
    var _c1 = function (a0, a1, a2, a3) { return { "right-alignment": a0, "one-row": a1, "stand-alone": a2, "pepperi-textarea-card-container": a3 }; };
    var _c2 = function (a0) { return { "pepperi-table-textarea": a0 }; };
    var _c3 = function (a0) { return { "text-align": a0 }; };
    var _c4 = function (a0) { return { "card-one-row-icon": a0 }; };
    var _c5 = function (a0) { return { field: a0 }; };
    function PepperiRichHtmlTextareaComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 5);
            i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_template_1_pep_field_title_1_Template, 1, 6, "pep-field-title", 6);
            i0.ɵɵelementStart(2, "mat-form-field", 7);
            i0.ɵɵelement(3, "textarea", 8);
            i0.ɵɵelement(4, "div", 9);
            i0.ɵɵpipe(5, "safeHtml");
            i0.ɵɵelementStart(6, "pep-textbox-icon", 10);
            i0.ɵɵlistener("iconClicked", function PepperiRichHtmlTextareaComponent_ng_template_1_Template_pep_textbox_icon_iconClicked_6_listener() { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.openDialog(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-error");
            i0.ɵɵelement(8, "span", 11);
            i0.ɵɵpipe(9, "translate");
            i0.ɵɵpipe(10, "translate");
            i0.ɵɵpipe(11, "translate");
            i0.ɵɵpipe(12, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var isFormView_r10 = ctx.isFormView;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(34, _c1, ctx_r1.xAlignment == "2", !isFormView_r10 && ctx_r1.rowSpan === 1, ctx_r1.standAlone, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", isFormView_r10);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("dir", ctx_r1.xAlignment == "2" ? "rtl" : "ltr");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(39, _c2, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", true)("formControlName", ctx_r1.key);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("body-sm rich-text-cont ", ctx_r1.readonly ? "disable-scroll" : "", " ql-editor ");
            i0.ɵɵstyleProp("height", ctx_r1.fieldHeight);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(41, _c3, ctx_r1.xAlignment == "2" ? "right" : "left"))("innerHtml", i0.ɵɵpipeBind1(5, 20, ctx_r1.value), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx_r1.value)("label", ctx_r1.label)("type", ctx_r1.controlType)("disabled", ctx_r1.disabled)("ngClass", i0.ɵɵpureFunction1(43, _c4, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiCard && ctx_r1.rowSpan === 1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ctx_r1.required && ctx_r1.value.length == 0 ? i0.ɵɵpipeBind2(9, 22, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(45, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(10, 25, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(47, _c5, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.value.length == 0 ? i0.ɵɵpipeBind2(11, 28, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(49, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(12, 31, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(51, _c5, ctx_r1.label)));
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c6 = function () { return { isFormView: true }; };
    function PepperiRichHtmlTextareaComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c6));
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_container_4_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 18);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r15 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("title", ctx_r15.label);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx_r15.label, ":\u00A0");
        }
    }
    var _c7 = function (a0) { return { "self-end": a0 }; };
    function PepperiRichHtmlTextareaComponent_ng_container_4_button_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 19);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c7, ctx_r16.value && ctx_r16.value !== ""));
        }
    }
    var _c8 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
    var _c9 = function (a0) { return { "-webkit-line-clamp": a0 }; };
    function PepperiRichHtmlTextareaComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 14);
            i0.ɵɵlistener("click", function PepperiRichHtmlTextareaComponent_ng_container_4_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(); return !ctx_r17.disabled ? ctx_r17.cardTemplateClicked($event) : ""; });
            i0.ɵɵtemplate(2, PepperiRichHtmlTextareaComponent_ng_container_4_span_2_Template, 2, 2, "span", 15);
            i0.ɵɵelement(3, "span", 16);
            i0.ɵɵpipe(4, "safeHtml");
            i0.ɵɵtemplate(5, PepperiRichHtmlTextareaComponent_ng_container_4_button_5_Template, 3, 3, "button", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap("text-align-" + ctx_r3.xAlignment);
            i0.ɵɵstyleProp("height", ctx_r3.fieldHeight);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(12, _c8, ctx_r3.rowSpan === 1, ctx_r3.isActive && !ctx_r3.disabled))("ngStyle", i0.ɵɵpureFunction1(15, _c9, ctx_r3.rowSpan));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.showTitle && ctx_r3.label != "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("id", ctx_r3.key)("innerHtml", i0.ɵɵpipeBind1(4, 10, ctx_r3.value), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r3.isActive && !ctx_r3.disabled);
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c10 = function () { return { isFormView: false }; };
    function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c10));
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 26);
            i0.ɵɵelement(1, "span", 27);
            i0.ɵɵpipe(2, "safeHtml");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r27 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("id", ctx_r27.key)("innerHtml", i0.ɵɵpipeBind1(2, 2, ctx_r27.value), i0.ɵɵsanitizeHtml);
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 21);
            i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_1_Template, 3, 4, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_ng_template_3_Template, 2, 0, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r26 = i0.ɵɵreference(2);
            var _r28 = i0.ɵɵreference(4);
            var ctx_r23 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngIf", (ctx_r23.value == null ? null : ctx_r23.value.length) > 0)("ngIfThen", _r26)("ngIfElse", _r28);
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0.ɵɵtemplate(2, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_2_Template, 1, 3, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiRichHtmlTextareaComponent_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r20 = i0.ɵɵreference(3);
            var _r22 = i0.ɵɵreference(5);
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r20)("ngIfElse", _r22);
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c6));
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_template_7_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 28);
            i0.ɵɵelementStart(1, "button", 29);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵelement(3, "pep-icon", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, PepperiRichHtmlTextareaComponent_ng_template_7_ng_container_4_Template, 1, 0, "ng-container", 31);
            i0.ɵɵelementStart(5, "div", 32);
            i0.ɵɵelementStart(6, "div", 33);
            i0.ɵɵelementStart(7, "button", 34);
            i0.ɵɵtext(8);
            i0.ɵɵpipe(9, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 35);
            i0.ɵɵtext(11);
            i0.ɵɵpipe(12, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext();
            var _r8 = i0.ɵɵreference(10);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("mat-dialog-close", null);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngTemplateOutlet", _r8);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("mat-dialog-close", ctx_r7.quillContent || "")("disabled", ctx_r7.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 7, "ACTIONS.SAVE"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("mat-dialog-close", null);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 9, "ACTIONS.CANCEL"), " ");
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_template_9_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 38);
            i0.ɵɵelementStart(1, "span", 39);
            i0.ɵɵelement(2, "button", 40);
            i0.ɵɵelement(3, "button", 41);
            i0.ɵɵelement(4, "button", 42);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 39);
            i0.ɵɵelement(6, "button", 43);
            i0.ɵɵelement(7, "button", 44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span", 39);
            i0.ɵɵelement(9, "button", 45);
            i0.ɵɵelement(10, "button", 46);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span", 39);
            i0.ɵɵelement(12, "select", 47);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "span", 39);
            i0.ɵɵelementStart(14, "select", 48);
            i0.ɵɵelement(15, "option", 49);
            i0.ɵɵelement(16, "option", 50);
            i0.ɵɵelement(17, "option", 51);
            i0.ɵɵelement(18, "option", 52);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PepperiRichHtmlTextareaComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r34_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "quill-editor", 36);
            i0.ɵɵlistener("ngModelChange", function PepperiRichHtmlTextareaComponent_ng_template_9_Template_quill_editor_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r34_1); var ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.quillContent = $event; });
            i0.ɵɵpipe(1, "translate");
            i0.ɵɵtemplate(2, PepperiRichHtmlTextareaComponent_ng_template_9_div_2_Template, 19, 0, "div", 37);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(1, 7, "RICH_TEXTAREA.HINT"));
            i0.ɵɵproperty("ngModel", ctx_r9.quillContent)("sanitize", true)("readOnly", ctx_r9.disabled)("maxLength", ctx_r9.maxFieldCharacters)("required", ctx_r9.required);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r9.disabled);
        }
    }
    var PepperiRichHtmlTextareaComponent = /** @class */ (function () {
        function PepperiRichHtmlTextareaComponent(sanitizer, dialogService, customizationService, renderer, element) {
            this.sanitizer = sanitizer;
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
            this.maxFieldCharacters = 0;
            this.xAlignment = '0';
            this.rowSpan = 1;
            this.controlType = 'richhtmltextarea';
            this.form = null;
            this.isActive = false;
            this.showTitle = true;
            this.layoutType = i3.LAYOUT_TYPE.PepperiForm;
            this.valueChanged = new i0.EventEmitter();
            this.quillContent = '';
            this.LAYOUT_TYPE = i3.LAYOUT_TYPE;
            this.fieldHeight = '';
            this.standAlone = false;
        }
        PepperiRichHtmlTextareaComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled, this.maxFieldCharacters);
                this.renderer.addClass(this.element.nativeElement, i3.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }
            this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
        };
        PepperiRichHtmlTextareaComponent.prototype.ngOnDestroy = function () {
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
        };
        PepperiRichHtmlTextareaComponent.prototype.changeValue = function (value, lastFocusedField) {
            if (lastFocusedField === void 0) { lastFocusedField = null; }
            if (value !== this.value) {
                this.value = value;
                this.customizationService.updateFormFieldValue(this.form, this.key, value);
                this.valueChanged.emit({ apiName: this.key, value: value, lastFocusedField: lastFocusedField });
            }
        };
        PepperiRichHtmlTextareaComponent.prototype.cardTemplateClicked = function (event) {
            this.openDialog();
        };
        PepperiRichHtmlTextareaComponent.prototype.openDialog = function () {
            var _this = this;
            this.quillContent = this.sanitizer.bypassSecurityTrustHtml(this.value);
            var config = this.dialogService.getDialogConfig({
                minWidth: '50vw',
                maxWidth: '90vw',
                maxHeight: '90vh',
            });
            var dialogRef = this.dialogService.openDialog(this.richTextEditorDialogTemplate, {}, config);
            dialogRef.afterClosed().subscribe(function (value) {
                if (value !== undefined && value !== null) {
                    _this.changeValue(value);
                }
            });
        };
        return PepperiRichHtmlTextareaComponent;
    }());
    PepperiRichHtmlTextareaComponent.ɵfac = function PepperiRichHtmlTextareaComponent_Factory(t) { return new (t || PepperiRichHtmlTextareaComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2$1.DialogService), i0.ɵɵdirectiveInject(i3.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PepperiRichHtmlTextareaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiRichHtmlTextareaComponent, selectors: [["pep-rich-html-textarea"]], viewQuery: function PepperiRichHtmlTextareaComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true, i0.TemplateRef);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.richTextEditorDialogTemplate = _t.first);
            }
        }, inputs: { key: "key", value: "value", label: "label", required: "required", disabled: "disabled", readonly: "readonly", maxFieldCharacters: "maxFieldCharacters", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", isActive: "isActive", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, decls: 11, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], ["richTextEditorDialogTemplate", ""], ["quilTemplate", ""], [1, "pepperi-textarea-container", 3, "ngClass"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle", 4, "ngIf"], ["appearance", "outline", 3, "dir", "ngClass"], ["matInput", "", 3, "hidden", "formControlName"], [3, "ngStyle", "innerHtml"], ["matSuffix", "", 3, "value", "label", "type", "disabled", "ngClass", "iconClicked"], [1, "body-xs", 3, "title", "innerText"], [3, "label", "required", "disabled", "maxFieldCharacters", "xAlignment", "showTitle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pepperi-textarea-card-container", "card-flex-container", 3, "ngClass", "ngStyle", "click"], ["class", "body-xs title no-shrink", 3, "title", 4, "ngIf"], [1, "body-sm", "value", "wrap", 3, "id", "innerHtml"], ["class", "pepperi-button weak card-edit-button self-start", "mat-button", "", 3, "ngClass", 4, "ngIf"], [1, "body-xs", "title", "no-shrink", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button", "self-start", 3, "ngClass"], ["name", "system_edit"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["selectedBlock", ""], ["notSelectedBlock", ""], ["notEmptyBlock", ""], ["emptyBlock", ""], [1, "pepperi-textarea-card-container", "card-flex-container", "one-row"], [1, "wrap", 3, "id", "innerHtml"], [1, "rich-text-editor-container"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], [4, "ngTemplateOutlet"], ["mat-dialog-actions", "", 1, "pepperi-border-top"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "strong", "pull-right", "flip", 3, "mat-dialog-close", "disabled"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["id", "quill-editor", "theme", "", 3, "placeholder", "ngModel", "sanitize", "readOnly", "maxLength", "required", "ngModelChange"], ["quill-editor-toolbar", "", "class", "spacing-element-negative pepperi-border-bottom", 4, "ngIf"], ["quill-editor-toolbar", "", 1, "spacing-element-negative", "pepperi-border-bottom"], [1, "ql-formats"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-bold"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-italic"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-underline"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-link"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-image"], ["mat-button", "", "value", "ordered", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-list"], ["mat-button", "", "value", "bullet", 1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-list"], [1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-color"], [1, "spacing-element", "pepperi-button", "icon-button", "md", "weak", "ql-align"], ["selected", ""], ["value", "center"], ["value", "right"], ["value", "justify"]], template: function PepperiRichHtmlTextareaComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, PepperiRichHtmlTextareaComponent_ng_template_1_Template, 13, 53, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, PepperiRichHtmlTextareaComponent_ng_container_3_Template, 2, 3, "ng-container", 2);
                i0.ɵɵtemplate(4, PepperiRichHtmlTextareaComponent_ng_container_4_Template, 6, 17, "ng-container", 2);
                i0.ɵɵtemplate(5, PepperiRichHtmlTextareaComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(6, PepperiRichHtmlTextareaComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(7, PepperiRichHtmlTextareaComponent_ng_template_7_Template, 13, 11, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(9, PepperiRichHtmlTextareaComponent_ng_template_9_Template, 3, 9, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
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
        }, directives: [i4.NgControlStatusGroup, i4.FormGroupDirective, i5.NgIf, i5.NgClass, i6.MatFormField, i7.Dir, i8.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlName, i5.NgStyle, i9.PepperiTextboxIconComponent, i6.MatSuffix, i6.MatError, i10.PepperiFieldTitleComponent, i5.NgTemplateOutlet, i11.MatButton, i12.MatIcon, i2.PepperiIconComponent, i14.MatDialogClose, i14.MatDialogActions, i15.QuillEditorComponent, i4.NgModel, i4.RequiredValidator, i4.NgSelectOption, i4.ɵangular_packages_forms_forms_x], pipes: [i3.SafeHtmlPipe, i16.TranslatePipe], styles: ["[_nghost-%COMP%]{display:block;height:inherit}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiRichHtmlTextareaComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-rich-html-textarea',
                        templateUrl: './rich-html-textarea.component.html',
                        styleUrls: ['./rich-html-textarea.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1.DomSanitizer }, { type: i2$1.DialogService }, { type: i3.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
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
                }], xAlignment: [{
                    type: i0.Input
                }], rowSpan: [{
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
                }], richTextEditorDialogTemplate: [{
                    type: i0.ViewChild,
                    args: ['richTextEditorDialogTemplate', { read: i0.TemplateRef }]
                }] });
    })();

    var PepperiRichHtmlTextareaModule = /** @class */ (function () {
        function PepperiRichHtmlTextareaModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i2.pepperiIconSystemEdit,
                i2.pepperiIconSystemClose
            ]);
        }
        return PepperiRichHtmlTextareaModule;
    }());
    PepperiRichHtmlTextareaModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiRichHtmlTextareaModule });
    PepperiRichHtmlTextareaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiRichHtmlTextareaModule_Factory(t) { return new (t || PepperiRichHtmlTextareaModule)(i0.ɵɵinject(i2.PepperiIconRegistry)); }, imports: [[
                i5.CommonModule,
                i1.BrowserModule,
                i4.ReactiveFormsModule,
                i4.FormsModule,
                // Material modules,
                core.MatCommonModule,
                i11.MatButtonModule,
                i6.MatFormFieldModule,
                i8.MatInputModule,
                menu.MatMenuModule,
                i12.MatIconModule,
                i14.MatDialogModule,
                // External modules
                i15.QuillModule.forRoot(),
                // Pepperi modules
                i3.PepperiModule,
                i2.PepperiIconModule,
                i10.PepperiFieldTitleModule,
                i9.PepperiTextboxIconModule,
                i2$1.PepperiDialogModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiRichHtmlTextareaModule, { declarations: [PepperiRichHtmlTextareaComponent], imports: [i5.CommonModule,
                i1.BrowserModule,
                i4.ReactiveFormsModule,
                i4.FormsModule,
                // Material modules,
                core.MatCommonModule,
                i11.MatButtonModule,
                i6.MatFormFieldModule,
                i8.MatInputModule,
                menu.MatMenuModule,
                i12.MatIconModule,
                i14.MatDialogModule, i15.QuillModule,
                // Pepperi modules
                i3.PepperiModule,
                i2.PepperiIconModule,
                i10.PepperiFieldTitleModule,
                i9.PepperiTextboxIconModule,
                i2$1.PepperiDialogModule], exports: [PepperiRichHtmlTextareaComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiRichHtmlTextareaModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i5.CommonModule,
                            i1.BrowserModule,
                            i4.ReactiveFormsModule,
                            i4.FormsModule,
                            // Material modules,
                            core.MatCommonModule,
                            i11.MatButtonModule,
                            i6.MatFormFieldModule,
                            i8.MatInputModule,
                            menu.MatMenuModule,
                            i12.MatIconModule,
                            i14.MatDialogModule,
                            // External modules
                            i15.QuillModule.forRoot(),
                            // Pepperi modules
                            i3.PepperiModule,
                            i2.PepperiIconModule,
                            i10.PepperiFieldTitleModule,
                            i9.PepperiTextboxIconModule,
                            i2$1.PepperiDialogModule
                        ],
                        exports: [PepperiRichHtmlTextareaComponent],
                        declarations: [PepperiRichHtmlTextareaComponent],
                    }]
            }], function () { return [{ type: i2.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/rich-html-textarea
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiRichHtmlTextareaComponent = PepperiRichHtmlTextareaComponent;
    exports.PepperiRichHtmlTextareaModule = PepperiRichHtmlTextareaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-rich-html-textarea.umd.js.map
