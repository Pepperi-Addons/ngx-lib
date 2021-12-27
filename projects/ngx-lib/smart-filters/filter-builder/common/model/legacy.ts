import { KeyValuePair } from '@pepperi-addons/ngx-lib';
import { PepOperatorTypes } from './type';

export interface IPepFilterBuilderField {
    FieldID: string;
    FieldType: string;
    Title: string;
    OptionalValues: Array<KeyValuePair<string>>;
}

export interface IPepJSONSection {
    ComplexId: string;
    Operation: PepOperatorTypes;
    LeftNode?: IPepJSONSection | IPepJSONItem;
    RightNode?: IPepJSONSection | IPepJSONItem;
}

export interface IPepJSONItem {
    ExpressionId: string;
    ApiName: string;
    Operation: string;
    Values: any[];
}

