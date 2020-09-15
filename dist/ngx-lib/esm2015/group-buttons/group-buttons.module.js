import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconArrowUp, pepperiIconArrowDown } from '@pepperi-addons/ngx-lib/icon';
import { GroupButtonsComponent } from './group-buttons.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiGroupButtonsModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconArrowUp,
            pepperiIconArrowDown
        ]);
    }
}
PepperiGroupButtonsModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiGroupButtonsModule });
PepperiGroupButtonsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiGroupButtonsModule_Factory(t) { return new (t || PepperiGroupButtonsModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules
            MatCommonModule,
            MatFormFieldModule,
            MatButtonModule,
            MatMenuModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiGroupButtonsModule, { declarations: [GroupButtonsComponent], imports: [CommonModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule], exports: [GroupButtonsComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiGroupButtonsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules
                    MatCommonModule,
                    MatFormFieldModule,
                    MatButtonModule,
                    MatMenuModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule
                ],
                exports: [GroupButtonsComponent],
                declarations: [GroupButtonsComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtYnV0dG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2dyb3VwLWJ1dHRvbnMvZ3JvdXAtYnV0dG9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQXVCLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFaEksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQWtCbEUsTUFBTSxPQUFPLHlCQUF5QjtJQUNsQyxZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1lBQ25DLGtCQUFrQjtZQUNsQixvQkFBb0I7U0FDdkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7NkRBTlEseUJBQXlCO2lJQUF6Qix5QkFBeUIscURBZnpCO1lBQ0wsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixhQUFhO1lBQ2IsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1NBQ3BCO3dGQUlRLHlCQUF5QixtQkFGbEIscUJBQXFCLGFBWmpDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsYUFBYTtRQUNiLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGlCQUFpQixhQUVWLHFCQUFxQjtrREFHdkIseUJBQXlCO2NBaEJyQyxRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsZUFBZTtvQkFDZixhQUFhO29CQUNiLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGlCQUFpQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUUscUJBQXFCLENBQUU7Z0JBQ2xDLFlBQVksRUFBRSxDQUFFLHFCQUFxQixDQUFFO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE1hdENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5pbXBvcnQgeyBQZXBwZXJpSWNvbk1vZHVsZSwgUGVwcGVyaUljb25SZWdpc3RyeSwgcGVwcGVyaUljb25BcnJvd1VwLCBwZXBwZXJpSWNvbkFycm93RG93biB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgR3JvdXBCdXR0b25zQ29tcG9uZW50IH0gZnJvbSAnLi9ncm91cC1idXR0b25zLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICAvLyBNYXRlcmlhbCBtb2R1bGVzXHJcbiAgICAgICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcclxuICAgICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICAgIC8vIFBlcHBlcmkgbW9kdWxlc1xyXG4gICAgICAgIFBlcHBlcmlNb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaUljb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbIEdyb3VwQnV0dG9uc0NvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIEdyb3VwQnV0dG9uc0NvbXBvbmVudCBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaUdyb3VwQnV0dG9uc01vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcHBlcmlJY29uUmVnaXN0cnk6IFBlcHBlcmlJY29uUmVnaXN0cnkpIHtcclxuICAgICAgICB0aGlzLnBlcHBlcmlJY29uUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uQXJyb3dVcCxcclxuICAgICAgICAgICAgcGVwcGVyaUljb25BcnJvd0Rvd25cclxuICAgICAgICBdKTtcclxuICAgIH1cclxufVxyXG4iXX0=