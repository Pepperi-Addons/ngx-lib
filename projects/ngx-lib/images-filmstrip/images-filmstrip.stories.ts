import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepImagesFilmstripComponent } from './images-filmstrip.component';
import { PepImagesFilmstripModule } from './images-filmstrip.module';

// This exports the Stories group for this component
export default {
    title: 'Components/images-filmstrip',
    component: PepImagesFilmstripComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepImagesFilmstripModule, SBNgxHelperModule],
        }),
    ],
    args: {
        rowSpan: 4
    },
    argTypes: {
        label: commonArgTypes.label,
        xAlignment: commonArgTypes.xAlignment,
        showTitle: commonArgTypes.showTitle,
        value: {
            description: 'This is the value of all images with ";" seperator',
            table: {
                defaultValue: { summary: null },
            }
        },
        rowSpan: commonArgTypes.rowSpan,
    },
    parameters: {
        controls: {
            include: [
                'label', 'value', 'xAlignment', 'rowSpan', 'showTitle'
            ]
        }
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepImagesFilmstripComponent> = (args: PepImagesFilmstripComponent) => ({
    props: {
        ...args,
    },
    template: `
        <pep-images-filmstrip [label]="label" [value]="value" [xAlignment]="xAlignment" [rowSpan]="rowSpan" [showThumbnails]="showThumbnails"
        [showTitle]="showTitle"></pep-images-filmstrip>
    `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    value: "https://idpfiles.sandbox.pepperi.com/f389fd2e-4a31-4965-a21e-3a98b4553300/images/left-side-background.jpg;https://idpfiles.sandbox.pepperi.com/f389fd2e-4a31-4965-a21e-3a98b4553300/images/logo.svg"
};
