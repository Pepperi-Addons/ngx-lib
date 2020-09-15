import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { LAYOUT_TYPE, PepperiOption } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepperiMenuComponent implements OnDestroy {
    @Input() key = '';
    @Input() label = '';
    @Input() disabled = false;
    @Input() xAlignment = '0';
    // @Input() hasSubMenu = false;
    @Input() options: PepperiOption[] = [];
    @Input() invertClass = true;

    controlType = 'menu';

    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;
    @Output() elementClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() notifyMenuItemClicked: EventEmitter<any> = new EventEmitter<any>();
    LAYOUT_TYPE = LAYOUT_TYPE;

    constructor() { }

    ngOnDestroy(): void {
        if (this.elementClicked) {
            this.elementClicked.unsubscribe();
        }

        if (this.notifyMenuItemClicked) {
            this.notifyMenuItemClicked.unsubscribe();
        }
    }

    menuClicked(event: any): void {
        this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
    }

    menuItemClicked(itemKey: any): void {
        this.notifyMenuItemClicked.emit({ apiName: itemKey });
    }
}
