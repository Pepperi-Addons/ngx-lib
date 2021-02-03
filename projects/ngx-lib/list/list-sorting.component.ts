import {
    Component,
    Injectable,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    OnInit,
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
export class PepListSortingComponent implements OnInit {
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

    private _currentSorting: IPepListSortingOption = null;
    @Input()
    set currentSorting(value: IPepListSortingOption) {
        this._currentSorting = value;
        this.currentItem = {
            key: value.sortBy,
            text: value.title,
            iconName: value.iconName,
        };
    }
    get currentSorting(): IPepListSortingOption {
        return this._currentSorting;
    }

    @Input() sizeType: PepSizeType = 'md';
    @Output()
    change: EventEmitter<IPepListSortingOptionChangeEvent> = new EventEmitter<IPepListSortingOptionChangeEvent>();

    menuItems: Array<PepMenuItem> = null;
    currentItem: PepMenuItem = null;

    ngOnInit(): void {
        if (
            this.currentSorting === null &&
            this.options &&
            this.options.length > 0
        ) {
            this.currentSorting = this.options[0];
        }
    }

    onMenuItemClicked(menuItemClickEvent: IPepMenuItemClickEvent): void {
        this.currentSorting = this.options.find(
            (sorting) => sorting.sortBy === menuItemClickEvent.source.key
        );
        this.change.emit({ source: this.currentSorting });
    }
}
