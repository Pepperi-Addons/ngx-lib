import {
    moduleMetadata,
    Story,
    Meta,
    componentWrapperDecorator,
} from '@storybook/angular';
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
    title: 'Components/Slider',
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
        xAlignment: commonArgTypes.xAlignment,
        step: {
            description: 'Set the steps in which the slider is moving',
        },
        minValue: {
            description: 'This is min value of the component',
        },
        maxValue: {
            description: 'This is the max value of the component',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'This is a slider component that is in use ',
            },
        },
        controls: {
            include: [
                'value',
                'label',
                'disabled',
                'hint',
                'minValue',
                'maxValue',
                'xAlignment',
                'step',
            ],
        },
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepSliderModule, SBNgxHelperModule],
        }),

        componentWrapperDecorator(
            (story) => `<div style="width: 16rem">${story}</div>`
        ),
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
    //     <pep-slider [label]="label" [minValue]="minValue" [maxValue]="maxValue" [value]="value" [hint]="value"></pep-slider>
    // `,
});

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    label: 'This slider',
    value: 50,
    hint: 'Tomer',
    minValue: 0,
    maxValue: 100,
};


const valueObject = {
    value: 50
};
function onValueChange(event: any) {
    const value = event?.source.key ? event.source.key : event?.source.value ? event.source.value :  event;
        
    // debugger;
    // alert(value);
    valueObject.value = value;
}


const hintTemplate: Story<PepSliderComponent> = (args: PepSliderComponent) => ({
    props: {
        ...args,
        valueObject: valueObject,
        onValueChange: (event) => onValueChange(event),
        valueChange: action('valueChange'),
        inputChange: action('inputChange'),
    },
    template: `
        <pep-slider label="test" minValue="0" maxValue="100" [value]="valueObject.value" step="10" [hint]="valueObject.value.toString()" (valueChange)="onValueChange($event)"></pep-slider>
    `,
});

export const Story2 = hintTemplate.bind({});
Story2.storyName = 'Show value, with step';
