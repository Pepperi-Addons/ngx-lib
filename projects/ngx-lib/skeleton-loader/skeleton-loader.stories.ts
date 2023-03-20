import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSkeletonLoaderModule } from './skeleton-loader.module';
import { PepSkeletonLoaderComponent } from './skeleton-loader.component';

// This exports the Stories group for this component
export default {
    title: 'Components/skeleton-loader',
    component: PepSkeletonLoaderComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepSkeletonLoaderModule, SBNgxHelperModule],
        }),
    ],
    argTypes: {
        rowHeightType: {
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        rowsNumber: {
            description: 'The numbers of rows that the component should be on (height)',
            defaultValue: 3,
            control: {
                type: 'number',
            },
            table: {
                defaultValue: { summary: 3 },
            }
        },
        lastRowOffset: {
            description: 'If the last row is with offset',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'true' },
            }
        }
    },
    parameters: {
        controls: {
            include: [
                'rowHeightType',
                'rowsNumber',
                'lastRowOffset',
            ],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepSkeletonLoaderComponent> = (args: PepSkeletonLoaderComponent) => ({
    props: {
        ...args,
    },
    template: `
        <div style="width:200px;">
            <pep-skeleton-loader [rowHeightType]="rowHeightType" [rowsNumber]="rowsNumber" [lastRowOffset]="lastRowOffset"></pep-skeleton-loader>
        </div>
    `,
});

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    
};
