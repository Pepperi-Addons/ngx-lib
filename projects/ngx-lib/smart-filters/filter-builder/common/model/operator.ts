import { PepSmartFilterOperators, IPepSmartFilterOperator } from '../../../common/model/operator';
import { PepSmartFilterType } from '../../../common/model/type';

export interface IPepFilterBuilderOperator {
    //Legacy Operator
    legacy: string,
    //Smart filter Operator
    smartFilter: IPepSmartFilterOperator,
    //Smart filter type
    type: PepSmartFilterType[]
    /*legacy: {
        operator: string,
        type: string[] | null
    },
    smartFilter: {
        item: IPepSmartFilterOperator,
        type: PepSmartFilterType[] | null
    } */
}

const Equals: IPepFilterBuilderOperator = {
    legacy: 'IsEqual',
    smartFilter: PepSmartFilterOperators.Equals,
    type: ['boolean', 'int', 'text']
    /*legacy: {
        operator: 'IsEqual',
        type: ['Boolean', 'Integer', 'Double', 'String']
    },
    smartFilter: {
        item: PepSmartFilterOperators.Equals,
        type: ['boolean', 'int', 'text']
    } */
};

const NotEqual: IPepFilterBuilderOperator = {
    legacy: 'IsNotEqual',
    smartFilter: PepSmartFilterOperators.NotEqual,
    type: null
    /*legacy: {
        operator: 'IsNotEqual',
        type: null
    },
    smartFilter: {
        item: PepSmartFilterOperators.NotEqual,
        type: null
    } */
};

const LessThan: IPepFilterBuilderOperator = {
    legacy: '<',
    smartFilter: PepSmartFilterOperators.LessThan,
    type: null
    /*legacy: {
        operator: '<',
        type: null//['Integer', 'Double']
    },
    smartFilter: {
        item: PepSmartFilterOperators.LessThan,
        type: null//['int']
    } */
};

const GreaterThan: IPepFilterBuilderOperator = {
    legacy: '>',
    smartFilter: PepSmartFilterOperators.GreaterThan,
    type: null
    /*legacy: {
        operator: '>',
        type: null//['Integer', 'Double']
    },
    smartFilter: {
        item: PepSmartFilterOperators.GreaterThan,
        type: null//['int']
    } */
};

/*
const GreaterThanOrEquals: IPepFilterBuilderOperator = {
    legacy: {
        operator: '>=',
        type: 'Integer'
    },
    smartFilter: {
        item: PepSmartFilterOperators.GreaterThanOrEquals,
        type: 'int'
    }
};

const LessThanOrEquals: IPepFilterBuilderOperator = {
    legacy: {
        operator: '<=',
        type: 'Integer'
    },
    smartFilter: {
        item: PepSmartFilterOperators.LessThanOrEquals,
        type: 'int',
        type: 'Integer'
    }
}; */

const NumberRange: IPepFilterBuilderOperator = {
    legacy: 'Between',
    smartFilter: PepSmartFilterOperators.NumberRange,
    type: ['int']
    /*legacy: {
        operator: 'Between',
        type: ['Integer', 'Double']
    },
    smartFilter: {
        item: PepSmartFilterOperators.NumberRange,
        type: ['int']
    } */
};

const Contains: IPepFilterBuilderOperator = {
    legacy: 'Contains',
    smartFilter: PepSmartFilterOperators.Contains,
    type: null
    /*legacy: {
        operator: 'Contains',
        type: null//['String']
    },
    smartFilter: {
        item: PepSmartFilterOperators.Contains,
        type: null//['text']
    } */
};
/*
const BeginsWith: IPepFilterBuilderOperator = {
    legacy: {
        operator: 'BeginsWith',
        type: 'String'
    },
    smartFilter: {
        item: PepSmartFilterOperators.BeginsWith,
        type: 'text'
    }
};

const EndsWith: IPepFilterBuilderOperator = {
    legacy: {
        operator: 'EndsWith',
        type: 'String'
    },
    smartFilter: {
        item: PepSmartFilterOperators.EndsWith,
        type: 'text'
    }
};

const Before: IPepFilterBuilderOperator = {
    legacy: {
        operator: 'Before',
        type: 'Date'
    },
    smartFilter: {
        item: PepSmartFilterOperators.Before,
        type: 'date'
    }
};

const After: IPepFilterBuilderOperator = {
    legacy: {
        operator: 'After',
        type: 'Date'
    },
    smartFilter: {
        item: PepSmartFilterOperators.After,
        type: 'date'
    }
}; */

const InTheLast: IPepFilterBuilderOperator = {
    legacy: 'InTheLast',
    smartFilter: PepSmartFilterOperators.InTheLast,
    type: null
    /*legacy: {
        operator: 'InTheLast',
        type: null//['Date', 'Integer']
    },
    smartFilter: {
        item: PepSmartFilterOperators.InTheLast,
        type: null//['date', 'int']
    } */
};

const NotInTheLast: IPepFilterBuilderOperator = {
    legacy: 'NotInTheLast',
    smartFilter: PepSmartFilterOperators.NotInTheLast,
    type: null
    /*legacy: {
        operator: 'NotInTheLast',
        type: null//['Date', 'Integer']
    },
    smartFilter: {
        item: PepSmartFilterOperators.NotInTheLast,
        type: null//['date', 'int']
    } */
};

const Today: IPepFilterBuilderOperator = {
    legacy: 'Today',
    smartFilter: PepSmartFilterOperators.Today,
    type: null
    /*legacy: {
        operator: 'Today',
        type: null//['Date']
    },
    smartFilter: {
        item: PepSmartFilterOperators.Today,
        type: null//['date']
    } */
};

const ThisWeek: IPepFilterBuilderOperator = {
    legacy: 'ThisWeek',
    smartFilter: PepSmartFilterOperators.ThisWeek,
    type: null
    /*legacy: {
        operator: 'ThisWeek',
        type: null//['Date']
    },
    smartFilter: {
        item: PepSmartFilterOperators.ThisWeek,
        type: null//['date']
    } */
};

const ThisMonth: IPepFilterBuilderOperator = {
    legacy: 'ThisMonth',
    smartFilter: PepSmartFilterOperators.ThisMonth,
    type: null
    /*legacy: {
        operator: 'ThisMonth',
        type: null//['Date']
    },
    smartFilter: {
        item: PepSmartFilterOperators.ThisMonth,
        type: null//['date']
    } */
};

const DateRange: IPepFilterBuilderOperator = {
    legacy: 'Between',
    smartFilter: PepSmartFilterOperators.DateRange,
    type: ['date-time']
    /*legacy: {
        operator: 'Between',
        type: ['DateTime']
    },
    smartFilter: {
        item: PepSmartFilterOperators.DateRange,
        type: ['date-time']
    } */
};

const DueIn: IPepFilterBuilderOperator = {
    legacy: 'DueIn',
    smartFilter: PepSmartFilterOperators.DueIn,
    type: null
    /*legacy: {
        operator: 'DueIn',
        type: null//['Date', 'Integer']
    },
    smartFilter: {
        item: PepSmartFilterOperators.DueIn,
        type: null//['date', 'int']
    } */
};

const NotDueIn: IPepFilterBuilderOperator = {
    legacy: 'NotDueIn',
    smartFilter: PepSmartFilterOperators.NotDueIn,
    type: null
    /*legacy: {
        operator: 'NotDueIn',
        type: null//['Date', 'Integer']
    },
    smartFilter: {
        item: PepSmartFilterOperators.NotDueIn,
        type: null//['date', 'int']
    } */
};

const On: IPepFilterBuilderOperator = { //vv
    legacy: 'On',
    smartFilter: PepSmartFilterOperators.On,
    type: null
    /*legacy: {
        operator: 'On',
        type: null//['Date']
    },
    smartFilter: {
        item: PepSmartFilterOperators.On,
        type: null//['date']
    } */
};

const IsEmpty: IPepFilterBuilderOperator = {
    legacy: 'IsEmpty',
    smartFilter: PepSmartFilterOperators.IsEmpty,
    type: null
    /*legacy: {
        operator: 'IsEmpty',
        type: null
    },
    smartFilter: {
        item: PepSmartFilterOperators.IsEmpty,
        type: null
    } */
};

const IsNotEmpty: IPepFilterBuilderOperator = {
    legacy: 'IsNotEmpty',
    smartFilter: PepSmartFilterOperators.IsNotEmpty,
    type: null
    /*legacy: {
        operator: 'IsNotEmpty',
        type: null
    },
    smartFilter: {
        item: PepSmartFilterOperators.IsNotEmpty,
        type: null
    } */
};

const In: IPepFilterBuilderOperator = {
    legacy: 'IsEqual',
    smartFilter: PepSmartFilterOperators.In,
    type: ['multi-select']
    /*legacy: {
        operator: 'IsEqual',
        type: ['MultipleStringValues']
    },
    smartFilter: {
        item: PepSmartFilterOperators.In,
        type: ['multi-select']
    } */
};


const PepFilterBuilderOperators = [
    Equals,
    NotEqual,
    LessThan,
    //   LessThanOrEquals,
    GreaterThan,
    //   GreaterThanOrEquals,
    NumberRange,
    Contains,
    //   BeginsWith,
    //   EndsWith,
    //   After,
    //   Before,
    InTheLast,
    NotInTheLast,
    Today,
    ThisWeek,
    ThisMonth,
    DateRange,
    DueIn,
    NotDueIn,
    On,
    IsEmpty,
    IsNotEmpty,
    In
]

export function getSmartBuilderOperator(operator: string, type: PepSmartFilterType): IPepSmartFilterOperator | null {
    const smartFilterOperator = PepFilterBuilderOperators.find(item =>
        item.legacy === operator &&
        (item.type === null || item.type.includes(type))
    );
    return smartFilterOperator ? smartFilterOperator.smartFilter : null;


    //const smartFilterOperator = PepFilterBuilderOperators.find(item => item.legacy.operator === operator);
    //return smartFilterOperator ? smartFilterOperator.smartFilter.item : null;


    /*if (legacyOperator2) {

    }
    //
    let operators: Array<IPepSmartFilterOperator>;
    let legacyOperator = PepFilterBuilderOperators.find(item => item.legacy.id === operator);
    if (legacyOperator) {
        operators = Object.keys(PepSmartFilterOperators)
            .filter((key) => {
                return PepSmartFilterOperators[key].id === legacyOperator.smartFilter.id;
            }).map((key) => PepSmartFilterOperators[key]);
    }
    return operators?.length === 1 ? operators[0] : null; */
}

export function getLegacyOperator(operator: IPepSmartFilterOperator, type: PepSmartFilterType): string | null {
    const legacyOperator = PepFilterBuilderOperators.find(item =>
        item.smartFilter === operator &&
        (item.type === null || item.type.includes(type))
    );
    return legacyOperator ? legacyOperator.legacy : null;
    /*const legacyOperator = PepFilterBuilderOperators.find(item => item.smartFilter.item === operator && item.smartFilter.type === type);
    return legacyOperator ? legacyOperator.legacy.operator : null; */
}
