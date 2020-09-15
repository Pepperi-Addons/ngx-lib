import { Component, OnInit, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { LayoutService, SCREEN_SIZE } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-size-detector',
    templateUrl: './size-detector.component.html'
})
export class SizeDetectorComponent implements AfterViewInit {

    prefix = 'is-';
    sizes = [
        {
            id: SCREEN_SIZE.XS,
            name: 'xs',
            css: `d-block d-sm-none`
        },
        {
            id: SCREEN_SIZE.SM,
            name: 'sm',
            css: `d-none d-sm-block d-md-none`
        },
        {
            id: SCREEN_SIZE.MD,
            name: 'md',
            css: `d-none d-md-block d-lg-none`
        },
        {
            id: SCREEN_SIZE.LG,
            name: 'lg',
            css: `d-none d-lg-block d-xl-none`
        },
        {
            id: SCREEN_SIZE.XL,
            name: 'xl',
            css: `d-none d-xl-block`
        },
    ];

    constructor(private element: ElementRef, private layoutService: LayoutService) { }

    @HostListener('window:resize', ['$event'])
    onResize(event): void {
        this.detectScreenSize();
    }

    ngAfterViewInit(): void {
        this.detectScreenSize();
    }

    private detectScreenSize(): void {
        const currentSize = this.sizes.find(x => {
            const el = this.element.nativeElement.querySelector(`.${this.prefix}${x.id}`);
            const isVisible = window.getComputedStyle(el).display !== 'none';

            return isVisible;
        });

        this.layoutService.onResize(currentSize.id);
    }
}
