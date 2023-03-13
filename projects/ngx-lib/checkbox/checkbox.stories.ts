import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepCheckboxComponent } from './checkbox.component';
import { PepCheckboxModule } from './checkbox.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/Checkbox',
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
            defaultValue: 'Check this out',
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
            description:
                'This is an object that represent "CheckedText" and "UncheckedText"',
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
            },
        },
    },
    parameters: {
        controls: {
            include: [
                'label',
                'value',
                'type',
                'mandatory',
                'disabled',
                'xAlignment',
                'additionalValue',
                'showTitle',
                'renderTitle',
                'visible',
                'valueChange',
            ],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepCheckboxComponent> = (args: PepCheckboxComponent) => ({
    props: {
        ...args,
        valueChange: action('valueChange'),
    },
    // template: `
    //     <pep-checkbox [label]="label" [value]="value" [type]="type" [mandatory]="mandatory" [disabled]="disabled" [xAlignment]="xAlignment" 
    //     [additionalValue]="additionalValue" [showTitle]="showTitle" [renderTitle]="renderTitle" [visible]="visible"
    //     (valueChange)="valueChange($event)"></pep-checkbox>
    // `,
});

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    label: 'Check this out → Why is "value" a sting and not a boolean? Why no title? Then why show "renderTitle" & "showTitle?"',
    value: 'true',  
    additionalValue: { CheckedText: '❤', UncheckedText: '💛' },
};

export const Story2 = Template.bind({});
Story2.storyName = 'No label';
Story2.args = {
    value: 'true',  
};

export const Story3 = Template.bind({});
Story3.storyName = 'Disabled & checked';
Story3.args = {
    label: 'Disabled & checked',
    value: 'true', 
    disabled: true, 
};

export const Story4 = Template.bind({});
Story4.storyName = 'Disabled & unchecked';
Story4.args = {
    label: 'Disabled & unchecked',
    value: 'false', 
    disabled: true, 
};

export const Story5 = Template.bind({});
Story5.storyName = 'Flipped & mandatory';
Story5.args = {
    label: 'Flipped & mandatory',
    value: 'true',  
    mandatory: true,
    xAlignment: "right",
};
