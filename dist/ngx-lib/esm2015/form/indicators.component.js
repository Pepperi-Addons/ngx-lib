import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@pepperi-addons/ngx-lib/icon";
function PepperiIndicatorsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "pep-icon", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const value_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("fill", value_r2);
} }
function PepperiIndicatorsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "pep-icon", 4);
    i0.ɵɵelementContainerEnd();
} }
const _c0 = function (a0) { return { "is-inside-table": a0 }; };
export class PepperiIndicatorsComponent {
    constructor() {
        this.controlType = 'indicators';
        this.layoutType = LAYOUT_TYPE.PepperiTable;
        this.LAYOUT_TYPE = LAYOUT_TYPE;
    }
}
PepperiIndicatorsComponent.ɵfac = function PepperiIndicatorsComponent_Factory(t) { return new (t || PepperiIndicatorsComponent)(); };
PepperiIndicatorsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiIndicatorsComponent, selectors: [["pep-indicators"]], inputs: { key: "key", value: "value", layoutType: "layoutType" }, decls: 3, vars: 5, consts: [[1, "indicators-container", 3, "ngClass"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["name", "indicator_dot_placeholder", 1, "pull-left", "flip", 3, "fill"], ["name", "indicator_dot_placeholder", 1, "pull-left", "flip"]], template: function PepperiIndicatorsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PepperiIndicatorsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, PepperiIndicatorsComponent_ng_container_2_Template, 2, 0, "ng-container", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.value == null ? null : ctx.value.split(";"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.key != "ItemIndicatorsWithoutCampaign" && (ctx.value == null ? null : ctx.value.split(";").length) < 4);
    } }, directives: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.PepperiIconComponent], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.indicators-container[_ngcontent-%COMP%]{height:2.5rem}.indicators-container[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]{height:1rem;margin:.05rem;width:1rem}.indicators-container.is-inside-table[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiIndicatorsComponent, [{
        type: Component,
        args: [{
                selector: 'pep-indicators',
                templateUrl: './indicators.component.html',
                styleUrls: ['./indicators.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { key: [{
            type: Input
        }], value: [{
            type: Input
        }], layoutType: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaWNhdG9ycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2Zvcm0vaW5kaWNhdG9ycy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2Zvcm0vaW5kaWNhdG9ycy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0lDQWxELDZCQUNJO0lBQUEsOEJBQTRGO0lBQ2hHLDBCQUFlOzs7SUFEdUQsZUFBYztJQUFkLCtCQUFjOzs7SUFFcEYsNkJBQ0k7SUFBQSw4QkFBNkU7SUFDakYsMEJBQWU7OztBREduQixNQUFNLE9BQU8sMEJBQTBCO0lBU25DO1FBTEEsZ0JBQVcsR0FBRyxZQUFZLENBQUM7UUFFbEIsZUFBVSxHQUFnQixXQUFXLENBQUMsWUFBWSxDQUFDO1FBQzVELGdCQUFXLEdBQUcsV0FBVyxDQUFDO0lBRVYsQ0FBQzs7b0dBVFIsMEJBQTBCOytEQUExQiwwQkFBMEI7UUNUdkMsOEJBQ0k7UUFBQSw2RkFDSTtRQUVKLDZGQUNJO1FBRVIsaUJBQU07O1FBUDRCLHFHQUEwRTtRQUMxRixlQUF1QztRQUF2Qyx5RUFBdUM7UUFHdkMsZUFBOEU7UUFBOUUsaUlBQThFOztrRERLbkYsMEJBQTBCO2NBTnRDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7c0NBRVksR0FBRztrQkFBWCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBSUcsVUFBVTtrQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExBWU9VVF9UWVBFIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlcC1pbmRpY2F0b3JzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbmRpY2F0b3JzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2luZGljYXRvcnMuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpSW5kaWNhdG9yc0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBrZXk6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29udHJvbFR5cGUgPSAnaW5kaWNhdG9ycyc7XHJcblxyXG4gICAgQElucHV0KCkgbGF5b3V0VHlwZTogTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRS5QZXBwZXJpVGFibGU7XHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImluZGljYXRvcnMtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieyAnaXMtaW5zaWRlLXRhYmxlJzogbGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlIH1cIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHZhbHVlIG9mIHZhbHVlPy5zcGxpdCgnOycpXCI+XHJcbiAgICAgICAgPHBlcC1pY29uIG5hbWU9XCJpbmRpY2F0b3JfZG90X3BsYWNlaG9sZGVyXCIgY2xhc3M9XCJwdWxsLWxlZnQgZmxpcFwiIFtmaWxsXT1cInZhbHVlXCI+PC9wZXAtaWNvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImtleSAhPSAnSXRlbUluZGljYXRvcnNXaXRob3V0Q2FtcGFpZ24nICYmIHZhbHVlPy5zcGxpdCgnOycpLmxlbmd0aCA8IDRcIj5cclxuICAgICAgICA8cGVwLWljb24gbmFtZT1cImluZGljYXRvcl9kb3RfcGxhY2Vob2xkZXJcIiBjbGFzcz1cInB1bGwtbGVmdCBmbGlwXCI+PC9wZXAtaWNvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj4iXX0=