import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { httpInterceptorProviders } from './core/http/interceptors/index';

import { PepClipboardDirective } from './core/clipboard/clipboard.directive';
const clipboardList = [
    PepClipboardDirective,
];

import { PepRtlClassDirective, PepRtlDirectionDirective } from './core/layout/rtl.directive';
const layoutList = [
    PepRtlClassDirective,
    PepRtlDirectionDirective,
];

import {
    PepCapitalizePipe,
    PepEncodePipe,
    PepEscapePipe,
    PepReplaceLineBreaksPipe,
    PepDateFormatterPipe,
    PepDateStringFormatterPipe,
    PepSafeHtmlPipe,
    PepSafePipe,
    PepSplitUppercasePipe,
    PepToNumberPipe
} from './core/common/pipes/common-pipes';
const pipeList = [
    PepCapitalizePipe,
    PepEncodePipe,
    PepEscapePipe,
    PepReplaceLineBreaksPipe,
    PepDateFormatterPipe,
    PepDateStringFormatterPipe,
    PepSafeHtmlPipe,
    PepSafePipe,
    PepSplitUppercasePipe,
    PepToNumberPipe
];

import { PepButtonBlurDirective } from './core/common/directives/button-blur.directive';
import { PepButtonLoaderDirective } from './core/common/directives/button-loader.directive';
import { PepMenuBlurDirective } from './core/common/directives/menu-blur.directive';
import { PepDataQaDirective } from './core/common/directives/data-qa.directive';
// import { PreventDoubleClickDirective } from './core/common/directives/debounce-click.directive';
import { PepPreventMultiClickDirective } from './core/common/directives/prevent-multi-click.directive';

const utilitiesList = [
    PepButtonBlurDirective,
    PepButtonLoaderDirective,
    PepMenuBlurDirective,
    PepDataQaDirective,
    // PreventDoubleClickDirective,
    PepPreventMultiClickDirective,
];

import { PepAttachDirective } from './core/portal/attach.directive';
import { PepTargetDirective } from './core/portal/target.directive';

const portalList = [
    PepAttachDirective,
    PepTargetDirective
];

import {
    TranslateModule,
    // TranslateLoader,
    // TranslateService,
    // MissingTranslationHandler,
    // MissingTranslationHandlerParams
} from '@ngx-translate/core';
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
    //         providers: [PepCustomizationService]
    //     };
    // }

    // static forRoot() {
    //     return {
    //       ngModule: PepNgxLibModule,
    //       providers: [ PepCustomizationService ]
    //     }
    // }
}
