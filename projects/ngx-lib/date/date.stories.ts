import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepDateComponent } from './date.component';
import { PepDateModule } from './date.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Date"
    title: 'Components/Date & date-time',
    // The component related to the Stories
    component: PepDateComponent,
    // args: {
    //     // Now all Button stories will be primary.
    //     type: 'date',
    // },
    argTypes: {
        label: commonArgTypes.label,
        value: commonArgTypes.value,
        disabled: commonArgTypes.disabled,
        xAlignment: commonArgTypes.xAlignment,
        textColor: commonArgTypes.textColor,
        mandatory: commonArgTypes.mandatory,
        showTitle: commonArgTypes.showTitle,
        renderTitle: commonArgTypes.renderTitle,
        renderError: commonArgTypes.renderError,
        renderSymbol: commonArgTypes.renderSymbol,
        type: {
            description: 'This is the type of the component',
            defaultValue: 'date',
            control: {
                type: 'inline-radio',
                options: ['date', 'datetime'],
            },
            table: {
                type: {
                    summary: 'date | datetime',
                },
                defaultValue: { summary: 'date' },
            },
        },
        valueChange: commonArgTypes.valueChange,
    },
    parameters: {
        docs: {
            description: {
                component: 'This component can show both the _date_ and _datetime_ options. Clicking on the input will open the `mat-datetimepicker-dialog`',
              },
        },
        controls: {
            include: [
                'label',
                'value',
                'type',
                'mandatory',
                'textColor',
                'disabled', // 'minDateValue', 'maxDateValue', 'minValue', 'maxValue',
                'showTitle',
                'renderTitle',
                'renderError',
                'renderSymbol',
                'xAlignment',
                'valueChange',
            ],
        },
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepDateModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepDateComponent> = (args: PepDateComponent) => ({
    props: {
        ...args,
        valueChange: action('valueChange'),
    },
    // template: `
    //     <pep-date [label]="label" [value]="value" [type]="type" [mandatory]="mandatory" [textColor]="textColor"
    //     [disabled]="disabled" [minDateValue]="minDateValue" [maxDateValue]="maxDateValue" [minValue]="minValue" [maxValue]="maxValue"
    //     [showTitle]="showTitle" [renderTitle]="renderTitle" [renderError]="renderError" [renderSymbol]="renderSymbol"
    //     [xAlignment]="xAlignment" (valueChange)="valueChange($event)"></pep-date>
    // `,
});

export const Story1 = Template.bind({});
Story1.storyName = "Basic";
Story1.args = {
    label: 'date',
    value: '2020-1-1',
};

export const Story2 = Template.bind({});
Story2.storyName = "Empty date-time";
Story2.args = {
    label: 'Empty date-time',
    type: 'datetime',
    value: '',
};
Story2.parameters = {
    docs: {
        description: {
            story: "This date-time is empty, click inside the input to get things going" ,
        },
    },  
};