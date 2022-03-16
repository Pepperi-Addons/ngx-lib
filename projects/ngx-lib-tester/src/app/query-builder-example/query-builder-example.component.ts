import { Component, OnInit } from '@angular/core';
import { IPepQueryBuilderField } from '@pepperi-addons/ngx-lib/query-builder/common/model/legacy';


@Component({
    templateUrl: './query-builder-example.component.html',
    styleUrls: ['./query-builder-example.component.scss'],
})
export class QueryBuilderExampleComponent implements OnInit {
    fields: Array<IPepQueryBuilderField>;
    json: any;

    isformValid = true;

    constructor() {
        //
    }

    ngOnInit(): void {
        this.loadQuery();
        this.loadFilterFields();


        /*
                this.json = {
                    "ComplexId": 3,
                    "Operation": "OR",
                    "LeftNode": {
                        "ComplexId": 2,
                        "Operation": "AND",
                        "LeftNode": {
                            "ExpressionId": 1,
                            "ApiName": "TSAboolll",
                            "Operation": "IsEqual",
                            "Values": [
                                "True"
                            ]
                        },
                        "RightNode": {
                            "ExpressionId": 2,
                            "ApiName": "BillToState",
                            "Operation": "IsEqual",
                            "Values": [
                                "value2",
                                "value4",
                                "value16",
                                "value8"
                            ]
                        }
                    },
                    "RightNode": {
                        "ExpressionId": 3,
                        "ApiName": "CaseQuantity",
                        "Operation": "IsEqual",
                        "Values": [
                            "2"
                        ]
                    }
                } */


    }
    loadQuery() {
        /*this.json = {
            "ComplexId": "5",
            "Operation": "AND",
            "LeftNode": {
                "ComplexId": "4",
                "LeftNode": {
                    "ComplexId": "3",
                    "LeftNode":
                    {
                        "ComplexId": "1",
                        "LeftNode": { "ExpressionId": '1', "ApiName": 'TSAboolll', "Operation": 'IsEqual', "Values": ["True"] },
                        "Operation": "OR",
                        "RightNode": { "ExpressionId": '2', "ApiName": 'BillToState', "Operation": 'IsEqual', "Values": ['value2', 'value4', 'value8'] }
                    },
                    "Operation": "OR",
                    "RightNode": {
                        "ComplexId": "2",
                        "LeftNode": { "ExpressionId": '3', "ApiName": "TSAAttachmentTest1", "Operation": 'Contains', "Values": ["abc"] },
                        "Operation": "AND",
                        "RightNode": { "ExpressionId": '4', "ApiName": "TSAAttachmentTest1", "Operation": 'Contains', "Values": ['sss'] }
                    }
                },
                "Operation": "OR",
                "RightNode": { "ExpressionId": '5', "ApiName": "ActionDateTime", "Operation": "InTheLast", "Values": ["9", "Months"] },
            },
            "RightNode": { "ExpressionId": '6', "ApiName": "CaseQuantity", "Operation": "IsEqual", "Values": ["2"] },
        } */
        this.json = {
            "ComplexId": "1",
            "Operation": "AND",
            "LeftNode": {
                "Values": ["123"],
                "Operation": "Contains",
                "ApiName": "Account.ExternalID",
                "ExpressionId": "1"
            }
            , "RightNode":
            {
                "Values": ["5132"],
                "Operation": "Contains",
                "ApiName": "Account.ExternalID",
                "ExpressionId": "2"
            } 
        }
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
            { FieldID: 'TSAboolll', Title: 'TSA boolll', FieldType: 'Bool', OptionalValues: [] },

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

    onFormValidationChanged(status: boolean) {
        console.log('this.isformValid', status);
        this.isformValid = status;
    }


}
