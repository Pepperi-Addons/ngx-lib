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
    PepSmartFilterRealField,
} from './field';
import { IPepSmartFilterData } from './filter';
import { IPepSmartFilterOperator } from './operator';
import { PepSmartFilterType } from './type';

function createBooleanSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterBooleanField(data);
}

function createDateSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterDateField(data);
}

function createDateTimeSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterDateTimeField(data);
}

function createMultiSelectSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterMultiSelectField(data);
}

function createIntSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterIntField(data);
}

function createRealSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterRealField(data);
}

function createCurrencySmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterCurrencyField(data);
}

function createPercentageSmartFilterField(data: IPepSmartFilterField) {
    return new PepSmartFilterPercentageField(data);
}

export function createSmartFilterField(
    data: IPepSmartFilterField,
    type: PepSmartFilterType,
): PepSmartFilterBaseField {
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

export function createSmartFilter(
    fieldId: string,
    operator: IPepSmartFilterOperator,
    first: any,
    second?: any
): IPepSmartFilterData {
    return {
        fieldId: fieldId,
        operator: operator,
        value: {
            first: first,
            second: second,
        },
    };
}
