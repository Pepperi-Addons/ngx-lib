export type PepChipsOrientationType = 'horizontal'
| 'vertical'
    
export type PepChipsInputType = 'input'
| 'select'

export interface IPepChip {
    value: string;
    disabled?: boolean;
    selected?: boolean;
    removable?: boolean;
    selectable?: boolean;
}
export interface IPepChipSelection {
    value: string;
    isSelected: boolean;
}