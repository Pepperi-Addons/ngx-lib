import { html } from 'lit-html';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { withKnobs, text, select, radios } from '@storybook/addon-knobs';

import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';

import { PepButtonComponent } from '../button/button.component';
import { PepButtonModule } from '../button/button.module';

import {
    pepIconArrowRightAlt,
    pepIconArrowLeftAlt,
    pepIconNumberPlus,
    pepIconSystemBin,
    pepIconSystemEdit,
    pepIconSystemClose,
} from '@pepperi-addons/ngx-lib/icon';

// import { optionsKnob } from '@storybook/addon-knobs';
// import { OptionsKnobOptions } from '@storybook/addon-knobs/dist/components/types';

// const styleTypeOptions = {
//     weak: 'weak',
//     'weak-invert': 'weak-invert',
//     regular: 'regular',
//     strong: 'strong'
// };

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Button"
    title: 'ngx-lib/button',
    // The component related to the Stories
    component: PepButtonComponent,
    // args: {
    //     // Now all Button stories will be primary.
    //     value: true,
    // },
    argTypes: {
        // label: { control: 'text' },
        // value: { control: 'text' }, //{ control: { type: 'number', min: 0, max: 10 } },
        // formattedValue: { control: 'text' },
        styleType: {
            control: {
                type: 'radio',
                options: ['weak', 'weak-invert', 'regular', 'strong'],
            },
        },
        sizeType: {
            control: {
                type: 'radio',
                options: ['xs', 'sm', 'md', 'lg', 'xl'],
            },
        },
        iconName: {
            control: {
                type: 'select',
                options: [
                    '',
                    pepIconArrowRightAlt.name,
                    pepIconArrowLeftAlt.name,
                    pepIconNumberPlus.name,
                    pepIconSystemBin.name,
                    pepIconSystemEdit.name,
                    pepIconSystemClose.name,
                ],
            },
        },
        // placeholder: { table: { disable: true } },
        // form: { table: { disable: true } },
        // isActive: { table: { disable: true } },
        classNames: { table: { disable: true } },
        // input: { table: { disable: true } },
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepButtonModule, SBNgxHelperModule],
        }),
        // we add the withKnobs decorator in order to use it
        // withKnobs,
        // (storyFunc) => {
        //     const story = storyFunc();

        //     return {
        //         ...story,
        //         template: `<div style="width:200px">${story.template}</div>`,
        //     };
        // },
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepButtonComponent> = (args: PepButtonComponent) => ({
    component: PepButtonComponent,
    props: args,
    template: `
        <pep-button [value]="value" [styleType]="styleType" [sizeType]="sizeType" [disabled]="disabled" [iconName]="iconName" [iconPosition]="iconPosition" (buttonClick)="buttonClick($event)"></pep-button>
    `,
});

export const Base = Template.bind({});
Base.args = {
    value: 'click me',
    buttonClick: onButtonClicked,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    value: 'disabled',
};
Disabled.storyName = 'new disabled';

function onButtonClicked(event) {
    alert('tomer');
}

const templateHtml = `
    <div style="display: flex; flex-direction: column;">
        <div class="pep-spacing-element-negative">
            <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">XL</h3>
            <pep-button class="pep-spacing-element" [value]="'Weak'" [styleType]="'weak'" [sizeType]="'xl'"></pep-button>
            <pep-button class="pep-spacing-element" [value]="'Regular'" [styleType]="'regular'" [sizeType]="'xl'">
            </pep-button>
            <pep-button class="pep-spacing-element" [value]="'Strong'" [styleType]="'strong'" [sizeType]="'xl'">
            </pep-button>
        </div>
        <div class="pep-spacing-element-negative">
            <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">LG</h3>
            <pep-button class="pep-spacing-element" [value]="'Weak'" [styleType]="'weak'" [sizeType]="'lg'"></pep-button>
            <pep-button class="pep-spacing-element" [value]="'Regular'" [styleType]="'regular'" [sizeType]="'lg'">
            </pep-button>
            <pep-button class="pep-spacing-element" [value]="'Strong'" [styleType]="'strong'" [sizeType]="'lg'">
            </pep-button>
        </div>
        <div class="pep-spacing-element-negative">
            <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">MD</h3>
            <pep-button class="pep-spacing-element" [value]="'Weak'" [styleType]="'weak'" [sizeType]="'md'"></pep-button>
            <pep-button class="pep-spacing-element" [value]="'Regular'" [styleType]="'regular'" [sizeType]="'md'">
            </pep-button>
            <pep-button class="pep-spacing-element" [value]="'Strong'" [styleType]="'strong'" [sizeType]="'md'">
            </pep-button>
        </div>
        <div class="pep-spacing-element-negative">
            <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">SM</h3>
            <pep-button class="pep-spacing-element" [value]="'Weak'" [styleType]="'weak'" [sizeType]="'sm'"></pep-button>
            <pep-button class="pep-spacing-element" [value]="'Regular'" [styleType]="'regular'" [sizeType]="'sm'">
            </pep-button>
            <pep-button class="pep-spacing-element" [value]="'Strong'" [styleType]="'strong'" [sizeType]="'sm'">
            </pep-button>
        </div>
        <div class="pep-spacing-element-negative">
            <h3 class="pep-spacing-element" style="margin-bottom:0.5rem;">XS</h3>
            <pep-button class="pep-spacing-element" [value]="'Weak'" [styleType]="'weak'" [sizeType]="'xs'"></pep-button>
            <pep-button class="pep-spacing-element" [value]="'Regular'" [styleType]="'regular'" [sizeType]="'xs'">
            </pep-button>
            <pep-button class="pep-spacing-element" [value]="'Strong'" [styleType]="'strong'" [sizeType]="'xs'">
            </pep-button>
        </div>
    </div>
`;

// This creates a Story for the component
const StyleTypeTemplate: Story<PepButtonComponent> = (
    args: PepButtonComponent
) => ({
    component: PepButtonComponent,
    props: args,
    template: templateHtml,
});

export const StyleType = StyleTypeTemplate.bind({});
// StyleType.args = {
//     styleType: 'strong',
//     value: 'strong',
// };
StyleType.storyName = '3 style types';
