import { AuthInterceptor } from './auth.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { LoaderInterceptor } from './loader.interceptor';
export declare const httpInterceptorProviders: ({
    provide: import("@angular/core").InjectionToken<import("@angular/common/http").HttpInterceptor[]>;
    useClass: typeof AuthInterceptor;
    multi: boolean;
} | {
    provide: import("@angular/core").InjectionToken<import("@angular/common/http").HttpInterceptor[]>;
    useClass: typeof ErrorInterceptor;
    multi: boolean;
} | {
    provide: import("@angular/core").InjectionToken<import("@angular/common/http").HttpInterceptor[]>;
    useClass: typeof LoaderInterceptor;
    multi: boolean;
})[];
