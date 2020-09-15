import { JwtHelperService } from './jwt-helper.service';
import * as i0 from "@angular/core";
export declare class SessionService {
    private jwtHelper;
    private readonly IDP_TOKEN_KEY;
    private readonly PAPI_BASE_URL_KEY;
    private readonly WAPI_TOKEN_KEY;
    private readonly WAPI_BASE_URL_KEY;
    private readonly PEPPERI_CONSUMER_TOKEN;
    constructor(jwtHelper: JwtHelperService);
    private getParseToken;
    setObject<T>(key: string, object: T): void;
    getObject<T = any>(key: string): T;
    getPepperiConsumerToken(): string;
    gettWapiToken(): string;
    getWapiBaseUrl(): string;
    getIdpToken(): string;
    getPapiBaseUrl(): string;
    static ɵfac: i0.ɵɵFactoryDef<SessionService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SessionService>;
}
