import {
    AfterContentInit,
    ChangeDetectorRef,
    ContentChild,
    ElementRef,
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
        private cdRef: ChangeDetectorRef
    ) { }

    ngAfterViewInit(): void {
        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.screenSize = size;
        });

        // this.cdRef.detectChanges();
    }

    ngAfterContentInit() {
        //
    }

}
