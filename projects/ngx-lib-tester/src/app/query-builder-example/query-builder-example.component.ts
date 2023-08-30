import { Component, OnInit } from '@angular/core';
import { IPepQueryBuilderField } from '@pepperi-addons/ngx-lib/query-builder/common/model/legacy';


@Component({
    templateUrl: './query-builder-example.component.html',
    styleUrls: ['./query-builder-example.component.scss'],
})
export class QueryBuilderExampleComponent implements OnInit {
    fields: Array<IPepQueryBuilderField>;
    variableFields: Array<IPepQueryBuilderField>;
    
    json: any;

    isformValid = true;

    constructor() {
        //
    }

    ngOnInit(): void {
        this.loadQuery();
        this.loadFilterFields();
        this.loadVariableFields();


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
        this.json = {
            "ComplexId": "5",
            "Operation": "AND",
            "LeftNode": {
                "ComplexId": "4",
                "LeftNode": {
                    "ComplexId": "3",
                    "LeftNode":
                    {
                        "ComplexId": "1",
                        "LeftNode": { "ExpressionId": '1', "ApiName": 'TSAAttachmentTest1', "Operation": 'IsEqual', "Values": ["TSAAttachmentTest1"] },
                        "Operation": "OR",
                        "RightNode": { "ExpressionId": '2', "ApiName": 'BillToState', "Operation": 'IsEqual', "Values": ['value2', 'BillToState', 'BillToState'] }
                    },
                    "Operation": "OR",
                    "RightNode": {
                        "ComplexId": "2",
                        "LeftNode": { "ExpressionId": '3', "ApiName": "CampaignName", "Operation": 'Contains', "Values": ["abc"] },
                        "Operation": "AND",
                        "RightNode": { "ExpressionId": '4', "ApiName": "CostPrice", "Operation": 'LessThanVarible', "Values": ['CostPrice'] }
                    }
                },
                "Operation": "OR",
                "RightNode": { "ExpressionId": '5', "ApiName": "ActionDateTime", "Operation": "BetweenVariable", "Values": ["ActionDateTime2", "ActionDateTime"] },
            },
            "RightNode": { "ExpressionId": '6', "ApiName": "TSAboolll", "Operation": "IsEqual", "Values": ["TSAboolll2"] },
        } 
        /*this.json = {
            "ComplexId": "1",
            "Operation": "OR",
            "LeftNode": {
                "Values": ['2', 'Days'],
                "Operation": "NotInTheLastCalendar",
                "ApiName": "ActionDateTime",
                "ExpressionId": "1"
            }
            , "RightNode":
            {
                "Values": ["5132"],
                "Operation": "Contains",
                "ApiName": "CampaignName",
                "ExpressionId": "2"
            } 
        } */
    }

    loadFilterFields() {

        this.fields = [
            { FieldID: 'TSAAttachmentTest1', Title: 'TSA Attachment Test', FieldType: 'String' },
            { FieldID: 'AllowDecimal', Title: 'Allow Decimal', FieldType: 'Bool' },
            { FieldID: 'Double Check', Title: 'Double', FieldType: 'Double' },
            { FieldID: 'CostPrice', Title: 'Cost Price', FieldType: 'Integer' },
            { FieldID: 'CaseQuantity', Title: 'Case Quantity', FieldType: 'Integer' },
            { FieldID: 'CampaignName', Title: 'Campaign Name', FieldType: 'String' },
            { FieldID: 'ActionDateTime', Title: 'Action Date Time', FieldType: 'DateTime' },
            { FieldID: 'Type', Title: 'Type', FieldType: 'String' },
            { FieldID: 'TSAboolll', Title: 'TSA boolll', FieldType: 'Bool' },

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

    loadVariableFields() {
        this.variableFields = [
            { FieldID: 'TSAAttachmentTest1', Title: 'TSA Attachment Test', FieldType: 'String' },
            { FieldID: 'CostPrice', Title: 'Cost Price', FieldType: 'Integer' },
            { FieldID: 'ActionDateTime', Title: 'Action Date Time', FieldType: 'DateTime' },
            { FieldID: 'ActionDateTime2', Title: 'Action Date Time 2', FieldType: 'DateTime' },
            { FieldID: 'TSAboolll', Title: 'ATSA boolll', FieldType: 'Bool' },
            { FieldID: 'TSAboolll2', Title: 'TSA boolll 2', FieldType: 'Bool' },
            { FieldID: 'BillToState', Title: 'Bill To State', FieldType: 'MultipleStringValues' },
            { FieldID: 'TSAAttachmentTest2', Title: 'TSA Attachment Test 2', FieldType: 'String' },
            
        ]
    }

    getFilters(json: any) {
        console.log('getFilters', json);

    }

    onFormValidationChanged(status: boolean) {
        console.log('this.isformValid', status);
        this.isformValid = status;
    }


}
