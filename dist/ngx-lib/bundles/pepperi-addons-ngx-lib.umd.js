(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/forms', 'rxjs', 'rxjs/operators', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = {}), global.ng.core, global.ng.common, global.ng.common.http, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.forms, global.rxjs, global.rxjs.operators, global.translate));
}(this, (function (exports, i0, common, i2, i1, animations, i2$1, rxjs, operators, i1$1) { 'use strict';

    var JwtHelperService = /** @class */ (function () {
        function JwtHelperService() {
        }
        JwtHelperService.prototype.urlBase64Decode = function (str) {
            var output = str.replace(/-/g, '+').replace(/_/g, '/');
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
        };
        // credits for decoder goes to https://github.com/atk
        JwtHelperService.prototype.b64decode = function (str) {
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var output = '';
            str = String(str).replace(/=+$/, '');
            if (str.length % 4 === 1) {
                throw new Error('\'atob\' failed: The string to be decoded is not correctly encoded.');
            }
            for (
            // initialize result and counters
            var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
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
        };
        JwtHelperService.prototype.b64DecodeUnicode = function (str) {
            return decodeURIComponent(Array.prototype.map
                .call(this.b64decode(str), function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
                .join(''));
        };
        JwtHelperService.prototype.decodeToken = function (token) {
            if (!token || token === '') {
                return null;
            }
            var parts = token.split('.');
            if (parts.length !== 3) {
                throw new Error('The inspected token doesn\'t appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.');
            }
            var decoded = this.urlBase64Decode(parts[1]);
            if (!decoded) {
                throw new Error('Cannot decode the token.');
            }
            return JSON.parse(decoded);
        };
        JwtHelperService.prototype.getTokenExpirationDate = function (token) {
            var decoded;
            decoded = this.decodeToken(token);
            if (!decoded || !decoded.hasOwnProperty('exp')) {
                return null;
            }
            var date = new Date(0);
            date.setUTCSeconds(decoded.exp);
            return date;
        };
        JwtHelperService.prototype.isTokenExpired = function (token, offsetSeconds) {
            if (!token || token === '') {
                return true;
            }
            var date = this.getTokenExpirationDate(token);
            offsetSeconds = offsetSeconds || 0;
            if (date === null) {
                return false;
            }
            return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
        };
        JwtHelperService.prototype.getAuthScheme = function (authScheme, request) {
            if (typeof authScheme === 'function') {
                return authScheme(request);
            }
            return authScheme;
        };
        return JwtHelperService;
    }());
    JwtHelperService.ɵfac = function JwtHelperService_Factory(t) { return new (t || JwtHelperService)(); };
    JwtHelperService.ɵprov = i0.ɵɵdefineInjectable({ token: JwtHelperService, factory: JwtHelperService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(JwtHelperService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    var SessionService = /** @class */ (function () {
        function SessionService(jwtHelper) {
            this.jwtHelper = jwtHelper;
            this.IDP_TOKEN_KEY = 'idp_token';
            this.PAPI_BASE_URL_KEY = 'pepperi.baseurl';
            this.WAPI_TOKEN_KEY = 'auth_token';
            this.WAPI_BASE_URL_KEY = 'serverHostURL';
        }
        // TODO: Maybe need to move this parse into the c'tor.
        SessionService.prototype.getParseToken = function () {
            debugger;
            var tokenTest = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjRiYTFjNzJmMTI3NThjYzEzMzg3ZWQ3YTBiZjNlODg3IiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTY3MjU5NjksImV4cCI6MTU5NjcyNjI2OSwiaXNzIjoiaHR0cHM6Ly9pZHAuc2FuZGJveC5wZXBwZXJpLmNvbSIsImF1ZCI6InBlcHBlcmkud2ViYXBwLmFwcC5zYW5kYm94LnBlcHBlcmkuY29tIiwiaWF0IjoxNTk2NzI1OTY5LCJhdF9oYXNoIjoiSGtmRXJ0Q2JzQ3NzOTVKUm05VmJTdyIsInNpZCI6IjJkNzFiM2JiNWUyNjRiNDk2Y2JmZDkzNmYyNTNhNWIzIiwic3ViIjoiZTJkZmQ0MDYtZDM4Yy00ZmYwLThhZGItMWRlMjI3ODIzYWEyIiwiYXV0aF90aW1lIjoxNTk2NzE4ODA5LCJpZHAiOiJsb2NhbCIsIm5hbWUiOiJkYW5pZWwgZGF2aWRvZmYiLCJlbWFpbCI6ImRhbmllbC5kQHBlcHBlcml0ZXN0LmNvbSIsInBlcHBlcmkuaWQiOjg2OTAzMDQsInBlcHBlcmkudXNlcnV1aWQiOiJlMmRmZDQwNi1kMzhjLTRmZjAtOGFkYi0xZGUyMjc4MjNhYTIiLCJwZXBwZXJpLmRpc3RyaWJ1dG9yaWQiOjMwMDEyMzUxLCJwZXBwZXJpLmRpc3RyaWJ1dG9ydXVpZCI6IjBiZDBlZDc5LThlOWUtNDRmYi05NmY0LThlNTNlZDljZTgyYiIsInBlcHBlcmkuZGF0YWNlbnRlciI6InNhbmRib3giLCJwZXBwZXJpLmtlZXBsb2dpbiI6ZmFsc2UsInBlcHBlcmkuaWRsZXRpbWV3ZWIiOjEyMCwidXBkYXRlZF9hdCI6MTU5NjcwMjgwMCwiZ2l2ZW5fbmFtZSI6ImRhbmllbCIsImZhbWlseV9uYW1lIjoiZGF2aWRvZmYiLCJwZXBwZXJpLmFwaW50YmFzZXVybCI6Imh0dHBzOi8vcmVzdGFwaS5zYW5kYm94LnBlcHBlcmkuY29tIiwicGVwcGVyaS53ZWJhcGliYXNldXJsIjoiaHR0cHM6Ly93ZWJhcGkuc2FuZGJveC5wZXBwZXJpLmNvbS9WMTZfNTAvV2ViQXBwXzYiLCJwZXBwZXJpLnB1YmxpY2FwaWJhc2V1cmwiOiJodHRwczovL2FwaS1zYW5kYm94LnBlcHBlcmkuY29tIiwicGVwcGVyaS5iYXNldXJsIjoiaHR0cHM6Ly9wYXBpLnNhbmRib3gucGVwcGVyaS5jb20vVjEuMCIsInBlcHBlcmkuZW1wbG95ZWV0eXBlIjoxLCJhbXIiOlsicHdkIl19.tNtZT3Cl4dMmTQftoaO2KP5BvHOlWGIP-5GpHrAhZoymBkxBSxpKprQGqr0ATtQlNHjX3gDV1W6k_avaSkyJgDiB2hcwr1tNRilasNuMzNV93gxLC9Oh_HdkIN4cZ0hahIcJvf_17PHpS8zD_MRwvGG_i45wRYJAtiGXChxCMzooethRsLOq5TEwuNbE3MxdjZOpImGYyytmsfdsdJRWQn1LQwQBt95ssuypcUzBsVB34P5XuFttjAe9dhTwHIfgsPG-VdfAWH_r-hVe834wKpKrplSWlC_MucgS0X4XP_tN4CtLnHO2wXKPsojqSTH2NQycfqh6YvT6rzRDBEdQIQ";
            var token = this.getIdpToken();
            // token = token || tokenTest;
            var decodedToken = this.jwtHelper.decodeToken(token);
            // const expirationDate = this.jwtHelper.getTokenExpirationDate(token);
            // const isExpired = this.jwtHelper.isTokenExpired(token);
            return decodedToken;
        };
        SessionService.prototype.setObject = function (key, object) {
            var stringifiedObject = (typeof object === 'string' || object instanceof String) ? object : JSON.stringify(object);
            sessionStorage.setItem(key, stringifiedObject.toString());
        };
        SessionService.prototype.getObject = function (key) {
            var result = null;
            var item = sessionStorage.getItem(key);
            try {
                result = item ? JSON.parse(item) : item;
            }
            catch (_a) {
                result = item;
            }
            return result;
        };
        SessionService.prototype.getPepperiConsumerToken = function () {
            return this.PEPPERI_CONSUMER_TOKEN;
        };
        SessionService.prototype.gettWapiToken = function () {
            return this.getObject(this.WAPI_TOKEN_KEY);
        };
        SessionService.prototype.getWapiBaseUrl = function () {
            return this.getObject(this.WAPI_BASE_URL_KEY);
        };
        SessionService.prototype.getIdpToken = function () {
            return this.getObject(this.IDP_TOKEN_KEY);
        };
        SessionService.prototype.getPapiBaseUrl = function () {
            var tokenObj = this.getParseToken();
            return tokenObj ? tokenObj[this.PAPI_BASE_URL_KEY] : null;
        };
        return SessionService;
    }());
    SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(i0.ɵɵinject(JwtHelperService)); };
    SessionService.ɵprov = i0.ɵɵdefineInjectable({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SessionService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: JwtHelperService }]; }, null);
    })();

    var AuthInterceptor = /** @class */ (function () {
        // private SESSION_TOKEN_KEY = 'auth_token';
        // private token = 'secrettoken';
        // private refreshTokenInProgress = false;
        // private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
        function AuthInterceptor(sessionService) {
            this.sessionService = sessionService;
            this.AUTH_HEADER = 'Authorization';
            this.PEPPERI_TOKEN_HEADER = 'PepperiSessionToken';
            this.PEPPERI_CONSUMER_KEY_HEADER = 'X-Pepperi-ConsumerKey';
        }
        // Add authorization token if the token exist.
        AuthInterceptor.prototype.addAuthorizationToken = function (request) {
            if (!request.headers.has(this.AUTH_HEADER)) {
                var idpToken = this.sessionService.getIdpToken();
                if (idpToken) {
                    request = request.clone({
                        headers: request.headers.set(this.AUTH_HEADER, "Bearer " + idpToken)
                    });
                }
            }
            return request;
        };
        // Add pepperi consumer token if calling to papi domain.
        AuthInterceptor.prototype.addPepperiConsumerToken = function (request) {
            if (!request.headers.has(this.PEPPERI_CONSUMER_KEY_HEADER)) {
                var papiBaseUrl = this.sessionService.getPapiBaseUrl();
                if (papiBaseUrl && request.url.match(new RegExp(papiBaseUrl, 'g'))) {
                    var pepperiConsumerToken = this.sessionService.getPepperiConsumerToken();
                    if (pepperiConsumerToken) {
                        request = request.clone({
                            headers: request.headers.set(this.PEPPERI_CONSUMER_KEY_HEADER, pepperiConsumerToken)
                        });
                    }
                }
            }
            return request;
        };
        // Add web api token if calling to wapi domain.
        AuthInterceptor.prototype.addWebApiToken = function (request) {
            if (!request.headers.has(this.PEPPERI_TOKEN_HEADER)) {
                var wapiBaseUrl = this.sessionService.getWapiBaseUrl();
                if (wapiBaseUrl && request.url.match(new RegExp(wapiBaseUrl, 'g'))) {
                    var webApiToken = this.sessionService.gettWapiToken();
                    if (webApiToken) {
                        request = request.clone({
                            headers: request.headers.set(this.PEPPERI_TOKEN_HEADER, webApiToken)
                        });
                    }
                }
            }
            return request;
        };
        AuthInterceptor.prototype.intercept = function (req, next) {
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
        };
        return AuthInterceptor;
    }());
    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(i0.ɵɵinject(SessionService)); };
    AuthInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AuthInterceptor, [{
                type: i0.Injectable
            }], function () { return [{ type: SessionService }]; }, null);
    })();

    // import { ToastrService } from 'ngx-toastr';
    var ErrorInterceptor = /** @class */ (function () {
        function ErrorInterceptor() {
        }
        ErrorInterceptor.prototype.intercept = function (req, next) {
            console.warn('ErrorInterceptor');
            return next.handle(req)
                .pipe(
            // retry(2), TODO: Check if we want to retry
            operators.catchError(function (error) {
                // 401 handled in auth.interceptor
                if (error.status !== 401) {
                    // TODO: Show error in dialog.
                    // this.toastr.error(error.message);
                }
                return rxjs.throwError(error);
            }));
        };
        return ErrorInterceptor;
    }());
    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(); };
    ErrorInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ErrorInterceptor, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    var LoaderService = /** @class */ (function () {
        function LoaderService() {
            this.counter = 0;
            this.showLoaderSubject = new rxjs.BehaviorSubject(false);
        }
        Object.defineProperty(LoaderService.prototype, "onChanged$", {
            get: function () {
                return this.showLoaderSubject.asObservable().pipe(operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        LoaderService.prototype.show = function () {
            this.counter++;
            this.showLoaderSubject.next(true);
        };
        LoaderService.prototype.hide = function () {
            this.counter--;
            if (this.counter === 0) {
                this.showLoaderSubject.next(false);
            }
        };
        return LoaderService;
    }());
    LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
    LoaderService.ɵprov = i0.ɵɵdefineInjectable({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LoaderService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var LoaderInterceptor = /** @class */ (function () {
        function LoaderInterceptor(injector) {
            this.injector = injector;
        }
        LoaderInterceptor.prototype.intercept = function (req, next) {
            console.warn('LoaderInterceptor');
            var loaderService = this.injector.get(LoaderService);
            loaderService.show();
            // TODO: Remove the delay.
            return next.handle(req).pipe(operators.delay(3000), operators.finalize(function () { return loaderService.hide(); }));
        };
        return LoaderInterceptor;
    }());
    LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(i0.ɵɵinject(i0.Injector)); };
    LoaderInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LoaderInterceptor, [{
                type: i0.Injectable
            }], function () { return [{ type: i0.Injector }]; }, null);
    })();

    var ProfilerInterceptor = /** @class */ (function () {
        function ProfilerInterceptor() {
        }
        ProfilerInterceptor.prototype.intercept = function (req, next) {
            console.warn('ProfilerInterceptor');
            var started = Date.now();
            var ok;
            return next.handle(req).pipe(operators.tap(
            // Succeeds when there is a response; ignore other events
            function (event) {
                if (event instanceof i2.HttpResponse) {
                    ok = 'succeeded';
                }
            }, 
            // Operation failed; error is an HttpErrorResponse
            function (error) { return (ok = 'failed'); }), 
            // Log when response observable either completes or errors
            operators.finalize(function () {
                var elapsed = Date.now() - started;
                var msg = req.method + " \"" + req.urlWithParams + "\" " + ok + " in " + elapsed + " ms.";
                console.log(msg);
            }));
        };
        return ProfilerInterceptor;
    }());
    ProfilerInterceptor.ɵfac = function ProfilerInterceptor_Factory(t) { return new (t || ProfilerInterceptor)(); };
    ProfilerInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: ProfilerInterceptor, factory: ProfilerInterceptor.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ProfilerInterceptor, [{
                type: i0.Injectable
            }], null, null);
    })();

    var httpInterceptorProviders = [
        { provide: i2.HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        //   { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
        //   { provide: HTTP_INTERCEPTORS, useClass: ConvertInterceptor, multi: true },
        { provide: i2.HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        //   { provide: HTTP_INTERCEPTORS, useClass: FakeInterceptor, multi: true },
        //   { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
        { provide: i2.HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
        { provide: i2.HTTP_INTERCEPTORS, useClass: ProfilerInterceptor, multi: true },
    ];

    // Const BIDI_RTL_LANGS Array
    // BIDI_RTL_LANGS ref: http://en.wikipedia.org/wiki/Right-to-left
    // Table of scripts in Unicode: https://en.wikipedia.org/wiki/Script_(Unicode)
    var _BIDI_RTL_LANGS = [
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
    (function (ORIENTATION) {
        ORIENTATION[ORIENTATION["Landscape"] = 0] = "Landscape";
        ORIENTATION[ORIENTATION["Portrait"] = 1] = "Portrait";
    })(exports.ORIENTATION || (exports.ORIENTATION = {}));
    (function (SCREEN_SIZE) {
        SCREEN_SIZE[SCREEN_SIZE["XL"] = 0] = "XL";
        SCREEN_SIZE[SCREEN_SIZE["LG"] = 1] = "LG";
        SCREEN_SIZE[SCREEN_SIZE["MD"] = 2] = "MD";
        SCREEN_SIZE[SCREEN_SIZE["SM"] = 3] = "SM";
        SCREEN_SIZE[SCREEN_SIZE["XS"] = 4] = "XS";
    })(exports.SCREEN_SIZE || (exports.SCREEN_SIZE = {}));
    var LayoutService = /** @class */ (function () {
        function LayoutService(translate) {
            this.translate = translate;
            this.resizeSubject = new rxjs.BehaviorSubject(exports.SCREEN_SIZE.LG);
        }
        Object.defineProperty(LayoutService.prototype, "onResize$", {
            get: function () {
                return this.resizeSubject.asObservable().pipe(operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Set the current screen size.
         * @param size The size to change to.
         */
        LayoutService.prototype.onResize = function (size) {
            this.resizeSubject.next(size);
        };
        LayoutService.prototype.getOrintation = function () {
            if (window.innerHeight > window.innerWidth) {
                return exports.ORIENTATION.Portrait;
            }
            else {
                return exports.ORIENTATION.Landscape;
            }
        };
        LayoutService.prototype.getScreenWidth = function () {
            var retVal = 250.0;
            switch (this.resizeSubject.getValue()) {
                case exports.SCREEN_SIZE.XS: {
                    retVal = this.getOrintation() === exports.ORIENTATION.Landscape ? 130.0 : 65.0;
                    break;
                }
                case exports.SCREEN_SIZE.SM:
                case exports.SCREEN_SIZE.MD: {
                    retVal = this.getOrintation() === exports.ORIENTATION.Landscape ? 220.0 : 140.0;
                    break;
                }
                case exports.SCREEN_SIZE.LG: {
                    retVal = this.getOrintation() === exports.ORIENTATION.Landscape ? 400.0 : 250.0;
                    break;
                }
            }
            return retVal;
        };
        LayoutService.prototype.getScreenHeight = function () {
            var retVal = 250.0;
            switch (this.resizeSubject.getValue()) {
                case exports.SCREEN_SIZE.XS: {
                    retVal = this.getOrintation() === exports.ORIENTATION.Landscape ? 65.0 : 130.0;
                    break;
                }
                case exports.SCREEN_SIZE.SM:
                case exports.SCREEN_SIZE.MD: {
                    retVal = this.getOrintation() === exports.ORIENTATION.Landscape ? 140.0 : 220.0;
                    break;
                }
                case exports.SCREEN_SIZE.LG: {
                    retVal = this.getOrintation() === exports.ORIENTATION.Landscape ? 250.0 : 400.0;
                    break;
                }
            }
            return retVal;
        };
        LayoutService.prototype.getScreenHeightPx = function () {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        };
        LayoutService.prototype.getScreenWidthPx = function () {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        };
        LayoutService.prototype.getCurrentLanguage = function () {
            return this.translate && this.translate.currentLang || navigator.language;
        };
        LayoutService.prototype.isRtl = function () {
            var userLang = this.getCurrentLanguage();
            var isRtl = _BIDI_RTL_LANGS.indexOf(userLang) >= 0;
            return isRtl;
        };
        return LayoutService;
    }());
    LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(i0.ɵɵinject(i1$1.TranslateService)); };
    LayoutService.ɵprov = i0.ɵɵdefineInjectable({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LayoutService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1$1.TranslateService }]; }, null);
    })();

    var RtlClassDirective = /** @class */ (function () {
        function RtlClassDirective(layoutService, renderer, element) {
            this.layoutService = layoutService;
            this.renderer = renderer;
            this.element = element;
        }
        RtlClassDirective.prototype.ngOnInit = function () {
            var isRtl = this.layoutService.isRtl();
            if (isRtl) {
                this.renderer.addClass(this.element.nativeElement, 'rtl');
            }
        };
        return RtlClassDirective;
    }());
    RtlClassDirective.ɵfac = function RtlClassDirective_Factory(t) { return new (t || RtlClassDirective)(i0.ɵɵdirectiveInject(LayoutService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    RtlClassDirective.ɵdir = i0.ɵɵdefineDirective({ type: RtlClassDirective, selectors: [["", "pepRtlClass", ""]] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RtlClassDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[pepRtlClass]',
                    }]
            }], function () { return [{ type: LayoutService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, null);
    })();
    var RtlDirectionDirective = /** @class */ (function () {
        function RtlDirectionDirective(layoutService, renderer, element) {
            this.layoutService = layoutService;
            this.renderer = renderer;
            this.element = element;
        }
        RtlDirectionDirective.prototype.ngOnInit = function () {
            var isRtl = this.layoutService.isRtl();
            this.renderer.setAttribute(this.element.nativeElement, 'dir', isRtl ? 'rtl' : 'ltr');
        };
        return RtlDirectionDirective;
    }());
    RtlDirectionDirective.ɵfac = function RtlDirectionDirective_Factory(t) { return new (t || RtlDirectionDirective)(i0.ɵɵdirectiveInject(LayoutService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    RtlDirectionDirective.ɵdir = i0.ɵɵdefineDirective({ type: RtlDirectionDirective, selectors: [["", "pepRtlDirection", ""]] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RtlDirectionDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[pepRtlDirection]',
                    }]
            }], function () { return [{ type: LayoutService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, null);
    })();

    var CapitalizePipe = /** @class */ (function () {
        function CapitalizePipe() {
        }
        CapitalizePipe.prototype.transform = function (value) {
            if (value) {
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
            return value;
        };
        return CapitalizePipe;
    }());
    CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) { return new (t || CapitalizePipe)(); };
    CapitalizePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "capitalize", type: CapitalizePipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CapitalizePipe, [{
                type: i0.Pipe,
                args: [{ name: 'capitalize' }]
            }], null, null);
    })();
    var EncodePipe = /** @class */ (function () {
        function EncodePipe() {
        }
        EncodePipe.prototype.transform = function (value) {
            if (value) {
                var v = btoa(value);
                return v;
            }
            return value;
        };
        return EncodePipe;
    }());
    EncodePipe.ɵfac = function EncodePipe_Factory(t) { return new (t || EncodePipe)(); };
    EncodePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "encodePipe", type: EncodePipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EncodePipe, [{
                type: i0.Pipe,
                args: [{ name: 'encodePipe' }]
            }], null, null);
    })();
    var EscapePipe = /** @class */ (function () {
        function EscapePipe() {
        }
        EscapePipe.prototype.transform = function (value) {
            if (value) {
                var v = escape(value);
                return v;
            }
            return value;
        };
        return EscapePipe;
    }());
    EscapePipe.ɵfac = function EscapePipe_Factory(t) { return new (t || EscapePipe)(); };
    EscapePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "escapePipe", type: EscapePipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EscapePipe, [{
                type: i0.Pipe,
                args: [{ name: 'escapePipe' }]
            }], null, null);
    })();
    var ReplaceLineBreaks = /** @class */ (function () {
        function ReplaceLineBreaks() {
        }
        ReplaceLineBreaks.prototype.transform = function (value) {
            var newValue = value.replace(/(<br\ ?\/?>)/g, ' ');
            return newValue;
        };
        return ReplaceLineBreaks;
    }());
    ReplaceLineBreaks.ɵfac = function ReplaceLineBreaks_Factory(t) { return new (t || ReplaceLineBreaks)(); };
    ReplaceLineBreaks.ɵpipe = i0.ɵɵdefinePipe({ name: "replaceLineBreaks", type: ReplaceLineBreaks, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ReplaceLineBreaks, [{
                type: i0.Pipe,
                args: [{ name: 'replaceLineBreaks' }]
            }], null, null);
    })();
    var DateFormatter = /** @class */ (function () {
        function DateFormatter() {
        }
        DateFormatter.prototype.transform = function (value, culture, showTime) {
            if (showTime === void 0) { showTime = false; }
            var res = '';
            value = new Date(value);
            if (value) {
                res = value.toLocaleDateString(culture || 'en-US');
                if (showTime) {
                    res += ' ' + value.toLocaleTimeString((culture || 'en-US'), { hour: '2-digit', minute: '2-digit' });
                }
            }
            return res;
        };
        return DateFormatter;
    }());
    DateFormatter.ɵfac = function DateFormatter_Factory(t) { return new (t || DateFormatter)(); };
    DateFormatter.ɵpipe = i0.ɵɵdefinePipe({ name: "dateFormatter", type: DateFormatter, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DateFormatter, [{
                type: i0.Pipe,
                args: [{ name: 'dateFormatter' }]
            }], null, null);
    })();
    var DateStringFormatter = /** @class */ (function () {
        function DateStringFormatter() {
        }
        DateStringFormatter.prototype.transform = function (value, culture, showTime) {
            if (showTime === void 0) { showTime = false; }
            var res = '';
            var tmpDate = new Date(value);
            if (value) {
                res = tmpDate.toLocaleDateString(culture || 'en-US');
                if (showTime) {
                    res += ' ' + tmpDate.toLocaleTimeString(culture || 'en-US');
                }
            }
            return res;
        };
        return DateStringFormatter;
    }());
    DateStringFormatter.ɵfac = function DateStringFormatter_Factory(t) { return new (t || DateStringFormatter)(); };
    DateStringFormatter.ɵpipe = i0.ɵɵdefinePipe({ name: "dateStringFormatter", type: DateStringFormatter, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DateStringFormatter, [{
                type: i0.Pipe,
                args: [{ name: 'dateStringFormatter' }]
            }], null, null);
    })();
    var SafeHtmlPipe = /** @class */ (function () {
        function SafeHtmlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeHtmlPipe.prototype.transform = function (html) {
            return this.sanitizer.bypassSecurityTrustHtml(html);
        };
        return SafeHtmlPipe;
    }());
    SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
    SafeHtmlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SafeHtmlPipe, [{
                type: i0.Pipe,
                args: [{ name: 'safeHtml' }]
            }], function () { return [{ type: i1.DomSanitizer }]; }, null);
    })();
    var SafePipe = /** @class */ (function () {
        function SafePipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafePipe.prototype.transform = function (value, type) {
            switch (type) {
                case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
                case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
                case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
                case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
                case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
                default: throw new Error("Invalid safe type specified: " + type);
            }
        };
        return SafePipe;
    }());
    SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
    SafePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safe", type: SafePipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SafePipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'safe'
                    }]
            }], function () { return [{ type: i1.DomSanitizer }]; }, null);
    })();
    var SplitUppercase = /** @class */ (function () {
        function SplitUppercase() {
        }
        SplitUppercase.prototype.transform = function (value) {
            var newValue = value.replace(/([a-z])([A-Z])/g, '$1 $2');
            return newValue;
        };
        return SplitUppercase;
    }());
    SplitUppercase.ɵfac = function SplitUppercase_Factory(t) { return new (t || SplitUppercase)(); };
    SplitUppercase.ɵpipe = i0.ɵɵdefinePipe({ name: "splitUppercase", type: SplitUppercase, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SplitUppercase, [{
                type: i0.Pipe,
                args: [{ name: 'splitUppercase' }]
            }], null, null);
    })();
    var ToNumber = /** @class */ (function () {
        function ToNumber() {
        }
        ToNumber.prototype.transform = function (value) {
            return parseInt(value);
        };
        return ToNumber;
    }());
    ToNumber.ɵfac = function ToNumber_Factory(t) { return new (t || ToNumber)(); };
    ToNumber.ɵpipe = i0.ɵɵdefinePipe({ name: "toNumber", type: ToNumber, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ToNumber, [{
                type: i0.Pipe,
                args: [{ name: 'toNumber' }]
            }], null, null);
    })();

    var ButtonBlurDirective = /** @class */ (function () {
        function ButtonBlurDirective(element) {
            this.element = element;
        }
        ButtonBlurDirective.prototype.onClick = function () {
            var _this = this;
            setTimeout(function () {
                _this.element.nativeElement.blur();
            }, 0);
        };
        return ButtonBlurDirective;
    }());
    ButtonBlurDirective.ɵfac = function ButtonBlurDirective_Factory(t) { return new (t || ButtonBlurDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ButtonBlurDirective.ɵdir = i0.ɵɵdefineDirective({ type: ButtonBlurDirective, selectors: [["", "pepButtonBlur", ""]], hostBindings: function ButtonBlurDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function ButtonBlurDirective_click_HostBindingHandler() { return ctx.onClick(); });
            }
        } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ButtonBlurDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[pepButtonBlur]'
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { onClick: [{
                    type: i0.HostListener,
                    args: ['click']
                }] });
    })();

    var MenuBlurDirective = /** @class */ (function () {
        function MenuBlurDirective(element) {
            this.element = element;
        }
        MenuBlurDirective.prototype.menuClosedEvent = function () {
            var _this = this;
            setTimeout(function () {
                _this.element.nativeElement.blur();
            }, 0);
        };
        MenuBlurDirective.prototype.menuOpenedEvent = function () {
            var _this = this;
            setTimeout(function () {
                _this.element.nativeElement.blur();
            }, 0);
        };
        return MenuBlurDirective;
    }());
    MenuBlurDirective.ɵfac = function MenuBlurDirective_Factory(t) { return new (t || MenuBlurDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    MenuBlurDirective.ɵdir = i0.ɵɵdefineDirective({ type: MenuBlurDirective, selectors: [["", "pepMenuBlur", ""]], hostBindings: function MenuBlurDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("menuClosed", function MenuBlurDirective_menuClosed_HostBindingHandler() { return ctx.menuClosedEvent(); })("menuOpened", function MenuBlurDirective_menuOpened_HostBindingHandler() { return ctx.menuOpenedEvent(); });
            }
        } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MenuBlurDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[pepMenuBlur]'
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { menuClosedEvent: [{
                    type: i0.HostListener,
                    args: ['menuClosed']
                }], menuOpenedEvent: [{
                    type: i0.HostListener,
                    args: ['menuOpened']
                }] });
    })();

    var PortalService = /** @class */ (function () {
        function PortalService() {
            this.targets = new Map();
        }
        PortalService.prototype.addTarget = function (targetName, viewContainer) {
            this.targets.set(targetName, viewContainer);
        };
        PortalService.prototype.attach = function (targetName, template) {
            var target = this.getTarget(targetName);
            if (target) {
                target.createEmbeddedView(template);
            }
        };
        PortalService.prototype.clear = function (targetName) {
            var target = this.getTarget(targetName);
            if (target) {
                target.clear();
            }
        };
        PortalService.prototype.getTarget = function (targetName) {
            return this.targets.has(targetName) ? this.targets.get(targetName) : null;
        };
        return PortalService;
    }());
    PortalService.ɵfac = function PortalService_Factory(t) { return new (t || PortalService)(); };
    PortalService.ɵprov = i0.ɵɵdefineInjectable({ token: PortalService, factory: PortalService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PortalService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    var AttachDirective = /** @class */ (function () {
        function AttachDirective(portalService, templateRef) {
            this.portalService = portalService;
            this.templateRef = templateRef;
        }
        AttachDirective.prototype.ngOnInit = function () {
            this.portalService.attach(this.targetName, this.templateRef);
        };
        AttachDirective.prototype.ngOnDestroy = function () {
            this.portalService.clear(this.targetName);
        };
        return AttachDirective;
    }());
    AttachDirective.ɵfac = function AttachDirective_Factory(t) { return new (t || AttachDirective)(i0.ɵɵdirectiveInject(PortalService), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    AttachDirective.ɵdir = i0.ɵɵdefineDirective({ type: AttachDirective, selectors: [["", "pepAttach", ""]], inputs: { targetName: ["pepAttach", "targetName"] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AttachDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[pepAttach]',
                    }]
            }], function () { return [{ type: PortalService }, { type: i0.TemplateRef }]; }, { targetName: [{
                    type: i0.Input,
                    args: ['pepAttach']
                }] });
    })();

    var TargetDirective = /** @class */ (function () {
        function TargetDirective(portalService, viewContainer) {
            this.portalService = portalService;
            this.viewContainer = viewContainer;
        }
        TargetDirective.prototype.ngOnInit = function () {
            this.portalService.addTarget(this.targetName, this.viewContainer);
        };
        return TargetDirective;
    }());
    TargetDirective.ɵfac = function TargetDirective_Factory(t) { return new (t || TargetDirective)(i0.ɵɵdirectiveInject(PortalService), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    TargetDirective.ɵdir = i0.ɵɵdefineDirective({ type: TargetDirective, selectors: [["", "pepTarget", ""]], inputs: { targetName: ["pepTarget", "targetName"] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TargetDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[pepTarget]',
                    }]
            }], function () { return [{ type: PortalService }, { type: i0.ViewContainerRef }]; }, { targetName: [{
                    type: i0.Input,
                    args: ['pepTarget']
                }] });
    })();

    var layoutList = [
        RtlClassDirective,
        RtlDirectionDirective,
    ];
    var pipeList = [
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
    var utilitiesList = [
        ButtonBlurDirective,
        MenuBlurDirective
    ];
    var portalList = [
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
    var PepperiModule = /** @class */ (function () {
        function PepperiModule() {
        }
        return PepperiModule;
    }());
    PepperiModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiModule });
    PepperiModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiModule_Factory(t) { return new (t || PepperiModule)(); }, providers: [
            httpInterceptorProviders,
        ], imports: [[
                common.CommonModule,
                i2.HttpClientModule,
                i1.BrowserModule,
                animations.BrowserAnimationsModule,
                i2$1.ReactiveFormsModule,
                i2$1.FormsModule,
            ], i1$1.TranslateModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiModule, { declarations: [CapitalizePipe,
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
                TargetDirective], imports: [common.CommonModule,
                i2.HttpClientModule,
                i1.BrowserModule,
                animations.BrowserAnimationsModule,
                i2$1.ReactiveFormsModule,
                i2$1.FormsModule], exports: [CapitalizePipe,
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
                TargetDirective, i1$1.TranslateModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiModule, [{
                type: i0.NgModule,
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
                            common.CommonModule,
                            i2.HttpClientModule,
                            i1.BrowserModule,
                            animations.BrowserAnimationsModule,
                            i2$1.ReactiveFormsModule,
                            i2$1.FormsModule,
                        ],
                        exports: [
                            pipeList,
                            utilitiesList,
                            layoutList,
                            portalList,
                            i1$1.TranslateModule
                        ],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ngx-lib/core/common/directives
     */

    /*
     * export from ngx-lib/core/common/directives
     */

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
    })(exports.FIELD_TYPE || (exports.FIELD_TYPE = {}));
    var FieldLayout = /** @class */ (function () {
        function FieldLayout(x, width, xAlignment, y, height, yAlignment, lineNumber) {
            if (x === void 0) { x = 0; }
            if (width === void 0) { width = 1; }
            if (xAlignment === void 0) { xAlignment = 1; }
            if (y === void 0) { y = 0; }
            if (height === void 0) { height = 1; }
            if (yAlignment === void 0) { yAlignment = 1; }
            if (lineNumber === void 0) { lineNumber = 1; }
            this.X = x;
            this.Width = width;
            this.XAlignment = xAlignment;
            this.Y = y;
            this.Height = height;
            this.YAlignment = yAlignment;
            this.LineNumber = lineNumber;
        }
        return FieldLayout;
    }());
    var UIControlField = /** @class */ (function () {
        function UIControlField() {
            this.MandatoryField = false;
            this.Mandatory = false;
            this.minFieldWidth = 45;
            this.calcColumnWidth = 10;
            this.calcTitleColumnWidthString = '100%';
            this.calcColumnWidthString = '100%';
        }
        return UIControlField;
    }());
    var UIControl = /** @class */ (function () {
        function UIControl() {
        }
        return UIControl;
    }());
    var ObjectsDataRowCell = /** @class */ (function () {
        function ObjectsDataRowCell() {
        }
        return ObjectsDataRowCell;
    }());
    var ObjectsDataRow = /** @class */ (function () {
        function ObjectsDataRow() {
            this.IsSelectableForActions = true;
            this.IsEditable = true;
        }
        return ObjectsDataRow;
    }());
    var ObjectSingleData = /** @class */ (function () {
        function ObjectSingleData(uiControl, data) {
            if (uiControl === void 0) { uiControl = null; }
            if (data === void 0) { data = null; }
            this.Success = true;
            this.ErrorMessage = '';
            this.Type = '';
            this.UIControl = uiControl;
            this.Data = data;
        }
        return ObjectSingleData;
    }());
    var ObjectsData = /** @class */ (function () {
        function ObjectsData() {
            this.ErrorMessage = '';
            this.Success = true;
            this.TotalAmount = '0';
            this.CurrencySymbol = '$';
        }
        return ObjectsData;
    }());
    var SmartSearchValues = /** @class */ (function () {
        function SmartSearchValues() {
        }
        return SmartSearchValues;
    }());
    var SmartSearchResponse = /** @class */ (function () {
        function SmartSearchResponse() {
        }
        return SmartSearchResponse;
    }());
    var PepperiFieldData = /** @class */ (function () {
        function PepperiFieldData(options) {
            if (options === void 0) { options = {}; }
            this.ApiName = options.ApiName;
            this.Value = options.Value;
            this.FormattedValue = options.FormattedValue || '';
            this.FieldType = options.FieldType;
            this.ColumnWidth = options.ColumnWidth;
            this.ColumnWidthType = options.ColumnWidthType;
            this.XAlignment = options.XAlignment;
            this.Title = options.Title || '';
        }
        return PepperiFieldData;
    }());
    var PepperiRowData = /** @class */ (function () {
        function PepperiRowData() {
        }
        return PepperiRowData;
    }());

    var Guid = /** @class */ (function () {
        function Guid() {
        }
        Guid.pad4 = function (num) {
            var ret = num.toString(16);
            while (ret.length < 4) {
                ret = '0' + ret;
            }
            return ret;
        };
        Guid.random4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        Guid.newGuid = function () {
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
                var buf = new Uint16Array(8);
                window.crypto.getRandomValues(buf);
                return (this.pad4(buf[0]) + this.pad4(buf[1]) + '-' + this.pad4(buf[2]) + '-' + this.pad4(buf[3]) + '-' +
                    this.pad4(buf[4]) + '-' + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
            }
            else { // Otherwise, just use Math.random
                return this.random4() + this.random4() + '-' + this.random4() + '-' + this.random4() + '-' +
                    this.random4() + '-' + this.random4() + this.random4() + this.random4();
            }
        };
        return Guid;
    }());
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

    var HttpService = /** @class */ (function () {
        function HttpService(sessionService, http) {
            this.sessionService = sessionService;
            this.http = http;
        }
        HttpService.prototype.getTextFile = function (filename) {
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
        };
        HttpService.prototype.getHttpCall = function (url, httpOptions) {
            if (httpOptions === void 0) { httpOptions = {}; }
            return this.http.get(url, httpOptions)
                .pipe(operators.catchError(this.handleError.bind(this)));
            //     .subscribe(
            //         (res) => console.log(''),
            //         (error) => console.log(''),
            //         () => {}
            // );
        };
        HttpService.prototype.postHttpCall = function (url, body, httpOptions) {
            if (body === void 0) { body = {}; }
            if (httpOptions === void 0) { httpOptions = {}; }
            return this.http.post(url, body, httpOptions)
                .pipe(operators.catchError(this.handleError.bind(this)));
            //     .subscribe(
            //         (res) => console.log(''),
            //         (error) => console.log(''),
            //         () => {}
            // );
        };
        HttpService.prototype.getWapiApiCall = function (url, httpOptions) {
            if (httpOptions === void 0) { httpOptions = {}; }
            var wapiBaseUrl = this.sessionService.getWapiBaseUrl();
            return this.getHttpCall("" + wapiBaseUrl + url, httpOptions);
        };
        HttpService.prototype.postWapiApiCall = function (url, body, httpOptions) {
            if (body === void 0) { body = {}; }
            if (httpOptions === void 0) { httpOptions = {}; }
            var wapiBaseUrl = this.sessionService.getWapiBaseUrl();
            return this.postHttpCall("" + wapiBaseUrl + url, body, httpOptions);
        };
        HttpService.prototype.getPapiApiCall = function (url, httpOptions) {
            if (httpOptions === void 0) { httpOptions = {}; }
            var papiBaseUrl = this.sessionService.getPapiBaseUrl();
            return this.getHttpCall("" + papiBaseUrl + url, httpOptions);
        };
        HttpService.prototype.postPapiApiCall = function (url, body, httpOptions) {
            if (body === void 0) { body = {}; }
            if (httpOptions === void 0) { httpOptions = {}; }
            var papiBaseUrl = this.sessionService.getPapiBaseUrl();
            return this.postHttpCall("" + papiBaseUrl + url, body, httpOptions);
        };
        HttpService.prototype.handleError = function (error) {
            var errorMessage = 'Unknown error!';
            if (error.error instanceof ErrorEvent) {
                // Client-side errors
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // Server-side errors
                errorMessage = this.getServerErrorMessage(error);
            }
            return rxjs.throwError(errorMessage);
        };
        HttpService.prototype.getServerErrorMessage = function (error) {
            switch (error.status) {
                case 404: {
                    return "Not Found: " + error.message;
                }
                case 403: {
                    return "Access Denied: " + error.message;
                }
                case 500: {
                    return "Internal Server Error: " + error.message;
                }
                default: {
                    return "Unknown Server Error\nError Code: " + error.status + "\nMessage: " + error.message;
                }
            }
        };
        return HttpService;
    }());
    HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(i0.ɵɵinject(SessionService), i0.ɵɵinject(i2.HttpClient)); };
    HttpService.ɵprov = i0.ɵɵdefineInjectable({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HttpService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: SessionService }, { type: i2.HttpClient }]; }, null);
    })();

    /*
        This service is the webapp api for addon usege.
    */
    var AddonService = /** @class */ (function () {
        function AddonService(sessionService, httpService) {
            this.sessionService = sessionService;
            this.httpService = httpService;
            this.ADDON_ASSETS_PATH_KEY = 'AddonAssetsPath';
        }
        AddonService.prototype.getAddonStaticFolder = function () {
            // return this.assetsPath;
            return this.sessionService.getObject(this.ADDON_ASSETS_PATH_KEY) || '';
        };
        AddonService.prototype.setAddonStaticFolder = function (path) {
            // this.assetsPath = path;
            return this.sessionService.setObject(this.ADDON_ASSETS_PATH_KEY, path);
        };
        AddonService.prototype.getAddonApiCall = function (addonUUID, fileName, functionName, httpOptions) {
            if (httpOptions === void 0) { httpOptions = {}; }
            return this.httpService.getPapiApiCall("/addons/api/" + addonUUID + "/" + fileName + "/" + functionName, httpOptions);
        };
        AddonService.prototype.postAddonApiCall = function (addonUUID, fileName, functionName, body, httpOptions) {
            if (body === void 0) { body = {}; }
            if (httpOptions === void 0) { httpOptions = {}; }
            return this.httpService.postPapiApiCall("/addons/api/" + addonUUID + "/" + fileName + "/" + functionName, body, httpOptions);
        };
        return AddonService;
    }());
    AddonService.ɵfac = function AddonService_Factory(t) { return new (t || AddonService)(i0.ɵɵinject(SessionService), i0.ɵɵinject(HttpService)); };
    AddonService.ɵprov = i0.ɵɵdefineInjectable({ token: AddonService, factory: AddonService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AddonService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: SessionService }, { type: HttpService }]; }, null);
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var CookieService = /** @class */ (function () {
        function CookieService(document, platformId) {
            this.document = document;
            this.platformId = platformId;
            this.documentIsAccessible = common.isPlatformBrowser(this.platformId);
        }
        /**
         * @param name Cookie name
         * @returns boolean - whether cookie with specified name exists
         */
        CookieService.prototype.check = function (name) {
            if (!this.documentIsAccessible) {
                return false;
            }
            name = encodeURIComponent(name);
            var regExp = this.getCookieRegExp(name);
            var exists = regExp.test(this.document.cookie);
            return exists;
        };
        /**
         * @param name Cookie name
         * @returns property value
         */
        CookieService.prototype.get = function (name) {
            if (this.documentIsAccessible && this.check(name)) {
                name = encodeURIComponent(name);
                var regExp = this.getCookieRegExp(name);
                var result = regExp.exec(this.document.cookie);
                return this.safeDecodeURIComponent(result[1]);
            }
            else {
                return '';
            }
        };
        /**
         * @returns all the cookies in json
         */
        CookieService.prototype.getAll = function () {
            var _this = this;
            if (!this.documentIsAccessible) {
                return {};
            }
            var cookies = {};
            var document = this.document;
            if (document.cookie && document.cookie !== '') {
                document.cookie.split(';').forEach(function (currentCookie) {
                    var _b = __read(currentCookie.split('='), 2), cookieName = _b[0], cookieValue = _b[1];
                    cookies[_this.safeDecodeURIComponent(cookieName.replace(/^ /, ''))] = _this.safeDecodeURIComponent(cookieValue);
                });
            }
            return cookies;
        };
        /**
         * @param name     Cookie name
         * @param value    Cookie value
         * @param expires  Number of days until the cookies expires or an actual `Date`
         * @param path     Cookie path
         * @param domain   Cookie domain
         * @param secure   Secure flag
         * @param sameSite OWASP samesite token `Lax`, `None`, or `Strict`. Defaults to `Lax`
         */
        CookieService.prototype.set = function (name, value, expires, path, domain, secure, sameSite) {
            if (sameSite === void 0) { sameSite = 'Lax'; }
            if (!this.documentIsAccessible) {
                return;
            }
            var cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
            if (expires) {
                if (typeof expires === 'number') {
                    var dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
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
        };
        /**
         * @param name   Cookie name
         * @param path   Cookie path
         * @param domain Cookie domain
         */
        CookieService.prototype.delete = function (name, path, domain, secure, sameSite) {
            if (sameSite === void 0) { sameSite = 'Lax'; }
            if (!this.documentIsAccessible) {
                return;
            }
            this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain, secure, sameSite);
        };
        /**
         * @param path   Cookie path
         * @param domain Cookie domain
         */
        CookieService.prototype.deleteAll = function (path, domain, secure, sameSite) {
            if (sameSite === void 0) { sameSite = 'Lax'; }
            if (!this.documentIsAccessible) {
                return;
            }
            var cookies = this.getAll();
            for (var cookieName in cookies) {
                if (cookies.hasOwnProperty(cookieName)) {
                    this.delete(cookieName, path, domain, secure, sameSite);
                }
            }
        };
        /**
         * @param name Cookie name
         * @returns property RegExp
         */
        CookieService.prototype.getCookieRegExp = function (name) {
            var escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi, '\\$1');
            return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
        };
        CookieService.prototype.safeDecodeURIComponent = function (encodedURIComponent) {
            try {
                return decodeURIComponent(encodedURIComponent);
            }
            catch (_a) {
                // probably it is not uri encoded. return as is
                return encodedURIComponent;
            }
        };
        return CookieService;
    }());
    CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(i0.ɵɵinject(common.DOCUMENT, 8), i0.ɵɵinject(i0.PLATFORM_ID)); };
    CookieService.ɵprov = i0.ɵɵdefineInjectable({ token: CookieService, factory: CookieService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CookieService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [common.DOCUMENT]
                        }] }, { type: i0.InjectionToken, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }];
        }, null);
    })();

    var DataConvertorService = /** @class */ (function () {
        function DataConvertorService() {
        }
        DataConvertorService.prototype.convertFormData = function (formData) {
            var _this = this;
            var objectsData = new ObjectSingleData();
            var rowData = new ObjectsDataRow();
            var uiRow = formData.Fields;
            var uiControl = new UIControl();
            uiControl.ControlFields = [];
            uiRow.forEach(function (field) { return uiControl.ControlFields.push(_this.setUIControlField(field)); });
            rowData.Fields = [];
            rowData.Type = 0;
            rowData.UID = Guid.newGuid();
            formData.Fields.forEach(function (field) { return rowData.Fields.push(_this.setDataField(field)); });
            objectsData.Data = rowData;
            objectsData.UIControl = uiControl;
            return objectsData;
        };
        DataConvertorService.prototype.convertListData = function (tableData) {
            var _this = this;
            var objectsData = new ObjectsData();
            var rows = new Array();
            var uiRow = tableData[0].Fields;
            var uiControl = new UIControl();
            uiControl.ControlFields = [];
            uiRow.forEach(function (field) { return uiControl.ControlFields.push(_this.setUIControlField(field)); });
            tableData.forEach(function (row) {
                var rowData = new ObjectsDataRow();
                rowData.Fields = [];
                rowData.Type = 0;
                rowData.UID = Guid.newGuid();
                row.Fields.forEach(function (field) { return rowData.Fields.push(_this.setDataField(field)); });
                rows.push(rowData);
            });
            objectsData.Rows = rows;
            objectsData.UIControl = uiControl;
            return objectsData;
        };
        DataConvertorService.prototype.setUIControlField = function (field) {
            var controlField = new UIControlField();
            controlField.ApiName = field.ApiName;
            controlField.FieldType = field.FieldType;
            // { X: 1, Width: 1, XAlignment: field.XAlignment, Y: 1, Height: 1, YAlignment: 1 };
            controlField.Layout = new FieldLayout(1, 1, field.XAlignment, 1, 1, 1);
            controlField.Title = field.Title;
            controlField.ReadOnly = false;
            controlField.ColumnWidth = field.ColumnWidth;
            controlField.ColumnWidthType = field.ColumnWidthType || 1;
            return controlField;
        };
        DataConvertorService.prototype.setDataField = function (field) {
            var dataField = new ObjectsDataRowCell();
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
        };
        DataConvertorService.prototype.setFieldLayout = function (x, width, xAlignment, y, height, yAlignment, lineNumber) {
            var layout = new FieldLayout(x, width, xAlignment, y, height, yAlignment, lineNumber);
            return layout;
        };
        return DataConvertorService;
    }());
    DataConvertorService.ɵfac = function DataConvertorService_Factory(t) { return new (t || DataConvertorService)(); };
    DataConvertorService.ɵprov = i0.ɵɵdefineInjectable({ token: DataConvertorService, factory: DataConvertorService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataConvertorService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    (function (FileTypeEnum) {
        FileTypeEnum[FileTypeEnum["Script"] = 1] = "Script";
        FileTypeEnum[FileTypeEnum["Style"] = 2] = "Style";
    })(exports.FileTypeEnum || (exports.FileTypeEnum = {}));
    var FileService = /** @class */ (function () {
        function FileService() {
            this.scripts = new Map();
            this.styles = new Map();
        }
        FileService.prototype.loadFiles = function (files) {
            var _this = this;
            var promises = [];
            files.forEach(function (file) {
                if (file.type === exports.FileTypeEnum.Style) {
                    promises.push(_this.loadStyle(file.path));
                }
                else if (file.type === exports.FileTypeEnum.Script) {
                    promises.push(_this.loadScript(file.path));
                }
            });
            return Promise.all(promises);
        };
        FileService.prototype.removeFiles = function (files) {
            for (var index = 0; index < files.length && files[index].path && files[index].path.trim() !== ''; index++) {
                var name = this.getFileName(files[index].path, true);
                var element = document.getElementById(name);
                element.parentNode.removeChild(element);
                if (files[index].type === exports.FileTypeEnum.Script && this.scripts.has(name)) {
                    this.scripts.delete(name);
                }
                else if (files[index].type === exports.FileTypeEnum.Style && this.styles.has(name)) {
                    this.styles.delete(name);
                }
            }
        };
        FileService.prototype.loadScript = function (path) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var name = _this.getFileName(path, true);
                // If the script isn't exist add it.
                if (!_this.scripts.has(name)) {
                    _this.scripts.set(name, { loaded: false, src: path });
                }
                var scriptItem = _this.scripts.get(name);
                // Resolve if already loaded
                if (scriptItem.loaded) {
                    resolve({ script: name, loaded: true, status: 'Already Loaded' });
                }
                else {
                    // Load script
                    var script_1 = document.createElement('script');
                    script_1.type = 'text/javascript';
                    script_1.src = scriptItem.src;
                    script_1.setAttribute('id', name);
                    script_1.async = false;
                    if (script_1.readyState) {
                        // IE
                        script_1.onreadystatechange = function () {
                            if (script_1.readyState === 'loaded' || script_1.readyState === 'complete') {
                                script_1.onreadystatechange = null;
                                scriptItem.loaded = true;
                                resolve({ path: path, type: exports.FileTypeEnum.Script, loaded: true, status: 'Loaded' });
                            }
                        };
                    }
                    else {
                        // Others
                        script_1.onload = function () {
                            scriptItem.loaded = true;
                            resolve({ path: path, type: exports.FileTypeEnum.Script, loaded: true, status: 'Loaded' });
                        };
                    }
                    script_1.onerror = function (error) { return resolve({ path: path, type: exports.FileTypeEnum.Script, loaded: false, status: 'Loaded' }); };
                    document.getElementsByTagName('head')[0].appendChild(script_1);
                }
            });
        };
        FileService.prototype.loadStyle = function (path) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var name = _this.getFileName(path, true);
                // If the style isn't exist add it.
                if (!_this.styles.has(name)) {
                    _this.styles.set(name, { loaded: false, src: path });
                }
                var styleItem = _this.styles.get(name);
                // Resolve if already loaded
                if (styleItem.loaded) {
                    resolve({ path: path, type: exports.FileTypeEnum.Style, loaded: true, status: 'Already Loaded' });
                }
                else {
                    // Load style
                    var style = document.createElement('link');
                    style.type = 'text/css';
                    style.rel = 'stylesheet';
                    style.href = styleItem.src;
                    style.media = 'all';
                    style.setAttribute('id', name);
                    styleItem.loaded = true;
                    resolve({ path: path, type: exports.FileTypeEnum.Style, loaded: true, status: 'Loaded' });
                    document.getElementsByTagName('head')[0].appendChild(style);
                }
            });
        };
        FileService.prototype.getFileName = function (filePath, withExtenstion) {
            if (withExtenstion === void 0) { withExtenstion = false; }
            var lastIndex = withExtenstion ? filePath.length - 1 : filePath.lastIndexOf('.');
            return filePath.substr(filePath.lastIndexOf('/') + 1, lastIndex);
        };
        FileService.prototype.getFileExtension = function (filePath) {
            var fileSplit = filePath.split('.');
            var fileExt = '';
            if (fileSplit.length > 1) {
                fileExt = fileSplit[fileSplit.length - 2];
            }
            return fileExt;
        };
        /* Returns true if url is valid */
        FileService.prototype.isValidUrl = function (url) {
            /* Try creating a valid URL */
            try {
                var tmp = new URL(url);
                return true;
            }
            catch (e) {
                return false;
            }
        };
        FileService.prototype.convertFromb64toBlob = function (b64Data, contentType, sliceSize) {
            if (contentType === void 0) { contentType = ''; }
            if (sliceSize === void 0) { sliceSize = 512; }
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        };
        FileService.prototype.getAssetsPath = function () {
            return "/assets/ngx-lib/";
        };
        FileService.prototype.getAssetsTranslationsPath = function () {
            return this.getAssetsPath() + "i18n/";
        };
        FileService.prototype.getAssetsImagesPath = function (image) {
            if (image === void 0) { image = ''; }
            return this.getAssetsPath() + "images/" + image;
        };
        FileService.prototype.getNoImagePath = function () {
            return this.getAssetsImagesPath('no-image.svg');
        };
        return FileService;
    }());
    FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(); };
    FileService.ɵprov = i0.ɵɵdefineInjectable({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FileService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

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
    var UtilitiesService = /** @class */ (function () {
        function UtilitiesService() {
        }
        UtilitiesService.prototype.parseDate = function (dateStr, showTime) {
            if (showTime === void 0) { showTime = false; }
            var retVal = null;
            if (dateStr !== '') {
                retVal = new Date(dateStr);
                var dateText = dateStr.split('-');
                if (dateText.length === 3 && !showTime) {
                    var year = Number(dateText[0]);
                    var month = Number(dateText[1]) - 1;
                    var day = Number(dateText[2]);
                    retVal = new Date(year, month, day);
                }
            }
            if (retVal && isNaN(retVal.getTime())) {
                retVal = null;
            }
            return retVal;
        };
        UtilitiesService.prototype.stringifyDate = function (date, showTime) {
            if (showTime === void 0) { showTime = false; }
            if (date) {
                var dateText = [];
                dateText.push(date.getFullYear(), '-', date.getMonth() + 1, '-', date.getDate());
                if (showTime) {
                    dateText.push('T', (date.getHours() < 10 ? '0' : '') + date.getHours(), ':', (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(), ':', (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(), 'Z');
                }
                return dateText.join('');
            }
            else {
                return '';
            }
        };
        UtilitiesService.prototype.stringifyDateWithOffset = function (date, showTime) {
            if (showTime === void 0) { showTime = false; }
            if (showTime) {
                var offsetMinutes = new Date().getTimezoneOffset() * -1;
                date.setMinutes(date.getMinutes() - offsetMinutes);
            }
            return this.stringifyDate(date, showTime);
        };
        UtilitiesService.prototype.isValueHtml = function (value) {
            var res = false;
            var REGEXP = /<\/?[a-z][\s\S]*>/i;
            res = REGEXP.test(value);
            return res;
        };
        UtilitiesService.prototype.isJsonString = function (str) {
            try {
                JSON.parse(str);
            }
            catch (e) {
                return false;
            }
            return true;
        };
        return UtilitiesService;
    }());
    UtilitiesService.ɵfac = function UtilitiesService_Factory(t) { return new (t || UtilitiesService)(); };
    UtilitiesService.ɵprov = i0.ɵɵdefineInjectable({ token: UtilitiesService, factory: UtilitiesService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UtilitiesService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

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

    (function (LAYOUT_TYPE) {
        LAYOUT_TYPE[LAYOUT_TYPE["PepperiForm"] = 0] = "PepperiForm";
        LAYOUT_TYPE[LAYOUT_TYPE["PepperiCard"] = 1] = "PepperiCard";
        LAYOUT_TYPE[LAYOUT_TYPE["PepperiTable"] = 2] = "PepperiTable";
        // PepperiCampaign,
        LAYOUT_TYPE[LAYOUT_TYPE["Editmodal"] = 3] = "Editmodal";
    })(exports.LAYOUT_TYPE || (exports.LAYOUT_TYPE = {}));
    (function (STYLE_TYPE) {
        STYLE_TYPE["Weak"] = "weak";
        STYLE_TYPE["Regular"] = "regular";
        STYLE_TYPE["Strong"] = "strong";
    })(exports.STYLE_TYPE || (exports.STYLE_TYPE = {}));
    var PepperiOption = /** @class */ (function () {
        function PepperiOption() {
        }
        return PepperiOption;
    }());
    var PepperiFieldBase = /** @class */ (function () {
        function PepperiFieldBase(options) {
            if (options === void 0) { options = {}; }
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
        PepperiFieldBase.prototype.updateField = function (updatedField, canEditObject, lastFocusField) {
            if (lastFocusField === void 0) { lastFocusField = null; }
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
        };
        return PepperiFieldBase;
    }());
    var PepperiPlaceholderField = /** @class */ (function (_super) {
        __extends(PepperiPlaceholderField, _super);
        function PepperiPlaceholderField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'placeholder';
            return _this;
        }
        return PepperiPlaceholderField;
    }(PepperiFieldBase));
    var PepperiSeparatorField = /** @class */ (function (_super) {
        __extends(PepperiSeparatorField, _super);
        function PepperiSeparatorField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'separator';
            return _this;
        }
        return PepperiSeparatorField;
    }(PepperiFieldBase));
    var PepperiButtonField = /** @class */ (function (_super) {
        __extends(PepperiButtonField, _super);
        function PepperiButtonField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'button';
            _this.referenceObjectSubType = '';
            _this.referenceObjectInternalType = '';
            _this.referenceObjectType = options.referenceObjectType || null;
            _this.referenceObjectSubType = options.referenceObjectSubType || null;
            _this.referenceObjectInternalType = options.referenceObjectInternalType || null;
            return _this;
        }
        return PepperiButtonField;
    }(PepperiFieldBase));
    var PepperiAttachmentField = /** @class */ (function (_super) {
        __extends(PepperiAttachmentField, _super);
        function PepperiAttachmentField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'attachment';
            return _this;
        }
        return PepperiAttachmentField;
    }(PepperiFieldBase));
    var PepperiIndicatorsField = /** @class */ (function (_super) {
        __extends(PepperiIndicatorsField, _super);
        function PepperiIndicatorsField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'indicators';
            return _this;
        }
        return PepperiIndicatorsField;
    }(PepperiFieldBase));
    var PepperiTextboxField = /** @class */ (function (_super) {
        __extends(PepperiTextboxField, _super);
        function PepperiTextboxField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'textbox';
            return _this;
        }
        return PepperiTextboxField;
    }(PepperiFieldBase));
    var PepperiTextareaField = /** @class */ (function (_super) {
        __extends(PepperiTextareaField, _super);
        function PepperiTextareaField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'textarea';
            _this.type = 'textarea';
            return _this;
        }
        return PepperiTextareaField;
    }(PepperiFieldBase));
    var PepperiRichHtmlTextareaField = /** @class */ (function (_super) {
        __extends(PepperiRichHtmlTextareaField, _super);
        function PepperiRichHtmlTextareaField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'richhtmltextarea';
            _this.type = 'richhtmltextarea';
            return _this;
        }
        return PepperiRichHtmlTextareaField;
    }(PepperiFieldBase));
    var PepperiSignatureField = /** @class */ (function (_super) {
        __extends(PepperiSignatureField, _super);
        function PepperiSignatureField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'signature';
            _this.options = [];
            _this.options = options.options || [];
            return _this;
        }
        return PepperiSignatureField;
    }(PepperiFieldBase));
    var PepperiImageField = /** @class */ (function (_super) {
        __extends(PepperiImageField, _super);
        function PepperiImageField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'image';
            _this.hasCampaignField = null;
            _this.indicatorsField = null;
            _this.menuField = null;
            _this.options = [];
            _this.sizeLimitMB = 5;
            _this.hasCampaignField = options.hasCampaignField || null;
            _this.indicatorsField = options.indicatorsField || null;
            _this.menuField = options.menuField || null;
            _this.options = options.options || [];
            _this.sizeLimitMB = options.sizeLimitMB || 5;
            return _this;
        }
        return PepperiImageField;
    }(PepperiFieldBase));
    var PepperiImagesField = /** @class */ (function (_super) {
        __extends(PepperiImagesField, _super);
        function PepperiImagesField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'images';
            _this.options = [];
            _this.options = options.options || [];
            return _this;
        }
        return PepperiImagesField;
    }(PepperiFieldBase));
    var PepperiQuantitySelectorField = /** @class */ (function (_super) {
        __extends(PepperiQuantitySelectorField, _super);
        function PepperiQuantitySelectorField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'qs';
            _this.alowDecimal = options.alowDecimal || false;
            return _this;
        }
        return PepperiQuantitySelectorField;
    }(PepperiFieldBase));
    var PepperiDateField = /** @class */ (function (_super) {
        __extends(PepperiDateField, _super);
        function PepperiDateField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'date';
            return _this;
        }
        return PepperiDateField;
    }(PepperiFieldBase));
    var PepperiCheckboxField = /** @class */ (function (_super) {
        __extends(PepperiCheckboxField, _super);
        function PepperiCheckboxField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'checkbox';
            return _this;
        }
        return PepperiCheckboxField;
    }(PepperiFieldBase));
    var PepperiSelectField = /** @class */ (function (_super) {
        __extends(PepperiSelectField, _super);
        function PepperiSelectField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'select';
            _this.options = [];
            _this.options = options.options || [];
            return _this;
        }
        PepperiSelectField.prototype.updateField = function (updatedField, canEditObject) {
            _super.prototype.updateField.call(this, updatedField, canEditObject);
            this.options = updatedField.OptionalValues;
        };
        return PepperiSelectField;
    }(PepperiFieldBase));
    var PepperiAddressField = /** @class */ (function (_super) {
        __extends(PepperiAddressField, _super);
        function PepperiAddressField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'address';
            _this.groupFields = null;
            _this.groupFields = options.groupFields || null;
            return _this;
        }
        return PepperiAddressField;
    }(PepperiFieldBase));
    var PepperiInternalPageField = /** @class */ (function (_super) {
        __extends(PepperiInternalPageField, _super);
        function PepperiInternalPageField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'internalPage';
            _this.objectId = '';
            _this.parentId = '';
            _this.searchCode = '';
            _this.objectId = options.objectId || '';
            _this.parentId = options.parentId || '';
            _this.searchCode = options.searchCode || '';
            return _this;
        }
        return PepperiInternalPageField;
    }(PepperiFieldBase));
    var PepperiMenuField = /** @class */ (function (_super) {
        __extends(PepperiMenuField, _super);
        // hasSubMenu: boolean = false;
        function PepperiMenuField(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, options) || this;
            _this.controlType = 'menu';
            _this.options = [];
            _this.options = options.options || [];
            return _this;
            // this.hasSubMenu = options['hasSubMenu'];
        }
        return PepperiMenuField;
    }(PepperiFieldBase));
    var PepperiObjectChangedData = /** @class */ (function () {
        function PepperiObjectChangedData(id, apiName, value, controlType) {
            if (controlType === void 0) { controlType = ''; }
            this.Id = id;
            this.ApiName = apiName;
            this.Value = value;
            this.ControlType = controlType || '';
        }
        return PepperiObjectChangedData;
    }());
    var PepperiFieldClickedData = /** @class */ (function () {
        function PepperiFieldClickedData(id, apiName, idType, which, value, fieldType, otherData) {
            if (otherData === void 0) { otherData = null; }
            this.Id = id;
            this.ApiName = apiName;
            this.IdType = idType;
            this.FieldType = fieldType;
            this.Which = which;
            this.Value = value;
            this.OtherData = otherData;
        }
        return PepperiFieldClickedData;
    }());

    var CustomizationService = /** @class */ (function () {
        function CustomizationService(sessionService, fb) {
            this.sessionService = sessionService;
            this.fb = fb;
            this.hasCustomHomepage = null;
            this.hasCustomHeader = null;
            this.customHeaderHeight = CustomizationService.DEFAULT_HEADER_HEIGHT;
            this.mainContHeight = 0;
            this.footerHeight = new rxjs.BehaviorSubject(0);
        }
        CustomizationService.prototype.getValidatorsForField = function (required, readonly, disabled, maxFieldCharacters, type, isCheckbox, minValue, maxValue) {
            if (isCheckbox === void 0) { isCheckbox = false; }
            if (minValue === void 0) { minValue = NaN; }
            if (maxValue === void 0) { maxValue = NaN; }
            var validators = [];
            if (required && !readonly && !disabled) {
                if (isCheckbox) {
                    validators.push(i2$1.Validators.requiredTrue);
                }
                else {
                    validators.push(i2$1.Validators.required);
                }
            }
            else {
                validators.push(i2$1.Validators.nullValidator);
            }
            if (maxFieldCharacters > 0) {
                validators.push(i2$1.Validators.maxLength(maxFieldCharacters));
            }
            if (type === 'email') {
                validators.push(i2$1.Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
            }
            else if (type === 'phone') {
                validators.push(i2$1.Validators.pattern(/^[\d\.\-\+\(\)\*\#]+$/));
            }
            else if (type === 'int' || type === 'real') {
                validators.push(i2$1.Validators.pattern(/^[\.,\-\+\d]+$/));
                if (!isNaN(minValue)) {
                    validators.push(i2$1.Validators.min(minValue));
                }
                if (!isNaN(maxValue)) {
                    validators.push(i2$1.Validators.max(maxValue));
                }
            }
            return validators;
        };
        CustomizationService.prototype.getDefaultFromGroup = function (key, value, required, readonly, disabled, maxFieldCharacters, type, isCheckbox, withValidators, minValue, maxValue) {
            if (maxFieldCharacters === void 0) { maxFieldCharacters = 0; }
            if (type === void 0) { type = ''; }
            if (isCheckbox === void 0) { isCheckbox = false; }
            if (withValidators === void 0) { withValidators = true; }
            if (minValue === void 0) { minValue = NaN; }
            if (maxValue === void 0) { maxValue = NaN; }
            var validators = withValidators ?
                this.getValidatorsForField(required, readonly, disabled, maxFieldCharacters, type, isCheckbox, minValue, maxValue) : [];
            var group = {};
            group[key] = [{ value: value, disabled: disabled }, validators];
            return this.fb.group(group);
        };
        CustomizationService.prototype.getFormControl = function (form, fieldKey, parentFieldKey) {
            if (parentFieldKey === void 0) { parentFieldKey = null; }
            var formControl = null;
            if (form && form.controls) {
                if (parentFieldKey === null) {
                    formControl = form.controls[fieldKey];
                }
                else {
                    formControl = form.controls[parentFieldKey].get(fieldKey);
                }
            }
            return formControl;
        };
        CustomizationService.prototype.updateFormFieldValue = function (form, fieldKey, value, parentFieldKey) {
            if (value === void 0) { value = ''; }
            if (parentFieldKey === void 0) { parentFieldKey = null; }
            var formControl = this.getFormControl(form, fieldKey, parentFieldKey);
            if (formControl) {
                formControl.setValue(value);
            }
        };
        CustomizationService.prototype.updateFormField = function (form, field, value, parentField) {
            if (value === void 0) { value = ''; }
            if (parentField === void 0) { parentField = null; }
            var formControl = this.getFormControl(form, field.key, parentField);
            if (formControl) {
                formControl.setValue(value);
                // If disabled has changed.
                if (formControl.disabled !== field.disabled) {
                    field.disabled ? formControl.disable() : formControl.enable();
                    var validators = this.getValidatorsForField(field.required, field.readonly, field.disabled, field.maxFieldCharacters, field.type, field.controlType === 'checkbox');
                    formControl.setValidators(validators);
                }
            }
        };
        CustomizationService.prototype.calculateFormFieldHeight = function (withTitle, rowSpan, standAlone) {
            if (withTitle === void 0) { withTitle = true; }
            if (rowSpan === void 0) { rowSpan = 1; }
            if (standAlone === void 0) { standAlone = false; }
            var themeVars = this.getThemeVariables();
            var rowFieldHeight = this.getNumberThemeVariable(themeVars, CustomizationService.FORM_FIELD_HEIGHT_KEY);
            var rowFieldTitleHeight = this.getNumberThemeVariable(themeVars, CustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY);
            var rowFieldSpacingBottom = this.getNumberThemeVariable(themeVars, CustomizationService.FORM_SPACEING_KEY);
            var fieldHeight = 0;
            if (rowSpan === 1) {
                fieldHeight = (withTitle ? rowFieldTitleHeight : 0) + rowFieldHeight;
            }
            else {
                var rowSpanCalc = withTitle ? rowSpan : rowSpan - 1;
                fieldHeight =
                    rowSpan * rowFieldHeight +
                        rowSpanCalc * rowFieldTitleHeight +
                        (standAlone ? 0 : rowSpanCalc * rowFieldSpacingBottom);
            }
            return fieldHeight;
        };
        CustomizationService.prototype.calculateCardRowsHeight = function (rowsCount, withSpacing) {
            if (rowsCount === void 0) { rowsCount = 1; }
            if (withSpacing === void 0) { withSpacing = true; }
            var themeVars = this.getThemeVariables();
            var cardFieldHeight = this.getNumberThemeVariable(themeVars, CustomizationService.CARD_FIELD_HEIGHT_KEY);
            var cardFieldSpacing = this.getNumberThemeVariable(themeVars, CustomizationService.CARD_SPACEING_KEY);
            var fieldHeight = rowsCount * cardFieldHeight + (rowsCount - 1) * (withSpacing ? cardFieldSpacing : 0);
            return fieldHeight;
        };
        CustomizationService.prototype.calculateTableRowsHeight = function (rowsCount, withSpacing) {
            if (rowsCount === void 0) { rowsCount = 1; }
            if (withSpacing === void 0) { withSpacing = true; }
            var themeVars = this.getThemeVariables();
            var tableFieldHeight = this.getNumberThemeVariable(themeVars, CustomizationService.TABLE_FIELD_HEIGHT_KEY);
            var tableFieldSpacing = this.getNumberThemeVariable(themeVars, CustomizationService.TABLE_SPACEING_KEY);
            var fieldHeight = rowsCount * (tableFieldHeight + (withSpacing ? tableFieldSpacing * 2 : 0));
            return fieldHeight;
        };
        CustomizationService.prototype.calculateFieldHeight = function (layoutType, rowSpan, standAlone) {
            if (layoutType === void 0) { layoutType = exports.LAYOUT_TYPE.PepperiForm; }
            var fieldHeight = 'inherit'; // Default for card (with no title)
            if (layoutType === exports.LAYOUT_TYPE.PepperiTable) {
                fieldHeight = this.getThemeVariable(CustomizationService.TABLE_FIELD_HEIGHT_KEY);
            }
            else if (layoutType === exports.LAYOUT_TYPE.PepperiCard) {
                fieldHeight = this.calculateCardRowsHeight(rowSpan, !standAlone) + CustomizationService.REM_STRING;
            }
            else {
                // PepperiForm
                fieldHeight = this.calculateFormFieldHeight(false, rowSpan, standAlone) + CustomizationService.REM_STRING;
            }
            return fieldHeight;
        };
        CustomizationService.prototype.getBrandingTheme = function () {
            var themeObj = this.sessionService.getObject(CustomizationService.USER_THEME);
            return (themeObj && themeObj.Theme) || 'default-theme'; // 'light-theme';
        };
        CustomizationService.prototype.getDefaultThemeLayoutVariables = function (themeVars) {
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
        };
        CustomizationService.prototype.getDefaultThemeBorderRadiusVariables = function (themeVars) {
            themeVars[CustomizationService.BORDER_RADIUS_SM_KEY] = '0.125' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.BORDER_RADIUS_MD_KEY] = '0.25' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.BORDER_RADIUS_LG_KEY] = '0.5' + CustomizationService.REM_STRING;
        };
        CustomizationService.prototype.getDefaultThemeSpacingVariables = function (themeVars) {
            themeVars[CustomizationService.SPACING_SIZE_2XS_KEY] = '0.125' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.SPACING_SIZE_XS_KEY] = '0.25' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.SPACING_SIZE_SM_KEY] = '0.5' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.SPACING_SIZE_MD_KEY] = '0.75' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.SPACING_SIZE_LG_KEY] = '1' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.SPACING_SIZE_XL_KEY] = '1.5' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.SPACING_SIZE_2XL_KEY] = '2' + CustomizationService.REM_STRING;
        };
        CustomizationService.prototype.getDefaultThemeFontsVariables = function (themeVars) {
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
        };
        CustomizationService.prototype.getDefaultThemeButtonsVariables = function (themeVars) {
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
        };
        CustomizationService.prototype.getSystemPrimaryInvertColorsVariables = function (themeVars) {
            themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-h'] = '255';
            themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-s'] = '100%';
            themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-l'] = '100%';
        };
        CustomizationService.prototype.getSystemPrimaryColorsVariables = function (themeVars) {
            themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h'] = '0';
            themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s'] = '0%';
            themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l'] = '10%';
        };
        CustomizationService.prototype.getSystemSuccessColorsVariables = function (themeVars) {
            themeVars[CustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-h'] = '100';
            themeVars[CustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-s'] = '100%';
            themeVars[CustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-l'] = '25%';
        };
        CustomizationService.prototype.getSystemCautionColorsVariables = function (themeVars) {
            themeVars[CustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-h'] = '360';
            themeVars[CustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-s'] = '100%';
            themeVars[CustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-l'] = '40%';
        };
        CustomizationService.prototype.getUserPrimaryColorsVariables = function (themeVars) {
            themeVars[CustomizationService.COLOR_USER_PRIMARY_KEY + '-h'] = '78';
            themeVars[CustomizationService.COLOR_USER_PRIMARY_KEY + '-s'] = '87%';
            themeVars[CustomizationService.COLOR_USER_PRIMARY_KEY + '-l'] = '27%';
        };
        CustomizationService.prototype.getUserSecondaryColorsVariables = function (themeVars) {
            themeVars[CustomizationService.COLOR_USER_SECONDARY_KEY + '-h'] = '77';
            themeVars[CustomizationService.COLOR_USER_SECONDARY_KEY + '-s'] = '87%';
            themeVars[CustomizationService.COLOR_USER_SECONDARY_KEY + '-l'] = '42%';
        };
        CustomizationService.prototype.getWeakColorsVariables = function (themeVars) {
            themeVars[CustomizationService.COLOR_WEAK_KEY + '-h'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
            themeVars[CustomizationService.COLOR_WEAK_KEY + '-s'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
            themeVars[CustomizationService.COLOR_WEAK_KEY + '-l'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
        };
        CustomizationService.prototype.getRegularColorsVariables = function (themeVars) {
            themeVars[CustomizationService.COLOR_REGULAR_KEY + '-h'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
            themeVars[CustomizationService.COLOR_REGULAR_KEY + '-s'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
            themeVars[CustomizationService.COLOR_REGULAR_KEY + '-l'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
        };
        CustomizationService.prototype.getStrongColorsVariables = function (themeVars) {
            themeVars[CustomizationService.COLOR_STRONG_KEY + '-h'] = 'var(' + CustomizationService.COLOR_USER_PRIMARY_KEY + '-h)';
            themeVars[CustomizationService.COLOR_STRONG_KEY + '-s'] = 'var(' + CustomizationService.COLOR_USER_PRIMARY_KEY + '-s)';
            themeVars[CustomizationService.COLOR_STRONG_KEY + '-l'] = 'var(' + CustomizationService.COLOR_USER_PRIMARY_KEY + '-l)';
        };
        CustomizationService.prototype.getTextColorsVariables = function (themeVars) {
            themeVars[CustomizationService.COLOR_TEXT_LINK_KEY + '-h'] = '207';
            themeVars[CustomizationService.COLOR_TEXT_LINK_KEY + '-s'] = '76%';
            themeVars[CustomizationService.COLOR_TEXT_LINK_KEY + '-l'] = '37%';
        };
        CustomizationService.prototype.getDefaultThemeColorsVariables = function (themeVars) {
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
        };
        CustomizationService.prototype.getDefaultThemeShadowsVariables = function (themeVars) {
            var noneOffset = '0';
            themeVars[CustomizationService.SHADOW_NONE_OFFSET_KEY] = noneOffset;
            var xsOffset = '0 0.125rem 0.25rem 0';
            themeVars[CustomizationService.SHADOW_XS_OFFSET_KEY] = xsOffset;
            var smOffset = '0 0.25rem 0.5rem 0';
            themeVars[CustomizationService.SHADOW_SM_OFFSET_KEY] = smOffset;
            var mdOffset = '0 0.5rem 1rem 0';
            themeVars[CustomizationService.SHADOW_MD_OFFSET_KEY] = mdOffset;
            var lgOffset = '0 1rem 2rem 0';
            themeVars[CustomizationService.SHADOW_LG_OFFSET_KEY] = lgOffset;
            var xlOffset = '0 2rem 4rem 0';
            themeVars[CustomizationService.SHADOW_XL_OFFSET_KEY] = xlOffset;
        };
        CustomizationService.prototype.getDefaultThemeFormCustomizationVariables = function (themeVars) {
            var formFieldSpacing = 1;
            themeVars[CustomizationService.FORM_FIELD_HEIGHT_KEY] = '2.5' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY] = '1.5' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.FORM_SPACEING_KEY] = formFieldSpacing + CustomizationService.REM_STRING;
            themeVars[CustomizationService.FORM_FIELD_SPACEING_KEY] = formFieldSpacing + CustomizationService.REM_STRING;
        };
        CustomizationService.prototype.getDefaultThemeCardCustomizationVariables = function (themeVars) {
            themeVars[CustomizationService.CARD_FIELD_HEIGHT_KEY] = '1.5' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.CARD_SPACEING_KEY] = 'var(' + CustomizationService.SPACING_SIZE_XS_KEY + ')';
            themeVars[CustomizationService.CARD_BORDER_RADIUS_KEY] = 'var(' + CustomizationService.BORDER_RADIUS_MD_KEY + ')';
            themeVars[CustomizationService.CARD_SHADOW_OFFSET_KEY] = 'var(' + CustomizationService.SHADOW_MD_OFFSET_KEY + ')';
        };
        CustomizationService.prototype.getDefaultThemeTableCustomizationVariables = function (themeVars) {
            themeVars[CustomizationService.TABLE_FIELD_HEIGHT_KEY] = '2' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.TABLE_SPACEING_KEY] = '0.5' + CustomizationService.REM_STRING;
            themeVars[CustomizationService.TABLE_BORDER_RADIUS_KEY] = 'var(' + CustomizationService.BORDER_RADIUS_MD_KEY + ')';
        };
        CustomizationService.prototype.getDefaultThemeQSCustomizationVariables = function (themeVars) {
            var qsState = exports.STYLE_TYPE.Regular;
            themeVars[CustomizationService.STYLE_QS_KEY] = qsState;
            themeVars[CustomizationService.COLOR_QS_KEY + '-h'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
            themeVars[CustomizationService.COLOR_QS_KEY + '-s'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
            themeVars[CustomizationService.COLOR_QS_KEY + '-l'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
        };
        CustomizationService.prototype.getDefaultThemeTopHeaderCustomizationVariables = function (themeVars) {
            var topHeaderState = exports.STYLE_TYPE.Strong;
            themeVars[CustomizationService.STYLE_TOP_HEADER_KEY] = topHeaderState;
            themeVars[CustomizationService.COLOR_TOP_HEADER_KEY + '-h'] = '';
            themeVars[CustomizationService.COLOR_TOP_HEADER_KEY + '-s'] = '';
            themeVars[CustomizationService.COLOR_TOP_HEADER_KEY + '-l'] = '';
        };
        CustomizationService.prototype.getDefaultThemeVariables = function () {
            var themeVars = {};
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
        };
        CustomizationService.prototype.getThemeVariables = function () {
            var ret = this.getDefaultThemeVariables();
            var themeVars = this.sessionService.getObject(CustomizationService.USER_THEME_VARIABLES);
            // Override defaults.
            if (themeVars) {
                // tslint:disable-next-line: forin
                for (var key in themeVars) {
                    ret[key] = themeVars[key];
                }
            }
            return ret;
        };
        CustomizationService.prototype.setThemeVariables = function (themeVariablesToSet) {
            if (themeVariablesToSet === void 0) { themeVariablesToSet = null; }
            var themeVariables = this.getThemeVariables();
            // Override defaults.
            if (themeVariablesToSet) {
                // tslint:disable-next-line: forin
                for (var key in themeVariablesToSet) {
                    themeVariables[key] = themeVariablesToSet[key];
                }
            }
            this.sessionService.setObject(CustomizationService.USER_THEME_VARIABLES, JSON.stringify(themeVariables));
            // tslint:disable-next-line: forin
            for (var key in themeVariables) {
                document.documentElement.style.setProperty(key, themeVariables[key]);
            }
        };
        CustomizationService.prototype.getThemeVariable = function (key) {
            var themeVars = this.getThemeVariables();
            if (themeVars.hasOwnProperty(key)) {
                return themeVars[key];
            }
            else {
                return '';
            }
        };
        CustomizationService.prototype.getNumberThemeVariable = function (themeVars, key) {
            if (themeVars && themeVars.hasOwnProperty(key)) {
                // If it's reference to another key.
                if (themeVars[key].indexOf('var(') === 0) {
                    key = themeVars[key].substr(4).split(')')[0];
                }
                var tmp = Number(themeVars[key].replace(CustomizationService.REM_STRING, ''));
                return tmp;
            }
            else {
                return 0;
            }
        };
        CustomizationService.prototype.setFooterHeight = function (height) {
            var self = this;
            if (this.footerHeight.getValue() !== height) {
                // it is publishing this value to all the subscribers that have already subscribed to this message
                setTimeout(function () { return self.footerHeight.next(height); }, 0);
            }
            document.documentElement.style.setProperty(CustomizationService.FOOTER_HEIGHT_KEY, height + CustomizationService.REM_STRING);
        };
        CustomizationService.prototype.setDefaultFooterHeight = function () {
            var themeVars = this.getThemeVariables();
            var res = this.getNumberThemeVariable(themeVars, CustomizationService.FOOTER_BAR_SPACING_TOP_KEY) +
                this.getNumberThemeVariable(themeVars, CustomizationService.FOOTER_BAR_SPACING_BOTTOM_KEY) +
                this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_FIELD_HEIGHT_KEY);
            this.setFooterHeight(res);
        };
        CustomizationService.prototype.getTopBarHeight = function () {
            var themeVars = this.getThemeVariables();
            var res = this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_SPACING_TOP_KEY) +
                this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_SPACING_BOTTOM_KEY) +
                this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_FIELD_HEIGHT_KEY);
            return res;
        };
        CustomizationService.prototype.setOldUserTheme = function (res) {
            // Added user theme.
            var themeObj = {
                Theme: res.Theme || 'default-theme',
            };
            this.sessionService.setObject(CustomizationService.USER_THEME, JSON.stringify(themeObj));
            var spinnerColor;
            var brandingFontColor;
            if (this.isLightColor(res.BrandingMainColor)) {
                spinnerColor = CustomizationService.DEFAULT_SPINNER_COLOR;
                brandingFontColor = '#222';
            }
            else {
                spinnerColor = res.BrandingMainColor;
                brandingFontColor = CustomizationService.DEFAULT_BRANDING_COLOR;
            }
            var color = {
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
        };
        CustomizationService.prototype.isLegacyColor = function () {
            var h = document.documentElement.style.getPropertyValue(CustomizationService.COLOR_TOP_HEADER_KEY + '-h');
            var s = document.documentElement.style.getPropertyValue(CustomizationService.COLOR_TOP_HEADER_KEY + '-s');
            var l = document.documentElement.style.getPropertyValue(CustomizationService.COLOR_TOP_HEADER_KEY + '-l');
            return !(h && s && l);
        };
        CustomizationService.prototype.getLoadingSpinnerColor = function () {
            var spinnerColor = '';
            if (this.isLegacyColor()) {
                var color = this.sessionService.getObject(CustomizationService.USER_COLOR);
                if (color && color.SpinnerColor) {
                    spinnerColor = color.SpinnerColor;
                }
                else {
                    spinnerColor = CustomizationService.DEFAULT_SPINNER_COLOR;
                }
            }
            return spinnerColor;
        };
        CustomizationService.prototype.getBrandingMainColor = function () {
            var brandingMainColor = '';
            if (this.isLegacyColor()) {
                var color = this.sessionService.getObject(CustomizationService.USER_COLOR);
                if (color && color.BrandingMainColor) {
                    brandingMainColor = color.BrandingMainColor;
                }
                else {
                    brandingMainColor = CustomizationService.DEFAULT_BRANDING_COLOR;
                }
            }
            return brandingMainColor;
        };
        CustomizationService.prototype.isLightColor = function (hexColor) {
            if (!hexColor) {
                return;
            }
            var isBright = false;
            var sum = 0;
            var c = hexColor.replace(/^#/, '');
            sum = parseInt(c[0] + c[1], 16);
            sum += parseInt(c[2] + c[3], 16);
            sum += parseInt(c[4] + c[5], 16);
            if (sum > 382.6) {
                // it's bright color
                isBright = true;
            }
            return isBright;
        };
        return CustomizationService;
    }());
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
    CustomizationService.ɵfac = function CustomizationService_Factory(t) { return new (t || CustomizationService)(i0.ɵɵinject(SessionService), i0.ɵɵinject(i2$1.FormBuilder)); };
    CustomizationService.ɵprov = i0.ɵɵdefineInjectable({ token: CustomizationService, factory: CustomizationService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CustomizationService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: SessionService }, { type: i2$1.FormBuilder }]; }, null);
    })();

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

    exports.AddonService = AddonService;
    exports.AttachDirective = AttachDirective;
    exports.ButtonBlurDirective = ButtonBlurDirective;
    exports.CapitalizePipe = CapitalizePipe;
    exports.CookieService = CookieService;
    exports.CustomizationService = CustomizationService;
    exports.DataConvertorService = DataConvertorService;
    exports.DateFormatter = DateFormatter;
    exports.DateStringFormatter = DateStringFormatter;
    exports.EncodePipe = EncodePipe;
    exports.EscapePipe = EscapePipe;
    exports.FieldLayout = FieldLayout;
    exports.FileService = FileService;
    exports.Guid = Guid;
    exports.HttpService = HttpService;
    exports.JwtHelperService = JwtHelperService;
    exports.LayoutService = LayoutService;
    exports.LoaderService = LoaderService;
    exports.MenuBlurDirective = MenuBlurDirective;
    exports.ObjectSingleData = ObjectSingleData;
    exports.ObjectsData = ObjectsData;
    exports.ObjectsDataRow = ObjectsDataRow;
    exports.ObjectsDataRowCell = ObjectsDataRowCell;
    exports.PepperiAddressField = PepperiAddressField;
    exports.PepperiAttachmentField = PepperiAttachmentField;
    exports.PepperiButtonField = PepperiButtonField;
    exports.PepperiCheckboxField = PepperiCheckboxField;
    exports.PepperiDateField = PepperiDateField;
    exports.PepperiFieldBase = PepperiFieldBase;
    exports.PepperiFieldClickedData = PepperiFieldClickedData;
    exports.PepperiFieldData = PepperiFieldData;
    exports.PepperiImageField = PepperiImageField;
    exports.PepperiImagesField = PepperiImagesField;
    exports.PepperiIndicatorsField = PepperiIndicatorsField;
    exports.PepperiInternalPageField = PepperiInternalPageField;
    exports.PepperiMenuField = PepperiMenuField;
    exports.PepperiModule = PepperiModule;
    exports.PepperiObjectChangedData = PepperiObjectChangedData;
    exports.PepperiOption = PepperiOption;
    exports.PepperiPlaceholderField = PepperiPlaceholderField;
    exports.PepperiQuantitySelectorField = PepperiQuantitySelectorField;
    exports.PepperiRichHtmlTextareaField = PepperiRichHtmlTextareaField;
    exports.PepperiRowData = PepperiRowData;
    exports.PepperiSelectField = PepperiSelectField;
    exports.PepperiSeparatorField = PepperiSeparatorField;
    exports.PepperiSignatureField = PepperiSignatureField;
    exports.PepperiTextareaField = PepperiTextareaField;
    exports.PepperiTextboxField = PepperiTextboxField;
    exports.PortalService = PortalService;
    exports.ReplaceLineBreaks = ReplaceLineBreaks;
    exports.RtlClassDirective = RtlClassDirective;
    exports.RtlDirectionDirective = RtlDirectionDirective;
    exports.SafeHtmlPipe = SafeHtmlPipe;
    exports.SafePipe = SafePipe;
    exports.SessionService = SessionService;
    exports.SmartSearchResponse = SmartSearchResponse;
    exports.SmartSearchValues = SmartSearchValues;
    exports.SplitUppercase = SplitUppercase;
    exports.TargetDirective = TargetDirective;
    exports.ToNumber = ToNumber;
    exports.UIControl = UIControl;
    exports.UIControlField = UIControlField;
    exports.UtilitiesService = UtilitiesService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib.umd.js.map
