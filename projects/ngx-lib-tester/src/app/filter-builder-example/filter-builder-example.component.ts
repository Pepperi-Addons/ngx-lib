import { Component, OnInit, ViewChild } from '@angular/core';
import {
    PepLayoutService,
    ObjectsDataRow,
    PepScreenSizeType,
    UIControl,
} from '@pepperi-addons/ngx-lib';
import {
    PepMenuItem,
    IPepMenuItemClickEvent,
} from '@pepperi-addons/ngx-lib/menu';
import { createSmartFilterField, createSmartFilter } from 'projects/ngx-lib/smart-filters/common/model/creator';
import {
    IPepSmartFilterFieldOption,
    PepSmartFilterBaseField
} from '../../../../ngx-lib/smart-filters/common/model/field';
import { IPepSmartFilterData, PepSmartFilterOperators, PepSmartFilterOperatorUnits } from '@pepperi-addons/ngx-lib/smart-filters';
//} from '@pepperi-addons/ngx-lib/smart-filters';

import { PepBreadCrumbItem, IPepBreadCrumbItemClickEvent } from '@pepperi-addons/ngx-lib/bread-crumbs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
    templateUrl: './filter-builder-example.component.html',
    styleUrls: ['./filter-builder-example.component.scss'],
})
export class FilterBuilderExampleComponent implements OnInit {
    fields: Array<any>;
    //filters: Array<IPepSmartFilterData>;

    uiControl;
    items;
    json: any;

    title = 'client-side';

    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    searchString = '';
    searchAutoCompleteValues = [];

    menuItems: Array<PepMenuItem>;
    breadCrumbsItems: Array<PepBreadCrumbItem>;

    constructor(public layoutService: PepLayoutService) {
        this.layoutService.onResize$.pipe().subscribe((size) => {
            this.screenSize = size;
        });
    }

    ngOnInit(): void {
        this.loadFilterFields();
        this.json = {
            "ComplexId": 3,
            "Operation": "OR",
            "LeftNode": {
                "ComplexId": 2,
                "Operation": "AND",
                "LeftNode": {
                    "ExpressionId": 1,
                    "ApiName": "ActionDateTime",
                    "Operation": "InTheLast",
                    "Values": [
                        "4",
                        "Days"
                    ]
                },
                "RightNode": {
                    "ExpressionId": 2,
                    "ApiName": "BillToState",
                    "Operation": "In",
                    "Values": [
                        "Aargau",
                        "Aberdeen City",
                        "Acoruña",
                        "Acre"
                    ]
                }
            },
            "RightNode": {
                "ExpressionId": 3,
                "ApiName": "Type",
                "Operation": "IsEqual",
                "Values": [
                    "trtt"
                ]
            }
        }
        /*this.json = { 
            ComplexId: 4,
            Operation: 'AND',
            LeftNode: {
                ComplexId: 3,
                Operation: 'OR',
                LeftNode: {
                    ComplexId: 2,
                    Operation: 'AND',
                    LeftNode: {
                        ExpressionId: 1,
                        ApiName: 'CampaignName',
                        Operation: 'Contains',
                        Values: ['Pep']
                    },
                    RightNode: {
                        ExpressionId: 2,
                        ApiName: 'AllowDecimal',
                        Operation: 'IsEqual',
                        Values: [true]
                    }
                },
                RightNode: {
                    ExpressionId: 3,
                    ApiName: 'CostPrice',
                    Operation: '>',
                    Values: [5]
                }
            },
            RightNode: {
                ExpressionId: 4,
                ApiName: 'CaseQuantity',
                Operation: '<',
                Values: [
                    5
                ]
            }
        } */
    }

    loadFilterFields() {
        const brandOptions: IPepSmartFilterFieldOption[] = [];
        for (let index = 1; index <= 10000; index++) {
            brandOptions.push({ value: `value ${index}`, count: index });
        }

        this.fields = [
            { ApiName: 'TSAAttachmentTest1', DisplayName: 'TSA Attachment Test', Type: 'String', Options: [] },
            { ApiName: 'AllowDecimal', DisplayName: 'Allow Decimal', Type: 'Bool', Options: [] },
            { ApiName: 'CostPrice', DisplayName: 'Cost Price', Type: 'Integer', Options: [] },
            { ApiName: 'CaseQuantity', DisplayName: 'Case Quantity', Type: 'Integer', Options: [] },
            { ApiName: 'CampaignName', DisplayName: 'Campaign Name', Type: 'String', Options: [] },
            { ApiName: 'ActionDateTime', DisplayName: 'Action Date Time', Type: 'DateTime', Options: [] },
            { ApiName: 'Type', DisplayName: 'Type', Type: 'String', Options: [] },
            {
                ApiName: 'BillToState', DisplayName: 'Bill To State', Type: 'MultipleStringValues', Options: [
                    { Key: 'AAA', Value: 'Aargau' },
                    { Key: 'BBB', Value: 'Aberdeen City' },
                    { Key: 'CCC', Value: 'City 2' },
                    { Key: 'DDD', Value: 'Acoruña' },
                    { Key: 'EEE', Value: 'City 4' },
                    { Key: 'FFF', Value: 'Acre' }
                ]
            }

            /*createSmartFilterField({ id: 'BillToState', name: 'Bill To State' }, 'date-time'),
            createSmartFilterField({ id: 'ActionDateTime', name: 'stock' }, 'int'),
            createSmartFilterField({ id: 'filter3', name: 'Delivery Date', operators: ['dateRange'] }, 'date'),
            createSmartFilterField({ id: 'filter4', name: 'Brand', options: brandOptions }, 'multi-select'),
            createSmartFilterField({ id: 'filter5', name: 'Discout' }, 'boolean'),
            createSmartFilterField({ id: 'filter6', name: 'Price' }, 'currency'),
            createSmartFilterField({ id: 'filter7', name: 'Brand2', options: brandOptions }, 'multi-select'),
            createSmartFilterField({ id: 'filter8', name: 'CampaignName', operators: ['contains'] }, 'real') */
        ];


        /*
        const selectedValues = ['value 1', 'value 5', 'value 10', 'value 11'];
        this.filters = [
            createSmartFilter('BillToState', PepSmartFilterOperators.DateRange, '2021-11-02T00:00:00', '2021-11-16T00:00:00'),
            createSmartFilter('filter3', PepSmartFilterOperators.DateRange, '2020-1-1', '2021-1-1'),
            createSmartFilter('filter4', PepSmartFilterOperators.In, selectedValues)
        ]; */
    }

}
