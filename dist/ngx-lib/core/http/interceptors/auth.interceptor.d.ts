import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../../common/services/session.service';
import * as i0 from "@angular/core";
export declare class AuthInterceptor implements HttpInterceptor {
    private sessionService;
    private AUTH_HEADER;
    private PEPPERI_TOKEN_HEADER;
    private PEPPERI_CONSUMER_KEY_HEADER;
    constructor(sessionService: SessionService);
    private addAuthorizationToken;
    private addPepperiConsumerToken;
    private addWebApiToken;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<AuthInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<AuthInterceptor>;
}
