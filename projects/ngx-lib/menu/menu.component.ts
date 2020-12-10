import { Component, Input, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PepStyleType, PepButtonSizeType } from '@pepperi-addons/ngx-lib';
import { pepIconSystemMenu } from '@pepperi-addons/ngx-lib/icon';

export type PepMenuItemType = 'text' | 'splitter';

export type PepMenuStateType = 'visible' | 'hidden';

export class PepMenuIcon {
    name: string;
    position?: 'before' | 'after' = 'before';

    constructor(data: Partial<PepMenuIcon>){
        Object.assign(this, data);
    }
}

export class PepMenuItem {
    key: string;
    title?: string;
    disabled?: boolean = false;
    hidden?: boolean = false;
    icon?: PepMenuIcon;
    type?: PepMenuItemType = 'text';

    constructor(data: Partial<PepMenuItem>){
        Object.assign(this, data);
    }
}

export class PepMenuItemClick {
    constructor(
        public source: PepMenuItem,
    ) { }
}

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
                    minWidth: '0px',
                    opacity: 0
                })
            ),
            state(
                'visible',
                style({
                    width: 'inherit',
                    opacity: 1
                })
            ),
            transition('close => open', animate('500ms ease-in')),
            transition('open => close', animate('500ms ease-out'))
        ])
    ]
})
export class PepMenuComponent implements OnChanges, OnDestroy {
    @Input() icon = pepIconSystemMenu.name;
    @Input() styleType: PepStyleType = 'weak';
    @Input() sizeType: PepButtonSizeType = 'md';
    @Input() classNames = '';
    @Input() xPosition: 'before' | 'after' = 'before';
    @Input() showAnimation = false;
    @Input() items: Array<PepMenuItem> = [];
    @Input() disabled = false;

    @Output() stateChange: EventEmitter<PepMenuStateType> = new EventEmitter<PepMenuStateType>();
    @Output() menuItemClick: EventEmitter<PepMenuItemClick> = new EventEmitter<PepMenuItemClick>();
    @Output() menuClick: EventEmitter<void> = new EventEmitter<void>();

    state: PepMenuStateType = 'hidden';

    constructor() { }

    ngOnChanges(changes): void {
        if (this.showAnimation) {
            this.state = (!this.disabled && this.items && this.items.filter(item => !item.disabled).length > 0) ? 'visible' : 'hidden';
        } else {
            this.state = 'visible';
        }
    }

    ngOnDestroy(): void {
        if (this.menuItemClick) {
            this.menuItemClick.unsubscribe();
        }
    }

    onMenuClicked(event): void {
        this.menuClick.emit();
    }

    onMenuItemClicked(item: PepMenuItem): void {
        this.menuItemClick.emit(new PepMenuItemClick(item));
    }

    animationDone(): void {
        if (this.state === 'hidden') {
            setTimeout(() => {
                this.stateChange.emit(this.state);
            }, 100);
        }
    }

    animationStart(): void {
        if (this.state === 'visible') {
            this.stateChange.emit(this.state);
        }
    }
}
