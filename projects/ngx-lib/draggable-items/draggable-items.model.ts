export type PepDraggableItemsTitleType = 'none' | 'regular' | 'with-bottom-border';

export type PepDraggableItemPlaceholderType = 'none' | 'regular' | 'weak';

export interface IPepDraggableItem {
    title: string;
    data: any
    disabled?: boolean;
}