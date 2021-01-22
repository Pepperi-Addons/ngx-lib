import {
    IPepSmartFilterField,
    PepSmartFilterBaseField,
    PepSmartFilterBooleanField,
    PepSmartFilterDateField,
    PepSmartFilterMultiSelectField,
    PepSmartFilterIntField,
    PepSmartFilterDateTimeField,
    PepSmartFilterPercentageField,
    PepSmartFilterCurrencyField,
    PepSmartFilterRealField
} from "./field";
import { PepSmartFilterType } from "./type";

export function createBooleanSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterBooleanField(data);
}

export function createDateSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterDateField(data);
}

export function createDateTimeSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterDateTimeField(data);
}

export function createMultiSelectSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterMultiSelectField(data);
}

export function createIntSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterIntField(data);
}

export function createRealSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterRealField(data);
}

export function createCurrencySmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterCurrencyField(data);
}

export function createPercentageSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterPercentageField(data);
}


export function createSmartFilterField(data: IPepSmartFilterField, type: PepSmartFilterType): PepSmartFilterBaseField {
    let field: PepSmartFilterBaseField;

    switch (type) {
        case 'boolean':
            field = createBooleanSmartFilterField(data);
            break;
        case 'date':
            field = createDateSmartFilterField(data);
            break;
        case 'date-time':
            field = createDateTimeSmartFilterField(data);
            break;
        case 'multi-select':
            field = createMultiSelectSmartFilterField(data);
            break;
        case 'int':
            field = createIntSmartFilterField(data);
            break;
        case 'real':
            field = createRealSmartFilterField(data);
            break;
        case 'currency':
            field = createCurrencySmartFilterField(data);
            break;
        case 'percentage':
            field = createPercentageSmartFilterField(data);
            break;

        default:
            field = createMultiSelectSmartFilterField(data);
            break;
    }

    return field;
}
