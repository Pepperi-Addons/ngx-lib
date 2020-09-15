import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../common/services/session.service";
import * as i2 from "@angular/common/http";
export class HttpService {
    constructor(sessionService, http) {
        this.sessionService = sessionService;
        this.http = http;
    }
    getTextFile(filename) {
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
    getHttpCall(url, httpOptions = {}) {
        return this.http.get(url, httpOptions)
            .pipe(catchError(this.handleError.bind(this)));
        //     .subscribe(
        //         (res) => console.log(''),
        //         (error) => console.log(''),
        //         () => {}
        // );
    }
    postHttpCall(url, body = {}, httpOptions = {}) {
        return this.http.post(url, body, httpOptions)
            .pipe(catchError(this.handleError.bind(this)));
        //     .subscribe(
        //         (res) => console.log(''),
        //         (error) => console.log(''),
        //         () => {}
        // );
    }
    getWapiApiCall(url, httpOptions = {}) {
        const wapiBaseUrl = this.sessionService.getWapiBaseUrl();
        return this.getHttpCall(`${wapiBaseUrl}${url}`, httpOptions);
    }
    postWapiApiCall(url, body = {}, httpOptions = {}) {
        const wapiBaseUrl = this.sessionService.getWapiBaseUrl();
        return this.postHttpCall(`${wapiBaseUrl}${url}`, body, httpOptions);
    }
    getPapiApiCall(url, httpOptions = {}) {
        const papiBaseUrl = this.sessionService.getPapiBaseUrl();
        return this.getHttpCall(`${papiBaseUrl}${url}`, httpOptions);
    }
    postPapiApiCall(url, body = {}, httpOptions = {}) {
        const papiBaseUrl = this.sessionService.getPapiBaseUrl();
        return this.postHttpCall(`${papiBaseUrl}${url}`, body, httpOptions);
    }
    handleError(error) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = this.getServerErrorMessage(error);
        }
        return throwError(errorMessage);
    }
    getServerErrorMessage(error) {
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
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(i0.ɵɵinject(i1.SessionService), i0.ɵɵinject(i2.HttpClient)); };
HttpService.ɵprov = i0.ɵɵdefineInjectable({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.SessionService }, { type: i2.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9zcmMvY29yZS9odHRwL3NlcnZpY2VzL2h0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFTLFVBQVUsRUFBTyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTXhELE1BQU0sT0FBTyxXQUFXO0lBQ3BCLFlBQ1ksY0FBOEIsRUFDOUIsSUFBZ0I7UUFEaEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDNUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFnQjtRQUN4QixpRUFBaUU7UUFDakUseUNBQXlDO1FBQ3pDLDhEQUE4RDtRQUM5RCx5REFBeUQ7UUFDekQsYUFBYTtRQUNiLDBDQUEwQztRQUMxQyw0Q0FBNEM7UUFDNUMsa0RBQWtEO1FBQ2xELFlBQVk7UUFDWixLQUFLO0lBQ1QsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFXLEVBQUUsV0FBVyxHQUFHLEVBQUU7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDO2FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELGtCQUFrQjtRQUNsQixvQ0FBb0M7UUFDcEMsc0NBQXNDO1FBQ3RDLG1CQUFtQjtRQUNuQixLQUFLO0lBQ1QsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFXLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxXQUFXLEdBQUcsRUFBRTtRQUNqRCxPQUFPLElBQUksQ0FBQyxJQUFJ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fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFBhcmFtcywgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgcmV0cnksIGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvc2Vzc2lvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRleHRGaWxlKGZpbGVuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBUaGUgT2JzZXJ2YWJsZSByZXR1cm5lZCBieSBnZXQoKSBpcyBvZiB0eXBlIE9ic2VydmFibGU8c3RyaW5nPlxyXG4gICAgICAgIC8vIGJlY2F1c2UgYSB0ZXh0IHJlc3BvbnNlIHdhcyBzcGVjaWZpZWQuXHJcbiAgICAgICAgLy8gVGhlcmUncyBubyBuZWVkIHRvIHBhc3MgYSA8c3RyaW5nPiB0eXBlIHBhcmFtZXRlciB0byBnZXQoKS5cclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChmaWxlbmFtZSwge3Jlc3BvbnNlVHlwZTogJ3RleHQnfSlcclxuICAgICAgICAvLyAgICAgLnBpcGUoXHJcbiAgICAgICAgLy8gICAgICAgICB0YXAoIC8vIExvZyB0aGUgcmVzdWx0IG9yIGVycm9yXHJcbiAgICAgICAgLy8gICAgICAgICBkYXRhID0+IHRoaXMubG9nKGZpbGVuYW1lLCBkYXRhKSxcclxuICAgICAgICAvLyAgICAgICAgIGVycm9yID0+IHRoaXMubG9nRXJyb3IoZmlsZW5hbWUsIGVycm9yKVxyXG4gICAgICAgIC8vICAgICAgICAgKVxyXG4gICAgICAgIC8vICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SHR0cENhbGwodXJsOiBzdHJpbmcsIGh0dHBPcHRpb25zID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvci5iaW5kKHRoaXMpKSk7XHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gICAgICAgICAocmVzKSA9PiBjb25zb2xlLmxvZygnJyksXHJcbiAgICAgICAgLy8gICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKCcnKSxcclxuICAgICAgICAvLyAgICAgICAgICgpID0+IHt9XHJcbiAgICAgICAgLy8gKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0SHR0cENhbGwodXJsOiBzdHJpbmcsIGJvZHkgPSB7fSwgaHR0cE9wdGlvbnMgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvci5iaW5kKHRoaXMpKSk7XHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gICAgICAgICAocmVzKSA9PiBjb25zb2xlLmxvZygnJyksXHJcbiAgICAgICAgLy8gICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKCcnKSxcclxuICAgICAgICAvLyAgICAgICAgICgpID0+IHt9XHJcbiAgICAgICAgLy8gKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXYXBpQXBpQ2FsbCh1cmw6IHN0cmluZywgaHR0cE9wdGlvbnMgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc3Qgd2FwaUJhc2VVcmwgPSB0aGlzLnNlc3Npb25TZXJ2aWNlLmdldFdhcGlCYXNlVXJsKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SHR0cENhbGwoYCR7d2FwaUJhc2VVcmx9JHt1cmx9YCwgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RXYXBpQXBpQ2FsbCh1cmw6IHN0cmluZywgYm9keSA9IHt9LCBodHRwT3B0aW9ucyA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zdCB3YXBpQmFzZVVybCA9IHRoaXMuc2Vzc2lvblNlcnZpY2UuZ2V0V2FwaUJhc2VVcmwoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0SHR0cENhbGwoYCR7d2FwaUJhc2VVcmx9JHt1cmx9YCwgYm9keSwgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcGlBcGlDYWxsKHVybDogc3RyaW5nLCBodHRwT3B0aW9ucyA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBwYXBpQmFzZVVybCA9IHRoaXMuc2Vzc2lvblNlcnZpY2UuZ2V0UGFwaUJhc2VVcmwoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRIdHRwQ2FsbChgJHtwYXBpQmFzZVVybH0ke3VybH1gLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFBhcGlBcGlDYWxsKHVybDogc3RyaW5nLCBib2R5ID0ge30sIGh0dHBPcHRpb25zID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcGlCYXNlVXJsID0gdGhpcy5zZXNzaW9uU2VydmljZS5nZXRQYXBpQmFzZVVybCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3RIdHRwQ2FsbChgJHtwYXBpQmFzZVVybH0ke3VybH1gLCBib2R5LCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpOiBPYnNlcnZhYmxlPG5ldmVyPiB7XHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdVbmtub3duIGVycm9yISc7XHJcbiAgICAgICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xyXG4gICAgICAgICAgICAvLyBDbGllbnQtc2lkZSBlcnJvcnNcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gYEVycm9yOiAke2Vycm9yLmVycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTZXJ2ZXItc2lkZSBlcnJvcnNcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gdGhpcy5nZXRTZXJ2ZXJFcnJvck1lc3NhZ2UoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNlcnZlckVycm9yTWVzc2FnZShlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpOiBzdHJpbmcge1xyXG4gICAgICAgIHN3aXRjaCAoZXJyb3Iuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgNDA0OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYE5vdCBGb3VuZDogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA0MDM6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgQWNjZXNzIERlbmllZDogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA1MDA6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgSW50ZXJuYWwgU2VydmVyIEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFVua25vd24gU2VydmVyIEVycm9yXFxuRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19