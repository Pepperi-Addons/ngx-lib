import { moduleMetadata, Story, Meta } from '@storybook/angular';

// import { withKnobs, text, select, radios } from '@storybook/addon-knobs';

import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSelectComponent } from './select.component';
import { PepSelectModule } from './select.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    title: 'Components/Select',
    component: PepSelectComponent,
    argTypes: {
        label: commonArgTypes.label,
        value: {
            description: "This is the initial selected value by the item's `key`",
            defaultValue: '',
            control: {
                type: 'text'
            },
            table: {
                type: { summary: 'string' },
              },
        },
        xAlignment: commonArgTypes.xAlignment,
        mandatory: commonArgTypes.mandatory,
        showTitle: commonArgTypes.showTitle,
        layoutType: {
            description: 'This is the layout type of the component',
            defaultValue: 'form',
            control: {
                type: 'radio',
                options: ['form', 'card', 'table'],
            },
        },
        rowSpan: commonArgTypes.rowSpan,
        readonly: commonArgTypes.readonly,
        type: {
            description: 'This is the type of the component',
            defaultValue: 'select',
            control: {
                type: 'radio',
                options: ['select', 'multi'],
            },
        },
        disabled: commonArgTypes.disabled,
        valueChange: commonArgTypes.valueChange,
    },
    parameters: {
        controls: {
            include: [
                'label',
                'value',
                'xAlignment',
                'type',
                'mandatory',
                'disabled',
                'showTitle',
                'rowSpan',
                'valueChange',
                'layoutType',
                'options',
                'readonly',
            ],
        },
    },
    decorators: [
        moduleMetadata({
            imports: [PepSelectModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

const Template: Story<PepSelectComponent> = (args: PepSelectComponent) => ({
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
const theseOptions = [
    { key: "N", value: 'Tramontana' },
    { key: "NE", value: 'Gregale' },
    { key: "E", value: 'Levante' },
    { key: "SE", value: 'Scirocco' },
    // { key: 'sep', type: 'splitter' },
    { key: "S", value: 'Ostro' },
    { key: "SW", value: 'Libeccio' },
    { key: "W", value: 'Ponente' },
    { key: "NW", value: 'Mistral' },
];

// Basic story
export const Story1 = Template.bind({});
Story1.storyName = "Basic"
Story1.args = {
    label: 'Select an option',
    options: theseOptions,
};

export const Story2 = Template.bind({});
Story2.storyName = "With initial value"
Story2.args = {
    label: 'Select an option',
    value: 'N',
    options: theseOptions,
};

export const Story3 = Template.bind({});
Story3.storyName = "Multi-select"
Story3.args = {
    label: 'Select an option',
    type: 'multi',
    options: theseOptions,
};

export const Story4 = Template.bind({});
Story4.storyName = "Multi-select with initial value"
Story4.args = {
    label: 'Select an option',
    value: 'N;W;E',
    type: 'multi',
    options: theseOptions,
};
Story4.parameters = {
    docs: {
        description: {
            story: "You can have multi selection on init with the `value` args using the item's `key` separated by `;`" ,
        },
    },  
};

export const Story5 = Template.bind({});
Story5.storyName = "Card layout type"
Story5.args = {
    label: 'Select an option',
    value: 'N;W;E',
    type: 'multi',
    options: theseOptions,
    layoutType: 'card',
};
Story5.parameters = {
    docs: {
        description: {
            story: "You can have multi selection on init with the `value` args using the item's `key` separated by `;`" ,
        },
    },  
};

export const Story6 = Template.bind({});
Story6.storyName = "Read only"
Story6.args = {
    label: 'Select an option',
    options: theseOptions,
    //! rowSpan not working
    rowSpan: 10,
    //! readonly not working
    readonly: true,
};