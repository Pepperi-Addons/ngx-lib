import {Directive, Renderer2, ElementRef, OnInit} from '@angular/core';
import { LayoutService } from './layout.service';

@Directive({
    selector: '[pepRtlClass]',
})
export class RtlClassDirective implements OnInit {
    constructor(
        private layoutService: LayoutService,
        private renderer: Renderer2,
        private element: ElementRef
    ) {}

    ngOnInit(): void {
        const isRtl = this.layoutService.isRtl();

        if (isRtl) {
            this.renderer.addClass(this.element.nativeElement, 'rtl');
        }
    }
}

@Directive({
    selector: '[pepRtlDirection]',
})
export class RtlDirectionDirective implements OnInit {
    constructor(
        private layoutService: LayoutService,
        private renderer: Renderer2,
        private element: ElementRef
    ) {}

    ngOnInit(): void {
        const isRtl = this.layoutService.isRtl();

        this.renderer.setAttribute(this.element.nativeElement, 'dir', isRtl ? 'rtl' : 'ltr');
    }
}
