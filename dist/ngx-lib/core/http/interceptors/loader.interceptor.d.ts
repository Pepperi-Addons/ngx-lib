import { Injector } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoaderInterceptor implements HttpInterceptor {
    private injector;
    constructor(injector: Injector);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<LoaderInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<LoaderInterceptor>;
}
