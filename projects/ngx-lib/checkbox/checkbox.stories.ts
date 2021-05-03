import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';

import { PepCheckboxComponent } from './checkbox.component';
import { PepCheckboxModule } from './checkbox.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'ngx-lib/checkbox',
    component: PepCheckboxComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepCheckboxModule, SBNgxHelperModule],
        }),
    ],
    args: {
        visible: true,
    },
    argTypes: {
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
        type: {
            description: 'This is the type of the component',
            defaultValue: 'checkbox',
            control: {
                type: 'radio',
                options: ['checkbox', 'booleanText'],
            },
            table: {
                defaultValue: { summary: 'checkbox' },
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
    },
    parameters: {
        controls: {
            include: [
                'label', 'value', 'type', 'required', 'disabled', 'xAlignment',
                'additionalValue', 'showTitle', 'renderTitle', 'layoutType', 'visible', 'valueChange'
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
        <pep-checkbox [label]="label" [value]="value" [type]="type" [required]="required" [disabled]="disabled" [xAlignment]="xAlignment" 
        [additionalValue]="additionalValue" [showTitle]="showTitle" [renderTitle]="renderTitle" [layoutType]="layoutType" [visible]="visible"
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
