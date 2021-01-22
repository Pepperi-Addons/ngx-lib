import { PepSmartFilterComponentType, PepSmartFilterType } from './type';

export interface IPepSmartFilterFieldOption {
    value: string;
    count?: number;
}

export interface IPepSmartFilterField {
    id: string;
    name: string;
    isOpen?: boolean;
    options?: IPepSmartFilterFieldOption[];
}

// Base field
// ------------------------------
export abstract class PepSmartFilterBaseField implements IPepSmartFilterField {
    id: string;
    name: string;
    isOpen?: boolean;
    options?: IPepSmartFilterFieldOption[];

    protected _componentType: PepSmartFilterComponentType;
    get componentType(): PepSmartFilterComponentType {
        return this._componentType;
    }

    private _type: PepSmartFilterType;
    get type(): PepSmartFilterType {
        return this._type;
    }

    constructor(field: IPepSmartFilterField) {
        this.id = field.id;
        this.name = field.name;
        this.isOpen = field.isOpen;
        this.options = field.options;

        this._type = this.getType();
    }

    protected abstract getType(): PepSmartFilterType;
}

// Boolean field
// ------------------------------
export class PepSmartFilterBooleanField extends PepSmartFilterBaseField {
    constructor(field: IPepSmartFilterField) {
        super(field);
        this._componentType = 'boolean';
    }

    getType(): PepSmartFilterType {
        return 'boolean'
    }
}

// Date fields
// ------------------------------
export abstract class PepSmartFilterDateBaseField extends PepSmartFilterBaseField {
    constructor(field: IPepSmartFilterField) {
        super(field);
        this._componentType = 'date';
    }
}
export class PepSmartFilterDateField extends PepSmartFilterDateBaseField {
    constructor(field: IPepSmartFilterField) {
        super(field);
    }

    getType(): PepSmartFilterType {
        return 'date'
    }
}
export class PepSmartFilterDateTimeField extends PepSmartFilterDateBaseField {
    constructor(field: IPepSmartFilterField) {
        super(field);
    }

    getType(): PepSmartFilterType {
        return 'date-time'
    }
}

// Multi select field
// ------------------------------
export class PepSmartFilterMultiSelectField extends PepSmartFilterBaseField {
    constructor(field: IPepSmartFilterField) {
        super(field);
        this._componentType = 'multi-select';
    }

    getType(): PepSmartFilterType {
        return 'multi-select'
    }
}

// Number fields
// ------------------------------
export abstract class PepSmartFilterNumberBaseField extends PepSmartFilterBaseField {
    constructor(field: IPepSmartFilterField) {
        super(field);
        this._componentType = 'number';
    }
}
export class PepSmartFilterIntField extends PepSmartFilterNumberBaseField {
    constructor(field: IPepSmartFilterField) {
        super(field);
    }

    getType(): PepSmartFilterType {
        return 'int'
    }
}
export class PepSmartFilterRealField extends PepSmartFilterNumberBaseField {
    constructor(field: IPepSmartFilterField) {
        super(field);
    }

    getType(): PepSmartFilterType {
        return 'real'
    }
}
export class PepSmartFilterCurrencyField extends PepSmartFilterNumberBaseField {
    constructor(field: IPepSmartFilterField) {
        super(field);
    }

    getType(): PepSmartFilterType {
        return 'currency'
    }
}
export class PepSmartFilterPercentageField extends PepSmartFilterNumberBaseField {
    constructor(field: IPepSmartFilterField) {
        super(field);
    }

    getType(): PepSmartFilterType {
        return 'percentage'
    }
}