import { ɵɵelementContainer, ɵɵelementContainerStart, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵclassMapInterpolate1, ɵɵpropertyInterpolate, ɵɵtextInterpolate, ɵɵtemplate, ɵɵproperty, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵtemplateRefExtractor, ɵɵreference, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';

function PepperiSeparatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiSeparatorComponent_ng_template_1_Template(rf, ctx) { }
function PepperiSeparatorComponent_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4);
    ɵɵelementStart(2, "span", 5);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("pepperi-separator-field wrap pepperi-border-bottom align-", ctx_r5.xAlignment, "");
    ɵɵpropertyInterpolate("title", ctx_r5.label);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r5.label);
} }
function PepperiSeparatorComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 6);
    ɵɵelementStart(2, "span", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("pepperi-separator-field pepperi-small-separator-field pepperi-border-bottom text-align-", ctx_r6.xAlignment, "");
    ɵɵpropertyInterpolate("dir", ctx_r6.xAlignment == "2" ? "rtl" : "ltr");
    ɵɵpropertyInterpolate("title", ctx_r6.label);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r6.label);
} }
function PepperiSeparatorComponent_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label", 8);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r7.label);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r7.label);
} }
function PepperiSeparatorComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiSeparatorComponent_ng_template_3_ng_container_0_Template, 4, 5, "ng-container", 3);
    ɵɵtemplate(1, PepperiSeparatorComponent_ng_template_3_ng_container_1_Template, 4, 6, "ng-container", 3);
    ɵɵtemplate(2, PepperiSeparatorComponent_ng_template_3_ng_container_2_Template, 3, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiForm);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiCard);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiTable);
} }
class PepperiSeparatorComponent {
    constructor(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.key = '';
        this.label = '';
        this.xAlignment = '0';
        this.controlType = 'separator';
        this.form = null;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.standAlone = false;
    }
    ngOnInit() {
        if (this.form === null) {
            this.standAlone = true;
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
    }
}
PepperiSeparatorComponent.ɵfac = function PepperiSeparatorComponent_Factory(t) { return new (t || PepperiSeparatorComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
PepperiSeparatorComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiSeparatorComponent, selectors: [["pep-separator"]], inputs: { key: "key", label: "label", xAlignment: "xAlignment", form: "form", layoutType: "layoutType" }, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["emptyBlock", ""], ["separatorBlock", ""], [4, "ngIf"], [3, "title"], [1, "block-with-text", "body-md"], [3, "dir", "title"], [1, "small-block-with-text", "body-sm"], [1, "cl", 3, "title"]], template: function PepperiSeparatorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PepperiSeparatorComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        ɵɵtemplate(1, PepperiSeparatorComponent_ng_template_1_Template, 0, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PepperiSeparatorComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(2);
        const _r3 = ɵɵreference(4);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.Editmodal)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [NgIf], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiSeparatorComponent, [{
        type: Component,
        args: [{
                selector: 'pep-separator',
                templateUrl: './separator.component.html',
                styleUrls: ['./separator.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, { key: [{
            type: Input
        }], label: [{
            type: Input
        }], xAlignment: [{
            type: Input
        }], form: [{
            type: Input
        }], layoutType: [{
            type: Input
        }] }); })();

class PepperiSeparatorModule {
}
PepperiSeparatorModule.ɵmod = ɵɵdefineNgModule({ type: PepperiSeparatorModule });
PepperiSeparatorModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiSeparatorModule_Factory(t) { return new (t || PepperiSeparatorModule)(); }, imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiSeparatorModule, { declarations: [PepperiSeparatorComponent], imports: [CommonModule], exports: [PepperiSeparatorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiSeparatorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                exports: [PepperiSeparatorComponent],
                declarations: [PepperiSeparatorComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-lib/separator
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiSeparatorComponent, PepperiSeparatorModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-separator.js.map
