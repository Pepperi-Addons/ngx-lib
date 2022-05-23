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
    title: 'Components/quantity-selector',
    // The component related to the Stories
    component: PepQuantitySelectorComponent,
    args: {
        rowSpan: 2,
    },
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
        rowSpan: commonArgTypes.rowSpan,
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
                'rowSpan',
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
    // template: `
    //     <pep-quantity-selector [label]="label" [value]="value" [disabled]="disabled" [readonly]="readonly" [mandatory]="mandatory" [textColor]="textColor"
    //     [xAlignment]="xAlignment" [allowDecimal]="allowDecimal" [styleType]="styleType" [visible]="visible" [showTitle]="showTitle" [rowSpan]="rowSpan"
    //     (valueChange)="valueChange($event)" (elementClick)="elementClick($event)"></pep-quantity-selector>
    // `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    label: 'text',
    value: '18',
};
