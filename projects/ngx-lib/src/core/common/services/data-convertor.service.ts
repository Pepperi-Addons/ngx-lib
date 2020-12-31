import { Injectable } from '@angular/core';
import {
    FieldLayout, ObjectSingleData, ObjectsDataRow, UIControl,
    ObjectsData, UIControlField, ObjectsDataRowCell, FIELD_TYPE, X_ALIGNMENT_TYPE
} from '../model/wapi.model';
import { PepGuid } from '../model/utilities.model';

export class PepFieldData {
    ApiName: string;
    Enabled?: boolean;
    Value: string;
    FormattedValue?: string;
    FieldType: FIELD_TYPE;
    ReadOnly?: boolean;
    ColumnWidth: number;
    ColumnWidthType?: number;
    XAlignment: X_ALIGNMENT_TYPE;
    Title: string;
    AdditionalValue?: string;
    OptionalValues?: any;

    constructor(
        options: {
            ApiName?: string;
            Enabled?: boolean;
            Value?: string;
            FormattedValue?: string;
            FieldType?: FIELD_TYPE;
            ReadOnly?: boolean;
            ColumnWidth?: number;
            ColumnWidthType?: number;
            XAlignment?: X_ALIGNMENT_TYPE;
            Title?: string;
        } = {}
    ) {
        this.ApiName = options.ApiName;
        this.Enabled = !!options.Enabled;
        this.Value = options.Value;
        this.FormattedValue = options.FormattedValue || '';
        this.FieldType = options.FieldType;
        this.ReadOnly = !!options.ReadOnly;
        this.ColumnWidth = options.ColumnWidth;
        this.ColumnWidthType = options.ColumnWidthType;
        this.XAlignment = options.XAlignment || X_ALIGNMENT_TYPE.Left;
        this.Title = options.Title || '';
    }
}
export class PepRowData {
    Fields: PepFieldData[];
}

@Injectable({
    providedIn: 'root'
})
export class PepDataConvertorService {
    constructor() {
    }

    convertFormData(formData: PepRowData): ObjectSingleData {
        const objectsData = new ObjectSingleData();
        const rowData = new ObjectsDataRow();
        const uiRow = formData.Fields;
        const uiControl = new UIControl();
        uiControl.ControlFields = [];
        uiRow.forEach(field => uiControl.ControlFields.push(this.setUIControlField(field)));
        rowData.Fields = [];
        rowData.Type = 0;
        rowData.UID = PepGuid.newGuid();
        formData.Fields.forEach(field => rowData.Fields.push(this.setDataField(field)));
        objectsData.Data = rowData;
        objectsData.UIControl = uiControl;

        return objectsData;
    }

    convertListData(tableData: PepRowData[], rowUUID = ''): ObjectsData {
        const objectsData = new ObjectsData();
        const uiControl = new UIControl();
        const rows = new Array<ObjectsDataRow>();

        if (tableData.length > 0) {
            const uiRow = tableData[0].Fields;

            uiControl.ControlFields = [];
            uiRow.forEach(field => uiControl.ControlFields.push(this.setUIControlField(field)));

            tableData.forEach(row => {
                const rowData = new ObjectsDataRow();
                rowData.Fields = [];
                rowData.Type = 0;
                rowData.UID = rowUUID ? rowUUID : PepGuid.newGuid();
                row.Fields.forEach(field => rowData.Fields.push(this.setDataField(field)));
                rows.push(rowData);
            });
        }

        objectsData.Rows = rows;
        objectsData.UIControl = uiControl;

        return objectsData;
    }

    setUIControlField(field: PepFieldData): UIControlField {
        const controlField = new UIControlField();
        controlField.ApiName = field.ApiName;
        controlField.FieldType = field.FieldType;
        // { X: 1, Width: 1, XAlignment: field.XAlignment, Y: 1, Height: 1, YAlignment: 1 };
        // controlField.Layout = new FieldLayout(1, 1, field.XAlignment, 1, 1, 1);
        controlField.Layout = new FieldLayout(
            { X: 1, Width: 1, XAlignment: field.XAlignment, Y: 1, Height: 1, YAlignment: 1 }
        );
        controlField.Title = field.Title;
        controlField.ReadOnly = field.ReadOnly === true ? true : false;
        controlField.ColumnWidth = field.ColumnWidth;
        controlField.ColumnWidthType = field.ColumnWidthType || 1;
        return controlField;
    }

    setDataField(field: PepFieldData): ObjectsDataRowCell {
        const dataField = new ObjectsDataRowCell();
        dataField.AdditionalValue = field.AdditionalValue;
        dataField.ApiName = field.ApiName;
        dataField.Enabled = field.Enabled === false ? false : true;
        dataField.FieldType = field.FieldType;
        dataField.FormattedValue = field.FormattedValue || field.Value.toString();
        dataField.GroupFields = null;
        dataField.NotificationInfo = '';
        dataField.OptionalValues = field.OptionalValues;
        dataField.ReferenceObjectSubType = '';
        dataField.TextColor = '';
        dataField.Value = field.Value.toString();
        dataField.Visible = true;
        // dataField.Type = '0';
        return dataField;
    }

    setFieldLayout(x: number, width: number, xAlignment: number,
        y: number, height: number, yAlignment: number, lineNumber: number): FieldLayout {
        const layout = new FieldLayout({
            X: x,
            Width: width,
            XAlignment: xAlignment,
            Y: y,
            Height: height,
            YAlignment: yAlignment,
            LineNumber: lineNumber
        });

        return layout;
    }
}
