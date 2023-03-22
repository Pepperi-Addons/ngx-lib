import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepImageComponent } from './image.component';
import { PepImageModule } from './image.module';

// This exports the Stories group for this component
export default {
    title: 'Components/Image',
    component: PepImageComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepImageModule, SBNgxHelperModule],
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
                'rowSpan', // 'srcLarge',
                'showTitle',
                'elementClick',
                'fileChange',
            ],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepImageComponent> = (args: PepImageComponent) => ({
    props: {
        ...args,
    },
});

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    src:
        'https://yonatankof.com/misc/pepp/Addon%20Hackathon%20-%20Badge.png',
};
Story1.decorators = [
    componentWrapperDecorator((story) => `<div style="width: 16em;">${story}</div>`),
];

export const Story2 = Template.bind({});
Story2.storyName = 'Without an image';

export const Story3 = Template.bind({});
Story3.storyName = 'With an image';
// TODO Set min-width
Story3.args = {
    rowSpan: 2,
    src:
     'https://yonatankof.com/misc/pepp/Addon%20Hackathon%20-%20Badge.png',
};

export const Story4 = Template.bind({});
Story4.storyName = 'Change row span';
Story4.args = {
    rowSpan: 1,
};

export const Story5 = Template.bind({});
Story5.storyName = 'Broken image link';
Story5.args = {
    src:
        'https://jhgvdhgvhvg.idb',
};
Story5.parameters = {
    docs: {
        description: {
            story: "This story is showing the placeholder image for a broken image link" ,
        },
    },  
};
Story5.decorators = [
    componentWrapperDecorator((story) => `<div style="width: 16em;">${story}</div>`),
];