import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepCheckboxComponent } from './checkbox.component';
import { PepCheckboxModule } from './checkbox.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/checkbox',
    component: PepCheckboxComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepCheckboxModule, SBNgxHelperModule],
        }),
    ],
    argTypes: {
        label: commonArgTypes.label,
        value: commonArgTypes.value,
        visible: commonArgTypes.visible,
        xAlignment: commonArgTypes.xAlignment,
        disabled: commonArgTypes.disabled,
        mandatory: commonArgTypes.mandatory,
        showTitle: commonArgTypes.showTitle,
        renderTitle: commonArgTypes.renderTitle,
        type: {
            description: 'This is the type of the component',
            defaultValue: 'checkbox',
            control: {
                type: 'radio',
                options: ['checkbox', 'booleanText'],
            },
            table: {
                type: {
                    summary: 'checkbox | booleanText',
                    // detail: 'something really really long',
                },
                defaultValue: { summary: 'checkbox' },
            },
        },
        additionalValue: {
            description: 'This is an object that represent "CheckedText" and "UncheckedText"',
            control: 'object',
            table: {
                type: {
                    summary: ` {
                        CheckedText: "❤"
                        UncheckedText: "💛"
                    }`,
                    // detail: 'something really really long',
                },
                defaultValue: { summary: null },
            }
        }
    },
    parameters: {
        controls: {
            include: [
                'label', 'value', 'type', 'mandatory', 'disabled', 'xAlignment',
                'additionalValue', 'showTitle', 'renderTitle', 'visible', 'valueChange'
            ]
        }
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepCheckboxComponent> = (args: PepCheckboxComponent) => ({
    props: {
        ...args,
        valueChange: action('valueChange'),
    },
    template: `
        <pep-checkbox [label]="label" [value]="value" [type]="type" [mandatory]="mandatory" [disabled]="disabled" [xAlignment]="xAlignment" 
        [additionalValue]="additionalValue" [showTitle]="showTitle" [renderTitle]="renderTitle" [visible]="visible"
        (valueChange)="valueChange($event)"></pep-checkbox>
    `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    label: 'check box',
    value: 'true',
    additionalValue: { "CheckedText": "❤", "UncheckedText": "💛" }
};
