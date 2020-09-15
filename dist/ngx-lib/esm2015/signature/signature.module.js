import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SignaturePadModule } from 'angular2-signaturepad';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemBin, pepperiIconSystemSignature, pepperiIconSystemClose } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiFilesUploaderModule } from '@pepperi-addons/ngx-lib/files-uploader';
import { PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { PepperiSignatureComponent } from './signature.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiSignatureModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemBin,
            pepperiIconSystemSignature,
            pepperiIconSystemClose
        ]);
    }
}
PepperiSignatureModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiSignatureModule });
PepperiSignatureModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiSignatureModule_Factory(t) { return new (t || PepperiSignatureModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatDialogModule,
            // External modules
            SignaturePadModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiFilesUploaderModule,
            PepperiDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiSignatureModule, { declarations: [PepperiSignatureComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        // External modules
        SignaturePadModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiFilesUploaderModule,
        PepperiDialogModule], exports: [PepperiSignatureComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiSignatureModule, [{
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
                    MatInputModule,
                    MatIconModule,
                    MatDialogModule,
                    // External modules
                    SignaturePadModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiFilesUploaderModule,
                    PepperiDialogModule
                ],
                exports: [PepperiSignatureComponent],
                declarations: [PepperiSignatureComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvc2lnbmF0dXJlL3NpZ25hdHVyZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFDSCxpQkFBaUIsRUFFakIsb0JBQW9CLEVBQ3BCLDBCQUEwQixFQUMxQixzQkFBc0IsRUFDekIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBMEJsRSxNQUFNLE9BQU8sc0JBQXNCO0lBQy9CLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7WUFDbkMsb0JBQW9CO1lBQ3BCLDBCQUEwQjtZQUMxQixzQkFBc0I7U0FDekIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7MERBUFEsc0JBQXNCOzJIQUF0QixzQkFBc0IscURBdkJ0QjtZQUNMLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLHVCQUF1QjtZQUN2QiwwQkFBMEI7WUFDMUIsbUJBQW1CO1NBQ3RCO3dGQUlRLHNCQUFzQixtQkFGZix5QkFBeUIsYUFwQnJDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QiwwQkFBMEI7UUFDMUIsbUJBQW1CLGFBRVoseUJBQXlCO2tEQUczQixzQkFBc0I7Y0F4QmxDLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2QiwwQkFBMEI7b0JBQzFCLG1CQUFtQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUUseUJBQXlCLENBQUU7Z0JBQ3RDLFlBQVksRUFBRSxDQUFFLHlCQUF5QixDQUFFO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5pbXBvcnQgeyBTaWduYXR1cmVQYWRNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1zaWduYXR1cmVwYWQnO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHtcclxuICAgIFBlcHBlcmlJY29uTW9kdWxlLFxyXG4gICAgUGVwcGVyaUljb25SZWdpc3RyeSxcclxuICAgIHBlcHBlcmlJY29uU3lzdGVtQmluLFxyXG4gICAgcGVwcGVyaUljb25TeXN0ZW1TaWduYXR1cmUsXHJcbiAgICBwZXBwZXJpSWNvblN5c3RlbUNsb3NlXHJcbn0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvaWNvbic7XHJcbmltcG9ydCB7IFBlcHBlcmlGaWVsZFRpdGxlTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvZmllbGQtdGl0bGUnO1xyXG5pbXBvcnQgeyBQZXBwZXJpRmlsZXNVcGxvYWRlck1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ZpbGVzLXVwbG9hZGVyJztcclxuaW1wb3J0IHsgUGVwcGVyaURpYWxvZ01vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2RpYWxvZyc7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpU2lnbmF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi9zaWduYXR1cmUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgLy8gTWF0ZXJpYWwgbW9kdWxlc1xyXG4gICAgICAgIE1hdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgICAgIC8vIEV4dGVybmFsIG1vZHVsZXNcclxuICAgICAgICBTaWduYXR1cmVQYWRNb2R1bGUsXHJcbiAgICAgICAgLy8gUGVwcGVyaSBtb2R1bGVzXHJcbiAgICAgICAgUGVwcGVyaU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpSWNvbk1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpRmlsZXNVcGxvYWRlck1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpRGlhbG9nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogWyBQZXBwZXJpU2lnbmF0dXJlQ29tcG9uZW50IF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgUGVwcGVyaVNpZ25hdHVyZUNvbXBvbmVudCBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaVNpZ25hdHVyZU1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcHBlcmlJY29uUmVnaXN0cnk6IFBlcHBlcmlJY29uUmVnaXN0cnkpIHtcclxuICAgICAgICB0aGlzLnBlcHBlcmlJY29uUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uU3lzdGVtQmluLFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblN5c3RlbVNpZ25hdHVyZSxcclxuICAgICAgICAgICAgcGVwcGVyaUljb25TeXN0ZW1DbG9zZVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==