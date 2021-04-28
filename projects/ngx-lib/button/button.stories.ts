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
    title: 'Components/Button',
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
                    detail: 'something really really long',
                },
                defaultValue: { summary: 'weak' },
            },
        },
        sizeType: {
            control: {
                type: 'select',
                options: ['xs', 'sm', 'md', 'lg', 'xl'],
            },
        },
        styleStateType: {
            description: 'This uses the colors set by the Theme Editor',
            defaultValue: 'system',
            control: {
                type: 'radio',
                options: ['system', 'caution', 'success'],
            },
            table: {
                defaultValue: { summary: 'system' },
            },
        },
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
        })
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepButtonComponent> = (args: PepButtonComponent) => ({
    component: PepButtonComponent,
    props: args,
    template: `
        <pep-button [value]="value" [styleStateType]="styleStateType" [styleType]="styleType" [sizeType]="sizeType" [disabled]="disabled" [iconName]="iconName"
        [iconPosition]="iconPosition" (buttonClick)="buttonClick($event)"></pep-button>
    `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    value: 'Click Me!',
};
Base.parameters = {
    docs: {
        source: {
            code: `
// Code for a basic button 🎉
<pep-button 
    value="Click Me!" 
    styleType="weak" 
    sizeType="md">
</pep-button>`,
        },
    },
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    value: 'Click Me!',
    buttonClick: onButtonClicked,
};
Disabled.storyName = 'A disabled button';
Disabled.parameters = {
    docs: {
        source: {
            code: `
// To disable a button use the [disabled] property 
// In this example the button is disabled if the 'showLoadingGif' function in running
<pep-button 
    value="Click Me!" 
    styleType="weak" 
    [disabled]="showLoadingGif()"
    sizeType="md">
</pep-button>`,
        },
    },
};

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
        <div id="button-vars">
            <h3 style="margin: 1em 0 0.5em 0; font-size: 180%; ">X-Large</h3>
            <div style="display: flex; gap: 0.5em;">
                <pep-button [value]="'Weak'" [styleType]="'weak'" [sizeType]="'xl'"></pep-button>
                <pep-button [value]="'Regular'" [styleType]="'regular'" [sizeType]="'xl'"></pep-button>
                <pep-button [value]="'Strong'" [styleType]="'strong'" [sizeType]="'xl'"></pep-button>
            </div>
        </div>
        
        <div id="button-vars">
            <h3 style="margin: 1em 0 0.5em 0; font-size: 180%; ">X-Large</h3>
            <div style="display: flex; gap: 0.5em;">
                <pep-button [value]="'Weak'" [styleType]="'weak'" [sizeType]="'lg'"></pep-button>
                <pep-button [value]="'Regular'" [styleType]="'regular'" [sizeType]="'lg'"></pep-button>
                <pep-button [value]="'Strong'" [styleType]="'strong'" [sizeType]="'lg'"></pep-button>
            </div>
        </div>
        
        <div id="button-vars">
            <h3 style="margin: 1em 0 0.5em 0; font-size: 180%; ">X-Large</h3>
            <div style="display: flex; gap: 0.5em;">
                <pep-button [value]="'Weak'" [styleType]="'weak'" [sizeType]="'md'"></pep-button>
                <pep-button [value]="'Regular'" [styleType]="'regular'" [sizeType]="'md'"></pep-button>
                <pep-button [value]="'Strong'" [styleType]="'strong'" [sizeType]="'md'"></pep-button>
            </div>
        </div>
        
        <div id="button-vars">
            <h3 style="margin: 1em 0 0.5em 0; font-size: 180%; ">X-Large</h3>
            <div style="display: flex; gap: 0.5em;">
                <pep-button [value]="'Weak'" [styleType]="'weak'" [sizeType]="'sm'"></pep-button>
                <pep-button [value]="'Regular'" [styleType]="'regular'" [sizeType]="'sm'"></pep-button>
                <pep-button [value]="'Strong'" [styleType]="'strong'" [sizeType]="'sm'"></pep-button>
            </div>
        </div>
        
        <div id="button-vars">
            <h3 style="margin: 1em 0 0.5em 0; font-size: 180%; ">X-Large</h3>
            <div style="display: flex; gap: 0.5em;">
                <pep-button [value]="'Weak'" [styleType]="'weak'" [sizeType]="'xs'"></pep-button>
                <pep-button [value]="'Regular'" [styleType]="'regular'" [sizeType]="'xs'"></pep-button>
                <pep-button [value]="'Strong'" [styleType]="'strong'" [sizeType]="'xs'"></pep-button>
            </div>
        </div>
    </div>
`,
});
export const StyleType = StyleTypeTemplate.bind({});
StyleType.storyName = 'Style types (over size)';
StyleType.parameters = {
    controls: { hideNoControlsWarning: true },
};

const iconVarTemplate: Story<PepButtonComponent> = (
    args: PepButtonComponent
) => ({
    component: PepButtonComponent,
    props: args,
    template: `
    <div style="display: flex; flex-direction: column;">
        <div id="button-icon-vars">
            <h3 style="margin: 1em 0 0.5em 0; font-size: 180%; ">X-Large</h3>
            <div style="display: flex; gap: 0.5em;">
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'xl'"></pep-button>
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'xl'" [iconName]="'number_plus'"></pep-button>
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'xl'" [iconName]="'number_plus'" [iconPosition]="'start'"></pep-button>
                <pep-button [styleType]="'weak'" [sizeType]="'xl'" [iconName]="'number_plus'"></pep-button>
            </div>
        </div>
        <div id="button-icon-vars">
            <h3 style="margin: 1em 0 0.5em 0; font-size: 165%;">Large</h3>
            <div style="display: flex; gap: 0.5em;">
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'lg'"></pep-button>
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'lg'" [iconName]="'number_plus'"></pep-button>
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'lg'" [iconName]="'number_plus'" [iconPosition]="'start'"></pep-button>
                <pep-button [styleType]="'weak'" [sizeType]="'lg'" [iconName]="'number_plus'"></pep-button>
            </div>
        </div>
        <div id="button-icon-vars">
            <h3 style="margin: 1em 0 0.5em 0; font-size: 145%;">Medium</h3>
            <div style="display: flex; gap: 0.5em;">
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'md'"></pep-button>
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'md'" [iconName]="'number_plus'"></pep-button>
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'md'" [iconName]="'number_plus'" [iconPosition]="'start'"></pep-button>
                <pep-button [styleType]="'weak'" [sizeType]="'md'" [iconName]="'number_plus'"></pep-button>
            </div>
        </div>
        <div id="button-icon-vars">
            <h3 style="margin: 1em 0 0.5em 0; font-size: 120%;">Small</h3>
            <div style="display: flex; gap: 0.5em;">
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'sm'"></pep-button>
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'sm'" [iconName]="'number_plus'"></pep-button>
                <pep-button [value]="'Button'" [styleType]="'weak'" [sizeType]="'sm'" [iconName]="'number_plus'" [iconPosition]="'start'"></pep-button>
                <pep-button [styleType]="'weak'" [sizeType]="'sm'" [iconName]="'number_plus'"></pep-button>
            </div>
        </div>
        <div id="button-icon-vars">
            <h3 style="margin: 1em 0 0.5em 0; font-size: 90%;">X-Small</h3>
            <div style="display: flex; gap: 0.5em;">
                <pep-button value="Button" styleType="weak" sizeType="xs"></pep-button>
                <pep-button value="Button" styleType="weak" sizeType="xs" iconName="number_plus"></pep-button>
                <pep-button value="Button" styleType="weak" sizeType="xs" iconName="number_plus" iconPosition="start"></pep-button>
                <pep-button styleType="weak" sizeType="xs" iconName="number_plus"></pep-button>
            </div>
        </div>
    </div>
`,
});
export const iconVar = iconVarTemplate.bind({});
iconVar.storyName = 'Icon Variants (over size)';
iconVar.parameters = {
    docs: {
        source: {
            code: `
// A regular button
<pep-button styleType="weak" value="Button" sizeType="..."></pep-button>

// With an icon at the end, this is the default. 
// No need to add the 'iconPosition' prop
<pep-button styleType="weak" iconName="number_plus" value="Button" sizeType="..."></pep-button>

// With an icon at the start. 
// To have it add the 'iconPosition' prop
<pep-button styleType="weak" iconName="number_plus" iconPosition="start" value="Button" sizeType="..."></pep-button>

// Just an icon. 
// To have it, remove the 'value' prop
<pep-button styleType="weak" iconName="number_plus" sizeType="..."></pep-button>
            `,
        },
    },
};
