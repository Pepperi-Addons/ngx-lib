import { Injectable } from '@angular/core';
import { 
    IPepQueryBuilderField, 
    IPepQueryItem 
} from './common/model/legacy';
import {    
    IPepSmartFilterData,
    PepSmartFilterOperators,
    PepSmartFilterAdditionalOperators,
    IPepSmartFilterOperator,
    PepSmartFilterType,
    createSmartFilter,
    createSmartFilterField,
    PepSmartFilterBaseField
} from '@pepperi-addons/ngx-lib/smart-filters';
import { getSmartFilterOperator } from './common/model/operator';
import { IPepQueryBuilderFieldContainer } from './common/model/field';
import { PepQueryBuilderTypeMap } from './common/model/type-map';
import { getSmartFilterOperationUnit } from './common/model/operator-unit';
import { IPepQueryBuilderValues } from './common/model/filter';


@Injectable({
    providedIn: 'root'
})
export class PepQueryBuilderService {

    constructor() {
        //
    }

    /**
     * creates a smart filter object
     * @param current filter legacy element
     * @param field filter's selected field
     * @returns smart filter object
     */
    getFilter(current: IPepQueryItem, field: PepSmartFilterBaseField): IPepSmartFilterData | null {        
        const operator: IPepSmartFilterOperator = getSmartFilterOperator(current.Operation, field.type, current.ValueType || 'Static');
        if (operator) {
            const filterValues: IPepQueryBuilderValues = this.getFilterValues(current, operator, field);
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
     * converts legacy fields to smart filter fields
     * @param fields legacy fields array
     * @returns smart filter fields array
     */
    convertToSmartFilterFields(fields: Array<IPepQueryBuilderField>): Array<IPepQueryBuilderFieldContainer> {
        if (fields?.length > 0) {
            const typeMapper = new PepQueryBuilderTypeMap();

            return fields.map((field) => {
                return {
                    smart: createSmartFilterField(
                        {
                            id: field.FieldID,
                            name: field.Title,
                            options: field.OptionalValues?.map(option => {
                                return {
                                    key: option.Key,
                                    value: option.Value
                                }
                            })
                        }, typeMapper.getSmartFilterType(field.FieldType) as PepSmartFilterType),
                    query: {
                        fieldType: field.FieldType
                    }
                }
            })
        } else {
            return [];
        }
    }
    
    /**
     * gets smart filter's values data
     * @param current filter legacy element
     * @param operator smart filter operator
     * @param field filter's selected field
     * @returns object contains the filter values data
     */
     private getFilterValues(current: IPepQueryItem, operator: IPepSmartFilterOperator, field: any) {
        const data: IPepQueryBuilderValues = {
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
            operator === PepSmartFilterAdditionalOperators.InTheLastCalendar ||
            operator === PepSmartFilterOperators.NotInTheLast ||
            operator === PepSmartFilterAdditionalOperators.NotInTheLastCalendar ||
            operator === PepSmartFilterOperators.DueIn ||
            operator === PepSmartFilterOperators.NotDueIn
        ) { //operation unit
            data.first = current?.Values?.length > 0 ? current.Values[0] : null;
            if (current?.Values?.length === 2) {
                data.operationUnit = getSmartFilterOperationUnit(current.Values[1]);
            }
        } else {
            data.first = current?.Values?.length > 0 ? current.Values[0] : null;
            data.second = current?.Values?.length === 2 ? current.Values[1] : null;
        }

        return data;
    }

}