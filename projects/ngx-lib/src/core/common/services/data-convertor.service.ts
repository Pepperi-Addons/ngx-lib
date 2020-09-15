import {Injectable} from '@angular/core';
import { FieldLayout, PepperiRowData, ObjectSingleData, ObjectsDataRow, UIControl,
    ObjectsData, PepperiFieldData, UIControlField, ObjectsDataRowCell } from '../model/api.model';
import { Guid } from '../model/utilities.model';

@Injectable({
    providedIn: 'root'
})
export class DataConvertorService {
    constructor() {
    }

    convertFormData(formData: PepperiRowData): ObjectSingleData {
        const objectsData = new ObjectSingleData();
        const rowData = new ObjectsDataRow();
        const uiRow = formData.Fields;
        const uiControl = new UIControl();
        uiControl.ControlFields = [];
        uiRow.forEach( field => uiControl.ControlFields.push( this.setUIControlField(field) ));
        rowData.Fields = [];
        rowData.Type = 0;
        rowData.UID = Guid.newGuid();
        formData.Fields.forEach(field => rowData.Fields.push(this.setDataField(field)));
        objectsData.Data = rowData;
        objectsData.UIControl = uiControl;

        return objectsData;
    }

    convertListData(tableData: PepperiRowData[]): ObjectsData {
        const objectsData = new ObjectsData();
        const rows = new Array<ObjectsDataRow>();
        const uiRow = tableData[0].Fields;
        const uiControl = new UIControl();

        uiControl.ControlFields = [];
        uiRow.forEach( field => uiControl.ControlFields.push(this.setUIControlField(field)));

        tableData.forEach( row => {
            const rowData = new ObjectsDataRow();
            rowData.Fields = [];
            rowData.Type = 0;
            rowData.UID = Guid.newGuid();
            row.Fields.forEach(field => rowData.Fields.push(this.setDataField(field)));
            rows.push(rowData);
        });

        objectsData.Rows = rows;
        objectsData.UIControl = uiControl;

        return objectsData;
    }

    setUIControlField(field: PepperiFieldData): UIControlField {
        const controlField = new UIControlField();
        controlField.ApiName = field.ApiName;
        controlField.FieldType = field.FieldType;
        // { X: 1, Width: 1, XAlignment: field.XAlignment, Y: 1, Height: 1, YAlignment: 1 };
        controlField.Layout = new FieldLayout(1, 1, field.XAlignment, 1, 1, 1);
        controlField.Title =  field.Title;
        controlField.ReadOnly =  false;
        controlField.ColumnWidth = field.ColumnWidth;
        controlField.ColumnWidthType = field.ColumnWidthType || 1;
        return controlField;
    }

    setDataField(field: PepperiFieldData): ObjectsDataRowCell {
        const dataField = new ObjectsDataRowCell();
        dataField.AdditionalValue = field.AdditionalValue;
        dataField.ApiName = field.ApiName;
        dataField.Enabled = true;
        dataField.FieldType = field.FieldType;
        dataField.FormattedValue = field.FormattedValue || field.Value.toString();
        dataField.GroupFields = null;
        dataField.NotificationInfo = '';
        dataField.OptionalValues = field.OptionalValues;
        dataField.ReferenceObjectSubType = '';
        dataField.TextColor = '';
        dataField.Value = field.Value.toString();
        dataField.Visible = true;
        dataField.Type = '0';
        return dataField;
    }

    setFieldLayout(x: number, width: number, xAlignment: number,
                   y: number, height: number, yAlignment: number, lineNumber: number): FieldLayout {
        const layout = new FieldLayout(x, width, xAlignment, y, height, yAlignment, lineNumber);
        return layout;
    }
}
