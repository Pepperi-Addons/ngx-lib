import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITranslationResource, MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateService } from '@ngx-translate/core';

/*
    This service is the webapp api for addon usege.
*/
@Injectable({
    providedIn: 'root',
})
export class PepTranslateService {
    constructor(
        private http: HttpClient
        // private sessionService: PepSessionService,
        // private httpService: PepHttpService,
        // private loaderService: PepLoaderService
    ) {
        //
    }

    createMultiTranslateLoader(resources: ITranslationResource[]) {
        return new MultiTranslateHttpLoader(this.http, resources);
    }

    setDefaultTranslateLang(translate: TranslateService, urlLangParam = 'userLang') {
        let userLang = 'en';
        translate.setDefaultLang(userLang);
        userLang = translate.getBrowserLang().split('-')[0]; // use navigator lang if available

        if (urlLangParam.length > 0) {
            const index = location.href.indexOf(urlLangParam);

            if (index > -1) {
                // urlLangParam=XX
                const startIndex = index + urlLangParam.length + '='.length;
                userLang = location.href.substring(startIndex, startIndex + 2);
            }
        }

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(userLang).subscribe((res: any) => {
            // In here you can put the code you want. At this point the lang will be loaded
        });
    }

}
