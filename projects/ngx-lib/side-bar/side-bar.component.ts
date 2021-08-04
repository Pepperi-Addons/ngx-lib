import {
    Component,
    OnInit,
    Injectable,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    Renderer2,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';
import {
    PepCustomizationService,
    PepLayoutService,
    PepScreenSizeType,
} from '@pepperi-addons/ngx-lib';
import { IPepSideBarStateChangeEvent, PepSideBarStateType } from './side-bar.model';
import { pepIconArrowLeft, pepIconArrowRight } from '@pepperi-addons/ngx-lib/icon';

@Component({
    selector: 'pep-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
@Injectable()
export class PepSideBarComponent implements OnInit {
    static ONE_MULTI_BY_DIR_KEY = '--pep-one-multi-by-dir';
    static MARGIN_INLINE_END_FOR_SHADOW = '--pep-margin-inline-end-for-shadow';

    // @Input() showOnLargeScreens = true;
    // @Input() sideBarButtons: Array<SideBarButton> = [];
    @Input() showHeader = true;
    @Input() showFooter = false;
    @Input() showShadow = false;

    private _useAsWebComponent = false;

    state: PepSideBarStateType = 'open';
    toggleButtonArrowName: string = pepIconArrowRight.name;
    isLargeScreen = true;

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
    stateChange: EventEmitter<IPepSideBarStateChangeEvent> = new EventEmitter<IPepSideBarStateChangeEvent>();

    @ViewChild('sidenav') sidenav: MatSidenav;
    // @ViewChild('sidenavWrapper') sidenavWrapper: ElementRef;

    isMouseIn = false;
    sideBarHeight = '100%';
    marginInlineEndValue = '0.25rem';

    screenSize: PepScreenSizeType;
    PepScreenSizeType = PepScreenSizeType;

    constructor(
        private hostElement: ElementRef,
        private renderer: Renderer2,
        public layoutService: PepLayoutService
    ) {
        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.screenSize = size;
            this.isLargeScreen = size < PepScreenSizeType.MD;
        });

    }

    private exportFunctionsOnHostElement() {
        // This is for web component usage for use those functions.
        this.hostElement.nativeElement.open = this.open.bind(this);
        this.hostElement.nativeElement.close = this.close.bind(this);
    }

    private setState(state: PepSideBarStateType) {
        this.state = state;
        this.toggleButtonArrowName =
            // state === 'open' ?
            // (this.layoutService.isRtl() ? pepIconArrowRight.name : pepIconArrowLeft.name) :
            (this.layoutService.isRtl() ? pepIconArrowLeft.name : pepIconArrowRight.name);
    }

    private toggleState() {
        this.setState(this.state === 'close' ? 'open' : 'close');
    }

    ngOnInit() {
        const shadowOffset = document.documentElement.style.getPropertyValue(PepCustomizationService.SHADOW_MD_OFFSET_KEY);
        const arr = shadowOffset.split(' ');
        if (arr && arr.length > 2) {
            document.documentElement.style.setProperty(PepSideBarComponent.MARGIN_INLINE_END_FOR_SHADOW, arr[2]);
        }

        document.documentElement.style.setProperty(PepSideBarComponent.ONE_MULTI_BY_DIR_KEY, this.layoutService.isRtl() ? '1' : '-1');
        this.setState(this.isLargeScreen ? 'open' : 'close');
    }

    setSideBarHeight(event) {
        // const from = event.relatedTarget
        //     ? event.relatedTarget
        //     : event.fromElement;
        // const to = event.target ? event.target : event.toElement;

        // if (typeof from === 'undefined' || typeof to === 'undefined') {
        //     return;
        // }
        // this.isMouseIn = true;

        // this.sideBarHeight = window.innerHeight - to.offsetTop + 'px';
    }

    mouseLeaveSideBar(event) {
        // const from = event.relatedTarget
        //     ? event.relatedTarget
        //     : event.fromElement;
        // const to = event.target ? event.target : event.toElement;

        // if (typeof from === 'undefined' || typeof to === 'undefined') {
        //     return;
        // }
        // this.sideBarHeight = '100%';
        // this.isMouseIn = false;
    }

    open() {
        if (this.sidenav) {
            this.sidenav.open();
        }

        this.state = 'open';
    }

    close() {
        if (this.sidenav) {
            this.sidenav.close();
        }

        this.state = 'close';
    }

    toggle() {
        if (this.sidenav) {
            // const isOpen = this.sidenav.opened;
            this.sidenav.toggle();
        }

        this.toggleState();
    }

    toggleSideWrapper() {
        this.toggleState();
        this.stateChange.emit({ state: this.state });
    }

    toggleSidenav(isOpen: boolean) {
        this.setState(isOpen ? 'open' : 'close');
        this.stateChange.emit({ state: this.state });
    }
}
