import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselExampleComponent } from './carousel-example/carousel-example.component';
import { DraggableExampleComponent } from './draggable-example/draggable-example.component';
import { ListExampleComponent } from './list-example/list-example.component';
import { QueryBuilderExampleComponent } from './query-builder-example/query-builder-example.component';
import { InlineListExampleComponent } from './inline-list-example/inline-list-example.component';
import { FormFieldsExampleComponent } from './form-fields-example/form-fields-example.component';
import { TopBarExampleComponent } from './top-bar-example/top-bar-example.component';
import { OtherFieldsExampleComponent } from './other-fields-example/other-fields-example.component';
import { KofExampleComponent } from './kof-example/kof-example.component';
// import * as config from '../../../addon.config.json';

const routes: Routes = [
    {
        path: `carousel-example`,
        component: CarouselExampleComponent,
    },
    {
        path: `draggable-example`,
        component: DraggableExampleComponent,
    },
    {
        path: `form-fields-example`,
        component: FormFieldsExampleComponent,
    },
    {
        path: `other-fields-example`,
        component: OtherFieldsExampleComponent,
    },
    {
        path: `list-example`,
        component: ListExampleComponent,
    },
    {
        path: `query-builder-example`,
        component: QueryBuilderExampleComponent,
    },
    {
        path: `inline-list-example`,
        component: InlineListExampleComponent
    }, 
    {
        path: `top-bar-example`,
        component: TopBarExampleComponent,
    },
    {
        path: `kof-example`,
        component: KofExampleComponent,
    },
    {
        path: '**',
        component: FormFieldsExampleComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {
    //
}
