import {
    Directive,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    AfterViewInit,
    Output,
    ChangeDetectorRef,
    Renderer2,
    TemplateRef,
    ViewContainerRef,
    ViewChild,
    ComponentFactoryResolver,
    ComponentFactory,
    ComponentRef,
    Injector,
    ElementRef,
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
import { PepFilterActionsComponent } from '../filter-actions.component';

@Directive({
    // providers: [
    //     {
    //         provide: NG_VALUE_ACCESSOR,
    //         useExisting: forwardRef(() => BaseFilterComponent),
    //         multi: true,
    //     },
    //     {
    //         provide: NG_VALIDATORS,
    //         useExisting: forwardRef(() => BaseFilterComponent),
    //         multi: true,
    //     },
    // ],
})
export abstract class BaseFilterComponent
    implements OnChanges, OnDestroy {

    private readonly _destroyed: Subject<void>;
    private actionsContainerRef: ComponentRef<PepFilterActionsComponent>;

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
        this.setupFilter();
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
            this.updateValidity();
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

    protected operators: IPepSmartFilterOperator[];
    protected operatorUnits: IPepSmartFilterOperatorUnit[];

    protected readonly OPERATORS_TRANSLATION_PREFIX = 'SMART_FILTERS.OPERATORS';
    protected readonly OPERATOR_UNITS_TRANSLATION_PREFIX =
        'SMART_FILTERS.OPERATOR_UNITS';

    form: FormGroup;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private injector: Injector,
        private resolver: ComponentFactoryResolver,
        private builder: FormBuilder,
        protected translate: TranslateService,
        protected validator: ValidatorService,
        protected renderer: Renderer2
    ) {
        this._destroyed = new Subject();
        this.form = this.builder.group({
            first: [],
            second: [],
        });

        this.createActionsComponent();
    }

    private createActionsComponent() {
        const factory: ComponentFactory<PepFilterActionsComponent> =
            this.resolver.resolveComponentFactory(PepFilterActionsComponent);

        this.actionsContainerRef = factory.create(this.injector)
        this.actionsContainerRef.instance.form = this.form;
        this.actionsContainerRef.instance.applyClick.subscribe(() => this.applyFilter());
        this.actionsContainerRef.instance.clearClick.subscribe(() => this.clearFilter());

        this.viewContainerRef.insert(this.actionsContainerRef.hostView);
    }

    private updateValidity() {
        this.setFieldsStateAndValidators();

        this.form.get('first').updateValueAndValidity();
        this.form.get('second').updateValueAndValidity();
    }

    private setupOperators() {
        // Get the operators by componentType.
        this.operators = Object.keys(PepSmartFilterOperators)
            .filter((key) => {
                return PepSmartFilterOperators[key].componentType.includes(
                    this.field.componentType
                );
            })
            .map((key) => PepSmartFilterOperators[key]);

        // Get the operator units by componentType.
        this.operatorUnits = Object.keys(PepSmartFilterOperatorUnits)
            .filter((key) => {
                return PepSmartFilterOperatorUnits[key].componentType.includes(
                    this.field.componentType
                );
            })
            .map((key) => PepSmartFilterOperatorUnits[key]);

        // Load translation before get the options in the children.
        this.translate.get('SMART_FILTERS.TITLE').subscribe((res) => {
            this.loadOperatorsOptions();
        });
    }

    private setupFilter() {
        if (this.filter) {
            this.operator = this.filter.operator;
            this.operatorUnit = this.filter.operatorUnit;
            const value = this.filter.value;
            this.form.patchValue({
                first: value.first,
                second: value.second,
            });

            // const formValue = {};
            // formValue[this.field.id] = {
            //     first: value.first,
            //     second: value.second,
            // };
            // this.form.patchValue(formValue);

        } else {
            this.operator = this.getDefaultOperator();
            this.operatorUnit = this.getDefaultOperatorUnit();
            this.clearFilter(false);
        }
    }

    protected getDestroyer() {
        return takeUntil(this._destroyed);
    }

    // Load the operators options from the translation.
    protected loadOperatorsOptions(): void {
        // Not implemented in the base
    }

    // Set default validators - some childs override this.
    protected setFieldsStateAndValidators(): void {
        this.form.get('first').setValidators(Validators.required);
        this.form.get('second').setValidators(Validators.required);
        this.form.get('second').disable();
    }

    // Return undefined - some childs override this.
    protected getDefaultOperatorUnit(): IPepSmartFilterOperatorUnit {
        return undefined;
    }

    protected initFilter() {
        // Not implemented in the base
    }

    abstract getDefaultOperator(): IPepSmartFilterOperator;
    abstract getFilterValue(): IPepSmartFilterDataValue;

    clearFilter(emitEvent = true) {
        this._filter = null;
        this.form.reset();
        this.initFilter()

        if (emitEvent) {
            this.filterClear.emit();
        }
    }

    applyFilter() {
        const filterValue = this.getFilterValue();

        // If the filter is not null declare it, else - clear it.
        if (filterValue) {
            const filter = {
                key: this.field.id,
                operator: this.operator,
                operatorUnit: this.operatorUnit,
                value: filterValue,
            };
            this._filter = filter;
            this.filterChange.emit(filter);
        } else {
            this.clearFilter();
        }
    }

    ngOnChanges() {
        if (this.form) {
            this.updateValidity();
        }
    }

    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();

        this.actionsContainerRef.destroy();
    }

    // writeValue(value: IPepSmartFilterDataValue): void {
    //     if (value) {
    //         this.form.setValue(
    //             {
    //                 first: value.first,
    //                 second: value.second || null,
    //             },
    //             { emitEvent: false }
    //         );
    //     } else {
    //         this.form.reset();
    //     }
    // }

    // registerOnChange(fn: any): void {
    //     this.form.valueChanges.subscribe(fn);
    // }

    // onTouched: () => void = () => {
    //     /* Do nothing */
    // };

    // registerOnTouched(fn: any): void {
    //     this.onTouched = fn;
    // }

    // setDisabledState?(isDisabled: boolean): void {
    //     isDisabled ? this.form.disable() : this.form.enable();
    // }

    // validate(control: AbstractControl): ValidationErrors {
    //     return this.form.valid ? null : { PepFilterIsNotValid: true };
    // }
}
