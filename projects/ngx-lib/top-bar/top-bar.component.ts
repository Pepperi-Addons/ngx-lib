import { ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CustomizationService, LayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
@Component({
    selector: 'pep-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class PepTopBarComponent implements AfterViewInit, OnChanges {

    @Input() inline = false;
    @Input() title: string = null;

    // @Output() searchStringChange: EventEmitter<any> = new EventEmitter<string>();
    @ViewChild('footerStartContent') footerStartContent: ElementRef;
    @ViewChild('footerEndContent') footerEndContent: ElementRef;

    showFooter = false;
    isHidden = true;
    screenSize: PepScreenSizeType;
    // searchListCompStateIsOpen = false;
    // searchOpenOnSmallDevice = false;

    PepScreenSizeType = PepScreenSizeType;

    constructor(
        public customizationService: CustomizationService,
        public layoutService: LayoutService,
        private cdRef: ChangeDetectorRef
    ) {
        this.layoutService.onResize$.subscribe(size => {
            this.screenSize = size;

            // this.searchOpenOnSmallDevice = this.screenSize > PepScreenSizeType.SM && this.searchListCompStateIsOpen;
        });
    }

    ngAfterViewInit(): void {
        this.isHidden = false;

        if (!this.inline) {
            this.showFooter =
                this.footerStartContent?.nativeElement?.children?.length > 0 ||
                this.footerEndContent?.nativeElement?.children?.length > 0;

            this.cdRef.detectChanges();
        }
    }

    ngOnChanges(changes): void {

    }

    onListActionClicked(action): void {

    }

    // onSearchChanged(search: any): void {
    //     this.searchStringChanged.emit(search);
    // }

    // onSearchStateChanged(searchState: boolean): void {
    //     // check if search is open and the device size is small or extra small
    //     this.searchListCompStateIsOpen = searchState;
    //     this.searchOpenOnSmallDevice = this.screenSize > PepScreenSizeType.SM && searchState;
    // }

}
