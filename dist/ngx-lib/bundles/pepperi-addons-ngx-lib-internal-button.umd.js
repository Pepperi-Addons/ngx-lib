(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/core'), require('@angular/material/form-field'), require('@angular/material/button'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/field-title'), require('@pepperi-addons/ngx-lib/group-buttons'), require('@angular/cdk/bidi'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/internal-button', ['exports', '@angular/core', '@angular/common', '@angular/material/core', '@angular/material/form-field', '@angular/material/button', '@angular/material/icon', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/field-title', '@pepperi-addons/ngx-lib/group-buttons', '@angular/cdk/bidi', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib']['internal-button'] = {}), global.ng.core, global.ng.common, global.ng.material.core, global.ng.material.formField, global.ng.material.button, global.ng.material.icon, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib']['field-title'], global['pepperi-addons']['ngx-lib']['group-buttons'], global.ng.cdk.bidi, global.translate));
}(this, (function (exports, i0, i2, core, formField, i4, i5, i1, i1$1, i3, i7, i8, i9) { 'use strict';

    function PepperiInternalButtonComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c0 = function (a0, a1, a2, a3) { return { disabled: a0, "pull-left": a1, "pull-right": a2, "center-alignment": a3 }; };
    function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 11);
            i0.ɵɵlistener("click", function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.onButtonClicked($event); });
            i0.ɵɵelementStart(1, "span", 12);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-icon", 13);
            i0.ɵɵelementStart(5, "pep-icon", 14);
            i0.ɵɵlistener("click", function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template_pep_icon_click_5_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19.onButtonClicked($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r14.formattedValue);
            i0.ɵɵproperty("id", ctx_r14.key)("ngClass", i0.ɵɵpureFunction4(6, _c0, ctx_r14.disabled, ctx_r14.xAlignment == "1" || ctx_r14.xAlignment == "0", ctx_r14.xAlignment == "2", ctx_r14.xAlignment == "3"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, "ACTIONS.CREATE_NEW"));
        }
    }
    function PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-group-buttons", 15);
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("buttons", ctx_r16.referenceButtons)("buttonsClass", "md regular")("buttonsDisabled", false)("viewType", ctx_r16.GROUP_BUTTONS_VIEW_TYPE.Split);
        }
    }
    function PepperiInternalButtonComponent_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵelement(1, "pep-field-title", 8);
            i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_3_Template, 6, 11, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, PepperiInternalButtonComponent_ng_container_1_ng_template_2_ng_template_5_Template, 1, 4, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r13 = i0.ɵɵreference(4);
            var _r15 = i0.ɵɵreference(6);
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r9.label)("required", ctx_r9.required)("disabled", ctx_r9.disabled)("xAlignment", ctx_r9.xAlignment)("showTitle", ctx_r9.showTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r9.createNewReference)("ngIfThen", _r13)("ngIfElse", _r15);
        }
    }
    function PepperiInternalButtonComponent_ng_container_1_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalButtonComponent_ng_container_1_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_1_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 16);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r5 = i0.ɵɵreference(7);
            i0.ɵɵproperty("ngTemplateOutlet", _r5);
        }
    }
    function PepperiInternalButtonComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_1_ng_template_2_Template, 7, 8, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_1_ng_template_4_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r8 = i0.ɵɵreference(3);
            var _r10 = i0.ɵɵreference(5);
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.layoutType === ctx_r0.LAYOUT_TYPE.PepperiForm)("ngIfThen", _r8)("ngIfElse", _r10);
        }
    }
    function PepperiInternalButtonComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalButtonComponent_ng_container_2_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c1 = function () { return { internal: true }; };
    function PepperiInternalButtonComponent_ng_container_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 17);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r3 = i0.ɵɵreference(5);
            i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c1));
        }
    }
    function PepperiInternalButtonComponent_ng_container_2_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalButtonComponent_ng_container_2_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_2_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 16);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r5 = i0.ɵɵreference(7);
            i0.ɵɵproperty("ngTemplateOutlet", _r5);
        }
    }
    function PepperiInternalButtonComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_2_ng_template_2_Template, 1, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_2_ng_template_4_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r22 = i0.ɵɵreference(3);
            var _r24 = i0.ɵɵreference(5);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiForm)("ngIfThen", _r22)("ngIfElse", _r24);
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_2_pep_icon_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-icon", 21);
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r33_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 19);
            i0.ɵɵlistener("click", function PepperiInternalButtonComponent_ng_container_3_ng_container_2_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r33_1); var ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.onButtonClicked($event); });
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_3_ng_container_2_pep_icon_3_Template, 1, 0, "pep-icon", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r28 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r28.key);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r28.key == "ObjectMenu");
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 17);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(3);
            var _r3 = i0.ɵɵreference(5);
            i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c1));
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 24);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r38 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r38.formattedValue);
            i0.ɵɵproperty("id", ctx_r38.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r38.formattedValue);
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_2_Template, 1, 3, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_3_ng_container_3_ng_template_4_Template, 2, 3, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r35 = i0.ɵɵreference(3);
            var _r37 = i0.ɵɵreference(5);
            var ctx_r29 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r29.layoutType === ctx_r29.LAYOUT_TYPE.PepperiTable)("ngIfThen", _r37)("ngIfElse", _r35);
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c2 = function () { return { internal: false }; };
    function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 17);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(3);
            var _r3 = i0.ɵɵreference(5);
            i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction0(2, _c2));
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 16);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(3);
            var _r5 = i0.ɵɵreference(7);
            i0.ɵɵproperty("ngTemplateOutlet", _r5);
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_2_Template, 1, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_3_ng_container_4_ng_template_4_Template, 1, 1, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r41 = i0.ɵɵreference(3);
            var _r43 = i0.ɵɵreference(5);
            var ctx_r30 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r30.layoutType === ctx_r30.LAYOUT_TYPE.PepperiForm)("ngIfThen", _r41)("ngIfElse", _r43);
        }
    }
    function PepperiInternalButtonComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementContainerStart(1, 0);
            i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_3_ng_container_2_Template, 4, 2, "ng-container", 1);
            i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_3_ng_container_3_Template, 6, 3, "ng-container", 1);
            i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_container_3_ng_container_4_Template, 6, 3, "ng-container", 18);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", ctx_r2.key);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "ObjectMenu");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "Agents" || "ContactPersons" || "Buyers");
        }
    }
    function PepperiInternalButtonComponent_ng_template_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalButtonComponent_ng_template_4_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r54_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 30);
            i0.ɵɵlistener("click", function PepperiInternalButtonComponent_ng_template_4_ng_template_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r54_1); var ctx_r53 = i0.ɵɵnextContext(2); return ctx_r53.onButtonClicked($event); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r50 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("title", ctx_r50.formattedValue);
            i0.ɵɵpropertyInterpolate("dir", ctx_r50.xAlignment == "2" ? "rtl" : "ltr");
            i0.ɵɵproperty("id", ctx_r50.key)("disabled", ctx_r50.disabled)("ngClass", i0.ɵɵpureFunction4(6, _c0, ctx_r50.disabled, ctx_r50.xAlignment == "1" || ctx_r50.xAlignment == "0", ctx_r50.xAlignment == "2", ctx_r50.xAlignment == "3"));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r50.formattedValue, " ");
        }
    }
    function PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 12);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-icon");
            i0.ɵɵelement(4, "pep-icon", 31);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "LIST.SELECT"), "\u00A0");
        }
    }
    function PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 12);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-icon");
            i0.ɵɵelement(4, "pep-icon", 32);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r59 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2("", ctx_r59.formattedValue, "\u00A0", i0.ɵɵpipeBind1(2, 2, "LIST.SELECTED"), "\u00A0");
        }
    }
    function PepperiInternalButtonComponent_ng_template_4_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r61_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 30);
            i0.ɵɵlistener("click", function PepperiInternalButtonComponent_ng_template_4_ng_template_5_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r61_1); var ctx_r60 = i0.ɵɵnextContext(2); return ctx_r60.openReferenceObjectInternal($event); });
            i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_2_Template, 5, 3, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_template_4_ng_template_5_ng_template_4_Template, 5, 4, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r56 = i0.ɵɵreference(3);
            var _r58 = i0.ɵɵreference(5);
            var ctx_r52 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("title", ctx_r52.formattedValue);
            i0.ɵɵpropertyInterpolate("dir", ctx_r52.xAlignment == "2" ? "rtl" : "ltr");
            i0.ɵɵproperty("id", ctx_r52.key)("disabled", ctx_r52.disabled)("ngClass", i0.ɵɵpureFunction4(8, _c0, ctx_r52.disabled, ctx_r52.xAlignment == "1" || ctx_r52.xAlignment == "0", ctx_r52.xAlignment == "2", ctx_r52.xAlignment == "3"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r52.formattedValue == "0" || ctx_r52.formattedValue == "")("ngIfThen", _r56)("ngIfElse", _r58);
        }
    }
    function PepperiInternalButtonComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 27);
            i0.ɵɵelement(1, "pep-field-title", 8);
            i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_template_4_ng_container_2_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_template_4_ng_template_3_Template, 2, 11, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, PepperiInternalButtonComponent_ng_template_4_ng_template_5_Template, 6, 13, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var internal_r47 = ctx.internal;
            var _r49 = i0.ɵɵreference(4);
            var _r51 = i0.ɵɵreference(6);
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r4.label)("required", ctx_r4.required)("disabled", ctx_r4.disabled)("xAlignment", ctx_r4.xAlignment)("showTitle", ctx_r4.showTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", internal_r47)("ngIfThen", _r51)("ngIfElse", _r49);
        }
    }
    function PepperiInternalButtonComponent_ng_template_6_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 38);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r67 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r67.formattedValue);
            i0.ɵɵproperty("id", ctx_r67.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r67.formattedValue, " ");
        }
    }
    function PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 39);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r68 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r68.formattedValue);
            i0.ɵɵproperty("id", ctx_r68.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r68.formattedValue, " ");
        }
    }
    function PepperiInternalButtonComponent_ng_template_6_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r70_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 35);
            i0.ɵɵlistener("mousedown", function PepperiInternalButtonComponent_ng_template_6_ng_template_1_Template_a_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r70_1); var ctx_r69 = i0.ɵɵnextContext(2); return ctx_r69.hrefFunction($event); });
            i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_1_Template, 2, 3, "span", 36);
            i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_template_6_ng_template_1_span_2_Template, 2, 3, "span", 37);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r64 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("href", ctx_r64.value, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r64.layoutType === ctx_r64.LAYOUT_TYPE.PepperiTable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r64.layoutType !== ctx_r64.LAYOUT_TYPE.PepperiTable);
        }
    }
    function PepperiInternalButtonComponent_ng_template_6_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function PepperiInternalButtonComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiInternalButtonComponent_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_template_6_ng_template_1_Template, 3, 3, "ng-template", null, 33, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_template_6_ng_template_3_Template, 2, 0, "ng-template", null, 34, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r63 = i0.ɵɵreference(2);
            var _r65 = i0.ɵɵreference(4);
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", (ctx_r6.formattedValue == null ? null : ctx_r6.formattedValue.length) > 0)("ngIfThen", _r63)("ngIfElse", _r65);
        }
    }
    var PepperiInternalButtonComponent = /** @class */ (function () {
        function PepperiInternalButtonComponent(customizationService, renderer, element) {
            var _this = this;
            this.customizationService = customizationService;
            this.renderer = renderer;
            this.element = element;
            this.key = '';
            this.value = '';
            this.formattedValue = '';
            this.label = '';
            this.type = 'button'; // || 'reference' || 'listofobjects' || 'Agents' || 'ContactPersons' || 'Buyers', etc
            this.required = false;
            this.disabled = false;
            this.readonly = false;
            this.xAlignment = '0';
            this.rowSpan = 1;
            this.controlType = 'button';
            this.form = null;
            this.showTitle = true;
            this.layoutType = i1.LAYOUT_TYPE.PepperiForm;
            this.elementClicked = new i0.EventEmitter();
            this.valueChanged = new i0.EventEmitter();
            this.LAYOUT_TYPE = i1.LAYOUT_TYPE;
            this.GROUP_BUTTONS_VIEW_TYPE = i7.GROUP_BUTTONS_VIEW_TYPE;
            this.standAlone = false;
            this.createNewReference = false;
            this.referenceButtons = [
                { Value: '', Class: '', Callback: function () { return _this.onButtonClicked(event); }, Icon: null },
                { Value: '', Class: 'caution', Callback: function () { return _this.remove(event); }, Icon: 'system_bin' },
            ];
        }
        PepperiInternalButtonComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
                this.formattedValue = this.formattedValue || this.value;
                this.renderer.addClass(this.element.nativeElement, i1.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }
        };
        PepperiInternalButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.type === 'reference') {
                this.createNewReference = this.value.length === 0;
                this.referenceButtons[0].Value = this.formattedValue;
            }
        };
        PepperiInternalButtonComponent.prototype.ngOnDestroy = function () {
            if (this.elementClicked) {
                this.elementClicked.unsubscribe();
            }
        };
        PepperiInternalButtonComponent.prototype.onButtonClicked = function (event) {
            if (this.type === 'reference') {
                var valueArr = this.value.split('/');
                this.elementClicked.emit({
                    apiName: this.key,
                    eventWhich: event.which,
                    value: valueArr[valueArr.length - 1],
                    referenceObjectInternalType: this.referenceObjectInternalType,
                });
            }
            else if (this.type === 'button' && true) {
                this.elementClicked.emit({
                    apiName: this.key,
                    eventWhich: event.which,
                    value: this.value // should contain the program name
                });
            }
            else {
                this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
            }
        };
        PepperiInternalButtonComponent.prototype.hrefFunction = function (event) {
            if (event.which === 1 /*|| event.which === 2*/) {
                this.onButtonClicked(event);
            }
        };
        PepperiInternalButtonComponent.prototype.openReferenceObjectInternal = function (event) {
            this.elementClicked.emit({
                apiName: this.key,
                eventWhich: event.which,
                value: this.value,
                referenceObjectInternalType: this.referenceObjectInternalType
            });
        };
        PepperiInternalButtonComponent.prototype.remove = function (event) {
            this.value = '';
            this.valueChanged.emit({ apiName: this.key, value: this.value });
        };
        return PepperiInternalButtonComponent;
    }());
    PepperiInternalButtonComponent.ɵfac = function PepperiInternalButtonComponent_Factory(t) { return new (t || PepperiInternalButtonComponent)(i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PepperiInternalButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiInternalButtonComponent, selectors: [["pep-internal-button"]], inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", referenceObjectInternalType: "referenceObjectInternalType", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", showTitle: "showTitle", layoutType: "layoutType" }, outputs: { elementClicked: "elementClicked", valueChanged: "valueChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 4, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["buttonTemplate", ""], ["linkTemplate", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], ["formBlock", ""], ["notFormBlock", ""], [1, "pepperi-button-container", "reference-button"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], ["newBlock", ""], ["existingBlock", ""], ["mat-button", "", 1, "pepperi-button", "md", "regular", 3, "id", "title", "ngClass", "click"], [1, "pull-left", "flip"], ["pepRtlClass", "", 1, "pull-right", "flip"], ["name", "number_plus", 3, "click"], [3, "buttons", "buttonsClass", "buttonsDisabled", "viewType"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngSwitchDefault"], [3, "title", "click"], ["name", "system_menu", 4, "ngIf"], ["name", "system_menu"], ["nonTableBlock", ""], ["tableBlock", ""], [1, "pepperi-report-input", "readonly", "body-sm", 3, "id", "title"], ["buttonBlock", ""], ["linkBlock", ""], [1, "pepperi-button-container"], ["regularButtonTemplate", ""], ["internalButtonTemplate", ""], ["mat-button", "", 1, "pepperi-button", "md", "regular", 3, "id", "title", "dir", "disabled", "ngClass", "click"], ["name", "number_plus"], ["name", "system_edit"], ["notEmptyBlock", ""], ["emptyBlock", ""], [1, "color-link", 3, "href", "mousedown"], ["class", "body-sm pepperi-report-input readonly", 3, "id", "title", 4, "ngIf"], ["class", "body-sm pepperi-card-input", "style", "display: block;", 3, "id", "title", 4, "ngIf"], [1, "body-sm", "pepperi-report-input", "readonly", 3, "id", "title"], [1, "body-sm", "pepperi-card-input", 2, "display", "block", 3, "id", "title"]], template: function PepperiInternalButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, PepperiInternalButtonComponent_ng_container_1_Template, 6, 3, "ng-container", 1);
                i0.ɵɵtemplate(2, PepperiInternalButtonComponent_ng_container_2_Template, 6, 3, "ng-container", 1);
                i0.ɵɵtemplate(3, PepperiInternalButtonComponent_ng_container_3_Template, 5, 3, "ng-container", 1);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(4, PepperiInternalButtonComponent_ng_template_4_Template, 7, 8, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(6, PepperiInternalButtonComponent_ng_template_6_Template, 5, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngSwitch", ctx.type);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "reference");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "listofobjects");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "button");
            }
        }, directives: [i2.NgSwitch, i2.NgSwitchCase, i2.NgIf, i3.PepperiFieldTitleComponent, i4.MatButton, i2.NgClass, i5.MatIcon, i1.RtlClassDirective, i1$1.PepperiIconComponent, i7.GroupButtonsComponent, i2.NgTemplateOutlet, i2.NgSwitchDefault, i8.Dir], pipes: [i9.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.pepperi-button-container[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.pepperi-button-container[_ngcontent-%COMP%]   .center-alignment[_ngcontent-%COMP%]{left:50%;position:absolute;transform:translate(-50%)}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .split-buttons{float:left}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type, .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .split-buttons button:last-of-type{padding:0;width:1.5rem}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .pepperi-button mat-icon{margin-left:var(--pep-spacing-md,.75rem)}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]   mat-icon.rtl[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .pepperi-button mat-icon.rtl{margin-left:unset;margin-right:var(--pep-spacing-md,.75rem)}.pepperi-button-container.reference-button[_ngcontent-%COMP%]   .pepperi-button.last-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .pepperi-button-container.reference-button[_ngcontent-%COMP%]    .pepperi-button.last-button mat-icon{margin:0}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiInternalButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-internal-button',
                        templateUrl: './internal-button.component.html',
                        styleUrls: ['./internal-button.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i1.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], formattedValue: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], referenceObjectInternalType: [{
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
                }], form: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], elementClicked: [{
                    type: i0.Output
                }], valueChanged: [{
                    type: i0.Output
                }] });
    })();

    var PepperiInternalButtonModule = /** @class */ (function () {
        function PepperiInternalButtonModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconSystemEdit,
                i1$1.pepperiIconSystemMenu,
                i1$1.pepperiIconNumberPlus
            ]);
        }
        return PepperiInternalButtonModule;
    }());
    PepperiInternalButtonModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiInternalButtonModule });
    PepperiInternalButtonModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiInternalButtonModule_Factory(t) { return new (t || PepperiInternalButtonModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i2.CommonModule,
                // Material modules,
                formField.MatFormFieldModule,
                core.MatCommonModule,
                i4.MatButtonModule,
                i5.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i3.PepperiFieldTitleModule,
                i7.PepperiGroupButtonsModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiInternalButtonModule, { declarations: [PepperiInternalButtonComponent], imports: [i2.CommonModule,
                // Material modules,
                formField.MatFormFieldModule,
                core.MatCommonModule,
                i4.MatButtonModule,
                i5.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i3.PepperiFieldTitleModule,
                i7.PepperiGroupButtonsModule], exports: [PepperiInternalButtonComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiInternalButtonModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            // Material modules,
                            formField.MatFormFieldModule,
                            core.MatCommonModule,
                            i4.MatButtonModule,
                            i5.MatIconModule,
                            // Pepperi modules
                            i1.PepperiModule,
                            i1$1.PepperiIconModule,
                            i3.PepperiFieldTitleModule,
                            i7.PepperiGroupButtonsModule
                        ],
                        exports: [PepperiInternalButtonComponent],
                        declarations: [PepperiInternalButtonComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/internal-button
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiInternalButtonComponent = PepperiInternalButtonComponent;
    exports.PepperiInternalButtonModule = PepperiInternalButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-internal-button.umd.js.map
