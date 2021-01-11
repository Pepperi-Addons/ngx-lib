// import { Injectable } from '@angular/core';
// import {
//     HttpEvent,
//     HttpRequest,
//     HttpHandler,
//     HttpInterceptor,
//     HttpResponse
// } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { camelCase, mapKeys } from 'lodash';
// import { map } from 'rxjs/operators';

// @Injectable()
// export class PepConvertInterceptor implements HttpInterceptor {
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         console.warn('ConvertInterceptor');

//         return next.handle(req).pipe(
//             map((event: HttpEvent<any>) => {
//                 if (event instanceof HttpResponse) {
//                     const camelCaseObject = mapKeys(event.body, (v, k) => camelCase(k));
//                     const modEvent = event.clone({ body: camelCaseObject });

//                     return modEvent;
//                 }
//             })
//         );
//     }
// }
