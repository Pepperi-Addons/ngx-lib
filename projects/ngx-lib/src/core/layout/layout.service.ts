import { Injectable, Optional } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

// Const BIDI_RTL_LANGS Array
// BIDI_RTL_LANGS ref: http://en.wikipedia.org/wiki/Right-to-left
// Table of scripts in Unicode: https://en.wikipedia.org/wiki/Script_(Unicode)
const _BIDI_RTL_LANGS = [
    'ae' /* Avestan */,
    'ar' /* 'العربية', Arabic */,
    'arc' /* Aramaic */,
    'bcc' /* 'بلوچی مکرانی', Southern Balochi */,
    'bqi' /* 'بختياري', Bakthiari */,
    'ckb' /* 'Soranî / کوردی', Sorani */,
    'dv' /* Dhivehi */,
    'fa' /* 'فارسی', Persian */,
    'glk' /* 'گیلکی', Gilaki */,
    'he' /* 'עברית', Hebrew */,
    'ku' /* 'Kurdî / كوردی', Kurdish */,
    'mzn' /* 'مازِرونی', Mazanderani */,
    'nqo' /* N'Ko */,
    'pnb' /* 'پنجابی', Western Punjabi */,
    'ps' /* 'پښتو', Pashto, */,
    'sd' /* 'سنڌي', Sindhi */,
    'ug' /* 'Uyghurche / ئۇيغۇرچە', Uyghur */,
    'ur' /* 'اردو', Urdu */,
    'yi' /* 'ייִדיש', Yiddish */,
];

export type PepOrientationType = 'landscape' | 'portrait';

export enum PepScreenSizeType {
    XL,
    LG,
    MD,
    SM,
    XS,
}
// export type PepScreenSizeType = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

@Injectable({
    providedIn: 'root',
})
export class PepLayoutService {
    private resizeSubject: BehaviorSubject<PepScreenSizeType>;
    private deviceHasMouseSubject: BehaviorSubject<boolean>;

    get onResize$(): Observable<PepScreenSizeType> {
        return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
    }

    get onMouseOver$(): Observable<boolean> {
        return this.deviceHasMouseSubject
            .asObservable()
            .pipe(distinctUntilChanged());
    }

    constructor(@Optional() private translate: TranslateService = null) {
        this.resizeSubject = new BehaviorSubject(PepScreenSizeType.LG);

        this.deviceHasMouseSubject = new BehaviorSubject(false);
        document.addEventListener(
            'mouseover',
            this.documentMouseoverListener,
            false
        );
        // document.addEventListener('touchstart', this._documentTouchstartListener, false);
    }

    private documentMouseoverListener = (event: MouseEvent) => {
        this.deviceHasMouseSubject.next(true);
        this.deviceHasMouseSubject.complete();
        document.removeEventListener(
            'mouseover',
            this.documentMouseoverListener,
            false
        );
    };

    // private _documentTouchstartListener = (event: TouchEvent) => {
    //     debugger;
    //     this.isTouchDevice = true;
    //     document.removeEventListener('touchstart', this._documentTouchstartListener, false);
    // }

    /**
     * Set the current screen size.
     * @param size The size to change to.
     */
    onResize(size: PepScreenSizeType): void {
        this.resizeSubject.next(size);
    }

    getDeviceHasMouse(): boolean {
        return this.deviceHasMouseSubject.getValue();
    }

    getOrintation(): PepOrientationType {
        if (window.innerHeight > window.innerWidth) {
            return 'portrait';
        } else {
            return 'landscape';
        }
    }

    getScreenWidth(): number {
        let retVal = 250.0;
        switch (this.resizeSubject.getValue()) {
            case PepScreenSizeType.XS: {
                retVal = this.getOrintation() === 'landscape' ? 130.0 : 65.0;
                break;
            }
            case PepScreenSizeType.SM:
            case PepScreenSizeType.MD: {
                retVal = this.getOrintation() === 'landscape' ? 220.0 : 140.0;
                break;
            }
            case PepScreenSizeType.LG:
            case PepScreenSizeType.XL: {
                retVal = this.getOrintation() === 'landscape' ? 400.0 : 250.0;
                break;
            }
        }
        return retVal;
    }

    getScreenHeight(): number {
        let retVal = 250.0;
        switch (this.resizeSubject.getValue()) {
            case PepScreenSizeType.XS: {
                retVal = this.getOrintation() === 'landscape' ? 65.0 : 130.0;
                break;
            }
            case PepScreenSizeType.SM:
            case PepScreenSizeType.MD: {
                retVal = this.getOrintation() === 'landscape' ? 140.0 : 220.0;
                break;
            }
            case PepScreenSizeType.LG:
            case PepScreenSizeType.XL: {
                retVal = this.getOrintation() === 'landscape' ? 250.0 : 400.0;
                break;
            }
        }
        return retVal;
    }

    getScreenHeightPx(): number {
        return (
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight
        );
    }

    getScreenWidthPx(): number {
        return (
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
        );
    }

    getScrollbarWidth() {
        // Creating invisible container
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll'; // forcing scrollbar to appear
        // outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
        document.body.appendChild(outer);

        // Creating inner element and placing it in the container
        const inner = document.createElement('div');
        outer.appendChild(inner);

        // Calculating difference between container's full width and the child width
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

        // Removing temporary elements from the DOM
        outer.parentNode.removeChild(outer);

        return scrollbarWidth;
    }

    getCurrentLanguage(): string {
        return this.translate?.getBrowserCultureLang() || navigator.language;
    }

    isRtl(): boolean {
        const userLang = this.getCurrentLanguage();
        const isRtl = _BIDI_RTL_LANGS.indexOf(userLang) >= 0;

        return isRtl;
    }
}
