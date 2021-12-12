import { Injectable } from '@angular/core';
import { IPepJSONItem } from '../model/legacy';
import { getLegacyOperator } from '../model/operator';

@Injectable({
    providedIn: 'root',
})
export class PepOutputFilterService {
    private _json: any;
    private _firstItem: any;
    private _complexIdCounter: number;
    private _expressionIdCounter: number;

    constructor() {

    }

    generateJson(json: any) {
        this.initProperties();
        this.treeWalk(json);
        return this._json;
    }

    private initProperties() {
        this._json = undefined;
        this._firstItem = undefined;
        this._complexIdCounter = 1;
        this._expressionIdCounter = 1;
    }

    private treeWalk(current: any) {
        console.log('current tree walk', current);
        Object.keys(current).forEach(key => {
            if (key.includes('item')) {
                this.createItem({
                    ExpressionId: (this._expressionIdCounter++).toString(),
                    ApiName: current[key].fieldId,
                    Operation: getLegacyOperator(current[key].operator, current[key].fieldType),
                    //TODO - Operation and Values
                } as IPepJSONItem, current.operator);
            } else if (key.includes('section')) {
                this.treeWalk(current[key]);
            }
        });
    }

    /**
     * add a filter to json and wrap it with complex operator
     * @param item expression item
     * @param operator complex operator 
     */
    private createItem(item: any, operator: string) {
        if (this._json) {
            this._json = this.createSection(this._json, item, operator);/* = {
                ComplexId: (this._complexIdCounter++).toString(),
                LeftNode: this._json,
                RightNode: item,
                Operation: operator
            }; */
        } else if (this._firstItem) {
            this._json = this.createSection(this._firstItem, item, operator); /*{
                ComplexId: (this._complexIdCounter++).toString(),
                LeftNode: this._firstItem,
                RightNode: item,
                Operation: operator
            };*/
        } else {
            this._firstItem = item;
        }

    }

    private createSection(left: any, right: any, operator: string) {
        return {
            ComplexId: (this._complexIdCounter++).toString(),
            LeftNode: left,
            RightNode: right,
            Operation: operator
        }
    }
}