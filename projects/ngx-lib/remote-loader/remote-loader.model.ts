import { LoadRemoteModuleOptions } from "@angular-architects/module-federation"
import { ViewContainerRef } from "@angular/core";
import { MatDialogConfig } from "@angular/material/dialog";
import { PepDialogSizeType } from "@pepperi-addons/ngx-lib/dialog";
import { NgComponentRelation } from "@pepperi-addons/papi-sdk";

type PepRemoteLoaderData = {
    componentName: string;
    addonId: string;
    update?: boolean;
    noModule?: boolean;
    // title: string;
    // moduleData?: object;
    // visibleEndpoint?: string;
    // multiSelection?: boolean | string ;
    // confirmation?: boolean;
    // type: string | string[];
    // subType: string | string[];
    // [key:string]: any; // If anyone will need it then add it!!!
}

export type PepRemoteLoaderOptions = LoadRemoteModuleOptions & PepRemoteLoaderData;

export type PepBlockDataType = 'SettingsBlock' | 'AddonBlock' | 'PageBlock';

export interface IBlockLoaderData {
    relation: NgComponentRelation, 
    addonPublicBaseURL: string
}

export interface IAddonBlockLoaderOptions {
    container: ViewContainerRef;
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