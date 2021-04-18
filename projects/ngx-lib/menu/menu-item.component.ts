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

    @Input() parent: PepMenuItem = null;
    @Input() items: Array<PepMenuItem> = [];

    private _selectedItem: PepMenuItem = null;
    @Input()
    set selectedItem(selectedItem: PepMenuItem) {
        this.updateSelectedItem(selectedItem);
    }
    get selectedItem(): PepMenuItem {
        return this._selectedItem;
    }

    @Input() xPosition: 'before' | 'after' = 'after';
    @Input() subMenuIconName: string = pepIconArrowRight.name;

    @ViewChild('childMenu', { static: true }) public childMenu: any;

    @Output()
    menuItemClick: EventEmitter<IPepMenuItemClickEvent> = new EventEmitter<IPepMenuItemClickEvent>();

    ngOnDestroy(): void {
        if (this.menuItemClick) {
            this.menuItemClick.unsubscribe();
        }
    }

    private clearSelectedItem(): void {
        if (this.items) {
            this.items.forEach((item) => {
                item.selected = false;

                if (item.children) {
                    item.children.forEach((child) => {
                        this.clearSelectedChildren(child);
                    });
                }
            });
        }
    }

    private clearSelectedChildren(item: PepMenuItem): void {
        item.selected = false;

        if (item.children) {
            item.children.forEach((child) => {
                this.clearSelectedChildren(child);
            });
        }
    }

    private updateSelectedParent(item: PepMenuItem) {
        item.selected = true;

        if (item.parent) {
            this.updateSelectedParent(item.parent);
        }
    }

    private updateSelectedItem(item: PepMenuItem) {
        this.clearSelectedItem();
        this._selectedItem = item;

        if (item) {
            item.selected = true;

            if (item.parent) {
                this.updateSelectedParent(item.parent);
            }
        }
    }

    onChildClicked(click: IPepMenuItemClickEvent): void {
        this.menuItemClick.emit(click);
    }

    onMenuItemClicked(item: PepMenuItem): void {
        this.menuItemClick.emit({ source: item });
    }
}
