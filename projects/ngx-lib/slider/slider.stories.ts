import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSliderComponent } from './slider.component';
import { PepSliderModule } from './slider.module';

import { action } from '@storybook/addon-actions';

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
        label: commonArgTypes.label,
        disabled: commonArgTypes.disabled,
        hint: commonArgTypes.hint,
        minValue: {
            description: 'This is min value of the component',
        },
        maxValue: {
            description: 'This is the max value of the component',
        },
    },
    parameters: {
        controls: {
            include: [
                'value',
                'label',
                'disabled',
                'hint',
                'minValue',
                'maxValue',
            ],
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
    props: {
        ...args,
        valueChange: action('valueChange'),
        inputChange: action('inputChange'),
    },
    // template: `
    //     <pep-slider [value]="value"></pep-slider>
    // `,
});

export const Base = Template.bind({});
Base.args = {
    value: 50,
    hint: 'percentage',
    minValue: 0,
    maxValue: 100,
};
