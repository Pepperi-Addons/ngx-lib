import { PepTextboxComponent, PepTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { PepNgxLibModule, PepFileService } from '@pepperi-addons/ngx-lib';
import { createCustomElement } from '@angular/elements';
import {
    PepIconModule, PepIconRegistry,
    pepIconSystemBolt,
    pepIconNoImage
} from '@pepperi-addons/ngx-lib/icon';
import { PepDataConvertorService } from '@pepperi-addons/ngx-lib';

import { PepAttachmentComponent, PepAttachmentModule } from '@pepperi-addons/ngx-lib/attachment';
import { PepCheckboxComponent, PepCheckboxModule } from '@pepperi-addons/ngx-lib/checkbox';
import { PepColorComponent, PepColorModule } from '@pepperi-addons/ngx-lib/color';
import { PepDateComponent, PepDateModule } from '@pepperi-addons/ngx-lib/date';
import { PepGroupButtonsModule } from '@pepperi-addons/ngx-lib/group-buttons';
import { PepImageComponent, PepImageModule } from '@pepperi-addons/ngx-lib/image';
import { PepImagesFilmstripModule, PepImagesFilmstripComponent } from '@pepperi-addons/ngx-lib/images-filmstrip';
// import { PepInternalButtonComponent, PepInternalButtonModule } from '@pepperi-addons/ngx-lib/internal-button';
import { PepMenuComponent, PepMenuModule } from '@pepperi-addons/ngx-lib/menu';
import { PepQuantitySelectorComponent, PepQuantitySelectorModule } from '@pepperi-addons/ngx-lib/quantity-selector';
import {
    PepRichHtmlTextareaComponent,
    // PepRichHtmlTextareaModule
} from '@pepperi-addons/ngx-lib/rich-html-textarea';
import { PepSelectComponent, PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepSeparatorComponent, PepSeparatorModule } from '@pepperi-addons/ngx-lib/separator';
import { PepSignatureComponent, PepSignatureModule } from '@pepperi-addons/ngx-lib/signature';
import { PepTextareaComponent, PepTextareaModule } from '@pepperi-addons/ngx-lib/textarea';
import { PepSizeDetectorModule } from '@pepperi-addons/ngx-lib/size-detector';

import {
    TranslateModule, TranslateLoader,
    TranslateService
} from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import * as ElementsDictionary from './ngx-lib-dictionary.json';

export function createTranslateLoader(http: HttpClient, PepFileService: PepFileService) {
    const translationsPath: string = PepFileService.getAssetsTranslationsPath();

    return new MultiTranslateHttpLoader(http, [
        { prefix: translationsPath, suffix: '.json' },
        { prefix: '/assets/i18n/', suffix: '.json' },
    ]);
}

const pepperiComponentsModules = [
    PepAttachmentModule,
    PepCheckboxModule,
    PepColorModule,
    PepDateModule,
    PepGroupButtonsModule,
    PepImageModule,
    PepImagesFilmstripModule,
    // PepInternalButtonModule,
    PepMenuModule,
    PepQuantitySelectorModule,
    // PepRichHtmlTextareaModule,
    PepSelectModule,
    PepSeparatorModule,
    PepSignatureModule,
    PepSizeDetectorModule,
    PepTextareaModule,
    PepTextboxModule
];
@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        PepNgxLibModule,
        pepperiComponentsModules,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient, PepFileService]
            }
        })
    ],
    providers: []
})
export class AppModule {
    constructor(
        translate: TranslateService,
        private injector: Injector
    ) {
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

    ngDoBootstrap() {
        const textboxElement = createCustomElement(PepTextboxComponent, { injector: this.injector });
        customElements.define('pep-textbox', textboxElement);
        const attachmentElement = createCustomElement(PepAttachmentComponent, { injector: this.injector });
        customElements.define('pep-attachment', attachmentElement);
        const checkboxElement = createCustomElement(PepCheckboxComponent, { injector: this.injector });
        customElements.define('pep-checkbox', checkboxElement);
        const colorElement = createCustomElement(PepColorComponent, { injector: this.injector });
        customElements.define('pep-color', colorElement);
        const dateElement = createCustomElement(PepDateComponent, { injector: this.injector });
        customElements.define('pep-date', dateElement);
        const imageElement = createCustomElement(PepImageComponent, { injector: this.injector });
        customElements.define('pep-image', imageElement);
        const imagesFilmstripElement = createCustomElement(PepImagesFilmstripComponent, { injector: this.injector });
        customElements.define('pep-images-filmstrip', imagesFilmstripElement);
        // const internalButtonElement = createCustomElement(PepInternalButtonComponent, { injector: this.injector });
        // customElements.define('pep-internal-button', internalButtonElement);
        const menuElement = createCustomElement(PepMenuComponent, { injector: this.injector });
        customElements.define('pep-menu', menuElement);
        const quantitySelectorElement = createCustomElement(PepQuantitySelectorComponent, { injector: this.injector });
        customElements.define('pep-quantity-selector', quantitySelectorElement);
        // const richTextElement = createCustomElement(PepRichHtmlTextareaComponent, { injector: this.injector });
        // customElements.define('pep-rich-html-textarea', richTextElement);
        const selectElement = createCustomElement(PepSelectComponent, { injector: this.injector });
        customElements.define('pep-select', selectElement);
        const separatorElement = createCustomElement(PepSeparatorComponent, { injector: this.injector });
        customElements.define('pep-separator', separatorElement);
        const signatureElement = createCustomElement(PepSignatureComponent, { injector: this.injector });
        customElements.define('pep-signature', signatureElement);
        const textareaElement = createCustomElement(PepTextareaComponent, { injector: this.injector });
        customElements.define('pep-textarea', textareaElement);

    }
}

