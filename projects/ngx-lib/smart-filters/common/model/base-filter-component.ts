import {
    Directive,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ValidatorService } from '@pepperi-addons/ngx-lib';
import {
    IPepSmartFilterOperator,
    IPepSmartFilterOperatorUnit,
    PepSmartFilterOperators,
    PepSmartFilterOperatorUnits,
} from './operator';
import { forwardRef } from '@angular/core';
import { IPepSmartFilterData, IPepSmartFilterDataValue } from './filter';
import { PepSmartFilterBaseField } from './field';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Directive({
    // template: '',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BaseFilterComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => BaseFilterComponent),
            multi: true,
        },
    ],
})
export abstract class BaseFilterComponent
    implements OnInit, OnChanges, OnDestroy {
    private _field: PepSmartFilterBaseField;
    @Input()
    set field(value: PepSmartFilterBaseField) {
        this._field = value;
        this.setupOperators();
    }
    get field(): PepSmartFilterBaseField {
        return this._field;
    }

    private _filter: IPepSmartFilterData;
    @Input()
    set filter(value: IPepSmartFilterData) {
        this._filter = value;
        this.initFilter();
    }
    get filter(): IPepSmartFilterData {
        return this._filter;
    }

    @Output() filterClear: EventEmitter<void> = new EventEmitter<void>();
    @Output()
    filterChange: EventEmitter<IPepSmartFilterData> = new EventEmitter<IPepSmartFilterData>();

    private _operator: IPepSmartFilterOperator;
    set operator(operator: IPepSmartFilterOperator) {
        if (operator?.id != this._operator?.id) {
            this._operator = operator;
            this.form.reset();
            this.updateValidator();
        }
    }
    get operator(): IPepSmartFilterOperator {
        return this._operator;
    }

    private _operatorUnit: IPepSmartFilterOperatorUnit;
    set operatorUnit(operatorUnit: IPepSmartFilterOperatorUnit) {
        this._operatorUnit = operatorUnit;
    }
    get operatorUnit(): IPepSmartFilterOperatorUnit {
        return this._operatorUnit;
    }

    operators: IPepSmartFilterOperator[];
    operatorUnits: IPepSmartFilterOperatorUnit[];

    form: FormGroup;
    private destroyer: Subject<void>;

    protected readonly OPERATORS_TRANSLATION_PREFIX = 'SMART_FILTERS.OPERATORS';
    protected readonly OPERATOR_UNITS_TRANSLATION_PREFIX =
        'SMART_FILTERS.OPERATOR_UNITS';

    constructor(
        private builder: FormBuilder,
        protected translate: TranslateService,
        protected validator: ValidatorService
    ) {
        this.destroyer = new Subject();
        this.initForm();
    }

    private initForm() {
        this.form = this.builder.group({
            first: [],
            second: [],
        });
    }

    protected updateValidator() {
        this.setFieldsValidators();

        this.form.get('first').updateValueAndValidity();
        this.form.get('second').updateValueAndValidity();
    }

    private setupOperators() {
        // Get the operators by type.
        this.operators = Object.keys(PepSmartFilterOperators)
            .filter((key) => {
                return PepSmartFilterOperators[key].type.includes(
                    this.field.type
                );
            })
            .map((key) => PepSmartFilterOperators[key]);

        // Get the operator units by type.
        this.operatorUnits = Object.keys(PepSmartFilterOperatorUnits)
            .filter((key) => {
                return PepSmartFilterOperatorUnits[key].type.includes(
                    this.field.type
                );
            })
            .map((key) => PepSmartFilterOperatorUnits[key]);

        // Load translation before get the options in the children.
        this.translate.get('SMART_FILTERS.TITLE').subscribe((res) => {
            this.loadOperatorsOptions();
        });
    }

    private initFilter() {
        if (this.filter) {
            this.operator = this.filter.operator;
            this.operatorUnit = this.filter.operatorUnit;
            const value = this.filter.value;
            this.form.patchValue({
                first: value.first,
                second: value.second,
            });
        } else {
            this.operator = this.getDefaultOperator();
            this.operatorUnit = this.getDefaultOperatorUnit();
            this.form.reset();
        }
    }

    protected getDestroyer() {
        return takeUntil(this.destroyer);
    }

    // Load the operators options from the translation.
    protected loadOperatorsOptions(): void {
        // Not implemented in the base
    }

    // Set default validators - some childs override this.
    protected setFieldsValidators(): void {
        this.form.get('first').setValidators(Validators.required);
        this.form.get('second').setValidators(Validators.required);
        this.form.get('second').disable();
    }

    // Return undefined - some childs override this.
    protected getDefaultOperatorUnit(): IPepSmartFilterOperatorUnit {
        return undefined;
    }

    abstract getDefaultOperator(): IPepSmartFilterOperator;
    abstract getFilterValue(): IPepSmartFilterDataValue;

    clear() {
        this._filter = null;
        this.form.reset();
        this.filterClear.emit();
    }

    apply() {
        const filter = {
            key: this.field.id,
            operator: this.operator,
            operatorUnit: this.operatorUnit,
            value: this.getFilterValue(),
        };
        this._filter = filter;
        this.filterChange.emit(filter);
    }

    ngOnInit() {
        const i = 0;
    }

    ngOnChanges() {
        if (this.form) {
            this.updateValidator();
        }
    }

    ngOnDestroy() {
        this.destroyer.next();
        this.destroyer.complete();
    }

    writeValue(value: IPepSmartFilterDataValue): void {
        if (value) {
            this.form.setValue(
                {
                    first: value.first,
                    second: value.second || null,
                },
                { emitEvent: false }
            );
        } else {
            this.form.reset();
        }
    }

    registerOnChange(fn: any): void {
        this.form.valueChanges.subscribe(fn);
    }

    onTouched: () => void = () => {
        /* Do nothing */
    };
    
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.form.disable() : this.form.enable();
    }

    validate(control: AbstractControl): ValidationErrors {
        return this.form.valid ? null : { PepFilterIsNotValid: true };
    }
}
