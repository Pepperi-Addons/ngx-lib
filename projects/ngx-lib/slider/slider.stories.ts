import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSliderComponent } from './slider.component';
import { PepSliderModule } from './slider.module';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Slider"
    title: 'Components/slider',
    // The component related to the Stories
    component: PepSliderComponent,
    argTypes: {
        triggerOn: {
            table: {
                defaultValue: { summary: 'click' },
            },
        },
        value: commonArgTypes.value,
    },
    parameters: {
        controls: {
            include: ['value'],
        },
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepSliderModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepSliderComponent> = (args: PepSliderComponent) => ({
    props: args,
    template: `
        <pep-slider [value]="value"></pep-slider>
    `,
});

export const Base = Template.bind({});
Base.args = {
    value: '',
};
