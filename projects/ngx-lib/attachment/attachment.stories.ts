import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';

import { PepAttachmentComponent } from './attachment.component';
import { PepAttachmentModule } from './attachment.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'ngx-lib/attachment',
    component: PepAttachmentComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepAttachmentModule, SBNgxHelperModule],
        }),
    ],
    argTypes: {
        layoutType: {
            description: 'This is the layout type of the component',
            defaultValue: 'form',
            control: {
                type: 'radio',
                options: ['form', 'card', 'table'],
            },
            table: {
                type: {
                    summary: 'something short',
                    detail: 'something really really long',
                },
                defaultValue: { summary: 'form' },
            },
        },
        xAlignment: {
            description: 'This is the x alignment of the component',
            defaultValue: 'left',
            control: {
                type: 'radio',
                options: ['left', 'center', 'right'],
            },
        },
    },
    parameters: {
        controls: {
            include: [
                'label', 'src', 'required', 'disabled', 'xAlignment',
                'showTitle', 'layoutType', 'elementClick', 'valueChange'
            ]
        }
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepAttachmentComponent> = (args: PepAttachmentComponent) => ({
    props: {
        ...args,
        elementClick: action('elementClick'),
        valueChange: action('valueChange'),
    },
    template: `
        <pep-attachment [label]="label" [src]="src" [required]="required" [disabled]="disabled" [xAlignment]="xAlignment" 
        [showTitle]="showTitle" [layoutType]="layoutType" (elementClick)="elementClick($event)" (valueChange)="valueChange($event)"></pep-attachment>
    `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    src: "https://idpfiles.sandbox.pepperi.com/f389fd2e-4a31-4965-a21e-3a98b4553300/images/logo.svg"
};
