import { Meta, Story, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { PepChipsModule } from './chips.module';
import { PepChipsComponent } from './chips.component';

const mockChips = [ 
    {key: "x01", value: "Tapuchips"},
    {key: "x02", value: "Pringles"},
    {key: "x03", value: "Terra"},
    {key: "x04", value: "Deep River"},
    {key: "x05", value: "Kettle Brand"},
    {key: "x06", value: "Cheetos"},
    {key: "x07", value: "Love Corn"},
    {key: "x08", value: "Doritos"},
    {key: "x09", value: "Snyder's of Hanover"},
    {key: "x10", value: "Dubonim"},
    {key: "x11", value: "Banmba"},
    {key: "x12", value: "Bissli"},
];

// This exports the Stories group for this component
export default {
    title: 'Components/Chips',
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
        inline: {
            description: 'Fill container height (catch 100% of available height)',
        },
        label:{
            description: 'The text above the chips panel',
        },
        renderTitle: {
            description: 'If false do not keep place for the label (title)',
        },
        showTitle: {
            description: 'show the label above the chips panel',
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
        docs: {
            description: {
                component: 'Need to write better _chips_ description in the table, like done for the `mockChips`',
              },
        },
        controls: {
            include: [
                'label',
                'classNames',
                'value',
                'xAlignment',
                'mandatory',
                'disabled',
                'showTitle',
                'renderTitle',
                'chips',
                'type',
                "styleType",
                'orientation',
                'inline',
                /*'multiSelect',*/
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

export const Story1 = Template.bind({});
Story1.storyName = "Basic"
Story1.args = {
    label: 'Basic',
    chips: [{key: "x01", value: "Tapuchips"}],
}

export const Story2 = Template.bind({});
Story2.storyName = "Without content"
Story2.args = {
    label: 'Without content',
}
Story2.parameters = {
    docs: {
        description: {
            story: 'A simple story without chips',
        },
    },  
};

export const Story3 = Template.bind({});
Story3.storyName = "With content"
Story3.args = {
    label: 'With content',
    chips: mockChips,
}
Story3.parameters = {
    docs: {
        description: {
            story: 'A simple story with a lot of chips',
        },
    },  
};

export const Story4 = Template.bind({});
Story4.storyName = "Inline is true"
Story4.args = {
    label: 'Inline is true',
    chips: mockChips,
    inline: true,
}
Story4.decorators = [
    componentWrapperDecorator((story) => `<div style="height: 16em;">${story}</div>`),
  ];
Story4.parameters = {
    docs: {
        description: {
            story: 'This is story has its _height_ set to be taller and `inline: true` → As you can see, the chip input is taking up all of the available height (unlike the chips above that is taking up only the needed space)',
        },
    },  
};

export const Story5 = Template.bind({});
Story5.storyName = "Type is `select`"
Story5.args = {
    label: 'Type is `select`',
    chips: mockChips,
    type: 'select',
}
Story5.parameters = {
    docs: {
        description: {
            story: "With the `type: 'select'` option, you won't type a chip but click the `Add chip +` button that will open a dialog" ,
        },
    },  
};

export const Story6 = Template.bind({});
Story6.storyName = "Orientation is vertical"
Story6.args = {
    label: 'Orientation is vertical',
    chips: mockChips,
    orientation: 'vertical',
}