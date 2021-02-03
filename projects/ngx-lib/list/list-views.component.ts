import {
    Component,
    OnInit,
    Injectable,
    Input,
    Output,
    EventEmitter,
    OnChanges,
} from '@angular/core';
import { PepSizeType, PepStyleType } from '@pepperi-addons/ngx-lib';
import {
    PepMenuItem,
    IPepMenuItemClickEvent,
} from '@pepperi-addons/ngx-lib/menu';

export type PepListViewDisplayType = 'menu' | 'buttons';

export class IPepListView {
    key: string;
    iconName: string;
    title?: string;
}

export interface IListViewChangeEvent {
    source: IPepListView;
}

@Component({
    selector: 'pep-list-views',
    templateUrl: './list-views.component.html',
    styleUrls: ['./list-views.component.scss'],
})
@Injectable()
export class PepListViewsComponent implements OnInit {
    private _views: Array<IPepListView> = null;
    @Input()
    set views(value: Array<IPepListView>) {
        this._views = value;

        this.menuItems = value.map((opt) => {
            return { key: opt.key, text: opt.title, iconName: opt.iconName };
        });
    }
    get views(): Array<IPepListView> {
        return this._views;
    }

    private _currentView: IPepListView = null;
    @Input()
    set currentView(value: IPepListView) {
        this._currentView = value;
        this.currentItem = {
            key: value.key,
            text: value.title,
            iconName: value.iconName,
        };
    }
    get currentView(): IPepListView {
        return this._currentView;
    }

    @Input() displayType: PepListViewDisplayType = 'buttons';
    @Input() styleType: PepStyleType = 'weak';
    @Input() sizeType: PepSizeType = 'md';
    @Input() classNames = '';

    @Output()
    change: EventEmitter<IListViewChangeEvent> = new EventEmitter<IListViewChangeEvent>();

    menuItems: Array<PepMenuItem> = null;
    currentItem: PepMenuItem = null;

    ngOnInit(): void {
        if (this.currentView === null && this.views && this.views.length > 0) {
            this.currentView = this.views[0];
        }
    }

    onMenuItemClicked(menuItemClickEvent: IPepMenuItemClickEvent): void {
        this.currentView = this.views.find(
            (list) => list.key === menuItemClickEvent.source.key
        );
        this.raiseChangeEvent();
    }

    onViewChanged(view: IPepListView): void {
        this.currentView = view;
        this.raiseChangeEvent();
    }

    private raiseChangeEvent(): void {
        this.change.emit({ source: this.currentView });
    }
}
