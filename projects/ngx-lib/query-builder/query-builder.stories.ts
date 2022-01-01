import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { action } from '@storybook/addon-actions';
import { PepQueryBuilderModule } from './query-builder.module';
import { PepQueryBuilderService } from './query-builder.service';
import { PepQueryBuilderComponent } from './query-builder.component';


export default {
    title: 'Components/query-builder',
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

// This creates a Story for the component

const Template: Story<PepQueryBuilderComponent> = (args: PepQueryBuilderComponent) => ({
    props: {
        queryChange: action('queryChange'),
        formValidationChange: action('formValidationChange'),
    },
    template: `
    <pep-query-builder [query]="query" [fields]="fields" [maxDepth]="maxDepth" (queryChange)="queryChange($event)"
    (formValidationChange)="formValidationChange($event)"></pep-query-builder>
    `,
});

export const Base = Template.bind({});
Base.storyName = "Basic";

