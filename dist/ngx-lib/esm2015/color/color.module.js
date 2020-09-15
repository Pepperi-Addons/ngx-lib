import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemEdit, pepperiIconSystemOk, pepperiIconSystemClose } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepperiColorComponent } from './color.component';
import { PepperiColorPickerComponent } from './color-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiColorModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemOk,
            pepperiIconSystemClose
        ]);
    }
}
PepperiColorModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiColorModule });
PepperiColorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiColorModule_Factory(t) { return new (t || PepperiColorModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatCheckboxModule,
            MatDialogModule,
            MatIconModule,
            MatSliderModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiTextboxModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiColorModule, { declarations: [PepperiColorComponent, PepperiColorPickerComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatSliderModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiTextboxModule], exports: [PepperiColorComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiColorModule, [{
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
                    MatCheckboxModule,
                    MatDialogModule,
                    MatIconModule,
                    MatSliderModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiTextboxModule
                ],
                exports: [PepperiColorComponent],
                declarations: [PepperiColorComponent, PepperiColorPickerComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9jb2xvci9jb2xvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFDSCxpQkFBaUIsRUFFakIscUJBQXFCLEVBQ3JCLG1CQUFtQixFQUNuQixzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUF3QnZFLE1BQU0sT0FBTyxrQkFBa0I7SUFDM0IsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztZQUNuQyxxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLHNCQUFzQjtTQUN6QixDQUFDLENBQUM7SUFDUCxDQUFDOztzREFQUSxrQkFBa0I7bUhBQWxCLGtCQUFrQixxREFyQmxCO1lBQ0wsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YsYUFBYTtZQUNiLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsb0JBQW9CO1NBQ3ZCO3dGQUlRLGtCQUFrQixtQkFGWCxxQkFBcUIsRUFBRSwyQkFBMkIsYUFsQjlELFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGFBQWE7UUFDYixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLG9CQUFvQixhQUViLHFCQUFxQjtrREFHdkIsa0JBQWtCO2NBdEI5QixRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFLENBQUUscUJBQXFCLENBQUU7Z0JBQ2xDLFlBQVksRUFBRSxDQUFFLHFCQUFxQixFQUFFLDJCQUEyQixDQUFFO2FBQ3ZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdFNsaWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5pbXBvcnQge1xyXG4gICAgUGVwcGVyaUljb25Nb2R1bGUsXHJcbiAgICBQZXBwZXJpSWNvblJlZ2lzdHJ5LFxyXG4gICAgcGVwcGVyaUljb25TeXN0ZW1FZGl0LFxyXG4gICAgcGVwcGVyaUljb25TeXN0ZW1PayxcclxuICAgIHBlcHBlcmlJY29uU3lzdGVtQ2xvc2UgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9pY29uJztcclxuaW1wb3J0IHsgUGVwcGVyaUZpZWxkVGl0bGVNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9maWVsZC10aXRsZSc7XHJcbmltcG9ydCB7IFBlcHBlcmlUZXh0Ym94TW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvdGV4dGJveCc7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpQ29sb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBlcHBlcmlDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXNcclxuICAgICAgICBNYXRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgICAgICBNYXRDaGVja2JveE1vZHVsZSxcclxuICAgICAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICBNYXRTbGlkZXJNb2R1bGUsXHJcbiAgICAgICAgLy8gUGVwcGVyaSBtb2R1bGVzXHJcbiAgICAgICAgUGVwcGVyaU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpSWNvbk1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpVGV4dGJveE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFsgUGVwcGVyaUNvbG9yQ29tcG9uZW50IF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgUGVwcGVyaUNvbG9yQ29tcG9uZW50LCBQZXBwZXJpQ29sb3JQaWNrZXJDb21wb25lbnQgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlDb2xvck1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcHBlcmlJY29uUmVnaXN0cnk6IFBlcHBlcmlJY29uUmVnaXN0cnkpIHtcclxuICAgICAgICB0aGlzLnBlcHBlcmlJY29uUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uU3lzdGVtRWRpdCxcclxuICAgICAgICAgICAgcGVwcGVyaUljb25TeXN0ZW1PayxcclxuICAgICAgICAgICAgcGVwcGVyaUljb25TeXN0ZW1DbG9zZVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==