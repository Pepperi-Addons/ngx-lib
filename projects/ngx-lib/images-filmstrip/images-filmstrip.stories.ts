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
        showThumbnails: {
            description: "Show thumbnails? Positioning is automated, if narrow is below, if wide is on the side, which side? that's depended on the text direction",
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        }
    },
    parameters: {
        controls: {
            include: ['label', 'value', 'xAlignment', 'rowSpan', 'showTitle', 'renderTitle', 'showThumbnails'],
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
    label: "Hey there, I'm an images filmstrip component",
    value: imageSrc,
};
Story1.decorators = [
    componentWrapperDecorator((story) => `<div style="width: clamp(12rem, 40rem, 100vw);">${story}</div>`),
];

export const Story2 = Template.bind({});
Story2.storyName = 'No title & missing image';
Story2.args = {
    rowSpan: 6,
    renderTitle: false,
    value:
        'https://yonatanape.com/misc/pepp/Addon%20Hackathon%20-%20Badge.png;https://yonatanape.com/misc/pepp/404-Hero.gif;https://yonatanape.com/misc/pepp/TechStack.png',
};
Story2.decorators = [
    componentWrapperDecorator((story) => `<div style="width: clamp(12rem, 24rem, 100vw);">${story}</div>`),
];

export const Story3 = Template.bind({});
Story3.storyName = 'With thumbnails';
Story3.decorators = [
    componentWrapperDecorator((story) => `<div style="width: clamp(12rem, 60rem, 100vw);">${story}</div>`),
];
Story3.parameters = {
    docs: {
        description: {
            story: 'The `showThumbnails` args works only with a reload, see the screenshot below ![A screenshot that shows how to reload the story](https://yonatankof.com/misc/pepp/ss01.png "Reload the story")',
        },
    },  
};
Story3.args = {
    renderTitle: false,
    value: imageSrc,
    showThumbnails: true,
    rowSpan: 12,
};
