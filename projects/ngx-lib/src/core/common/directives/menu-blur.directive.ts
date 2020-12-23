
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[pepMenuBlur]'
})
export class PepMenuBlurDirective {
    constructor(private element: ElementRef) { }

    @HostListener('menuClosed')
    menuClosedEvent(): void {
        setTimeout(() => {
            this.element.nativeElement.blur();
        }, 0);
    }

    @HostListener('menuOpened')
    menuOpenedEvent(): void {
        setTimeout(() => {
            this.element.nativeElement.blur();
        }, 0);
    }
}
