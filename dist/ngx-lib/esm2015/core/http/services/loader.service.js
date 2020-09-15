import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class LoaderService {
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
LoaderService.ɵprov = i0.ɵɵdefineInjectable({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoaderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NyYy9jb3JlL2h0dHAvc2VydmljZXMvbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUt0RCxNQUFNLE9BQU8sYUFBYTtJQVF0QjtRQVBBLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDSixzQkFBaUIsR0FBNkIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFNM0UsQ0FBQztJQUpoQixJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFJRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVmLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7OzBFQXJCUSxhQUFhO3FEQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZWLE1BQU07a0RBRVQsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGVyU2VydmljZSB7XHJcbiAgICBjb3VudGVyID0gMDtcclxuICAgIHByaXZhdGUgc2hvd0xvYWRlclN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGdldCBvbkNoYW5nZWQkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3dMb2FkZXJTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyKys7XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGVyU3ViamVjdC5uZXh0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyLS07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGVyU3ViamVjdC5uZXh0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=