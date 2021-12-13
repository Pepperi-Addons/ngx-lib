import { PepSmartFilterOperators, IPepSmartFilterOperator } from '../../../common/model/operator';
import { PepSmartFilterType } from '../../../common/model/type';

export interface IPepFilterBuilderOperator {
    legacy: string, //legacy Operator    
    smartFilter: IPepSmartFilterOperator, //smart filter operator    
    type: PepSmartFilterType[] | null //smart filter type
}

const Equals: IPepFilterBuilderOperator = {
    legacy: 'IsEqual',
    smartFilter: PepSmartFilterOperators.Equals,
    type: ['boolean', 'int', 'text']
};

const NotEqual: IPepFilterBuilderOperator = {
    legacy: 'IsNotEqual',
    smartFilter: PepSmartFilterOperators.NotEqual,
    type: null
};

const LessThan: IPepFilterBuilderOperator = {
    legacy: '<',
    smartFilter: PepSmartFilterOperators.LessThan,
    type: null
};

const GreaterThan: IPepFilterBuilderOperator = {
    legacy: '>',
    smartFilter: PepSmartFilterOperators.GreaterThan,
    type: null
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
};

const Contains: IPepFilterBuilderOperator = {
    legacy: 'Contains',
    smartFilter: PepSmartFilterOperators.Contains,
    type: null
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
};

const NotInTheLast: IPepFilterBuilderOperator = {
    legacy: 'NotInTheLast',
    smartFilter: PepSmartFilterOperators.NotInTheLast,
    type: null
};

const Today: IPepFilterBuilderOperator = {
    legacy: 'Today',
    smartFilter: PepSmartFilterOperators.Today,
    type: null
};

const ThisWeek: IPepFilterBuilderOperator = {
    legacy: 'ThisWeek',
    smartFilter: PepSmartFilterOperators.ThisWeek,
    type: null
};

const ThisMonth: IPepFilterBuilderOperator = {
    legacy: 'ThisMonth',
    smartFilter: PepSmartFilterOperators.ThisMonth,
    type: null
};

const DateRange: IPepFilterBuilderOperator = {
    legacy: 'Between',
    smartFilter: PepSmartFilterOperators.DateRange,
    type: ['date-time']
};

const DueIn: IPepFilterBuilderOperator = {
    legacy: 'DueIn',
    smartFilter: PepSmartFilterOperators.DueIn,
    type: null
};

const NotDueIn: IPepFilterBuilderOperator = {
    legacy: 'NotDueIn',
    smartFilter: PepSmartFilterOperators.NotDueIn,
    type: null
};

const On: IPepFilterBuilderOperator = {
    legacy: 'On',
    smartFilter: PepSmartFilterOperators.On,
    type: null
};

const IsEmpty: IPepFilterBuilderOperator = {
    legacy: 'IsEmpty',
    smartFilter: PepSmartFilterOperators.IsEmpty,
    type: null
};

const IsNotEmpty: IPepFilterBuilderOperator = {
    legacy: 'IsNotEmpty',
    smartFilter: PepSmartFilterOperators.IsNotEmpty,
    type: null
};

const In: IPepFilterBuilderOperator = {
    legacy: 'IsEqual',
    smartFilter: PepSmartFilterOperators.In,
    type: ['multi-select']
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

/**
 * gets a smart filter operator item
 * @param operator legacy operator
 * @param type smart filter's type
 * @returns smart filter operator item
 */
export function getSmartBuilderOperator(operator: string, type: PepSmartFilterType): IPepSmartFilterOperator | null {
    const smartFilterOperator = PepFilterBuilderOperators.find(item =>
        item.legacy === operator &&
        (item.type === null || item.type.includes(type))
    );
    return smartFilterOperator ? smartFilterOperator.smartFilter : null;
}

/**
 * gets a legacy operator value
 * @param operator smart filter operator item
 * @param type smart filter's type
 * @returns legacy operator value
 */
export function getLegacyOperator(operator: IPepSmartFilterOperator, type: PepSmartFilterType): string | null {
    const legacyOperator = PepFilterBuilderOperators.find(item =>
        item.smartFilter === operator &&
        (item.type === null || item.type.includes(type))
    );
    return legacyOperator ? legacyOperator.legacy : null;
}
