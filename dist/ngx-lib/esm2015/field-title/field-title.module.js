import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PepperiIconModule, pepperiIconSystemMust } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleComponent } from './field-title.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
export class PepperiFieldTitleModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemMust
        ]);
    }
}
PepperiFieldTitleModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiFieldTitleModule });
PepperiFieldTitleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiFieldTitleModule_Factory(t) { return new (t || PepperiFieldTitleModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            // Material modules,
            MatCommonModule,
            MatFormFieldModule,
            // Pepperi modules
            PepperiIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiFieldTitleModule, { declarations: [PepperiFieldTitleComponent], imports: [CommonModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        // Pepperi modules
        PepperiIconModule], exports: [PepperiFieldTitleComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiFieldTitleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // Material modules,
                    MatCommonModule,
                    MatFormFieldModule,
                    // Pepperi modules
                    PepperiIconModule
                ],
                exports: [PepperiFieldTitleComponent],
                declarations: [PepperiFieldTitleComponent],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtdGl0bGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9maWVsZC10aXRsZS9maWVsZC10aXRsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBdUIscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU3RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBY3JFLE1BQU0sT0FBTyx1QkFBdUI7SUFDaEMsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztZQUNuQyxxQkFBcUI7U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7MkRBTFEsdUJBQXVCOzZIQUF2Qix1QkFBdUIscURBWHZCO1lBQ0wsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixpQkFBaUI7U0FDcEI7d0ZBSVEsdUJBQXVCLG1CQUZqQiwwQkFBMEIsYUFSckMsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixpQkFBaUIsYUFFWCwwQkFBMEI7a0RBRzNCLHVCQUF1QjtjQVpuQyxRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixpQkFBaUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUNyQyxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpSWNvbk1vZHVsZSwgUGVwcGVyaUljb25SZWdpc3RyeSwgcGVwcGVyaUljb25TeXN0ZW1NdXN0IH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpRmllbGRUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtdGl0bGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXMsXHJcbiAgICAgICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgICAgICAvLyBQZXBwZXJpIG1vZHVsZXNcclxuICAgICAgICBQZXBwZXJpSWNvbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtQZXBwZXJpRmllbGRUaXRsZUNvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtQZXBwZXJpRmllbGRUaXRsZUNvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpRmllbGRUaXRsZU1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcHBlcmlJY29uUmVnaXN0cnk6IFBlcHBlcmlJY29uUmVnaXN0cnkpIHtcclxuICAgICAgICB0aGlzLnBlcHBlcmlJY29uUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uU3lzdGVtTXVzdFxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==