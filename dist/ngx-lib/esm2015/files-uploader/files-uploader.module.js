import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FileUploadModule } from 'ng2-file-upload';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemBin, pepperiIconSystemAttach, pepperiIconSystemFileUploadCloud, pepperiIconSystemProcessing } from '@pepperi-addons/ngx-lib/icon';
import { PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { FilesUploaderComponent } from './files-uploader.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiFilesUploaderModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemBin,
            pepperiIconSystemAttach,
            pepperiIconSystemFileUploadCloud,
            pepperiIconSystemProcessing
        ]);
    }
}
PepperiFilesUploaderModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiFilesUploaderModule });
PepperiFilesUploaderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiFilesUploaderModule_Factory(t) { return new (t || PepperiFilesUploaderModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            // External modules
            FileUploadModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiFilesUploaderModule, { declarations: [FilesUploaderComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // External modules
        FileUploadModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiDialogModule], exports: [FilesUploaderComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiFilesUploaderModule, [{
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
                    // External modules
                    FileUploadModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiDialogModule
                ],
                exports: [FilesUploaderComponent],
                declarations: [FilesUploaderComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtdXBsb2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9maWxlcy11cGxvYWRlci9maWxlcy11cGxvYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUNILGlCQUFpQixFQUVqQixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLGdDQUFnQyxFQUNoQywyQkFBMkIsRUFDOUIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBdUJwRSxNQUFNLE9BQU8sMEJBQTBCO0lBQ25DLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7WUFDbkMsb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUN2QixnQ0FBZ0M7WUFDaEMsMkJBQTJCO1NBQzlCLENBQUMsQ0FBQztJQUNQLENBQUM7OzhEQVJRLDBCQUEwQjttSUFBMUIsMEJBQTBCLHFEQXBCMUI7WUFDTCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLG1CQUFtQjtTQUN0Qjt3RkFJUSwwQkFBMEIsbUJBRnBCLHNCQUFzQixhQWpCakMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixtQkFBbUIsYUFFYixzQkFBc0I7a0RBR3ZCLDBCQUEwQjtjQXJCdEMsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFDWCxvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsbUJBQW1CO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE1hdENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuXHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICduZzItZmlsZS11cGxvYWQnO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHtcclxuICAgIFBlcHBlcmlJY29uTW9kdWxlLFxyXG4gICAgUGVwcGVyaUljb25SZWdpc3RyeSxcclxuICAgIHBlcHBlcmlJY29uU3lzdGVtQmluLFxyXG4gICAgcGVwcGVyaUljb25TeXN0ZW1BdHRhY2gsXHJcbiAgICBwZXBwZXJpSWNvblN5c3RlbUZpbGVVcGxvYWRDbG91ZCxcclxuICAgIHBlcHBlcmlJY29uU3lzdGVtUHJvY2Vzc2luZ1xyXG59IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ljb24nO1xyXG5pbXBvcnQgeyBQZXBwZXJpRGlhbG9nTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvZGlhbG9nJztcclxuXHJcbmltcG9ydCB7IEZpbGVzVXBsb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbGVzLXVwbG9hZGVyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXMsXHJcbiAgICAgICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICAvLyBFeHRlcm5hbCBtb2R1bGVzXHJcbiAgICAgICAgRmlsZVVwbG9hZE1vZHVsZSxcclxuICAgICAgICAvLyBQZXBwZXJpIG1vZHVsZXNcclxuICAgICAgICBQZXBwZXJpTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlJY29uTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlEaWFsb2dNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbRmlsZXNVcGxvYWRlckNvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtGaWxlc1VwbG9hZGVyQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlGaWxlc1VwbG9hZGVyTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVwcGVyaUljb25SZWdpc3RyeTogUGVwcGVyaUljb25SZWdpc3RyeSkge1xyXG4gICAgICAgIHRoaXMucGVwcGVyaUljb25SZWdpc3RyeS5yZWdpc3Rlckljb25zKFtcclxuICAgICAgICAgICAgcGVwcGVyaUljb25TeXN0ZW1CaW4sXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uU3lzdGVtQXR0YWNoLFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblN5c3RlbUZpbGVVcGxvYWRDbG91ZCxcclxuICAgICAgICAgICAgcGVwcGVyaUljb25TeXN0ZW1Qcm9jZXNzaW5nXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuIl19