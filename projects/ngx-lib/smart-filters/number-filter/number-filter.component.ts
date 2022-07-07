import { Component, OnChanges, OnInit } from '@angular/core';
import { BaseFilterComponent } from '../common/model/base-filter-component';
import {
    IPepSmartFilterOperator,
    PepSmartFilterOperators,
    PepSmartFilterVariableOperators
} from '../common/model/operator';
import { IPepSmartFilterDataValue } from '../common/model/filter';
import { Validators } from '@angular/forms';
import { IPepOption } from '@pepperi-addons/ngx-lib';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'pep-number-filter',
    templateUrl: './number-filter.component.html',
    styleUrls: ['./number-filter.component.scss'],
})
export class PepNumberFilterComponent extends BaseFilterComponent implements OnInit {
    PepSmartFilterOperators = PepSmartFilterOperators;
    PepSmartFilterVariableOperators = PepSmartFilterVariableOperators;
    chooseTypeOptions: Array<IPepOption> = [];
    operatorWidth = '38%';
    fieldsWidth = '70%';

    ngOnInit() {
        this.firstControl.valueChanges
            .pipe(this.getDestroyer(), distinctUntilChanged())
            .subscribe(() => {
                this.setFieldsStateAndValidators();
            });

        this.secondControl.valueChanges
            .pipe(this.getDestroyer(), distinctUntilChanged())
            .subscribe(() => {
                this.setFieldsStateAndValidators();
            });
        this.setControlsWidth();
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


            this.secondControl.enable();
            const secondValidators = [Validators.required];
            if (this.firstControl.value) {
                secondValidators.push(this.validator.isGreaterThan(this.firstControl));
            }
            this.secondControl.setValidators(secondValidators);
        } else {
            super.setFieldsStateAndValidators();
        }
    }

    setControlsWidth() {
        if (this.operator === PepSmartFilterOperators.NumberRange) {
            this.operatorWidth = '30%';
            this.fieldsWidth = '70%';
        } else {
            this.operatorWidth = '38%';
            this.fieldsWidth = '62%';
        }
    }

    onOperatorChanged(value: string) {
        const operator = Object.values(this.operators).find(
            (operator) => operator.id === value
        );
        this.operator = operator;        
        if (this._parentForm) {
            this.updateParentForm();
        }
        if (this.emitOnChange) {
            this.applyFilter();
        }
        this.setControlsWidth();
    }

    onVariableChanged(value: any) {
        this.firstControl.setValue(value);
        if (this.emitOnChange) {
            this.applyFilter();
        }
    }

    onValueChanged() {
        if (this.emitOnChange) {
            this.applyFilter();
        }
    }

}
