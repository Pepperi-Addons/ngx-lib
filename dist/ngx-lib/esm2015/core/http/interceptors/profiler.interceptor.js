import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { tap, finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class ProfilerInterceptor {
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
ProfilerInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: ProfilerInterceptor, factory: ProfilerInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProfilerInterceptor, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZXIuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NyYy9jb3JlL2h0dHAvaW50ZXJjZXB0b3JzL3Byb2ZpbGVyLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUtILFlBQVksRUFDZixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRy9DLE1BQU0sT0FBTyxtQkFBbUI7SUFDNUIsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRXBDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLEVBQVUsQ0FBQztRQUVmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3hCLEdBQUc7UUFDQyx5REFBeUQ7UUFDekQsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDdEIsSUFBSSxLQUFLLFlBQVksWUFBWSxFQUFFO2dCQUMvQixFQUFFLEdBQUcsV0FBVyxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQztRQUNELGtEQUFrRDtRQUNsRCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUMzQjtRQUNELDBEQUEwRDtRQUMxRCxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ1YsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQztZQUNyQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLGFBQWEsS0FBSyxFQUFFLE9BQU8sT0FBTyxNQUFNLENBQUM7WUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQzs7c0ZBekJRLG1CQUFtQjsyREFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgICBIdHRwRXZlbnQsXHJcbiAgICBIdHRwUmVxdWVzdCxcclxuICAgIEh0dHBIYW5kbGVyLFxyXG4gICAgSHR0cEludGVyY2VwdG9yLFxyXG4gICAgSHR0cFJlc3BvbnNlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignUHJvZmlsZXJJbnRlcmNlcHRvcicpO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydGVkID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBsZXQgb2s6IHN0cmluZztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZShcclxuICAgICAgICAgICAgdGFwKFxyXG4gICAgICAgICAgICAgICAgLy8gU3VjY2VlZHMgd2hlbiB0aGVyZSBpcyBhIHJlc3BvbnNlOyBpZ25vcmUgb3RoZXIgZXZlbnRzXHJcbiAgICAgICAgICAgICAgICAoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rID0gJ3N1Y2NlZWRlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIE9wZXJhdGlvbiBmYWlsZWQ7IGVycm9yIGlzIGFuIEh0dHBFcnJvclJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiAob2sgPSAnZmFpbGVkJylcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgLy8gTG9nIHdoZW4gcmVzcG9uc2Ugb2JzZXJ2YWJsZSBlaXRoZXIgY29tcGxldGVzIG9yIGVycm9yc1xyXG4gICAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0ZWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBgJHtyZXEubWV0aG9kfSBcIiR7cmVxLnVybFdpdGhQYXJhbXN9XCIgJHtva30gaW4gJHtlbGFwc2VkfSBtcy5gO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19