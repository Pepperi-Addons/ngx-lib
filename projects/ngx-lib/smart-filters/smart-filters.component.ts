import {
    Component,
    Input,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
} from '@angular/core';
import { IPepSmartFilterField } from './common/model/field';
import { IPepSmartFilterData } from './common/model/filter';

@Component({
    selector: 'pep-smart-filters',
    templateUrl: './smart-filters.component.html',
    styleUrls: ['./smart-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepSmartFiltersComponent {
    filtersDataMap: Map<string, IPepSmartFilterData> = new Map<
        string,
        IPepSmartFilterData
    >();

    @Input()
    set filters(value: IPepSmartFilterData[]) {
        this.filtersDataMap.clear();
        value.forEach((filter) => {
            this.filtersDataMap.set(filter.key, filter);
        });
    }

    private _fields: Array<IPepSmartFilterField> = [];
    @Input()
    set fields(value: Array<IPepSmartFilterField>) {
        this._fields = value;
    }
    get fields(): Array<IPepSmartFilterField> {
        return this._fields;
    }

    // @Output()
    // filtersClear: EventEmitter<void> = new EventEmitter<void>();
    @Output()
    filtersChange: EventEmitter<IPepSmartFilterData[]> = new EventEmitter<
        IPepSmartFilterData[]
    >();

    expansionPanelHeaderHeight = '*';

    private raiseFiltersChange(): void {
        const filteredFields = [...this.filtersDataMap.keys()]
            .filter((key) => this.filtersDataMap.get(key) !== null)
            .map((key) => {
                return this.filtersDataMap.get(key);
            });

        this.filtersChange.emit(filteredFields);
    }

    toggleFilter(index: number, isOpen: boolean): void {
        this.fields[index].isOpen = isOpen;
    }

    clearFilters() {
        this.filtersDataMap.clear();
        this.raiseFiltersChange();
        // this.filtersClear.emit();
    }

    // Clear the filter and raise event that filters has change.
    onFilterClear(field: IPepSmartFilterField) {
        this.filtersDataMap.delete(field.id);
        // this.filtersDataMap.set(field.id, null);
        this.raiseFiltersChange();
    }

    // Set the filter and raise event that filters has change.
    onFilterChange(
        field: IPepSmartFilterField,
        filterData: IPepSmartFilterData
    ) {
        this.filtersDataMap.delete(field.id);
        this.filtersDataMap.set(field.id, filterData);
        this.raiseFiltersChange();
    }
}
