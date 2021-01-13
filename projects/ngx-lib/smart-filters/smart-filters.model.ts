export type PepSmartFilterDateType =
    | 'today'
    | 'this-week'
    | 'this-month'
    | 'between'
    | 'due-in'
    | 'on'
    | 'in-the-last'
    | 'not-in-the-last';

export type PepSmartFilterDateUnitType = 'days' | 'weeks' | 'months' | 'years';

export type PepSmartFilterNumberType =
    | 'equals'
    | 'bigger-then'
    | 'smaller-then'
    | 'between';

export type PepSmartFilterType =
    | 'string'
    | 'boolean'
    | 'number'
    | 'date'
    | 'date-time';

export class PepSmartFilter {
    id: string;
    title: string;
    type: PepSmartFilterType;
    isOpen?: boolean = false;
    hasFilter?: boolean = true;
    value?: string = '';
}
