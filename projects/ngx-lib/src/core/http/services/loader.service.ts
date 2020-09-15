import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    counter = 0;
    private showLoaderSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get onChanged$(): Observable<boolean> {
        return this.showLoaderSubject.asObservable().pipe(distinctUntilChanged());
    }

    constructor() {}

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