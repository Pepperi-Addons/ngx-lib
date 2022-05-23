import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

import { PepAddonService, PepCustomizationService, PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepSizeDetectorModule } from '@pepperi-addons/ngx-lib/size-detector';

import { allIcons } from '@pepperi-addons/ngx-lib/icon';
import {
    PepIconRegistry,
    IPepIconData,
    PepIconType
} from '@pepperi-addons/ngx-lib/icon';

const pepperiComponentsModules = [
    PepSizeDetectorModule,
    // PepIconModule,
];

import {
    TranslateModule,
    TranslateLoader,
    TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, '/assets/ngx-lib/i18n/', '.ngx-lib.json');
}

export function registerAllIcons(pepperiIconRegistry: PepIconRegistry): any {
    let pepIcons: IPepIconData[] = [];
    if (allIcons) {
        Object.keys(allIcons).forEach(key => {
            pepIcons.push({ name: key as PepIconType, data: allIcons[key] });
        });
    }

    return () => pepperiIconRegistry.registerIcons(pepIcons);;
}

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        PepNgxLibModule,
        pepperiComponentsModules,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: registerAllIcons,
            multi: true,
            deps: [PepIconRegistry]
        },
        TranslateService
    ],
})
export class SBNgxHelperModule {
    constructor(
        private translate: TranslateService,
        private customizationService: PepCustomizationService,
        private addonService: PepAddonService,
    ) {
        this.customizationService.setThemeVariables();
        this.addonService.setDefaultTranslateLang(translate);
    }
}
