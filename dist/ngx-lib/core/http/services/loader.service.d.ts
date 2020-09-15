import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoaderService {
    counter: number;
    private showLoaderSubject;
    get onChanged$(): Observable<boolean>;
    constructor();
    show(): void;
    hide(): void;
    static ɵfac: i0.ɵɵFactoryDef<LoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDef<LoaderService>;
}
