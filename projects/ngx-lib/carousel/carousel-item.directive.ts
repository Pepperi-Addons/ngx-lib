import {
    Directive,
    ElementRef,
    Input,
    HostBinding,
    Inject,
} from '@angular/core';

@Directive({
    selector: '[pepCarouselItem]',
})
export class PepCarouselItemDirective {
    @HostBinding('style.display')
    display = 'inline-block';

    @Input('dragDisabled')
    get dragDisabled() {
        return this._dragDisabled;
    }
    set dragDisabled(value: boolean) {
        this._dragDisabled = value;
    }

    _dragDisabled = false;

    _elementRef: ElementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this._elementRef = elementRef;
    }
}
