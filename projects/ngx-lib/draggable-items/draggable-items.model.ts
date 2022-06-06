export type PepDraggableItemsTitleType = 'none' | 'regular' | 'with-bottom-border';

export type PepDraggableItemPlaceholderType = 'none' | 'regular' | 'weak';

export interface IPepDraggableItem {
    title: string;
    data: IPepDraggableItemData
    disabled?: boolean;
}

export interface IPepDraggableItemData {
    key: string;
    [key: string]: any;
}