import {
    PepSmartFilterOperators,
    PepSmartFilterAdditionalOperators,
    PepSmartFilterVariableOperators,
    IPepSmartFilterOperator
} from '@pepperi-addons/ngx-lib/smart-filters';
import { PepSmartFilterType } from '@pepperi-addons/ngx-lib/smart-filters';

export type IpepQueryBuilderValueType = 'Static' | 'Dynamic';
export interface IPepQueryBuilderOperator {
    legacy: string, //legacy Operator    
    valueType: IpepQueryBuilderValueType,
    smartFilter: IPepSmartFilterOperator, //smart filter operator    
    type: PepSmartFilterType[] | null //smart filter type
}

const Equals: IPepQueryBuilderOperator = {
    legacy: 'IsEqual',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.Equals,
    type: ['boolean', 'int', 'text', 'real']
};

const EqualsVariable: IPepQueryBuilderOperator = {
    legacy: 'IsEqual',
    valueType: 'Dynamic',
    smartFilter: PepSmartFilterVariableOperators.EqualsToVariable,
    type: ['boolean', 'int', 'text', 'multi-select']
};

const NotEqual: IPepQueryBuilderOperator = {
    legacy: 'IsNotEqual',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.NotEqual,
    type: null
};

const NotEqualsVariable: IPepQueryBuilderOperator = {
    legacy: 'IsNotEqual',
    valueType: 'Dynamic',
    smartFilter: PepSmartFilterVariableOperators.NotEqualsToVariable,
    type: ['boolean', 'multi-select']
};

const LessThan: IPepQueryBuilderOperator = {
    legacy: '<',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.LessThan,
    type: null
};

const LessThanVariable: IPepQueryBuilderOperator = {
    legacy: '<',
    valueType: 'Dynamic',
    smartFilter: PepSmartFilterVariableOperators.LessThanVariable,
    type: null
};

const GreaterThan: IPepQueryBuilderOperator = {
    legacy: '>',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.GreaterThan,
    type: null
};

const GreaterThanVariable: IPepQueryBuilderOperator = {
    legacy: '>',
    valueType: 'Dynamic',
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
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.NumberRange,
    type: ['int']
};

const Contains: IPepQueryBuilderOperator = {
    legacy: 'Contains',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.Contains,
    type: null
};

const BeginsWith: IPepQueryBuilderOperator = {
    legacy: 'StartWith',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.BeginsWith,
    type: null
};

const EndsWith: IPepQueryBuilderOperator = {
    legacy: 'EndWith',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.EndsWith,
    type: null
};

const InTheLast: IPepQueryBuilderOperator = {
    legacy: 'InTheLast',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.InTheLast,
    type: null
};

const InTheLastCalendar: IPepQueryBuilderOperator = {
    legacy: 'InTheLastCalendar',
    valueType: 'Static',
    smartFilter: PepSmartFilterAdditionalOperators.InTheLastCalendar,
    type: null
}

/*
const InTheLastVariable: IPepQueryBuilderOperator = {
    legacy: 'InTheLast',
    valueType: 'Dynamic',
    smartFilter: PepSmartFilterVariableOperators.InTheLastVariable,
    type: null
} */

const NotInTheLast: IPepQueryBuilderOperator = {
    legacy: 'NotInTheLast',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.NotInTheLast,
    type: null
};

const NotInTheLastCalendar: IPepQueryBuilderOperator = {
    legacy: 'NotInTheLastCalendar',
    valueType: 'Static',
    smartFilter: PepSmartFilterAdditionalOperators.NotInTheLastCalendar,
    type: null
}

const Today: IPepQueryBuilderOperator = {
    legacy: 'Today',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.Today,
    type: null
};

const ThisWeek: IPepQueryBuilderOperator = {
    legacy: 'ThisWeek',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.ThisWeek,
    type: null
};

const ThisMonth: IPepQueryBuilderOperator = {
    legacy: 'ThisMonth',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.ThisMonth,
    type: null
};

const DateRange: IPepQueryBuilderOperator = {
    legacy: 'Between',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.DateRange,
    type: ['date-time']
};

const dateRangeVariable: IPepQueryBuilderOperator = {
    legacy: 'Between',
    valueType: 'Dynamic',
    smartFilter: PepSmartFilterVariableOperators.DateRangeVariable,
    type: ['date-time']
};

const DueIn: IPepQueryBuilderOperator = {
    legacy: 'DueIn',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.DueIn,
    type: null
};

const NotDueIn: IPepQueryBuilderOperator = {
    legacy: 'NotDueIn',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.NotDueIn,
    type: null
};

const On: IPepQueryBuilderOperator = {
    legacy: 'On',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.On,
    type: null
};

const IsEmpty: IPepQueryBuilderOperator = {
    legacy: 'IsEmpty',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.IsEmpty,
    type: null
};

const IsNotEmpty: IPepQueryBuilderOperator = {
    legacy: 'IsNotEmpty',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.IsNotEmpty,
    type: null
};

const In: IPepQueryBuilderOperator = {
    legacy: 'IsEqual',
    valueType: 'Static',
    smartFilter: PepSmartFilterOperators.In,
    type: ['multi-select']
};

const InVariable: IPepQueryBuilderOperator = {
    legacy: 'IsEqual',
    valueType: 'Dynamic',
    smartFilter: PepSmartFilterVariableOperators.InVariable,
    type: ['multi-select', 'text']
};


const PepQueryBuilderOperators = [
    Equals,
    EqualsVariable,
    NotEqual,
    NotEqualsVariable,
    LessThan,
    LessThanVariable,
    //   LessThanOrEquals,
    GreaterThan,
    GreaterThanVariable,
    //   GreaterThanOrEquals,
    NumberRange,
    Contains,
    BeginsWith,
    EndsWith,
    //   After,
    //   Before,
    InTheLast,
    // InTheLastVariable,
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
    In,
    InVariable
]

/**
 * gets a smart filter operator item
 * @param operator legacy operator
 * @param type smart filter's type
 * @returns smart filter operator item
 */
export function getSmartFilterOperator(operator: string, type: PepSmartFilterType, valueType: IpepQueryBuilderValueType): IPepSmartFilterOperator | null {
    const smartFilterOperator = PepQueryBuilderOperators.find(item =>
        item.legacy === operator &&
        item.valueType === valueType &&
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

/**
 * gets a value type of the operator value
 * @param operator smart filter operator item
 * @param type smart filter's type
 * @returns value type operator value
 */
 export function getValueTypeOperator(operator: IPepSmartFilterOperator, type: PepSmartFilterType): IpepQueryBuilderValueType {
    const valueType = PepQueryBuilderOperators.find(item =>
        item.smartFilter === operator &&
        (item.type === null || item.type.includes(type))
    );
    return valueType ? valueType.valueType : 'Static';
}
