import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PepScrollToService {
    public scrollElementTo(
        element: Element | Window,
        duration = 500,
        top = 0
    ): Observable<any> {
        const subject: Subject<any> = new Subject<any>();
        if (element instanceof Element || element instanceof Window) {
            this._scrollElementTo(element, duration, top, subject);
        } else {
            subject.error("I don't find element");
        }

        return subject;
    }

    private _scrollElementTo(
        el: Element | Window,
        duration: number,
        top: number,
        subject: Subject<any>
    ): Observable<any> {
        if (el) {
            let startingY: number;
            if (el instanceof Window) {
                startingY = window.pageYOffset;
            } else {
                const viewportOffset = (el as Element).getBoundingClientRect();
                startingY = viewportOffset.top;
            }
            this.doScrolling(el, startingY, top, duration, subject);
        } else {
            subject.error("I don't find element");
        }

        return subject;
    }

    public scrollWindowToElement(
        element: string | HTMLElement,
        duration = 500,
        offset = 0
    ): Observable<any> {
        const subject: Subject<any> = new Subject<any>();
        if (typeof element === 'string') {
            const el = document.querySelector(element as string);
            this._scrollWindowToElement(
                el as HTMLElement,
                duration,
                offset,
                subject
            );
        } else if (element instanceof HTMLElement) {
            this._scrollWindowToElement(element, duration, offset, subject);
        } else {
            subject.error("I don't find element");
        }

        return subject;
    }

    private _scrollWindowToElement(
        el: HTMLElement,
        duration: number,
        offset: number,
        subject: Subject<any>
    ): Observable<any> {
        if (el) {
            const viewportOffset = el.getBoundingClientRect();
            const startingY = window.pageYOffset;
            const offsetTop = viewportOffset.top + startingY;
            this.doScrolling(
                window,
                startingY,
                offsetTop + offset,
                duration,
                subject
            );
        } else {
            subject.error("I don't find element");
        }

        return subject;
    }

    private doScrolling(
        scrollingElement: Element | Window,
        startingY: number,
        elementY: number,
        duration: number,
        subject: Subject<any>
    ): void {
        const diff = elementY - startingY;
        let start;

        requestAnimationFrame(function step(timestamp) {
            start = !start ? timestamp : start;

            const time = timestamp - start;
            const percent = Math.min(time / duration, 1);

            scrollingElement.scrollTo(0, startingY + diff * percent);

            if (time < duration) {
                requestAnimationFrame(step);
                subject.next({});
            } else {
                subject.complete();
            }
        });
    }
}
