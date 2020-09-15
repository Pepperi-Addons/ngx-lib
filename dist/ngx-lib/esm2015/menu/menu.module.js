import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemMenu } from '@pepperi-addons/ngx-lib/icon';
import { PepperiMenuComponent } from './menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiMenuModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemMenu
        ]);
    }
}
PepperiMenuModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiMenuModule });
PepperiMenuModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiMenuModule_Factory(t) { return new (t || PepperiMenuModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules,
            MatCommonModule,
            MatFormFieldModule,
            MatMenuModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiMenuModule, { declarations: [PepperiMenuComponent], imports: [CommonModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule], exports: [PepperiMenuComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiMenuModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules,
                    MatCommonModule,
                    MatFormFieldModule,
                    MatMenuModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule
                ],
                exports: [PepperiMenuComponent],
                declarations: [PepperiMenuComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL21lbnUvbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBdUIscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU3RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBaUJ4RCxNQUFNLE9BQU8saUJBQWlCO0lBQzFCLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7WUFDbkMscUJBQXFCO1NBQ3hCLENBQUMsQ0FBQztJQUNQLENBQUM7O3FEQUxRLGlCQUFpQjtpSEFBakIsaUJBQWlCLHFEQWRqQjtZQUNMLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1NBQ3BCO3dGQUlRLGlCQUFpQixtQkFGVixvQkFBb0IsYUFYaEMsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUIsYUFFVixvQkFBb0I7a0RBR3RCLGlCQUFpQjtjQWY3QixRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixpQkFBaUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRSxDQUFFLG9CQUFvQixDQUFFO2dCQUNqQyxZQUFZLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgUGVwcGVyaUljb25Nb2R1bGUsIFBlcHBlcmlJY29uUmVnaXN0cnksIHBlcHBlcmlJY29uU3lzdGVtTWVudSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaU1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXMsXHJcbiAgICAgICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgICAgICBNYXRNZW51TW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgICAgLy8gUGVwcGVyaSBtb2R1bGVzXHJcbiAgICAgICAgUGVwcGVyaU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpSWNvbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFsgUGVwcGVyaU1lbnVDb21wb25lbnQgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBQZXBwZXJpTWVudUNvbXBvbmVudCBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaU1lbnVNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXBwZXJpSWNvblJlZ2lzdHJ5OiBQZXBwZXJpSWNvblJlZ2lzdHJ5KSB7XHJcbiAgICAgICAgdGhpcy5wZXBwZXJpSWNvblJlZ2lzdHJ5LnJlZ2lzdGVySWNvbnMoW1xyXG4gICAgICAgICAgICBwZXBwZXJpSWNvblN5c3RlbU1lbnVcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufVxyXG4iXX0=