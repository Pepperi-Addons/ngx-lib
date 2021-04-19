export type PepMenuType = 'action' | 'action-select' | 'select';

export type PepMenuItemType = 'regular' | 'splitter';

export type PepMenuStateType = 'visible' | 'hidden';

export class PepMenuItemParent {
    key: string;
    parent?: PepMenuItemParent = null;

    constructor(data: PepMenuItem) {
        this.key = data.key;
        this.parent = data.parent;
    }
}
export class PepMenuItem {
    key: string;
    text?: string;
    disabled?: boolean = false;
    hidden?: boolean = false;
    iconName?: string = null;
    type?: PepMenuItemType = 'regular';
    children?: Array<PepMenuItem> = null;
    parent?: PepMenuItemParent = null;

    constructor(data: Partial<PepMenuItem>) {
        Object.assign(this, data);
    }
}

export interface IPepMenuItemClickEvent {
    source: PepMenuItem;
}

export interface IPepMenuStateChangeEvent {
    state: PepMenuStateType;
}
