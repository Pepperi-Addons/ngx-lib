import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepAttachmentComponent } from './attachment.component';
import { PepAttachmentModule } from './attachment.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/attachment',
    component: PepAttachmentComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepAttachmentModule, SBNgxHelperModule],
        }),
    ],
    args: {
        rowSpan: 2
    },
    argTypes: {
        label: commonArgTypes.label,
        required: commonArgTypes.required,
        xAlignment: commonArgTypes.xAlignment,
        disabled: commonArgTypes.disabled,
        showTitle: commonArgTypes.showTitle,
        src: {
            table: {
                defaultValue: { summary: null },
            }
        },
        rowSpan: commonArgTypes.rowSpan,
        elementClick: commonArgTypes.elementClick,
        valueChange: commonArgTypes.valueChange,
    },
    parameters: {
        controls: {
            include: [
                'label', 'src', 'required', 'disabled', 'xAlignment', 'rowSpan',
                'showTitle', 'elementClick', 'valueChange'
            ]
        }
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepAttachmentComponent> = (args: PepAttachmentComponent) => ({
    props: {
        ...args,
        // elementClick: action('elementClick'),
        // valueChange: action('valueChange'),
    },
    template: `
        <pep-attachment [label]="label" [src]="src" [required]="required" [disabled]="disabled" [xAlignment]="xAlignment" [rowSpan]="rowSpan"
        [showTitle]="showTitle" (elementClick)="elementClick($event)" (valueChange)="valueChange($event)"></pep-attachment>
    `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    src: "https://idpfiles.sandbox.pepperi.com/f389fd2e-4a31-4965-a21e-3a98b4553300/images/logo.svg"
};
