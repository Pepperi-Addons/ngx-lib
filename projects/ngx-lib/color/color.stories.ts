import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepColorComponent } from './color.component';
import { PepColorModule } from './color.module';

import { PepColorPickerComponent } from './color-picker.component';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/Color picker',
    component: PepColorComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepColorModule, SBNgxHelperModule],
        }),
    ],
    argTypes: {
        label: commonArgTypes.label,
        value: {
            description: 'The value of the component (Hex color like #ccc)',
            control: {
                type: 'color',
            },
        },
        disabled: commonArgTypes.disabled,
        xAlignment: commonArgTypes.xAlignment,
        showTitle: commonArgTypes.showTitle,
        type: {
            description: 'This is the type of the component',
            defaultValue: 'any',
            control: {
                type: 'radio',
                options: ['any', 'main', 'success', 'caution'],
            },
            table: {
                defaultValue: { summary: 'any' },
            },
        },
        showAAComplient: {
            description: 'If the component should fix color by AA complient',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'true' },
            },
        },
        valueChange: commonArgTypes.valueChange,
    },
    parameters: {
        docs: {
            description: {
                component: "There's an issue with the default color `value` - it looks _white_ but when opening the dialog it's _grey_",
              },
        },
        controls: {
            include: [
                'label',
                'value',
                'type',
                'disabled',
                'xAlignment',
                'showTitle',
                'showAAComplient',
                'valueChange',
            ],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepColorComponent> = (args: PepColorComponent) => ({
    props: {
        ...args,
        valueChange: action('valueChange'),
    },
    // template: `
    //     <pep-color [label]="label" [value]="value" [type]="type" [disabled]="disabled" [xAlignment]="xAlignment" 
    //     [showTitle]="showTitle" [showAAComplient]="showAAComplient" (valueChange)="valueChange($event)"></pep-color>
    // `,
});

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    label: 'Choose color',
};

export const Story2 = Template.bind({});
Story2.storyName = 'Type is main';
Story2.args = {
    label: 'Type is main',
    type: 'main',
};
Story2.parameters = {
    docs: {
        description: {
            story: "When `type: 'main'`, user can only select **dark** colors" ,
        },
    },  
};

export const Story3 = Template.bind({});
Story3.storyName = 'Type is success';
Story3.args = {
    label: 'Type is success',
    type: 'success',
};
Story3.parameters = {
    docs: {
        description: {
            story: "When `type: 'success'`, user can only select **green** colors" ,
        },
    },  
};

export const Story4 = Template.bind({});
Story4.storyName = 'Type is caution';
Story4.args = {
    label: 'Type is caution',
    type: 'caution',
};
Story4.parameters = {
    docs: {
        description: {
            story: "When `type: 'caution'`, user can only select **red** colors" ,
        },
    },  
};

export const Story5 = Template.bind({});
Story5.storyName = "Isn't AA compliant";
Story5.args = {
    label: "Isn't AA compliant",
    showAAComplient: false,
};
Story5.parameters = {
    docs: {
        description: {
            story: "When `howAAComplient: false`, user can select colors that doesn't conform to [level AA of the web content accessibility guidelines (WCAG)](https://www.w3.org/WAI/WCAG2AA-Conformance) standards",
        },
    },  
};

export const Story6 = Template.bind({});
Story6.storyName = "Set stating color";
Story6.args = {
    label: "Set stating color",
    //! There's an issue when using CSS color names - try using `HotPink` as opposed to its corresponding HEX color `#FF69B4`
    value: "#FF69B4",
};
Story6.parameters = {
    docs: {
        description: {
            story: "There's an issue when using CSS color names - try using `HotPink` as opposed to its corresponding HEX color `#FF69B4`",
        },
    },  
};
