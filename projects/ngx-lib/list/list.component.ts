import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    Renderer2,
    ViewChild,
    ElementRef,
    ChangeDetectorRef,
    OnDestroy,
    OnChanges,
    NgZone,
} from '@angular/core';
import { delay } from 'rxjs/operators';
import {
    PepLayoutService,
    PepScreenSizeType,
    PepSessionService,
    UIControl,
    UIControlField,
    FIELD_TYPE,
    ObjectsDataRow,
} from '@pepperi-addons/ngx-lib';
import {
    IPepFormFieldValueChangeEvent,
    IPepFormFieldClickEvent,
} from '@pepperi-addons/ngx-lib/form';

import { VirtualScrollerComponent, IPageInfo } from './virtual-scroller';

import {
    IPepListLoadItemsEvent,
    IPepListSortingChangeEvent,
    IPepListItemClickEvent,
    PepListSelectionType,
    PepListViewType,
    PepSelectionData,
    PepListPagerType,
    IPepListLoadPageEvent,
    DEFAULT_PAGE_SIZE,
    IPepListStartIndexChangeEvent,
    PepListCardSizeType,
    PepListTableViewType,
} from './list.model';
import {
    IPepListPagerChangeEvent,
    PepListPagerComponent,
} from './list-pager.component';

import * as tween from '@tweenjs/tween.js';

@Component({
    selector: 'pep-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    host: {
        '(window:resize)': 'onWinResize($event)',
    },
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepListComponent implements OnInit, OnChanges, OnDestroy {
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

    @Input() noDataFoundMsg: string = null;
    @Input() selectionTypeForActions: PepListSelectionType = 'multi';
    @Input() showCardSelection = false;
    @Input() hideAllSelectionInMulti = false;

    @Input() cardSize: PepListCardSizeType = 'md';
    @Input() tableViewType: PepListTableViewType = 'regular';
    
    private _viewType: PepListViewType = '';
    @Input()
    set viewType(value: PepListViewType) {
        this._viewType = value;
        this.isTable = value === 'table';
    }
    get viewType(): PepListViewType {
        return this._viewType;
    }

    @Input() firstFieldAsLink = false;
    @Input() supportSorting = true;
    @Input() supportResizing = true;

    private _parentScroll: Element | Window = null;
    @Input()
    set parentScroll(value: Element | Window) {
        this._parentScroll = value;
    }
    get parentScroll(): Element | Window {
        return this._parentScroll;
    }

    @Input() disabled = false;

    private _lockEvents = false;
    @Input()
    set lockEvents(value: boolean) {
        this._lockEvents = value;

        if (this._lockEvents) {
            this.renderer.addClass(this.hostElement.nativeElement, 'lock-events');
        } else {
            this.renderer.removeClass(this.hostElement.nativeElement, 'lock-events');
        }
    }
    get lockEvents(): boolean {
        return this._lockEvents;
    }

    @Input() lockItemInnerEvents = false;
    @Input() printMode = false;
    @Input() isReport = false;
    @Input() zebraStripes = false;
    @Input() totalsRow = [];
    @Input() pagerType: PepListPagerType = 'scroll';
    @Input() pageSize: number = DEFAULT_PAGE_SIZE;
    @Input() pageIndex = 0;
    // @Input() startIndex = 0;

    @Input() scrollAnimationTime = 500;
    @Input() scrollDebounceTime = 0;
    @Input() scrollThrottlingTime = 0;

    private _useAsWebComponent = false;
    @Input()
    set useAsWebComponent(value: boolean) {
        this._useAsWebComponent = value;
        if (value) {
            this.exportFunctionsOnHostElement();
        }
    }
    get useAsWebComponent(): boolean {
        return this._useAsWebComponent;
    }

    @Output()
    itemClick: EventEmitter<IPepListItemClickEvent> = new EventEmitter<IPepListItemClickEvent>();

    @Output()
    fieldClick: EventEmitter<IPepFormFieldClickEvent> = new EventEmitter<IPepFormFieldClickEvent>();

    @Output()
    valueChange: EventEmitter<IPepFormFieldValueChangeEvent> = new EventEmitter<IPepFormFieldValueChangeEvent>();

    @Output()
    sortingChange: EventEmitter<IPepListSortingChangeEvent> = new EventEmitter<IPepListSortingChangeEvent>();

    @Output()
    selectedItemsChange: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    selectedItemChange: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    selectAllClick: EventEmitter<any> = new EventEmitter<any>();

    // @Output()
    // singleActionClick: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    listLoad: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    loadItems: EventEmitter<IPepListLoadItemsEvent> = new EventEmitter<IPepListLoadItemsEvent>();

    @Output()
    loadPage: EventEmitter<IPepListLoadPageEvent> = new EventEmitter<IPepListLoadPageEvent>();

    @Output()
    startIndexChange: EventEmitter<IPepListStartIndexChangeEvent> = new EventEmitter<IPepListStartIndexChangeEvent>();

    @ViewChild(VirtualScrollerComponent) private virtualScroller: VirtualScrollerComponent;
    @ViewChild('selectAllCB') selectAllCB: any;

    private _layout: UIControl = null;
    get layout(): UIControl {
        return this._layout;
    }

    totalRows = -1;
    isTable = false;
    private hasColumnWidthOfTypePercentage = true;

    private _items: Array<ObjectsDataRow> = null;
    get items(): Array<ObjectsDataRow> {
        return this._items;
    }

    private itemsCounter = 0;

    currentPageItems: Array<ObjectsDataRow>;

    SEPARATOR = ',';
    isAllSelected = false;
    selectedItems = new Map<string, string>();
    unSelectedItems = new Map<string, string>();

    private currentTween: any;

    selectedItemId = '';
    hoveredItemId = '';

    private containerWidth = 0;
    private tableScrollWidth = 0;

    private _loadingItemsFromApi = false;
    get loadingItemsFromApi() {
        return this._loadingItemsFromApi;
    }

    screenSize: PepScreenSizeType;
    deviceHasMouse = false;

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
    calculatedObjectHeight: string;

    constructor(
        private hostElement: ElementRef,
        private layoutService: PepLayoutService,
        private sessionService: PepSessionService,
        private cd: ChangeDetectorRef,
        private renderer: Renderer2,
        private zone: NgZone
    ) {
        // this.nativeWindow = window;
        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.screenSize = size;
        });

        this.layoutService.onMouseOver$.subscribe((deviceHasMouse: boolean) => {
            this.deviceHasMouse = deviceHasMouse;
        });
    }

    ngOnInit(): void {
        this.containerWidth = 0;
        this.deviceHasMouse = this.layoutService.getDeviceHasMouse();
    }

    ngOnChanges(changes): void {
        if (this.containerWidth <= 0) {
            this.setContainerWidth();
        }
    }

    ngOnDestroy(): void {
        // if (this.valueChange) {
        //     this.valueChange.unsubscribe();
        // }

        // if (this.loadItems) {
        //     this.loadItems.unsubscribe();
        // }

        // if (this.loadPage) {
        //     this.loadPage.unsubscribe();
        // }

        // if (this.sortingChange) {
        //     this.sortingChange.unsubscribe();
        // }

        // if (this.fieldClick) {
        //     this.fieldClick.unsubscribe();
        // }

        // if (this.itemClick) {
        //     this.itemClick.unsubscribe();
        // }

        // if (this.listLoad) {
        //     this.listLoad.unsubscribe();
        // }

        this.saveSortingToSession();
    }

    private getScrollingElement() {
        return this.parentScroll ? this.parentScroll : this.virtualScroller?.contentElementRef.nativeElement.parentElement;
    }

    private scrollToTop(animate = true) {
        const scrollingElement = this.getScrollingElement();
        if (scrollingElement) {
            const scrollTop = 0;

            // totally disable animate
            if (!animate || this.scrollAnimationTime === 0) {
                if (scrollingElement instanceof Window) {
                    window.scrollTo(0, scrollTop);
                } else {
                    scrollingElement.scrollTop = scrollTop;
                }
            } else {
                let animationRequest;
                const isWindow = scrollingElement instanceof Window;
                const currentScrollTop =
                    scrollingElement instanceof Window
                        ? window.pageYOffset
                        : scrollingElement.scrollTop;

                if (this.currentTween !== undefined) {
                    this.currentTween.stop();
                }
                this.currentTween = new tween.Tween({ scrollTop: currentScrollTop })
                    .to({ scrollTop }, this.scrollAnimationTime)
                    .easing(tween.Easing.Quadratic.Out)
                    .onUpdate((data) => {
                        if (isNaN(data.scrollTop)) {
                            return;
                        }

                        if (isWindow) {
                            window.scrollTo(0, data.scrollTop);
                        } else {
                            this.renderer.setProperty(
                                scrollingElement,
                                'scrollTop',
                                data.scrollTop
                            );
                        }
                    })
                    .onStop(() => {
                        cancelAnimationFrame(animationRequest);
                    })
                    .start();

                const animate = (time?) => {
                    this.currentTween.update(time);
                    if (this.currentTween._object.scrollTop !== scrollTop) {
                        this.zone.runOutsideAngular(() => {
                            animationRequest = requestAnimationFrame(animate);
                        });
                    }
                };

                animate();
            }
        }
    }

    private setContainerWidth(): void {
        if (!this.hostElement.nativeElement.parentElement) {
            return;
        }

        const selectionCheckBoxWidth =
            this.selectionTypeForActions === 'multi' ? 44 : 0;

        const rowHeight = 40; // the table row height (2.5rem * 16font-size).
        const style = getComputedStyle(
            this.hostElement.nativeElement.parentElement
        );
        // The container-fluid class padding left + right + border
        const containerFluidSpacing =
            parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);

        const parentContainer =
            this.hostElement.nativeElement.parentElement.parentElement > 0
                ? this.hostElement.nativeElement.parentElement.parentElement
                : this.hostElement.nativeElement.parentElement;

        // Calculate if vertical scroll should appear, if so set the scroll width. (this.totalRows + 1) + 1 is for the header row.
        this.tableScrollWidth = parentContainer.clientHeight < rowHeight * (this.totalRows + 1)
            ? this.layoutService.getScrollbarWidth()
            : 0;

        // The selectionCheckBoxWidth width + containerFluidSpacing + this.tableScrollWidth.
        const rowHeaderWidthToSub =
            containerFluidSpacing + selectionCheckBoxWidth + this.tableScrollWidth;
        this.containerWidth = parentContainer.offsetWidth - rowHeaderWidthToSub;
    }

    private saveSortingToSession(): void {
        this.sessionService.setObject(
            PepListComponent.SORT_BY_STATE_KEY,
            this.sortBy
        );
        this.sessionService.setObject(
            PepListComponent.ASCENDING_STATE_KEY,
            this.isAsc
        );
    }

    private getTopItems(): number {
        return this.isTable
            ? PepListComponent.TOP_ITEMS_TABLE
            : PepListComponent.TOP_ITEMS_THUMBNAILS;
    }

    // private disableScroll(disable: boolean) {
    //     if (disable) {
    //         this.renderer.addClass(this.getParentContainer(), 'lock-events');
    //     } else {
    //         this.renderer.removeClass(this.getParentContainer(), 'lock-events');
    //     }
    // }

    private toggleLoadingItemsFropApi(loadingItemsFromApi: boolean): void {
        this._loadingItemsFromApi = loadingItemsFromApi;

        // this.disableScroll(loadingItemsFromApi);
    }

    private updateCurrentPageItems(startIndex: number, endIndex: number): void {
        this.currentPageItems = this.items.slice(startIndex, endIndex);
    }

    private setSelectionItems(
        itemId: string,
        uniqItemId: string,
        isChecked: boolean
    ): void {
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

    private getUniqItemId(itemId: string, itemType = ''): string {
        return itemId + this.SEPARATOR + itemType;
    }

    private setLayout(): void {
        if (
            this.totalRows === 0 ||
            !this._layout ||
            !this._layout.ControlFields ||
            this._layout.ControlFields.length === 0
        ) {
            return;
        }

        this._layout.ControlFields.forEach((cf) => {
            if (cf.ColumnWidth === 0) {
                cf.ColumnWidth = 10;
            }

            if (
                this.isTable &&
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
        const length = this._layout.ControlFields.length;
        const selectionCheckBoxWidth =
            this.selectionTypeForActions === 'multi' ? 44 : 0;

        // Is table AND there is at least one column of width type of percentage.
        if (this.isTable) {
            if (this._layout && this._layout.ControlFields) {
                this.hasColumnWidthOfTypePercentage =
                    this._layout.ControlFields.filter(
                        (cf) => cf.ColumnWidthType === 1
                    ).length === 0;
            }
        }

        // If the columns size is fixed and the total is small then the container change it to percentage.
        if (!this.hasColumnWidthOfTypePercentage) {
            const totalFixedColsWidth = this._layout.ControlFields.map(
                (cf) => cf.ColumnWidth * fixedMultiple
            ).reduce((sum, current) => sum + current);

            if (window.innerWidth > totalFixedColsWidth) {
                this.hasColumnWidthOfTypePercentage = true;
            }
        }

        let totalCalcColsWidth = 0;

        // Calc by percentage
        if (this.hasColumnWidthOfTypePercentage) {
            const totalColsWidth: number = this._layout.ControlFields.map(
                (cf) => cf.ColumnWidth
            ).reduce((sum, current) => sum + current);

            for (let index = 0; index < length; index++) {
                const uiControlField: UIControlField = this._layout.ControlFields[index];
                const calcColumnWidthPercentage = (100 / totalColsWidth) * uiControlField.ColumnWidth;

                uiControlField.calcColumnWidth = Math.floor((this.containerWidth * calcColumnWidthPercentage) / 100);

                if (index === length - 1) {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString = 'calc(100% - ' + totalCalcColsWidth + 'px)'; // For 100%
                } else {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString = uiControlField.calcColumnWidth + 'px';
                    totalCalcColsWidth += uiControlField.calcColumnWidth;
                }
            }

            this.renderer.setStyle(
                this.hostElement.nativeElement,
                'width',
                'inherit'
            );
        } else {
            for (let index = 0; index < length; index++) {
                const uiControlField: UIControlField = this._layout
                    .ControlFields[index];
                const currentFixedWidth = Math.floor(
                    uiControlField.ColumnWidth * fixedMultiple
                );

                if (index === length - 1) {
                    uiControlField.calcTitleColumnWidthString = currentFixedWidth + 'px';
                    uiControlField.calcColumnWidthString = currentFixedWidth + 'px';
                } else {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString = currentFixedWidth + 'px';
                }

                totalCalcColsWidth += currentFixedWidth;
            }

            this.renderer.setStyle(
                this.hostElement.nativeElement,
                'width',
                totalCalcColsWidth + selectionCheckBoxWidth + 'px'
            );
        }
    }

    private initResizeData(): void {
        this.startX = 0;
        this.startWidth = 0;
        this.tableStartWidth = 0;
        this.pressedColumn = '';
    }

    private getParent(el, parentSelector): any {
        // If no parentSelector defined will bubble up all the way to *document*
        if (parentSelector === undefined) {
            parentSelector = document;
        }
        const parent = [];
        let p = el.parentNode;

        while (
            p &&
            p.className !== '' &&
            p.className.indexOf(parentSelector) === -1 &&
            parentSelector !== document
        ) {
            const o = p;
            p = o.parentNode;
        }
        if (p.className.indexOf(parentSelector) > -1) {
            parent.push(p); // Push that parentSelector you wanted to stop at
        }
        return parent;
    }

    private cleanItems(): void {
        this.itemsCounter = 0;
        this._items =
            this.totalRows > 0 ? Array<ObjectsDataRow>(this.totalRows) : [];
        this.currentPageItems = [];
        this.calculatedObjectHeight = '';
    }

    private initVariablesFromSession(items: ObjectsDataRow[]): void {
        const selectedItemsObject: Array<any> = this.sessionService.getObject<
            Array<any>
        >(PepListComponent.SELECTED_ITEMS_STATE_KEY);
        const selectedItemsFromMap: Map<string, string> =
            selectedItemsObject && selectedItemsObject.length > 0
                ? new Map(selectedItemsObject)
                : null;
        if (
            selectedItemsFromMap != null &&
            typeof selectedItemsFromMap.size !== 'undefined' &&
            selectedItemsFromMap.size > 0
        ) {
            this.selectedItems = selectedItemsFromMap;
            this.sessionService.removeObject(
                PepListComponent.SELECTED_ITEMS_STATE_KEY
            );
        } else {
            this.selectedItems.clear();
        }

        const unSelectedItemsObject: Array<any> = this.sessionService.getObject<
            Array<any>
        >(PepListComponent.UN_SELECTED_ITEMS_STATE_KEY);
        const unSelectedItemsMap: Map<string, string> =
            unSelectedItemsObject && unSelectedItemsObject.length > 0
                ? new Map(unSelectedItemsObject)
                : null;
        if (
            unSelectedItemsMap != null &&
            typeof unSelectedItemsMap.size !== 'undefined' &&
            unSelectedItemsMap.size > 0
        ) {
            this.unSelectedItems = unSelectedItemsMap;
            this.sessionService.removeObject(
                PepListComponent.UN_SELECTED_ITEMS_STATE_KEY
            );
        } else {
            this.unSelectedItems.clear();
        }

        const isAllSelected = this.sessionService.getObject(
            PepListComponent.ALL_SELECTED_STATE_KEY
        );
        if (isAllSelected != null) {
            this.isAllSelected = isAllSelected && this.getIsAllSelected(items);
            this.sessionService.removeObject(
                PepListComponent.ALL_SELECTED_STATE_KEY
            );
        } else {
            this.isAllSelected = false;
        }

        const sortBy = this.sessionService.getObject(
            PepListComponent.SORT_BY_STATE_KEY
        );
        if (sortBy && sortBy !== '') {
            this.sortBy = sortBy;
            this.sessionService.removeObject(
                PepListComponent.SORT_BY_STATE_KEY
            );
        } else {
            this.sortBy = '';
        }

        const isAsc = this.sessionService.getObject(
            PepListComponent.ASCENDING_STATE_KEY
        );
        if (isAsc != null) {
            this.isAsc = isAsc;
            this.sessionService.removeObject(
                PepListComponent.ASCENDING_STATE_KEY
            );
        } else {
            this.isAsc = true;
        }
    }

    private getIsAllSelected(items: Array<ObjectsDataRow>): boolean {
        let result = true;

        if (this.selectedItems?.size > 0 && items?.length > 0) {
            for (const item of items) {
                if (!(item && this.selectedItems.has(item?.UID.toString()))) {
                    result = false;
                    break;
                }
            }
        } else {
            result = false;
        }

        return result;
    }

    private getNumberOfStartItems(): number {
        let numberOfStartItems = 20;

        if (
            this.screenSize === PepScreenSizeType.XL ||
            this.screenSize === PepScreenSizeType.LG
        ) {
            numberOfStartItems = this.isTable ? 50 : 40;
        } else if (this.screenSize === PepScreenSizeType.MD) {
            numberOfStartItems = this.isTable ? 30 : 20;
        } else if (this.screenSize === PepScreenSizeType.SM) {
            numberOfStartItems = this.isTable ? 20 : 10;
        } else if (this.screenSize === PepScreenSizeType.XS) {
            numberOfStartItems = this.isTable ? 15 : 5;
        }

        return numberOfStartItems;
    }

    private setItemClicked(
        itemId,
        isSelectableForActions: boolean,
        itemType: string,
        isChecked: boolean
    ): void {
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

        if (this.selectionTypeForActions === 'single') {
            this.selectedItemsChange.emit(
                this.selectedItemId.length === 0 ? 0 : 1
            );
        } else if (this.selectionTypeForActions === 'multi') {
            if (isSelectableForActions) {
                this.setSelectionItems(itemId, uniqItemId, isChecked);

                const currentList = this.isAllSelected
                    ? this.unSelectedItems
                    : this.selectedItems;
                const currentListCount = this.isAllSelected
                    ? this.totalRows - currentList.size
                    : currentList.size;
                this.selectedItemsChange.emit(currentListCount);
            }
        }

        // Raise selected item change event
        if (this.selectionTypeForActions !== 'none') {
            this.selectedItemChange.emit({
                id: itemId,
                selected: isChecked,
            });
        }
    }

    private exportFunctionsOnHostElement() {
        // This is for web component usage for use those functions.
        this.hostElement.nativeElement.clear = this.clear.bind(this);
        this.hostElement.nativeElement.initListData = this.initListData.bind(
            this
        );
        this.hostElement.nativeElement.updateItems = this.updateItems.bind(
            this
        );
        this.hostElement.nativeElement.updatePage = this.updatePage.bind(this);
        this.hostElement.nativeElement.updateItem = this.updateItem.bind(this);
    }

    // getIsDisabled(item: ObjectsDataRow): boolean {
    //     return (
    //         this.lockItemInnerEvents || (item && !item.IsSelectableForActions)
    //     );
    // }

    getIsAllSelectedForActions(): boolean {
        let res = false;

        if (this.isAllSelected) {
            if (this.unSelectedItems.size === 0) {
                res = true;
            }
        } else {
            if (this.virtualScroller?.viewPortItems) {
                if (this.selectedItems.size === this.totalRows) {
                    res = this.getIsAllSelected(this.virtualScroller.viewPortItems);
                } else if (this.selectedItems.size < this.totalRows) {
                    for (const item of this.virtualScroller.viewPortItems) {
                        res =
                            item && this.selectedItems.has(item?.UID.toString());

                        if (!res) {
                            break;
                        }
                    }
                }
            }
        }

        return res;
    }

    setIsAllSelected(isChecked: boolean): void {
        if (this.selectionTypeForActions === 'multi') {
            this.selectAllCB.checked = isChecked;
            this.isAllSelected = isChecked;
        }
    }

    selectAllItemsForActions(e: any): void {
        // For material checkbox || radio.
        const isChecked = e.source.checked;

        // Indeterminate mode
        let isIndeterminate = false;
        const currentList = this.isAllSelected
            ? this.unSelectedItems
            : this.selectedItems;
        if (currentList.size > 0) {
            isIndeterminate = true;
            this.isAllSelected = false;
            this.selectedItemsChange.emit(0);
            e.source.checked = false;
        }

        this.selectedItems.clear();
        this.unSelectedItems.clear();

        if (!isIndeterminate) {
            this.isAllSelected = isChecked;
            this.selectAllClick.emit(isChecked);

            if (this.selectionTypeForActions === 'multi') {
                if (!isChecked) {
                    this.selectedItemsChange.emit(0);
                    this.selectedItemId = '';
                } else {
                    const filteredItems = this.items.filter(
                        (item) => item && item.IsSelectableForActions
                    );
                    this.selectedItemsChange.emit(filteredItems.length);
                }
            }
        } else {
            // Remove all
            if (this.selectionTypeForActions === 'multi') {
                this.selectAllClick.emit(false);
            }
        }
    }

    raiseStartIndexChange(startIndex = 0) {
        // this.startIndex = startIndex;
        this.startIndexChange.emit({ startIndex });
    }

    getIsItemSelected(item: ObjectsDataRow): boolean {
        let isSelected = false;

        if (item) {
            if (this.selectionTypeForActions === 'single') {
                isSelected = this.selectedItemId === this.getUniqItemId(item.UID, item.Type.toString());
            } else if (this.selectionTypeForActions === 'multi') {
                if (item.IsSelectableForActions) {
                    isSelected = (this.isAllSelected && !this.unSelectedItems.has(item.UID)) || this.selectedItems.has(item.UID);
                }
            }
        }

        return isSelected;
    }

    selectItemForActions(
        e: any,
        itemId: string,
        isSelectableForActions: boolean,
        itemType = ''
    ): void {
        // For material checkbox || radio.
        const isChecked = e.source.checked;
        this.setItemClicked(
            itemId,
            isSelectableForActions,
            itemType,
            isChecked
        );
    }

    itemClicked(e: any, item: ObjectsDataRow): void {
        // Set seleted item
        const itemId = item?.UID.toString();
        const itemType = item?.Type.toString();
        let isChecked = false;

        if (item && item.IsSelectableForActions) {
            this.selectedItemId = this.getUniqItemId(itemId, itemType);
            isChecked = true;
        }

        if (this.isTable) {
            if (this.selectionTypeForActions === 'single') {
                this.setItemClicked(
                    itemId,
                    item.IsSelectableForActions,
                    itemType,
                    isChecked
                );
            } else if (this.selectionTypeForActions === 'none') {
                // Just mark the row as highlighted
                this.setItemClicked(
                    itemId,
                    item.IsSelectableForActions,
                    itemType,
                    true
                );
            }
        } else {
            if (this.disabled) {
                return;
            }
        }

        this.itemClick.emit({ source: item, viewType: this.viewType });
    }

    onTableRowMouseEnter(event: any, itemId: string, itemType: string): void {
        if (!this.deviceHasMouse) {
            return;
        }

        const uniqItemId = this.getUniqItemId(itemId, itemType);
        this.hoveredItemId = uniqItemId;
    }

    onTableRowMouseLeave(event: any, itemId: string, itemType: string): void {
        this.hoveredItemId = '';
    }

    onCardMouseEnter(event: any, itemId: string, itemType: string): void {
        if (!this.deviceHasMouse) {
            return;
        }

        const uniqItemId = this.getUniqItemId(itemId, itemType);
        this.hoveredItemId = uniqItemId;
    }

    onCardMouseLeave(event: any, itemId: string, itemType: string): void {
        this.hoveredItemId = '';
    }

    // trackByFunc(index: number, item: ObjectsDataRow): any {
    //     return item && item?.UID ? item?.UID : index;
    //     // let res: string = "";

    //     // if (item && item?.UID) {
    //     //    res = item?.UID + "_" + this.listType + "_" + (this.isTable ? "Table" : "Thumbnails");
    //     // }
    //     // else {
    //     //    res = index + "_" + this.listType + "_" + (this.isTable ? "Table" : "Thumbnails");
    //     // }

    //     // return res;
    // }

    clear(): void {
        this.cleanItems();
        this._layout = null;
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

                    this.selectedItems.set(
                        itemId,
                        this.getUniqItemId(itemId, itemType)
                    );
                }
            }

            this.isAllSelected = this.getIsAllSelected(items ? items : this.virtualScroller?.viewPortItems);
            this.setSelectionDataInSession();
        }

        this.refresh();
    }

    setSelectionDataInSession(): void {
        if (this.selectedItems.size > 0) {
            this.sessionService.setObject(
                PepListComponent.SELECTED_ITEMS_STATE_KEY,
                JSON.stringify([...this.selectedItems])
            );
        }

        if (this.unSelectedItems.size > 0) {
            this.sessionService.setObject(
                PepListComponent.UN_SELECTED_ITEMS_STATE_KEY,
                JSON.stringify([...this.unSelectedItems])
            );
        }

        this.sessionService.setObject(
            PepListComponent.ALL_SELECTED_STATE_KEY,
            this.isAllSelected
        );
    }

    initListData(
        layout: UIControl,
        totalRows: number,
        items: ObjectsDataRow[]
    ): void {
        this.initVariablesFromSession(items);
        const currentList = this.isAllSelected
            ? this.unSelectedItems
            : this.selectedItems;
        const currentListCount = this.isAllSelected
            ? this.totalRows - currentList.size
            : currentList.size;
        this.selectedItemsChange.emit(currentListCount);

        this._layout = layout;
        this.selectedItemId = '';
        this.totalRows = totalRows;

        this.scrollToTop(false);
        this.cleanItems();

        if (items) {
            if (this.pagerType === 'pages') {
                // If page index out of bounds - init to 0.
                const numberOfPages = Math.ceil(totalRows / this.pageSize);

                if (this.pageIndex >= numberOfPages) {
                    this.pageIndex = 0;
                }

                this.updatePage(items, {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize,
                });
            } else {
                const numberOfStartItems = this.getNumberOfStartItems();
                const event = {
                    fromIndex: 0,
                    toIndex: numberOfStartItems,
                };
                this.updateItems(items, event);

                this.refresh();
            }
        }

        this.setLayout();
        this.onListLoad();
    }

    updateItems(
        items: ObjectsDataRow[],
        event: IPepListLoadItemsEvent = null
    ): void {
        if (!event) {
            return; // Event isn't supplied.
        }

        // Clean array
        if (this.itemsCounter + items.length > PepListComponent.TOP_ITEMS_ARRAY) {
            this.cleanItems();
        }

        const startIndex = event.fromIndex ?? 0;

        for (let i = 0; i < items.length; i++) {
            if (!this.items[i + startIndex]) {
                this.items[i + startIndex] = items[i];
                this.itemsCounter += 1;
            }
        }

        this.toggleLoadingItemsFropApi(false);
    }

    updatePage(items: ObjectsDataRow[], event: IPepListLoadPageEvent): void {
        if (!event) {
            return; // Event isn't supplied.
        }

        // Clean array
        if (this.itemsCounter + items.length > PepListComponent.TOP_ITEMS_ARRAY) {
            this.cleanItems();
        }

        // const loadInChunks = this.itemsCounter === 0;
        const startIndex = Math.min(event.pageIndex * event.pageSize, this.totalRows);
        const endIndex = Math.min(startIndex + event.pageSize, this.totalRows);

        for (let i = 0; i < items.length; i++) {
            if (!this.items[i + startIndex]) {
                this.items[i + startIndex] = items[i];
                this.itemsCounter += 1;
            }
        }

        this.updateCurrentPageItems(startIndex, endIndex);
        this.toggleLoadingItemsFropApi(false);
    }

    updateItem(data: ObjectsDataRow): void {
        const index = this.items.findIndex((i) => i && i?.UID === data?.UID);
        if (index >= 0 && index < this.items.length) {
            this.updateItemProperties(this.items[index], data);
        }
    }

    scrollToIndex(index: number, alignToBeginning = true, additionalOffset = 0, animationMilliseconds: number = undefined, animationCompletedCallback: () => void = undefined) {
        this.virtualScroller?.scrollToIndex(index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback);
    }

    updateItemProperties(itemToUpdate: ObjectsDataRow, data: ObjectsDataRow) {
        Object.assign(itemToUpdate, data);
    }

    getSelectedItemsData(isForEdit = false): PepSelectionData {
        const res = new PepSelectionData();

        let selectionType = 1;
        const items = [];
        const itemTypes = [];

        if (this.selectionTypeForActions === 'single') {
            if (this.selectedItemId.length > 0) {
                const tmp = this.selectedItemId.split(this.SEPARATOR);
                items.push(tmp[0]);
                itemTypes.push(tmp[1]);
            }
        } else if (this.selectionTypeForActions === 'multi') {
            let currentList = [];

            // For edit - only the selected items.
            if (isForEdit) {
                if (!this.isAllSelected) {
                    currentList = Array.from(this.selectedItems.values());
                } else {
                    // Get the id's of the items that not founded in unSelectedItems.
                    this.items.forEach((item) => {
                        if (
                            item &&
                            !this.unSelectedItems.has(item?.UID.toString())
                        ) {
                            currentList.push(
                                this.getUniqItemId(
                                    item?.UID.toString(),
                                    item?.Type.toString()
                                )
                            );
                        }
                    });
                }
            } else {
                // For delete - can be the unselected with select_all functionality.
                currentList = Array.from(
                    this.isAllSelected
                        ? this.unSelectedItems.values()
                        : this.selectedItems.values()
                );
                selectionType = this.isAllSelected ? 0 : 1;
            }

            currentList.forEach((item) => {
                const tmp = item.split(this.SEPARATOR);

                if (tmp.length === 2) {
                    items.push(tmp[0]);
                    itemTypes.push(tmp[1]);
                }
            });

        }

        res.selectionType = selectionType;
        res.rows = items;
        res.rowTypes = itemTypes;

        return res;
    }

    getIsItemEditable(uid: string): boolean {
        const item = this.items.filter((x) => x?.UID.toString() === uid);
        if (item.length > 0) {
            return item[0].IsEditable;
        } else {
            return false;
        }
    }

    getItemDataByID(uid: string): ObjectsDataRow {
        return this.items.find((item) => item?.UID.toString() === uid);
    }

    refresh() {
        this.virtualScroller?.refresh();
    }

    // ---------------------------------------------------------------
    //              Events handlers.
    // ---------------------------------------------------------------

    onWinResize(e): void {
        this.refresh();

        this.containerWidth = 0;
        this.setLayout();
    }

    onListResizeStart(event, columnKey): void {
        this.pressedColumn = columnKey;
        this.startX = event.x;
        this.startWidth = event.target.closest('.header-column').offsetWidth;
        this.tableStartWidth = this.virtualScroller?.contentElementRef.nativeElement.offsetWidth;
    }

    onListResize(event): void {
        if (this.pressedColumn.length > 0) {
            let widthToAdd = this.layoutService.isRtl() ? this.startX - event.x : event.x - this.startX;

            // Set the width of the column and the container of the whole columns.
            if (this.startWidth + widthToAdd >= PepListComponent.MINIMUM_COLUMN_WIDTH || widthToAdd > 0) {
                const length = this._layout.ControlFields.length;
                let totalCalcColsWidth = 0;

                for (let index = 0; index < length; index++) {
                    const uiControlField: UIControlField = this._layout
                        .ControlFields[index];

                    if (index === length - 1) {
                        // Calc the last column only in percentage type.
                        if (this.hasColumnWidthOfTypePercentage) {
                            const scrollWidth = this.layoutService.getScrollbarWidth();
                            widthToAdd += scrollWidth;
                            uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString = 'calc(100% - ' + (totalCalcColsWidth + scrollWidth) + 'px)'; // For 100%
                        } else {
                            if (uiControlField.ApiName === this.pressedColumn) {
                                uiControlField.calcColumnWidth = this.startWidth + widthToAdd;
                                uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidth + 'px';
                                uiControlField.calcColumnWidthString = uiControlField.calcColumnWidth + 'px';
                            }
                        }
                    } else if (uiControlField.ApiName === this.pressedColumn) {
                        uiControlField.calcColumnWidth = this.startWidth + widthToAdd;
                        uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString = uiControlField.calcColumnWidth + 'px';
                    }

                    totalCalcColsWidth += uiControlField.calcColumnWidth;
                }

                this.renderer.setStyle(
                    this.hostElement.nativeElement,
                    'width',
                    this.tableStartWidth + widthToAdd + 'px'
                );
            }

            this.checkForChanges = new Date().getTime();
        }
    }

    onListResizeEnd(event): void {
        if (this.pressedColumn.length > 0) {
            if (
                event &&
                this.getParent(event.srcElement, 'resize-box').length > 0
            ) {
                this.initResizeData();
            } else {
                // Set timeout 0 for onListSortingChange will have the pressedColumn.
                setTimeout(() => {
                    this.initResizeData();
                }, 0);
            }

            event.stopPropagation();
        }
    }

    onListSortingChange(sortBy: string, isAsc: boolean, event = null): void {
        if (
            this.pressedColumn.length > 0 ||
            (event && this.getParent(event.srcElement, 'resize-box').length > 0)
        ) {
            return;
        }

        if (this.sortBy !== sortBy || this.isAsc !== isAsc) {
            this.sortBy = sortBy;
            this.isAsc = isAsc;
            this.saveSortingToSession();

            this.sortingChange.emit({ sortBy, isAsc });
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

    onPagerChange(event: IPepListPagerChangeEvent): void {
        this.pageIndex = event.pageIndex;

        // Scroll to top.
        this.scrollToTop();

        const startIndex = event.pageIndex * event.pageSize;
        const endIndex = Math.min(
            startIndex + event.pageSize,
            this.totalRows
        );

        let shouldGetItemsFromApi = false;
        let index: number = startIndex;

        while (!shouldGetItemsFromApi && index < endIndex) {
            if (!this.items[index]) {
                shouldGetItemsFromApi = true;
            }
            index++;
        }

        // Get bulk from api.
        if (shouldGetItemsFromApi) {
            if (!this.loadingItemsFromApi) {
                this.toggleLoadingItemsFropApi(true);

                this.loadPage.emit({
                    pageIndex: event.pageIndex,
                    pageSize: event.pageSize,
                });
            }
        } else {
            setTimeout(() => {
                this.updateCurrentPageItems(startIndex, endIndex);
            }, this.scrollAnimationTime);
        }
    }

    onVirtualScrollerChange(event: IPageInfo): void {
        this.raiseStartIndexChange(event.startIndex);

        if (this.pagerType === 'scroll') {
            // For other events do nothing.
            if (typeof event.startIndex === 'undefined' || event.startIndex < 0 ||
                typeof event.endIndex === 'undefined' || event.endIndex < 0) {
                return;
            }

            const addAtStart = event.scrollDirection === 'backward';
            let shouldGetItemsFromApi = false;
            let indexOfMissingItem: number;

            if (addAtStart) {
                indexOfMissingItem = event.endIndex;
                while (!shouldGetItemsFromApi && indexOfMissingItem >= event.startIndex) {
                    if (!this.items[indexOfMissingItem]) {
                        shouldGetItemsFromApi = true;
                    }

                    if (!shouldGetItemsFromApi) {
                        indexOfMissingItem--;
                    }
                }
            } else {
                indexOfMissingItem = event.startIndex;
                while (!shouldGetItemsFromApi && indexOfMissingItem <= event.endIndex) {
                    if (!this.items[indexOfMissingItem]) {
                        shouldGetItemsFromApi = true;
                    }

                    if (!shouldGetItemsFromApi) {
                        indexOfMissingItem++;
                    }
                }
            }

            // Get bulk from api.
            if (shouldGetItemsFromApi) {
                if (!this.loadingItemsFromApi) {
                    this.toggleLoadingItemsFropApi(true);

                    const top = this.getTopItems() - 1;
                    const fromIndex = addAtStart ? Math.max(indexOfMissingItem - top, 0) : indexOfMissingItem;
                    const toIndex = addAtStart ? indexOfMissingItem : Math.min(indexOfMissingItem + top, this.totalRows);

                    this.loadItems.emit({
                        fromIndex,
                        toIndex,
                    });
                }
            }
        }
    }

    onListLoad(): void {
        setTimeout(() => {
            this.listLoad.emit();
        }, 0);
    }

    onChildRectChange(event: ClientRect) {
        setTimeout(() => {
            this.calculatedObjectHeight = event?.height + 'px';
        }, 0);
    }

    onValueChanged(valueChange: IPepFormFieldValueChangeEvent): void {
        if (this.disabled) {
            return;
        }

        this.valueChange.emit(valueChange);
    }

    onCustomizeFieldClick(
        customizeFieldClickedData: IPepFormFieldClickEvent
    ): void {
        if (this.disabled) {
            return;
        }

        this.fieldClick.emit(customizeFieldClickedData);
    }
}
