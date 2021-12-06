import {
    Injectable, Renderer2, ViewContainerRef, RendererFactory2, ComponentFactoryResolver,
    ComponentFactory, ComponentRef
} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
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

@Injectable({
    providedIn: 'root'
})
export class FilterBuilderService {
    private renderer: Renderer2;
    private rootDiv: ViewContainerRef;
    private _counter: number;
    private _json: any;
    private _fields: Array<any>;
    private _smartFilterFields: Array<IPepSmartFilterField>
    private _typeMapper: PepFilterBuilderTypeMap;
    private _operatorUnitMapper: PepFilterBuilderOperatorUnitMap;
    private _hostView: ComponentRef<FilterBuilderSectionComponent>;
    private _form: FormGroup;
    //private _filters: Array<IPepSmartFilterData>;

    constructor(private rendererFactory: RendererFactory2, private fb: FormBuilder, private resolver: ComponentFactoryResolver) {
        this.renderer = rendererFactory.createRenderer(null, null);
        this._typeMapper = new PepFilterBuilderTypeMap();
        this._operatorUnitMapper = new PepFilterBuilderOperatorUnitMap();
    }

    hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    setupForm() {
        this._form = this.fb.group({});
    }

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
        //filters: Array<IPepSmartFilterData>,        
        containerRef: ViewContainerRef
    ) {
        this.setupForm();
        this._fields = fields;
        this._smartFilterFields = this.convertToSmartFilterFields(fields);
        //this._filters = filters;
        //this._counter = 0;    
        const result = this.createSection(json.Operation, containerRef, this._form);

        this.flatten(json, json.LeftNode, result.containerRef, result.parentForm);
        this.flatten(json, json.RightNode, result.containerRef, result.parentForm);

    }

    flatten(parent: any, current: any, containerRef: ViewContainerRef, parentForm: FormGroup) {
        if (this.hasProperty(current, 'ComplexId')) {
            if (parent.Operation === current.Operation) {
                this.flatten(parent, current.LeftNode, containerRef, parentForm);
                this.flatten(parent, current.RightNode, containerRef, parentForm);
            } else {
                /*let counter: number = 0;
                Object.keys(ui).forEach(item => { if (item.includes('Node')) { counter++; } });
                ui['Node' + counter] = {
                    Operator: current.Operation,
                }; */
                const result = this.createSection(current.Operation, containerRef, parentForm);
                this.flatten(current, current.LeftNode, result.containerRef, result.parentForm);
                this.flatten(current, current.RightNode, result.containerRef, result.parentForm);
            }
        } else if (this.hasProperty(current, 'ExpressionId')) {
            this.createItem(current, containerRef, parentForm);
            /*let counter: number = 0;
            Object.keys(ui).forEach(item => { if (item.includes('FIlter')) { counter++; } });
            ui['FIlter' + counter] = {
                FieldName: current.ApiName,
                Operation: current.Operation,
                Values: current.Values
            }; */
        }
    }

    createSection(operator: string, containerRef: ViewContainerRef, parentForm: FormGroup) {
        const factory: ComponentFactory<FilterBuilderSectionComponent> = this.resolver.resolveComponentFactory(FilterBuilderSectionComponent);
        let componentRef = containerRef.createComponent(factory);

        let sectionGroup = this.fb.group({
            operator: this.fb.control(operator)
        });

        let counter = 1;
        Object.keys(parentForm.controls).forEach(item => { if (item.includes('section')) { counter++; } });

        parentForm.addControl('section' + counter, sectionGroup);
        //parentForm.get('section' + containerRef.length);

        componentRef.instance.operator = operator;
        //componentRef.instance.index = containerRef.length;
        componentRef.instance.form = sectionGroup;

        /*let counter = 0;
        Object.keys(containerRef).forEach(item => { if (item.includes('section')) { counter++; } });*/
        //console.log('counter', containerRef.length);

        return {
            containerRef: componentRef.instance.sectionContainer,
            parentForm: sectionGroup
        };
        /*
        const section = this.renderer.createElement('div');
        this.renderer.setProperty(section, 'id', 'section-id-' + this._counter++);
        this.renderer.appendChild(parentUiElement, section);
        return section; */
    }

    createItem(current: any, containerRef: ViewContainerRef, parentForm: FormGroup) {
        const factory: ComponentFactory<FilterBuilderItemComponent> = this.resolver.resolveComponentFactory(FilterBuilderItemComponent);
        let componentRef = containerRef.createComponent(factory);

        let itemGroup = this.fb.group({
            fields: this.fb.control(this._smartFilterFields),
            filter: this.fb.control(this.getFilter(current)),
            selected: this.fb.control(this.getSelectedFilter(current))
        });

        let counter = 1;
        Object.keys(parentForm.controls).forEach(item => { if (item.includes('item')) { counter++; } });

        //console.log('containerRef', counter);

        parentForm.addControl('item' + counter, itemGroup);

        componentRef.instance.fields = this._smartFilterFields;
        componentRef.instance.filter = this.getFilter(current);
        componentRef.instance.selected = this.getSelectedFilter(current);
        componentRef.instance.form = itemGroup;

        /*const item = this.renderer.createElement('div');
        this.renderer.setProperty(item, 'id', 'item-id-' + this._counter++);
        this.renderer.appendChild(parentUiElement, item);
        return item; */
    }

    getFilter(current: any): IPepSmartFilterData {
        console.log('current item', current);
        //console.log('convertToSmartFilterFields', convertToSmartFilterFields(this._fields));
        let operator: IPepSmartFilterOperator = getSmartBuilderOperator(current.Operation);
        let filterValues: IPepFilterBuilderValues = this.getFilterValues(current, operator);
        console.log('smart filter', createSmartFilter(current.ApiName, operator, filterValues.first, filterValues.second, filterValues.operationUnit));
        return createSmartFilter(
            current.ApiName,
            operator,
            filterValues.first,
            filterValues.second,
            filterValues.operationUnit
        );
        //return createSmartFilter(current.ApiName, PepSmartFilterOperators.In, ['value 1', 'value 5', 'value 10', 'value 11']);
        /*return {
            fieldId: current.ApiName,
            operator: PepSmartFilterOperators.In,//fetchOperator from model/operator.ts
            value: {
                first: ['value 1', 'value 5', 'value 10', 'value 11']
            }
        } as IPepSmartFilterData*/
    }

    getSelectedFilter(current: any): IPepSmartFilterField | undefined {
        return this._smartFilterFields.find(field => field.id === current.ApiName);
    }

    getFilterValues(current: any, operator: IPepSmartFilterOperator) {
        let data: IPepFilterBuilderValues = {
            first: null,
            second: null,
            operationUnit: null
        };

        if (operator?.componentType.includes('multi-select')) { //multi select 
            data.first = current?.Values?.length > 0 ? current.Values : null;
        } else if (
            operator === PepSmartFilterOperators.InTheLast ||
            operator === PepSmartFilterOperators.NotInTheLast ||
            operator === PepSmartFilterOperators.DueIn ||
            operator === PepSmartFilterOperators.NotDueIn
            /*operator?.componentType.includes('date') && (
                operator.id === 'inTheLast' ||
                operator.id === 'notInTheLast' ||
                operator.id === 'dueIn' ||
                operator.id === 'notDueIn'
        )*/
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
        console.log('form tree', this._form.value);
    }

}