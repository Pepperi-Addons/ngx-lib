import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PepSessionService } from './session.service';
import { PepFileService } from './file.service';
import { PepHttpService } from '../../http/services/http.service';
import { PepLoaderService } from '../../http/services/loader.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { ITranslationResource } from 'ngx-translate-multi-http-loader';
import { PepTranslateService } from './translate.service';

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

    private get devServer() {
        return this.route.snapshot.queryParamMap.get('devServer') === 'true';
    }

    constructor(
        private sessionService: PepSessionService,
        private httpService: PepHttpService,
        private loaderService: PepLoaderService,
        public translateService: PepTranslateService,
        public fileService: PepFileService,
        private route: ActivatedRoute,
    ) {
        //
    }

    private getAddonBaseRelativePath(isAsync = false): string {
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

    getServerBaseUrl(addonUUID: string, fileName = '', isAsync = false, localhostPort = 4500): string {
        const fileToAdd = fileName.length > 0 ? `/${fileName}` : '';
        
        // For devServer run server on localhost.
        if(this.devServer) {
            return `http://localhost:${localhostPort}${fileToAdd}`;
        } else {
            const baseUrl = this.sessionService.getPapiBaseUrl();
            return `${baseUrl}${this.getAddonBaseRelativePath(isAsync)}/${addonUUID}${fileToAdd}`;
        }
    }

    getAddonApiCall(
        addonUUID: string,
        fileName: string,
        functionName: string,
        httpOptions = {},
        isAsync = false
    ): Observable<any> {
        // return this.httpService.getPapiApiCall(
        //     `${this.getAddonBaseRelativePath(
        //         isAsync
        //     )}/${addonUUID}/${fileName}/${functionName}`,
        //     httpOptions
        // );

        const papiBaseUrl = this.getServerBaseUrl(addonUUID, fileName, isAsync);
        return this.httpService.getHttpCall(`${papiBaseUrl}/${functionName}`, httpOptions);
    }

    postAddonApiCall(
        addonUUID: string,
        fileName: string,
        functionName: string,
        body = {},
        httpOptions = {},
        isAsync = false
    ): Observable<any> {
        // return this.httpService.postPapiApiCall(
        //     `${this.getAddonBaseRelativePath(
        //         isAsync
        //     )}/${addonUUID}/${fileName}/${functionName}`,
        //     body,
        //     httpOptions
        // );

        const papiBaseUrl = this.getServerBaseUrl(addonUUID, fileName, isAsync);
        return this.httpService.postHttpCall(`${papiBaseUrl}/${functionName}`, body, httpOptions);
    }

    // TODO: need to chek this if the loader is working.
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
        this.loaderService.show();

        return window.fetch(input, init).finally(() => {
            this.loaderService.hide();
        });
    }

    getNgxLibTranslationResource(subAddonUUID = '', libName = 'ngx-lib'): ITranslationResource {
        const addonStaticFolder = this.getAddonStaticFolder(subAddonUUID);
        const translationsPath: string = this.fileService.getAssetsTranslationsPath(addonStaticFolder, libName);
        const translationsSuffix: string = this.fileService.getAssetsTranslationsSuffix(libName);

        return {
            prefix: translationsPath,
            suffix: translationsSuffix,
        };
    }

    getAddonTranslationResource(subAddonUUID = ''): ITranslationResource {
        const addonStaticFolder = this.getAddonStaticFolder(subAddonUUID);
        const defaultSubFolder = 'assets/i18n/';

        return {
            prefix: addonStaticFolder.length > 0 ? `${addonStaticFolder}${defaultSubFolder}` : `/${defaultSubFolder}`,
            suffix: '.json',
        };
    }

    setDefaultTranslateLang(translate: TranslateService, urlLangParam = 'userLang') {
        this.translateService.setDefaultTranslateLang(translate, urlLangParam);
    }

    // Deprecated need to delete in next major.
    public static createDefaultMultiTranslateLoader(
        http: HttpClient,
        fileService: PepFileService,
        addonService: PepAddonService,
        subAddonUUID = ''
    ) {
        const ngxLibTranslationResource = addonService.getNgxLibTranslationResource(subAddonUUID);
        const addonTranslationResource = addonService.getAddonTranslationResource(subAddonUUID);

        return addonService.translateService.createMultiTranslateLoader([
            ngxLibTranslationResource,
            addonTranslationResource
        ]);
    }

    public static createMultiTranslateLoader(
        addonService: PepAddonService,
        libsName = ['ngx-lib'],
        subAddonUUID = ''
    ) {
        const ngxLibTranslationResources = [];

        if (libsName?.length > 0) {
            for (let index = 0; index < libsName.length; index++) {
                const libName = libsName[index];
                ngxLibTranslationResources.push(addonService.getNgxLibTranslationResource(subAddonUUID, libName));
            }
        }

        const addonTranslationResource = addonService.getAddonTranslationResource(subAddonUUID);

        return addonService.translateService.createMultiTranslateLoader([
            ...ngxLibTranslationResources,
            addonTranslationResource
        ]);
    }
}
