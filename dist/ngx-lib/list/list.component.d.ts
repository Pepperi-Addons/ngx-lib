import { EventEmitter, OnInit, Renderer2, ElementRef, ChangeDetectorRef, OnDestroy, OnChanges } from '@angular/core';
import { LAYOUT_TYPE, LayoutService, ObjectSingleData, UIControl, ObjectsDataRow, SCREEN_SIZE, PepperiObjectChangedData, PepperiFieldClickedData } from '@pepperi-addons/ngx-lib';
import { VirtualScrollComponent, ChangeEvent } from './virtual-scroll.component';
import * as i0 from "@angular/core";
export declare enum SELECTION_TYPE_FOR_ACTIONS {
    None = 0,
    Single = 1,
    Multi = 2,
    SingleAction = 3
}
export declare enum VIEW_TYPE {
    None = 0,
    Card = 1,
    Line = 2,
    Table = 3,
    Map = 4
}
export interface ChangeSortingEvent {
    sortBy: string;
    isAsc: boolean;
}
export declare class SelectionData {
    selectionType: number;
    rows: Array<any>;
    rowTypes: Array<any>;
}
export declare class PepperiListComponent implements OnInit, OnChanges, OnDestroy {
    private element;
    private layoutService;
    private cd;
    private renderer;
    static TOP_ITEMS_DEFAULT: number;
    static TOP_ITEMS_TABLE: number;
    static TOP_ITEMS_THUMBNAILS: number;
    static TOP_ITEMS_ARRAY: number;
    static SELECTED_ITEMS_STATE_KEY: string;
    static UN_SELECTED_ITEMS_STATE_KEY: string;
    static ALL_SELECTED_STATE_KEY: string;
    static SORT_BY_STATE_KEY: string;
    static ASCENDING_STATE_KEY: string;
    static MINIMUM_COLUMN_WIDTH: number;
    currentListTypeTranslation: string;
    noDataFoundMsg: string;
    selectionTypeForActions: SELECTION_TYPE_FOR_ACTIONS;
    hideAllSelectionInMulti: boolean;
    top: number;
    listType: string;
    objectId: string;
    parentId: string;
    searchCode: string;
    firstFieldAsLink: boolean;
    supportSorting: boolean;
    supportResizing: boolean;
    parentScroll: Element | Window;
    disabled: boolean;
    isPrinting: boolean;
    disableSelectionItems: boolean;
    isReport: boolean;
    layoutType: LAYOUT_TYPE;
    pageType: string;
    totalsRow: any[];
    isTouchDevice: boolean;
    notifyThumbnailClicked: EventEmitter<ObjectSingleData>;
    notifyFieldClicked: EventEmitter<any>;
    notifyMenuItemClicked: EventEmitter<any>;
    notifyValueChanged: EventEmitter<PepperiObjectChangedData>;
    notifyListChanged: EventEmitter<ChangeEvent>;
    notifySortingChanged: EventEmitter<ChangeSortingEvent>;
    notifySelectedItemsChanged: EventEmitter<number>;
    notifySelectAllSingleActionClicked: EventEmitter<any>;
    notifySingleActionClicked: EventEmitter<any>;
    notifyListLoad: EventEmitter<any>;
    virtualScroll: VirtualScrollComponent;
    noVirtualScrollCont: ElementRef;
    tableHeader: ElementRef;
    selectAllCB: any;
    LAYOUT_TYPE: typeof LAYOUT_TYPE;
    SELECTION_TYPE_FOR_ACTIONS: typeof SELECTION_TYPE_FOR_ACTIONS;
    uiControl: UIControl;
    totalRows: number;
    itemClass: string;
    isTable: boolean;
    private hasColumnWidthOfTypePercentage;
    items: Array<ObjectSingleData>;
    showSelection: boolean;
    isCardView: boolean;
    private itemsCounter;
    showItems: boolean;
    scrollItems: Array<ObjectSingleData>;
    SEPARATOR: string;
    isAllSelected: boolean;
    selectedItems: Map<string, string>;
    unSelectedItems: Map<string, string>;
    nativeWindow: any;
    selectedItemId: string;
    hoveredItemId: string;
    private lockEvents;
    private containerWidth;
    screenSize: SCREEN_SIZE;
    pressedColumn: string;
    startX: number;
    startWidth: number;
    tableStartWidth: number;
    isAsc: boolean;
    sortBy: string;
    isUserSelected: boolean;
    checkForChanges: any;
    useVirtualScroll: boolean;
    calculatedObjectHeight: string;
    constructor(element: ElementRef, layoutService: LayoutService, cd: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    setContainerWidth(): void;
    saveSortingToSession(): void;
    onMouseDown(event: any): void;
    removeTable(): void;
    private getTopItems;
    private toggleItems;
    private updateScrollItems;
    private setSelectionItems;
    getUniqItemId(itemId: string, itemType?: string): string;
    isItemSelected(itemId: string, itemType?: string): boolean;
    setLayout(): void;
    private calcColumnsWidth;
    private initResizeData;
    onListResizeStart(event: any, apiName: any): void;
    onListResize(event: any): void;
    onListResizeEnd(event: any): void;
    onListSortingChange(sortBy: string, isAsc: boolean, event?: any): void;
    onListHeaderMouseEnter(event: any): void;
    onListHeaderMouseLeave(event: any): void;
    onListChange(event: ChangeEvent): void;
    onListLoad(event: any): void;
    getParentContainer(): Element | Window;
    onValueChanged(valueChanged: any): void;
    onCustomizeFieldClick(customizeFieldClickedData: PepperiFieldClickedData): void;
    onCustomizeFieldMenuClicked(customizeFieldClickedData: PepperiFieldClickedData): void;
    getIsDisabled(pepperiObjectInput: ObjectSingleData): boolean;
    getIsAllSelectedForActions(): boolean;
    setIsAllSelected(isChecked: boolean): void;
    selectAllItemsForActions(e: any): void;
    getIsSelectedForActions(itemId: string, isSelectableForActions: boolean, itemType?: string): boolean;
    selectItemForActions(e: any, itemId: string, isSelectableForActions: boolean, itemType?: string): void;
    itemClicked(e: any, objectSingleData: ObjectSingleData): void;
    setItemClicked(itemId: any, isSelectableForActions: boolean, itemType: string, isChecked: boolean): void;
    onTableRowMouseEnter(event: any, itemId: string, itemType: string): void;
    onTableRowMouseLeave(event: any, itemId: string, itemType: string): void;
    onCardMouseEnter(event: any, itemId: string, itemType: string): void;
    onCardMouseLeave(event: any, itemId: string, itemType: string): void;
    getThumbnailsLayout(): LAYOUT_TYPE;
    winResize(e: any): void;
    trackByFunc(index: number, item: ObjectSingleData): any;
    cleanItems(): void;
    getUIControl(): UIControl;
    initListData(uiControl: UIControl, totalRows: number, items: ObjectSingleData[], viewType?: VIEW_TYPE, itemClass?: string, showSelection?: boolean): void;
    getIsAllSelected(items: Array<ObjectSingleData>): boolean;
    getNumberOfStartItems(): number;
    setSelectedIds(selectedIds: string[], items?: any): void;
    setSelectionDataInSession(): void;
    updateListItems(items: ObjectSingleData[], event: ChangeEvent): void;
    updateListItem(data: any): void;
    focusOnAnItem(itemIndex: any): void;
    getSelectedItemsData(isForEdit?: boolean): SelectionData;
    initCollectionFromState(collectionType: any, collection: string[]): void;
    getIsItemEditable(uid: string): boolean;
    getItemDataByID(uid: string): ObjectsDataRow;
    static ɵfac: i0.ɵɵFactoryDef<PepperiListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PepperiListComponent, "pep-list", never, { "currentListTypeTranslation": "currentListTypeTranslation"; "noDataFoundMsg": "noDataFoundMsg"; "selectionTypeForActions": "selectionTypeForActions"; "hideAllSelectionInMulti": "hideAllSelectionInMulti"; "top": "top"; "listType": "listType"; "objectId": "objectId"; "parentId": "parentId"; "searchCode": "searchCode"; "firstFieldAsLink": "firstFieldAsLink"; "supportSorting": "supportSorting"; "supportResizing": "supportResizing"; "parentScroll": "parentScroll"; "disabled": "disabled"; "isPrinting": "isPrinting"; "disableSelectionItems": "disableSelectionItems"; "isReport": "isReport"; "layoutType": "layoutType"; "pageType": "pageType"; "totalsRow": "totalsRow"; "isTouchDevice": "isTouchDevice"; }, { "notifyThumbnailClicked": "notifyThumbnailClicked"; "notifyFieldClicked": "notifyFieldClicked"; "notifyMenuItemClicked": "notifyMenuItemClicked"; "notifyValueChanged": "notifyValueChanged"; "notifyListChanged": "notifyListChanged"; "notifySortingChanged": "notifySortingChanged"; "notifySelectedItemsChanged": "notifySelectedItemsChanged"; "notifySelectAllSingleActionClicked": "notifySelectAllSingleActionClicked"; "notifySingleActionClicked": "notifySingleActionClicked"; "notifyListLoad": "notifyListLoad"; }, never, never>;
}
