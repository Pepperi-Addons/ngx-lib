import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@pepperi-addons/ngx-lib/icon";
import * as i4 from "@angular/material/menu";
import * as i5 from "@ngx-translate/core";
function PepperiMenuComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return { "lock-events": a0, "left-alignment": a1, "right-alignment": a2, "center-alignment": a3, "invert": a4 }; };
function PepperiMenuComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function PepperiMenuComponent_ng_template_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.menuClicked($event); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("pepperi-menu pepperi-button icon-button weak ", ctx_r2.layoutType === ctx_r2.LAYOUT_TYPE.PepperiTable ? "sm" : "md", "");
    i0.ɵɵpropertyInterpolate("title", ctx_r2.label);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(5, _c0, ctx_r2.disabled, ctx_r2.xAlignment == "1" || ctx_r2.xAlignment == "0", ctx_r2.xAlignment == "2", ctx_r2.xAlignment == "3", ctx_r2.invertClass));
} }
function PepperiMenuComponent_ng_template_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function PepperiMenuComponent_ng_template_3_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const option_r9 = ctx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.menuItemClicked(option_r9.Key); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, option_r9.Value));
} }
const _c1 = function (a0, a1, a2, a3) { return { "left-alignment": a0, "right-alignment": a1, "center-alignment": a2, "invert": a3 }; };
const _c2 = function (a0) { return { rtlMenu: a0 }; };
function PepperiMenuComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-menu", 6, 7);
    i0.ɵɵtemplate(5, PepperiMenuComponent_ng_template_3_button_5_Template, 4, 3, "button", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(4);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("pepperi-menu pepperi-button icon-button weak ", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiTable ? "sm" : "md", "");
    i0.ɵɵpropertyInterpolate("title", ctx_r4.label);
    i0.ɵɵproperty("matMenuTriggerFor", _r7)("ngClass", i0.ɵɵpureFunction4(9, _c1, ctx_r4.xAlignment == "1" || ctx_r4.xAlignment == "0", ctx_r4.xAlignment == "2", ctx_r4.xAlignment == "3", ctx_r4.invertClass));
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("xPosition", ctx_r4.xAlignment == "2" ? "after" : "before");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(14, _c2, ctx_r4.xAlignment == "2"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.options);
} }
export class PepperiMenuComponent {
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
PepperiMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiMenuComponent, selectors: [["pep-menu"]], inputs: { key: "key", label: "label", disabled: "disabled", xAlignment: "xAlignment", options: "options", invertClass: "invertClass", layoutType: "layoutType" }, outputs: { elementClicked: "elementClicked", notifyMenuItemClicked: "notifyMenuItemClicked" }, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["noSubMenuBlock", ""], ["subMenuBlock", ""], ["mat-button", "", 3, "title", "ngClass", "click"], ["name", "system_menu"], ["mat-button", "", "menu-blur", "", 3, "matMenuTriggerFor", "ngClass", "title"], [3, "xPosition", "ngClass"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]], template: function PepperiMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PepperiMenuComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, PepperiMenuComponent_ng_template_1_Template, 3, 11, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PepperiMenuComponent_ng_template_3_Template, 6, 16, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(4);
        i0.ɵɵproperty("ngIf", (ctx.options == null ? null : ctx.options.length) > 0)("ngIfThen", _r3)("ngIfElse", _r1);
    } }, directives: [i1.NgIf, i1.NgClass, i2.MatIcon, i3.PepperiIconComponent, i4.MatMenuTrigger, i4._MatMenu, i1.NgForOf, i4.MatMenuItem], pipes: [i5.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.pepperi-menu[_ngcontent-%COMP%]{cursor:pointer}.pepperi-menu.left-alignment[_ngcontent-%COMP%]{justify-self:flex-start}.pepperi-menu.center-alignment[_ngcontent-%COMP%]{-ms-grid-column-align:center;justify-self:center}.pepperi-menu.right-alignment[_ngcontent-%COMP%]{justify-self:flex-end}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiMenuComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL21lbnUvbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL21lbnUvbWVudS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFxQix1QkFBdUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsV0FBVyxFQUFpQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7OztJQ0RyRSx3QkFBaUc7Ozs7O0lBRTdGLGlDQVNJO0lBVEksNk1BQTZCO0lBU2pDLGdDQUNJO0lBQUEsOEJBQ1c7SUFDZixpQkFBVztJQUNmLGlCQUFTOzs7SUFaTCxtSkFBZ0g7SUFEOUUsK0NBQW1CO0lBRXJELG1NQU1FOzs7O0lBeUJGLGlDQUNJO0lBRGlELGdRQUFxQztJQUN0Riw0QkFBTTtJQUFBLFlBQThCOztJQUFBLGlCQUFPO0lBQy9DLGlCQUFTOzs7SUFEQyxlQUE4QjtJQUE5QiwyREFBOEI7Ozs7O0lBakI1QyxpQ0FRSTtJQUFBLGdDQUNJO0lBQUEsOEJBQ1c7SUFDZixpQkFBVztJQUNmLGlCQUFTO0lBRVQsc0NBRUk7SUFBQSx5RkFDSTtJQUVSLGlCQUFXOzs7O0lBbEJQLG1KQUFnSDtJQU03RywrQ0FBbUI7SUFQUCx1Q0FBMEIscUtBQUE7SUFjbkIsZUFBc0Q7SUFBdEQsb0ZBQXNEO0lBQzVFLCtFQUEwQztJQUNsQyxlQUE4QjtJQUE5Qix3Q0FBOEI7O0FEMUI5QyxNQUFNLE9BQU8sb0JBQW9CO0lBZ0I3QjtRQWZTLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsR0FBRyxDQUFDO1FBQzFCLCtCQUErQjtRQUN0QixZQUFPLEdBQW9CLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUU1QixnQkFBVyxHQUFHLE1BQU0sQ0FBQztRQUVaLGVBQVUsR0FBZ0IsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUNqRCxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzVELDBCQUFxQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdFLGdCQUFXLEdBQUcsV0FBVyxDQUFDO0lBRVYsQ0FBQztJQUVqQixXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDckM7UUFFRCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM1QixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVU7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUFZO1FBQ3hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDOzt3RkFsQ1Esb0JBQW9CO3lEQUFwQixvQkFBb0I7UUNUakMsdUZBQWtGO1FBQ2xGLHVIQUNJO1FBZ0JKLHVIQUNJOzs7O1FBbkJVLDRFQUFtRSxpQkFBQSxpQkFBQTs7a0REU3BFLG9CQUFvQjtjQU5oQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDtzQ0FFWSxHQUFHO2tCQUFYLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUVHLE9BQU87a0JBQWYsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFJRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTTtZQUNHLHFCQUFxQjtrQkFBOUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMQVlPVVRfVFlQRSwgUGVwcGVyaU9wdGlvbiB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwZXAtbWVudScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tZW51LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaU1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkga2V5ID0gJyc7XHJcbiAgICBASW5wdXQoKSBsYWJlbCA9ICcnO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHhBbGlnbm1lbnQgPSAnMCc7XHJcbiAgICAvLyBASW5wdXQoKSBoYXNTdWJNZW51ID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBvcHRpb25zOiBQZXBwZXJpT3B0aW9uW10gPSBbXTtcclxuICAgIEBJbnB1dCgpIGludmVydENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgICBjb250cm9sVHlwZSA9ICdtZW51JztcclxuXHJcbiAgICBASW5wdXQoKSBsYXlvdXRUeXBlOiBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtO1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeU1lbnVJdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIExBWU9VVF9UWVBFID0gTEFZT1VUX1RZUEU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Q2xpY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRDbGlja2VkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ub3RpZnlNZW51SXRlbUNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlNZW51SXRlbUNsaWNrZWQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWVudUNsaWNrZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudENsaWNrZWQuZW1pdCh7IGFwaU5hbWU6IHRoaXMua2V5LCBldmVudFdoaWNoOiBldmVudC53aGljaCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtZW51SXRlbUNsaWNrZWQoaXRlbUtleTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlNZW51SXRlbUNsaWNrZWQuZW1pdCh7IGFwaU5hbWU6IGl0ZW1LZXkgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnM/Lmxlbmd0aCA+IDA7IHRoZW4gc3ViTWVudUJsb2NrOyBlbHNlIG5vU3ViTWVudUJsb2NrXCI+PC9uZy1jb250YWluZXI+XHJcbjxuZy10ZW1wbGF0ZSAjbm9TdWJNZW51QmxvY2s+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJtZW51Q2xpY2tlZCgkZXZlbnQpXCIgdGl0bGU9XCJ7eyBsYWJlbCB9fVwiIG1hdC1idXR0b25cclxuICAgICAgICBjbGFzcz1cInBlcHBlcmktbWVudSBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiB3ZWFrIHt7IGxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlUYWJsZSA/ICdzbScgOiAnbWQnIH19XCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgICAgICdsb2NrLWV2ZW50cyc6IGRpc2FibGVkLFxyXG4gICAgICAgICAgICAnbGVmdC1hbGlnbm1lbnQnOiB4QWxpZ25tZW50ID09ICcxJyB8fCB4QWxpZ25tZW50ID09ICcwJyxcclxuICAgICAgICAgICAgJ3JpZ2h0LWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzInLFxyXG4gICAgICAgICAgICAnY2VudGVyLWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzMnLFxyXG4gICAgICAgICAgICAnaW52ZXJ0JzogaW52ZXJ0Q2xhc3NcclxuICAgICAgICB9XCI+XHJcbiAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInN5c3RlbV9tZW51XCI+XHJcbiAgICAgICAgICAgIDwvcGVwLWljb24+XHJcbiAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNzdWJNZW51QmxvY2s+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBtZW51LWJsdXJcclxuICAgICAgICBjbGFzcz1cInBlcHBlcmktbWVudSBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiB3ZWFrIHt7IGxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlUYWJsZSA/ICdzbScgOiAnbWQnIH19XCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgICAgICdsZWZ0LWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzEnIHx8IHhBbGlnbm1lbnQgPT0gJzAnLFxyXG4gICAgICAgICAgICAncmlnaHQtYWxpZ25tZW50JzogeEFsaWdubWVudCA9PSAnMicsXHJcbiAgICAgICAgICAgICdjZW50ZXItYWxpZ25tZW50JzogeEFsaWdubWVudCA9PSAnMycsXHJcbiAgICAgICAgICAgICdpbnZlcnQnOiBpbnZlcnRDbGFzc1xyXG4gICAgICAgIH1cIiB0aXRsZT1cInt7IGxhYmVsIH19XCI+XHJcbiAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInN5c3RlbV9tZW51XCI+XHJcbiAgICAgICAgICAgIDwvcGVwLWljb24+XHJcbiAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIiB4UG9zaXRpb249XCJ7e3hBbGlnbm1lbnQgPT0gJzInID8gJ2FmdGVyJyA6ICdiZWZvcmUnfX1cIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgcnRsTWVudTogeEFsaWdubWVudCA9PSAnMicgfVwiPlxyXG4gICAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCIgbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwibWVudUl0ZW1DbGlja2VkKG9wdGlvbi5LZXkpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbi5WYWx1ZSB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvbWF0LW1lbnU+XHJcblxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=