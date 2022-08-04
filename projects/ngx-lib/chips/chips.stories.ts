import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { PepChipsModule } from './chips.module';
import { PepChipsComponent } from './chips.component';

// This exports the Stories group for this component
export default {
    title: 'Components/chips',
    component: PepChipsComponent,  
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [
                PepChipsModule,
                SBNgxHelperModule
            ]
        })
    ],
    argTypes: {   
        chips: {
            description: 'The chips within the chip list',            
            defaultValue: [],
            control: 'array',
            table: {
                type: {
                    summary: 'IPepChip[]'
                },
                defaultValue: {
                    summary: null
                }
            }
        },
        type: {
            description: 'Data \'Add new chip\' selection type. When \'select\' is choosen, the new data will be sent from external component',
            options: [
                'input', 
                'select'
            ],        
            control: { type: 'radio' },    
            table: {
                type: {
                    summary: 'input | select',                    
                },
                defaultValue: { summary: 'input' },
            },
        },
        orientation: {
            description: 'Chips layout orientation type',
            options: [
                'horizontal', 
                'vertical'
            ],        
            control: { type: 'radio' },    
            table: {
                type: {
                    summary: 'horizontal | vertical',                    
                },
                defaultValue: { summary: 'horizontal' },
            },
        },
        styleType: {
            description: 'Style type',
            options: [
                'weak', 
                'weak-invert',
                'regular',
                'strong'
            ],        
            control: { type: 'radio' },    
            table: {
                type: {
                    summary: 'weak | weak-invert | regular | strong',                    
                },
                defaultValue: { summary: 'regular' },
            }
        },
        multiSelect: {
            description: 'Whether chips multi select allowed'
        },
        placeholder: {
            description: 'Add new chip placeholder',
            table: {
                defaultValue: {
                    summary: null
                }
            }
        },
        selected: {
            description: 'The selected chip(s)',
            control: false,
            table: {
                type: {
                    summary: 'IPepChip | IPepChip[]',                    
                },
                defaultValue: {
                    summary: null
                }           
            }
        },        
        fieldClick: {
            action: 'fieldClick',
            description: 'Emits a click event whenever \'Add new chip\' is clicked',
            control: false,
            table: {
                type: {
                    summary: 'EventEmitter<void>'
                }
            }
        },
        selectionChange: {
            action: 'selectionChange',
            description: 'Emits when the chip is selected or deselected',
            control: false,
            table: {
                type: {
                    summary: 'EventEmitter<IPepChipSelection>'
                }
            }
        },
        addChipsToList: {
            description: 'Adding chip(s) to current chip list'
        }
    },
    parameters: {
        controls: {
            include: [
                'chips',
                'type',
                "styleType",
                'orientation',
                'multiSelect',
                'placeholder',
                "selected",                
                'fieldClick',
                "selectionChange",
                'addChipsToList'                
            ],
        }
    }


} as Meta;

const Template: Story<PepChipsComponent> = (args: PepChipsComponent) => ({
    props: {
        ...args,
        fieldClick: action('fieldClick'),
        selectionChange: action('selectionChange')
    }
});

export const Base = Template.bind({});
Base.args = {}







