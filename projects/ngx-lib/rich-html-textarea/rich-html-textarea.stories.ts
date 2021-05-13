import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepRichHtmlTextareaComponent } from './rich-html-textarea.component';
import { PepRichHtmlTextareaModule } from './rich-html-textarea.module';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "rich-html-textarea"
    title: 'Components/rich-html-textarea',
    // The component related to the Stories
    component: PepRichHtmlTextareaComponent,
    args: {
        rowSpan: 8,
    },
    argTypes: {
        label: commonArgTypes.label,
        value: commonArgTypes.value, // { control: { type: 'number', min: 0, max: 10 } },
        xAlignment: commonArgTypes.xAlignment,
        disabled: commonArgTypes.disabled,
        mandatory: commonArgTypes.mandatory,
        showTitle: commonArgTypes.showTitle,
        visible: commonArgTypes.visible,
        inlineMode: {
            description: 'If can edit inline',
            defaultValue: false,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        maxFieldCharacters: {
            description: 'Maximum characters to allow',
        },
        rowSpan: commonArgTypes.rowSpan,
        valueChange: commonArgTypes.valueChange,
    },
    parameters: {
        controls: {
            include: [
                'label',
                'value',
                'mandatory',
                'disabled',
                'maxFieldCharacters',
                'xAlignment',
                'rowSpan',
                'visible',
                'inlineMode',
                'showTitle',
                'valueChange',
            ],
        },
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepRichHtmlTextareaModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepRichHtmlTextareaComponent> = (
    args: PepRichHtmlTextareaComponent
) => ({
    props: args,
    template: `
        <pep-rich-html-textarea [label]="label" [value]="value" [mandatory]="mandatory" [disabled]="disabled" [maxFieldCharacters]="maxFieldCharacters" [inlineMode]="inlineMode"
        [xAlignment]="xAlignment"  [rowSpan]="rowSpan" [visible]="visible" [showTitle]="showTitle" (valueChange)="valueChange($event)"></pep-rich-html-textarea>
    `,
});

export const Base = Template.bind({});
Base.args = {
    label: 'rich-html-textarea',
    value: `<div class='body-sm rich-text-cont ng-star-inserted' style='height: 27.5rem; text-align: left;'><h1 class='title-4xl'>B07MZ3</h1><p class='body-md'>Brand: <span style='color: #ff0000;'>
    <strong>SojoS</strong></span></p><p class='body-md'>Product Code: <span style='color: #ff0000;'><strong>She Young</strong></span></p><p class='body-md'>List Price: <span style='color: #ff0000;'>
    <strong>12.9</strong></span></p><h2 class='title-2xl'>Product Details</h2><p></p><ul style='list-style: none;'><li style='background: url(https://static.zennioptical.com/dev/image/site/frame-size-icons/frame-width.svg) no-repeat; line-height: 2.5rem;'>
    <p style='padding-left: 50px;'>Frame Width: 132mm</p></li><li style='background: url(https://static.zennioptical.com/dev/image/site/frame-size-icons/lens-width.svg) no-repeat; line-height: 2.5rem;'><p style='padding-left: 50px;'>Lens Width: 52mm</p></li>
    <li style='background: url(https://static.zennioptical.com/dev/image/site/frame-size-icons/bridge.svg) no-repeat; line-height: 2.5rem;'><p style='padding-left: 50px;'>Bridge: 16mm</p></li></ul><p></p></div>`,
};
