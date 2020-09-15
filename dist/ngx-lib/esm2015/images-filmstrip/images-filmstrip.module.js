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
import { PepperiIconModule, pepperiIconSystemEdit, pepperiIconSystemClose, pepperiIconArrowRightAlt, pepperiIconArrowLeftAlt } from '@pepperi-addons/ngx-lib/icon';
import { PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { GalleryModule } from '@ngx-gallery/core';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
// import { ImageViewerModule } from 'ngx-image-viewer';
import { PepperiImagesFilmstripComponent } from './images-filmstrip.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiImagesFilmstripModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemClose,
            pepperiIconArrowRightAlt,
            pepperiIconArrowLeftAlt
        ]);
    }
}
PepperiImagesFilmstripModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiImagesFilmstripModule });
PepperiImagesFilmstripModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiImagesFilmstripModule_Factory(t) { return new (t || PepperiImagesFilmstripModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiImagesFilmstripModule, { declarations: [PepperiImagesFilmstripComponent], imports: [CommonModule,
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
        PepperiDialogModule], exports: [PepperiImagesFilmstripComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiImagesFilmstripModule, [{
        type: NgModule,
        args: [{
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
                exports: [PepperiImagesFilmstripComponent],
                declarations: [PepperiImagesFilmstripComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLWZpbG1zdHJpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2ltYWdlcy1maWxtc3RyaXAvaW1hZ2VzLWZpbG1zdHJpcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQ0gsaUJBQWlCLEVBRWpCLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUMxQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCx3REFBd0Q7QUFFeEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOEJBQThCLENBQUM7OztBQTBDL0UsTUFBTSxPQUFPLDRCQUE0QjtJQUNyQyxZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1lBQ25DLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtTQUMxQixDQUFDLENBQUM7SUFDUCxDQUFDOztnRUFSUSw0QkFBNEI7dUlBQTVCLDRCQUE0QixxREF2QzVCO1lBQ0wsWUFBWTtZQUNaLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsOEJBQThCO1lBQzlCLCtFQUErRTtZQUMvRSx5RUFBeUU7WUFDekUsNEhBQTRIO1lBQzVILDBFQUEwRTtZQUMxRSx5SEFBeUg7WUFDekgsa0JBQWtCO1lBQ2xCLGdHQUFnRztZQUNoRyxnQ0FBZ0M7WUFDaEMsa0NBQWtDO1lBQ2xDLDJDQUEyQztZQUMzQyxnREFBZ0Q7WUFDaEQscUNBQXFDO1lBQ3JDLG9DQUFvQztZQUNwQyx5Q0FBeUM7WUFDekMsUUFBUTtZQUNSLE1BQU07WUFDTixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsbUJBQW1CO1NBQ3RCO3dGQUlRLDRCQUE0QixtQkFGckIsK0JBQStCLGFBcEMzQyxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQiw4QkFBOEI7UUFDOUIsK0VBQStFO1FBQy9FLHlFQUF5RTtRQUN6RSw0SEFBNEg7UUFDNUgsMEVBQTBFO1FBQzFFLHlIQUF5SDtRQUN6SCxrQkFBa0I7UUFDbEIsZ0dBQWdHO1FBQ2hHLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMsMkNBQTJDO1FBQzNDLGdEQUFnRDtRQUNoRCxxQ0FBcUM7UUFDckMsb0NBQW9DO1FBQ3BDLHlDQUF5QztRQUN6QyxRQUFRO1FBQ1IsTUFBTTtRQUNOLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixtQkFBbUIsYUFFWiwrQkFBK0I7a0RBR2pDLDRCQUE0QjtjQXhDeEMsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQiw4QkFBOEI7b0JBQzlCLCtFQUErRTtvQkFDL0UseUVBQXlFO29CQUN6RSw0SEFBNEg7b0JBQzVILDBFQUEwRTtvQkFDMUUseUhBQXlIO29CQUN6SCxrQkFBa0I7b0JBQ2xCLGdHQUFnRztvQkFDaEcsZ0NBQWdDO29CQUNoQyxrQ0FBa0M7b0JBQ2xDLDJDQUEyQztvQkFDM0MsZ0RBQWdEO29CQUNoRCxxQ0FBcUM7b0JBQ3JDLG9DQUFvQztvQkFDcEMseUNBQXlDO29CQUN6QyxRQUFRO29CQUNSLE1BQU07b0JBQ04sa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2QixtQkFBbUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRSxDQUFFLCtCQUErQixDQUFFO2dCQUM1QyxZQUFZLEVBQUUsQ0FBRSwrQkFBK0IsQ0FBRTthQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYic7XHJcbmltcG9ydCB7IFBlcHBlcmlGaWVsZFRpdGxlTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvZmllbGQtdGl0bGUnO1xyXG5pbXBvcnQge1xyXG4gICAgUGVwcGVyaUljb25Nb2R1bGUsXHJcbiAgICBQZXBwZXJpSWNvblJlZ2lzdHJ5LFxyXG4gICAgcGVwcGVyaUljb25TeXN0ZW1FZGl0LFxyXG4gICAgcGVwcGVyaUljb25TeXN0ZW1DbG9zZSxcclxuICAgIHBlcHBlcmlJY29uQXJyb3dSaWdodEFsdCxcclxuICAgIHBlcHBlcmlJY29uQXJyb3dMZWZ0QWx0XHJcbn0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvaWNvbic7XHJcbmltcG9ydCB7IFBlcHBlcmlEaWFsb2dNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9kaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgR2FsbGVyeU1vZHVsZSB9IGZyb20gJ0BuZ3gtZ2FsbGVyeS9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2VWaWV3ZXJNb2R1bGUgfSBmcm9tICdAaGFsbHlzb25oL25neC1pbWFnZXZpZXdlcic7XHJcbi8vIGltcG9ydCB7IEltYWdlVmlld2VyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLXZpZXdlcic7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpSW1hZ2VzRmlsbXN0cmlwQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZXMtZmlsbXN0cmlwLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXMsXHJcbiAgICAgICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgICAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICAvLyBFeHRlcm5hbCBtb2R1bGVzXHJcbiAgICAgICAgR2FsbGVyeU1vZHVsZSxcclxuICAgICAgICBJbWFnZVZpZXdlck1vZHVsZSxcclxuICAgICAgICAvLyBJbWFnZVZpZXdlck1vZHVsZS5mb3JSb290KHtcclxuICAgICAgICAvLyAgICAgYnRuQ2xhc3M6ICdkZWZhdWx0JywgLy8gVGhlIENTUyBjbGFzcyhlcykgdGhhdCB3aWxsIGFwcGx5IHRvIHRoZSBidXR0b25zXHJcbiAgICAgICAgLy8gICAgIHpvb21GYWN0b3I6IDAuMSwgLy8gVGhlIGFtb3VudCB0aGF0IHRoZSBzY2FsZSB3aWxsIGJlIGluY3JlYXNlZCBieVxyXG4gICAgICAgIC8vICAgICBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIC8vIFRoZSBjb2xvciB0byB1c2UgZm9yIHRoZSBiYWNrZ3JvdW5kLiBUaGlzIGNhbiBwcm92aWRlZCBpbiBoZXgsIG9yIHJnYihhKS5cclxuICAgICAgICAvLyAgICAgd2hlZWxab29tOiB0cnVlLCAvLyBJZiB0cnVlLCB0aGUgbW91c2Ugd2hlZWwgY2FuIGJlIHVzZWQgdG8gem9vbSBpblxyXG4gICAgICAgIC8vICAgICBhbGxvd0Z1bGxzY3JlZW46IGZhbHNlLCAvLyBJZiB0cnVlLCB0aGUgZnVsbHNjcmVlbiBidXR0b24gd2lsbCBiZSBzaG93biwgYWxsb3dpbmcgdGhlIHVzZXIgdG8gZW50ciBmdWxsc2NyZWVuIG1vZGVcclxuICAgICAgICAvLyAgICAgYnRuSWNvbnM6IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIFRoZSBpY29uIGNsYXNzZXMgdGhhdCB3aWxsIGFwcGx5IHRvIHRoZSBidXR0b25zLiBCeSBkZWZhdWx0LCBmb250LWF3ZXNvbWUgaXMgdXNlZC5cclxuICAgICAgICAvLyAgICAgICAgIHpvb21JbjogJ2ZhIGZhLXBsdXMnLFxyXG4gICAgICAgIC8vICAgICAgICAgem9vbU91dDogJ2ZhIGZhLW1pbnVzJyxcclxuICAgICAgICAvLyAgICAgICAgIHJvdGF0ZUNsb2Nrd2lzZTogJ2ZhIGZhLXJlcGVhdCcsXHJcbiAgICAgICAgLy8gICAgICAgICByb3RhdGVDb3VudGVyQ2xvY2t3aXNlOiAnZmEgZmEtdW5kbycsXHJcbiAgICAgICAgLy8gICAgICAgICBuZXh0OiAnZmEgZmEtYXJyb3ctcmlnaHQnLFxyXG4gICAgICAgIC8vICAgICAgICAgcHJldjogJ2ZhIGZhLWFycm93LWxlZnQnLFxyXG4gICAgICAgIC8vICAgICAgICAgZnVsbHNjcmVlbjogJ2ZhIGZhLWFycm93cy1hbHQnXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KSxcclxuICAgICAgICAvLyBQZXBwZXJpIG1vZHVsZXNcclxuICAgICAgICBQZXBwZXJpTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlJY29uTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlGaWVsZFRpdGxlTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlEaWFsb2dNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbIFBlcHBlcmlJbWFnZXNGaWxtc3RyaXBDb21wb25lbnQgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBQZXBwZXJpSW1hZ2VzRmlsbXN0cmlwQ29tcG9uZW50IF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpSW1hZ2VzRmlsbXN0cmlwTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVwcGVyaUljb25SZWdpc3RyeTogUGVwcGVyaUljb25SZWdpc3RyeSkge1xyXG4gICAgICAgIHRoaXMucGVwcGVyaUljb25SZWdpc3RyeS5yZWdpc3Rlckljb25zKFtcclxuICAgICAgICAgICAgcGVwcGVyaUljb25TeXN0ZW1FZGl0LFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblN5c3RlbUNsb3NlLFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvbkFycm93UmlnaHRBbHQsXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uQXJyb3dMZWZ0QWx0XHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuIl19