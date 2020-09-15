import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@pepperi-addons/ngx-lib/icon";
import * as i3 from "@angular/material/form-field";
function PepperiFieldTitleComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵelement(1, "pep-icon", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.xAlignment == "2" ? "pull-right flip" : "pull-left flip");
} }
const _c0 = function (a0) { return { "max-width": a0 }; };
function PepperiFieldTitleComponent_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx_r1.maxFieldCharacters > 0 ? "85%" : "100%"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.label, "");
} }
const _c1 = function (a0, a1) { return { "pull-right": a0, "pull-left": a1 }; };
function PepperiFieldTitleComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c1, ctx_r2.xAlignment == "1" || ctx_r2.xAlignment == "0", ctx_r2.xAlignment == "2"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("\u00A0", ctx_r2.inputLength || 0, "/", ctx_r2.maxFieldCharacters, "");
} }
const _c2 = function (a0) { return { disable: a0 }; };
const _c3 = function (a0) { return { "text-align": a0 }; };
export class PepperiFieldTitleComponent {
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
PepperiFieldTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiFieldTitleComponent, selectors: [["pep-field-title"]], inputs: { label: "label", required: "required", disabled: "disabled", maxFieldCharacters: "maxFieldCharacters", xAlignment: "xAlignment", showTitle: "showTitle", inputLength: "inputLength" }, decls: 4, vars: 9, consts: [[1, "mat-form-title", 3, "ngClass", "ngStyle"], ["class", "required", 3, "ngClass", 4, "ngIf"], ["class", "body-xs", 3, "ngStyle", 4, "ngIf"], ["class", "body-xs", 3, "ngClass", 4, "ngIf"], [1, "required", 3, "ngClass"], ["name", "system_must"], [1, "body-xs", 3, "ngStyle"], [1, "body-xs", 3, "ngClass"]], template: function PepperiFieldTitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PepperiFieldTitleComponent_span_1_Template, 2, 1, "span", 1);
        i0.ɵɵtemplate(2, PepperiFieldTitleComponent_mat_label_2_Template, 2, 4, "mat-label", 2);
        i0.ɵɵtemplate(3, PepperiFieldTitleComponent_span_3_Template, 2, 6, "span", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c2, ctx.disabled))("ngStyle", i0.ɵɵpureFunction1(7, _c3, ctx.xAlignment == "3" ? "center" : ctx.xAlignment == "2" ? "right" : "left"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.required);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.maxFieldCharacters > 0);
    } }, directives: [i1.NgClass, i1.NgStyle, i1.NgIf, i2.PepperiIconComponent, i3.MatLabel], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;width:inherit}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiFieldTitleComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9maWVsZC10aXRsZS9maWVsZC10aXRsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2ZpZWxkLXRpdGxlL2ZpZWxkLXRpdGxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNFN0MsK0JBQ0k7SUFBQSw4QkFDVztJQUNmLGlCQUFPOzs7SUFIaUMseUZBQW9FOzs7O0lBSTVHLG9DQUNJO0lBQUEsWUFBVztJQUFBLGlCQUFZOzs7SUFEa0Isb0dBQWtFO0lBQzNHLGVBQVc7SUFBWCw0Q0FBVzs7OztJQUVmLCtCQUN1RztJQUFBLFlBQXFEO0lBQUEsaUJBQU87OztJQUEvSixvSUFBa0c7SUFBQyxlQUFxRDtJQUFyRCw0RkFBcUQ7Ozs7QURIaEssTUFBTSxPQUFPLDBCQUEwQjtJQVVuQztRQVRTLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFFakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVyxHQUFHLENBQUMsQ0FBQztJQUVULENBQUM7O29HQVZSLDBCQUEwQjsrREFBMUIsMEJBQTBCO1FDUHZDLDhCQUVJO1FBQUEsNkVBQ0k7UUFHSix1RkFDSTtRQUVKLDZFQUN1RztRQUMzRyxpQkFBTTs7UUFYc0Isa0VBQStCLG9IQUFBO1FBRWpELGVBQWdCO1FBQWhCLG1DQUFnQjtRQUlYLGVBQWlCO1FBQWpCLG9DQUFpQjtRQUd0QixlQUE4QjtRQUE5QixpREFBOEI7O2tEREYzQiwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzlDO3NDQUVZLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUVHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlcC1maWVsZC10aXRsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZmllbGQtdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZmllbGQtdGl0bGUuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlGaWVsZFRpdGxlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIG1heEZpZWxkQ2hhcmFjdGVycyA9IDA7XHJcbiAgICBASW5wdXQoKSB4QWxpZ25tZW50ID0gJzAnO1xyXG5cclxuICAgIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBpbnB1dExlbmd0aCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1hdC1mb3JtLXRpdGxlXCIgW25nQ2xhc3NdPVwie2Rpc2FibGU6IGRpc2FibGVkfVwiXHJcbiAgICBbbmdTdHlsZV09XCJ7J3RleHQtYWxpZ24nOiB4QWxpZ25tZW50ID09ICczJyA/ICdjZW50ZXInIDogeEFsaWdubWVudCA9PSAnMicgPyAncmlnaHQnIDogJ2xlZnQnfVwiPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZFwiIGNsYXNzPVwicmVxdWlyZWRcIiBbbmdDbGFzc109XCJ4QWxpZ25tZW50ID09ICcyJyA/ICdwdWxsLXJpZ2h0IGZsaXAnIDogJ3B1bGwtbGVmdCBmbGlwJ1wiPlxyXG4gICAgICAgIDxwZXAtaWNvbiBuYW1lPVwic3lzdGVtX211c3RcIj5cclxuICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPG1hdC1sYWJlbCAqbmdJZj1cInNob3dUaXRsZVwiIGNsYXNzPVwiYm9keS14c1wiIFtuZ1N0eWxlXT1cInsnbWF4LXdpZHRoJzogbWF4RmllbGRDaGFyYWN0ZXJzID4gMCA/ICc4NSUnIDogJzEwMCUnfVwiPlxyXG4gICAgICAgIHt7IGxhYmVsIH19PC9tYXQtbGFiZWw+XHJcblxyXG4gICAgPHNwYW4gKm5nSWY9XCJtYXhGaWVsZENoYXJhY3RlcnMgPiAwXCIgY2xhc3M9XCJib2R5LXhzXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7J3B1bGwtcmlnaHQnOiB4QWxpZ25tZW50ID09ICcxJyB8fCB4QWxpZ25tZW50ID09ICcwJywgJ3B1bGwtbGVmdCc6IHhBbGlnbm1lbnQgPT0gJzInfVwiPiZuYnNwO3t7IGlucHV0TGVuZ3RoIHx8IDAgfX0ve3sgbWF4RmllbGRDaGFyYWN0ZXJzIH19PC9zcGFuPlxyXG48L2Rpdj5cclxuIl19