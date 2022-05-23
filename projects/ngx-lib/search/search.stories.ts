import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSearchComponent } from './search.component';
import { PepSearchModule } from './search.module';

import { action } from '@storybook/addon-actions';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Search"
    title: 'Components/search',
    // The component related to the Stories
    component: PepSearchComponent,
    argTypes: {
        triggerOn: {
            table: {
                defaultValue: { summary: 'click' },
            },
        },
        value: commonArgTypes.value,
        sizeType: commonArgTypes.sizeType,
        search: {
            action: 'search',
            control: false,
        },
    },
    parameters: {
        controls: {
            include: ['triggerOn', 'value', 'sizeType', 'search'],
        },
    },
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [PepSearchModule, SBNgxHelperModule],
        }),
    ],
} as Meta;

// This creates a Story for the component
const Template: Story<PepSearchComponent> = (args: PepSearchComponent) => ({
    props: {
        ...args,
        search: action('search'),
    },
    // template: `
    //     <pep-search [triggerOn]="triggerOn" [value]="value" [sizeType]="sizeType" (search)="search($event)"></pep-search>
    // `,
});

export const Base = Template.bind({});
Base.args = {
    value: 'search...',
};
