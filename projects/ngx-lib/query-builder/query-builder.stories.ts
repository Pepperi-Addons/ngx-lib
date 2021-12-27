import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
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
            description: 'legacy query data',
            defaultValue: null,
            control: 'object',
            table: {
                type: {
                    summary: null,//`Array<IPepQueryBuilderField>`
                }
            }
        },
        fields: {
            description: 'legacy fields',
            defaultValue: null,
            control: 'object',
            table: {
                type: {
                    summary: `Array<IPepQueryBuilderField>`
                }
            }
        }
    },
    parameters: {
        controls: {
            include: [
                'query',
                'fields',
                'queryChange',
                'formValidationChange'
            ],
        },
    },


} as Meta;

// This creates a Story for the component
const Template: Story<PepQueryBuilderComponent> = (args) => ({
    props: {
        ...args
    },
    template: `
    <pep-query-builder [query]="query" [fields]="fields" (queryChange)="onQueryChange($event)"
    (formValidationChange)="onValidationChange($event)"></pep-query-builder>
`,

});

export const Base = Template.bind({});
Base.storyName = "Basic";
Base.args = {
    label: 'query builder'
};
