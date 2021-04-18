import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
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

// This exports the Stories group for this component
export default {
    title: 'ngx-lib/button',
    component: PepButtonComponent,
    argTypes: {
        key: { table: { disable: true } },
        value: { control: 'text' },
        styleType: {
            description: 'This is the style type of the button',
            defaultValue: 'weak',
            control: {
                type: 'radio',
                options: ['weak', 'regular', 'strong'],
            },
            table: {
                type: {
                    summary: 'something short',
                    detail: 'something really really long'
                },
                defaultValue: { summary: 'weak' },
            }
        },
        sizeType: {
            control: {
                type: 'radio',
                options: ['xs', 'sm', 'md', 'lg', 'xl'],
            },
        },
        classNames: { table: { disable: true } },
        disabled: { control: 'boolean' },
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
        buttonClick: { action: 'buttonClick' },
        ngOnDestroy: { table: { disable: true } },
        onButtonClicked: { table: { disable: true } },
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepButtonModule, SBNgxHelperModule],
        }),
        // (storyFunc) => {
        //     const story = storyFunc();

        //     return {
        //         ...story,
        //         template: `<div style="width:200px; background:blue;">${story.template}</div>`,
        //     };
        // },
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepButtonComponent> = (args: PepButtonComponent) => ({
    component: PepButtonComponent,
    props: args,
    template: `
        <pep-button [value]="value" [styleType]="styleType" [sizeType]="sizeType" [disabled]="disabled" [iconName]="iconName"
        [iconPosition]="iconPosition" (buttonClick)="buttonClick($event)"></pep-button>
    `,
});

export const Base = Template.bind({});
Base.storyName = "Basic";
Base.args = {
    value: 'click me',
};
// Base.parameters = {
//     controls: {
//         include: ['value']
//     },
//     hideNoControlsWarning: false
// };

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    value: 'disabled',
    buttonClick: onButtonClicked,
};
Disabled.storyName = 'new disabled';

function onButtonClicked(event) {
    alert('tomer');
}

// This creates a Story for the component
const StyleTypeTemplate: Story<PepButtonComponent> = (
    args: PepButtonComponent
) => ({
    component: PepButtonComponent,
    props: args,
    template: `
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
`,
});

export const StyleType = StyleTypeTemplate.bind({});
// StyleType.args = {
//     styleType: 'strong',
//     value: 'strong',
// };
StyleType.storyName = '3 style types';
StyleType.parameters = {
    controls: { hideNoControlsWarning: true },
};