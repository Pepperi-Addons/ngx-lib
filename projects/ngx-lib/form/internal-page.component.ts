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
import { PepInternalPageService } from './internal-page.service';

import {
    PepLayoutType,
    UIControl,
    KeyValuePair,
    PepCustomizationService,
    ObjectSingleData,
    UIControlField,
    ObjectsData,
    FIELD_TYPE
} from '@pepperi-addons/ngx-lib';
import { PepInternalListComponent, PepListViewType } from './internal-list.component';
import { IPepFormFieldClickEvent, IPepFormFieldValueChangeEvent } from './form.component';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PepQuantitySelectorComponent } from '@pepperi-addons/ngx-lib/quantity-selector';

@Component({
    selector: 'pep-internal-page',
    templateUrl: './internal-page.component.html',
    styleUrls: ['./internal-page.component.scss'],
    providers: [PepInternalPageService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepInternalPageComponent implements OnInit, OnDestroy {
    static CURRENT_ADDITIONAL_API_NAME =
        'item_details_currentAdditionalApiName';

    controlType = 'internalPage';

    @Input() field: any;
    @Input() layoutType: PepLayoutType = 'form';
    @Output() childChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() childClick: EventEmitter<IPepFormFieldClickEvent> = new EventEmitter<IPepFormFieldClickEvent>();

    @ViewChild('my1mm') my1mm: ElementRef;
    @ViewChild('mainViewCont') mainViewCont: ElementRef;

    @ViewChild('orgCont', { read: ViewContainerRef }) orgCont: ViewContainerRef;
    @ViewChild('dialogCont', { read: ViewContainerRef }) dialogCont: ViewContainerRef;
    @ViewChild('matrixTemplate') matrixTemplate: TemplateRef<any>;
    @ViewChild('matrixDialogTemplate', { read: TemplateRef }) matrixDialogTemplate: TemplateRef<any>;

    @ViewChild(PepInternalListComponent)
    customList: PepInternalListComponent;

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
        private dialogService: PepDialogService,
        private internalPageService: PepInternalPageService,
        public customizationService: PepCustomizationService,
        private elementRef: ElementRef,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    private fillData(isInDialog = false): void {
        const view = this.matrixTemplate.createEmbeddedView(null);

        this.customList?.removeTable();
        this.orgCont?.clear();

        if (isInDialog) {
            this.dialogCont?.clear();
            this.dialogCont?.insert(view);
        } else {
            this.orgCont?.insert(view);
        }

        setTimeout(() => {
            // const buffer = [];

            // if (this.childData.Rows) {
            //     // for (let i = 0; i < this.childData.Rows.length; i++) {
            //     for (const childDataRow of this.childData.Rows) {
            //         const osd = new ObjectSingleData(
            //             this.uiControl,
            //             childDataRow
            //         );
            //         osd.IsEditable = true;
            //         buffer.push(osd);
            //     }
            // }

            const viewType: PepListViewType = this.isTableView() ? 'table' : 'lines';
            this.customList.initListData(this.uiControl, this.childData.TotalRows, this.childData.Rows, viewType);
            this.setTotalsRow();

            // if (!this.childModal.isShown) {
            const childrenCount = this.childData.Rows ? this.childData.Rows.length : 0;
            const isEven = childrenCount % 2 === 0;
            // 3 for matrix & flat matrix because the header + total is 2 more rows.
            const rowsToAdd = this.isMatrixView() || this.isFlatMatrixView() ? (isEven ? 3 : 4) : 1;

            const formRowHeight = this.customizationService.calculateFormFieldHeight() * 16; // convert rem to pixel

            // Set the default only if not set yet.
            if (this.defaultRowSpan === -1) {
                this.defaultRowSpan = this.field.rowSpan;
            }

            this.sumOfMinColWidth = 0;
            this.totalRowsWidth = 0;

            this.childData.UIControl.ControlFields.forEach(
                (uiControlField: UIControlField) => {
                    this.totalRowsWidth += uiControlField.ColumnWidth;
                    uiControlField.minFieldWidth = this.mmToPx(12); // NEED TO GET THIS PARAM FROM CUSTOMIZATION;
                    this.sumOfMinColWidth += 12;
                }
            );

            this.setViewCover(this.childData.Rows);

            if (this.coverChildTable) {
                this.field.rowSpan = this.defaultRowSpan;
            } else {
                // For line view Add the height of the line (form height).
                if (this.currentViewType.Key === 'OrderCenterFlatMatrixLine') {
                    const maxRow = Math.max.apply(
                        Math,
                        this.uiControl.ControlFields.map(f => {
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
            }
        }, 0);

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
        const height = this.my1mm.nativeElement.clientHeight;
        return Math.floor(mm * height); // returns sizes in PX
    }

    private isMatrixView(): boolean {
        return (
            this.currentViewType &&
            this.currentViewType.Key === 'OrderCenterMatrix'
        );
    }

    private isFlatMatrixView(): boolean {
        return (
            this.currentViewType &&
            this.currentViewType.Key === 'OrderCenterFlatMatrixGrid'
        );
    }

    isTableView(): boolean {
        return this.isMatrixView() || this.isFlatMatrixView();
    }

    // private getItemClass(): string {
    //     let res = '';

    //     if (!this.isTableView()) {
    //         res = 'line-view';
    //     }

    //     return res;
    // }

    changeChildrenViewType(viewTypeKey: string): void {
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

        // window.scroll(0, 0); //or document.body.scrollTop = 0; or document.querySelector('body').scrollTo(0,0)

        this.currentViewTypeTitle = this.currentViewType.Value;

        this.internalPageService.changeChildrenViewType(
            this.currentViewType.Key,
            (res: ObjectsData) => {
                if (res.Rows) {
                    this.fillChildData(res);
                }
            }
        );
    }

    setViewCover(rows): void {
        if (!rows) {
            return;
        }

        const matrixCont = this.mainViewCont.nativeElement;
        const viewWidth = matrixCont.clientWidth;

        this.viewWidth = viewWidth ? viewWidth.toString() : '100%';

        // if the matrix located on the bottom / there is nothing under the matrix we dont need to check the height
        if (parseInt(viewWidth, 10) < this.mmToPx(this.sumOfMinColWidth)) {
            this.coverChildTable = true;
        } else {
            this.coverChildTable = false;
        }

        this.changeDetectorRef.markForCheck();
    }

    showMatrixDialog(): void {
        const config = this.dialogService.getDialogConfig({
            disableClose: false
            // minWidth: '50vw',
            // maxWidth: '90vw',
            // maxHeight: '90vh',
        }, 'large');

        const dialogRef = this.dialogService.openDialog(
            this.matrixDialogTemplate,
            {},
            config);

        dialogRef.afterOpened().subscribe(() => {
            this.fillData(true);
        });

        dialogRef.afterClosed().subscribe(value => {
            this.fillData(false);
        });
    }

    ngOnInit(): void {
        // let field = this.field as PepInternalPageField;

        this.internalPageService.initDetails(
            this.field.objectId,
            this.field.parentId,
            this.field.searchCode,
            (resViewTypes: any) => {
                // my code DI-7134
                resViewTypes.Rows = resViewTypes.Rows.filter(
                    item => item.Key !== 'OrderCenterView1'
                );

                if (resViewTypes.Rows && resViewTypes.Rows.length > 0) {
                    if (!resViewTypes.Default) {
                        resViewTypes.Default = resViewTypes.Rows[0].Key;
                    }
                    this.childViewTypes = resViewTypes.Rows;
                    this.currentViewType = resViewTypes.Rows[0];

                    // for (var i = 0; i < resViewTypes.Rows.length; i++) {
                    for (const viewTypeRow of resViewTypes.Rows) {
                        if (viewTypeRow.Value === resViewTypes.Default) {
                            this.currentViewType = viewTypeRow;
                        }
                    }

                    this.loadLastAdditionalApiName();
                    this.changeChildrenViewType(this.currentViewType.Key);
                }
            }
        );

        this.resize = fromEvent(window, 'resize').pipe(
            debounceTime(10)
        ).subscribe((event) => {
            this.setViewCover(this.rows);
        });
    }

    loadLastAdditionalApiName(): void {
        const daa = sessionStorage.getItem(
            PepInternalPageComponent.CURRENT_ADDITIONAL_API_NAME
        );
        if (daa && daa.length > 0) {
            const additionalApiName = JSON.parse(daa);
            this.currentAdditionalApiName = additionalApiName;
            this.internalPageService.additionalApiName = additionalApiName?.Key;
        }
    }

    ngOnDestroy(): void {
        if (this.childChange) {
            this.childChange.unsubscribe();
        }

        if (this.childClick) {
            this.childClick.unsubscribe();
        }

        if (this.resize) {
            this.resize.unsubscribe();
        }
    }

    changeAdditionalApiName(additionalApiName): void {
        this.internalPageService.changeAdditionalApiName(
            additionalApiName ? additionalApiName.Key : '',
            (res: any) => {
                // for (let index = 0; index < res.Rows.length; index++) {
                for (const row of res.Rows) {
                    this.updateChanges(row);
                }

                this.changeDetectorRef.markForCheck();
            }
        );

        sessionStorage.setItem(
            PepInternalPageComponent.CURRENT_ADDITIONAL_API_NAME,
            JSON.stringify(additionalApiName)
        );

        setTimeout(() => {
            this.currentAdditionalApiName = additionalApiName;
        }, 0);
    }

    setTotalsRow(): void {
        this.totalsRow = [];

        if (this.isMatrixView() || this.isFlatMatrixView()) {
            let totalCol = 0;

            const items = this.customList.items;
            if (items) {
                for (
                    let col = 0;
                    col < items[0].Fields.length;
                    col++
                ) {
                    const field = items[0].Fields[col];
                    if (
                        field.FieldType === FIELD_TYPE.NumberIntegerForMatrix ||
                        field.FieldType ===
                            FIELD_TYPE.NumberIntegerQuantitySelector ||
                        field.FieldType === FIELD_TYPE.NumberRealForMatrix ||
                        field.FieldType ===
                            FIELD_TYPE.NumberRealQuantitySelector ||
                        field.FieldType === FIELD_TYPE.CalculatedInt ||
                        field.FieldType === FIELD_TYPE.NumberInteger ||
                        field.FieldType === FIELD_TYPE.CalculatedReal ||
                        field.FieldType === FIELD_TYPE.NumberReal
                    ) {
                        totalCol = 0;
                        for (const listItem of items) {
                            if (
                                listItem.Fields[col] &&
                                listItem.Fields[col].Value
                            ) {
                                const num = parseFloat(
                                    listItem.Fields[col].Value
                                );
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
        this.childChange.emit(res);

        this.changeDetectorRef.markForCheck();
    }

    onCustomizeObjectChanged(customizeObjectChangedData: IPepFormFieldValueChangeEvent): void {
        this.internalPageService.childValueChanged(
            customizeObjectChangedData.id,
            customizeObjectChangedData.key,
            customizeObjectChangedData.value,
            (res: any) => {
                this.setValueCallback(customizeObjectChangedData.id, res);
            }
        );

        // let handledEvent = false;
        // const boundSetValueCallback = this.setValueCallback.bind(this); // .bind() to have this in the bound function.

        // // For the new custom form, the plus and minus events transform in the IPepFormFieldValueChangeEvent
        // if (customizeObjectChangedData.controlType === 'qs') {
        //     if (customizeObjectChangedData.value === '+') {
        //         handledEvent = true;
        //         this.internalPageService.childPlusClick(
        //             customizeObjectChangedData.id,
        //             customizeObjectChangedData.key,
        //             (res: any) => {
        //                 boundSetValueCallback(
        //                     customizeObjectChangedData.id,
        //                     res
        //                 );
        //             }
        //         );
        //     } else if (customizeObjectChangedData.value === '-') {
        //         handledEvent = true;
        //         this.internalPageService.childMinusClick(
        //             customizeObjectChangedData.id,
        //             customizeObjectChangedData.key,
        //             (res: any) => {
        //                 boundSetValueCallback(
        //                     customizeObjectChangedData.id,
        //                     res
        //                 );
        //             }
        //         );
        //     }
        // }

        // if (!handledEvent) {
        //     this.internalPageService.childValueChanged(
        //         customizeObjectChangedData.id,
        //         customizeObjectChangedData.key,
        //         customizeObjectChangedData.value,
        //         (res: any) => {
        //             boundSetValueCallback(customizeObjectChangedData.id, res);
        //         }
        //     );
        // }
    }

    onCustomizeFieldClick(fieldClickEvent: IPepFormFieldClickEvent): void {
        let handledEvent = false;

        // For the new custom form, the plus and minus events transform in the IPepFormFieldValueChangeEvent
        if (fieldClickEvent.controlType === 'qs') {
            if (fieldClickEvent.value === PepQuantitySelectorComponent.PLUS) {
                handledEvent = true;
                this.internalPageService.childPlusClick(
                    fieldClickEvent.id,
                    fieldClickEvent.key,
                    (res: any) => {
                        this.setValueCallback(fieldClickEvent.id, res);
                    }
                );
            } else if (fieldClickEvent.value === PepQuantitySelectorComponent.MINUS) {
                handledEvent = true;
                this.internalPageService.childMinusClick(
                    fieldClickEvent.id,
                    fieldClickEvent.key,
                    (res: any) => {
                        this.setValueCallback(fieldClickEvent.id, res);
                    }
                );
            }
        }

        if (!handledEvent) {
            this.childClick.emit(fieldClickEvent);
        }
    }
}
