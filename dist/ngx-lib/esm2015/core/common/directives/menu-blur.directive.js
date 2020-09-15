import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class MenuBlurDirective {
    constructor(element) {
        this.element = element;
    }
    menuClosedEvent() {
        setTimeout(() => {
            this.element.nativeElement.blur();
        }, 0);
    }
    menuOpenedEvent() {
        setTimeout(() => {
            this.element.nativeElement.blur();
        }, 0);
    }
}
MenuBlurDirective.ɵfac = function MenuBlurDirective_Factory(t) { return new (t || MenuBlurDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
MenuBlurDirective.ɵdir = i0.ɵɵdefineDirective({ type: MenuBlurDirective, selectors: [["", "pepMenuBlur", ""]], hostBindings: function MenuBlurDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("menuClosed", function MenuBlurDirective_menuClosed_HostBindingHandler() { return ctx.menuClosedEvent(); })("menuOpened", function MenuBlurDirective_menuOpened_HostBindingHandler() { return ctx.menuOpenedEvent(); });
    } } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuBlurDirective, [{
        type: Directive,
        args: [{
                selector: '[pepMenuBlur]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { menuClosedEvent: [{
            type: HostListener,
            args: ['menuClosed']
        }], menuOpenedEvent: [{
            type: HostListener,
            args: ['menuOpened']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1ibHVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvc3JjL2NvcmUvY29tbW9uL2RpcmVjdGl2ZXMvbWVudS1ibHVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBYyxNQUFNLGVBQWUsQ0FBQzs7QUFLcEUsTUFBTSxPQUFPLGlCQUFpQjtJQUMxQixZQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUksQ0FBQztJQUc1QyxlQUFlO1FBQ1gsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFHRCxlQUFlO1FBQ1gsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7O2tGQWZRLGlCQUFpQjtzREFBakIsaUJBQWlCO3dHQUFqQixxQkFBaUIsdUZBQWpCLHFCQUFpQjs7a0RBQWpCLGlCQUFpQjtjQUg3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7YUFDNUI7NkRBS0csZUFBZTtrQkFEZCxZQUFZO21CQUFDLFlBQVk7WUFRMUIsZUFBZTtrQkFEZCxZQUFZO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbcGVwTWVudUJsdXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUJsdXJEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdtZW51Q2xvc2VkJylcclxuICAgIG1lbnVDbG9zZWRFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21lbnVPcGVuZWQnKVxyXG4gICAgbWVudU9wZW5lZEV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbn1cclxuIl19