import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PepSmartFilterType } from '../../common/model/type';
import { PepSmartFilterBaseField, IPepSmartFilterField } from '../../common/model/field';
import { IPepSmartFilterData } from '../../common/model/filter';
import { IPepOption } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-filter-builder-item',
    templateUrl: './filter-builder-item.component.html',
    styleUrls: ['./filter-builder-item.component.scss'],
})
export class FilterBuilderItemComponent {
    @Input()
    set selected(value: any) {
        console.log('selected', value);
        if (value) {
            this._selectedField = value;
        }
    }
    @Input()
    set fields(list: Array<IPepSmartFilterField>) {
        if (list?.length > 0) {
            this._fields = list;
            console.log('_fields', this._fields);
            this._options = list.map(field => {
                return {
                    key: field.id,
                    value: field.name
                }
            })
            console.log('this._options', this._options);
        }
    };
    @Input()
    set filter(value: IPepSmartFilterData) {
        console.log('input filter', value);
        if (value) {
            this._filter = value;
            //this.setupFilters(list);
        }
    };

    @Output()
    filtersChange: EventEmitter<IPepSmartFilterData> = new EventEmitter<
        IPepSmartFilterData
    >();

    _fields: Array<any> = [];
    _filter: IPepSmartFilterData;

    _filtersDataMap: Map<string, IPepSmartFilterData> = new Map<
        string,
        IPepSmartFilterData
    >();


    _options: IPepOption[] = [];
    _selectedField: PepSmartFilterBaseField = null;
    //_selectedOption: any = null;

    constructor() {
    }

    ngOnInit() {

    }

    /* no need
    private setupFilters(value: IPepSmartFilterData[]) {
        this._filtersDataMap.clear();
        if (value) {
            value.forEach((filter) => {
                // Validate before add the filter into the map.
                let currentField = null;

                if (this._fields && this._fields.length > 0) {
                    currentField = this._fields.find(
                        (field) => field.id === filter.fieldId
                    ) as PepSmartFilterBaseField;
                }

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
                            this._filtersDataMap.set(filter.fieldId, filter);
                        }
                    }
                }
            });
        }
        console.log('print map', this._filtersDataMap);
    } */

    /*
    clearFilters() {
        this._filtersDataMap.clear();
    } */

    clearFilter(fieldId: string) {
        //    this._filtersDataMap.delete(fieldId);
    }

    private raiseFiltersChange(): void {
        this.filtersChange.emit(this._filter);
    }

    onOperatorChanged(key) {
        console.log('onOperatorChanged', key);
        let item = this._fields.find(field => field.id === key);
        console.log('item', item);
        this._selectedField = item ? item : null;
        this._filter = null;
    }

    onFilterChange(
        field: PepSmartFilterBaseField,
        filterData: IPepSmartFilterData
    ) {
        console.log('onFilterChange key', field);
        console.log('onFilterChange value', filterData);
        this.clearFilter(field.id);
        //this._filtersDataMap.set(field.id, filterData);
        this.raiseFiltersChange();
    }

    onFilterClear(field: PepSmartFilterBaseField) {
        console.log('onFilterClear', field);
        this.clearFilter(field.id);
        this.raiseFiltersChange();
    }



}
