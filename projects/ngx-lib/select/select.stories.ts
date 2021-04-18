// import { moduleMetadata } from '@storybook/angular';
// import { Story, Meta } from '@storybook/angular/types-6-0';

// // import { withKnobs, text, select, radios } from '@storybook/addon-knobs';

// import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';

// import { PepSelectComponent } from './select.component';
// import { PepSelectModule } from './select.module';

// // This exports the Stories group for this component
// export default {
//     title: 'ngx-lib/select',
//     component: PepSelectComponent,
//     decorators: [
//         moduleMetadata({
//             imports: [PepSelectModule, SBNgxHelperModule],
//         }),
//     ],
// } as Meta;

// const Template: Story<PepSelectComponent> = (args: PepSelectComponent) => ({
//     component: PepSelectComponent,
//     props: args,
//     template: `
//         <pep-select [label]="label" [value]="undefined" [options]="options"></pep-select>
//     `,
// });

// // Base story
// export const Base = Template.bind({});
// Base.args = {
//     label: 'select an option',
//     value: 'test1',
//     options: [
//         { key: 'test1', value: 'test1' },
//         { key: 'test2', value: 'test2' },
//     ],
// };

// // // Other stories could be added here as well, all you have to do is export them along!
// // export const Mandatory: Story<PepSelectComponent> = () => ({
// //     component: PepSelectComponent,
// //     props: {
// //         label: 'mandatory',
// //         value: text('value', 'test1'),
// //         options: [
// //             { key: 'test1', value: 'test1' },
// //             { key: 'test2', value: 'test2' },
// //         ],
// //     },
// //     template: `
// //         <pep-select [label]="label" [value]="value" [options]="options" required="true"></pep-select>
// //     `,
// // });

// // export const Multi: Story<PepSelectComponent> = () => ({
// //     component: PepSelectComponent,
// //     props: {
// //         label: 'multi',
// //         value: text('value', 'test1'),
// //         options: [
// //             { key: 'test1', value: 'test1' },
// //             { key: 'test2', value: 'test2' },
// //         ],
// //     },
// //     template: `
// //         <pep-select [label]="label" type="multi" [value]="value" [options]="options"></pep-select>
// //     `,
// // });
