import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { PepCustomizationService, PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepSizeDetectorModule } from '@pepperi-addons/ngx-lib/size-detector';

import { allIcons } from '@pepperi-addons/ngx-lib/icon';
import {
    PepIconModule,
    PepIconRegistry,
    IPepIconData,
    PepIconType
} from '@pepperi-addons/ngx-lib/icon';

const pepperiComponentsModules = [
    //PepSizeDetectorModule,
    PepIconModule,
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
    // providers: [TranslateService]
})
export class SBNgxHelperModule {
    constructor(
        private translate: TranslateService,
        private pepperiIconRegistry: PepIconRegistry,
        private customizationService: PepCustomizationService,
    ) {
        this.registerAllIcons();
        // this.pepperiIconRegistry.registerIcons(pepIcons);
        this.customizationService.setThemeVariables();

        console.log("Configuring the translation service: ", this.translate);
        console.log("Translations: ", this.translate.translations);
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

    private registerAllIcons(): void {
        let pepIcons: IPepIconData[] = [];
        if (allIcons) {
            Object.keys(allIcons).forEach(key => {
                pepIcons.push({ name: key as PepIconType, data: allIcons[key] });
            });

            this.pepperiIconRegistry.registerIcons(pepIcons);
        }
    }
}
