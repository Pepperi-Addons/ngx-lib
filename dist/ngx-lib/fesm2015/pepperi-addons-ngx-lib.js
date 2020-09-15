import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵinject, Injector, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineDirective, Directive, ɵɵdefinePipe, Pipe, ɵɵlistener, HostListener, TemplateRef, Input, ViewContainerRef, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, PLATFORM_ID, Optional, Inject, InjectionToken } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { HttpResponse, HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule, Validators, FormBuilder } from '@angular/forms';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, distinctUntilChanged, delay, finalize, tap } from 'rxjs/operators';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

class JwtHelperService {
    constructor() {
    }
    urlBase64Decode(str) {
        let output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw new Error('Illegal base64url string!');
            }
        }
        return this.b64DecodeUnicode(output);
    }
    // credits for decoder goes to https://github.com/atk
    b64decode(str) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 === 1) {
            throw new Error('\'atob\' failed: The string to be decoded is not correctly encoded.');
        }
        for (
        // initialize result and counters
        let bc = 0, bs, buffer, idx = 0; 
        // get next character
        (buffer = str.charAt(idx++)); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer &&
            ((bs = bc % 4 ? bs * 64 + buffer : buffer),
                // and if not first of each 4 characters,
                // convert the first 8 bits to one ascii character
                bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    }
    b64DecodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map
            .call(this.b64decode(str), (c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
    }
    decodeToken(token) {
        if (!token || token === '') {
            return null;
        }
        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('The inspected token doesn\'t appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.');
        }
        const decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token.');
        }
        return JSON.parse(decoded);
    }
    getTokenExpirationDate(token) {
        let decoded;
        decoded = this.decodeToken(token);
        if (!decoded || !decoded.hasOwnProperty('exp')) {
            return null;
        }
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }
    isTokenExpired(token, offsetSeconds) {
        if (!token || token === '') {
            return true;
        }
        const date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date === null) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    }
    getAuthScheme(authScheme, request) {
        if (typeof authScheme === 'function') {
            return authScheme(request);
        }
        return authScheme;
    }
}
JwtHelperService.ɵfac = function JwtHelperService_Factory(t) { return new (t || JwtHelperService)(); };
JwtHelperService.ɵprov = ɵɵdefineInjectable({ token: JwtHelperService, factory: JwtHelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(JwtHelperService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

class SessionService {
    constructor(jwtHelper) {
        this.jwtHelper = jwtHelper;
        this.IDP_TOKEN_KEY = 'idp_token';
        this.PAPI_BASE_URL_KEY = 'pepperi.baseurl';
        this.WAPI_TOKEN_KEY = 'auth_token';
        this.WAPI_BASE_URL_KEY = 'serverHostURL';
    }
    // TODO: Maybe need to move this parse into the c'tor.
    getParseToken() {
        debugger;
        const tokenTest = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjRiYTFjNzJmMTI3NThjYzEzMzg3ZWQ3YTBiZjNlODg3IiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTY3MjU5NjksImV4cCI6MTU5NjcyNjI2OSwiaXNzIjoiaHR0cHM6Ly9pZHAuc2FuZGJveC5wZXBwZXJpLmNvbSIsImF1ZCI6InBlcHBlcmkud2ViYXBwLmFwcC5zYW5kYm94LnBlcHBlcmkuY29tIiwiaWF0IjoxNTk2NzI1OTY5LCJhdF9oYXNoIjoiSGtmRXJ0Q2JzQ3NzOTVKUm05VmJTdyIsInNpZCI6IjJkNzFiM2JiNWUyNjRiNDk2Y2JmZDkzNmYyNTNhNWIzIiwic3ViIjoiZTJkZmQ0MDYtZDM4Yy00ZmYwLThhZGItMWRlMjI3ODIzYWEyIiwiYXV0aF90aW1lIjoxNTk2NzE4ODA5LCJpZHAiOiJsb2NhbCIsIm5hbWUiOiJkYW5pZWwgZGF2aWRvZmYiLCJlbWFpbCI6ImRhbmllbC5kQHBlcHBlcml0ZXN0LmNvbSIsInBlcHBlcmkuaWQiOjg2OTAzMDQsInBlcHBlcmkudXNlcnV1aWQiOiJlMmRmZDQwNi1kMzhjLTRmZjAtOGFkYi0xZGUyMjc4MjNhYTIiLCJwZXBwZXJpLmRpc3RyaWJ1dG9yaWQiOjMwMDEyMzUxLCJwZXBwZXJpLmRpc3RyaWJ1dG9ydXVpZCI6IjBiZDBlZDc5LThlOWUtNDRmYi05NmY0LThlNTNlZDljZTgyYiIsInBlcHBlcmkuZGF0YWNlbnRlciI6InNhbmRib3giLCJwZXBwZXJpLmtlZXBsb2dpbiI6ZmFsc2UsInBlcHBlcmkuaWRsZXRpbWV3ZWIiOjEyMCwidXBkYXRlZF9hdCI6MTU5NjcwMjgwMCwiZ2l2ZW5fbmFtZSI6ImRhbmllbCIsImZhbWlseV9uYW1lIjoiZGF2aWRvZmYiLCJwZXBwZXJpLmFwaW50YmFzZXVybCI6Imh0dHBzOi8vcmVzdGFwaS5zYW5kYm94LnBlcHBlcmkuY29tIiwicGVwcGVyaS53ZWJhcGliYXNldXJsIjoiaHR0cHM6Ly93ZWJhcGkuc2FuZGJveC5wZXBwZXJpLmNvbS9WMTZfNTAvV2ViQXBwXzYiLCJwZXBwZXJpLnB1YmxpY2FwaWJhc2V1cmwiOiJodHRwczovL2FwaS1zYW5kYm94LnBlcHBlcmkuY29tIiwicGVwcGVyaS5iYXNldXJsIjoiaHR0cHM6Ly9wYXBpLnNhbmRib3gucGVwcGVyaS5jb20vVjEuMCIsInBlcHBlcmkuZW1wbG95ZWV0eXBlIjoxLCJhbXIiOlsicHdkIl19.tNtZT3Cl4dMmTQftoaO2KP5BvHOlWGIP-5GpHrAhZoymBkxBSxpKprQGqr0ATtQlNHjX3gDV1W6k_avaSkyJgDiB2hcwr1tNRilasNuMzNV93gxLC9Oh_HdkIN4cZ0hahIcJvf_17PHpS8zD_MRwvGG_i45wRYJAtiGXChxCMzooethRsLOq5TEwuNbE3MxdjZOpImGYyytmsfdsdJRWQn1LQwQBt95ssuypcUzBsVB34P5XuFttjAe9dhTwHIfgsPG-VdfAWH_r-hVe834wKpKrplSWlC_MucgS0X4XP_tN4CtLnHO2wXKPsojqSTH2NQycfqh6YvT6rzRDBEdQIQ";
        const token = this.getIdpToken();
        // token = token || tokenTest;
        const decodedToken = this.jwtHelper.decodeToken(token);
        // const expirationDate = this.jwtHelper.getTokenExpirationDate(token);
        // const isExpired = this.jwtHelper.isTokenExpired(token);
        return decodedToken;
    }
    setObject(key, object) {
        const stringifiedObject = (typeof object === 'string' || object instanceof String) ? object : JSON.stringify(object);
        sessionStorage.setItem(key, stringifiedObject.toString());
    }
    getObject(key) {
        let result = null;
        const item = sessionStorage.getItem(key);
        try {
            result = item ? JSON.parse(item) : item;
        }
        catch (_a) {
            result = item;
        }
        return result;
    }
    getPepperiConsumerToken() {
        return this.PEPPERI_CONSUMER_TOKEN;
    }
    gettWapiToken() {
        return this.getObject(this.WAPI_TOKEN_KEY);
    }
    getWapiBaseUrl() {
        return this.getObject(this.WAPI_BASE_URL_KEY);
    }
    getIdpToken() {
        return this.getObject(this.IDP_TOKEN_KEY);
    }
    getPapiBaseUrl() {
        const tokenObj = this.getParseToken();
        return tokenObj ? tokenObj[this.PAPI_BASE_URL_KEY] : null;
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(ɵɵinject(JwtHelperService)); };
SessionService.ɵprov = ɵɵdefineInjectable({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SessionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: JwtHelperService }]; }, null); })();

class AuthInterceptor {
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
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(ɵɵinject(SessionService)); };
AuthInterceptor.ɵprov = ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuthInterceptor, [{
        type: Injectable
    }], function () { return [{ type: SessionService }]; }, null); })();

// import { ToastrService } from 'ngx-toastr';
class ErrorInterceptor {
    constructor() { }
    intercept(req, next) {
        console.warn('ErrorInterceptor');
        return next.handle(req)
            .pipe(
        // retry(2), TODO: Check if we want to retry
        catchError((error) => {
            // 401 handled in auth.interceptor
            if (error.status !== 401) {
                // TODO: Show error in dialog.
                // this.toastr.error(error.message);
            }
            return throwError(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(); };
ErrorInterceptor.ɵprov = ɵɵdefineInjectable({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ErrorInterceptor, [{
        type: Injectable
    }], function () { return []; }, null); })();

class LoaderService {
    constructor() {
        this.counter = 0;
        this.showLoaderSubject = new BehaviorSubject(false);
    }
    get onChanged$() {
        return this.showLoaderSubject.asObservable().pipe(distinctUntilChanged());
    }
    show() {
        this.counter++;
        this.showLoaderSubject.next(true);
    }
    hide() {
        this.counter--;
        if (this.counter === 0) {
            this.showLoaderSubject.next(false);
        }
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = ɵɵdefineInjectable({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoaderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class LoaderInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        console.warn('LoaderInterceptor');
        const loaderService = this.injector.get(LoaderService);
        loaderService.show();
        // TODO: Remove the delay.
        return next.handle(req).pipe(delay(3000), finalize(() => loaderService.hide()));
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(ɵɵinject(Injector)); };
LoaderInterceptor.ɵprov = ɵɵdefineInjectable({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoaderInterceptor, [{
        type: Injectable
    }], function () { return [{ type: Injector }]; }, null); })();

class ProfilerInterceptor {
    intercept(req, next) {
        console.warn('ProfilerInterceptor');
        const started = Date.now();
        let ok;
        return next.handle(req).pipe(tap(
        // Succeeds when there is a response; ignore other events
        (event) => {
            if (event instanceof HttpResponse) {
                ok = 'succeeded';
            }
        }, 
        // Operation failed; error is an HttpErrorResponse
        error => (ok = 'failed')), 
        // Log when response observable either completes or errors
        finalize(() => {
            const elapsed = Date.now() - started;
            const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
            console.log(msg);
        }));
    }
}
ProfilerInterceptor.ɵfac = function ProfilerInterceptor_Factory(t) { return new (t || ProfilerInterceptor)(); };
ProfilerInterceptor.ɵprov = ɵɵdefineInjectable({ token: ProfilerInterceptor, factory: ProfilerInterceptor.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ProfilerInterceptor, [{
        type: Injectable
    }], null, null); })();

const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: ConvertInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: FakeInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ProfilerInterceptor, multi: true },
];

// Const BIDI_RTL_LANGS Array
// BIDI_RTL_LANGS ref: http://en.wikipedia.org/wiki/Right-to-left
// Table of scripts in Unicode: https://en.wikipedia.org/wiki/Script_(Unicode)
const _BIDI_RTL_LANGS = [
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi' /* 'ייִדיש', Yiddish */
];
var ORIENTATION;
(function (ORIENTATION) {
    ORIENTATION[ORIENTATION["Landscape"] = 0] = "Landscape";
    ORIENTATION[ORIENTATION["Portrait"] = 1] = "Portrait";
})(ORIENTATION || (ORIENTATION = {}));
var SCREEN_SIZE;
(function (SCREEN_SIZE) {
    SCREEN_SIZE[SCREEN_SIZE["XL"] = 0] = "XL";
    SCREEN_SIZE[SCREEN_SIZE["LG"] = 1] = "LG";
    SCREEN_SIZE[SCREEN_SIZE["MD"] = 2] = "MD";
    SCREEN_SIZE[SCREEN_SIZE["SM"] = 3] = "SM";
    SCREEN_SIZE[SCREEN_SIZE["XS"] = 4] = "XS";
})(SCREEN_SIZE || (SCREEN_SIZE = {}));
class LayoutService {
    constructor(translate) {
        this.translate = translate;
        this.resizeSubject = new BehaviorSubject(SCREEN_SIZE.LG);
    }
    get onResize$() {
        return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
    }
    /**
     * Set the current screen size.
     * @param size The size to change to.
     */
    onResize(size) {
        this.resizeSubject.next(size);
    }
    getOrintation() {
        if (window.innerHeight > window.innerWidth) {
            return ORIENTATION.Portrait;
        }
        else {
            return ORIENTATION.Landscape;
        }
    }
    getScreenWidth() {
        let retVal = 250.0;
        switch (this.resizeSubject.getValue()) {
            case SCREEN_SIZE.XS: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 130.0 : 65.0;
                break;
            }
            case SCREEN_SIZE.SM:
            case SCREEN_SIZE.MD: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 220.0 : 140.0;
                break;
            }
            case SCREEN_SIZE.LG: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 400.0 : 250.0;
                break;
            }
        }
        return retVal;
    }
    getScreenHeight() {
        let retVal = 250.0;
        switch (this.resizeSubject.getValue()) {
            case SCREEN_SIZE.XS: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 65.0 : 130.0;
                break;
            }
            case SCREEN_SIZE.SM:
            case SCREEN_SIZE.MD: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 140.0 : 220.0;
                break;
            }
            case SCREEN_SIZE.LG: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 250.0 : 400.0;
                break;
            }
        }
        return retVal;
    }
    getScreenHeightPx() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }
    getScreenWidthPx() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    getCurrentLanguage() {
        return this.translate && this.translate.currentLang || navigator.language;
    }
    isRtl() {
        const userLang = this.getCurrentLanguage();
        const isRtl = _BIDI_RTL_LANGS.indexOf(userLang) >= 0;
        return isRtl;
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(ɵɵinject(TranslateService)); };
LayoutService.ɵprov = ɵɵdefineInjectable({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayoutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: TranslateService }]; }, null); })();

class RtlClassDirective {
    constructor(layoutService, renderer, element) {
        this.layoutService = layoutService;
        this.renderer = renderer;
        this.element = element;
    }
    ngOnInit() {
        const isRtl = this.layoutService.isRtl();
        if (isRtl) {
            this.renderer.addClass(this.element.nativeElement, 'rtl');
        }
    }
}
RtlClassDirective.ɵfac = function RtlClassDirective_Factory(t) { return new (t || RtlClassDirective)(ɵɵdirectiveInject(LayoutService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
RtlClassDirective.ɵdir = ɵɵdefineDirective({ type: RtlClassDirective, selectors: [["", "pepRtlClass", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RtlClassDirective, [{
        type: Directive,
        args: [{
                selector: '[pepRtlClass]',
            }]
    }], function () { return [{ type: LayoutService }, { type: Renderer2 }, { type: ElementRef }]; }, null); })();
class RtlDirectionDirective {
    constructor(layoutService, renderer, element) {
        this.layoutService = layoutService;
        this.renderer = renderer;
        this.element = element;
    }
    ngOnInit() {
        const isRtl = this.layoutService.isRtl();
        this.renderer.setAttribute(this.element.nativeElement, 'dir', isRtl ? 'rtl' : 'ltr');
    }
}
RtlDirectionDirective.ɵfac = function RtlDirectionDirective_Factory(t) { return new (t || RtlDirectionDirective)(ɵɵdirectiveInject(LayoutService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
RtlDirectionDirective.ɵdir = ɵɵdefineDirective({ type: RtlDirectionDirective, selectors: [["", "pepRtlDirection", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RtlDirectionDirective, [{
        type: Directive,
        args: [{
                selector: '[pepRtlDirection]',
            }]
    }], function () { return [{ type: LayoutService }, { type: Renderer2 }, { type: ElementRef }]; }, null); })();

class CapitalizePipe {
    transform(value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
}
CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) { return new (t || CapitalizePipe)(); };
CapitalizePipe.ɵpipe = ɵɵdefinePipe({ name: "capitalize", type: CapitalizePipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CapitalizePipe, [{
        type: Pipe,
        args: [{ name: 'capitalize' }]
    }], null, null); })();
class EncodePipe {
    transform(value) {
        if (value) {
            const v = btoa(value);
            return v;
        }
        return value;
    }
}
EncodePipe.ɵfac = function EncodePipe_Factory(t) { return new (t || EncodePipe)(); };
EncodePipe.ɵpipe = ɵɵdefinePipe({ name: "encodePipe", type: EncodePipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EncodePipe, [{
        type: Pipe,
        args: [{ name: 'encodePipe' }]
    }], null, null); })();
class EscapePipe {
    transform(value) {
        if (value) {
            const v = escape(value);
            return v;
        }
        return value;
    }
}
EscapePipe.ɵfac = function EscapePipe_Factory(t) { return new (t || EscapePipe)(); };
EscapePipe.ɵpipe = ɵɵdefinePipe({ name: "escapePipe", type: EscapePipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EscapePipe, [{
        type: Pipe,
        args: [{ name: 'escapePipe' }]
    }], null, null); })();
class ReplaceLineBreaks {
    transform(value) {
        const newValue = value.replace(/(<br\ ?\/?>)/g, ' ');
        return newValue;
    }
}
ReplaceLineBreaks.ɵfac = function ReplaceLineBreaks_Factory(t) { return new (t || ReplaceLineBreaks)(); };
ReplaceLineBreaks.ɵpipe = ɵɵdefinePipe({ name: "replaceLineBreaks", type: ReplaceLineBreaks, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReplaceLineBreaks, [{
        type: Pipe,
        args: [{ name: 'replaceLineBreaks' }]
    }], null, null); })();
class DateFormatter {
    transform(value, culture, showTime = false) {
        let res = '';
        value = new Date(value);
        if (value) {
            res = value.toLocaleDateString(culture || 'en-US');
            if (showTime) {
                res += ' ' + value.toLocaleTimeString((culture || 'en-US'), { hour: '2-digit', minute: '2-digit' });
            }
        }
        return res;
    }
}
DateFormatter.ɵfac = function DateFormatter_Factory(t) { return new (t || DateFormatter)(); };
DateFormatter.ɵpipe = ɵɵdefinePipe({ name: "dateFormatter", type: DateFormatter, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateFormatter, [{
        type: Pipe,
        args: [{ name: 'dateFormatter' }]
    }], null, null); })();
class DateStringFormatter {
    transform(value, culture, showTime = false) {
        let res = '';
        const tmpDate = new Date(value);
        if (value) {
            res = tmpDate.toLocaleDateString(culture || 'en-US');
            if (showTime) {
                res += ' ' + tmpDate.toLocaleTimeString(culture || 'en-US');
            }
        }
        return res;
    }
}
DateStringFormatter.ɵfac = function DateStringFormatter_Factory(t) { return new (t || DateStringFormatter)(); };
DateStringFormatter.ɵpipe = ɵɵdefinePipe({ name: "dateStringFormatter", type: DateStringFormatter, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateStringFormatter, [{
        type: Pipe,
        args: [{ name: 'dateStringFormatter' }]
    }], null, null); })();
class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(ɵɵdirectiveInject(DomSanitizer)); };
SafeHtmlPipe.ɵpipe = ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{ name: 'safeHtml' }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();
class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(ɵɵdirectiveInject(DomSanitizer)); };
SafePipe.ɵpipe = ɵɵdefinePipe({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SafePipe, [{
        type: Pipe,
        args: [{
                name: 'safe'
            }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();
class SplitUppercase {
    transform(value) {
        const newValue = value.replace(/([a-z])([A-Z])/g, '$1 $2');
        return newValue;
    }
}
SplitUppercase.ɵfac = function SplitUppercase_Factory(t) { return new (t || SplitUppercase)(); };
SplitUppercase.ɵpipe = ɵɵdefinePipe({ name: "splitUppercase", type: SplitUppercase, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SplitUppercase, [{
        type: Pipe,
        args: [{ name: 'splitUppercase' }]
    }], null, null); })();
class ToNumber {
    transform(value) {
        return parseInt(value);
    }
}
ToNumber.ɵfac = function ToNumber_Factory(t) { return new (t || ToNumber)(); };
ToNumber.ɵpipe = ɵɵdefinePipe({ name: "toNumber", type: ToNumber, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToNumber, [{
        type: Pipe,
        args: [{ name: 'toNumber' }]
    }], null, null); })();

class ButtonBlurDirective {
    constructor(element) {
        this.element = element;
    }
    onClick() {
        setTimeout(() => {
            this.element.nativeElement.blur();
        }, 0);
    }
}
ButtonBlurDirective.ɵfac = function ButtonBlurDirective_Factory(t) { return new (t || ButtonBlurDirective)(ɵɵdirectiveInject(ElementRef)); };
ButtonBlurDirective.ɵdir = ɵɵdefineDirective({ type: ButtonBlurDirective, selectors: [["", "pepButtonBlur", ""]], hostBindings: function ButtonBlurDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function ButtonBlurDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonBlurDirective, [{
        type: Directive,
        args: [{
                selector: '[pepButtonBlur]'
            }]
    }], function () { return [{ type: ElementRef }]; }, { onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();

class MenuBlurDirective {
    constructor(element) {
        this.element = element;
    }
    menuClosedEvent() {
        setTimeout(() => {
            this.element.nativeElement.blur();
        }, 0);
    }
    menuOpenedEvent() {
        setTimeout(() => {
            this.element.nativeElement.blur();
        }, 0);
    }
}
MenuBlurDirective.ɵfac = function MenuBlurDirective_Factory(t) { return new (t || MenuBlurDirective)(ɵɵdirectiveInject(ElementRef)); };
MenuBlurDirective.ɵdir = ɵɵdefineDirective({ type: MenuBlurDirective, selectors: [["", "pepMenuBlur", ""]], hostBindings: function MenuBlurDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("menuClosed", function MenuBlurDirective_menuClosed_HostBindingHandler() { return ctx.menuClosedEvent(); })("menuOpened", function MenuBlurDirective_menuOpened_HostBindingHandler() { return ctx.menuOpenedEvent(); });
    } } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MenuBlurDirective, [{
        type: Directive,
        args: [{
                selector: '[pepMenuBlur]'
            }]
    }], function () { return [{ type: ElementRef }]; }, { menuClosedEvent: [{
            type: HostListener,
            args: ['menuClosed']
        }], menuOpenedEvent: [{
            type: HostListener,
            args: ['menuOpened']
        }] }); })();

class PortalService {
    constructor() {
        this.targets = new Map();
    }
    addTarget(targetName, viewContainer) {
        this.targets.set(targetName, viewContainer);
    }
    attach(targetName, template) {
        const target = this.getTarget(targetName);
        if (target) {
            target.createEmbeddedView(template);
        }
    }
    clear(targetName) {
        const target = this.getTarget(targetName);
        if (target) {
            target.clear();
        }
    }
    getTarget(targetName) {
        return this.targets.has(targetName) ? this.targets.get(targetName) : null;
    }
}
PortalService.ɵfac = function PortalService_Factory(t) { return new (t || PortalService)(); };
PortalService.ɵprov = ɵɵdefineInjectable({ token: PortalService, factory: PortalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PortalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

class AttachDirective {
    constructor(portalService, templateRef) {
        this.portalService = portalService;
        this.templateRef = templateRef;
    }
    ngOnInit() {
        this.portalService.attach(this.targetName, this.templateRef);
    }
    ngOnDestroy() {
        this.portalService.clear(this.targetName);
    }
}
AttachDirective.ɵfac = function AttachDirective_Factory(t) { return new (t || AttachDirective)(ɵɵdirectiveInject(PortalService), ɵɵdirectiveInject(TemplateRef)); };
AttachDirective.ɵdir = ɵɵdefineDirective({ type: AttachDirective, selectors: [["", "pepAttach", ""]], inputs: { targetName: ["pepAttach", "targetName"] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AttachDirective, [{
        type: Directive,
        args: [{
                selector: '[pepAttach]',
            }]
    }], function () { return [{ type: PortalService }, { type: TemplateRef }]; }, { targetName: [{
            type: Input,
            args: ['pepAttach']
        }] }); })();

class TargetDirective {
    constructor(portalService, viewContainer) {
        this.portalService = portalService;
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.portalService.addTarget(this.targetName, this.viewContainer);
    }
}
TargetDirective.ɵfac = function TargetDirective_Factory(t) { return new (t || TargetDirective)(ɵɵdirectiveInject(PortalService), ɵɵdirectiveInject(ViewContainerRef)); };
TargetDirective.ɵdir = ɵɵdefineDirective({ type: TargetDirective, selectors: [["", "pepTarget", ""]], inputs: { targetName: ["pepTarget", "targetName"] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TargetDirective, [{
        type: Directive,
        args: [{
                selector: '[pepTarget]',
            }]
    }], function () { return [{ type: PortalService }, { type: ViewContainerRef }]; }, { targetName: [{
            type: Input,
            args: ['pepTarget']
        }] }); })();

const layoutList = [
    RtlClassDirective,
    RtlDirectionDirective,
];
const pipeList = [
    CapitalizePipe,
    EncodePipe,
    EscapePipe,
    ReplaceLineBreaks,
    DateFormatter,
    DateStringFormatter,
    SafeHtmlPipe,
    SafePipe,
    SplitUppercase,
    ToNumber
];
const utilitiesList = [
    ButtonBlurDirective,
    MenuBlurDirective
];
const portalList = [
    AttachDirective,
    TargetDirective
];
// export class Loader implements TranslateLoader {
//     private translations = new Subject();
//     $translations = this.translations.asObservable();
//     getTranslation(lang: string) {
//         console.log(`called with ${lang}`);
//         return this.$translations;
//     }
// }
// export class Missing implements MissingTranslationHandler {
//     handle(params: MissingTranslationHandlerParams) {
//         return 'missing in libary...';
//     }
// }
// export function LoaderFactory() {
//     return new Loader();
// }
class PepperiModule {
}
PepperiModule.ɵmod = ɵɵdefineNgModule({ type: PepperiModule });
PepperiModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiModule_Factory(t) { return new (t || PepperiModule)(); }, providers: [
        httpInterceptorProviders,
    ], imports: [[
            CommonModule,
            HttpClientModule,
            BrowserModule,
            BrowserAnimationsModule,
            ReactiveFormsModule,
            FormsModule,
        ], TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiModule, { declarations: [CapitalizePipe,
        EncodePipe,
        EscapePipe,
        ReplaceLineBreaks,
        DateFormatter,
        DateStringFormatter,
        SafeHtmlPipe,
        SafePipe,
        SplitUppercase,
        ToNumber, ButtonBlurDirective,
        MenuBlurDirective, RtlClassDirective,
        RtlDirectionDirective, AttachDirective,
        TargetDirective], imports: [CommonModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule], exports: [CapitalizePipe,
        EncodePipe,
        EscapePipe,
        ReplaceLineBreaks,
        DateFormatter,
        DateStringFormatter,
        SafeHtmlPipe,
        SafePipe,
        SplitUppercase,
        ToNumber, ButtonBlurDirective,
        MenuBlurDirective, RtlClassDirective,
        RtlDirectionDirective, AttachDirective,
        TargetDirective, TranslateModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    pipeList,
                    utilitiesList,
                    layoutList,
                    portalList
                ],
                providers: [
                    httpInterceptorProviders,
                ],
                imports: [
                    CommonModule,
                    HttpClientModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    ReactiveFormsModule,
                    FormsModule,
                ],
                exports: [
                    pipeList,
                    utilitiesList,
                    layoutList,
                    portalList,
                    TranslateModule
                ],
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-lib/core/common/directives
 */

/*
 * export from ngx-lib/core/common/directives
 */

var FIELD_TYPE;
(function (FIELD_TYPE) {
    // specify text field
    FIELD_TYPE[FIELD_TYPE["Default"] = 0] = "Default";
    FIELD_TYPE[FIELD_TYPE["TextBox"] = 1] = "TextBox";
    FIELD_TYPE[FIELD_TYPE["LimitedLengthTextBox"] = 2] = "LimitedLengthTextBox";
    // specify text area field
    FIELD_TYPE[FIELD_TYPE["TextArea"] = 3] = "TextArea";
    FIELD_TYPE[FIELD_TYPE["TextHeader"] = 4] = "TextHeader";
    // specify date field
    FIELD_TYPE[FIELD_TYPE["Date"] = 5] = "Date";
    // specify date & time field
    FIELD_TYPE[FIELD_TYPE["DateAndTime"] = 6] = "DateAndTime";
    // specify integer field
    FIELD_TYPE[FIELD_TYPE["NumberInteger"] = 7] = "NumberInteger";
    // specify decimal field
    FIELD_TYPE[FIELD_TYPE["NumberReal"] = 8] = "NumberReal";
    // specify currency field
    FIELD_TYPE[FIELD_TYPE["Currency"] = 9] = "Currency";
    // specify boolean field
    FIELD_TYPE[FIELD_TYPE["Boolean"] = 10] = "Boolean";
    // specify multiple options field
    FIELD_TYPE[FIELD_TYPE["ComboBox"] = 11] = "ComboBox";
    // specify multiple options field
    FIELD_TYPE[FIELD_TYPE["MultiTickBox"] = 12] = "MultiTickBox";
    // specify separator (view only) field
    FIELD_TYPE[FIELD_TYPE["Separator"] = 13] = "Separator";
    // specify address field
    FIELD_TYPE[FIELD_TYPE["Address"] = 14] = "Address";
    // specify percentage field
    FIELD_TYPE[FIELD_TYPE["Percentage"] = 15] = "Percentage";
    FIELD_TYPE[FIELD_TYPE["EmptyComboBox"] = 16] = "EmptyComboBox";
    FIELD_TYPE[FIELD_TYPE["InternalLink"] = 17] = "InternalLink";
    // specify email field
    FIELD_TYPE[FIELD_TYPE["Email"] = 18] = "Email";
    FIELD_TYPE[FIELD_TYPE["LimitedDate"] = 19] = "LimitedDate";
    // specify image field
    FIELD_TYPE[FIELD_TYPE["Image"] = 20] = "Image";
    FIELD_TYPE[FIELD_TYPE["MultiTickBoxToComboBox"] = 21] = "MultiTickBoxToComboBox";
    FIELD_TYPE[FIELD_TYPE["EmptyMultiTickBox"] = 22] = "EmptyMultiTickBox";
    FIELD_TYPE[FIELD_TYPE["Totals"] = 23] = "Totals";
    // specify attachment field
    FIELD_TYPE[FIELD_TYPE["Attachment"] = 24] = "Attachment";
    FIELD_TYPE[FIELD_TYPE["Signature"] = 25] = "Signature";
    // specify link field
    FIELD_TYPE[FIELD_TYPE["Link"] = 26] = "Link";
    // specify image url field
    FIELD_TYPE[FIELD_TYPE["ImageURL"] = 27] = "ImageURL";
    FIELD_TYPE[FIELD_TYPE["NumberIntegerQuantitySelector"] = 28] = "NumberIntegerQuantitySelector";
    FIELD_TYPE[FIELD_TYPE["NumberRealQuantitySelector"] = 29] = "NumberRealQuantitySelector";
    FIELD_TYPE[FIELD_TYPE["NumberIntegerForMatrix"] = 30] = "NumberIntegerForMatrix";
    FIELD_TYPE[FIELD_TYPE["NumberRealForMatrix"] = 31] = "NumberRealForMatrix";
    FIELD_TYPE[FIELD_TYPE["Images"] = 32] = "Images";
    FIELD_TYPE[FIELD_TYPE["Indicators"] = 33] = "Indicators";
    FIELD_TYPE[FIELD_TYPE["CalculatedReal"] = 34] = "CalculatedReal";
    FIELD_TYPE[FIELD_TYPE["CalculatedInt"] = 35] = "CalculatedInt";
    FIELD_TYPE[FIELD_TYPE["CalculatedString"] = 36] = "CalculatedString";
    FIELD_TYPE[FIELD_TYPE["CalculatedDate"] = 37] = "CalculatedDate";
    FIELD_TYPE[FIELD_TYPE["CalculatedBool"] = 38] = "CalculatedBool";
    FIELD_TYPE[FIELD_TYPE["MapDataDropDown"] = 39] = "MapDataDropDown";
    FIELD_TYPE[FIELD_TYPE["MapDataReal"] = 40] = "MapDataReal";
    FIELD_TYPE[FIELD_TYPE["MapDataString"] = 41] = "MapDataString";
    FIELD_TYPE[FIELD_TYPE["MapDataInt"] = 42] = "MapDataInt";
    FIELD_TYPE[FIELD_TYPE["Sum"] = 43] = "Sum";
    FIELD_TYPE[FIELD_TYPE["Phone"] = 44] = "Phone";
    FIELD_TYPE[FIELD_TYPE["UrlForApi"] = 45] = "UrlForApi";
    FIELD_TYPE[FIELD_TYPE["ManyToManyUrlForApi"] = 46] = "ManyToManyUrlForApi";
    FIELD_TYPE[FIELD_TYPE["ReferenceType"] = 47] = "ReferenceType";
    FIELD_TYPE[FIELD_TYPE["GuidReferenceType"] = 48] = "GuidReferenceType";
    FIELD_TYPE[FIELD_TYPE["Button"] = 49] = "Button";
    FIELD_TYPE[FIELD_TYPE["InternalPage"] = 50] = "InternalPage";
    FIELD_TYPE[FIELD_TYPE["Duration"] = 51] = "Duration";
    FIELD_TYPE[FIELD_TYPE["ListOfObjects"] = 52] = "ListOfObjects";
    FIELD_TYPE[FIELD_TYPE["Package"] = 53] = "Package";
    FIELD_TYPE[FIELD_TYPE["BooleanText"] = 55] = "BooleanText";
    FIELD_TYPE[FIELD_TYPE["RichTextHTML"] = 56] = "RichTextHTML"; // Html Text
})(FIELD_TYPE || (FIELD_TYPE = {}));
class FieldLayout {
    constructor(x = 0, width = 1, xAlignment = 1, y = 0, height = 1, yAlignment = 1, lineNumber = 1) {
        this.X = x;
        this.Width = width;
        this.XAlignment = xAlignment;
        this.Y = y;
        this.Height = height;
        this.YAlignment = yAlignment;
        this.LineNumber = lineNumber;
    }
}
class UIControlField {
    constructor() {
        this.MandatoryField = false;
        this.Mandatory = false;
        this.minFieldWidth = 45;
        this.calcColumnWidth = 10;
        this.calcTitleColumnWidthString = '100%';
        this.calcColumnWidthString = '100%';
    }
}
class UIControl {
}
class ObjectsDataRowCell {
}
class ObjectsDataRow {
    constructor() {
        this.IsSelectableForActions = true;
        this.IsEditable = true;
    }
}
class ObjectSingleData {
    constructor(uiControl = null, data = null) {
        this.Success = true;
        this.ErrorMessage = '';
        this.Type = '';
        this.UIControl = uiControl;
        this.Data = data;
    }
}
class ObjectsData {
    constructor() {
        this.ErrorMessage = '';
        this.Success = true;
        this.TotalAmount = '0';
        this.CurrencySymbol = '$';
    }
}
class SmartSearchValues {
}
class SmartSearchResponse {
}
class PepperiFieldData {
    constructor(options = {}) {
        this.ApiName = options.ApiName;
        this.Value = options.Value;
        this.FormattedValue = options.FormattedValue || '';
        this.FieldType = options.FieldType;
        this.ColumnWidth = options.ColumnWidth;
        this.ColumnWidthType = options.ColumnWidthType;
        this.XAlignment = options.XAlignment;
        this.Title = options.Title || '';
    }
}
class PepperiRowData {
}

class Guid {
    static pad4(num) {
        let ret = num.toString(16);
        while (ret.length < 4) {
            ret = '0' + ret;
        }
        return ret;
    }
    static random4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    static newGuid() {
        // This is not build for -prod
        // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        //     const r = Math.random() * 16 | 0;
        //     const v = c === 'x' ? r : (r & 0x3 | 0x8);
        //     return v.toString(16);
        // });
        // If we have a cryptographically secure PRNG, use that
        if (typeof (window) !== 'undefined' &&
            typeof (window.crypto) !== 'undefined' &&
            typeof (window.crypto.getRandomValues) !== 'undefined') {
            const buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + '-' + this.pad4(buf[2]) + '-' + this.pad4(buf[3]) + '-' +
                this.pad4(buf[4]) + '-' + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else { // Otherwise, just use Math.random
            return this.random4() + this.random4() + '-' + this.random4() + '-' + this.random4() + '-' +
                this.random4() + '-' + this.random4() + this.random4() + this.random4();
        }
    }
}
// export interface IKeyedCollection<T> {
//     Add(key: string, value: T);
//     ContainsKey(key: string): boolean;
//     Count(): number;
//     Item(key: string): T;
//     Keys(): string[];
//     Remove(key: string): T;
//     RemoveAll();
//     Values(): T[];
// }
// export class KeyedCollection<T> implements IKeyedCollection<T> {
//     private items: { [index: string]: T } = {};
//     private count: number = 0;
//     initFromObj(collection: KeyedCollection<T>) {
//         this.items = {};
//         this.count = 0;
//         const keys = [];
//         for (const prop in collection.items) {
//             if (collection.items.hasOwnProperty(prop)) {
//                 this.Add(prop, collection.items[prop]);
//             }
//         }
//     }
//     public ContainsKey(key: string): boolean {
//         return this.items.hasOwnProperty(key);
//     }
//     public Count(): number {
//         return this.count;
//     }
//     public Add(key: string, value: T) {
//         if (!this.ContainsKey(key)) {
//             this.count++;
//         }
//         this.items[key] = value;
//     }
//     public Remove(key: string): T {
//         var val = this.items[key];
//         if (this.ContainsKey(key)) {
//             delete this.items[key];
//             this.count--;
//         }
//         return val;
//     }
//     public RemoveAll() {
//         this.items = {};
//         this.count = 0;
//     }
//     public Item(key: string): T {
//         return this.items[key];
//     }
//     public Keys(): string[] {
//         var keySet: string[] = [];
//         for (var prop in this.items) {
//             if (this.items.hasOwnProperty(prop)) {
//                 keySet.push(prop);
//             }
//         }
//         return keySet;
//     }
//     public Values(): T[] {
//         var values: T[] = [];
//         for (var prop in this.items) {
//             if (this.items.hasOwnProperty(prop)) {
//                 values.push(this.items[prop]);
//             }
//         }
//         return values;
//     }
// }

/*
 * Public API Surface of ngx-lib/core/common/model
 */

/*
 * export from ngx-lib/core/common/model
 */

/*
 * Public API Surface of ngx-lib/core/common/pipes
 */

/*
 * export from ngx-lib/core/common/pipes
 */

class HttpService {
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
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(ɵɵinject(SessionService), ɵɵinject(HttpClient)); };
HttpService.ɵprov = ɵɵdefineInjectable({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HttpService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: SessionService }, { type: HttpClient }]; }, null); })();

/*
    This service is the webapp api for addon usege.
*/
class AddonService {
    constructor(sessionService, httpService) {
        this.sessionService = sessionService;
        this.httpService = httpService;
        this.ADDON_ASSETS_PATH_KEY = 'AddonAssetsPath';
    }
    getAddonStaticFolder() {
        // return this.assetsPath;
        return this.sessionService.getObject(this.ADDON_ASSETS_PATH_KEY) || '';
    }
    setAddonStaticFolder(path) {
        // this.assetsPath = path;
        return this.sessionService.setObject(this.ADDON_ASSETS_PATH_KEY, path);
    }
    getAddonApiCall(addonUUID, fileName, functionName, httpOptions = {}) {
        return this.httpService.getPapiApiCall(`/addons/api/${addonUUID}/${fileName}/${functionName}`, httpOptions);
    }
    postAddonApiCall(addonUUID, fileName, functionName, body = {}, httpOptions = {}) {
        return this.httpService.postPapiApiCall(`/addons/api/${addonUUID}/${fileName}/${functionName}`, body, httpOptions);
    }
}
AddonService.ɵfac = function AddonService_Factory(t) { return new (t || AddonService)(ɵɵinject(SessionService), ɵɵinject(HttpService)); };
AddonService.ɵprov = ɵɵdefineInjectable({ token: AddonService, factory: AddonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AddonService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: SessionService }, { type: HttpService }]; }, null); })();

class CookieService {
    constructor(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
    }
    /**
     * @param name Cookie name
     * @returns boolean - whether cookie with specified name exists
     */
    check(name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        const regExp = this.getCookieRegExp(name);
        const exists = regExp.test(this.document.cookie);
        return exists;
    }
    /**
     * @param name Cookie name
     * @returns property value
     */
    get(name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            const regExp = this.getCookieRegExp(name);
            const result = regExp.exec(this.document.cookie);
            return this.safeDecodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    }
    /**
     * @returns all the cookies in json
     */
    getAll() {
        if (!this.documentIsAccessible) {
            return {};
        }
        const cookies = {};
        const document = this.document;
        if (document.cookie && document.cookie !== '') {
            document.cookie.split(';').forEach((currentCookie) => {
                const [cookieName, cookieValue] = currentCookie.split('=');
                cookies[this.safeDecodeURIComponent(cookieName.replace(/^ /, ''))] = this.safeDecodeURIComponent(cookieValue);
            });
        }
        return cookies;
    }
    /**
     * @param name     Cookie name
     * @param value    Cookie value
     * @param expires  Number of days until the cookies expires or an actual `Date`
     * @param path     Cookie path
     * @param domain   Cookie domain
     * @param secure   Secure flag
     * @param sameSite OWASP samesite token `Lax`, `None`, or `Strict`. Defaults to `Lax`
     */
    set(name, value, expires, path, domain, secure, sameSite = 'Lax') {
        if (!this.documentIsAccessible) {
            return;
        }
        let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                const dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            }
            else {
                cookieString += 'expires=' + expires.toUTCString() + ';';
            }
        }
        if (path) {
            cookieString += 'path=' + path + ';';
        }
        if (domain) {
            cookieString += 'domain=' + domain + ';';
        }
        if (secure === false && sameSite === 'None') {
            secure = true;
        }
        if (secure) {
            cookieString += 'secure;';
        }
        cookieString += 'sameSite=' + sameSite + ';';
        this.document.cookie = cookieString;
    }
    /**
     * @param name   Cookie name
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    delete(name, path, domain, secure, sameSite = 'Lax') {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain, secure, sameSite);
    }
    /**
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    deleteAll(path, domain, secure, sameSite = 'Lax') {
        if (!this.documentIsAccessible) {
            return;
        }
        const cookies = this.getAll();
        for (const cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain, secure, sameSite);
            }
        }
    }
    /**
     * @param name Cookie name
     * @returns property RegExp
     */
    getCookieRegExp(name) {
        const escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    }
    safeDecodeURIComponent(encodedURIComponent) {
        try {
            return decodeURIComponent(encodedURIComponent);
        }
        catch (_a) {
            // probably it is not uri encoded. return as is
            return encodedURIComponent;
        }
    }
}
CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(ɵɵinject(DOCUMENT, 8), ɵɵinject(PLATFORM_ID)); };
CookieService.ɵprov = ɵɵdefineInjectable({ token: CookieService, factory: CookieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CookieService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: InjectionToken, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();

class DataConvertorService {
    constructor() {
    }
    convertFormData(formData) {
        const objectsData = new ObjectSingleData();
        const rowData = new ObjectsDataRow();
        const uiRow = formData.Fields;
        const uiControl = new UIControl();
        uiControl.ControlFields = [];
        uiRow.forEach(field => uiControl.ControlFields.push(this.setUIControlField(field)));
        rowData.Fields = [];
        rowData.Type = 0;
        rowData.UID = Guid.newGuid();
        formData.Fields.forEach(field => rowData.Fields.push(this.setDataField(field)));
        objectsData.Data = rowData;
        objectsData.UIControl = uiControl;
        return objectsData;
    }
    convertListData(tableData) {
        const objectsData = new ObjectsData();
        const rows = new Array();
        const uiRow = tableData[0].Fields;
        const uiControl = new UIControl();
        uiControl.ControlFields = [];
        uiRow.forEach(field => uiControl.ControlFields.push(this.setUIControlField(field)));
        tableData.forEach(row => {
            const rowData = new ObjectsDataRow();
            rowData.Fields = [];
            rowData.Type = 0;
            rowData.UID = Guid.newGuid();
            row.Fields.forEach(field => rowData.Fields.push(this.setDataField(field)));
            rows.push(rowData);
        });
        objectsData.Rows = rows;
        objectsData.UIControl = uiControl;
        return objectsData;
    }
    setUIControlField(field) {
        const controlField = new UIControlField();
        controlField.ApiName = field.ApiName;
        controlField.FieldType = field.FieldType;
        // { X: 1, Width: 1, XAlignment: field.XAlignment, Y: 1, Height: 1, YAlignment: 1 };
        controlField.Layout = new FieldLayout(1, 1, field.XAlignment, 1, 1, 1);
        controlField.Title = field.Title;
        controlField.ReadOnly = false;
        controlField.ColumnWidth = field.ColumnWidth;
        controlField.ColumnWidthType = field.ColumnWidthType || 1;
        return controlField;
    }
    setDataField(field) {
        const dataField = new ObjectsDataRowCell();
        dataField.AdditionalValue = field.AdditionalValue;
        dataField.ApiName = field.ApiName;
        dataField.Enabled = true;
        dataField.FieldType = field.FieldType;
        dataField.FormattedValue = field.FormattedValue || field.Value.toString();
        dataField.GroupFields = null;
        dataField.NotificationInfo = '';
        dataField.OptionalValues = field.OptionalValues;
        dataField.ReferenceObjectSubType = '';
        dataField.TextColor = '';
        dataField.Value = field.Value.toString();
        dataField.Visible = true;
        dataField.Type = '0';
        return dataField;
    }
    setFieldLayout(x, width, xAlignment, y, height, yAlignment, lineNumber) {
        const layout = new FieldLayout(x, width, xAlignment, y, height, yAlignment, lineNumber);
        return layout;
    }
}
DataConvertorService.ɵfac = function DataConvertorService_Factory(t) { return new (t || DataConvertorService)(); };
DataConvertorService.ɵprov = ɵɵdefineInjectable({ token: DataConvertorService, factory: DataConvertorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataConvertorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var FileTypeEnum;
(function (FileTypeEnum) {
    FileTypeEnum[FileTypeEnum["Script"] = 1] = "Script";
    FileTypeEnum[FileTypeEnum["Style"] = 2] = "Style";
})(FileTypeEnum || (FileTypeEnum = {}));
class FileService {
    constructor() {
        this.scripts = new Map();
        this.styles = new Map();
    }
    loadFiles(files) {
        const promises = [];
        files.forEach((file) => {
            if (file.type === FileTypeEnum.Style) {
                promises.push(this.loadStyle(file.path));
            }
            else if (file.type === FileTypeEnum.Script) {
                promises.push(this.loadScript(file.path));
            }
        });
        return Promise.all(promises);
    }
    removeFiles(files) {
        for (let index = 0; index < files.length && files[index].path && files[index].path.trim() !== ''; index++) {
            const name = this.getFileName(files[index].path, true);
            const element = document.getElementById(name);
            element.parentNode.removeChild(element);
            if (files[index].type === FileTypeEnum.Script && this.scripts.has(name)) {
                this.scripts.delete(name);
            }
            else if (files[index].type === FileTypeEnum.Style && this.styles.has(name)) {
                this.styles.delete(name);
            }
        }
    }
    loadScript(path) {
        return new Promise((resolve, reject) => {
            const name = this.getFileName(path, true);
            // If the script isn't exist add it.
            if (!this.scripts.has(name)) {
                this.scripts.set(name, { loaded: false, src: path });
            }
            const scriptItem = this.scripts.get(name);
            // Resolve if already loaded
            if (scriptItem.loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                // Load script
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = scriptItem.src;
                script.setAttribute('id', name);
                script.async = false;
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' || script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            scriptItem.loaded = true;
                            resolve({ path, type: FileTypeEnum.Script, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        scriptItem.loaded = true;
                        resolve({ path, type: FileTypeEnum.Script, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => resolve({ path, type: FileTypeEnum.Script, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }
    loadStyle(path) {
        return new Promise((resolve, reject) => {
            const name = this.getFileName(path, true);
            // If the style isn't exist add it.
            if (!this.styles.has(name)) {
                this.styles.set(name, { loaded: false, src: path });
            }
            const styleItem = this.styles.get(name);
            // Resolve if already loaded
            if (styleItem.loaded) {
                resolve({ path, type: FileTypeEnum.Style, loaded: true, status: 'Already Loaded' });
            }
            else {
                // Load style
                const style = document.createElement('link');
                style.type = 'text/css';
                style.rel = 'stylesheet';
                style.href = styleItem.src;
                style.media = 'all';
                style.setAttribute('id', name);
                styleItem.loaded = true;
                resolve({ path, type: FileTypeEnum.Style, loaded: true, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        });
    }
    getFileName(filePath, withExtenstion = false) {
        let lastIndex = withExtenstion ? filePath.length - 1 : filePath.lastIndexOf('.');
        return filePath.substr(filePath.lastIndexOf('/') + 1, lastIndex);
    }
    getFileExtension(filePath) {
        var fileSplit = filePath.split('.');
        var fileExt = '';
        if (fileSplit.length > 1) {
            fileExt = fileSplit[fileSplit.length - 2];
        }
        return fileExt;
    }
    /* Returns true if url is valid */
    isValidUrl(url) {
        /* Try creating a valid URL */
        try {
            const tmp = new URL(url);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    convertFromb64toBlob(b64Data, contentType = '', sliceSize = 512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    getAssetsPath() {
        return `/assets/ngx-lib/`;
    }
    getAssetsTranslationsPath() {
        return `${this.getAssetsPath()}i18n/`;
    }
    getAssetsImagesPath(image = '') {
        return `${this.getAssetsPath()}images/${image}`;
    }
    getNoImagePath() {
        return this.getAssetsImagesPath('no-image.svg');
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(); };
FileService.ɵprov = ɵɵdefineInjectable({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FileService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

// export class JsonFilter {
//     ExpressionId: number;
//     ComplexId: number;
//     ApiName: string;
//     Operation: string;
//     Values: string[];
//     constructor() {
//         this.ExpressionId = 1;
//         this.ApiName = '';
//         this.Operation = '';
//         this.Values = [];
//     }
//     initFromObj(obj: JsonFilter): void {
//         if (obj) {
//             this.ExpressionId = obj.ExpressionId;
//             this.ApiName = obj.ApiName;
//             this.Operation = obj.Operation;
//             if (this.Values !== obj.Values) {
//                 this.Values = [];
//                 if (obj.Values) {
//                     obj.Values.forEach((value) => this.Values.push(value));
//                 }
//             }
//         }
//     }
//     Valid(): boolean {
//         return this.Operation !== '' && this.ApiName !== '';
//     }
// }
// export class JsonFilters {
//     leftNode: string;
//     rightNode: string;
//     operator: string;
//     ComplexId: number;
//     constructor(left = '', right = '', operator = 'AND', complexId = 2) {
//         this.leftNode = left;
//         this.rightNode = right;
//         this.operator = operator;
//         this.ComplexId = complexId;
//     }
//     toString(): string {
//         let retVal = '';
//         if (this.leftNode !== '' && this.rightNode === '') {
//             retVal = this.leftNode;
//         } else if (this.leftNode === '' && this.rightNode !== '') {
//             retVal = this.rightNode;
//         } else if (this.leftNode !== '' && this.rightNode !== '') {
//             retVal = '{ "ComplexId":' + this.ComplexId + ',';
//             retVal += ' "Operation":"' + this.operator + '",';
//             retVal += ' "LeftNode": ' + this.leftNode + ',';
//             retVal += ' "RightNode": ' + this.rightNode + '}';
//         }
//         return retVal;
//     }
// }
// export enum DATE_RANGE {
//     None = 0,
//     InTheLast = 1,
//     Today = 2,
//     ThisWeek = 3,
//     ThisMonth = 4,
//     /*Before = 5, After = 6,*/ Between = 5,
//     DueIn = 6,
//     On = 7,
//     NotInTheLast = 8,
//     NotDueIn = 9,
//     IsEmpty = 10,
//     IsNotEmpty = 11,
// }
// export enum DATE_PERIOD {
//     None = 0,
//     Days = 1,
//     Weeks = 2,
//     Months = 3,
//     Years = 4,
// }
// export enum DATE_RANGE_VIEWTYPE {
//     None = 0,
//     Period = 1,
//     OneCalendar = 2,
//     TwoCalendars = 3,
//     NoCalendars = 4,
// }
class UtilitiesService {
    constructor() { }
    parseDate(dateStr, showTime = false) {
        let retVal = null;
        if (dateStr !== '') {
            retVal = new Date(dateStr);
            const dateText = dateStr.split('-');
            if (dateText.length === 3 && !showTime) {
                const year = Number(dateText[0]);
                const month = Number(dateText[1]) - 1;
                const day = Number(dateText[2]);
                retVal = new Date(year, month, day);
            }
        }
        if (retVal && isNaN(retVal.getTime())) {
            retVal = null;
        }
        return retVal;
    }
    stringifyDate(date, showTime = false) {
        if (date) {
            const dateText = [];
            dateText.push(date.getFullYear(), '-', date.getMonth() + 1, '-', date.getDate());
            if (showTime) {
                dateText.push('T', (date.getHours() < 10 ? '0' : '') + date.getHours(), ':', (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(), ':', (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(), 'Z');
            }
            return dateText.join('');
        }
        else {
            return '';
        }
    }
    stringifyDateWithOffset(date, showTime = false) {
        if (showTime) {
            const offsetMinutes = new Date().getTimezoneOffset() * -1;
            date.setMinutes(date.getMinutes() - offsetMinutes);
        }
        return this.stringifyDate(date, showTime);
    }
    isValueHtml(value) {
        let res = false;
        const REGEXP = /<\/?[a-z][\s\S]*>/i;
        res = REGEXP.test(value);
        return res;
    }
    isJsonString(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
}
UtilitiesService.ɵfac = function UtilitiesService_Factory(t) { return new (t || UtilitiesService)(); };
UtilitiesService.ɵprov = ɵɵdefineInjectable({ token: UtilitiesService, factory: UtilitiesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UtilitiesService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

/*
 * Public API Surface of ngx-lib/core/common/services
 */

/*
 * export from ngx-lib/core/common/services
 */

/*
 * Public API Surface of ngx-lib/core/common
 */

/*
 * export from ngx-lib/core/common
 */

var LAYOUT_TYPE;
(function (LAYOUT_TYPE) {
    LAYOUT_TYPE[LAYOUT_TYPE["PepperiForm"] = 0] = "PepperiForm";
    LAYOUT_TYPE[LAYOUT_TYPE["PepperiCard"] = 1] = "PepperiCard";
    LAYOUT_TYPE[LAYOUT_TYPE["PepperiTable"] = 2] = "PepperiTable";
    // PepperiCampaign,
    LAYOUT_TYPE[LAYOUT_TYPE["Editmodal"] = 3] = "Editmodal";
})(LAYOUT_TYPE || (LAYOUT_TYPE = {}));
var STYLE_TYPE;
(function (STYLE_TYPE) {
    STYLE_TYPE["Weak"] = "weak";
    STYLE_TYPE["Regular"] = "regular";
    STYLE_TYPE["Strong"] = "strong";
})(STYLE_TYPE || (STYLE_TYPE = {}));
class PepperiOption {
}
class PepperiFieldBase {
    constructor(options = {}) {
        this.notificationInfo = {};
        this.value = options.value;
        this.formattedValue = options.formattedValue;
        this.additionalValue = options.additionalValue;
        this.notificationInfo = options.notificationInfo;
        this.key = options.key || '';
        this.label = options.label || '';
        this.accessory = options.accessory || '';
        this.required = !!options.required;
        this.readonly = !!options.readonly;
        this.disabled = !!options.disabled;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.placeholder = options.placeholder || '';
        this.hidden = !!options.hidden;
        this.row = options.row === undefined ? 1 : options.row;
        this.rowSpan = options.rowSpan === undefined ? 1 : options.rowSpan;
        this.col = options.col === undefined ? 1 : options.col;
        this.colSpan = options.colSpan === undefined ? 1 : options.colSpan;
        this.xAlignment = options.xAlignment === undefined ? 1 : options.xAlignment;
        this.yAlignment = options.yAlignment === undefined ? 1 : options.yAlignment;
        this.maxFieldCharacters = options.maxFieldCharacters === undefined ? 0 : options.maxFieldCharacters;
        this.minValue = options.minValue === undefined ? 0 : options.minValue;
        this.maxValue = options.maxValue === undefined ? 0 : options.maxValue;
        this.textColor = options.textColor || '';
        this.lastFocusField = options.lastFocusField || null;
        this.updatedDataCount = 0;
    }
    updateField(updatedField, canEditObject, lastFocusField = null) {
        this.disabled = !updatedField.Enabled || !canEditObject;
        this.readonly = !updatedField.Enabled || !canEditObject;
        this.value = updatedField.Value;
        this.additionalValue = updatedField.AdditionalValue;
        this.formattedValue = updatedField.FormattedValue;
        this.notificationInfo = updatedField.NotificationInfo;
        this.textColor = updatedField.TextColor;
        this.lastFocusField = lastFocusField;
        if (this.controlType === 'qs') {
            this.updatedDataCount += 1;
        }
        if (this.type === 'link') {
            // DI-11292 - add changes for link field for the "Read Only display value" prop
            this.formattedValue =
                this.disabled && this.formattedValue !== null && this.value !== null ? this.formattedValue : this.value;
        }
    }
}
class PepperiPlaceholderField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'placeholder';
    }
}
class PepperiSeparatorField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'separator';
    }
}
class PepperiButtonField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'button';
        this.referenceObjectSubType = '';
        this.referenceObjectInternalType = '';
        this.referenceObjectType = options.referenceObjectType || null;
        this.referenceObjectSubType = options.referenceObjectSubType || null;
        this.referenceObjectInternalType = options.referenceObjectInternalType || null;
    }
}
class PepperiAttachmentField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'attachment';
    }
}
class PepperiIndicatorsField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'indicators';
    }
}
class PepperiTextboxField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'textbox';
    }
}
class PepperiTextareaField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'textarea';
        this.type = 'textarea';
    }
}
class PepperiRichHtmlTextareaField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'richhtmltextarea';
        this.type = 'richhtmltextarea';
    }
}
class PepperiSignatureField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'signature';
        this.options = [];
        this.options = options.options || [];
    }
}
class PepperiImageField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'image';
        this.hasCampaignField = null;
        this.indicatorsField = null;
        this.menuField = null;
        this.options = [];
        this.sizeLimitMB = 5;
        this.hasCampaignField = options.hasCampaignField || null;
        this.indicatorsField = options.indicatorsField || null;
        this.menuField = options.menuField || null;
        this.options = options.options || [];
        this.sizeLimitMB = options.sizeLimitMB || 5;
    }
}
class PepperiImagesField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'images';
        this.options = [];
        this.options = options.options || [];
    }
}
class PepperiQuantitySelectorField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'qs';
        this.alowDecimal = options.alowDecimal || false;
    }
}
class PepperiDateField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'date';
    }
}
class PepperiCheckboxField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'checkbox';
    }
}
class PepperiSelectField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'select';
        this.options = [];
        this.options = options.options || [];
    }
    updateField(updatedField, canEditObject) {
        super.updateField(updatedField, canEditObject);
        this.options = updatedField.OptionalValues;
    }
}
class PepperiAddressField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'address';
        this.groupFields = null;
        this.groupFields = options.groupFields || null;
    }
}
class PepperiInternalPageField extends PepperiFieldBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'internalPage';
        this.objectId = '';
        this.parentId = '';
        this.searchCode = '';
        this.objectId = options.objectId || '';
        this.parentId = options.parentId || '';
        this.searchCode = options.searchCode || '';
    }
}
class PepperiMenuField extends PepperiFieldBase {
    // hasSubMenu: boolean = false;
    constructor(options = {}) {
        super(options);
        this.controlType = 'menu';
        this.options = [];
        this.options = options.options || [];
        // this.hasSubMenu = options['hasSubMenu'];
    }
}
class PepperiObjectChangedData {
    constructor(id, apiName, value, controlType = '') {
        this.Id = id;
        this.ApiName = apiName;
        this.Value = value;
        this.ControlType = controlType || '';
    }
}
class PepperiFieldClickedData {
    constructor(id, apiName, idType, which, value, fieldType, otherData = null) {
        this.Id = id;
        this.ApiName = apiName;
        this.IdType = idType;
        this.FieldType = fieldType;
        this.Which = which;
        this.Value = value;
        this.OtherData = otherData;
    }
}

class CustomizationService {
    constructor(sessionService, fb) {
        this.sessionService = sessionService;
        this.fb = fb;
        this.hasCustomHomepage = null;
        this.hasCustomHeader = null;
        this.customHeaderHeight = CustomizationService.DEFAULT_HEADER_HEIGHT;
        this.mainContHeight = 0;
        this.footerHeight = new BehaviorSubject(0);
    }
    getValidatorsForField(required, readonly, disabled, maxFieldCharacters, type, isCheckbox = false, minValue = NaN, maxValue = NaN) {
        const validators = [];
        if (required && !readonly && !disabled) {
            if (isCheckbox) {
                validators.push(Validators.requiredTrue);
            }
            else {
                validators.push(Validators.required);
            }
        }
        else {
            validators.push(Validators.nullValidator);
        }
        if (maxFieldCharacters > 0) {
            validators.push(Validators.maxLength(maxFieldCharacters));
        }
        if (type === 'email') {
            validators.push(Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
        }
        else if (type === 'phone') {
            validators.push(Validators.pattern(/^[\d\.\-\+\(\)\*\#]+$/));
        }
        else if (type === 'int' || type === 'real') {
            validators.push(Validators.pattern(/^[\.,\-\+\d]+$/));
            if (!isNaN(minValue)) {
                validators.push(Validators.min(minValue));
            }
            if (!isNaN(maxValue)) {
                validators.push(Validators.max(maxValue));
            }
        }
        return validators;
    }
    getDefaultFromGroup(key, value, required, readonly, disabled, maxFieldCharacters = 0, type = '', isCheckbox = false, withValidators = true, minValue = NaN, maxValue = NaN) {
        const validators = withValidators ?
            this.getValidatorsForField(required, readonly, disabled, maxFieldCharacters, type, isCheckbox, minValue, maxValue) : [];
        const group = {};
        group[key] = [{ value, disabled }, validators];
        return this.fb.group(group);
    }
    getFormControl(form, fieldKey, parentFieldKey = null) {
        let formControl = null;
        if (form && form.controls) {
            if (parentFieldKey === null) {
                formControl = form.controls[fieldKey];
            }
            else {
                formControl = form.controls[parentFieldKey].get(fieldKey);
            }
        }
        return formControl;
    }
    updateFormFieldValue(form, fieldKey, value = '', parentFieldKey = null) {
        const formControl = this.getFormControl(form, fieldKey, parentFieldKey);
        if (formControl) {
            formControl.setValue(value);
        }
    }
    updateFormField(form, field, value = '', parentField = null) {
        const formControl = this.getFormControl(form, field.key, parentField);
        if (formControl) {
            formControl.setValue(value);
            // If disabled has changed.
            if (formControl.disabled !== field.disabled) {
                field.disabled ? formControl.disable() : formControl.enable();
                const validators = this.getValidatorsForField(field.required, field.readonly, field.disabled, field.maxFieldCharacters, field.type, field.controlType === 'checkbox');
                formControl.setValidators(validators);
            }
        }
    }
    calculateFormFieldHeight(withTitle = true, rowSpan = 1, standAlone = false) {
        const themeVars = this.getThemeVariables();
        const rowFieldHeight = this.getNumberThemeVariable(themeVars, CustomizationService.FORM_FIELD_HEIGHT_KEY);
        const rowFieldTitleHeight = this.getNumberThemeVariable(themeVars, CustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY);
        const rowFieldSpacingBottom = this.getNumberThemeVariable(themeVars, CustomizationService.FORM_SPACEING_KEY);
        let fieldHeight = 0;
        if (rowSpan === 1) {
            fieldHeight = (withTitle ? rowFieldTitleHeight : 0) + rowFieldHeight;
        }
        else {
            const rowSpanCalc = withTitle ? rowSpan : rowSpan - 1;
            fieldHeight =
                rowSpan * rowFieldHeight +
                    rowSpanCalc * rowFieldTitleHeight +
                    (standAlone ? 0 : rowSpanCalc * rowFieldSpacingBottom);
        }
        return fieldHeight;
    }
    calculateCardRowsHeight(rowsCount = 1, withSpacing = true) {
        const themeVars = this.getThemeVariables();
        const cardFieldHeight = this.getNumberThemeVariable(themeVars, CustomizationService.CARD_FIELD_HEIGHT_KEY);
        const cardFieldSpacing = this.getNumberThemeVariable(themeVars, CustomizationService.CARD_SPACEING_KEY);
        const fieldHeight = rowsCount * cardFieldHeight + (rowsCount - 1) * (withSpacing ? cardFieldSpacing : 0);
        return fieldHeight;
    }
    calculateTableRowsHeight(rowsCount = 1, withSpacing = true) {
        const themeVars = this.getThemeVariables();
        const tableFieldHeight = this.getNumberThemeVariable(themeVars, CustomizationService.TABLE_FIELD_HEIGHT_KEY);
        const tableFieldSpacing = this.getNumberThemeVariable(themeVars, CustomizationService.TABLE_SPACEING_KEY);
        const fieldHeight = rowsCount * (tableFieldHeight + (withSpacing ? tableFieldSpacing * 2 : 0));
        return fieldHeight;
    }
    calculateFieldHeight(layoutType = LAYOUT_TYPE.PepperiForm, rowSpan, standAlone) {
        let fieldHeight = 'inherit'; // Default for card (with no title)
        if (layoutType === LAYOUT_TYPE.PepperiTable) {
            fieldHeight = this.getThemeVariable(CustomizationService.TABLE_FIELD_HEIGHT_KEY);
        }
        else if (layoutType === LAYOUT_TYPE.PepperiCard) {
            fieldHeight = this.calculateCardRowsHeight(rowSpan, !standAlone) + CustomizationService.REM_STRING;
        }
        else {
            // PepperiForm
            fieldHeight = this.calculateFormFieldHeight(false, rowSpan, standAlone) + CustomizationService.REM_STRING;
        }
        return fieldHeight;
    }
    getBrandingTheme() {
        const themeObj = this.sessionService.getObject(CustomizationService.USER_THEME);
        return (themeObj && themeObj.Theme) || 'default-theme'; // 'light-theme';
    }
    getDefaultThemeLayoutVariables(themeVars) {
        // Declare default screen sizes.
        themeVars['--pep-screen-max-size-2xs'] = '460' + CustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-xs'] = '767' + CustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-sm'] = '991' + CustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-md'] = '1199' + CustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-lg'] = '1366' + CustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-xl'] = '1920' + CustomizationService.PX_STRING;
        // Declare default top bar.
        themeVars[CustomizationService.SIDE_BAR_WIDTH_KEY] = '16' + CustomizationService.REM_STRING;
        // Declare default top bar.
        themeVars[CustomizationService.TOP_BAR_SPACING_TOP_KEY] = '1.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.TOP_BAR_SPACING_BOTTOM_KEY] = '0.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.TOP_BAR_FIELD_HEIGHT_KEY] = '2.5' + CustomizationService.REM_STRING;
        // Declare default footer.
        themeVars[CustomizationService.FOOTER_BAR_SPACING_TOP_KEY] = '0.75' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FOOTER_BAR_SPACING_BOTTOM_KEY] = '1.25' + CustomizationService.REM_STRING;
    }
    getDefaultThemeBorderRadiusVariables(themeVars) {
        themeVars[CustomizationService.BORDER_RADIUS_SM_KEY] = '0.125' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.BORDER_RADIUS_MD_KEY] = '0.25' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.BORDER_RADIUS_LG_KEY] = '0.5' + CustomizationService.REM_STRING;
    }
    getDefaultThemeSpacingVariables(themeVars) {
        themeVars[CustomizationService.SPACING_SIZE_2XS_KEY] = '0.125' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_XS_KEY] = '0.25' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_SM_KEY] = '0.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_MD_KEY] = '0.75' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_LG_KEY] = '1' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_XL_KEY] = '1.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_2XL_KEY] = '2' + CustomizationService.REM_STRING;
    }
    getDefaultThemeFontsVariables(themeVars) {
        // Title font family
        themeVars[CustomizationService.FONT_FAMILY_TITLE_KEY] = 'Nexa';
        // Body font family
        themeVars[CustomizationService.FONT_FAMILY_BODY_KEY] = 'Inter';
        // Font sizes
        themeVars[CustomizationService.FONT_SIZE_2XS_KEY] = '0.625' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_XS_KEY] = '0.75' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_SM_KEY] = '0.875' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_MD_KEY] = '1' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_LG_KEY] = '1.125' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_XL_KEY] = '1.25' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_2XL_KEY] = '1.5' + CustomizationService.REM_STRING;
        // Line height
        themeVars[CustomizationService.LINE_HEIGHT_2XS_KEY] = '0.75' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_XS_KEY] = '1' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_SM_KEY] = '1.25' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_MD_KEY] = '1.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_LG_KEY] = '1.75' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_XL_KEY] = '2' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_2XL_KEY] = '2.25' + CustomizationService.REM_STRING;
        // Font weight
        themeVars['--pep-font-weight-normal'] = 400;
        themeVars['--pep-font-weight-bold'] = 600;
        themeVars['--pep-font-weight-bolder'] = 800;
    }
    getDefaultThemeButtonsVariables(themeVars) {
        themeVars['--pep-button-2xs-horizontal-spacing'] = '0.25' + CustomizationService.REM_STRING;
        themeVars['--pep-button-2xs-min-width'] = '1' + CustomizationService.REM_STRING;
        themeVars['--pep-button-2xs-height'] = '1' + CustomizationService.REM_STRING;
        themeVars['--pep-button-2xs-font-size'] = 'var(' + CustomizationService.FONT_SIZE_2XS_KEY + ')';
        // themeVars['--pep-button-2xs-icon-horizontal-spacing'] = '0.125' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xs-horizontal-spacing'] = '0.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xs-min-width'] = '2' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xs-height'] = '1.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xs-font-size'] = 'var(' + CustomizationService.FONT_SIZE_XS_KEY + ')';
        // themeVars['--pep-button-xs-icon-horizontal-spacing'] = '0.25' + CustomizationService.REM_STRING;
        themeVars['--pep-button-sm-horizontal-spacing'] = '0.75' + CustomizationService.REM_STRING;
        themeVars['--pep-button-sm-min-width'] = '2' + CustomizationService.REM_STRING;
        themeVars['--pep-button-sm-height'] = '2' + CustomizationService.REM_STRING;
        themeVars['--pep-button-sm-font-size'] = 'var(' + CustomizationService.FONT_SIZE_SM_KEY + ')';
        // themeVars['--pep-button-sm-icon-horizontal-spacing'] = '0.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-md-horizontal-spacing'] = '1' + CustomizationService.REM_STRING;
        themeVars['--pep-button-md-min-width'] = '2.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-md-height'] = '2.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-md-font-size'] = 'var(' + CustomizationService.FONT_SIZE_MD_KEY + ')';
        // themeVars['--pep-button-md-icon-horizontal-spacing'] = '0.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-lg-horizontal-spacing'] = '1' + CustomizationService.REM_STRING;
        themeVars['--pep-button-lg-min-width'] = '3' + CustomizationService.REM_STRING;
        themeVars['--pep-button-lg-height'] = '3' + CustomizationService.REM_STRING;
        themeVars['--pep-button-lg-font-size'] = 'var(' + CustomizationService.FONT_SIZE_LG_KEY + ')';
        // themeVars['--pep-button-lg-icon-horizontal-spacing'] = '0.75' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xl-horizontal-spacing'] = '1.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xl-min-width'] = '5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xl-height'] = '4' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xl-font-size'] = 'var(' + CustomizationService.FONT_SIZE_XL_KEY + ')';
        // themeVars['--pep-button-xl-icon-horizontal-spacing'] = '1' + CustomizationService.REM_STRING;
    }
    getSystemPrimaryInvertColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-h'] = '255';
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-s'] = '100%';
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-l'] = '100%';
    }
    getSystemPrimaryColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h'] = '0';
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s'] = '0%';
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l'] = '10%';
    }
    getSystemSuccessColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-h'] = '100';
        themeVars[CustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-s'] = '100%';
        themeVars[CustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-l'] = '25%';
    }
    getSystemCautionColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-h'] = '360';
        themeVars[CustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-s'] = '100%';
        themeVars[CustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-l'] = '40%';
    }
    getUserPrimaryColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_USER_PRIMARY_KEY + '-h'] = '78';
        themeVars[CustomizationService.COLOR_USER_PRIMARY_KEY + '-s'] = '87%';
        themeVars[CustomizationService.COLOR_USER_PRIMARY_KEY + '-l'] = '27%';
    }
    getUserSecondaryColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_USER_SECONDARY_KEY + '-h'] = '77';
        themeVars[CustomizationService.COLOR_USER_SECONDARY_KEY + '-s'] = '87%';
        themeVars[CustomizationService.COLOR_USER_SECONDARY_KEY + '-l'] = '42%';
    }
    getWeakColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_WEAK_KEY + '-h'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
        themeVars[CustomizationService.COLOR_WEAK_KEY + '-s'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
        themeVars[CustomizationService.COLOR_WEAK_KEY + '-l'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
    }
    getRegularColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_REGULAR_KEY + '-h'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
        themeVars[CustomizationService.COLOR_REGULAR_KEY + '-s'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
        themeVars[CustomizationService.COLOR_REGULAR_KEY + '-l'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
    }
    getStrongColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_STRONG_KEY + '-h'] = 'var(' + CustomizationService.COLOR_USER_PRIMARY_KEY + '-h)';
        themeVars[CustomizationService.COLOR_STRONG_KEY + '-s'] = 'var(' + CustomizationService.COLOR_USER_PRIMARY_KEY + '-s)';
        themeVars[CustomizationService.COLOR_STRONG_KEY + '-l'] = 'var(' + CustomizationService.COLOR_USER_PRIMARY_KEY + '-l)';
    }
    getTextColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_TEXT_LINK_KEY + '-h'] = '207';
        themeVars[CustomizationService.COLOR_TEXT_LINK_KEY + '-s'] = '76%';
        themeVars[CustomizationService.COLOR_TEXT_LINK_KEY + '-l'] = '37%';
    }
    getDefaultThemeColorsVariables(themeVars) {
        // System primary invert colors.
        this.getSystemPrimaryInvertColorsVariables(themeVars);
        // System primary colors.
        this.getSystemPrimaryColorsVariables(themeVars);
        // System success colors.
        this.getSystemSuccessColorsVariables(themeVars);
        // System caution colors.
        this.getSystemCautionColorsVariables(themeVars);
        // User primary colors.
        this.getUserPrimaryColorsVariables(themeVars);
        // User secondary colors.
        this.getUserSecondaryColorsVariables(themeVars);
        // Weak colors.
        this.getWeakColorsVariables(themeVars);
        // Regular colors.
        this.getRegularColorsVariables(themeVars);
        // Strong colors.
        this.getStrongColorsVariables(themeVars);
        // Text colors.
        this.getTextColorsVariables(themeVars);
    }
    getDefaultThemeShadowsVariables(themeVars) {
        const noneOffset = '0';
        themeVars[CustomizationService.SHADOW_NONE_OFFSET_KEY] = noneOffset;
        const xsOffset = '0 0.125rem 0.25rem 0';
        themeVars[CustomizationService.SHADOW_XS_OFFSET_KEY] = xsOffset;
        const smOffset = '0 0.25rem 0.5rem 0';
        themeVars[CustomizationService.SHADOW_SM_OFFSET_KEY] = smOffset;
        const mdOffset = '0 0.5rem 1rem 0';
        themeVars[CustomizationService.SHADOW_MD_OFFSET_KEY] = mdOffset;
        const lgOffset = '0 1rem 2rem 0';
        themeVars[CustomizationService.SHADOW_LG_OFFSET_KEY] = lgOffset;
        const xlOffset = '0 2rem 4rem 0';
        themeVars[CustomizationService.SHADOW_XL_OFFSET_KEY] = xlOffset;
    }
    getDefaultThemeFormCustomizationVariables(themeVars) {
        const formFieldSpacing = 1;
        themeVars[CustomizationService.FORM_FIELD_HEIGHT_KEY] = '2.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY] = '1.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FORM_SPACEING_KEY] = formFieldSpacing + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FORM_FIELD_SPACEING_KEY] = formFieldSpacing + CustomizationService.REM_STRING;
    }
    getDefaultThemeCardCustomizationVariables(themeVars) {
        themeVars[CustomizationService.CARD_FIELD_HEIGHT_KEY] = '1.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.CARD_SPACEING_KEY] = 'var(' + CustomizationService.SPACING_SIZE_XS_KEY + ')';
        themeVars[CustomizationService.CARD_BORDER_RADIUS_KEY] = 'var(' + CustomizationService.BORDER_RADIUS_MD_KEY + ')';
        themeVars[CustomizationService.CARD_SHADOW_OFFSET_KEY] = 'var(' + CustomizationService.SHADOW_MD_OFFSET_KEY + ')';
    }
    getDefaultThemeTableCustomizationVariables(themeVars) {
        themeVars[CustomizationService.TABLE_FIELD_HEIGHT_KEY] = '2' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.TABLE_SPACEING_KEY] = '0.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.TABLE_BORDER_RADIUS_KEY] = 'var(' + CustomizationService.BORDER_RADIUS_MD_KEY + ')';
    }
    getDefaultThemeQSCustomizationVariables(themeVars) {
        const qsState = STYLE_TYPE.Regular;
        themeVars[CustomizationService.STYLE_QS_KEY] = qsState;
        themeVars[CustomizationService.COLOR_QS_KEY + '-h'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
        themeVars[CustomizationService.COLOR_QS_KEY + '-s'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
        themeVars[CustomizationService.COLOR_QS_KEY + '-l'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
    }
    getDefaultThemeTopHeaderCustomizationVariables(themeVars) {
        const topHeaderState = STYLE_TYPE.Strong;
        themeVars[CustomizationService.STYLE_TOP_HEADER_KEY] = topHeaderState;
        themeVars[CustomizationService.COLOR_TOP_HEADER_KEY + '-h'] = '';
        themeVars[CustomizationService.COLOR_TOP_HEADER_KEY + '-s'] = '';
        themeVars[CustomizationService.COLOR_TOP_HEADER_KEY + '-l'] = '';
    }
    getDefaultThemeVariables() {
        const themeVars = {};
        // Declare default layout.
        this.getDefaultThemeLayoutVariables(themeVars);
        // Declare default border radius.
        this.getDefaultThemeBorderRadiusVariables(themeVars);
        // Declare default spacing.
        this.getDefaultThemeSpacingVariables(themeVars);
        // Declare default fonts size & line height.
        this.getDefaultThemeFontsVariables(themeVars);
        // Declare default buttons.
        this.getDefaultThemeButtonsVariables(themeVars);
        // Declare default colors.
        this.getDefaultThemeColorsVariables(themeVars);
        // Declare default shadows.
        this.getDefaultThemeShadowsVariables(themeVars);
        // Declare default form customization.
        this.getDefaultThemeFormCustomizationVariables(themeVars);
        // Declare default card customization.
        this.getDefaultThemeCardCustomizationVariables(themeVars);
        // Declare default table customization.
        this.getDefaultThemeTableCustomizationVariables(themeVars);
        // Declare default qs customization.
        this.getDefaultThemeQSCustomizationVariables(themeVars);
        // Declare default top header customization.
        this.getDefaultThemeTopHeaderCustomizationVariables(themeVars);
        return themeVars;
    }
    getThemeVariables() {
        const ret = this.getDefaultThemeVariables();
        const themeVars = this.sessionService.getObject(CustomizationService.USER_THEME_VARIABLES);
        // Override defaults.
        if (themeVars) {
            // tslint:disable-next-line: forin
            for (const key in themeVars) {
                ret[key] = themeVars[key];
            }
        }
        return ret;
    }
    setThemeVariables(themeVariablesToSet = null) {
        const themeVariables = this.getThemeVariables();
        // Override defaults.
        if (themeVariablesToSet) {
            // tslint:disable-next-line: forin
            for (const key in themeVariablesToSet) {
                themeVariables[key] = themeVariablesToSet[key];
            }
        }
        this.sessionService.setObject(CustomizationService.USER_THEME_VARIABLES, JSON.stringify(themeVariables));
        // tslint:disable-next-line: forin
        for (const key in themeVariables) {
            document.documentElement.style.setProperty(key, themeVariables[key]);
        }
    }
    getThemeVariable(key) {
        const themeVars = this.getThemeVariables();
        if (themeVars.hasOwnProperty(key)) {
            return themeVars[key];
        }
        else {
            return '';
        }
    }
    getNumberThemeVariable(themeVars, key) {
        if (themeVars && themeVars.hasOwnProperty(key)) {
            // If it's reference to another key.
            if (themeVars[key].indexOf('var(') === 0) {
                key = themeVars[key].substr(4).split(')')[0];
            }
            const tmp = Number(themeVars[key].replace(CustomizationService.REM_STRING, ''));
            return tmp;
        }
        else {
            return 0;
        }
    }
    setFooterHeight(height) {
        const self = this;
        if (this.footerHeight.getValue() !== height) {
            // it is publishing this value to all the subscribers that have already subscribed to this message
            setTimeout(() => self.footerHeight.next(height), 0);
        }
        document.documentElement.style.setProperty(CustomizationService.FOOTER_HEIGHT_KEY, height + CustomizationService.REM_STRING);
    }
    setDefaultFooterHeight() {
        const themeVars = this.getThemeVariables();
        const res = this.getNumberThemeVariable(themeVars, CustomizationService.FOOTER_BAR_SPACING_TOP_KEY) +
            this.getNumberThemeVariable(themeVars, CustomizationService.FOOTER_BAR_SPACING_BOTTOM_KEY) +
            this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_FIELD_HEIGHT_KEY);
        this.setFooterHeight(res);
    }
    getTopBarHeight() {
        const themeVars = this.getThemeVariables();
        const res = this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_SPACING_TOP_KEY) +
            this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_SPACING_BOTTOM_KEY) +
            this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_FIELD_HEIGHT_KEY);
        return res;
    }
    setOldUserTheme(res) {
        // Added user theme.
        const themeObj = {
            Theme: res.Theme || 'default-theme',
        };
        this.sessionService.setObject(CustomizationService.USER_THEME, JSON.stringify(themeObj));
        let spinnerColor;
        let brandingFontColor;
        if (this.isLightColor(res.BrandingMainColor)) {
            spinnerColor = CustomizationService.DEFAULT_SPINNER_COLOR;
            brandingFontColor = '#222';
        }
        else {
            spinnerColor = res.BrandingMainColor;
            brandingFontColor = CustomizationService.DEFAULT_BRANDING_COLOR;
        }
        const color = {
            BrandingSecondaryColor: res.BrandingSecondaryColor,
            BrandingMainColor: res.BrandingMainColor,
            BrandingFontColor: brandingFontColor,
            SpinnerColor: spinnerColor,
        };
        this.sessionService.setObject(CustomizationService.USER_COLOR, JSON.stringify(color));
        this.hasCustomHeader = res.TopHeaderFiles && res.TopHeaderFiles.length > 0 && res.TopHeaderFiles[0] !== '' ? true : false;
        this.hasCustomHomepage =
            res.UserRole === 'Buyer' && res.TopHeaderFiles &&
                res.TopHeaderFiles.length > 1 && res.TopHeaderFiles[1] !== '';
    }
    isLegacyColor() {
        const h = document.documentElement.style.getPropertyValue(CustomizationService.COLOR_TOP_HEADER_KEY + '-h');
        const s = document.documentElement.style.getPropertyValue(CustomizationService.COLOR_TOP_HEADER_KEY + '-s');
        const l = document.documentElement.style.getPropertyValue(CustomizationService.COLOR_TOP_HEADER_KEY + '-l');
        return !(h && s && l);
    }
    getLoadingSpinnerColor() {
        let spinnerColor = '';
        if (this.isLegacyColor()) {
            const color = this.sessionService.getObject(CustomizationService.USER_COLOR);
            if (color && color.SpinnerColor) {
                spinnerColor = color.SpinnerColor;
            }
            else {
                spinnerColor = CustomizationService.DEFAULT_SPINNER_COLOR;
            }
        }
        return spinnerColor;
    }
    getBrandingMainColor() {
        let brandingMainColor = '';
        if (this.isLegacyColor()) {
            const color = this.sessionService.getObject(CustomizationService.USER_COLOR);
            if (color && color.BrandingMainColor) {
                brandingMainColor = color.BrandingMainColor;
            }
            else {
                brandingMainColor = CustomizationService.DEFAULT_BRANDING_COLOR;
            }
        }
        return brandingMainColor;
    }
    isLightColor(hexColor) {
        if (!hexColor) {
            return;
        }
        let isBright = false;
        let sum = 0;
        const c = hexColor.replace(/^#/, '');
        sum = parseInt(c[0] + c[1], 16);
        sum += parseInt(c[2] + c[3], 16);
        sum += parseInt(c[4] + c[5], 16);
        if (sum > 382.6) {
            // it's bright color
            isBright = true;
        }
        return isBright;
    }
}
CustomizationService.STAND_ALONE_FIELD_CLASS_NAME = 'pepperi-field';
CustomizationService.REM_STRING = 'rem';
CustomizationService.PX_STRING = 'px';
CustomizationService.USER_THEME = 'user_theme';
CustomizationService.USER_COLOR = 'user_color';
CustomizationService.USER_THEME_VARIABLES = 'user_theme_variables';
// Header height
CustomizationService.HEADER_HEIGHT_KEY = '--pep-header-height';
// Footer height
CustomizationService.FOOTER_HEIGHT_KEY = '--pep-footer-bar-height';
// Main container height
CustomizationService.MAIN_HEIGHT_KEY = '--pep-main-height';
// Colors variables keys
CustomizationService.COLOR_USER_PRIMARY_KEY = '--pep-color-user-primary';
CustomizationService.COLOR_USER_SECONDARY_KEY = '--pep-color-user-secondary';
CustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY = '--pep-color-system-primary-invert';
CustomizationService.COLOR_SYSTEM_PRIMARY_KEY = '--pep-color-system-primary';
CustomizationService.COLOR_TEXT_LINK_KEY = '--pep-color-text-link';
CustomizationService.COLOR_SYSTEM_CAUTION_KEY = '--pep-color-system-caution';
CustomizationService.COLOR_SYSTEM_SUCCESS_KEY = '--pep-color-system-success';
CustomizationService.COLOR_STRONG_KEY = '--pep-color-strong';
CustomizationService.COLOR_REGULAR_KEY = '--pep-color-regular';
CustomizationService.COLOR_WEAK_KEY = '--pep-color-weak';
// Top header variables keys
CustomizationService.COLOR_TOP_HEADER_KEY = '--pep-color-top-header';
CustomizationService.STYLE_TOP_HEADER_KEY = '--pep-style-top-header';
// QS variables keys
CustomizationService.COLOR_QS_KEY = '--pep-color-qs';
CustomizationService.STYLE_QS_KEY = '--pep-style-qs';
// Fonts variables keys
CustomizationService.FONT_FAMILY_TITLE_KEY = '--pep-font-family-title';
CustomizationService.FONT_FAMILY_BODY_KEY = '--pep-font-family-body';
// Border radius variables keys
CustomizationService.BORDER_RADIUS_KEY = '--pep-border-radius';
CustomizationService.BORDER_RADIUS_SM_KEY = CustomizationService.BORDER_RADIUS_KEY + '-sm';
CustomizationService.BORDER_RADIUS_MD_KEY = CustomizationService.BORDER_RADIUS_KEY + '-md';
CustomizationService.BORDER_RADIUS_LG_KEY = CustomizationService.BORDER_RADIUS_KEY + '-lg';
// Fonts variables keys
CustomizationService.FONT_SIZE_2XS_KEY = '--pep-font-size-2xs';
CustomizationService.FONT_SIZE_XS_KEY = '--pep-font-size-xs';
CustomizationService.FONT_SIZE_SM_KEY = '--pep-font-size-sm';
CustomizationService.FONT_SIZE_MD_KEY = '--pep-font-size-md';
CustomizationService.FONT_SIZE_LG_KEY = '--pep-font-size-lg';
CustomizationService.FONT_SIZE_XL_KEY = '--pep-font-size-xl';
CustomizationService.FONT_SIZE_2XL_KEY = '--pep-font-size-2xl';
// Line height variables keys
CustomizationService.LINE_HEIGHT_2XS_KEY = '--pep-line-height-2xs';
CustomizationService.LINE_HEIGHT_XS_KEY = '--pep-line-height-xs';
CustomizationService.LINE_HEIGHT_SM_KEY = '--pep-line-height-sm';
CustomizationService.LINE_HEIGHT_MD_KEY = '--pep-line-height-md';
CustomizationService.LINE_HEIGHT_LG_KEY = '--pep-line-height-lg';
CustomizationService.LINE_HEIGHT_XL_KEY = '--pep-line-height-xl';
CustomizationService.LINE_HEIGHT_2XL_KEY = '--pep-line-height-2xl';
// Shadows offset variables keys
CustomizationService.SHADOW_NONE_OFFSET_KEY = '--pep-shadow-none-offset';
CustomizationService.SHADOW_XS_OFFSET_KEY = '--pep-shadow-xs-offset';
CustomizationService.SHADOW_SM_OFFSET_KEY = '--pep-shadow-sm-offset';
CustomizationService.SHADOW_MD_OFFSET_KEY = '--pep-shadow-md-offset';
CustomizationService.SHADOW_LG_OFFSET_KEY = '--pep-shadow-lg-offset';
CustomizationService.SHADOW_XL_OFFSET_KEY = '--pep-shadow-xl-offset';
// Spacing variables keys
CustomizationService.SPACING_SIZE_2XS_KEY = '--pep-spacing-2xs';
CustomizationService.SPACING_SIZE_XS_KEY = '--pep-spacing-xs';
CustomizationService.SPACING_SIZE_SM_KEY = '--pep-spacing-sm';
CustomizationService.SPACING_SIZE_MD_KEY = '--pep-spacing-md';
CustomizationService.SPACING_SIZE_LG_KEY = '--pep-spacing-lg';
CustomizationService.SPACING_SIZE_XL_KEY = '--pep-spacing-xl';
CustomizationService.SPACING_SIZE_2XL_KEY = '--pep-spacing-2xl';
// Side bar variables keys
CustomizationService.SIDE_BAR_WIDTH_KEY = '--pep-side-bar-width';
// Top bar variables keys
CustomizationService.TOP_BAR_SPACING_TOP_KEY = '--pep-top-bar-spacing-top';
CustomizationService.TOP_BAR_SPACING_BOTTOM_KEY = '--pep-top-bar-spacing-bottom';
CustomizationService.TOP_BAR_FIELD_HEIGHT_KEY = '--pep-top-bar-field-height';
// Footer variables keys
CustomizationService.FOOTER_BAR_SPACING_TOP_KEY = '--pep-footer-bar-spacing-top';
CustomizationService.FOOTER_BAR_SPACING_BOTTOM_KEY = '--pep-footer-bar-spacing-bottom';
// Form variables keys
CustomizationService.FORM_FIELD_HEIGHT_KEY = '--pep-form-field-height';
CustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY = '--pep-form-field-title-height';
CustomizationService.FORM_FIELD_SPACEING_KEY = '--pep-form-field-spacing';
CustomizationService.FORM_SPACEING_KEY = '--pep-form-spacing';
// Card variables keys
CustomizationService.CARD_FIELD_HEIGHT_KEY = '--pep-card-field-height';
CustomizationService.CARD_SPACEING_KEY = '--pep-card-spacing';
CustomizationService.CARD_SHADOW_OFFSET_KEY = '--pep-shadow-card-offset';
CustomizationService.CARD_BORDER_RADIUS_KEY = '--pep-card-border-radius';
// Table variables keys
CustomizationService.TABLE_FIELD_HEIGHT_KEY = '--pep-table-field-height';
CustomizationService.TABLE_SPACEING_KEY = '--pep-table-spacing';
CustomizationService.TABLE_BORDER_RADIUS_KEY = '--pep-table-border-radius';
CustomizationService.DEFAULT_HEADER_HEIGHT = 64; // Default
CustomizationService.DEFAULT_SPINNER_COLOR = '#78aa00';
CustomizationService.DEFAULT_BRANDING_COLOR = '#fff';
CustomizationService.ɵfac = function CustomizationService_Factory(t) { return new (t || CustomizationService)(ɵɵinject(SessionService), ɵɵinject(FormBuilder)); };
CustomizationService.ɵprov = ɵɵdefineInjectable({ token: CustomizationService, factory: CustomizationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomizationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: SessionService }, { type: FormBuilder }]; }, null); })();

/*
 * Public API Surface of ngx-lib/core/customizatin
 */

/*
 * export from ngx-lib/core/customization
 */

/*
 * Public API Surface of ngx-lib/core/http
 */

/*
 * export from ngx-lib/core/http
 */

/*
 * Public API Surface of ngx-lib/core/layout
 */

/*
 * export from ngx-lib/core/layout
 */

/*
 * Public API Surface of ngx-lib/core/portal
 */

/*
 * export from ngx-lib/core/portal
 */

/*
 * Public API Surface of ngx-lib/core
 */

/*
 * export from ngx-lib/core
 */

/*
 * Public API Surface of ngx-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddonService, AttachDirective, ButtonBlurDirective, CapitalizePipe, CookieService, CustomizationService, DataConvertorService, DateFormatter, DateStringFormatter, EncodePipe, EscapePipe, FIELD_TYPE, FieldLayout, FileService, FileTypeEnum, Guid, HttpService, JwtHelperService, LAYOUT_TYPE, LayoutService, LoaderService, MenuBlurDirective, ORIENTATION, ObjectSingleData, ObjectsData, ObjectsDataRow, ObjectsDataRowCell, PepperiAddressField, PepperiAttachmentField, PepperiButtonField, PepperiCheckboxField, PepperiDateField, PepperiFieldBase, PepperiFieldClickedData, PepperiFieldData, PepperiImageField, PepperiImagesField, PepperiIndicatorsField, PepperiInternalPageField, PepperiMenuField, PepperiModule, PepperiObjectChangedData, PepperiOption, PepperiPlaceholderField, PepperiQuantitySelectorField, PepperiRichHtmlTextareaField, PepperiRowData, PepperiSelectField, PepperiSeparatorField, PepperiSignatureField, PepperiTextareaField, PepperiTextboxField, PortalService, ReplaceLineBreaks, RtlClassDirective, RtlDirectionDirective, SCREEN_SIZE, STYLE_TYPE, SafeHtmlPipe, SafePipe, SessionService, SmartSearchResponse, SmartSearchValues, SplitUppercase, TargetDirective, ToNumber, UIControl, UIControlField, UtilitiesService };
//# sourceMappingURL=pepperi-addons-ngx-lib.js.map
