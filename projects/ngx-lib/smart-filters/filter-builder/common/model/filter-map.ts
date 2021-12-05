import { PepSmartFilterOperators, IPepSmartFilterOperator } from '../../../common/model/operator';

export class PepFilterMap {
    private map: Map<string, IPepFilterMapItem>;

    constructor() {
        this.map = new Map<string, IPepFilterMapItem>();
        this.map.set('IsEqual', { operator: PepSmartFilterOperators.Equals });
        this.map.set('IsNotEqual', { operator: PepSmartFilterOperators.NotEqual });
        this.map.set('<', { operator: PepSmartFilterOperators.LessThan });
        this.map.set('>', { operator: PepSmartFilterOperators.GreaterThan });

        //this.map.set('>=', { operator: PepSmartFilterOperators.NotEqual });
        //this.map.set('<=', { operator: PepSmartFilterOperators.NotEqual });

        this.map.set('Contains', { operator: PepSmartFilterOperators.Contains });
        //this.map.set('BeginsWith', { operator: PepSmartFilterOperators.NotEqual });
        //this.map.set('EndsWith', { operator: PepSmartFilterOperators.LessThan });
        //this.map.set('>', { operator: PepSmartFilterOperators.GreaterThan });


        //TODO - complete table    
    }

    getSmartBuilderOperator(key: string) {
        this.map.get(key)
    }
}

interface IPepFilterMapItem {
    operator: IPepSmartFilterOperator;
}


