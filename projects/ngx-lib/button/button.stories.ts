import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';

import { PepButtonComponent } from './button.component';
import { PepButtonModule } from './button.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'ngx-lib/button',
    component: PepButtonComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepButtonModule, SBNgxHelperModule],
        }),
    ],
    args: {
        visible: true,
        // disabled: 'false',
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepButtonComponent> = (args: PepButtonComponent) => ({
    props: {
        ...args,
        buttonClick: action('buttonClick'),
    },
    template: `
        <pep-button [value]="value" [disabled]="disabled" [styleType]="styleType" [styleStateType]="styleStateType" [sizeType]="sizeType" [iconName]="iconName"
        [iconPosition]="iconPosition" [visible]="visible" (buttonClick)="buttonClick($event)"></pep-button>
    `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    // visible: true,
    value: 'click me',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    value: 'disabled',
    // buttonClick: onButtonClicked,
};

// This creates a Story for the component
const StyleTypeTemplate: Story<PepButtonComponent> = (
    args: PepButtonComponent
) => ({
    props: args,
    template: `
    <div style="display: flex; flex-direction: column;">
        <div class="pep-spacing-element-negative">
            <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">XL</h3>
            <pep-button class="pep-spacing-element" value="Weak" styleType="weak" sizeType="xl"></pep-button>
            <pep-button class="pep-spacing-element" value="Regular" styleType="regular" sizeType="xl">
            </pep-button>
            <pep-button class="pep-spacing-element" value="Strong" styleType="strong" sizeType="xl">
            </pep-button>
        </div>
        <div class="pep-spacing-element-negative">
            <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">LG</h3>
            <pep-button class="pep-spacing-element" value="Weak" styleType="weak" sizeType="lg"></pep-button>
            <pep-button class="pep-spacing-element" value="Regular" styleType="regular" sizeType="lg">
            </pep-button>
            <pep-button class="pep-spacing-element" value="Strong" styleType="strong" sizeType="lg">
            </pep-button>
        </div>
        <div class="pep-spacing-element-negative">
            <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">MD</h3>
            <pep-button class="pep-spacing-element" value="Weak" styleType="weak" sizeType="md"></pep-button>
            <pep-button class="pep-spacing-element" value="Regular" styleType="regular" sizeType="md">
            </pep-button>
            <pep-button class="pep-spacing-element" value="Strong" styleType="strong" sizeType="md">
            </pep-button>
        </div>
        <div class="pep-spacing-element-negative">
            <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">SM</h3>
            <pep-button class="pep-spacing-element" value="Weak" styleType="weak" sizeType="sm"></pep-button>
            <pep-button class="pep-spacing-element" value="Regular" styleType="regular" sizeType="sm">
            </pep-button>
            <pep-button class="pep-spacing-element" value="Strong" styleType="strong" sizeType="sm">
            </pep-button>
        </div>
        <div class="pep-spacing-element-negative">
            <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">XS</h3>
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
    docs: { iframeHeight: 500 },
    controls: { hideNoControlsWarning: true },
};
