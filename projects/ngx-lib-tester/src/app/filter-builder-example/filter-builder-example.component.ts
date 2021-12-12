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
import { IPepField } from '@pepperi-addons/ngx-lib/smart-filters/filter-builder/common/model/legacy';
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
    fields: Array<IPepField>;
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
            "ComplexId": 1,
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
                    "Operation": "IsEqual",
                    "Values": [
                        "value2",
                        "value4",
                        "value6",
                        "value8"
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
        /*
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
        } */
    }

    loadFilterFields() {

        this.fields = [
            { FieldID: 'TSAAttachmentTest1', Title: 'TSA Attachment Test', FieldType: 'String', OptionalValues: [] },
            { FieldID: 'AllowDecimal', Title: 'Allow Decimal', FieldType: 'Bool', OptionalValues: [] },
            { FieldID: 'CostPrice', Title: 'Cost Price', FieldType: 'Integer', OptionalValues: [] },
            { FieldID: 'CaseQuantity', Title: 'Case Quantity', FieldType: 'Integer', OptionalValues: [] },
            { FieldID: 'CampaignName', Title: 'Campaign Name', FieldType: 'String', OptionalValues: [] },
            { FieldID: 'ActionDateTime', Title: 'Action Date Time', FieldType: 'DateTime', OptionalValues: [] },
            { FieldID: 'Type', Title: 'Type', FieldType: 'String', OptionalValues: [] },
            {
                FieldID: 'BillToState', Title: 'Bill To State', FieldType: 'MultipleStringValues', OptionalValues: [
                    { Key: 'value0', Value: 'value 0' },
                    { Key: 'value1', Value: 'value 1' },
                    { Key: 'value2', Value: 'value 2' },
                    { Key: 'value3', Value: 'value 3' },
                    { Key: 'value4', Value: 'value 4' },
                    { Key: 'value5', Value: 'value 5' },
                    { Key: 'value6', Value: 'value 6' },
                    { Key: 'value7', Value: 'value 7' },
                    { Key: 'value8', Value: 'value 8' },
                    { Key: 'value9', Value: 'value 9' },
                ]
            }
        ];

    }

    getFilters(json: any) {
        console.log('getFilters', json);
    }

}
