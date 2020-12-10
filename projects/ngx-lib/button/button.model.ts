export class PepButton {
    key: string;
    value?: string;
    class?: string;
    icon?: string;
    callback?: (action: PepButtonClick) => void;

    constructor(data: Partial<PepButton>) {
        Object.assign(this, data);
    }
}

export class PepButtonClick {
    constructor(
        public source: PepButton,
        public event?: Event
    ) { }
}
