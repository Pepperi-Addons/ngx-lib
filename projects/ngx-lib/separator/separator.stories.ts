import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSeparatorModule } from './separator.module';
import { PepSeparatorComponent } from './separator.component';

// This exports the Stories group for this component
export default {
    title: 'Components/separator',
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
        
    },
    parameters: {
        controls: {
            include: [
                'label',
                'xAlignment',
                'visible',
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
