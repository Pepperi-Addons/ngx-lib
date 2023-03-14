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
        rowSpan: 2,
        label: 'Upload media',
    },
    argTypes: {
        label: commonArgTypes.label,
        mandatory: commonArgTypes.mandatory,
        xAlignment: commonArgTypes.xAlignment,
        disabled: commonArgTypes.disabled,
        showTitle: commonArgTypes.showTitle,
        src: {
            table: {
                defaultValue: { summary: null },
            },
        },
        rowSpan: commonArgTypes.rowSpan,
        elementClick: commonArgTypes.elementClick,
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
                'rowSpan',
                'showTitle',
                'elementClick',
                'fileChange',
            ],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepAttachmentComponent> = (
    args: PepAttachmentComponent
) => ({
    props: {
        ...args,
        elementClick: action('elementClick'),
        fileChange: action('fileChange'),
    },
    // template: `
    //     <pep-attachment [label]="label" [src]="src" [mandatory]="mandatory" [disabled]="disabled" [xAlignment]="xAlignment" [rowSpan]="rowSpan"
    //     [showTitle]="showTitle" (elementClick)="elementClick($event)" (fileChange)="fileChange($event)"></pep-attachment>
    // `,
});

export const Story1 = Template.bind({});
Story1.args = {
    src: 'https://yonatankof.com/misc/pepp/Addon%20Hackathon%20-%20Badge.png',
};
Story1.storyName = 'Basic';

export const Story2 = Template.bind({});
Story2.args = {
    src: 'https://yonatankof.com/misc/pepp/Addon%20Hackathon%20-%20Badge.png',
};
Story2.storyName = 'With content';

export const Story3 = Template.bind({});
Story3.args = {};
Story3.storyName = 'Without content';

export const Story4 = Template.bind({});
Story4.args = {
    rowSpan: 1,
};
Story4.storyName = 'One span high';
Story4.parameters = {
    docs: {
        description: {
            story: "By default `rowSpan` is _2_, when changing it to _1_ the design is shown in one line (the icon is on the left of the _micro-copy_)" ,
        },
    },  
};

export const Story5 = Template.bind({});
Story5.args = {
    src: 'https://yonatankof.com/misc/pepp/Addon%20Hackathon%20-%20Badge.png',
    disabled: true,
};
Story5.storyName = 'Read only / Disabled';

export const Story6 = Template.bind({});
Story6.args = {
    mandatory: true,
};
Story6.storyName = 'Mandatory';
