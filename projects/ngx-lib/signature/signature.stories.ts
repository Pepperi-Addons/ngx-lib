import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSignatureComponent } from '../signature/signature.component';
import { PepSignatureModule } from '../signature/signature.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/Signature',
    component: PepSignatureComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepSignatureModule, SBNgxHelperModule],
        }),
        componentWrapperDecorator((story) => `<div style="width: clamp(12rem, 40rem, 100vw);">${story}</div>`),
    ],
    args: {
        rowSpan: 4,
    },
    argTypes: {
        readonly: commonArgTypes.readonly,
        label: commonArgTypes.label,
        mandatory: commonArgTypes.mandatory,
        xAlignment: commonArgTypes.xAlignment,
        disabled: commonArgTypes.disabled,
        showTitle: commonArgTypes.showTitle,
        src: {
            description: 'This is the src of the signature',
            table: {
                defaultValue: { summary: null },
            },
        },
        rowSpan: commonArgTypes.rowSpan,
        fileChange: commonArgTypes.fileChange,
    },
    parameters: {
        controls: {
            include: [
                'label',
                'src',
                'mandatory',
                'disabled',
                'xAlignment',
                'rowSpan', // 'srcLarge',
                'showTitle',
                'elementClick',
                'fileChange',
                'readonly',
            ],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepSignatureComponent> = (args: PepSignatureComponent) => ({
    props: {
        ...args,
        fileChange: action('fileChange'),
    },
    // [srcLarge]="srcLarge"
    // template: `
    //     <pep-signature [label]="label" [src]="src" [mandatory]="mandatory" [disabled]="disabled" [xAlignment]="xAlignment" [rowSpan]="rowSpan"
    //     [showTitle]="showTitle" (fileChange)="fileChange($event)"></pep-signature>
    // `,
});

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    //! Popup ain't closing
    src: 'https://yonatankof.com/misc/pepp/signature.png',
    label: 'This signature is wow'
};

export const Story2 = Template.bind({});
//! Opening signature in new tab
Story2.storyName = 'Empty';
Story2.args = {
    label: 'Set your signature here'
};

export const Story3 = Template.bind({});
Story3.storyName = 'Read only';
Story3.args = {
    disabled: true,
    src: 'https://yonatankof.com/misc/pepp/signature.png',
    label: 'Set your signature here'
};