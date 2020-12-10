import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PepperiListExampleComponent } from './pepperi-list-example/pepperi-list-example.component';
import { PepperiNgxLibExamplesComponent } from './pepperi-ngx-lib-examples/pepperi-ngx-lib-examples.component'
import { EmptyRouteComponent } from './empty-route/empty-route.component';
// import * as config from '../../../addon.config.json';

const routes: Routes = [
    {
        path: `ngx-lib-components`,
        component: PepperiNgxLibExamplesComponent
    },
    {
        path: `ngx-lib-list`,
        component: PepperiListExampleComponent
    },
    // {
    //     path: '**',
    //     component: EmptyRouteComponent
    // }
    {
        path: '**',
        component: PepperiNgxLibExamplesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
