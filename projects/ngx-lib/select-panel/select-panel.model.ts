export class PepButton {
    key: string;
    value?: string;
    classNames?: string;
    disabled?: boolean;
    iconName?: string;
    iconPosition?: 'start' | 'end';
    callback?: (action: IPepButtonClickEvent) => void;

    constructor(data: Partial<PepButton>) {
        Object.assign(this, data);
    }
}

export interface IPepButtonClickEvent {
    source: PepButton;
    event?: Event;
}
