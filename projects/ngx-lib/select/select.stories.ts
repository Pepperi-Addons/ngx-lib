import { moduleMetadata, Story, Meta } from '@storybook/angular';

// import { withKnobs, text, select, radios } from '@storybook/addon-knobs';

import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSelectComponent } from './select.component';
import { PepSelectModule } from './select.module';

// This exports the Stories group for this component
export default {
    title: 'Components/select',
    component: PepSelectComponent,
    argTypes: {
        label: commonArgTypes.label,
        value: commonArgTypes.value,
        layoutType: commonArgTypes.layoutType,
        xAlignment: commonArgTypes.xAlignment,
        required: commonArgTypes.required,
        showTitle: commonArgTypes.showTitle,
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
                'label', 'value', 'layoutType', 'xAlignment', 'type', 'required', 'disabled',
                'showTitle', 'options', 'valueChange'
            ]
        }
    },
    decorators: [
        moduleMetadata({
            imports: [PepSelectModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

const Template: Story<PepSelectComponent> = (args: PepSelectComponent) => ({
    // component: PepSelectComponent,
    props: args,
    template: `
        <pep-select [value]="value" [label]="label" [type]="type" [required]="required" [disabled]="disabled"
        [xAlignment]="xAlignment" [options]="options" [layoutType]="layoutType" [showTitle]="showTitle"
        (valueChange)="valueChange($event)"></pep-select>
    `,
});

// Basic story
export const Basic = Template.bind({});
Basic.args = {
    label: 'select an option',
    value: 'test1',
    options: [
        { key: 'test1', value: 'test1' },
        { key: 'test2', value: 'test2' },
    ],
};

// // Other stories could be added here as well, all you have to do is export them along!
// export const Mandatory: Story<PepSelectComponent> = () => ({
//     component: PepSelectComponent,
//     props: {
//         label: 'mandatory',
//         value: text('value', 'test1'),
//         options: [
//             { key: 'test1', value: 'test1' },
//             { key: 'test2', value: 'test2' },
//         ],
//     },
//     template: `
//         <pep-select [label]="label" [value]="value" [options]="options" required="true"></pep-select>
//     `,
// });

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
