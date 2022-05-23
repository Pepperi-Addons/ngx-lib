import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSignatureComponent } from '../signature/signature.component';
import { PepSignatureModule } from '../signature/signature.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/signature',
    component: PepSignatureComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepSignatureModule, SBNgxHelperModule],
        }),
    ],
    args: {
        rowSpan: 4,
    },
    argTypes: {
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

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    src: 'https://i.ibb.co/VMHwLkm/58957776-8700-4c6a-b9bc-a171b84d8080.png'
};
