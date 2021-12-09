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
        /*this.json = {
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
                        "value 2",
                        "value 4",
                        "value 6",
                        "value 8"
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
        } */
        this.json = {
            "ComplexId": 4,
            "Operation": "AND",
            "LeftNode": {
                "ComplexId": 3,
                "Operation": "OR",
                "LeftNode": {
                    "ComplexId": 2,
                    "Operation": "AND",
                    "LeftNode": {
                        "ExpressionId": 1,
                        "ApiName": "CampaignName",
                        "Operation": "Contains",
                        "Values": [
                            "Pep"
                        ]
                    },
                    "RightNode": {
                        "ExpressionId": 2,
                        "ApiName": "AllowDecimal",
                        "Operation": "IsEqual",
                        "Values": [
                            "True"
                        ]
                    }
                },
                "RightNode": {
                    "ExpressionId": 3,
                    "ApiName": "CostPrice",
                    "Operation": ">",
                    "Values": [
                        "5"
                    ]
                }
            },
            "RightNode": {
                "ExpressionId": 4,
                "ApiName": "CaseQuantity",
                "Operation": ">",
                "Values": [
                    "5"
                ]
            }
        }
    }

    loadFilterFields() {

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
                    { value: 'value 0' },
                    { value: 'value 1' },
                    { value: 'value 2' },
                    { value: 'value 3' },
                    { value: 'value 4' },
                    { value: 'value 5', count: 5 },
                    { value: 'value 6', count: 6 },
                    { value: 'value 7', count: 7 },
                    { value: 'value 8', count: 8 },
                    { value: 'value 9', count: 9 },
                ]
            }
        ];

    }

    getFilters(json: any) {
        console.log('getFilters', json);
    }

}
