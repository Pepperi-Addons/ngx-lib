import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PepperiSeparatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiSeparatorComponent_ng_template_1_Template(rf, ctx) { }
function PepperiSeparatorComponent_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("pepperi-separator-field wrap pepperi-border-bottom align-", ctx_r5.xAlignment, "");
    i0.ɵɵpropertyInterpolate("title", ctx_r5.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.label);
} }
function PepperiSeparatorComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("pepperi-separator-field pepperi-small-separator-field pepperi-border-bottom text-align-", ctx_r6.xAlignment, "");
    i0.ɵɵpropertyInterpolate("dir", ctx_r6.xAlignment == "2" ? "rtl" : "ltr");
    i0.ɵɵpropertyInterpolate("title", ctx_r6.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.label);
} }
function PepperiSeparatorComponent_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r7.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r7.label);
} }
function PepperiSeparatorComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiSeparatorComponent_ng_template_3_ng_container_0_Template, 4, 5, "ng-container", 3);
    i0.ɵɵtemplate(1, PepperiSeparatorComponent_ng_template_3_ng_container_1_Template, 4, 6, "ng-container", 3);
    i0.ɵɵtemplate(2, PepperiSeparatorComponent_ng_template_3_ng_container_2_Template, 3, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiForm);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiCard);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.layoutType === ctx_r4.LAYOUT_TYPE.PepperiTable);
} }
export class PepperiSeparatorComponent {
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
PepperiSeparatorComponent.ɵfac = function PepperiSeparatorComponent_Factory(t) { return new (t || PepperiSeparatorComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PepperiSeparatorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiSeparatorComponent, selectors: [["pep-separator"]], inputs: { key: "key", label: "label", xAlignment: "xAlignment", form: "form", layoutType: "layoutType" }, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["emptyBlock", ""], ["separatorBlock", ""], [4, "ngIf"], [3, "title"], [1, "block-with-text", "body-md"], [3, "dir", "title"], [1, "small-block-with-text", "body-sm"], [1, "cl", 3, "title"]], template: function PepperiSeparatorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PepperiSeparatorComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, PepperiSeparatorComponent_ng_template_1_Template, 0, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PepperiSeparatorComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(4);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.Editmodal)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [i1.NgIf], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiSeparatorComponent, [{
        type: Component,
        args: [{
                selector: 'pep-separator',
                templateUrl: './separator.component.html',
                styleUrls: ['./separator.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VwYXJhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvc2VwYXJhdG9yL3NlcGFyYXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NlcGFyYXRvci9zZXBhcmF0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsdUJBQXVCLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztJQ0Y1RSx3QkFBZ0g7Ozs7SUFJNUcsNkJBQ0k7SUFBQSw4QkFDSTtJQUFBLCtCQUFzQztJQUFBLFlBQVc7SUFBQSxpQkFBTztJQUM1RCxpQkFBTTtJQUNWLDBCQUFlOzs7SUFITixlQUFpRjtJQUFqRiw2R0FBaUY7SUFBQywrQ0FBbUI7SUFDaEUsZUFBVztJQUFYLGtDQUFXOzs7SUFJekQsNkJBQ0k7SUFBQSw4QkFFSTtJQUFBLCtCQUE0QztJQUFBLFlBQVc7SUFBQSxpQkFBTztJQUNsRSxpQkFBTTtJQUNWLDBCQUFlOzs7SUFKTixlQUErRztJQUEvRywySUFBK0c7SUFBQyx5RUFBNkM7SUFDOUosK0NBQW1CO0lBQ3lCLGVBQVc7SUFBWCxrQ0FBVzs7O0lBSS9ELDZCQUNJO0lBQUEsZ0NBQXNDO0lBQUEsWUFBVztJQUFBLGlCQUFRO0lBQzdELDBCQUFlOzs7SUFETyxlQUFtQjtJQUFuQiwrQ0FBbUI7SUFBQyxlQUFXO0lBQVgsa0NBQVc7OztJQWRyRCwwR0FDSTtJQUtKLDBHQUNJO0lBTUosMEdBQ0k7OztJQWRVLDJFQUE4QztJQU05QyxlQUE4QztJQUE5QywyRUFBOEM7SUFPOUMsZUFBK0M7SUFBL0MsNEVBQStDOztBRFBqRSxNQUFNLE9BQU8seUJBQXlCO0lBYWxDLFlBQ1ksUUFBbUIsRUFDbkIsT0FBbUI7UUFEbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBZHRCLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUUxQixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUVqQixTQUFJLEdBQWMsSUFBSSxDQUFDO1FBQ3ZCLGVBQVUsR0FBZ0IsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUUzRCxnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBSWdCLENBQUM7SUFFcEMsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFFdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUN6RztJQUNMLENBQUM7O2tHQXZCUSx5QkFBeUI7OERBQXpCLHlCQUF5QjtRQ1Z0Qyw0RkFBaUc7UUFDakcsMkhBQTBCO1FBRTFCLDJIQUNJOzs7O1FBSlUsbUVBQWtGLGlCQUFBLGlCQUFBOztrRERVbkYseUJBQXlCO2NBTnJDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEO3FGQUVZLEdBQUc7a0JBQVgsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFJRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTEFZT1VUX1RZUEUsIEN1c3RvbWl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlcC1zZXBhcmF0b3InLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlcGFyYXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zZXBhcmF0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpU2VwYXJhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGtleSA9ICcnO1xyXG4gICAgQElucHV0KCkgbGFiZWwgPSAnJztcclxuICAgIEBJbnB1dCgpIHhBbGlnbm1lbnQgPSAnMCc7XHJcblxyXG4gICAgY29udHJvbFR5cGUgPSAnc2VwYXJhdG9yJztcclxuXHJcbiAgICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXAgPSBudWxsO1xyXG4gICAgQElucHV0KCkgbGF5b3V0VHlwZTogTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybTtcclxuXHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG4gICAgc3RhbmRBbG9uZSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFuZEFsb25lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlNUQU5EX0FMT05FX0ZJRUxEX0NMQVNTX05BTUUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuRWRpdG1vZGFsOyB0aGVuIGVtcHR5QmxvY2s7IGVsc2Ugc2VwYXJhdG9yQmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuPG5nLXRlbXBsYXRlICNlbXB0eUJsb2NrPiA8L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNzZXBhcmF0b3JCbG9jaz5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLXNlcGFyYXRvci1maWVsZCB3cmFwIHBlcHBlcmktYm9yZGVyLWJvdHRvbSBhbGlnbi17eyB4QWxpZ25tZW50IH19XCIgdGl0bGU9XCJ7eyBsYWJlbCB9fVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrLXdpdGgtdGV4dCBib2R5LW1kXCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGVwcGVyaS1zZXBhcmF0b3ItZmllbGQgcGVwcGVyaS1zbWFsbC1zZXBhcmF0b3ItZmllbGQgcGVwcGVyaS1ib3JkZXItYm90dG9tIHRleHQtYWxpZ24te3sgeEFsaWdubWVudCB9fVwiIGRpcj1cInt7IHhBbGlnbm1lbnQgPT0gJzInID8gJ3J0bCcgOiAnbHRyJyB9fVwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwie3sgbGFiZWwgfX1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbWFsbC1ibG9jay13aXRoLXRleHQgYm9keS1zbVwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlUYWJsZVwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNsXCIgdGl0bGU9XCJ7eyBsYWJlbCB9fVwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==