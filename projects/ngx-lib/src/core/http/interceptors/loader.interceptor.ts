import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, delay, map, catchError } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.warn('LoaderInterceptor');

        const loaderService = this.injector.get(LoaderService);
        loaderService.show();

        return next.handle(req).pipe(
            // delay(3000),
            catchError((err) => {
                loaderService.hide();
                return throwError(err);
            }),
            finalize(() => loaderService.hide())
        );

        // return next.handle(req).pipe(map(event => {
        //     if (event instanceof HttpResponse) {
        //        loaderService.hide();
        //     }

        //     return event;
        // }));
    }
}
