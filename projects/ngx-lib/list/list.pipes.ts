import { Pipe, PipeTransform } from '@angular/core';
import { ObjectsDataRow } from '@pepperi-addons/ngx-lib';
import { PepListSelectionType } from './list.model';

@Pipe({
    name: 'isItemSelected'
})
export class IsItemSelectedPipe implements PipeTransform {
    SEPARATOR = ',';

    private getUniqItemId(itemId: string, itemType = ''): string {
        return itemId + this.SEPARATOR + itemType;
    }

    transform(item: ObjectsDataRow, selectionTypeForActions: PepListSelectionType, selectedItemId: string, isAllSelected: boolean,
        selectedItems: Map<string, string>, unSelectedItems: Map<string, string>): any {
        let isSelected = false;

        if (selectionTypeForActions === 'single') {
            isSelected = selectedItemId === this.getUniqItemId(item?.UID, item?.Type.toString());
        } else if (selectionTypeForActions === 'single-action') {
            isSelected = (isAllSelected && !unSelectedItems.has(item?.UID)) || selectedItems.has(item?.UID);
        } else if (selectionTypeForActions === 'multi') {
            if (item?.IsSelectableForActions) {
                isSelected = (isAllSelected && !unSelectedItems.has(item?.UID)) || selectedItems.has(item?.UID);
            }
        }

        return isSelected;
    }
}

@Pipe({
    name: 'isItemDisabled'
})
export class IsItemDisabledPipe implements PipeTransform {
    transform(item: ObjectsDataRow, lockItemInnerEvents: boolean): any {
        return (
            lockItemInnerEvents || (item && !item.IsSelectableForActions)
        );
    }
}