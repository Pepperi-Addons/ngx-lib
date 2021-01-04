export type PepSmartFilterType =
    | 'string'
    | 'boolean'
    | 'number'
    | 'date'
    | 'date-time';

export class PepSmartFilterData {
    id: string;
    title: string;
    type: PepSmartFilterType;
}
