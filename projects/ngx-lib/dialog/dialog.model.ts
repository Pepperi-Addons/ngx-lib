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
    // contentType: PepDialogDataType;
    // contentData?: any;
    showClose: boolean;
    showHeader: boolean;
    showFooter: boolean;
    actionButtons: Array<PepDialogActionButton>;

    constructor(
        options: {
            title?: string,
            type?: PepDialogActionsType,
            content?: any,
            // contentType?: PepDialogDataType,
            contentDisabled?: boolean,
            // contentData?: any,
            showClose?: boolean,
            showHeader?: boolean,
            showFooter?: boolean,
            actionButtons?: Array<PepDialogActionButton>
        }
    ) {
        this.title = options.title || '';
        this.type = options.type || 'close';
        this.content = options.content || '';
        // this.contentType = options.contentType || PepDialogDataType.Html;
        // this.contentData = options.contentData || { disabled: true };
        this.showClose = options.showClose === undefined ? true : options.showClose;
        this.showHeader = options.showHeader === undefined ? true : options.showHeader;
        this.showFooter = options.showFooter === undefined ? true : options.showFooter;
        this.actionButtons = options.actionButtons ?? null;
        // this.showLoadingSpinner = showLoadingSpinner;
    }
}