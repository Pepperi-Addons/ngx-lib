import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SBNgxHelperModule } from '@storybook-settings/ngx-helper.module';
import { commonArgTypes } from '@storybook-settings/common-args.model';

import { PepDialogComponent } from './dialog.component';
import { PepDialogModule } from './dialog.module';
import { PepDialogActionButton, PepDialogData } from './dialog.model';
import { PepDefaultDialogComponent } from './default-dialog.component';
import { PepDialogService } from './dialog.service';

import { PepButtonModule } from '../button/button.module';

import { APP_INITIALIZER } from '@angular/core';

import { MatDialog, MatDialogRef } from "@angular/material/dialog";

let dialogService = null;
let dialogRef: MatDialogRef<PepDefaultDialogComponent> = null;

function initDialogService(ds: PepDialogService) {
    return () => (dialogService = ds);
}

// This exports the Stories group for this component
export default {
    title: 'Services/dialog',
    // component: PepDialogComponent,
    // argTypes: argTypesBasicStory,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: initDialogService,
                    multi: true,
                    deps: [PepDialogService],
                },
            ],
            imports: [PepButtonModule, PepDialogModule, SBNgxHelperModule],
        }),
    ],
    argTypes: {
        title: {
            description: 'This is the title of the dialog',
            control: 'text',
            table: {
                defaultValue: { summary: null },
            },
        },
        actionsType: {
            description: 'This is the actions type of the dialog',
            defaultValue: 'close',
            control: {
                type: 'radio',
                options: [
                    'close',
                    'cancel-continue',
                    'cancel-ok',
                    'cancel-delete',
                    'custom',
                ],
            },
            table: {
                type: {
                    summary: 'PepDialogActionsType',
                },
                defaultValue: { summary: 'close' },
            },
        },
        content: {
            description: 'This is the content of the dialog',
            control: 'text',
            table: {
                defaultValue: { summary: null },
            },
        },
        showClose: {
            description: 'If show close button',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'true' },
            },
        },
        showHeader: {
            description: 'If show dialog header',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'true' },
            },
        },
        showFooter: {
            description: 'If show dialog footer',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                defaultValue: { summary: 'true' },
            },
        },
    },
    parameters: {
        controls: {
            include: [
                'title',
                'actionsType',
                'content',
                'showClose',
                'showHeader',
                'showFooter',
            ],
        },
    },
} as Meta;

function openDialog(event, args): void {
    const config = dialogService.getDialogConfig({}, 'large');
    let actionButtons = null;

    if (args.actionsType === 'custom') {
        actionButtons = [
            new PepDialogActionButton(
                'custom button',
                'strong'
                // () => alert("custom button clicked")
            ),
        ];
    }

    const dataMsg = new PepDialogData({
        title: args.title,
        actionsType: args.actionsType,
        content: args.content,
        showClose: args.showClose,
        showHeader: args.showHeader,
        showFooter: args.showFooter,
        actionButtons,
    });

    dialogRef = dialogService
        .openDefaultDialog(dataMsg, config)
        .afterClosed()
        .subscribe((res) => {
            // debugger;
        });
}

function changeArgs(args) {
    debugger;
    if (!dialogRef) return;

    let actionButtons = null;

    if (args.actionsType === 'custom') {
        actionButtons = [
            new PepDialogActionButton(
                'custom button',
                'strong'
                // () => alert("custom button clicked")
            ),
        ];
    }
    const dataMsg = new PepDialogData({
        title: args.title,
        actionsType: args.actionsType,
        content: args.content,
        showClose: args.showClose,
        showHeader: args.showHeader,
        showFooter: args.showFooter,
        actionButtons,
    });
    dialogRef.componentInstance.data = dataMsg;
}

// This creates a Story for the component
const Template: Story<PepDialogComponent> = (args: PepDialogComponent) => ({
    onChange: changeArgs(args),
    props: {
        ...args,
        onButtonClick: (event) => openDialog(event, args),
    },
    template: `
        <pep-button value="open dialog" (buttonClick)="onButtonClick($event)"></pep-button>
    `,
});

// <pep-dialog [title]="title" [showClose]="showClose" [showHeader]="showHeader" [showFooter]="showFooter"></pep-dialog>

export const Base = Template.bind({});
Base.storyName = 'Basic';
Base.args = {
    title: 'Dialog title',
    content: 'Dialog content',
};
