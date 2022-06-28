import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export type PepPluginOptions = LoadRemoteModuleOptions & {
    addonId?: string;
    displayName?: string;
    componentName?: string;
};
    