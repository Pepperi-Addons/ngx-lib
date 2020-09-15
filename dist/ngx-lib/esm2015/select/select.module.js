import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemEdit } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiSelectComponent } from './select.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiSelectModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit
        ]);
    }
}
PepperiSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiSelectModule });
PepperiSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiSelectModule_Factory(t) { return new (t || PepperiSelectModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatSelectModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiSelectModule, { declarations: [PepperiSelectComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule], exports: [PepperiSelectComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiSelectModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules
                    MatCommonModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatSelectModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule
                ],
                exports: [PepperiSelectComponent,],
                declarations: [PepperiSelectComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvc2VsZWN0L3NlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUF1QixxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7QUFxQjNELE1BQU0sT0FBTyxtQkFBbUI7SUFDNUIsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztZQUNuQyxxQkFBcUI7U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7dURBTFEsbUJBQW1CO3FIQUFuQixtQkFBbUIscURBbEJuQjtZQUNMLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLHVCQUF1QjtTQUMxQjt3RkFJUSxtQkFBbUIsbUJBRmIsc0JBQXNCLGFBZmpDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHVCQUF1QixhQUVqQixzQkFBc0I7a0RBR3ZCLG1CQUFtQjtjQW5CL0IsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQix1QkFBdUI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFHO2dCQUNuQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE1hdENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgUGVwcGVyaUljb25Nb2R1bGUsIFBlcHBlcmlJY29uUmVnaXN0cnksIHBlcHBlcmlJY29uU3lzdGVtRWRpdCB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ljb24nO1xyXG5pbXBvcnQgeyBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ZpZWxkLXRpdGxlJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlTZWxlY3RDb21wb25lbnR9IGZyb20gJy4vc2VsZWN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXNcclxuICAgICAgICBNYXRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgICAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICAvLyBQZXBwZXJpIG1vZHVsZXNcclxuICAgICAgICBQZXBwZXJpTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlJY29uTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlGaWVsZFRpdGxlTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1BlcHBlcmlTZWxlY3RDb21wb25lbnQsIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtQZXBwZXJpU2VsZWN0Q29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlTZWxlY3RNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXBwZXJpSWNvblJlZ2lzdHJ5OiBQZXBwZXJpSWNvblJlZ2lzdHJ5KSB7XHJcbiAgICAgICAgdGhpcy5wZXBwZXJpSWNvblJlZ2lzdHJ5LnJlZ2lzdGVySWNvbnMoW1xyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblN5c3RlbUVkaXRcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufVxyXG4iXX0=