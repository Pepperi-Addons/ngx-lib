import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SignaturePadModule } from 'angular2-signaturepad';
import { PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconModule, pepperiIconIndicatorDotPlaceholder } from '@pepperi-addons/ngx-lib/icon';
import { PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { PepperiAddressModule } from '@pepperi-addons/ngx-lib/address';
import { PepperiAttachmentModule } from '@pepperi-addons/ngx-lib/attachment';
import { PepperiCheckboxModule } from '@pepperi-addons/ngx-lib/checkbox';
import { PepperiDateModule } from '@pepperi-addons/ngx-lib/date';
import { PepperiImageModule } from '@pepperi-addons/ngx-lib/image';
import { PepperiImagesFilmstripModule } from '@pepperi-addons/ngx-lib/images-filmstrip';
import { PepperiInternalButtonModule } from '@pepperi-addons/ngx-lib/internal-button';
// import { PepperiInternalPageModule } from '@pepperi-addons/ngx-lib/internal-page';
import { PepperiMenuModule } from '@pepperi-addons/ngx-lib/menu';
import { PepperiQuantitySelectorModule } from '@pepperi-addons/ngx-lib/quantity-selector';
import { PepperiRichHtmlTextareaModule } from '@pepperi-addons/ngx-lib/rich-html-textarea';
import { PepperiSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepperiSeparatorModule } from '@pepperi-addons/ngx-lib/separator';
import { PepperiSignatureModule } from '@pepperi-addons/ngx-lib/signature';
import { PepperiTextareaModule } from '@pepperi-addons/ngx-lib/textarea';
import { PepperiTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepperiFormComponent } from './form.component';
import { PepperiFieldGeneratorComponent } from './field-generator.component';
import { PepperiIndicatorsComponent } from './indicators.component';
import { PepperiInternalPageComponent } from './internal-page.component';
import { PepperiInternalListComponent } from './internal-list.component';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/icon";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/cdk/bidi";
import * as i5 from "@angular/material/grid-list";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/cdk/scrolling";
import * as i9 from "@angular/material/menu";
import * as i10 from "angular2-signaturepad";
import * as i11 from "@pepperi-addons/ngx-lib";
import * as i12 from "@ngx-translate/core";
import * as i13 from "@pepperi-addons/ngx-lib/address";
import * as i14 from "@pepperi-addons/ngx-lib/attachment";
import * as i15 from "@pepperi-addons/ngx-lib/checkbox";
import * as i16 from "@pepperi-addons/ngx-lib/date";
import * as i17 from "@pepperi-addons/ngx-lib/image";
import * as i18 from "@pepperi-addons/ngx-lib/images-filmstrip";
import * as i19 from "@pepperi-addons/ngx-lib/internal-button";
import * as i20 from "@pepperi-addons/ngx-lib/menu";
import * as i21 from "@pepperi-addons/ngx-lib/quantity-selector";
import * as i22 from "@pepperi-addons/ngx-lib/rich-html-textarea";
import * as i23 from "@pepperi-addons/ngx-lib/select";
import * as i24 from "@pepperi-addons/ngx-lib/separator";
import * as i25 from "@pepperi-addons/ngx-lib/signature";
import * as i26 from "@pepperi-addons/ngx-lib/textarea";
import * as i27 from "@pepperi-addons/ngx-lib/textbox";
const pepperiComponentsModules = [
    PepperiAddressModule,
    PepperiAttachmentModule,
    PepperiCheckboxModule,
    PepperiDateModule,
    PepperiImageModule,
    PepperiImagesFilmstripModule,
    PepperiInternalButtonModule,
    // PepperiInternalPageModule,
    PepperiMenuModule,
    PepperiQuantitySelectorModule,
    PepperiRichHtmlTextareaModule,
    PepperiSelectModule,
    PepperiSeparatorModule,
    PepperiSignatureModule,
    PepperiTextareaModule,
    PepperiTextboxModule,
];
export class PepperiFormModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconIndicatorDotPlaceholder
        ]);
    }
}
PepperiFormModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiFormModule });
PepperiFormModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiFormModule_Factory(t) { return new (t || PepperiFormModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatGridListModule,
            MatIconModule,
            MatMenuModule,
            // External modules
            SignaturePadModule,
            // Pepperi modules
            PepperiModule,
            PepperiDialogModule,
            PepperiIconModule,
            pepperiComponentsModules,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiFormModule, { declarations: [PepperiFormComponent,
        PepperiFieldGeneratorComponent,
        PepperiIndicatorsComponent,
        PepperiInternalPageComponent,
        PepperiInternalListComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        // External modules
        SignaturePadModule,
        // Pepperi modules
        PepperiModule,
        PepperiDialogModule,
        PepperiIconModule, PepperiAddressModule,
        PepperiAttachmentModule,
        PepperiCheckboxModule,
        PepperiDateModule,
        PepperiImageModule,
        PepperiImagesFilmstripModule,
        PepperiInternalButtonModule,
        // PepperiInternalPageModule,
        PepperiMenuModule,
        PepperiQuantitySelectorModule,
        PepperiRichHtmlTextareaModule,
        PepperiSelectModule,
        PepperiSeparatorModule,
        PepperiSignatureModule,
        PepperiTextareaModule,
        PepperiTextboxModule], exports: [PepperiFormComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiFormModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatGridListModule,
                    MatIconModule,
                    MatMenuModule,
                    // External modules
                    SignaturePadModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiDialogModule,
                    PepperiIconModule,
                    pepperiComponentsModules,
                ],
                exports: [PepperiFormComponent],
                declarations: [
                    PepperiFormComponent,
                    PepperiFieldGeneratorComponent,
                    PepperiIndicatorsComponent,
                    PepperiInternalPageComponent,
                    PepperiInternalListComponent
                ],
            }]
    }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null); })();
i0.ɵɵsetComponentScope(PepperiInternalListComponent, [i2.NgClass, i2.NgComponentOutlet, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgPlural, i2.NgPluralCase, i3.ɵangular_packages_forms_forms_y, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.RangeValueAccessor, i3.CheckboxControlValueAccessor, i3.SelectControlValueAccessor, i3.SelectMultipleControlValueAccessor, i3.RadioControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.MinLengthValidator, i3.MaxLengthValidator, i3.PatternValidator, i3.CheckboxRequiredValidator, i3.EmailValidator, i3.FormControlDirective, i3.FormGroupDirective, i3.FormControlName, i3.FormGroupName, i3.FormArrayName, i3.NgModel, i3.NgModelGroup, i3.NgForm, i4.Dir, i5.MatGridList, i5.MatGridTile, i5.MatGridTileText, i6.MatLine, i5.MatGridTileHeaderCssMatStyler, i5.MatGridTileFooterCssMatStyler, i5.MatGridAvatarCssMatStyler, i7.MatIcon, i8.CdkScrollable, i9._MatMenu, i9.MatMenuItem, i9.MatMenuTrigger, i9.MatMenuContent, i10.SignaturePad, i11.ButtonBlurDirective, i11.MenuBlurDirective, i11.RtlClassDirective, i11.RtlDirectionDirective, i11.AttachDirective, i11.TargetDirective, i12.TranslateDirective, i1.PepperiIconComponent, i13.PepperiAddressComponent, i14.PepperiAttachmentComponent, i15.PepperiCheckboxComponent, i16.PepperiDateComponent, i17.PepperiImageComponent, i18.PepperiImagesFilmstripComponent, i19.PepperiInternalButtonComponent, i20.PepperiMenuComponent, i21.PepperiQuantitySelectorComponent, i22.PepperiRichHtmlTextareaComponent, i23.PepperiSelectComponent, i24.PepperiSeparatorComponent, i25.PepperiSignatureComponent, i26.PepperiTextareaComponent, i27.PepperiTextboxComponent, PepperiFormComponent,
    PepperiFieldGeneratorComponent,
    PepperiIndicatorsComponent,
    PepperiInternalPageComponent,
    PepperiInternalListComponent], [i2.AsyncPipe, i2.UpperCasePipe, i2.LowerCasePipe, i2.JsonPipe, i2.SlicePipe, i2.DecimalPipe, i2.PercentPipe, i2.TitleCasePipe, i2.CurrencyPipe, i2.DatePipe, i2.I18nPluralPipe, i2.I18nSelectPipe, i2.KeyValuePipe, i11.CapitalizePipe, i11.EncodePipe, i11.EscapePipe, i11.ReplaceLineBreaks, i11.DateFormatter, i11.DateStringFormatter, i11.SafeHtmlPipe, i11.SafePipe, i11.SplitUppercase, i11.ToNumber, i12.TranslatePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2Zvcm0vZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQ0gsaUJBQWlCLEVBRWpCLGtDQUFrQyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0s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QUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLHdCQUF3QjtpQkFDM0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLFlBQVksRUFBRTtvQkFDVixvQkFBb0I7b0JBQ3BCLDhCQUE4QjtvQkFDOUIsMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLDRCQUE0QjtpQkFDL0I7YUFDSjs7dUJBRk8sNEJBQTRCLHdzREFKNUIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTWF0Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XHJcblxyXG5pbXBvcnQgeyBTaWduYXR1cmVQYWRNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1zaWduYXR1cmVwYWQnO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHtcclxuICAgIFBlcHBlcmlJY29uTW9kdWxlLFxyXG4gICAgUGVwcGVyaUljb25SZWdpc3RyeSxcclxuICAgIHBlcHBlcmlJY29uSW5kaWNhdG9yRG90UGxhY2Vob2xkZXIgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9pY29uJztcclxuXHJcbmltcG9ydCB7IFBlcHBlcmlEaWFsb2dNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9kaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaUFkZHJlc3NNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9hZGRyZXNzJztcclxuaW1wb3J0IHsgUGVwcGVyaUF0dGFjaG1lbnRNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9hdHRhY2htZW50JztcclxuaW1wb3J0IHsgUGVwcGVyaUNoZWNrYm94TW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBQZXBwZXJpRGF0ZU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2RhdGUnO1xyXG5pbXBvcnQgeyBQZXBwZXJpSW1hZ2VNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9pbWFnZSc7XHJcbmltcG9ydCB7IFBlcHBlcmlJbWFnZXNGaWxtc3RyaXBNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9pbWFnZXMtZmlsbXN0cmlwJztcclxuaW1wb3J0IHsgUGVwcGVyaUludGVybmFsQnV0dG9uTW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvaW50ZXJuYWwtYnV0dG9uJztcclxuLy8gaW1wb3J0IHsgUGVwcGVyaUludGVybmFsUGFnZU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL2ludGVybmFsLXBhZ2UnO1xyXG5pbXBvcnQgeyBQZXBwZXJpTWVudU1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL21lbnUnO1xyXG5pbXBvcnQgeyBQZXBwZXJpUXVhbnRpdHlTZWxlY3Rvck1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL3F1YW50aXR5LXNlbGVjdG9yJztcclxuaW1wb3J0IHsgUGVwcGVyaVJpY2hIdG1sVGV4dGFyZWFNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9yaWNoLWh0bWwtdGV4dGFyZWEnO1xyXG5pbXBvcnQgeyBQZXBwZXJpU2VsZWN0TW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvc2VsZWN0JztcclxuaW1wb3J0IHsgUGVwcGVyaVNlcGFyYXRvck1vZHVsZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliL3NlcGFyYXRvcic7XHJcbmltcG9ydCB7IFBlcHBlcmlTaWduYXR1cmVNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9zaWduYXR1cmUnO1xyXG5pbXBvcnQgeyBQZXBwZXJpVGV4dGFyZWFNb2R1bGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi90ZXh0YXJlYSc7XHJcbmltcG9ydCB7IFBlcHBlcmlUZXh0Ym94TW9kdWxlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvdGV4dGJveCc7XHJcblxyXG5jb25zdCBwZXBwZXJpQ29tcG9uZW50c01vZHVsZXMgPSBbXHJcbiAgICBQZXBwZXJpQWRkcmVzc01vZHVsZSxcclxuICAgIFBlcHBlcmlBdHRhY2htZW50TW9kdWxlLFxyXG4gICAgUGVwcGVyaUNoZWNrYm94TW9kdWxlLFxyXG4gICAgUGVwcGVyaURhdGVNb2R1bGUsXHJcbiAgICBQZXBwZXJpSW1hZ2VNb2R1bGUsXHJcbiAgICBQZXBwZXJpSW1hZ2VzRmlsbXN0cmlwTW9kdWxlLFxyXG4gICAgUGVwcGVyaUludGVybmFsQnV0dG9uTW9kdWxlLFxyXG4gICAgLy8gUGVwcGVyaUludGVybmFsUGFnZU1vZHVsZSxcclxuICAgIFBlcHBlcmlNZW51TW9kdWxlLFxyXG4gICAgUGVwcGVyaVF1YW50aXR5U2VsZWN0b3JNb2R1bGUsXHJcbiAgICBQZXBwZXJpUmljaEh0bWxUZXh0YXJlYU1vZHVsZSxcclxuICAgIFBlcHBlcmlTZWxlY3RNb2R1bGUsXHJcbiAgICBQZXBwZXJpU2VwYXJhdG9yTW9kdWxlLFxyXG4gICAgUGVwcGVyaVNpZ25hdHVyZU1vZHVsZSxcclxuICAgIFBlcHBlcmlUZXh0YXJlYU1vZHVsZSxcclxuICAgIFBlcHBlcmlUZXh0Ym94TW9kdWxlLFxyXG5dO1xyXG5cclxuaW1wb3J0IHsgUGVwcGVyaUZvcm1Db21wb25lbnQgfSBmcm9tICcuL2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGVwcGVyaUZpZWxkR2VuZXJhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1nZW5lcmF0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGVwcGVyaUluZGljYXRvcnNDb21wb25lbnQgfSBmcm9tICcuL2luZGljYXRvcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGVwcGVyaUludGVybmFsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vaW50ZXJuYWwtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZXBwZXJpSW50ZXJuYWxMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnRlcm5hbC1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIC8vIE1hdGVyaWFsIG1vZHVsZXMsXHJcbiAgICAgICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcclxuICAgICAgICAvLyBFeHRlcm5hbCBtb2R1bGVzXHJcbiAgICAgICAgU2lnbmF0dXJlUGFkTW9kdWxlLFxyXG4gICAgICAgIC8vIFBlcHBlcmkgbW9kdWxlc1xyXG4gICAgICAgIFBlcHBlcmlNb2R1bGUsXHJcbiAgICAgICAgUGVwcGVyaURpYWxvZ01vZHVsZSxcclxuICAgICAgICBQZXBwZXJpSWNvbk1vZHVsZSxcclxuICAgICAgICBwZXBwZXJpQ29tcG9uZW50c01vZHVsZXMsXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1BlcHBlcmlGb3JtQ29tcG9uZW50XSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBlcHBlcmlGb3JtQ29tcG9uZW50LFxyXG4gICAgICAgIFBlcHBlcmlGaWVsZEdlbmVyYXRvckNvbXBvbmVudCxcclxuICAgICAgICBQZXBwZXJpSW5kaWNhdG9yc0NvbXBvbmVudCxcclxuICAgICAgICBQZXBwZXJpSW50ZXJuYWxQYWdlQ29tcG9uZW50LFxyXG4gICAgICAgIFBlcHBlcmlJbnRlcm5hbExpc3RDb21wb25lbnRcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpRm9ybU1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcHBlcmlJY29uUmVnaXN0cnk6IFBlcHBlcmlJY29uUmVnaXN0cnkpIHtcclxuICAgICAgICB0aGlzLnBlcHBlcmlJY29uUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbXHJcbiAgICAgICAgICAgIHBlcHBlcmlJY29uSW5kaWNhdG9yRG90UGxhY2Vob2xkZXJcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufVxyXG4iXX0=