import { Injectable } from '@angular/core';
import { IPepQuerySection, IPepQueryItem } from '../model/legacy';
import { getLegacyOperator } from '../model/operator';
import { PepOperatorTypes } from '../model/type';
import { getLegacyOperationUnit } from '../model/operator-unit';
import { PepSmartFilterOperators } from '@pepperi-addons/ngx-lib/smart-filters';


@Injectable()
export class PepOutputQueryService {
    private _complexIdCounter: number;
    private _expressionIdCounter: number;

    constructor() {
        //
    }

    /**
     * generates a legacy query structure 
     * @param filters UI smart filters structure     
     * @returns legacy query
     */
    generateQuery(filters: any) {
        this.initParams();

        return this.sectionWalk(filters);
    }

    /**
     * init params
     */
    private initParams() {
        this._complexIdCounter = 1;
        this._expressionIdCounter = 1;
    }

    /**
     * a recursive function dynamically builds legacy query structure
     * @param current UI object represents either a section or filter component
     * @returns section query data
     */
    private sectionWalk(current: any) {
        let section: IPepQuerySection | IPepQueryItem = null;

        Object.keys(current).forEach(key => {
            if (key.includes('item')) {
                section = this.addToSection(section, {
                    ExpressionId: (this._expressionIdCounter++).toString(),
                    ApiName: current[key].smart.fieldId,
                    FieldType: current[key].query.fieldType,
                    Operation: getLegacyOperator(current[key].smart.operator, current[key].smart.fieldType),
                    Values: this.getItemValues(current[key].smart)
                } as IPepQueryItem, current.operator);
            } else if (key.includes('section')) {
                const childSection = this.sectionWalk(current[key]);
                if (childSection) {
                    section = this.addToSection(section, childSection, current.operator);
                }
            }
        });

        return section;
    }

    /**
     * adds a legacy filter object to the current query structure
     * @param section section query data
     * @param item filter item
     * @param operator query operator
     * @returns 
     */
    private addToSection(section: any, item: any, operator: string): any {
        return section ? this.createSection(section, item, operator) : item;
    }

    /**
     * creates a legacy complex object
     * @param left LeftNode object
     * @param right RightNode object
     * @param operator query operator
     * @returns legacy complex object
     */
    private createSection(left: any, right: any, operator: string): IPepQuerySection {
        return {
            ComplexId: (this._complexIdCounter++).toString(),
            LeftNode: left,
            RightNode: right,
            Operation: <PepOperatorTypes>operator
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
                values = current.values.first;
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

}