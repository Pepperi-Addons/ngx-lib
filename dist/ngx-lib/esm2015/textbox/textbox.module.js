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
import { PepperiTextboxComponent } from './textbox.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiTextboxModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit
        ]);
    }
}
PepperiTextboxModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiTextboxModule });
PepperiTextboxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiTextboxModule_Factory(t) { return new (t || PepperiTextboxModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
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
            PepperiTextboxIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiTextboxModule, { declarations: [PepperiTextboxComponent], imports: [CommonModule,
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
        PepperiTextboxIconModule], exports: [PepperiTextboxComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiTextboxModule, [{
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
                    PepperiTextboxIconModule
                ],
                exports: [PepperiTextboxComponent,],
                declarations: [PepperiTextboxComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3RleHRib3gvdGV4dGJveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUF1QixxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7QUFzQjdELE1BQU0sT0FBTyxvQkFBb0I7SUFDN0IsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztZQUNuQyxxQkFBcUI7U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7d0RBTFEsb0JBQW9CO3VIQUFwQixvQkFBb0IscURBbkJwQjtZQUNMLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLHVCQUF1QjtZQUN2Qix3QkFBd0I7U0FDM0I7d0ZBSVEsb0JBQW9CLG1CQUZkLHVCQUF1QixhQWhCbEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHdCQUF3QixhQUVsQix1QkFBdUI7a0RBR3hCLG9CQUFvQjtjQXBCaEMsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFDWCxvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtpQkFDM0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUc7Z0JBQ3BDLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTWF0Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgUGVwcGVyaUljb25Nb2R1bGUsIFBlcHBlcmlJY29uUmVnaXN0cnksIHBlcHBlcmlJY29uU3lzdGVtRWRpdCB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ljb24nO1xyXG5pbXBvcnQgeyBQZXBwZXJpVGV4dGJveEljb25Nb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi90ZXh0Ym94LWljb24nO1xyXG5pbXBvcnQgeyBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ZpZWxkLXRpdGxlJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlUZXh0Ym94Q29tcG9uZW50fSBmcm9tICcuL3RleHRib3guY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgLy8gTWF0ZXJpYWwgbW9kdWxlcyxcclxuICAgICAgICBNYXRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICAgIC8vIFBlcHBlcmkgbW9kdWxlc1xyXG4gICAgICAgIFBlcHBlcmlNb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaUljb25Nb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaUZpZWxkVGl0bGVNb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaVRleHRib3hJY29uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1BlcHBlcmlUZXh0Ym94Q29tcG9uZW50LCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbUGVwcGVyaVRleHRib3hDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaVRleHRib3hNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXBwZXJpSWNvblJlZ2lzdHJ5OiBQZXBwZXJpSWNvblJlZ2lzdHJ5KSB7XHJcbiAgICAgICAgdGhpcy5wZXBwZXJpSWNvblJlZ2lzdHJ5LnJlZ2lzdGVySWNvbnMoW1xyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblN5c3RlbUVkaXRcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufVxyXG4iXX0=