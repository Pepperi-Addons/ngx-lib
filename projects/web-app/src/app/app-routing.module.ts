import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListExampleComponent } from './list-example/pepperi-list-example.component';
import { FormFieldsExampleComponent } from './form-fields-example/form-fields-example.component'
import { TopBarExampleComponent } from './top-bar-example/top-bar-example.component'
import { EmptyRouteComponent } from './empty-route/empty-route.component';
// import * as config from '../../../addon.config.json';

const routes: Routes = [
    {
        path: `form-fields-example`,
        component: FormFieldsExampleComponent
    },
    {
        path: `list-example`,
        component: ListExampleComponent
    },
    {
        path: `top-bar-example`,
        component: TopBarExampleComponent
    },
    {
        path: '**',
        component: FormFieldsExampleComponent
    },
    // {
    //     path: '**',
    //     component: EmptyRouteComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
