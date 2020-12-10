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

    constructor() {
        // Raise custom event for showing the loader.
        this.onChanged$.subscribe((show) => {
            this.showLoaderChanged(show);
        });
    }

    private showLoaderChanged(show: boolean): void {
        const eventData = {
            detail: {
                showLoader: show
            }
        };

        const event = new CustomEvent('toggleLoader', eventData);
        window.dispatchEvent(event);
    }

    show(): void {
        this.counter++;
        this.showLoaderSubject.next(true);
    }

    hide(): void {
        this.counter--;

        if (this.counter < 0) {
            this.counter = 0;
        }

        if (this.counter === 0) {
            this.showLoaderSubject.next(false);
        }
    }

}