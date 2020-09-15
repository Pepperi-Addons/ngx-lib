import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.warn('LoaderInterceptor');

        const loaderService = this.injector.get(LoaderService);
        loaderService.show();

        // TODO: Remove the delay.
        return next.handle(req).pipe(
            delay(3000),
            finalize(() => loaderService.hide())
        );
    }
}