import {
    IPepSmartFilterOperator,
    IPepSmartFilterOperatorUnit,
} from './operator';

export interface IPepSmartFilterData {
    fieldId: string;
    operator: IPepSmartFilterOperator;
    operatorUnit?: IPepSmartFilterOperatorUnit;
    value: IPepSmartFilterDataValue;
}
export interface IPepSmartFilterDataValue {
    first: any;
    second?: any;
}
