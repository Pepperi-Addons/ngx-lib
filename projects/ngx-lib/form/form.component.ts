import {
    Component, ChangeDetectionStrategy, OnInit, OnDestroy,
    Input, KeyValueDiffers, Output, EventEmitter, OnChanges, DoCheck
} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DialogService, PepDialogData } from '@pepperi-addons/ngx-lib/dialog';
import { Subscription } from 'rxjs';
import {
    PepFieldValueChangedData,
    PepFormFieldClickedData,
    PepFormFieldChangedData,
    PepLayoutType,
    FIELD_TYPE,
    CustomizationService,
    UIControl,
    UIControlField,
    ObjectSingleData,
    ObjectsDataRowCell,
    PepFieldBase,
    PepTextboxField,
    PepSelectField,
    PepInternalMenuField,
    PepQuantitySelectorField,
    PepAddressField,
    PepIndicatorsField,
    PepInternalPageField,
    PepInternalButtonField,
    PepAttachmentField,
    PepSignatureField,
    PepImageField,
    PepImagesField,
    PepTextareaField,
    PepRichHtmlTextareaField,
    PepDateField,
    PepCheckboxField,
    PepSeparatorField,
    PepPlaceholderField,
    PepHorizontalAlignment,
    PepVerticalAlignment,
    X_ALIGNMENT_TYPE,
    Y_ALIGNMENT_TYPE,
    DEFAULT_VERTICAL_ALIGNMENT,
    DEFAULT_HORIZONTAL_ALIGNMENT
} from '@pepperi-addons/ngx-lib';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
    selector: 'pep-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepFormComponent implements OnInit, DoCheck, OnChanges, OnDestroy {
    @Input() isReport = false;
    @Input() uiControlHeader: UIControl;
    @Input() lockEvents = false;
    @Input() canEditObject = true;
    @Input() singleData: ObjectSingleData;
    @Input() isActive = false;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() listType = '';
    @Input() objectId = '0';
    @Input() parentId = '0';
    @Input() searchCode = '0';
    @Input() showTitle = true;
    @Input() firstFieldAsLink = false;
    @Input() checkForChanges: any = null;
    @Input() pageType = '';

    @Output() valueChange: EventEmitter<PepFormFieldChangedData> = new EventEmitter<PepFormFieldChangedData>();
    @Output() formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() childClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() childChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() fieldClick: EventEmitter<PepFormFieldClickedData> = new EventEmitter<PepFormFieldClickedData>();
    @Output() menuItemClick: EventEmitter<PepFormFieldClickedData> = new EventEmitter<PepFormFieldClickedData>();

    isLocked = false;
    formGutterSize;
    cardGutterSize;
    rowHeight;
    lastFocusedField: any;
    matrixIsLast = false;
    // lastUpdatedFieldApiName: string = '';
    form: FormGroup;
    differ: any;

    // payLoad = '';
    rows: Array<PepFieldBase[]> = [];
    fields: PepFieldBase[] = [];
    columns = 1;

    hasMenuFloatingOnOtherField = false;
    menuField: any;
    menuDataField: any;
    hasCampaignField: any;
    hasCampaignDataField: any;
    indicatorsField: any;
    indicatorsDataField: any = null;

    shouldReloadForm = false;
    eventServiceSub: Subscription;

    public jsonLib = JSON;

    convertXAlignToHorizontalAlign(xAlign: X_ALIGNMENT_TYPE): PepHorizontalAlignment {
        let res = DEFAULT_HORIZONTAL_ALIGNMENT;

        if (xAlign === X_ALIGNMENT_TYPE.None || xAlign === X_ALIGNMENT_TYPE.Left) {
            res = 'left';
        } else if (xAlign === X_ALIGNMENT_TYPE.Right) {
            res = 'right';
        } else {
            res = 'center';
        }

        return res;
    }

    convertYAlignToVerticalAlign(yAlign: Y_ALIGNMENT_TYPE): PepVerticalAlignment {
        let res = DEFAULT_VERTICAL_ALIGNMENT;

        if (yAlign === Y_ALIGNMENT_TYPE.None || yAlign === Y_ALIGNMENT_TYPE.Top) {
            res = 'top';
        } else if (yAlign === Y_ALIGNMENT_TYPE.Bottom) {
            res = 'bottom';
        } else {
            res = 'middle';
        }

        return res;
    }

    convertAddressFields(
        controlField: UIControlField,
        addressFields: Array<ObjectsDataRowCell>,
        canEditObject: boolean): PepFieldBase[] {

        const fields: PepFieldBase[] = [];

        addressFields.forEach(field => {
            let customField: PepFieldBase;
            const placeholder = field.ApiName;

            if (field.ApiName.toLowerCase().indexOf('street') >= 0) {
                customField = new PepTextboxField({
                    key: field.ApiName,
                    label: field.ApiName,
                    type: 'text',
                    placeholder,
                    readonly: !canEditObject,
                    disabled: !field.Enabled || !canEditObject,
                    hidden: false,
                    required: false,
                    value: field.Value,
                    formattedValue: field.FormattedValue,
                    row: 0,
                    rowSpan: 1,
                    col: 0,
                    colSpan: 2,
                    xAlignment: this.convertXAlignToHorizontalAlign(controlField.Layout.XAlignment),
                    yAlignment: this.convertYAlignToVerticalAlign(controlField.Layout.YAlignment),
                    order: 0
                });
            } else if (field.ApiName.toLowerCase().indexOf('city') >= 0) {
                customField = new PepTextboxField({
                    key: field.ApiName,
                    label: field.ApiName,
                    type: 'text',
                    placeholder,
                    readonly: !canEditObject,
                    disabled: !field.Enabled || !canEditObject,
                    hidden: false,
                    required: false,
                    value: field.Value,
                    formattedValue: field.FormattedValue,
                    row: 0,
                    rowSpan: 1,
                    col: 2,
                    colSpan: 1,
                    xAlignment: this.convertXAlignToHorizontalAlign(controlField.Layout.XAlignment),
                    yAlignment: this.convertYAlignToVerticalAlign(controlField.Layout.YAlignment),
                    order: 1
                });
            } else if (field.ApiName.toLowerCase().indexOf('state') >= 0) {
                customField = new PepSelectField({
                    key: field.ApiName,
                    label: field.ApiName,
                    placeholder,
                    options: field.OptionalValues,
                    readonly: !canEditObject,
                    disabled: !field.Enabled || !canEditObject,
                    hidden: false,
                    required: false,
                    value: field.Value,
                    formattedValue: field.FormattedValue,
                    row: 1,
                    rowSpan: 1,
                    col: 0,
                    colSpan: 1,
                    xAlignment: this.convertXAlignToHorizontalAlign(controlField.Layout.XAlignment),
                    yAlignment: this.convertYAlignToVerticalAlign(controlField.Layout.YAlignment),
                    order: 2
                });
            } else if (field.ApiName.toLowerCase().indexOf('zipcode') >= 0) {
                customField = new PepTextboxField({
                    key: field.ApiName,
                    label: field.ApiName,
                    type: 'text',
                    placeholder,
                    readonly: !canEditObject,
                    disabled: !field.Enabled || !canEditObject,
                    hidden: false,
                    required: false,
                    value: field.Value,
                    formattedValue: field.FormattedValue,
                    row: 1,
                    rowSpan: 1,
                    col: 1,
                    colSpan: 1,
                    xAlignment: this.convertXAlignToHorizontalAlign(controlField.Layout.XAlignment),
                    yAlignment: this.convertYAlignToVerticalAlign(controlField.Layout.YAlignment),
                    order: 3
                });
            } else if (field.ApiName.toLowerCase().indexOf('country') >= 0) {
                customField = new PepSelectField({
                    key: field.ApiName,
                    label: field.ApiName,
                    placeholder,
                    options: field.OptionalValues,
                    readonly: !canEditObject,
                    disabled: !field.Enabled || !canEditObject,
                    hidden: false,
                    required: false,
                    value: field.Value,
                    formattedValue: field.FormattedValue,
                    row: 2,
                    rowSpan: 1,
                    col: 2,
                    colSpan: 1,
                    xAlignment: this.convertXAlignToHorizontalAlign(controlField.Layout.XAlignment),
                    yAlignment: this.convertYAlignToVerticalAlign(controlField.Layout.YAlignment),
                    order: 4
                });
            }

            fields.push(customField);
        });

        return fields.sort((n1, n2) => (n1.order > n2.order ? 1 : n1.order < n2.order ? -1 : 0));
    }

    isMatrixField(apiNameToCheck: string): boolean {
        return apiNameToCheck.indexOf('Matrix') >= 0;
    }

    doesFieldHavaFloatingField(controlField: UIControlField, floatingField: any): boolean {
        let hasFloatingField = false;
        if (
            floatingField.Layout.Y >= controlField.Layout.Y &&
            floatingField.Layout.Y < controlField.Layout.Y + controlField.Layout.Height &&
            floatingField.Layout.X >= controlField.Layout.X &&
            floatingField.Layout.X < controlField.Layout.X + controlField.Layout.Width
        ) {
            hasFloatingField = true;
        }

        return hasFloatingField;
    }

    getOptionsForCustomField(controlField: UIControlField, dataField: any, canEditObject: boolean): any {
        if (!controlField || !dataField) { return; }

        const placeholder = controlField.ReadOnly || !canEditObject ? '' : controlField.Title;

        return {
            key: controlField.ApiName,
            label: controlField.Title,
            accessory: dataField.Accessory,
            placeholder,
            readonly: controlField.ReadOnly || !canEditObject,
            disabled: !dataField.Enabled || !canEditObject,
            hidden: controlField.Hidden,
            required: controlField.Mandatory,
            value: dataField.Value,
            formattedValue: dataField.FormattedValue,
            additionalValue: dataField.AdditionalValue,
            row: controlField.Layout.Y,
            rowSpan: controlField.Layout.Height,
            col: controlField.Layout.X,
            colSpan: controlField.Layout.Width,
            xAlignment: this.convertXAlignToHorizontalAlign(controlField.Layout.XAlignment),
            yAlignment: this.convertYAlignToVerticalAlign(controlField.Layout.YAlignment),
            options: dataField.OptionalValues,
            groupFields: undefined,
            maxFieldCharacters: controlField.MaxFieldCharacters,
            minValue: controlField.MinValue,
            maxValue: controlField.MaxValue,
            // hasMenu: hasMenu,
            // hasCampaign: hasCampaign,
            // hasIndicators: hasIndicators,
            textColor: dataField.TextColor
        };
    }

    convertToCustomField(controlField: UIControlField, dataField: any, canEditObject: boolean,
        menuField: any, hasCampaignField: any, indicatorsField: any,
        objectId: any, parentId: any, searchCode: any): PepFieldBase {
        let customField: PepFieldBase;
        const options = this.getOptionsForCustomField(controlField, dataField, canEditObject);

        if (controlField.ApiName === 'ObjectMenu') {
            options.type = 'menu';
            customField = new PepInternalMenuField(options);
        } else if (controlField.ApiName === 'QuantitySelector' ||
            controlField.ApiName === 'UnitsQuantity' ||
            controlField.ApiName.indexOf('size_') === 0) {
            if (dataField.FieldType === FIELD_TYPE.InternalLink) {
                options.type = 'button';
            } else if (dataField.FieldType === FIELD_TYPE.Package) {
                options.type = 'packageButton';
            } else if (dataField.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                dataField.FieldType === FIELD_TYPE.NumberReal) {
                options.type = 'qs';
                options.alowDecimal = true;
            } else if (dataField.FieldType === FIELD_TYPE.NumberIntegerQuantitySelector ||
                dataField.FieldType === FIELD_TYPE.NumberInteger) {
                options.type = 'qs';
                options.alowDecimal = false;
            } else if (dataField.FieldType === FIELD_TYPE.NumberIntegerForMatrix) {
                options.type = 'qsForMatrix';
                options.alowDecimal = false;
            } else if (dataField.FieldType === FIELD_TYPE.NumberRealForMatrix) {
                options.type = 'qsForMatrix';
                options.alowDecimal = true;
            }

            options.notificationInfo = dataField.NotificationInfo;

            customField = new PepQuantitySelectorField(options);
        } else {
            // Hack need to remove this..
            if (dataField.FieldType === FIELD_TYPE.Indicators && this.isMatrixField(dataField.ApiName)) {
                dataField.FieldType = FIELD_TYPE.InternalPage;
            }

            switch (dataField.FieldType) {
                case FIELD_TYPE.Address: {
                    const canEditGroupObject = controlField.ReadOnly ? false : canEditObject;
                    options.groupFields = this.convertAddressFields(controlField,
                        dataField.GroupFields, canEditGroupObject);
                    customField = new PepAddressField(options);
                    break;
                }
                case FIELD_TYPE.Indicators: {
                    // options['type'] = 'indicators'; // Not needed this is PepIndicatorsField.
                    customField = new PepIndicatorsField(options);
                    break;
                }
                case FIELD_TYPE.InternalPage: {
                    if (this.isMatrixField(controlField.ApiName)) {
                        options.rowSpan = controlField.Layout.Height;
                        options.objectId = objectId;
                        options.parentId = parentId;
                        options.searchCode = searchCode;

                        customField = new PepInternalPageField(options);
                    } else {
                        // Not supported
                    }
                    break;
                }
                case FIELD_TYPE.Link: {
                    options.type = 'link';
                    customField = new PepTextboxField(options);
                    break;
                }
                case FIELD_TYPE.InternalLink:
                case FIELD_TYPE.Button: {
                    options.type = 'button';
                    customField = new PepInternalButtonField(options);
                    break;
                }
                case FIELD_TYPE.Attachment: {
                    // options.type = 'attachment';
                    customField = new PepAttachmentField(options);
                    break;
                }
                case FIELD_TYPE.Signature: {
                    // options.type = 'signature';
                    customField = new PepSignatureField(options);
                    break;
                }
                case FIELD_TYPE.Image:
                case FIELD_TYPE.ImageURL: {
                    // options.type = 'image';
                    options.menuField = menuField && this.doesFieldHavaFloatingField(controlField, menuField) ? menuField : null;
                    options.hasCampaignField = hasCampaignField &&
                        this.doesFieldHavaFloatingField(controlField, hasCampaignField) ? hasCampaignField : null;
                    options.indicatorsField = indicatorsField &&
                        this.doesFieldHavaFloatingField(controlField, indicatorsField) ? indicatorsField : null;

                    customField = new PepImageField(options);
                    break;
                }
                case FIELD_TYPE.Images: {
                    // options.type = 'images';
                    customField = new PepImagesField(options);
                    break;
                }
                case FIELD_TYPE.Email: {
                    options.type = 'email';
                    customField = new PepTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Phone: {
                    options.type = 'phone';
                    customField = new PepTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Duration: {
                    options.type = 'duration';
                    customField = new PepTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Default:
                case FIELD_TYPE.TextBox:
                case FIELD_TYPE.LimitedLengthTextBox:
                case FIELD_TYPE.TextHeader:
                case FIELD_TYPE.CalculatedString:
                case FIELD_TYPE.MapDataString: {
                    customField = new PepTextboxField(options);
                    break;
                }
                case FIELD_TYPE.TextArea: {
                    customField = new PepTextareaField(options);
                    break;
                }

                case FIELD_TYPE.RichTextHTML: {
                    customField = new PepRichHtmlTextareaField(options);
                    break;
                }
                case FIELD_TYPE.Date:
                case FIELD_TYPE.LimitedDate:
                case FIELD_TYPE.CalculatedDate:
                case FIELD_TYPE.DateAndTime: {
                    options.type = dataField.FieldType === FIELD_TYPE.DateAndTime ? 'datetime' : 'date';
                    customField = new PepDateField(options);
                    break;
                }
                case FIELD_TYPE.NumberInteger:
                case FIELD_TYPE.CalculatedInt:
                case FIELD_TYPE.MapDataInt: {
                    options.type = 'int';
                    customField = new PepTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Percentage: {
                    options.type = 'percentage';
                    customField = new PepTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Currency: {
                    options.type = 'currency';
                    customField = new PepTextboxField(options);
                    break;
                }
                case FIELD_TYPE.NumberReal:
                case FIELD_TYPE.CalculatedReal:
                case FIELD_TYPE.MapDataReal:
                case FIELD_TYPE.Sum:
                case FIELD_TYPE.Totals: {
                    options.type = 'real';
                    customField = new PepTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Boolean:
                case FIELD_TYPE.CalculatedBool: {
                    customField = new PepCheckboxField(options);
                    break;
                }
                case FIELD_TYPE.BooleanText: {
                    options.type = 'booleanText';
                    customField = new PepCheckboxField(options);
                    break;
                }
                case FIELD_TYPE.ComboBox:
                case FIELD_TYPE.EmptyComboBox:
                case FIELD_TYPE.MapDataDropDown: {
                    // options.type = 'select';
                    customField = new PepSelectField(options);
                    break;
                }
                case FIELD_TYPE.MultiTickBox:
                case FIELD_TYPE.MultiTickBoxToComboBox:
                case FIELD_TYPE.EmptyMultiTickBox: {
                    options.type = 'multi';
                    customField = new PepSelectField(options);
                    break;
                }
                case FIELD_TYPE.GuidReferenceType: {
                    options.type = 'reference';
                    options.referenceObjectType = dataField.ReferenceObjectType;
                    options.referenceObjectSubType = dataField.ReferenceObjectSubType;
                    options.referenceObjectInternalType = dataField.ReferenceObjectInternalType;
                    customField = new PepInternalButtonField(options);
                    break;
                }
                case FIELD_TYPE.ListOfObjects: {
                    options.type = 'listofobjects';
                    customField = new PepInternalButtonField(options);
                    break;
                }
                case FIELD_TYPE.Separator: {
                    customField = new PepSeparatorField(options);
                    break;
                }
                /*
                    case FIELD_TYPE.Images: return that.field(value);
                */
                case FIELD_TYPE.NumberRealQuantitySelector:
                case FIELD_TYPE.NumberIntegerQuantitySelector: {
                    options.type = 'qs';
                    options.alowDecimal = dataField.FieldType === FIELD_TYPE.NumberRealQuantitySelector;
                    options.notificationInfo = dataField.NotificationInfo;

                    customField = new PepQuantitySelectorField(options);
                    break;
                }
                case FIELD_TYPE.Package: {
                    options.type = 'packageButton';
                    options.notificationInfo = dataField.NotificationInfo;

                    customField = new PepQuantitySelectorField(options);
                    break;
                }
            }
        }

        if (!customField) {
            options.label = controlField.ApiName + ' is not supported!!!';
            customField = new PepSeparatorField(options);
        }

        return customField;
    }

    getFieldFormattedValue(field: PepFieldBase): string {
        let fieldFormattedValue = field.formattedValue;

        // Fix for the custom check box component.
        if (field.controlType === 'checkbox') {
            fieldFormattedValue = fieldFormattedValue === 'true';
        }

        // Fix for the custom button component.
        if (field.controlType === 'button') {
            fieldFormattedValue = fieldFormattedValue === '0' ? '' : fieldFormattedValue;
        }

        return fieldFormattedValue;
    }

    private toControlGroup(fields: PepFieldBase[], fb: FormBuilder, customizationService: CustomizationService): FormGroup {
        const group = {};
        if (fields && fields.length > 0) {
            fields.forEach(field => {
                if (field.groupFields && field.groupFields.length > 0) {
                    const subGroup = {};

                    field.groupFields.forEach(groupField => {
                        if (groupField.required && (!field.readonly && !field.disabled)) {
                            subGroup[groupField.key] = [{
                                value: groupField.formattedValue || '',
                                disabled: field.readonly || field.disabled || groupField.disabled
                            }, [Validators.required]];
                        } else {
                            subGroup[groupField.key] = [{
                                value: groupField.formattedValue || '',
                                disabled: field.readonly || field.disabled || groupField.disabled
                            }, [Validators.nullValidator]];
                        }
                    });

                    group[field.key] = fb.group(subGroup);
                } else {
                    const validators = field.getValidators();
                    const fieldFormattedValue = this.getFieldFormattedValue(field);

                    group[field.key] = [{ value: fieldFormattedValue || '', disabled: field.disabled }, validators];
                }
            });
        }

        return fb.group(group);
    }

    constructor(
        private dialogService: DialogService,
        private customizationService: CustomizationService,
        private translate: TranslateService,
        public fb: FormBuilder,
        differs: KeyValueDiffers
    ) {
        // store the initial value to compare with
        this.differ = differs.find({}).create();
    }

    public showFormValidationMessage(): void {
        const fields: PepFieldBase[] = this.fields;
        let emptyMandatoryFieldsMsg = '';
        let notValidFieldsMsg = '';

        // for (let i: number = 0; i < fields.length; i++) {
        //     let field = fields[i];
        for (const field of fields) {
            const formControl = this.form && this.form.get(field.key);

            if (formControl) {
                // Mandatory is empty.
                if (field.required && formControl.value.toString().trim().length === 0) {
                    emptyMandatoryFieldsMsg += '<li><small>' + field.label + '</small></li>';
                } else if (!field.disabled && !formControl.valid) {
                    notValidFieldsMsg += '<li><small>' + field.label + '</small></li>';
                }
            }
        }

        // Add the header message of the empty mandatory fields
        if (emptyMandatoryFieldsMsg.length > 0) {
            emptyMandatoryFieldsMsg = '<div>' + this.translate.instant('MESSAGES.ERROR_MANDATORY_FIELDS') +
                '</div><ul style=\'padding: 0 20px;\'>' + emptyMandatoryFieldsMsg + '</ul><br/>';
        }

        // Add the header message of the empty mandatory fields
        if (notValidFieldsMsg.length > 0) {
            notValidFieldsMsg = '<div>' + this.translate.instant('MESSAGES.ERROR_INVALID_FIELDS') +
                '</div><ul style=\'padding: 0 20px;\'>' + notValidFieldsMsg + '</ul>';
        }

        const title = this.translate.instant('MESSAGES.TITLE_NOTICE');
        const data = new PepDialogData({
            title,
            content: emptyMandatoryFieldsMsg + notValidFieldsMsg
        });
        this.dialogService.openDefaultDialog(data);
    }

    ngOnInit(): void {
        const themeVars = this.customizationService.getThemeVariables();
        // convert rem to pixel
        const RemToPixel = 16;
        this.formGutterSize = this.customizationService.getNumberThemeVariable(themeVars,
            CustomizationService.FORM_SPACEING_KEY) * RemToPixel;
        this.cardGutterSize = this.customizationService.getNumberThemeVariable(themeVars,
            CustomizationService.CARD_SPACEING_KEY) * RemToPixel;
    }

    ngDoCheck(): void {
        const changes = this.differ.diff(this.singleData); // check for changes

        if (changes) {
            this.updateForm(true);
        }
    }

    ngOnChanges(changes): void {
        if (changes.singleData && changes.singleData.currentValue) {
            // Load changes
            if (!this.shouldReloadForm && changes.singleData.previousValue) {
                this.singleData = changes.singleData.currentValue;
                this.updateForm();
            } else {
                this.shouldReloadForm = false;
                this.initForm(changes);
            }
        }

        this.checkForChanges = new Date();
    }

    ngOnDestroy(): void {
        if (this.valueChange) { this.valueChange.unsubscribe(); }

        if (this.formValidationChange) { this.formValidationChange.unsubscribe(); }

        if (this.childClick) { this.childClick.unsubscribe(); }

        if (this.childChange) { this.childChange.unsubscribe(); }

        if (this.fieldClick) { this.fieldClick.unsubscribe(); }

        if (this.menuItemClick) { this.menuItemClick.unsubscribe(); }
    }

    getUiControlFields(): Array<UIControlField> {
        return this.uiControlHeader ?
            this.uiControlHeader.ControlFields :
            this.singleData.UIControl.ControlFields;
    }

    initFieldsStructure(fields: PepFieldBase[], maxRow: number): void {
        const themeVars = this.customizationService.getThemeVariables();

        // Set form row height.
        if (this.layoutType === 'card') {
            const cardFieldHeight = this.customizationService.getNumberThemeVariable(themeVars,
                CustomizationService.CARD_FIELD_HEIGHT_KEY);
            this.rowHeight = cardFieldHeight;
        } else {
            const rowFieldHeight = this.customizationService.getNumberThemeVariable(themeVars,
                CustomizationService.FORM_FIELD_HEIGHT_KEY);
            const rowFieldTitleHeight = this.customizationService.getNumberThemeVariable(themeVars,
                CustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY);
            this.rowHeight = rowFieldHeight + rowFieldTitleHeight;
        }

        // Create the fields structure (the fields must be sorted!!!).
        if (fields.length > 0) {
            // Init the layout.
            if (
                // this.layoutType === 'form' ||
                this.layoutType === 'table'
            ) {
                this.fields = fields;
                this.rows = [];

                for (let i = 0; i <= maxRow; i++) {
                    this.rows[i] = [];
                }

                // for (let i = 0; i < fields.length; i++) {
                // const field = fields[i]
                for (const field of fields) {
                    this.rows[field.row].push(field);
                }
            } else {
                const doesfieldExistIn: boolean[][] = new Array(maxRow);

                for (let i = 0; i < doesfieldExistIn.length; i++) {
                    doesfieldExistIn[i] = new Array(this.columns);

                    for (let j = 0; j < doesfieldExistIn[i].length; j++) {
                        doesfieldExistIn[i][j] = false;
                    }
                }

                // Run in squere (row - colspan, col - rowspan) and put true where it should.
                // for (let index = 0; index < fields.length; index++) {
                //     const currentField = fields[index];
                for (const currentField of fields) {
                    if (currentField.rowSpan > 1) {
                        for (let row: number = currentField.row; row < currentField.row + currentField.rowSpan; row++) {
                            if (currentField.colSpan > 1) {
                                for (let col: number = currentField.col; col < currentField.col + currentField.colSpan; col++) {
                                    if (doesfieldExistIn.length > row && doesfieldExistIn[0].length > col) {
                                        doesfieldExistIn[row][col] = true;
                                    }
                                }
                            } else {
                                if (doesfieldExistIn.length > row && doesfieldExistIn[0].length > currentField.col) {
                                    doesfieldExistIn[row][currentField.col] = true;
                                }
                            }
                        }
                    } else if (currentField.colSpan > 1) {
                        for (let col: number = currentField.col; col < currentField.col + currentField.colSpan; col++) {
                            if (doesfieldExistIn.length > currentField.row && doesfieldExistIn[0].length > col) {
                                doesfieldExistIn[currentField.row][col] = true;
                            }
                        }
                    } else {
                        if (doesfieldExistIn.length > currentField.row && doesfieldExistIn[0].length > currentField.col) {
                            doesfieldExistIn[currentField.row][currentField.col] = true;
                        }
                    }
                }

                // Create empty fields where doesfieldExistIn is false (For the md-grid-list UI Component).
                for (let i = 0; i < doesfieldExistIn.length; i++) {
                    for (let j = 0; j < doesfieldExistIn[i].length; j++) {
                        if (!doesfieldExistIn[i][j]) {
                            // Create empty field and add it to the fields list.
                            fields.push(
                                new PepPlaceholderField({
                                    key: i + '_' + j,
                                    label: '',
                                    placeholder: '',
                                    readonly: false,
                                    disabled: false,
                                    hidden: false,
                                    required: false,
                                    value: '',
                                    formattedValue: '',
                                    row: i,
                                    rowSpan: 1,
                                    col: j,
                                    colSpan: 1,
                                    order: 1
                                })
                            );
                        }
                    }
                }

                // Sort the fields again.
                this.fields = fields.sort((f1, f2) => (f1.row > f2.row ?
                    1 : f1.row < f2.row ?
                        -1 : f1.col > f2.col ?
                            1 : f1.col < f2.col ? -1 : 0));
            }
        }
    }

    setForm(isForUpdate = false): void {
        let allFieldsAreReadOnly = true;

        if (!isForUpdate) {
            const fields = [];
            // for (let i = 0; i < this.fields.length; i++) {
            // const currentField = this.fields[i];
            for (const currentField of this.fields) {
                // Add all fields except 'internalPage' type (for children).
                if (currentField.controlType !== 'internalPage') {
                    fields.push(currentField);
                }

                if (!currentField.readonly) {
                    allFieldsAreReadOnly = false;
                }
            }

            this.form = this.toControlGroup(fields, this.fb, this.customizationService);
        }
        else {
            // Update form values if changed by calculated fields.
            // for (let i = 0; i < this.fields.length; i++) {
            // const currentField = this.fields[i];
            for (const currentField of this.fields) {

                if (currentField.controlType !== 'internalPage') {
                    if (currentField.groupFields && currentField.groupFields.length > 0) {
                        // for (let j = 0; j < currentField.groupFields.length; j++) {
                        //     let currentGroupField = currentField.groupFields[j];
                        for (const currentGroupField of currentField.groupFields) {
                            const fieldFormattedValue = this.getFieldFormattedValue(currentGroupField);
                            this.customizationService.updateFormField(this.form, currentGroupField,
                                fieldFormattedValue, currentField);

                        }
                    } else {
                        const fieldFormattedValue = this.getFieldFormattedValue(currentField);
                        // this.form.controls[currentField.key].setValue(fieldFormattedValue);
                        this.customizationService.updateFormField(this.form, currentField, fieldFormattedValue);
                    }
                }

                if (!currentField.readonly) {
                    allFieldsAreReadOnly = false;
                }
            }
        }

        let isFormValid = this.form.valid;

        // Change validation to true if all fields are read only. (By Amir.L request).
        if (!isFormValid && allFieldsAreReadOnly) {
            isFormValid = true;
        }

        this.onFormValidationChanged(isFormValid);

        // Set it to false to enable all fields.
        this.isLocked = false;
    }

    initForm(changes): void {
        if (this.singleData.Data && this.singleData.Data.Fields) {
            const fields: PepFieldBase[] = this.convertCustomFields(
                this.getUiControlFields(), this.singleData.Data.Fields);

            const maxRow = Math.max.apply(
                Math,
                fields.map((f) => {
                    return f.row + f.rowSpan;
                })
            );
            this.columns = Math.max.apply(
                Math,
                fields.map((f) => {
                    return f.col + f.colSpan;
                })
            );

            this.initFieldsStructure(fields, maxRow);
            this.setForm();
        }
    }

    private updateField(customField: PepFieldBase, updatedField: ObjectsDataRowCell): void {
        const hasFocus = this.lastFocusedField && this.lastFocusedField.id === customField.key;
        const options: any = {
            disabled: !updatedField.Enabled || !this.canEditObject,
            readonly: !updatedField.Enabled || !this.canEditObject,
            value: updatedField.Value,
            additionalValue: updatedField.AdditionalValue,
            formattedValue: updatedField.FormattedValue,
            textColor: updatedField.TextColor,
            lastFocusField: hasFocus ? this.lastFocusedField : null,
        };

        if (customField instanceof PepQuantitySelectorField) {
            const notificationInfo = updatedField.NotificationInfo;
            options.notificationInfo = notificationInfo;
        } else if (customField instanceof PepSelectField) {
            options.options = updatedField.OptionalValues;
        }

        customField.update(options);
    }

    updateForm(cleanLastFocusedField: boolean = false): void {
        if (this.singleData.Data && this.singleData.Data.Fields) {
            // for (let i = 0; i < this.singleData.Data.Fields.length; i++) {
            // let currentField = this.singleData.Data.Fields[i];
            for (const currentField of this.singleData.Data.Fields) {
                const customField = this.fields.filter(f => f.key === currentField.ApiName)[0];
                // Update all fields except 'internalPage' type (for children).
                if (customField && customField.controlType !== 'internalPage') {
                    // const hasFocus = this.lastFocusedField && this.lastFocusedField.id === customField.key;
                    // customField.updateField(currentField, this.canEditObject, hasFocus ? this.lastFocusedField : null);
                    this.updateField(customField, currentField);

                    // Update the group fields.
                    if (customField.controlType === 'address' && currentField.GroupFields) {
                        // for (let j = 0; j < currentField.GroupFields.length; j++) {
                        // let currentGroupField = currentField.GroupFields[j];
                        for (const currentGroupField of currentField.GroupFields) {
                            currentGroupField.Enabled = !currentField.Enabled ? false : currentGroupField.Enabled;

                            const customGroupField = customField.groupFields.filter(f => f.key === currentGroupField.ApiName)[0];
                            // const hasGroupFocus = this.lastFocusedField && this.lastFocusedField.id === customGroupField.key;
                            // customGroupField.updateField(currentGroupField, this.canEditObject, hasGroupFocus ? this.lastFocusedField : null);
                            this.updateField(customGroupField, currentGroupField);
                        }
                    }
                }
            }

            this.setForm(true);

            if (cleanLastFocusedField) {
                // Clean the last focused field.
                this.lastFocusedField = null;
            }
        }
    }

    public ReloadForm(): void {
        this.shouldReloadForm = true;
    }

    // onSubmit() {
    //     if (this.form.valid) {
    //         this.payLoad = JSON.stringify(this.form.value);
    //         //this.submitted.emit(this.form.value);
    //     }
    // }

    private getFormControlById(key: string): AbstractControl | null {
        let formControl = null;

        this.fields.forEach((field) => {
            if (field.key === key) {
                formControl = this.form.get(field.key);
                return;
            } else if (field.groupFields && field.groupFields.length > 0) {
                field.groupFields.forEach((groupField) => {
                    if (groupField.key === key) {
                        formControl = this.form.get(field.key + '.' + groupField.key);
                        return;
                    }
                });
            }
        });

        return formControl;
    }

    private setSpecialFields(controlFields: Array<any>, dataFields: Array<any>): void {
        // let cf;
        // for (let index = 0; index < controlFields.length; index++) {
        //     cf = controlFields[index];
        for (const cf of controlFields) {
            if (cf.ApiName === 'ObjectMenu') {
                this.menuField = cf;
            } else if (cf.ApiName === 'ItemHasActiveCampaign') {
                this.hasCampaignField = cf;
            } else if (cf.ApiName === 'ItemIndicatorsWithoutCampaign') {
                this.indicatorsField = cf;
            }
        }

        // let df;
        // for (let index = 0; index < dataFields.length; index++) {
        //     df = dataFields[index];
        for (const df of dataFields) {
            if (df.ApiName === 'ObjectMenu') {
                this.menuDataField = df;
            } else if (df.ApiName === 'ItemHasActiveCampaign') {
                this.hasCampaignDataField = df;
            } else if (df.ApiName === 'ItemIndicatorsWithoutCampaign') {
                this.indicatorsDataField = df;
            }
        }

        if (this.menuField && this.menuDataField) {
            this.menuDataField.Layout = this.menuField.Layout;
        }

        if (this.hasCampaignField && this.hasCampaignDataField) {
            this.hasCampaignDataField.Layout = this.hasCampaignField.Layout;
        }

        if (this.indicatorsField && this.indicatorsDataField) {
            this.indicatorsDataField.Layout = this.indicatorsField.Layout;
        }

        // Check if menu is floating on other field.
        // for (let index = 0; index < controlFields.length; index++) {
        //     cf = controlFields[index];
        for (const cf of controlFields) {
            if (this.menuField && cf.ApiName !== 'ObjectMenu') {
                this.hasMenuFloatingOnOtherField = this.doesFieldHavaFloatingField(cf, this.menuField);

                if (this.hasMenuFloatingOnOtherField) {
                    break;
                }
            }
        }
    }

    convertCustomFields(controlFields: Array<any>, dataFields: Array<any>): PepFieldBase[] {
        if (this.layoutType !== 'table') {
            this.setSpecialFields(controlFields, dataFields);
        } else {
            // Hack: convert to center alignment if table view & special fields)
            controlFields.forEach((field, index) => {
                if (
                    field.ApiName === 'UnitsQuantity' ||
                    field.ApiName === 'QuantitySelector' ||
                    field.ApiName === 'ObjectMenu' ||
                    field.FieldType === FIELD_TYPE.Image ||
                    field.FieldType === FIELD_TYPE.ImageURL ||
                    field.FieldType === FIELD_TYPE.Indicators ||
                    field.FieldType === FIELD_TYPE.Boolean ||
                    field.FieldType === FIELD_TYPE.CalculatedBool ||
                    field.FieldType === FIELD_TYPE.Signature ||
                    field.FieldType === FIELD_TYPE.NumberIntegerQuantitySelector ||
                    field.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                    field.FieldType === FIELD_TYPE.Package ||
                    field.FieldType === FIELD_TYPE.NumberIntegerForMatrix ||
                    field.FieldType === FIELD_TYPE.NumberRealForMatrix
                ) {
                    field.Layout.XAlignment = X_ALIGNMENT_TYPE.Center;
                }
            });
        }

        const fields: PepFieldBase[] = [];

        const matrixFields = controlFields.filter(cf => this.isMatrixField(cf.ApiName)).length;
        let matrixAlreadyPlaced = false;

        controlFields.forEach((field, index) => {
            const dataField = dataFields.filter(df => df.ApiName === field.ApiName)[0];

            if (!dataField) { return; }

            // If current view is not table view and those fields are special.
            if (this.layoutType !== 'table' &&
                ((this.hasMenuFloatingOnOtherField && this.menuField && this.menuField.ApiName === field.ApiName) ||
                    (this.indicatorsField && this.indicatorsField.ApiName === field.ApiName) ||
                    (this.hasCampaignField && this.hasCampaignField.ApiName === field.ApiName))) {
                return;
            }

            // Remove this. (fix two matrix into one)
            if (matrixFields > 0 && this.isMatrixField(field.ApiName)) {
                if (matrixFields > 1 && matrixAlreadyPlaced) {
                    return;
                }

                matrixAlreadyPlaced = true;

                if (matrixFields > 1) {
                    this.matrixIsLast = controlFields.length >= 2 ?
                        controlFields[controlFields.length - 2].ApiName === field.ApiName : false;
                } else {
                    this.matrixIsLast = controlFields[controlFields.length - 1].ApiName === field.ApiName;
                }
            }

            // Set type to link
            if (this.firstFieldAsLink && index === 0) {
                dataField.FieldType = FIELD_TYPE.InternalLink;
                dataField.Value = this.getInternalLinkHref();
            } else if (dataField.Value.length > 0 &&
                (field.FieldType === FIELD_TYPE.ReferenceType || field.FieldType === FIELD_TYPE.GuidReferenceType)) {
                const transactionUrl = this.singleData.Data.MainAction === '2' ? 'transactions/scope_items/' : 'transactions/cart/';
                dataField.Value = transactionUrl + dataField.Value;
            }

            if (field.ApiName === 'ObjectMenu') {
                const data: any = this.singleData.Data;
                dataField.Enabled = true;
                // HACK : Until "Enabled" returns from the server, we set PepMenu to be
                //        Disabled in cart on regular items and not campign items.
            }
            const customField: PepFieldBase = this.convertToCustomField(
                field,
                dataField,
                this.canEditObject,
                this.menuDataField,
                this.hasCampaignDataField,
                this.indicatorsDataField,
                this.objectId,
                this.parentId,
                this.searchCode
            );

            fields.push(customField);
        });

        return fields.sort((f1, f2) => (f1.row > f2.row ?
            1 : f1.row < f2.row ?
                -1 : f1.col > f2.col ?
                    1 : f1.col < f2.col ? -1 : 0));
    }

    onValueChanged(valueChange: PepFieldValueChangedData, isEditModal: boolean = false): void {
        this.onFormValidationChanged(this.form.valid);

        const formControl = this.getFormControlById(valueChange.key);

        const isValid = formControl ? formControl.valid : true;
        // const isValid = true;

        if (isValid) {
            // Set it to false to disable all fields.
            if (this.layoutType === 'form') {
                this.isLocked = true;
            }

            // Update the current field value.
            const currentField = this.fields.find(f => f.key === valueChange.key);
            if (currentField) {
                currentField.formattedValue = currentField.value = valueChange.value;
            }

            this.lastFocusedField = valueChange.lastFocusedField;
            const customizeObjectChangedData = new PepFormFieldChangedData(
                this.singleData.Data.UID.toString(),
                valueChange.key,
                valueChange.value,
                valueChange.controlType
            );
            this.valueChange.emit(customizeObjectChangedData);
        }
    }

    onChildClicked(childClick: any): void {
        this.childClick.emit(childClick);
    }

    onChildChanged(childChange: any): void {
        this.childChange.emit(childChange);
    }

    onFormValidationChanged(formValidationChange: any): void {
        // if (this.layoutType === 'form' || this.layoutType === 'card') {
            this.formValidationChange.emit(formValidationChange);
        // }
    }

    onClick(fieldClickEvent: any): void {
        const clickedUiControlField = this.singleData.Data.Fields.filter(f => f.ApiName === fieldClickEvent.key)[0];

        if (clickedUiControlField) {
            if (clickedUiControlField.FieldType === FIELD_TYPE.GuidReferenceType) {
                const customizeFieldClickedData = new PepFormFieldClickedData(
                    this.singleData.Data.UID.toString(),
                    fieldClickEvent.key,
                    this.singleData.Data.Type,
                    fieldClickEvent.eventWhich,
                    fieldClickEvent.value,
                    clickedUiControlField.FieldType,
                    fieldClickEvent.otherData
                );
                this.fieldClick.emit(customizeFieldClickedData);
            } else if (clickedUiControlField.FieldType === FIELD_TYPE.ListOfObjects) {
                const customizeFieldClickedData = new PepFormFieldClickedData(
                    this.singleData.Data.UID.toString(),
                    fieldClickEvent.key,
                    this.singleData.Data.Type,
                    fieldClickEvent.eventWhich,
                    fieldClickEvent.value,
                    clickedUiControlField.FieldType,
                    fieldClickEvent.otherData
                );
                this.fieldClick.emit(customizeFieldClickedData);
            } else {
                const customizeFieldClickedData = new PepFormFieldClickedData(
                    this.singleData.Data.UID.toString(),
                    fieldClickEvent.key,
                    this.singleData.Data.Type,
                    fieldClickEvent.eventWhich,
                    fieldClickEvent.value,
                    clickedUiControlField.FieldType,
                    fieldClickEvent.otherData
                );
                this.fieldClick.emit(customizeFieldClickedData);
            }
        } else {
            // For other api names (like enter children etc).
            const customizeFieldClickedData = new PepFormFieldClickedData(
                this.singleData.Data.UID.toString(),
                fieldClickEvent.key,
                this.singleData.Data.Type,
                fieldClickEvent.eventWhich,
                fieldClickEvent.value,
                null,
                fieldClickEvent.otherData
            );
            this.fieldClick.emit(customizeFieldClickedData);
        }
    }

    onMenuItemClicked(fieldClickEvent: any): void {
        const clickedUiControlField = this.singleData.Data.Fields.filter(f => f.ApiName === fieldClickEvent.key)[0];
        const dataField: any = this.singleData.Data;
        const fieldType = typeof clickedUiControlField !== 'undefined' ? clickedUiControlField.FieldType : FIELD_TYPE.Package;
        const customizeFieldClickedData = new PepFormFieldClickedData(
            dataField.UID.toString(),
            fieldClickEvent.key,
            dataField.Type,
            fieldClickEvent.eventWhich,
            fieldClickEvent.value,
            fieldType,
            {
                ExtraInfo: dataField.ExtraInfo,
                ItemType: dataField.TransactionItemType
            });
        this.menuItemClick.emit(customizeFieldClickedData);
    }

    getInternalLinkHref(): string {
        let hrefStr = '';
        const uid = this.singleData.Data.UID;
        const transactionUrl = this.singleData.Data.MainAction === '2' ? 'transactions/scope_items/' : 'transactions/cart/';
        // let isBuyer = sessionStorage.getItem('userRole') == 'Buyer' ? true : false;

        if (this.listType === 'all_activities') {
            hrefStr = this.singleData.Data.Type === 0 ? transactionUrl + uid : 'activities/details/' + uid;
        } else if (this.listType === 'accounts') {
            hrefStr = 'accounts/home_page/' + uid;
        }

        return hrefStr;
    }
}
