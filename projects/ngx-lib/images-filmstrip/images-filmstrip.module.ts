import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import {
    PepperiIconModule,
    PepperiIconRegistry,
    pepperiIconSystemEdit,
    pepperiIconSystemClose,
    pepperiIconArrowRightAlt,
    pepperiIconArrowLeftAlt
} from '@pepperi-addons/ngx-lib/icon';
import { PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';

import { GalleryModule } from '@ngx-gallery/core';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
// import { ImageViewerModule } from 'ngx-image-viewer';

import { PepperiImagesFilmstripComponent } from './images-filmstrip.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatDialogModule,
        MatIconModule,
        // External modules
        GalleryModule,
        ImageViewerModule,
        // ImageViewerModule.forRoot({
        //     btnClass: 'default', // The CSS class(es) that will apply to the buttons
        //     zoomFactor: 0.1, // The amount that the scale will be increased by
        //     containerBackgroundColor: 'transparent', // The color to use for the background. This can provided in hex, or rgb(a).
        //     wheelZoom: true, // If true, the mouse wheel can be used to zoom in
        //     allowFullscreen: false, // If true, the fullscreen button will be shown, allowing the user to entr fullscreen mode
        //     btnIcons: {
        //         // The icon classes that will apply to the buttons. By default, font-awesome is used.
        //         zoomIn: 'fa fa-plus',
        //         zoomOut: 'fa fa-minus',
        //         rotateClockwise: 'fa fa-repeat',
        //         rotateCounterClockwise: 'fa fa-undo',
        //         next: 'fa fa-arrow-right',
        //         prev: 'fa fa-arrow-left',
        //         fullscreen: 'fa fa-arrows-alt'
        //     }
        // }),
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiDialogModule
    ],
    exports: [ PepperiImagesFilmstripComponent ],
    declarations: [ PepperiImagesFilmstripComponent ],
})
export class PepperiImagesFilmstripModule {
    constructor(private pepperiIconRegistry: PepperiIconRegistry) {
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemClose,
            pepperiIconArrowRightAlt,
            pepperiIconArrowLeftAlt
        ]);
    }
}
