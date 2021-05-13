import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepDialogComponent } from './dialog.component';
import { PepDialogModule } from './dialog.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/dialog',
    component: PepDialogComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepDialogModule, SBNgxHelperModule],
        }),
    ],
    argTypes: {
        title: {
            description: 'This is the title of the dialog',
            control: 'text',
            table: {
                defaultValue: { summary: null },
            },
        },
        showClose: {
            description: 'If show close button',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'true' },
            },
        },
        showHeader: {
            description: 'If show dialog header',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'true' },
            },
        },
        showFooter: {
            description: 'If show dialog footer',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'true' },
            },
        },
    },
    parameters: {
        controls: {
            include: ['title', 'showClose', 'showHeader', 'showFooter'],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepDialogComponent> = (args: PepDialogComponent) => ({
    props: {
        ...args,
    },
    template: `
        <pep-dialog [title]="title" [showClose]="showClose" [showHeader]="showHeader" [showFooter]="showFooter"></pep-dialog>
    `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    title: 'Dialog title',
};
