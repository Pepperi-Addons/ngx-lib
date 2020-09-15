import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconArrowDown, pepperiIconArrowEither, pepperiIconArrowUp } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFormModule } from '@pepperi-addons/ngx-lib/form';
import { VirtualScrollModule } from './virtual-scroll.component';
import { PepperiListComponent } from './list.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiListModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconArrowDown,
            pepperiIconArrowEither,
            pepperiIconArrowUp
        ]);
    }
}
PepperiListModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiListModule });
PepperiListModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiListModule_Factory(t) { return new (t || PepperiListModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules,
            MatCommonModule,
            MatCheckboxModule,
            MatRadioModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFormModule,
            VirtualScrollModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiListModule, { declarations: [PepperiListComponent], imports: [CommonModule,
        // Material modules,
        MatCommonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFormModule,
        VirtualScrollModule], exports: [PepperiListComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiListModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules,
                    MatCommonModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFormModule,
                    VirtualScrollModule
                ],
                exports: [PepperiListComponent],
                declarations: [PepperiListComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2xpc3QvbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFDSCxpQkFBaUIsRUFFakIsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0QixrQkFBa0IsRUFDckIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBbUJ4RCxNQUFNLE9BQU8saUJBQWlCO0lBQzFCLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7WUFDbkMsb0JBQW9CO1lBQ3BCLHNCQUFzQjtZQUN0QixrQkFBa0I7U0FDckIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7cURBUFEsaUJBQWlCO2lIQUFqQixpQkFBaUIscURBaEJqQjtZQUNMLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixtQkFBbUI7U0FDdEI7d0ZBSVEsaUJBQWlCLG1CQUZWLG9CQUFvQixhQWJoQyxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsbUJBQW1CLGFBRVosb0JBQW9CO2tEQUd0QixpQkFBaUI7Y0FqQjdCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixtQkFBbUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRSxDQUFFLG9CQUFvQixDQUFFO2dCQUNqQyxZQUFZLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5pbXBvcnQge1xyXG4gICAgUGVwcGVyaUljb25Nb2R1bGUsXHJcbiAgICBQZXBwZXJpSWNvblJlZ2lzdHJ5LFxyXG4gICAgcGVwcGVyaUljb25BcnJvd0Rvd24sXHJcbiAgICBwZXBwZXJpSWNvbkFycm93RWl0aGVyLFxyXG4gICAgcGVwcGVyaUljb25BcnJvd1VwXHJcbn0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvaWNvbic7XHJcbmltcG9ydCB7IFBlcHBlcmlGb3JtTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvZm9ybSc7XHJcblxyXG5pbXBvcnQgeyBWaXJ0dWFsU2Nyb2xsTW9kdWxlIH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXMsXHJcbiAgICAgICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgICAgIE1hdFJhZGlvTW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgICAgLy8gUGVwcGVyaSBtb2R1bGVzXHJcbiAgICAgICAgUGVwcGVyaU1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpSWNvbk1vZHVsZSxcclxuICAgICAgICBQZXBwZXJpRm9ybU1vZHVsZSxcclxuICAgICAgICBWaXJ0dWFsU2Nyb2xsTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogWyBQZXBwZXJpTGlzdENvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIFBlcHBlcmlMaXN0Q29tcG9uZW50IF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpTGlzdE1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcHBlcmlJY29uUmVnaXN0cnk6IFBlcHBlcmlJY29uUmVnaXN0cnkpIHtcclxuICAgICAgICB0aGlzLnBlcHBlcmlJY29uUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uQXJyb3dEb3duLFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvbkFycm93RWl0aGVyLFxyXG4gICAgICAgICAgICBwZXBwZXJpSWNvbkFycm93VXBcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufVxyXG4iXX0=