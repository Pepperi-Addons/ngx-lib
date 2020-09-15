import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
// import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconNumberCoins, pepperiIconNumberPercent, pepperiIconNumberNumber, pepperiIconNumberDecimal, pepperiIconSystemPhone, pepperiIconSystemEmail, pepperiIconSystemLink, pepperiIconSystemFullScreen, pepperiIconSystemEdit, pepperiIconTimeDatetime, pepperiIconTimeCal } from '@pepperi-addons/ngx-lib/icon';
import { PepperiTextboxIconComponent } from './textbox-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiTextboxIconModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconNumberCoins,
            pepperiIconNumberPercent,
            pepperiIconNumberNumber,
            pepperiIconNumberDecimal,
            pepperiIconSystemPhone,
            pepperiIconSystemEmail,
            pepperiIconSystemLink,
            pepperiIconSystemFullScreen,
            pepperiIconSystemEdit,
            pepperiIconTimeDatetime,
            pepperiIconTimeCal
        ]);
    }
}
PepperiTextboxIconModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiTextboxIconModule });
PepperiTextboxIconModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiTextboxIconModule_Factory(t) { return new (t || PepperiTextboxIconModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatIconModule,
            // Pepperi modules
            PepperiIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiTextboxIconModule, { declarations: [PepperiTextboxIconComponent], imports: [CommonModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        // Pepperi modules
        PepperiIconModule], exports: [PepperiTextboxIconComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiTextboxIconModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules,
                    MatCommonModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiIconModule
                ],
                exports: [PepperiTextboxIconComponent],
                declarations: [PepperiTextboxIconComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC1pY29uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvdGV4dGJveC1pY29uL3RleHRib3gtaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsMkRBQTJEO0FBQzNELE9BQU8sRUFDSCxpQkFBaUIsRUFFakIsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUMzQixxQkFBcUIsRUFDckIsdUJBQXVCLEVBQ3ZCLGtCQUFrQixFQUNyQixNQUFNLDhCQUE4QixDQUFDO0FBRXRDLE9BQU8sRUFBRSwyQkFBMkIsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7QUFnQnRFLE1BQU0sT0FBTyx3QkFBd0I7SUFFakMsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztZQUNuQyxzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2Qix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLHNCQUFzQjtZQUN0QixxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLHFCQUFxQjtZQUNyQix1QkFBdUI7WUFDdkIsa0JBQWtCO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7OzREQWhCUSx3QkFBd0I7K0hBQXhCLHdCQUF3QixxREFieEI7WUFDTCxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsaUJBQWlCO1NBQ3BCO3dGQUlRLHdCQUF3QixtQkFGbEIsMkJBQTJCLGFBVnRDLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixpQkFBaUIsYUFFWCwyQkFBMkI7a0RBRzVCLHdCQUF3QjtjQWRwQyxRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsaUJBQWlCO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDdEMsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE1hdENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5cclxuLy8gaW1wb3J0IHsgUGVwcGVyaU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHtcclxuICAgIFBlcHBlcmlJY29uTW9kdWxlLFxyXG4gICAgUGVwcGVyaUljb25SZWdpc3RyeSxcclxuICAgIHBlcHBlcmlJY29uTnVtYmVyQ29pbnMsXHJcbiAgICBwZXBwZXJpSWNvbk51bWJlclBlcmNlbnQsXHJcbiAgICBwZXBwZXJpSWNvbk51bWJlck51bWJlcixcclxuICAgIHBlcHBlcmlJY29uTnVtYmVyRGVjaW1hbCxcclxuICAgIHBlcHBlcmlJY29uU3lzdGVtUGhvbmUsXHJcbiAgICBwZXBwZXJpSWNvblN5c3RlbUVtYWlsLFxyXG4gICAgcGVwcGVyaUljb25TeXN0ZW1MaW5rLFxyXG4gICAgcGVwcGVyaUljb25TeXN0ZW1GdWxsU2NyZWVuLFxyXG4gICAgcGVwcGVyaUljb25TeXN0ZW1FZGl0LFxyXG4gICAgcGVwcGVyaUljb25UaW1lRGF0ZXRpbWUsXHJcbiAgICBwZXBwZXJpSWNvblRpbWVDYWxcclxufSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9pY29uJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlUZXh0Ym94SWNvbkNvbXBvbmVudH0gZnJvbSAnLi90ZXh0Ym94LWljb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXMsXHJcbiAgICAgICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICAvLyBQZXBwZXJpIG1vZHVsZXNcclxuICAgICAgICBQZXBwZXJpSWNvbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtQZXBwZXJpVGV4dGJveEljb25Db21wb25lbnRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbUGVwcGVyaVRleHRib3hJY29uQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlUZXh0Ym94SWNvbk1vZHVsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXBwZXJpSWNvblJlZ2lzdHJ5OiBQZXBwZXJpSWNvblJlZ2lzdHJ5KSB7XHJcbiAgICAgICAgdGhpcy5wZXBwZXJpSWNvblJlZ2lzdHJ5LnJlZ2lzdGVySWNvbnMoW1xyXG4gICAgICAgICAgICBwZXBwZXJpSWNvbk51bWJlckNvaW5zLFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvbk51bWJlclBlcmNlbnQsXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uTnVtYmVyTnVtYmVyLFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvbk51bWJlckRlY2ltYWwsXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uU3lzdGVtUGhvbmUsXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uU3lzdGVtRW1haWwsXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uU3lzdGVtTGluayxcclxuICAgICAgICAgICAgcGVwcGVyaUljb25TeXN0ZW1GdWxsU2NyZWVuLFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblN5c3RlbUVkaXQsXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uVGltZURhdGV0aW1lLFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblRpbWVDYWxcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufVxyXG4iXX0=