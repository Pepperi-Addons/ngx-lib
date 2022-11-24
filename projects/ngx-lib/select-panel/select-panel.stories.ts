import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSelectPanelComponent } from './select-panel.component';
import { PepSelectPanelModule } from './select-panel.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/button',
    component: PepSelectPanelComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepSelectPanelModule, SBNgxHelperModule],
        }),
    ],
    // args: {
    // },
    argTypes: {
        value: commonArgTypes.value,
        visible: commonArgTypes.visible,
        disabled: commonArgTypes.disabled,
        iconPosition: {
            table: {
                defaultValue: { summary: 'end' },
            },
        },
        iconName: commonArgTypes.iconName,
        sizeType: commonArgTypes.sizeType,
        styleStateType: commonArgTypes.styleStateType,
        styleType: commonArgTypes.styleType,
        classNames: commonArgTypes.classNames,
        buttonClick: {
            action: 'buttonClick',
            control: false,
        },
    },
    parameters: {
        controls: {
            include: [
                'value',
                'visible',
                'disabled',
                'iconPosition',
                'iconName',
                'sizeType',
                'styleStateType',
                'styleType',
                'classNames',
                'buttonClick',
            ],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepSelectPanelComponent> = (args: PepSelectPanelComponent) => ({
    props: {
        ...args,
        buttonClick: action('buttonClick'),
    },
    // template: `
    //     <pep-button [value]="value" [disabled]="disabled" [styleType]="styleType" [styleStateType]="styleStateType" [sizeType]="sizeType" [iconName]="iconName"
    //     [iconPosition]="iconPosition" [visible]="visible" (buttonClick)="buttonClick($event)"></pep-button>
    // `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    value: 'click me'
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    value: 'disabled',
};

// This creates a Story for the component
const StyleTypeTemplate: Story<PepSelectPanelComponent> = (args: PepSelectPanelComponent) => ({
    props: args,
    template: `
    <div style="display: flex; flex-direction: column;">
        <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">XL</h3>
        <div class="flex pep-spacing-element-negative">
            <pep-button class="pep-spacing-element" value="Weak" styleType="weak" sizeType="xl"></pep-button>
            <pep-button class="pep-spacing-element" value="Regular" styleType="regular" sizeType="xl">
            </pep-button>
            <pep-button class="pep-spacing-element" value="Strong" styleType="strong" sizeType="xl">
            </pep-button>
        </div>
        <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">LG</h3>
        <div class="flex pep-spacing-element-negative">
            <pep-button class="pep-spacing-element" value="Weak" styleType="weak" sizeType="lg"></pep-button>
            <pep-button class="pep-spacing-element" value="Regular" styleType="regular" sizeType="lg">
            </pep-button>
            <pep-button class="pep-spacing-element" value="Strong" styleType="strong" sizeType="lg">
            </pep-button>
        </div>
        <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">MD</h3>
        <div class="flex pep-spacing-element-negative">
            <pep-button class="pep-spacing-element" value="Weak" styleType="weak" sizeType="md"></pep-button>
            <pep-button class="pep-spacing-element" value="Regular" styleType="regular" sizeType="md">
            </pep-button>
            <pep-button class="pep-spacing-element" value="Strong" styleType="strong" sizeType="md">
            </pep-button>
        </div>
        <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">SM</h3>
        <div class="flex pep-spacing-element-negative">
            <pep-button class="pep-spacing-element" value="Weak" styleType="weak" sizeType="sm"></pep-button>
            <pep-button class="pep-spacing-element" value="Regular" styleType="regular" sizeType="sm">
            </pep-button>
            <pep-button class="pep-spacing-element" value="Strong" styleType="strong" sizeType="sm">
            </pep-button>
        </div>
        <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">XS</h3>
        <div class="flex pep-spacing-element-negative">
            <pep-button class="pep-spacing-element" value="Weak" styleType="weak" sizeType="xs"></pep-button>
            <pep-button class="pep-spacing-element" value="Regular" styleType="regular" sizeType="xs">
            </pep-button>
            <pep-button class="pep-spacing-element" value="Strong" styleType="strong" sizeType="xs">
            </pep-button>
        </div>
    </div>
`,
});

export const StyleType = StyleTypeTemplate.bind({});
// StyleType.args = {
//     styleType: 'strong',
//     value: 'strong',
// };
// StyleType.argTypes = argTypesOtherStories;
StyleType.storyName = '3 style types';
StyleType.parameters = {
    // docs: { iframeHeight: 500 },
    // controls: { hideNoControlsWarning: true },
};