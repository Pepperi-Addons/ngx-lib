import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { httpInterceptorProviders } from './core/http/interceptors/index';

import { PepClipboardDirective } from './core/clipboard/clipboard.directive';
const clipboardList = [PepClipboardDirective];

import {
    PepRtlClassDirective,
    PepRtlDirectionDirective,
} from './core/layout/rtl.directive';
const layoutList = [PepRtlClassDirective, PepRtlDirectionDirective];

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
    PepToNumberPipe,
} from './core/common/pipes/common-pipes';

import { DateAgoPipe } from './core/common/pipes/date-ago.pipe';

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
    PepToNumberPipe,
    DateAgoPipe
];

import { PepInputAutoWidthDirective } from './core/common/directives/auto-width.directive';
import { PepButtonBlurDirective } from './core/common/directives/button-blur.directive';
import { PepButtonLoaderDirective } from './core/common/directives/button-loader.directive';
import { PepMenuBlurDirective } from './core/common/directives/menu-blur.directive';
import { PepDataQaDirective } from './core/common/directives/data-qa.directive';
// import { PreventDoubleClickDirective } from './core/common/directives/debounce-click.directive';
import { PepPreventMultiClickDirective } from './core/common/directives/prevent-multi-click.directive';
import { PepPrintDirective } from './core/common/directives/print.directive';
import { PepDivLoaderDirective } from './core/common/directives/div-loader.directive';

const utilitiesList = [
    PepInputAutoWidthDirective,
    PepButtonBlurDirective,
    PepButtonLoaderDirective,
    PepMenuBlurDirective,
    PepDataQaDirective,
    // PreventDoubleClickDirective,
    PepPreventMultiClickDirective,
    PepPrintDirective,
    PepDivLoaderDirective,
];

import { PepAttachDirective } from './core/portal/attach.directive';
import { PepTargetDirective } from './core/portal/target.directive';

const portalList = [PepAttachDirective, PepTargetDirective];

import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { 
    PepAddonService,
    PepColorService,
    PepCookieService,
    PepDataConvertorService,
    PepFileService,
    PepJwtHelperService,
    PepSessionService,
    PepTranslateService,
    PepUtilitiesService,
    PepValidatorService,
    PepWindowScrollingService,
    PepCustomizationService,
    PepHttpService,
    PepLoaderService,
    PepLayoutService,
    PepPortalService,
    PepScrollToService,
} from './core/index';

@NgModule({
    declarations: [
        pipeList,
        utilitiesList,
        clipboardList,
        layoutList,
        portalList,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    exports: [
        pipeList,
        utilitiesList,
        clipboardList,
        layoutList,
        portalList,
        TranslateModule,
    ],
    providers: [
        httpInterceptorProviders,
        PepAddonService,
        PepColorService,
        PepCookieService,
        PepDataConvertorService,
        PepFileService,
        PepJwtHelperService,
        PepSessionService,
        PepTranslateService,
        PepUtilitiesService,
        PepValidatorService,
        PepWindowScrollingService,
        PepCustomizationService,
        PepHttpService,
        PepLoaderService,
        PepLayoutService,
        PepPortalService,
        PepScrollToService,
        FormBuilder
    ]
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
