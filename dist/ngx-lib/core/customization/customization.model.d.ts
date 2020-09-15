import { FIELD_TYPE } from '../common/model/api.model';
export declare enum LAYOUT_TYPE {
    PepperiForm = 0,
    PepperiCard = 1,
    PepperiTable = 2,
    Editmodal = 3
}
export declare enum STYLE_TYPE {
    Weak = "weak",
    Regular = "regular",
    Strong = "strong"
}
export declare class PepperiOption {
    Key: string;
    Value: string;
}
export declare class PepperiFieldBase {
    value: any;
    formattedValue: any;
    additionalValue: string;
    notificationInfo: any;
    key: string;
    label: string;
    accessory: string;
    required: boolean;
    readonly: boolean;
    disabled: boolean;
    order: number;
    type: string;
    controlType: string;
    placeholder: string;
    hidden: boolean;
    row: number;
    rowSpan: number;
    col: number;
    colSpan: number;
    xAlignment: number;
    yAlignment: number;
    groupFields: PepperiFieldBase[];
    maxFieldCharacters: number;
    minValue: number;
    maxValue: number;
    textColor: string;
    updatedDataCount: number;
    lastFocusField: any;
    options: PepperiOption[];
    constructor(options?: {
        value?: any;
        formattedValue?: any;
        additionalValue?: string;
        notificationInfo?: any;
        key?: string;
        label?: string;
        accessory?: string;
        required?: boolean;
        readonly?: boolean;
        disabled?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        placeholder?: string;
        hidden?: string;
        row?: number;
        rowSpan?: number;
        col?: number;
        colSpan?: number;
        xAlignment?: number;
        yAlignment?: number;
        maxFieldCharacters?: number;
        minValue?: number;
        maxValue?: number;
        textColor?: string;
        lastFocusField?: any;
    });
    updateField(updatedField: any, canEditObject: boolean, lastFocusField?: any): void;
}
export declare class PepperiPlaceholderField extends PepperiFieldBase {
    controlType: string;
    constructor(options?: any);
}
export declare class PepperiSeparatorField extends PepperiFieldBase {
    controlType: string;
    constructor(options?: any);
}
export declare class PepperiButtonField extends PepperiFieldBase {
    controlType: string;
    referenceObjectType: any;
    referenceObjectSubType: string;
    referenceObjectInternalType: string;
    constructor(options?: any);
}
export declare class PepperiAttachmentField extends PepperiFieldBase {
    controlType: string;
    constructor(options?: any);
}
export declare class PepperiIndicatorsField extends PepperiFieldBase {
    controlType: string;
    constructor(options?: any);
}
export declare class PepperiTextboxField extends PepperiFieldBase {
    controlType: string;
    constructor(options?: any);
}
export declare class PepperiTextareaField extends PepperiFieldBase {
    controlType: string;
    constructor(options?: any);
}
export declare class PepperiRichHtmlTextareaField extends PepperiFieldBase {
    controlType: string;
    constructor(options?: any);
}
export declare class PepperiSignatureField extends PepperiFieldBase {
    controlType: string;
    options: PepperiOption[];
    constructor(options?: any);
}
export declare class PepperiImageField extends PepperiFieldBase {
    controlType: string;
    hasCampaignField: any;
    indicatorsField: any;
    menuField: any;
    options: PepperiOption[];
    sizeLimitMB: number;
    constructor(options?: any);
}
export declare class PepperiImagesField extends PepperiFieldBase {
    controlType: string;
    options: PepperiOption[];
    constructor(options?: any);
}
export declare class PepperiQuantitySelectorField extends PepperiFieldBase {
    controlType: string;
    alowDecimal: boolean;
    constructor(options?: any);
}
export declare class PepperiDateField extends PepperiFieldBase {
    controlType: string;
    constructor(options?: any);
}
export declare class PepperiCheckboxField extends PepperiFieldBase {
    controlType: string;
    constructor(options?: any);
}
export declare class PepperiSelectField extends PepperiFieldBase {
    controlType: string;
    options: PepperiOption[];
    constructor(options?: any);
    updateField(updatedField: any, canEditObject: boolean): void;
}
export declare class PepperiAddressField extends PepperiFieldBase {
    controlType: string;
    groupFields: PepperiFieldBase[];
    constructor(options?: any);
}
export declare class PepperiInternalPageField extends PepperiFieldBase {
    controlType: string;
    objectId: string;
    parentId: string;
    searchCode: string;
    constructor(options?: any);
}
export declare class PepperiMenuField extends PepperiFieldBase {
    controlType: string;
    options: PepperiOption[];
    constructor(options?: any);
}
export declare class PepperiObjectChangedData {
    Id: string;
    ApiName: string;
    Value: string;
    ControlType: string;
    constructor(id: string, apiName: string, value: string, controlType?: string);
}
export declare class PepperiFieldClickedData {
    Id: string;
    ApiName: string;
    FieldType: FIELD_TYPE;
    IdType: string;
    Which: any;
    Value: any;
    Editable: boolean;
    OtherData: any;
    constructor(id: string, apiName: string, idType: any, which: any, value: any, fieldType: FIELD_TYPE, otherData?: any);
}
