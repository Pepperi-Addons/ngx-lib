import { Injectable, TemplateRef } from '@angular/core';
import {
    MatDialog,
    MatDialogConfig,
    MatDialogRef,
} from '@angular/material/dialog';
import { PepLayoutService } from '@pepperi-addons/ngx-lib';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { PepDialogSizeType, PepDialogData, PepDialogCustomizeData } from './dialog.model';
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
            // Create tmp object for comparing against the defaults.
            const tmp = new PepDialogData({
                showClose: data.showClose,
                showHeader: data.showHeader,
                showFooter: data.showFooter,
                actionButtons: data.actionButtons,
            });

            const showCloseIsFalse = tmp.showClose === false;
            const showHeaderIsFalse = tmp.showHeader === false;
            const showFooterIsFalse = tmp.showFooter === false;
            const noActions = tmp.actionButtons === null || tmp.actionButtons.length === 0;

            if ((showFooterIsFalse && (showCloseIsFalse || showHeaderIsFalse)) || 
                (data.actionsType === 'custom' && noActions)
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

        this.fixMultiDialogsPos();

        dialogRef.afterClosed().subscribe(result => {
            this.fixMultiDialogsPos();
        });
        
        return dialogRef;
    }

    openDialog<T, D = any, R = any>(
        componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
        data: any = {},
        config: MatDialogConfig<D> = null
    ): MatDialogRef<T, R> {
        if (!config) {
            config = this.getDialogConfig();
        }

        const tmpConfig = new PepDialogCustomizeData(data);
        this.fixConfigIfNeeded(tmpConfig, config);

        config.data = data;
        const dialogRef = this.dialog.open(componentOrTemplateRef, config);

        this.fixMultiDialogsPos();

        dialogRef.afterClosed().subscribe(result => {
            this.fixMultiDialogsPos();
        });

        return dialogRef;
    }

    fixMultiDialogsPos(){
        // checking if have more than one open dialog on page
        // if true set the position of each dialog. 
        const elements: any = document.getElementsByClassName('pep-dialog');
        
        if (elements?.length) {
            let index = 0;
            for (let i = elements.length-1; i >= 0 ; i--) {
                const element = elements[i];
                element.style.transform = "translate(-" + (index) + "rem,-" + (index) + "rem)";
                index += 1;
            }
        }
    }
}
