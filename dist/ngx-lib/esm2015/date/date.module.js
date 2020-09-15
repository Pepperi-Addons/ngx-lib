import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from '@mat-datetimepicker/core';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemEdit } from '@pepperi-addons/ngx-lib/icon';
import { PepperiTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiDateComponent } from './date.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiDateModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit
        ]);
    }
}
PepperiDateModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiDateModule });
PepperiDateModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiDateModule_Factory(t) { return new (t || PepperiDateModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatDatetimepickerModule,
            MatNativeDatetimeModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiTextboxIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiDateModule, { declarations: [PepperiDateComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatDatetimepickerModule,
        MatNativeDatetimeModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiTextboxIconModule], exports: [PepperiDateComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiDateModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatButtonModule,
                    MatNativeDateModule,
                    MatDatepickerModule,
                    MatDatetimepickerModule,
                    MatNativeDatetimeModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiTextboxIconModule,
                ],
                exports: [PepperiDateComponent],
                declarations: [PepperiDateComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2RhdGUvZGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUF1QixxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUEwQnhELE1BQU0sT0FBTyxpQkFBaUI7SUFDMUIsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztZQUNuQyxxQkFBcUI7U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7cURBTFEsaUJBQWlCO2lIQUFqQixpQkFBaUIscURBdkJqQjtZQUNMLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBQ3ZCLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsd0JBQXdCO1NBQzNCO3dGQUlRLGlCQUFpQixtQkFGVixvQkFBb0IsYUFwQmhDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsd0JBQXdCLGFBRWpCLG9CQUFvQjtrREFHdEIsaUJBQWlCO2NBeEI3QixRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2Qix3QkFBd0I7aUJBQzNCO2dCQUNELE9BQU8sRUFBRSxDQUFFLG9CQUFvQixDQUFFO2dCQUNqQyxZQUFZLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTWF0Q29tbW9uTW9kdWxlLCBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlck1vZHVsZSwgTWF0TmF0aXZlRGF0ZXRpbWVNb2R1bGUgfSBmcm9tICdAbWF0LWRhdGV0aW1lcGlja2VyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgUGVwcGVyaUljb25Nb2R1bGUsIFBlcHBlcmlJY29uUmVnaXN0cnksIHBlcHBlcmlJY29uU3lzdGVtRWRpdCB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ljb24nO1xyXG5pbXBvcnQgeyBQZXBwZXJpVGV4dGJveEljb25Nb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi90ZXh0Ym94LWljb24nO1xyXG5pbXBvcnQgeyBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ZpZWxkLXRpdGxlJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXMsXHJcbiAgICAgICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gICAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICAgICAgTWF0RGF0ZXRpbWVwaWNrZXJNb2R1bGUsXHJcbiAgICAgICAgTWF0TmF0aXZlRGF0ZXRpbWVNb2R1bGUsXHJcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgICAgLy8gUGVwcGVyaSBtb2R1bGVzXHJcbiAgICAgICAgUGVwcGVyaU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpSWNvbk1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpVGV4dGJveEljb25Nb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogWyBQZXBwZXJpRGF0ZUNvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIFBlcHBlcmlEYXRlQ29tcG9uZW50IF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpRGF0ZU1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcHBlcmlJY29uUmVnaXN0cnk6IFBlcHBlcmlJY29uUmVnaXN0cnkpIHtcclxuICAgICAgICB0aGlzLnBlcHBlcmlJY29uUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uU3lzdGVtRWRpdFxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==