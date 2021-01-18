import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
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

    getDefaultOperator(): IPepSmartFilterOperator {
        return PepSmartFilterOperators.InTheLast;
    }

    getDefaultOperatorUnit(): IPepSmartFilterOperatorUnit {
        return PepSmartFilterOperatorUnits.Months;
    }

    getFilterValue(): IPepSmartFilterDataValue {
        const filterValue = {
            first: this.form.get('first').value,
        };

        if (this.operator === PepSmartFilterOperators.DateRange) {
            filterValue['second'] = this.form.get('second').value;
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
    setFieldsValidators(): void {
        this.form.get('first').enable();

        if (this.operator === PepSmartFilterOperators.DateRange) {
            this.form.get('first').setValidators(Validators.required);
            this.form.get('second').enable();
            this.form.get('second').setValidators(Validators.required);
        } else if (
            this.operator === PepSmartFilterOperators.InTheLast ||
            this.operator === PepSmartFilterOperators.NotInTheLast ||
            this.operator === PepSmartFilterOperators.DueIn ||
            this.operator === PepSmartFilterOperators.NotDueIn
        ) {
            this.form
                .get('first')
                .setValidators([
                    Validators.required,
                    this.validator.numberValidator(),
                ]);
            this.form.get('second').disable();
        } else {
            // Disable 'first' field.
            if (
                this.operator === PepSmartFilterOperators.Today ||
                this.operator === PepSmartFilterOperators.ThisWeek ||
                this.operator === PepSmartFilterOperators.ThisMonth ||
                this.operator === PepSmartFilterOperators.IsEmpty ||
                this.operator === PepSmartFilterOperators.IsNotEmpty
            ) {
                this.form.get('first').disable();
            }

            // Default disable 'second' field.
            super.setFieldsValidators();
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
