import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnDestroy,
    ViewChild,
} from '@angular/core';
import { pepIconArrowRight } from '@pepperi-addons/ngx-lib/icon';
import { PepMenuItem, IPepMenuItemClickEvent, PepMenuType } from './menu.model';

@Component({
    selector: 'pep-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss'],
})
export class PepMenuItemComponent implements OnDestroy {
    @Input() type: PepMenuType = 'action';
    @Input() items: Array<PepMenuItem> = [];
    @Input() selectedItem: PepMenuItem = null;
    @Input() xPosition: 'before' | 'after' = 'after';
    @Input() subMenuIconName: string = pepIconArrowRight.name;

    @ViewChild('childMenu', { static: true }) public childMenu: any;

    @Output()
    menuItemClick: EventEmitter<IPepMenuItemClickEvent> = new EventEmitter<IPepMenuItemClickEvent>();

    constructor() { }

    ngOnDestroy(): void {
        if (this.menuItemClick) {
            this.menuItemClick.unsubscribe();
        }
    }

    onChildClicked(click: IPepMenuItemClickEvent): void {
        this.menuItemClick.emit(click);
    }

    onMenuItemClicked(item: PepMenuItem): void {
        this.menuItemClick.emit({ source: item });
    }
}
