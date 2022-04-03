import { ObjectsDataRow } from '@pepperi-addons/ngx-lib';

export type PepListSelectionType =
    | 'none'
    | 'single'
    | 'multi';

export type PepListPagerType = 'pages' | 'scroll';

export type PepListViewType = '' | 'cards' | 'lines' | 'table'; // | 'map';

export type PepListCardSizeType = 'sm' | 'md';

export type PepListTableViewType = 'compact' | 'regular';

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
    fromIndex: number;
    toIndex: number;
    // updateItemsFunc: () => void; //() => any; 
}

export interface IPepListLoadPageEvent {
    pageIndex: number;
    pageSize: number;
    // updatePageFunc: () => void; //() => any; 
}

export interface IPepListStartIndexChangeEvent {
    startIndex: number;
}

export const DEFAULT_PAGE_SIZE = 50;

export interface IPepListSortingChangeEvent {
    sortBy: string;
    isAsc: boolean;
}
