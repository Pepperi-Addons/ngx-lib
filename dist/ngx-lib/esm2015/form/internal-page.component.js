import { Component, Input, Output, EventEmitter, ViewChild, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { PepperiInternalPageService } from './internal-page.service';
import { LAYOUT_TYPE, ObjectSingleData, FIELD_TYPE } from '@pepperi-addons/ngx-lib';
import { PepperiInternalListComponent, VIEW_TYPE } from './internal-list.component';
import * as $ from 'jquery';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./internal-page.service";
import * as i3 from "@pepperi-addons/ngx-lib";
import * as i4 from "@angular/common";
import * as i5 from "./internal-list.component";
import * as i6 from "@angular/material/menu";
import * as i7 from "@angular/material/icon";
import * as i8 from "@pepperi-addons/ngx-lib/icon";
import * as i9 from "@ngx-translate/core";
const _c0 = ["orgCont"];
const _c1 = ["modalCont"];
const _c2 = ["matrixTemplate"];
function PepperiInternalPageComponent_ng_template_0_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("\u00A0", ctx_r7.currentAdditionalApiName == null ? null : ctx_r7.currentAdditionalApiName.Value, "\u00A0");
} }
const _c3 = function (a0) { return { selected: a0 }; };
function PepperiInternalPageComponent_ng_template_0_ng_container_4_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function PepperiInternalPageComponent_ng_template_0_ng_container_4_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const additionalApiName_r10 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11.changeAdditionalApiName(additionalApiName_r10); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const additionalApiName_r10 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c3, (ctx_r9.currentAdditionalApiName == null ? null : ctx_r9.currentAdditionalApiName.Key) == (additionalApiName_r10 == null ? null : additionalApiName_r10.Key)));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(additionalApiName_r10.Value);
} }
const _c4 = function (a0) { return { "pull-left flip": a0 }; };
function PepperiInternalPageComponent_ng_template_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 11);
    i0.ɵɵtemplate(2, PepperiInternalPageComponent_ng_template_0_ng_container_4_span_2_Template, 2, 1, "span", 12);
    i0.ɵɵelementStart(3, "mat-icon", 13);
    i0.ɵɵelement(4, "pep-icon", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-menu", 15, 16);
    i0.ɵɵelementStart(7, "button", 17);
    i0.ɵɵlistener("click", function PepperiInternalPageComponent_ng_template_0_ng_container_4_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.changeAdditionalApiName(null); });
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, PepperiInternalPageComponent_ng_template_0_ng_container_4_button_11_Template, 3, 4, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r8 = i0.ɵɵreference(6);
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.currentAdditionalApiName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c4, ctx_r5.currentAdditionalApiName));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c3, ctx_r5.currentAdditionalApiName === null));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 6, "LIST.NONE"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r5.additionalApiNames);
} }
function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-icon", 26);
} }
function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-icon", 27);
} }
function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-icon", 28);
} }
function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const viewType_r17 = ctx.$implicit; const ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.changeChildrenViewType(viewType_r17 == null ? null : viewType_r17.Key); });
    i0.ɵɵelementStart(1, "mat-icon", 22);
    i0.ɵɵtemplate(2, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_2_Template, 1, 0, "pep-icon", 23);
    i0.ɵɵtemplate(3, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_3_Template, 1, 0, "pep-icon", 24);
    i0.ɵɵtemplate(4, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_4_Template, 1, 0, "pep-icon", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const viewType_r17 = ctx.$implicit;
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c3, (ctx_r16.currentViewType == null ? null : ctx_r16.currentViewType.Key) == (viewType_r17 == null ? null : viewType_r17.Key)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", viewType_r17 == null ? null : viewType_r17.Key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "OrderCenterMatrix");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "OrderCenterFlatMatrixGrid");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "OrderCenterFlatMatrixLine");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(viewType_r17 == null ? null : viewType_r17.Value);
} }
function PepperiInternalPageComponent_ng_template_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 11);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵelement(3, "pep-icon", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-menu", 15, 21);
    i0.ɵɵtemplate(6, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_Template, 7, 8, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r15 = i0.ɵɵreference(5);
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r15);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r6.childViewTypes);
} }
function PepperiInternalPageComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 8);
    i0.ɵɵtemplate(4, PepperiInternalPageComponent_ng_template_0_ng_container_4_Template, 12, 12, "ng-container", 9);
    i0.ɵɵtemplate(5, PepperiInternalPageComponent_ng_template_0_ng_container_5_Template, 7, 2, "ng-container", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "pep-internal-list", 10);
    i0.ɵɵlistener("notifyValueChanged", function PepperiInternalPageComponent_ng_template_0_Template_pep_internal_list_notifyValueChanged_6_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onCustomizeObjectChanged($event); })("notifyFieldClicked", function PepperiInternalPageComponent_ng_template_0_Template_pep_internal_list_notifyFieldClicked_6_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onCustomizeFieldClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("matrix-title-container pepperi-border-bottom align-", ctx_r1.field.xAlignment, "");
    i0.ɵɵpropertyInterpolate("title", ctx_r1.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.currentViewType == null ? null : ctx_r1.currentViewType.Key) == "OrderCenterMatrix" && ctx_r1.additionalApiNames && ctx_r1.additionalApiNames.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.childViewTypes && ctx_r1.childViewTypes.length > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("totalsRow", ctx_r1.totalsRow);
} }
function PepperiInternalPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 29);
} }
function PepperiInternalPageComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function PepperiInternalPageComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.showMatrixDialog(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "INTERNAL_PAGE.CLICK_TO_ORDER"));
} }
const _c5 = function (a0, a1) { return { "max-width": a0, "max-height": a1 }; };
export class PepperiInternalPageComponent {
    constructor(fb, pepperiInternalPageService, customizationService, elementRef, changeDetectorRef) {
        this.fb = fb;
        this.pepperiInternalPageService = pepperiInternalPageService;
        this.customizationService = customizationService;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.controlType = 'internalPage';
        this.hasHeightLimit = false;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.childChanged = new EventEmitter();
        this.childClicked = new EventEmitter();
        // TODO: Implement
        // @ViewChild('childModal') public childModal: ModalDirective;
        this.childModal = { isShown: false };
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.checkForChanges = null;
        this.childData = null;
        this.totalsRow = [];
        this.additionalApiNames = null;
        this.currentAdditionalApiName = null;
        this.focusedQS = false;
        this.fieldIdWithFocus = '';
        this.columnWidth = 100;
        this.coverChildTable = false;
        this.currentViewType = null;
        this.sumOfMinColWidth = 0;
        this.totalRowsWidth = 0;
        this.viewWidth = '100%';
        this.viewHeight = 'auto';
        this.displayQSbtns = true;
        this.selectedApiName = '';
        this.showSort = false;
        this.defaultRowSpan = -1;
    }
    fillData() {
        const view = this.matrixTemplate.createEmbeddedView(null);
        if (this.childModal.isShown) {
            this.orgCont.clear();
            this.modalCont.clear();
            this.modalCont.insert(view);
        }
        else {
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
            const viewType = this.isTableView() ? VIEW_TYPE.Table : VIEW_TYPE.Line;
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
                    const maxRow = Math.max.apply(Math, this.uiControl.ControlFields.map((f) => {
                        return f.Layout.Y + f.Layout.Height;
                    }));
                    // * 16 convert rem to pixel
                    const cardRowsHeight = this.customizationService.calculateCardRowsHeight(maxRow) * 16;
                    // maxRow * 24 + 60 - 24 for each row in card + 60 for the padding of each card.
                    // const rowSpanToAdd = Math.floor(childrenCount * ((cardRowsHeight + 56) / formRowHeight) + rowsToAdd);
                    // + 16 is the 1rem margin outside card.
                    const rowSpanToAdd = (childrenCount * (cardRowsHeight + 16)) / formRowHeight + rowsToAdd;
                    this.field.rowSpan = rowSpanToAdd;
                }
                else {
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
                this.childData.UIControl.ControlFields.forEach((uiControlField) => {
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
    fillChildData(res) {
        // TODO: ??
        // this.userService.setOptionalValuesDic(res.Rows);
        this.childData = res;
        this.uiControl = res.UIControl;
        this.additionalApiNames = res.AdditionalApiNames;
        this.fillData();
    }
    mmToPx(mm) {
        return Math.floor(mm * $('#my1_mm').height()); // JQuery returns sizes in PX
    }
    isMatrixView() {
        return this.currentViewType && this.currentViewType.Key === 'OrderCenterMatrix';
    }
    isFlatMatrixView() {
        return this.currentViewType && this.currentViewType.Key === 'OrderCenterFlatMatrixGrid';
    }
    isTableView() {
        return this.isMatrixView() || this.isFlatMatrixView();
    }
    getItemClass() {
        let res = '';
        if (!this.isTableView()) {
            res = 'line-view';
        }
        return res;
    }
    changeChildrenViewType(viewTypeKey) {
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
        this.pepperiInternalPageService.changeChildrenViewType(this.currentViewType.Key, (res) => {
            if (res.Rows) {
                self.fillChildData(res);
            }
        });
    }
    setViewCover(rows) {
        if (!rows) {
            return;
        }
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
        }
        else {
            this.coverChildTable = false;
        }
        this.changeDetectorRef.markForCheck();
    }
    showMatrixDialog() {
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
    ngOnInit() {
        const self = this;
        // let field = this.field as PepperiInternalPageField;
        this.pepperiInternalPageService.initDetails(this.field.objectId, this.field.parentId, this.field.searchCode, (resViewTypes) => {
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
    loadLastAdditionalApiName() {
        const daa = sessionStorage.getItem(PepperiInternalPageComponent.CURRENT_ADDITIONAL_API_NAME);
        if (daa && daa.length > 0) {
            const additionalApiName = JSON.parse(daa);
            this.currentAdditionalApiName = additionalApiName;
            this.pepperiInternalPageService.additionalApiName = additionalApiName.Key;
        }
    }
    ngOnDestroy() {
        if (this.childChanged) {
            this.childChanged.unsubscribe();
        }
        if (this.childClicked) {
            this.childClicked.unsubscribe();
        }
        if (this.resize) {
            this.resize.unsubscribe();
        }
    }
    changeAdditionalApiName(additionalApiName) {
        const self = this;
        this.pepperiInternalPageService.changeAdditionalApiName(additionalApiName ? additionalApiName.Key : '', (res) => {
            // for (let index = 0; index < res.Rows.length; index++) {
            for (const row of res.Rows) {
                self.updateChanges(row);
            }
            self.changeDetectorRef.markForCheck();
        });
        sessionStorage.setItem(PepperiInternalPageComponent.CURRENT_ADDITIONAL_API_NAME, JSON.stringify(additionalApiName));
        setTimeout(() => {
            this.currentAdditionalApiName = additionalApiName;
        }, 0);
    }
    setTotalsRow() {
        this.totalsRow = [];
        if (this.isMatrixView() || this.isFlatMatrixView()) {
            let totalCol = 0;
            if (this.customList.items) {
                for (let col = 0; col < this.customList.items[0].Data.Fields.length; col++) {
                    const field = this.customList.items[0].Data.Fields[col];
                    if (field.FieldType === FIELD_TYPE.NumberIntegerForMatrix ||
                        field.FieldType === FIELD_TYPE.NumberIntegerQuantitySelector ||
                        field.FieldType === FIELD_TYPE.NumberRealForMatrix ||
                        field.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                        field.FieldType === FIELD_TYPE.CalculatedInt ||
                        field.FieldType === FIELD_TYPE.NumberInteger ||
                        field.FieldType === FIELD_TYPE.CalculatedReal ||
                        field.FieldType === FIELD_TYPE.NumberReal) {
                        totalCol = 0;
                        // for (var i = 0; i < this.customList.items.length; i++) {
                        for (const listItem of this.customList.items) {
                            if (listItem.Data.Fields[col] && listItem.Data.Fields[col].Value) {
                                const num = parseFloat(listItem.Data.Fields[col].Value);
                                totalCol += isNaN(num) ? 0 : num;
                            }
                        }
                        this.totalsRow.push(totalCol);
                    }
                    else {
                        this.totalsRow.push('');
                    }
                }
            }
        }
    }
    updateChanges(elementToUpdate) {
        this.customList.updateListItem(elementToUpdate);
        // Update memory data
        for (let index = 0; index < this.childData.Rows.length; index++) {
            if (this.childData.Rows[index].UID === elementToUpdate.UID) {
                this.childData.Rows[index] = elementToUpdate;
            }
        }
    }
    setValueCallback(id, res) {
        if (res.Rows.length === 1) {
            this.updateChanges(res.Rows[0]);
        }
        this.setTotalsRow();
        this.checkForChanges = new Date();
        // DI-15985
        this.childChanged.emit(res);
        this.changeDetectorRef.markForCheck();
    }
    onCustomizeObjectChanged(customizeObjectChangedData) {
        let handledEvent = false;
        const boundSetValueCallback = this.setValueCallback.bind(this); // .bind() to have this in the bound function.
        // For the new custom form, the plus and minus events transform in the PepperiObjectChangedData
        if (customizeObjectChangedData.ControlType === 'qs') {
            if (customizeObjectChangedData.Value === '+') {
                handledEvent = true;
                this.pepperiInternalPageService.childPlusClick(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName, (res) => {
                    boundSetValueCallback(customizeObjectChangedData.Id, res);
                });
            }
            else if (customizeObjectChangedData.Value === '-') {
                handledEvent = true;
                this.pepperiInternalPageService.childMinusClick(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName, (res) => {
                    boundSetValueCallback(customizeObjectChangedData.Id, res);
                });
            }
        }
        if (!handledEvent) {
            this.pepperiInternalPageService.childValueChanged(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName, customizeObjectChangedData.Value, (res) => {
                boundSetValueCallback(customizeObjectChangedData.Id, res);
            });
        }
    }
    onCustomizeFieldClick(fieldClickEvent) {
        this.childClicked.emit(fieldClickEvent);
    }
}
PepperiInternalPageComponent.CURRENT_ADDITIONAL_API_NAME = 'item_details_currentAdditionalApiName';
PepperiInternalPageComponent.ɵfac = function PepperiInternalPageComponent_Factory(t) { return new (t || PepperiInternalPageComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.PepperiInternalPageService), i0.ɵɵdirectiveInject(i3.CustomizationService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PepperiInternalPageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiInternalPageComponent, selectors: [["pep-internal-page"]], viewQuery: function PepperiInternalPageComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true, ViewContainerRef);
        i0.ɵɵviewQuery(_c1, true, ViewContainerRef);
        i0.ɵɵviewQuery(_c2, true);
        i0.ɵɵviewQuery(PepperiInternalListComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.orgCont = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalCont = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.matrixTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customList = _t.first);
    } }, inputs: { field: "field", hasHeightLimit: "hasHeightLimit", layoutType: "layoutType" }, outputs: { childChanged: "childChanged", childClicked: "childClicked" }, features: [i0.ɵɵProvidersFeature([PepperiInternalPageService])], decls: 8, vars: 6, consts: [["matrixTemplate", ""], ["id", "mainViewCont", 3, "ngStyle"], ["id", "my1_mm", 2, "height", "1mm", "width", "1mm", "display", "none"], ["class", "table-cover", 4, "ngIf"], ["class", "pepperi-button strong sm table-cover-button", 3, "click", 4, "ngIf"], ["orgCont", ""], [3, "title"], [1, "block-with-text", "body-md"], [1, "buttons-container", "spacing-element-negative", "pull-right", "flip"], [4, "ngIf"], [3, "totalsRow", "notifyValueChanged", "notifyFieldClicked"], ["mat-button", "", "menu-blur", "", 1, "spacing-element", "pepperi-button", "icon-button", "sm", "weak", 3, "matMenuTriggerFor"], ["class", "pull-left flip", 4, "ngIf"], [3, "ngClass"], ["name", "system_info"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "ngClass", "click"], ["mat-menu-item", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip"], ["name", "view_card_md"], ["viewsMenu", "matMenu"], [3, "ngSwitch"], ["name", "view_matrix", 4, "ngSwitchCase"], ["name", "view_table", 4, "ngSwitchCase"], ["name", "view_line", 4, "ngSwitchCase"], ["name", "view_matrix"], ["name", "view_table"], ["name", "view_line"], [1, "table-cover"], [1, "pepperi-button", "strong", "sm", "table-cover-button", 3, "click"]], template: function PepperiInternalPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PepperiInternalPageComponent_ng_template_0_Template, 7, 8, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelement(3, "div", 2);
        i0.ɵɵtemplate(4, PepperiInternalPageComponent_div_4_Template, 1, 0, "div", 3);
        i0.ɵɵtemplate(5, PepperiInternalPageComponent_button_5_Template, 3, 3, "button", 4);
        i0.ɵɵelementContainer(6, null, 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(3, _c5, ctx.viewWidth, ctx.viewHeight));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.coverChildTable && ctx.uiControl != null);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.coverChildTable && ctx.uiControl != null);
    } }, directives: [i4.NgStyle, i4.NgIf, i5.PepperiInternalListComponent, i6.MatMenuTrigger, i7.MatIcon, i4.NgClass, i8.PepperiIconComponent, i6._MatMenu, i6.MatMenuItem, i4.NgForOf, i4.NgSwitch, i4.NgSwitchCase], pipes: [i9.TranslatePipe], styles: [".matrix-title-container[_ngcontent-%COMP%]{align-items:flex-end;display:flex;height:var(--pep-form-field-height,2.5rem);padding:0}.matrix-title-container[_ngcontent-%COMP%]   .block-with-text[_ngcontent-%COMP%]{-ms-text-overflow:ellipsis;display:block;font-weight:var(--pep-font-weight-bold,600);max-height:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.matrix-title-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{align-self:center;display:flex}#mainViewCont[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin-bottom:1.5rem;width:100%}#mainViewCont[_ngcontent-%COMP%]   .table-cover[_ngcontent-%COMP%]{background-color:#fff;height:100%;opacity:.5;position:absolute;top:0;width:99%;z-index:101}#mainViewCont[_ngcontent-%COMP%]   .table-cover-button[_ngcontent-%COMP%]{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:102}#mainViewCont[_ngcontent-%COMP%]   .underCover[_ngcontent-%COMP%]{max-height:inherit;overflow:hidden}#mainViewCont[_ngcontent-%COMP%]    .table-header{top:unset!important}.modal-dialog[_ngcontent-%COMP%]{margin:.5rem 0;position:relative}.modal-dialog[_ngcontent-%COMP%]   .matrix-dialog-body[_ngcontent-%COMP%]{height:100%;overflow:auto;padding:.5rem}.modal-dialog[_ngcontent-%COMP%]   .matrix-dialog-body[_ngcontent-%COMP%]    .table-header{top:unset!important}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiInternalPageComponent, [{
        type: Component,
        args: [{
                selector: 'pep-internal-page',
                templateUrl: './internal-page.component.html',
                styleUrls: ['./internal-page.component.scss'],
                providers: [PepperiInternalPageService],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.PepperiInternalPageService }, { type: i3.CustomizationService }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { field: [{
            type: Input
        }], hasHeightLimit: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], childChanged: [{
            type: Output
        }], childClicked: [{
            type: Output
        }], orgCont: [{
            type: ViewChild,
            args: ['orgCont', { read: ViewContainerRef }]
        }], modalCont: [{
            type: ViewChild,
            args: ['modalCont', { read: ViewContainerRef }]
        }], matrixTemplate: [{
            type: ViewChild,
            args: ['matrixTemplate']
        }], customList: [{
            type: ViewChild,
            args: [PepperiInternalListComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2Zvcm0vaW50ZXJuYWwtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2Zvcm0vaW50ZXJuYWwtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUdULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFFVCxnQkFBZ0IsRUFFaEIsdUJBQXVCLEVBRTFCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQWlELGdCQUFnQixFQUNwRCxVQUFVLEVBQXFELE1BQU0seUJBQXlCLENBQUM7QUFDaEksT0FBTyxFQUFFLDRCQUE0QixFQUFFLFNBQVMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXBGLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNaUixnQ0FDcUM7SUFBQSxZQUFpRDtJQUFBLGlCQUFPOzs7SUFBeEQsZUFBaUQ7SUFBakQsaUlBQWlEOzs7OztJQVd0RixrQ0FJSTtJQURBLG9UQUFvRDtJQUNwRCw0QkFBTTtJQUFBLFlBQTZCO0lBQUEsaUJBQU87SUFDOUMsaUJBQVM7Ozs7SUFKTCxrTkFBaUY7SUFHM0UsZUFBNkI7SUFBN0IsaURBQTZCOzs7OztJQXBCL0MsNkJBRUk7SUFBQSxrQ0FFSTtJQUFBLDZHQUNxQztJQUVyQyxvQ0FDSTtJQUFBLCtCQUF3QztJQUM1QyxpQkFBVztJQUNmLGlCQUFTO0lBQ1Qsd0NBQ0k7SUFBQSxrQ0FFSTtJQURBLG1PQUFpQyxJQUFJLEtBQUU7SUFDdkMsNEJBQU07SUFBQSxZQUE2Qjs7SUFBQSxpQkFBTztJQUM5Qyxp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QUEyQixHQUFHLHVDQUF1QyxDQUFDO3dHQURwRSw0QkFBNEI7aUVBQTVCLDRCQUE0QjtrQ0FlUixnQkFBZ0I7a0NBQ2QsZ0JBQWdCOzt1QkFHcEMsNEJBQTRCOzs7Ozs7OzJNQXRCNUIsQ0FBQywwQkFBMEIsQ0FBQztRQzNCM0MsOEhBQ0k7UUF1REosOEJBQ0k7UUFBQSx5QkFBa0U7UUFDbEUsNkVBQXNFO1FBQ3RFLG1GQUN3RDtRQUV4RCxpQ0FBc0M7UUFDMUMsaUJBQU07O1FBUGlCLGVBQWdFO1FBQWhFLG1GQUFnRTtRQUU5RSxlQUE0QztRQUE1QyxtRUFBNEM7UUFDekMsZUFBNEM7UUFBNUMsbUVBQTRDOztrREQ3QjNDLDRCQUE0QjtjQVB4QyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDttTUFNWSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNJLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBTXlDLE9BQU87a0JBQXRELFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDO1lBQ0ksU0FBUztrQkFBMUQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7WUFDbkIsY0FBYztrQkFBMUMsU0FBUzttQkFBQyxnQkFBZ0I7WUFFYyxVQUFVO2tCQUFsRCxTQUFTO21CQUFDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgVGVtcGxhdGVSZWYsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFBlcHBlcmlJbnRlcm5hbFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcm5hbC1wYWdlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTEFZT1VUX1RZUEUsIFVJQ29udHJvbCwgS2V5VmFsdWVQYWlyLCBDdXN0b21pemF0aW9uU2VydmljZSwgT2JqZWN0U2luZ2xlRGF0YSxcclxuICAgIFVJQ29udHJvbEZpZWxkLCBPYmplY3RzRGF0YSwgRklFTERfVFlQRSwgUGVwcGVyaUZpZWxkQ2xpY2tlZERhdGEsIFBlcHBlcmlPYmplY3RDaGFuZ2VkRGF0YSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgUGVwcGVyaUludGVybmFsTGlzdENvbXBvbmVudCwgVklFV19UWVBFIH0gZnJvbSAnLi9pbnRlcm5hbC1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGVwLWludGVybmFsLXBhZ2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ludGVybmFsLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaW50ZXJuYWwtcGFnZS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbUGVwcGVyaUludGVybmFsUGFnZVNlcnZpY2VdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpSW50ZXJuYWxQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgc3RhdGljIENVUlJFTlRfQURESVRJT05BTF9BUElfTkFNRSA9ICdpdGVtX2RldGFpbHNfY3VycmVudEFkZGl0aW9uYWxBcGlOYW1lJztcclxuXHJcbiAgICBjb250cm9sVHlwZSA9ICdpbnRlcm5hbFBhZ2UnO1xyXG5cclxuICAgIEBJbnB1dCgpIGZpZWxkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBoYXNIZWlnaHRMaW1pdCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgbGF5b3V0VHlwZSA9IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtO1xyXG4gICAgQE91dHB1dCgpIGNoaWxkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBjaGlsZENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxQZXBwZXJpRmllbGRDbGlja2VkRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPFBlcHBlcmlGaWVsZENsaWNrZWREYXRhPigpO1xyXG5cclxuICAgIC8vIFRPRE86IEltcGxlbWVudFxyXG4gICAgLy8gQFZpZXdDaGlsZCgnY2hpbGRNb2RhbCcpIHB1YmxpYyBjaGlsZE1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgIGNoaWxkTW9kYWwgPSB7IGlzU2hvd246IGZhbHNlIH07XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnb3JnQ29udCcsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgb3JnQ29udDogVmlld0NvbnRhaW5lclJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ21vZGFsQ29udCcsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgbW9kYWxDb250OiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnbWF0cml4VGVtcGxhdGUnKSBtYXRyaXhUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgICBAVmlld0NoaWxkKFBlcHBlcmlJbnRlcm5hbExpc3RDb21wb25lbnQpIGN1c3RvbUxpc3Q6IFBlcHBlcmlJbnRlcm5hbExpc3RDb21wb25lbnQ7XHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG5cclxuICAgIHJlc2l6ZTogYW55O1xyXG4gICAgY2hlY2tGb3JDaGFuZ2VzOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGNoaWxkRGF0YTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBlbXB0eUZvcm06IEZvcm1Hcm91cDtcclxuICAgIHVpQ29udHJvbDogVUlDb250cm9sO1xyXG4gICAgcm93czogYW55O1xyXG4gICAgbGluZVZpZXdSb3dzOiBhbnk7XHJcbiAgICB0b3RhbHNSb3c6IGFueSA9IFtdO1xyXG4gICAgYWRkaXRpb25hbEFwaU5hbWVzOiBhbnkgPSBudWxsO1xyXG4gICAgY3VycmVudEFkZGl0aW9uYWxBcGlOYW1lOiBhbnkgPSBudWxsO1xyXG4gICAgZm9jdXNlZFFTID0gZmFsc2U7XHJcbiAgICBmaWVsZElkV2l0aEZvY3VzID0gJyc7XHJcbiAgICBjb2x1bW5XaWR0aCA9IDEwMDtcclxuICAgIGNvdmVyQ2hpbGRUYWJsZSA9IGZhbHNlO1xyXG4gICAgY2hpbGRWaWV3VHlwZXM6IEFycmF5PEtleVZhbHVlUGFpcjxzdHJpbmc+PjtcclxuICAgIGN1cnJlbnRWaWV3VHlwZTogS2V5VmFsdWVQYWlyPHN0cmluZz4gPSBudWxsO1xyXG4gICAgY3VycmVudFZpZXdUeXBlVGl0bGU6IHN0cmluZztcclxuICAgIHN1bU9mTWluQ29sV2lkdGggPSAwO1xyXG4gICAgdG90YWxSb3dzV2lkdGggPSAwO1xyXG4gICAgdmlld1dpZHRoID0gJzEwMCUnO1xyXG4gICAgdmlld0hlaWdodCA9ICdhdXRvJztcclxuICAgIGRpc3BsYXlRU2J0bnMgPSB0cnVlO1xyXG4gICAgc2VsZWN0ZWRBcGlOYW1lID0gJyc7XHJcbiAgICBzaG93U29ydCA9IGZhbHNlO1xyXG4gICAgZGVmYXVsdFJvd1NwYW4gPSAtMTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcGVwcGVyaUludGVybmFsUGFnZVNlcnZpY2U6IFBlcHBlcmlJbnRlcm5hbFBhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBjdXN0b21pemF0aW9uU2VydmljZTogQ3VzdG9taXphdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgICApIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWxsRGF0YSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5tYXRyaXhUZW1wbGF0ZS5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTW9kYWwuaXNTaG93bikge1xyXG4gICAgICAgICAgICB0aGlzLm9yZ0NvbnQuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnQuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnQuaW5zZXJ0KHZpZXcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxDb250LmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMub3JnQ29udC5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLm9yZ0NvbnQuaW5zZXJ0KHZpZXcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGREYXRhLlJvd3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZERhdGEuUm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZERhdGFSb3cgb2YgdGhpcy5jaGlsZERhdGEuUm93cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9zZCA9IG5ldyBPYmplY3RTaW5nbGVEYXRhKHRoaXMudWlDb250cm9sLCBjaGlsZERhdGFSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9zZC5Jc0VkaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXIucHVzaChvc2QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2aWV3VHlwZTogVklFV19UWVBFID0gdGhpcy5pc1RhYmxlVmlldygpID8gVklFV19UWVBFLlRhYmxlIDogVklFV19UWVBFLkxpbmU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tTGlzdC5pbml0TGlzdERhdGEodGhpcy51aUNvbnRyb2wsIHRoaXMuY2hpbGREYXRhLlRvdGFsUm93cywgYnVmZmVyLCB2aWV3VHlwZSwgdGhpcy5nZXRJdGVtQ2xhc3MoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VG90YWxzUm93KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hpbGRNb2RhbC5pc1Nob3duKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbkNvdW50ID0gdGhpcy5jaGlsZERhdGEuUm93cyA/IHRoaXMuY2hpbGREYXRhLlJvd3MubGVuZ3RoIDogMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRXZlbiA9IGNoaWxkcmVuQ291bnQgJSAyID09PSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gMyBmb3IgbWF0cml4ICYgZmxhdCBtYXRyaXggYmVjYXVzZSB0aGUgaGVhZGVyICsgdG90YWwgaXMgMiBtb3JlIHJvd3MuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dzVG9BZGQgPSB0aGlzLmlzTWF0cml4VmlldygpIHx8IHRoaXMuaXNGbGF0TWF0cml4VmlldygpID8gMyA6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybVJvd0hlaWdodCA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuY2FsY3VsYXRlRm9ybUZpZWxkSGVpZ2h0KCkgKiAxNjsgLy8gY29udmVydCByZW0gdG8gcGl4ZWxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGRlZmF1bHQgb25seSBpZiBub3Qgc2V0IHlldC5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRSb3dTcGFuID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFJvd1NwYW4gPSB0aGlzLmZpZWxkLnJvd1NwYW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRm9yIGxpbmUgdmlldyBBZGQgdGhlIGhlaWdodCBvZiB0aGUgbGluZSAoZm9ybSBoZWlnaHQpLlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFZpZXdUeXBlLktleSA9PT0gJ09yZGVyQ2VudGVyRmxhdE1hdHJpeExpbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4Um93ID0gTWF0aC5tYXguYXBwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb250cm9sLkNvbnRyb2xGaWVsZHMubWFwKChmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZi5MYXlvdXQuWSArIGYuTGF5b3V0LkhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAqIDE2IGNvbnZlcnQgcmVtIHRvIHBpeGVsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZFJvd3NIZWlnaHQgPSB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLmNhbGN1bGF0ZUNhcmRSb3dzSGVpZ2h0KG1heFJvdykgKiAxNjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF4Um93ICogMjQgKyA2MCAtIDI0IGZvciBlYWNoIHJvdyBpbiBjYXJkICsgNjAgZm9yIHRoZSBwYWRkaW5nIG9mIGVhY2ggY2FyZC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCByb3dTcGFuVG9BZGQgPSBNYXRoLmZsb29yKGNoaWxkcmVuQ291bnQgKiAoKGNhcmRSb3dzSGVpZ2h0ICsgNTYpIC8gZm9ybVJvd0hlaWdodCkgKyByb3dzVG9BZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICsgMTYgaXMgdGhlIDFyZW0gbWFyZ2luIG91dHNpZGUgY2FyZC5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dTcGFuVG9BZGQgPSAoY2hpbGRyZW5Db3VudCAqIChjYXJkUm93c0hlaWdodCArIDE2KSkgLyBmb3JtUm93SGVpZ2h0ICsgcm93c1RvQWRkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGQucm93U3BhbiA9IHJvd1NwYW5Ub0FkZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdGFibGVSb3dzSGVpZ2h0ID0gdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS5jYWxjdWxhdGVUYWJsZVJvd3NIZWlnaHQoY2hpbGRyZW5Db3VudCkgKiAxNjtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmZpZWxkLnJvd1NwYW4gPSBNYXRoLmNlaWwoKHRhYmxlUm93c0hlaWdodCArIChyb3dzVG9BZGQgKiA0MCkpIC8gZm9ybVJvd0hlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKiAxNiBjb252ZXJ0IHJlbSB0byBwaXhlbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3NUb0FkZEhlaWdodCA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuY2FsY3VsYXRlVGFibGVSb3dzSGVpZ2h0KHJvd3NUb0FkZCwgZmFsc2UpICogMTY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFibGVSb3dzSGVpZ2h0ID0gdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS5jYWxjdWxhdGVUYWJsZVJvd3NIZWlnaHQoY2hpbGRyZW5Db3VudCkgKiAxNjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkLnJvd1NwYW4gPSAocm93c1RvQWRkSGVpZ2h0ICsgdGFibGVSb3dzSGVpZ2h0KSAvIGZvcm1Sb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnN1bU9mTWluQ29sV2lkdGggPSAwO1xyXG4gICAgICAgICAgICAgICAgc2VsZi50b3RhbFJvd3NXaWR0aCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZERhdGEuVUlDb250cm9sLkNvbnRyb2xGaWVsZHMuZm9yRWFjaCgodWlDb250cm9sRmllbGQ6IFVJQ29udHJvbEZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b3RhbFJvd3NXaWR0aCArPSB1aUNvbnRyb2xGaWVsZC5Db2x1bW5XaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB1aUNvbnRyb2xGaWVsZC5taW5GaWVsZFdpZHRoID0gc2VsZi5tbVRvUHgoMTIpOyAvLyBORUVEIFRPIEdFVCBUSElTIFBBUkFNIEZST00gQ1VTVE9NSVpBVElPTjtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnN1bU9mTWluQ29sV2lkdGggKz0gMTI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFZpZXdDb3Zlcih0aGlzLmNoaWxkRGF0YS5Sb3dzKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTUwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbGxDaGlsZERhdGEocmVzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBUT0RPOiA/P1xyXG4gICAgICAgIC8vIHRoaXMudXNlclNlcnZpY2Uuc2V0T3B0aW9uYWxWYWx1ZXNEaWMocmVzLlJvd3MpO1xyXG4gICAgICAgIHRoaXMuY2hpbGREYXRhID0gcmVzO1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sID0gcmVzLlVJQ29udHJvbDtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxBcGlOYW1lcyA9IHJlcy5BZGRpdGlvbmFsQXBpTmFtZXM7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsbERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBtbVRvUHgobW0pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG1tICogJCgnI215MV9tbScpLmhlaWdodCgpKTsgLy8gSlF1ZXJ5IHJldHVybnMgc2l6ZXMgaW4gUFhcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzTWF0cml4VmlldygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Vmlld1R5cGUgJiYgdGhpcy5jdXJyZW50Vmlld1R5cGUuS2V5ID09PSAnT3JkZXJDZW50ZXJNYXRyaXgnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNGbGF0TWF0cml4VmlldygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Vmlld1R5cGUgJiYgdGhpcy5jdXJyZW50Vmlld1R5cGUuS2V5ID09PSAnT3JkZXJDZW50ZXJGbGF0TWF0cml4R3JpZCc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNUYWJsZVZpZXcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNNYXRyaXhWaWV3KCkgfHwgdGhpcy5pc0ZsYXRNYXRyaXhWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJdGVtQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzID0gJyc7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1RhYmxlVmlldygpKSB7XHJcbiAgICAgICAgICAgIHJlcyA9ICdsaW5lLXZpZXcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDaGlsZHJlblZpZXdUeXBlKHZpZXdUeXBlS2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgICAgICB0aGlzLnVpQ29udHJvbCA9IG51bGw7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgdnQgb2YgdGhpcy5jaGlsZFZpZXdUeXBlcykge1xyXG4gICAgICAgICAgICBpZiAodnQuS2V5ID09PSB2aWV3VHlwZUtleSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlld1R5cGUgPSB2dDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHZpZXcgdHlwZSBjaGFuZ2VkXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudFZpZXdUeXBlLktleSAhPSB2aWV3VHlwZUtleSkge1xyXG4gICAgICAgICQoJ2JvZHknKS5zY3JvbGxUb3AoMCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Vmlld1R5cGVUaXRsZSA9IHRoaXMuY3VycmVudFZpZXdUeXBlLlZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLnBlcHBlcmlJbnRlcm5hbFBhZ2VTZXJ2aWNlLmNoYW5nZUNoaWxkcmVuVmlld1R5cGUodGhpcy5jdXJyZW50Vmlld1R5cGUuS2V5LCAocmVzOiBPYmplY3RzRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLlJvd3MpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZmlsbENoaWxkRGF0YShyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Vmlld0NvdmVyKHJvd3MpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXJvd3MpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGNvbnN0IG51bW9mcm93cyA9IHJvd3MubGVuZ3RoO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRyaXhDb250ID0gJCgnI21haW5WaWV3Q29udCcpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IG1hdHJpeENvbnQucGFyZW50cygnbWF0LWdyaWQtdGlsZScpLmNzcygnd2lkdGgnKTtcclxuICAgICAgICBjb25zdCB2aWV3SGVpZ2h0ID0gbWF0cml4Q29udC5wYXJlbnRzKCdtYXQtZ3JpZC10aWxlJykuY3NzKCdoZWlnaHQnKTtcclxuXHJcbiAgICAgICAgdGhpcy52aWV3V2lkdGggPSB2aWV3V2lkdGggPyB2aWV3V2lkdGgudG9TdHJpbmcoKSA6ICcxMDAlJztcclxuICAgICAgICB0aGlzLnZpZXdIZWlnaHQgPSB0aGlzLmhhc0hlaWdodExpbWl0ID8gdmlld0hlaWdodC50b1N0cmluZygpIDogJ2F1dG8nO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgbWF0cml4IGxvY2F0ZWQgb24gdGhlIGJvdHRvbSAvIHRoZXJlIGlzIG5vdGhpbmcgdW5kZXIgdGhlIG1hdHJpeCB3ZSBkb250IG5lZWQgdG8gY2hlY2sgdGhlIGhlaWdodFxyXG5cclxuICAgICAgICBpZiAocGFyc2VJbnQodmlld1dpZHRoLCAxMCkgPCB0aGlzLm1tVG9QeCh0aGlzLnN1bU9mTWluQ29sV2lkdGgpIHx8XHJcbiAgICAgICAgICAgICh0aGlzLmhhc0hlaWdodExpbWl0ICYmIHBhcnNlSW50KHZpZXdIZWlnaHQsIDEwKSA8IG51bW9mcm93cyAqIDQxICsgNzIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY292ZXJDaGlsZFRhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvdmVyQ2hpbGRUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TWF0cml4RGlhbG9nKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuY2hpbGRNb2RhbC5jb25maWcuaWdub3JlQmFja2Ryb3BDbGljayA9IHRydWU7XHJcbiAgICAgICAgLy8gVE9ETzogU2hvdyBtb2RhbFxyXG4gICAgICAgIC8vIHRoaXMuY2hpbGRNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzpcclxuICAgIC8vIG9uU2hvd24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5maWxsRGF0YSgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIFRPRE86XHJcbiAgICAvLyBvbkhpZGRlbigpIHtcclxuICAgIC8vICAgICB0aGlzLmZpbGxEYXRhKCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8gbGV0IGZpZWxkID0gdGhpcy5maWVsZCBhcyBQZXBwZXJpSW50ZXJuYWxQYWdlRmllbGQ7XHJcblxyXG4gICAgICAgIHRoaXMucGVwcGVyaUludGVybmFsUGFnZVNlcnZpY2UuaW5pdERldGFpbHModGhpcy5maWVsZC5vYmplY3RJZCwgdGhpcy5maWVsZC5wYXJlbnRJZCxcclxuICAgICAgICAgICAgdGhpcy5maWVsZC5zZWFyY2hDb2RlLCAocmVzVmlld1R5cGVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8gbXkgY29kZSBESS03MTM0XHJcbiAgICAgICAgICAgIHJlc1ZpZXdUeXBlcy5Sb3dzID0gcmVzVmlld1R5cGVzLlJvd3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLktleSAhPT0gJ09yZGVyQ2VudGVyVmlldzEnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNWaWV3VHlwZXMuUm93cyAmJiByZXNWaWV3VHlwZXMuUm93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc1ZpZXdUeXBlcy5EZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzVmlld1R5cGVzLkRlZmF1bHQgPSByZXNWaWV3VHlwZXMuUm93c1swXS5LZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNoaWxkVmlld1R5cGVzID0gcmVzVmlld1R5cGVzLlJvd3M7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRWaWV3VHlwZSA9IHJlc1ZpZXdUeXBlcy5Sb3dzWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzVmlld1R5cGVzLlJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgdmlld1R5cGVSb3cgb2YgcmVzVmlld1R5cGVzLlJvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmlld1R5cGVSb3cuVmFsdWUgPT09IHJlc1ZpZXdUeXBlcy5EZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFZpZXdUeXBlID0gdmlld1R5cGVSb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZExhc3RBZGRpdGlvbmFsQXBpTmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VDaGlsZHJlblZpZXdUeXBlKHNlbGYuY3VycmVudFZpZXdUeXBlLktleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzpcclxuICAgICAgICAvLyB0aGlzLnJlc2l6ZSA9IE9ic2VydmFibGUuZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAgICAgLy8gICAgIC5kZWJvdW5jZVRpbWUoMTApXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBzZWxmLnNldFZpZXdDb3ZlcihzZWxmLnJvd3MpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGFzdEFkZGl0aW9uYWxBcGlOYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRhYSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oUGVwcGVyaUludGVybmFsUGFnZUNvbXBvbmVudC5DVVJSRU5UX0FERElUSU9OQUxfQVBJX05BTUUpO1xyXG4gICAgICAgIGlmIChkYWEgJiYgZGFhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYWRkaXRpb25hbEFwaU5hbWUgPSBKU09OLnBhcnNlKGRhYSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFkZGl0aW9uYWxBcGlOYW1lID0gYWRkaXRpb25hbEFwaU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucGVwcGVyaUludGVybmFsUGFnZVNlcnZpY2UuYWRkaXRpb25hbEFwaU5hbWUgPSBhZGRpdGlvbmFsQXBpTmFtZS5LZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkQ2hhbmdlZCkgeyB0aGlzLmNoaWxkQ2hhbmdlZC51bnN1YnNjcmliZSgpOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkQ2xpY2tlZCkgeyB0aGlzLmNoaWxkQ2xpY2tlZC51bnN1YnNjcmliZSgpOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZSkgeyB0aGlzLnJlc2l6ZS51bnN1YnNjcmliZSgpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQWRkaXRpb25hbEFwaU5hbWUoYWRkaXRpb25hbEFwaU5hbWUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnBlcHBlcmlJbnRlcm5hbFBhZ2VTZXJ2aWNlLmNoYW5nZUFkZGl0aW9uYWxBcGlOYW1lKGFkZGl0aW9uYWxBcGlOYW1lID8gYWRkaXRpb25hbEFwaU5hbWUuS2V5IDogJycsXHJcbiAgICAgICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlcy5Sb3dzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCByb3cgb2YgcmVzLlJvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVDaGFuZ2VzKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oUGVwcGVyaUludGVybmFsUGFnZUNvbXBvbmVudC5DVVJSRU5UX0FERElUSU9OQUxfQVBJX05BTUUsIEpTT04uc3RyaW5naWZ5KGFkZGl0aW9uYWxBcGlOYW1lKSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBZGRpdGlvbmFsQXBpTmFtZSA9IGFkZGl0aW9uYWxBcGlOYW1lO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvdGFsc1JvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvdGFsc1JvdyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc01hdHJpeFZpZXcoKSB8fCB0aGlzLmlzRmxhdE1hdHJpeFZpZXcoKSkge1xyXG4gICAgICAgICAgICBsZXQgdG90YWxDb2wgPSAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tTGlzdC5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5jdXN0b21MaXN0Lml0ZW1zWzBdLkRhdGEuRmllbGRzLmxlbmd0aDsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuY3VzdG9tTGlzdC5pdGVtc1swXS5EYXRhLkZpZWxkc1tjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLk51bWJlckludGVnZXJGb3JNYXRyaXggfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLk51bWJlckludGVnZXJRdWFudGl0eVNlbGVjdG9yIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJSZWFsRm9yTWF0cml4IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJSZWFsUXVhbnRpdHlTZWxlY3RvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuQ2FsY3VsYXRlZEludCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuTnVtYmVySW50ZWdlciB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuQ2FsY3VsYXRlZFJlYWwgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLk51bWJlclJlYWxcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxDb2wgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY3VzdG9tTGlzdC5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RJdGVtIG9mIHRoaXMuY3VzdG9tTGlzdC5pdGVtcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0SXRlbS5EYXRhLkZpZWxkc1tjb2xdICYmIGxpc3RJdGVtLkRhdGEuRmllbGRzW2NvbF0uVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGxpc3RJdGVtLkRhdGEuRmllbGRzW2NvbF0uVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQ29sICs9IGlzTmFOKG51bSkgPyAwIDogbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxzUm93LnB1c2godG90YWxDb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxzUm93LnB1c2goJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDaGFuZ2VzKGVsZW1lbnRUb1VwZGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MaXN0LnVwZGF0ZUxpc3RJdGVtKGVsZW1lbnRUb1VwZGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBtZW1vcnkgZGF0YVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNoaWxkRGF0YS5Sb3dzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGlsZERhdGEuUm93c1tpbmRleF0uVUlEID09PSBlbGVtZW50VG9VcGRhdGUuVUlEKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkRGF0YS5Sb3dzW2luZGV4XSA9IGVsZW1lbnRUb1VwZGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZUNhbGxiYWNrKGlkOiBhbnksIHJlczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHJlcy5Sb3dzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoYW5nZXMocmVzLlJvd3NbMF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRUb3RhbHNSb3coKTtcclxuICAgICAgICB0aGlzLmNoZWNrRm9yQ2hhbmdlcyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIERJLTE1OTg1XHJcbiAgICAgICAgdGhpcy5jaGlsZENoYW5nZWQuZW1pdChyZXMpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ3VzdG9taXplT2JqZWN0Q2hhbmdlZChjdXN0b21pemVPYmplY3RDaGFuZ2VkRGF0YTogUGVwcGVyaU9iamVjdENoYW5nZWREYXRhKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGhhbmRsZWRFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGJvdW5kU2V0VmFsdWVDYWxsYmFjayA9IHRoaXMuc2V0VmFsdWVDYWxsYmFjay5iaW5kKHRoaXMpOyAvLyAuYmluZCgpIHRvIGhhdmUgdGhpcyBpbiB0aGUgYm91bmQgZnVuY3Rpb24uXHJcblxyXG4gICAgICAgIC8vIEZvciB0aGUgbmV3IGN1c3RvbSBmb3JtLCB0aGUgcGx1cyBhbmQgbWludXMgZXZlbnRzIHRyYW5zZm9ybSBpbiB0aGUgUGVwcGVyaU9iamVjdENoYW5nZWREYXRhXHJcbiAgICAgICAgaWYgKGN1c3RvbWl6ZU9iamVjdENoYW5nZWREYXRhLkNvbnRyb2xUeXBlID09PSAncXMnKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXN0b21pemVPYmplY3RDaGFuZ2VkRGF0YS5WYWx1ZSA9PT0gJysnKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVkRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXBwZXJpSW50ZXJuYWxQYWdlU2VydmljZS5jaGlsZFBsdXNDbGljayhjdXN0b21pemVPYmplY3RDaGFuZ2VkRGF0YS5JZCwgY3VzdG9taXplT2JqZWN0Q2hhbmdlZERhdGEuQXBpTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRTZXRWYWx1ZUNhbGxiYWNrKGN1c3RvbWl6ZU9iamVjdENoYW5nZWREYXRhLklkLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VzdG9taXplT2JqZWN0Q2hhbmdlZERhdGEuVmFsdWUgPT09ICctJykge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlZEV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVwcGVyaUludGVybmFsUGFnZVNlcnZpY2UuY2hpbGRNaW51c0NsaWNrKGN1c3RvbWl6ZU9iamVjdENoYW5nZWREYXRhLklkLCBjdXN0b21pemVPYmplY3RDaGFuZ2VkRGF0YS5BcGlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3VuZFNldFZhbHVlQ2FsbGJhY2soY3VzdG9taXplT2JqZWN0Q2hhbmdlZERhdGEuSWQsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoYW5kbGVkRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXBwZXJpSW50ZXJuYWxQYWdlU2VydmljZS5jaGlsZFZhbHVlQ2hhbmdlZChjdXN0b21pemVPYmplY3RDaGFuZ2VkRGF0YS5JZCwgY3VzdG9taXplT2JqZWN0Q2hhbmdlZERhdGEuQXBpTmFtZSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWl6ZU9iamVjdENoYW5nZWREYXRhLlZhbHVlLCAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBib3VuZFNldFZhbHVlQ2FsbGJhY2soY3VzdG9taXplT2JqZWN0Q2hhbmdlZERhdGEuSWQsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ3VzdG9taXplRmllbGRDbGljayhmaWVsZENsaWNrRXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hpbGRDbGlja2VkLmVtaXQoZmllbGRDbGlja0V2ZW50KTtcclxuICAgIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI21hdHJpeFRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1hdHJpeC10aXRsZS1jb250YWluZXIgcGVwcGVyaS1ib3JkZXItYm90dG9tIGFsaWduLXt7IGZpZWxkLnhBbGlnbm1lbnQgfX1cIiB0aXRsZT1cInt7IGZpZWxkLmxhYmVsIH19XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jay13aXRoLXRleHQgYm9keS1tZFwiPnt7IGZpZWxkLmxhYmVsIH19PC9zcGFuPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9ucy1jb250YWluZXIgc3BhY2luZy1lbGVtZW50LW5lZ2F0aXZlIHB1bGwtcmlnaHQgZmxpcFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImN1cnJlbnRWaWV3VHlwZT8uS2V5ID09ICdPcmRlckNlbnRlck1hdHJpeCcgJiYgYWRkaXRpb25hbEFwaU5hbWVzICYmIGFkZGl0aW9uYWxBcGlOYW1lcy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3BhY2luZy1lbGVtZW50IHBlcHBlcmktYnV0dG9uIGljb24tYnV0dG9uIHNtIHdlYWtcIiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCJcclxuICAgICAgICAgICAgICAgICAgICBtZW51LWJsdXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnQgZmxpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY3VycmVudEFkZGl0aW9uYWxBcGlOYW1lXCI+Jm5ic3A7e3sgY3VycmVudEFkZGl0aW9uYWxBcGlOYW1lPy5WYWx1ZSB9fSZuYnNwOzwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIFtuZ0NsYXNzXT1cInsgJ3B1bGwtbGVmdCBmbGlwJzogY3VycmVudEFkZGl0aW9uYWxBcGlOYW1lfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInN5c3RlbV9pbmZvXCI+PC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCIgeFBvc2l0aW9uPVwiYmVmb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIFtuZ0NsYXNzXT1cInsgc2VsZWN0ZWQ6IGN1cnJlbnRBZGRpdGlvbmFsQXBpTmFtZSA9PT0gbnVsbCB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZUFkZGl0aW9uYWxBcGlOYW1lKG51bGwpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7ICdMSVNULk5PTkUnIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7IHNlbGVjdGVkOiBjdXJyZW50QWRkaXRpb25hbEFwaU5hbWU/LktleSA9PSBhZGRpdGlvbmFsQXBpTmFtZT8uS2V5IH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgYWRkaXRpb25hbEFwaU5hbWUgb2YgYWRkaXRpb25hbEFwaU5hbWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZUFkZGl0aW9uYWxBcGlOYW1lKGFkZGl0aW9uYWxBcGlOYW1lKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBhZGRpdGlvbmFsQXBpTmFtZS5WYWx1ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LW1lbnU+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hpbGRWaWV3VHlwZXMgJiYgY2hpbGRWaWV3VHlwZXMubGVuZ3RoID4gMVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBzbSB3ZWFrXCIgbWF0LWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIFttYXRNZW51VHJpZ2dlckZvcl09XCJ2aWV3c01lbnVcIiBtZW51LWJsdXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInZpZXdfY2FyZF9tZFwiPjwvcGVwLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtYXQtbWVudSAjdmlld3NNZW51PVwibWF0TWVudVwiIHhQb3NpdGlvbj1cImJlZm9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSBbbmdDbGFzc109XCJ7IHNlbGVjdGVkOiBjdXJyZW50Vmlld1R5cGU/LktleSA9PSB2aWV3VHlwZT8uS2V5IH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdmlld1R5cGUgb2YgY2hpbGRWaWV3VHlwZXNcIiAoY2xpY2spPVwiY2hhbmdlQ2hpbGRyZW5WaWV3VHlwZSh2aWV3VHlwZT8uS2V5KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gW25nU3dpdGNoXT1cInZpZXdUeXBlPy5LZXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwZXAtaWNvbiAqbmdTd2l0Y2hDYXNlPVwiJ09yZGVyQ2VudGVyTWF0cml4J1wiIG5hbWU9XCJ2aWV3X21hdHJpeFwiPjwvcGVwLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gKm5nU3dpdGNoQ2FzZT1cIidPcmRlckNlbnRlckZsYXRNYXRyaXhHcmlkJ1wiIG5hbWU9XCJ2aWV3X3RhYmxlXCI+PC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwZXAtaWNvbiAqbmdTd2l0Y2hDYXNlPVwiJ09yZGVyQ2VudGVyRmxhdE1hdHJpeExpbmUnXCIgbmFtZT1cInZpZXdfbGluZVwiPjwvcGVwLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IHZpZXdUeXBlPy5WYWx1ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LW1lbnU+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHBlcC1pbnRlcm5hbC1saXN0IChub3RpZnlWYWx1ZUNoYW5nZWQpPVwib25DdXN0b21pemVPYmplY3RDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgIChub3RpZnlGaWVsZENsaWNrZWQpPVwib25DdXN0b21pemVGaWVsZENsaWNrKCRldmVudClcIiBbdG90YWxzUm93XT1cInRvdGFsc1Jvd1wiPjwvcGVwLWludGVybmFsLWxpc3Q+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48ZGl2IGlkPVwibWFpblZpZXdDb250XCIgW25nU3R5bGVdPVwieyAnbWF4LXdpZHRoJzogdmlld1dpZHRoLCAnbWF4LWhlaWdodCc6IHZpZXdIZWlnaHQgfVwiPlxyXG4gICAgPGRpdiBpZD1cIm15MV9tbVwiIHN0eWxlPVwiaGVpZ2h0OjFtbTt3aWR0aDoxbW07ZGlzcGxheTpub25lO1wiPjwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImNvdmVyQ2hpbGRUYWJsZSAmJiB1aUNvbnRyb2wgIT0gbnVsbFwiIGNsYXNzPVwidGFibGUtY292ZXJcIj48L2Rpdj5cclxuICAgIDxidXR0b24gKm5nSWY9XCJjb3ZlckNoaWxkVGFibGUgJiYgdWlDb250cm9sICE9IG51bGxcIiAoY2xpY2spPVwic2hvd01hdHJpeERpYWxvZygpXCJcclxuICAgICAgICBjbGFzcz1cInBlcHBlcmktYnV0dG9uIHN0cm9uZyBzbSB0YWJsZS1jb3Zlci1idXR0b25cIj57eyAnSU5URVJOQUxfUEFHRS5DTElDS19UT19PUkRFUicgfCB0cmFuc2xhdGUgfX08L2J1dHRvbj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICNvcmdDb250PjwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuXHJcbjwhLS0gPGRpdiBpZD1cImNoaWxkR3JpZE1vZGFsXCIgYnNNb2RhbCAob25TaG93bik9XCJvblNob3duKClcIiAob25IaWRkZW4pPVwib25IaWRkZW4oKVwiICNjaGlsZE1vZGFsPVwiYnMtbW9kYWxcIiBjbGFzcz1cIm1vZGFsXCJcclxuICAgIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZ3JpZE1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSBtYXRyaXgtZGlhbG9nLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgI21vZGFsQ29udD48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IC0tPiJdfQ==