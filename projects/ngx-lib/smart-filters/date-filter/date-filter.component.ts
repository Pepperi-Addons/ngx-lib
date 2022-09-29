import { Component, OnInit } from '@angular/core';
import { BaseFilterComponent } from '../common/model/base-filter-component';
import {
    IPepSmartFilterOperator,
    IPepSmartFilterOperatorUnit,
    PepSmartFilterOperators,
    PepSmartFilterAdditionalOperators,
    PepSmartFilterVariableOperators,
    PepSmartFilterOperatorUnits,
} from '../common/model/operator';
import { IPepSmartFilterDataValue } from '../common/model/filter';
import { Validators } from '@angular/forms';
import { IPepOption } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-date-filter',
    templateUrl: './date-filter.component.html',
    styleUrls: ['./date-filter.component.scss'],
})
export class PepDateFilterComponent extends BaseFilterComponent implements OnInit {
    PepSmartFilterOperators = PepSmartFilterOperators;
    PepSmartFilterAdditionalOperators = PepSmartFilterAdditionalOperators;
    PepSmartFilterVariableOperators = PepSmartFilterVariableOperators;
    chooseTimeOptions: Array<IPepOption> = [];
    chooseTimeUnitOptions: Array<IPepOption> = [];
    operatorWidth: string;
    fieldsWidth: string;

    ngOnInit() {
        if (this.inline) {
            this.setControlsWidth();
        }
    }

    // Override
    getDefaultOperator(): IPepSmartFilterOperator {
        return PepSmartFilterOperators.InTheLast;
    }

    // Override
    getDefaultOperatorUnit(): IPepSmartFilterOperatorUnit {
        if (this.operator === PepSmartFilterOperators.InTheLast ||
            this.operator === PepSmartFilterAdditionalOperators.InTheLastCalendar ||
            this.operator === PepSmartFilterOperators.NotInTheLast ||
            this.operator === PepSmartFilterAdditionalOperators.NotInTheLastCalendar ||
            this.operator === PepSmartFilterOperators.DueIn ||
            this.operator === PepSmartFilterOperators.NotDueIn) {
            return PepSmartFilterOperatorUnits.Months;
        } else {
            return undefined;
        }
    }

    // Override
    getFilterValue(): IPepSmartFilterDataValue {
        const filterValue = {
            first: this.firstControl.value,
        };

        if (this.operator === PepSmartFilterOperators.DateRange ||
            this.operator === PepSmartFilterVariableOperators.DateRangeVariable) {
            filterValue['second'] = this.secondControl.value;
        }

        return filterValue;
    }

    // Override
    initFilter() {
        setTimeout(() => {            
            if (this.emitOnChange) {
                this.applyFilter();
            }
        }, 0);
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

        if (
            this.operator === PepSmartFilterOperators.DateRange ||
            this.operator === PepSmartFilterVariableOperators.DateRangeVariable
        ) {
            this.firstControl.setValidators(Validators.required);
            this.secondControl.enable();
            this.secondControl.setValidators(Validators.required);
        } else if (
            this.operator === PepSmartFilterOperators.InTheLast ||
            this.operator === PepSmartFilterAdditionalOperators.InTheLastCalendar ||
            this.operator === PepSmartFilterOperators.NotInTheLast ||
            this.operator === PepSmartFilterAdditionalOperators.NotInTheLastCalendar ||
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

    setControlsWidth() {
        if (
            this.operator === PepSmartFilterOperators.Today ||
            this.operator === PepSmartFilterOperators.ThisWeek ||
            this.operator === PepSmartFilterOperators.ThisMonth ||
            this.operator === PepSmartFilterOperators.IsEmpty ||
            this.operator === PepSmartFilterOperators.IsNotEmpty
        ) {
            this.operatorWidth = 'auto';
            this.fieldsWidth = '0%';
        } else if (this.operator === PepSmartFilterOperators.On) {
            this.operatorWidth = '38%';
            this.fieldsWidth = '62%';
        } else {
            this.operatorWidth = '30%';
            this.fieldsWidth = '70%';
        }
    }

    onOperatorChanged(value: string) {
        const operator = Object.values(this.operators).find(
            (operator) => operator.id === value
        );

        this.operator = operator;
        this.operatorUnit = this.getDefaultOperatorUnit();
        if (this.inline) {
            this.setControlsWidth();
        }
        if (this._parentForm) {
            this.updateParentForm();
        }
        setTimeout(() => {
            if (this.emitOnChange) {
                this.applyFilter();
            }    
        }, 0)
        
    }

    onTimeUnitChanged(value: string) {
        const operatorUnit = Object.values(PepSmartFilterOperatorUnits).find(
            (operatorUnit) => operatorUnit.id === value
        );
        this.operatorUnit = operatorUnit;
        if (this._parentForm) {
            this.updateParentForm();
        }
        if (this.emitOnChange) {
            this.applyFilter();
        }
    }

    onVariableChanged(value: any) {
        this.firstControl.setValue(value);
        if (this.emitOnChange) {
            this.applyFilter();
        }
    }

    onSecondVariableChanged(value: any) {
        this.secondControl.setValue(value);
        if (this.emitOnChange) {
            this.applyFilter();
        }
    }

    onDateValueChanged() {
        if (this.emitOnChange) {
            this.applyFilter();
        }
    }

}
