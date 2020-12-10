import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class FakeInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes('fake-call')) {
            return next.handle(req);
        }

        // console.warn('FakeInterceptor');

        const body = { firstName: 'Mock', lastName: 'Faker' };
        return of(new HttpResponse({ status: 200, body: body }));
    }
}