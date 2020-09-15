import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PepperiModule, FileService } from '@pepperi-addons/ngx-lib';

import {PepperiIconModule, PepperiIconRegistry,
    pepperiIconSystemBolt,
    pepperiIconNoImage
} from '@pepperi-addons/ngx-lib/icon';
// import {pepperiIconsArtist, pepperiIconsBirthday, pepperiIconsChef, pepperiIconsSleep, pepperiIconsSpace} from '@pepperi-addons/ngx-lib/icon';

import { PepperiAttachmentModule } from '@pepperi-addons/ngx-lib/attachment';
import { PepperiCheckboxModule } from '@pepperi-addons/ngx-lib/checkbox';
import { PepperiColorModule } from '@pepperi-addons/ngx-lib/color';
import { PepperiDateModule } from '@pepperi-addons/ngx-lib/date';
import { PepperiGroupButtonsModule } from '@pepperi-addons/ngx-lib/group-buttons';
import { PepperiImageModule } from '@pepperi-addons/ngx-lib/image';
import { PepperiImagesFilmstripModule } from '@pepperi-addons/ngx-lib/images-filmstrip';
import { PepperiInternalButtonModule } from '@pepperi-addons/ngx-lib/internal-button';
import { PepperiMenuModule } from '@pepperi-addons/ngx-lib/menu';
import { PepperiQuantitySelectorModule } from '@pepperi-addons/ngx-lib/quantity-selector';
import { PepperiRichHtmlTextareaModule } from '@pepperi-addons/ngx-lib/rich-html-textarea';
import { PepperiSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepperiSeparatorModule } from '@pepperi-addons/ngx-lib/separator';
import { PepperiSignatureModule } from '@pepperi-addons/ngx-lib/signature';
import { PepperiSizeDetectorModule } from '@pepperi-addons/ngx-lib/size-detector';
import { PepperiTextareaModule } from '@pepperi-addons/ngx-lib/textarea';
import { PepperiTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepperiListModule } from '@pepperi-addons/ngx-lib/list';

const pepperiComponentsModules = [
    PepperiAttachmentModule,
    PepperiCheckboxModule,
    PepperiColorModule,
    PepperiDateModule,
    PepperiGroupButtonsModule,
    PepperiImageModule,
    PepperiImagesFilmstripModule,
    PepperiInternalButtonModule,
    PepperiMenuModule,
    PepperiQuantitySelectorModule,
    PepperiRichHtmlTextareaModule,
    PepperiSelectModule,
    PepperiSeparatorModule,
    PepperiSignatureModule,
    PepperiSizeDetectorModule,
    PepperiTextareaModule,
    PepperiTextboxModule,
    PepperiListModule
];


import {
    TranslateModule,
    TranslateLoader,
    TranslateService,
    MissingTranslationHandler,
    MissingTranslationHandlerParams
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

// export function createTranslateLoader(http: HttpClient, fileService: FileService) {
//     // let webappDirectory = sessionStorage.getItem('webappDirectory');
//     // webappDirectory = webappDirectory ? webappDirectory : '';
//     return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
// }

export function createTranslateLoader(http: HttpClient, fileService: FileService) {
    const translationsPath: string = fileService.getAssetsTranslationsPath();
    
    return new MultiTranslateHttpLoader(http, [
        {prefix: translationsPath, suffix: '.json'},
        {prefix: '/assets/i18n/', suffix: '.json'},
    ]);
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        PepperiModule,
        PepperiIconModule,
        pepperiComponentsModules,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient, FileService]
            }
        }),
    ],
    exports: [

    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {

    constructor(
        translate: TranslateService,
        private pepperiIconRegistry: PepperiIconRegistry
    ) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemBolt,
            pepperiIconNoImage
        ]);

        let userLang = 'en';
        translate.setDefaultLang(userLang);
        userLang = translate.getBrowserLang().split('-')[0]; // use navigator lang if available

        if (location.href.indexOf('userLang=en') > -1) {
            userLang = 'en';
        }

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(userLang).subscribe((res: any) => {
            // In here you can put the code you want. At this point the lang will be loaded
        });
    }
 }
