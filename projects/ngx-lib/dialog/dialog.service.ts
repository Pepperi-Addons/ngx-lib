import { Injectable, TemplateRef } from '@angular/core';
import {
    MatDialog,
    MatDialogConfig,
    MatDialogRef,
} from '@angular/material/dialog';
import { PepLayoutService } from '@pepperi-addons/ngx-lib';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { PepDialogSizeType, PepDialogData } from './dialog.model';
import { PepDefaultDialogComponent } from './default-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class PepDialogService {
    constructor(
        private dialog: MatDialog,
        private layoutService: PepLayoutService,
        private overlay: Overlay
    ) { }

    private fixConfigIfNeeded(data: PepDialogData, config: MatDialogConfig) {
        if (config.disableClose) {
            if (
                (((data.showClose !== undefined && !data.showClose) || (data.showHeader !== undefined && !data.showHeader)) && (data.showFooter !== undefined && !data.showFooter)) ||
                (data.actionsType === 'custom' &&
                    (data.actionButtons === null ||
                        data.actionButtons.length === 0))
            ) {
                config.disableClose = false;
            }
        }
    }

    getDialogConfig(
        options: {
            disableClose?: boolean;
            height?: string;
            minWidth?: string;
            maxWidth?: string;
            maxHeight?: string;
            panelClass?: string;
        } = {},
        size: PepDialogSizeType = 'regular'
    ): MatDialogConfig {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;
        dialogConfig.direction = this.layoutService.isRtl() ? 'rtl' : 'ltr';
        dialogConfig.disableClose = options.disableClose ?? true;
        
        dialogConfig.panelClass = ['pep-dialog'];
        if (options.panelClass) {
            dialogConfig.panelClass.push(options.panelClass);
        }

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

    openDefaultDialog(
        data: PepDialogData,
        config: MatDialogConfig = null
    ): MatDialogRef<PepDefaultDialogComponent> {
        if (!config) {
            config = this.getDialogConfig();
        }
        this.fixConfigIfNeeded(data, config);

        config.data = data;
        const dialogRef = this.dialog.open(PepDefaultDialogComponent, config);
        return dialogRef;
    }

    openDialog<T>(
        componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
        data: any = {},
        config: MatDialogConfig = null
    ): MatDialogRef<T> {
        if (!config) {
            config = this.getDialogConfig();
        }
        this.fixConfigIfNeeded(data, config);

        config.data = data;
        const dialogRef = this.dialog.open(componentOrTemplateRef, config);
        return dialogRef;
    }
}
