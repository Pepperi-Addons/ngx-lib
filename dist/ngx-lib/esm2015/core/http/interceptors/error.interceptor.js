import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
// import { ToastrService } from 'ngx-toastr';
export class ErrorInterceptor {
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
ErrorInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ErrorInterceptor, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NyYy9jb3JlL2h0dHAvaW50ZXJjZXB0b3JzL2Vycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7O0FBQ25ELDhDQUE4QztBQUc5QyxNQUFNLE9BQU8sZ0JBQWdCO0lBQ3pCLGdCQUVHLENBQUM7SUFFSixTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNsQixJQUFJO1FBQ0QsNENBQTRDO1FBQzVDLFVBQVUsQ0FBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUNwQyxrQ0FBa0M7WUFDbEMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsOEJBQThCO2dCQUM5QixvQ0FBb0M7YUFDdkM7WUFDRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ1YsQ0FBQzs7Z0ZBcEJRLGdCQUFnQjt3REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgSHR0cEV2ZW50LFxyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBJbnRlcmNlcHRvcixcclxuICBIdHRwRXJyb3JSZXNwb25zZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJ25neC10b2FzdHInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvLyBwcml2YXRlIHRvYXN0cjogVG9hc3RyU2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJyb3JJbnRlcmNlcHRvcicpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIC8vIHJldHJ5KDIpLCBUT0RPOiBDaGVjayBpZiB3ZSB3YW50IHRvIHJldHJ5XHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyA0MDEgaGFuZGxlZCBpbiBhdXRoLmludGVyY2VwdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IFNob3cgZXJyb3IgaW4gZGlhbG9nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnRvYXN0ci5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufSJdfQ==