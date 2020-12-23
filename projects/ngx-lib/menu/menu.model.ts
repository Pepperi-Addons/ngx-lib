export type PepMenuType = 'action' | 'select';

export type PepMenuItemType = 'regular' | 'splitter';

export type PepMenuStateType = 'visible' | 'hidden';

export class PepMenuItem {
    key: string;
    text?: string;
    disabled?: boolean = false;
    hidden?: boolean = false;
    iconName?: string = null;
    type?: PepMenuItemType = 'regular';
    children?: Array<PepMenuItem> = null;

    constructor(data: Partial<PepMenuItem>){
        Object.assign(this, data);
    }
}

export interface IPepMenuItemClickEvent {
    source: PepMenuItem;
}

export interface IPepMenuStateChangeEvent {
    state: PepMenuStateType;
}
