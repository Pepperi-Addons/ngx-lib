import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
} from '@pepperi-addons/ngx-lib/icon';
import { PepTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';

import { PepTextboxValidationDirective } from '../textbox-validation.directive';
import { PepTextboxComponent } from '../textbox.component';

// import {
//     PepLayoutType,
//     PepCustomizationService,
//     PepHorizontalAlignment,
//     DEFAULT_HORIZONTAL_ALIGNMENT,
//     IPepFieldValueChangeEvent,
//     PepTextboxFieldType,
//     PepTextboxField,
//     PepFieldBase,
// } from '@pepperi-addons/ngx-lib';


// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Textbox"
    title: 'ngx-lib/textbox',
    // The component related to the Stories
    component: PepTextboxComponent,
    excludeStories: /.*Data$/,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [PepTextboxComponent, PepTextboxValidationDirective],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                // Material modules,
                MatCommonModule,
                MatButtonModule,
                MatFormFieldModule,
                MatInputModule,
                MatIconModule,
                // ngx-lib modules
                PepNgxLibModule,
                PepIconModule,
                PepFieldTitleModule,
                PepTextboxIconModule,],
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
    label: 'label',
    value: 'Tomer test'
}
// Other stories could be added here as well, all you have to do is export them along!

// export const Primary = Template.bind({});
// Primary.args = {
//     label: 'Text',
//     type: 'text',
//     xAlignment: 'left',
//     value: '123'
// };