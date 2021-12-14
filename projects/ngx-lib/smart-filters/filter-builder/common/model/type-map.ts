import { PepSmartFilterType } from '../../../common/model/type';

export class PepFilterBuilderTypeMap {
    private map: Map<string, PepSmartFilterType>;

    constructor() {
        this.loadTypes();
    }

    private loadTypes() {
        this.map = new Map<string, PepSmartFilterType>();
        this.map.set('Bool', 'boolean');
        this.map.set('JsonBool', 'boolean');
        this.map.set('Integer', 'int');
        this.map.set('Double', 'int');
        this.map.set('String', 'text');
        this.map.set('Guid', 'text');
        this.map.set('Date', 'date');
        this.map.set('DateTime', 'date-time');
        this.map.set('MultipleStringValues', 'multi-select');
    }

    /**
     * Converts legacy field type to smart builder type
     * @param type legacy type
     * @returns smart builder field type
     */
    getSmartBuilderType(key: string): PepSmartFilterType | null {
        let item = this.map.get(key);
        return item ? item : null;
    }

}

