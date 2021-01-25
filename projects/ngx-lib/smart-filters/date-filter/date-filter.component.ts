import { Component } from '@angular/core';
import { BaseFilterComponent } from '../common/model/base-filter-component';
import {
    IPepSmartFilterOperator,
    IPepSmartFilterOperatorUnit,
    PepSmartFilterOperators,
    PepSmartFilterOperatorUnits,
} from '../common/model/operator';
import { IPepSmartFilterDataValue } from '../common/model/filter';
import { Validators } from '@angular/forms';
import { IPepFieldValueChangeEvent, IPepOption } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-date-filter',
    templateUrl: './date-filter.component.html',
    styleUrls: ['./date-filter.component.scss'],
})
export class PepDateFilterComponent extends BaseFilterComponent {
    PepSmartFilterOperators = PepSmartFilterOperators;
    chooseTimeOptions: Array<IPepOption> = [];
    chooseTimeUnitOptions: Array<IPepOption> = [];

    // Override
    getDefaultOperator(): IPepSmartFilterOperator {
        return PepSmartFilterOperators.InTheLast;
    }

    // Override
    getDefaultOperatorUnit(): IPepSmartFilterOperatorUnit {
        return PepSmartFilterOperatorUnits.Months;
    }

    // Override
    getFilterValue(): IPepSmartFilterDataValue {
        const filterValue = {
            first: this.firstControl.value,
        };

        if (this.operator === PepSmartFilterOperators.DateRange) {
            filterValue['second'] = this.secondControl.value;
        }

        return filterValue;
    }

    // Override
    loadOperatorsOptions() {
        this.chooseTimeOptions = this.operators.map((operator) => {
            return {
                key: operator.id,
                value: this.translate.instant(
                    `${this.OPERATORS_TRANSLATION_PREFIX}.${operator.name}`
                ),
            };
        });

        this.chooseTimeUnitOptions = this.operatorUnits.map((operatorUnit) => {
            return {
                key: operatorUnit.id,
                value: this.translate.instant(
                    `${this.OPERATOR_UNITS_TRANSLATION_PREFIX}.${operatorUnit.name}`
                ),
            };
        });
    }

    // Override
    setFieldsStateAndValidators(): void {
        this.firstControl.enable();

        if (this.operator === PepSmartFilterOperators.DateRange) {
            this.firstControl.setValidators(Validators.required);
            this.secondControl.enable();
            this.secondControl.setValidators(Validators.required);
        } else if (
            this.operator === PepSmartFilterOperators.InTheLast ||
            this.operator === PepSmartFilterOperators.NotInTheLast ||
            this.operator === PepSmartFilterOperators.DueIn ||
            this.operator === PepSmartFilterOperators.NotDueIn
        ) {
            this.firstControl.setValidators([
                Validators.required,
                this.validator.numberValidator(),
            ]);
            this.secondControl.disable();
        } else {
            // Disable 'first' field.
            if (
                this.operator === PepSmartFilterOperators.Today ||
                this.operator === PepSmartFilterOperators.ThisWeek ||
                this.operator === PepSmartFilterOperators.ThisMonth ||
                this.operator === PepSmartFilterOperators.IsEmpty ||
                this.operator === PepSmartFilterOperators.IsNotEmpty
            ) {
                this.firstControl.disable();
            }

            // Default disable 'second' field.
            super.setFieldsStateAndValidators();
        }
    }

    onOperatorChanged(event: IPepFieldValueChangeEvent) {
        const operator = Object.values(PepSmartFilterOperators).find(
            (operator) => operator.id === event.value
        );
        this.operator = operator;
    }

    onTimeUnitChanged(event: IPepFieldValueChangeEvent) {
        const operatorUnit = Object.values(PepSmartFilterOperatorUnits).find(
            (operatorUnit) => operatorUnit.id === event.value
        );
        this.operatorUnit = operatorUnit;
    }
}
