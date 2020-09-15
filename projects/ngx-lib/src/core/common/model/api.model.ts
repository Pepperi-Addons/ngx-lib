
export enum FIELD_TYPE {
    // specify text field
    'Default' = 0,
    'TextBox' = 1,
    'LimitedLengthTextBox' = 2,
    // specify text area field
    'TextArea' = 3,
    'TextHeader' = 4,
    // specify date field
    'Date' = 5,
    // specify date & time field
    'DateAndTime' = 6,
    // specify integer field
    'NumberInteger' = 7,
    // specify decimal field
    'NumberReal' = 8,
    // specify currency field
    'Currency' = 9,
    // specify boolean field
    'Boolean' = 10,
    // specify multiple options field
    'ComboBox' = 11,
    // specify multiple options field
    'MultiTickBox' = 12,
    // specify separator (view only) field
    'Separator' = 13,
    // specify address field
    'Address' = 14,
    // specify percentage field
    'Percentage' = 15,
    'EmptyComboBox' = 16, // For Category, CPIPriceList, Special Price List (ComboBox Without Values)
    'InternalLink' = 17, // for reps, Contacts, Locations & Catalogs
    // specify email field
    'Email' = 18,
    'LimitedDate' = 19,
    // specify image field
    'Image' = 20,
    'MultiTickBoxToComboBox' = 21,
    'EmptyMultiTickBox' = 22,
    'Totals' = 23,
    // specify attachment field
    'Attachment' = 24,
    'Signature' = 25,
    // specify link field
    'Link' = 26,
    // specify image url field
    'ImageURL' = 27,
    'NumberIntegerQuantitySelector' = 28, // hack for quantity selector in case of integer
    'NumberRealQuantitySelector' = 29, // hack for quantity selector in case of double
    'NumberIntegerForMatrix' = 30, // hack for integer in matrix
    'NumberRealForMatrix' = 31, // hack for double in matrix
    'Images' = 32, // hack for Images (for filmstrip and variants)
    'Indicators' = 33, // Indicators is like address (group field that conains boolean fields).
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
    'InternalPage' = 50, // The old value was 45 - in the cpi project the "InternalPage" value is 50 so i fixed it!!!
    'Duration' = 51,
    'ListOfObjects' = 52,
    'Package' = 53, // Package Quantity Selector
    'BooleanText' = 55, // Boolean that return a string defined by the user in case of true/false
    'RichTextHTML' = 56 // Html Text
}

export class FieldLayout {
    X: number;
    Width: number;
    XAlignment: number;
    Y: number;
    Height: number;
    YAlignment: number;
    LineNumber: number;

    constructor(x = 0, width = 1, xAlignment = 1, y = 0, height = 1, yAlignment = 1, lineNumber = 1) {
        this.X = x;
        this.Width = width;
        this.XAlignment = xAlignment;
        this.Y = y;
        this.Height = height;
        this.YAlignment = yAlignment;
        this.LineNumber = lineNumber;
    }
}

export class UIControlField {
    Title: string;
    MandatoryField = false;
    Mandatory = false;
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
    Layout: FieldLayout; // { X: number; Height: number; Y: number; Width: number; XAlignment: number; YAlignment: number };
    ColumnWidth: number;
    ColumnWidthType: number;
    FieldName: string;
    DefaultValue: string;
    Hidden: boolean;
    ObjectTypeReference: any;
    ParentField: string;
    WrntyFieldName: string;
    Editor: any;
    minFieldWidth = 45;
    calcColumnWidth = 10;
    calcTitleColumnWidthString = '100%';
    calcColumnWidthString = '100%';
}

export class UIControl {
    ObjectID: any;
    Type: string;
    DisplayName: string;
    ControlFields: Array<UIControlField>;
    Columns: number;
}

export class ObjectsDataRowCell {
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

export class ObjectsDataRow {
    Fields: Array<ObjectsDataRowCell>;
    AdditionalData: any;
    UID: any;
    Type: number;
    BackgroundColor: string;
    IsSelectableForActions = true;
    IsEditable = true;
    ExtraInfo: Map<string, string>;
    MainAction: string;
}

export class ObjectSingleData {
    Success: boolean;
    ErrorMessage: string;
    Data: ObjectsDataRow;
    Type: string;
    UIControl: UIControl;
    IsEditable: boolean;

    constructor(uiControl: UIControl = null, data: ObjectsDataRow = null) {
        this.Success = true;
        this.ErrorMessage = '';
        this.Type = '';

        this.UIControl = uiControl;
        this.Data = data;
    }
}

export class ObjectsData {
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

    constructor() {
        this.ErrorMessage = '';
        this.Success = true;
        this.TotalAmount = '0';
        this.CurrencySymbol = '$';
    }
}

export class SmartSearchValues {
    ApiName: string;
    ComparisonType: string;
    Value: string;
    ValueRange: { Start: string; End: string };
    Values: Array<string>;
}

export class SmartSearchResponse {
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

export class PepperiFieldData {
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

    constructor(
        options: {
            ApiName?: string;
            Value?: string;
            FormattedValue?: string;
            FieldType?: FIELD_TYPE;
            ColumnWidth?: number;
            ColumnWidthType?: number;
            XAlignment?: number;
            Title?: string;
        } = {}
    ) {
        this.ApiName = options.ApiName;
        this.Value = options.Value;
        this.FormattedValue = options.FormattedValue || '';
        this.FieldType = options.FieldType;
        this.ColumnWidth = options.ColumnWidth;
        this.ColumnWidthType = options.ColumnWidthType;
        this.XAlignment = options.XAlignment;
        this.Title = options.Title || '';
    }
}

export class PepperiRowData {
    Fields: PepperiFieldData[];
}
