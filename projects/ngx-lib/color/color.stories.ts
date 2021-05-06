import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepColorComponent } from './color.component';
import { PepColorModule } from './color.module';

import { PepColorPickerComponent } from './color-picker.component';

// This exports the Stories group for this component
export default {
    title: 'Components/color',
    component: PepColorComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            entryComponents: [PepColorPickerComponent],
            imports: [PepColorModule, SBNgxHelperModule],
        }),
    ],
    argTypes: {
        label: commonArgTypes.label,
        value: {
            description: 'The value of the component (Hex color like #ccc)', // TODO: change required to mandatory',
            control: {
                type: 'color'
            }
        },
        disabled: commonArgTypes.disabled,
        xAlignment: commonArgTypes.xAlignment,
        showTitle: commonArgTypes.showTitle,
        type: {
            description: 'This is the type of the component',
            defaultValue: 'any',
            control: {
                type: 'radio',
                options: ['any', 'main', 'success', 'caution'],
            },
            table: {
                defaultValue: { summary: 'any' },
            },
        },
        showAAComplient: {
            description: 'If the component should fix color by AA complient',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'true' },
            }
        },
        valueChange: commonArgTypes.valueChange
    },
    parameters: {
        controls: {
            include: [
                'label', 'value', 'type', 'disabled', 'xAlignment', 'showTitle', 'showAAComplient', 'valueChange'
            ]
        }
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepColorComponent> = (args: PepColorComponent) => ({
    props: {
        ...args,
        // valueChange: action('valueChange'),
    },
    template: `
        <pep-color [label]="label" [value]="value" [type]="type" [disabled]="disabled" [xAlignment]="xAlignment" 
        [showTitle]="showTitle" [showAAComplient]="showAAComplient" (valueChange)="valueChange($event)"></pep-color>
    `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    label: 'choose color',
    value: '#ccc'
};
