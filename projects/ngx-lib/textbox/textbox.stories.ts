import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';

import { PepTextboxComponent } from './textbox.component';
import { PepTextboxModule } from './textbox.module';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Textbox"
    title: 'ngx-lib/textbox',
    // The component related to the Stories
    component: PepTextboxComponent,
    // args: {
    //     // Now all Button stories will be primary.
    //     value: true,
    // },
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' }, //{ control: { type: 'number', min: 0, max: 10 } },
        type: {
            control: {
                type: 'inline-radio',
                options: [
                    'text',
                    'link',
                    'email',
                    'phone',
                    'int',
                    'percentage',
                    'currency',
                    'real',
                ],
            },
        },
        layoutType: {
            description: 'This is the layout type of the component',
            defaultValue: 'form',
            control: {
                type: 'radio',
                options: ['form', 'card', 'table'],
            },
            table: {
                type: {
                    summary: 'something short',
                    detail: 'something really really long',
                },
                defaultValue: { summary: 'form' },
            },
        },
        xAlignment: {
            description: 'This is the x alignment of the component',
            defaultValue: 'left',
            control: {
                type: 'radio',
                options: ['left', 'center', 'right'],
            },
        },
        textColor: {
            control: {
                type: 'color',
            },
        },
        valueChange: { action: 'valueChange' },
    },
    parameters: {
        controls: {
            include: [
                'label', 'value', 'type', 'required', 'textColor', 'disabled', 'maxFieldCharacters', // 'minValue', 'maxValue',
                'showTitle', 'renderTitle', 'renderError', 'renderSymbol', 'layoutType', 'xAlignment', 'valueChange'
            ]
        }
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepTextboxModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepTextboxComponent> = (args: PepTextboxComponent) => ({
    // component: PepTextboxComponent,
    props: args,
    template: `
        <pep-textbox [label]="label" [value]="value" [type]="type" [required]="required" [textColor]="textColor"
        [disabled]="disabled" [maxFieldCharacters]="maxFieldCharacters" [minValue]="minValue" [maxValue]="maxValue"
        [showTitle]="showTitle" [renderTitle]="renderTitle" [renderError]="renderError" [renderSymbol]="renderSymbol"
        [layoutType]="layoutType" [xAlignment]="xAlignment" (valueChange)="valueChange($event)"></pep-textbox>
    `
});

export const Base = Template.bind({});
Base.args = {
    label: 'text',
    value: 'some text...',
};

export const Email = Template.bind({});
Email.args = {
    label: 'email',
    type: 'email',
    value: 'email@pepperi.com',
};

export const NumberInteger = Template.bind({});
NumberInteger.args = {
    label: 'int',
    type: 'int',
    value: '1000',
    formattedValue: '1,000',
};

export const NumberDecimal = Template.bind({});
NumberDecimal.args = {
    label: 'decimal',
    type: 'real',
    value: '1000.50',
    formattedValue: '1,000.50',
};

export const Currency = Template.bind({});
Currency.args = {
    label: 'currency',
    type: 'currency',
    value: '99.90',
};

export const Percentage = Template.bind({});
Percentage.args = {
    label: 'percentage',
    type: 'percentage',
    value: '90',
};

export const Link = Template.bind({});
Link.args = {
    label: 'link',
    type: 'link',
    value: 'http://www.google.com',
    formattedValue: 'google',
    // disabled: true
};

export const Phone = Template.bind({});
Phone.args = {
    label: 'phone',
    type: 'phone',
    value: '+972-52-5555-555',
};
