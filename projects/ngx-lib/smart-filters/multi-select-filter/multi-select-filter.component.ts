import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BaseFilterComponent } from '../common/model/base-filter-component';
import {
    IPepSmartFilterOperator,
    PepSmartFilterOperators,
} from '../common/model/operator';
import { IPepSmartFilterDataValue } from '../common/model/filter';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'pep-multi-select-filter',
    templateUrl: './multi-select-filter.component.html',
    styleUrls: ['./multi-select-filter.component.scss'],
})
export class PepMultiSelectFilterComponent
    extends BaseFilterComponent
    implements OnInit {
    filteredValues: Observable<any>;

    ngOnInit() {
        this.filteredValues = this.form.get('first').valueChanges.pipe(
            this.getDestroyer(),
            startWith<any>(''),
            map((value) =>
                typeof value === 'string' ? value : value && value.name
            ),
            map((name) =>
                name ? this._filterOptions(name) : this.field.options
            )
        );
    }

    private _filterOptions(name: string): any[] {
        const filterValue = name.toLowerCase();
        return this.field.options.filter(
            (opt) =>
                opt.value &&
                opt.value.toLowerCase().includes(filterValue.toLowerCase())
        );
    }

    getDefaultOperator(): IPepSmartFilterOperator {
        return PepSmartFilterOperators.Equals;
    }

    getFilterValue(): IPepSmartFilterDataValue {
        const filterValue = { first: [] };

        return filterValue;
    }
}
