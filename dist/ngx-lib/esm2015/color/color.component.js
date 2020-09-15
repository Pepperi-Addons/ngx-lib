import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomizationService, LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';
import { PepperiColorPickerComponent } from './color-picker.component';
import { PepColorType } from './color.model';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/dialog";
import * as i2 from "@pepperi-addons/ngx-lib/field-title";
import * as i3 from "@angular/common";
import * as i4 from "@pepperi-addons/ngx-lib";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "@pepperi-addons/ngx-lib/icon";
function PepperiColorComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "right-alignment": a0 }; };
const _c1 = function (a0, a1) { return { disable: a0, "one-row": a1 }; };
const _c2 = function (a0) { return { "background": a0 }; };
export class PepperiColorComponent {
    constructor(dialogService, renderer, element) {
        this.dialogService = dialogService;
        this.renderer = renderer;
        this.element = element;
        this.key = '';
        this.value = '';
        this.label = '';
        this.disabled = false;
        this.readonly = false;
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.type = PepColorType.AnyColor;
        this.showTitle = true;
        this.showAAComplient = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.valueChanged = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
    }
    ngOnInit() {
        this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
    }
    ngOnDestroy() {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }
    changeColor(value) {
        this.value = value;
        this.valueChanged.emit({ apiName: this.key, value });
    }
    chooseColor() {
        const dialogRef = this.dialogService.openDialog(PepperiColorPickerComponent, { value: this.value, type: this.type, showAAComplient: this.showAAComplient });
        dialogRef.afterClosed().subscribe(value => {
            if (value !== undefined && value !== null) {
                this.changeColor(value);
            }
        });
    }
}
PepperiColorComponent.ɵfac = function PepperiColorComponent_Factory(t) { return new (t || PepperiColorComponent)(i0.ɵɵdirectiveInject(i1.DialogService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PepperiColorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiColorComponent, selectors: [["pep-color"]], inputs: { key: "key", value: "value", label: "label", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", type: "type", showTitle: "showTitle", showAAComplient: "showAAComplient", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, decls: 4, vars: 16, consts: [[3, "label", "disabled", "xAlignment", "showTitle"], [1, "pepperi-color-container", 3, "id", "ngClass"], ["pepRtlDirection", "", 1, "pepperi-color", "pepperi-input", 3, "ngClass", "ngStyle", "click"], ["class", "pepperi-button icon-button xs weak invert mat-button btn-edit", "tabindex", "-1", "pepButtonBlur", "", "mat-button", "", 4, "ngIf"], ["tabindex", "-1", "pepButtonBlur", "", "mat-button", "", 1, "pepperi-button", "icon-button", "xs", "weak", "invert", "mat-button", "btn-edit"], ["name", "system_edit"]], template: function PepperiColorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pep-field-title", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵlistener("click", function PepperiColorComponent_Template_div_click_2_listener() { return ctx.chooseColor(); });
        i0.ɵɵtemplate(3, PepperiColorComponent_button_3_Template, 3, 0, "button", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("label", ctx.label)("disabled", ctx.disabled)("xAlignment", ctx.xAlignment)("showTitle", ctx.showTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.key)("ngClass", i0.ɵɵpureFunction1(9, _c0, ctx.xAlignment == "2"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(11, _c1, ctx.disabled, ctx.rowSpan === 1))("ngStyle", i0.ɵɵpureFunction1(14, _c2, ctx.value ? ctx.value : "transparent"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.disabled);
    } }, directives: [i2.PepperiFieldTitleComponent, i3.NgClass, i4.RtlDirectionDirective, i3.NgStyle, i3.NgIf, i5.MatButton, i4.ButtonBlurDirective, i6.MatIcon, i7.PepperiIconComponent], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid}.pepperi-color-container[_ngcontent-%COMP%]   .pepperi-color[_ngcontent-%COMP%]{display:-ms-grid;display:grid;padding:0}.pepperi-color-container[_ngcontent-%COMP%]   .pepperi-color[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]{-ms-grid-column-align:end;-ms-grid-row-align:center;align-self:center;justify-self:end;margin:0 var(--pep-spacing-md,.75rem);min-width:unset;padding:0;width:calc(var(--pep-form-field-height, 2.5rem) - var(--pep-spacing-lg, 1rem))}.pepperi-color-container.right-alignment[_ngcontent-%COMP%]   .pepperi-color[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]{-ms-grid-column-align:start;justify-self:start}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiColorComponent, [{
        type: Component,
        args: [{
                selector: 'pep-color',
                templateUrl: './color.component.html',
                styleUrls: ['./color.component.scss']
            }]
    }], function () { return [{ type: i1.DialogService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
            type: Input
        }], value: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }], xAlignment: [{
            type: Input
        }], rowSpan: [{
            type: Input
        }], type: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], showAAComplient: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9jb2xvci9jb2xvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2NvbG9yL2NvbG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBeUIsWUFBWSxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHNUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQ0NyQyxpQ0FFSTtJQUFBLGdDQUNJO0lBQUEsOEJBQXdDO0lBQzVDLGlCQUFXO0lBQ2YsaUJBQVM7Ozs7O0FEQ2pCLE1BQU0sT0FBTyxxQkFBcUI7SUFrQjlCLFlBQ1ksYUFBNEIsRUFDNUIsUUFBbUIsRUFDbkIsT0FBbUI7UUFGbkIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBcEJ0QixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNqQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osU0FBSSxHQUFpQixZQUFZLENBQUMsUUFBUSxDQUFDO1FBRTNDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsZUFBVSxHQUFnQixXQUFXLENBQUMsV0FBVyxDQUFDO1FBRWpELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFcEUsZ0JBQVcsR0FBRyxXQUFXLENBQUM7SUFPMUIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVU7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxXQUFXO1FBQ1AsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQzNDLDJCQUEyQixFQUMzQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUVuRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzswRkFsRFEscUJBQXFCOzBEQUFyQixxQkFBcUI7UUNabEMscUNBQ2tCO1FBQ2xCLDhCQUNJO1FBQUEsOEJBR0k7UUFIaUIsK0ZBQVMsaUJBQWEsSUFBQztRQUd4Qyw0RUFFSTtRQUlSLGlCQUFNO1FBQ1YsaUJBQU07O1FBYlcsaUNBQWUsMEJBQUEsOEJBQUEsNEJBQUE7UUFFM0IsZUFBVTtRQUFWLDRCQUFVLDhEQUFBO1FBRVAsZUFBeUQ7UUFBekQsc0ZBQXlELCtFQUFBO1FBRWpELGVBQWlCO1FBQWpCLG9DQUFpQjs7a0RETXBCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3hDO2lIQUVZLEdBQUc7a0JBQVgsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUVHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUVJLFlBQVk7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEN1c3RvbWl6YXRpb25TZXJ2aWNlLCBMQVlPVVRfVFlQRSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2RpYWxvZyc7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpQ29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZXBDb2xvclR5cGUgfSBmcm9tICcuL2NvbG9yLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwZXAtY29sb3InLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbG9yLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NvbG9yLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlDb2xvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIGtleSA9ICcnO1xyXG4gICAgQElucHV0KCkgdmFsdWUgPSAnJztcclxuICAgIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHhBbGlnbm1lbnQgPSAnMCc7XHJcbiAgICBASW5wdXQoKSByb3dTcGFuID0gMTtcclxuICAgIEBJbnB1dCgpIHR5cGU6IFBlcENvbG9yVHlwZSA9IFBlcENvbG9yVHlwZS5BbnlDb2xvcjtcclxuXHJcbiAgICBASW5wdXQoKSBzaG93VGl0bGUgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgc2hvd0FBQ29tcGxpZW50ID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGxheW91dFR5cGU6IExBWU9VVF9UWVBFID0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm07XHJcblxyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDdXN0b21pemF0aW9uU2VydmljZS5TVEFORF9BTE9ORV9GSUVMRF9DTEFTU19OQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ29sb3IodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHsgYXBpTmFtZTogdGhpcy5rZXksIHZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNob29zZUNvbG9yKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuRGlhbG9nKFxyXG4gICAgICAgICAgICBQZXBwZXJpQ29sb3JQaWNrZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IHRoaXMudmFsdWUsIHR5cGU6IHRoaXMudHlwZSwgc2hvd0FBQ29tcGxpZW50OiB0aGlzLnNob3dBQUNvbXBsaWVudCB9KTtcclxuXHJcbiAgICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ29sb3IodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCI8cGVwLWZpZWxkLXRpdGxlIFtsYWJlbF09XCJsYWJlbFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFt4QWxpZ25tZW50XT1cInhBbGlnbm1lbnRcIiBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiPlxyXG48L3BlcC1maWVsZC10aXRsZT5cclxuPGRpdiBbaWRdPVwia2V5XCIgY2xhc3M9XCJwZXBwZXJpLWNvbG9yLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsgJ3JpZ2h0LWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzInIH1cIj5cclxuICAgIDxkaXYgcGVwUnRsRGlyZWN0aW9uIChjbGljayk9XCJjaG9vc2VDb2xvcigpXCIgY2xhc3M9XCJwZXBwZXJpLWNvbG9yIHBlcHBlcmktaW5wdXRcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlOiBkaXNhYmxlZCwgJ29uZS1yb3cnOiByb3dTcGFuID09PSAxfVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZCc6ICB2YWx1ZSA/IHZhbHVlIDogJ3RyYW5zcGFyZW50JyB9XCI+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFkaXNhYmxlZFwiIGNsYXNzPVwicGVwcGVyaS1idXR0b24gaWNvbi1idXR0b24geHMgd2VhayBpbnZlcnQgbWF0LWJ1dHRvbiBidG4tZWRpdFwiIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgICAgICBwZXBCdXR0b25CbHVyIG1hdC1idXR0b24+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDxwZXAtaWNvbiBuYW1lPVwic3lzdGVtX2VkaXRcIj48L3BlcC1pY29uPlxyXG4gICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==