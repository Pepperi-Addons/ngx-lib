import { Meta, Story, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { action } from '@storybook/addon-actions';
import { PepQueryBuilderModule } from './query-builder.module';
//import { PepQueryBuilderService } from './query-builder.service';
import { PepQueryBuilderComponent } from './query-builder.component';
import { IPepQueryBuilderField } from './index';

export default {
    title: 'Components/Query builder',
    component: PepQueryBuilderComponent,

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepQueryBuilderModule, SBNgxHelperModule]
        })
    ],

    argTypes: {
        query: {
            description: 'This is the legacy query',
            defaultValue: null,
            control: 'object',
            table: {
                type: {
                    summary: 'IPepQuerySection | IPepQueryItem'
                }
            }
        },
        fields: {
            description: 'This is the legacy fields array',
            defaultValue: [],
            control: 'array',
            table: {
                type: {
                    summary: 'Array<IPepQueryBuilderField>'
                },
                defaultValue: {
                    summary: null
                }
            }
        },
        maxDepth: {
            description: 'This is the maximum structure depth',
            defaultValue: 3,
            control: 'number',
            table: {
                type: {
                    summary: 'number'
                },
                defaultValue: {
                    summary: '3'
                }
            }
        }
    },
    parameters: {
        controls: {
            include: [
                'query',
                'fields',
                'maxDepth',
                'queryChange',
                'formValidationChange'
            ],
        },
    }

} as Meta;

const json = '';
const fields: Array<IPepQueryBuilderField> = [
    { FieldID: 'TSAAttachmentTest1', Title: 'TSA Attachment Test', FieldType: 'String' },
    { FieldID: 'AllowDecimal', Title: 'Allow Decimal', FieldType: 'Bool' },
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
        ]
    }
];

const variableFields: Array<IPepQueryBuilderField> = [
    { FieldID: 'TSAAttachmentTest1', Title: 'TSA Attachment Test', FieldType: 'String' },
    { FieldID: 'CostPrice', Title: 'Cost Price', FieldType: 'Integer' },
    { FieldID: 'ActionDateTime', Title: 'Action Date Time', FieldType: 'DateTime' },
    { FieldID: 'ActionDateTime2', Title: 'Action Date Time 2', FieldType: 'DateTime' },
    { FieldID: 'TSAboolll', Title: 'ATSA boolll', FieldType: 'Bool' },
    { FieldID: 'TSAboolll2', Title: 'TSA boolll 2', FieldType: 'Bool' },
    { FieldID: 'BillToState', Title: 'Bill To State', FieldType: 'MultipleStringValues' },
    { FieldID: 'TSAAttachmentTest2', Title: 'TSA Attachment Test 2', FieldType: 'String' },
];

function getFilters(json: any) {
    console.log('getFilters', json);
}

function onFormValidationChanged(status: boolean) {
    console.log('this.isformValid', status);
}

// This creates a Story for the component
const Template: Story<PepQueryBuilderComponent> = (args: PepQueryBuilderComponent) => ({
    props: {
        json: json,
        fields: fields,
        variableFields: variableFields,
        getFilters: (event) => getFilters(event),
        onFormValidationChanged: (event) => onFormValidationChanged(event),
        queryChange: action('queryChange'),
        formValidationChange: action('formValidationChange'),
    },
    template: `
        <div class="example-container" style="width: clamp(12rem, 40rem, 100vw);">
            <pep-query-builder [query]="json" [fields]="fields" [variableFields]="variableFields" (queryChange)="getFilters($event)"
                (formValidationChange)="onFormValidationChanged($event)">
            </pep-query-builder>
        </div>
    `,
});

export const Base = Template.bind({});
Base.storyName = "Query builder";
Base.args = {
    // TODO Fix `maxDepth`
    maxDepth: 5,
};
Base.decorators = [
    componentWrapperDecorator((story) => `<div style="height: 32rem;">${story}</div>`),
];
