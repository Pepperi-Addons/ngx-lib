import { Component, Input } from '@angular/core';
import { delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/menu";
import * as i5 from "@angular/material/icon";
import * as i6 from "@pepperi-addons/ngx-lib/icon";
function GroupButtonsComponent_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function GroupButtonsComponent_ng_container_1_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const button_r4 = ctx.$implicit; return button_r4 == null ? null : button_r4.Callback($event); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("pepperi-button spacing-element pull-left flip first-button mat-button ", ctx_r3.buttonsClass, "");
    i0.ɵɵproperty("disabled", ctx_r3.buttonsDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(button_r4 == null ? null : button_r4.Value);
} }
function GroupButtonsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GroupButtonsComponent_ng_container_1_button_1_Template, 3, 5, "button", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.buttons);
} }
function GroupButtonsComponent_div_2_ng_container_9_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function GroupButtonsComponent_div_2_ng_container_9_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r15); const button_r9 = i0.ɵɵnextContext().$implicit; return button_r9 == null ? null : button_r9.Callback($event); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(button_r9 == null ? null : button_r9.Value);
} }
function GroupButtonsComponent_div_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GroupButtonsComponent_div_2_ng_container_9_button_1_Template, 3, 1, "button", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const isFirst_r11 = ctx.first;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !isFirst_r11);
} }
const _c0 = function (a0) { return { dropup: a0 }; };
function GroupButtonsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function GroupButtonsComponent_div_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.buttons[0] == null ? null : ctx_r17.buttons[0].Callback($event); });
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
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
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
} }
function GroupButtonsComponent_div_3_button_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵelementStart(1, "pep-icon", 18);
    i0.ɵɵlistener("click", function GroupButtonsComponent_div_3_button_1_mat_icon_1_Template_pep_icon_click_1_listener($event) { i0.ɵɵrestoreView(_r28); const button_r20 = i0.ɵɵnextContext().$implicit; return button_r20 == null ? null : button_r20.Callback($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("name", button_r20 == null ? null : button_r20.Icon);
} }
function GroupButtonsComponent_div_3_button_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(button_r20 == null ? null : button_r20.Value);
} }
const _c1 = function (a0, a1, a2, a3) { return { "first-button": a0, "middle-button": a1, "last-button": a2, "icon-button": a3 }; };
function GroupButtonsComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function GroupButtonsComponent_div_3_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r32); const button_r20 = ctx.$implicit; return button_r20 == null ? null : button_r20.Callback($event); });
    i0.ɵɵtemplate(1, GroupButtonsComponent_div_3_button_1_mat_icon_1_Template, 2, 1, "mat-icon", 1);
    i0.ɵɵtemplate(2, GroupButtonsComponent_div_3_button_1_span_2_Template, 2, 1, "span", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r20 = ctx.$implicit;
    const isFirst_r22 = ctx.first;
    const isLast_r23 = ctx.last;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("pepperi-button  split-button mat-button ", ctx_r19.buttonsClass, " ", button_r20 == null ? null : button_r20.Class, " pull-left flip");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(8, _c1, isFirst_r22, !isFirst_r22 && !isLast_r23, isLast_r23, button_r20 == null ? null : button_r20.Icon))("disabled", ctx_r19.buttonsDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r20 == null ? null : button_r20.Icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r20 == null ? null : button_r20.Value);
} }
function GroupButtonsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, GroupButtonsComponent_div_3_button_1_Template, 3, 13, "button", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.buttons);
} }
export var GROUP_BUTTONS_VIEW_TYPE;
(function (GROUP_BUTTONS_VIEW_TYPE) {
    GROUP_BUTTONS_VIEW_TYPE[GROUP_BUTTONS_VIEW_TYPE["Regular"] = 0] = "Regular";
    GROUP_BUTTONS_VIEW_TYPE[GROUP_BUTTONS_VIEW_TYPE["Dropdown"] = 1] = "Dropdown";
    GROUP_BUTTONS_VIEW_TYPE[GROUP_BUTTONS_VIEW_TYPE["Split"] = 2] = "Split";
})(GROUP_BUTTONS_VIEW_TYPE || (GROUP_BUTTONS_VIEW_TYPE = {}));
export class GroupButtonsComponent {
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
GroupButtonsComponent.ɵfac = function GroupButtonsComponent_Factory(t) { return new (t || GroupButtonsComponent)(i0.ɵɵdirectiveInject(i1.LayoutService)); };
GroupButtonsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GroupButtonsComponent, selectors: [["pep-group-buttons"]], inputs: { viewType: "viewType", buttons: "buttons", buttonsClass: "buttonsClass", buttonsDisabled: "buttonsDisabled" }, decls: 4, vars: 3, consts: [["pepRtlDirection", "", 1, "group-buttons-container"], [4, "ngIf"], ["class", "dropdown-buttons spacing-element", 3, "ngClass", 4, "ngIf"], ["class", "split-buttons", 4, "ngIf"], ["mat-button", "", 3, "class", "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "disabled", "click"], [1, "dropdown-buttons", "spacing-element", 3, "ngClass"], [1, "pepperi-btn-text"], ["pepMenuBlur", "", "mat-button", "", 3, "matMenuTriggerFor", "disabled"], [3, "name"], ["xPosition", "before"], ["actionsMenu", "matMenu"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "split-buttons"], ["mat-button", "", 3, "class", "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "ngClass", "disabled", "click"], [3, "name", "click"]], template: function GroupButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, GroupButtonsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, GroupButtonsComponent_div_2_Template, 10, 15, "div", 2);
        i0.ɵɵtemplate(3, GroupButtonsComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.viewType == ctx.GROUP_BUTTONS_VIEW_TYPE.Regular);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.viewType == ctx.GROUP_BUTTONS_VIEW_TYPE.Dropdown);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.viewType == ctx.GROUP_BUTTONS_VIEW_TYPE.Split);
    } }, directives: [i1.RtlDirectionDirective, i2.NgIf, i2.NgForOf, i3.MatButton, i2.NgClass, i1.MenuBlurDirective, i4.MatMenuTrigger, i5.MatIcon, i6.PepperiIconComponent, i4._MatMenu, i4.MatMenuItem], styles: [".group-buttons-container[_ngcontent-%COMP%]{border-radius:var(--pep-border-radius-md,.25rem);display:flex}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-right:1px}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after, .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after{border-radius:var(--pep-border-radius-md,.25rem) 0 0 var(--pep-border-radius-md,.25rem)}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after, .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after{border-radius:0 var(--pep-border-radius-md,.25rem) var(--pep-border-radius-md,.25rem) 0}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]{margin-top:0!important}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .pepperi-button.cdk-focused[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .pepperi-button.cdk-focused[_ngcontent-%COMP%]{z-index:1}@media (max-width:767px){.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons.dropup[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons.dropup[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{max-width:calc(75vw - 4rem);padding:0 .25rem}.group-buttons-container[_ngcontent-%COMP%]   .dropdown-buttons.dropup[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[_ngcontent-%COMP%]   .split-buttons.dropup[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]{padding:0}}.group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-right:-1px}.group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .middle-button[_ngcontent-%COMP%]{border-radius:0}.group-buttons-container[_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]{height:inherit;width:inherit}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-left:1px;margin-right:unset}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after, .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]:after{border-radius:0 var(--pep-border-radius-md,.25rem) var(--pep-border-radius-md,.25rem) 0}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .dropdown-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after, .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%], .group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .last-button[_ngcontent-%COMP%]:after{border-radius:var(--pep-border-radius-md,.25rem) 0 0 var(--pep-border-radius-md,.25rem)}.group-buttons-container[dir=rtl][_ngcontent-%COMP%]   .split-buttons[_ngcontent-%COMP%]   .first-button[_ngcontent-%COMP%]{margin-left:-1px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GroupButtonsComponent, [{
        type: Component,
        args: [{
                selector: 'pep-group-buttons',
                templateUrl: './group-buttons.component.html',
                styleUrls: ['./group-buttons.component.scss'],
            }]
    }], function () { return [{ type: i1.LayoutService }]; }, { viewType: [{
            type: Input
        }], buttons: [{
            type: Input
        }], buttonsClass: [{
            type: Input
        }], buttonsDisabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2dyb3VwLWJ1dHRvbnMvZ3JvdXAtYnV0dG9ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2dyb3VwLWJ1dHRvbnMvZ3JvdXAtYnV0dG9ucy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQ0EvQixpQ0FHSTtJQUR3QyxtTkFBUywwQkFBd0IsSUFBQztJQUMxRSw0QkFBTTtJQUFBLFlBQW1CO0lBQUEsaUJBQU87SUFDcEMsaUJBQVM7Ozs7SUFITCw0SEFBZ0c7SUFDaEcsaURBQTRCO0lBQ3RCLGVBQW1CO0lBQW5CLGdFQUFtQjs7O0lBSmpDLDZCQUNJO0lBQUEsMkZBR0k7SUFFUiwwQkFBZTs7O0lBTEgsZUFBOEI7SUFBOUIsd0NBQThCOzs7O0lBdUI5QixrQ0FDSTtJQURtQyx5T0FBUywwQkFBd0IsSUFBQztJQUNyRSw0QkFBTTtJQUFBLFlBQW1CO0lBQUEsaUJBQU87SUFDcEMsaUJBQVM7OztJQURDLGVBQW1CO0lBQW5CLGdFQUFtQjs7O0lBRmpDLDZCQUNJO0lBQUEsa0dBQ0k7SUFFUiwwQkFBZTs7O0lBSEgsZUFBZ0I7SUFBaEIsbUNBQWdCOzs7OztJQWhCcEMsOEJBRUk7SUFBQSxpQ0FFSTtJQURBLDBMQUFpQixDQUFDLG1CQUFULGdCQUFRLENBQUMsa0JBQW1CLElBQUM7SUFDdEMsK0JBQStCO0lBQUEsWUFBdUI7SUFBQSxpQkFBTztJQUNqRSxpQkFBUztJQUNULGlDQUVJO0lBQUEsZ0NBQ0k7SUFBQSw4QkFDVztJQUNmLGlCQUFXO0lBQ2YsaUJBQVM7SUFFVCx3Q0FDSTtJQUFBLCtGQUNJO0lBSVIsaUJBQVc7SUFDZixpQkFBTTs7OztJQXBCRiw2RUFBcUM7SUFDN0IsZUFBZ0Y7SUFBaEYsNEdBQWdGO0lBQzdDLGlEQUE0QjtJQUNwQyxlQUF1QjtJQUF2QixnRkFBdUI7SUFFbEQsZUFBNEY7SUFBNUYsd0hBQTRGO0lBQ2hHLHVDQUFpQyxvQ0FBQTtJQUVuQixlQUF1RDtJQUF2RCxtRkFBdUQ7SUFNdkQsZUFBK0Q7SUFBL0Qsd0NBQStEOzs7O0lBWTdFLGdDQUNJO0lBQUEsb0NBQ1c7SUFEdUIseU9BQVMsMkJBQXdCLElBQUM7SUFDcEUsaUJBQVc7SUFDZixpQkFBVzs7O0lBRkcsZUFBdUI7SUFBdkIsNkVBQXVCOzs7SUFHckMsNEJBQTRCO0lBQUEsWUFBbUI7SUFBQSxpQkFBTzs7O0lBQTFCLGVBQW1CO0lBQW5CLGtFQUFtQjs7Ozs7SUFSbkQsa0NBSUk7SUFEd0MsNk1BQVMsMkJBQXdCLElBQUM7SUFDMUUsK0ZBQ0k7SUFHSix1RkFBNEI7SUFDaEMsaUJBQVM7Ozs7OztJQVJMLGlLQUFxRztJQUNyRyx1SkFBK0gscUNBQUE7SUFFckgsZUFBb0I7SUFBcEIsa0VBQW9CO0lBSXhCLGVBQXFCO0lBQXJCLG1FQUFxQjs7O0lBVG5DLCtCQUNJO0lBQUEsb0ZBSUk7SUFNUixpQkFBTTs7O0lBVk0sZUFBaUY7SUFBakYsd0NBQWlGOztBRHJCakcsTUFBTSxDQUFOLElBQVksdUJBSVg7QUFKRCxXQUFZLHVCQUF1QjtJQUMvQiwyRUFBTyxDQUFBO0lBQ1AsNkVBQVEsQ0FBQTtJQUNSLHVFQUFLLENBQUE7QUFDVCxDQUFDLEVBSlcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQUlsQztBQU9ELE1BQU0sT0FBTyxxQkFBcUI7SUFTOUIsb0dBQW9HO0lBRXBHLFlBQW1CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBVi9DLDRCQUF1QixHQUFHLHVCQUF1QixDQUFDO1FBR3pDLGFBQVEsR0FBNEIsdUJBQXVCLENBQUMsT0FBTyxDQUFDO1FBUXpFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUzthQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsUUFBUSxLQUFXLENBQUM7SUFFcEIsV0FBVztRQUNQLHdEQUF3RDtJQUM1RCxDQUFDOzswRkF2QlEscUJBQXFCOzBEQUFyQixxQkFBcUI7UUN0QmxDLDhCQUNJO1FBQUEsd0ZBQ0k7UUFPSix3RUFFSTtRQW9CSixzRUFDSTtRQVdSLGlCQUFNOztRQTFDWSxlQUFtRDtRQUFuRCwwRUFBbUQ7UUFRNUQsZUFBb0Q7UUFBcEQsMkVBQW9EO1FBc0JwRCxlQUFpRDtRQUFqRCx3RUFBaUQ7O2tERFQ3QyxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQ2hEO2dFQUtZLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlLCBTQ1JFRU5fU0laRSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcHBlcmlHcm91cEJ1dHRvbiB7XHJcbiAgICBWYWx1ZTtcclxuICAgIENsYXNzO1xyXG4gICAgSWNvbjtcclxuICAgIENhbGxiYWNrO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBHUk9VUF9CVVRUT05TX1ZJRVdfVFlQRSB7XHJcbiAgICBSZWd1bGFyLFxyXG4gICAgRHJvcGRvd24sXHJcbiAgICBTcGxpdCxcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlcC1ncm91cC1idXR0b25zJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9ncm91cC1idXR0b25zLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2dyb3VwLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyb3VwQnV0dG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEdST1VQX0JVVFRPTlNfVklFV19UWVBFID0gR1JPVVBfQlVUVE9OU19WSUVXX1RZUEU7XHJcbiAgICBzY3JlZW5TaXplOiBTQ1JFRU5fU0laRTtcclxuXHJcbiAgICBASW5wdXQoKSB2aWV3VHlwZTogR1JPVVBfQlVUVE9OU19WSUVXX1RZUEUgPSBHUk9VUF9CVVRUT05TX1ZJRVdfVFlQRS5SZWd1bGFyO1xyXG4gICAgQElucHV0KCkgYnV0dG9uczogQXJyYXk8UGVwcGVyaUdyb3VwQnV0dG9uPjtcclxuICAgIEBJbnB1dCgpIGJ1dHRvbnNDbGFzczogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgYnV0dG9uc0Rpc2FibGVkOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQE91dHB1dCgpIGJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8UGVwcGVyaUdyb3VwQnV0dG9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8UGVwcGVyaUdyb3VwQnV0dG9uPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5sYXlvdXRTZXJ2aWNlLm9uUmVzaXplJFxyXG4gICAgICAgICAgICAucGlwZShkZWxheSgwKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShzaXplID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuU2l6ZSA9IHNpemU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYnV0dG9uQ2xpY2spIHRoaXMuYnV0dG9uQ2xpY2sudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbkJ1dHRvbkNsaWNrZWQoYnV0dG9uOiBQZXBwZXJpR3JvdXBCdXR0b24pIHtcclxuICAgIC8vICAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoYnV0dG9uKTtcclxuICAgIC8vIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZ3JvdXAtYnV0dG9ucy1jb250YWluZXJcIiBwZXBSdGxEaXJlY3Rpb24+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmlld1R5cGUgPT0gR1JPVVBfQlVUVE9OU19WSUVXX1RZUEUuUmVndWxhclwiPlxyXG4gICAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBidXR0b25zXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJwZXBwZXJpLWJ1dHRvbiBzcGFjaW5nLWVsZW1lbnQgcHVsbC1sZWZ0IGZsaXAgZmlyc3QtYnV0dG9uIG1hdC1idXR0b24ge3sgYnV0dG9uc0NsYXNzIH19XCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImJ1dHRvbnNEaXNhYmxlZFwiIG1hdC1idXR0b24gKGNsaWNrKT1cImJ1dHRvbj8uQ2FsbGJhY2soJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyBidXR0b24/LlZhbHVlIH19PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPGRpdiAqbmdJZj1cInZpZXdUeXBlID09IEdST1VQX0JVVFRPTlNfVklFV19UWVBFLkRyb3Bkb3duXCIgY2xhc3M9XCJkcm9wZG93bi1idXR0b25zIHNwYWNpbmctZWxlbWVudFwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwie2Ryb3B1cDogc2NyZWVuU2l6ZSA+PSAyfVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwZXBwZXJpLWJ1dHRvbiBwdWxsLWxlZnQgZmxpcCBmaXJzdC1idXR0b24gbWF0LWJ1dHRvbiB7eyBidXR0b25zQ2xhc3MgfX1cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiYnV0dG9uc1swXT8uQ2FsbGJhY2soJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJidXR0b25zRGlzYWJsZWRcIiBtYXQtYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBlcHBlcmktYnRuLXRleHRcIj57eyBidXR0b25zWzBdPy5WYWx1ZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGVwcGVyaS1idXR0b24gaWNvbi1idXR0b24gcHVsbC1yaWdodCBmbGlwIGxhc3QtYnV0dG9uIG1hdC1idXR0b24ge3sgYnV0dG9uc0NsYXNzIH19XCJcclxuICAgICAgICAgICAgW21hdE1lbnVUcmlnZ2VyRm9yXT1cImFjdGlvbnNNZW51XCIgW2Rpc2FibGVkXT1cImJ1dHRvbnNEaXNhYmxlZFwiIHBlcE1lbnVCbHVyIG1hdC1idXR0b24+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDxwZXAtaWNvbiBuYW1lPVwie3sgc2NyZWVuU2l6ZSA8IDIgPyAnYXJyb3dfZG93bicgOiAnYXJyb3dfdXAnIH19XCI+XHJcbiAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8bWF0LW1lbnUgI2FjdGlvbnNNZW51PVwibWF0TWVudVwiIHhQb3NpdGlvbj1cImJlZm9yZVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBidXR0b24gb2YgYnV0dG9uczsgbGV0IGkgPSBpbmRleDsgZmlyc3QgYXMgaXNGaXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFpc0ZpcnN0XCIgbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiYnV0dG9uPy5DYWxsYmFjaygkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgYnV0dG9uPy5WYWx1ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L21hdC1tZW51PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwidmlld1R5cGUgPT0gR1JPVVBfQlVUVE9OU19WSUVXX1RZUEUuU3BsaXRcIiBjbGFzcz1cInNwbGl0LWJ1dHRvbnNcIj5cclxuICAgICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCBidXR0b24gb2YgYnV0dG9uczsgbGV0IGluZGV4OyBsZXQgaXNGaXJzdCA9IGZpcnN0OyBsZXQgaXNMYXN0ID0gbGFzdFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwicGVwcGVyaS1idXR0b24gIHNwbGl0LWJ1dHRvbiBtYXQtYnV0dG9uIHt7IGJ1dHRvbnNDbGFzcyB9fSB7eyBidXR0b24/LkNsYXNzIH19IHB1bGwtbGVmdCBmbGlwXCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmaXJzdC1idXR0b24nOiBpc0ZpcnN0LCAnbWlkZGxlLWJ1dHRvbic6ICFpc0ZpcnN0ICYmICFpc0xhc3QsICdsYXN0LWJ1dHRvbic6IGlzTGFzdCwgJ2ljb24tYnV0dG9uJzogYnV0dG9uPy5JY29ufVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJidXR0b25zRGlzYWJsZWRcIiBtYXQtYnV0dG9uIChjbGljayk9XCJidXR0b24/LkNhbGxiYWNrKCRldmVudClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiYnV0dG9uPy5JY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInt7YnV0dG9uPy5JY29ufX1cIiAoY2xpY2spPVwiYnV0dG9uPy5DYWxsYmFjaygkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImJ1dHRvbj8uVmFsdWVcIj57eyBidXR0b24/LlZhbHVlIH19PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=