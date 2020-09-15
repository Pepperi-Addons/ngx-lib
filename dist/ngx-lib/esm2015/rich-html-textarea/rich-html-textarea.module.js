import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemEdit, pepperiIconSystemClose } from '@pepperi-addons/ngx-lib/icon';
import { PepperiTextboxIconModule } from '@pepperi-addons/ngx-lib/textbox-icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { QuillModule } from 'ngx-quill';
import { PepperiRichHtmlTextareaComponent } from './rich-html-textarea.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-quill";
import * as i2 from "@pepperi-addons/ngx-lib/icon";
export class PepperiRichHtmlTextareaModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemClose
        ]);
    }
}
PepperiRichHtmlTextareaModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiRichHtmlTextareaModule });
PepperiRichHtmlTextareaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiRichHtmlTextareaModule_Factory(t) { return new (t || PepperiRichHtmlTextareaModule)(i0.ɵɵinject(i2.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            BrowserModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatMenuModule,
            MatIconModule,
            MatDialogModule,
            // External modules
            QuillModule.forRoot(),
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiTextboxIconModule,
            PepperiDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiRichHtmlTextareaModule, { declarations: [PepperiRichHtmlTextareaComponent], imports: [CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule, i1.QuillModule, 
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiTextboxIconModule,
        PepperiDialogModule], exports: [PepperiRichHtmlTextareaComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiRichHtmlTextareaModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    BrowserModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatMenuModule,
                    MatIconModule,
                    MatDialogModule,
                    // External modules
                    QuillModule.forRoot(),
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiTextboxIconModule,
                    PepperiDialogModule
                ],
                exports: [PepperiRichHtmlTextareaComponent],
                declarations: [PepperiRichHtmlTextareaComponent],
            }]
    }], function () { return [{ type: i2.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaC1odG1sLXRleHRhcmVhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvcmljaC1odG1sLXRleHRhcmVhL3JpY2gtaHRtbC10ZXh0YXJlYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUF1QixxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFeEMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUE0QmxGLE1BQU0sT0FBTyw2QkFBNkI7SUFDdEMsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztZQUNuQyxxQkFBcUI7WUFDckIsc0JBQXNCO1NBQ3pCLENBQUMsQ0FBQztJQUNQLENBQUM7O2lFQU5RLDZCQUE2Qjt5SUFBN0IsNkJBQTZCLHFEQXpCN0I7WUFDTCxZQUFZO1lBQ1osYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxhQUFhO1lBQ2IsYUFBYTtZQUNiLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLG1CQUFtQjtTQUN0Qjt3RkFJUSw2QkFBNkIsbUJBRnRCLGdDQUFnQyxhQXRCNUMsWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGFBQWE7UUFDYixlQUFlO1FBR2Ysa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixtQkFBbUIsYUFFWixnQ0FBZ0M7a0RBR2xDLDZCQUE2QjtjQTFCekMsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxhQUFhO29CQUNiLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4QixtQkFBbUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRSxDQUFFLGdDQUFnQyxDQUFFO2dCQUM3QyxZQUFZLEVBQUUsQ0FBRSxnQ0FBZ0MsQ0FBRTthQUNyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYic7XHJcbmltcG9ydCB7IFBlcHBlcmlJY29uTW9kdWxlLCBQZXBwZXJpSWNvblJlZ2lzdHJ5LCBwZXBwZXJpSWNvblN5c3RlbUVkaXQsIHBlcHBlcmlJY29uU3lzdGVtQ2xvc2UgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9pY29uJztcclxuaW1wb3J0IHsgUGVwcGVyaVRleHRib3hJY29uTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvdGV4dGJveC1pY29uJztcclxuaW1wb3J0IHsgUGVwcGVyaUZpZWxkVGl0bGVNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9maWVsZC10aXRsZSc7XHJcbmltcG9ydCB7IFBlcHBlcmlEaWFsb2dNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9kaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgUXVpbGxNb2R1bGUgfSBmcm9tICduZ3gtcXVpbGwnO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaVJpY2hIdG1sVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL3JpY2gtaHRtbC10ZXh0YXJlYS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXMsXHJcbiAgICAgICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcclxuICAgICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgICAgICAvLyBFeHRlcm5hbCBtb2R1bGVzXHJcbiAgICAgICAgUXVpbGxNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIC8vIFBlcHBlcmkgbW9kdWxlc1xyXG4gICAgICAgIFBlcHBlcmlNb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaUljb25Nb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaUZpZWxkVGl0bGVNb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaVRleHRib3hJY29uTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlEaWFsb2dNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbIFBlcHBlcmlSaWNoSHRtbFRleHRhcmVhQ29tcG9uZW50IF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgUGVwcGVyaVJpY2hIdG1sVGV4dGFyZWFDb21wb25lbnQgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlSaWNoSHRtbFRleHRhcmVhTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVwcGVyaUljb25SZWdpc3RyeTogUGVwcGVyaUljb25SZWdpc3RyeSkge1xyXG4gICAgICAgIHRoaXMucGVwcGVyaUljb25SZWdpc3RyeS5yZWdpc3Rlckljb25zKFtcclxuICAgICAgICAgICAgcGVwcGVyaUljb25TeXN0ZW1FZGl0LFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblN5c3RlbUNsb3NlXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuIl19