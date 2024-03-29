import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, delay, map, catchError } from 'rxjs/operators';
import { PepLoaderService } from '../services/loader.service';

@Injectable()
export class PepLoaderInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // console.warn('LoaderInterceptor');
        const newVer = 2;
        const loaderService = this.injector.get(PepLoaderService);
      //  console.log('show', req.url);       
        loaderService.show();

        return next.handle(req).pipe(
            // delay(3000),
            catchError((err) => throwError(err)),
            finalize(() =>  loaderService.hide())
        );

        // return next.handle(req).pipe(map(event => {
        //     if (event instanceof HttpResponse) {
        //        loaderService.hide();
        //     }

        //     return event;
        // }));
    }
}
