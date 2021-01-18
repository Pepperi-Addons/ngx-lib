import { PepSmartFilterType } from './type';

export interface IPepSmartFilterField {
    id: string;
    name: string;
    isOpen?: boolean;
    options?: { value: string; count: number }[];
}

export abstract class PepSmartFilterBaseField implements IPepSmartFilterField {
    id: string;
    name: string;
    isOpen?: boolean;
    options?: { value: string; count: number }[];

    protected _type: PepSmartFilterType;
    get type(): PepSmartFilterType {
        return this._type;
    }

    constructor(data: IPepSmartFilterField) {
        this.id = data.id;
        this.name = data.name;
        this.isOpen = data.isOpen;
        this.options = data.options;
    }
}

export class MultiSelectFilter extends PepSmartFilterBaseField {
    constructor(data: IPepSmartFilterField) {
        super(data);
        this._type = 'multi-select';
    }
}

type IPepSmartFilterNumberOptions = IPepSmartFilterField;
export class NumberFilter extends PepSmartFilterBaseField {
    constructor(data: IPepSmartFilterNumberOptions) {
        super(data);
        this._type = 'number';
    }
}

export class BooleanFilter extends PepSmartFilterBaseField {
    constructor(data: IPepSmartFilterField) {
        super(data);
        this._type = 'boolean';
    }
}

// interface IPepSmartFilterDateOptions extends IPepSmartFilterField {
//     showTime?: boolean;
// }
export class DateFilter extends PepSmartFilterBaseField {
    // showTime: boolean;

    constructor(data: IPepSmartFilterField) {
        super(data);
        this._type = 'date';

        // this.showTime = !!data.showTime;
    }
}
