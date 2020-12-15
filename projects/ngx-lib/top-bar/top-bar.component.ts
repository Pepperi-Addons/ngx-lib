import { ChangeDetectorRef, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CustomizationService, LayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { PepSearchComponent } from '@pepperi-addons/ngx-lib/search';
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

    @ContentChild(PepSearchComponent) searchComp: PepSearchComponent;

    showFooter = false;
    isHidden = true;
    screenSize: PepScreenSizeType;
    searchIsOpen = false;
    searchIsOpenAndSmallDevice = false;

    PepScreenSizeType = PepScreenSizeType;

    constructor(
        public customizationService: CustomizationService,
        public layoutService: LayoutService,
        private cdRef: ChangeDetectorRef
    ) {
        this.layoutService.onResize$.subscribe(size => {
            this.screenSize = size;
            this.setSearchIsOpenAndSmallDevice();
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

    ngAfterContentInit() {
        if (this.searchComp) {
            this.searchComp.stateChange.subscribe((searchState) => {
                this.searchIsOpen = searchState;
                this.setSearchIsOpenAndSmallDevice();
            });
        }
    }
    
    ngOnChanges(changes): void {

    }

    private setSearchIsOpenAndSmallDevice(): void {
        // check if search is open and the device size is small or extra small
        this.searchIsOpenAndSmallDevice = this.screenSize > PepScreenSizeType.SM && this.searchIsOpen;
    }

}
