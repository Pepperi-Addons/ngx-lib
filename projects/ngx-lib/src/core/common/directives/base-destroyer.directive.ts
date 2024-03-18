import { Directive, OnDestroy } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

@Directive({})
export abstract class BaseDestroyerDirective implements OnDestroy {
    private readonly _destroyed: Subject<void>;

    constructor(
    ) {
        this._destroyed = new Subject();
    }

    protected getDestroyer() {
        return takeUntil(this._destroyed);
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }
}