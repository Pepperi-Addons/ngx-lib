import { PepSmartFilterType } from '@pepperi-addons/ngx-lib/smart-filters';


export class PepQueryBuilderTypeMap {
    private map: Map<string, PepSmartFilterType>;

    constructor() {
        this.loadTypes();
    }

    private loadTypes() {
        this.map = new Map<string, PepSmartFilterType>();
        this.map.set('Bool', 'boolean');
        this.map.set('JsonBool', 'boolean');
        this.map.set('Integer', 'int');
        this.map.set('Double', 'real');
        this.map.set('String', 'text');
        this.map.set('Guid', 'text');
        this.map.set('Date', 'date');
        this.map.set('DateTime', 'date-time');
        this.map.set('MultipleStringValues', 'multi-select');
    }

    /**
     * Converts legacy field type to smart filter type
     * @param type legacy type
     * @returns smart filter field type
     */
    getSmartFilterType(key: string): PepSmartFilterType | null {
        const item = this.map.get(key);
        return item ? item : null;
    }

}

