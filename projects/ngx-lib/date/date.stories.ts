import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepDateComponent } from './date.component';
import { PepDateModule } from './date.module';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Date"
    title: 'Components/date',
    // The component related to the Stories
    component: PepDateComponent,
    // args: {
    //     // Now all Button stories will be primary.
    //     type: 'date',
    // },
    argTypes: {
        label: commonArgTypes.label,
        value: commonArgTypes.value,
        disabled: commonArgTypes.disabled,
        xAlignment: commonArgTypes.xAlignment,
        textColor: commonArgTypes.textColor,
        mandatory: commonArgTypes.mandatory,
        showTitle: commonArgTypes.showTitle,
        renderTitle: commonArgTypes.renderTitle,
        renderError: commonArgTypes.renderError,
        renderSymbol: commonArgTypes.renderSymbol,
        type: {
            description: 'This is the type of the component',
            defaultValue: 'date',
            control: {
                type: 'inline-radio',
                options: ['date', 'datetime'],
            },
            table: {
                type: {
                    summary: 'date | datetime',
                },
                defaultValue: { summary: 'date' },
            },
        },
        valueChange: commonArgTypes.valueChange,
    },
    parameters: {
        controls: {
            include: [
                'label',
                'value',
                'type',
                'mandatory',
                'textColor',
                'disabled', // 'minDateValue', 'maxDateValue', 'minValue', 'maxValue',
                'showTitle',
                'renderTitle',
                'renderError',
                'renderSymbol',
                'xAlignment',
                'valueChange',
            ],
        },
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepDateModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepDateComponent> = (args: PepDateComponent) => ({
    props: args,
    template: `
        <pep-date [label]="label" [value]="value" [type]="type" [mandatory]="mandatory" [textColor]="textColor"
        [disabled]="disabled" [minDateValue]="minDateValue" [maxDateValue]="maxDateValue" [minValue]="minValue" [maxValue]="maxValue"
        [showTitle]="showTitle" [renderTitle]="renderTitle" [renderError]="renderError" [renderSymbol]="renderSymbol"
        [xAlignment]="xAlignment" (valueChange)="valueChange($event)"></pep-date>
    `,
});

export const Base = Template.bind({});
Base.args = {
    label: 'date',
    value: '2020-1-1',
};

export const DateTime = Template.bind({});
DateTime.args = {
    label: 'date time',
    type: 'datetime',
    value: '2020-1-1 12:00',
};

// export const NumberInteger = Template.bind({});
// NumberInteger.args = {
//     label: 'int',
//     type: 'int',
//     value: '1000',
//     formattedValue: '1,000',
// };

// export const NumberDecimal = Template.bind({});
// NumberDecimal.args = {
//     label: 'decimal',
//     type: 'real',
//     value: '1000.50',
//     formattedValue: '1,000.50',
// };

// export const Currency = Template.bind({});
// Currency.args = {
//     label: 'currency',
//     type: 'currency',
//     value: '99.90',
// };

// export const Percentage = Template.bind({});
// Percentage.args = {
//     label: 'percentage',
//     type: 'percentage',
//     value: '90',
// };

// export const Link = Template.bind({});
// Link.args = {
//     label: 'link',
//     type: 'link',
//     value: 'http://www.google.com',
//     formattedValue: 'google',
//     // disabled: true
// };

// export const Phone = Template.bind({});
// Phone.args = {
//     label: 'phone',
//     type: 'phone',
//     value: '+972-52-5555-555',
// };
