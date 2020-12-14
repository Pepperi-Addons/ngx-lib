import { Component, Input, Output, EventEmitter, OnChanges, OnDestroy, ViewChild } from '@angular/core';
import { LayoutService } from '@pepperi-addons/ngx-lib';
import { pepIconArrowRight } from '@pepperi-addons/ngx-lib/icon';
import { PepMenuItem, PepMenuItemClick } from './menu.model';

@Component({
    selector: 'pep-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class PepMenuItemComponent implements OnDestroy {
    @Input() items: Array<PepMenuItem> = [];
    @Input() xPosition: 'before' | 'after' = 'after';
    @Input() subMenuIconName: string = pepIconArrowRight.name;
    
    pepIconArrow
    @ViewChild('childMenu', {static: true}) public childMenu: any;

    @Output() menuItemClick: EventEmitter<PepMenuItemClick> = new EventEmitter<PepMenuItemClick>();

    constructor(public layoutService: LayoutService) {}

    ngOnDestroy(): void {
        if (this.menuItemClick) {
            this.menuItemClick.unsubscribe();
        }
    }

    onChildClicked(click: PepMenuItemClick): void {
        this.menuItemClick.emit(click);
    }

    onMenuItemClicked(item: PepMenuItem): void {
        this.menuItemClick.emit(new PepMenuItemClick(item));
    }
}
