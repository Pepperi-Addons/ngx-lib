import {
    AfterViewInit,
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnDestroy,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[pepAutoWidth]',
})
export class PepInputAutoWidthDirective implements AfterViewInit, OnDestroy {
    @Input() includePadding = true;

    private input: any = null;

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngAfterViewInit(): void {
        if (this.el.nativeElement.tagName.toLowerCase() === 'input') {
            this.input = this.el;
        } else {
            const list = this.el.nativeElement.querySelectorAll('input');
            this.input = list.length > 0 ? list[0] : null;
        }

        if (this.input) {
            this.input.addEventListener(
                'blur',
                this.setWidthUsingText.bind(this)
            );
            this.input.addEventListener(
                'keyup',
                this.setWidthUsingText.bind(this)
            );
        }

        this.setWidthUsingText();
    }

    ngOnDestroy() {
        this.input.removeEventListener(
            'blur',
            this.setWidthUsingText.bind(this)
        );
        this.input.removeEventListener(
            'keyup',
            this.setWidthUsingText.bind(this)
        );
    }

    get paddingWidth(): number {
        return this.includePadding
            ? this._sumPropertyValues(['padding-left', 'padding-right'])
            : 0;
    }

    get style() {
        return getComputedStyle(this.input, '');
    }

    setWidth(width: number): void {
        this.renderer.setStyle(this.input, 'width', width + 'px');
    }

    setWidthUsingText(): void {
        if (this.input) {
            const text = this.input.value;
            this.setWidth(this.textWidth(text) + this.paddingWidth);
        }
    }

    private _sumPropertyValues(properties: string[]): number {
        return properties
            .map((property) =>
                parseInt(this.style.getPropertyValue(property), 10)
            )
            .reduce((a, b) => a + b, 0);
    }

    private textWidth(value: string): number {
        const ctx = this.renderer.createElement('canvas').getContext('2d');
        const {
            fontStyle,
            fontVariant,
            fontWeight,
            fontSize,
            fontFamily,
        } = this.style;

        // font string format: {normal, normal, 700, 20px, Roboto, "Helvetica Neue", sans-serif}
        ctx.font =
            fontStyle +
            ' ' +
            fontVariant +
            ' ' +
            fontWeight +
            ' ' +
            fontSize +
            ' ' +
            fontFamily;
        return ctx ? ctx.measureText(value).width : 0;
    }
}
