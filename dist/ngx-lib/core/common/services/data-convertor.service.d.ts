import { FieldLayout, PepperiRowData, ObjectSingleData, ObjectsData, PepperiFieldData, UIControlField, ObjectsDataRowCell } from '../model/api.model';
import * as i0 from "@angular/core";
export declare class DataConvertorService {
    constructor();
    convertFormData(formData: PepperiRowData): ObjectSingleData;
    convertListData(tableData: PepperiRowData[]): ObjectsData;
    setUIControlField(field: PepperiFieldData): UIControlField;
    setDataField(field: PepperiFieldData): ObjectsDataRowCell;
    setFieldLayout(x: number, width: number, xAlignment: number, y: number, height: number, yAlignment: number, lineNumber: number): FieldLayout;
    static ɵfac: i0.ɵɵFactoryDef<DataConvertorService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DataConvertorService>;
}
