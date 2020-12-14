import { PepIcon } from '@pepperi-addons/ngx-lib/icon';

export type PepMenuItemType = 'text' | 'splitter';

export type PepMenuStateType = 'visible' | 'hidden';

export class PepMenuItem {
    key: string;
    title?: string;
    disabled?: boolean = false;
    hidden?: boolean = false;
    iconName?: string = null;
    type?: PepMenuItemType = 'text';
    children?: Array<PepMenuItem> = null;

    constructor(data: Partial<PepMenuItem>){
        Object.assign(this, data);
    }
}

export class PepMenuItemClick {
    constructor(
        public source: PepMenuItem,
    ) { }
}
