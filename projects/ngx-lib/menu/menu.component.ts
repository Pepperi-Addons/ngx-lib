import { Component, Input, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PepLayoutService, PepStyleType, PepSizeType, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { pepIconSystemMenu } from '@pepperi-addons/ngx-lib/icon';
import { PepMenuItem, IPepMenuItemClickEvent, IPepMenuStateChangeEvent, PepMenuStateType, PepMenuType } from './menu.model';

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
    @Input() text: string = null;
    @Input() iconName = pepIconSystemMenu.name;
    @Input() type: PepMenuType = 'action';
    @Input() styleType: PepStyleType = 'weak';
    @Input() sizeType: PepSizeType = 'md';
    @Input() classNames = '';
    @Input() xPosition: 'before' | 'after' = 'after';
    @Input() hideOnEmptyItems = false;
    @Input() items: Array<PepMenuItem> = null;
    @Input() selectedItem: PepMenuItem = null;
    @Input() disabled = false;
    
    @Output() stateChange: EventEmitter<IPepMenuStateChangeEvent> = new EventEmitter<IPepMenuStateChangeEvent>();
    @Output() menuItemClick: EventEmitter<IPepMenuItemClickEvent> = new EventEmitter<IPepMenuItemClickEvent>();
    @Output() menuClick: EventEmitter<void> = new EventEmitter<void>();

    state: PepMenuStateType = 'hidden';

    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    displayText: string = null;

    constructor(
        public layoutService: PepLayoutService
    ) {
        this.layoutService.onResize$.subscribe(size => {
            this.screenSize = size;
        });
    }

    private updateText(): void {
        if (this.type === 'select' || this.type === 'action-select') {
            this.displayText = this.selectedItem != null ? this.selectedItem.text : null;
        } else {
            this.displayText = this.text;
        }
    }

    ngOnChanges(changes): void {
        if (this.hideOnEmptyItems) {
            this.state = (!this.disabled && this.items && this.items.filter(item => !item.disabled).length > 0) ? 'visible' : 'hidden';
        } else {
            this.state = 'visible';
        }

        if (this.type === 'select') {
            if (this.selectedItem === null && this.items.length > 0) {
                this.selectedItem = this.items[0];
            }

            this.updateText();
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

    onMenuItemClicked(click: IPepMenuItemClickEvent): void {
        this.selectedItem = click.source;
        this.updateText();
        
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
