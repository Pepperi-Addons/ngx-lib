import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './core/http/interceptors/index';
import { RtlClassDirective, RtlDirectionDirective } from './core/layout/rtl.directive';
import { CapitalizePipe, EncodePipe, EscapePipe, ReplaceLineBreaks, DateFormatter, DateStringFormatter, SafeHtmlPipe, SafePipe, SplitUppercase, ToNumber } from './core/common/pipes/common-pipes';
import { ButtonBlurDirective } from './core/common/directives/button-blur.directive';
import { MenuBlurDirective } from './core/common/directives/menu-blur.directive';
import { AttachDirective } from './core/portal/attach.directive';
import { TargetDirective } from './core/portal/target.directive';
import { TranslateModule, } from '@ngx-translate/core';
import * as i0 from "@angular/core";
const layoutList = [
    RtlClassDirective,
    RtlDirectionDirective,
];
const pipeList = [
    CapitalizePipe,
    EncodePipe,
    EscapePipe,
    ReplaceLineBreaks,
    DateFormatter,
    DateStringFormatter,
    SafeHtmlPipe,
    SafePipe,
    SplitUppercase,
    ToNumber
];
const utilitiesList = [
    ButtonBlurDirective,
    MenuBlurDirective
];
const portalList = [
    AttachDirective,
    TargetDirective
];
// export class Loader implements TranslateLoader {
//     private translations = new Subject();
//     $translations = this.translations.asObservable();
//     getTranslation(lang: string) {
//         console.log(`called with ${lang}`);
//         return this.$translations;
//     }
// }
// export class Missing implements MissingTranslationHandler {
//     handle(params: MissingTranslationHandlerParams) {
//         return 'missing in libary...';
//     }
// }
// export function LoaderFactory() {
//     return new Loader();
// }
export class PepperiModule {
}
PepperiModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiModule });
PepperiModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiModule_Factory(t) { return new (t || PepperiModule)(); }, providers: [
        httpInterceptorProviders,
    ], imports: [[
            CommonModule,
            HttpClientModule,
            BrowserModule,
            BrowserAnimationsModule,
            ReactiveFormsModule,
            FormsModule,
        ], TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiModule, { declarations: [CapitalizePipe,
        EncodePipe,
        EscapePipe,
        ReplaceLineBreaks,
        DateFormatter,
        DateStringFormatter,
        SafeHtmlPipe,
        SafePipe,
        SplitUppercase,
        ToNumber, ButtonBlurDirective,
        MenuBlurDirective, RtlClassDirective,
        RtlDirectionDirective, AttachDirective,
        TargetDirective], imports: [CommonModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule], exports: [CapitalizePipe,
        EncodePipe,
        EscapePipe,
        ReplaceLineBreaks,
        DateFormatter,
        DateStringFormatter,
        SafeHtmlPipe,
        SafePipe,
        SplitUppercase,
        ToNumber, ButtonBlurDirective,
        MenuBlurDirective, RtlClassDirective,
        RtlDirectionDirective, AttachDirective,
        TargetDirective, TranslateModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    pipeList,
                    utilitiesList,
                    layoutList,
                    portalList
                ],
                providers: [
                    httpInterceptorProviders,
                ],
                imports: [
                    CommonModule,
                    HttpClientModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    ReactiveFormsModule,
                    FormsModule,
                ],
                exports: [
                    pipeList,
                    utilitiesList,
                    layoutList,
                    portalList,
                    TranslateModule
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NyYy9uZ3gtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTXZGLE9BQU8sRUFDSCxjQUFjLEVBQ2QsVUFBVSxFQUNWLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLG1CQUFtQixFQUNuQixZQUFZLEVBQ1osUUFBUSxFQUNSLGNBQWMsRUFDZCxRQUFRLEVBQ1gsTUFBTSxrQ0FBa0MsQ0FBQztBQWMxQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQU1qRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBT2pFLE9BQU8sRUFDSCxlQUFlLEdBS2xCLE1BQU0scUJBQXFCLENBQUM7O0FBbkQ3QixNQUFNLFVBQVUsR0FBRztJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7Q0FDeEIsQ0FBQztBQWNGLE1BQU0sUUFBUSxHQUFHO0lBQ2IsY0FBYztJQUNkLFVBQVU7SUFDVixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFFBQVE7SUFDUixjQUFjO0lBQ2QsUUFBUTtDQUNYLENBQUM7QUFJRixNQUFNLGFBQWEsR0FBRztJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCLENBQUM7QUFLRixNQUFNLFVBQVUsR0FBRztJQUNmLGVBQWU7SUFDZixlQUFlO0NBQ2xCLENBQUM7QUFVRixtREFBbUQ7QUFDbkQsNENBQTRDO0FBRTVDLHdEQUF3RDtBQUN4RCxxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLHFDQUFxQztBQUNyQyxRQUFRO0FBQ1IsSUFBSTtBQUVKLDhEQUE4RDtBQUM5RCx3REFBd0Q7QUFDeEQseUNBQXlDO0FBQ3pDLFFBQVE7QUFDUixJQUFJO0FBRUosb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQixJQUFJO0FBdUNKLE1BQU0sT0FBTyxhQUFhOztpREFBYixhQUFhO3lHQUFiLGFBQWEsbUJBOUJYO1FBQ1Asd0JBQXdCO0tBRTNCLFlBQ1E7WUFDTCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLFdBQVc7U0FXZCxFQU1HLGVBQWU7d0ZBR1YsYUFBYSxtQkE1RnRCLGNBQWM7UUFDZCxVQUFVO1FBQ1YsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixRQUFRO1FBQ1IsY0FBYztRQUNkLFFBQVEsRUFNUixtQkFBbUI7UUFDbkIsaUJBQWlCLEVBakNqQixpQkFBaUI7UUFDakIscUJBQXFCLEVBdUNyQixlQUFlO1FBQ2YsZUFBZSxhQTJDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFdBQVcsYUF4RWYsY0FBYztRQUNkLFVBQVU7UUFDVixVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFFBQVE7UUFDUixjQUFjO1FBQ2QsUUFBUSxFQU1SLG1CQUFtQjtRQUNuQixpQkFBaUIsRUFqQ2pCLGlCQUFpQjtRQUNqQixxQkFBcUIsRUF1Q3JCLGVBQWU7UUFDZixlQUFlLEVBaUVYLGVBQWU7a0RBR1YsYUFBYTtjQXJDekIsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixRQUFRO29CQUNSLGFBQWE7b0JBQ2IsVUFBVTtvQkFDVixVQUFVO2lCQUNiO2dCQUNELFNBQVMsRUFBRTtvQkFDUCx3QkFBd0I7aUJBRTNCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsV0FBVztpQkFXZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsUUFBUTtvQkFDUixhQUFhO29CQUNiLFVBQVU7b0JBQ1YsVUFBVTtvQkFDVixlQUFlO2lCQUNsQjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBodHRwSW50ZXJjZXB0b3JQcm92aWRlcnMgfSBmcm9tICcuL2NvcmUvaHR0cC9pbnRlcmNlcHRvcnMvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgUnRsQ2xhc3NEaXJlY3RpdmUsIFJ0bERpcmVjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vY29yZS9sYXlvdXQvcnRsLmRpcmVjdGl2ZSc7XHJcbmNvbnN0IGxheW91dExpc3QgPSBbXHJcbiAgICBSdGxDbGFzc0RpcmVjdGl2ZSxcclxuICAgIFJ0bERpcmVjdGlvbkRpcmVjdGl2ZSxcclxuXTtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDYXBpdGFsaXplUGlwZSxcclxuICAgIEVuY29kZVBpcGUsXHJcbiAgICBFc2NhcGVQaXBlLFxyXG4gICAgUmVwbGFjZUxpbmVCcmVha3MsXHJcbiAgICBEYXRlRm9ybWF0dGVyLFxyXG4gICAgRGF0ZVN0cmluZ0Zvcm1hdHRlcixcclxuICAgIFNhZmVIdG1sUGlwZSxcclxuICAgIFNhZmVQaXBlLFxyXG4gICAgU3BsaXRVcHBlcmNhc2UsXHJcbiAgICBUb051bWJlclxyXG59IGZyb20gJy4vY29yZS9jb21tb24vcGlwZXMvY29tbW9uLXBpcGVzJztcclxuY29uc3QgcGlwZUxpc3QgPSBbXHJcbiAgICBDYXBpdGFsaXplUGlwZSxcclxuICAgIEVuY29kZVBpcGUsXHJcbiAgICBFc2NhcGVQaXBlLFxyXG4gICAgUmVwbGFjZUxpbmVCcmVha3MsXHJcbiAgICBEYXRlRm9ybWF0dGVyLFxyXG4gICAgRGF0ZVN0cmluZ0Zvcm1hdHRlcixcclxuICAgIFNhZmVIdG1sUGlwZSxcclxuICAgIFNhZmVQaXBlLFxyXG4gICAgU3BsaXRVcHBlcmNhc2UsXHJcbiAgICBUb051bWJlclxyXG5dO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uQmx1ckRpcmVjdGl2ZSB9IGZyb20gJy4vY29yZS9jb21tb24vZGlyZWN0aXZlcy9idXR0b24tYmx1ci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNZW51Qmx1ckRpcmVjdGl2ZSB9IGZyb20gJy4vY29yZS9jb21tb24vZGlyZWN0aXZlcy9tZW51LWJsdXIuZGlyZWN0aXZlJztcclxuY29uc3QgdXRpbGl0aWVzTGlzdCA9IFtcclxuICAgIEJ1dHRvbkJsdXJEaXJlY3RpdmUsXHJcbiAgICBNZW51Qmx1ckRpcmVjdGl2ZVxyXG5dO1xyXG5cclxuaW1wb3J0IHsgQXR0YWNoRGlyZWN0aXZlIH0gZnJvbSAnLi9jb3JlL3BvcnRhbC9hdHRhY2guZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGFyZ2V0RGlyZWN0aXZlIH0gZnJvbSAnLi9jb3JlL3BvcnRhbC90YXJnZXQuZGlyZWN0aXZlJztcclxuXHJcbmNvbnN0IHBvcnRhbExpc3QgPSBbXHJcbiAgICBBdHRhY2hEaXJlY3RpdmUsXHJcbiAgICBUYXJnZXREaXJlY3RpdmVcclxuXTtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBUcmFuc2xhdGVNb2R1bGUsXHJcbiAgICAvLyBUcmFuc2xhdGVMb2FkZXIsXHJcbiAgICAvLyBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgLy8gTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcixcclxuICAgIC8vIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJQYXJhbXNcclxufSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBMb2FkZXIgaW1wbGVtZW50cyBUcmFuc2xhdGVMb2FkZXIge1xyXG4vLyAgICAgcHJpdmF0ZSB0cmFuc2xhdGlvbnMgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgXHJcbi8vICAgICAkdHJhbnNsYXRpb25zID0gdGhpcy50cmFuc2xhdGlvbnMuYXNPYnNlcnZhYmxlKCk7XHJcbi8vICAgICBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhgY2FsbGVkIHdpdGggJHtsYW5nfWApO1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLiR0cmFuc2xhdGlvbnM7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBNaXNzaW5nIGltcGxlbWVudHMgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB7XHJcbi8vICAgICBoYW5kbGUocGFyYW1zOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zKSB7XHJcbi8vICAgICAgICAgcmV0dXJuICdtaXNzaW5nIGluIGxpYmFyeS4uLic7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBMb2FkZXJGYWN0b3J5KCkge1xyXG4vLyAgICAgcmV0dXJuIG5ldyBMb2FkZXIoKTtcclxuLy8gfVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIHBpcGVMaXN0LFxyXG4gICAgICAgIHV0aWxpdGllc0xpc3QsXHJcbiAgICAgICAgbGF5b3V0TGlzdCxcclxuICAgICAgICBwb3J0YWxMaXN0XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgaHR0cEludGVyY2VwdG9yUHJvdmlkZXJzLCBcclxuICAgICAgICAvLyBUcmFuc2xhdGVTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICAvLyBUcmFuc2xhdGVNb2R1bGUuZm9yQ2hpbGQoe1xyXG4gICAgICAgIC8vICAgICBsb2FkZXI6IHtcclxuICAgICAgICAvLyAgICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcclxuICAgICAgICAvLyAgICAgICAgIHVzZUZhY3Rvcnk6IExvYWRlckZhY3RvcnlcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgbWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcjoge1xyXG4gICAgICAgIC8vICAgICAgICAgcHJvdmlkZTogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcixcclxuICAgICAgICAvLyAgICAgICAgIHVzZUNsYXNzOiBNaXNzaW5nXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KSxcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgcGlwZUxpc3QsXHJcbiAgICAgICAgdXRpbGl0aWVzTGlzdCxcclxuICAgICAgICBsYXlvdXRMaXN0LFxyXG4gICAgICAgIHBvcnRhbExpc3QsXHJcbiAgICAgICAgVHJhbnNsYXRlTW9kdWxlXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaU1vZHVsZSB7XHJcbiAgICAvLyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFBlcHBlcmlNb2R1bGU+IHtcclxuICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICBuZ01vZHVsZTogUGVwcGVyaU1vZHVsZSxcclxuICAgIC8vICAgICAgICAgcHJvdmlkZXJzOiBbQ3VzdG9taXphdGlvblNlcnZpY2VdXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzdGF0aWMgZm9yUm9vdCgpIHtcclxuICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgbmdNb2R1bGU6IFBlcHBlcmlNb2R1bGUsXHJcbiAgICAvLyAgICAgICBwcm92aWRlcnM6IFsgQ3VzdG9taXphdGlvblNlcnZpY2UgXVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxufVxyXG4iXX0=