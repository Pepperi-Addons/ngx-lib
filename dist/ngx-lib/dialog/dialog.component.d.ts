import { TemplateRef } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LayoutService } from '@pepperi-addons/ngx-lib';
import { Overlay, ComponentType } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare enum DialogDataType {
    Text = 0,
    TextArea = 1,
    Html = 2,
    Iframe = 3
}
export declare class DialogData {
    title: string;
    content: any;
    contentType: DialogDataType;
    contentData?: any;
    showHeader: boolean;
    showFooter: boolean;
    constructor(options: {
        title?: string;
        content?: any;
        contentType: DialogDataType;
        contentData?: any;
        showHeader?: boolean;
        showFooter?: boolean;
    });
}
export declare class DialogService {
    private dialog;
    private layoutService;
    private overlay;
    constructor(dialog: MatDialog, layoutService: LayoutService, overlay: Overlay);
    getDialogConfig(options?: {
        height?: string;
        disableClose?: boolean;
        minWidth?: string;
        maxWidth?: string;
        maxHeight?: string;
        panelClass?: string;
    }): MatDialogConfig;
    openDefaultDialog(data: DialogData, config?: MatDialogConfig): MatDialogRef<any>;
    openDialog<T>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, data?: any, config?: MatDialogConfig): MatDialogRef<T>;
    static ɵfac: i0.ɵɵFactoryDef<DialogService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DialogService>;
}
export declare class PepperiDefaultDialogComponent {
    data: DialogData;
    dialogRef: MatDialogRef<any>;
    DialogDataType: typeof DialogDataType;
    constructor(data: DialogData, dialogRef: MatDialogRef<any>);
    save(): void;
    updateContent(e: any): void;
    static ɵfac: i0.ɵɵFactoryDef<PepperiDefaultDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PepperiDefaultDialogComponent, "ng-component", never, {}, {}, never, never>;
}
