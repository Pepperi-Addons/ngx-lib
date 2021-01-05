import {
    Component,
    Injectable,
    Input,
    Output,
    EventEmitter,
    OnChanges,
} from '@angular/core';
import { PepSizeType } from '@pepperi-addons/ngx-lib';
import {
    IPepMenuItemClickEvent,
    PepMenuItem,
} from '@pepperi-addons/ngx-lib/menu';
import { IPepListSortingChangeEvent } from './list.model';

export class IPepListSortingOption {
    sortBy: string;
    title: string;
    iconName?: string;
    isAsc?: boolean;
}

export interface IPepListSortingOptionChangeEvent {
    source: IPepListSortingOption;
}

@Component({
    selector: 'pep-list-sorting',
    templateUrl: './list-sorting.component.html',
    styleUrls: ['./list-sorting.component.scss'],
})
@Injectable()
export class PepListSortingComponent {
    private _options: Array<IPepListSortingOption> = null;
    @Input()
    set options(value: Array<IPepListSortingOption>) {
        this._options = value;

        this.menuItems = value.map((opt) => {
            return { key: opt.sortBy, text: opt.title, iconName: opt.iconName };
        });
    }
    get options(): Array<IPepListSortingOption> {
        return this._options;
    }

    @Input() sizeType: PepSizeType = 'md';
    @Output()
    change: EventEmitter<IPepListSortingOptionChangeEvent> = new EventEmitter<IPepListSortingOptionChangeEvent>();

    menuItems: Array<PepMenuItem> = null;

    onMenuItemClicked(menuItemClickEvent: IPepMenuItemClickEvent): void {
        const currentSorting = this.options.find(
            (sorting) => sorting.sortBy === menuItemClickEvent.source.key
        );
        this.change.emit({ source: currentSorting });
    }
}
