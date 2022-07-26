export type PepChipsOrientationType = 'vertical'
| 'horizontal';

export interface IPepChip {
    value: string;
    disabled?: boolean;
    selected?: boolean;
    removable?: boolean;
    selectable?: boolean;
}
    
export type PepChipsInputType = 'input'
| 'select'
    