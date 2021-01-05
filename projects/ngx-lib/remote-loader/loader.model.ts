export interface AddonOptions {
    displayName: string;
    componentName: string;
    remoteEntry?: string;
    remoteName: string;
    exposedModule: string;
    deps: { [name: string]: object };
};

export interface ModuleLoader {
    getDependecies(): Promise<any>;

}
