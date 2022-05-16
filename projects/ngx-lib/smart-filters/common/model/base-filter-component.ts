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
import {
    PepValidatorService,
    IPepOption
} from '@pepperi-addons/ngx-lib';
import {
    IPepSmartFilterOperator,
    IPepSmartFilterOperatorUnit,
    PepSmartFilterOperators,
    PepSmartFilterAdditionalOperators,
    PepSmartFilterVariableOperators,
    PepSmartFilterOperatorUnits,
} from './operator';
import { forwardRef } from '@angular/core';
import { IPepSmartFilterData, IPepSmartFilterDataValue } from './filter';
import { PepSmartFilterBaseField } from './field';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { PepFilterActionsComponent } from '../filter-actions.component';


@Directive({})
export abstract class BaseFilterComponent
    implements OnInit, OnChanges, OnDestroy {
    private readonly _destroyed: Subject<void>;
    private actionsContainerRef: ComponentRef<PepFilterActionsComponent>;

    private _fieldIdWithNoDots = '';
    private _field: PepSmartFilterBaseField;
    @Input()
    set field(value: PepSmartFilterBaseField) {
        this._field = value;
        this._fieldIdWithNoDots = value ? value.id.replace(/\./g, '_') : '';
        this.setupForm();
    }
    get field(): PepSmartFilterBaseField {
        return this._field;
    }

    variableFieldOptions: Array<IPepOption> = [];
    @Input()
    set variableField(list: any[]) {
        if (list?.length) {
            this.variableFieldOptions = list.map(item => {
                return {
                    key: item,
                    value: item
                }
            });
        }
    };

    private _filter: IPepSmartFilterData;
    @Input()
    set filter(value: IPepSmartFilterData) {
        this._filter = value;
        this.setupFilter();
    }
    get filter(): IPepSmartFilterData {
        return this._filter;
    }
    protected _parentForm: FormGroup;
    @Input()
    set parentForm(form: FormGroup) {
        this._parentForm = form;
        this.updateParentForm();
    }
    @Input() emitOnChange = false;
    @Input() inline = false;
    @Input() showActionButtons = true;
    @Input() renderTitle = true;
    @Input() showAdditionalOperators = false;

    @Output() filterClear: EventEmitter<void> = new EventEmitter<void>();
    @Output()
    filterChange: EventEmitter<IPepSmartFilterData> = new EventEmitter<IPepSmartFilterData>();

    private _operator: IPepSmartFilterOperator;
    set operator(operator: IPepSmartFilterOperator) {
        if (operator?.id != this._operator?.id) {
            // Validate operator
            const index = this.operators.findIndex((o) => o.id === operator.id);
            if (index >= 0) {
                this._operator = this.operators[index];
            } else {
                this._operator = this.operators[0];
            }

            this.form.reset();
            this.updateValidity();
        }
    }
    get operator(): IPepSmartFilterOperator {
        return this._operator;
    }

    private _operatorUnit: IPepSmartFilterOperatorUnit;
    set operatorUnit(operatorUnit: IPepSmartFilterOperatorUnit) {
        // Validate operator unit
        if (operatorUnit) {
            const index = this.operatorUnits.findIndex(
                (ou) => ou.id === operatorUnit.id
            );
            if (index >= 0) {
                this._operatorUnit = this.operatorUnits[index];
            } else {
                this._operatorUnit = this.operatorUnits[0];
            }
        } else {
            this._operatorUnit = undefined;
        }
    }
    get operatorUnit(): IPepSmartFilterOperatorUnit {
        return this._operatorUnit;
    }

    get firstControlKey() {
        return this.field ? `${this._fieldIdWithNoDots}_first` : 'first';
    }
    get firstControl(): AbstractControl {
        return this.form.get(this.firstControlKey);
    }
    get secondControlKey() {
        return this.field ? `${this._fieldIdWithNoDots}_second` : 'second';
    }
    get secondControl(): AbstractControl {
        return this.form.get(this.secondControlKey);
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
        protected validator: PepValidatorService,
        protected renderer: Renderer2
    ) {
        this._destroyed = new Subject();
    }

    private createActionsComponent() {
        const factory: ComponentFactory<PepFilterActionsComponent> = this.resolver.resolveComponentFactory(
            PepFilterActionsComponent
        );

        this.actionsContainerRef = factory.create(this.injector);
        this.actionsContainerRef.instance.form = this.form;
        this.actionsContainerRef.instance.applyClick.subscribe(() =>
            this.applyFilter()
        );
        this.actionsContainerRef.instance.clearClick.subscribe(() =>
            this.clearFilter()
        );

        this.viewContainerRef.insert(this.actionsContainerRef.hostView);
    }

    private setupForm() {
        const formValue = {};
        formValue[this.firstControlKey] = [];
        formValue[this.secondControlKey] = [];
        // this.form.patchValue(formValue);        
        this.form = this.builder.group(formValue);
        // this.form[this.firstControlKey] = [];
        // this.form[this.secondControlKey] = [];

        this.setupOperators();

        if (this.showActionButtons) {
            this.createActionsComponent();
        }
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

        // Add additional operators
        if (this.showAdditionalOperators) {
            let additional: IPepSmartFilterOperator[] = Object.keys(PepSmartFilterAdditionalOperators)
                .filter((key) => {
                    return PepSmartFilterAdditionalOperators[key].componentType.includes(
                        this.field.componentType
                    );
                })
                .map((key) => PepSmartFilterAdditionalOperators[key]);

            this.operators = [...this.operators, ...additional];
        }

        //add variable operators
        if (this.variableFieldOptions?.length) {
            let variables: IPepSmartFilterOperator[] = Object.keys(PepSmartFilterVariableOperators)
                .filter((key) => {
                    return PepSmartFilterVariableOperators[key].componentType.includes(
                        this.field.componentType
                    );
                })
                .map((key) => PepSmartFilterVariableOperators[key]);

            this.operators = [...this.operators, ...variables];
        }

        // Filter by from field.operators input if exist.
        if (this.field.operators?.length > 0) {
            this.operators = this.operators.filter((o1) =>
                this.field.operators.some((o2) => o1.id === o2)
            );
        }



        // Get the operator units by componentType.
        this.operatorUnits = Object.keys(PepSmartFilterOperatorUnits)
            .filter((key) => {
                return PepSmartFilterOperatorUnits[key].componentType.includes(
                    this.field.componentType
                );
            })
            .map((key) => PepSmartFilterOperatorUnits[key]);

        // Filter by from field.operatorsUnits input if exist.
        if (this.field.operatorUnits?.length > 0) {
            this.operatorUnits = this.operatorUnits.filter((o1) =>
                this.field.operatorUnits.some((o2) => o1.id === o2)
            );
        }

        // Load translation before get the options in the children.
        this.translate.get('SMART_FILTERS.TITLE').subscribe((res) => {
            this.loadOperatorsOptions();
        });
    }

    private setupFilter() {
        if (this.filter) {
            this.operator = this.filter.operator;
            this.operatorUnit = this.filter.operatorUnit;
            const formValue = {};
            formValue[this.firstControlKey] = this.filter.value.first;
            formValue[this.secondControlKey] = this.filter.value.second;
            this.form.patchValue(formValue);
        } else {
            this.operator = this.getDefaultOperator();
            this.operatorUnit = this.getDefaultOperatorUnit();
            this.clearFilter(false);
        }
    }

    protected updateParentForm() {
        this._parentForm.setControl('fieldId', this.builder.control(this.field.id));
        this._parentForm.setControl('fieldType', this.builder.control(this.field.type));
        this._parentForm.setControl('operator', this.builder.control(this.operator));
        this._parentForm.setControl('operatorUnit', this.builder.control(this.operatorUnit));
        this._parentForm.setControl('values', this.builder.group({
            first: this.firstControl,
            second: this.secondControl
        }));
    }

    protected getDestroyer() {
        return takeUntil(this._destroyed);
    }

    private updateValidity() {
        this.setFieldsStateAndValidators();

        this.firstControl.updateValueAndValidity();
        this.secondControl.updateValueAndValidity();
    }
    // Load the operators options from the translation.
    protected loadOperatorsOptions(): void {
        // Not implemented in the base
    }

    // Set default validators - some childs override this.
    protected setFieldsStateAndValidators(): void {
        this.firstControl.setValidators(Validators.required);
        this.secondControl.setValidators(Validators.required);
        this.secondControl.disable();
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
        this.initFilter();

        if (emitEvent) {
            this.filterClear.emit();
        }
    }

    applyFilter() {
        const filterValue = this.getFilterValue();

        // If the filter is not null declare it, else - clear it.
        if (filterValue) {
            const filter = {
                fieldId: this.field.id,
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

    ngOnInit(): void {
        if (this.form) {
            this.updateValidity();
        }
    }

    ngOnChanges(): void {
        // if (this.form) {
        //     this.updateValidity();
        // }
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();

        if (this.showActionButtons) {
            this.actionsContainerRef.destroy();
        }
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
