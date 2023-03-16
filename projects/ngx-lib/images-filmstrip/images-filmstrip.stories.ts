import { Meta, Story, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepImagesFilmstripComponent } from './images-filmstrip.component';
import { PepImagesFilmstripModule } from './images-filmstrip.module';

// This exports the Stories group for this component
export default {
    title: 'Components/Image filmstrip',
    component: PepImagesFilmstripComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepImagesFilmstripModule, SBNgxHelperModule],
        }),
        componentWrapperDecorator(
            (story) => `<div style="width: clamp(12rem, 40rem, 100vw);">${story}</div>`
        ),
    ],
    args: {
        rowSpan: 8,
    },
    argTypes: {
        label: commonArgTypes.label,
        xAlignment: commonArgTypes.xAlignment,
        showTitle: commonArgTypes.showTitle,
        value: {
            description: 'This is the source of the images. Separate the image source using the `;` character',
            table: {
                defaultValue: { summary: null },
            },
        },
        rowSpan: commonArgTypes.rowSpan,
    },
    parameters: {
        controls: {
            include: ['label', 'value', 'xAlignment', 'rowSpan', 'showTitle', 'renderTitle'],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepImagesFilmstripComponent> = (
    args: PepImagesFilmstripComponent
) => ({
    props: {
        ...args,
    },
});

const imageSrc = 'https://yonatankof.com/misc/pepp/Addon%20Hackathon%20-%20Badge.png;https://yonatankof.com/misc/pepp/404-Hero.gif;https://yonatankof.com/misc/pepp/TechStack.png;https://64.media.tumblr.com/ff76e5463ce4cfd0f61c63e4fadf3ab7/b45204c505bb1947-2e/s2048x3072/b90504ebbaabb08b2cfd838d0a47f7cb543e7308.jpg';

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    label: "Hey there!",
    value: imageSrc,
};
export const Story2 = Template.bind({});
Story2.storyName = 'No title & missing image';
Story2.args = {
    renderTitle: false,
    value:
        'https://yonatanape.com/misc/pepp/Addon%20Hackathon%20-%20Badge.png;https://yonatanape.com/misc/pepp/404-Hero.gif;https://yonatanape.com/misc/pepp/TechStack.png',
};
export const Story3 = Template.bind({});
Story3.storyName = 'With thumbnails';
Story3.parameters = {
    docs: {
        //! Is there a way to add the thumbnails to the mix?
        description: {
            story: "Is there a way to add the thumbnails to the mix?" ,
        },
    },  
};
Story3.args = {
    renderTitle: false,
    value: imageSrc,
};
