import {
    Component, Input, Output, EventEmitter, OnInit, Renderer2, ViewChild, ElementRef,
    ChangeDetectorRef, OnDestroy, OnChanges
} from '@angular/core';
import { delay } from 'rxjs/operators';
import {
    LAYOUT_TYPE, LayoutService, ObjectSingleData, UIControl, UIControlField,
    FIELD_TYPE, ObjectsDataRow, SCREEN_SIZE, PepperiObjectChangedData, PepperiFieldClickedData
} from '@pepperi-addons/ngx-lib';
import { VirtualScrollComponent, ChangeEvent } from './virtual-scroll.component';

import disableScroll from 'disable-scroll';

// import { ApplicationState } from '../application-state/application-state';

import * as $ from 'jquery';

export enum SELECTION_TYPE_FOR_ACTIONS {
    None,
    Single,
    Multi,
    SingleAction
}
export enum VIEW_TYPE {
    None,
    Card,
    Line,
    Table,
    Map
}

export interface ChangeSortingEvent {
    sortBy: string;
    isAsc: boolean;
}

export class SelectionData {
    selectionType: number;
    rows: Array<any>;
    rowTypes: Array<any>;
}

@Component({
    selector: 'pep-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    host: {
        // '[style.width]': "'inherit'",
        '(document:mousedown)': 'onMouseDown($event)',
        '(window:resize)': 'winResize($event)'
        // '(window:mouseup)': 'onListResizeEnd($event)',
        // '(window:mousemove)': 'onListResize($event)'
    }
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepperiListComponent implements OnInit, OnChanges, OnDestroy {
    static TOP_ITEMS_DEFAULT = 100;
    static TOP_ITEMS_TABLE = 100;
    static TOP_ITEMS_THUMBNAILS = 100;
    static TOP_ITEMS_ARRAY = 2500;

    static SELECTED_ITEMS_STATE_KEY = 'SelectedItems';
    static UN_SELECTED_ITEMS_STATE_KEY = 'UnSelectedItems';
    static ALL_SELECTED_STATE_KEY = 'AllSelected';
    static SORT_BY_STATE_KEY = 'SortBy';
    static ASCENDING_STATE_KEY = 'IsAscending';

    static MINIMUM_COLUMN_WIDTH = 48;

    @Input() currentListTypeTranslation = '';
    @Input() noDataFoundMsg = 'Items not found';
    @Input() selectionTypeForActions: SELECTION_TYPE_FOR_ACTIONS = SELECTION_TYPE_FOR_ACTIONS.Multi;
    @Input() hideAllSelectionInMulti = false;

    @Input() top = -1;
    @Input() listType = '';
    @Input() objectId = '0';
    @Input() parentId = '0';
    @Input() searchCode = '0';
    // @Input() showTopBorder = false;
    @Input() firstFieldAsLink = false;
    @Input() supportSorting = true;
    @Input() supportResizing = true;
    @Input() parentScroll: Element | Window = null;
    @Input() disabled = false;
    @Input() isPrinting = false;
    @Input() disableSelectionItems = false;
    @Input() isReport = false;
    @Input() layoutType: LAYOUT_TYPE = null;
    @Input() pageType = '';
    @Input() totalsRow = [];
    @Input() isTouchDevice = false;

    @Output() notifyThumbnailClicked: EventEmitter<ObjectSingleData> = new EventEmitter<ObjectSingleData>();
    @Output() notifyFieldClicked: EventEmitter<any> = new EventEmitter<PepperiFieldClickedData>();
    @Output() notifyMenuItemClicked: EventEmitter<any> = new EventEmitter<PepperiFieldClickedData>();
    @Output() notifyValueChanged: EventEmitter<PepperiObjectChangedData> = new EventEmitter<PepperiObjectChangedData>();
    @Output() notifyListChanged: EventEmitter<ChangeEvent> = new EventEmitter<ChangeEvent>();
    @Output() notifySortingChanged: EventEmitter<ChangeSortingEvent> = new EventEmitter<ChangeSortingEvent>();

    @Output() notifySelectedItemsChanged: EventEmitter<number> = new EventEmitter<number>();
    @Output() notifySelectAllSingleActionClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() notifySingleActionClicked: EventEmitter<any> = new EventEmitter<any>();

    @Output() notifyListLoad: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild(VirtualScrollComponent) virtualScroll: VirtualScrollComponent;
    @ViewChild('noVirtualScrollCont') noVirtualScrollCont: ElementRef;
    @ViewChild('tableHeader') tableHeader: ElementRef;
    @ViewChild('selectAllCB') selectAllCB: any;

    LAYOUT_TYPE = LAYOUT_TYPE;
    SELECTION_TYPE_FOR_ACTIONS = SELECTION_TYPE_FOR_ACTIONS;

    public uiControl: UIControl = null;
    public totalRows = -1;
    itemClass: string;
    isTable = false;
    private hasColumnWidthOfTypePercentage = true;
    public items: Array<ObjectSingleData> = null;
    public showSelection = false;
    isCardView = false;
    private itemsCounter = 0;
    showItems = true;
    scrollItems: Array<ObjectSingleData>;

    public SEPARATOR = ',';
    public isAllSelected = false;
    public selectedItems = new Map<string, string>();
    public unSelectedItems = new Map<string, string>();

    // public tableHeaderWidth: string;
    nativeWindow: any = null;

    selectedItemId = '';
    hoveredItemId = '';

    private lockEvents = false;
    private containerWidth = 0;

    screenSize: SCREEN_SIZE;

    // headerIsInFocus = false;

    // For resize
    pressedColumn = '';
    startX = 0;
    startWidth = 0;
    tableStartWidth = 0;

    // For sorting
    isAsc = true;
    sortBy = '';
    isUserSelected = false;
    checkForChanges: any = null;
    useVirtualScroll = true;
    calculatedObjectHeight: string;

    constructor(
        private element: ElementRef,
        private layoutService: LayoutService,
        private cd: ChangeDetectorRef,
        private renderer: Renderer2,
        // private state: ApplicationState
    ) {
        this.layoutService.onResize$
            .pipe(delay(0))
            .subscribe(size => {
                this.screenSize = size;
            });

        // this.checkForChanges = new Date().getTime();
        // this.state.stateKey = location.href;
        this.nativeWindow = window;
    }

    ngOnInit(): void {
        this.containerWidth = 0;
    }

    ngOnChanges(changes): void {
        if (this.containerWidth <= 0) {
            this.setContainerWidth();
        }
    }

    ngOnDestroy(): void {
        if (this.notifyValueChanged) {
            this.notifyValueChanged.unsubscribe();
        }

        if (this.notifyListChanged) {
            this.notifyListChanged.unsubscribe();
        }

        if (this.notifySortingChanged) {
            this.notifySortingChanged.unsubscribe();
        }

        if (this.notifyFieldClicked) {
            this.notifyFieldClicked.unsubscribe();
        }

        if (this.notifyMenuItemClicked) {
            this.notifyMenuItemClicked.unsubscribe();
        }

        if (this.notifyThumbnailClicked) {
            this.notifyThumbnailClicked.unsubscribe();
        }

        this.saveSortingToSession();
    }

    setContainerWidth(): void {
        const selectionCheckBoxWidth = this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi ? 44 : 0;

        const rowHeight = 40; // the table row height (2.5rem * 16font-size).
        const style = window.getComputedStyle(this.element.nativeElement.parentElement);
        // The container-fluid class padding left + right + border
        const containerFluidSpacing = parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);

        const parentContainer = this.element.nativeElement.parentElement.parentElement > 0 ?
            this.element.nativeElement.parentElement.parentElement : this.element.nativeElement.parentElement;

        // Calculate if vertical scroll should appear, if so set the scroll width. (this.totalRows + 1) + 1 is for the header row.
        const scrollWidth = parentContainer.clientHeight < rowHeight * (this.totalRows + 1) ? 18 : 0; // 18 is the default scroll width.

        // The selectionCheckBoxWidth width + containerFluidSpacing + scrollWidth.
        const rowHeaderWidthToSub = containerFluidSpacing + selectionCheckBoxWidth + scrollWidth;
        this.containerWidth = parentContainer.offsetWidth - rowHeaderWidthToSub;
    }

    saveSortingToSession(): void {
        // this.state.setItemInState(PepperiListComponent.SORT_BY_STATE_KEY, this.sortBy);
        // this.state.setItemInState(PepperiListComponent.ASCENDING_STATE_KEY, this.isAsc);
        // this.state.writeToSession();
    }

    onMouseDown(event): void {
        const self = this;

        // if (!this.element.nativeElement.contains(event.target) || event.target.className === 'scrollable-content') {
        //     setTimeout(() => {
        //         if (self.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi || self.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
        //         }

        //         // self.selectedItemId = '';
        //         //self.hoveredItemId = '';
        //     }, 500);
        // }
    }

    removeTable(): void {
        this.cleanItems();
        this.uiControl = null;
    }

    private getTopItems(): number {
        return this.isTable ? PepperiListComponent.TOP_ITEMS_TABLE : PepperiListComponent.TOP_ITEMS_THUMBNAILS;
    }

    private toggleItems(isVisible: boolean): void {
        this.showItems = isVisible;
        this.lockEvents = !isVisible;

        if (this.useVirtualScroll) {
            if (isVisible) {
                disableScroll.off();
            } else {
                disableScroll.on();
            }
        }
    }

    private updateScrollItems(startIndex, endIndex, loadInChunks = true): void {
        this.scrollItems = this.items.slice(startIndex, endIndex);
        // if (!loadInChunks) {
        //     this.scrollItems = this.items.slice(startIndex, endIndex).map((item) => item).filter((item) => item != null);
        // } else {
        //     // this.scrollItems = this.items.slice(startIndex, endIndex);

        //     const ITEMS_RENDERED_AT_ONCE = 15;//this.isTable ? 1 : 7;
        //     const INTERVAL_IN_MS = 10;

        //     let currentIndex = 0;
        //     const tmp = this.items.slice(startIndex, endIndex);
        //     // this.scrollItems = [];

        //     const interval = setInterval(() => {
        //         const nextIndex = currentIndex + ITEMS_RENDERED_AT_ONCE;

        //         for (let i = currentIndex; i < nextIndex; i++) {
        //             // if (currentIndex === 0) {
        //             //     this.scrollItems = [];
        //             // }

        //             if (i >= tmp.length) {
        //                 clearInterval(interval);
        //                 break;
        //             }

        //             if (this.scrollItems[i]) {
        //                 this.scrollItems[i] = tmp[i];
        //             } else {
        //                 this.scrollItems.push(tmp[i]);
        //             }
        //         }

        //         currentIndex += ITEMS_RENDERED_AT_ONCE;
        //     }, INTERVAL_IN_MS);
        // }
    }

    private setSelectionItems(itemId: string, uniqItemId: string, isChecked: boolean): void {
        // Set selected item checkbox
        if (this.isAllSelected) {
            if (isChecked) {
                this.unSelectedItems.delete(itemId);
                this.selectedItems.set(itemId, uniqItemId);
            } else {
                this.selectedItems.delete(itemId);
                this.unSelectedItems.set(itemId, uniqItemId);
            }
        } else {
            if (isChecked) {
                this.unSelectedItems.delete(itemId);
                this.selectedItems.set(itemId, uniqItemId);
            } else {
                this.selectedItems.delete(itemId);
                this.unSelectedItems.set(itemId, uniqItemId);
            }
        }
    }

    getUniqItemId(itemId: string, itemType: string = ''): string {
        return itemId + this.SEPARATOR + itemType;
    }

    isItemSelected(itemId: string, itemType: string = ''): boolean {
        let isSelected = false;
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction ||
            this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            isSelected = this.selectedItems.has(itemId) || this.isAllSelected && !this.unSelectedItems.has(itemId);
        } else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            const uniqItemId = this.getUniqItemId(itemId, itemType);
            isSelected = uniqItemId === this.selectedItemId;
        }

        return isSelected;
    }

    setLayout(): void {
        const self = this;
        if (this.totalRows === 0 ||
            !this.uiControl ||
            !this.uiControl.ControlFields ||
            this.uiControl.ControlFields.length === 0) {
            return;
        }

        this.uiControl.ControlFields.forEach((cf) => {
            if (cf.ColumnWidth === 0) {
                cf.ColumnWidth = 10;
            }

            if (self.isTable &&
                (cf.FieldType === FIELD_TYPE.Image ||
                    // cf.FieldType === FIELD_TYPE.Indicators || ???
                    cf.FieldType === FIELD_TYPE.Signature ||
                    cf.FieldType === FIELD_TYPE.NumberIntegerQuantitySelector ||
                    cf.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                    cf.FieldType === FIELD_TYPE.NumberIntegerForMatrix ||
                    cf.FieldType === FIELD_TYPE.NumberRealForMatrix ||
                    cf.FieldType === FIELD_TYPE.Package ||
                    cf.ApiName === 'UnitsQuantity' ||
                    cf.ApiName === 'QuantitySelector')
            ) {
                cf.Layout.XAlignment = 3;
            }
        });

        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }

        // Set the columns width.
        if (this.containerWidth <= 0) {
            this.setContainerWidth();
        }

        this.calcColumnsWidth();
        this.checkForChanges = new Date().getTime();
    }

    private calcColumnsWidth(): void {
        const fixedMultiple = 3.78; // for converting em to pixel.
        const length = this.uiControl.ControlFields.length;
        const selectionCheckBoxWidth = this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi ? 44 : 0;

        // Is table AND there is at least one column of width type of percentage.
        if (this.isTable) {
            if (this.uiControl && this.uiControl.ControlFields) {
                this.hasColumnWidthOfTypePercentage = this.uiControl.ControlFields.filter(cf => cf.ColumnWidthType === 1).length === 0;
            }
        }

        // If the columns size is fixed and the total is small then the container change it to percentage.
        if (!this.hasColumnWidthOfTypePercentage) {
            const totalFixedColsWidth = this.uiControl.ControlFields
                .map(cf => cf.ColumnWidth * fixedMultiple)
                .reduce((sum, current) => sum + current);

            if (window.innerWidth > totalFixedColsWidth) {
                this.hasColumnWidthOfTypePercentage = true;
            }
        }

        let totalCalcColsWidth = 0;

        // Calc by percentage
        if (this.hasColumnWidthOfTypePercentage) {
            const totalColsWidth: number = this.uiControl.ControlFields.map(cf => cf.ColumnWidth).reduce((sum, current) => sum + current);

            for (let index = 0; index < length; index++) {
                const uiControlField: UIControlField = this.uiControl.ControlFields[index];
                const calcColumnWidthPercentage = (100 / totalColsWidth) * uiControlField.ColumnWidth;

                uiControlField.calcColumnWidth = Math.floor((this.containerWidth * calcColumnWidthPercentage) / 100);

                if (index === length - 1) {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                        'calc(100% - ' + totalCalcColsWidth + 'px)'; // For 100%
                } else {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                        uiControlField.calcColumnWidth + 'px';
                    totalCalcColsWidth += uiControlField.calcColumnWidth;
                }
            }

            this.renderer.setStyle(this.element.nativeElement, 'width', 'inherit');
        } else {
            for (let index = 0; index < length; index++) {
                const uiControlField: UIControlField = this.uiControl.ControlFields[index];
                const currentFixedWidth = Math.floor(uiControlField.ColumnWidth * fixedMultiple);

                if (index === length - 1) {
                    uiControlField.calcTitleColumnWidthString = currentFixedWidth + 'px';
                    uiControlField.calcColumnWidthString = currentFixedWidth - 4 + 'px'; // -4 for the row padding.
                } else {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                        currentFixedWidth + 'px';
                }

                totalCalcColsWidth += currentFixedWidth;
            }

            this.renderer.setStyle(this.element.nativeElement, 'width', totalCalcColsWidth + selectionCheckBoxWidth + 'px');
        }
    }

    private initResizeData(): void {
        this.startX = 0;
        this.startWidth = 0;
        this.tableStartWidth = 0;
        this.pressedColumn = '';
    }

    onListResizeStart(event, apiName): void {
        this.pressedColumn = apiName;
        this.startX = event.x;
        this.startWidth = event.target.closest('.header-column').offsetWidth;
        if (this.useVirtualScroll) {
            this.tableStartWidth = this.virtualScroll.contentElementRef.nativeElement.offsetWidth;
        } else {
            // Set the tableStartWidth to the container offsetWidth
            this.tableStartWidth = this.noVirtualScrollCont.nativeElement.offsetWidth;
        }
    }

    onListResize(event): void {
        if (this.pressedColumn.length > 0) {
            const widthToAdd = this.layoutService.isRtl() ? this.startX - event.x : event.x - this.startX;

            // Set the width of the column and the container of the whole columns.
            if (this.startWidth + widthToAdd >= PepperiListComponent.MINIMUM_COLUMN_WIDTH || widthToAdd > 0) {
                const length = this.uiControl.ControlFields.length;
                let totalCalcColsWidth = 0;

                for (let index = 0; index < length; index++) {
                    const uiControlField: UIControlField = this.uiControl.ControlFields[index];

                    if (index === length - 1) {
                        // Calc the last column only in percentage type.
                        if (this.hasColumnWidthOfTypePercentage) {
                            uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                                'calc(100% - ' + totalCalcColsWidth + 'px)'; // For 100%
                        } else {
                            if (uiControlField.ApiName === this.pressedColumn) {
                                uiControlField.calcColumnWidth = this.startWidth + widthToAdd;
                                uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidth + 'px';
                                uiControlField.calcColumnWidthString = uiControlField.calcColumnWidth - 4 + 'px';
                            }
                        }
                    } else if (uiControlField.ApiName === this.pressedColumn) {
                        uiControlField.calcColumnWidth = this.startWidth + widthToAdd;
                        uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                            uiControlField.calcColumnWidth + 'px';
                    }

                    totalCalcColsWidth += uiControlField.calcColumnWidth;
                }

                this.renderer.setStyle(this.element.nativeElement, 'width', this.tableStartWidth + widthToAdd + 'px');
            }

            this.checkForChanges = new Date().getTime();
        }
    }

    onListResizeEnd(event): void {
        if (this.pressedColumn.length > 0) {
            if (event && $(event.srcElement).parents('.resizeBox').length > 0) {
                this.initResizeData();
            } else {
                // Set timeout 0 for onListSortingChange will have the pressedColumn.
                const self = this;
                setTimeout(() => {
                    self.initResizeData();
                }, 0);
            }
        }
    }

    onListSortingChange(sortBy: string, isAsc: boolean, event = null): void {
        if (this.isPrinting) {
            return;
        }

        if (this.pressedColumn.length > 0 || (event && $(event.srcElement).parents('.resizeBox').length > 0)) {
            return;
        }

        if (this.sortBy !== sortBy || this.isAsc !== isAsc) {
            this.sortBy = sortBy;
            this.isAsc = isAsc;
            this.saveSortingToSession();

            this.notifySortingChanged.emit({ sortBy, isAsc });
        }
    }

    onListHeaderMouseEnter(event): void {
        // this.headerIsInFocus = true;
    }

    onListHeaderMouseLeave(event): void {
        // this.headerIsInFocus = false;
        this.onListResizeEnd(event);
        this.initResizeData();
    }

    onListChange(event: ChangeEvent): void {
        if (this.isPrinting) {
            return;
        }

        // For other events do nothing.
        if (typeof event.start === 'undefined' || typeof event.end === 'undefined') {
            return;
        }

        this.calculatedObjectHeight = event.calculatedChildHeight + 'px';

        if (!this.lockEvents) {
            this.toggleItems(false);
            this.updateScrollItems(event.start, event.end, false);

            let getItemsFromApi = false;
            let index: number = event.start;

            while (!getItemsFromApi && index < event.end) {
                if (!this.items[index]) {
                    getItemsFromApi = true;
                }
                index++;
            }

            // Get bulk from api.
            if (getItemsFromApi) {
                const top = this.getTopItems() - 1;

                if (event.addAtStart) {
                    event.fromIndex = Math.max(event.start - (top - (event.end - event.start)), 0);
                    event.toIndex = event.end;
                } else {
                    event.fromIndex = event.start;
                    event.toIndex = Math.min(event.end + (top - (event.end - event.start)), this.totalRows);
                }

                this.notifyListChanged.emit(event);
                // this.lockEvents = true;
            } else {
                // this.scrollItems = this.items.slice(event.start, event.end);
                this.toggleItems(true);
            }
        }
    }

    // onScrollerListChange(event: any) {
    //     if (this.isPrinting) {
    //         return;
    //     }

    //     // For other events do nothing.
    //     if (typeof event.startIndex === 'undefined' || typeof event.endIndex === 'undefined') {
    //         return;
    //     }

    //     if (!this.lockEvents) {
    //         this.toggleItems(false);
    //         this.updateScrollItems(event.startIndex, event.endIndex);

    //         let getItemsFromApi = false;
    //         let index: number = event.startIndex;

    //         while (!getItemsFromApi && index < event.endIndex) {
    //             if (!this.items[index]) {
    //                 getItemsFromApi = true;
    //             }
    //             index++;
    //         }

    //         // Get bulk from api.
    //         if (getItemsFromApi) {
    //             const top = this.getTopItems() - 1;

    //             // if (event.addAtStart) {
    //             //     event.fromIndex = Math.max(event.start - (top - (event.end - event.start)), 0);
    //             //     event.toIndex = event.end;
    //             // } else {
    //             event.fromIndex = event.startIndex;
    //             event.toIndex = Math.min(event.endIndex + (top - (event.endIndex - event.startIndex)), this.totalRows);
    //             // }

    //             this.notifyListChanged.emit(event);
    //             // this.lockEvents = true;
    //         } else {
    //             // this.scrollItems = this.items.slice(event.start, event.end);
    //             this.toggleItems(true);
    //         }
    //     }
    // }

    onListLoad(event: any): void {
        this.notifyListLoad.emit(event);
    }

    getParentContainer(): Element | Window {
        return this.parentScroll ? this.parentScroll : window;
    }

    onValueChanged(valueChanged: any): void {
        if (this.disabled) {
            return;
        }

        this.notifyValueChanged.emit(valueChanged);
    }

    onCustomizeFieldClick(customizeFieldClickedData: PepperiFieldClickedData): void {
        if (this.disabled) {
            return;
        }

        this.notifyFieldClicked.emit(customizeFieldClickedData);
    }

    onCustomizeFieldMenuClicked(customizeFieldClickedData: PepperiFieldClickedData): void {
        if (this.disabled) {
            return;
        }

        this.notifyMenuItemClicked.emit(customizeFieldClickedData);
    }

    getIsDisabled(pepperiObjectInput: ObjectSingleData): boolean {
        if (this.disableSelectionItems) {
            return true;
        } else {
            const IsNotSelectableForActions = pepperiObjectInput?.Data && !pepperiObjectInput.Data.IsSelectableForActions;
            return IsNotSelectableForActions;
        }
    }

    public getIsAllSelectedForActions(): boolean {
        let res = false;

        if (this.isAllSelected) {
            if (this.unSelectedItems.size === 0) {
                res = true;
            }
        } else {
            if (this.selectedItems.size === this.totalRows) {
                res = this.getIsAllSelected(this.scrollItems);
            } else if (this.selectedItems.size < this.totalRows) {
                // for (let index = 0; index < this.scrollItems.length; index++) {
                //     const pepperiObjectInput = this.scrollItems[index];
                for (const pepperiObjectInput of this.scrollItems) {
                    res = pepperiObjectInput && pepperiObjectInput.Data &&
                        this.selectedItems.has(pepperiObjectInput.Data.UID.toString());

                    if (!res) {
                        break;
                    }
                }
            }
        }

        return res;
    }

    public setIsAllSelected(isChecked: boolean): void {
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi ||
            this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
            this.selectAllCB.checked = isChecked;
            this.isAllSelected = isChecked;
        }
    }

    selectAllItemsForActions(e: any): void {
        // For material checkbox || radio.
        const isChecked = e.source.checked;

        // Indeterminate mode
        let isIndeterminate = false;
        const currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
        if (currentList.size > 0) {
            isIndeterminate = true;
            this.isAllSelected = false;
            this.notifySelectedItemsChanged.emit(0);
            e.source.checked = false;
        }

        this.selectedItems.clear();
        this.unSelectedItems.clear();

        if (!isIndeterminate) {
            this.isAllSelected = isChecked;
            if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
                // Add all or remove all
                this.notifySelectAllSingleActionClicked.emit(isChecked);
            } else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
                if (!isChecked) {
                    this.notifySelectedItemsChanged.emit(0);
                    this.selectedItemId = '';
                } else {
                    const filteredItems = this.items.filter(item => item.Data && item.Data.IsSelectableForActions);
                    this.notifySelectedItemsChanged.emit(filteredItems.length);
                }
            }
        } else {
            if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
                // Remove all
                this.notifySelectAllSingleActionClicked.emit(false);
            }
        }
    }

    getIsSelectedForActions(itemId: string, isSelectableForActions: boolean, itemType: string = ''): boolean {
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            return this.selectedItemId === this.getUniqItemId(itemId, itemType);
        } else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
            let res = this.isAllSelected || this.selectedItems.has(itemId);

            if (this.unSelectedItems.has(itemId)) {
                res = false;
            }

            return res;
        } else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            if (!isSelectableForActions) {
                return false;
            } else {
                let res = this.isAllSelected || this.selectedItems.has(itemId);

                if (this.unSelectedItems.has(itemId)) {
                    res = false;
                }

                return res;
            }
        }
    }

    selectItemForActions(e: any, itemId: string, isSelectableForActions: boolean, itemType: string = ''): void {
        // For material checkbox || radio.
        const isChecked = e.source.checked;
        this.setItemClicked(itemId, isSelectableForActions, itemType, isChecked);
    }

    itemClicked(e: any, objectSingleData: ObjectSingleData): void {
        // Set seleted item
        const itemId = objectSingleData.Data.UID.toString();
        const itemType = objectSingleData.Data.Type.toString();
        let isChecked = false;

        if (objectSingleData && objectSingleData.Data && objectSingleData.Data.IsSelectableForActions) {
            this.selectedItemId = this.getUniqItemId(itemId, itemType);
            isChecked = true;
        }

        if (this.isTable) {
            if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
                this.setItemClicked(itemId, objectSingleData.Data.IsSelectableForActions, itemType, isChecked);
            } else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.None) {
                // Just mark the row as highlighted
                this.setItemClicked(itemId, objectSingleData.Data.IsSelectableForActions, itemType, true);
            }
        } else {
            if (this.disabled) {
                return;
            }

            this.notifyThumbnailClicked.emit(objectSingleData);
        }
    }

    setItemClicked(itemId, isSelectableForActions: boolean, itemType: string, isChecked: boolean): void {
        const uniqItemId = this.getUniqItemId(itemId, itemType);

        // select the selected item.
        if (isChecked) {
            // Set seleted item
            this.selectedItemId = uniqItemId;
        } else {
            if (this.selectedItemId === uniqItemId) {
                this.selectedItemId = '';
            }
        }

        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            this.notifySelectedItemsChanged.emit(this.selectedItemId.length === 0 ? 0 : 1);
        } else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
            this.setSelectionItems(itemId, uniqItemId, isChecked);
            this.notifySingleActionClicked.emit({ id: itemId, selected: isChecked });
        } else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            if (isSelectableForActions) {
                this.setSelectionItems(itemId, uniqItemId, isChecked);

                const currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
                const currentListCount = this.isAllSelected ? this.totalRows - currentList.size : currentList.size;
                this.notifySelectedItemsChanged.emit(currentListCount);
            }
        }
    }

    onTableRowMouseEnter(event: any, itemId: string, itemType: string): void {
        if (this.isTouchDevice) {
            return;
        }

        const uniqItemId = this.getUniqItemId(itemId, itemType);
        this.hoveredItemId = uniqItemId;
    }

    onTableRowMouseLeave(event: any, itemId: string, itemType: string): void {
        this.hoveredItemId = '';
    }

    onCardMouseEnter(event: any, itemId: string, itemType: string): void {
        if (this.isTouchDevice) {
            return;
        }

        const uniqItemId = this.getUniqItemId(itemId, itemType);
        this.hoveredItemId = uniqItemId;
    }

    onCardMouseLeave(event: any, itemId: string, itemType: string): void {
        this.hoveredItemId = '';
    }

    getThumbnailsLayout(): LAYOUT_TYPE {
        return this.layoutType == null ? LAYOUT_TYPE.PepperiCard : this.layoutType;
    }

    // call this function after resize + animation end
    winResize(e): void {
        if (typeof this.virtualScroll !== 'undefined') {
            this.virtualScroll.refresh();
        }

        this.containerWidth = 0;
        this.setLayout();
    }

    trackByFunc(index: number, item: ObjectSingleData): any {
        return item && item.Data && item.Data.UID ? item.Data.UID : index;
        // let res: string = "";

        // if (item && item.Data && item.Data.UID) {
        //    res = item.Data.UID + "_" + this.listType + "_" + (this.isTable ? "Table" : "Thumbnails");
        // }
        // else {
        //    res = index + "_" + this.listType + "_" + (this.isTable ? "Table" : "Thumbnails");
        // }

        // return res;
    }

    cleanItems(): void {
        this.itemsCounter = 0;
        this.items = this.totalRows > 0 ? Array<ObjectSingleData>(this.totalRows) : [];
        this.scrollItems = [];
        this.calculatedObjectHeight = '';
    }

    getUIControl(): UIControl {
        return this.uiControl;
    }

    initListData(uiControl: UIControl, totalRows: number, items: ObjectSingleData[], viewType: VIEW_TYPE = VIEW_TYPE.Table,
        itemClass: string = '', showSelection: boolean = false): void {
        // const selectedItemsFromState: Map<string, string> =
        //     this.state.getItemFromState(PepperiListComponent.SELECTED_ITEMS_STATE_KEY);
        // if (selectedItemsFromState != null && typeof selectedItemsFromState.size !== 'undefined' &&
        //     selectedItemsFromState.size > 0) {
        //     this.selectedItems = selectedItemsFromState;
        //     this.state.setItemInState(PepperiListComponent.SELECTED_ITEMS_STATE_KEY, new Map<string, string>());
        // } else {
        this.selectedItems.clear();
        // }

        // const unSelectedItemsFromState: Map<string, string> =
        //     this.state.getItemFromState(PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY);
        // if (unSelectedItemsFromState != null && typeof unSelectedItemsFromState.size !== 'undefined' &&
        //     unSelectedItemsFromState.size > 0) {
        //     this.unSelectedItems = unSelectedItemsFromState;
        //     this.state.setItemInState(PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY, new Map<string, string>());
        // } else {
        this.unSelectedItems.clear();
        // }

        // if (this.state.getItemFromState(PepperiListComponent.ALL_SELECTED_STATE_KEY) != null) {
        //     let isAllSelectedFromState = this.state.getItemFromState(PepperiListComponent.ALL_SELECTED_STATE_KEY);
        //     this.isAllSelected = isAllSelectedFromState && this.getIsAllSelected(items);
        //     this.state.setItemInState(PepperiListComponent.ALL_SELECTED_STATE_KEY, false);
        // } else {
        this.isAllSelected = false;
        // }

        // if (this.state.getItemFromState(PepperiListComponent.SORT_BY_STATE_KEY) !== '') {
        //     this.sortBy = this.state.getItemFromState(PepperiListComponent.SORT_BY_STATE_KEY);
        //     this.state.setItemInState(PepperiListComponent.SORT_BY_STATE_KEY, '');
        // }

        // if (this.state.getItemFromState(PepperiListComponent.ASCENDING_STATE_KEY) != null) {
        //     this.isAsc = this.state.getItemFromState(PepperiListComponent.ASCENDING_STATE_KEY);
        //     this.state.setItemInState(PepperiListComponent.ASCENDING_STATE_KEY, false);
        // }

        const currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
        const currentListCount = this.isAllSelected ? this.totalRows - currentList.size : currentList.size;
        this.notifySelectedItemsChanged.emit(currentListCount);

        this.isCardView = viewType === VIEW_TYPE.Card;
        this.showSelection = showSelection;
        this.uiControl = uiControl;
        this.itemClass = itemClass;
        this.selectedItemId = '';
        this.isTable = viewType === VIEW_TYPE.Table;
        this.totalRows = totalRows;

        // fix bug for the scrollTo that doesn't work on edge div , not window
        const scrollingElement = this.getParentContainer();
        if (scrollingElement === window) {
            scrollingElement.scrollTo(0, 0);
        } else {
            this.focusOnAnItem(0);
        }

        this.cleanItems();

        if (this.totalRows === items.length) {
            this.useVirtualScroll = false;
            this.updateListItems(items, null);
            this.onListLoad(null);
        } else {
            this.useVirtualScroll = true;
            const numberOfStartItems = this.getNumberOfStartItems();
            this.updateListItems(items, { start: 0, end: numberOfStartItems, fromIndex: 0, toIndex: numberOfStartItems, addAtStart: true });

            if (typeof this.virtualScroll !== 'undefined') {
                this.virtualScroll.refresh();
            }
        }

        this.setLayout();
    }

    getIsAllSelected(items: Array<ObjectSingleData>): boolean {
        let result = true;

        if (this.selectedItems.size > 0 && items.length > 0) {
            // for (let index = 0; index < items.length; index++) {
            // const pepperiObjectInput = items[index];
            for (const pepperiObjectInput of items) {
                if (!(pepperiObjectInput && pepperiObjectInput.Data && this.selectedItems.has(pepperiObjectInput.Data.UID.toString()))) {
                    result = false;
                    break;
                }
            }
        } else {
            result = false;
        }

        return result;
    }

    getNumberOfStartItems(): number {
        let numberOfStartItems = 20;

        if ((this.screenSize === SCREEN_SIZE.XL) ||
            (this.screenSize === SCREEN_SIZE.LG)) {
            numberOfStartItems = this.isTable ? 50 : 40;
        } else if (this.screenSize === SCREEN_SIZE.MD) {
            numberOfStartItems = this.isTable ? 30 : 20;
        } else if (this.screenSize === SCREEN_SIZE.SM) {
            numberOfStartItems = this.isTable ? 20 : 10;
        } else if (this.screenSize === SCREEN_SIZE.XS) {
            numberOfStartItems = this.isTable ? 15 : 5;
        }

        return numberOfStartItems;
    }

    setSelectedIds(selectedIds: string[], items = null): void {
        this.selectedItems.clear();
        this.isAllSelected = false;

        if (selectedIds) {
            // for (let i = 0; i < selected.length; i++) {
            for (const selectedId of selectedIds) {
                const tmp = selectedId.split(this.SEPARATOR);

                if (tmp && tmp.length > 0) {
                    const itemId = tmp[0];
                    const itemType = tmp.length > 1 ? tmp[1] : '';

                    this.selectedItems.set(itemId, this.getUniqItemId(itemId, itemType));
                }
            }

            this.isAllSelected = this.getIsAllSelected(items ? items : this.scrollItems); // this.selectedItems.Count() === this.totalRows;
            this.setSelectionDataInSession();
        }

        if (typeof this.virtualScroll !== 'undefined') {
            this.virtualScroll.refresh();
        }
    }

    setSelectionDataInSession(): void {
        // this.state.setItemInState(PepperiListComponent.SELECTED_ITEMS_STATE_KEY, this.selectedItems);
        // this.state.setItemInState(PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY, this.unSelectedItems);
        // this.state.setItemInState(PepperiListComponent.ALL_SELECTED_STATE_KEY, this.isAllSelected);
    }

    updateListItems(items: ObjectSingleData[], event: ChangeEvent): void {
        if (this.useVirtualScroll) {
            // Clean array
            if (this.itemsCounter + items.length > PepperiListComponent.TOP_ITEMS_ARRAY) {
                this.cleanItems();
            }

            const startIndex = event.fromIndex ? event.fromIndex : event.start;

            for (let i = 0; i < items.length; i++) {
                if (!this.items[i + startIndex]) {
                    this.items[i + startIndex] = items[i];
                    this.itemsCounter += 1;
                }
            }

            this.updateScrollItems(event.start, event.end);
            this.toggleItems(true);
            // this.lockEvents = false;
        } else {
            this.scrollItems = this.items = items;
            this.itemsCounter = items.length;
        }
    }

    updateListItem(data: any): void {
        let index = 0;

        // Update items list
        index = this.items.findIndex(i => i && i.Data && i.Data.UID === data.UID);
        if (index >= 0 && index < this.items.length) {
            this.items[index].Data = data;
        }
        // Update scrollItems list
        index = this.scrollItems.findIndex(i => i && i.Data && i.Data.UID === data.UID);
        if (index >= 0 && index < this.scrollItems.length) {
            this.scrollItems[index].Data = data;
            this.checkForChanges = new Date().getTime();
        }
    }

    focusOnAnItem(itemIndex): void {
        if (typeof this.virtualScroll !== 'undefined') {
            this.virtualScroll.scrollInto(itemIndex);
        }
    }

    getSelectedItemsData(isForEdit: boolean = false): SelectionData {
        const res: SelectionData = new SelectionData();

        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            const tmp = this.selectedItemId.split(this.SEPARATOR);

            res.selectionType = 1;
            res.rows = [tmp[0]];
            res.rowTypes = [tmp[1]];
        } else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            const items = [];
            const itemTypes = [];
            let selectionType = 1;
            let currentList = [];

            // For edit - only the selected items.
            if (isForEdit) {
                if (!this.isAllSelected) {
                    currentList = Array.from(this.selectedItems.values());
                } else {
                    // Get the id's of the items that not founded in unSelectedItems.
                    this.items.forEach(item => {
                        if (item && !this.unSelectedItems.has(item.Data.UID.toString())) {
                            currentList.push(this.getUniqItemId(item.Data.UID.toString(), item.Data.Type.toString()));
                        }
                    });
                }
            } else {
                // For delete - can be the unselected with select_all functionality.
                currentList = Array.from(this.isAllSelected ? this.unSelectedItems.values() : this.selectedItems.values());
                selectionType = this.isAllSelected ? 0 : 1;
            }

            currentList.forEach(item => {
                const tmp = item.split(this.SEPARATOR);

                if (tmp.length === 2) {
                    items.push(tmp[0]);
                    itemTypes.push(tmp[1]);
                }
            });

            res.selectionType = selectionType;
            res.rows = items;
            res.rowTypes = itemTypes;
        }

        return res;
    }

    initCollectionFromState(collectionType, collection: string[]): void {
        if (collectionType === 'Selected') {
            collection.forEach(x => this.selectedItems.set(x, x));
        } else {
            collection.forEach(x => this.unSelectedItems.set(x, x));
        }
    }

    getIsItemEditable(uid: string): boolean {
        const item = this.items.filter(x => x.Data.UID.toString() === uid);
        if (item.length > 0) {
            return item[0].Data.IsEditable;
        } else {
            return false;
        }
    }

    getItemDataByID(uid: string): ObjectsDataRow {
        return this.items.find(item => item.Data.UID.toString() === uid)?.Data;

        // const item = this.items.filter(x => x.Data.UID.toString() === uid);
        // if (item.length > 0) {
        //     return item[0].Data;
        // } else {
        //     return null;
        // }
    }
}
