import { PepSmartFilterBaseField } from '@pepperi-addons/ngx-lib/smart-filters';

export interface IPepQueryBuilderFieldContainer {
    smart: PepSmartFilterBaseField;
    query: IPepQueryBuilderFieldType;
}

export interface IPepQueryBuilderFieldType {
    fieldType: string;
}