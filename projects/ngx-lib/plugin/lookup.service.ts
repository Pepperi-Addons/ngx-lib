import { Injectable } from '@angular/core';
import { PepPluginOptions } from './plugin.model';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<PepPluginOptions[]> {
        return Promise.resolve([
            {
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './Download',

                displayName: 'Download',
                componentName: 'DownloadComponent'
            },
            {
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './Upload',

                displayName: 'Upload',
                componentName: 'UploadComponent'
            },
            {
                type: 'module',
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                exposedModule: './Analyze',

                displayName: 'Analyze',
                componentName: 'AnalyzeComponent'
            },
            {
                type: 'module',
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                exposedModule: './Enrich',

                displayName: 'Enrich',
                componentName: 'EnrichComponent'
            }
        ] as PepPluginOptions[]);
    }
}
