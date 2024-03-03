import {
    PepSmartFilterComponentType,
    PepSmartFilterOperatorType,
    PepSmartFilterOperatorUnitType,
} from './type';
export class IPepSmartFilterOperator {
    id: PepSmartFilterOperatorType;
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
        'boolean',
        // 'multi-select',
        // 'date',
        'text',
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
        // 'multi-select',
        // 'date',
        'text',
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

const Contains: IPepSmartFilterOperator = {
    id: 'contains',
    name: 'CONTAINS',
    short: 'Contains',
    componentType: ['text'],
};

const BeginsWith: IPepSmartFilterOperator = {
    id: 'beginsWith',
    name: 'BEGINS_WITH',
    short: 'Begins With',
    componentType: ['text'],
};

const EndsWith: IPepSmartFilterOperator = {
    id: 'endsWith',
    name: 'ENDS_WITH',
    short: 'End With',
    componentType: ['text'],
};

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
    componentType: ['date','text'],
};

const IsNotEmpty: IPepSmartFilterOperator = {
    id: 'isNotEmpty',
    name: 'IS_NOT_EMPTY',
    short: 'Is not empty',
    componentType: ['date','text'],
};

const In: IPepSmartFilterOperator = {
    id: 'in',
    name: 'IN',
    short: 'In',
    componentType: ['multi-select'],
};

const InVariable: IPepSmartFilterOperator = {
    id: 'inv',
    name: 'IN_VARIABLE',
    short: 'In',
    componentType: ['multi-select', 'text'],
};

export const PepSmartFilterOperators = {
    Equals: Equals,
    NotEqual: NotEqual,
    LessThan: LessThan,
    // LessThanOrEquals: LessThanOrEquals,
    GreaterThan: GreaterThan,
    // GreaterThanOrEquals: GreaterThanOrEquals,
    NumberRange: NumberRange,
    Contains: Contains,
    BeginsWith: BeginsWith,
    EndsWith: EndsWith,
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

//additional operators to be added upon input flag
const InTheLastCalendar: IPepSmartFilterOperator = {
    id: 'inTheLastCalendar',
    name: 'IN_THE_LAST_CALENDAR',
    short: 'In the last (calendar)',
    componentType: ['date'],
}

const NotInTheLastCalendar: IPepSmartFilterOperator = {
    id: 'notInTheLastCalendar',
    name: 'NOT_IN_THE_LAST_CALENDAR',
    short: 'Not in the last (calendar)',
    componentType: ['date'],
}

export const PepSmartFilterAdditionalOperators = {
    InTheLastCalendar: InTheLastCalendar,
    NotInTheLastCalendar: NotInTheLastCalendar
}

//additional variable operators to be added upon input variable fields
const EqualsToVariable: IPepSmartFilterOperator = {
    id: 'eqv',
    name: 'EQUAL_TO_VARIABLE',
    short: '=',
    componentType: ['text', 'number', 'boolean']
}

const NotEqualsToVariable: IPepSmartFilterOperator = {
    id: 'neqv',
    name: 'NOT_EQUAL_TO_VARIABLE',
    short: '<>',
    componentType: ['boolean']
}

const LessThanVariable: IPepSmartFilterOperator = {
    id: 'ltv',
    name: 'LESS_THAN_VARIABLE',
    short: '<',
    componentType: ['number'],
};

const GreaterThanVariable: IPepSmartFilterOperator = {
    id: 'gtv',
    name: 'GREATER_THAN_VARIABLE',
    short: '>',
    componentType: ['number'],
};

const DateRangeVariable: IPepSmartFilterOperator = {
    id: 'dateRangeVariable',
    name: 'DATE_RANGE_VARIABLE',
    short: 'Range Variable',
    componentType: ['date'],
};

export const PepSmartFilterVariableOperators = {
    EqualsToVariable: EqualsToVariable,
    NotEqualsToVariable: NotEqualsToVariable,
    LessThanVariable: LessThanVariable,
    GreaterThanVariable: GreaterThanVariable,
    DateRangeVariable: DateRangeVariable,
    InVariable: InVariable,
    IsEmpty: IsEmpty,
    IsNotEmpty: IsNotEmpty

}

export class IPepSmartFilterOperatorUnit {
    id: PepSmartFilterOperatorUnitType;
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
