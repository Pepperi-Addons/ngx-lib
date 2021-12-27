
import { IPepSmartFilterOperatorUnit, PepSmartFilterOperatorUnits } from '../../../common/model/operator';

interface IPepFilterBuilderOperationUnit {
    legacy: string,
    smartFilter: IPepSmartFilterOperatorUnit,
}

const Days: IPepFilterBuilderOperationUnit = {
    legacy: 'Days',
    smartFilter: PepSmartFilterOperatorUnits.Days
};

const Weeks: IPepFilterBuilderOperationUnit = {
    legacy: 'Weeks',
    smartFilter: PepSmartFilterOperatorUnits.Weeks
};

const Months: IPepFilterBuilderOperationUnit = {
    legacy: 'Months',
    smartFilter: PepSmartFilterOperatorUnits.Months
};

const Years: IPepFilterBuilderOperationUnit = {
    legacy: 'Years',
    smartFilter: PepSmartFilterOperatorUnits.Years
};

const PepFilterBuilderOperationUnit = [
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
export function getSmartBuilderOperationUnit(operationUnit: string): IPepSmartFilterOperatorUnit | null {
    const smartFilterOperationUnit: IPepFilterBuilderOperationUnit = PepFilterBuilderOperationUnit.find(unit => unit.legacy === operationUnit);
    return smartFilterOperationUnit ? smartFilterOperationUnit.smartFilter : null;
}

/**
 * gets a legacy operation unit value
 * @param operationUnit smart filter operation unit item
 * @returns legacy operation unit value
 */
export function getLegacyOperationUnit(operationUnit: IPepSmartFilterOperatorUnit): string | null {
    const legacyOperationUnit: IPepFilterBuilderOperationUnit = PepFilterBuilderOperationUnit.find(unit => unit.smartFilter === operationUnit);
    return legacyOperationUnit ? legacyOperationUnit.legacy : null;
}
