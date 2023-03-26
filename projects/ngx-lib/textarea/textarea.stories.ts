import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepTextareaComponent } from './textarea.component';
import { PepTextareaModule } from './textarea.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "textarea"
    title: 'Components/Textarea',
    // The component related to the Stories
    component: PepTextareaComponent,
    args: {
        rowSpan: 2,
    },
    argTypes: {
        label: commonArgTypes.label,
        value: commonArgTypes.value, // { control: { type: 'number', min: 0, max: 10 } },
        xAlignment: commonArgTypes.xAlignment,
        textColor: commonArgTypes.textColor,
        disabled: commonArgTypes.disabled,
        mandatory: commonArgTypes.mandatory,
        showTitle: commonArgTypes.showTitle,
        visible: commonArgTypes.visible,
        maxFieldCharacters: {
            description: 'Maximum characters to allow',
        },
        rowSpan: commonArgTypes.rowSpan,
        valueChange: commonArgTypes.valueChange,
    },
    parameters: {
        controls: {
            include: [
                'label',
                'value',
                'mandatory',
                'disabled',
                'maxFieldCharacters',
                'textColor',
                'xAlignment',
                'rowSpan',
                'visible',
                'showTitle',
                'valueChange',
            ],
        },
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepTextareaModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepTextareaComponent> = (args: PepTextareaComponent) => ({
    props: {
        ...args,
        valueChange: action('valueChange'),
    },
    // template: `
    //     <pep-textarea [label]="label" [value]="value" [mandatory]="mandatory" [disabled]="disabled" [maxFieldCharacters]="maxFieldCharacters" [textColor]="textColor"
    //     [xAlignment]="xAlignment"  [rowSpan]="rowSpan" [visible]="visible" [showTitle]="showTitle" (valueChange)="valueChange($event)"></pep-textarea>
    // `,
});

const thisValue = `A: Would you tell me, please, which way I ought to go from here?
CC: That depends a good deal on where you want to get to
A: I don’t much care where
CC: Then it doesn’t matter which way you go`;

export const Story1 = Template.bind({});
Story1.storyName = "Basic",
Story1.args = {
    label: 'Textarea',
    value: thisValue,
};

export const Story2 = Template.bind({});
Story2.storyName = "Max field characters",
Story2.args = {
    label: 'Textarea',
    maxFieldCharacters: 7,
};

export const Story3 = Template.bind({});
Story3.storyName = "Disabled",
Story3.args = {
    label: 'Textarea',
    value: thisValue,
    rowSpan: 4,
    disabled: true,
};
