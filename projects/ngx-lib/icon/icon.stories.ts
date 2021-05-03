import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { registerAllIcons, SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';

import { PepIconComponent } from './icon.component';
import { PepIconModule } from './icon.module';
import { PepIconRegistry } from './icon-registry.service';
import { allIcons } from './icon-generated-all.model'
import { IPepIconData, pepIconSystemSettings, PepIconType } from './icon-generated.model';
import { APP_INITIALIZER } from '@angular/core';

function allIconsToNames(): Array<string> {
    let pepIcons = [];
    if (allIcons) {
        Object.keys(allIcons).forEach(key => {
            pepIcons.push(key);
        });
    }

    return pepIcons;
}

// This exports the Stories group for this component
export default {
    title: 'ngx-lib/icon',
    component: PepIconComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: registerAllIcons,
                    multi: true,
                    deps: [PepIconRegistry]
                }
            ],
            imports: [PepIconModule, SBNgxHelperModule],
        }),
        // componentWrapperDecorator((story) => `
        //     <div style="width: 100%; height: 100%; display: flex; flex-flow: wrap;">
        //         <div style="width:50px; display: inline-flex; flex-flow: wrap; flex: 100%">
        //             ${story}
        //         </div>
        //     </div>`
        // )
    ],
    argTypes: {
        name: {
            control: {
                type: 'select',
                options: allIconsToNames()
            },
        }
    }
} as Meta;

// This creates a Story for the component
const Template: Story<PepIconComponent> = (args: PepIconComponent) => ({
    props: {
        ...args,
    },
    template: `
        <pep-icon style="width:50px; height:50px; " [name]="name" [spin]="spin" [fill]="fill"></pep-icon>
    `,
});

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    name: pepIconSystemSettings.name,
    // spin: false,
};
// Base.parameters = { controls: { include: ['fill'] } };

// This creates a Story for the component
const AllIconsTemplate: Story<PepIconComponent> = (
    args: PepIconComponent
) => ({
    props: {
        ...args,
        allIconsNames: allIconsToNames(),
    },
    template: `
        <div style="display: flex; flex-flow: wrap;">
            <div *ngFor="let iconName of allIconsNames" style="width:auto; margin:0.5rem; display: flex; align-items: center;">
                <pep-icon style="width:30px;" [title]="iconName" [name]="iconName"></pep-icon>
                <!--<span >{{ iconName }}</span>-->
            </div>
        </div>
    `,
});

export const AllIcons = AllIconsTemplate.bind({});
AllIcons.storyName = 'All icons';