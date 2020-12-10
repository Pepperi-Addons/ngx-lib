import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { httpInterceptorProviders } from './core/http/interceptors/index';

import { ClipboardDirective } from './core/clipboard/clipboard.directive';
const clipboardList = [
    ClipboardDirective,
];

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
import { ButtonLoaderDirective } from './core/common/directives/button-loader.directive';
import { MenuBlurDirective } from './core/common/directives/menu-blur.directive';
import { DataQaDirective } from './core/common/directives/data-qa.directive';
// import { PreventDoubleClickDirective } from './core/common/directives/debounce-click.directive';
import { PreventMultiClickDirective } from './core/common/directives/prevent-multi-click.directive';

const utilitiesList = [
    ButtonBlurDirective,
    ButtonLoaderDirective,
    MenuBlurDirective,
    DataQaDirective,
    // PreventDoubleClickDirective,
    PreventMultiClickDirective,
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
        clipboardList,
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
        clipboardList,
        layoutList,
        portalList,
        TranslateModule
    ],
})
export class PepNgxLibModule {
    // static forRoot(): ModuleWithProviders<PepNgxLibModule> {
    //     return {
    //         ngModule: PepNgxLibModule,
    //         providers: [CustomizationService]
    //     };
    // }

    // static forRoot() {
    //     return {
    //       ngModule: PepNgxLibModule,
    //       providers: [ CustomizationService ]
    //     }
    // }
}
