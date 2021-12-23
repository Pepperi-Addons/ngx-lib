import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { } from 'lodash';
import { IPepField, IPepJSONSection, IPepJSONItem } from './common/model/legacy';
import { IPepSmartFilterField } from '../common/model/field';
import { IPepSmartFilterData } from '../common/model/filter';
import { PepSmartFilterOperators, IPepSmartFilterOperator } from '../common/model/operator';
import { PepSmartFilterType } from '../common/model/type'
import { createSmartFilter, createSmartFilterField } from '../common/model/creator';
import { getSmartBuilderOperator } from './common/model/operator';
import { FilterBuilderSectionComponent } from './filter-builder-section/filter-builder-section.component';
import { FilterBuilderItemComponent } from './filter-builder-item/filter-builder-item.component';
import { PepFilterBuilderTypeMap } from './common/model/type-map';
import { getSmartBuilderOperationUnit } from './common/model/operator-unit';
import { PepOutputFilterService } from './common/services/output-filter.service';
import { IPepFilterBuilderValues } from './common/model/filter';
import { PepOperatorTypes } from './common/model/type';

@Injectable({
    providedIn: 'root'
})
export class FilterBuilderService {
    private readonly MAX_STRUCTURE_DEPTH: number = 3;

    private _outputJsonSubject = new BehaviorSubject<any>(null);

    private _smartFilterFields: Array<IPepSmartFilterField>;
    private _form: FormGroup;

    public triggerOutputJson = this._outputJsonSubject.asObservable();

    constructor(private _fb: FormBuilder, private _resolver: ComponentFactoryResolver, private _outputJsonService: PepOutputFilterService) {

    }

    get maxDepth(): number {
        return this.MAX_STRUCTURE_DEPTH;
    }

    /**
     * creates a dynamic filter structure
     * might has a different structure than the input's due to merge of parent-child elements
     * @param json legacy JSON
     * @param fields an array of legacy fields     
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
        const result = this.createSection(json?.Operation ? json.Operation : PepOperatorTypes.And, containerRef, this._form, 0);
        if (json) {
            this.flatten(json, json.LeftNode, result.containerRef, result.parentForm, 1);
            this.flatten(json, json.RightNode, result.containerRef, result.parentForm, 1);
        }
    }

    /**
    * checks if the object contains property
    * @param obj object
    * @param prop property name
    * @returns true if contains, false otherwise
    */
    private hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    /**
     * a recursive function dynamically builds filters structure
     * @param parent legacy complex object
     * @param current child legacy object (either another complex or expression type)
     * @param containerRef parent element
     * @param parentForm parent form
     */
    private flatten(parent: IPepJSONSection, current: IPepJSONSection | IPepJSONItem, containerRef: ViewContainerRef, parentForm: FormGroup, depth: number) {
        if (this.hasProperty(current, 'ComplexId')) {
            const section = current as IPepJSONSection;
            if (parent.Operation === current.Operation) {
                this.flatten(parent, section.LeftNode, containerRef, parentForm, depth);
                this.flatten(parent, section.RightNode, containerRef, parentForm, depth);
            } else {
                const result = this.createSection(section.Operation, containerRef, parentForm, depth);
                this.flatten(section, section.LeftNode, result.containerRef, result.parentForm, depth + 1);
                this.flatten(section, section.RightNode, result.containerRef, result.parentForm, depth + 1);
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
     * @param depth
     * @returns an object containing the current element and current form
     */
    createSection(operator: PepOperatorTypes, containerRef: ViewContainerRef, parentForm: FormGroup, depth: number) {
        const factory = this._resolver.resolveComponentFactory(FilterBuilderSectionComponent);
        const componentRef = containerRef.createComponent(factory);

        const sectionGroup = this._fb.group({
            operator: this._fb.control(operator)
        });
        let counter = 1;
        Object.keys(parentForm.controls).forEach(item => { if (item.includes('section')) { counter++; } });
        const formKey = `section${counter}`;
        parentForm.addControl(formKey, sectionGroup);

        componentRef.instance.depth = depth;
        componentRef.instance.form = sectionGroup;
        componentRef.instance.remove.subscribe(() => {
            parentForm.removeControl(formKey);
            componentRef.destroy();
            this.createOutputJson();
        });
        componentRef.instance.operatorChange.subscribe(() => {
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
        const componentRef = containerRef.createComponent(factory);
        console.log('containerRef', containerRef);
        let counter = 1;
        Object.keys(parentForm.controls).forEach(item => { if (item.includes('item')) { counter++; } });
        const formKey = `item${counter}`;

        componentRef.instance.formKey = formKey;
        componentRef.instance.fields = this._smartFilterFields;
        const selectedField = this.getSelectedField(current);
        if (selectedField) {
            componentRef.instance.selected = selectedField;
            if (current) {
                componentRef.instance.filter = this.getFilter(current, selectedField);
            }
        }
        componentRef.instance.parentForm = parentForm;
        componentRef.instance.filterChange.subscribe(() => {
            this.createOutputJson();
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
        const operator: IPepSmartFilterOperator = getSmartBuilderOperator(current.Operation, field.type);
        if (operator) {
            const filterValues: IPepFilterBuilderValues = this.getFilterValues(current, operator, field);
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
            const item = this._smartFilterFields.find(field => field.id === current.ApiName);
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
        const data: IPepFilterBuilderValues = {
            first: null,
            second: null,
            operationUnit: null
        };

        if (operator === PepSmartFilterOperators.In) { //multi select                        
            //filter keys don't exist on field options
            data.first = current?.Values?.length > 0 ? current.Values.filter(item => {
                return field.options.find(option => option.key === item);
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
        if (this._form.valid) {
            const json = this._outputJsonService.generateJson(this._form.value, this._smartFilterFields);
            this._outputJsonSubject.next(json);
        }
    }



}