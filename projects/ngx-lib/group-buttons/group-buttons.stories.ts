import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepGroupButtonsComponent } from './group-buttons.component';
import { PepGroupButtonsModule } from './group-buttons.module';

import { action } from '@storybook/addon-actions';
import { PepButton } from '../button/button.model';

// This exports the Stories group for this component
export default {
    title: 'Components/Group buttons',
    component: PepGroupButtonsComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepGroupButtonsModule, SBNgxHelperModule],
        }),
    ],
    // args: {
    // },
    argTypes: {
        viewType: {
            description: 'The buttons view type.',
            options: [
                'regular', 
                'dropdown',
                'split',
                'toggle'
            ],        
            control: { type: 'radio' },    
            table: {
                type: {
                    summary: 'PepGroupButtonsViewType',                    
                },
                defaultValue: { summary: 'regular' },
            },
        },
        styleType: commonArgTypes.styleType,
        sizeType: commonArgTypes.sizeType,
        buttons: {
            description: 'The buttons',            
            defaultValue: [],
            control: 'array',
            table: {
                type: {
                    summary: 'PepButton[]'
                },
                defaultValue: {
                    summary: null
                }
            }
        },
        buttonsDisabled: commonArgTypes.disabled,
        supportUnselect: {
            description: 'If the component support un select',
            defaultValue: false,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'false' },
            }
        },
        selectedButtonKey: {
            description: 'The button key to select',
            control: 'text',
            table: {
                defaultValue: { summary: null },
            }
        },
        stretch: {
            description: 'If the component should stretch',
            defaultValue: false,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'false' },
            }
        },
        buttonClick: {
            action: 'buttonClick',
            control: false,
        },
    },
    parameters: {
        controls: {
            include: [
                'viewType',
                'styleType',
                'sizeType',
                'buttons',
                'buttonsDisabled',
                'supportUnselect',
                'selectedButtonKey',
                'stretch',
                'buttonClick',
            ],
        },
    },
} as Meta;

const buttonsContent = [ 
    {key: "x01", value: "Tramontana"},
    {key: "x02", value: "Greco"},
    {key: "x03", value: "Levante"},
    {key: "x04", value: "Scirocco"},
    {key: "x05", value: "Ostro"},
    {key: "x06", value: "Libeccio", selected: true},
    {key: "x07", value: "Ponente", disabled: true},
    {key: "x08", value: "Maestro"},
];

let buttons: Array<PepButton> = [
    { key: '1', value: '1', callback: (event: any) => onColNumChanged(event.source.key)},
    { key: '2', value: '2', callback: (event: any) => onColNumChanged(event.source.key)},
    { key: '3', value: '3', callback: (event: any) => onColNumChanged(event.source.key)}
]

function onColNumChanged(event){
    alert(event);
}

// This creates a Story for the component
const StoryTemplate: Story<PepGroupButtonsComponent> = (args: PepGroupButtonsComponent) => ({
    props: {
        ...args,
        buttons: buttons,
        buttonClick: action('buttonClick'),
    },
});

const ThisStoryTemplate: Story<PepGroupButtonsComponent> = (args: PepGroupButtonsComponent) => ({
    props: {
        ...args,
        buttons: buttonsContent,
        buttonClick: action('buttonClick'),
    },
});

export const Story1 = StoryTemplate.bind({});
Story1.storyName = "Basic"

export const Story2 = ThisStoryTemplate.bind({});
Story2.storyName = "Regular view type"
Story2.args = {
    viewType: "regular"
}

export const Story3 = ThisStoryTemplate.bind({});
Story3.storyName = "Dropdown view type"
Story3.args = {
    //! the disabled item is clickable in dropdown view
    viewType: "dropdown",
}

export const Story4 = ThisStoryTemplate.bind({});
Story4.storyName = "Split view type"
Story4.args = {
    viewType: "split",
}

export const Story5 = ThisStoryTemplate.bind({});
Story5.storyName = "Toggle view type w/ initial selection"
Story5.parameters = {
    docs: {
        description: {
            story: "This view allows you to toggle the buttons in the group. You can select an initial button by `key` with the `selectedButtonKey` arg",
        },
    },  
}
Story5.args = {
    viewType: "toggle",
    selectedButtonKey: "x02"
}
export const Story6 = ThisStoryTemplate.bind({});
Story6.storyName = "Toggle view type wo/ initial selection"
Story6.parameters = {
    docs: {
        description: {
            story: "Here no initial button was selected but you can still toggle the buttons",
        },
    },  
}
Story6.args = {
    viewType: "toggle",
}
