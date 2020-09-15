import { OnInit, OnDestroy, EventEmitter, ElementRef, ViewContainerRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PepperiInternalPageService } from './internal-page.service';
import { LAYOUT_TYPE, UIControl, KeyValuePair, CustomizationService, PepperiFieldClickedData, PepperiObjectChangedData } from '@pepperi-addons/ngx-lib';
import { PepperiInternalListComponent } from './internal-list.component';
import * as i0 from "@angular/core";
export declare class PepperiInternalPageComponent implements OnInit, OnDestroy {
    protected fb: FormBuilder;
    private pepperiInternalPageService;
    customizationService: CustomizationService;
    private elementRef;
    private changeDetectorRef;
    static CURRENT_ADDITIONAL_API_NAME: string;
    controlType: string;
    field: any;
    hasHeightLimit: boolean;
    layoutType: LAYOUT_TYPE;
    childChanged: EventEmitter<any>;
    childClicked: EventEmitter<PepperiFieldClickedData>;
    childModal: {
        isShown: boolean;
    };
    orgCont: ViewContainerRef;
    modalCont: ViewContainerRef;
    matrixTemplate: TemplateRef<any>;
    customList: PepperiInternalListComponent;
    LAYOUT_TYPE: typeof LAYOUT_TYPE;
    resize: any;
    checkForChanges: any;
    childData: any;
    emptyForm: FormGroup;
    uiControl: UIControl;
    rows: any;
    lineViewRows: any;
    totalsRow: any;
    additionalApiNames: any;
    currentAdditionalApiName: any;
    focusedQS: boolean;
    fieldIdWithFocus: string;
    columnWidth: number;
    coverChildTable: boolean;
    childViewTypes: Array<KeyValuePair<string>>;
    currentViewType: KeyValuePair<string>;
    currentViewTypeTitle: string;
    sumOfMinColWidth: number;
    totalRowsWidth: number;
    viewWidth: string;
    viewHeight: string;
    displayQSbtns: boolean;
    selectedApiName: string;
    showSort: boolean;
    defaultRowSpan: number;
    constructor(fb: FormBuilder, pepperiInternalPageService: PepperiInternalPageService, customizationService: CustomizationService, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    private fillData;
    private fillChildData;
    mmToPx(mm: any): number;
    private isMatrixView;
    private isFlatMatrixView;
    isTableView(): boolean;
    private getItemClass;
    changeChildrenViewType(viewTypeKey: string): void;
    setViewCover(rows: any): void;
    showMatrixDialog(): void;
    ngOnInit(): void;
    loadLastAdditionalApiName(): void;
    ngOnDestroy(): void;
    changeAdditionalApiName(additionalApiName: any): void;
    setTotalsRow(): void;
    updateChanges(elementToUpdate: any): void;
    setValueCallback(id: any, res: any): void;
    onCustomizeObjectChanged(customizeObjectChangedData: PepperiObjectChangedData): void;
    onCustomizeFieldClick(fieldClickEvent: any): void;
    static ɵfac: i0.ɵɵFactoryDef<PepperiInternalPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PepperiInternalPageComponent, "pep-internal-page", never, { "field": "field"; "hasHeightLimit": "hasHeightLimit"; "layoutType": "layoutType"; }, { "childChanged": "childChanged"; "childClicked": "childClicked"; }, never, never>;
}
