import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemEdit, pepperiIconSystemMenu, pepperiIconNumberPlus } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiGroupButtonsModule } from '@pepperi-addons/ngx-lib/group-buttons';
import { PepperiInternalButtonComponent } from './internal-button.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiInternalButtonModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemMenu,
            pepperiIconNumberPlus
        ]);
    }
}
PepperiInternalButtonModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiInternalButtonModule });
PepperiInternalButtonModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiInternalButtonModule_Factory(t) { return new (t || PepperiInternalButtonModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules,
            MatFormFieldModule,
            MatCommonModule,
            MatButtonModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiGroupButtonsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiInternalButtonModule, { declarations: [PepperiInternalButtonComponent], imports: [CommonModule,
        // Material modules,
        MatFormFieldModule,
        MatCommonModule,
        MatButtonModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiGroupButtonsModule], exports: [PepperiInternalButtonComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiInternalButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules,
                    MatFormFieldModule,
                    MatCommonModule,
                    MatButtonModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiGroupButtonsModule
                ],
                exports: [PepperiInternalButtonComponent],
                declarations: [PepperiInternalButtonComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvaW50ZXJuYWwtYnV0dG9uL2ludGVybmFsLWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFDSCxpQkFBaUIsRUFFakIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDeEIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVsRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBbUI3RSxNQUFNLE9BQU8sMkJBQTJCO0lBQ3BDLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7WUFDbkMscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQixxQkFBcUI7U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7K0RBUFEsMkJBQTJCO3FJQUEzQiwyQkFBMkIscURBaEIzQjtZQUNMLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixlQUFlO1lBQ2YsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLHVCQUF1QjtZQUN2Qix5QkFBeUI7U0FDNUI7d0ZBSVEsMkJBQTJCLG1CQUZwQiw4QkFBOEIsYUFiMUMsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGVBQWU7UUFDZixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHlCQUF5QixhQUVsQiw4QkFBOEI7a0RBR2hDLDJCQUEyQjtjQWpCdkMsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsOEJBQThCLENBQUU7Z0JBQzNDLFlBQVksRUFBRSxDQUFFLDhCQUE4QixDQUFFO2FBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE1hdENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHtcclxuICAgIFBlcHBlcmlJY29uTW9kdWxlLFxyXG4gICAgUGVwcGVyaUljb25SZWdpc3RyeSxcclxuICAgIHBlcHBlcmlJY29uU3lzdGVtRWRpdCxcclxuICAgIHBlcHBlcmlJY29uU3lzdGVtTWVudSxcclxuICAgIHBlcHBlcmlJY29uTnVtYmVyUGx1c1xyXG59IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ljb24nO1xyXG5pbXBvcnQgeyBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ZpZWxkLXRpdGxlJztcclxuaW1wb3J0IHsgUGVwcGVyaUdyb3VwQnV0dG9uc01vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2dyb3VwLWJ1dHRvbnMnO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaUludGVybmFsQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9pbnRlcm5hbC1idXR0b24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXMsXHJcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgICAgIE1hdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICAvLyBQZXBwZXJpIG1vZHVsZXNcclxuICAgICAgICBQZXBwZXJpTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlJY29uTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlGaWVsZFRpdGxlTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlHcm91cEJ1dHRvbnNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbIFBlcHBlcmlJbnRlcm5hbEJ1dHRvbkNvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIFBlcHBlcmlJbnRlcm5hbEJ1dHRvbkNvbXBvbmVudCBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaUludGVybmFsQnV0dG9uTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVwcGVyaUljb25SZWdpc3RyeTogUGVwcGVyaUljb25SZWdpc3RyeSkge1xyXG4gICAgICAgIHRoaXMucGVwcGVyaUljb25SZWdpc3RyeS5yZWdpc3Rlckljb25zKFtcclxuICAgICAgICAgICAgcGVwcGVyaUljb25TeXN0ZW1FZGl0LFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblN5c3RlbU1lbnUsXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uTnVtYmVyUGx1c1xyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==