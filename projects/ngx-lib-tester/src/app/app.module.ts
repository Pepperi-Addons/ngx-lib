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
import { MaterialModule } from './modules/material.module';
import { PepUIModule } from './modules/pepperi.module';

@NgModule({
    declarations: [
        AppComponent,
        CarouselExampleComponent,
        DraggableExampleComponent,
        QueryBuilderExampleComponent,
        FormFieldsExampleComponent,
        InlineListExampleComponent,
        ListExampleComponent,
        TopBarExampleComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PepUIModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    //
}
