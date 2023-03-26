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
    title: 'Services/Dialog',
    // component: PepDialogComponent,
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

function getDialogData(args) {
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

    return dataMsg;
}

function openDialog(event, args): void {
    const config = dialogService.getDialogConfig({}, 'large');
    const dataMsg = getDialogData(args);
    dialogRef = dialogService.openDefaultDialog(dataMsg, config);

    dialogRef.afterClosed()
        .subscribe((res) => {
            // debugger;
        });
}

function changeArgs(args) {
    if (!dialogRef) return;

    const dataMsg = getDialogData(args);
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

export const Story1 = Template.bind({});
Story1.storyName = 'Dialog';
//! Content showing after clicking tab
Story1.args = {
    title: 'Dialog title',
    content: 'Dialog content',
};

// export const Story2 = Template.bind({});
// Story2.storyName = 'Another Basic';
// Story2.args = {
//     title: 'Dialog title',
//     content: 'Fugiat id irure proident eu ut occaecat fugiat incididunt quis ipsum enim occaecat. Ipsum nulla ea elit consectetur in. Enim laborum labore minim ea enim aliqua ex commodo labore ea ad do esse. Laborum excepteur id reprehenderit reprehenderit et excepteur ad duis enim nostrud laborum laborum in cupidatat. Aliquip fugiat exercitation labore laborum magna nulla sit laborum reprehenderit tempor ea voluptate. Sint tempor veniam Lorem sit aliquip cillum cillum consectetur ad et fugiat. Eiusmod non elit irure dolor irure fugiat veniam. Sit aliquip proident cillum labore enim ullamco dolor culpa tempor officia laboris. Commodo voluptate duis labore cupidatat enim ex irure et culpa tempor. Irure esse do non officia. Qui in velit occaecat qui do nisi elit nostrud. Culpa qui nisi aliquip dolor in. Ullamco elit adipisicing deserunt labore adipisicing proident aute mollit elit esse officia. Ullamco dolor ut nulla aliqua reprehenderit elit ullamco magna. Id enim consequat magna eiusmod aute nostrud sit anim officia. Duis est ullamco anim voluptate cupidatat reprehenderit. Consequat occaecat reprehenderit eu sint ea cupidatat est nulla reprehenderit labore incididunt ut eu. Id est nisi et ullamco tempor laboris eu ex anim. Duis magna anim aliquip excepteur laborum ut in in officia nisi dolor. Voluptate esse commodo aliqua commodo et deserunt pariatur. Quis eu consectetur qui do magna cillum ut minim ipsum anim magna elit exercitation laboris.',
// };

// export const Story3 = AnotherTemplate.bind({});
// Story3.storyName = 'Another Basic XX';
// Story3.args = {
//     title: 'Dialog title',
//     content: 'Fugiat id irure proident eu ut occaecat fugiat incididunt quis ipsum enim occaecat. Ipsum nulla ea elit consectetur in. Enim laborum labore minim ea enim aliqua ex commodo labore ea ad do esse. Laborum excepteur id reprehenderit reprehenderit et excepteur ad duis enim nostrud laborum laborum in cupidatat. Aliquip fugiat exercitation labore laborum magna nulla sit laborum reprehenderit tempor ea voluptate. Sint tempor veniam Lorem sit aliquip cillum cillum consectetur ad et fugiat. Eiusmod non elit irure dolor irure fugiat veniam. Sit aliquip proident cillum labore enim ullamco dolor culpa tempor officia laboris. Commodo voluptate duis labore cupidatat enim ex irure et culpa tempor. Irure esse do non officia. Qui in velit occaecat qui do nisi elit nostrud. Culpa qui nisi aliquip dolor in. Ullamco elit adipisicing deserunt labore adipisicing proident aute mollit elit esse officia. Ullamco dolor ut nulla aliqua reprehenderit elit ullamco magna. Id enim consequat magna eiusmod aute nostrud sit anim officia. Duis est ullamco anim voluptate cupidatat reprehenderit. Consequat occaecat reprehenderit eu sint ea cupidatat est nulla reprehenderit labore incididunt ut eu. Id est nisi et ullamco tempor laboris eu ex anim. Duis magna anim aliquip excepteur laborum ut in in officia nisi dolor. Voluptate esse commodo aliqua commodo et deserunt pariatur. Quis eu consectetur qui do magna cillum ut minim ipsum anim magna elit exercitation laboris.',
// };

// TODO  Add prop to change dialog size
// TODO  Show how to use
// TODO  Show a dialog with a skeleton loader inside