import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { SBTranslateModule } from '@storybook-settings/translate.module'

import { PepTextboxComponent } from './textbox.component';
import { PepTextboxModule } from './textbox.module';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Textbox"
    title: 'ngx-lib/textbox',
    // The component related to the Stories
    component: PepTextboxComponent,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            // declarations: [PepTextboxComponent, PepTextboxValidationDirective],
            imports: [
                PepTextboxModule,
                SBTranslateModule
            ],
        }),
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepTextboxComponent> = (args: PepTextboxComponent) => ({
    component: PepTextboxComponent,
    props: args,
});

export const Base = Template.bind({});
Base.args = {
    label: 'email',
    type: 'email',
    value: 'Tomer@gmail.com',
};
// Other stories could be added here as well, all you have to do is export them along!

// export const Primary = Template.bind({});
// Primary.args = {
//     label: 'Text',
//     type: 'text',
//     xAlignment: 'left',
//     value: '123'
// };
