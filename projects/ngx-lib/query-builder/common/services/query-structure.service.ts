import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { } from 'lodash';
import { IPepQueryBuilderField, IPepQuerySection, IPepQueryItem } from '../../common/model/legacy';
import {   
    IPepSmartFilterData,
    PepSmartFilterOperators,
    IPepSmartFilterOperator,
    PepSmartFilterType,
    createSmartFilter,
    createSmartFilterField,
    PepSmartFilterBaseField
} from '@pepperi-addons/ngx-lib/smart-filters';
import { PepQueryBuilderService } from '../../query-builder.service';
import { PepOutputQueryService } from '../../common/services/output-query.service';
import { getSmartFilterOperator } from '../../common/model/operator';
import { PepQueryBuilderSectionComponent } from '../../query-builder-section/query-builder-section.component';
import { PepQueryBuilderItemComponent } from '../../query-builder-item/query-builder-item.component';
import { IPepQueryBuilderFieldContainer } from '../../common/model/field';
import { PepQueryBuilderTypeMap } from '../../common/model/type-map';
import { getSmartBuilderOperationUnit } from '../../common/model/operator-unit';
import { IPepQueryBuilderValues } from '../../common/model/filter';
import { PepOperatorTypes } from '../../common/model/type';

const MAX_STRUCTURE_DEPTH = 3;

@Injectable()
export class PepQueryStructureService {
    private _outputQuery$ = new BehaviorSubject<IPepQuerySection | IPepQueryItem>(null);

    private _smartFilterFields: Array<IPepQueryBuilderFieldContainer>;
    private _form: FormGroup;
    private _maxStructureDepth = MAX_STRUCTURE_DEPTH;

    public outputQuery$ = this._outputQuery$.asObservable();

    constructor(
        private _fb: FormBuilder, 
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
                const result = this.createSection(section.Operation, containerRef, parentForm, depth);
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

        const sectionGroup = this._fb.group({
            operator: this._fb.control(operator)
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
        });
        componentRef.instance.operatorChange.subscribe(() => {
            this.createOutputQuery();
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
    createItem(current: IPepQueryItem, containerRef: ViewContainerRef, parentForm: FormGroup) {
        const factory = this._resolver.resolveComponentFactory(PepQueryBuilderItemComponent);
        const componentRef = containerRef.createComponent(factory);

        let counter = 1;
        Object.keys(parentForm.controls).forEach(item => { if (item.includes('item')) { counter++; } });
        const formKey = `item${counter}`;

        componentRef.instance.formKey = formKey;
        componentRef.instance.fields = this._smartFilterFields;
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
        });
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