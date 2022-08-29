import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselExampleComponent } from './carousel-example/carousel-example.component';
import { DraggableExampleComponent } from './draggable-example/draggable-example.component';
import { QueryBuilderExampleComponent } from './query-builder-example/query-builder-example.component';
import { FormFieldsExampleComponent } from './form-fields-example/form-fields-example.component';
import { InlineListExampleComponent } from './inline-list-example/inline-list-example.component';
import { ListExampleComponent } from './list-example/list-example.component';
import { TopBarExampleComponent } from './top-bar-example/top-bar-example.component';
import { ChipsExampleComponent } from './chips-example/chips-example.component';
import { ExternalSourceDialogComponent } from './chips-example/external-source-dialog/external-source-dialog.component';

import { MaterialModule } from './modules/material.module';
import {
    PepAddonService,
    PepNgxLibModule,
} from '@pepperi-addons/ngx-lib';

import { PepAttachmentModule } from '@pepperi-addons/ngx-lib/attachment';
import { PepBreadCrumbsModule } from '@pepperi-addons/ngx-lib/bread-crumbs';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepCarouselModule } from '@pepperi-addons/ngx-lib/carousel';
import { PepCheckboxModule } from '@pepperi-addons/ngx-lib/checkbox';
import { PepColorModule } from '@pepperi-addons/ngx-lib/color';
import { PepDateModule } from '@pepperi-addons/ngx-lib/date';
import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { PepSnackBarModule } from '@pepperi-addons/ngx-lib/snack-bar';
import { PepGroupButtonsModule } from '@pepperi-addons/ngx-lib/group-buttons';
import { PepImageModule } from '@pepperi-addons/ngx-lib/image';
import { PepImagesFilmstripModule } from '@pepperi-addons/ngx-lib/images-filmstrip';
import { PepQuantitySelectorModule } from '@pepperi-addons/ngx-lib/quantity-selector';
import { PepRichHtmlTextareaModule } from '@pepperi-addons/ngx-lib/rich-html-textarea';
import { PepSearchModule } from '@pepperi-addons/ngx-lib/search';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepSliderModule } from '@pepperi-addons/ngx-lib/slider';
import { PepSeparatorModule } from '@pepperi-addons/ngx-lib/separator';
import { PepSideBarModule } from '@pepperi-addons/ngx-lib/side-bar';
import { PepSignatureModule } from '@pepperi-addons/ngx-lib/signature';
import { PepSizeDetectorModule } from '@pepperi-addons/ngx-lib/size-detector';
import { PepTextareaModule } from '@pepperi-addons/ngx-lib/textarea';
import { PepTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepListModule } from '@pepperi-addons/ngx-lib/list';
import { PepMenuModule } from '@pepperi-addons/ngx-lib/menu';
import { PepTopBarModule } from '@pepperi-addons/ngx-lib/top-bar';
import { PepPageLayoutModule } from '@pepperi-addons/ngx-lib/page-layout';
import { PepFormModule } from '@pepperi-addons/ngx-lib/form';
import { PepSmartFiltersModule } from '@pepperi-addons/ngx-lib/smart-filters';
import { PepQueryBuilderModule } from '@pepperi-addons/ngx-lib/query-builder';
import { PepDraggableItemsModule } from '@pepperi-addons/ngx-lib/draggable-items';
import { PepProfileDataViewsListModule } from '@pepperi-addons/ngx-lib/profile-data-views-list';
import { PepChipsModule } from '@pepperi-addons/ngx-lib/chips';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemBolt,
    pepIconNoImage,
    pepIconNoImage2,
    pepIconArrowTwoWaysVerT,
    pepIconArrowDown,
    pepIconArrowUp,
    pepIconArrowRightAlt,
    pepIconArrowLeftAlt,
    pepIconArrowDownAlt,
    pepIconArrowUpAlt,
    pepIconNumberNumber,
    pepIconNumberPlus,
    pepIconSystemBin,
    pepIconSystemEdit,
    pepIconSystemClose,
    pepIconSystemFilter,
    pepIconSystemMenu,
    pepIconSystemHome,
    pepIconSystemSettings,
    pepIconSystemQuestion,
    pepIconSystemAvatar,
    pepIconSystemDoor,
    pepIconSystemPrint,
    pepIconSystemSearch,
    pepIconSystemSpinner,
    pepIconSystemInfo,
    pepIconShoppingCart,
    pepIconTimeCal,
    pepIconViewCardLg,
    pepIconViewCardMd,
    pepIconViewCardSm,
    pepIconViewTable,
    pepIconViewMatrix,
    pepIconViewLine,
} from '@pepperi-addons/ngx-lib/icon';

const pepIcons = [
    pepIconSystemBolt,
    pepIconNoImage,
    pepIconNoImage2,
    pepIconArrowTwoWaysVerT,
    pepIconArrowDown,
    pepIconArrowUp,
    pepIconArrowRightAlt,
    pepIconArrowLeftAlt,
    pepIconArrowDownAlt,
    pepIconArrowUpAlt,
    pepIconNumberNumber,
    pepIconNumberPlus,
    pepIconSystemBin,
    pepIconSystemEdit,
    pepIconSystemClose,
    pepIconSystemFilter,
    pepIconSystemMenu,
    pepIconSystemHome,
    pepIconSystemSettings,
    pepIconSystemQuestion,
    pepIconSystemAvatar,
    pepIconSystemDoor,
    pepIconSystemPrint,
    pepIconSystemSearch,
    pepIconSystemSpinner,
    pepIconSystemInfo,
    pepIconShoppingCart,
    pepIconTimeCal,
    pepIconViewCardLg,
    pepIconViewCardMd,
    pepIconViewCardSm,
    pepIconViewTable,
    pepIconViewMatrix,
    pepIconViewLine,
];
const pepperiComponentsModules = [
    PepAttachmentModule,
    PepCarouselModule,
    PepBreadCrumbsModule,
    PepButtonModule,
    PepCheckboxModule,
    PepColorModule,
    PepDateModule,
    PepDialogModule,
    PepSnackBarModule,
    PepGroupButtonsModule,
    PepImageModule,
    PepImagesFilmstripModule,
    PepListModule,
    PepCheckboxModule,
    PepQuantitySelectorModule,
    PepRichHtmlTextareaModule,
    PepSearchModule,
    PepSelectModule,
    PepSeparatorModule,
    PepSliderModule,
    PepSideBarModule,
    PepSignatureModule,
    PepSizeDetectorModule,
    PepTextareaModule,
    PepTextboxModule,
    PepIconModule,
    PepMenuModule,
    PepTopBarModule,
    PepPageLayoutModule,
    PepSmartFiltersModule,
    PepQueryBuilderModule,
    PepDraggableItemsModule,
    PepProfileDataViewsListModule,
    PepChipsModule,
    PepFormModule
];

@NgModule({
    declarations: [
        AppComponent,
        CarouselExampleComponent,
        DraggableExampleComponent,
        QueryBuilderExampleComponent,
        FormFieldsExampleComponent,
        InlineListExampleComponent,
        ListExampleComponent,
        TopBarExampleComponent,
        ChipsExampleComponent,
        ExternalSourceDialogComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PepNgxLibModule,
        // PepUIModule,
        MaterialModule,
        pepperiComponentsModules,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,                
                useFactory: (addonService: PepAddonService) => 
                PepAddonService.createMultiTranslateLoader('', addonService, ['ngx-lib']),
                deps: [PepAddonService]
            },
        }), 
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(
        translate: TranslateService,
        private pepIconRegistry: PepIconRegistry,
        private pepAddonService: PepAddonService

    ) {
        this.pepIconRegistry.registerIcons(pepIcons);
        this.pepAddonService.setDefaultTranslateLang(translate);
    }
}
