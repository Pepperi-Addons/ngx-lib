export declare enum FIELD_TYPE {
    'Default' = 0,
    'TextBox' = 1,
    'LimitedLengthTextBox' = 2,
    'TextArea' = 3,
    'TextHeader' = 4,
    'Date' = 5,
    'DateAndTime' = 6,
    'NumberInteger' = 7,
    'NumberReal' = 8,
    'Currency' = 9,
    'Boolean' = 10,
    'ComboBox' = 11,
    'MultiTickBox' = 12,
    'Separator' = 13,
    'Address' = 14,
    'Percentage' = 15,
    'EmptyComboBox' = 16,
    'InternalLink' = 17,
    'Email' = 18,
    'LimitedDate' = 19,
    'Image' = 20,
    'MultiTickBoxToComboBox' = 21,
    'EmptyMultiTickBox' = 22,
    'Totals' = 23,
    'Attachment' = 24,
    'Signature' = 25,
    'Link' = 26,
    'ImageURL' = 27,
    'NumberIntegerQuantitySelector' = 28,
    'NumberRealQuantitySelector' = 29,
    'NumberIntegerForMatrix' = 30,
    'NumberRealForMatrix' = 31,
    'Images' = 32,
    'Indicators' = 33,
    'CalculatedReal' = 34,
    'CalculatedInt' = 35,
    'CalculatedString' = 36,
    'CalculatedDate' = 37,
    'CalculatedBool' = 38,
    'MapDataDropDown' = 39,
    'MapDataReal' = 40,
    'MapDataString' = 41,
    'MapDataInt' = 42,
    'Sum' = 43,
    'Phone' = 44,
    'UrlForApi' = 45,
    'ManyToManyUrlForApi' = 46,
    'ReferenceType' = 47,
    'GuidReferenceType' = 48,
    'Button' = 49,
    'InternalPage' = 50,
    'Duration' = 51,
    'ListOfObjects' = 52,
    'Package' = 53,
    'BooleanText' = 55,
    'RichTextHTML' = 56
}
export declare class FieldLayout {
    X: number;
    Width: number;
    XAlignment: number;
    Y: number;
    Height: number;
    YAlignment: number;
    LineNumber: number;
    constructor(x?: number, width?: number, xAlignment?: number, y?: number, height?: number, yAlignment?: number, lineNumber?: number);
}
export declare class UIControlField {
    Title: string;
    MandatoryField: boolean;
    Mandatory: boolean;
    ReadOnlyField: boolean;
    ReadOnly: boolean;
    FieldConditions: any;
    CustomField: any;
    ApiName: string;
    FieldType: FIELD_TYPE;
    OptionalValues: any;
    MinValue: number;
    MaxValue: number;
    MaxCharacters: number;
    MaxLines: number;
    Layout: FieldLayout;
    ColumnWidth: number;
    ColumnWidthType: number;
    FieldName: string;
    DefaultValue: string;
    Hidden: boolean;
    ObjectTypeReference: any;
    ParentField: string;
    WrntyFieldName: string;
    Editor: any;
    minFieldWidth: number;
    calcColumnWidth: number;
    calcTitleColumnWidthString: string;
    calcColumnWidthString: string;
}
export declare class UIControl {
    ObjectID: any;
    Type: string;
    DisplayName: string;
    ControlFields: Array<UIControlField>;
    Columns: number;
}
export declare class ObjectsDataRowCell {
    ApiName: string;
    Enabled: boolean;
    Value: any;
    FormattedValue: any;
    GroupFields: Array<ObjectsDataRowCell>;
    Type: string;
    FieldType: number;
    OptionalValues: any;
    AdditionalValue: string;
    NotificationInfo: string;
    ReferenceObjectType: string;
    ReferenceObjectSubType: string;
    Visible: boolean;
    TextColor: string;
}
export declare class ObjectsDataRow {
    Fields: Array<ObjectsDataRowCell>;
    AdditionalData: any;
    UID: any;
    Type: number;
    BackgroundColor: string;
    IsSelectableForActions: boolean;
    IsEditable: boolean;
    ExtraInfo: Map<string, string>;
    MainAction: string;
}
export declare class ObjectSingleData {
    Success: boolean;
    ErrorMessage: string;
    Data: ObjectsDataRow;
    Type: string;
    UIControl: UIControl;
    IsEditable: boolean;
    constructor(uiControl?: UIControl, data?: ObjectsDataRow);
}
export declare class ObjectsData {
    ErrorMessage: string;
    Success: boolean;
    Rows: Array<ObjectsDataRow>;
    AllRows: Array<ObjectsDataRow>;
    SearchCode: string;
    TotalRows: number;
    UIControl: UIControl;
    TotalAmount: any;
    CurrencySymbol: any;
    SmartSearchList: Array<SmartSearchResponse>;
    constructor();
}
export declare class SmartSearchValues {
    ApiName: string;
    ComparisonType: string;
    Value: string;
    ValueRange: {
        Start: string;
        End: string;
    };
    Values: Array<string>;
}
export declare class SmartSearchResponse {
    ApiName: string;
    FieldType: any;
    Title: string;
    Values: Array<KeyValuePair<string>>;
    SmartSearchData: SmartSearchValues;
}
export interface KeyValuePair<T> {
    Key: string;
    Value: T;
}
export declare class PepperiFieldData {
    ApiName: string;
    Value: string;
    FormattedValue?: string;
    FieldType: FIELD_TYPE;
    ColumnWidth: number;
    ColumnWidthType?: number;
    XAlignment: number;
    Title: string;
    AdditionalValue?: string;
    OptionalValues?: any;
    constructor(options?: {
        ApiName?: string;
        Value?: string;
        FormattedValue?: string;
        FieldType?: FIELD_TYPE;
        ColumnWidth?: number;
        ColumnWidthType?: number;
        XAlignment?: number;
        Title?: string;
    });
}
export declare class PepperiRowData {
    Fields: PepperiFieldData[];
}
