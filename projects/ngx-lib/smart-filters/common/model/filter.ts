import {
    IPepSmartFilterOperator,
    IPepSmartFilterOperatorUnit,
} from './operator';

export interface IPepSmartFilterData {
    key: string;
    operator: IPepSmartFilterOperator;
    operatorUnit?: IPepSmartFilterOperatorUnit;
    value: IPepSmartFilterDataValue;
}
export interface IPepSmartFilterDataValue {
    first: any;
    second?: any;
}
