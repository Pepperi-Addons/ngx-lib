import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseFilterComponent } from '../common/model/base-filter-component';
import { IPepOption } from '@pepperi-addons/ngx-lib';
import {
    IPepSmartFilterOperator,
    PepSmartFilterOperators,
} from '../common/model/operator';
import { IPepSmartFilterDataValue } from '../common/model/filter';
import { PepBooleanMapper } from '../filter-builder/common/model/type';

@Component({
    selector: 'pep-boolean-filter',
    templateUrl: './boolean-filter.component.html',
    styleUrls: ['./boolean-filter.component.scss'],
})
export class PepBooleanFilterComponent extends BaseFilterComponent implements OnInit {
    options: IPepOption[] = [];

    ngOnInit() {
        if (this.inline) {
            this.options = PepBooleanMapper.getAll();
        }
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
