import { ValidatorFn, Validators } from '@angular/forms';

/** Allowed layout options */
export type PepLayoutType = 'form' | 'card' | 'table';

/** Allowed style options */
export type PepStyleType = 'weak' | 'weak-invert' | 'regular' | 'strong';

/** Allowed style state options */
export type PepStyleStateType = 'system' | 'caution' | 'success';

/** Allowed size options */
export type PepSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Allowed horizontal alignment options */
export type PepHorizontalAlignment = 'left' | 'center' | 'right';
/** Default horizontal alignment. */
export const DEFAULT_HORIZONTAL_ALIGNMENT: PepHorizontalAlignment = 'left';

/** Allowed vertical alignment options */
export type PepVerticalAlignment = 'top' | 'middle' | 'bottom';
/** Default horizontal alignment. */
export const DEFAULT_VERTICAL_ALIGNMENT: PepVerticalAlignment = 'top';
export interface IPepOption {
    key: string;
    value: string;
}

// export type PepFieldBaseType = '' | PepInternalButtonFieldType | PepTextboxFieldType |
//     PepQuantitySelectorFieldType | PepDateFieldType | PepCheckboxFieldType | PepSelectFieldType;
interface IPepFieldBaseOptions {
    value?: any;
    formattedValue?: any;
    additionalValue?: string;
    key?: string;
    label?: string;
    accessory?: string;
    mandatory?: boolean;
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
    visible?: boolean;    
    emptyOption?: boolean;    
    // lastFocusField?: any;
    digitsNumberAfterDecimalPoint?: number;
}
export class PepFieldBase {
    value: any;
    formattedValue: any;
    additionalValue: string;
    key: string;
    label: string;
    accessory: string;
    mandatory: boolean;
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
    visible: boolean;        
    // lastFocusField: any;

    constructor(options: IPepFieldBaseOptions = {}) {
        this.key = options.key || '';
        this.label = options.label || '';
        this.accessory = options.accessory || '';
        this.mandatory = !!options.mandatory;

        this.order = options.order ?? 1;
        this.controlType = options.controlType || '';
        // this.type = options.type || '';
        this.placeholder = options.placeholder || '';
        this.hidden = !!options.hidden;

        this.row = options.row ?? 1;
        this.rowSpan = options.rowSpan ?? 1;
        this.col = options.col ?? 1;
        this.colSpan = options.colSpan ?? 1;

        this.xAlignment = options.xAlignment ?? DEFAULT_HORIZONTAL_ALIGNMENT;
        this.yAlignment = options.yAlignment ?? DEFAULT_VERTICAL_ALIGNMENT;

        this.maxFieldCharacters = options.maxFieldCharacters ?? 0;
        this.minValue = options.minValue ?? 0;
        this.maxValue = options.maxValue ?? 0;

        this.update(options);
    }

    protected getBaseValidators(isCheckbox = false): ValidatorFn[] {
        const validators = [];

        if (this.mandatory && !this.readonly && !this.disabled) {
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

    public update(options: IPepFieldBaseOptions): void {
        this.value = options.value;
        this.formattedValue = options.formattedValue;
        this.additionalValue = options.additionalValue;

        this.readonly = !!options.readonly;
        this.disabled = !!options.disabled;
        this.visible = !!options.visible;
        this.textColor = options.textColor || '';
        // this.lastFocusField = options.lastFocusField || null;
    }
}

export class PepPlaceholderField extends PepFieldBase {
    controlType = 'placeholder';

    constructor(options: IPepFieldBaseOptions = {}) {
        super(options);
    }
}

export class PepSeparatorField extends PepFieldBase {
    controlType = 'separator';
    
    constructor(options: IPepFieldBaseOptions = {}) {
        super(options);        
    }
}

export class PepAttachmentField extends PepFieldBase {
    controlType = 'attachment';

    constructor(options: IPepFieldBaseOptions = {}) {
        super(options);
    }
}

export class PepIndicatorsField extends PepFieldBase {
    controlType = 'indicators';

    constructor(options: IPepFieldBaseOptions = {}) {
        super(options);
    }
}

export type PepTextboxFieldType =
    | 'text'
    | 'link'
    | 'email'
    | 'phone'
    | 'duration'
    | 'int'
    | 'percentage'
    | 'currency'
    | 'real';
interface IPepTextboxFieldOptions extends IPepFieldBaseOptions {
    type?: PepTextboxFieldType;
    regex?: string | RegExp;
    regexError?: string;
}
export class PepTextboxField extends PepFieldBase {
    controlType = 'textbox';
    type: PepTextboxFieldType = 'text';
    regex: string | RegExp;
    regexError: string;
    digitsNumberAfterDecimalPoint = NaN;

    constructor(options: IPepTextboxFieldOptions = {}) {
        super(options);

        this.type = options.type || 'text';
        this.regex = options.regex ?? null;
        this.regexError = options.regexError;


        this.update(options);
    }

    public update(options: IPepTextboxFieldOptions): void {
        super.update(options);

        this.digitsNumberAfterDecimalPoint = options.digitsNumberAfterDecimalPoint ?? NaN;

        if (this.type === 'link') {
            // DI-11292 - add changes for link field for the "Read Only display value" prop
            this.formattedValue =
                this.disabled && this.formattedValue && this.value
                    ? this.formattedValue
                    : this.value;
        }
    }

    public getValidators(): ValidatorFn[] {
        const validators = super.getBaseValidators();

        if (this.type === 'email') {
            // validators.push(
            //     Validators.pattern(
            //         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            //     )
            // );
            validators.push(Validators.email);
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

        if (this.type === 'text' && this.regex) {
            validators.push(Validators.pattern(this.regex));
        }

        return validators;
    }
}

export class PepLinkField extends PepFieldBase {
    controlType = 'link';
    type: PepTextboxFieldType = 'link';

    constructor(options: IPepFieldBaseOptions = {}) {
        super(options);

        this.update(options);
    }

    public update(options: IPepTextboxFieldOptions): void {
        super.update(options);

        // DI-11292 - add changes for link field for the "Read Only display value" prop
        this.formattedValue =
            this.disabled && this.formattedValue && this.value
                ? this.formattedValue
                : this.value;

    }
}

export class PepTextareaField extends PepFieldBase {
    controlType = 'textarea';

    constructor(options: IPepFieldBaseOptions = {}) {
        super(options);
        // this.type = 'textarea';
    }
}

interface IPepSignatureFieldOptions extends IPepFieldBaseOptions {
    renderTitle?: boolean;
    renderEnlargeButton?: boolean;
}
export class PepRichHtmlTextareaField extends PepFieldBase {
    controlType = 'richhtmltextarea';    
    renderTitle: boolean;
    renderEnlargeButton: boolean;

    constructor(options: IPepSignatureFieldOptions = {}) {
        super(options);

        this.renderTitle = options.renderTitle !== undefined ? options.renderTitle : true;
        this.renderEnlargeButton = options.renderEnlargeButton !== undefined ? options.renderEnlargeButton : true;
    }
}

interface IPepSignatureFieldOptions extends IPepFieldBaseOptions {
    options?: IPepOption[];
}
export class PepSignatureField extends PepFieldBase {
    controlType = 'signature';
    options: IPepOption[] = [];

    constructor(options: IPepSignatureFieldOptions = {}) {
        super(options);
        this.options = options.options || [];
    }
}

interface IPepImageFieldOptions extends IPepFieldBaseOptions {
    hasCampaignField?: any;
    indicatorsField?: any;
    menuField?: any;
    options?: IPepOption[];
    sizeLimitMB?: number;
}
export class PepImageField extends PepFieldBase {
    controlType = 'image';
    hasCampaignField = null;
    indicatorsField = null;
    menuField = null;
    options: IPepOption[] = [];
    sizeLimitMB = 5;

    constructor(options: IPepImageFieldOptions = {}) {
        super(options);
        this.hasCampaignField = options.hasCampaignField || null;
        this.indicatorsField = options.indicatorsField || null;
        this.menuField = options.menuField || null;
        this.options = options.options || [];
        this.sizeLimitMB = options.sizeLimitMB || 5;
    }
}

interface IPepImagesFieldOptions extends IPepFieldBaseOptions {
    options?: IPepOption[];
}
export class PepImagesField extends PepFieldBase {
    controlType = 'images';
    options: IPepOption[] = [];

    constructor(options: IPepImagesFieldOptions = {}) {
        super(options);
        this.options = options.options || [];
    }
}

export type PepQuantitySelectorFieldType =
    | 'button'
    | 'packageButton'
    | 'qs'
    | 'qsForMatrix';
interface IPepQuantitySelectorFieldOptions extends IPepFieldBaseOptions {
    allowDecimal?: boolean;
    notificationInfo?: any;
    type?: PepQuantitySelectorFieldType;
}
export class PepQuantitySelectorField extends PepFieldBase {
    controlType = 'qs';
    allowDecimal: boolean;
    notificationInfo: any = {};
    updatedDataCount: number;
    type: PepQuantitySelectorFieldType;
    digitsNumberAfterDecimalPoint = NaN;

    constructor(options: IPepQuantitySelectorFieldOptions = {}) {
        super(options);

        this.updatedDataCount = 0;
        this.type = options.type || 'qs';

        this.update(options);
    }

    public update(options: IPepQuantitySelectorFieldOptions): void {
        super.update(options);
        
        this.digitsNumberAfterDecimalPoint = options.digitsNumberAfterDecimalPoint ?? NaN;

        this.allowDecimal = options.allowDecimal || false;
        this.notificationInfo = options.notificationInfo;
        this.updatedDataCount += 1;
    }
}

export type PepDateFieldType = 'datetime' | 'date';
interface IPepDateFieldOptions extends IPepFieldBaseOptions {
    type?: PepDateFieldType;
}
export class PepDateField extends PepFieldBase {
    controlType = 'date';
    type: PepDateFieldType;

    constructor(options: IPepDateFieldOptions = {}) {
        super(options);

        this.type = options.type || 'date';
    }
}

export type PepCheckboxFieldType = 'checkbox' | 'booleanText';
interface IPepCheckboxFieldOptions extends IPepFieldBaseOptions {
    type?: PepCheckboxFieldType;
}
export class PepCheckboxField extends PepFieldBase {
    controlType = 'checkbox';
    type: PepCheckboxFieldType;

    constructor(options: IPepCheckboxFieldOptions = {}) {
        super(options);

        this.type = options.type || 'checkbox';
    }

    public getValidators(): ValidatorFn[] {
        const validators = super.getBaseValidators(true);
        return validators;
    }
}

export type PepSelectFieldType = 'select' | 'multi';
interface IPepSelectFieldOptions extends IPepFieldBaseOptions {
    options?: IPepOption[];
    type?: PepSelectFieldType;
}
export class PepSelectField extends PepFieldBase {
    controlType = 'select';
    options: IPepOption[] = [];    
    type: PepSelectFieldType;    
    emptyOption: boolean;

    constructor(options: IPepSelectFieldOptions = {}) {
        super(options);
        this.type = options.type || 'select';
        this.emptyOption = options.emptyOption;

        this.update(options);
    }

    public update(options: IPepSelectFieldOptions): void {
        super.update(options);

        this.options = options.options || [];
    }
}

interface IPepAddressFieldOptions extends IPepFieldBaseOptions {
    groupFields?: PepFieldBase[];
}
export class PepAddressField extends PepFieldBase {
    controlType = 'address';
    groupFields: PepFieldBase[] = null;

    constructor(options: IPepAddressFieldOptions = {}) {
        super(options);
        this.groupFields = options.groupFields || null;
    }
}

export type PepInternalButtonFieldType =
    | 'button'
    | 'reference'
    | 'listofobjects';
interface IPepInternalButtonFieldOptions extends IPepFieldBaseOptions {
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

    constructor(options: IPepInternalButtonFieldOptions = {}) {
        super(options);

        this.referenceObjectType = options.referenceObjectType || null;
        this.referenceObjectSubType = options.referenceObjectSubType || null;
        this.referenceObjectInternalType =
            options.referenceObjectInternalType || null;

        this.type = options.type || 'button';
    }
}

interface IPepInternalPageFieldOptions extends IPepFieldBaseOptions {
    objectId?: string;
    parentId?: string;
    searchCode?: string;
}
export class PepInternalPageField extends PepFieldBase {
    controlType = 'internalPage';
    objectId = '';
    parentId = '';
    searchCode = '';

    constructor(options: IPepInternalPageFieldOptions = {}) {
        super(options);
        this.objectId = options.objectId || '';
        this.parentId = options.parentId || '';
        this.searchCode = options.searchCode || '';
    }
}


interface IPepInternalCaruselFieldOptions extends IPepFieldBaseOptions {
    searchCode?: string;
    pageInfo?: any;
}
export class PepInternalCaruselField extends PepFieldBase {
    controlType = 'internalCarusel';
    searchCode = '';
    pageInfo;

    constructor(options: IPepInternalCaruselFieldOptions = {}) {
        super(options);
        this.searchCode = options.searchCode || '';

        this.update(options);
    }

    public update(options: IPepInternalCaruselFieldOptions): void {
        super.update(options);

        this.pageInfo = options.pageInfo;
    }
}


interface IPepInternalMenuFieldOptions extends IPepFieldBaseOptions {
    options?: IPepOption[];
}
export class PepInternalMenuField extends PepFieldBase {
    controlType = 'menu';
    options: IPepOption[] = [];
    // hasSubMenu: boolean = false;

    constructor(options: IPepInternalMenuFieldOptions = {}) {
        super(options);
        this.options = options.options || [];
        // this.hasSubMenu = options['hasSubMenu'];
    }
}

export interface IPepFieldValueChangeEvent {
    key: string;
    value: string;
    controlType?: string;
}

export interface IPepFieldClickEvent {
    key: string;
    value?: string;
    controlType?: string;
    eventWhich?: any;
    otherData?: any;
}
