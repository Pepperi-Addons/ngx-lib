import {
    AfterContentInit,
    ChangeDetectorRef,
    ContentChild,
    ElementRef,
    OnDestroy,
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
import { PepSearchComponent } from '@pepperi-addons/ngx-lib/search';
import {
    PepListActionsComponent,
    PepListChooserComponent,
    PepListSortingComponent,
    PepListTotalComponent,
    PepListViewsComponent,
} from '@pepperi-addons/ngx-lib/list';
import { PepMenuStateType } from '@pepperi-addons/ngx-lib/menu';
import {
    IPepSearchStateChangeEvent,
    PepSearchStateType,
} from '@pepperi-addons/ngx-lib/search';
import {
    IPepFooterStateChangeEvent,
    PepFooterStateType,
} from './top-bar.model';

@Component({
    selector: 'pep-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss', './top-bar.component.theme.scss'],
})
export class PepTopBarComponent implements AfterViewInit, AfterContentInit, OnDestroy {
    @Input() inline = false;
    @Input() title: string = null;

    @Output()
    footerStateChange: EventEmitter<IPepFooterStateChangeEvent> = new EventEmitter<IPepFooterStateChangeEvent>();

    @ViewChild('footerStartContent') footerStartContent: ElementRef;
    @ViewChild('footerEndContent') footerEndContent: ElementRef;

    @ContentChild(PepSearchComponent) searchComp: PepSearchComponent;
    @ContentChild(PepListActionsComponent)
    listActionsComp: PepListActionsComponent;
    @ContentChild(PepListChooserComponent)
    listChooserComp: PepListChooserComponent;
    @ContentChild(PepListTotalComponent) listTotalComp: PepListTotalComponent;
    @ContentChild(PepListSortingComponent)
    listSortingComp: PepListSortingComponent;
    @ContentChild(PepListViewsComponent) listViewsComp: PepListViewsComponent;

    hasFooterContent = null;
    isHidden = true;
    screenSize: PepScreenSizeType;
    // listActionsIsVisible = false;
    searchState: PepSearchStateType;
    searchIsOpenAndSmallDevice = false;
    footerState: PepFooterStateType;
    PepScreenSizeType = PepScreenSizeType;

    constructor(
        public customizationService: PepCustomizationService,
        public layoutService: PepLayoutService,
        private cdRef: ChangeDetectorRef
    ) { }

    ngAfterViewInit(): void {
        if (!this.inline) {
            this.hasFooterContent =
                this.footerStartContent?.nativeElement?.children?.length > 0 ||
                this.footerEndContent?.nativeElement?.children?.length > 0;
        }

        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.screenSize = size;
            this.setSearchIsOpenAndSmallDevice();

            if (!this.inline) {
                this.setFooterState();
            }
        });

        this.isHidden = false;
        this.cdRef.detectChanges();
    }

    ngAfterContentInit() {
        if (this.searchComp) {
            this.searchComp.stateChange
                .subscribe(
                    (searchStateChangeEvent: IPepSearchStateChangeEvent) => {
                        this.searchState = searchStateChangeEvent.state;
                        this.setSearchIsOpenAndSmallDevice();
                    }
                )
                .unsubscribe();
        }
    }

    ngOnDestroy(): void {
        if (this.customizationService) {
            this.customizationService.hideFooter();
        }
    }

    private setSearchIsOpenAndSmallDevice(): void {
        // check if search is open and the device size is small or extra small
        this.searchIsOpenAndSmallDevice =
            this.screenSize > PepScreenSizeType.SM &&
            this.searchState === 'open';
    }

    private setFooterState() {
        const newFooterState: PepFooterStateType =
            this.hasFooterContent && this.screenSize >= PepScreenSizeType.MD
                ? 'visible'
                : 'hidden';

        if (this.footerState !== newFooterState) {
            this.footerState = newFooterState;
            this.cdRef.detectChanges();
            this.footerStateChange.emit({ state: this.footerState });

            if (this.footerState === 'visible') {
                this.customizationService.showFooter()
            } else {
                this.customizationService.hideFooter()
            }
        }
    }
}
