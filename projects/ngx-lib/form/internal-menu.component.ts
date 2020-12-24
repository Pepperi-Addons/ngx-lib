import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { PepLayoutType, PepOption, PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT, IPepFieldClickEvent } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-internal-menu',
    templateUrl: './internal-menu.component.html',
    styleUrls: ['./internal-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepInternalMenuComponent implements OnDestroy {
    @Input() key = '';
    @Input() label = '';
    @Input() disabled = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    // @Input() hasSubMenu = false;
    @Input() options: PepOption[] = [];
    @Input() invertClass = true;

    controlType = 'menu';

    @Input() layoutType: PepLayoutType = 'form';
    @Output() elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();
    // @Output() menuItemClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();
    
    constructor() { }

    ngOnDestroy(): void {
        if (this.elementClick) {
            this.elementClick.unsubscribe();
        }

        // if (this.menuItemClick) {
        //     this.menuItemClick.unsubscribe();
        // }
    }

    menuClicked(event: any): void {
        this.elementClick.emit({ key: this.key, eventWhich: event.which });
    }

    menuItemClicked(itemKey: any): void {
        // Not in use comment in version 16.55 for webapp.
        // this.menuItemClick.emit({ key: itemKey });
    }
}
