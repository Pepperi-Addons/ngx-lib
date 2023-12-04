export type PepSmartFilterComponentType =
    | 'text'
    | 'number'
    | 'date'
    | 'multi-select'
    | 'boolean';

export type PepSmartFilterType =
    | 'text'
    | 'boolean'
    | 'currency'
    | 'date'
    | 'date-time'
    | 'int'
    | 'multi-select'
    | 'percentage'
    | 'real';

export type PepSmartFilterOperatorType =
    | 'eq'
    | 'eqv'
    | 'neq'
    | 'neqv'
    | 'lt'
    | 'ltv'
    | 'gt'
    | 'gtv'
    | 'ltoe'
    | 'gtoe'
    | 'numberRange'
    | 'contains'
    | 'beginsWith'
    | 'endsWith'
    | 'after'
    | 'before'
    | 'inTheLast'
    | 'inTheLastCalendar'
    | 'today'
    | 'thisWeek'
    | 'thisMonth'
    | 'dateRange'
    | 'dateRangeVariable'
    | 'dueIn'
    | 'on'
    | 'notInTheLast'
    | 'notInTheLastCalendar'
    | 'notDueIn'
    | 'isEmpty'
    | 'isNotEmpty'
    | 'in'
    | 'inv';

export type PepSmartFilterOperatorUnitType =
    | 'days'
    | 'weeks'
    | 'months'
    | 'years';
