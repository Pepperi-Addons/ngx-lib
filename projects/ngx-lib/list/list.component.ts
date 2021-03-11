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
    PepLayoutType,
    PepLayoutService,
    PepScrollToService,
    PepWindowScrollingService,
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
import {
    PepVirtualScrollComponent,
    IPepVirtualScrollChangeEvent,
} from './virtual-scroll.component';
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
        // '[style.width]': "'inherit'",
        '(document:mousedown)': 'onMouseDown($event)',
        '(window:resize)': 'onWinResize($event)',
        // '(window:mouseup)': 'onListResizeEnd($event)',
        // '(window:mousemove)': 'onListResize($event)'
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

    @Input() currentListTypeTranslation = '';
    @Input() noDataFoundMsg = 'Items not found';
    @Input() selectionTypeForActions: PepListSelectionType = 'multi';
    @Input() hideAllSelectionInMulti = false;

    @Input() top = -1;
    @Input() listType = '';
    @Input() objectId = '0';
    @Input() parentId = '0';
    @Input() searchCode = '0';
    @Input() firstFieldAsLink = false;
    @Input() supportSorting = true;
    @Input() supportResizing = true;
    @Input() parentScroll: Element | Window = null;
    @Input() disabled = false;
    @Input() lockEvents = false;
    @Input() lockItemInnerEvents = false;
    @Input() isReport = false;
    @Input() layoutType: PepLayoutType = null;
    @Input() pageType = '';
    @Input() totalsRow = [];
    @Input() pagerType: PepListPagerType = 'scroll';
    @Input() pageSize: number = DEFAULT_PAGE_SIZE;
    @Input() pageIndex = 0;
    @Input() scrollAnimationTime = 500;

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
    @Output() selectAllClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() singleActionClick: EventEmitter<any> = new EventEmitter<any>();

    @Output() listLoad: EventEmitter<void> = new EventEmitter<void>();
    @Output()
    loadItems: EventEmitter<IPepListLoadItemsEvent> = new EventEmitter<IPepListLoadItemsEvent>();
    @Output()
    loadPage: EventEmitter<IPepListLoadPageEvent> = new EventEmitter<IPepListLoadPageEvent>();

    @ViewChild(PepVirtualScrollComponent)
    virtualScroll: PepVirtualScrollComponent;
    @ViewChild(PepListPagerComponent) listPager: PepListPagerComponent;
    @ViewChild('noVirtualScrollContnainer')
    noVirtualScrollContnainer: ElementRef;
    @ViewChild('selectAllCB') selectAllCB: any;

    private _layout: UIControl = null;
    get layout(): UIControl {
        return this._layout;
    }

    totalRows = -1;
    itemClass: string;
    isTable = false;
    private hasColumnWidthOfTypePercentage = true;

    private _items: Array<ObjectsDataRow> = null;
    get items(): Array<ObjectsDataRow> {
        return this._items;
    }

    private _useVirtualScroll = true;
    get useVirtualScroll(): boolean {
        return this._useVirtualScroll;
    }

    private itemsCounter = 0;
    showCardSelection = false;

    viewType: PepListViewType;
    scrollItems: Array<ObjectsDataRow>;

    SEPARATOR = ',';
    isAllSelected = false;
    selectedItems = new Map<string, string>();
    unSelectedItems = new Map<string, string>();

    nativeWindow: any = null;
    private currentTween: any;

    selectedItemId = '';
    hoveredItemId = '';

    private containerWidth = 0;

    private _showItems = true;
    get showItems() {
        return this._showItems;
    }

    screenSize: PepScreenSizeType;
    deviceHasMouse = false;

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
    calculatedObjectHeight: string;

    constructor(
        private hostElement: ElementRef,
        private layoutService: PepLayoutService,
        private sessionService: PepSessionService,
        private scrollToService: PepScrollToService,
        private windowScrollingService: PepWindowScrollingService,
        private cd: ChangeDetectorRef,
        private renderer: Renderer2,
        private zone: NgZone
    ) {
        this.exportFunctionsOnHostElement();

        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.screenSize = size;
        });

        this.nativeWindow = window;
        this.deviceHasMouse = this.layoutService.getDeviceHasMouse();
        this.layoutService.onMouseOver$.subscribe((deviceHasMouse: boolean) => {
            this.deviceHasMouse = deviceHasMouse;
        });
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

    private scrollToTop() {
        const scrollingElement = this.getParentContainer();
        if (scrollingElement) {
            // if (this.useVirtualScroll && typeof this.virtualScroll !== 'undefined') {
            //     this.virtualScroll.scrollInto(0);
            // } else {
            // this.scrollToService.scrollElementTo(this.renderer, scrollingElement, 1000);
            // }

            let animationRequest;
            const scrollTop = 0;
            const isWindow = scrollingElement instanceof Window;
            const currentScrollTop =
                scrollingElement instanceof Window
                    ? window.pageYOffset
                    : scrollingElement.scrollTop;

            if (this.currentTween !== undefined) {
                this.currentTween.stop();
            }

            // totally disable animate
            if (this.scrollAnimationTime === 0) {
                if (scrollingElement instanceof Window) {
                    window.scrollTo(0, scrollTop);
                } else {
                    scrollingElement.scrollTop = scrollTop;
                }
                return;
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

    private setContainerWidth(): void {
        const selectionCheckBoxWidth =
            this.selectionTypeForActions === 'multi' ? 44 : 0;

        const rowHeight = 40; // the table row height (2.5rem * 16font-size).
        const style = window.getComputedStyle(
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
        const scrollWidth =
            parentContainer.clientHeight < rowHeight * (this.totalRows + 1)
                ? 18
                : 0; // 18 is the default scroll width.

        // The selectionCheckBoxWidth width + containerFluidSpacing + scrollWidth.
        const rowHeaderWidthToSub =
            containerFluidSpacing + selectionCheckBoxWidth + scrollWidth;
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

    private toggleItems(isVisible: boolean): void {
        this._showItems = isVisible;

        // TODO: Maybe we need to check the disable scrolling just on the container.
        // if (this._useVirtualScroll) {
        //     // if (isVisible) {
        //     //     this.windowScrollingService.disable();
        //     // } else {
        //     //     this.windowScrollingService.enable();
        //     // }
        // }
    }

    private updateScrollItems(
        startIndex,
        endIndex,
        loadInChunks = false
    ): void {
        if (!loadInChunks) {
            this.scrollItems = this.items.slice(startIndex, endIndex);
        } else {
            // Insert the first for the UI calculation.
            this.scrollItems = this.items.slice(startIndex, startIndex + 1);

            const ITEMS_RENDERED_AT_ONCE = 5;
            const INTERVAL_IN_MS = 50;

            let currentIndex = 0;
            const tmp = this.items.slice(startIndex, endIndex);

            const interval = setInterval(() => {
                const nextIndex = currentIndex + ITEMS_RENDERED_AT_ONCE;

                for (let i = currentIndex; i < nextIndex; i++) {
                    if (i >= tmp.length) {
                        clearInterval(interval);
                        break;
                    }

                    if (this.scrollItems[i]) {
                        this.scrollItems[i] = tmp[i];
                    } else {
                        this.scrollItems.push(tmp[i]);
                    }
                }

                currentIndex += ITEMS_RENDERED_AT_ONCE;
            }, INTERVAL_IN_MS);

            // Remove the rest of the prev items - fit the current count
            while (this.scrollItems.length > tmp.length) {
                this.scrollItems.pop();
            }
        }
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
                const uiControlField: UIControlField = this._layout
                    .ControlFields[index];
                const calcColumnWidthPercentage =
                    (100 / totalColsWidth) * uiControlField.ColumnWidth;

                uiControlField.calcColumnWidth = Math.floor(
                    (this.containerWidth * calcColumnWidthPercentage) / 100
                );

                if (index === length - 1) {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                        'calc(100% - ' + totalCalcColsWidth + 'px)'; // For 100%
                } else {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                        uiControlField.calcColumnWidth + 'px';
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
                    uiControlField.calcTitleColumnWidthString =
                        currentFixedWidth + 'px';
                    uiControlField.calcColumnWidthString =
                        currentFixedWidth - 4 + 'px'; // -4 for the row padding.
                } else {
                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                        currentFixedWidth + 'px';
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

    private getParentContainer(): Element | Window {
        return this.parentScroll ? this.parentScroll : window;
    }

    private cleanItems(): void {
        this.itemsCounter = 0;
        this._items =
            this.totalRows > 0 ? Array<ObjectsDataRow>(this.totalRows) : [];
        this.scrollItems = [];
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
                if (!(item && this.selectedItems.has(item.UID.toString()))) {
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
        } else if (this.selectionTypeForActions === 'single-action') {
            this.setSelectionItems(itemId, uniqItemId, isChecked);
            this.singleActionClick.emit({
                id: itemId,
                selected: isChecked,
            });
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

    getIsDisabled(item: ObjectsDataRow): boolean {
        return (
            this.lockItemInnerEvents || (item && !item.IsSelectableForActions)
        );
    }

    getIsAllSelectedForActions(): boolean {
        let res = false;

        if (this.isAllSelected) {
            if (this.unSelectedItems.size === 0) {
                res = true;
            }
        } else {
            if (this.scrollItems) {
                if (this.selectedItems.size === this.totalRows) {
                    res = this.getIsAllSelected(this.scrollItems);
                } else if (this.selectedItems.size < this.totalRows) {
                    for (const item of this.scrollItems) {
                        res =
                            item && this.selectedItems.has(item.UID.toString());

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
        if (
            this.selectionTypeForActions === 'multi' ||
            this.selectionTypeForActions === 'single-action'
        ) {
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
            if (this.selectionTypeForActions === 'single-action') {
                // Remove all
                this.selectAllClick.emit(false);
            }
        }
    }

    // getIsItemSelected(itemId: string, itemType = ''): boolean {
    //     let isSelected = false;
    //     if (this.selectionTypeForActions === 'single-action' ||
    //         this.selectionTypeForActions === 'multi') {
    //         isSelected = this.selectedItems.has(itemId) || (this.isAllSelected && !this.unSelectedItems.has(itemId));
    //     } else if (this.selectionTypeForActions === 'single') {
    //         const uniqItemId = this.getUniqItemId(itemId, itemType);
    //         isSelected = uniqItemId === this.selectedItemId;
    //     }

    //     return isSelected;
    // }

    // Change the name from getIsSelectedForActions to getIsItemSelected
    getIsItemSelected(
        itemId: string,
        isSelectableForActions: boolean,
        itemType = ''
    ): boolean {
        let isSelected = false;

        if (this.selectionTypeForActions === 'single') {
            isSelected =
                this.selectedItemId === this.getUniqItemId(itemId, itemType);
        } else if (this.selectionTypeForActions === 'single-action') {
            isSelected =
                (this.isAllSelected && !this.unSelectedItems.has(itemId)) ||
                this.selectedItems.has(itemId);
        } else if (this.selectionTypeForActions === 'multi') {
            if (isSelectableForActions) {
                isSelected =
                    (this.isAllSelected && !this.unSelectedItems.has(itemId)) ||
                    this.selectedItems.has(itemId);
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
        const itemId = item.UID.toString();
        const itemType = item.Type.toString();
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

    getThumbnailsLayout(): PepLayoutType {
        return this.layoutType ?? 'card';
    }

    // trackByFunc(index: number, item: ObjectsDataRow): any {
    //     return item && item.UID ? item.UID : index;
    //     // let res: string = "";

    //     // if (item && item.UID) {
    //     //    res = item.UID + "_" + this.listType + "_" + (this.isTable ? "Table" : "Thumbnails");
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

            this.isAllSelected = this.getIsAllSelected(
                items ? items : this.scrollItems
            );
            this.setSelectionDataInSession();
        }

        if (typeof this.virtualScroll !== 'undefined') {
            this.virtualScroll.refresh();
        }
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
        items: ObjectsDataRow[],
        viewType: PepListViewType = '',
        itemClass = '',
        showCardSelection = false
    ): void {
        this.initVariablesFromSession(items);
        const currentList = this.isAllSelected
            ? this.unSelectedItems
            : this.selectedItems;
        const currentListCount = this.isAllSelected
            ? this.totalRows - currentList.size
            : currentList.size;
        this.selectedItemsChange.emit(currentListCount);

        this.viewType = viewType;
        this.isTable = viewType === 'table';
        // this.isCardView = viewType === 'cards' || viewType === 'lines';
        this.showCardSelection = showCardSelection;
        this._layout = layout;
        this.itemClass = itemClass;
        this.selectedItemId = '';
        this.totalRows = totalRows;

        this.scrollToTop();
        this.cleanItems();

        if (items) {
            if (this.pagerType === 'pages') {
                this._useVirtualScroll = false;
                // this.pageIndex = 0; // The user need to init the page index.

                this.updatePage(items, {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize,
                });
            } else {
                if (this.totalRows === items.length) {
                    this._useVirtualScroll = false;
                    this.updateItems(items);
                } else {
                    this._useVirtualScroll = true;
                    const numberOfStartItems = this.getNumberOfStartItems();
                    const event = {
                        start: 0,
                        end: numberOfStartItems,
                        fromIndex: 0,
                        toIndex: numberOfStartItems,
                    };
                    this.updateItems(items, event);

                    if (typeof this.virtualScroll !== 'undefined') {
                        this.virtualScroll.refresh();
                    }
                }
            }
        }

        // Raise list load event immediately, else will be raised from the scroller load event.
        if (!this._useVirtualScroll) {
            this.onListLoad();
        }

        this.setLayout();
    }

    updateItems(
        items: ObjectsDataRow[],
        event: IPepListLoadItemsEvent = null
    ): void {
        if (this._useVirtualScroll) {
            if (!event) {
                // Event isn't supplied.
                return;
            }

            // Clean array
            if (
                this.itemsCounter + items.length >
                PepListComponent.TOP_ITEMS_ARRAY
            ) {
                this.cleanItems();
            }

            const loadInChunks = this.itemsCounter === 0;
            const startIndex = event.fromIndex ? event.fromIndex : event.start;

            for (let i = 0; i < items.length; i++) {
                if (!this.items[i + startIndex]) {
                    this.items[i + startIndex] = items[i];
                    this.itemsCounter += 1;
                }
            }

            this.updateScrollItems(event.start, event.end, loadInChunks);
            this.toggleItems(true);
        } else {
            this.scrollItems = this._items = items;
            this.itemsCounter = items.length;
        }
    }

    updatePage(items: ObjectsDataRow[], event: IPepListLoadPageEvent): void {
        if (!event) {
            // Event isn't supplied.
            return;
        }

        // Clean array
        if (
            this.itemsCounter + items.length >
            PepListComponent.TOP_ITEMS_ARRAY
        ) {
            this.cleanItems();
        }

        // const loadInChunks = this.itemsCounter === 0;
        const startIndex = event.pageIndex * event.pageSize;
        const endIndex = Math.min(startIndex + event.pageSize, this.totalRows);

        for (let i = 0; i < items.length; i++) {
            if (!this.items[i + startIndex]) {
                this.items[i + startIndex] = items[i];
                this.itemsCounter += 1;
            }
        }

        this.updateScrollItems(startIndex, endIndex, false);
        this.toggleItems(true);
    }

    updateItem(data: ObjectsDataRow): void {
        let index = 0;

        // Update items list
        index = this.items.findIndex((i) => i && i.UID === data.UID);
        if (index >= 0 && index < this.items.length) {
            this.items[index] = data;
        }

        // Update scrollItems list
        index = this.scrollItems.findIndex((i) => i && i.UID === data.UID);
        if (index >= 0 && index < this.scrollItems.length) {
            // this.scrollItems[index] = data;
            // Update item properties to keep the pep-form instance.
            this.updateItemProperties(this.scrollItems[index], data);
            this.checkForChanges = new Date().getTime();
        }
    }

    updateItemProperties(itemToUpdate: ObjectsDataRow, data: ObjectsDataRow) {
        Object.assign(itemToUpdate, data);
    }

    // focusOnAnItem(itemIndex): void {
    //     if (typeof this.virtualScroll !== 'undefined') {
    //         this.virtualScroll.scrollInto(itemIndex);
    //     }
    // }

    getSelectedItemsData(isForEdit = false): PepSelectionData {
        const res = new PepSelectionData();

        if (this.selectionTypeForActions === 'single') {
            const tmp = this.selectedItemId.split(this.SEPARATOR);

            res.selectionType = 1;
            res.rows = [tmp[0]];
            res.rowTypes = [tmp[1]];
        } else if (this.selectionTypeForActions === 'multi') {
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
                    this.items.forEach((item) => {
                        if (
                            item &&
                            !this.unSelectedItems.has(item.UID.toString())
                        ) {
                            currentList.push(
                                this.getUniqItemId(
                                    item.UID.toString(),
                                    item.Type.toString()
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

            res.selectionType = selectionType;
            res.rows = items;
            res.rowTypes = itemTypes;
        }

        return res;
    }

    // If not in use remove this function.
    // private initCollectionFromState(collectionType, collection: string[]): void {
    //     if (collectionType === 'Selected') {
    //         collection.forEach((x) => this.selectedItems.set(x, x));
    //     } else {
    //         collection.forEach((x) => this.unSelectedItems.set(x, x));
    //     }
    // }

    getIsItemEditable(uid: string): boolean {
        const item = this.items.filter((x) => x.UID.toString() === uid);
        if (item.length > 0) {
            return item[0].IsEditable;
        } else {
            return false;
        }
    }

    getItemDataByID(uid: string): ObjectsDataRow {
        return this.items.find((item) => item.UID.toString() === uid);
    }

    // ---------------------------------------------------------------
    //              Events handlers.
    // ---------------------------------------------------------------
    onMouseDown(event): void {
        // if (!this.hostElement.nativeElement.contains(event.target) || event.target.className === 'scrollable-content') {
        //     setTimeout(() => {
        //         if (this.selectionTypeForActions === 'multi' || this.selectionTypeForActions === 'single-action') {
        //         }
        //         // this.selectedItemId = '';
        //         // this.hoveredItemId = '';
        //     }, 500);
        // }
    }

    onWinResize(e): void {
        if (typeof this.virtualScroll !== 'undefined') {
            this.virtualScroll.refresh();
        }

        this.containerWidth = 0;
        this.setLayout();
    }

    onListResizeStart(event, columnKey): void {
        this.pressedColumn = columnKey;
        this.startX = event.x;
        this.startWidth = event.target.closest('.header-column').offsetWidth;
        if (this._useVirtualScroll) {
            this.tableStartWidth = this.virtualScroll.contentElementRef.nativeElement.offsetWidth;
        } else {
            // Set the tableStartWidth to the container offsetWidth
            this.tableStartWidth = this.noVirtualScrollContnainer.nativeElement.offsetWidth;
        }
    }

    onListResize(event): void {
        if (this.pressedColumn.length > 0) {
            const widthToAdd = this.layoutService.isRtl()
                ? this.startX - event.x
                : event.x - this.startX;

            // Set the width of the column and the container of the whole columns.
            if (
                this.startWidth + widthToAdd >=
                    PepListComponent.MINIMUM_COLUMN_WIDTH ||
                widthToAdd > 0
            ) {
                const length = this._layout.ControlFields.length;
                let totalCalcColsWidth = 0;

                for (let index = 0; index < length; index++) {
                    const uiControlField: UIControlField = this._layout
                        .ControlFields[index];

                    if (index === length - 1) {
                        // Calc the last column only in percentage type.
                        if (this.hasColumnWidthOfTypePercentage) {
                            uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                                'calc(100% - ' + totalCalcColsWidth + 'px)'; // For 100%
                        } else {
                            if (uiControlField.ApiName === this.pressedColumn) {
                                uiControlField.calcColumnWidth =
                                    this.startWidth + widthToAdd;
                                uiControlField.calcTitleColumnWidthString =
                                    uiControlField.calcColumnWidth + 'px';
                                uiControlField.calcColumnWidthString =
                                    uiControlField.calcColumnWidth - 4 + 'px';
                            }
                        }
                    } else if (uiControlField.ApiName === this.pressedColumn) {
                        uiControlField.calcColumnWidth =
                            this.startWidth + widthToAdd;
                        uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                            uiControlField.calcColumnWidth + 'px';
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
        if (this.showItems) {
            this.pageIndex = event.pageIndex;

            // Scroll to top.
            this.scrollToTop();

            this.toggleItems(false);
            const startIndex = event.pageIndex * event.pageSize;
            const endIndex = Math.min(
                startIndex + event.pageSize,
                this.totalRows
            );

            let getItemsFromApi = false;
            let index: number = startIndex;

            while (!getItemsFromApi && index < endIndex) {
                if (!this.items[index]) {
                    getItemsFromApi = true;
                }
                index++;
            }

            // Get bulk from api.
            if (getItemsFromApi) {
                this.loadPage.emit({
                    pageIndex: event.pageIndex,
                    pageSize: event.pageSize,
                });
            } else {
                setTimeout(() => {
                    this.updateScrollItems(startIndex, endIndex, true);
                    this.toggleItems(true);
                }, this.scrollAnimationTime);
            }
        }
    }

    onScrollChange(event: IPepVirtualScrollChangeEvent): void {
        // For other events do nothing.
        if (
            typeof event.start === 'undefined' ||
            typeof event.end === 'undefined'
        ) {
            return;
        }

        this.calculatedObjectHeight = event.calculatedChildHeight + 'px';

        if (this.showItems) {
            this.toggleItems(false);
            this.updateScrollItems(event.start, event.end);

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
                let fromIndex;
                let toIndex;

                if (event.addAtStart) {
                    fromIndex = Math.max(
                        event.start - (top - (event.end - event.start)),
                        0
                    );
                    toIndex = event.end;
                } else {
                    fromIndex = event.start;
                    toIndex = Math.min(
                        event.end + (top - (event.end - event.start)),
                        this.totalRows
                    );
                }

                this.loadItems.emit({
                    start: event.start,
                    end: event.end,
                    fromIndex,
                    toIndex,
                });
            } else {
                this.toggleItems(true);
            }
        }
    }

    onListLoad(): void {
        this.listLoad.emit();
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
