import { PepSmartFilterType } from './type';
export class IPepSmartFilterOperator {
    id: string;
    name: string;
    short: string;
    type: PepSmartFilterType[];
}

const Equals: IPepSmartFilterOperator = {
    id: 'eq',
    name: 'EQUAL',
    short: '=',
    type: [
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
    type: [
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
    type: ['number'],
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
    type: ['number'],
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
    type: ['number'],
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
    type: ['date'],
};

const Today: IPepSmartFilterOperator = {
    id: 'today',
    name: 'TODAY',
    short: 'Today',
    type: ['date'],
};

const ThisWeek: IPepSmartFilterOperator = {
    id: 'thisWeek',
    name: 'THIS_WEEK',
    short: 'This week',
    type: ['date'],
};

const ThisMonth: IPepSmartFilterOperator = {
    id: 'thisMonth',
    name: 'THIS_MONTH',
    short: 'This month',
    type: ['date'],
};

const DateRange: IPepSmartFilterOperator = {
    id: 'dateRange',
    name: 'DATE_RANGE',
    short: 'Range',
    type: ['date'],
};

const DueIn: IPepSmartFilterOperator = {
    id: 'dueIn',
    name: 'DUE_IN',
    short: 'Due in',
    type: ['date'],
};

const On: IPepSmartFilterOperator = {
    id: 'on',
    name: 'ON',
    short: 'On',
    type: ['date'],
};

const NotInTheLast: IPepSmartFilterOperator = {
    id: 'notInTheLast',
    name: 'NOT_IN_THE_LAST',
    short: 'Not in the last',
    type: ['date'],
};

const NotDueIn: IPepSmartFilterOperator = {
    id: 'notDueIn',
    name: 'NOT_DUE_IN',
    short: 'Not due in',
    type: ['date'],
};

const IsEmpty: IPepSmartFilterOperator = {
    id: 'isEmpty',
    name: 'IS_EMPTY',
    short: 'Is empty',
    type: ['date'],
};

const IsNotEmpty: IPepSmartFilterOperator = {
    id: 'isNotEmpty',
    name: 'IS_NOT_EMPTY',
    short: 'Is not empty',
    type: ['date'],
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
};

export class IPepSmartFilterOperatorUnit {
    id: string;
    name: string;
    type: PepSmartFilterType[];
}

const Days: IPepSmartFilterOperatorUnit = {
    id: 'days',
    name: 'DAYS',
    type: ['date'],
};

const Weeks: IPepSmartFilterOperatorUnit = {
    id: 'weeks',
    name: 'WEEKS',
    type: ['date'],
};

const Months: IPepSmartFilterOperatorUnit = {
    id: 'months',
    name: 'MONTHS',
    type: ['date'],
};

const Years: IPepSmartFilterOperatorUnit = {
    id: 'years',
    name: 'YEARS',
    type: ['date'],
};

export const PepSmartFilterOperatorUnits = {
    Days: Days,
    Weeks: Weeks,
    Months: Months,
    Years: Years,
};
