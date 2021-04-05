import { Injectable } from '@angular/core';
import { PepSessionService } from './session.service';
import { PepHttpService } from '../../http/services/http.service';
import { Observable } from 'rxjs';

/*
    This service is the webapp api for addon usege.
*/
@Injectable({
    providedIn: 'root',
})
export class PepAddonService {
    private readonly ADDON_ASSETS_PATH_KEY = 'AddonAssetsPath';
    private readonly ADDON_API_RELATIVE_PATH = '/addons/api';
    private readonly ADDON_API_ASYNC_RELATIVE_PATH = `${this.ADDON_API_RELATIVE_PATH}/async`;

    constructor(
        private sessionService: PepSessionService,
        private httpService: PepHttpService
    ) {}

    private getAddonBaseRelativePath(isAsync: boolean): string {
        return isAsync
            ? this.ADDON_API_ASYNC_RELATIVE_PATH
            : this.ADDON_API_RELATIVE_PATH;
    }

    getAddonStaticFolder(): string {
        // return this.assetsPath;
        return this.sessionService.getObject(this.ADDON_ASSETS_PATH_KEY) || '';
    }

    setAddonStaticFolder(path: string): void {
        // this.assetsPath = path;
        return this.sessionService.setObject(this.ADDON_ASSETS_PATH_KEY, path);
    }

    getAddonApiCall(
        addonUUID: string,
        fileName: string,
        functionName: string,
        httpOptions = {},
        isAsync = false
    ): Observable<any> {
        const async = isAsync ? '/async' : '';
        return this.httpService.getPapiApiCall(
            `${this.getAddonBaseRelativePath(
                isAsync
            )}/${addonUUID}/${fileName}/${functionName}`,
            httpOptions
        );
    }

    postAddonApiCall(
        addonUUID: string,
        fileName: string,
        functionName: string,
        body = {},
        httpOptions = {},
        isAsync = false
    ): Observable<any> {
        const async = isAsync ? '/async' : '';
        return this.httpService.postPapiApiCall(
            `${this.getAddonBaseRelativePath(
                isAsync
            )}/${addonUUID}/${fileName}/${functionName}`,
            body,
            httpOptions
        );
    }
}
