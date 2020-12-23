import { Component, OnInit, AfterViewInit, HostListener, ElementRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { PepLayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { PepSmartFilterType, PepSmartFilterData } from './smart-filters.model';

export class PepSmartFilterBase extends PepSmartFilterData {
    isOpen = false;
    hasFilter = false;

    constructor(filter: Partial<PepSmartFilterData>) {
        super();
        Object.assign(this, filter);
    }
}


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
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepSmartFiltersComponent  {

    private _data: Array<PepSmartFilterData> = [];
    @Input()
    set data(value: Array<PepSmartFilterData>) {
        this._data = value;
        this._data?.forEach((filter: PepSmartFilterData) => {
            this.filters.push(new PepSmartFilterBase(filter));
        });
    }
    get data(): Array<PepSmartFilterData> {
        return this._data;
    }

    filters: Array<PepSmartFilterBase> = [];

    expansionPanelHeaderHeight = '*';

    constructor(private element: ElementRef, private layoutService: PepLayoutService) {


    }

    toggleFilter(index: number, isOpen: boolean): void {
        this.filters[index].isOpen = isOpen;
    }
}
