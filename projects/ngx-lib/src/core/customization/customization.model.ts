import { ValidatorFn, Validators } from '@angular/forms';
import { FIELD_TYPE } from '../common/model/api.model';

/** Allowed layout options */
export type PepLayoutType = 'form' | 'card' | 'table';

/** Allowed style options */
export type PepStyleType = 'weak' | 'regular' | 'strong';

/** Allowed button size options */
export type PepButtonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Allowed horizontal alignment options */
export type PepHorizontalAlignment = 'left' | 'center' | 'right';
/** Default horizontal alignment. */
export const DEFAULT_HORIZONTAL_ALIGNMENT: PepHorizontalAlignment = 'left';

/** Allowed vertical alignment options */
export type PepVerticalAlignment = 'top' | 'middle' | 'bottom';
/** Default horizontal alignment. */
export const DEFAULT_VERTICAL_ALIGNMENT: PepVerticalAlignment = 'top';

export class PepOption {
    Key: string;
    Value: string;
}

// export type PepFieldBaseType = '' | PepInternalButtonFieldType | PepTextboxFieldType |
//     PepQuantitySelectorFieldType | PepDateFieldType | PepCheckboxFieldType | PepSelectFieldType;
interface PepFieldBaseOptions {
    value?: any;
    formattedValue?: any;
    additionalValue?: string;
    key?: string;
    label?: string;
    accessory?: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    order?: number;
    controlType?: string;
    // type?: PepFieldBaseType;
    placeholder?: string;
    hidden?: boolean;
    row?: number;
    rowSpan?: number;
    col?: number;
    colSpan?: number;
    xAlignment?: PepHorizontalAlignment;
    yAlignment?: PepVerticalAlignment;
    maxFieldCharacters?: number;
    minValue?: number;
    maxValue?: number;
    textColor?: string;
    lastFocusField?: any;
}
export class PepFieldBase {
    value: any;
    formattedValue: any;
    additionalValue: string;
    key: string;
    label: string;
    accessory: string;
    required: boolean;
    readonly: boolean;
    disabled: boolean;
    order: number;
    // type: string;
    controlType: string;
    placeholder: string;
    hidden: boolean;
    row: number;
    rowSpan: number;
    col: number;
    colSpan: number;
    xAlignment: PepHorizontalAlignment;
    yAlignment: PepVerticalAlignment;
    groupFields: PepFieldBase[];
    maxFieldCharacters: number;
    minValue: number;
    maxValue: number;
    textColor: string;
    lastFocusField: any;
    // options: PepOption[];

    constructor(options: PepFieldBaseOptions = {}) {
        this.key = options.key || '';
        this.label = options.label || '';
        this.accessory = options.accessory || '';
        this.required = !!options.required;

        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        // this.type = options.type || '';
        this.placeholder = options.placeholder || '';
        this.hidden = !!options.hidden;

        this.row = options.row === undefined ? 1 : options.row;
        this.rowSpan = options.rowSpan === undefined ? 1 : options.rowSpan;
        this.col = options.col === undefined ? 1 : options.col;
        this.colSpan = options.colSpan === undefined ? 1 : options.colSpan;

        this.xAlignment = options.xAlignment === undefined ? DEFAULT_HORIZONTAL_ALIGNMENT : options.xAlignment;
        this.yAlignment = options.yAlignment === undefined ? DEFAULT_VERTICAL_ALIGNMENT : options.yAlignment;

        this.maxFieldCharacters = options.maxFieldCharacters === undefined ? 0 : options.maxFieldCharacters;
        this.minValue = options.minValue === undefined ? 0 : options.minValue;
        this.maxValue = options.maxValue === undefined ? 0 : options.maxValue;

        this.update(options);
    }

    protected getBaseValidators(isCheckbox = false): ValidatorFn[] {
        const validators = [];

        if (this.required && !this.readonly && !this.disabled) {
            if (isCheckbox) {
                validators.push(Validators.requiredTrue);
            } else {
                validators.push(Validators.required);
            }
        } else {
            validators.push(Validators.nullValidator);
        }

        if (this.maxFieldCharacters > 0) {
            validators.push(Validators.maxLength(this.maxFieldCharacters));
        }

        return validators;
    }

    public getValidators(): ValidatorFn[] {
        const validators = this.getBaseValidators();
        return validators;
    }

    public update(options: PepFieldBaseOptions): void {
        this.value = options.value;
        this.formattedValue = options.formattedValue;
        this.additionalValue = options.additionalValue;
        // TODO: Remove this from here we not suppose to update the read only prop.
        this.readonly = !!options.readonly;
        this.disabled = !!options.disabled;
        this.textColor = options.textColor || '';
        this.lastFocusField = options.lastFocusField || null;
    }
}

export class PepPlaceholderField extends PepFieldBase {
    controlType = 'placeholder';

    constructor(options: PepFieldBaseOptions = {}) {
        super(options);
    }
}

export class PepSeparatorField extends PepFieldBase {
    controlType = 'separator';

    constructor(options: PepFieldBaseOptions = {}) {
        super(options);
    }
}

export class PepAttachmentField extends PepFieldBase {
    controlType = 'attachment';

    constructor(options: PepFieldBaseOptions = {}) {
        super(options);
    }
}

export class PepIndicatorsField extends PepFieldBase {
    controlType = 'indicators';

    constructor(options: PepFieldBaseOptions = {}) {
        super(options);
    }
}

export type PepTextboxFieldType = 'text' | 'link' | 'email' | 'phone' | 'duration' | 'int' | 'percentage' | 'currency' | 'real';
interface PepTextboxFieldOptions extends PepFieldBaseOptions {
    type?: PepTextboxFieldType;
}
export class PepTextboxField extends PepFieldBase {
    controlType = 'textbox';
    type: PepTextboxFieldType = 'text';

    constructor(options: PepTextboxFieldOptions = {}) {
        super(options);

        this.type = options.type || 'text';

        this.update(options);
    }

    public update(options: PepTextboxFieldOptions): void {
        super.update(options);

        if (this.type === 'link') {
            // DI-11292 - add changes for link field for the "Read Only display value" prop
            this.formattedValue = this.disabled && this.formattedValue && this.value ? this.formattedValue : this.value;
        }
    }

    public getValidators(): ValidatorFn[] {
        const validators = super.getBaseValidators();

        if (this.type === 'email') {
            validators.push(
                Validators.pattern(
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
            );
        } else if (this.type === 'phone') {
            validators.push(Validators.pattern(/^[\d\.\-\+\(\)\*\#]+$/));
        } else if (this.type === 'int' || this.type === 'real') {
            validators.push(Validators.pattern(/^[\.,\-\+\d]+$/));

            if (!isNaN(this.minValue)) {
                validators.push(Validators.min(this.minValue));
            }

            if (!isNaN(this.maxValue)) {
                validators.push(Validators.max(this.maxValue));
            }
        }

        return validators;
    }
}

export class PepTextareaField extends PepFieldBase {
    controlType = 'textarea';

    constructor(options: PepFieldBaseOptions = {}) {
        super(options);
        // this.type = 'textarea';
    }
}

export class PepRichHtmlTextareaField extends PepFieldBase {
    controlType = 'richhtmltextarea';

    constructor(options: PepFieldBaseOptions = {}) {
        super(options);
        // this.type = 'richhtmltextarea';
    }
}

interface PepSignatureFieldOptions extends PepFieldBaseOptions {
    options?: PepOption[];
}
export class PepSignatureField extends PepFieldBase {
    controlType = 'signature';
    options: PepOption[] = [];

    constructor(options: PepSignatureFieldOptions = {}) {
        super(options);
        this.options = options.options || [];
    }
}

interface PepImageFieldOptions extends PepFieldBaseOptions {
    hasCampaignField?: any;
    indicatorsField?: any;
    menuField?: any;
    options?: PepOption[];
    sizeLimitMB?: number;
}
export class PepImageField extends PepFieldBase {
    controlType = 'image';
    hasCampaignField = null;
    indicatorsField = null;
    menuField = null;
    options: PepOption[] = [];
    sizeLimitMB = 5;

    constructor(options: PepImageFieldOptions = {}) {
        super(options);
        this.hasCampaignField = options.hasCampaignField || null;
        this.indicatorsField = options.indicatorsField || null;
        this.menuField = options.menuField || null;
        this.options = options.options || [];
        this.sizeLimitMB = options.sizeLimitMB || 5;
    }
}

interface PepImagesFieldOptions extends PepFieldBaseOptions {
    options?: PepOption[];
}
export class PepImagesField extends PepFieldBase {
    controlType = 'images';
    options: PepOption[] = [];

    constructor(options: PepImagesFieldOptions = {}) {
        super(options);
        this.options = options.options || [];
    }
}

export type PepQuantitySelectorFieldType = 'button' | 'packageButton' | 'qs' | 'qsForMatrix';
interface PepQuantitySelectorFieldOptions extends PepFieldBaseOptions {
    alowDecimal?: boolean;
    notificationInfo?: any;
    type?: PepQuantitySelectorFieldType;
}
export class PepQuantitySelectorField extends PepFieldBase {
    controlType = 'qs';
    alowDecimal: boolean;
    notificationInfo: any = {};
    updatedDataCount: number;
    type: PepQuantitySelectorFieldType;

    constructor(options: PepQuantitySelectorFieldOptions = {}) {
        super(options);

        this.updatedDataCount = 0;
        this.alowDecimal = options.alowDecimal || false;
        this.type = options.type || 'qs';

        this.update(options);
    }

    public update(options: PepQuantitySelectorFieldOptions): void {
        super.update(options);

        this.notificationInfo = options.notificationInfo;
        this.updatedDataCount += 1;
    }
}

export type PepDateFieldType = 'datetime' | 'date';
interface PepDateFieldOptions extends PepFieldBaseOptions {
    type?: PepDateFieldType;
}
export class PepDateField extends PepFieldBase {
    controlType = 'date';
    type: PepDateFieldType;

    constructor(options: PepDateFieldOptions = {}) {
        super(options);

        this.type = options.type || 'date';
    }
}

export type PepCheckboxFieldType = 'checkbox' | 'booleanText';
interface PepCheckboxFieldOptions extends PepFieldBaseOptions {
    type?: PepCheckboxFieldType;
}
export class PepCheckboxField extends PepFieldBase {
    controlType = 'checkbox';
    type: PepCheckboxFieldType;

    constructor(options: PepCheckboxFieldOptions = {}) {
        super(options);

        this.type = options.type || 'checkbox';
    }

    public getValidators(): ValidatorFn[] {
        const validators = super.getBaseValidators(true);
        return validators;
    }
}

export type PepSelectFieldType = 'select' | 'multi';
interface PepSelectFieldOptions extends PepFieldBaseOptions {
    options?: PepOption[];
    type?: PepSelectFieldType;
}
export class PepSelectField extends PepFieldBase {
    controlType = 'select';
    options: PepOption[] = [];
    type: PepSelectFieldType;

    constructor(options: PepSelectFieldOptions = {}) {
        super(options);
        this.type = options.type || 'select';

        this.update(options);
    }

    public update(options: PepSelectFieldOptions): void {
        super.update(options);

        this.options = options.options || [];
    }
}

interface PepAddressFieldOptions extends PepFieldBaseOptions {
    groupFields?: PepFieldBase[];
}
export class PepAddressField extends PepFieldBase {
    controlType = 'address';
    groupFields: PepFieldBase[] = null;

    constructor(options: PepAddressFieldOptions = {}) {
        super(options);
        this.groupFields = options.groupFields || null;
    }
}

export type PepInternalButtonFieldType = 'button' | 'reference' | 'listofobjects';
interface PepInternalButtonFieldOptions extends PepFieldBaseOptions {
    referenceObjectType?: any;
    referenceObjectSubType?: string;
    referenceObjectInternalType?: string;
    type?: PepInternalButtonFieldType;
}
export class PepInternalButtonField extends PepFieldBase {
    controlType = 'button';
    referenceObjectType;
    referenceObjectSubType = '';
    referenceObjectInternalType = '';
    type: PepInternalButtonFieldType;

    constructor(options: PepInternalButtonFieldOptions = {}) {
        super(options);

        this.referenceObjectType = options.referenceObjectType || null;
        this.referenceObjectSubType = options.referenceObjectSubType || null;
        this.referenceObjectInternalType = options.referenceObjectInternalType || null;

        this.type = options.type || 'button';
    }
}

interface PepInternalPageFieldOptions extends PepFieldBaseOptions {
    objectId?: string;
    parentId?: string;
    searchCode?: string;
}
export class PepInternalPageField extends PepFieldBase {
    controlType = 'internalPage';
    objectId = '';
    parentId = '';
    searchCode = '';

    constructor(options: PepInternalPageFieldOptions = {}) {
        super(options);
        this.objectId = options.objectId || '';
        this.parentId = options.parentId || '';
        this.searchCode = options.searchCode || '';
    }
}

interface PepInternalMenuFieldOptions extends PepFieldBaseOptions {
    options?: PepOption[];
}
export class PepInternalMenuField extends PepFieldBase {
    controlType = 'menu';
    options: PepOption[] = [];
    // hasSubMenu: boolean = false;

    constructor(options: PepInternalMenuFieldOptions = {}) {
        super(options);
        this.options = options.options || [];
        // this.hasSubMenu = options['hasSubMenu'];
    }
}

export class PepFieldValueChangedData {
    key: string;
    value: string;
    controlType?: string;
    lastFocusedField?: any = null;

    constructor(data: Partial<PepFieldValueChangedData>) {
        Object.assign(this, data);
    }
}

// This object should be deprecated.
export class PepFormFieldChangedData extends PepFieldValueChangedData {
    Id: string;
    ApiName: string;
    Value: string;
    ControlType: string;

    constructor(id: string, apiName: string, value: string, controlType: string = '') {
        super({key: apiName, value, controlType});

        this.Id = id;
        this.ApiName = this.key;
        this.Value = this.value;
        this.ControlType = this.controlType;
    }
}

export class PepFieldClickedData {
    key: string;
    value?: string;
    eventWhich?: any = null;
    otherData?: any = null;

    constructor(data: Partial<PepFieldClickedData>) {
        Object.assign(this, data);
    }
}

// This object should be deprecated.
export class PepFormFieldClickedData extends PepFieldClickedData {
    Id: string;
    ApiName: string;
    FieldType: FIELD_TYPE;
    IdType: string;
    Which: any;
    Value: any;
    Editable: boolean;
    OtherData: any;

    constructor(id: string, apiName: string, idType: any, which: any, value: any, fieldType: FIELD_TYPE, otherData: any = null) {
        super({key: apiName, eventWhich: which, value, otherData});

        this.Id = id;
        this.ApiName = this.key;
        this.IdType = idType;
        this.FieldType = fieldType;
        this.Which = this.eventWhich;
        this.Value = this.value;
        this.OtherData = this.otherData;
    }
}
