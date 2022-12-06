import { moduleMetadata, Story, Meta } from '@storybook/angular';

// import { withKnobs, text, select, radios } from '@storybook/addon-knobs';

import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSelectPanelComponent } from './select-panel.component';
import { PepSelectPanelModule } from './select-panel.module';

import { action } from '@storybook/addon-actions';
import { PepSelectComponent } from '../select/select.component';

// This exports the Stories group for this component
export default {
    title: 'Components/select-panel',
    component: PepSelectPanelComponent,
    argTypes: {
        isMultiSelect: {
            description: 'Determines whether panel has Single/Multi select option',
            defaultValue: true,
            control: {
                type: 'radio',
                options: [true, false],
            },
        },
        label: commonArgTypes.label,
        value: commonArgTypes.value,
        classNames: commonArgTypes.classNames,
        xAlignment: commonArgTypes.xAlignment,
        mandatory: commonArgTypes.mandatory,
        showTitle: commonArgTypes.showTitle,
        disabled: commonArgTypes.disabled,
       
        numOfCol: {
            label: 'numOfCol',
            defaultValue: 3,
            default: '3'
            
        },
        
        valueChange: commonArgTypes.valueChange,
    },
    parameters: {
        controls: {
            include: [
                'isMultiSelect',
                'numOfCol',
                'label',
                'classNames',
                'value',
                'xAlignment',
                'mandatory',
                'disabled',
                'showTitle',
                'options',
                'valueChange'
            ],
        },
    },
    decorators: [
        moduleMetadata({
            imports: [PepSelectPanelModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

const Template: Story<PepSelectPanelComponent> = (args: PepSelectPanelComponent) => ({
    // component: PepSelectComponent,
    props: {
        ...args,
        valueChange: action('valueChange'),
    },
    // template: `
    //     <pep-select [value]="value" [label]="label" [type]="type" [mandatory]="mandatory" [disabled]="disabled"
    //     [xAlignment]="xAlignment" [options]="options" [showTitle]="showTitle"
    //     (valueChange)="valueChange($event)"></pep-select>
    // `,
});

// Basic story
export const Basic = Template.bind({});
Basic.args = {
    label: 'select an option',
    value: 'green;red',
    options: [
        { key: 'red', value: 'Red' },
        { key: 'blue', value: 'Blue' },
        { key: 'black', value: 'Black' },
        { key: 'purple', value: 'Purple '},
        { key: 'green', value: 'Green' },
        { key: 'yellow', value: 'Yellow' },
        { key: 'brown', value: 'Brown' },
        { key: 'white', value: 'White' }
    ],
};

   // Other stories could be added here as well, all you have to do is export them along!
    export const Mandatory: Story<PepSelectComponent> = () => ({
        component: PepSelectComponent,
   
    });

// export const Multi: Story<PepSelectComponent> = () => ({
//     component: PepSelectComponent,
//     props: {
//         label: 'multi',
//         value: text('value', 'test1'),
//         options: [
//             { key: 'test1', value: 'test1' },
//             { key: 'test2', value: 'test2' },
//         ],
//     },
//     template: `
//         <pep-select [label]="label" type="multi" [value]="value" [options]="options"></pep-select>
//     `,
// });
