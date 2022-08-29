import {
    Component,
    ChangeDetectionStrategy,
    OnInit,
    OnDestroy,
    Input,
    KeyValueDiffers,
    Output,
    EventEmitter,
    OnChanges,
    DoCheck,
    Optional,
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    AbstractControl,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {
    PepDialogService,
    PepDialogData,
} from '@pepperi-addons/ngx-lib/dialog';
import {
    IPepFieldValueChangeEvent,
    IPepFieldClickEvent,
    PepLayoutType,
    FIELD_TYPE,
    PepCustomizationService,
    PepLayoutService,
    UIControl,
    UIControlField,
    ObjectsDataRow,
    ObjectsDataRowCell,
    PepFieldBase,
    PepTextboxField,
    PepSelectField,
    PepInternalMenuField,
    PepQuantitySelectorField,
    PepAddressField,
    PepIndicatorsField,
    PepInternalPageField,
    PepInternalCaruselField,
    PepInternalButtonField,
    PepAttachmentField,
    PepSignatureField,
    PepImageField,
    PepImagesField,
    PepLinkField,
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
    DEFAULT_HORIZONTAL_ALIGNMENT,
    KeyValuePair,
    IPepOption,
} from '@pepperi-addons/ngx-lib';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPepFormFieldValueChangeEvent, IPepFormFieldClickEvent } from './form.model';

@Component({
    selector: 'pep-internal-form',
    templateUrl: './internal-form.component.html',
    styleUrls: ['./internal-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepInternalFormComponent implements OnInit, DoCheck, OnChanges, OnDestroy {
    @Input() isInternal = true;
    @Input() isReport = false;
    @Input() layout: UIControl;
    @Input() lockEvents = false;   
    @Input() canEditObject = true;

    private _data: ObjectsDataRow = null;
    @Input()
    set data(value: ObjectsDataRow) {
        const shouldReload = this.shouldReloadForm || !this._data;
        this._data = value;

        if (shouldReload) {
            this._shouldReloadForm = false;
            this.initForm();
        } else {
            this.updateForm();
        }
    }
    get data(): ObjectsDataRow {
        return this._data;
    }

    @Input()
    set lockFields(value: boolean) {
        this.isLocked = value;
    }

    @Input() isActive = false;
    @Input() layoutType: PepLayoutType = 'card';
    // @Input() listType = '';
    @Input() objectId = '0';
    @Input() parentId = '0';
    @Input() searchCode = '0';
    @Input() showTitle = true;
    @Input() firstFieldAsLink = false;
    @Input() checkForChanges: any = null;

    @Output()
    valueChange: EventEmitter<IPepFormFieldValueChangeEvent> = new EventEmitter<IPepFormFieldValueChangeEvent>();
    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    fieldClick: EventEmitter<IPepFormFieldClickEvent> = new EventEmitter<IPepFormFieldClickEvent>();

    // @Output() internalFormFieldClick: EventEmitter<any> = new EventEmitter<any>();
    // @Output() internalFormFieldChange: EventEmitter<any> = new EventEmitter<any>();

    isLocked = false;
    formGutterSize;
    cardGutterSize;
    rowHeight;
    // private matrixIsLast = false;
    // lastUpdatedFieldApiName: string = '';
    form: FormGroup;
    differ: any;

    // payLoad = '';
    private rows: Array<PepFieldBase[]> = [];
    fields: PepFieldBase[] = [];

    private _fieldsSubject: BehaviorSubject<PepFieldBase[]> = new BehaviorSubject<PepFieldBase[]>([]);
    get fields$(): Observable<PepFieldBase[]> {
        return this._fieldsSubject.asObservable();
    }

    columns = 1;

    private hasMenuFloatingOnOtherField = false;
    private menuField: any;
    private menuDataField: any;
    private hasCampaignField: any;
    private hasCampaignDataField: any;
    private indicatorsField: any;
    private indicatorsDataField: any = null;

    private _shouldReloadForm = false;
    get shouldReloadForm(): boolean {
        return this._shouldReloadForm;
    }

    // eventServiceSub: Subscription;
    // public jsonLib = JSON;

    constructor(
        private dialogService: PepDialogService,
        private customizationService: PepCustomizationService,
        private layoutService: PepLayoutService,
        private fb: FormBuilder,
        differs: KeyValueDiffers,
        private translate: TranslateService
    ) {
        // store the initial value to compare with
        this.differ = differs.find({}).create();
    }

    convertXAlignToHorizontalAlign(
        xAlign: X_ALIGNMENT_TYPE
    ): PepHorizontalAlignment {
        let res = DEFAULT_HORIZONTAL_ALIGNMENT;

        if (
            xAlign === X_ALIGNMENT_TYPE.None ||
            xAlign === X_ALIGNMENT_TYPE.Left
        ) {
            res = 'left';
        } else if (xAlign === X_ALIGNMENT_TYPE.Right) {
            res = 'right';
        } else {
            res = 'center';
        }

        return res;
    }

    convertYAlignToVerticalAlign(
        yAlign: Y_ALIGNMENT_TYPE
    ): PepVerticalAlignment {
        let res = DEFAULT_VERTICAL_ALIGNMENT;

        if (
            yAlign === Y_ALIGNMENT_TYPE.None ||
            yAlign === Y_ALIGNMENT_TYPE.Top
        ) {
            res = 'top';
        } else if (yAlign === Y_ALIGNMENT_TYPE.Bottom) {
            res = 'bottom';
        } else {
            res = 'middle';
        }

        return res;
    }

    convertOptionalValues(
        optionalValues: Array<KeyValuePair<string>>
    ): IPepOption[] {
        if (optionalValues && optionalValues.length > 0) {
            return optionalValues.map((ov) => {
                return { key: ov.Key, value: ov.Value };
            });
        } else {
            return [];
        }
    }

    convertAddressFields(
        controlField: UIControlField,
        addressFields: Array<ObjectsDataRowCell>,
        canEditObject: boolean
    ): PepFieldBase[] {
        const fields: PepFieldBase[] = [];

        addressFields.forEach((field) => {
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
                    mandatory: false,
                    value: field.Value,
                    formattedValue: field.FormattedValue,
                    row: 0,
                    rowSpan: 1,
                    col: 0,
                    colSpan: 2,
                    xAlignment: this.convertXAlignToHorizontalAlign(
                        controlField.Layout.XAlignment
                    ),
                    yAlignment: this.convertYAlignToVerticalAlign(
                        controlField.Layout.YAlignment
                    ),
                    order: 0,
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
                    mandatory: false,
                    value: field.Value,
                    formattedValue: field.FormattedValue,
                    row: 0,
                    rowSpan: 1,
                    col: 2,
                    colSpan: 1,
                    xAlignment: this.convertXAlignToHorizontalAlign(
                        controlField.Layout.XAlignment
                    ),
                    yAlignment: this.convertYAlignToVerticalAlign(
                        controlField.Layout.YAlignment
                    ),
                    order: 1,
                });
            } else if (field.ApiName.toLowerCase().indexOf('state') >= 0) {
                customField = new PepSelectField({
                    key: field.ApiName,
                    label: field.ApiName,
                    placeholder,
                    options: this.convertOptionalValues(field.OptionalValues),
                    readonly: !canEditObject,
                    disabled: !field.Enabled || !canEditObject,
                    hidden: false,
                    mandatory: false,
                    value: field.Value,
                    formattedValue: field.FormattedValue,
                    row: 1,
                    rowSpan: 1,
                    col: 0,
                    colSpan: 1,
                    xAlignment: this.convertXAlignToHorizontalAlign(
                        controlField.Layout.XAlignment
                    ),
                    yAlignment: this.convertYAlignToVerticalAlign(
                        controlField.Layout.YAlignment
                    ),
                    order: 2,
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
                    mandatory: false,
                    value: field.Value,
                    formattedValue: field.FormattedValue,
                    row: 1,
                    rowSpan: 1,
                    col: 1,
                    colSpan: 1,
                    xAlignment: this.convertXAlignToHorizontalAlign(
                        controlField.Layout.XAlignment
                    ),
                    yAlignment: this.convertYAlignToVerticalAlign(
                        controlField.Layout.YAlignment
                    ),
                    order: 3,
                });
            } else if (field.ApiName.toLowerCase().indexOf('country') >= 0) {
                customField = new PepSelectField({
                    key: field.ApiName,
                    label: field.ApiName,
                    placeholder,
                    options: this.convertOptionalValues(field.OptionalValues),
                    readonly: !canEditObject,
                    disabled: !field.Enabled || !canEditObject,
                    hidden: false,
                    mandatory: false,
                    value: field.Value,
                    formattedValue: field.FormattedValue,
                    row: 2,
                    rowSpan: 1,
                    col: 2,
                    colSpan: 1,
                    xAlignment: this.convertXAlignToHorizontalAlign(
                        controlField.Layout.XAlignment
                    ),
                    yAlignment: this.convertYAlignToVerticalAlign(
                        controlField.Layout.YAlignment
                    ),
                    order: 4,
                });
            }

            fields.push(customField);
        });

        return fields.sort((n1, n2) =>
            n1.order > n2.order ? 1 : n1.order < n2.order ? -1 : 0
        );
    }

    isMatrixField(apiNameToCheck: string): boolean {
        return apiNameToCheck.indexOf('Matrix') >= 0;
    }

    doesFieldHavaFloatingField(
        controlField: UIControlField,
        floatingField: any
    ): boolean {
        let hasFloatingField = false;
        if (
            floatingField.Layout.Y >= controlField.Layout.Y &&
            floatingField.Layout.Y <
            controlField.Layout.Y + controlField.Layout.Height &&
            floatingField.Layout.X >= controlField.Layout.X &&
            floatingField.Layout.X <
            controlField.Layout.X + controlField.Layout.Width
        ) {
            hasFloatingField = true;
        }

        return hasFloatingField;
    }

    getOptionsForCustomField(
        controlField: UIControlField,
        dataField: any,
        canEditObject: boolean
    ): any {
        if (!controlField || !dataField) {
            return;
        }

        const placeholder =
            controlField.ReadOnly || !canEditObject ? '' : controlField.Title;

        return {
            key: controlField.ApiName,
            label: controlField.Title,
            accessory: dataField.Accessory,
            placeholder,
            readonly: controlField.ReadOnly || !canEditObject,
            disabled: !dataField.Enabled || !canEditObject,
            hidden: controlField.Hidden,
            mandatory: controlField.Mandatory,
            value: dataField.Value,
            formattedValue: dataField.FormattedValue,
            additionalValue: dataField.AdditionalValue,
            row: controlField.Layout.Y,
            rowSpan: controlField.Layout.Height,
            col: controlField.Layout.X,
            colSpan: controlField.Layout.Width,
            xAlignment: this.convertXAlignToHorizontalAlign(
                controlField.Layout.XAlignment
            ),
            yAlignment: this.convertYAlignToVerticalAlign(
                controlField.Layout.YAlignment
            ),
            options: this.convertOptionalValues(dataField.OptionalValues),
            groupFields: undefined,
            maxFieldCharacters: controlField.MaxFieldCharacters,
            minValue: controlField.MinValue,
            maxValue: controlField.MaxValue,
            // hasMenu: hasMenu,
            // hasCampaign: hasCampaign,
            // hasIndicators: hasIndicators,
            textColor: dataField.TextColor,
            visible: dataField.Visible,
            digitsNumberAfterDecimalPoint: dataField.DigitsNumberAfterDecimalPoint,
        };
    }

    convertToCustomField(
        controlField: UIControlField,
        dataField: any,
        canEditObject: boolean,
        menuField: any,
        hasCampaignField: any,
        indicatorsField: any,
        objectId: any,
        parentId: any,
        searchCode: any
    ): PepFieldBase {
        let customField: PepFieldBase;
        const options = this.getOptionsForCustomField(
            controlField,
            dataField,
            canEditObject
        );

        if (controlField.ApiName === 'ObjectMenu') {
            options.type = 'menu';
            customField = new PepInternalMenuField(options);
        } else if (
            controlField.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
            controlField.FieldType ===
            FIELD_TYPE.NumberIntegerQuantitySelector ||
            controlField.ApiName === 'QuantitySelector' ||
            controlField.ApiName === 'UnitsQuantity' ||
            controlField.ApiName.indexOf('size_') === 0
        ) {
            if (dataField.FieldType === FIELD_TYPE.InternalLink) {
                options.type = 'button';
            } else if (dataField.FieldType === FIELD_TYPE.Package) {
                options.type = 'packageButton';
            } else if (
                dataField.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                dataField.FieldType === FIELD_TYPE.NumberReal
            ) {
                options.type = 'qs';
                options.allowDecimal = true;
            } else if (
                dataField.FieldType ===
                FIELD_TYPE.NumberIntegerQuantitySelector ||
                dataField.FieldType === FIELD_TYPE.NumberInteger
            ) {
                options.type = 'qs';
                options.allowDecimal = false;
            } else if (
                dataField.FieldType === FIELD_TYPE.NumberIntegerForMatrix
            ) {
                options.type = 'qsForMatrix';
                options.allowDecimal = false;
            } else if (dataField.FieldType === FIELD_TYPE.NumberRealForMatrix) {
                options.type = 'qsForMatrix';
                options.allowDecimal = true;
            }

            options.notificationInfo = dataField.NotificationInfo;
            customField = new PepQuantitySelectorField(options);
        } else {
            // HACK: need to remove this..
            if (
                dataField.FieldType === FIELD_TYPE.Indicators &&
                this.isMatrixField(dataField.ApiName)
            ) {
                dataField.FieldType = FIELD_TYPE.InternalPage;
            }

            switch (dataField.FieldType) {
                case FIELD_TYPE.Address: {
                    const canEditGroupObject = controlField.ReadOnly
                        ? false
                        : canEditObject;
                    options.groupFields = this.convertAddressFields(
                        controlField,
                        dataField.GroupFields,
                        canEditGroupObject
                    );
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
                case FIELD_TYPE.RelatedObjectsCards: {
                    options.rowSpan = controlField.Layout.Height;
                    options.searchCode = searchCode;
                    options.pageInfo = dataField.UIPageInfo;

                    customField = new PepInternalCaruselField(options);
                    break;
                }
                case FIELD_TYPE.Link: {
                    options.type = 'link';
                    customField = new PepLinkField(options);
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
                    options.menuField =
                        menuField &&
                            this.doesFieldHavaFloatingField(controlField, menuField)
                            ? menuField
                            : null;
                    options.hasCampaignField =
                        hasCampaignField &&
                            this.doesFieldHavaFloatingField(
                                controlField,
                                hasCampaignField
                            )
                            ? hasCampaignField
                            : null;
                    options.indicatorsField =
                        indicatorsField &&
                            this.doesFieldHavaFloatingField(
                                controlField,
                                indicatorsField
                            )
                            ? indicatorsField
                            : null;

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
                    customField = new PepLinkField(options);
                    break;
                }
                case FIELD_TYPE.Phone: {
                    options.type = 'phone';
                    customField = new PepLinkField(options);
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
                    options.type =
                        dataField.FieldType === FIELD_TYPE.DateAndTime
                            ? 'datetime'
                            : 'date';
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
                    options.referenceObjectSubType =
                        dataField.ReferenceObjectSubType;
                    options.referenceObjectInternalType =
                        dataField.ReferenceObjectInternalType;
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
                    options.allowDecimal =
                        dataField.FieldType ===
                        FIELD_TYPE.NumberRealQuantitySelector;
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
            fieldFormattedValue =
                fieldFormattedValue === '0' ? '' : fieldFormattedValue;
        }

        return fieldFormattedValue;
    }

    private toControlGroup(fields: PepFieldBase[]): FormGroup {
        const group = {};
        if (fields && fields.length > 0) {
            fields.forEach((field) => {
                if (field.groupFields && field.groupFields.length > 0) {
                    const subGroup = {};

                    field.groupFields.forEach((groupField) => {
                        if (
                            groupField.mandatory &&
                            !field.readonly &&
                            !field.disabled
                        ) {
                            subGroup[groupField.key] = [
                                {
                                    value: groupField.formattedValue || '',
                                    disabled:
                                        field.readonly ||
                                        field.disabled ||
                                        groupField.disabled,
                                },
                                [Validators.required],
                            ];
                        } else {
                            subGroup[groupField.key] = [
                                {
                                    value: groupField.formattedValue || '',
                                    disabled:
                                        field.readonly ||
                                        field.disabled ||
                                        groupField.disabled,
                                },
                                [Validators.nullValidator],
                            ];
                        }
                    });

                    group[field.key] = this.fb.group(subGroup);
                } else {
                    const validators = field.getValidators();
                    const fieldFormattedValue = this.getFieldFormattedValue(
                        field
                    );

                    group[field.key] = [
                        {
                            value: fieldFormattedValue || '',
                            disabled: field.disabled,
                        },
                        validators,
                    ];
                }
            });
        }

        return this.fb.group(group);
    }

    private createBaseField(uiControlField: UIControlField, dataField: any) {
        const customField: PepFieldBase = this.convertToCustomField(
            uiControlField,
            dataField,
            this.canEditObject,
            this.menuDataField,
            this.hasCampaignDataField,
            this.indicatorsDataField,
            this.objectId,
            this.parentId,
            this.searchCode
        );

        return customField;
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
                if (
                    field.mandatory &&
                    formControl.value.toString().trim().length === 0
                ) {
                    emptyMandatoryFieldsMsg +=
                        '<li><small>' + field.label + '</small></li>';
                } else if (!field.disabled && !formControl.valid) {
                    notValidFieldsMsg +=
                        '<li><small>' + field.label + '</small></li>';
                }
            }
        }

        // Add the header message of the empty mandatory fields
        if (emptyMandatoryFieldsMsg.length > 0) {
            emptyMandatoryFieldsMsg =
                '<div>' +
                this.translate.instant('MESSAGES.ERROR_MANDATORY_FIELDS') +
                "</div><ul style='padding: 0 20px;'>" +
                emptyMandatoryFieldsMsg +
                '</ul><br/>';
        }

        // Add the header message of the empty mandatory fields
        if (notValidFieldsMsg.length > 0) {
            notValidFieldsMsg =
                '<div>' +
                this.translate.instant('MESSAGES.ERROR_INVALID_FIELDS') +
                "</div><ul style='padding: 0 20px;'>" +
                notValidFieldsMsg +
                '</ul>';
        }

        const title = this.translate.instant('MESSAGES.TITLE_NOTICE');
        const data = new PepDialogData({
            title,
            content: emptyMandatoryFieldsMsg + notValidFieldsMsg,
        });
        this.dialogService.openDefaultDialog(data);
    }

    ngOnInit(): void {
        const themeVars = this.customizationService.getThemeVariables();
        // convert rem to pixel
        const RemToPixel = 16;
        this.formGutterSize =
            this.customizationService.getNumberThemeVariable(
                themeVars,
                PepCustomizationService.FORM_SPACEING_KEY
            ) * RemToPixel;
        this.cardGutterSize =
            this.customizationService.getNumberThemeVariable(
                themeVars,
                PepCustomizationService.CARD_SPACEING_KEY
            ) * RemToPixel;
    }

    ngDoCheck(): void {
        const changes = this.differ.diff(this.data); // check for changes
        if (changes) {
            this.updateForm();
            this.checkForChanges = new Date();
        }
    }

    ngOnChanges(changes): void {
        // if (changes.data && changes.data.currentValue) {
        //     // Load changes
        //     if (!this.shouldReloadForm && changes.data.previousValue) {
        //         this.data = changes.data.currentValue;
        //         this.updateForm();
        //     } else {
        //         this._shouldReloadForm = false;
        //         this.initForm();
        //     }
        // }
        // if (this.shouldReloadForm || !changes?.data?.previousValue) {
        //     this._shouldReloadForm = false;
        //     this.initForm();
        //     this.checkForChanges = new Date();
        // }
    }

    ngOnDestroy(): void {
        //
    }

    getUiControlFields(): Array<UIControlField> {
        return this.layout ? this.layout.ControlFields : [];
    }

    initFieldsStructure(fields: PepFieldBase[], maxRow: number): void {
        const themeVars = this.customizationService.getThemeVariables();

        // Set form row height.
        if (this.layoutType === 'card') {
            const cardFieldHeight = this.customizationService.getNumberThemeVariable(
                themeVars,
                PepCustomizationService.CARD_FIELD_HEIGHT_KEY
            );
            this.rowHeight = cardFieldHeight;
        } else {
            const rowFieldHeight = this.customizationService.getNumberThemeVariable(
                themeVars,
                PepCustomizationService.FORM_FIELD_HEIGHT_KEY
            );
            const rowFieldTitleHeight = this.customizationService.getNumberThemeVariable(
                themeVars,
                PepCustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY
            );
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
                this._fieldsSubject.next(fields);

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
                        for (
                            let row: number = currentField.row;
                            row < currentField.row + currentField.rowSpan;
                            row++
                        ) {
                            if (currentField.colSpan > 1) {
                                for (
                                    let col: number = currentField.col;
                                    col <
                                    currentField.col + currentField.colSpan;
                                    col++
                                ) {
                                    if (
                                        doesfieldExistIn.length > row &&
                                        doesfieldExistIn[0].length > col
                                    ) {
                                        doesfieldExistIn[row][col] = true;
                                    }
                                }
                            } else {
                                if (
                                    doesfieldExistIn.length > row &&
                                    doesfieldExistIn[0].length >
                                    currentField.col
                                ) {
                                    doesfieldExistIn[row][
                                        currentField.col
                                    ] = true;
                                }
                            }
                        }
                    } else if (currentField.colSpan > 1) {
                        for (
                            let col: number = currentField.col;
                            col < currentField.col + currentField.colSpan;
                            col++
                        ) {
                            if (
                                doesfieldExistIn.length > currentField.row &&
                                doesfieldExistIn[0].length > col
                            ) {
                                doesfieldExistIn[currentField.row][col] = true;
                            }
                        }
                    } else {
                        if (
                            doesfieldExistIn.length > currentField.row &&
                            doesfieldExistIn[0].length > currentField.col
                        ) {
                            doesfieldExistIn[currentField.row][
                                currentField.col
                            ] = true;
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
                                    mandatory: false,
                                    value: '',
                                    formattedValue: '',
                                    row: i,
                                    rowSpan: 1,
                                    col: j,
                                    colSpan: 1,
                                    order: 1,
                                })
                            );
                        }
                    }
                }

                // Sort the fields again.
                this.fields = fields.sort((f1, f2) =>
                    f1.row > f2.row
                        ? 1
                        : f1.row < f2.row
                            ? -1
                            : f1.col > f2.col
                                ? 1
                                : f1.col < f2.col
                                    ? -1
                                    : 0
                );
                this._fieldsSubject.next(fields);
            }
        }
    }

    setForm(isForUpdate = false): void {
        let allFieldsAreReadOnly = true;

        if (!isForUpdate) {
            const fields = [];
            for (const currentField of this.fields) {
                // Add all fields except 'internalPage' (for children).
                if (currentField.controlType !== 'internalPage') {
                    fields.push(currentField);
                }

                if (!currentField.readonly) {
                    allFieldsAreReadOnly = false;
                }
            }

            this.form = this.toControlGroup(fields);
        } else {
            // Update form values if changed by calculated fields.
            for (let i = 0; i < this.fields.length; i++) {
                let currentField = this.fields[i];

                if (currentField.controlType === 'internalCarusel') {
                    // Hack to override (update) the field.
                    const uiControlField = this.getUiControlFields().find(cf => cf.ApiName === currentField.key);
                    const dataField = this.data.Fields.find(df => df.ApiName === currentField.key);
                    currentField = this.createBaseField(uiControlField, dataField);
                    this._fieldsSubject.value[i] = currentField;
                } else if (currentField.controlType !== 'internalPage') {
                    if (
                        currentField.groupFields &&
                        currentField.groupFields.length > 0
                    ) {
                        // for (let j = 0; j < currentField.groupFields.length; j++) {
                        //     let currentGroupField = currentField.groupFields[j];
                        for (const currentGroupField of currentField.groupFields) {
                            const fieldFormattedValue = this.getFieldFormattedValue(
                                currentGroupField
                            );
                            this.customizationService.updateFormField(
                                this.form,
                                currentGroupField,
                                fieldFormattedValue,
                                currentField
                            );
                        }
                    } else {
                        const fieldFormattedValue = this.getFieldFormattedValue(
                            currentField
                        );
                        // this.form.controls[currentField.key].setValue(fieldFormattedValue);
                        this.customizationService.updateFormField(
                            this.form,
                            currentField,
                            fieldFormattedValue
                        );
                    }
                }

                if (!currentField.readonly) {
                    allFieldsAreReadOnly = false;
                }
            }
        }

        let isFormValid = this.form?.valid;

        // Change validation to true if all fields are read only.
        if (!isFormValid && allFieldsAreReadOnly) {
            isFormValid = true;
        }

        this.onFormValidationChanged(isFormValid);

        // Set it to false to enable all fields.
        if (this.isInternal && this.isLocked) {
            this.isLocked = false; 
        }
    }

    initForm(): void {
        if (this.data && this.data.Fields) {
            const fields: PepFieldBase[] = this.convertCustomFields(
                this.getUiControlFields(),
                this.data.Fields
            );

            const maxRow = Math.max(
                ...fields.map((f) => {
                    return f.row + f.rowSpan;
                })
            );
            this.columns = Math.max(
                ...fields.map((f) => {
                    return f.col + f.colSpan;
                })
            );

            this.initFieldsStructure(fields, maxRow);
            this.setForm();
        }
    }

    private updateField(
        customField: PepFieldBase,
        updatedField: ObjectsDataRowCell
    ): void {
        const options: any = {
            disabled: !updatedField.Enabled || !this.canEditObject,
            readonly: !updatedField.Enabled || !this.canEditObject,
            visible: updatedField.Visible,
            value: updatedField.Value,
            additionalValue: updatedField.AdditionalValue,
            formattedValue: updatedField.FormattedValue,
            textColor: updatedField.TextColor,
            digitsNumberAfterDecimalPoint: updatedField.DigitsNumberAfterDecimalPoint,
        };

        if (customField instanceof PepQuantitySelectorField) {
            const notificationInfo = updatedField.NotificationInfo;
            options.notificationInfo = notificationInfo;

            // Change type if it's change (only for allowDecimal).
            let allowDecimal = false;
            if (updatedField.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                updatedField.FieldType === FIELD_TYPE.NumberReal ||
                updatedField.FieldType === FIELD_TYPE.NumberRealForMatrix
            ) {
                allowDecimal = true;
            } 
            
            options.allowDecimal = allowDecimal;

        } else if (customField instanceof PepSelectField) {
            options.options = this.convertOptionalValues(
                updatedField.OptionalValues
            );

            if (!options.options || options.options.length === 0) {
                options.options.push({
                    key: options.value,
                    value: options.formattedValue,
                });
            }
        } else if (customField instanceof PepInternalCaruselField) {
            options.pageInfo = updatedField.UIPageInfo;
        }

        customField.update(options);
    }

    updateForm(): void {
        if (this.data && this.data.Fields) {
            for (const currentField of this.data.Fields) {
                const customField = this.fields.filter(
                    (f) => f.key === currentField.ApiName
                )[0];
                // Update all fields except 'internalPage' type (for children).
                if (customField && customField.controlType !== 'internalPage') {
                    this.updateField(customField, currentField);

                    // Update the group fields.
                    if (
                        customField.controlType === 'address' &&
                        currentField.GroupFields
                    ) {
                        // for (let j = 0; j < currentField.GroupFields.length; j++) {
                        // let currentGroupField = currentField.GroupFields[j];
                        for (const currentGroupField of currentField.GroupFields) {
                            currentGroupField.Enabled = !currentField.Enabled
                                ? false
                                : currentGroupField.Enabled;

                            const customGroupField = customField.groupFields.filter(
                                (f) => f.key === currentGroupField.ApiName
                            )[0];
                            this.updateField(
                                customGroupField,
                                currentGroupField
                            );
                        }
                    }
                }
            }

            this.setForm(true);
        }
    }

    public ReloadForm(): void {
        this._shouldReloadForm = true;
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
                        formControl = this.form.get(
                            field.key + '.' + groupField.key
                        );
                        return;
                    }
                });
            }
        });

        return formControl;
    }

    private setSpecialFields(
        controlFields: Array<any>,
        dataFields: Array<any>
    ): void {
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
                this.hasMenuFloatingOnOtherField = this.doesFieldHavaFloatingField(
                    cf,
                    this.menuField
                );

                if (this.hasMenuFloatingOnOtherField) {
                    break;
                }
            }
        }
    }

    convertCustomFields(
        controlFields: Array<any>,
        dataFields: Array<any>
    ): PepFieldBase[] {
        if (this.layoutType !== 'table') {
            this.setSpecialFields(controlFields, dataFields);
        } else {
            // HACK: convert to center alignment if table view & special fields)
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
                    field.FieldType ===
                    FIELD_TYPE.NumberIntegerQuantitySelector ||
                    field.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                    field.FieldType === FIELD_TYPE.Package ||
                    field.FieldType === FIELD_TYPE.NumberIntegerForMatrix ||
                    field.FieldType === FIELD_TYPE.NumberRealForMatrix
                ) {
                    field.Layout.XAlignment = X_ALIGNMENT_TYPE.Center;
                } else {
                    // HACK: align the rest of the fields by the culture.
                    // field.Layout.XAlignment = this.layoutService.isRtl() ? X_ALIGNMENT_TYPE.Right : X_ALIGNMENT_TYPE.Left;
                }
            });
        }

        const fields: PepFieldBase[] = [];

        controlFields.forEach((field, index) => {
            const dataField = dataFields.filter(
                (df) => df.ApiName === field.ApiName
            )[0];

            if (!dataField) {
                return;
            }

            // If current view is not table view and those fields are special.
            if (
                this.layoutType !== 'table' &&
                ((this.hasMenuFloatingOnOtherField &&
                    this.menuField &&
                    this.menuField.ApiName === field.ApiName) ||
                    (this.indicatorsField &&
                        this.indicatorsField.ApiName === field.ApiName) ||
                    (this.hasCampaignField &&
                        this.hasCampaignField.ApiName === field.ApiName))
            ) {
                return;
            }

            // Set type to link
            if (index === 0 && this.firstFieldAsLink) {
                dataField.FieldType = FIELD_TYPE.InternalLink;
                // dataField.Value = this.getInternalLinkHref();
            }

            if (field.ApiName === 'ObjectMenu') {
                dataField.Enabled = true;
                // HACK : Until "Enabled" returns from the server, we set PepMenu to be
                //        Disabled in cart on regular items and not campign items.
            }
            const customField: PepFieldBase = this.createBaseField(field, dataField);
            fields.push(customField);
        });

        return fields.sort((f1, f2) =>
            f1.row > f2.row
                ? 1
                : f1.row < f2.row
                    ? -1
                    : f1.col > f2.col
                        ? 1
                        : f1.col < f2.col
                            ? -1
                            : 0
        );
    }

    onFormValidationChanged(formValidationChange: any): void {
        this.formValidationChange.emit(formValidationChange);
    }

    onValueChanged(event: IPepFieldValueChangeEvent): void {
        this.onFormValidationChanged(this.form.valid);

        const formControl = this.getFormControlById(event.key);

        const isValid = formControl ? formControl.valid : true;
        // const isValid = true;

        if (isValid) {
            // Set it to false to disable all fields.
            if (this.isInternal && this.layoutType === 'form') {
                this.isLocked = true;
            }

            // Update the current field value.
            const currentField = this.fields.find((f) => f.key === event.key);
            if (currentField) {
                currentField.formattedValue = currentField.value = event.value;
            }

            this.valueChange.emit({
                id: this.data.UID.toString(),
                uiObjectKey: this.data.Key,
                key: event.key,
                value: event.value,
                controlType: event.controlType,
            });
        }
    }

    onClick(fieldClickEvent: IPepFieldClickEvent): void {
        const clickedUiControlField = this.data.Fields.filter(
            (f) => f.ApiName === fieldClickEvent.key
        )[0];
        const idType = this.data.Type ? this.data.Type.toString() : '';

        if (clickedUiControlField) {
            this.fieldClick.emit({
                id: this.data.UID.toString(),
                uiObjectKey: this.data.Key,
                key: fieldClickEvent.key,
                idType,
                which: fieldClickEvent.eventWhich,
                value: fieldClickEvent.value,
                controlType: fieldClickEvent.controlType,
                fieldType: clickedUiControlField.FieldType,
                otherData: fieldClickEvent.otherData,
            });
        } else {
            // For other api names (like enter children etc).
            this.fieldClick.emit({
                id: this.data.UID.toString(),
                uiObjectKey: this.data.Key,
                key: fieldClickEvent.key,
                idType,
                which: fieldClickEvent.eventWhich,
                value: fieldClickEvent.value,
                controlType: fieldClickEvent.controlType,
                otherData: fieldClickEvent.otherData,
            });
        }
    }

    // // This event is for handle the internal page events.
    // onInternalFormFieldClicked(internalFormFieldClick: any): void {
    //     this.internalFormFieldClick.emit(internalFormFieldClick);
    // }

    // // This event is for handle the internal page events.
    // onInternalFormFieldChanged(internalFormFieldChange: any): void {
    //     this.internalFormFieldChange.emit(internalFormFieldChange);
    // }

    // This event is for handle the related items change events.
    onFormValueChanged(event: IPepFormFieldValueChangeEvent): void {
        // this.valueChange.emit(event);
    }

    // This event is for handle the related items change events.
    onFormFieldClick(event: IPepFormFieldClickEvent): void {
        this.fieldClick.emit(event);
    }
}
