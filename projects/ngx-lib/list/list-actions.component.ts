import {
    Component,
    Injectable,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { PepSizeType } from '@pepperi-addons/ngx-lib';
import {
    IPepMenuStateChangeEvent,
    PepMenuItem,
    IPepMenuItemClickEvent,
} from '@pepperi-addons/ngx-lib/menu';

@Component({
    selector: 'pep-list-actions',
    templateUrl: './list-actions.component.html',
    styleUrls: ['./list-actions.component.scss'],
})
@Injectable()
export class PepListActionsComponent {
    @Input() actions: Array<PepMenuItem> = null;
    @Input() sizeType: PepSizeType = 'md';
    @Input() xPosition: 'before' | 'after' = 'before';
    @Input() hidden = false;

    @Output()
    actionClick: EventEmitter<IPepMenuItemClickEvent> = new EventEmitter<IPepMenuItemClickEvent>();
    @Output()
    stateChange: EventEmitter<IPepMenuStateChangeEvent> = new EventEmitter<IPepMenuStateChangeEvent>();
    @Output()
    menuClick: EventEmitter<void> = new EventEmitter<void>();

    onActionClicked(action): void {
        this.actionClick.emit(action);
    }

    onStateChanged(menuStateChangeEvent: IPepMenuStateChangeEvent): void {
        this.stateChange.emit(menuStateChangeEvent);
    }
}
