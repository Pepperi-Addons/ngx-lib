import { ObjectsDataRow } from '@pepperi-addons/ngx-lib';

export type PepListSelectionType =
    | 'none'
    | 'single'
    | 'single-action'
    | 'multi';

export type PepListPagerType = 'pages' | 'scroll';

export type PepListViewType = '' | 'cards' | 'lines' | 'table' | 'map';

export interface IPepListItemClickEvent {
    source: ObjectsDataRow;
    viewType: PepListViewType;
}

export class PepSelectionData {
    selectionType: number;
    rows: Array<any>;
    rowTypes: Array<any>;
}

export interface IPepListLoadItemsEvent {
    start: number;
    end: number;
    fromIndex: number;
    toIndex: number;
}

export interface IPepListLoadPageEvent {
    pageIndex: number;
    pageSize: number;
}

export const DEFAULT_PAGE_SIZE = 50;

export interface IPepListSortingChangeEvent {
    sortBy: string;
    isAsc: boolean;
}
