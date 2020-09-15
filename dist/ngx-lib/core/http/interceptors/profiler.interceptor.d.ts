import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ProfilerInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<ProfilerInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<ProfilerInterceptor>;
}
