
import { IPepSmartFilterOperatorUnit, PepSmartFilterOperatorUnits } from '@pepperi-addons/ngx-lib/smart-filters';

interface IPepQueryBuilderOperationUnit {
    legacy: string,
    smartFilter: IPepSmartFilterOperatorUnit,
}

const Days: IPepQueryBuilderOperationUnit = {
    legacy: 'Days',
    smartFilter: PepSmartFilterOperatorUnits.Days
};

const Weeks: IPepQueryBuilderOperationUnit = {
    legacy: 'Weeks',
    smartFilter: PepSmartFilterOperatorUnits.Weeks
};

const Months: IPepQueryBuilderOperationUnit = {
    legacy: 'Months',
    smartFilter: PepSmartFilterOperatorUnits.Months
};

const Years: IPepQueryBuilderOperationUnit = {
    legacy: 'Years',
    smartFilter: PepSmartFilterOperatorUnits.Years
};

const PepQueryBuilderOperationUnit = [
    Days,
    Weeks,
    Months,
    Years,
];

/**
 * gets a smart filter operation unit item
 * @param operationUnit legacy operation unit
 * @returns smart filter operation unit item
 */
export function getSmartFilterOperationUnit(operationUnit: string): IPepSmartFilterOperatorUnit | null {
    const smartFilterOperationUnit: IPepQueryBuilderOperationUnit = PepQueryBuilderOperationUnit.find(unit => unit.legacy === operationUnit);
    return smartFilterOperationUnit ? smartFilterOperationUnit.smartFilter : null;
}

/**
 * gets a legacy operation unit value
 * @param operationUnit smart filter operation unit item
 * @returns legacy operation unit value
 */
export function getLegacyOperationUnit(operationUnit: IPepSmartFilterOperatorUnit): string | null {
    const legacyOperationUnit: IPepQueryBuilderOperationUnit = PepQueryBuilderOperationUnit.find(unit => unit.smartFilter === operationUnit);
    return legacyOperationUnit ? legacyOperationUnit.legacy : null;
}
