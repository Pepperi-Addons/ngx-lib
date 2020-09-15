import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconNumberMinus, pepperiIconNumberPlus } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiQuantitySelectorComponent } from './quantity-selector.component';
import { QuantitySelectorNumber } from './quantity-selector.pipes';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiQuantitySelectorModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconNumberMinus,
            pepperiIconNumberPlus
        ]);
    }
}
PepperiQuantitySelectorModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiQuantitySelectorModule });
PepperiQuantitySelectorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiQuantitySelectorModule_Factory(t) { return new (t || PepperiQuantitySelectorModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatBadgeModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiQuantitySelectorModule, { declarations: [PepperiQuantitySelectorComponent, QuantitySelectorNumber], imports: [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatBadgeModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule], exports: [PepperiQuantitySelectorComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiQuantitySelectorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules
                    MatCommonModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatButtonModule,
                    MatBadgeModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule
                ],
                exports: [PepperiQuantitySelectorComponent],
                declarations: [PepperiQuantitySelectorComponent, QuantitySelectorNumber],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbnRpdHktc2VsZWN0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9xdWFudGl0eS1zZWxlY3Rvci9xdWFudGl0eS1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQXVCLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckksT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQXdCbkUsTUFBTSxPQUFPLDZCQUE2QjtJQUN0QyxZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1lBQ25DLHNCQUFzQjtZQUN0QixxQkFBcUI7U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7aUVBTlEsNkJBQTZCO3lJQUE3Qiw2QkFBNkIscURBckI3QjtZQUNMLFlBQVk7WUFDWixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGVBQWU7WUFDZixjQUFjO1lBQ2QsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLHVCQUF1QjtTQUMxQjt3RkFJUSw2QkFBNkIsbUJBRnRCLGdDQUFnQyxFQUFFLHNCQUFzQixhQWxCcEUsWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGNBQWM7UUFDZCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsdUJBQXVCLGFBRWhCLGdDQUFnQztrREFHbEMsNkJBQTZCO2NBdEJ6QyxRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osYUFBYTtvQkFDYix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtpQkFDMUI7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsZ0NBQWdDLENBQUU7Z0JBQzdDLFlBQVksRUFBRSxDQUFFLGdDQUFnQyxFQUFFLHNCQUFzQixDQUFFO2FBQzdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTWF0Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0QmFkZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9iYWRnZSc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYic7XHJcbmltcG9ydCB7IFBlcHBlcmlJY29uTW9kdWxlLCBQZXBwZXJpSWNvblJlZ2lzdHJ5LCBwZXBwZXJpSWNvbk51bWJlck1pbnVzLCBwZXBwZXJpSWNvbk51bWJlclBsdXMgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9pY29uJztcclxuaW1wb3J0IHsgUGVwcGVyaUZpZWxkVGl0bGVNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9maWVsZC10aXRsZSc7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpUXVhbnRpdHlTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vcXVhbnRpdHktc2VsZWN0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUXVhbnRpdHlTZWxlY3Rvck51bWJlciB9IGZyb20gJy4vcXVhbnRpdHktc2VsZWN0b3IucGlwZXMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXNcclxuICAgICAgICBNYXRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRCYWRnZU1vZHVsZSxcclxuICAgICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICAgIC8vIFBlcHBlcmkgbW9kdWxlc1xyXG4gICAgICAgIFBlcHBlcmlNb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaUljb25Nb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaUZpZWxkVGl0bGVNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbIFBlcHBlcmlRdWFudGl0eVNlbGVjdG9yQ29tcG9uZW50IF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgUGVwcGVyaVF1YW50aXR5U2VsZWN0b3JDb21wb25lbnQsIFF1YW50aXR5U2VsZWN0b3JOdW1iZXIgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlRdWFudGl0eVNlbGVjdG9yTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVwcGVyaUljb25SZWdpc3RyeTogUGVwcGVyaUljb25SZWdpc3RyeSkge1xyXG4gICAgICAgIHRoaXMucGVwcGVyaUljb25SZWdpc3RyeS5yZWdpc3Rlckljb25zKFtcclxuICAgICAgICAgICAgcGVwcGVyaUljb25OdW1iZXJNaW51cyxcclxuICAgICAgICAgICAgcGVwcGVyaUljb25OdW1iZXJQbHVzXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuIl19