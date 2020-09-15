import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconSystemBolt } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiCheckboxComponent } from './checkbox.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiCheckboxModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemBolt
        ]);
    }
}
PepperiCheckboxModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiCheckboxModule });
PepperiCheckboxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiCheckboxModule_Factory(t) { return new (t || PepperiCheckboxModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatFormFieldModule,
            MatCheckboxModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiCheckboxModule, { declarations: [PepperiCheckboxComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule], exports: [PepperiCheckboxComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules
                    MatCommonModule,
                    MatFormFieldModule,
                    MatCheckboxModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule
                ],
                exports: [PepperiCheckboxComponent],
                declarations: [PepperiCheckboxComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9jaGVja2JveC9jaGVja2JveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBdUIscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBb0JoRSxNQUFNLE9BQU8scUJBQXFCO0lBQzlCLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7WUFDbkMscUJBQXFCO1NBQ3hCLENBQUMsQ0FBQztJQUNQLENBQUM7O3lEQUxRLHFCQUFxQjt5SEFBckIscUJBQXFCLHFEQWpCckI7WUFDTCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLHVCQUF1QjtTQUMxQjt3RkFJUSxxQkFBcUIsbUJBRmQsd0JBQXdCLGFBZHBDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsdUJBQXVCLGFBRWhCLHdCQUF3QjtrREFHMUIscUJBQXFCO2NBbEJqQyxRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQix1QkFBdUI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRSxDQUFFLHdCQUF3QixDQUFFO2dCQUNyQyxZQUFZLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTWF0Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgUGVwcGVyaUljb25Nb2R1bGUsIFBlcHBlcmlJY29uUmVnaXN0cnksIHBlcHBlcmlJY29uU3lzdGVtQm9sdCB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ljb24nO1xyXG5pbXBvcnQgeyBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ZpZWxkLXRpdGxlJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tib3guY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgLy8gTWF0ZXJpYWwgbW9kdWxlc1xyXG4gICAgICAgIE1hdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICAvLyBQZXBwZXJpIG1vZHVsZXNcclxuICAgICAgICBQZXBwZXJpTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlJY29uTW9kdWxlLFxyXG4gICAgICAgIFBlcHBlcmlGaWVsZFRpdGxlTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogWyBQZXBwZXJpQ2hlY2tib3hDb21wb25lbnQgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBQZXBwZXJpQ2hlY2tib3hDb21wb25lbnQgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlDaGVja2JveE1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcHBlcmlJY29uUmVnaXN0cnk6IFBlcHBlcmlJY29uUmVnaXN0cnkpIHtcclxuICAgICAgICB0aGlzLnBlcHBlcmlJY29uUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uU3lzdGVtQm9sdFxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==