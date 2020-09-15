import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    ViewContainerRef,
    TemplateRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PepperiInternalPageService } from './internal-page.service';

import { LAYOUT_TYPE, UIControl, KeyValuePair, CustomizationService, ObjectSingleData,
    UIControlField, ObjectsData, FIELD_TYPE, PepperiFieldClickedData, PepperiObjectChangedData } from '@pepperi-addons/ngx-lib';
import { PepperiInternalListComponent, VIEW_TYPE } from './internal-list.component';

import * as $ from 'jquery';

@Component({
    selector: 'pep-internal-page',
    templateUrl: './internal-page.component.html',
    styleUrls: ['./internal-page.component.scss'],
    providers: [PepperiInternalPageService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepperiInternalPageComponent implements OnInit, OnDestroy {
    static CURRENT_ADDITIONAL_API_NAME = 'item_details_currentAdditionalApiName';

    controlType = 'internalPage';

    @Input() field: any;
    @Input() hasHeightLimit = false;
    @Input() layoutType = LAYOUT_TYPE.PepperiForm;
    @Output() childChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() childClicked: EventEmitter<PepperiFieldClickedData> = new EventEmitter<PepperiFieldClickedData>();

    // TODO: Implement
    // @ViewChild('childModal') public childModal: ModalDirective;
    childModal = { isShown: false };

    @ViewChild('orgCont', {read: ViewContainerRef}) orgCont: ViewContainerRef;
    @ViewChild('modalCont', {read: ViewContainerRef}) modalCont: ViewContainerRef;
    @ViewChild('matrixTemplate') matrixTemplate: TemplateRef<any>;

    @ViewChild(PepperiInternalListComponent) customList: PepperiInternalListComponent;
    LAYOUT_TYPE = LAYOUT_TYPE;

    resize: any;
    checkForChanges: any = null;

    childData: any = null;

    emptyForm: FormGroup;
    uiControl: UIControl;
    rows: any;
    lineViewRows: any;
    totalsRow: any = [];
    additionalApiNames: any = null;
    currentAdditionalApiName: any = null;
    focusedQS = false;
    fieldIdWithFocus = '';
    columnWidth = 100;
    coverChildTable = false;
    childViewTypes: Array<KeyValuePair<string>>;
    currentViewType: KeyValuePair<string> = null;
    currentViewTypeTitle: string;
    sumOfMinColWidth = 0;
    totalRowsWidth = 0;
    viewWidth = '100%';
    viewHeight = 'auto';
    displayQSbtns = true;
    selectedApiName = '';
    showSort = false;
    defaultRowSpan = -1;

    constructor(
        protected fb: FormBuilder,
        private pepperiInternalPageService: PepperiInternalPageService,
        public customizationService: CustomizationService,
        private elementRef: ElementRef,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    private fillData(): void {
        const view = this.matrixTemplate.createEmbeddedView(null);

        if (this.childModal.isShown) {
            this.orgCont.clear();
            this.modalCont.clear();
            this.modalCont.insert(view);
        } else {
            this.modalCont.clear();
            this.orgCont.clear();
            this.orgCont.insert(view);
        }

        setTimeout(() => {
            const buffer = [];

            if (this.childData.Rows) {
                // for (let i = 0; i < this.childData.Rows.length; i++) {
                for (const childDataRow of this.childData.Rows) {
                    const osd = new ObjectSingleData(this.uiControl, childDataRow);
                    osd.IsEditable = true;
                    buffer.push(osd);
                }
            }

            const viewType: VIEW_TYPE = this.isTableView() ? VIEW_TYPE.Table : VIEW_TYPE.Line;
            this.customList.initListData(this.uiControl, this.childData.TotalRows, buffer, viewType, this.getItemClass());
            this.setTotalsRow();

            if (!this.childModal.isShown) {
                const childrenCount = this.childData.Rows ? this.childData.Rows.length : 0;
                const isEven = childrenCount % 2 === 0;
                // 3 for matrix & flat matrix because the header + total is 2 more rows.
                const rowsToAdd = this.isMatrixView() || this.isFlatMatrixView() ? 3 : 1;

                const formRowHeight = this.customizationService.calculateFormFieldHeight() * 16; // convert rem to pixel

                // Set the default only if not set yet.
                if (this.defaultRowSpan === -1) {
                    this.defaultRowSpan = this.field.rowSpan;
                }

                // For line view Add the height of the line (form height).
                if (this.currentViewType.Key === 'OrderCenterFlatMatrixLine') {
                    const maxRow = Math.max.apply(
                        Math,
                        this.uiControl.ControlFields.map((f) => {
                            return f.Layout.Y + f.Layout.Height;
                        })
                    );

                    // * 16 convert rem to pixel
                    const cardRowsHeight = this.customizationService.calculateCardRowsHeight(maxRow) * 16;

                    // maxRow * 24 + 60 - 24 for each row in card + 60 for the padding of each card.
                    // const rowSpanToAdd = Math.floor(childrenCount * ((cardRowsHeight + 56) / formRowHeight) + rowsToAdd);
                    // + 16 is the 1rem margin outside card.
                    const rowSpanToAdd = (childrenCount * (cardRowsHeight + 16)) / formRowHeight + rowsToAdd;
                    this.field.rowSpan = rowSpanToAdd;
                } else {
                    // const tableRowsHeight = this.customizationService.calculateTableRowsHeight(childrenCount) * 16;
                    // this.field.rowSpan = Math.ceil((tableRowsHeight + (rowsToAdd * 40)) / formRowHeight);
                    // * 16 convert rem to pixel
                    const rowsToAddHeight = this.customizationService.calculateTableRowsHeight(rowsToAdd, false) * 16;
                    const tableRowsHeight = this.customizationService.calculateTableRowsHeight(childrenCount) * 16;
                    this.field.rowSpan = (rowsToAddHeight + tableRowsHeight) / formRowHeight;
                }

                const self = this;
                self.sumOfMinColWidth = 0;
                self.totalRowsWidth = 0;

                this.childData.UIControl.ControlFields.forEach((uiControlField: UIControlField) => {
                    self.totalRowsWidth += uiControlField.ColumnWidth;
                    uiControlField.minFieldWidth = self.mmToPx(12); // NEED TO GET THIS PARAM FROM CUSTOMIZATION;
                    self.sumOfMinColWidth += 12;
                });

                setTimeout(() => {
                    self.setViewCover(this.childData.Rows);
                }, 0);
            }
        }, 150);

        this.changeDetectorRef.markForCheck();
    }

    private fillChildData(res: any): void {
        // TODO: ??
        // this.userService.setOptionalValuesDic(res.Rows);
        this.childData = res;
        this.uiControl = res.UIControl;
        this.additionalApiNames = res.AdditionalApiNames;

        this.fillData();
    }

    mmToPx(mm): number {
        return Math.floor(mm * $('#my1_mm').height()); // JQuery returns sizes in PX
    }

    private isMatrixView(): boolean {
        return this.currentViewType && this.currentViewType.Key === 'OrderCenterMatrix';
    }

    private isFlatMatrixView(): boolean {
        return this.currentViewType && this.currentViewType.Key === 'OrderCenterFlatMatrixGrid';
    }

    isTableView(): boolean {
        return this.isMatrixView() || this.isFlatMatrixView();
    }

    private getItemClass(): string {
        let res = '';

        if (!this.isTableView()) {
            res = 'line-view';
        }

        return res;
    }

    changeChildrenViewType(viewTypeKey: string): void {
        const self = this;
        this.rows = [];
        this.uiControl = null;

        for (const vt of this.childViewTypes) {
            if (vt.Key === viewTypeKey) {
                this.currentViewType = vt;
                break;
            }
        }
        // check if view type changed
        // if (this.currentViewType.Key != viewTypeKey) {
        $('body').scrollTop(0);
        this.currentViewTypeTitle = this.currentViewType.Value;

        this.pepperiInternalPageService.changeChildrenViewType(this.currentViewType.Key, (res: ObjectsData) => {
            if (res.Rows) {
                self.fillChildData(res);
            }
        });
    }

    setViewCover(rows): void {
        if (!rows) { return; }

        const numofrows = rows.length;

        const matrixCont = $('#mainViewCont');
        const viewWidth = matrixCont.parents('mat-grid-tile').css('width');
        const viewHeight = matrixCont.parents('mat-grid-tile').css('height');

        this.viewWidth = viewWidth ? viewWidth.toString() : '100%';
        this.viewHeight = this.hasHeightLimit ? viewHeight.toString() : 'auto';

        // if the matrix located on the bottom / there is nothing under the matrix we dont need to check the height

        if (parseInt(viewWidth, 10) < this.mmToPx(this.sumOfMinColWidth) ||
            (this.hasHeightLimit && parseInt(viewHeight, 10) < numofrows * 41 + 72)) {
            this.coverChildTable = true;
        } else {
            this.coverChildTable = false;
        }

        this.changeDetectorRef.markForCheck();
    }

    showMatrixDialog(): void {
        // this.childModal.config.ignoreBackdropClick = true;
        // TODO: Show modal
        // this.childModal.show();
    }

    // TODO:
    // onShown() {
    //     this.fillData();
    // }

    // TODO:
    // onHidden() {
    //     this.fillData();
    // }

    ngOnInit(): void {
        const self = this;
        // let field = this.field as PepperiInternalPageField;

        this.pepperiInternalPageService.initDetails(this.field.objectId, this.field.parentId,
            this.field.searchCode, (resViewTypes: any) => {
            // my code DI-7134
            resViewTypes.Rows = resViewTypes.Rows.filter((item) => item.Key !== 'OrderCenterView1');

            if (resViewTypes.Rows && resViewTypes.Rows.length > 0) {
                if (!resViewTypes.Default) {
                    resViewTypes.Default = resViewTypes.Rows[0].Key;
                }
                self.childViewTypes = resViewTypes.Rows;
                self.currentViewType = resViewTypes.Rows[0];

                // for (var i = 0; i < resViewTypes.Rows.length; i++) {
                for (const viewTypeRow of resViewTypes.Rows) {
                    if (viewTypeRow.Value === resViewTypes.Default) {
                        self.currentViewType = viewTypeRow;
                    }
                }

                self.loadLastAdditionalApiName();
                self.changeChildrenViewType(self.currentViewType.Key);
            }
        });

        // TODO:
        // this.resize = Observable.fromEvent(window, 'resize')
        //     .debounceTime(10)
        //     .subscribe((event) => {
        //         self.setViewCover(self.rows);
        //     });
    }

    loadLastAdditionalApiName(): void {
        const daa = sessionStorage.getItem(PepperiInternalPageComponent.CURRENT_ADDITIONAL_API_NAME);
        if (daa && daa.length > 0) {
            const additionalApiName = JSON.parse(daa);
            this.currentAdditionalApiName = additionalApiName;
            this.pepperiInternalPageService.additionalApiName = additionalApiName.Key;
        }
    }

    ngOnDestroy(): void {
        if (this.childChanged) { this.childChanged.unsubscribe(); }

        if (this.childClicked) { this.childClicked.unsubscribe(); }

        if (this.resize) { this.resize.unsubscribe(); }
    }

    changeAdditionalApiName(additionalApiName): void {
        const self = this;
        this.pepperiInternalPageService.changeAdditionalApiName(additionalApiName ? additionalApiName.Key : '',
            (res: any) => {
                // for (let index = 0; index < res.Rows.length; index++) {
                for (const row of res.Rows) {
                        self.updateChanges(row);
                }

                self.changeDetectorRef.markForCheck();
            }
        );

        sessionStorage.setItem(PepperiInternalPageComponent.CURRENT_ADDITIONAL_API_NAME, JSON.stringify(additionalApiName));

        setTimeout(() => {
            this.currentAdditionalApiName = additionalApiName;
        }, 0);
    }

    setTotalsRow(): void {
        this.totalsRow = [];

        if (this.isMatrixView() || this.isFlatMatrixView()) {
            let totalCol = 0;

            if (this.customList.items) {
                for (let col = 0; col < this.customList.items[0].Data.Fields.length; col++) {
                    const field = this.customList.items[0].Data.Fields[col];
                    if (
                        field.FieldType === FIELD_TYPE.NumberIntegerForMatrix ||
                        field.FieldType === FIELD_TYPE.NumberIntegerQuantitySelector ||
                        field.FieldType === FIELD_TYPE.NumberRealForMatrix ||
                        field.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                        field.FieldType === FIELD_TYPE.CalculatedInt ||
                        field.FieldType === FIELD_TYPE.NumberInteger ||
                        field.FieldType === FIELD_TYPE.CalculatedReal ||
                        field.FieldType === FIELD_TYPE.NumberReal
                    ) {
                        totalCol = 0;
                        // for (var i = 0; i < this.customList.items.length; i++) {
                        for (const listItem of this.customList.items) {

                            if (listItem.Data.Fields[col] && listItem.Data.Fields[col].Value) {
                                const num = parseFloat(listItem.Data.Fields[col].Value);
                                totalCol += isNaN(num) ? 0 : num;
                            }
                        }
                        this.totalsRow.push(totalCol);
                    } else {
                        this.totalsRow.push('');
                    }
                }
            }
        }
    }

    updateChanges(elementToUpdate: any): void {
        this.customList.updateListItem(elementToUpdate);

        // Update memory data
        for (let index = 0; index < this.childData.Rows.length; index++) {
            if (this.childData.Rows[index].UID === elementToUpdate.UID) {
                this.childData.Rows[index] = elementToUpdate;
            }
        }
    }

    setValueCallback(id: any, res: any): void {
        if (res.Rows.length === 1) {
            this.updateChanges(res.Rows[0]);
        }

        this.setTotalsRow();
        this.checkForChanges = new Date();

        // DI-15985
        this.childChanged.emit(res);

        this.changeDetectorRef.markForCheck();
    }

    onCustomizeObjectChanged(customizeObjectChangedData: PepperiObjectChangedData): void {
        let handledEvent = false;
        const boundSetValueCallback = this.setValueCallback.bind(this); // .bind() to have this in the bound function.

        // For the new custom form, the plus and minus events transform in the PepperiObjectChangedData
        if (customizeObjectChangedData.ControlType === 'qs') {
            if (customizeObjectChangedData.Value === '+') {
                handledEvent = true;
                this.pepperiInternalPageService.childPlusClick(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName,
                    (res: any) => {
                        boundSetValueCallback(customizeObjectChangedData.Id, res);
                    }
                );
            } else if (customizeObjectChangedData.Value === '-') {
                handledEvent = true;
                this.pepperiInternalPageService.childMinusClick(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName,
                    (res: any) => {
                        boundSetValueCallback(customizeObjectChangedData.Id, res);
                    }
                );
            }
        }

        if (!handledEvent) {
            this.pepperiInternalPageService.childValueChanged(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName,
                customizeObjectChangedData.Value, (res: any) => {
                    boundSetValueCallback(customizeObjectChangedData.Id, res);
                }
            );
        }
    }

    onCustomizeFieldClick(fieldClickEvent: any): void {
        this.childClicked.emit(fieldClickEvent);
    }
}
