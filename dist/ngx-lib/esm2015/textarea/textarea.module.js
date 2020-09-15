import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemEdit } from '@pepperi-addons/ngx-lib/icon';
import { PepperiTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { PepperiTextareaComponent } from './textarea.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiTextareaModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit
        ]);
    }
}
PepperiTextareaModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiTextareaModule });
PepperiTextareaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiTextareaModule_Factory(t) { return new (t || PepperiTextareaModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiTextboxIconModule,
            PepperiDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiTextareaModule, { declarations: [PepperiTextareaComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiTextboxIconModule,
        PepperiDialogModule], exports: [PepperiTextareaComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiTextareaModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiTextboxIconModule,
                    PepperiDialogModule
                ],
                exports: [PepperiTextareaComponent],
                declarations: [PepperiTextareaComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi90ZXh0YXJlYS90ZXh0YXJlYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUF1QixxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUF1QmhFLE1BQU0sT0FBTyxxQkFBcUI7SUFDOUIsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztZQUNuQyxxQkFBcUI7U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7eURBTFEscUJBQXFCO3lIQUFyQixxQkFBcUIscURBcEJyQjtZQUNMLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLHVCQUF1QjtZQUN2Qix3QkFBd0I7WUFDeEIsbUJBQW1CO1NBQ3RCO3dGQUlRLHFCQUFxQixtQkFGZCx3QkFBd0IsYUFqQnBDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsbUJBQW1CLGFBRVosd0JBQXdCO2tEQUcxQixxQkFBcUI7Y0FyQmpDLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLG1CQUFtQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsd0JBQXdCLENBQUU7Z0JBQ3JDLFlBQVksRUFBRSxDQUFFLHdCQUF3QixDQUFFO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5pbXBvcnQgeyBQZXBwZXJpSWNvbk1vZHVsZSwgUGVwcGVyaUljb25SZWdpc3RyeSwgcGVwcGVyaUljb25TeXN0ZW1FZGl0IH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvaWNvbic7XHJcbmltcG9ydCB7IFBlcHBlcmlUZXh0Ym94SWNvbk1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL3RleHRib3gtaWNvbic7XHJcbmltcG9ydCB7IFBlcHBlcmlGaWVsZFRpdGxlTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvZmllbGQtdGl0bGUnO1xyXG5pbXBvcnQgeyBQZXBwZXJpRGlhbG9nTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvZGlhbG9nJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdGV4dGFyZWEuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgLy8gTWF0ZXJpYWwgbW9kdWxlcyxcclxuICAgICAgICBNYXRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICAgIC8vIFBlcHBlcmkgbW9kdWxlc1xyXG4gICAgICAgIFBlcHBlcmlNb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaUljb25Nb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaUZpZWxkVGl0bGVNb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaVRleHRib3hJY29uTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlEaWFsb2dNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbIFBlcHBlcmlUZXh0YXJlYUNvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIFBlcHBlcmlUZXh0YXJlYUNvbXBvbmVudCBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaVRleHRhcmVhTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVwcGVyaUljb25SZWdpc3RyeTogUGVwcGVyaUljb25SZWdpc3RyeSkge1xyXG4gICAgICAgIHRoaXMucGVwcGVyaUljb25SZWdpc3RyeS5yZWdpc3Rlckljb25zKFtcclxuICAgICAgICAgICAgcGVwcGVyaUljb25TeXN0ZW1FZGl0XHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuIl19