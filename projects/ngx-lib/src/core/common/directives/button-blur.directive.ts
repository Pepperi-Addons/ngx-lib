import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[pepButtonBlur]'
})
export class ButtonBlurDirective {
    constructor(private element: ElementRef) { }

    @HostListener('click')
    onClick(): void {
        setTimeout(() => {
            this.element.nativeElement.blur();
        }, 0);
    }
}
