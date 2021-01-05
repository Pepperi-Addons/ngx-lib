import {
    Component,
    OnInit,
    AfterViewInit,
    HostListener,
    ElementRef,
    Input,
    ChangeDetectionStrategy,
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
        const a = 0;
    }
}
