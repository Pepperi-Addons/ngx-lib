import { HTTP_INTERCEPTORS } from '@angular/common/http';

// import { AuthInterceptor } from './auth.interceptor';
// import { CacheInterceptor } from './cache.interceptor';
// import { ConvertInterceptor } from './convert.interceptor';
import { PepErrorInterceptor } from './error.interceptor';
// import { FakeInterceptor } from './fake.interceptor';
// import { HeaderInterceptor } from './header.interceptor';
import { PepLoaderInterceptor } from './loader.interceptor';
import { PepProfilerInterceptor } from './profiler.interceptor';

export const httpInterceptorProviders = [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: ConvertInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: PepErrorInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: FakeInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: PepLoaderInterceptor, multi: true },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: PepProfilerInterceptor,
        multi: true,
    },
];
