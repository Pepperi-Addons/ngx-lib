import { TranslateModule, TranslateService, TranslateLoader } from "@ngx-translate/core"
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, '/assets/ngx-lib/i18n/', '.ngx-lib.json');
}

@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        })
    ],
    providers: [TranslateService]
})
export class SBTranslateModule {
    constructor(translateService: TranslateService) {
        console.log("Configuring the translation service: ", translateService);
        console.log("Translations: ", translateService.translations);
        translateService.setDefaultLang("en");
        translateService.use("en");
    }
}