import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { PepStyleType } from '@pepperi-addons/ngx-lib';
import { IPepMenuItemClickEvent, PepMenuItem } from '@pepperi-addons/ngx-lib/menu';

@Component({
    selector: 'pep-draggable-item',
    templateUrl: './draggable-item.component.html',
    styleUrls: ['./draggable-item.component.scss']
})
export class DraggableItemComponent implements OnInit {
    @Input() title = '';
    @Input() titlePrefix = '';
    @Input() titleClassNames = '';
    @Input() data: any;
    @Input() disabled = false;
    @Input() shadow = true;
    @Input() styleType: PepStyleType = 'regular';
    @Input() toggleContent = false;
    @Input() isToggleContentOpen: boolean = false;

    @Input() actionsMenu: Array<PepMenuItem> = null;
    @Input() menuStyleType: PepStyleType = 'regular';

    @Output() contentToggle: EventEmitter<boolean> = new EventEmitter();
    @Output() actionsMenuItemClick: EventEmitter<IPepMenuItemClickEvent> = new EventEmitter<IPepMenuItemClickEvent>();

    constructor() {
        //
    }

    ngOnInit(): void {
        //
    }

    onToggleContent() {
        if (this.toggleContent) {
            this.isToggleContentOpen = !this.isToggleContentOpen;
            this.contentToggle.emit(this.isToggleContentOpen);
        }
    }

    onActionsMenuItemClick(item: IPepMenuItemClickEvent){
        this.actionsMenuItemClick.emit(item);
    }
}
