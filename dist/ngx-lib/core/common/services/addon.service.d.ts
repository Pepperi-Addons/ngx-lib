import { SessionService } from './session.service';
import { HttpService } from '../../http/services/http.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AddonService {
    private sessionService;
    private httpService;
    private readonly ADDON_ASSETS_PATH_KEY;
    constructor(sessionService: SessionService, httpService: HttpService);
    getAddonStaticFolder(): string;
    setAddonStaticFolder(path: string): void;
    getAddonApiCall(addonUUID: string, fileName: string, functionName: string, httpOptions?: {}): Observable<any>;
    postAddonApiCall(addonUUID: string, fileName: string, functionName: string, body?: {}, httpOptions?: {}): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<AddonService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AddonService>;
}
