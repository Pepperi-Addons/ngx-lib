import { IPepSmartFilterOperatorUnit } from '../../../common/model/operator';


export interface IPepFilterBuilderValues {
    first: any;
    second: any;
    operationUnit: IPepSmartFilterOperatorUnit;
}

export interface IPepLegacyJSONSection {
    ComplexId: string;
    Operation: string;
    LeftNode?: IPepLegacyJSONSection | IPepLegacyJSONItem;
    RightNode?: IPepLegacyJSONSection | IPepLegacyJSONItem;
}

export interface IPepLegacyJSONItem {
    ExpressionId: string;
    ApiName: string;
    Operation: string;
    Values?: any[];
}

