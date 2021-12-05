import { PepSmartFilterOperators, IPepSmartFilterOperator } from '../../../common/model/operator';

export interface IPepFilterBuilderOperator {
    apiId: string;
    smartFilterId: string;
}

const Equals: IPepFilterBuilderOperator = {
    apiId: 'IsEqual',
    smartFilterId: 'eq'
};

const NotEqual: IPepFilterBuilderOperator = {
    apiId: 'IsNotEqual',
    smartFilterId: 'neq'
};

const LessThan: IPepFilterBuilderOperator = {
    apiId: '<',
    smartFilterId: 'lt'
};

const GreaterThan: IPepFilterBuilderOperator = {
    apiId: '>',
    smartFilterId: 'gt'
};

const GreaterThanOrEquals: IPepFilterBuilderOperator = {
    apiId: '>=',
    smartFilterId: 'gtoe'
};

const LessThanOrEquals: IPepFilterBuilderOperator = {
    apiId: '<=',
    smartFilterId: 'ltoe'
};

const NumberRange: IPepFilterBuilderOperator = {
    apiId: 'In',
    smartFilterId: 'numberRange'
};

const Contains: IPepFilterBuilderOperator = {
    apiId: 'Contains',
    smartFilterId: 'contains'
};

const BeginsWith: IPepFilterBuilderOperator = {
    apiId: 'BeginsWith',
    smartFilterId: 'beginsWith'
};

const EndsWith: IPepFilterBuilderOperator = {
    apiId: 'EndsWith',
    smartFilterId: 'endsWith'
};

const After: IPepFilterBuilderOperator = {
    apiId: 'After',
    smartFilterId: 'after'
};

const Before: IPepFilterBuilderOperator = {
    apiId: 'Before',
    smartFilterId: 'before'
};

const InTheLast: IPepFilterBuilderOperator = {
    apiId: 'InTheLast',
    smartFilterId: 'inTheLast'
};

const NotInTheLast: IPepFilterBuilderOperator = {
    apiId: 'NotInTheLast',
    smartFilterId: 'notInTheLast'
};

const Today: IPepFilterBuilderOperator = {
    apiId: 'Today',
    smartFilterId: 'today'
};

const ThisWeek: IPepFilterBuilderOperator = {
    apiId: 'ThisWeek',
    smartFilterId: 'thisWeek'
};

const ThisMonth: IPepFilterBuilderOperator = {
    apiId: 'ThisMonth',
    smartFilterId: 'thisMonth'
};

const DateRange: IPepFilterBuilderOperator = {
    apiId: 'Between',
    smartFilterId: 'dateRange'
};

const DueIn: IPepFilterBuilderOperator = {
    apiId: 'DueIn',
    smartFilterId: 'dueIn'
};

const NotDueIn: IPepFilterBuilderOperator = {
    apiId: 'NotDueIn',
    smartFilterId: 'notDueIn'
};

const On: IPepFilterBuilderOperator = {
    apiId: 'On',
    smartFilterId: 'on'
};

const IsEmpty: IPepFilterBuilderOperator = {
    apiId: 'IsEmpty',
    smartFilterId: 'isEmpty'
};

const IsNotEmpty: IPepFilterBuilderOperator = {
    apiId: 'IsNotEmpty',
    smartFilterId: 'isNotEmpty'
};

export const PepFilterBuilderOperators = [
    Equals,
    NotEqual,
    LessThan,
    LessThanOrEquals,
    GreaterThan,
    GreaterThanOrEquals,
    NumberRange,
    Contains,
    BeginsWith,
    EndsWith,
    After,
    Before,
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
    IsNotEmpty
]

export function getSmartBuilderOperator(operator: string): IPepSmartFilterOperator | null {
    let operators: Array<IPepSmartFilterOperator>;
    let apiOperator = PepFilterBuilderOperators.find(item => item.apiId === operator);
    if (apiOperator) {
        operators = Object.keys(PepSmartFilterOperators)
            .filter((key) => {
                return PepSmartFilterOperators[key].id === apiOperator.smartFilterId;
            }).map((key) => PepSmartFilterOperators[key]);
    }
    return operators?.length === 1 ? operators[0] : null;
}
