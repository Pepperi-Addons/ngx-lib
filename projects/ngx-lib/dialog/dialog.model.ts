export type PepDialogSizeType = 'inline' | 'small' | 'regular' | 'large' | 'full-screen';

export type PepDialogActionsType = 'close' | 'cancel-continue' | 'cancel-ok' | 'cancel-delete' | 'custom';

export class PepDialogActionButton {
    title = '';
    className = '';
    callback: () => void;

    constructor(title = '', className = '', callback: () => void = null) {
        this.title = title;
        this.className = className;
        this.callback = callback;
    }
}

export class PepDialogData {
    title: string;
    type: PepDialogActionsType;
    content: any;
    showClose: boolean;
    showHeader: boolean;
    showFooter: boolean;
    actionButtons: Array<PepDialogActionButton>;

    constructor(
        options: {
            title?: string,
            type?: PepDialogActionsType,
            content?: any,
            contentDisabled?: boolean,
            showClose?: boolean,
            showHeader?: boolean,
            showFooter?: boolean,
            actionButtons?: Array<PepDialogActionButton>
        }
    ) {
        this.title = options.title || '';
        this.type = options.type || 'close';
        this.content = options.content || '';
        this.showClose = options.showClose ?? true;
        this.showHeader = options.showHeader ?? true;
        this.showFooter = options.showFooter ?? true;
        this.actionButtons = options.actionButtons ?? null;
    }
}