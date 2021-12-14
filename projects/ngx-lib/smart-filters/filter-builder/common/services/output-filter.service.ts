import { Injectable } from '@angular/core';
import { IPepJSONItem } from '../model/legacy';
import { getLegacyOperator } from '../model/operator';
import { getLegacyOperationUnit } from '../model/operator-unit';
import { PepSmartFilterOperators, IPepSmartFilterOperator } from '../../../common/model/operator';
import { IPepSmartFilterField } from 'projects/ngx-lib/smart-filters';

@Injectable({
    providedIn: 'root',
})
export class PepOutputFilterService {
    private _json: any;
    private _fields: Array<IPepSmartFilterField>;
    private _firstItem: any;
    private _complexIdCounter: number;
    private _expressionIdCounter: number;

    constructor() {

    }

    /**
     * generates a legacy JSON 
     * @param json UI smart filters structure
     * @param fields smart filter field
     * @returns legacy JSON
     */
    generateJson(json: any, fields: Array<IPepSmartFilterField>) {
        this.initProperties();
        this._fields = fields;
        this.treeWalk(json);
        return this._json ? this._json : this._firstItem ? this._firstItem : null;
    }

    /**
     * reset properties
     */
    private initProperties() {
        this._json = undefined;
        this._firstItem = undefined;
        this._complexIdCounter = 1;
        this._expressionIdCounter = 1;
    }

    /**
     * a recursive function dynamically builds legacy JSON structure
     * @param current UI object represents either a section or filter component
     */
    private treeWalk(current: any) {
        console.log('current tree walk', current);
        Object.keys(current).forEach(key => {
            if (key.includes('item')) {
                this.createItem({
                    ExpressionId: (this._expressionIdCounter++).toString(),
                    ApiName: current[key].fieldId,
                    Operation: getLegacyOperator(current[key].operator, current[key].fieldType),
                    Values: this.getItemValues(current[key])
                } as IPepJSONItem, current.operator);
            } else if (key.includes('section')) {
                this.treeWalk(current[key]);
            }
        });
    }

    /**
     * adds a filter to json and wrap it with complex operator
     * @param item expression item
     * @param operator complex operator 
     */
    private createItem(item: any, operator: string) {
        if (this._json) {
            this._json = this.createSection(this._json, item, operator);
        } else if (this._firstItem) {
            this._json = this.createSection(this._firstItem, item, operator);
        } else {
            this._firstItem = item;
        }

    }

    /**
     * creates a legacy complex object
     * @param left LeftNode object
     * @param right RightNode object
     * @param operator AND/OR operator
     * @returns complex object
     */
    private createSection(left: any, right: any, operator: string) {
        return {
            ComplexId: (this._complexIdCounter++).toString(),
            LeftNode: left,
            RightNode: right,
            Operation: operator
        }
    }

    /**
     * gets legacy filter values object
     * @param current UI filter object's values
     * @returns an array represents legacy values
     */
    private getItemValues(current: any) {
        let values: any[] = [];

        if (current?.values?.first) {
            if (current.operator === PepSmartFilterOperators.In) { //multi select 
                values = this.getFieldKeys(current.values.first, current.fieldId);
            } else if (
                current.operator === PepSmartFilterOperators.InTheLast ||
                current.operator === PepSmartFilterOperators.NotInTheLast ||
                current.operator === PepSmartFilterOperators.DueIn ||
                current.operator === PepSmartFilterOperators.NotDueIn
            ) { //operation unit            
                values.push(current.values.first);
                if (current.operatorUnit) {
                    values.push(getLegacyOperationUnit(current.operatorUnit));
                }
            } else {
                values.push(current.values.first);
                if (current.values.second) {
                    values.push(current.values.second);
                }
            }
        }

        return values;
    }

    /**
     * generates an array of keys of multi-select control
     * @param values an array of the selected values
     * @param id filter's selected field
     * @returns an array of keys
     */
    private getFieldKeys(values: any[], id: string) {
        let keys: any[] = [];

        let field = this._fields.find(item => item.id === id);
        if (field) {
            keys = field?.options.filter(item => values.includes(item.value)).map((option: any) => option.key);
        }

        return keys;
    }
}