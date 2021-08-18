import { Injectable } from '@angular/core';
import { PepSessionService } from './session.service';
import { PepFileService } from './file.service';
import { PepHttpService } from '../../http/services/http.service';
import { PepLoaderService } from '../../http/services/loader.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateService } from '@ngx-translate/core';

/*
    This service is the webapp api for addon usege.
*/
@Injectable({
    providedIn: 'root',
})
export class PepAddonService {
    private readonly ADDON_ASSETS_PATH_KEY = 'AddonAssetsPath';
    private readonly ADDONS_DICTIONARY_ASSETS_PATH_KEY = 'AddonsDictionaryAssetsPath';
    private readonly ADDON_API_RELATIVE_PATH = '/addons/api';
    private readonly ADDON_API_ASYNC_RELATIVE_PATH = `${this.ADDON_API_RELATIVE_PATH}/async`;

    constructor(
        private sessionService: PepSessionService,
        private httpService: PepHttpService,
        private loaderService: PepLoaderService
    ) {
        //
    }

    private getAddonBaseRelativePath(isAsync: boolean): string {
        return isAsync
            ? this.ADDON_API_ASYNC_RELATIVE_PATH
            : this.ADDON_API_RELATIVE_PATH;
    }

    getAddonStaticFolder(subAddonUUID = ''): string {
        if (subAddonUUID.length > 0) {
            const addonsDictionary = this.sessionService.getObject(this.ADDONS_DICTIONARY_ASSETS_PATH_KEY);
            return addonsDictionary && addonsDictionary[subAddonUUID] ? addonsDictionary[subAddonUUID] : '';
        } else {
            return this.sessionService.getObject(this.ADDON_ASSETS_PATH_KEY) || '';
        }
    }

    setAddonStaticFolder(path: string, subAddonUUID = ''): void {
        if (subAddonUUID.length > 0) {
            const addonsDictionary = this.sessionService.getObject(this.ADDONS_DICTIONARY_ASSETS_PATH_KEY) ?? {};
            addonsDictionary[subAddonUUID] = path;
            this.sessionService.setObject(this.ADDONS_DICTIONARY_ASSETS_PATH_KEY, addonsDictionary);
        } else {
            return this.sessionService.setObject(this.ADDON_ASSETS_PATH_KEY, path);
        }
    }

    getAddonApiCall(
        addonUUID: string,
        fileName: string,
        functionName: string,
        httpOptions = {},
        isAsync = false
    ): Observable<any> {
        return this.httpService.getPapiApiCall(
            `${this.getAddonBaseRelativePath(
                isAsync
            )}/${addonUUID}/${fileName}/${functionName}`,
            httpOptions
        );
    }

    postAddonApiCall(
        addonUUID: string,
        fileName: string,
        functionName: string,
        body = {},
        httpOptions = {},
        isAsync = false
    ): Observable<any> {
        return this.httpService.postPapiApiCall(
            `${this.getAddonBaseRelativePath(
                isAsync
            )}/${addonUUID}/${fileName}/${functionName}`,
            body,
            httpOptions
        );
    }

    // TODO: need to chek this if the loader is working.
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
        this.loaderService.show();

        return window.fetch(input, init).finally(() => {
            this.loaderService.hide();
        });
    }

    public static createDefaultMultiTranslateLoader(
        http: HttpClient,
        fileService: PepFileService,
        addonService: PepAddonService,
        subAddonUUID = ''
    ) {
        const addonStaticFolder = addonService.getAddonStaticFolder(subAddonUUID);
        const translationsPath: string = fileService.getAssetsTranslationsPath(addonStaticFolder);
        const translationsSuffix: string = fileService.getAssetsTranslationsSuffix();
        const defaultSubFolder = 'assets/i18n/';

        return new MultiTranslateHttpLoader(http, [
            {
                prefix: translationsPath,
                suffix: translationsSuffix,
            },
            {
                prefix: addonStaticFolder.length > 0 ? `${addonStaticFolder}${defaultSubFolder}` : `/${defaultSubFolder}`,
                suffix: '.json',
            },
        ]);
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
