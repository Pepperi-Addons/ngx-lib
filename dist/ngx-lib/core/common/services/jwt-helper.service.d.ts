import { HttpRequest } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class JwtHelperService {
    constructor();
    urlBase64Decode(str: string): string;
    private b64decode;
    private b64DecodeUnicode;
    decodeToken(token: string): any;
    getTokenExpirationDate(token: string): Date | null;
    isTokenExpired(token: string, offsetSeconds?: number): boolean;
    getAuthScheme(authScheme: Function | string | undefined, request: HttpRequest<any>): string;
    static ɵfac: i0.ɵɵFactoryDef<JwtHelperService, never>;
    static ɵprov: i0.ɵɵInjectableDef<JwtHelperService>;
}
