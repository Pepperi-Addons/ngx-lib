import {
    Component,
    OnInit,
    AfterViewInit,
    HostListener,
    ElementRef,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { PepLayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';

interface IPepSizeDetectorItem {
    id: PepScreenSizeType;
    name: string;
    css: string;
}

@Component({
    selector: 'pep-size-detector',
    templateUrl: './size-detector.component.html',
})
export class PepSizeDetectorComponent implements AfterViewInit {
    @Input() showScreenSize = false;

    private _useAsWebComponent = false;
    @Input()
    set useAsWebComponent(value: boolean) {
        if (value) {
            this.exportFunctionsOnHostElement();
        }
    }
    get useAsWebComponent(): boolean {
        return this._useAsWebComponent;
    }

    @Output()
    sizeChange: EventEmitter<IPepSizeDetectorItem> = new EventEmitter<IPepSizeDetectorItem>();

    prefix = 'is-';
    sizes: Array<IPepSizeDetectorItem> = [
        {
            id: PepScreenSizeType.XS,
            name: 'xs',
            css: `d-block d-sm-none`,
        },
        {
            id: PepScreenSizeType.SM,
            name: 'sm',
            css: `d-none d-sm-block d-md-none`,
        },
        {
            id: PepScreenSizeType.MD,
            name: 'md',
            css: `d-none d-md-block d-lg-none`,
        },
        {
            id: PepScreenSizeType.LG,
            name: 'lg',
            css: `d-none d-lg-block d-xl-none`,
        },
        {
            id: PepScreenSizeType.XL,
            name: 'xl',
            css: `d-none d-xl-block`,
        },
    ];

    private currentSize: IPepSizeDetectorItem;

    constructor(
        private hostElement: ElementRef,
        private layoutService: PepLayoutService
    ) {
        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.currentSize = this.sizes.find((s) => s.id === size);
            this.sizeChange.emit(this.currentSize);
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event): void {
        this.detectScreenSize();
    }

    ngAfterViewInit(): void {
        this.detectScreenSize();
    }

    private detectScreenSize(): void {
        this.currentSize = this.sizes.find((x) => {
            const el = this.hostElement.nativeElement.querySelector(
                `.${this.prefix}${x.id}`
            );
            const isVisible = getComputedStyle(el).display !== 'none';

            return isVisible;
        });

        this.layoutService.onResize(this.currentSize.id);
    }

    private exportFunctionsOnHostElement() {
        // This is for web component usage for use those functions.
        this.hostElement.nativeElement.getCurrentSize = this.getCurrentSize.bind(
            this
        );
    }

    getCurrentSize(): IPepSizeDetectorItem {
        return this.currentSize;
    }
}
