import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSeparatorModule } from './separator.module';
import { PepSeparatorComponent } from './separator.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Separator',
    component: PepSeparatorComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepSeparatorModule, SBNgxHelperModule],
        }),
    ],
    argTypes: {
        label: commonArgTypes.label,
        xAlignment: commonArgTypes.xAlignment,
        visible: commonArgTypes.visible,
        layoutType: {
            description: 'This is the layout type of the component',
            defaultValue: 'form',
            control: {
                type: 'radio',
                options: ['form', 'card', 'table'],
            },
        },
    },
    parameters: {
        controls: {
            include: [
                'label',
                'xAlignment',
                'visible',
                'layoutType',
            ],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepSeparatorComponent> = (args: PepSeparatorComponent) => ({
    props: {
        ...args,
    },
});

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    label: 'Separator',
};
Story1.decorators = [
    componentWrapperDecorator((story) => `<div style="width: 16rem;">${story}</div>`),
];

export const Story2 = Template.bind({});
Story2.storyName = 'RTL';
Story2.args = {
    label: 'מפריד',
    xAlignment: 'right'
};
Story2.decorators = [
    componentWrapperDecorator((story) => `<div style="width: 16rem;">${story}</div>`),
];
