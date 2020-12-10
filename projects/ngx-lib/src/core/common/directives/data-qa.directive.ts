
import { Directive, HostListener, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[pepDataQa]'
})
export class DataQaDirective implements OnInit {
    @Input('pepDataQa') dataQa: string;

    constructor(
        private renderer: Renderer2,
        private element: ElementRef) {
    }

    ngOnInit(): void {
        this.renderer.setAttribute(this.element.nativeElement, 'data-qa', this.dataQa);
    }
}
