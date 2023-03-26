import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSkeletonLoaderModule } from './skeleton-loader.module';
import { PepSkeletonLoaderComponent } from './skeleton-loader.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Skeleton loader',
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
        docs: {
			description: {
				component: 'Used as a placeholder for dynamic data. **Keep in mind** -> the _skeleton loader_ width is 100%, so you need a parent to set it. The _skeleton loader_ will only "set" the height. Good use case is to set the height of a _dialog_ showing dynamic data being retrieved',
			},
		},
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
});

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.decorators = [
    componentWrapperDecorator((story) => `<div style="width: clamp(12rem, 24rem, 100vw);">${story}</div>`),
];
export const Story2 = Template.bind({});
Story2.storyName = 'Bigger loader';
Story2.args = {
    rowHeightType: "xl",
    rowsNumber: 4,
    lastRowOffset: false,
};
Story2.parameters = {
    docs: {
        description: {
            story: 'A bigger loader without an offset at the last row',
        },
    },  
};
Story2.decorators = [
    componentWrapperDecorator((story) => `<div style="width: clamp(12rem, 48rem, 100vw);">${story}</div>`),
];