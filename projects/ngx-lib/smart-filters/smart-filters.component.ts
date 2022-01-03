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
import { PepLayoutService } from '@pepperi-addons/ngx-lib';
import { IPepSmartFilterData } from './common/model/filter';

@Component({
    selector: 'pep-smart-filters',
    templateUrl: './smart-filters.component.html',
    styleUrls: ['./smart-filters.component.scss', './smart-filters.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepSmartFiltersComponent {

    @Input() title = '';

    filtersDataMap: Map<string, IPepSmartFilterData> = new Map<
        string,
        IPepSmartFilterData
    >();

    private _filters: IPepSmartFilterData[] = [];
    @Input()
    set filters(value: IPepSmartFilterData[]) {
        this._filters = value;
        this.setupFilters(value);
    }
    get filters(): IPepSmartFilterData[] {
        this._filters = [...this.filtersDataMap.keys()]
            // .filter((key) => this.filtersDataMap.get(key) !== null)
            .map((key) => {
                if (key) {
                    return this.filtersDataMap.get(key);
                }
            });

        return this._filters;
    }

    private _fields: Array<IPepSmartFilterField> = [];
    @Input()
    set fields(value: Array<IPepSmartFilterField>) {
        this._fields = value;
    }
    get fields(): Array<IPepSmartFilterField> {
        return this._fields;
    }

    private _useAsWebComponent = false;
    @Input()
    set useAsWebComponent(value: boolean) {
        if (value) {
            this.exportFunctionsOnHostElement();
        }
    }
    get useAsWebComponent(): boolean {
        return this._useAsWebComponent;
    }

    // @Output()
    // filtersClear: EventEmitter<void> = new EventEmitter<void>();
    @Output()
    filtersChange: EventEmitter<IPepSmartFilterData[]> = new EventEmitter<
        IPepSmartFilterData[]
    >();

    @Output()
    fieldToggleChange: EventEmitter<IPepSmartFilterField> = new EventEmitter<IPepSmartFilterField>();

    expansionPanelHeaderHeight = '*';

    constructor(
        private hostElement: ElementRef,
        public layoutService: PepLayoutService
    ) { }

    private exportFunctionsOnHostElement() {
        // This is for web component usage for use those functions.
        this.hostElement.nativeElement.clearFilters = this.clearFilters.bind(
            this
        );
        this.hostElement.nativeElement.clearFilter = this.clearFilter.bind(
            this
        );
        this.hostElement.nativeElement.toggleField = this.toggleField.bind(
            this
        );
    }

    private setupFilters(value: IPepSmartFilterData[]) {
        this.filtersDataMap.clear();
        if (value) {
            value.forEach((filter) => {
                // Validate before add the filter into the map.
                let currentField = null;

                if (this.fields && this.fields.length > 0) {
                    currentField = this.fields.find(
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
                            this.filtersDataMap.set(filter.fieldId, filter);
                        }
                    }
                }
            });
        }
    }

    private raiseFiltersChange(): void {
        this.filtersChange.emit(this.filters);
    }

    toggleField(index: number, isOpen: boolean): void {
        this.fields[index].isOpen = isOpen;
        this.fieldToggleChange.emit(this.fields[index]);
    }

    clearFilters() {
        this.filtersDataMap.clear();
    }

    clearFilter(fieldId: string) {
        this.filtersDataMap.delete(fieldId);
    }

    // Clear all the filters and raise event that filters has change.
    onFiltersClear() {
        this.clearFilters();
        this.raiseFiltersChange();
    }

    // Clear the filter and raise event that filters has change.
    onFilterClear(field: IPepSmartFilterField) {
        this.clearFilter(field.id);
        this.raiseFiltersChange();
    }

    // Set the filter and raise event that filters has change.
    onFilterChange(
        field: IPepSmartFilterField,
        filterData: IPepSmartFilterData
    ) {
        this.clearFilter(field.id);
        this.filtersDataMap.set(field.id, filterData);
        this.raiseFiltersChange();
    }
}
