import { Component, OnInit, AfterViewInit, ViewChild, Optional } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PepHttpService, ObjectSingleData, PepDataConvertorService, PepLayoutService,
    PepRowData, PepFieldData, FIELD_TYPE, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { IPepFormFieldClickEvent } from '@pepperi-addons/ngx-lib/form';
import { IPepListChooserOptionChangeEvent, IPepListSortingOptionChangeEvent, PepListComponent, IPepListSortingOption, IPepListView, IListViewChangeEvent } from '@pepperi-addons/ngx-lib/list';
import { PepMenuItem, IPepMenuItemClickEvent } from '@pepperi-addons/ngx-lib/menu';
import { PepFooterStateType, IPepFooterStateChangeEvent } from '@pepperi-addons/ngx-lib/top-bar';
import { FakeData } from './fake-data';

@Component({
    templateUrl: './list-example.component.html',
    styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit, AfterViewInit {
    @ViewChild(PepListComponent) customList: PepListComponent;
    dataSource = FakeData.Addons;

    menuActions: Array<PepMenuItem>;
    listOptions: Array<PepMenuItem>;
    sortingOptions: Array<IPepListSortingOption>;
    views: Array<IPepListView>;
    
    footerState: PepFooterStateType;

    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    constructor(
        private dataConvertorService: PepDataConvertorService,
        public layoutService: PepLayoutService,
        // private httpService: PepHttpService,
        private translate: TranslateService
    ) { 
        this.layoutService.onResize$.pipe().subscribe(size => {
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
    }

    ngAfterViewInit(): void {
        if (this.customList && this.dataSource) {
            this.loadlist(this.dataSource);
        }
    }

    private loadMenuItems(): void {
        this.menuActions = this.getMenuActions();
    }

    getMenuActions(): Array<PepMenuItem> {
        const menuActions: Array<PepMenuItem> = [
            { key: 'test1', text: 'test 1'},
            { key: 'test2', text: 'test 2', disabled: true },
            { key: 'sep', type: 'splitter' },
            { key: 'test3', text: 'test 3'}];

        return menuActions;
    }

    onMenuItemClicked(action: IPepMenuItemClickEvent): void {
        alert(action.source.key);
    }

    private loadListChooser(): void {
        this.listOptions =  [
            { key: 'accounts', text: 'accounts'},
            { key: 'orders', text: 'orders'}
        ];
    }

    private loadListSorting(): void {
        this.sortingOptions =  [
            { sortBy: 'a-z', title: 'A -> Z', isAsc: true},
            { sortBy: 'z-a', title: 'Z -> A', isAsc: false},
            { sortBy: 'index', title: 'Index'}
        ];
    }

    private loadViews(): void {
        this.views =  [
            { key: 'table', title: 'table view', iconName: 'view_table'},
            { key: 'line', title: 'line view', iconName: 'view_line'},
            { key: 'card', title: 'card view', iconName: 'view_card_md'},
        ];
    }

    toggleMenu(): void {
        this.menuActions = this.menuActions === null ? this.getMenuActions() : null;
    }

    onAnimationStateChange(state): void {

    }

    loadlist(dataSource) {
        if (this.customList && dataSource) {
            const tableData = new Array<PepRowData>();
            dataSource.forEach((rowData: any) => {
                const displayedColumns = ['UUID', 'Description', 'Version', 'Type', 'AutomaticUpgrade'];
                tableData.push(this.convertToPepRowData(rowData, displayedColumns));
            });
            const pepperiListObj = this.dataConvertorService.convertListData(tableData);
            const buffer = [];
            if (pepperiListObj.Rows) {
                pepperiListObj.Rows.forEach( row => {
                    const osd = new ObjectSingleData(pepperiListObj.UIControl, row);
                    osd.IsEditable = true;
                    buffer.push(osd);
                });
            }

            this.customList.initListData(pepperiListObj.UIControl, buffer.length, buffer, 'table', '', true);
        }
    }

    convertToPepRowData(object: any, displayedColumns = null) {
        const row = new PepRowData();
        row.Fields = [];
        const keys = displayedColumns ? displayedColumns : Object.keys(object);
        keys.forEach(key => row.Fields.push(this.initDataRowField(object, key)));
        return row;
    }

    initDataRowField(object: any, key: any): PepFieldData {

        const dataRowField: PepFieldData = {
            ApiName: key,
            Title: this.translate.instant(key),
            XAlignment: 1,
            FormattedValue: object[key] ? object[key].toString() : '',
            Value:  object[key] ? object[key].toString() : '',
            ColumnWidth: 10,
            AdditionalValue: '',
            OptionalValues: [],
            FieldType: FIELD_TYPE.TextBox

        };

        switch (key) {
            case 'Description':
                dataRowField.ColumnWidth = 25;
                break;
            case 'Name':
                dataRowField.ColumnWidth = 15;
                break;
            case "Type":
                dataRowField.ColumnWidth = 15;
                dataRowField.FieldType = FIELD_TYPE.ComboBox;
                dataRowField.OptionalValues = [
                    {
                        Key: "UseExisting",
                        Value: "Use Existing",
                    },
                    {
                        Key: "OverwriteExisting",
                        Value: "Overwrite Existing",
                    },
                ];
                break;
            default:
                dataRowField.FormattedValue = object[key] ? object[key].toString() : '';
                break;
        }

        return dataRowField;
    }

    onFooterStateChange(footerStateType: IPepFooterStateChangeEvent) {
        this.footerState = footerStateType.state;
    }

    onCustomizeFieldClick(fieldClickEvent: IPepFormFieldClickEvent) {
    }

    selectedRowsChanged(selectedRowsCount: number) {
    }

    onListChanged(listChangeEvent: IPepListChooserOptionChangeEvent) {
    }

    onSortingChanged(sortingChangeEvent: IPepListSortingOptionChangeEvent) {
        
    }

    onViewChanged(viewChangeEvent: IListViewChangeEvent) {
        // debugger;
    }
}
