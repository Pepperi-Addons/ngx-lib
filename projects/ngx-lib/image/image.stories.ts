import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepImageComponent } from './image.component';
import { PepImageModule } from './image.module';

// This exports the Stories group for this component
export default {
    title: 'Components/image',
    component: PepImageComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepImageModule, SBNgxHelperModule],
        }),
    ],
    args: {
        rowSpan: 4
    },
    argTypes: {
        label: commonArgTypes.label,
        mandatory: commonArgTypes.mandatory,
        xAlignment: commonArgTypes.xAlignment,
        disabled: commonArgTypes.disabled,
        showTitle: commonArgTypes.showTitle,
        // srcLarge: {
        //     description: 'This is the large image src',
        //     table: {
        //         defaultValue: { summary: null },
        //     }
        // },
        src: {
            description: 'This is the src of the image',
            table: {
                defaultValue: { summary: null },
            }
        },
        rowSpan: commonArgTypes.rowSpan,
        elementClick: commonArgTypes.elementClick,
        fileChange: commonArgTypes.fileChange,
    },
    parameters: {
        controls: {
            include: [
                'label', 'src', 'mandatory', 'disabled', 'xAlignment', 'rowSpan', // 'srcLarge', 
                'showTitle', 'elementClick', 'fileChange'
            ]
        }
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepImageComponent> = (args: PepImageComponent) => ({
    props: {
        ...args,
    },
    template: // [srcLarge]="srcLarge" 
        `
        <pep-image [label]="label" [src]="src" [mandatory]="mandatory" [disabled]="disabled" [xAlignment]="xAlignment" [rowSpan]="rowSpan"
        [showTitle]="showTitle" (elementClick)="elementClick($event)" (fileChange)="fileChange($event)"></pep-image>
    `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    src: "https://idpfiles.sandbox.pepperi.com/f389fd2e-4a31-4965-a21e-3a98b4553300/images/left-side-background.jpg",
    // srcLarge: "https://idpfiles.sandbox.pepperi.com/f389fd2e-4a31-4965-a21e-3a98b4553300/images/logo.svg"
};
