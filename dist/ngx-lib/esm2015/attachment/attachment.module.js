import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiFilesUploaderModule } from '@pepperi-addons/ngx-lib/files-uploader';
import { PepperiAttachmentComponent } from './attachment.component';
import * as i0 from "@angular/core";
export class PepperiAttachmentModule {
}
PepperiAttachmentModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiAttachmentModule });
PepperiAttachmentModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiAttachmentModule_Factory(t) { return new (t || PepperiAttachmentModule)(); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatFormFieldModule,
            // Pepperi modules
            PepperiModule,
            PepperiFieldTitleModule,
            PepperiFilesUploaderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiAttachmentModule, { declarations: [PepperiAttachmentComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        // Pepperi modules
        PepperiModule,
        PepperiFieldTitleModule,
        PepperiFilesUploaderModule], exports: [PepperiAttachmentComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiAttachmentModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules
                    MatCommonModule,
                    MatFormFieldModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiFieldTitleModule,
                    PepperiFilesUploaderModule
                ],
                exports: [PepperiAttachmentComponent],
                declarations: [PepperiAttachmentComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNobWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2F0dGFjaG1lbnQvYXR0YWNobWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBa0JwRSxNQUFNLE9BQU8sdUJBQXVCOzsyREFBdkIsdUJBQXVCOzZIQUF2Qix1QkFBdUIsa0JBZnZCO1lBQ0wsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsMEJBQTBCO1NBQzdCO3dGQUlRLHVCQUF1QixtQkFGaEIsMEJBQTBCLGFBWnRDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLDBCQUEwQixhQUVuQiwwQkFBMEI7a0RBRzVCLHVCQUF1QjtjQWhCbkMsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsdUJBQXVCO29CQUN2QiwwQkFBMEI7aUJBQzdCO2dCQUNELE9BQU8sRUFBRSxDQUFFLDBCQUEwQixDQUFFO2dCQUN2QyxZQUFZLEVBQUUsQ0FBRSwwQkFBMEIsQ0FBRTthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTWF0Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgUGVwcGVyaUZpZWxkVGl0bGVNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9maWVsZC10aXRsZSc7XHJcbmltcG9ydCB7IFBlcHBlcmlGaWxlc1VwbG9hZGVyTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvZmlsZXMtdXBsb2FkZXInO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaUF0dGFjaG1lbnRDb21wb25lbnQgfSBmcm9tICcuL2F0dGFjaG1lbnQuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgLy8gTWF0ZXJpYWwgbW9kdWxlc1xyXG4gICAgICAgIE1hdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICAgICAgLy8gUGVwcGVyaSBtb2R1bGVzXHJcbiAgICAgICAgUGVwcGVyaU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpRmlsZXNVcGxvYWRlck1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFsgUGVwcGVyaUF0dGFjaG1lbnRDb21wb25lbnQgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBQZXBwZXJpQXR0YWNobWVudENvbXBvbmVudCBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaUF0dGFjaG1lbnRNb2R1bGUge31cclxuIl19