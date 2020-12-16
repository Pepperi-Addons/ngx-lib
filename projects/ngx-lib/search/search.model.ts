export type PepSearchStateType = 'open' | 'close';

export class PepSearchClick {
    value: string;
    
    constructor(value: string = '') {
        this.value = value;
    }
}

export class PepSearchValueChange {
    value: string;
    top: number;
    
    constructor(data: Partial<PepSearchValueChange>) {
        Object.assign(this, data);
    }
}