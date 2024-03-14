import { Injectable, Injector, Optional, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ActivatedRoute, Router } from '@angular/router';
import { PepSessionService } from './session.service';
import { PepFileService } from './file.service';
import { PepHttpService } from '../../http/services/http.service';
import { PepLoaderService } from '../../http/services/loader.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { ITranslationResource } from 'ngx-translate-multi-http-loader';
import { PepTranslateService } from './translate.service';
import { connectRouter } from '@angular-architects/module-federation-tools';

/*
    This service is the webapp api for addon usege.
*/
@Injectable({
    providedIn: 'root',
})
export class PepAddonService {
    private readonly PAGES_ADDON_UUID = '50062e0c-9967-4ed4-9102-f2bc50602d41';
    // private readonly ADDON_ASSETS_PATH_KEY = 'AddonAssetsPath';
    private readonly ADDONS_DICTIONARY_ASSETS_PATH_KEY = 'AddonsDictionaryAssetsPath';
    private readonly ADDON_API_RELATIVE_PATH = '/addons/api';
    private readonly ADDON_API_ASYNC_RELATIVE_PATH = `${this.ADDON_API_RELATIVE_PATH}/async`;

    private static _customElementsMap: Map<string, any> = new Map();

    private get devServer() {
        return this.route ? this.route.snapshot.queryParamMap.get('devServer') === 'true' : false;
    }

    constructor(
        private sessionService: PepSessionService,
        private httpService: PepHttpService,
        private loaderService: PepLoaderService,
        public translateService: PepTranslateService,
        public fileService: PepFileService,
        @Optional() private router: Router,
        @Optional() private route: ActivatedRoute,
    ) {
        //
    }

    private getAddonBaseRelativePath(isAsync = false): string {
        return isAsync
            ? this.ADDON_API_ASYNC_RELATIVE_PATH
            : this.ADDON_API_RELATIVE_PATH;
    }

    getAddonStaticFolder(addonUUID: string): string {
        // if (addonUUID.length > 0) {
            const addonsDictionary = this.sessionService.getObject(this.ADDONS_DICTIONARY_ASSETS_PATH_KEY);
            return addonsDictionary && addonsDictionary[addonUUID] ? addonsDictionary[addonUUID] : '';
        // } else {
            // return this.sessionService.getObject(this.ADDON_ASSETS_PATH_KEY) || '';
        // }
    }

    setAddonStaticFolder(path: string, addonUUID: string): void {
        // if (addonUUID.length > 0) {
            const addonsDictionary = this.sessionService.getObject(this.ADDONS_DICTIONARY_ASSETS_PATH_KEY) ?? {};
            addonsDictionary[addonUUID] = path;
            this.sessionService.setObject(this.ADDONS_DICTIONARY_ASSETS_PATH_KEY, addonsDictionary);
        // } else {
        //     return this.sessionService.setObject(this.ADDON_ASSETS_PATH_KEY, path);
        // }
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

    async getAddonCPICall(
        addonUUID: string,
        url: string
    ) {
        const res = await this.emitEvent("AddonAPI", {
            AddonUUID: addonUUID,
            RelativeURL: url,
        })

        if (res.Success) {
            return JSON.parse(res.Value)
        }
        else {
            throw new Error(res.Value)
        }
    }

    async postAddonCPICall(
        addonUUID: string,
        url: string,
        body: any
    ) {
        const res = await this.emitEvent("AddonAPI", {
            AddonUUID: addonUUID,
            RelativeURL: url,
            Method: 'POST',
            Body: body
        })

        if (res.Success) {
            return JSON.parse(res.Value)
        }
        else {
            throw new Error(res.Value)
        }
    }   

    emitEvent(eventKey: string, eventData: any): Promise<any> {
        return new Promise(resolve => {
            window.dispatchEvent(new CustomEvent('emit-event', {
                detail: {
                    eventKey,
                    eventData: eventData,
                    completion: resolve
                }
            }))
        })
    }

    // TODO: need to chek this if the loader is working.
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
        this.loaderService.show();

        return window.fetch(input, init).finally(() => {
            this.loaderService.hide();
        });
    }

    getNgxLibTranslationResource(addonUUID: string, libName = 'ngx-lib'): ITranslationResource {
        const addonStaticFolder = this.getAddonStaticFolder(addonUUID);
        const translationsPath: string = this.fileService.getAssetsTranslationsPath(addonStaticFolder, libName);
        const translationsSuffix: string = this.fileService.getAssetsTranslationsSuffix(libName);

        return {
            prefix: translationsPath,
            suffix: translationsSuffix,
        };
    }

    getAddonTranslationResource(addonUUID: string): ITranslationResource {
        const addonStaticFolder = this.getAddonStaticFolder(addonUUID);
        const defaultSubFolder = 'assets/i18n/';

        return {
            prefix: addonStaticFolder.length > 0 ? `${addonStaticFolder}${defaultSubFolder}` : `/${defaultSubFolder}`,
            suffix: '.json',
        };
    }

    setDefaultTranslateLang(translate: TranslateService, urlLangParam = 'userLang') {
        this.translateService.setDefaultTranslateLang(translate, urlLangParam);
    }

    getPagesAddonUUID() {
        return this.PAGES_ADDON_UUID;
    }

    setShellRouterData(data: { addPadding?: boolean, showSidebar?: boolean, showHeader?: boolean }) {
        const eventData = {
            detail: data,
        };

        const customEvent = new CustomEvent('set-router-data', eventData);
        window.dispatchEvent(customEvent);
    }

    defineCustomElement(elementName: string, component: Type<any>, injector: Injector) {
        if (!customElements.get(elementName)) {  
            customElements.define(elementName, createCustomElement(component, {injector: injector}));
            
            // Set the elementName in the _customElementsMap (Fix internal routing bug).
            PepAddonService._customElementsMap.set(elementName, {injector: injector});
        }
    }

    // Fix internal routing bug.
    connectInternalRouter(elementName: string) {
        const customElementObject = PepAddonService._customElementsMap.get(elementName);
        let router = customElementObject?.injector.get(Router);

        if (!router) {
            router = this.router;
        }

        if (router) {
            const useHash = location.href.includes('#');
            connectRouter(router, useHash);
        }
    }

    public static createMultiTranslateLoader(
        addonUUID: string,
        addonService: PepAddonService,
        libsName = ['ngx-lib'],
    ) {
        const ngxLibTranslationResources = [];

        if (libsName?.length > 0) {
            for (let index = 0; index < libsName.length; index++) {
                const libName = libsName[index];
                ngxLibTranslationResources.push(addonService.getNgxLibTranslationResource(addonUUID, libName));
            }
        }

        const addonTranslationResource = addonService.getAddonTranslationResource(addonUUID);

        return addonService.translateService.createMultiTranslateLoader([
            ...ngxLibTranslationResources,
            addonTranslationResource
        ]);
    }
}
