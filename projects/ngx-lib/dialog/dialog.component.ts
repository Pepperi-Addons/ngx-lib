import { Component, Inject, ViewEncapsulation, Injectable, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LayoutService } from '@pepperi-addons/ngx-lib';
import { Overlay, ComponentType } from '@angular/cdk/overlay';

export enum DialogDataType {
    Text,
    TextArea,
    Html,
    Iframe
}

export class DialogData {
    title = '';
    content: any;
    contentType: DialogDataType = DialogDataType.Text;
    contentData?: any;
    showHeader = true;
    showFooter = false;

    constructor(
        options: {
            title?: string,
            content?: any,
            contentType: DialogDataType,
            contentData?: any,
            showHeader?: boolean,
            showFooter?: boolean
        }
    ) {

        this.title = options.title || '';
        this.content = options.content || '';
        this.contentType = options.contentType;
        this.contentData = options.contentData || {};
        this.showHeader = options.showHeader === undefined ? true : options.showHeader;
        this.showFooter = options.showFooter === undefined ? true : options.showFooter;
        // this.actionButtons = actionButtons;
        // this.showLoadingSpinner = showLoadingSpinner;
    }
}

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(
        private dialog: MatDialog,
        private layoutService: LayoutService,
        private overlay: Overlay) { }

    getDialogConfig(
        options: {
            height?: string,
            disableClose?: boolean,
            minWidth?: string,
            maxWidth?: string,
            maxHeight?: string,
            panelClass?: string,
        } = {}
    ): MatDialogConfig {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;
        dialogConfig.direction = this.layoutService.isRtl() ? 'rtl' : 'ltr';
        dialogConfig.disableClose = options.disableClose || false;
        dialogConfig.height = options.height || 'auto';
        dialogConfig.maxWidth = options.maxWidth || '100vw';
        dialogConfig.maxHeight = options.maxHeight || '100vh';
        dialogConfig.minWidth = options.minWidth || '0';
        dialogConfig.panelClass = ['pepperi-dialog', options.panelClass || ''];

        dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();

        return dialogConfig;
    }

    openDefaultDialog(data: DialogData, config: MatDialogConfig = null): MatDialogRef<any> {
        if (!config) {
            config = this.getDialogConfig();
        }

        config.data = data;
        const dialogRef = this.dialog.open(PepperiDefaultDialogComponent, config);
        return dialogRef;
    }

    openDialog<T>(
        componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
        data: any = {},
        config: MatDialogConfig = null): MatDialogRef<T> {

        if (!config) {
            config = this.getDialogConfig();
        }

        config.data = data;

        const dialogRef = this.dialog.open(componentOrTemplateRef, config);
        return dialogRef;
    }
}

@Component({
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PepperiDefaultDialogComponent {
    DialogDataType = DialogDataType;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public dialogRef: MatDialogRef<any>
    ) { }

    save(): void {
        this.dialogRef.close(this.data ? this.data.content : '');
    }

    updateContent(e): void {
        this.data.content = e.target ? e.target.value : (e.currentTarget ? e.currentTarget.value : '');
    }
}




