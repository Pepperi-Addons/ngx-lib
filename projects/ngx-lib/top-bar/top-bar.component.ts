import { AfterContentInit, ChangeDetectorRef, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CustomizationService, LayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { PepSearchComponent } from '@pepperi-addons/ngx-lib/search';
import { PepListActionsComponent } from '@pepperi-addons/ngx-lib/list';
import { PepMenuStateType } from '@pepperi-addons/ngx-lib/menu';
import { PepSearchStateType } from '@pepperi-addons/ngx-lib/search';

export type PepFooterStateType = 'visible' | 'hidden';

@Component({
    selector: 'pep-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class PepTopBarComponent implements AfterViewInit, AfterContentInit, OnChanges {

    @Input() inline = false;
    @Input() title: string = null;

    @Output() footerStateChange: EventEmitter<PepFooterStateType> = new EventEmitter<PepFooterStateType>();

    @ViewChild('footerStartContent') footerStartContent: ElementRef;
    @ViewChild('footerEndContent') footerEndContent: ElementRef;

    @ContentChild(PepSearchComponent) searchComp: PepSearchComponent;
    @ContentChild(PepListActionsComponent) listActionsComp: PepListActionsComponent;

    showFooter = false;
    isHidden = true;
    screenSize: PepScreenSizeType;
    listActionsIsVisible = false;
    searchState: PepSearchStateType;
    searchIsOpenAndSmallDevice = false;
    footerState: PepFooterStateType;
    PepScreenSizeType = PepScreenSizeType;

    constructor(
        public customizationService: CustomizationService,
        public layoutService: LayoutService,
        private cdRef: ChangeDetectorRef
    ) {
        
    }
    
    ngAfterViewInit(): void {
        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.screenSize = size;
            this.setSearchIsOpenAndSmallDevice();

            if (!this.inline) {
                this.setFooterState();
            }
        });

        if (!this.inline) {
            this.showFooter =
                this.footerStartContent?.nativeElement?.children?.length > 0 ||
                this.footerEndContent?.nativeElement?.children?.length > 0;
        }
            
        this.isHidden = false;
        this.cdRef.detectChanges();
    }

    ngAfterContentInit() {
        if (this.listActionsComp) {
            this.listActionsComp.stateChange.subscribe((listActionsState: PepMenuStateType) => {
                this.listActionsIsVisible = listActionsState === 'visible';
            });
        } 
        
        if (this.searchComp) {
            this.searchComp.stateChange.subscribe((searchState: PepSearchStateType) => {
                this.searchState = searchState;
                this.setSearchIsOpenAndSmallDevice();
            });
        }
    }
    
    ngOnChanges(changes): void {

    }

    private setSearchIsOpenAndSmallDevice(): void {
        // check if search is open and the device size is small or extra small
        this.searchIsOpenAndSmallDevice = this.screenSize > PepScreenSizeType.SM && this.searchState === 'open';
    }

    private setFooterState() {
        const newFooterState: PepFooterStateType = this.showFooter && this.screenSize >= PepScreenSizeType.MD ? 'visible' : 'hidden';
        
        if (this.footerState !== newFooterState) {
            this.footerState = newFooterState;
            this.footerStateChange.emit(this.footerState);
        }
    }
}
