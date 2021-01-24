import { Component, OnChanges, OnInit } from '@angular/core';
import { BaseFilterComponent } from '../common/model/base-filter-component';
import {
    IPepSmartFilterOperator,
    PepSmartFilterOperators,
} from '../common/model/operator';
import { IPepSmartFilterDataValue } from '../common/model/filter';
import { Validators } from '@angular/forms';
import { IPepFieldValueChangeEvent, IPepOption } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-number-filter',
    templateUrl: './number-filter.component.html',
    styleUrls: ['./number-filter.component.scss'],
})
export class PepNumberFilterComponent
    extends BaseFilterComponent {
    PepSmartFilterOperators = PepSmartFilterOperators;
    chooseTypeOptions: Array<IPepOption> = [];

    // Override
    getDefaultOperator(): IPepSmartFilterOperator {
        return PepSmartFilterOperators.Equals;
    }

    // Override
    getFilterValue(): IPepSmartFilterDataValue {
        const filterValue = {
            first: this.firstControl.value,
        };

        if (this.operator === PepSmartFilterOperators.NumberRange) {
            filterValue['second'] = this.secondControl.value;
        }

        return filterValue;
    }

    // Override
    loadOperatorsOptions() {
        this.chooseTypeOptions = this.operators.map((operator) => {
            return {
                key: operator.id,
                value: this.translate.instant(
                    `${this.OPERATORS_TRANSLATION_PREFIX}.${operator.name}`
                ),
            };
        });
    }

    // Override
    setFieldsStateAndValidators(): void {
        if (this.operator === PepSmartFilterOperators.NumberRange) {
            this.firstControl
                .setValidators([
                    Validators.required,
                    this.validator.isLessThan(this.secondControl),
                ]);
            this.secondControl.enable();
            this.secondControl
                .setValidators([
                    Validators.required,
                    this.validator.isGreaterThan(this.firstControl),
                ]);
        } else {
            super.setFieldsStateAndValidators();
        }
    }

    onOperatorChanged(event: IPepFieldValueChangeEvent) {
        const operator = Object.values(PepSmartFilterOperators).find(
            (operator) => operator.id === event.value
        );
        this.operator = operator;
    }
}
