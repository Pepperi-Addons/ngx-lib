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
    OnChanges
} from '@angular/core';
import { delay } from 'rxjs/operators';
import {
    PepLayoutType,
    PepLayoutService,
    UIControl,
    UIControlField,
    FIELD_TYPE,
    ObjectsDataRow
} from '@pepperi-addons/ngx-lib';
import { IPepFormFieldClickEvent, IPepFormFieldValueChangeEvent } from './form.component';

export type PepListViewType = 'cards' | 'lines' | 'table';

@Component({
    selector: 'pep-internal-list',
    templateUrl: './internal-list.component.html',
    styleUrls: ['./internal-list.component.scss'],
    host: {
        '(window:resize)': 'winResize($event)'
    }
})
export class PepInternalListComponent
    implements OnInit, OnChanges, OnDestroy {
    @Input() currentListTypeTranslation = '';
    @Input() noDataFoundMsg = 'Items not found';
    @Input() hideAllSelectionInMulti = false;

    @Input() top = -1;
    @Input() listType = '';
    @Input() objectId = '0';
    @Input() parentId = '0';
    @Input() searchCode = '0';
    // @Input() showTopBorder = false;
    @Input() firstFieldAsLink = false;
    @Input() supportResizing = true;
    @Input() parentScroll: Element | Window = null;
    @Input() disabled = false;
    @Input() disableEvents = false;
    @Input() disableSelectionItems = false;
    @Input() layoutType: PepLayoutType = null;
    @Input() pageType = '';
    @Input() totalsRow = [];

    @Output() fieldClick: EventEmitter<any> = new EventEmitter<IPepFormFieldClickEvent>();
    @Output() valueChange: EventEmitter<IPepFormFieldValueChangeEvent> = new EventEmitter<IPepFormFieldValueChangeEvent>();

    @ViewChild('noVirtualScrollCont') noVirtualScrollCont: ElementRef;
    @ViewChild('tableHeader') tableHeader: ElementRef;
    @ViewChild('selectAllCB') selectAllCB: any;

    public uiControl: UIControl = null;
    public totalRows = -1;
    itemClass: string;
    isTable = false;
    private hasColumnWidthOfTypePercentage = true;
    
    private _items: Array<ObjectsDataRow> = null;
    get items(): Array<ObjectsDataRow> {
        return this._items;
    }

    // isCardView = false;
    private itemsCounter = 0;
    showItems = true;
    viewType: PepListViewType;
    scrollItems: Array<ObjectsDataRow>;

    public SEPARATOR = ',';

    nativeWindow: any = null;

    selectedItemId = '';
    hoveredItemId = '';

    private lockEvents = false;
    private containerWidth = 0;

    deviceHasMouse = false;

    // headerIsInFocus = false;

    // For resize
    pressedColumn = '';
    startX = 0;
    startWidth = 0;
    tableStartWidth = 0;

    isUserSelected = false;
    checkForChanges: any = null;
    useVirtualScroll = true;
    calculatedObjectHeight: string;

    constructor(
        private element: ElementRef,
        private layoutService: PepLayoutService,
        private cd: ChangeDetectorRef,
        private renderer: Renderer2
    ) {
        this.nativeWindow = window;
        this.deviceHasMouse = this.layoutService.getDeviceHasMouse();
        this.layoutService.onMouseOver$.subscribe(deviceHasMouse => {
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
        if (this.valueChange) {
            this.valueChange.unsubscribe();
        }

        if (this.fieldClick) {
            this.fieldClick.unsubscribe();
        }
    }

    setContainerWidth(): void {
        const selectionCheckBoxWidth = 0;

        const rowHeight = 40; // the table row height (2.5rem * 16font-size).
        const style = window.getComputedStyle(
            this.element.nativeElement.parentElement
        );
        // The container-fluid class padding left + right + border
        const containerFluidSpacing =
            parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);

        const parentContainer =
            this.element.nativeElement.parentElement.parentElement > 0
                ? this.element.nativeElement.parentElement.parentElement
                : this.element.nativeElement.parentElement;

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

    removeTable(): void {
        this.cleanItems();
        this.uiControl = null;
    }

    private toggleItems(isVisible: boolean): void {
        this.showItems = isVisible;
        this.lockEvents = !isVisible;
    }

    private updateScrollItems(startIndex, endIndex, loadInChunks = true): void {
        this.scrollItems = this.items.slice(startIndex, endIndex);
    }

    getUniqItemId(itemId: string, itemType: string = ''): string {
        return itemId + this.SEPARATOR + itemType;
    }

    setLayout(): void {
        if (this.totalRows === 0 ||
            !this.uiControl ||
            !this.uiControl.ControlFields ||
            this.uiControl.ControlFields.length === 0) {
            return;
        }

        this.uiControl.ControlFields.forEach(cf => {
            if (cf.ColumnWidth === 0) {
                cf.ColumnWidth = 10;
            }

            if (this.isTable &&
                (cf.FieldType === FIELD_TYPE.Image ||
                    // cf.FieldType === FIELD_TYPE.Indicators || ???
                    cf.FieldType === FIELD_TYPE.Signature ||
                    cf.FieldType === FIELD_TYPE.NumberIntegerQuantitySelector ||
                    cf.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                    cf.FieldType === FIELD_TYPE.NumberIntegerForMatrix ||
                    cf.FieldType === FIELD_TYPE.NumberRealForMatrix ||
                    cf.FieldType === FIELD_TYPE.Package ||
                    cf.ApiName === 'UnitsQuantity' ||
                    cf.ApiName === 'QuantitySelector')) {
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
        const selectionCheckBoxWidth = 0;

        // Is table AND there is at least one column of width type of percentage.
        if (this.isTable) {
            if (this.uiControl && this.uiControl.ControlFields) {
                this.hasColumnWidthOfTypePercentage =
                    this.uiControl.ControlFields.filter(
                        cf => cf.ColumnWidthType === 1
                    ).length === 0;
            }
        }

        // If the columns size is fixed and the total is small then the container change it to percentage.
        if (!this.hasColumnWidthOfTypePercentage) {
            const totalFixedColsWidth = this.uiControl.ControlFields.map(
                cf => cf.ColumnWidth * fixedMultiple
            ).reduce((sum, current) => sum + current);

            if (window.innerWidth > totalFixedColsWidth) {
                this.hasColumnWidthOfTypePercentage = true;
            }
        }

        let totalCalcColsWidth = 0;

        // Calc by percentage
        if (this.hasColumnWidthOfTypePercentage) {
            const totalColsWidth: number = this.uiControl.ControlFields.map(
                cf => cf.ColumnWidth
            ).reduce((sum, current) => sum + current);

            for (let index = 0; index < length; index++) {
                const uiControlField: UIControlField = this.uiControl
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
                this.element.nativeElement,
                'width',
                'inherit'
            );
        } else {
            for (let index = 0; index < length; index++) {
                const uiControlField: UIControlField = this.uiControl
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
                this.element.nativeElement,
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

    onListResizeStart(event, columnKey): void {
        this.pressedColumn = columnKey;
        this.startX = event.x;
        this.startWidth = event.target.closest('.header-column').offsetWidth;
        // Set the tableStartWidth to the container offsetWidth
        this.tableStartWidth = this.noVirtualScrollCont.nativeElement.offsetWidth;
    }

    onListResize(event): void {
        if (this.pressedColumn.length > 0) {
            const widthToAdd = this.layoutService.isRtl()
                ? this.startX - event.x
                : event.x - this.startX;

            // Set the width of the column and the container of the whole columns.
            if (this.startWidth + widthToAdd >= 48 || widthToAdd > 0) {
                const length = this.uiControl.ControlFields.length;
                let totalCalcColsWidth = 0;

                for (let index = 0; index < length; index++) {
                    const uiControlField: UIControlField = this.uiControl
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
                    this.element.nativeElement,
                    'width',
                    this.tableStartWidth + widthToAdd + 'px'
                );
            }

            this.checkForChanges = new Date().getTime();
        }
    }

    getParent(el, parentSelector): any {
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

    onListResizeEnd(event): void {
        if (this.pressedColumn.length > 0) {
            if (event &&
                this.getParent(event.srcElement, 'resize-box').length > 0) {
                this.initResizeData();
            } else {
                setTimeout(() => {
                    this.initResizeData();
                }, 0);
            }
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

    onListChange(event: any): void {
        if (this.disableEvents) {
            return;
        }

        // For other events do nothing.
        if (
            typeof event.start === 'undefined' ||
            typeof event.end === 'undefined'
        ) {
            return;
        }

        this.calculatedObjectHeight = event.calculatedChildHeight + 'px';

        if (!this.lockEvents) {
            this.toggleItems(false);
            this.updateScrollItems(event.start, event.end, false);
            this.toggleItems(true);
        }
    }

    getParentContainer(): Element | Window {
        return this.parentScroll ? this.parentScroll : window;
    }

    onValueChanged(valueChange: IPepFormFieldValueChangeEvent): void {
        if (this.disabled) {
            return;
        }

        this.valueChange.emit(valueChange);
    }

    onCustomizeFieldClick(customizeFieldClickedData: IPepFormFieldClickEvent): void {
        if (this.disabled) {
            return;
        }

        this.fieldClick.emit(customizeFieldClickedData);
    }

    getIsDisabled(item: ObjectsDataRow): boolean {
        if (this.disableSelectionItems) {
            return true;
        } else {
            const IsNotSelectableForActions = item && !item.IsSelectableForActions;
            return IsNotSelectableForActions;
        }
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

        if (!this.isTable) {
            if (this.disabled) {
                return;
            }
        }
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
        return this.layoutType == null
            ? 'card'
            : this.layoutType;
    }

    // call this function after resize + animation end
    winResize(e): void {
        this.containerWidth = 0;
        this.setLayout();
    }

    trackByFunc(index: number, item: ObjectsDataRow): any {
        return item && item.UID ? item.UID : index;
    }

    cleanItems(): void {
        this.itemsCounter = 0;
        this._items = this.totalRows > 0 ? Array<ObjectsDataRow>(this.totalRows) : [];
        this.scrollItems = [];
        this.calculatedObjectHeight = '';
    }

    getUIControl(): UIControl {
        return this.uiControl;
    }

    initListData(
        uiControl: UIControl,
        totalRows: number,
        items: ObjectsDataRow[],
        viewType: PepListViewType = 'table',
        itemClass: string = ''
        ): void {

        this.viewType = viewType;
        this.isTable = viewType === 'table';
        // this.isCardView = viewType === 'cards';
        this.uiControl = uiControl;
        this.itemClass = itemClass;
        this.selectedItemId = '';
        this.totalRows = totalRows;

        // fix bug for the scrollTo that doesn't work on edge div , not window
        // const scrollingElement = this.getParentContainer();
        // scrollingElement.scrollTo(0, 0);

        this.cleanItems();

        this.updateItems(items);
        
        this.setLayout();
    }

    private updateItems(items: ObjectsDataRow[]): void {
        this.scrollItems = this._items = items;
        this.itemsCounter = items.length;
    }

    updateListItem(data: any): void {
        let index = 0;

        // Update items list
        index = this.items.findIndex(i => i && i.UID === data.UID);
        if (index >= 0 && index < this.items.length) {
            this.items[index] = data;
        }
        
        // Update scrollItems list
        index = this.scrollItems.findIndex(i => i && i.UID === data.UID);
        
        if (index >= 0 && index < this.scrollItems.length) {
            this.scrollItems[index] = data;
            this.checkForChanges = new Date().getTime();
        }
    }

    getIsItemEditable(uid: string): boolean {
        const item = this.items.filter(x => x.UID.toString() === uid);
        if (item.length > 0) {
            return item[0].IsEditable;
        } else {
            return false;
        }
    }

    getItemDataByID(uid: string): ObjectsDataRow {
        return this.items.find(item => item.UID.toString() === uid);
    }
}
