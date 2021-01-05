import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';

@Injectable()
export class PepErrorInterceptor implements HttpInterceptor {
    // constructor() {} // private toastr: ToastrService

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // console.warn('ErrorInterceptor');

        return next.handle(req).pipe(
            // retry(2), TODO: Check if we want to retry
            catchError((error: HttpErrorResponse) => {
                // 401 handled in auth.interceptor
                if (error.status !== 401) {
                    // TODO: Show error in dialog.
                    // this.toastr.error(error.message);
                }
                return throwError(error);
            })
        );
    }
}
