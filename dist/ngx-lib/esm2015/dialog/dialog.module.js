import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemClose } from '@pepperi-addons/ngx-lib/icon';
import { PepperiDefaultDialogComponent } from './dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiDialogModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemClose
        ]);
    }
}
PepperiDialogModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiDialogModule });
PepperiDialogModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiDialogModule_Factory(t) { return new (t || PepperiDialogModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatIconModule,
            MatDialogModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiDialogModule, { declarations: [PepperiDefaultDialogComponent], imports: [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiDialogModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    // Material modules,
                    MatCommonModule,
                    MatButtonModule,
                    MatIconModule,
                    MatDialogModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule
                ],
                exports: [],
                declarations: [PepperiDefaultDialogComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvZGlhbG9nL2RpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUF1QixzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTlHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFtQm5FLE1BQU0sT0FBTyxtQkFBbUI7SUFDNUIsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztZQUNuQyxzQkFBc0I7U0FDekIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7dURBTFEsbUJBQW1CO3FIQUFuQixtQkFBbUIscURBaEJuQjtZQUNMLFlBQVk7WUFDWixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsZUFBZTtZQUNmLGFBQWE7WUFDYixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixpQkFBaUI7U0FDcEI7d0ZBSVEsbUJBQW1CLG1CQUZiLDZCQUE2QixhQWJ4QyxZQUFZO1FBQ1osYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGVBQWU7UUFDZixhQUFhO1FBQ2IsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsaUJBQWlCO2tEQUtaLG1CQUFtQjtjQWpCL0IsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO29CQUNiLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGlCQUFpQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFLEVBQUc7Z0JBQ1osWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuXHJcbmltcG9ydCB7IE1hdENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5pbXBvcnQgeyBQZXBwZXJpSWNvbk1vZHVsZSwgUGVwcGVyaUljb25SZWdpc3RyeSwgcGVwcGVyaUljb25TeXN0ZW1DbG9zZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaURlZmF1bHREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgICAgICAvLyBNYXRlcmlhbCBtb2R1bGVzLFxyXG4gICAgICAgIE1hdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICAgICAgLy8gUGVwcGVyaSBtb2R1bGVzXHJcbiAgICAgICAgUGVwcGVyaU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpSWNvbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFsgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1BlcHBlcmlEZWZhdWx0RGlhbG9nQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlEaWFsb2dNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXBwZXJpSWNvblJlZ2lzdHJ5OiBQZXBwZXJpSWNvblJlZ2lzdHJ5KSB7XHJcbiAgICAgICAgdGhpcy5wZXBwZXJpSWNvblJlZ2lzdHJ5LnJlZ2lzdGVySWNvbnMoW1xyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblN5c3RlbUNsb3NlXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuIl19