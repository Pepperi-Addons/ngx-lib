import { Component, OnInit, AfterViewInit, HostListener, ElementRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { LayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { PepSmartFilterType, PepSmartFilterData } from './smart-filters.model';

export class SmartFilterBase extends PepSmartFilterData {
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
export class SmartFiltersComponent  {

    private _data: Array<PepSmartFilterData> = [];
    @Input()
    set data(value: Array<PepSmartFilterData>) {
        this._data = value;
        this._data?.forEach((filter: PepSmartFilterData) => {
            this.filters.push(new SmartFilterBase(filter));
        });
    }
    get data(): Array<PepSmartFilterData> {
        return this._data;
    }

    filters: Array<SmartFilterBase> = [];

    expansionPanelHeaderHeight = '*';

    constructor(private element: ElementRef, private layoutService: LayoutService) {


    }

    toggleFilter(index: number, isOpen: boolean): void {
        this.filters[index].isOpen = isOpen;
    }
}
