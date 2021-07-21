import {
    AfterContentInit,
    ChangeDetectorRef,
    ContentChild,
    ElementRef,
    Renderer2,
    ViewChild,
} from '@angular/core';
import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {
    PepCustomizationService,
    PepLayoutService,
    PepScreenSizeType,
} from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-page-layout',
    templateUrl: './page-layout.component.html',
    styleUrls: ['./page-layout.component.scss'],
})
export class PepPageLayoutComponent implements AfterViewInit, AfterContentInit {
    screenSize: PepScreenSizeType;

    constructor(
        public customizationService: PepCustomizationService,
        public layoutService: PepLayoutService,
        private cdRef: ChangeDetectorRef,
        private hostElement: ElementRef,
        private renderer: Renderer2,
    ) {
        this.renderer.addClass(this.hostElement.nativeElement, 'pep-page-layout');
    }

    ngAfterViewInit(): void {
        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.screenSize = size;
        });

    }

    ngAfterContentInit() {
        //
    }

}
