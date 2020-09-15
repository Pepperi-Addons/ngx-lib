(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/icon'), require('@angular/material/dialog'), require('angular2-signaturepad'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/field-title'), require('@pepperi-addons/ngx-lib/files-uploader'), require('@pepperi-addons/ngx-lib/dialog'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/signature', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/button', '@angular/material/form-field', '@angular/material/input', '@angular/material/icon', '@angular/material/dialog', 'angular2-signaturepad', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/field-title', '@pepperi-addons/ngx-lib/files-uploader', '@pepperi-addons/ngx-lib/dialog', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].signature = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.button, global.ng.material.formField, global.ng.material.input, global.ng.material.icon, global.ng.material.dialog, global.signaturepad, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib']['field-title'], global['pepperi-addons']['ngx-lib']['files-uploader'], global['pepperi-addons']['ngx-lib'].dialog, global.translate));
}(this, (function (exports, i0, i4, i3, core, i7, i5, i6, i8, i11, i12, i2, i1, i10, filesUploader, i1$1, i13) { 'use strict';

    var _c0 = ["signaturePad"];
    var _c1 = ["signaturePopupPad"];
    function PepperiSignatureComponent_ng_template_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c2 = function (a0) { return { "right-alignment": a0 }; };
    function PepperiSignatureComponent_ng_template_2_ng_template_4_button_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 16);
            i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_2_ng_template_4_button_0_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.deleteSignature($event); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c2, ctx_r14.xAlignment == "2"));
        }
    }
    var _c3 = function (a0) { return [a0]; };
    function PepperiSignatureComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, PepperiSignatureComponent_ng_template_2_ng_template_4_button_0_Template, 3, 3, "button", 13);
            i0.ɵɵelementStart(1, "div", 14);
            i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_2_ng_template_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.openSignModal(); });
            i0.ɵɵelementStart(2, "img", 15);
            i0.ɵɵlistener("error", function PepperiSignatureComponent_ng_template_2_ng_template_4_Template_img_error_2_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.errorHandler($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngIf", !ctx_r11.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("max-height", ctx_r11.fieldHeight);
            i0.ɵɵproperty("src", ctx_r11.src, i0.ɵɵsanitizeUrl)("alt", ctx_r11.label)("ngClass", i0.ɵɵpureFunction1(6, _c3, "text-align-" + ctx_r11.xAlignment));
        }
    }
    function PepperiSignatureComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵelement(1, "pep-icon", 19);
            i0.ɵɵelementStart(2, "span", 20);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r13 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 1, ctx_r13.disabled ? "MESSAGES.INFO_MISSING_SIGNATURE" : "SIGNATURE.HINT"), " ");
        }
    }
    var _c4 = function (a0) { return { disable: a0 }; };
    var _c5 = function (a0) { return { field: a0 }; };
    function PepperiSignatureComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 5);
            i0.ɵɵelementStart(1, "div", 6);
            i0.ɵɵelementStart(2, "div", 7);
            i0.ɵɵtemplate(3, PepperiSignatureComponent_ng_template_2_ng_container_3_Template, 1, 0, "ng-container", 8);
            i0.ɵɵtemplate(4, PepperiSignatureComponent_ng_template_2_ng_template_4_Template, 3, 8, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(6, PepperiSignatureComponent_ng_template_2_ng_template_6_Template, 5, 3, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "input", 11);
            i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_2_Template_input_click_8_listener() { i0.ɵɵrestoreView(_r21_1); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.openSignModal(); })("keypress", function PepperiSignatureComponent_ng_template_2_Template_input_keypress_8_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onKeyPress_OpenSignModal($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-error");
            i0.ɵɵelement(10, "span", 12);
            i0.ɵɵpipe(11, "translate");
            i0.ɵɵpipe(12, "translate");
            i0.ɵɵpipe(13, "translate");
            i0.ɵɵpipe(14, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r10 = i0.ɵɵreference(5);
            var _r12 = i0.ɵɵreference(7);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formGroup", ctx_r1.form);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("height", ctx_r1.fieldHeight);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(25, _c4, ctx_r1.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.src != "")("ngIfThen", _r10)("ngIfElse", _r12);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("id", ctx_r1.key)("formControlName", ctx_r1.key)("value", ctx_r1.src)("disabled", ctx_r1.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ctx_r1.required && ctx_r1.src.length == 0 ? i0.ɵɵpipeBind2(11, 13, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(27, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(12, 16, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(29, _c5, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.src.length == 0 ? i0.ɵɵpipeBind2(13, 19, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(31, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(14, 22, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(33, _c5, ctx_r1.label)));
        }
    }
    function PepperiSignatureComponent_ng_container_4_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c6 = function (a0, a1) { return { "one-row": a0, "stand-alone": a1 }; };
    function PepperiSignatureComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 21);
            i0.ɵɵelement(2, "pep-field-title", 22);
            i0.ɵɵtemplate(3, PepperiSignatureComponent_ng_container_4_ng_container_3_Template, 1, 0, "ng-container", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c6, ctx_r2.rowSpan == 1, ctx_r2.standAlone));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r2.label)("required", ctx_r2.required)("disabled", ctx_r2.disabled)("xAlignment", ctx_r2.xAlignment)("showTitle", ctx_r2.showTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiSignatureComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiSignatureComponent_ng_container_5_ng_template_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c7 = function (a0) { return { "one-row": a0 }; };
    function PepperiSignatureComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 21);
            i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_5_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 23);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r26 = i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c7, ctx_r26.rowSpan == 1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiSignatureComponent_ng_container_5_ng_template_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c8 = function () { return { isTableView: false }; };
    function PepperiSignatureComponent_ng_container_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 21);
            i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_5_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 26);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r28 = i0.ɵɵnextContext(2);
            var _r5 = i0.ɵɵreference(8);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c7, ctx_r28.rowSpan == 1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction0(5, _c8));
        }
    }
    function PepperiSignatureComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 8);
            i0.ɵɵtemplate(2, PepperiSignatureComponent_ng_container_5_ng_template_2_Template, 2, 4, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiSignatureComponent_ng_container_5_ng_template_4_Template, 2, 6, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r25 = i0.ɵɵreference(3);
            var _r27 = i0.ɵɵreference(5);
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", false && ctx_r3.isActive && !ctx_r3.disabled)("ngIfThen", _r25)("ngIfElse", _r27);
        }
    }
    function PepperiSignatureComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiSignatureComponent_ng_container_6_ng_template_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiSignatureComponent_ng_container_6_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 27);
            i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_6_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 23);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiSignatureComponent_ng_container_6_ng_template_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c9 = function () { return { isTableView: true }; };
    function PepperiSignatureComponent_ng_container_6_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 27);
            i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_6_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 26);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r5 = i0.ɵɵreference(8);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c9));
        }
    }
    function PepperiSignatureComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 8);
            i0.ɵɵtemplate(2, PepperiSignatureComponent_ng_container_6_ng_template_2_Template, 2, 1, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiSignatureComponent_ng_container_6_ng_template_4_Template, 2, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r32 = i0.ɵɵreference(3);
            var _r34 = i0.ɵɵreference(5);
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", false && ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r32)("ngIfElse", _r34);
        }
    }
    function PepperiSignatureComponent_ng_template_7_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiSignatureComponent_ng_template_7_ng_template_4_img_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r47_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "img", 15);
            i0.ɵɵlistener("error", function PepperiSignatureComponent_ng_template_7_ng_template_4_img_1_Template_img_error_0_listener($event) { i0.ɵɵrestoreView(_r47_1); var ctx_r46 = i0.ɵɵnextContext(3); return ctx_r46.errorHandler($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r44 = i0.ɵɵnextContext(3);
            i0.ɵɵstyleProp("max-height", ctx_r44.fieldHeight);
            i0.ɵɵproperty("src", ctx_r44.src, i0.ɵɵsanitizeUrl)("alt", ctx_r44.label)("ngClass", i0.ɵɵpureFunction1(5, _c3, "text-align-" + ctx_r44.xAlignment));
        }
    }
    function PepperiSignatureComponent_ng_template_7_ng_template_4_img_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r49_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "img", 32);
            i0.ɵɵlistener("error", function PepperiSignatureComponent_ng_template_7_ng_template_4_img_2_Template_img_error_0_listener($event) { i0.ɵɵrestoreView(_r49_1); var ctx_r48 = i0.ɵɵnextContext(3); return ctx_r48.errorHandler($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r45 = i0.ɵɵnextContext(3);
            i0.ɵɵstyleProp("max-height", ctx_r45.fieldHeight);
            i0.ɵɵproperty("src", ctx_r45.src, i0.ɵɵsanitizeUrl)("alt", ctx_r45.label)("ngClass", i0.ɵɵpureFunction1(5, _c3, "text-align-" + ctx_r45.xAlignment));
        }
    }
    function PepperiSignatureComponent_ng_template_7_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r51_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 14);
            i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_7_ng_template_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r51_1); var ctx_r50 = i0.ɵɵnextContext(2); return ctx_r50.openSignModal(); });
            i0.ɵɵtemplate(1, PepperiSignatureComponent_ng_template_7_ng_template_4_img_1_Template, 1, 7, "img", 30);
            i0.ɵɵtemplate(2, PepperiSignatureComponent_ng_template_7_ng_template_4_img_2_Template, 1, 7, "img", 31);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var isTableView_r38 = i0.ɵɵnextContext().isTableView;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !isTableView_r38);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", isTableView_r38);
        }
    }
    function PepperiSignatureComponent_ng_template_7_ng_template_6_Template(rf, ctx) { }
    function PepperiSignatureComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 28);
            i0.ɵɵelementStart(1, "div", 6);
            i0.ɵɵelementStart(2, "div", 29);
            i0.ɵɵtemplate(3, PepperiSignatureComponent_ng_template_7_ng_container_3_Template, 1, 0, "ng-container", 8);
            i0.ɵɵtemplate(4, PepperiSignatureComponent_ng_template_7_ng_template_4_Template, 3, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(6, PepperiSignatureComponent_ng_template_7_ng_template_6_Template, 0, 0, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r40 = i0.ɵɵreference(5);
            var _r42 = i0.ɵɵreference(7);
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r6.src != "")("ngIfThen", _r40)("ngIfElse", _r42);
        }
    }
    function PepperiSignatureComponent_ng_template_9_div_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r56_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 41);
            i0.ɵɵelementStart(1, "div", 42);
            i0.ɵɵelementStart(2, "button", 43);
            i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_9_div_10_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r56_1); var ctx_r55 = i0.ɵɵnextContext(2); return ctx_r55.saveSignModal($event); });
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 44);
            i0.ɵɵlistener("click", function PepperiSignatureComponent_ng_template_9_div_10_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r56_1); var ctx_r57 = i0.ɵɵnextContext(2); return ctx_r57.clearSignModal(); });
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r54 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !ctx_r54.showActionBtn || ctx_r54.readonly || ctx_r54.disabled)("mat-dialog-close", ctx_r54.signatureURL);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 5, "ACTIONS.DONE"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !ctx_r54.showActionBtn || ctx_r54.readonly || ctx_r54.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 7, "ACTIONS.CLEAR"), " ");
        }
    }
    function PepperiSignatureComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r59_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "h2", 33);
            i0.ɵɵelementStart(1, "span", 34);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 35);
            i0.ɵɵelementStart(5, "mat-icon");
            i0.ɵɵelement(6, "pep-icon", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 37);
            i0.ɵɵelementStart(8, "signature-pad", 38, 39);
            i0.ɵɵlistener("onBeginEvent", function PepperiSignatureComponent_ng_template_9_Template_signature_pad_onBeginEvent_8_listener() { i0.ɵɵrestoreView(_r59_1); var ctx_r58 = i0.ɵɵnextContext(); return ctx_r58.drawStart(); })("onEndEvent", function PepperiSignatureComponent_ng_template_9_Template_signature_pad_onEndEvent_8_listener() { i0.ɵɵrestoreView(_r59_1); var ctx_r60 = i0.ɵɵnextContext(); return ctx_r60.drawComplete(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, PepperiSignatureComponent_ng_template_9_div_10_Template, 8, 9, "div", 40);
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, "SIGNATURE.DIALOG_TITLE"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("mat-dialog-close", null);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("options", ctx_r8.signaturePadOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r8.showActionBtn);
        }
    }
    var PepperiSignatureComponent = /** @class */ (function () {
        function PepperiSignatureComponent(dialogService, customizationService, fileService, cd, renderer, element) {
            this.dialogService = dialogService;
            this.customizationService = customizationService;
            this.fileService = fileService;
            this.cd = cd;
            this.renderer = renderer;
            this.element = element;
            this.key = '';
            this.src = '';
            this.label = '';
            this.required = false;
            this.disabled = false;
            this.readonly = false;
            this.xAlignment = '0';
            this.rowSpan = 1;
            this.signatureURL = '';
            // @Input() inDialog = false;
            this.controlType = 'signature';
            this.form = null;
            this.showTitle = true;
            this.layoutType = i2.LAYOUT_TYPE.PepperiForm;
            this.isActive = false;
            this.valueChanged = new i0.EventEmitter();
            this.LAYOUT_TYPE = i2.LAYOUT_TYPE;
            this.fieldHeight = '';
            this.standAlone = false;
            this.dataURI = null;
            this.showActionBtn = true;
            this.isVisibleModal = false;
            this.acceptSignatureType = 'png';
            this.signaturePadOptions = {
                // passed through to szimek/signature_pad constructor
                minWidth: 2,
                canvasWidth: 500,
                canvasHeight: 300,
                penColor: 'rgb(151, 151, 151)'
            };
        }
        PepperiSignatureComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.src, this.required, this.readonly, this.disabled);
                this.renderer.addClass(this.element.nativeElement, i2.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }
            this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
        };
        PepperiSignatureComponent.prototype.ngOnChanges = function (changes) {
            if (changes.src && changes.src.currentValue.length > 0) {
                // Empty dataURI if there is change in the src.
                this.dataURI = null;
                // For clean the cache.
                // this.src = this.src ? this.src + '?t=' + new Date().toTimeString() : '';
            }
        };
        PepperiSignatureComponent.prototype.ngOnDestroy = function () {
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
        };
        PepperiSignatureComponent.prototype.drawComplete = function () {
            // will be notified of szimek/signature_pad's onEnd event
        };
        PepperiSignatureComponent.prototype.drawStart = function () {
            // will be notified of szimek/signature_pad's onBegin event
        };
        PepperiSignatureComponent.prototype.openSignModal = function () {
            // If the signature is not empty open it in image viewer.
            if (this.standAlone && this.dataURI) {
                var fileStrArr = this.dataURI.fileStr.split(';');
                if (fileStrArr.length === 2) {
                    var win = window.open('', '_blank');
                    var contentType = fileStrArr[0].split(':')[1];
                    var base64 = fileStrArr[1].split(',')[1];
                    var blob = this.fileService.convertFromb64toBlob(base64, contentType);
                    var url = URL.createObjectURL(blob);
                    win.location.href = url;
                }
                // signature allready exits
            }
            else {
                this.signatureURL = this.src;
                this.openSignatoreDlg(this.signatureURL);
            }
        };
        PepperiSignatureComponent.prototype.openSignatoreDlg = function (src) {
            var _this = this;
            if (src === void 0) { src = ''; }
            this.showActionBtn = this.signatureURL && this.signatureURL !== '' ? false : true;
            // const signatureData = new DialogData('', this.signaturePopupPad, DialogDataType.Template);
            var dialogRef = this.dialogService.openDialog(this.signaturePopupPad);
            dialogRef.afterOpened().subscribe(function () {
                _this.afterDialogOpened();
            });
        };
        PepperiSignatureComponent.prototype.afterDialogOpened = function () {
            if (this.signatureURL && this.signatureURL !== '') {
                this.signaturePad.fromDataURL(this.signatureURL);
                this.signaturePad.off();
            }
        };
        PepperiSignatureComponent.prototype.clearSignModal = function () {
            this.signatureURL = '';
            this.signaturePad.clear();
            this.signaturePad.on();
        };
        PepperiSignatureComponent.prototype.deleteSignature = function (event) {
            this.signatureURL = '';
            this.changeValue(this.signatureURL);
            this.cd.detectChanges();
        };
        PepperiSignatureComponent.prototype.saveSignModal = function (event) {
            if (!this.signaturePad.isEmpty()) {
                this.signatureURL = this.signaturePad.toDataURL('image/png');
                var fileValue = JSON.stringify({
                    acceptedExtensions: this.acceptSignatureType,
                    fileStr: this.signatureURL,
                    fileExt: this.acceptSignatureType
                });
                this.changeValue(fileValue);
            }
            else {
                this.signatureURL = '';
                this.changeValue(this.signatureURL);
            }
        };
        PepperiSignatureComponent.prototype.errorHandler = function (event) {
            this.signatureURL = this.src = ''; // this.blankImage;
        };
        PepperiSignatureComponent.prototype.changeValue = function (value, lastFocusedField) {
            if (lastFocusedField === void 0) { lastFocusedField = null; }
            this.dataURI = value.length > 0 ? JSON.parse(value) : null;
            this.src = this.standAlone && this.dataURI ? this.dataURI.fileStr : '';
            this.customizationService.updateFormFieldValue(this.form, this.key, this.dataURI ? this.dataURI.fileExt : '');
            this.valueChanged.emit({ apiName: this.key, value: value, controlType: this.controlType, lastFocusedField: lastFocusedField });
        };
        PepperiSignatureComponent.prototype.onKeyPress_OpenSignModal = function (event) {
            var e = event;
            if ([13, 32].indexOf(e.which) !== -1) {
                this.openSignModal();
            }
            e.preventDefault();
        };
        return PepperiSignatureComponent;
    }());
    PepperiSignatureComponent.ɵfac = function PepperiSignatureComponent_Factory(t) { return new (t || PepperiSignatureComponent)(i0.ɵɵdirectiveInject(i1$1.DialogService), i0.ɵɵdirectiveInject(i2.CustomizationService), i0.ɵɵdirectiveInject(i2.FileService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PepperiSignatureComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiSignatureComponent, selectors: [["pep-signature"]], viewQuery: function PepperiSignatureComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
                i0.ɵɵviewQuery(_c1, true, i0.TemplateRef);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.signaturePad = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.signaturePopupPad = _t.first);
            }
        }, inputs: { key: "key", src: "src", label: "label", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", signatureURL: "signatureURL", form: "form", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive" }, outputs: { valueChanged: "valueChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 4, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], ["pepperiReadonlyTemplate", ""], ["signaturePopupPad", ""], ["appearance", "outline", 3, "formGroup"], [1, "pepperi-file-wrapper"], [1, "pepperi-file", "body-sm", 3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["withImg", ""], ["noImg", ""], ["matInput", "", "type", "text", "autocomplete", "off", "readonly", "", 1, "hidden-input", "signature", 3, "id", "formControlName", "value", "disabled", "click", "keypress"], [1, "body-xs", 3, "title", "innerText"], ["mat-button", "", "class", "pepperi-button icon-button weak md delete", "tabindex", "-1", 3, "ngClass", "click", 4, "ngIf"], [1, "pepperi-file-preview", 3, "click"], [1, "pepperi-file-preview-img", 3, "src", "alt", "ngClass", "error"], ["mat-button", "", "tabindex", "-1", 1, "pepperi-button", "icon-button", "weak", "md", "delete", 3, "ngClass", "click"], ["name", "system_bin"], [1, "ellipsis", "pepperi-file-message"], ["name", "system_signature"], [1, "body-sm", "ellipsis"], [1, "pepperi-file-container", 3, "ngClass"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [4, "ngTemplateOutlet"], ["selectedBlock", ""], ["notSelectedBlock", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pepperi-file-container", "one-row"], [1, "pepperi-file-container"], [1, "pepperi-file", "body-sm", "disable"], ["class", "pepperi-file-preview-img", 3, "src", "max-height", "alt", "ngClass", "error", 4, "ngIf"], ["class", "pepperi-report-file pepperi-file-preview-img", 3, "src", "max-height", "alt", "ngClass", "error", 4, "ngIf"], [1, "pepperi-report-file", "pepperi-file-preview-img", 3, "src", "alt", "ngClass", "error"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], [1, "pull-left", "flip", "ellipsis"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], ["mat-dialog-content", ""], [3, "options", "onBeginEvent", "onEndEvent"], ["signaturePad", ""], ["mat-dialog-actions", "", "class", " pepperi-border-top", 4, "ngIf"], ["mat-dialog-actions", "", 1, "pepperi-border-top"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "strong", "pull-right", "flip", 3, "disabled", "mat-dialog-close", "click"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "weak", "pull-right", "flip", 3, "disabled", "click"]], template: function PepperiSignatureComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵelementContainerStart(1);
                i0.ɵɵtemplate(2, PepperiSignatureComponent_ng_template_2_Template, 15, 35, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(4, PepperiSignatureComponent_ng_container_4_Template, 4, 10, "ng-container", 2);
                i0.ɵɵtemplate(5, PepperiSignatureComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(6, PepperiSignatureComponent_ng_container_6_Template, 6, 3, "ng-container", 2);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(7, PepperiSignatureComponent_ng_template_7_Template, 8, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(9, PepperiSignatureComponent_ng_template_9_Template, 11, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementContainerEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
            }
        }, directives: [i3.NgControlStatusGroup, i3.FormGroupDirective, i4.NgIf, i5.MatFormField, i4.NgClass, i6.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i5.MatError, i7.MatButton, i8.MatIcon, i1.PepperiIconComponent, i10.PepperiFieldTitleComponent, i4.NgTemplateOutlet, i11.MatDialogTitle, i11.MatDialogClose, i11.MatDialogContent, i12.SignaturePad, i11.MatDialogActions], pipes: [i13.TranslatePipe], styles: ["[_nghost-%COMP%]{display:block}signature-pad[_ngcontent-%COMP%]{display:-ms-grid;display:grid;height:inherit;width:inherit}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiSignatureComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-signature',
                        styleUrls: ['./signature.component.scss'],
                        templateUrl: './signature.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1$1.DialogService }, { type: i2.CustomizationService }, { type: i2.FileService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
                    type: i0.Input
                }], src: [{
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
                }], signatureURL: [{
                    type: i0.Input
                }], form: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], isActive: [{
                    type: i0.Input
                }], valueChanged: [{
                    type: i0.Output
                }], signaturePad: [{
                    type: i0.ViewChild,
                    args: ['signaturePad']
                }], signaturePopupPad: [{
                    type: i0.ViewChild,
                    args: ['signaturePopupPad', { read: i0.TemplateRef }]
                }] });
    })();

    var PepperiSignatureModule = /** @class */ (function () {
        function PepperiSignatureModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1.pepperiIconSystemBin,
                i1.pepperiIconSystemSignature,
                i1.pepperiIconSystemClose
            ]);
        }
        return PepperiSignatureModule;
    }());
    PepperiSignatureModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiSignatureModule });
    PepperiSignatureModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiSignatureModule_Factory(t) { return new (t || PepperiSignatureModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
                i4.CommonModule,
                i3.ReactiveFormsModule,
                i3.FormsModule,
                // Material modules
                core.MatCommonModule,
                i7.MatButtonModule,
                i5.MatFormFieldModule,
                i6.MatInputModule,
                i8.MatIconModule,
                i11.MatDialogModule,
                // External modules
                i12.SignaturePadModule,
                // Pepperi modules
                i2.PepperiModule,
                i1.PepperiIconModule,
                i10.PepperiFieldTitleModule,
                filesUploader.PepperiFilesUploaderModule,
                i1$1.PepperiDialogModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiSignatureModule, { declarations: [PepperiSignatureComponent], imports: [i4.CommonModule,
                i3.ReactiveFormsModule,
                i3.FormsModule,
                // Material modules
                core.MatCommonModule,
                i7.MatButtonModule,
                i5.MatFormFieldModule,
                i6.MatInputModule,
                i8.MatIconModule,
                i11.MatDialogModule,
                // External modules
                i12.SignaturePadModule,
                // Pepperi modules
                i2.PepperiModule,
                i1.PepperiIconModule,
                i10.PepperiFieldTitleModule,
                filesUploader.PepperiFilesUploaderModule,
                i1$1.PepperiDialogModule], exports: [PepperiSignatureComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiSignatureModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i3.ReactiveFormsModule,
                            i3.FormsModule,
                            // Material modules
                            core.MatCommonModule,
                            i7.MatButtonModule,
                            i5.MatFormFieldModule,
                            i6.MatInputModule,
                            i8.MatIconModule,
                            i11.MatDialogModule,
                            // External modules
                            i12.SignaturePadModule,
                            // Pepperi modules
                            i2.PepperiModule,
                            i1.PepperiIconModule,
                            i10.PepperiFieldTitleModule,
                            filesUploader.PepperiFilesUploaderModule,
                            i1$1.PepperiDialogModule
                        ],
                        exports: [PepperiSignatureComponent],
                        declarations: [PepperiSignatureComponent],
                    }]
            }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/signature
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiSignatureComponent = PepperiSignatureComponent;
    exports.PepperiSignatureModule = PepperiSignatureModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-signature.umd.js.map
