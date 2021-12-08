export enum PepOperatorTypes {
    And = 'and',
    Or = 'or'
}

const Bool = {
    sp: 'boolean',
    api: 'Bool'
}

const JsonBool = {
    sp: 'boolean',
    api: 'JsonBool'
}

const Integer = {
    sp: 'int',
    api: 'Integer'
}

const Double = {
    sp: 'int',
    api: 'Double'
}

const String = {
    sp: 'text',
    api: 'String'
}

const Guid = {
    sp: 'text',
    api: 'Guid'
}

const Date = {
    sp: 'date',
    api: 'Date'
}

const DateTime = {
    sp: 'date-time',
    api: 'DateTime'
}

const MultipleStringValues = {
    sp: 'multi-select',
    api: 'MultipleStringValues'
}

export const PepFilterBuilderApiTypes = [
    Bool,
    JsonBool,
    Integer,
    Double,
    String,
    Guid,
    Date,
    DateTime,
    MultipleStringValues
]

/**
 * Converts input field type to smart builder type
 * @param type api field type
 * @returns smart builder field type
 */
export function getSmartBuilderType(type: string): string | null {
    let item = PepFilterBuilderApiTypes.find(item => item.api === type);
    return item ? item.sp : null;
}

