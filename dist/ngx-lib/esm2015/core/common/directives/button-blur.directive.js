import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonBlurDirective {
    constructor(element) {
        this.element = element;
    }
    onClick() {
        setTimeout(() => {
            this.element.nativeElement.blur();
        }, 0);
    }
}
ButtonBlurDirective.ɵfac = function ButtonBlurDirective_Factory(t) { return new (t || ButtonBlurDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ButtonBlurDirective.ɵdir = i0.ɵɵdefineDirective({ type: ButtonBlurDirective, selectors: [["", "pepButtonBlur", ""]], hostBindings: function ButtonBlurDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function ButtonBlurDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonBlurDirective, [{
        type: Directive,
        args: [{
                selector: '[pepButtonBlur]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWJsdXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9zcmMvY29yZS9jb21tb24vZGlyZWN0aXZlcy9idXR0b24tYmx1ci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWMsTUFBTSxlQUFlLENBQUM7O0FBS3BFLE1BQU0sT0FBTyxtQkFBbUI7SUFDNUIsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFJLENBQUM7SUFHNUMsT0FBTztRQUNILFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDOztzRkFSUSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtnR0FBbkIsYUFBUzs7a0RBQVQsbUJBQW1CO2NBSC9CLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2FBQzlCOzZEQUtHLE9BQU87a0JBRE4sWUFBWTttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbcGVwQnV0dG9uQmx1cl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25CbHVyRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gICAgb25DbGljaygpOiB2b2lkIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==