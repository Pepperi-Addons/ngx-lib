import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../../common/services/session.service';
import * as i0 from "@angular/core";
export declare class HttpService {
    private sessionService;
    private http;
    constructor(sessionService: SessionService, http: HttpClient);
    getTextFile(filename: string): void;
    getHttpCall(url: string, httpOptions?: {}): Observable<any>;
    postHttpCall(url: string, body?: {}, httpOptions?: {}): Observable<any>;
    getWapiApiCall(url: string, httpOptions?: {}): Observable<any>;
    postWapiApiCall(url: string, body?: {}, httpOptions?: {}): Observable<any>;
    getPapiApiCall(url: string, httpOptions?: {}): Observable<any>;
    postPapiApiCall(url: string, body?: {}, httpOptions?: {}): Observable<any>;
    private handleError;
    private getServerErrorMessage;
    static ɵfac: i0.ɵɵFactoryDef<HttpService, never>;
    static ɵprov: i0.ɵɵInjectableDef<HttpService>;
}
