import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemEdit,
    pepIconSystemClose,
    pepIconArrowRightAlt,
    pepIconArrowLeftAlt,
} from '@pepperi-addons/ngx-lib/icon';
import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { GalleryModule } from 'ng-gallery';

import { PepImagesFilmstripComponent } from './images-filmstrip.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatDialogModule,
        MatIconModule,
        // External modules
        GalleryModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepButtonModule,
        PepIconModule,
        PepFieldTitleModule,
        PepDialogModule,
    ],
    exports: [PepImagesFilmstripComponent],
    declarations: [PepImagesFilmstripComponent],
})
export class PepImagesFilmstripModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemEdit,
            pepIconSystemClose,
            pepIconArrowRightAlt,
            pepIconArrowLeftAlt,
        ]);
    }
}
