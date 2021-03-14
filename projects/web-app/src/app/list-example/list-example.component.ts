import {
    Component,
    OnInit,
    AfterViewInit,
    ViewChild,
    Optional,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
    PepHttpService,
    PepDataConvertorService,
    PepLayoutService,
    PepRowData,
    PepFieldData,
    FIELD_TYPE,
    PepScreenSizeType,
    PepGuid,
} from '@pepperi-addons/ngx-lib';
import { IPepFormFieldClickEvent } from '@pepperi-addons/ngx-lib/form';
import {
    IPepListChooserOptionChangeEvent,
    IPepListSortingOptionChangeEvent,
    PepListComponent,
    IPepListSortingOption,
    IPepListView,
    IListViewChangeEvent,
} from '@pepperi-addons/ngx-lib/list';
import {
    PepMenuItem,
    IPepMenuItemClickEvent,
} from '@pepperi-addons/ngx-lib/menu';
import {
    PepFooterStateType,
    IPepFooterStateChangeEvent,
} from '@pepperi-addons/ngx-lib/top-bar';
import {
    IPepSmartFilterField,
    // DateFilter,
    // NumberFilter,
    // BooleanFilter,
    // MultiSelectFilter,
    IPepSmartFilterData,
    IPepSmartFilterFieldOption,
    PepSmartFilterOperators
    // PepSmartFilterWorker,
    // Field
} from '@pepperi-addons/ngx-lib/smart-filters';
import { FakeData } from './fake-data';
import { PepSideBarComponent } from '@pepperi-addons/ngx-lib/side-bar';
import { createSmartFilter, createSmartFilterField } from 'projects/ngx-lib/smart-filters/common/model/creator';

@Component({
    templateUrl: './list-example.component.html',
    styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit, AfterViewInit {
    @ViewChild(PepListComponent) customList: PepListComponent;
    dataSource = [];

    menuActions: Array<PepMenuItem>;
    listOptions: Array<PepMenuItem>;
    sortingOptions: Array<IPepListSortingOption>;
    views: Array<IPepListView>;
    fields: Array<IPepSmartFilterField>;
    filters: Array<IPepSmartFilterData>;

    footerState: PepFooterStateType;

    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    constructor(
        private dataConvertorService: PepDataConvertorService,
        private layoutService: PepLayoutService,
        // private httpService: PepHttpService,
        private translate: TranslateService
    ) {
        this.layoutService.onResize$.pipe().subscribe((size) => {
            this.screenSize = size;
        });

        // this.httpService.getPapiHttpCall('/meta_data/transactions/types')
        //     .subscribe(
        //         (res) => {
        //             debugger;
        //             console.log('')
        //         },
        //         (error) => {
        //             debugger;
        //             console.log(error);
        //         },
        //         () => {
        //             debugger;
        //         }
        // );
    }

    ngOnInit() {
        this.loadMenuItems();
        this.loadListChooser();
        this.loadListSorting();
        this.loadViews();
        this.loadSmartFilters();
    }

    ngAfterViewInit(): void {
        // this.dataSource = FakeData.Addons;
        // for (let index = 0; index < 10000; index++) {
        //     this.dataSource.push(FakeData.Addons);
        //     this.dataSource[index].UUID = PepGuid.newGuid();
        // }

        if (this.customList && this.dataSource) {
            this.loadlist(this.dataSource);
        }
    }

    private loadMenuItems(): void {
        this.menuActions = this.getMenuActions();
    }

    getMenuActions(): Array<PepMenuItem> {
        const menuActions: Array<PepMenuItem> = [
            { key: 'test1', text: 'test 1' },
            { key: 'test2', text: 'test 2', disabled: true },
            { key: 'sep', type: 'splitter' },
            { key: 'test3', text: 'test 3' },
        ];

        return menuActions;
    }

    onMenuItemClicked(action: IPepMenuItemClickEvent): void {
        alert(action.source.key);
    }

    private loadListChooser(): void {
        this.listOptions = [
            { key: 'accounts', text: 'accounts' },
            { key: 'orders', text: 'orders' },
        ];
    }

    private loadListSorting(): void {
        this.sortingOptions = [
            { sortBy: 'a-z', title: 'A -> Z', isAsc: true },
            { sortBy: 'z-a', title: 'Z -> A', isAsc: false },
            { sortBy: 'index', title: 'Index' },
        ];
    }

    private loadViews(): void {
        this.views = [
            { key: 'table', title: 'table view', iconName: 'view_table' },
            { key: 'line', title: 'line view', iconName: 'view_line' },
            { key: 'card', title: 'card view', iconName: 'view_card_md' },
        ];
    }

    private loadSmartFilters(): void {
        const brandOptions: IPepSmartFilterFieldOption[] = [];
        for (let index = 1; index <= 10000; index++) {
            brandOptions.push({ value: `value ${index}`, count: index });
        }

        this.fields = [
            createSmartFilterField({ id: 'filter1', name: 'Transaction Action Time' }, 'date-time'),
            createSmartFilterField({ id: 'filter2', name: 'stock' }, 'int'),
            createSmartFilterField({ id: 'filter3', name: 'Delivery Date', operators: ['dateRange'] }, 'date'),
            createSmartFilterField({ id: 'filter4', name: 'Brand', options: brandOptions }, 'multi-select'),
            createSmartFilterField({ id: 'filter5', name: 'Discout' }, 'boolean'),
            createSmartFilterField({ id: 'filter6', name: 'Price' }, 'currency'),
            createSmartFilterField({ id: 'filter7', name: 'Brand2', options: brandOptions }, 'multi-select'),
        ];
    }

    addFilters(): void {
        const selectedValues = ['value 1', 'value 5', 'value 10', 'value 11'];
        this.filters = [
            createSmartFilter('filter3', PepSmartFilterOperators.DateRange, '2020-1-1', '2021-1-1'),
            createSmartFilter('filter4', PepSmartFilterOperators.In, selectedValues)
        ];
    }

    toggleMenu(): void {
        this.menuActions =
            this.menuActions === null ? this.getMenuActions() : null;
    }

    toggleFilters(sideNav: PepSideBarComponent): void {
        if (sideNav) {
            sideNav.toggle();
        }
    }

    loadlist(dataSource) {
        if (this.customList && dataSource) {
            const tableData = new Array<PepRowData>();
            dataSource.forEach((rowData: any) => {
                const displayedColumns = [
                    'UUID',
                    'Description',
                    'Version',
                    'Type',
                    'AutomaticUpgrade',
                ];
                tableData.push(
                    this.convertToPepRowData(rowData, displayedColumns)
                );
            });

            const uiControl = this.dataConvertorService.getUiControl(
                tableData[0]
            );
            const rows = this.dataConvertorService.convertListData(tableData);
            this.customList.initListData(
                uiControl,
                rows.length,
                rows,
                'table',
                '',
                true
            );
        }
    }

    convertToPepRowData(object: any, displayedColumns = null) {
        const row = new PepRowData();
        row.Fields = [];
        const keys = displayedColumns ? displayedColumns : Object.keys(object);
        keys.forEach((key) =>
            row.Fields.push(this.initDataRowField(object, key))
        );
        return row;
    }

    initDataRowField(object: any, key: any): PepFieldData {
        const dataRowField: PepFieldData = {
            ApiName: key,
            Title: this.translate.instant(key),
            XAlignment: 1,
            FormattedValue: object[key] ? object[key].toString() : '',
            Value: object[key] ? object[key].toString() : '',
            ColumnWidth: 10,
            AdditionalValue: '',
            OptionalValues: [],
            FieldType: FIELD_TYPE.TextBox,
        };

        switch (key) {
            case 'Description':
                dataRowField.ColumnWidth = 25;
                break;
            case 'Name':
                dataRowField.ColumnWidth = 15;
                break;
            case 'Type':
                dataRowField.ColumnWidth = 15;
                dataRowField.FieldType = FIELD_TYPE.ComboBox;
                dataRowField.OptionalValues = [
                    {
                        Key: 'UseExisting',
                        Value: 'Use Existing',
                    },
                    {
                        Key: 'OverwriteExisting',
                        Value: 'Overwrite Existing',
                    },
                ];
                break;
            default:
                dataRowField.FormattedValue = object[key]
                    ? object[key].toString()
                    : '';
                break;
        }

        return dataRowField;
    }

    onFooterStateChange(footerStateType: IPepFooterStateChangeEvent) {
        this.footerState = footerStateType.state;
    }

    onAnimationStateChange(state): void { }

    onCustomizeFieldClick(fieldClickEvent: IPepFormFieldClickEvent) { }

    selectedRowsChanged(selectedRowsCount: number) { }

    onListChanged(listChangeEvent: IPepListChooserOptionChangeEvent) { }

    onSortingChanged(sortingChangeEvent: IPepListSortingOptionChangeEvent) { }

    onViewChanged(viewChangeEvent: IListViewChangeEvent) {
        // debugger;
        this.loadlist(this.dataSource);
    }

    onFiltersChange(filtersData: IPepSmartFilterData[]) {
        // debugger;
        console.log(JSON.stringify(filtersData))
    }
}
