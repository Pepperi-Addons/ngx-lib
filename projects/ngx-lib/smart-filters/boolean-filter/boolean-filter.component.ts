import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseFilterComponent } from '../common/model/base-filter-component';
import {
    IPepSmartFilterOperator,
    PepSmartFilterOperators,
} from '../common/model/operator';
import { IPepSmartFilterDataValue } from '../common/model/filter';

@Component({
    selector: 'pep-boolean-filter',
    templateUrl: './boolean-filter.component.html',
    styleUrls: ['./boolean-filter.component.scss'],
})
export class PepBooleanFilterComponent extends BaseFilterComponent implements OnInit {

    ngOnInit() {
    }


    // Override
    getDefaultOperator(): IPepSmartFilterOperator {
        return PepSmartFilterOperators.Equals;
    }

    // Override
    getFilterValue(): IPepSmartFilterDataValue {
        const filterValue = { first: this.firstControl.value || false };
        return filterValue;
    }

    onRadioChanged() {

    }

    onValueChanged(value) {
        this.firstControl.setValue(value);

        if (this.emitOnChange) {
            this.applyFilter();
        }
    }
    // // Override
    // setFieldsStateAndValidators(): void {
    //     this.secondControl.disable();
    // }
}
