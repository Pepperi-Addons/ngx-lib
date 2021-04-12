import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { withKnobs, text, select, radios } from '@storybook/addon-knobs';

import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';

import { PepTextboxComponent } from './textbox.component';
import { PepTextboxModule } from './textbox.module';

import { optionsKnob } from '@storybook/addon-knobs';
import { OptionsKnobOptions } from '@storybook/addon-knobs/dist/components/types';

const typeOptions = {
    text: 'text',
    link: 'link',
    email: 'email',
    phone: 'phone',
    int: 'int',
    percentage: 'percentage',
    currency: 'currency',
    real: 'real',
};
const typeOptionsDisplayType: OptionsKnobOptions = {
    display: 'inline-radio',
};

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
    // argTypes: {
    //     label: { control: 'text' },
    //     value: { control: 'text' }, //{ control: { type: 'number', min: 0, max: 10 } },
    //     formattedValue: { control: 'text' },
    //     type: {
    //         control: {
    //             type: 'inline-radio',
    //             options: ['text', 'link', 'email', 'phone', 'int', 'percentage', 'currency', 'real']
    //         },
    //     },
    //     placeholder: { table: { disable: true } },
    //     form: { table: { disable: true } },
    //     isActive: { table: { disable: true } },
    //     parentFieldKey: { table: { disable: true } },
    //     input: { table: { disable: true } },
    // },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            // declarations: [PepTextboxComponent, PepTextboxValidationDirective],
            imports: [PepTextboxModule, SBNgxHelperModule],
        }),
        // we add the withKnobs decorator in order to use it
        withKnobs,
        // (storyFunc) => {
        //     const story = storyFunc();

        //     return {
        //         ...story,
        //         template: `<div style="width:200px">${story.template}</div>`,
        //     };
        // },
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepTextboxComponent> = (args: PepTextboxComponent) => ({
    component: PepTextboxComponent,
    props: args,
    template: `
        <pep-textbox [label]="label" [type]="type" [value]="value" [formattedValue]="formattedValue"></pep-textbox>
    `,
});

export const Base = Template.bind({});
Base.args = {
    label: 'text',
    value: 'some text...',
};

// Other stories could be added here as well, all you have to do is export them along!
export const withKnobsTest: Story<PepTextboxComponent> = () => ({
    component: PepTextboxComponent,
    props: {
        label: 'number',
        type: optionsKnob(
            'type',
            typeOptions,
            typeOptions.int,
            typeOptionsDisplayType
        ),
        value: text('value', '1000'),
        formattedValue: text('formattedValue', null),
    },
    template: `
        <pep-textbox [label]="label" [type]="type" [value]="value" [formattedValue]="formattedValue"></pep-textbox>
    `,
});

export const Mandatory: Story<PepTextboxComponent> = () => ({
    component: PepTextboxComponent,
    props: {
        label: 'mandatory text',
        value: text('value', 'some text...'),
        formattedValue: text('formattedValue', 'some formatted text...'),
        required: true
    },
});

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
