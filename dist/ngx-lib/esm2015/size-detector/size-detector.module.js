import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { SizeDetectorComponent } from './size-detector.component';
import * as i0 from "@angular/core";
export class PepperiSizeDetectorModule {
}
PepperiSizeDetectorModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiSizeDetectorModule });
PepperiSizeDetectorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiSizeDetectorModule_Factory(t) { return new (t || PepperiSizeDetectorModule)(); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            FlexLayoutModule,
            // Pepperi modules
            PepperiModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiSizeDetectorModule, { declarations: [SizeDetectorComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        // Pepperi modules
        PepperiModule], exports: [SizeDetectorComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiSizeDetectorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    FlexLayoutModule,
                    // Pepperi modules
                    PepperiModule,
                ],
                exports: [SizeDetectorComponent],
                declarations: [SizeDetectorComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l6ZS1kZXRlY3Rvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NpemUtZGV0ZWN0b3Ivc2l6ZS1kZXRlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7QUFjakUsTUFBTSxPQUFPLHlCQUF5Qjs7NkRBQXpCLHlCQUF5QjtpSUFBekIseUJBQXlCLGtCQVh6QjtZQUNMLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsYUFBYTtTQUNoQjt3RkFJUSx5QkFBeUIsbUJBRm5CLHFCQUFxQixhQVJoQyxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGFBQWEsYUFFUCxxQkFBcUI7a0RBR3RCLHlCQUF5QjtjQVpyQyxRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixhQUFhO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDaEMsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcblxyXG5pbXBvcnQgeyBQZXBwZXJpTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5cclxuaW1wb3J0IHsgU2l6ZURldGVjdG9yQ29tcG9uZW50fSBmcm9tICcuL3NpemUtZGV0ZWN0b3IuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgRmxleExheW91dE1vZHVsZSxcclxuICAgICAgICAvLyBQZXBwZXJpIG1vZHVsZXNcclxuICAgICAgICBQZXBwZXJpTW9kdWxlLFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtTaXplRGV0ZWN0b3JDb21wb25lbnRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbU2l6ZURldGVjdG9yQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlTaXplRGV0ZWN0b3JNb2R1bGUge31cclxuIl19