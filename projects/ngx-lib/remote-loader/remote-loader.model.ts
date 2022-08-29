import { LoadRemoteModuleOptions } from "@angular-architects/module-federation";
import { ViewContainerRef } from "@angular/core";
import { MatDialogConfig } from "@angular/material/dialog";
import { PepDialogSizeType } from "@pepperi-addons/ngx-lib/dialog";
import { InstalledAddon, NgComponentRelation } from "@pepperi-addons/papi-sdk";

type PepRemoteLoaderData = {
    addonId?: string;
    componentName?: string;
    // For web components
    elementName?: string;
    
    // displayName?: string;
    // Maybe those properties are not in use so we need to remove them.
    // update?: boolean;
    // noModule?: boolean;
}

export type PepRemoteLoaderOptions = PepRemoteLoaderData & LoadRemoteModuleOptions;

export interface IPepRemoteLoaderParamsOptions {
    name?: string, 
    slugName?: string, 
    blockType?: string,
    addonUUID?: string,
    blockRemoteEntry?: string,
    pagesDevServer?: string
}

export interface IBlockLoaderData {
    relation: NgComponentRelation, 
    addon: InstalledAddon,
    addonPublicBaseURL: string
}

export interface IAddonBlockLoaderOptions extends IPepRemoteLoaderParamsOptions {
    container: ViewContainerRef;
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