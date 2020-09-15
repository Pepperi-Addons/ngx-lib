import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepperiSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiAddressComponent } from './address.component';
import * as i0 from "@angular/core";
export class PepperiAddressModule {
}
PepperiAddressModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiAddressModule });
PepperiAddressModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiAddressModule_Factory(t) { return new (t || PepperiAddressModule)(); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatFormFieldModule,
            // Pepperi modules
            PepperiModule,
            PepperiTextboxModule,
            PepperiSelectModule,
            PepperiFieldTitleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiAddressModule, { declarations: [PepperiAddressComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        // Pepperi modules
        PepperiModule,
        PepperiTextboxModule,
        PepperiSelectModule,
        PepperiFieldTitleModule], exports: [PepperiAddressComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiAddressModule, [{
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
                    PepperiTextboxModule,
                    PepperiSelectModule,
                    PepperiFieldTitleModule
                ],
                exports: [PepperiAddressComponent],
                declarations: [PepperiAddressComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2FkZHJlc3MvYWRkcmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBbUI5RCxNQUFNLE9BQU8sb0JBQW9COzt3REFBcEIsb0JBQW9CO3VIQUFwQixvQkFBb0Isa0JBaEJwQjtZQUNMLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQix1QkFBdUI7U0FDMUI7d0ZBSVEsb0JBQW9CLG1CQUZiLHVCQUF1QixhQWJuQyxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsdUJBQXVCLGFBRWhCLHVCQUF1QjtrREFHekIsb0JBQW9CO2NBakJoQyxRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO2lCQUMxQjtnQkFDRCxPQUFPLEVBQUUsQ0FBRSx1QkFBdUIsQ0FBRTtnQkFDcEMsWUFBWSxFQUFFLENBQUUsdUJBQXVCLENBQUU7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE1hdENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYic7XHJcbmltcG9ydCB7IFBlcHBlcmlUZXh0Ym94TW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvdGV4dGJveCc7XHJcbmltcG9ydCB7IFBlcHBlcmlTZWxlY3RNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9zZWxlY3QnO1xyXG5pbXBvcnQgeyBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ZpZWxkLXRpdGxlJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlBZGRyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRyZXNzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXNcclxuICAgICAgICBNYXRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgICAgIC8vIFBlcHBlcmkgbW9kdWxlc1xyXG4gICAgICAgIFBlcHBlcmlNb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaVRleHRib3hNb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaVNlbGVjdE1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFsgUGVwcGVyaUFkZHJlc3NDb21wb25lbnQgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBQZXBwZXJpQWRkcmVzc0NvbXBvbmVudCBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaUFkZHJlc3NNb2R1bGUge31cclxuIl19