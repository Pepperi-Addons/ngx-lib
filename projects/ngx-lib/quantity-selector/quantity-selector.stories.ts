import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepQuantitySelectorComponent } from './quantity-selector.component';
import { PepQuantitySelectorModule } from './quantity-selector.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "QuantitySelector"
    title: 'Components/Quantity selector',
    // The component related to the Stories
    component: PepQuantitySelectorComponent,
    argTypes: {
        label: commonArgTypes.label,
        value: commonArgTypes.value,
        disabled: commonArgTypes.disabled,
        readonly: commonArgTypes.readonly,
        mandatory: commonArgTypes.mandatory,
        textColor: commonArgTypes.textColor,
        xAlignment: commonArgTypes.xAlignment,
        allowDecimal: {
            description: 'If the component is allow decimal',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'true' },
            },
        },
        styleType: {
            defaultValue: 'regular',
            table: {
                defaultValue: { summary: 'regular' },
            },
        },
        visible: commonArgTypes.visible,
        showTitle: commonArgTypes.showTitle,
        valueChange: commonArgTypes.valueChange,
        elementClick: commonArgTypes.elementClick,
    },
    parameters: {
        controls: {
            include: [
                'label',
                'value',
                'disabled',
                'readonly',
                'mandatory',
                'textColor',
                'xAlignment',
                'allowDecimal',
                'styleType',
                'visible',
                'showTitle',
                'valueChange',
                'elementClick',
            ],
        },
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepQuantitySelectorModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepQuantitySelectorComponent> = (
    args: PepQuantitySelectorComponent
) => ({
    props: {
        ...args,
        valueChange: action('valueChange'),
        elementClick: action('elementClick'),
    },
});

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    label: 'text',
    value: '18',
};

export const Story2 = Template.bind({});
Story2.storyName = 'Twist and shake';
Story2.args = {
    label: 'Kof tov',
    value: '555',
    disabled: false,
    readonly: false,
    mandatory: true,
    textColor: '#F26B6B',
    xAlignment: 'center',
    allowDecimal: false,
    styleType: 'strong',
    visible: true,
    showTitle: true,
};

export const Story3 = Template.bind({});
Story3.storyName = 'Shake and twist';
Story3.args = {
    label: '',
    value: '555',
    disabled: false,
    readonly: true,
    mandatory: true,
    xAlignment: 'center',
    allowDecimal: true,
    styleType: 'weak',
    showTitle: true,
};