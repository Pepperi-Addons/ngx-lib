export type PepDialogSizeType =
    | 'inline'
    | 'small'
    | 'regular'
    | 'large'
    | 'full-screen';

export type PepDialogActionsType =
    | 'close'
    | 'cancel-continue'
    | 'cancel-ok'
    | 'cancel-delete'
    | 'custom';

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
    actionsType: PepDialogActionsType;
    content: any;
    showClose: boolean;
    showHeader: boolean;
    showFooter: boolean;
    actionButtons: Array<PepDialogActionButton>;

    constructor(options: {
        title?: string;
        actionsType?: PepDialogActionsType;
        content?: any;
        contentDisabled?: boolean;
        showClose?: boolean;
        showHeader?: boolean;
        showFooter?: boolean;
        actionButtons?: Array<PepDialogActionButton>;
    }) {
        this.title = options.title || '';
        this.actionsType = options.actionsType || 'close';
        this.content = options.content || '';
        this.showClose = options.showClose ?? false;
        this.showHeader = options.showHeader ?? true;
        this.showFooter = options.showFooter ?? true;
        this.actionButtons = options.actionButtons ?? null;
    }
}

export class PepDialogCustomizeData extends PepDialogData {
    [key: string]: any;

    constructor(options: any) {
        super(options);

        // Foreach rest properties save the rest[property] in this[property].
        const { title, actionsType, content, contentDisabled, showClose, showHeader, showFooter, actionButtons, ...rest } = options;
        Object.keys(rest).forEach((key) => {
            if (key in this) {
                this[key] = rest[key];
            }
        });
    }
}
