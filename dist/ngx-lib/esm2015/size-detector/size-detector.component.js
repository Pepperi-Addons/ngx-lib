import { Component, HostListener } from '@angular/core';
import { SCREEN_SIZE } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib";
import * as i2 from "@angular/common";
import * as i3 from "@angular/flex-layout/extended";
function SizeDetectorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(s_r1.css + " " + (ctx_r0.prefix + s_r1.id));
    i0.ɵɵpropertyInterpolate("fxShow.xs", s_r1.name == "xs");
    i0.ɵɵpropertyInterpolate("fxShow.sm", s_r1.name == "sm");
    i0.ɵɵpropertyInterpolate("fxShow.md", s_r1.name == "md");
    i0.ɵɵpropertyInterpolate("fxShow.lg", s_r1.name == "lg");
    i0.ɵɵpropertyInterpolate("fxShow.xl", s_r1.name == "xl");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("The current screen size is - ", s_r1.name, "\n");
} }
export class SizeDetectorComponent {
    constructor(element, layoutService) {
        this.element = element;
        this.layoutService = layoutService;
        this.prefix = 'is-';
        this.sizes = [
            {
                id: SCREEN_SIZE.XS,
                name: 'xs',
                css: `d-block d-sm-none`
            },
            {
                id: SCREEN_SIZE.SM,
                name: 'sm',
                css: `d-none d-sm-block d-md-none`
            },
            {
                id: SCREEN_SIZE.MD,
                name: 'md',
                css: `d-none d-md-block d-lg-none`
            },
            {
                id: SCREEN_SIZE.LG,
                name: 'lg',
                css: `d-none d-lg-block d-xl-none`
            },
            {
                id: SCREEN_SIZE.XL,
                name: 'xl',
                css: `d-none d-xl-block`
            },
        ];
    }
    onResize(event) {
        this.detectScreenSize();
    }
    ngAfterViewInit() {
        this.detectScreenSize();
    }
    detectScreenSize() {
        const currentSize = this.sizes.find(x => {
            const el = this.element.nativeElement.querySelector(`.${this.prefix}${x.id}`);
            const isVisible = window.getComputedStyle(el).display !== 'none';
            return isVisible;
        });
        this.layoutService.onResize(currentSize.id);
    }
}
SizeDetectorComponent.ɵfac = function SizeDetectorComponent_Factory(t) { return new (t || SizeDetectorComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LayoutService)); };
SizeDetectorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SizeDetectorComponent, selectors: [["pep-size-detector"]], hostBindings: function SizeDetectorComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function SizeDetectorComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
    } }, decls: 1, vars: 1, consts: [[3, "fxShow.xs", "fxShow.sm", "fxShow.md", "fxShow.lg", "fxShow.xl", "class", 4, "ngFor", "ngForOf"], [3, "fxShow.xs", "fxShow.sm", "fxShow.md", "fxShow.lg", "fxShow.xl"]], template: function SizeDetectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SizeDetectorComponent_div_0_Template, 2, 9, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.sizes);
    } }, directives: [i2.NgForOf, i3.DefaultShowHideDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SizeDetectorComponent, [{
        type: Component,
        args: [{
                selector: 'pep-size-detector',
                templateUrl: './size-detector.component.html'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LayoutService }]; }, { onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l6ZS1kZXRlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NpemUtZGV0ZWN0b3Ivc2l6ZS1kZXRlY3Rvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NpemUtZGV0ZWN0b3Ivc2l6ZS1kZXRlY3Rvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixZQUFZLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFpQixXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7O0lDR3JFLDhCQUU2QztJQUFBLFlBQzdDO0lBQUEsaUJBQU07Ozs7SUFESix5REFBMEM7SUFGZix3REFBOEI7SUFBQyx3REFBOEI7SUFDeEYsd0RBQThCO0lBQUMsd0RBQThCO0lBQUMsd0RBQThCO0lBQ2pELGVBQzdDO0lBRDZDLHVFQUM3Qzs7QURBQSxNQUFNLE9BQU8scUJBQXFCO0lBK0I5QixZQUFvQixPQUFtQixFQUFVLGFBQTRCO1FBQXpELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQTdCN0UsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFVBQUssR0FBRztZQUNKO2dCQUNJLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLG1CQUFtQjthQUMzQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLDZCQUE2QjthQUNyQztZQUNEO2dCQUNJLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLDZCQUE2QjthQUNyQztZQUNEO2dCQUNJLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLDZCQUE2QjthQUNyQztZQUNEO2dCQUNJLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLG1CQUFtQjthQUMzQjtTQUNKLENBQUM7SUFFK0UsQ0FBQztJQUdsRixRQUFRLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLGdCQUFnQjtRQUNwQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDO1lBRWpFLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OzBGQW5EUSxxQkFBcUI7MERBQXJCLHFCQUFxQjswR0FBckIsb0JBQWdCOztRQ0g3QixzRUFFNkM7O1FBRnhDLG1DQUF1Qjs7a0RER2YscUJBQXFCO2NBSmpDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsZ0NBQWdDO2FBQ2hEO3lGQW1DRyxRQUFRO2tCQURQLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlLCBTQ1JFRU5fU0laRSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwZXAtc2l6ZS1kZXRlY3RvcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2l6ZS1kZXRlY3Rvci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpemVEZXRlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIHByZWZpeCA9ICdpcy0nO1xyXG4gICAgc2l6ZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogU0NSRUVOX1NJWkUuWFMsXHJcbiAgICAgICAgICAgIG5hbWU6ICd4cycsXHJcbiAgICAgICAgICAgIGNzczogYGQtYmxvY2sgZC1zbS1ub25lYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogU0NSRUVOX1NJWkUuU00sXHJcbiAgICAgICAgICAgIG5hbWU6ICdzbScsXHJcbiAgICAgICAgICAgIGNzczogYGQtbm9uZSBkLXNtLWJsb2NrIGQtbWQtbm9uZWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFNDUkVFTl9TSVpFLk1ELFxyXG4gICAgICAgICAgICBuYW1lOiAnbWQnLFxyXG4gICAgICAgICAgICBjc3M6IGBkLW5vbmUgZC1tZC1ibG9jayBkLWxnLW5vbmVgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBTQ1JFRU5fU0laRS5MRyxcclxuICAgICAgICAgICAgbmFtZTogJ2xnJyxcclxuICAgICAgICAgICAgY3NzOiBgZC1ub25lIGQtbGctYmxvY2sgZC14bC1ub25lYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogU0NSRUVOX1NJWkUuWEwsXHJcbiAgICAgICAgICAgIG5hbWU6ICd4bCcsXHJcbiAgICAgICAgICAgIGNzczogYGQtbm9uZSBkLXhsLWJsb2NrYFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcclxuICAgIG9uUmVzaXplKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RTY3JlZW5TaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0U2NyZWVuU2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGV0ZWN0U2NyZWVuU2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2l6ZSA9IHRoaXMuc2l6ZXMuZmluZCh4ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLnByZWZpeH0ke3guaWR9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5kaXNwbGF5ICE9PSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaXNWaXNpYmxlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dFNlcnZpY2Uub25SZXNpemUoY3VycmVudFNpemUuaWQpO1xyXG4gICAgfVxyXG59XHJcbiIsIjwhLS0gQm9vdHN0cmFwIC0tPlxyXG48IS0tIDxkaXYgKm5nRm9yPVwibGV0IHMgb2Ygc2l6ZXNcIiBjbGFzcz1cInt7cy5jc3MgKyAnICcgKyAocHJlZml4ICsgcy5pZCkgfX1cIj57e3MubmFtZX19PC9kaXY+IC0tPlxyXG5cclxuPCEtLSBBbmd1bGFyIGZsZXgtbGF5b3V0IC0tPlxyXG48ZGl2ICpuZ0Zvcj1cImxldCBzIG9mIHNpemVzXCIgZnhTaG93LnhzPVwie3tzLm5hbWUgPT0gJ3hzJ319XCIgZnhTaG93LnNtPVwie3tzLm5hbWUgPT0gJ3NtJ319XCJcclxuICBmeFNob3cubWQ9XCJ7e3MubmFtZSA9PSAnbWQnfX1cIiBmeFNob3cubGc9XCJ7e3MubmFtZSA9PSAnbGcnfX1cIiBmeFNob3cueGw9XCJ7e3MubmFtZSA9PSAneGwnfX1cIlxyXG4gIGNsYXNzPVwie3tzLmNzcyArICcgJyArIChwcmVmaXggKyBzLmlkKSB9fVwiPlRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGlzIC0ge3tzLm5hbWV9fVxyXG48L2Rpdj4iXX0=