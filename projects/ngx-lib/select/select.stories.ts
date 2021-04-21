import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

// import { withKnobs, text, select, radios } from '@storybook/addon-knobs';

import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';

import { PepSelectComponent } from './select.component';
import { PepSelectModule } from './select.module';

// This exports the Stories group for this component
export default {
    title: 'ngx-lib/select',
    component: PepSelectComponent,
    argTypes: {
        layoutType: {
            description: 'This is the layout type of the component',
            defaultValue: 'form',
            control: {
                type: 'radio',
                options: ['form', 'card', 'table'],
            },
            table: {
                type: {
                    summary: 'something short',
                    detail: 'something really really long',
                },
                defaultValue: { summary: 'form' },
            },
        },
        xAlignment: {
            description: 'This is the x alignment of the component',
            defaultValue: 'left',
            control: {
                type: 'radio',
                options: ['left', 'center', 'right'],
            },
        },
        type: {
            defaultValue: 'select',
            control: {
                type: 'radio',
                options: ['select', 'multi'],
            },
        },
        valueChange: { action: 'valueChange' },
        controlType: { table: { disable: true } },
        rowSpan: { table: { disable: true } },
        readonly: { table: { disable: true } },
        fieldFormattedValue: { table: { disable: true } },
        isInEditMode: { table: { disable: true } },
        isMulti: { table: { disable: true } },
        isActive: { table: { disable: true } },
        selectedValueModel: { table: { disable: true } },
        selectedValuesModel: { table: { disable: true } },
        standAlone: { table: { disable: true } },
        key: { table: { disable: true } },
        form: { table: { disable: true } },
        parentFieldKey: { table: { disable: true } },
        addOptionsIfNeeded: { table: { disable: true } },
        cardTemplateClicked: { table: { disable: true } },
        changeValue: { table: { disable: true } },
        ngOnDestroy: { table: { disable: true } },
        ngOnChanges: { table: { disable: true } },
        ngOnInit: { table: { disable: true } },
        openedChange: { table: { disable: true } },
        selectionChange: { table: { disable: true } },
        setFieldFormattedValue: { table: { disable: true } },
        formValidationChange: { table: { disable: true } },
        select: { table: { disable: true } },
    },
    decorators: [
        moduleMetadata({
            imports: [PepSelectModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

const Template: Story<PepSelectComponent> = (args: PepSelectComponent) => ({
    component: PepSelectComponent,
    props: args,
    template: `
        <pep-select [value]="value" [label]="label" [type]="type" [required]="required" [disabled]="disabled"
        [xAlignment]="xAlignment" [options]="options" [layoutType]="layoutType" [showTitle]="showTitle"
        [emptyOption]="emptyOption" (valueChange)="valueChange($event)"></pep-select>
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
