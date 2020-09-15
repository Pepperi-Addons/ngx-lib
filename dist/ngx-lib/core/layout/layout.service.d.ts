import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare enum ORIENTATION {
    Landscape = 0,
    Portrait = 1
}
export declare enum SCREEN_SIZE {
    XL = 0,
    LG = 1,
    MD = 2,
    SM = 3,
    XS = 4
}
export declare class LayoutService {
    private translate;
    private resizeSubject;
    get onResize$(): Observable<SCREEN_SIZE>;
    constructor(translate: TranslateService);
    /**
     * Set the current screen size.
     * @param size The size to change to.
     */
    onResize(size: SCREEN_SIZE): void;
    getOrintation(): ORIENTATION;
    getScreenWidth(): number;
    getScreenHeight(): number;
    getScreenHeightPx(): number;
    getScreenWidthPx(): number;
    getCurrentLanguage(): string;
    isRtl(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<LayoutService, never>;
    static ɵprov: i0.ɵɵInjectableDef<LayoutService>;
}
