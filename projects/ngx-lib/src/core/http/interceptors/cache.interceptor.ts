import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class PepCacheInterceptor implements HttpInterceptor {
    private cache = new Map<string, any>();

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (req.method !== 'GET') {
            return next.handle(req);
        }

        // console.warn('CacheInterceptor');

        const cachedResponse = this.cache.get(req.url);
        if (cachedResponse) {
            return of(cachedResponse);
        }

        return next.handle(req).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    this.cache.set(req.url, event);
                }
            })
        );
    }
}
