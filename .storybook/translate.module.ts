// import { TranslateModule, TranslateService, TranslateLoader } from "@ngx-translate/core"
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { NgModule } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

// export function HttpLoaderFactory(httpClient: HttpClient) {
//     return new TranslateHttpLoader(httpClient, '/assets/ngx-lib/i18n/', '.ngx-lib.json');
// }

// @NgModule({
//     imports: [
//         HttpClientModule,
//         TranslateModule.forRoot({
//             loader: {
//                 provide: TranslateLoader,
//                 useFactory: HttpLoaderFactory,
//                 deps: [HttpClient],
//             },
//         })
//     ],
//     providers: [TranslateService]
// })
// export class SBTranslateModule {
//     constructor(translate: TranslateService) {
//         console.log("Configuring the translation service: ", translate);
//         console.log("Translations: ", translate.translations);
//         // translate.setDefaultLang("en");
//         // translate.use("en");

//         let userLang = 'en';
//         translate.setDefaultLang(userLang);
//         userLang = translate.getBrowserLang().split('-')[0]; // use navigator lang if available

//         if (location.href.indexOf('userLang=en') > -1) {
//             userLang = 'en';
//         }

//         // the lang to use, if the lang isn't available, it will use the current loader to get them
//         translate.use(userLang).subscribe((res: any) => {
//             // In here you can put the code you want. At this point the lang will be loaded
//         });
//     }
// }