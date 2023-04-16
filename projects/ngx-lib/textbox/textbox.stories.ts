import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepTextboxComponent } from './textbox.component';
import { PepTextboxModule } from './textbox.module';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Textbox"
    title: 'Components/Textbox',
    // The component related to the Stories
    component: PepTextboxComponent,
    argTypes: {
        label: commonArgTypes.label,
        value: commonArgTypes.value, // { control: { type: 'number', min: 0, max: 10 } },
        // formattedValue: {
        //     description: 'This is the value of the component',
        //     control: 'text',
        //     table: {
        //         defaultValue: { summary: null },
        //     }
        // },
        xAlignment: commonArgTypes.xAlignment,
        textColor: commonArgTypes.textColor,
        disabled: commonArgTypes.disabled,
        mandatory: commonArgTypes.mandatory,
        showTitle: commonArgTypes.showTitle,
        renderTitle: commonArgTypes.renderTitle,
        renderError: commonArgTypes.renderError,
        renderSymbol: commonArgTypes.renderSymbol,
        type: {
            description: 'This is the type of the component',
            defaultValue: 'text',
            control: {
                type: 'inline-radio',
                options: [
                    'text',
                    'email',
                    'phone',
                    'int',
                    'percentage',
                    'currency',
                    'real',
                ],
            },
        },
        maxFieldCharacters: {
            description: 'Maximum characters to allow',
            // defaultValue: null,
            // table: {
            //     type: {
            //         summary: 'number',
            //         defaultValue: { summary: null },
            //     },
            // },
        },
        regex: {
            description: 'Regex validation pattern. supports field type \'text\' only.',           
            table: {
                type: {
                    summary: `string | RegExp`
                },
                defaultValue: {
                    summary: null
                }
            }            
        },
        regexError: {
            description: 'Regex invalid character error message. if not provided, a default error message will be displayed.',           
            table: {
                defaultValue: {
                    summary: '\"Invalid Character\"'
                }
            }
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
                'disabled',
                'maxFieldCharacters', // 'minValue', 'maxValue',
                'showTitle',
                'renderTitle',
                'renderError',
                'renderSymbol',
                'xAlignment',
                "regex",
                "regexError",
                'valueChange',
            ],
        },
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
    props: args,
    // template: `
    //     <pep-textbox [label]="label" [value]="value" [type]="type" [mandatory]="mandatory" [textColor]="textColor"
    //     [disabled]="disabled" [maxFieldCharacters]="maxFieldCharacters" [minValue]="minValue" [maxValue]="maxValue"
    //     [showTitle]="showTitle" [renderTitle]="renderTitle" [renderError]="renderError" [renderSymbol]="renderSymbol"
    //     [xAlignment]="xAlignment" (valueChange)="valueChange($event)"></pep-textbox>
    // `,
});

export const Base = Template.bind({});
Base.args = {
    label: 'Text',
    value: 'Not all who wander are lost',
};

export const MaxFieldCharacters = Template.bind({});
MaxFieldCharacters.storyName = "Max field characters"
MaxFieldCharacters.args = {
    label: 'Text',
    maxFieldCharacters: 7,
};

export const Email = Template.bind({});
Email.args = {
    label: 'Email',
    type: 'email',
    value: 'email@pepperi.com',
};

export const NumberInteger = Template.bind({});
NumberInteger.args = {
    label: 'Integer',
    type: 'int',
    value: '1000',
    // formattedValue: '1,000',
};

export const NumberDecimal = Template.bind({});
NumberDecimal.args = {
    label: 'decimal',
    type: 'real',
    value: '1000.50',
    // formattedValue: '1,000.50',
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

export const Phone = Template.bind({});
Phone.args = {
    label: 'Phone',
    type: 'phone',
    value: '+972-52-5555-555',
};

// TODO Add placeholder text