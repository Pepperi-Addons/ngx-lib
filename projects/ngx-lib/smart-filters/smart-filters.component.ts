import {
    Component,
    OnInit,
    AfterViewInit,
    HostListener,
    ElementRef,
    Input,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
} from '@angular/core';
import { PepLayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { PepSmartFilterType, PepSmartFilter } from './smart-filters.model';

// export class PepSmartFilterBase extends PepSmartFilterData {
//     isOpen = false;
//     hasFilter = false;

//     constructor(filter: Partial<PepSmartFilterData>) {
//         super();
//         Object.assign(this, filter);
//     }
// }

// enum PepDatePeriodType {
//     Days,
//     Weeks,
//     Months,
//     Years
// }

// enum PepDateQueryType {
//     InTheLast,
//     Today,
//     ThisWeek,
//     ThisMonth,
//     Between,
//     DueIn,
//     On,
//     NotInTheLast
// }

@Component({
    selector: 'pep-smart-filters',
    templateUrl: './smart-filters.component.html',
    styleUrls: ['./smart-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepSmartFiltersComponent {
    private _filters: Array<PepSmartFilter> = [];
    @Input()
    set filters(value: Array<PepSmartFilter>) {
        this._filters = value;
    }
    get filters(): Array<PepSmartFilter> {
        return this._filters;
    }

    @Output()
    filterClear: EventEmitter<PepSmartFilter> = new EventEmitter<PepSmartFilter>();
    @Output()
    filterChange: EventEmitter<PepSmartFilter> = new EventEmitter<PepSmartFilter>();

    expansionPanelHeaderHeight = '*';

    constructor(
        private element: ElementRef,
        private layoutService: PepLayoutService
    ) {
        const index = 0;
    }

    toggleFilter(index: number, isOpen: boolean): void {
        this.filters[index].isOpen = isOpen;
    }

    clearFilter(filter: PepSmartFilter) {
        // Clear the filter and raise event that filter has cleared.
        filter.hasFilter = false;
        filter.value = '';
        this.filterClear.emit(filter);
    }

    onFilterClear(filter: PepSmartFilter) {
        this.clearFilter(filter);
    }

    onFilterChange(filter: PepSmartFilter, value) {
        // Set the filter and raise event that filter has changed.
        filter.value = value;
        filter.hasFilter = true;
    }
}
