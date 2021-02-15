export type PepSmartFilterComponentType =
    // 'text' |
    'number' | 'date' | 'multi-select' | 'boolean';

export type PepSmartFilterType =
    | 'boolean'
    | 'currency'
    | 'date'
    | 'date-time'
    | 'int'
    | 'multi-select'
    | 'percentage'
    | 'real';

export type PepSmartFilterOperatorType =
    'eq' | 'neq' | 'lt' | 'gt' |
    'ltoe' | 'gtoe' | 'numberRange' |
    'contains' | 'beginsWith' | 'endsWith' | 'after' | 'before' |
    'inTheLast' | 'today' | 'thisWeek' | 'thisMonth' | 'dateRange' | 'dueIn' | 'on' | 'notInTheLast' | 'notDueIn' |
    'isEmpty' | 'isNotEmpty' | 'in';

export type PepSmartFilterOperatorUnitType = 'days' | 'weeks' | 'months' | 'years';
