import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { PepCustomizationService, PepNgxLibModule } from '@pepperi-addons/ngx-lib';
// import { PepSizeDetectorModule } from '@pepperi-addons/ngx-lib/size-detector';

import { allIcons } from '@pepperi-addons/ngx-lib/icon';
import {
    PepIconRegistry,
    IPepIconData,
    PepIconType
} from '@pepperi-addons/ngx-lib/icon';

const pepperiComponentsModules = [
    // PepSizeDetectorModule,
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
        // TranslateService
    ],
})
export class SBNgxHelperModule {
    constructor(
        private translate: TranslateService,
        private customizationService: PepCustomizationService,
    ) {
        this.customizationService.setThemeVariables();

        // console.log("Configuring the translation service: ", this.translate);
        // console.log("Translations: ", this.translate.translations);
        // this.translate.setDefaultLang("en");
        // this.translate.use("en");

        let userLang = 'en';
        this.translate.setDefaultLang(userLang);
        userLang = this.translate.getBrowserLang().split('-')[0]; // use navigator lang if available

        if (location.href.indexOf('userLang=en') > -1) {
            userLang = 'en';
        }

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use(userLang).subscribe((res: any) => {
            // In here you can put the code you want. At this point the lang will be loaded
        });
    }
}
