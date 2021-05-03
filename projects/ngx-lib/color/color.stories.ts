import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';

import { PepColorComponent } from './color.component';
import { PepColorModule } from './color.module';

import { action } from '@storybook/addon-actions';
import { PepColorPickerComponent } from './color-picker.component';

// This exports the Stories group for this component
export default {
    title: 'ngx-lib/color',
    component: PepColorComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            entryComponents: [PepColorPickerComponent],
            imports: [PepColorModule, SBNgxHelperModule],
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
        value: {
            control: {
                type: 'color'
            }
        },
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
                'label', 'value', 'type', 'disabled', 'xAlignment', 'showAAComplient', 'layoutType', 'valueChange'
            ]
        }
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepColorComponent> = (args: PepColorComponent) => ({
    props: {
        ...args,
        valueChange: action('valueChange'),
    },
    template: `
        <pep-color [label]="label" [value]="value" [type]="type" [disabled]="disabled" [xAlignment]="xAlignment" 
        [showTitle]="showTitle" [showAAComplient]="showAAComplient" [layoutType]="layoutType"
        (valueChange)="valueChange($event)"></pep-color>
    `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    label: 'choose color',
    value: '#ccc'
};
