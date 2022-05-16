import { 
    PepSmartFilterOperators, 
    PepSmartFilterAdditionalOperators,
    PepSmartFilterVariableOperators,
    IPepSmartFilterOperator 
} from '@pepperi-addons/ngx-lib/smart-filters';
import { PepSmartFilterType } from '@pepperi-addons/ngx-lib/smart-filters';

export interface IPepQueryBuilderOperator {
    legacy: string, //legacy Operator    
    smartFilter: IPepSmartFilterOperator, //smart filter operator    
    type: PepSmartFilterType[] | null //smart filter type
}

const Equals: IPepQueryBuilderOperator = {
    legacy: 'IsEqual',
    smartFilter: PepSmartFilterOperators.Equals,
    type: ['boolean', 'int', 'text']
};

const EqualsVariable: IPepQueryBuilderOperator = {
    legacy: 'IsEqualVariable',
    smartFilter: PepSmartFilterVariableOperators.EqualsToVariable,
    type: ['boolean', 'int', 'text']
};

const NotEqual: IPepQueryBuilderOperator = {
    legacy: 'IsNotEqual',
    smartFilter: PepSmartFilterOperators.NotEqual,
    type: null
};

const NotEqualsVariable: IPepQueryBuilderOperator = {
    legacy: 'IsNotEqualVariable',
    smartFilter: PepSmartFilterVariableOperators.NotEqualsToVariable,
    type: ['boolean', 'int', 'text']
};

const LessThan: IPepQueryBuilderOperator = {
    legacy: '<',
    smartFilter: PepSmartFilterOperators.LessThan,
    type: null
};

const LessThanVarible: IPepQueryBuilderOperator = {
    legacy: 'LessThanVarible',
    smartFilter: PepSmartFilterVariableOperators.LessThanVariable,
    type: null
};

const GreaterThan: IPepQueryBuilderOperator = {
    legacy: '>',
    smartFilter: PepSmartFilterOperators.GreaterThan,
    type: null
};

const GreaterThanVarible: IPepQueryBuilderOperator = {
    legacy: 'GreaterThanVarible',
    smartFilter: PepSmartFilterVariableOperators.GreaterThanVariable,
    type: null
};

/*
const GreaterThanOrEquals: IPepQueryBuilderOperator = {
    legacy: {
        operator: '>=',
        type: 'Integer'
    },
    smartFilter: {
        item: PepSmartFilterOperators.GreaterThanOrEquals,
        type: 'int'
    }
};

const LessThanOrEquals: IPepQueryBuilderOperator = {
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

const NumberRange: IPepQueryBuilderOperator = {
    legacy: 'Between',
    smartFilter: PepSmartFilterOperators.NumberRange,
    type: ['int']
};

const Contains: IPepQueryBuilderOperator = {
    legacy: 'Contains',
    smartFilter: PepSmartFilterOperators.Contains,
    type: null
};

/*
const BeginsWith: IPepQueryBuilderOperator = {
    legacy: {
        operator: 'BeginsWith',
        type: 'String'
    },
    smartFilter: {
        item: PepSmartFilterOperators.BeginsWith,
        type: 'text'
    }
};

const EndsWith: IPepQueryBuilderOperator = {
    legacy: {
        operator: 'EndsWith',
        type: 'String'
    },
    smartFilter: {
        item: PepSmartFilterOperators.EndsWith,
        type: 'text'
    }
};

const Before: IPepQueryBuilderOperator = {
    legacy: {
        operator: 'Before',
        type: 'Date'
    },
    smartFilter: {
        item: PepSmartFilterOperators.Before,
        type: 'date'
    }
};

const After: IPepQueryBuilderOperator = {
    legacy: {
        operator: 'After',
        type: 'Date'
    },
    smartFilter: {
        item: PepSmartFilterOperators.After,
        type: 'date'
    }
}; */

const InTheLast: IPepQueryBuilderOperator = {
    legacy: 'InTheLast',
    smartFilter: PepSmartFilterOperators.InTheLast,
    type: null
};

const InTheLastCalendar: IPepQueryBuilderOperator = {
    legacy: 'InTheLastCalendar',
    smartFilter: PepSmartFilterAdditionalOperators.InTheLastCalendar,
    type: null
}

const InTheLastVariable: IPepQueryBuilderOperator = {
    legacy: 'InTheLastVariable',
    smartFilter: PepSmartFilterVariableOperators.InTheLastVariable,
    type: null
}

const NotInTheLast: IPepQueryBuilderOperator = {
    legacy: 'NotInTheLast',
    smartFilter: PepSmartFilterOperators.NotInTheLast,
    type: null
};

const NotInTheLastCalendar: IPepQueryBuilderOperator = {
    legacy: 'NotInTheLastCalendar',
    smartFilter: PepSmartFilterAdditionalOperators.NotInTheLastCalendar,
    type: null
}

const Today: IPepQueryBuilderOperator = {
    legacy: 'Today',
    smartFilter: PepSmartFilterOperators.Today,
    type: null
};

const ThisWeek: IPepQueryBuilderOperator = {
    legacy: 'ThisWeek',
    smartFilter: PepSmartFilterOperators.ThisWeek,
    type: null
};

const ThisMonth: IPepQueryBuilderOperator = {
    legacy: 'ThisMonth',
    smartFilter: PepSmartFilterOperators.ThisMonth,
    type: null
};

const DateRange: IPepQueryBuilderOperator = {
    legacy: 'Between',
    smartFilter: PepSmartFilterOperators.DateRange,
    type: ['date-time']
};

const dateRangeVariable: IPepQueryBuilderOperator = {
    legacy: 'BetweenVariable',
    smartFilter: PepSmartFilterVariableOperators.DateRangeVariable,
    type: ['date-time']
};

const DueIn: IPepQueryBuilderOperator = {
    legacy: 'DueIn',
    smartFilter: PepSmartFilterOperators.DueIn,
    type: null
};

const NotDueIn: IPepQueryBuilderOperator = {
    legacy: 'NotDueIn',
    smartFilter: PepSmartFilterOperators.NotDueIn,
    type: null
};

const On: IPepQueryBuilderOperator = {
    legacy: 'On',
    smartFilter: PepSmartFilterOperators.On,
    type: null
};

const IsEmpty: IPepQueryBuilderOperator = {
    legacy: 'IsEmpty',
    smartFilter: PepSmartFilterOperators.IsEmpty,
    type: null
};

const IsNotEmpty: IPepQueryBuilderOperator = {
    legacy: 'IsNotEmpty',
    smartFilter: PepSmartFilterOperators.IsNotEmpty,
    type: null
};

const In: IPepQueryBuilderOperator = {
    legacy: 'IsEqual',
    smartFilter: PepSmartFilterOperators.In,
    type: ['multi-select']
};


const PepQueryBuilderOperators = [
    Equals,
    EqualsVariable, 
    NotEqual,
    NotEqualsVariable,
    LessThan,
    LessThanVarible,
    //   LessThanOrEquals,
    GreaterThan,
    GreaterThanVarible,
    //   GreaterThanOrEquals,
    NumberRange,
    Contains,
    //   BeginsWith,
    //   EndsWith,
    //   After,
    //   Before,
    InTheLast,
    InTheLastVariable,
    InTheLastCalendar,
    NotInTheLast,
    NotInTheLastCalendar,
    Today,
    ThisWeek,
    ThisMonth,
    DateRange,
    dateRangeVariable,
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
export function getSmartFilterOperator(operator: string, type: PepSmartFilterType): IPepSmartFilterOperator | null {
    const smartFilterOperator = PepQueryBuilderOperators.find(item =>
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
    const legacyOperator = PepQueryBuilderOperators.find(item =>
        item.smartFilter === operator &&
        (item.type === null || item.type.includes(type))
    );
    return legacyOperator ? legacyOperator.legacy : null;
}
