import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepMenuModule } from '@pepperi-addons/ngx-lib/menu';
import { PepTopBarModule } from '@pepperi-addons/ngx-lib/top-bar';

import { ProfileDataViewsListComponent } from './profile-data-views-list.component';
import { ProfileDataViewsCardComponent } from './profile-data-views-card/profile-data-views-card.component';
import { ProfileDataViewComponent } from './profile-data-view/profile-data-view.component';

import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemEdit,
    pepIconSystemMenu,
} from '@pepperi-addons/ngx-lib/icon';

@NgModule({
    declarations: [
        ProfileDataViewsListComponent,
        ProfileDataViewsCardComponent,
        ProfileDataViewComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        // Material modules,
        MatDialogModule,
        MatMenuModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepButtonModule,
        PepDialogModule,
        PepSelectModule,
        PepMenuModule,
        PepIconModule,
        PepTopBarModule,
    ],
    exports: [
        ProfileDataViewsListComponent,
        ProfileDataViewsCardComponent,
        ProfileDataViewComponent
    ],
})
export class PepProfileDataViewsListModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemEdit,
            pepIconSystemMenu,
        ]);
    }
}
