import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';

// import { withKnobs, text, select, radios } from '@storybook/addon-knobs';

import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSelectPanelComponent } from './select-panel.component';
import { PepSelectPanelModule } from './select-panel.module';

import { action } from '@storybook/addon-actions';
import { PepSelectComponent } from '../select/select.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Select panel',
    component: PepSelectPanelComponent,
    argTypes: {
        isMultiSelect: {
            description: 'Determines whether panel is single or multi select',
            defaultValue: true,
            control: {
                type: 'radio',
                options: [true, false],
            },
        },
        label: commonArgTypes.label,
        value: commonArgTypes.value,
        // classNames: commonArgTypes.classNames,
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
                // 'classNames',
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
    }
});

const theseOptions = [
    { key: 'red', value: 'Red' },
    { key: 'blue', value: 'Blue' },
    { key: 'black', value: 'Black' },
    { key: 'purple', value: 'Purple '},
    { key: 'green', value: 'Green' },
    { key: 'yellow', value: 'Yellow' },
    { key: 'brown', value: 'Brown' },
    { key: 'white', value: 'White' },
    { key: 'orange', value: 'Orange' },
    { key: 'grey', value: 'Gray' },
    { key: 'teal', value: 'Teal' },
];
const theseHebOptions = [
    { key: 'red', value: 'אדום' },
    { key: 'blue', value: 'כחול' },
    { key: 'black', value: 'שחור' },
    { key: 'purple', value: 'סגול '},
    { key: 'green', value: 'ירוק' },
    { key: 'yellow', value: 'צהוב' },
    { key: 'brown', value: 'חום' },
    { key: 'white', value: 'לבן' },
    { key: 'orange', value: 'כתום' },
    { key: 'grey', value: 'אפור' },
    { key: 'teal', value: 'תכלת' },
];

// Basic story
export const Story1 = Template.bind({});
Story1.storyName = "Basic"
Story1.args = {
    label: 'Select an option',
    value: 'green;red;blue',
    options: theseOptions,
    isMultiSelect: true
};

export const Story2 = Template.bind({});
Story2.storyName = "Multi select"
Story2.parameters = {
    docs: {
        description: {
            story: "You can have multi selection on init with the `value` args using `;` separating the values" ,
        },
    },  
};
Story2.args = {
    label: 'Select an option',
    value: 'green;red;blue',
    options: theseOptions,
    isMultiSelect: true,
    numOfCol: 4
};

export const Story3 = Template.bind({});
Story3.storyName = "Single select"
Story3.parameters = {
    docs: {
        description: {
            story: "If you select multiple values on _single select_ only the first value selected will show" ,
        },
    },  
};
Story3.args = {
    label: 'Select an option',
    value: 'green;red;blue',
    options: theseOptions,
    isMultiSelect: false,
    numOfCol: 2
};

export const Story4 = Template.bind({});
Story4.storyName = "RTL"
// TODO have the title be aligned with direction too
// TODO Or is by xAlignment?
Story4.decorators = [
    componentWrapperDecorator((story) => `<div style="direction: rtl;">${story}</div>`),
];
Story4.args = {
    label: 'בחר/י אפשרות',
    value: 'blue',
    options: theseHebOptions,
    isMultiSelect: false,
    numOfCol: 6,
    xAlignment: 'right'
};
