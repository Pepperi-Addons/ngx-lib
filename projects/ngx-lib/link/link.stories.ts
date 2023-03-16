import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepLinkComponent } from './link.component';
import { PepLinkModule } from './link.module';
import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/link',
    // The component related to the Stories
    component: PepLinkComponent,
    argTypes: {
        label: commonArgTypes.label,
        value: commonArgTypes.value, 
        displayValue: {
            description: 'This is the display value of the component',
            control: 'text',
            table: {
                defaultValue: { summary: null },
            }
        },
        xAlignment: commonArgTypes.xAlignment,
        textColor: commonArgTypes.textColor,
        disabled: commonArgTypes.disabled,
        mandatory: commonArgTypes.mandatory,
        showTitle: commonArgTypes.showTitle,
        renderTitle: commonArgTypes.renderTitle,
        renderError: commonArgTypes.renderError,
        renderSymbol: commonArgTypes.renderSymbol,
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
        valueChange: commonArgTypes.valueChange,
        elementClick: commonArgTypes.elementClick,
    },
    parameters: {
        controls: {
            include: [
                'label',
                'value',
                'displayValue',
                'mandatory',
                'textColor',
                'disabled',
                'maxFieldCharacters', // 'minValue', 'maxValue',
                'showTitle',
                'renderTitle',
                'renderError',
                'renderSymbol',
                'xAlignment',
                'valueChange',
                'elementClick'
            ],
        },
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepLinkModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepLinkComponent> = (args: PepLinkComponent) => ({
    props: args,
    buttonClick: action('buttonClick'),
    elementClick: action('elementClick'),
});

export const Base = Template.bind({});
Base.args = {
    label: 'link',
    displayValue: 'go to google',
    value: 'http://www.google.com',
};

export const Link = Template.bind({});
Link.args = {
    label: 'link',
    displayValue: 'go to google 2',
    value: 'http://www.google.com',
    // disabled: true
};