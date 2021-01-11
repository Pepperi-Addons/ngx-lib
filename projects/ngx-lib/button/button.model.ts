export class PepButton {
    key: string;
    value?: string;
    class?: string;
    icon?: string;
    callback?: (action: IPepButtonClickEvent) => void;

    constructor(data: Partial<PepButton>) {
        Object.assign(this, data);
    }
}

export interface IPepButtonClickEvent {
    source: PepButton;
    event?: Event;
}
