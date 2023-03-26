import { moduleMetadata, Story, Meta } from '@storybook/angular';
import {
    registerAllIcons,
    SBNgxHelperModule,
} from '@storybook-settings/ngx-helper.module';

import { PepIconComponent } from './icon.component';
import { PepIconModule } from './icon.module';
import { PepIconRegistry } from './icon-registry.service';
import { allIcons } from './icon-generated-all.model';
import { pepIconSystemSettings } from './icon-generated.model';
import { APP_INITIALIZER } from '@angular/core';

function allIconsToNames(): Array<string> {
    const pepIcons = [];
    if (allIcons) {
        Object.keys(allIcons).forEach((key) => {
            pepIcons.push(key);
        });
    }

    return pepIcons;
}

// This exports the Stories group for this component
export default {
    title: 'Components/Icon',
    component: PepIconComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: registerAllIcons,
                    multi: true,
                    deps: [PepIconRegistry],
                },
            ],
            imports: [PepIconModule, SBNgxHelperModule],
        }),
    ],
    argTypes: {
        name: {
            description: 'This is the name of the icon',
            defaultValue: false,
            control: {
                type: 'select',
                options: allIconsToNames(),
            },
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        fill: {
            description: 'The fill color of the icon like #ccc',
            defaultValue: false,
            table: {
                type: {
                    summary: 'color',
                },
            },
        },
        spin: {
            description: 'If the icon should spin',
            defaultValue: false,
        },
    },
    parameters: {
        controls: {
            include: ['name', 'spin', 'fill'],
        },
    },
} as Meta;

// This creates a Story for the component
const Template: Story<PepIconComponent> = (args: PepIconComponent) => ({
    props: {
        ...args,
    },
    styles: [
        `
            pep-icon {
                width:48px;
                height:48px;
            }
        `,
    ],
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    name: pepIconSystemSettings.name,
    // spin: false,
};

// This creates a Story for the component
const AllIconsTemplate: Story<PepIconComponent> = (args: PepIconComponent) => ({
    props: {
        ...args,
        allIconsNames: allIconsToNames(),
    },
    template: `
        <div style="display: flex; flex-flow: wrap;">
            <div *ngFor="let iconName of allIconsNames" style="width:auto; margin:0.5rem; display: flex; align-items: center;">
                <pep-icon style="width:24px;" [title]="iconName" [name]="iconName"></pep-icon>
            </div>
        </div>
    `,
});

export const BaseAllIcons = AllIconsTemplate.bind({});
BaseAllIcons.storyName = 'All icons';
