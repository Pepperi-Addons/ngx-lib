export class PepSearchChangedData {
    value: string;
    
    constructor(data: Partial<PepSearchChangedData>) {
        Object.assign(this, data);
    }
}

export class PepSearchAutocompleteChangedData extends PepSearchChangedData {
    
    constructor(data: Partial<PepSearchAutocompleteChangedData>) {
        super(data);
        Object.assign(this, data);
    }
}