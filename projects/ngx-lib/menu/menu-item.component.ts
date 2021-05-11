import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnDestroy,
    ViewChild,
} from '@angular/core';
import { pepIconArrowRight } from '@pepperi-addons/ngx-lib/icon';
import {
    PepMenuItem,
    IPepMenuItemClickEvent,
    PepMenuType,
    PepMenuItemParent,
} from './menu.model';

export class PepInternalMenuItem extends PepMenuItem {
    selected?: boolean = false;
}

@Component({
    selector: 'pep-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss'],
})
export class PepMenuItemComponent implements OnDestroy {
    @Input() type: PepMenuType = 'action';

    @Input() parent: PepMenuItemParent = null;
    @Input() items: Array<PepInternalMenuItem> = [];

    private _selectedItem: PepInternalMenuItem = null;
    @Input()
    set selectedItem(selectedItem: PepInternalMenuItem) {
        this.updateSelectedItem(selectedItem);
    }
    get selectedItem(): PepInternalMenuItem {
        return this._selectedItem;
    }

    @Input() xPosition: 'before' | 'after' = 'after';
    @Input() subMenuIconName: string = pepIconArrowRight.name;

    @ViewChild('childMenu', { static: true }) public childMenu: any;

    @Output()
    menuItemClick: EventEmitter<IPepMenuItemClickEvent> = new EventEmitter<IPepMenuItemClickEvent>();

    ngOnDestroy(): void {
        // if (this.menuItemClick) {
        //     this.menuItemClick.unsubscribe();
        // }
    }

    private clearSelectedItem(selectedItem: PepInternalMenuItem): void {
        if (this.items) {
            this.items.forEach((item) => {
                item.selected = selectedItem?.key === item.key;

                if (item.children) {
                    item.children.forEach((child) => {
                        this.clearSelectedChildren(child, selectedItem);
                    });
                }
            });
        }
    }

    private clearSelectedChildren(
        item: PepInternalMenuItem,
        selectedItem: PepInternalMenuItem
    ): void {
        item.selected = selectedItem?.key === item.key;

        if (item.children) {
            item.children.forEach((child) => {
                this.clearSelectedChildren(child, selectedItem);
            });
        }
    }

    private selectParentAndChildren(
        items: Array<PepInternalMenuItem>,
        parentsKeys: Array<string>
    ) {
        if (parentsKeys.length > 0) {
            const key = parentsKeys.pop();
            const selectedParent = items.find((item) => item.key === key);

            if (selectedParent) {
                selectedParent.selected = true;
                this.selectParentAndChildren(
                    selectedParent.children,
                    parentsKeys
                );
            }
        }
    }

    private updateSelectedParent(
        parentItem: PepMenuItemParent,
        parentsKeys: Array<string>
    ) {
        parentsKeys.push(parentItem.key);

        if (parentItem.parent) {
            this.updateSelectedParent(parentItem.parent, parentsKeys);
        } else {
            this.selectParentAndChildren(this.items, parentsKeys);
        }
    }

    private updateSelectedItem(selectedItem: PepInternalMenuItem) {
        this.clearSelectedItem(selectedItem);
        this._selectedItem = selectedItem;

        if (selectedItem && selectedItem.parent) {
            this.updateSelectedParent(selectedItem.parent, []);
        }
    }

    onChildClicked(click: IPepMenuItemClickEvent): void {
        // click.source.selected = true;
        this.menuItemClick.emit(click);
    }

    onMenuItemClicked(item: PepMenuItem): void {
        // item.selected = true;
        this.menuItemClick.emit({ source: item });
    }
}
