(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/core'), require('@angular/material/form-field'), require('@angular/material/button'), require('@angular/material/menu'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/group-buttons', ['exports', '@angular/core', '@angular/common', '@angular/material/core', '@angular/material/form-field', '@angular/material/button', '@angular/material/menu', '@angular/material/icon', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib']['group-buttons'] = {}), global.ng.core, global.ng.common, global.ng.material.core, global.ng.material.formField, global.ng.material.button, global.ng.material.menu, global.ng.material.icon, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global.rxjs.operators));
}(this, (function (exports, i0, i2, core, formField, i3, i4, i5, i1, i1$1, operators) { 'use strict';

    function GroupButtonsComponent_ng_container_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 5);
            i0.ɵɵlistener("click", function GroupButtonsComponent_ng_container_1_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var button_r4 = ctx.$implicit; return button_r4 == null ? null : button_r4.Callback($event); });
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r4 = ctx.$implicit;
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMapInterpolate1("pepperi-button spacing-element pull-left flip first-button mat-button ", ctx_r3.buttonsClass, "");
            i0.ɵɵproperty("disabled", ctx_r3.buttonsDisabled);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(button_r4 == null ? null : button_r4.Value);
        }
    }
    function GroupButtonsComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, GroupButtonsComponent_ng_container_1_button_1_Template, 3, 5, "button", 4);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.buttons);
        }
    }
    function GroupButtonsComponent_div_2_ng_container_9_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 14);
            i0.ɵɵlistener("click", function GroupButtonsComponent_div_2_ng_container_9_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r15_1); var button_r9 = i0.ɵɵnextContext().$implicit; return button_r9 == null ? null : button_r9.Callback($event); });
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r9 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(button_r9 == null ? null : button_r9.Value);
        }
    }
    function GroupButtonsComponent_div_2_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, GroupButtonsComponent_div_2_ng_container_9_button_1_Template, 3, 1, "button", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var isFirst_r11 = ctx.first;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !isFirst_r11);
        }
    }
    var _c0 = function (a0) { return { dropup: a0 }; };
    function GroupButtonsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵelementStart(1, "button", 5);
            i0.ɵɵlistener("click", function GroupButtonsComponent_div_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.buttons[0] == null ? null : ctx_r17.buttons[0].Callback($event); });
            i0.ɵɵelementStart(2, "span", 7);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 8);
            i0.ɵɵelementStart(5, "mat-icon");
            i0.ɵɵelement(6, "pep-icon", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-menu", 10, 11);
            i0.ɵɵtemplate(9, GroupButtonsComponent_div_2_ng_container_9_Template, 2, 1, "ng-container", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r7 = i0.ɵɵreference(8);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c0, ctx_r1.screenSize >= 2));
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("pepperi-button pull-left flip first-button mat-button ", ctx_r1.buttonsClass, "");
            i0.ɵɵproperty("disabled", ctx_r1.buttonsDisabled);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r1.buttons[0] == null ? null : ctx_r1.buttons[0].Value);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("pepperi-button icon-button pull-right flip last-button mat-button ", ctx_r1.buttonsClass, "");
            i0.ɵɵproperty("matMenuTriggerFor", _r7)("disabled", ctx_r1.buttonsDisabled);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("name", ctx_r1.screenSize < 2 ? "arrow_down" : "arrow_up");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx_r1.buttons);
        }
    }
    function GroupButtonsComponent_div_3_button_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r28_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-icon");
            i0.ɵɵelementStart(1, "pep-icon", 18);
            i0.ɵɵlistener("click", function GroupButtonsComponent_div_3_button_1_mat_icon_1_Template_pep_icon_click_1_listener($event) { i0.ɵɵrestoreView(_r28_1); var button_r20 = i0.ɵɵnextContext().$implicit; return button_r20 == null ? null : button_r20.Callback($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r20 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("name", button_r20 == null ? null : button_r20.Icon);
        }
    }
    function GroupButtonsComponent_div_3_button_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r20 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(button_r20 == null ? null : button_r20.Value);
        }
    }
    var _c1 = function (a0, a1, a2, a3) { return { "first-button": a0, "middle-button": a1, "last-button": a2, "icon-button": a3 }; };
    function GroupButtonsComponent_div_3_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r32_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 17);
            i0.ɵɵlistener("click", function GroupButtonsComponent_div_3_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r32_1); var button_r20 = ctx.$implicit; return button_r20 == null ? null : button_r20.Callback($event); });
            i0.ɵɵtemplate(1, GroupButtonsComponent_div_3_button_1_mat_icon_1_Template, 2, 1, "mat-icon", 1);
            i0.ɵɵtemplate(2, GroupButtonsComponent_div_3_button_1_span_2_Template, 2, 1, "span", 1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r20 = ctx.$implicit;
            var isFirst_r22 = ctx.first;
            var isLast_r23 = ctx.last;
            var ctx_r19 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMapInterpolate2("pepperi-button  split-button mat-button ", ctx_r19.buttonsClass, " ", button_r20 == null ? null : button_r20.Class, " pull-left flip");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(8, _c1, isFirst_r22, !isFirst_r22 && !isLast_r23, isLast_r23, button_r20 == null ? null : button_r20.Icon))("disabled", ctx_r19.buttonsDisabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", button_r20 == null ? null : button_r20.Icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", button_r20 == null ? null : button_r20.Value);
        }
    }
    function GroupButtonsComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 15);
            i0.ɵɵtemplate(1, GroupButtonsComponent_div_3_button_1_Template, 3, 13, "button", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r2.buttons);
        }
    }
    (function (GROUP_BUTTONS_VIEW_TYPE) {
        GROUP_BUTTONS_VIEW_TYPE[GROUP_BUTTONS_VIEW_TYPE["Regular"] = 0] = "Regular";
        GROUP_BUTTONS_VIEW_TYPE[GROUP_BUTTONS_VIEW_TYPE["Dropdown"] = 1] = "Dropdown";
        GROUP_BUTTONS_VIEW_TYPE[GROUP_BUTTONS_VIEW_TYPE["Split"] = 2] = "Split";
    })(exports.GROUP_BUTTONS_VIEW_TYPE || (exports.GROUP_BUTTONS_VIEW_TYPE = {}));
    var GroupButtonsComponent = /** @class */ (function () {
        // @Output() buttonClick: EventEmitter<PepperiGroupButton> = new EventEmitter<PepperiGroupButton>();
        function GroupButtonsComponent(layoutService) {
            var _this = this;
            this.layoutService = layoutService;
            this.GROUP_BUTTONS_VIEW_TYPE = exports.GROUP_BUTTONS_VIEW_TYPE;
            this.viewType = exports.GROUP_BUTTONS_VIEW_TYPE.Regular;
            this.layoutService.onResize$
                .pipe(operators.delay(0))
                .subscribe(function (size) {
                _this.screenSize = size;
            });
        }
        GroupButtonsComponent.prototype.ngOnInit = function () { };
        GroupButtonsComponent.prototype.ngOnDestroy = function () {
            // if (this.buttonClick) this.buttonClick.unsubscribe();
        };
        return GroupButtonsComponent;
    }());
    GroupButtonsComponent.ɵfac = function GroupButtonsComponent_Factory(t) { return new (t || GroupButtonsComponent)(i0.ɵɵdirectiveInject(i1.LayoutService)); };
    GroupButtonsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GroupButtonsComponent, selectors: [["pep-group-buttons"]], inputs: { viewType: "viewType", buttons: "buttons", buttonsClass: "buttonsClass", buttonsDisabled: "buttonsDisabled" }, decls: 4, vars: 3, consts: [["pepRtlDirection", "", 1, "group-buttons-container"], [4, "ngIf"], ["class", "dropdown-buttons spacing-element", 3, "ngClass", 4, "ngIf"], ["class", "split-buttons", 4, "ngIf"], ["mat-button", "", 3, "class", "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "disabled", "click"], [1, "dropdown-buttons", "spacing-element", 3, "ngClass"], [1, "pepperi-btn-text"], ["pepMenuBlur", "", "mat-button", "", 3, "matMenuTriggerFor", "disabled"], [3, "name"], ["xPosition", "before"], ["actionsMenu", "matMenu"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "split-buttons"], ["mat-button", "", 3, "class", "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "ngClass", "disabled", "click"], [3, "name", "click"]], template: function GroupButtonsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, GroupButtonsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                i0.ɵɵtemplate(2, GroupButtonsComponent_div_2_Template, 10, 15, "div", 2);
                i0.ɵɵtemplate(3, GroupButtonsComponent_div_3_Template, 2, 1, "div", 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.viewType == ctx.GROUP_BUTTONS_VIEW_TYPE.Regular);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.viewType == ctx.GROUP_BUTTONS_VIEW_TYPE.Dropdown);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.viewType == ctx.GROUP_BUTTONS_VIEW_TYPE.Split);
            }
        }, directives: [i1.RtlDirectionDirective, i2.NgIf, i2.NgForOf, i3.MatButton, i2.NgClass, i1.MenuBlurDirective, i4.MatMenuTrigger, i5.MatIcon, i1$1.PepperiIconComponent, i4._MatMenu, i4.MatMenuItem], styles: [".group-buttons-container[_ngcontent-%COMP%]{border-radius:var(--pep-border-radius-md,.25rem);display:flex}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-right:1px}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after, .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after{border-radius:var(--pep-border-radius-md,.25rem) 0 0 var(--pep-border-radius-md,.25rem)}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after, .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after{border-radius:0 var(--pep-border-radius-md,.25rem) var(--pep-border-radius-md,.25rem) 0}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]{margin-top:0!important}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .pepperi-button.cdk-focused[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .pepperi-button.cdk-focused[_ngcontent-%COMP%]{z-index:1}@media (max-width:767px){.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons.dropup[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons.dropup[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{max-width:calc(75vw - 4rem);padding:0 .25rem}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons.dropup[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons.dropup[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]{padding:0}}.group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-right:-1px}.group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .middle-button[_ngcontent-%COMP%]{border-radius:0}.group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]{height:inherit;width:inherit}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-left:1px;margin-right:unset}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after, .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after{border-radius:0 var(--pep-border-radius-md,.25rem) var(--pep-border-radius-md,.25rem) 0}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after, .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after{border-radius:var(--pep-border-radius-md,.25rem) 0 0 var(--pep-border-radius-md,.25rem)}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-left:-1px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GroupButtonsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-group-buttons',
                        templateUrl: './group-buttons.component.html',
                        styleUrls: ['./group-buttons.component.scss'],
                    }]
            }], function () { return [{ type: i1.LayoutService }]; }, { viewType: [{
                    type: i0.Input
                }], buttons: [{
                    type: i0.Input
                }], buttonsClass: [{
                    type: i0.Input
                }], buttonsDisabled: [{
                    type: i0.Input
                }] });
    })();

    var PepperiGroupButtonsModule = /** @class */ (function () {
        function PepperiGroupButtonsModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconArrowUp,
                i1$1.pepperiIconArrowDown
            ]);
        }
        return PepperiGroupButtonsModule;
    }());
    PepperiGroupButtonsModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiGroupButtonsModule });
    PepperiGroupButtonsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiGroupButtonsModule_Factory(t) { return new (t || PepperiGroupButtonsModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i2.CommonModule,
                // Material modules
                core.MatCommonModule,
                formField.MatFormFieldModule,
                i3.MatButtonModule,
                i4.MatMenuModule,
                i5.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiGroupButtonsModule, { declarations: [GroupButtonsComponent], imports: [i2.CommonModule,
                // Material modules
                core.MatCommonModule,
                formField.MatFormFieldModule,
                i3.MatButtonModule,
                i4.MatMenuModule,
                i5.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule], exports: [GroupButtonsComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiGroupButtonsModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            // Material modules
                            core.MatCommonModule,
                            formField.MatFormFieldModule,
                            i3.MatButtonModule,
                            i4.MatMenuModule,
                            i5.MatIconModule,
                            // Pepperi modules
                            i1.PepperiModule,
                            i1$1.PepperiIconModule
                        ],
                        exports: [GroupButtonsComponent],
                        declarations: [GroupButtonsComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/group-buttons
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GroupButtonsComponent = GroupButtonsComponent;
    exports.PepperiGroupButtonsModule = PepperiGroupButtonsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-group-buttons.umd.js.map
