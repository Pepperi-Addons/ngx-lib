import { Component, OnChanges, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';
import { BaseFilterComponent } from '../common/model/base-filter-component';
import {
    IPepSmartFilterOperator,
    PepSmartFilterOperators,
} from '../common/model/operator';
import { IPepOption } from '@pepperi-addons/ngx-lib';
import { IPepSmartFilterDataValue } from '../common/model/filter';

@Component({
    selector: 'pep-text-filter',
    templateUrl: './text-filter.component.html',
    styleUrls: ['./text-filter.component.scss'],
})
export class PepTextFilterComponent extends BaseFilterComponent implements OnInit {
    chooseTypeOptions: Array<IPepOption> = [];

    ngOnInit() {
        this.firstControl.valueChanges
            .pipe(this.getDestroyer(), distinctUntilChanged())
            .subscribe(() => {
                this.setFieldsStateAndValidators();
            });
    }

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
            const firstValidators = [Validators.required];
            if (this.secondControl.value) {
                firstValidators.push(this.validator.isLessThan(this.secondControl));
            }
            this.firstControl.setValidators(firstValidators);
        } else {
            super.setFieldsStateAndValidators();
        }
    }

    onOperatorChanged(value: string) {
        const operator = Object.values(PepSmartFilterOperators).find(
            (operator) => operator.id === value
        );
        this.operator = operator;
    }
}