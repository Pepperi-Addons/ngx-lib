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
    'RelatedObjectsCards' = 54,
    'BooleanText' = 55, // Boolean that return a string defined by the user in case of true/false
    'RichTextHTML' = 56, // Html Text
}

export enum X_ALIGNMENT_TYPE {
    None = 0,
    Left = 1,
    Right = 2,
    Center = 3,
}

export enum Y_ALIGNMENT_TYPE {
    None = 0,
    Top = 1,
    Bottom = 2,
    Center = 3,
}

export class FieldLayout {
    X: number;
    Width: number;
    XAlignment: X_ALIGNMENT_TYPE;
    Y: Y_ALIGNMENT_TYPE;
    Height: number;
    YAlignment: Y_ALIGNMENT_TYPE;
    LineNumber: number;

    // constructor(
    //     x = 0,
    //     width = 1,
    //     xAlignment: X_ALIGNMENT_TYPE = 1, y: Y_ALIGNMENT_TYPE = 0, height = 1, yAlignment = 1, lineNumber = 1) {
    //     this.X = x;
    //     this.Width = width;
    //     this.XAlignment = xAlignment;
    //     this.Y = y;
    //     this.Height = height;
    //     this.YAlignment = yAlignment;
    //     this.LineNumber = lineNumber;
    // }

    constructor(data: Partial<FieldLayout>) {
        Object.assign(this, data);
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
    OptionalValues: Array<KeyValuePair<string>>;
    MinValue: number;
    MaxValue: number;
    MaxCharacters: number;
    MaxFieldCharacters: number;
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
    Accessory?: string;
    AdditionalValue?: string;
    ApiName: string;
    BackgroundColor?: string;
    Enabled?: boolean;
    FieldType: number;
    FormattedValue: any;
    GroupFields?: Array<ObjectsDataRowCell>;
    Highlighted?: boolean;
    NotificationInfo?: string;
    OptionalValues?: Array<KeyValuePair<string>>;
    ReferenceObjectInternalType?: string;
    ReferenceObjectSubType?: string;
    ReferenceObjectType?: string;
    TextColor?: string;
    UiPageKey?: string;
    UIPageInfo?: any;
    // Type?: string; // This is in the object??
    Value: any;
    Visible?: boolean; 
    DigitsNumberAfterDecimalPoint?: number;
}

export class ObjectsDataRow {
    AdditionalData?: any;
    BackgroundColor?: string;
    ExtraInfo?: Array<{ Key: string; Value: string }>;
    Fields: Array<ObjectsDataRowCell>;
    IsEditable = true;
    IsSelectableForActions = true;
    MainAction?: string;
    Profile?: any;
    Type: number;
    UID: any;
    Key: string;
}

export class ObjectSingleData {
    Data: ObjectsDataRow;
    ErrorCode: string;
    ErrorMessage: string;
    IsEditable: boolean;
    Success: boolean;
    Type: string;
    UIControl: UIControl;

    constructor(uiControl: UIControl = null, data: ObjectsDataRow = null) {
        this.Success = true;
        this.ErrorMessage = '';
        this.Type = '';

        this.UIControl = uiControl;
        this.Data = data;
    }
}

export class ObjectsData {
    DateFilter?: string;
    ErrorCode: string;
    ErrorMessage: string;
    Rows: Array<ObjectsDataRow>;
    SearchCode?: string;
    SecSmartSearchList?: [];
    SmartSearchList: Array<SmartSearchResponse>;
    Success: boolean;
    TotalRows: number;
    UIControl: UIControl;
    // AllRows: Array<ObjectsDataRow>;
    // TotalAmount: any;
    // CurrencySymbol: any;

    constructor() {
        this.ErrorMessage = '';
        this.Success = true;
        // this.TotalAmount = '0';
        // this.CurrencySymbol = '$';
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

export class KeyValuePair<T> {
    Key: string;
    Value: T;
}
