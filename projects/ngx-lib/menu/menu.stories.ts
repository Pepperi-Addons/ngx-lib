import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { pepIconSystemMenu } from '@pepperi-addons/ngx-lib/icon';

import { PepMenuComponent } from './menu.component';
import { PepMenuModule } from './menu.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/Menu',
    component: PepMenuComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepMenuModule, SBNgxHelperModule],
        }),
    ],
    args: {
        iconName: pepIconSystemMenu.name
    },
    argTypes: {
        text: {
            description: 'This is the text of the component',
            control: 'text',
            table: {
                defaultValue: { summary: '' },
            },
        },
        type: {
            description: 'This is the type of the component',
            defaultValue: 'action',
            control: {
                type: 'radio',
                options: ['action', 'action-select', 'select'],
            },
            table: {
                type: {
                    summary: 'action | action-select | select',
                },
                defaultValue: { summary: 'action' },
            },
        },
        iconName: commonArgTypes.iconName,
        styleType: commonArgTypes.styleType,
        sizeType: commonArgTypes.sizeType,
        classNames: commonArgTypes.classNames,
        disabled: commonArgTypes.disabled,
        items: {
            description: 'This is an array of items',
            control: 'object',
            table: {
                type: {
                    summary: `[PepMenuItem]`,
                    // summary: ` [{
                    //     key: "key1",
                    //     value: "value1",
                    //     disabled: false,
                    //     hidden: false,
                    //     iconName: 'system_settings',
                    //     type: 'regular'
                    // }]`,
                },
                defaultValue: { summary: null },
            },
        },
        selectedItem: {
            description: 'This is the selected item',
            control: 'object',
            table: {
                type: {
                    summary: `PepMenuItem`,
                },
                defaultValue: { summary: null },
            },
        },
        menuClick: {
            action: 'menuClick',
            control: false,
        },
        menuItemClick: {
            action: 'menuItemClick',
            control: false,
        },
    },
    parameters: {
        controls: {
            include: [
                'text',
                'iconName',
                'type',
                'styleType',
                'sizeType',
                'classNames',
                'disabled',
                'items',
                'selectedItem',
                'menuClick',
                'menuItemClick',
            ],
        },
    },
} as Meta;

const itemList = [
    { key: "N", text: 'Tramontana' },
    { key: "NE", text: 'Gregale', disabled: true },
    { key: "E", text: 'Levante' },
    { key: "SE", text: 'Scirocco' },
    { key: 'sep', type: 'splitter' },
    { key: "S", text: 'Ostro', iconName: 'system_link' },
    { key: "SW", text: 'Libeccio', iconName: 'system_lock' },
    { key: "W", text: 'Ponente', iconName: 'system_logic' },
    { key: "NW", text: 'Mistral', iconName: 'system_map' },
];

// This creates a Story for the component
const Template: Story<PepMenuComponent> = (args: PepMenuComponent) => ({
    props: {
        ...args,
        menuClick: action('menuClick'),
        menuItemClick: action('menuItemClick'),
    },
});

export const Story1 = Template.bind({});
Story1.storyName = 'Basic';
Story1.args = {
    items: itemList,
};

export const Story2 = Template.bind({});
Story2.storyName = 'Action (default)';
Story2.parameters = {
    docs: {
        description: {
            story: "If you want the menu to have a title (like in this story have _This list_ near the icon), use the `text` args",
        }
    }
}
Story2.args = {
    text: 'This list',
    items: itemList,
};

export const Story3 = Template.bind({});
Story3.storyName = 'Action select';
Story3.parameters = {
    docs: {
        description: {
            story: "The `action-select` option will show the `text` args but will change to the selected item, once selected. Here we changed the default `system_menu` icon using the `iconName` args",
        }
    }
}
Story3.args = {
    iconName: 'system_bolt',
    text: 'Please select',
    type: 'action-select',
    items: itemList,
};

export const Story4 = Template.bind({});
Story4.storyName = 'Select';
Story4.parameters = {
    docs: {
        description: {
            story: "The `select` option won't show the `text` args but the selected item. Here we changed the default `system_menu` icon using the `iconName` args",
        }
    }
}
Story4.args = {
    iconName: 'system_move',
    type: 'select',
    items: itemList,
};