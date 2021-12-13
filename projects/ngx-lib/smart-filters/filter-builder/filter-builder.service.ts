import {
    Injectable, ViewContainerRef, ComponentFactoryResolver,
    ComponentFactory, ComponentRef
} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { } from 'lodash';
import { IPepField, IPepJSONSection, IPepJSONItem } from './common/model/legacy';
import { PepSmartFilterBaseField, IPepSmartFilterField, IPepSmartFilterFieldOption } from '../common/model/field';
import { IPepSmartFilterData } from '../common/model/filter';
import { PepSmartFilterOperators, IPepSmartFilterOperator } from '../common/model/operator';
import { PepSmartFilterType } from '../common/model/type'
import { createSmartFilter, createSmartFilterField } from '../common/model/creator';
//import { getSmartBuilderType } from './common/model/type';
//import { convertToSmartFilterFields } from './common/model/field';
import { getSmartBuilderOperator } from './common/model/operator';
import { FilterBuilderSectionComponent } from './filter-builder-section/filter-builder-section.component';
import { FilterBuilderItemComponent } from './filter-builder-item/filter-builder-item.component';
import { PepFilterBuilderTypeMap } from './common/model/type-map';
import { getSmartBuilderOperationUnit } from './common/model/operator-unit';
//import { PepFilterBuilderOperatorUnitMap } from './common/model/operator-unit-map';
import { PepOutputFilterService } from './common/services/output-filter';
import { IPepFilterBuilderValues } from './common/model/filter';
import { PepOperatorTypes } from './common/model/type';



@Injectable({
    providedIn: 'root'
})
export class FilterBuilderService {
    private _outputJsonSubject = new BehaviorSubject<any>(null);
    private _smartFilterFields: Array<IPepSmartFilterField>;
    //private _typeMapper: PepFilterBuilderTypeMap;
    private _form: FormGroup;

    public triggerOutputJson = this._outputJsonSubject.asObservable();

    constructor(private _fb: FormBuilder, private _resolver: ComponentFactoryResolver, private _outputJsonService: PepOutputFilterService) {
        //this._typeMapper = new PepFilterBuilderTypeMap();
    }

    /*
    get Form(): FormGroup {
        return this._form;
    } */

    /**
     * checks if object contains property
     * @param obj object
     * @param prop property name
     * @returns true if contains, false otherwise
     */
    private hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    /**
     * creates a dynamic filter structure
     * might be different than the input structure due to merge of parent-child elements
     * @param json legacy JSON
     * @param fields an array of legacy fields
     * @param form a form contains filters fields
     * @param containerRef reference to root element
     */
    createFilterTree(
        json: IPepJSONSection | null,
        fields: Array<IPepField>,
        form: FormGroup,
        containerRef: ViewContainerRef
    ) {
        this._form = form;
        this._smartFilterFields = this.convertToSmartFilterFields(fields);
        //console.log('this._smartFilterFields', this._smartFilterFields);
        const result = this.createSection(json?.Operation ? json.Operation : PepOperatorTypes.And, containerRef, this._form, true);

        if (json) {
            this.flatten(json, json.LeftNode, result.containerRef, result.parentForm);
            this.flatten(json, json.RightNode, result.containerRef, result.parentForm);
        }
        //console.log('base form', this._form);
    }

    /**
     * a recursive function dynamically builds filters structure
     * @param parent legacy complex object
     * @param current child legacy object (either another complex or expression type)
     * @param containerRef parent element
     * @param parentForm parent form
     */
    private flatten(parent: IPepJSONSection, current: IPepJSONSection | IPepJSONItem, containerRef: ViewContainerRef, parentForm: FormGroup) {
        if (this.hasProperty(current, 'ComplexId')) {
            const section = current as IPepJSONSection;
            if (parent.Operation === current.Operation) {
                this.flatten(parent, section.LeftNode, containerRef, parentForm);
                this.flatten(parent, section.RightNode, containerRef, parentForm);
            } else {
                const result = this.createSection(section.Operation, containerRef, parentForm);
                this.flatten(section, section.LeftNode, result.containerRef, result.parentForm);
                this.flatten(section, section.RightNode, result.containerRef, result.parentForm);
            }
        } else if (this.hasProperty(current, 'ExpressionId')) {
            this.createItem(current as IPepJSONItem, containerRef, parentForm);
        }
    }

    /**
     * creates a container object of two or more child filter items
     * @param operator AND/OR operator
     * @param containerRef parent element
     * @param parentForm parent form
     * @param isRoot true if root element, false othersie
     * @returns an object containing the current element and current form
     */
    createSection(operator: PepOperatorTypes, containerRef: ViewContainerRef, parentForm: FormGroup, isRoot: boolean = false) {
        const factory = this._resolver.resolveComponentFactory(FilterBuilderSectionComponent);
        let componentRef = containerRef.createComponent(factory);

        let sectionGroup = this._fb.group({
            operator: this._fb.control(operator)
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

    /**
     * creates a component represents filter item (leaf element - has no childs)
     * @param current filter legacy element
     * @param containerRef parent element
     * @param parentForm parent form
     */
    createItem(current: IPepJSONItem, containerRef: ViewContainerRef, parentForm: FormGroup) {
        const factory = this._resolver.resolveComponentFactory(FilterBuilderItemComponent);
        let componentRef = containerRef.createComponent(factory);

        let counter = 1;
        Object.keys(parentForm.controls).forEach(item => { if (item.includes('item')) { counter++; } });
        let formKey: string = `item${counter}`;

        componentRef.instance.fields = this._smartFilterFields;
        const selectedField = this.getSelectedField(current);
        if (selectedField) {
            componentRef.instance.selected = selectedField;
            if (current) {
                componentRef.instance.filter = this.getFilter(current, selectedField);
            }
        }
        componentRef.instance.formKey = formKey;
        componentRef.instance.parentForm = parentForm;
        componentRef.instance.filterChange.subscribe(() => {
            if (this._form.valid) {
                this.createOutputJson();
            }
        });
        componentRef.instance.remove.subscribe(() => {
            parentForm.removeControl(formKey);
            componentRef.destroy();
            this.createOutputJson();
        });
    }

    /**
     * creates a smart filter object
     * @param current filter legacy element
     * @param field filter's selected field
     * @returns smart filter object
     */
    private getFilter(current: IPepJSONItem, field: any): IPepSmartFilterData | null {
        let operator: IPepSmartFilterOperator = getSmartBuilderOperator(current.Operation, field.type);
        if (operator) {
            let filterValues: IPepFilterBuilderValues = this.getFilterValues(current, operator, field);
            return createSmartFilter(
                current.ApiName,
                operator,
                filterValues.first,
                filterValues.second,
                filterValues.operationUnit
            );
        } else {
            return null;
        }
    }

    /**
     * get smart filter field
     * @param current filter legacy element
     * @returns smart filter field, if not found returns the first fields
     */
    private getSelectedField(current: IPepJSONItem): IPepSmartFilterField | null {
        if (current) {
            let item = this._smartFilterFields.find(field => field.id === current.ApiName);
            return item ? item : this._smartFilterFields?.length > 0 ? this._smartFilterFields[0] : null;
        } else {
            return this._smartFilterFields?.length > 0 ? this._smartFilterFields[0] : null;
        }
    }

    /**
     * gets smart filter's values data
     * @param current filter legacy element
     * @param operator smart filter operator
     * @param field filter's selected field
     * @returns object contains the filter values data
     */
    private getFilterValues(current: IPepJSONItem, operator: IPepSmartFilterOperator, field: any) {
        let data: IPepFilterBuilderValues = {
            first: null,
            second: null,
            operationUnit: null
        };

        if (operator === PepSmartFilterOperators.In) { //multi select             
            data.first = current?.Values?.length > 0 ? current.Values.map(value => {
                const item = field.options.find((option) => option.key === value);
                return item?.value ? item.value : null;
            }) : null;
        } else if (
            operator === PepSmartFilterOperators.InTheLast ||
            operator === PepSmartFilterOperators.NotInTheLast ||
            operator === PepSmartFilterOperators.DueIn ||
            operator === PepSmartFilterOperators.NotDueIn
        ) { //operation unit
            data.first = current?.Values?.length > 0 ? current.Values[0] : null;
            if (current?.Values?.length === 2) {
                data.operationUnit = getSmartBuilderOperationUnit(current.Values[1]);
            }
        } else {
            data.first = current?.Values?.length > 0 ? current.Values[0] : null;
            data.second = current?.Values?.length === 2 ? current.Values[1] : null;
        }

        return data;
    }

    /**
     * converts legacy fields to smart filter fields
     * @param fields legacy fields array
     * @returns smart filter fields array
     */
    private convertToSmartFilterFields(fields: Array<IPepField>) {
        if (fields?.length > 0) {
            const typeMapper = new PepFilterBuilderTypeMap();
            return fields.map((field) => {
                return createSmartFilterField(
                    {
                        id: field.FieldID,
                        name: field.Title,
                        options: field.OptionalValues?.map(option => {
                            return {
                                key: option.Key,
                                value: option.Value
                            }
                        })
                    } as IPepSmartFilterField
                    , typeMapper.getSmartBuilderType(field.FieldType) as PepSmartFilterType)
            })
        } else {
            return [];
        }
    }

    /**
     * creates a legacy output JSON 
     */
    private createOutputJson() {
        const json = this._outputJsonService.generateJson(this._form.value, this._smartFilterFields);
        this._outputJsonSubject.next(json);
    }

}