import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { SessionService } from '../../common/services/session.service';
import { CookieService } from '../../common/services/cookie.service';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private readonly AUTH_HEADER = 'Authorization';
    private readonly PEPPERI_TOKEN_HEADER = 'PepperiSessionToken';
    private readonly WAPI_TOKEN_KEY = 'auth_token';
    private readonly PEPPERI_TOKEN_COOKIE = 'PepperiUserSettings';

    constructor(
        private sessionService: SessionService,
        private cookieService: CookieService,
        private http: HttpClient) {
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = this.getServerErrorMessage(error);
        }

        return throwError(errorMessage);
    }

    private getServerErrorMessage(error: HttpErrorResponse): string {
        switch (error.status) {
            case 404: {
                return `Not Found: ${error.message}`;
            }
            case 403: {
                return `Access Denied: ${error.message}`;
            }
            case 500: {
                return `Internal Server Error: ${error.message}`;
            }
            default: {
                return `Unknown Server Error\nError Code: ${error.status}\nMessage: ${error.message}`;
            }
        }
    }

    // Add authorization token if the token exist.
    private addAuthorizationToken(httpOptions: any = {}): any {
        if (!httpOptions.headers.has(this.AUTH_HEADER)) {
            const idpToken = this.sessionService.getIdpToken();

            if (idpToken) {
                httpOptions.headers = httpOptions.headers.set(this.AUTH_HEADER, `Bearer ${idpToken}`);
            }
        }

        return httpOptions;
    }

    // Add web api token if calling to wapi domain.
    private addWebApiToken(url: string, httpOptions: any = {}): any {
        if (!httpOptions.headers.has(this.PEPPERI_TOKEN_HEADER)) {
            const wapiBaseUrl = this.sessionService.getWapiBaseUrl();

            if (wapiBaseUrl && url.match(new RegExp(wapiBaseUrl, 'g'))) {
                // TODO:
                // const webApiToken = this.sessionService.getWapiToken();
                try {
                    const userSettingCookie = this.cookieService.get(this.PEPPERI_TOKEN_COOKIE);
                    const webApiToken = JSON.parse(userSettingCookie).values.items[this.WAPI_TOKEN_KEY];
                    if (webApiToken) {
                        httpOptions.headers = httpOptions.headers.set(this.PEPPERI_TOKEN_HEADER, webApiToken);
                    }
                }
                catch {
                    // Do nothing.
                }
            }
        }

        return httpOptions;
    }

    private setDefaultHeaderOptions(url: string, httpOptions: any = {}): any {
        if (!httpOptions.headers) {
            httpOptions.headers = new HttpHeaders();
        }

        // Add content type
        if (!httpOptions.headers.has('Content-Type')) {
            httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/json');
        }

        httpOptions = this.addAuthorizationToken(httpOptions);
        httpOptions = this.addWebApiToken(url, httpOptions);

        return httpOptions;
    }

    // getTextFile(filename: string): void {
    //     // The Observable returned by get() is of type Observable<string>
    //     // because a text response was specified.
    //     // There's no need to pass a <string> type parameter to get().
    //     // return this.http.get(filename, {responseType: 'text'})
    //     //     .pipe(
    //     //         tap( // Log the result or error
    //     //         data => this.log(filename, data),
    //     //         error => this.logError(filename, error)
    //     //         )
    //     // );
    // }

    getHttpCall(url: string, httpOptions: any = {}): Observable<any> {

        httpOptions = this.setDefaultHeaderOptions(url, httpOptions);

        return this.http.get(url, httpOptions)
            .pipe(catchError(this.handleError.bind(this)));
        //     .subscribe(
        //         (res) => console.log(''),
        //         (error) => console.log(''),
        //         () => {}
        // );
    }

    postHttpCall(url: string, body: any | null, httpOptions: any = {}): Observable<any> {

        httpOptions = this.setDefaultHeaderOptions(url, httpOptions);

        return this.http.post(url, body, httpOptions)
            .pipe(catchError(this.handleError.bind(this)));
        //     .subscribe(
        //         (res) => console.log(''),
        //         (error) => console.log(''),
        //         () => {}
        // );
    }

    getWapiApiCall(url: string, httpOptions: any = {}): Observable<any> {
        const wapiBaseUrl = this.sessionService.getWapiBaseUrl();
        return this.getHttpCall(`${wapiBaseUrl}${url}`, httpOptions);
    }

    postWapiApiCall(url: string, body: any | null, httpOptions: any = {}): Observable<any> {
        const wapiBaseUrl = this.sessionService.getWapiBaseUrl();
        return this.postHttpCall(`${wapiBaseUrl}${url}`, body, httpOptions);
    }

    getPapiApiCall(url: string, httpOptions: any = {}): Observable<any> {
        const papiBaseUrl = this.sessionService.getPapiBaseUrl();
        return this.getHttpCall(`${papiBaseUrl}${url}`, httpOptions);
    }

    postPapiApiCall(url: string, body: any | null, httpOptions: any = {}): Observable<any> {
        const papiBaseUrl = this.sessionService.getPapiBaseUrl();
        return this.postHttpCall(`${papiBaseUrl}${url}`, body, httpOptions);
    }
}
