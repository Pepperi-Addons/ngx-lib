import { KeyValuePair } from '@pepperi-addons/ngx-lib';
import { PepOperatorTypes } from './type';

export interface IPepQueryBuilderField {
    FieldID: string;
    FieldType: string;
    Title: string;
    OptionalValues: Array<KeyValuePair<string>>;
}

export interface IPepQuerySection {
    ComplexId: string;
    Operation: PepOperatorTypes;
    LeftNode?: IPepQuerySection | IPepQueryItem;
    RightNode?: IPepQuerySection | IPepQueryItem;
}

export interface IPepQueryItem {
    ExpressionId: string;
    ApiName: string;
    Operation: string;
    Values: any[];
}

