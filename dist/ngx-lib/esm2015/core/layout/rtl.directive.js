import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./layout.service";
export class RtlClassDirective {
    constructor(layoutService, renderer, element) {
        this.layoutService = layoutService;
        this.renderer = renderer;
        this.element = element;
    }
    ngOnInit() {
        const isRtl = this.layoutService.isRtl();
        if (isRtl) {
            this.renderer.addClass(this.element.nativeElement, 'rtl');
        }
    }
}
RtlClassDirective.ɵfac = function RtlClassDirective_Factory(t) { return new (t || RtlClassDirective)(i0.ɵɵdirectiveInject(i1.LayoutService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
RtlClassDirective.ɵdir = i0.ɵɵdefineDirective({ type: RtlClassDirective, selectors: [["", "pepRtlClass", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RtlClassDirective, [{
        type: Directive,
        args: [{
                selector: '[pepRtlClass]',
            }]
    }], function () { return [{ type: i1.LayoutService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, null); })();
export class RtlDirectionDirective {
    constructor(layoutService, renderer, element) {
        this.layoutService = layoutService;
        this.renderer = renderer;
        this.element = element;
    }
    ngOnInit() {
        const isRtl = this.layoutService.isRtl();
        this.renderer.setAttribute(this.element.nativeElement, 'dir', isRtl ? 'rtl' : 'ltr');
    }
}
RtlDirectionDirective.ɵfac = function RtlDirectionDirective_Factory(t) { return new (t || RtlDirectionDirective)(i0.ɵɵdirectiveInject(i1.LayoutService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
RtlDirectionDirective.ɵdir = i0.ɵɵdefineDirective({ type: RtlDirectionDirective, selectors: [["", "pepRtlDirection", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RtlDirectionDirective, [{
        type: Directive,
        args: [{
                selector: '[pepRtlDirection]',
            }]
    }], function () { return [{ type: i1.LayoutService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnRsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvc3JjL2NvcmUvbGF5b3V0L3J0bC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBZ0MsTUFBTSxlQUFlLENBQUM7OztBQU12RSxNQUFNLE9BQU8saUJBQWlCO0lBQzFCLFlBQ1ksYUFBNEIsRUFDNUIsUUFBbUIsRUFDbkIsT0FBbUI7UUFGbkIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQzVCLENBQUM7SUFFSixRQUFRO1FBQ0osTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV6QyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdEO0lBQ0wsQ0FBQzs7a0ZBYlEsaUJBQWlCO3NEQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUg3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7YUFDNUI7O0FBb0JELE1BQU0sT0FBTyxxQkFBcUI7SUFDOUIsWUFDWSxhQUE0QixFQUM1QixRQUFtQixFQUNuQixPQUFtQjtRQUZuQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFDNUIsQ0FBQztJQUVKLFFBQVE7UUFDSixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7MEZBWFEscUJBQXFCOzBEQUFyQixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUhqQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjthQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICcuL2xheW91dC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbcGVwUnRsQ2xhc3NdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJ0bENsYXNzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbGF5b3V0U2VydmljZTogTGF5b3V0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmXHJcbiAgICApIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaXNSdGwgPSB0aGlzLmxheW91dFNlcnZpY2UuaXNSdGwoKTtcclxuXHJcbiAgICAgICAgaWYgKGlzUnRsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdydGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbcGVwUnRsRGlyZWN0aW9uXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSdGxEaXJlY3Rpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWZcclxuICAgICkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpc1J0bCA9IHRoaXMubGF5b3V0U2VydmljZS5pc1J0bCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2RpcicsIGlzUnRsID8gJ3J0bCcgOiAnbHRyJyk7XHJcbiAgICB9XHJcbn1cclxuIl19