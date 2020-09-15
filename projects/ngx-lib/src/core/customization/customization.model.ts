import { FIELD_TYPE } from '../common/model/api.model';

export enum LAYOUT_TYPE {
    PepperiForm,
    PepperiCard,
    PepperiTable,
    // PepperiCampaign,
    Editmodal,
}

export enum STYLE_TYPE {
    Weak = 'weak',
    Regular = 'regular',
    Strong = 'strong',
}

export class PepperiOption {
    Key: string;
    Value: string;
}

export class PepperiFieldBase {
    value: any;
    formattedValue: any;
    additionalValue: string;
    notificationInfo: any = {};
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

    constructor(
        options: {
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
        } = {}
    ) {
        this.value = options.value;
        this.formattedValue = options.formattedValue;
        this.additionalValue = options.additionalValue;
        this.notificationInfo = options.notificationInfo;
        this.key = options.key || '';
        this.label = options.label || '';
        this.accessory = options.accessory || '';
        this.required = !!options.required;
        this.readonly = !!options.readonly;
        this.disabled = !!options.disabled;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.placeholder = options.placeholder || '';
        this.hidden = !!options.hidden;

        this.row = options.row === undefined ? 1 : options.row;
        this.rowSpan = options.rowSpan === undefined ? 1 : options.rowSpan;
        this.col = options.col === undefined ? 1 : options.col;
        this.colSpan = options.colSpan === undefined ? 1 : options.colSpan;

        this.xAlignment = options.xAlignment === undefined ? 1 : options.xAlignment;
        this.yAlignment = options.yAlignment === undefined ? 1 : options.yAlignment;

        this.maxFieldCharacters = options.maxFieldCharacters === undefined ? 0 : options.maxFieldCharacters;
        this.minValue = options.minValue === undefined ? 0 : options.minValue;
        this.maxValue = options.maxValue === undefined ? 0 : options.maxValue;

        this.textColor = options.textColor || '';
        this.lastFocusField = options.lastFocusField || null;

        this.updatedDataCount = 0;
    }

    public updateField(updatedField: any, canEditObject: boolean, lastFocusField: any = null): void {
        this.disabled = !updatedField.Enabled || !canEditObject;
        this.readonly = !updatedField.Enabled || !canEditObject;
        this.value = updatedField.Value;
        this.additionalValue = updatedField.AdditionalValue;
        this.formattedValue = updatedField.FormattedValue;
        this.notificationInfo = updatedField.NotificationInfo;
        this.textColor = updatedField.TextColor;
        this.lastFocusField = lastFocusField;

        if (this.controlType === 'qs') {
            this.updatedDataCount += 1;
        }
        if (this.type === 'link') {
            // DI-11292 - add changes for link field for the "Read Only display value" prop
            this.formattedValue =
                this.disabled && this.formattedValue !== null && this.value !== null ? this.formattedValue : this.value;
        }
    }
}

export class PepperiPlaceholderField extends PepperiFieldBase {
    controlType = 'placeholder';

    constructor(options: any = {}) {
        super(options);
    }
}

export class PepperiSeparatorField extends PepperiFieldBase {
    controlType = 'separator';

    constructor(options: any = {}) {
        super(options);
    }
}

export class PepperiButtonField extends PepperiFieldBase {
    controlType = 'button';
    referenceObjectType;
    referenceObjectSubType = '';
    referenceObjectInternalType = '';

    constructor(options: any = {}) {
        super(options);

        this.referenceObjectType = options.referenceObjectType || null;
        this.referenceObjectSubType = options.referenceObjectSubType || null;
        this.referenceObjectInternalType = options.referenceObjectInternalType || null;
    }
}

export class PepperiAttachmentField extends PepperiFieldBase {
    controlType = 'attachment';

    constructor(options: any = {}) {
        super(options);
    }
}

export class PepperiIndicatorsField extends PepperiFieldBase {
    controlType = 'indicators';

    constructor(options: any = {}) {
        super(options);
    }
}

export class PepperiTextboxField extends PepperiFieldBase {
    controlType = 'textbox';

    constructor(options: any = {}) {
        super(options);
    }
}

export class PepperiTextareaField extends PepperiFieldBase {
    controlType = 'textarea';

    constructor(options: any = {}) {
        super(options);
        this.type = 'textarea';
    }
}

export class PepperiRichHtmlTextareaField extends PepperiFieldBase {
    controlType = 'richhtmltextarea';

    constructor(options: any = {}) {
        super(options);
        this.type = 'richhtmltextarea';
    }
}

export class PepperiSignatureField extends PepperiFieldBase {
    controlType = 'signature';
    options: PepperiOption[] = [];

    constructor(options: any = {}) {
        super(options);
        this.options = options.options || [];
    }
}

export class PepperiImageField extends PepperiFieldBase {
    controlType = 'image';
    hasCampaignField = null;
    indicatorsField = null;
    menuField = null;
    options: PepperiOption[] = [];
    sizeLimitMB = 5;

    constructor(options: any = {}) {
        super(options);
        this.hasCampaignField = options.hasCampaignField || null;
        this.indicatorsField = options.indicatorsField || null;
        this.menuField = options.menuField || null;
        this.options = options.options || [];
        this.sizeLimitMB = options.sizeLimitMB || 5;
    }
}

export class PepperiImagesField extends PepperiFieldBase {
    controlType = 'images';
    options: PepperiOption[] = [];

    constructor(options: any = {}) {
        super(options);
        this.options = options.options || [];
    }
}

export class PepperiQuantitySelectorField extends PepperiFieldBase {
    controlType = 'qs';
    alowDecimal: boolean;

    constructor(options: any = {}) {
        super(options);
        this.alowDecimal = options.alowDecimal || false;
    }
}

export class PepperiDateField extends PepperiFieldBase {
    controlType = 'date';

    constructor(options: any = {}) {
        super(options);
    }
}

export class PepperiCheckboxField extends PepperiFieldBase {
    controlType = 'checkbox';

    constructor(options: any = {}) {
        super(options);
    }
}

export class PepperiSelectField extends PepperiFieldBase {
    controlType = 'select';
    options: PepperiOption[] = [];

    constructor(options: any = {}) {
        super(options);
        this.options = options.options || [];
    }

    public updateField(updatedField: any, canEditObject: boolean): void {
        super.updateField(updatedField, canEditObject);

        this.options = updatedField.OptionalValues;
    }
}

export class PepperiAddressField extends PepperiFieldBase {
    controlType = 'address';
    groupFields: PepperiFieldBase[] = null;

    constructor(options: any = {}) {
        super(options);
        this.groupFields = options.groupFields || null;
    }
}

export class PepperiInternalPageField extends PepperiFieldBase {
    controlType = 'internalPage';
    objectId = '';
    parentId = '';
    searchCode = '';

    constructor(options: any = {}) {
        super(options);
        this.objectId = options.objectId || '';
        this.parentId = options.parentId || '';
        this.searchCode = options.searchCode || '';
    }
}

export class PepperiMenuField extends PepperiFieldBase {
    controlType = 'menu';
    options: PepperiOption[] = [];
    // hasSubMenu: boolean = false;

    constructor(options: any = {}) {
        super(options);
        this.options = options.options || [];
        // this.hasSubMenu = options['hasSubMenu'];
    }
}



export class PepperiObjectChangedData {
    Id: string;
    ApiName: string;
    Value: string;
    ControlType: string;

    constructor(id: string, apiName: string, value: string, controlType: string = '') {
        this.Id = id;
        this.ApiName = apiName;
        this.Value = value;
        this.ControlType = controlType || '';
    }
}

export class PepperiFieldClickedData {
    Id: string;
    ApiName: string;
    FieldType: FIELD_TYPE;
    IdType: string;
    Which: any;
    Value: any;
    Editable: boolean;
    OtherData: any;

    constructor(id: string, apiName: string, idType: any, which: any, value: any, fieldType: FIELD_TYPE, otherData: any = null) {
        this.Id = id;
        this.ApiName = apiName;
        this.IdType = idType;
        this.FieldType = fieldType;
        this.Which = which;
        this.Value = value;
        this.OtherData = otherData;
    }
}
