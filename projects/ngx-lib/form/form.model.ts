
import { FIELD_TYPE } from '@pepperi-addons/ngx-lib';

export interface IPepFormFieldValueChangeEvent {
    id: string;
    uiObjectKey?: string;
    key: string;
    value: string;
    controlType?: string;
}
export interface IPepFormFieldClickEvent {
    id: string;
    uiObjectKey?: string;
    key: string;
    value: any;
    controlType: string;
    fieldType?: FIELD_TYPE;
    idType?: string;
    which?: any;
    editable?: boolean;
    otherData?: any;
}