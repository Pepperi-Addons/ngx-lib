import { IPepSmartFilterOperatorUnit, PepSmartFilterOperatorUnits } from '../../../common/model/operator';

export class PepFilterBuilderOperatorUnitMap {
    private map: Map<string, IPepSmartFilterOperatorUnit>;

    constructor() {
        this.map = new Map<string, IPepSmartFilterOperatorUnit>();
        this.map.set('Days', PepSmartFilterOperatorUnits.Days);
        this.map.set('Weeks', PepSmartFilterOperatorUnits.Weeks);
        this.map.set('Months', PepSmartFilterOperatorUnits.Months);
        this.map.set('Years', PepSmartFilterOperatorUnits.Years);
    }

    /**
     * Converts input Api field type to smart builder type
     * @param type Api field type
     * @returns Smart builder field type
     */
    getSmartBuilderOperatorUnit(key: string): IPepSmartFilterOperatorUnit | null {
        let item = this.map.get(key);
        return item ? item : null;
    }

}
