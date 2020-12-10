import { Component, OnInit, AfterViewInit, HostListener, ElementRef, Input } from '@angular/core';
import { LayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';

interface SizeDetectorItem {
    id: PepScreenSizeType;
    name: string;
    css: string;
}

@Component({
    selector: 'pep-size-detector',
    templateUrl: './size-detector.component.html'
})
export class SizeDetectorComponent implements AfterViewInit {

    @Input() showScreenSize = false;

    prefix = 'is-';
    sizes: Array<SizeDetectorItem> = [
        {
            id: PepScreenSizeType.XS,
            name: 'xs',
            css: `d-block d-sm-none`
        },
        {
            id: PepScreenSizeType.SM,
            name: 'sm',
            css: `d-none d-sm-block d-md-none`
        },
        {
            id: PepScreenSizeType.MD,
            name: 'md',
            css: `d-none d-md-block d-lg-none`
        },
        {
            id: PepScreenSizeType.LG,
            name: 'lg',
            css: `d-none d-lg-block d-xl-none`
        },
        {
            id: PepScreenSizeType.XL,
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
