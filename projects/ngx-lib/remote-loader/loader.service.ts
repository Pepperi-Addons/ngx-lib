import { Injectable, NgModuleFactory } from '@angular/core';
const SystemJS = (window as any).System;

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    constructor() { }

    register(modules: { [name: string]: object }): Promise<this> {
        const imports: { [name: string]: string } = {};
        Object.keys(modules).forEach(key => {
            imports[key] = 'app:' + key;
        });
        const script = document.createElement('script');
        script.type = 'systemjs-importmap';
        script.textContent = JSON.stringify({ imports }, null, 3);
        document.head.appendChild(script);
        return SystemJS.prepareImport().then(() => {
            Object.keys(modules).forEach(key => {
                SystemJS.set('app:' + key, modules[key]);
            });
            return this;
        });
    }

    load<T>(path): Promise<NgModuleFactory<T>> {
        return SystemJS.import(path).then(module => module)
    }





}
