import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    OnDestroy,
} from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';
import {
    PepLayoutService,
    PepStyleType,
    PepSizeType,
    PepScreenSizeType,
} from '@pepperi-addons/ngx-lib';
import { pepIconSystemMenu } from '@pepperi-addons/ngx-lib/icon';
import {
    PepMenuItem,
    IPepMenuItemClickEvent,
    IPepMenuStateChangeEvent,
    PepMenuStateType,
    PepMenuType,
    PepMenuItemParent,
} from './menu.model';

@Component({
    selector: 'pep-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    animations: [
        trigger('slideInOut', [
            state(
                'hidden',
                style({
                    width: '0px',
                    padding: '0',
                    margin: '0',
                    minWidth: '0px',
                    opacity: 0,
                })
            ),
            state(
                'visible',
                style({
                    width: 'inherit',
                    opacity: 1,
                })
            ),
            transition('close => open', animate('500ms ease-in')),
            transition('open => close', animate('500ms ease-out')),
        ]),
    ],
})
export class PepMenuComponent implements OnChanges, OnDestroy {
    @Input() text: string = null;
    @Input() iconName = pepIconSystemMenu.name;
    @Input() type: PepMenuType = 'action';
    @Input() styleType: PepStyleType = 'weak';
    @Input() sizeType: PepSizeType = 'md';
    @Input() classNames = '';
    @Input() xPosition: 'before' | 'after' = 'after';
    @Input() hideOnEmptyItems = false;
    // @Input() items: Array<PepMenuItem> = null;
    private _items: Array<PepMenuItem> = null;
    @Input()
    set items(items: Array<PepMenuItem>) {
        this.setItemsParent(items);
        this._items = items;
    }
    get items(): Array<PepMenuItem> {
        return this._items;
    }

    @Input() selectedItem: PepMenuItem = null;
    @Input() disabled = false;

    @Output()
    stateChange: EventEmitter<IPepMenuStateChangeEvent> = new EventEmitter<IPepMenuStateChangeEvent>();
    @Output()
    menuItemClick: EventEmitter<IPepMenuItemClickEvent> = new EventEmitter<IPepMenuItemClickEvent>();
    @Output() menuClick: EventEmitter<void> = new EventEmitter<void>();

    state: PepMenuStateType = 'hidden';

    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    displayText: string = null;

    constructor(public layoutService: PepLayoutService) {
        this.layoutService.onResize$.subscribe((size) => {
            this.screenSize = size;
        });
    }

    private setChildrenParent(
        item: PepMenuItem,
        parent: PepMenuItemParent
    ): void {
        item.parent = parent;

        if (item.children && item.children.length > 0) {
            item.children.forEach((child) => {
                this.setChildrenParent(child, new PepMenuItemParent(item));
            });
        }
    }

    private setItemsParent(items: Array<PepMenuItem>): void {
        if (items) {
            items.forEach((item) => {
                item.parent = null;

                if (item.children && item.children.length > 0) {
                    item.children.forEach((child) => {
                        this.setChildrenParent(
                            child,
                            new PepMenuItemParent(item)
                        );
                    });
                }
            });
        }
    }

    private updateText(): void {
        if (this.type === 'select' || this.type === 'action-select') {
            this.displayText = this.selectedItem
                ? this.selectedItem.text
                : this.text;
        } else {
            this.displayText = this.text;
        }
    }

    ngOnChanges(changes): void {
        if (this.hideOnEmptyItems) {
            this.state =
                !this.disabled &&
                this.items &&
                this.items.filter((item) => !item.disabled).length > 0
                    ? 'visible'
                    : 'hidden';
        } else {
            this.state = 'visible';
        }

        if (this.type === 'select') {
            if (
                this.selectedItem === null &&
                this.items &&
                this.items.length > 0
            ) {
                this.selectedItem = this.items[0];
            }
        }

        this.updateText();
    }

    ngOnDestroy(): void {
        if (this.menuItemClick) {
            this.menuItemClick.unsubscribe();
        }
    }

    onMenuClicked(event): void {
        this.menuClick.emit();
    }

    // private manipulateData(menuItem: PepMenuItem) {
    //     menuItem.children = null;

    //     if (menuItem.parent) {
    //         menuItem.parent = new PepMenuItem(menuItem.parent);
    //         this.manipulateData(menuItem.parent);
    //     }
    // }

    onMenuItemClicked(click: IPepMenuItemClickEvent): void {
        this.selectedItem = click.source;
        this.updateText();

        // Manipulate click data because the data is dupplicate in parent.children
        // const tmp = new PepMenuItem(click.source);
        // this.manipulateData(tmp);
        // click.source = tmp;

        this.menuItemClick.emit(click);
    }

    animationDone(): void {
        if (this.state === 'hidden') {
            setTimeout(() => {
                this.stateChange.emit({ state: this.state });
            }, 500);
        }
    }

    animationStart(): void {
        if (this.state === 'visible') {
            this.stateChange.emit({ state: this.state });
        }
    }
}
