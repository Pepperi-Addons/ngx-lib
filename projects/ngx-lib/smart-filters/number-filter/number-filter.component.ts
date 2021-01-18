import { Component, OnChanges, OnInit } from '@angular/core';
import { BaseFilterComponent } from '../common/model/base-filter-component';
import {
    IPepSmartFilterOperator,
    PepSmartFilterOperators,
} from '../common/model/operator';
import { IPepSmartFilterDataValue } from '../common/model/filter';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { IPepFieldValueChangeEvent, IPepOption } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-number-filter',
    templateUrl: './number-filter.component.html',
    styleUrls: ['./number-filter.component.scss'],
})
export class PepNumberFilterComponent
    extends BaseFilterComponent
    implements OnInit, OnChanges {
    PepSmartFilterOperators = PepSmartFilterOperators;
    chooseTypeOptions: Array<IPepOption> = [];

    ngOnInit() {
        // this.form.valueChanges
        // .pipe(
        //     this.getDestroyer()
        // ).subscribe((res) => {
        //     this.setFieldsValidators();
        // });
        // this.form.get('first').valueChanges.subscribe((res) => {
        //     this.form.get('first').setValidators([Validators.required, this.validator.isLessThan(this.form.get('second'))]);
        //     this.form.get('second').setValidators([Validators.required, this.validator.isGreaterThan(this.form.get('first'))]);
        // })
        // this.form.get('second').valueChanges.subscribe((res) => {
        //     this.form.get('first').setValidators([Validators.required, this.validator.isLessThan(this.form.get('second'))]);
        //     this.form.get('second').setValidators([Validators.required, this.validator.isGreaterThan(this.form.get('first'))]);
        // })
    }

    ngOnChanges() {
        // debugger;
        // if (this.form) {
        //     this.updateValidator();
        // }
    }

    getDefaultOperator(): IPepSmartFilterOperator {
        return PepSmartFilterOperators.Equals;
    }

    getFilterValue(): IPepSmartFilterDataValue {
        const filterValue = {
            first: this.form.get('first').value,
        };

        if (this.operator === PepSmartFilterOperators.NumberRange) {
            filterValue['second'] = this.form.get('second').value;
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
    setFieldsValidators(): void {
        if (this.operator === PepSmartFilterOperators.NumberRange) {
            this.form
                .get('first')
                .setValidators([
                    Validators.required,
                    this.validator.isLessThan(this.form.get('second')),
                ]);
            this.form.get('second').enable();
            this.form
                .get('second')
                .setValidators([
                    Validators.required,
                    this.validator.isGreaterThan(this.form.get('first')),
                ]);
        } else {
            super.setFieldsValidators();
        }
    }

    onOperatorChanged(event: IPepFieldValueChangeEvent) {
        const operator = Object.values(PepSmartFilterOperators).find(
            (operator) => operator.id === event.value
        );
        this.operator = operator;
    }

    onValueChange(event: IPepFieldValueChangeEvent) {
        //     // debugger;
        //     try {
        //         const numberValue = parseInt(event.value);
        //         this.form.get(event.key).setValue(numberValue);
        //         super.updateValidator();
        //     }
        //     catch {
        //     }
        //     // this.form.get('first').setValidators([Validators.required, this.validator.isLessThan(this.form.get('second'))]);
        //     // this.form.get('second').setValidators([Validators.required, this.validator.isGreaterThan(this.form.get('first'))]);
        //     // this.form.get('first').updateValueAndValidity();
        //     // this.form.get('second').updateValueAndValidity();
    }
}
