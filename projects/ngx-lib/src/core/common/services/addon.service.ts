import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { HttpService } from '../../http/services/http.service';
import { Observable } from 'rxjs';

/*
    This service is the webapp api for addon usege.
*/
@Injectable({
    providedIn: 'root'
})
export class AddonService {
    private readonly ADDON_ASSETS_PATH_KEY = 'AddonAssetsPath';

    constructor(
        private sessionService: SessionService,
        private httpService: HttpService
    ) {}

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
        httpOptions = {}): Observable<any>{
        return this.httpService.getPapiApiCall(`/addons/api/${addonUUID}/${fileName}/${functionName}`, httpOptions);
    }

    postAddonApiCall(
        addonUUID: string,
        fileName: string,
        functionName: string,
        body = {},
        httpOptions = {}): Observable<any>  {
        return this.httpService.postPapiApiCall(`/addons/api/${addonUUID}/${fileName}/${functionName}`, body, httpOptions);
    }
}