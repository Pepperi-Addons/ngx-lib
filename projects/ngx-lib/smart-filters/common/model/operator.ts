import { PepSmartFilterComponentType } from './type';
export class IPepSmartFilterOperator {
    id: string;
    name: string;
    short: string;
    componentType: PepSmartFilterComponentType[];
}

const Equals: IPepSmartFilterOperator = {
    id: 'eq',
    name: 'EQUAL',
    short: '=',
    componentType: [
        'number',
        'multi-select',
        // 'date',
        // 'text',
        // 'auto-complete',
        // 'select',
    ],
};

const NotEqual: IPepSmartFilterOperator = {
    id: 'neq',
    name: 'NOT_EQUAL',
    short: '<>',
    componentType: [
        'number',
        'multi-select',
        // 'date',
        // 'text',
        // 'auto-complete',
        // 'select',
    ],
};

const LessThan: IPepSmartFilterOperator = {
    id: 'lt',
    name: 'LESS_THEN',
    short: '<',
    componentType: ['number'],
};

// const LessThanOrEquals: IPepSmartFilterOperator = {
//     id: 'ltoe',
//     name: 'LESS_THEN_OR_EQUAL',
//     short: '<=',
//     type: ['number'],
// };

const GreaterThan: IPepSmartFilterOperator = {
    id: 'gt',
    name: 'GREATER_THEN',
    short: '>',
    componentType: ['number'],
};

// const GreaterThanOrEquals: IPepSmartFilterOperator = {
//     id: 'gtoe',
//     name: 'GREATER_THEN_OR_EQUAL',
//     short: '>=',
//     type: ['number'],
// };

const NumberRange: IPepSmartFilterOperator = {
    id: 'numberRange',
    name: 'NUMBER_RANGE',
    short: 'Range',
    componentType: ['number'],
};

// const Contains: Operator = {
//     id: 'contains',
//     name: 'Contains',
//     short: 'Contains',
//     type: ['text'],
// };

// const BeginsWith: Operator = {
//     id: 'beginsWith',
//     name: 'Begins With',
//     short: 'Begins With',
//     type: ['text'],
// };

// const EndsWith: Operator = {
//     id: 'endsWith',
//     name: 'Ends With',
//     short: 'End With',
//     type: ['text'],
// };

// const After: Operator = {
//     id: 'after',
//     name: 'After',
//     short: 'After',
//     type: ['date'],
// };

// const Before: Operator = {
//     id: 'before',
//     name: 'Before',
//     short: 'Before',
//     type: ['date'],
// };

const InTheLast: IPepSmartFilterOperator = {
    id: 'inTheLast',
    name: 'IN_THE_LAST',
    short: 'In the last',
    componentType: ['date'],
};

const Today: IPepSmartFilterOperator = {
    id: 'today',
    name: 'TODAY',
    short: 'Today',
    componentType: ['date'],
};

const ThisWeek: IPepSmartFilterOperator = {
    id: 'thisWeek',
    name: 'THIS_WEEK',
    short: 'This week',
    componentType: ['date'],
};

const ThisMonth: IPepSmartFilterOperator = {
    id: 'thisMonth',
    name: 'THIS_MONTH',
    short: 'This month',
    componentType: ['date'],
};

const DateRange: IPepSmartFilterOperator = {
    id: 'dateRange',
    name: 'DATE_RANGE',
    short: 'Range',
    componentType: ['date'],
};

const DueIn: IPepSmartFilterOperator = {
    id: 'dueIn',
    name: 'DUE_IN',
    short: 'Due in',
    componentType: ['date'],
};

const On: IPepSmartFilterOperator = {
    id: 'on',
    name: 'ON',
    short: 'On',
    componentType: ['date'],
};

const NotInTheLast: IPepSmartFilterOperator = {
    id: 'notInTheLast',
    name: 'NOT_IN_THE_LAST',
    short: 'Not in the last',
    componentType: ['date'],
};

const NotDueIn: IPepSmartFilterOperator = {
    id: 'notDueIn',
    name: 'NOT_DUE_IN',
    short: 'Not due in',
    componentType: ['date'],
};

const IsEmpty: IPepSmartFilterOperator = {
    id: 'isEmpty',
    name: 'IS_EMPTY',
    short: 'Is empty',
    componentType: ['date'],
};

const IsNotEmpty: IPepSmartFilterOperator = {
    id: 'isNotEmpty',
    name: 'IS_NOT_EMPTY',
    short: 'Is not empty',
    componentType: ['date'],
};

const In: IPepSmartFilterOperator = {
    id: 'in',
    name: 'IN',
    short: 'In',
    componentType: ['multi-select'],
};

export const PepSmartFilterOperators = {
    Equals: Equals,
    NotEqual: NotEqual,
    LessThan: LessThan,
    // LessThanOrEquals: LessThanOrEquals,
    GreaterThan: GreaterThan,
    // GreaterThanOrEquals: GreaterThanOrEquals,
    NumberRange: NumberRange,
    // Contains: Contains,
    // BeginsWith: BeginsWith,
    // EndsWith: EndsWith,
    // After: After,
    // Before: Before,
    InTheLast: InTheLast,
    Today: Today,
    ThisWeek: ThisWeek,
    ThisMonth: ThisMonth,
    DateRange: DateRange,
    DueIn: DueIn,
    On: On,
    NotInTheLast: NotInTheLast,
    NotDueIn: NotDueIn,
    IsEmpty: IsEmpty,
    IsNotEmpty: IsNotEmpty,
    In: In,
};

export class IPepSmartFilterOperatorUnit {
    id: string;
    name: string;
    componentType: PepSmartFilterComponentType[];
}

const Days: IPepSmartFilterOperatorUnit = {
    id: 'days',
    name: 'DAYS',
    componentType: ['date'],
};

const Weeks: IPepSmartFilterOperatorUnit = {
    id: 'weeks',
    name: 'WEEKS',
    componentType: ['date'],
};

const Months: IPepSmartFilterOperatorUnit = {
    id: 'months',
    name: 'MONTHS',
    componentType: ['date'],
};

const Years: IPepSmartFilterOperatorUnit = {
    id: 'years',
    name: 'YEARS',
    componentType: ['date'],
};

export const PepSmartFilterOperatorUnits = {
    Days: Days,
    Weeks: Weeks,
    Months: Months,
    Years: Years,
};
