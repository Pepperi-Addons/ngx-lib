import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepGroupButtonsComponent } from './group-buttons.component';
import { PepGroupButtonsModule } from './group-buttons.module';

import { action } from '@storybook/addon-actions';
import { PepButton } from '../button/button.model';

// This exports the Stories group for this component
export default {
    title: 'Components/group-buttons',
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


let buttons: Array<PepButton> = [
    { key: '1', value: '1', callback: (event: any) => onColNumChanged(event.source.key)},
    { key: '2', value: '2', callback: (event: any) => onColNumChanged(event.source.key)},
    { key: '3', value: '3', callback: (event: any) => onColNumChanged(event.source.key)}
]

function onColNumChanged(event){
    alert(event);
}

// This creates a Story for the component
const Template: Story<PepGroupButtonsComponent> = (args: PepGroupButtonsComponent) => ({
    props: {
        ...args,
        buttons: buttons,
        buttonClick: action('buttonClick'),
    },
    // template: `
    //     <pep-button [value]="value" [disabled]="disabled" [styleType]="styleType" [styleStateType]="styleStateType" [sizeType]="sizeType" [iconName]="iconName"
    //     [iconPosition]="iconPosition" [visible]="visible" (buttonClick)="buttonClick($event)"></pep-button>
    // `,
});

export const Base = Template.bind({});
Base.args = {}