import { ɵɵelementContainer, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelement, ɵɵelementEnd, ɵɵclassMapInterpolate1, ɵɵpropertyInterpolate, ɵɵproperty, ɵɵpureFunction5, ɵɵtext, ɵɵpipe, ɵɵadvance, ɵɵtextInterpolate, ɵɵpipeBind1, ɵɵtemplate, ɵɵreference, ɵɵpureFunction4, ɵɵpureFunction1, EventEmitter, ɵɵdefineComponent, ɵɵtemplateRefExtractor, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgForOf, CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuTrigger, _MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LAYOUT_TYPE, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemMenu, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { TranslatePipe } from '@ngx-translate/core';

function PepperiMenuComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return { "lock-events": a0, "left-alignment": a1, "right-alignment": a2, "center-alignment": a3, "invert": a4 }; };
function PepperiMenuComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function PepperiMenuComponent_ng_template_1_Template_button_click_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.menuClicked($event); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("pepperi-menu pepperi-button icon-button weak ", ctx_r2.layoutType === ctx_r2.LAYOUT_TYPE.PepperiTable ? "sm" : "md", "");
    ɵɵpropertyInterpolate("title", ctx_r2.label);
    ɵɵproperty("ngClass", ɵɵpureFunction5(5, _c0, ctx_r2.disabled, ctx_r2.xAlignment == "1" || ctx_r2.xAlignment == "0", ctx_r2.xAlignment == "2", ctx_r2.xAlignment == "3", ctx_r2.invertClass));
} }
function PepperiMenuComponent_ng_template_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function PepperiMenuComponent_ng_template_3_button_5_Template_button_click_0_listener() { ɵɵrestoreView(_r11); const option_r9 = ctx.$implicit; const ctx_r10 = ɵɵnextContext(2); return ctx_r10.menuItemClicked(option_r9.Key); });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 1, option_r9.Value));
} }
const _c1 = function (a0, a1, a2, a3) { return { "left-alignment": a0, "right-alignment": a1, "center-alignment": a2, "invert": a3 }; };
const _c2 = function (a0) { return { rtlMenu: a0 }; };
function PepperiMenuComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 5);
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-menu", 6, 7);
    ɵɵtemplate(5, PepperiMenuComponent_ng_template_3_button_5_Template, 4, 3, "button", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = ɵɵreference(4);
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("pepperi-menu pepperi-button icon-button weak ", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiTable ? "sm" : "md", "");
    ɵɵpropertyInterpolate("title", ctx_r4.label);
    ɵɵproperty("matMenuTriggerFor", _r7)("ngClass", ɵɵpureFunction4(9, _c1, ctx_r4.xAlignment == "1" || ctx_r4.xAlignment == "0", ctx_r4.xAlignment == "2", ctx_r4.xAlignment == "3", ctx_r4.invertClass));
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("xPosition", ctx_r4.xAlignment == "2" ? "after" : "before");
    ɵɵproperty("ngClass", ɵɵpureFunction1(14, _c2, ctx_r4.xAlignment == "2"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r4.options);
} }
class PepperiMenuComponent {
    constructor() {
        this.key = '';
        this.label = '';
        this.disabled = false;
        this.xAlignment = '0';
        // @Input() hasSubMenu = false;
        this.options = [];
        this.invertClass = true;
        this.controlType = 'menu';
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.elementClicked = new EventEmitter();
        this.notifyMenuItemClicked = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
    }
    ngOnDestroy() {
        if (this.elementClicked) {
            this.elementClicked.unsubscribe();
        }
        if (this.notifyMenuItemClicked) {
            this.notifyMenuItemClicked.unsubscribe();
        }
    }
    menuClicked(event) {
        this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
    }
    menuItemClicked(itemKey) {
        this.notifyMenuItemClicked.emit({ apiName: itemKey });
    }
}
PepperiMenuComponent.ɵfac = function PepperiMenuComponent_Factory(t) { return new (t || PepperiMenuComponent)(); };
PepperiMenuComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiMenuComponent, selectors: [["pep-menu"]], inputs: { key: "key", label: "label", disabled: "disabled", xAlignment: "xAlignment", options: "options", invertClass: "invertClass", layoutType: "layoutType" }, outputs: { elementClicked: "elementClicked", notifyMenuItemClicked: "notifyMenuItemClicked" }, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["noSubMenuBlock", ""], ["subMenuBlock", ""], ["mat-button", "", 3, "title", "ngClass", "click"], ["name", "system_menu"], ["mat-button", "", "menu-blur", "", 3, "matMenuTriggerFor", "ngClass", "title"], [3, "xPosition", "ngClass"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]], template: function PepperiMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PepperiMenuComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        ɵɵtemplate(1, PepperiMenuComponent_ng_template_1_Template, 3, 11, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PepperiMenuComponent_ng_template_3_Template, 6, 16, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(2);
        const _r3 = ɵɵreference(4);
        ɵɵproperty("ngIf", (ctx.options == null ? null : ctx.options.length) > 0)("ngIfThen", _r3)("ngIfElse", _r1);
    } }, directives: [NgIf, NgClass, MatIcon, PepperiIconComponent, MatMenuTrigger, _MatMenu, NgForOf, MatMenuItem], pipes: [TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.pepperi-menu[_ngcontent-%COMP%]{cursor:pointer}.pepperi-menu.left-alignment[_ngcontent-%COMP%]{justify-self:flex-start}.pepperi-menu.center-alignment[_ngcontent-%COMP%]{-ms-grid-column-align:center;justify-self:center}.pepperi-menu.right-alignment[_ngcontent-%COMP%]{justify-self:flex-end}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiMenuComponent, [{
        type: Component,
        args: [{
                selector: 'pep-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { key: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], xAlignment: [{
            type: Input
        }], options: [{
            type: Input
        }], invertClass: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], elementClicked: [{
            type: Output
        }], notifyMenuItemClicked: [{
            type: Output
        }] }); })();

class PepperiMenuModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemMenu
        ]);
    }
}
PepperiMenuModule.ɵmod = ɵɵdefineNgModule({ type: PepperiMenuModule });
PepperiMenuModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiMenuModule_Factory(t) { return new (t || PepperiMenuModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules,
            MatCommonModule,
            MatFormFieldModule,
            MatMenuModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiMenuModule, { declarations: [PepperiMenuComponent], imports: [CommonModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule], exports: [PepperiMenuComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiMenuModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules,
                    MatCommonModule,
                    MatFormFieldModule,
                    MatMenuModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule
                ],
                exports: [PepperiMenuComponent],
                declarations: [PepperiMenuComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/menu
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiMenuComponent, PepperiMenuModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-menu.js.map
