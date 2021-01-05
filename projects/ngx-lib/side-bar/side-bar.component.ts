import { Component, OnInit, Injectable, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PepCustomizationService, PepLayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { IPepSideBarStateChangeEvent } from './side-bar.model';
// import { pepIconSystemClose } from '@pepperi-addons/ngx-lib/icon';

@Component({
    selector: 'pep-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
@Injectable()
export class PepSideBarComponent implements OnInit {
    
    // @Input() showOnLargeScreens = true;
    // @Input() sideBarButtons: Array<SideBarButton> = [];

    @Output() stateChange: EventEmitter<IPepSideBarStateChangeEvent> = new EventEmitter<IPepSideBarStateChangeEvent>();

    @ViewChild('sidenav') sidenav: MatSidenav;

    isMouseIn = false;
    sideBarHeight = '100%';

    screenSize: PepScreenSizeType;
    PepScreenSizeType = PepScreenSizeType;

    constructor(private layoutService: PepLayoutService) { 
        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.screenSize = size;
        });
    }

    ngOnInit() {
        // this.sideBarButtons.push(new SideBarButton('', () => this.close(), pepIconSystemClose.name, null, true, null, ''));
    }

    setSideBarHeight(event) {
        const from = event.relatedTarget ? event.relatedTarget : event.fromElement;
        const to = event.target ? event.target : event.toElement;

        if (typeof from === 'undefined' || typeof to === 'undefined') {
            return;
        }
        this.isMouseIn = true;

        this.sideBarHeight = window.innerHeight - to.offsetTop + 'px';
    }

    mouseLeaveSideBar(event) {
        const from = event.relatedTarget ? event.relatedTarget : event.fromElement;
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
            this.stateChange.emit({ state: 'open' });
        }
    }

    close() {
        if (this.sidenav) {
            this.sidenav.close();
            this.stateChange.emit({ state: 'close' });
        }
    }

    toggle() {
        if (this.sidenav) {
            const isOpen = this.sidenav.opened;
            this.sidenav.toggle();
            this.stateChange.emit({ state: isOpen ? 'close' : 'open' });
        }
    }

}
