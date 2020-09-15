import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵclassMapInterpolate1, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵelement, ɵɵreference, ɵɵpureFunction1, ɵɵpropertyInterpolate, ɵɵclassMapInterpolate2, ɵɵpureFunction4, ɵɵdirectiveInject, ɵɵdefineComponent, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgForOf, NgClass, CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatMenuTrigger, _MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LayoutService, RtlDirectionDirective, MenuBlurDirective, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconArrowUp, pepperiIconArrowDown, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { delay } from 'rxjs/operators';

function GroupButtonsComponent_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("click", function GroupButtonsComponent_ng_container_1_button_1_Template_button_click_0_listener($event) { ɵɵrestoreView(_r6); const button_r4 = ctx.$implicit; return button_r4 == null ? null : button_r4.Callback($event); });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const button_r4 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("pepperi-button spacing-element pull-left flip first-button mat-button ", ctx_r3.buttonsClass, "");
    ɵɵproperty("disabled", ctx_r3.buttonsDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(button_r4 == null ? null : button_r4.Value);
} }
function GroupButtonsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GroupButtonsComponent_ng_container_1_button_1_Template, 3, 5, "button", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.buttons);
} }
function GroupButtonsComponent_div_2_ng_container_9_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function GroupButtonsComponent_div_2_ng_container_9_button_1_Template_button_click_0_listener($event) { ɵɵrestoreView(_r15); const button_r9 = ɵɵnextContext().$implicit; return button_r9 == null ? null : button_r9.Callback($event); });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const button_r9 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(button_r9 == null ? null : button_r9.Value);
} }
function GroupButtonsComponent_div_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GroupButtonsComponent_div_2_ng_container_9_button_1_Template, 3, 1, "button", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const isFirst_r11 = ctx.first;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !isFirst_r11);
} }
const _c0 = function (a0) { return { dropup: a0 }; };
function GroupButtonsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "button", 5);
    ɵɵlistener("click", function GroupButtonsComponent_div_2_Template_button_click_1_listener($event) { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(); return ctx_r17.buttons[0] == null ? null : ctx_r17.buttons[0].Callback($event); });
    ɵɵelementStart(2, "span", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 8);
    ɵɵelementStart(5, "mat-icon");
    ɵɵelement(6, "pep-icon", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "mat-menu", 10, 11);
    ɵɵtemplate(9, GroupButtonsComponent_div_2_ng_container_9_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = ɵɵreference(8);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(13, _c0, ctx_r1.screenSize >= 2));
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("pepperi-button pull-left flip first-button mat-button ", ctx_r1.buttonsClass, "");
    ɵɵproperty("disabled", ctx_r1.buttonsDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.buttons[0] == null ? null : ctx_r1.buttons[0].Value);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("pepperi-button icon-button pull-right flip last-button mat-button ", ctx_r1.buttonsClass, "");
    ɵɵproperty("matMenuTriggerFor", _r7)("disabled", ctx_r1.buttonsDisabled);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("name", ctx_r1.screenSize < 2 ? "arrow_down" : "arrow_up");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r1.buttons);
} }
function GroupButtonsComponent_div_3_button_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon");
    ɵɵelementStart(1, "pep-icon", 18);
    ɵɵlistener("click", function GroupButtonsComponent_div_3_button_1_mat_icon_1_Template_pep_icon_click_1_listener($event) { ɵɵrestoreView(_r28); const button_r20 = ɵɵnextContext().$implicit; return button_r20 == null ? null : button_r20.Callback($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const button_r20 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("name", button_r20 == null ? null : button_r20.Icon);
} }
function GroupButtonsComponent_div_3_button_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const button_r20 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(button_r20 == null ? null : button_r20.Value);
} }
const _c1 = function (a0, a1, a2, a3) { return { "first-button": a0, "middle-button": a1, "last-button": a2, "icon-button": a3 }; };
function GroupButtonsComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function GroupButtonsComponent_div_3_button_1_Template_button_click_0_listener($event) { ɵɵrestoreView(_r32); const button_r20 = ctx.$implicit; return button_r20 == null ? null : button_r20.Callback($event); });
    ɵɵtemplate(1, GroupButtonsComponent_div_3_button_1_mat_icon_1_Template, 2, 1, "mat-icon", 1);
    ɵɵtemplate(2, GroupButtonsComponent_div_3_button_1_span_2_Template, 2, 1, "span", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    const button_r20 = ctx.$implicit;
    const isFirst_r22 = ctx.first;
    const isLast_r23 = ctx.last;
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("pepperi-button  split-button mat-button ", ctx_r19.buttonsClass, " ", button_r20 == null ? null : button_r20.Class, " pull-left flip");
    ɵɵproperty("ngClass", ɵɵpureFunction4(8, _c1, isFirst_r22, !isFirst_r22 && !isLast_r23, isLast_r23, button_r20 == null ? null : button_r20.Icon))("disabled", ctx_r19.buttonsDisabled);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", button_r20 == null ? null : button_r20.Icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", button_r20 == null ? null : button_r20.Value);
} }
function GroupButtonsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, GroupButtonsComponent_div_3_button_1_Template, 3, 13, "button", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.buttons);
} }
var GROUP_BUTTONS_VIEW_TYPE;
(function (GROUP_BUTTONS_VIEW_TYPE) {
    GROUP_BUTTONS_VIEW_TYPE[GROUP_BUTTONS_VIEW_TYPE["Regular"] = 0] = "Regular";
    GROUP_BUTTONS_VIEW_TYPE[GROUP_BUTTONS_VIEW_TYPE["Dropdown"] = 1] = "Dropdown";
    GROUP_BUTTONS_VIEW_TYPE[GROUP_BUTTONS_VIEW_TYPE["Split"] = 2] = "Split";
})(GROUP_BUTTONS_VIEW_TYPE || (GROUP_BUTTONS_VIEW_TYPE = {}));
class GroupButtonsComponent {
    // @Output() buttonClick: EventEmitter<PepperiGroupButton> = new EventEmitter<PepperiGroupButton>();
    constructor(layoutService) {
        this.layoutService = layoutService;
        this.GROUP_BUTTONS_VIEW_TYPE = GROUP_BUTTONS_VIEW_TYPE;
        this.viewType = GROUP_BUTTONS_VIEW_TYPE.Regular;
        this.layoutService.onResize$
            .pipe(delay(0))
            .subscribe(size => {
            this.screenSize = size;
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        // if (this.buttonClick) this.buttonClick.unsubscribe();
    }
}
GroupButtonsComponent.ɵfac = function GroupButtonsComponent_Factory(t) { return new (t || GroupButtonsComponent)(ɵɵdirectiveInject(LayoutService)); };
GroupButtonsComponent.ɵcmp = ɵɵdefineComponent({ type: GroupButtonsComponent, selectors: [["pep-group-buttons"]], inputs: { viewType: "viewType", buttons: "buttons", buttonsClass: "buttonsClass", buttonsDisabled: "buttonsDisabled" }, decls: 4, vars: 3, consts: [["pepRtlDirection", "", 1, "group-buttons-container"], [4, "ngIf"], ["class", "dropdown-buttons spacing-element", 3, "ngClass", 4, "ngIf"], ["class", "split-buttons", 4, "ngIf"], ["mat-button", "", 3, "class", "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "disabled", "click"], [1, "dropdown-buttons", "spacing-element", 3, "ngClass"], [1, "pepperi-btn-text"], ["pepMenuBlur", "", "mat-button", "", 3, "matMenuTriggerFor", "disabled"], [3, "name"], ["xPosition", "before"], ["actionsMenu", "matMenu"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "split-buttons"], ["mat-button", "", 3, "class", "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "ngClass", "disabled", "click"], [3, "name", "click"]], template: function GroupButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, GroupButtonsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵɵtemplate(2, GroupButtonsComponent_div_2_Template, 10, 15, "div", 2);
        ɵɵtemplate(3, GroupButtonsComponent_div_3_Template, 2, 1, "div", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.viewType == ctx.GROUP_BUTTONS_VIEW_TYPE.Regular);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.viewType == ctx.GROUP_BUTTONS_VIEW_TYPE.Dropdown);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.viewType == ctx.GROUP_BUTTONS_VIEW_TYPE.Split);
    } }, directives: [RtlDirectionDirective, NgIf, NgForOf, MatButton, NgClass, MenuBlurDirective, MatMenuTrigger, MatIcon, PepperiIconComponent, _MatMenu, MatMenuItem], styles: [".group-buttons-container[_ngcontent-%COMP%]{border-radius:var(--pep-border-radius-md,.25rem);display:flex}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-right:1px}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after, .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after{border-radius:var(--pep-border-radius-md,.25rem) 0 0 var(--pep-border-radius-md,.25rem)}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after, .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after{border-radius:0 var(--pep-border-radius-md,.25rem) var(--pep-border-radius-md,.25rem) 0}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]{margin-top:0!important}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .pepperi-button.cdk-focused[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .pepperi-button.cdk-focused[_ngcontent-%COMP%]{z-index:1}@media (max-width:767px){.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons.dropup[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons.dropup[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{max-width:calc(75vw - 4rem);padding:0 .25rem}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons.dropup[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons.dropup[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]{padding:0}}.group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-right:-1px}.group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .middle-button[_ngcontent-%COMP%]{border-radius:0}.group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]{height:inherit;width:inherit}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-left:1px;margin-right:unset}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after, .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after{border-radius:0 var(--pep-border-radius-md,.25rem) var(--pep-border-radius-md,.25rem) 0}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after, .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after{border-radius:var(--pep-border-radius-md,.25rem) 0 0 var(--pep-border-radius-md,.25rem)}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-left:-1px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GroupButtonsComponent, [{
        type: Component,
        args: [{
                selector: 'pep-group-buttons',
                templateUrl: './group-buttons.component.html',
                styleUrls: ['./group-buttons.component.scss'],
            }]
    }], function () { return [{ type: LayoutService }]; }, { viewType: [{
            type: Input
        }], buttons: [{
            type: Input
        }], buttonsClass: [{
            type: Input
        }], buttonsDisabled: [{
            type: Input
        }] }); })();

class PepperiGroupButtonsModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconArrowUp,
            pepperiIconArrowDown
        ]);
    }
}
PepperiGroupButtonsModule.ɵmod = ɵɵdefineNgModule({ type: PepperiGroupButtonsModule });
PepperiGroupButtonsModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiGroupButtonsModule_Factory(t) { return new (t || PepperiGroupButtonsModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules
            MatCommonModule,
            MatFormFieldModule,
            MatButtonModule,
            MatMenuModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiGroupButtonsModule, { declarations: [GroupButtonsComponent], imports: [CommonModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule], exports: [GroupButtonsComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiGroupButtonsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules
                    MatCommonModule,
                    MatFormFieldModule,
                    MatButtonModule,
                    MatMenuModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule
                ],
                exports: [GroupButtonsComponent],
                declarations: [GroupButtonsComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/group-buttons
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GROUP_BUTTONS_VIEW_TYPE, GroupButtonsComponent, PepperiGroupButtonsModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-group-buttons.js.map
