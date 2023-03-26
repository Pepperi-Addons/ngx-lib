import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepSnackBarComponent } from './snack-bar.component';
import { PepSnackBarModule } from './snack-bar.module';
import { PepSnackBarData } from './snack-bar.model';
import { PepDefaultSnackBarComponent } from './default-snack-bar.component';
import { PepSnackBarService } from './snack-bar.service';

import { PepButtonModule } from '../button/button.module';

import { APP_INITIALIZER } from '@angular/core';

import { MatSnackBar, MatSnackBarRef } from "@angular/material/snack-bar";

let snackBarService = null;
let snackBarRef: MatSnackBarRef<PepDefaultSnackBarComponent> = null;

function initSnackBarService(sbs: PepSnackBarService) {
    return () => (snackBarService = sbs);
}

// This exports the Stories group for this component
export default {
    title: 'Services/Snackbar',
    // component: PepSnackBarComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: initSnackBarService,
                    multi: true,
                    deps: [PepSnackBarService],
                },
            ],
            imports: [PepButtonModule, PepSnackBarModule, SBNgxHelperModule],
        }),
    ],
    argTypes: {
        title: {
            description: 'This is the title of the snackBar',
            control: 'text',
            table: {
                defaultValue: { summary: null },
            },
        },
        content: {
            description: 'This is the content of the snackBar',
            control: 'text',
            table: {
                defaultValue: { summary: null },
            },
        },
    },
    parameters: {
        controls: {
            include: [
                'title',
                'content',
            ],
        },
    },
} as Meta;

function getSnackBarData(args) {
    const dataMsg = new PepSnackBarData({
        title: args.title,
        content: args.content,
    });

    return dataMsg;
}

function openSnackBar(event, args): void {
    const config = snackBarService.getSnackBarConfig({ 
        // duration: 3000 
    });
    const dataMsg = getSnackBarData(args);
    snackBarRef = snackBarService.openDefaultSnackBar(dataMsg, config);

    snackBarRef.afterDismissed()
        .subscribe((res) => {
            // debugger;
        });
}

function changeArgs(args) {
    if (!snackBarRef) return;

    const dataMsg = getSnackBarData(args);
    snackBarRef.instance.data = dataMsg;
}

// This creates a Story for the component
const Template: Story<PepSnackBarComponent> = (args: PepSnackBarComponent) => ({
    onChange: changeArgs(args),
    props: {
        ...args,
        onButtonClick: (event) => openSnackBar(event, args),
    },
    template: `
        <pep-button value="open snackBar" (buttonClick)="onButtonClick($event)"></pep-button>
    `,
});

// <pep-snack-bar [title]="title"></pep-snack-bar>

export const Base = Template.bind({});
Base.storyName = 'Snackbar';
Base.args = {
    title: 'SnackBar title',
    content: 'SnackBar content',
};

export const Story2 = Template.bind({});
Story2.storyName = 'No content';
Story2.args = {
    // TODO if no content then remove the HR
    title: 'SnackBar title',
};

// TODO Show how to use
