import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { httpInterceptorProviders } from './core/http/interceptors/index';

import { RtlClassDirective, RtlDirectionDirective } from './core/layout/rtl.directive';
const layoutList = [
    RtlClassDirective,
    RtlDirectionDirective,
];

import {
    CapitalizePipe,
    EncodePipe,
    EscapePipe,
    ReplaceLineBreaks,
    DateFormatter,
    DateStringFormatter,
    SafeHtmlPipe,
    SafePipe,
    SplitUppercase,
    ToNumber
} from './core/common/pipes/common-pipes';
const pipeList = [
    CapitalizePipe,
    EncodePipe,
    EscapePipe,
    ReplaceLineBreaks,
    DateFormatter,
    DateStringFormatter,
    SafeHtmlPipe,
    SafePipe,
    SplitUppercase,
    ToNumber
];

import { ButtonBlurDirective } from './core/common/directives/button-blur.directive';
import { MenuBlurDirective } from './core/common/directives/menu-blur.directive';
const utilitiesList = [
    ButtonBlurDirective,
    MenuBlurDirective
];

import { AttachDirective } from './core/portal/attach.directive';
import { TargetDirective } from './core/portal/target.directive';

const portalList = [
    AttachDirective,
    TargetDirective
];

import {
    TranslateModule,
    // TranslateLoader,
    // TranslateService,
    // MissingTranslationHandler,
    // MissingTranslationHandlerParams
} from '@ngx-translate/core';

// export class Loader implements TranslateLoader {
//     private translations = new Subject();
    
//     $translations = this.translations.asObservable();
//     getTranslation(lang: string) {
//         console.log(`called with ${lang}`);
//         return this.$translations;
//     }
// }

// export class Missing implements MissingTranslationHandler {
//     handle(params: MissingTranslationHandlerParams) {
//         return 'missing in libary...';
//     }
// }

// export function LoaderFactory() {
//     return new Loader();
// }

@NgModule({
    declarations: [
        pipeList,
        utilitiesList,
        layoutList,
        portalList
    ],
    providers: [
        httpInterceptorProviders, 
        // TranslateService
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        // TranslateModule.forChild({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: LoaderFactory
        //     },
        //     missingTranslationHandler: {
        //         provide: MissingTranslationHandler,
        //         useClass: Missing
        //     }
        // }),
    ],
    exports: [
        pipeList,
        utilitiesList,
        layoutList,
        portalList,
        TranslateModule
    ],
})
export class PepperiModule {
    // static forRoot(): ModuleWithProviders<PepperiModule> {
    //     return {
    //         ngModule: PepperiModule,
    //         providers: [CustomizationService]
    //     };
    // }

    // static forRoot() {
    //     return {
    //       ngModule: PepperiModule,
    //       providers: [ CustomizationService ]
    //     }
    // }
}
