import { Injectable } from '@angular/core';
import {
    FieldLayout,
    ObjectsDataRow,
    UIControl,
    UIControlField,
    ObjectsDataRowCell,
    FIELD_TYPE,
    X_ALIGNMENT_TYPE,
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
    UUID?: string;
    IsEditable?: boolean;
    IsSelectableForActions?: boolean;
    Fields: PepFieldData[];
}

@Injectable({
    providedIn: 'root',
})
export class PepDataConvertorService {
    getUiControl(formData: PepRowData): UIControl {
        const uiControl = new UIControl();

        if (formData?.Fields?.length > 0) {
            const uiRow = formData.Fields;
            uiControl.ControlFields = [];
            uiRow.forEach((field) =>
                uiControl.ControlFields.push(this.setUIControlField(field))
            );
        }

        return uiControl;
    }

    convertFormData(formData: PepRowData): ObjectsDataRow {
        const rowData = new ObjectsDataRow();
        rowData.Fields = [];
        rowData.Type = 0;
        rowData.UID = PepGuid.newGuid();
        formData.Fields.forEach((field) =>
            rowData.Fields.push(this.setDataField(field))
        );

        return rowData;
    }

    convertListData(
        tableData: PepRowData[],
        rowUUID = ''
    ): Array<ObjectsDataRow> {
        const rows = new Array<ObjectsDataRow>();

        if (tableData.length > 0) {
            tableData.forEach((row) => {
                const rowData = new ObjectsDataRow();
                rowData.Fields = [];
                rowData.Type = 0;
                rowData.UID = rowUUID
                    ? rowUUID
                    : row.UUID
                        ? row.UUID
                        : PepGuid.newGuid();
                if (row.IsEditable === false) {
                    rowData.IsEditable = false;
                }
                if (row.IsSelectableForActions === false) {
                    rowData.IsSelectableForActions = false;
                }
                row.Fields.forEach((field) =>
                    rowData.Fields.push(this.setDataField(field))
                );
                rows.push(rowData);
            });
        }

        return rows;
    }

    setUIControlField(field: PepFieldData): UIControlField {
        const controlField = new UIControlField();
        controlField.ApiName = field.ApiName;
        controlField.FieldType = field.FieldType;

        controlField.Layout = new FieldLayout({
            X: 1,
            Width: 1,
            XAlignment: field.XAlignment,
            Y: 1,
            Height: 1,
            YAlignment: 1,
        });

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
        dataField.FormattedValue =
            field.FormattedValue || field.Value.toString();
        dataField.GroupFields = null;
        dataField.NotificationInfo = '';
        dataField.OptionalValues = field.OptionalValues;
        dataField.ReferenceObjectSubType = '';
        dataField.TextColor = '';
        dataField.Value = field.Value.toString();
        dataField.Visible = true;
        return dataField;
    }

    setFieldLayout(
        x: number,
        width: number,
        xAlignment: number,
        y: number,
        height: number,
        yAlignment: number,
        lineNumber: number
    ): FieldLayout {
        const layout = new FieldLayout({
            X: x,
            Width: width,
            XAlignment: xAlignment,
            Y: y,
            Height: height,
            YAlignment: yAlignment,
            LineNumber: lineNumber,
        });

        return layout;
    }
}
