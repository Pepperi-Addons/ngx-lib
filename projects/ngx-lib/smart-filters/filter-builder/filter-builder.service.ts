import {
    Injectable, ViewContainerRef, ComponentFactoryResolver,
    ComponentFactory, ComponentRef
} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { } from 'lodash';
import { PepSmartFilterBaseField, IPepSmartFilterField } from '../common/model/field';
import { IPepSmartFilterData } from '../common/model/filter';
import { PepSmartFilterOperators, IPepSmartFilterOperator } from '../common/model/operator';
import { PepSmartFilterType } from '../common/model/type'
import { createSmartFilter, createSmartFilterField } from '../common/model/creator';
import { getSmartBuilderType } from './common/model/type';
import { convertToSmartFilterFields } from './common/model/field';
import { getSmartBuilderOperator } from './common/model/operator';
import { FilterBuilderSectionComponent } from './filter-builder-section/filter-builder-section.component';
import { FilterBuilderItemComponent } from './filter-builder-item/filter-builder-item.component';
import { PepFilterBuilderTypeMap } from './common/model/type-map';
import { PepFilterBuilderOperatorUnitMap } from './common/model/operator-unit-map';
import { IPepFilterBuilderValues } from './common/model/filter';
import { PepOperatorTypes } from './common/model/type';



@Injectable({
    providedIn: 'root'
})
export class FilterBuilderService {
    private _outputJsonSubject = new BehaviorSubject<any>(null);
    //private renderer: Renderer2;
    private rootDiv: ViewContainerRef;
    private _counter: number;
    private _json: any;
    private _fields: Array<any>;
    private _smartFilterFields: Array<IPepSmartFilterField>
    private _typeMapper: PepFilterBuilderTypeMap;
    private _operatorUnitMapper: PepFilterBuilderOperatorUnitMap;
    private _hostView: ComponentRef<FilterBuilderSectionComponent>;
    private _form: FormGroup;

    private _outputJson: any;
    private _firstOutputItem: any;

    public triggerOutputJson = this._outputJsonSubject.asObservable();

    //private _filters: Array<IPepSmartFilterData>;

    constructor(private fb: FormBuilder, private resolver: ComponentFactoryResolver) {
        this._typeMapper = new PepFilterBuilderTypeMap();
        this._operatorUnitMapper = new PepFilterBuilderOperatorUnitMap();
    }

    get Form(): FormGroup {
        return this._form;
    }

    hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    /*
    setupForm() {
        this._form = this.fb.group({});
    } */

    buildTree() {
    }

    jsonParser(json: any) {
        let parsed: any = {
            Operator: json.Operation
        }

        this.treeFlatten(json, json.LeftNode, parsed);
        this.treeFlatten(json, json.RightNode, parsed);

        //console.log('parsed json', parsed);
        return parsed;
    }

    treeFlatten(parent: any, current: any, ui: any) {
        if (this.hasProperty(current, 'ComplexId')) {
            if (parent.Operation === current.Operation) {
                this.treeFlatten(parent, current.LeftNode, ui);
                this.treeFlatten(parent, current.RightNode, ui);
            } else {
                let counter: number = 0;
                Object.keys(ui).forEach(item => { if (item.includes('Node')) { counter++; } });
                ui['Node' + counter] = {
                    Operator: current.Operation,
                };
                this.treeFlatten(current, current.LeftNode, ui['Node' + counter]);
                this.treeFlatten(current, current.RightNode, ui['Node' + counter]);
            }
        } else {
            let counter: number = 0;
            Object.keys(ui).forEach(item => { if (item.includes('Filter')) { counter++; } });
            ui['Filter' + counter] = {
                FieldName: current.ApiName,
                Operation: current.Operation,
                Values: current.Values
            };
        }
    }


    createFilterTree(
        json: any,
        fields: Array<any>,
        form: FormGroup,
        containerRef: ViewContainerRef
    ) {
        this._form = form;
        this._fields = fields;
        this._smartFilterFields = this.convertToSmartFilterFields(fields);
        console.log('this._smartFilterFields', this._smartFilterFields);
        const result = this.createSection(json.Operation, containerRef, this._form, true);

        this.flatten(json, json.LeftNode, result.containerRef, result.parentForm);
        this.flatten(json, json.RightNode, result.containerRef, result.parentForm);
        console.log('base form', this._form);
    }

    flatten(parent: any, current: any, containerRef: ViewContainerRef, parentForm: FormGroup) {
        if (this.hasProperty(current, 'ComplexId')) {
            if (parent.Operation === current.Operation) {
                this.flatten(parent, current.LeftNode, containerRef, parentForm);
                this.flatten(parent, current.RightNode, containerRef, parentForm);
            } else {
                const result = this.createSection(current.Operation, containerRef, parentForm);
                this.flatten(current, current.LeftNode, result.containerRef, result.parentForm);
                this.flatten(current, current.RightNode, result.containerRef, result.parentForm);
            }
        } else if (this.hasProperty(current, 'ExpressionId')) {
            this.createItem(current, containerRef, parentForm);
        }
    }

    createSection(operator: PepOperatorTypes, containerRef: ViewContainerRef, parentForm: FormGroup, isRoot: boolean = false) {
        const factory = this.resolver.resolveComponentFactory(FilterBuilderSectionComponent);
        let componentRef = containerRef.createComponent(factory);

        let sectionGroup = this.fb.group({
            operator: this.fb.control(operator)
        });
        let counter = 1;
        Object.keys(parentForm.controls).forEach(item => { if (item.includes('section')) { counter++; } });
        let formKey: string = `section${counter}`;
        parentForm.addControl(formKey, sectionGroup);

        componentRef.instance.form = sectionGroup;
        componentRef.instance.isRoot = isRoot;
        componentRef.instance.remove.subscribe(() => {
            parentForm.removeControl(formKey);
            componentRef.destroy();
            this.createOutputJson();
        });

        return {
            containerRef: componentRef.instance.sectionContainer,
            parentForm: sectionGroup
        };
    }

    createItem(current: any, containerRef: ViewContainerRef, parentForm: FormGroup) {
        const factory = this.resolver.resolveComponentFactory(FilterBuilderItemComponent);
        let componentRef = containerRef.createComponent(factory);

        let counter = 1;
        Object.keys(parentForm.controls).forEach(item => { if (item.includes('item')) { counter++; } });
        let formKey: string = `item${counter}`;

        componentRef.instance.fields = this._smartFilterFields;
        if (current) {
            componentRef.instance.filter = this.getFilter(current);
        }
        componentRef.instance.selected = this.getSelectedFilter(current);
        componentRef.instance.formKey = formKey;
        componentRef.instance.parentForm = parentForm;
        componentRef.instance.filterChange.subscribe(() => {
            console.log('filterChange event');
            if (this._form.valid) {
                console.log('form in valid!');
                this.createOutputJson();
            }
        });
        componentRef.instance.remove.subscribe(() => {
            parentForm.removeControl(formKey);
            componentRef.destroy();
            this.createOutputJson();
        });
    }

    getFilter(current: any): IPepSmartFilterData {
        console.log('current item', current);
        //console.log('convertToSmartFilterFields', convertToSmartFilterFields(this._fields));
        let operator: IPepSmartFilterOperator = getSmartBuilderOperator(current.Operation);
        let filterValues: IPepFilterBuilderValues = this.getFilterValues(current, operator);
        //console.log('smart filter', createSmartFilter(current.ApiName, operator, filterValues.first, filterValues.second, filterValues.operationUnit));
        return createSmartFilter(
            current.ApiName,
            operator,
            filterValues.first,
            filterValues.second,
            filterValues.operationUnit
        );
    }

    private getSelectedFilter(current: any): IPepSmartFilterField | null {
        if (current) {
            let item = this._smartFilterFields.find(field => field.id === current.ApiName);
            return item ? item : null;
        } else {
            return this._smartFilterFields?.length > 0 ? this._smartFilterFields[0] : null;
        }
        //return this._smartFilterFields.find(field => field.id === current.ApiName);
    }

    getFilterValues(current: any, operator: IPepSmartFilterOperator) {
        let data: IPepFilterBuilderValues = {
            first: null,
            second: null,
            operationUnit: null
        };

        if (operator === PepSmartFilterOperators.In) { //multi select 
            data.first = current?.Values?.length > 0 ? current.Values : null;
        } else if (
            operator === PepSmartFilterOperators.InTheLast ||
            operator === PepSmartFilterOperators.NotInTheLast ||
            operator === PepSmartFilterOperators.DueIn ||
            operator === PepSmartFilterOperators.NotDueIn
        ) { //operation unit
            data.first = current?.Values?.length > 0 ? current.Values[0] : null;
            if (current?.Values?.length === 2) {
                data.operationUnit = this._operatorUnitMapper.getSmartBuilderOperatorUnit(current.Values[1]);
            }
        } else {
            data.first = current?.Values?.length > 0 ? current.Values[0] : null;
            data.second = current?.Values?.length === 2 ? current.Values[1] : null;
        }

        return data;
    }

    convertToSmartFilterFields(fields: Array<any>) {
        if (fields?.length > 0) {
            return fields.map((field) => {
                return createSmartFilterField(
                    {
                        id: field.ApiName,
                        name: field.DisplayName,
                        options: field.Options
                    } as IPepSmartFilterField
                    , this._typeMapper.getSmartBuilderType(field.Type) as PepSmartFilterType)
            })
        } else {
            return null;
        }
    }

    saveFilterData() {
        console.log('is form valid', this._form.valid);
        console.log('form tree', this._form.value);

        /*this.createOutputItem(this._form.value);
        console.log('this._globalPairs', this._outputJson);
        this._outputJson = undefined;
        this._firstItem = undefined; */
    }

    createOutputJson() {
        this.createOutputItem(this._form.value);
        this._outputJsonSubject.next(this._outputJson);
        this._outputJson = undefined;
        this._firstOutputItem = undefined;
    }

    createOutputItem(current: any) {
        Object.keys(current).forEach(key => {
            if (key.includes('item')) {
                this.addToOutputJson({ itemId: current[key].fieldId }, current.operator);

            } else if (key.includes('section')) {
                this.createOutputItem(current[key]);
            }
        })


    }

    addToOutputJson(item: any, operator: string) {
        //console.log('outputJson', item);
        if (this._outputJson) {
            this._outputJson = {
                left: this._outputJson,
                right: item,
                operation: operator
            };
        } else if (this._firstOutputItem) {
            this._outputJson = { left: this._firstOutputItem, right: item, operation: operator };
        } else {
            this._firstOutputItem = item;
        }

    }

}