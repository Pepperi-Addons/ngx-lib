import { Injectable } from '@angular/core';
import { AddonOptions } from '@pepperi-addons/ngx-lib/remote-loader';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<AddonOptions[]> {
        return Promise.resolve([
            {
                remoteEntry: 'http://localhost:4401/lazy-a.umd.js',
                remoteName: 'sub-addon-1',
                exposedModule: 'LazyAModule',
                displayName: 'Sub Addon 1',
                componentName: 'LazyAComponent'
            },
            {
                remoteEntry: 'http://localhost:4402/lazy-b.umd.js',
                remoteName: 'sub-addon-2',
                exposedModule: 'LazyBModule',
                displayName: 'Sub Addon 2',
                componentName: 'LazyBComponent'
            },
            {
                remoteEntry: 'http://localhost:4403/lazy-c.umd.js',
                remoteName: 'sub-addon-3',
                exposedModule: 'LazyCModule',
                displayName: 'Sub Addon 3',
                componentName: 'LazyCComponent'
            }
        ] as AddonOptions[]);
    }
}
