import { Injectable, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { } from 'lodash';
import { IPepQueryBuilderField, IPepQuerySection, IPepQueryItem } from '../../common/model/legacy';
import { PepQueryBuilderService } from '../../query-builder.service';
import { PepOutputQueryService } from '../../common/services/output-query.service';
import { PepQueryBuilderSectionComponent } from '../../query-builder-section/query-builder-section.component';
import { PepQueryBuilderItemComponent } from '../../query-builder-item/query-builder-item.component';
import { IPepQueryBuilderFieldContainer } from '../../common/model/field';
import { PepQueryBuilderTypeMap } from '../../common/model/type-map';
import { PepOperatorTypes } from '../../common/model/type';

const MAX_STRUCTURE_DEPTH = 3;

@Injectable()
export class PepQueryStructureService {
    private _outputQuery$ = new BehaviorSubject<IPepQuerySection | IPepQueryItem>(null);

    private _smartFilterFields: Array<IPepQueryBuilderFieldContainer>;
    private _variableFields: any = {};
    private _form: FormGroup;
    private _maxStructureDepth = MAX_STRUCTURE_DEPTH;

    private _cmpRefMap: Map<string, ComponentRef<any>> = new Map();

    public outputQuery$ = this._outputQuery$.asObservable();

    constructor(
        private _resolver: ComponentFactoryResolver,
        private _outputQueryService: PepOutputQueryService,
        private _queryBuilderService: PepQueryBuilderService) {

    }

    set maxDepth(value) {
        this._maxStructureDepth = value;
    }

    get maxDepth() {
        return this._maxStructureDepth;
    }

    set fields(list: Array<IPepQueryBuilderField>) {
        this._smartFilterFields = this._queryBuilderService.convertToSmartFilterFields(list);
    }

    get hasFields(): boolean {
        return this._smartFilterFields?.length > 0;
    }

    set variableFields(list: Array<IPepQueryBuilderField>) {
        if (list?.length) {
            const typeMapper = new PepQueryBuilderTypeMap();
            list.forEach(field => {
                const fieldType = this.convertSmartFilterComponentType(typeMapper.getSmartFilterType(field.FieldType));
                if (this.hasProperty(this._variableFields, fieldType)) {
                    this._variableFields[fieldType].push(field.FieldID);
                } else {
                    this._variableFields[fieldType] = [field.FieldID];
                }
            });
        }
    }

    set form(value: FormGroup) {
        this._form = value;
    }

    get form() {
        return this._form;
    }

    /**
     * builds a dynamic UI query structure
     * might has a different structure than the query's due to parent-child elements merge
     * @param query legacy query     
     * @param containerRef reference to root element
     */
    buildQueryStructure(
        query: IPepQuerySection | IPepQueryItem,
        containerRef: ViewContainerRef
    ) {
        // Remove all the components from the query builder.
        this._cmpRefMap.forEach((value: ComponentRef<any>, key: string) => {
            // console.log(key, value);
            // value.instance.remove();
            if (value.instance.parentForm) {
                value.instance.parentForm.removeControl(key);
            }
            value.destroy();
            this._cmpRefMap.delete(key);
        });
        
        // Clear containerRef
        containerRef.clear();

        //update root operator        
        if (this.hasProperty(query, 'ComplexId') &&
            query?.Operation &&
            query.Operation !== this._form.get('operator').value) {
            this._form.get('operator').setValue(query.Operation);
        }
        this.flatten(this._form.get('operator').value, query, containerRef, this._form, 0);
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
     * a recursive function dynamically builds UI filters structure
     * @param parentOperator parent legacy complex operator
     * @param current child legacy object (either another complex or expression type)
     * @param containerRef parent element
     * @param parentForm parent form
     */
    private flatten(parentOperator: string, current: IPepQuerySection | IPepQueryItem, containerRef: ViewContainerRef, parentForm: FormGroup, depth: number) {
        if (this.hasProperty(current, 'ComplexId')) {
            const section = current as IPepQuerySection;
            if (parentOperator === current.Operation) {
                this.flatten(current.Operation, section.LeftNode, containerRef, parentForm, depth);
                this.flatten(current.Operation, section.RightNode, containerRef, parentForm, depth);
            } else {
                const result = this.createSection(section.Operation, containerRef, parentForm, depth + 1);
                this.flatten(section.Operation, section.LeftNode, result.containerRef, result.parentForm, depth + 1);
                this.flatten(section.Operation, section.RightNode, result.containerRef, result.parentForm, depth + 1);
            }
        } else if (this.hasProperty(current, 'ExpressionId')) {
            this.createItem(current as IPepQueryItem, containerRef, parentForm);
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
        const factory = this._resolver.resolveComponentFactory(PepQueryBuilderSectionComponent);
        const componentRef = containerRef.createComponent(factory);

        // const sectionGroup = this._fb.group({
        //     operator: this._fb.control(operator)
        // });
        const sectionGroup = new FormGroup({
            operator: new FormControl(operator)
        });
        let counter = 1;
        Object.keys(parentForm.controls).forEach(item => { if (item.includes('section')) { counter++; } });
        const formKey = `section${counter}`;
        parentForm.addControl(formKey, sectionGroup);

        componentRef.instance.form = sectionGroup;
        componentRef.instance.depth = {
            current: depth,
            max: this._maxStructureDepth
        };
        componentRef.instance.createSection.subscribe(() => {
            const section = this.createSection(PepOperatorTypes.And, componentRef.instance.sectionContainer, sectionGroup, depth + 1);
            this.createItem(null, section.containerRef, section.parentForm);
        });
        componentRef.instance.createItem.subscribe(() => {
            this.createItem(null, componentRef.instance.sectionContainer, sectionGroup);
        });
        componentRef.instance.remove.subscribe(() => {
            parentForm.removeControl(formKey);
            componentRef.destroy();
            this.createOutputQuery();
            if (this._cmpRefMap.has(formKey)) {
                this._cmpRefMap.delete(formKey);
            }
        });
        componentRef.instance.operatorChange.subscribe(() => {
            this.createOutputQuery();
        });

        // Add this to remove all the components when fields changes.
        this._cmpRefMap.set(formKey, componentRef);

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
    createItem(current: IPepQueryItem, containerRef: ViewContainerRef, parentForm: FormGroup) {
        const factory = this._resolver.resolveComponentFactory(PepQueryBuilderItemComponent);
        const componentRef = containerRef.createComponent(factory);
        
        let counter = 1;
        Object.keys(parentForm.controls).forEach(item => { if (item.includes('item')) { counter++; } });
        const formKey = `item${counter}`;

        componentRef.instance.formKey = formKey;
        componentRef.instance.fields = this._smartFilterFields;
        componentRef.instance.variableFields = this._variableFields;
        const selectedField = this.getSelectedField(current);
        if (selectedField) {
            componentRef.instance.selected = selectedField;
            if (current) {
                componentRef.instance.filter = this._queryBuilderService.getFilter(current, selectedField.smart);
            }
        }
        componentRef.instance.parentForm = parentForm;
        componentRef.instance.filterChange.subscribe(() => {
            this.createOutputQuery();
        });
        componentRef.instance.remove.subscribe(() => {
            parentForm.removeControl(formKey);
            componentRef.destroy();
            this.createOutputQuery();
            if (this._cmpRefMap.has(formKey)) {
                this._cmpRefMap.delete(formKey);
            }
        });

        // Add this to remove all the components when fields changes.
        this._cmpRefMap.set(formKey, componentRef);
    }

    /**
     * get smart filter field
     * @param current filter legacy element
     * @returns smart filter field, if not found returns the first field
     */
    private getSelectedField(current: IPepQueryItem): IPepQueryBuilderFieldContainer | null {
        if (current) {
            const item = this._smartFilterFields.find(field => field.smart.id === current.ApiName);
            return item ? item : this._smartFilterFields?.length > 0 ? this._smartFilterFields[0] : null;
        } else {
            return this._smartFilterFields?.length > 0 ? this._smartFilterFields[0] : null;
        }
    }

    private convertSmartFilterComponentType(type: string) {
        switch (type) {
            case 'int':
            case 'currency':
            case 'real':
            case 'percentage':
                return 'number';
            case 'date-time':
                return 'date';
            default:
                return type;
        }
    }

    /**
     * creates a legacy output query 
     */
    createOutputQuery() {
        if (this._form.valid) {
            const query = this._outputQueryService.generateQuery(this._form.value);
            this._outputQuery$.next(query);
        }
    }

}