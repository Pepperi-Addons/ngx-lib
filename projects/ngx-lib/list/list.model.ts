import { ObjectSingleData } from '@pepperi-addons/ngx-lib';

export type PepListSelectionType = 'none' | 'single' | 'single-action' | 'multi';

export type PepListViewType = '' | 'cards' | 'lines' | 'table' | 'map';

export interface IPepListItemClickEvent {
    source: ObjectSingleData
}

export class PepSelectionData {
    selectionType: number;
    rows: Array<any>;
    rowTypes: Array<any>;
}

export interface IPepListChangeEvent {
    start?: number;
    end?: number;
    fromIndex?: number;
    toIndex?: number;
    addAtStart?: boolean;
    calculatedChildHeight?: number;
}

export interface IPepListSortingChangeEvent {
    sortBy: string;
    isAsc: boolean;
}