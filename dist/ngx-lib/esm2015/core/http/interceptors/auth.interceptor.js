import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../common/services/session.service";
export class AuthInterceptor {
    // private SESSION_TOKEN_KEY = 'auth_token';
    // private token = 'secrettoken';
    // private refreshTokenInProgress = false;
    // private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    constructor(sessionService) {
        this.sessionService = sessionService;
        this.AUTH_HEADER = 'Authorization';
        this.PEPPERI_TOKEN_HEADER = 'PepperiSessionToken';
        this.PEPPERI_CONSUMER_KEY_HEADER = 'X-Pepperi-ConsumerKey';
    }
    // Add authorization token if the token exist.
    addAuthorizationToken(request) {
        if (!request.headers.has(this.AUTH_HEADER)) {
            const idpToken = this.sessionService.getIdpToken();
            if (idpToken) {
                request = request.clone({
                    headers: request.headers.set(this.AUTH_HEADER, `Bearer ${idpToken}`)
                });
            }
        }
        return request;
    }
    // Add pepperi consumer token if calling to papi domain.
    addPepperiConsumerToken(request) {
        if (!request.headers.has(this.PEPPERI_CONSUMER_KEY_HEADER)) {
            const papiBaseUrl = this.sessionService.getPapiBaseUrl();
            if (papiBaseUrl && request.url.match(new RegExp(papiBaseUrl, 'g'))) {
                const pepperiConsumerToken = this.sessionService.getPepperiConsumerToken();
                if (pepperiConsumerToken) {
                    request = request.clone({
                        headers: request.headers.set(this.PEPPERI_CONSUMER_KEY_HEADER, pepperiConsumerToken)
                    });
                }
            }
        }
        return request;
    }
    // Add web api token if calling to wapi domain.
    addWebApiToken(request) {
        if (!request.headers.has(this.PEPPERI_TOKEN_HEADER)) {
            const wapiBaseUrl = this.sessionService.getWapiBaseUrl();
            if (wapiBaseUrl && request.url.match(new RegExp(wapiBaseUrl, 'g'))) {
                const webApiToken = this.sessionService.gettWapiToken();
                if (webApiToken) {
                    request = request.clone({
                        headers: request.headers.set(this.PEPPERI_TOKEN_HEADER, webApiToken)
                    });
                }
            }
        }
        return request;
    }
    intercept(req, next) {
        console.warn('AuthInterceptor');
        // Add content type
        if (!req.headers.has('Content-Type')) {
            req = req.clone({
                headers: req.headers.set('Content-Type', 'application/json')
            });
        }
        req = this.addAuthorizationToken(req);
        req = this.addPepperiConsumerToken(req);
        req = this.addWebApiToken(req);
        return next.handle(req);
        // TODO: Check if we need this - this is an advance code that try to refresh the token in case of expired.
        // return next.handle(req).pipe(
        //     catchError((error: HttpErrorResponse) => {
        //         if (error && error.status === 401) {
        //             // 401 errors are most likely going to be because we have an expired token that we need to refresh.
        //             if (this.refreshTokenInProgress) {
        //                 // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
        //                 // which means the new token is ready and we can retry the request again
        //                 return this.refreshTokenSubject.pipe(
        //                     filter(result => result !== null),
        //                     take(1),
        //                     switchMap(() => next.handle(this.addAuthenticationToken(req)))
        //                 );
        //             } else {
        //                 this.refreshTokenInProgress = true;
        //                 // Set the refreshTokenSubject to null so that subsequent API calls will
        //                 // wait until the new token has been retrieved
        //                 this.refreshTokenSubject.next(null);
        //                 return this.refreshAccessToken().pipe(
        //                     switchMap((success: boolean) => {
        //                         this.refreshTokenSubject.next(success);
        //                         return next.handle(this.addAuthenticationToken(req));
        //                     }),
        //                     // When the call to refreshToken completes we reset the refreshTokenInProgress to false
        //                     // for the next time the token needs to be refreshed
        //                     finalize(() => (this.refreshTokenInProgress = false))
        //                 );
        //             }
        //         } else {
        //             return throwError(error);
        //         }
        //     })
        // );
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(i0.ɵɵinject(i1.SessionService)); };
AuthInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.SessionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvc3JjL2NvcmUvaHR0cC9pbnRlcmNlcHRvcnMvYXV0aC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFhM0MsTUFBTSxPQUFPLGVBQWU7SUFLeEIsNENBQTRDO0lBQzVDLGlDQUFpQztJQUNqQywwQ0FBMEM7SUFDMUMsc0ZBQXNGO0lBRXRGLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVQxQyxnQkFBVyxHQUFHLGVBQWUsQ0FBQztRQUM5Qix5QkFBb0IsR0FBRyxxQkFBcUIsQ0FBQztRQUM3QyxnQ0FBMkIsR0FBRyx1QkFBdUIsQ0FBQztJQU9ULENBQUM7SUFFdEQsOENBQThDO0lBQ3RDLHFCQUFxQixDQUFDLE9BQXlCO1FBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVuRCxJQUFJLFFBQVEsRUFBRTtnQkFDVixPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDcEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxRQUFRLEVBQUUsQ0FBQztpQkFDdkUsQ0FBQyxDQUFDO2FBQ047U0FDSjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCx3REFBd0Q7SUFDaEQsdUJBQXVCLENBQUMsT0FBeUI7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIs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QUNuQix3Q0FBd0M7UUFDeEMsWUFBWTtRQUNaLFNBQVM7UUFDVCxLQUFLO0lBQ1QsQ0FBQzs7OEVBcEhRLGVBQWU7dURBQWYsZUFBZSxXQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgSHR0cEV2ZW50LFxyXG4gICAgSHR0cEludGVyY2VwdG9yLFxyXG4gICAgSHR0cEhhbmRsZXIsXHJcbiAgICBIdHRwUmVxdWVzdCxcclxuICAgIEh0dHBFcnJvclJlc3BvbnNlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgZmluYWxpemUsIHRha2UsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvc2Vzc2lvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICBwcml2YXRlIEFVVEhfSEVBREVSID0gJ0F1dGhvcml6YXRpb24nO1xyXG4gICAgcHJpdmF0ZSBQRVBQRVJJX1RPS0VOX0hFQURFUiA9ICdQZXBwZXJpU2Vzc2lvblRva2VuJztcclxuICAgIHByaXZhdGUgUEVQUEVSSV9DT05TVU1FUl9LRVlfSEVBREVSID0gJ1gtUGVwcGVyaS1Db25zdW1lcktleSc7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBTRVNTSU9OX1RPS0VOX0tFWSA9ICdhdXRoX3Rva2VuJztcclxuICAgIC8vIHByaXZhdGUgdG9rZW4gPSAnc2VjcmV0dG9rZW4nO1xyXG4gICAgLy8gcHJpdmF0ZSByZWZyZXNoVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAvLyBwcml2YXRlIHJlZnJlc2hUb2tlblN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlKSB7fVxyXG5cclxuICAgIC8vIEFkZCBhdXRob3JpemF0aW9uIHRva2VuIGlmIHRoZSB0b2tlbiBleGlzdC5cclxuICAgIHByaXZhdGUgYWRkQXV0aG9yaXphdGlvblRva2VuKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBIdHRwUmVxdWVzdDxhbnk+IHtcclxuICAgICAgICBpZiAoIXJlcXVlc3QuaGVhZGVycy5oYXModGhpcy5BVVRIX0hFQURFUikpIHtcclxuICAgICAgICAgICAgY29uc3QgaWRwVG9rZW4gPSB0aGlzLnNlc3Npb25TZXJ2aWNlLmdldElkcFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaWRwVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMuc2V0KHRoaXMuQVVUSF9IRUFERVIsIGBCZWFyZXIgJHtpZHBUb2tlbn1gKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBwZXBwZXJpIGNvbnN1bWVyIHRva2VuIGlmIGNhbGxpbmcgdG8gcGFwaSBkb21haW4uXHJcbiAgICBwcml2YXRlIGFkZFBlcHBlcmlDb25zdW1lclRva2VuKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBIdHRwUmVxdWVzdDxhbnk+IHtcclxuICAgICAgICBpZiAoIXJlcXVlc3QuaGVhZGVycy5oYXModGhpcy5QRVBQRVJJX0NPTlNVTUVSX0tFWV9IRUFERVIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcGlCYXNlVXJsID0gdGhpcy5zZXNzaW9uU2VydmljZS5nZXRQYXBpQmFzZVVybCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcGlCYXNlVXJsICYmIHJlcXVlc3QudXJsLm1hdGNoKG5ldyBSZWdFeHAocGFwaUJhc2VVcmwsICdnJykpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZXBwZXJpQ29uc3VtZXJUb2tlbiA9IHRoaXMuc2Vzc2lvblNlcnZpY2UuZ2V0UGVwcGVyaUNvbnN1bWVyVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmIChwZXBwZXJpQ29uc3VtZXJUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLnNldCh0aGlzLlBFUFBFUklfQ09OU1VNRVJfS0VZX0hFQURFUiwgcGVwcGVyaUNvbnN1bWVyVG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCB3ZWIgYXBpIHRva2VuIGlmIGNhbGxpbmcgdG8gd2FwaSBkb21haW4uXHJcbiAgICBwcml2YXRlIGFkZFdlYkFwaVRva2VuKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBIdHRwUmVxdWVzdDxhbnk+IHtcclxuICAgICAgICBpZiAoIXJlcXVlc3QuaGVhZGVycy5oYXModGhpcy5QRVBQRVJJX1RPS0VOX0hFQURFUikpIHtcclxuICAgICAgICAgICAgY29uc3Qgd2FwaUJhc2VVcmwgPSB0aGlzLnNlc3Npb25TZXJ2aWNlLmdldFdhcGlCYXNlVXJsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAod2FwaUJhc2VVcmwgJiYgcmVxdWVzdC51cmwubWF0Y2gobmV3IFJlZ0V4cCh3YXBpQmFzZVVybCwgJ2cnKSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlYkFwaVRva2VuID0gdGhpcy5zZXNzaW9uU2VydmljZS5nZXR0V2FwaVRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAod2ViQXBpVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycy5zZXQodGhpcy5QRVBQRVJJX1RPS0VOX0hFQURFUiwgd2ViQXBpVG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignQXV0aEludGVyY2VwdG9yJyk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBjb250ZW50IHR5cGVcclxuICAgICAgICBpZiAoIXJlcS5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykpIHtcclxuICAgICAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcSA9IHRoaXMuYWRkQXV0aG9yaXphdGlvblRva2VuKHJlcSk7XHJcblxyXG4gICAgICAgIHJlcSA9IHRoaXMuYWRkUGVwcGVyaUNvbnN1bWVyVG9rZW4ocmVxKTtcclxuXHJcbiAgICAgICAgcmVxID0gdGhpcy5hZGRXZWJBcGlUb2tlbihyZXEpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogQ2hlY2sgaWYgd2UgbmVlZCB0aGlzIC0gdGhpcyBpcyBhbiBhZHZhbmNlIGNvZGUgdGhhdCB0cnkgdG8gcmVmcmVzaCB0aGUgdG9rZW4gaW4gY2FzZSBvZiBleHBpcmVkLlxyXG4gICAgICAgIC8vIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnBpcGUoXHJcbiAgICAgICAgLy8gICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gNDAxIGVycm9ycyBhcmUgbW9zdCBsaWtlbHkgZ29pbmcgdG8gYmUgYmVjYXVzZSB3ZSBoYXZlIGFuIGV4cGlyZWQgdG9rZW4gdGhhdCB3ZSBuZWVkIHRvIHJlZnJlc2guXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMucmVmcmVzaFRva2VuSW5Qcm9ncmVzcykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBJZiByZWZyZXNoVG9rZW5JblByb2dyZXNzIGlzIHRydWUsIHdlIHdpbGwgd2FpdCB1bnRpbCByZWZyZXNoVG9rZW5TdWJqZWN0IGhhcyBhIG5vbi1udWxsIHZhbHVlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHdoaWNoIG1lYW5zIHRoZSBuZXcgdG9rZW4gaXMgcmVhZHkgYW5kIHdlIGNhbiByZXRyeSB0aGUgcmVxdWVzdCBhZ2FpblxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0LnBpcGUoXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmaWx0ZXIocmVzdWx0ID0+IHJlc3VsdCAhPT0gbnVsbCksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0YWtlKDEpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKCgpID0+IG5leHQuaGFuZGxlKHRoaXMuYWRkQXV0aGVudGljYXRpb25Ub2tlbihyZXEpKSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUb2tlbkluUHJvZ3Jlc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gU2V0IHRoZSByZWZyZXNoVG9rZW5TdWJqZWN0IHRvIG51bGwgc28gdGhhdCBzdWJzZXF1ZW50IEFQSSBjYWxscyB3aWxsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHdhaXQgdW50aWwgdGhlIG5ldyB0b2tlbiBoYXMgYmVlbiByZXRyaWV2ZWRcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0Lm5leHQobnVsbCk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoQWNjZXNzVG9rZW4oKS5waXBlKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0Lm5leHQoc3VjY2Vzcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuYWRkQXV0aGVudGljYXRpb25Ub2tlbihyZXEpKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgY2FsbCB0byByZWZyZXNoVG9rZW4gY29tcGxldGVzIHdlIHJlc2V0IHRoZSByZWZyZXNoVG9rZW5JblByb2dyZXNzIHRvIGZhbHNlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBmb3IgdGhlIG5leHQgdGltZSB0aGUgdG9rZW4gbmVlZHMgdG8gYmUgcmVmcmVzaGVkXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiAodGhpcy5yZWZyZXNoVG9rZW5JblByb2dyZXNzID0gZmFsc2UpKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSByZWZyZXNoQWNjZXNzVG9rZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vICAgICByZXR1cm4gb2YoJ3NlY3JldCB0b2tlbicpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHByaXZhdGUgYWRkQXV0aGVudGljYXRpb25Ub2tlbihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogSHR0cFJlcXVlc3Q8YW55PiB7XHJcbiAgICAvLyAgICAgLy8gSWYgd2UgZG8gbm90IGhhdmUgYSB0b2tlbiB5ZXQgdGhlbiB3ZSBzaG91bGQgbm90IHNldCB0aGUgaGVhZGVyLlxyXG4gICAgLy8gICAgIC8vIEhlcmUgd2UgY291bGQgZmlyc3QgcmV0cmlldmUgdGhlIHRva2VuIGZyb20gd2hlcmUgd2Ugc3RvcmUgaXQuXHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLnRva2VuKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBJZiB5b3UgYXJlIGNhbGxpbmcgYW4gb3V0c2lkZSBkb21haW4gdGhlbiBkbyBub3QgYWRkIHRoZSB0b2tlbi5cclxuICAgIC8vICAgICBpZiAoIXJlcXVlc3QudXJsLm1hdGNoKC93d3cubXlkb21haW4uY29tXFwvLykpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiByZXF1ZXN0LmNsb25lKHtcclxuICAgIC8vICAgICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLnNldCh0aGlzLkFVVEhfSEVBREVSLCBgQmVhcmVyICR7dGhpcy50b2tlbn1gKVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG59Il19