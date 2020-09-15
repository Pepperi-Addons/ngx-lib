import { Injectable, Optional, Inject } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

// Const BIDI_RTL_LANGS Array
// BIDI_RTL_LANGS ref: http://en.wikipedia.org/wiki/Right-to-left
// Table of scripts in Unicode: https://en.wikipedia.org/wiki/Script_(Unicode)
const _BIDI_RTL_LANGS = [
    'ae',	/* Avestan */
    'ar',   /* 'العربية', Arabic */
    'arc',  /* Aramaic */
    'bcc',  /* 'بلوچی مکرانی', Southern Balochi */
    'bqi',  /* 'بختياري', Bakthiari */
    'ckb',  /* 'Soranî / کوردی', Sorani */
    'dv',   /* Dhivehi */
    'fa',   /* 'فارسی', Persian */
    'glk',  /* 'گیلکی', Gilaki */
    'he',   /* 'עברית', Hebrew */
    'ku',   /* 'Kurdî / كوردی', Kurdish */
    'mzn',  /* 'مازِرونی', Mazanderani */
    'nqo',  /* N'Ko */
    'pnb',  /* 'پنجابی', Western Punjabi */
    'ps',   /* 'پښتو', Pashto, */
    'sd',   /* 'سنڌي', Sindhi */
    'ug',   /* 'Uyghurche / ئۇيغۇرچە', Uyghur */
    'ur',   /* 'اردو', Urdu */
    'yi'    /* 'ייִדיש', Yiddish */
];

export enum ORIENTATION {
    Landscape,
    Portrait,
}

export enum SCREEN_SIZE {
    XL,
    LG,
    MD,
    SM,
    XS,
}

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    private resizeSubject: BehaviorSubject<SCREEN_SIZE>;

    get onResize$(): Observable<SCREEN_SIZE> {
        return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
    }

    constructor(private translate: TranslateService) {
        this.resizeSubject = new BehaviorSubject(SCREEN_SIZE.LG);
    }

    /**
     * Set the current screen size.
     * @param size The size to change to.
     */
    onResize(size: SCREEN_SIZE): void {
        this.resizeSubject.next(size);
    }

    public getOrintation(): ORIENTATION {
        if (window.innerHeight > window.innerWidth) {
            return ORIENTATION.Portrait;
        } else {
            return ORIENTATION.Landscape;
        }
    }

    public getScreenWidth(): number {
        let retVal = 250.0;
        switch (this.resizeSubject.getValue()) {
            case SCREEN_SIZE.XS: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 130.0 : 65.0;
                break;
            }
            case SCREEN_SIZE.SM:
            case SCREEN_SIZE.MD: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 220.0 : 140.0;
                break;
            }
            case SCREEN_SIZE.LG: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 400.0 : 250.0;
                break;
            }
        }
        return retVal;
    }

    public getScreenHeight(): number {
        let retVal = 250.0;
        switch (this.resizeSubject.getValue()) {
            case SCREEN_SIZE.XS: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 65.0 : 130.0;
                break;
            }
            case SCREEN_SIZE.SM:
            case SCREEN_SIZE.MD: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 140.0 : 220.0;
                break;
            }
            case SCREEN_SIZE.LG: {
                retVal = this.getOrintation() === ORIENTATION.Landscape ? 250.0 : 400.0;
                break;
            }
        }
        return retVal;
    }

    getScreenHeightPx(): number {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    getScreenWidthPx(): number {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    getCurrentLanguage(): string {
        return this.translate && this.translate.currentLang || navigator.language;
    }

    public isRtl(): boolean {
        const userLang = this.getCurrentLanguage();
        const isRtl = _BIDI_RTL_LANGS.indexOf(userLang) >= 0;

        return isRtl;
    }
}
