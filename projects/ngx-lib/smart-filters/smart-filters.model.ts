// export enum SMART_SEARCH_TYPE {
//     'text' = 1,
//     'checkbox' = 2,
//     'date' = 3,
//     'number' = 4,
//     'dateAndTime' = 6,
//     'realNumber' = 7,
//     'boolean' = 8
// }

export type PepSmartFilterType = 'string' | 'boolean' | 'number' | 'date' | 'date-time';

export class PepSmartFilterData {
    id: string;
    title: string;
    type: PepSmartFilterType;
}
