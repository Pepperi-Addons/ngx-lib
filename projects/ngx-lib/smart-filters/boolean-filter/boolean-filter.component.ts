import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseFilterComponent } from '../common/model/base-filter-component';
import {
    IPepSmartFilterOperator,
    PepSmartFilterOperators,
    PepSmartFilterVariableOperators
} from '../common/model/operator';
import { IPepSmartFilterDataValue } from '../common/model/filter';
import { IPepOption } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-boolean-filter',
    templateUrl: './boolean-filter.component.html',
    styleUrls: ['./boolean-filter.component.scss'],
})
export class PepBooleanFilterComponent extends BaseFilterComponent implements OnInit {
    @Input() options: IPepOption[] = [];

    PepSmartFilterVariableOperators = PepSmartFilterVariableOperators;
    chooseTypeOptions: Array<IPepOption> = [];
    operatorWidth: string;
    valueWidth: string;

    ngOnInit() {
        if (this.inline) {
            this.setControlsWidth();
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

    setControlsWidth() {
        if (this.variableFieldOptions?.length) {
            this.operatorWidth = '38%';
            this.valueWidth = '62%';

        } else {
            this.valueWidth = '100%';
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
    }

    onValueChanged(value) {
        this.firstControl.setValue(value);

        if (this.emitOnChange) {
            this.applyFilter();
        }
    }
}
