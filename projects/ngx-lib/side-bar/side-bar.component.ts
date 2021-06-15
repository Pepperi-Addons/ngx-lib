import {
    Component,
    OnInit,
    Injectable,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {
    PepCustomizationService,
    PepLayoutService,
    PepScreenSizeType,
} from '@pepperi-addons/ngx-lib';
import { IPepSideBarStateChangeEvent } from './side-bar.model';
// import { pepIconSystemClose } from '@pepperi-addons/ngx-lib/icon';

@Component({
    selector: 'pep-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
})
@Injectable()
export class PepSideBarComponent implements OnInit {
    // @Input() showOnLargeScreens = true;
    // @Input() sideBarButtons: Array<SideBarButton> = [];
    @Input() showHeader = true;
    @Input() showFooter = true;

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
    stateChange: EventEmitter<IPepSideBarStateChangeEvent> = new EventEmitter<IPepSideBarStateChangeEvent>();

    @ViewChild('sidenav') sidenav: MatSidenav;

    isMouseIn = false;
    sideBarHeight = '100%';

    screenSize: PepScreenSizeType;
    PepScreenSizeType = PepScreenSizeType;

    constructor(
        private hostElement: ElementRef,
        private layoutService: PepLayoutService
    ) {
        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.screenSize = size;
        });
    }

    private exportFunctionsOnHostElement() {
        // This is for web component usage for use those functions.
        this.hostElement.nativeElement.open = this.open.bind(this);
        this.hostElement.nativeElement.close = this.close.bind(this);
    }

    ngOnInit() {
        // this.sideBarButtons.push(new SideBarButton('', () => this.close(), pepIconSystemClose.name, null, true, null, ''));
    }

    setSideBarHeight(event) {
        const from = event.relatedTarget
            ? event.relatedTarget
            : event.fromElement;
        const to = event.target ? event.target : event.toElement;

        if (typeof from === 'undefined' || typeof to === 'undefined') {
            return;
        }
        this.isMouseIn = true;

        this.sideBarHeight = window.innerHeight - to.offsetTop + 'px';
    }

    mouseLeaveSideBar(event) {
        const from = event.relatedTarget
            ? event.relatedTarget
            : event.fromElement;
        const to = event.target ? event.target : event.toElement;

        if (typeof from === 'undefined' || typeof to === 'undefined') {
            return;
        }
        this.sideBarHeight = '100%';
        this.isMouseIn = false;
    }

    open() {
        if (this.sidenav) {
            this.sidenav.open();
        }
    }

    close() {
        if (this.sidenav) {
            this.sidenav.close();
        }
    }

    toggle() {
        if (this.sidenav) {
            const isOpen = this.sidenav.opened;
            this.sidenav.toggle();
        }
    }

    openedChange(isOpen: boolean) {
        this.stateChange.emit({ state: isOpen ? 'open' : 'close' });
    }
}
