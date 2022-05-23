import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { pepIconSystemMenu } from '@pepperi-addons/ngx-lib/icon';

import { PepMenuComponent } from './menu.component';
import { PepMenuModule } from './menu.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/menu',
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

// This creates a Story for the component
const Template: Story<PepMenuComponent> = (args: PepMenuComponent) => ({
    props: {
        ...args,
        menuClick: action('menuClick'),
        menuItemClick: action('menuItemClick'),
    },
    // template: `
    //     <pep-menu [text]="text" [iconName]="iconName" [type]="type" [styleType]="styleType" [sizeType]="sizeType" [classNames]="classNames" 
    //     [disabled]="disabled" [items]="items" [selectedItem]="selectedItem" (menuClick)="menuClick($event)" (menuItemClick)="menuItemClick($event)"></pep-menu>
    // `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    // iconName: 'system_menu',
    items: [
        { key: 'test1', text: 'test 1' },
        { key: 'test2', text: 'test 2', disabled: true },
        { key: 'sep', type: 'splitter' },
        { key: 'test3', text: 'test 3', iconName: pepIconSystemMenu.name },
    ],
};

export const Select = Template.bind({});
Select.args = {
    text: '',
    type: 'select',
    // iconName: 'system_menu',
    items: [
        { key: 'test1', text: 'test 1' },
        { key: 'test2', text: 'test 2' },
        { key: 'test3', text: 'test 3', iconName: pepIconSystemMenu.name },
    ],
};
