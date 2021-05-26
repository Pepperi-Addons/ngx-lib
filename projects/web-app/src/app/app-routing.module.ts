import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselExampleComponent } from './carousel-example/carousel-example.component';
import { ListExampleComponent } from './list-example/list-example.component';
import { InlineListExampleComponent } from './inline-list-example/inline-list-example.component';
import { FormFieldsExampleComponent } from './form-fields-example/form-fields-example.component';
import { TopBarExampleComponent } from './top-bar-example/top-bar-example.component';
// import * as config from '../../../addon.config.json';

const routes: Routes = [
    {
        path: `carousel-example`,
        component: CarouselExampleComponent,
    },
    {
        path: `form-fields-example`,
        component: FormFieldsExampleComponent,
    },
    {
        path: `list-example`,
        component: ListExampleComponent,
    },
    {
        path: `inline-list-example`,
        component: InlineListExampleComponent
    }, {
        path: `top-bar-example`,
        component: TopBarExampleComponent,
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
export class AppRoutingModule { }
