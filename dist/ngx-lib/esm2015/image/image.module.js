import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemMenu, pepperiIconSystemBolt, pepperiIconIndicatorDotPlaceholder } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiFilesUploaderModule } from '@pepperi-addons/ngx-lib/files-uploader';
import { PepperiImageComponent } from './image.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiImageModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemMenu,
            pepperiIconSystemBolt,
            pepperiIconIndicatorDotPlaceholder
        ]);
    }
}
PepperiImageModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiImageModule });
PepperiImageModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiImageModule_Factory(t) { return new (t || PepperiImageModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatFormFieldModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiFilesUploaderModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiImageModule, { declarations: [PepperiImageComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiFilesUploaderModule], exports: [PepperiImageComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiImageModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatFormFieldModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiFilesUploaderModule,
                ],
                exports: [PepperiImageComponent],
                declarations: [PepperiImageComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9pbWFnZS9pbWFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFDSCxpQkFBaUIsRUFFakIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixrQ0FBa0MsRUFDckMsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBb0IxRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzNCLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7WUFDbkMscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQixrQ0FBa0M7U0FDckMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7c0RBUFEsa0JBQWtCO21IQUFsQixrQkFBa0IscURBakJsQjtZQUNMLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsMEJBQTBCO1NBQzdCO3dGQUlRLGtCQUFrQixtQkFGWCxxQkFBcUIsYUFkakMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QiwwQkFBMEIsYUFFbkIscUJBQXFCO2tEQUd2QixrQkFBa0I7Y0FsQjlCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLDBCQUEwQjtpQkFDN0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUUscUJBQXFCLENBQUU7Z0JBQ2xDLFlBQVksRUFBRSxDQUFFLHFCQUFxQixDQUFFO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYic7XHJcbmltcG9ydCB7XHJcbiAgICBQZXBwZXJpSWNvbk1vZHVsZSxcclxuICAgIFBlcHBlcmlJY29uUmVnaXN0cnksXHJcbiAgICBwZXBwZXJpSWNvblN5c3RlbU1lbnUsXHJcbiAgICBwZXBwZXJpSWNvblN5c3RlbUJvbHQsXHJcbiAgICBwZXBwZXJpSWNvbkluZGljYXRvckRvdFBsYWNlaG9sZGVyXHJcbn0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvaWNvbic7XHJcbmltcG9ydCB7IFBlcHBlcmlGaWVsZFRpdGxlTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvZmllbGQtdGl0bGUnO1xyXG5pbXBvcnQgeyBQZXBwZXJpRmlsZXNVcGxvYWRlck1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ZpbGVzLXVwbG9hZGVyJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgLy8gTWF0ZXJpYWwgbW9kdWxlcyxcclxuICAgICAgICBNYXRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgICAgLy8gUGVwcGVyaSBtb2R1bGVzXHJcbiAgICAgICAgUGVwcGVyaU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpSWNvbk1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpRmlsZXNVcGxvYWRlck1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbIFBlcHBlcmlJbWFnZUNvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIFBlcHBlcmlJbWFnZUNvbXBvbmVudCBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaUltYWdlTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVwcGVyaUljb25SZWdpc3RyeTogUGVwcGVyaUljb25SZWdpc3RyeSkge1xyXG4gICAgICAgIHRoaXMucGVwcGVyaUljb25SZWdpc3RyeS5yZWdpc3Rlckljb25zKFtcclxuICAgICAgICAgICAgcGVwcGVyaUljb25TeXN0ZW1NZW51LFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblN5c3RlbUJvbHQsXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uSW5kaWNhdG9yRG90UGxhY2Vob2xkZXJcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufVxyXG4iXX0=