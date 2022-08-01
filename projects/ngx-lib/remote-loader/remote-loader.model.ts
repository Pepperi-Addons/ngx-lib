import { LoadRemoteModuleOptions } from "@angular-architects/module-federation";
import { ViewContainerRef } from "@angular/core";
import { MatDialogConfig } from "@angular/material/dialog";
import { PepDialogSizeType } from "@pepperi-addons/ngx-lib/dialog";
import { NgComponentRelation } from "@pepperi-addons/papi-sdk";

type PepRemoteLoaderData = {
    addonId?: string;
    displayName?: string;
    componentName?: string;
    // Maybe those properties are not in use so we need to remove them.
    update?: boolean;
    noModule?: boolean;
    // For web components
    elementName?: string;
}

export type PepRemoteLoaderOptions = PepRemoteLoaderData & LoadRemoteModuleOptions;

export type PepBlockDataType = 'SettingsBlock' | 'AddonBlock' | 'PageBlock';

export interface IBlockLoaderData {
    relation: NgComponentRelation, 
    addonPublicBaseURL: string
}

export interface IAddonBlockLoaderOptions {
    container: ViewContainerRef;
    blockType?: PepBlockDataType;
    name: string;
    hostObject?: any;
    hostEventsCallback?: (event: any) => void;
}

export interface IAddonBlockLoaderDialogOptions extends IAddonBlockLoaderOptions {
    data?: IAddonBlockLoaderDialogDataOptions;
    config?: MatDialogConfig;
    size?: PepDialogSizeType;
}

export interface IAddonBlockLoaderDialogDataOptions {
    title?: string;
    showClose?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
}