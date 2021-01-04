import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[pepPreventMultiClick]',
})
export class PepPreventMultiClickDirective {
    @Input() disabledTime = 1000;

    constructor() {}

    @HostListener('click', ['$event'])
    clickEvent(event): void {
        event.srcElement.setAttribute('disabled', true);
        setTimeout(() => {
            event.srcElement.removeAttribute('disabled');
        }, this.disabledTime);
    }
}
