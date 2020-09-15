import { ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵnextContext, ɵɵproperty, ɵɵtext, ɵɵpureFunction1, ɵɵadvance, ɵɵtextInterpolate1, ɵɵpureFunction2, ɵɵtextInterpolate2, ɵɵdefineComponent, ɵɵtemplate, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgClass, NgStyle, NgIf, CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { PepperiIconComponent, pepperiIconSystemMust, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';

function PepperiFieldTitleComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵelement(1, "pep-icon", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.xAlignment == "2" ? "pull-right flip" : "pull-left flip");
} }
const _c0 = function (a0) { return { "max-width": a0 }; };
function PepperiFieldTitleComponent_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-label", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c0, ctx_r1.maxFieldCharacters > 0 ? "85%" : "100%"));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.label, "");
} }
const _c1 = function (a0, a1) { return { "pull-right": a0, "pull-left": a1 }; };
function PepperiFieldTitleComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c1, ctx_r2.xAlignment == "1" || ctx_r2.xAlignment == "0", ctx_r2.xAlignment == "2"));
    ɵɵadvance(1);
    ɵɵtextInterpolate2("\u00A0", ctx_r2.inputLength || 0, "/", ctx_r2.maxFieldCharacters, "");
} }
const _c2 = function (a0) { return { disable: a0 }; };
const _c3 = function (a0) { return { "text-align": a0 }; };
class PepperiFieldTitleComponent {
    constructor() {
        this.label = '';
        this.required = false;
        this.disabled = false;
        this.maxFieldCharacters = 0;
        this.xAlignment = '0';
        this.showTitle = true;
        this.inputLength = 0;
    }
}
PepperiFieldTitleComponent.ɵfac = function PepperiFieldTitleComponent_Factory(t) { return new (t || PepperiFieldTitleComponent)(); };
PepperiFieldTitleComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiFieldTitleComponent, selectors: [["pep-field-title"]], inputs: { label: "label", required: "required", disabled: "disabled", maxFieldCharacters: "maxFieldCharacters", xAlignment: "xAlignment", showTitle: "showTitle", inputLength: "inputLength" }, decls: 4, vars: 9, consts: [[1, "mat-form-title", 3, "ngClass", "ngStyle"], ["class", "required", 3, "ngClass", 4, "ngIf"], ["class", "body-xs", 3, "ngStyle", 4, "ngIf"], ["class", "body-xs", 3, "ngClass", 4, "ngIf"], [1, "required", 3, "ngClass"], ["name", "system_must"], [1, "body-xs", 3, "ngStyle"], [1, "body-xs", 3, "ngClass"]], template: function PepperiFieldTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, PepperiFieldTitleComponent_span_1_Template, 2, 1, "span", 1);
        ɵɵtemplate(2, PepperiFieldTitleComponent_mat_label_2_Template, 2, 4, "mat-label", 2);
        ɵɵtemplate(3, PepperiFieldTitleComponent_span_3_Template, 2, 6, "span", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c2, ctx.disabled))("ngStyle", ɵɵpureFunction1(7, _c3, ctx.xAlignment == "3" ? "center" : ctx.xAlignment == "2" ? "right" : "left"));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.required);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showTitle);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.maxFieldCharacters > 0);
    } }, directives: [NgClass, NgStyle, NgIf, PepperiIconComponent, MatLabel], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;width:inherit}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiFieldTitleComponent, [{
        type: Component,
        args: [{
                selector: 'pep-field-title',
                templateUrl: './field-title.component.html',
                styleUrls: ['./field-title.component.scss'],
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], maxFieldCharacters: [{
            type: Input
        }], xAlignment: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], inputLength: [{
            type: Input
        }] }); })();

class PepperiFieldTitleModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemMust
        ]);
    }
}
PepperiFieldTitleModule.ɵmod = ɵɵdefineNgModule({ type: PepperiFieldTitleModule });
PepperiFieldTitleModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiFieldTitleModule_Factory(t) { return new (t || PepperiFieldTitleModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules,
            MatCommonModule,
            MatFormFieldModule,
            // Pepperi modules
            PepperiIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiFieldTitleModule, { declarations: [PepperiFieldTitleComponent], imports: [CommonModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        // Pepperi modules
        PepperiIconModule], exports: [PepperiFieldTitleComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiFieldTitleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules,
                    MatCommonModule,
                    MatFormFieldModule,
                    // Pepperi modules
                    PepperiIconModule
                ],
                exports: [PepperiFieldTitleComponent],
                declarations: [PepperiFieldTitleComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/field-title
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiFieldTitleComponent, PepperiFieldTitleModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-field-title.js.map
