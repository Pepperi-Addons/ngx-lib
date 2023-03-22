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
    title: 'Components/Rich HTML textarea',
    // The component related to the Stories
    component: PepRichHtmlTextareaComponent,
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
    // template: `
    //     <pep-rich-html-textarea [label]="label" [value]="value" [mandatory]="mandatory" [disabled]="disabled" [maxFieldCharacters]="maxFieldCharacters" [inlineMode]="inlineMode"
    //     [xAlignment]="xAlignment"  [rowSpan]="rowSpan" [visible]="visible" [showTitle]="showTitle" (valueChange)="valueChange($event)"></pep-rich-html-textarea>
    // `,
});

const thisValue = `<style>main{font-family:sans-serif}strong{color:#b68300}ul{list-style:none;padding:0 .5rem;margin:0}li{display:flex;flex-direction:row;align-items:center;gap:1rem}img{height:auto;width:2rem}p{font-size:1rem;margin-block:1rem}h2{margin:0}</style><main><h1>B07MZ3</h1><p>Brand: <strong>SojoS</strong></p><p>Product Code: <strong>She Young</strong></p><p>List Price: <strong>12.9</strong></p><h2>Product Details</h2><ul><li><img src="https://static.zennioptical.com/dev/image/site/frame-size-icons/frame-width.svg"><p>Frame Width: <strong>132mm</strong></p></li><li><img src="https://static.zennioptical.com/dev/image/site/frame-size-icons/lens-width.svg"><p>Lens Width: <strong>52mm</strong></p></li><li><img src="https://static.zennioptical.com/dev/image/site/frame-size-icons/bridge.svg"><p>Bridge: <strong>16mm</strong></p></li></ul></main>`;

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    label: 'Rich HTML textarea',
    rowSpan: 6,
    value: thisValue,
    disabled: true,
};

export const Story2 = Template.bind({});
Story2.storyName = 'Read only';
Story2.args = {
    label: 'Read only rich HTML textarea',
    rowSpan: 6,
    value: thisValue,
    disabled: true,
};

export const Story3 = Template.bind({});
Story3.storyName = 'Editable';
Story3.args = {
    label: 'Editable rich HTML textarea',
    rowSpan: 6,
    value: thisValue,
};

export const Story4 = Template.bind({});
Story4.storyName = 'Empty';
Story4.args = {
    label: 'Empty rich HTML textarea',
    rowSpan: 4,
};

export const Story5 = Template.bind({});
Story5.storyName = 'Inline, no content';
Story5.args = {
    label: 'Inline, no content rich HTML textarea',
    rowSpan: 4,
    inlineMode: true,
};

export const Story6 = Template.bind({});
Story6.storyName = 'Inline, with content';
Story6.args = {
    label: 'Inline, with content rich HTML textarea',
    value: thisValue,
    rowSpan: 4,
    inlineMode: true,
};
