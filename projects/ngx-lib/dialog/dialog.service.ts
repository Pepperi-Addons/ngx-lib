import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { LayoutService } from '@pepperi-addons/ngx-lib';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { PepDialogSizeType, PepDialogData } from './dialog.model';
import { PepDefaultDialogComponent } from './default-dialog.component';

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
            disableClose?: boolean,
            height?: string,
            minWidth?: string,
            maxWidth?: string,
            maxHeight?: string,
            panelClass?: string,
        } = {},
        size: PepDialogSizeType = 'regular'
    ): MatDialogConfig {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;
        dialogConfig.direction = this.layoutService.isRtl() ? 'rtl' : 'ltr';
        dialogConfig.disableClose = options.disableClose ?? true;
        dialogConfig.panelClass = ['pep-dialog', options.panelClass || ''];

        if (size === 'inline') {
            dialogConfig.height = options.height || 'auto';
            dialogConfig.maxWidth = options.maxWidth || '100vw';
            dialogConfig.maxHeight = options.maxHeight || '100vh';
            dialogConfig.minWidth = options.minWidth || '300px';
        }

        dialogConfig.panelClass.push(size);

        dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();
        // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.block();

        return dialogConfig;
    }

    openDefaultDialog(data: PepDialogData, config: MatDialogConfig = null): MatDialogRef<any> {
        if (!config) {
            config = this.getDialogConfig();
        }

        config.data = data;
        const dialogRef = this.dialog.open(PepDefaultDialogComponent, config);
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
