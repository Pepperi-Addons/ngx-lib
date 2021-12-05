import { PepSmartFilterBaseField, IPepSmartFilterField } from '../../../common/model/field';
import { createSmartFilterField } from '../../../common/model/creator';
import { PepSmartFilterType } from '../../../common/model/type';
import { getSmartBuilderType } from './type';
//import { createSmartFilterField, createSmartFilter } from 'projects/ngx-lib/smart-filters/common/model/creator';

export function convertToSmartFilterFields(fields: Array<any>) {
    if (fields?.length > 0) {
        return fields.map((field) => {
            return createSmartFilterField(
                {
                    id: field.ApiName,
                    name: field.DisplayName,

                    options: field.Options

                } as IPepSmartFilterField
                , getSmartBuilderType(field.Type) as PepSmartFilterType)

        })
    }

}