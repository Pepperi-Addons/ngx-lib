import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { SessionService } from '../../common/services/session.service';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(
        private sessionService: SessionService,
        private http: HttpClient) {
    }

    getTextFile(filename: string) {
        // The Observable returned by get() is of type Observable<string>
        // because a text response was specified.
        // There's no need to pass a <string> type parameter to get().
        // return this.http.get(filename, {responseType: 'text'})
        //     .pipe(
        //         tap( // Log the result or error
        //         data => this.log(filename, data),
        //         error => this.logError(filename, error)
        //         )
        // );
    }

    getHttpCall(url: string, httpOptions = {}): Observable<any> {
        return this.http.get(url, httpOptions)
            .pipe(catchError(this.handleError.bind(this)));
        //     .subscribe(
        //         (res) => console.log(''),
        //         (error) => console.log(''),
        //         () => {}
        // );
    }

    postHttpCall(url: string, body = {}, httpOptions = {}): Observable<any> {
        return this.http.post(url, body, httpOptions)
            .pipe(catchError(this.handleError.bind(this)));
        //     .subscribe(
        //         (res) => console.log(''),
        //         (error) => console.log(''),
        //         () => {}
        // );
    }

    getWapiApiCall(url: string, httpOptions = {}): Observable<any> {
        const wapiBaseUrl = this.sessionService.getWapiBaseUrl();
        return this.getHttpCall(`${wapiBaseUrl}${url}`, httpOptions);
    }

    postWapiApiCall(url: string, body = {}, httpOptions = {}): Observable<any> {
        const wapiBaseUrl = this.sessionService.getWapiBaseUrl();
        return this.postHttpCall(`${wapiBaseUrl}${url}`, body, httpOptions);
    }

    getPapiApiCall(url: string, httpOptions = {}): Observable<any> {
        const papiBaseUrl = this.sessionService.getPapiBaseUrl();
        return this.getHttpCall(`${papiBaseUrl}${url}`, httpOptions);
    }

    postPapiApiCall(url: string, body = {}, httpOptions = {}): Observable<any> {
        const papiBaseUrl = this.sessionService.getPapiBaseUrl();
        return this.postHttpCall(`${papiBaseUrl}${url}`, body, httpOptions);
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
}
