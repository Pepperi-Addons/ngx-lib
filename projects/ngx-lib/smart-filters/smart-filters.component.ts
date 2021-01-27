import {
    Component,
    Input,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
    ElementRef,
} from '@angular/core';
import {
    IPepSmartFilterField,
    PepSmartFilterBaseField,
} from './common/model/field';
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
        this.setupFilters(value);
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

    private setupFilters(value: IPepSmartFilterData[]) {
        this.filtersDataMap.clear();
        if (value) {
            value.forEach((filter) => {
                // Validate before add the filter into the map.
                const currentField = this.fields.find(
                    (field) => field.id === filter.fieldId
                ) as PepSmartFilterBaseField;

                if (currentField) {
                    // Only if the operator is from the same type
                    if (
                        filter.operator.componentType.includes(
                            currentField.componentType
                        )
                    ) {
                        let isOperatorUnitValid = true;
                        if (filter.operatorUnit) {
                            // Only if the operator unit is not from the same type
                            if (
                                !filter.operatorUnit.componentType.includes(
                                    currentField.componentType
                                )
                            ) {
                                isOperatorUnitValid = false;
                            }
                        }

                        // Add the filter.
                        if (isOperatorUnitValid) {
                            this.filtersDataMap.set(filter.fieldId, filter);
                        }
                    }
                }
            });
        }
    }

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
    }

    // Clear the filter and raise event that filters has change.
    onFilterClear(field: IPepSmartFilterField) {
        this.filtersDataMap.delete(field.id);
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
