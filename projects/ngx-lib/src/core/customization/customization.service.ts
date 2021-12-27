import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { PepSessionService } from '../common/services/session.service';
import { PepFileService } from '../common/services/file.service';
import { PepStyleType, PepFieldBase } from './customization.model';

@Injectable({
    providedIn: 'root',
})
export class PepCustomizationService {
    static STAND_ALONE_FIELD_CLASS_NAME = 'pep-field';
    static STAND_ALONE_FIELD_NO_SPACING_CLASS_NAME = 'pep-field-no-spacing';

    static REM_STRING = 'rem';
    static PX_STRING = 'px';
    static USER_THEME = 'user_theme';
    static USER_COLOR = 'user_color';
    static USER_THEME_VARIABLES = 'user_theme_variables';

    // Header height
    static HEADER_HEIGHT_KEY = '--pep-header-height';

    // Side bar variables keys
    static SIDE_BAR_WIDTH_KEY = '--pep-side-bar-width';

    // Settings width
    static SETTINGS_WIDTH_KEY = '--pep-settings-bar-width';

    // Top bar variables keys
    static TOP_BAR_SPACING_TOP_KEY = '--pep-top-bar-spacing-top';
    static TOP_BAR_SPACING_BOTTOM_KEY = '--pep-top-bar-spacing-bottom';
    static TOP_BAR_FIELD_HEIGHT_KEY = '--pep-top-bar-field-height';

    // Footer variables keys
    static FOOTER_HEIGHT_KEY = '--pep-footer-bar-height';
    static FOOTER_BAR_SPACING_TOP_KEY = '--pep-footer-bar-spacing-top';
    static FOOTER_BAR_SPACING_BOTTOM_KEY = '--pep-footer-bar-spacing-bottom';

    // Main container height
    static MAIN_HEIGHT_KEY = '--pep-main-height';

    // Colors variables keys
    static COLOR_USER_PRIMARY_KEY = '--pep-color-user-primary';
    static COLOR_USER_SECONDARY_KEY = '--pep-color-user-secondary';
    static COLOR_SYSTEM_PRIMARY_INVERT_KEY =
        '--pep-color-system-primary-invert';
    static COLOR_SYSTEM_PRIMARY_KEY = '--pep-color-system-primary';
    static COLOR_TEXT_LINK_KEY = '--pep-color-text-link';
    static COLOR_SYSTEM_CAUTION_KEY = '--pep-color-system-caution';
    static COLOR_SYSTEM_SUCCESS_KEY = '--pep-color-system-success';
    static COLOR_STRONG_KEY = '--pep-color-strong';
    static COLOR_REGULAR_KEY = '--pep-color-regular';
    static COLOR_WEAK_KEY = '--pep-color-weak';

    // Top header variables keys
    static COLOR_TOP_HEADER_KEY = '--pep-color-top-header';
    static STYLE_TOP_HEADER_KEY = '--pep-style-top-header';

    // QS variables keys
    static COLOR_QS_KEY = '--pep-color-qs';
    static STYLE_QS_KEY = '--pep-style-qs';

    // Fonts variables keys
    static FONT_FAMILY_TITLE_KEY = '--pep-font-family-title';
    static FONT_FAMILY_TITLE_NORMAL_URL_KEY =
        '--pep-font-family-title-normal-url';
    static FONT_FAMILY_TITLE_BOLD_URL_KEY = '--pep-font-family-title-bold-url';
    static FONT_FAMILY_BODY_KEY = '--pep-font-family-body';
    static FONT_FAMILY_BODY_NORMAL_URL_KEY =
        '--pep-font-family-body-normal-url';
    static FONT_FAMILY_BODY_BOLD_URL_KEY = '--pep-font-family-body-bold-url';

    // Border radius variables keys
    static BORDER_RADIUS_KEY = '--pep-border-radius';
    static BORDER_RADIUS_SM_KEY =
        PepCustomizationService.BORDER_RADIUS_KEY + '-sm';
    static BORDER_RADIUS_MD_KEY =
        PepCustomizationService.BORDER_RADIUS_KEY + '-md';
    static BORDER_RADIUS_LG_KEY =
        PepCustomizationService.BORDER_RADIUS_KEY + '-lg';

    // Fonts variables keys
    static FONT_SIZE_2XS_KEY = '--pep-font-size-2xs';
    static FONT_SIZE_XS_KEY = '--pep-font-size-xs';
    static FONT_SIZE_SM_KEY = '--pep-font-size-sm';
    static FONT_SIZE_MD_KEY = '--pep-font-size-md';
    static FONT_SIZE_LG_KEY = '--pep-font-size-lg';
    static FONT_SIZE_XL_KEY = '--pep-font-size-xl';
    static FONT_SIZE_2XL_KEY = '--pep-font-size-2xl';

    // Line height variables keys
    static LINE_HEIGHT_2XS_KEY = '--pep-line-height-2xs';
    static LINE_HEIGHT_XS_KEY = '--pep-line-height-xs';
    static LINE_HEIGHT_SM_KEY = '--pep-line-height-sm';
    static LINE_HEIGHT_MD_KEY = '--pep-line-height-md';
    static LINE_HEIGHT_LG_KEY = '--pep-line-height-lg';
    static LINE_HEIGHT_XL_KEY = '--pep-line-height-xl';
    static LINE_HEIGHT_2XL_KEY = '--pep-line-height-2xl';

    // Shadows offset variables keys
    static SHADOW_NONE_OFFSET_KEY = '--pep-shadow-none-offset';
    static SHADOW_XS_OFFSET_KEY = '--pep-shadow-xs-offset';
    static SHADOW_SM_OFFSET_KEY = '--pep-shadow-sm-offset';
    static SHADOW_MD_OFFSET_KEY = '--pep-shadow-md-offset';
    static SHADOW_LG_OFFSET_KEY = '--pep-shadow-lg-offset';
    static SHADOW_XL_OFFSET_KEY = '--pep-shadow-xl-offset';

    // Spacing variables keys
    static SPACING_SIZE_2XS_KEY = '--pep-spacing-2xs';
    static SPACING_SIZE_XS_KEY = '--pep-spacing-xs';
    static SPACING_SIZE_SM_KEY = '--pep-spacing-sm';
    static SPACING_SIZE_MD_KEY = '--pep-spacing-md';
    static SPACING_SIZE_LG_KEY = '--pep-spacing-lg';
    static SPACING_SIZE_XL_KEY = '--pep-spacing-xl';
    static SPACING_SIZE_2XL_KEY = '--pep-spacing-2xl';
    static SPACING_SIZE_3XL_KEY = '--pep-spacing-3xl';
    static SPACING_SIZE_4XL_KEY = '--pep-spacing-4xl';
    static SPACING_SIZE_5XL_KEY = '--pep-spacing-5xl';
    static SPACING_SIZE_6XL_KEY = '--pep-spacing-6xl';
    static SPACING_SIZE_7XL_KEY = '--pep-spacing-7xl';
    static SPACING_SIZE_8XL_KEY = '--pep-spacing-8xl';
    static SPACING_SIZE_9XL_KEY = '--pep-spacing-9xl';

    // Form variables keys
    static FORM_FIELD_HEIGHT_KEY = '--pep-form-field-height';
    static FORM_FIELD_TITLE_HEIGHT_KEY = '--pep-form-field-title-height';
    static FORM_FIELD_SPACEING_KEY = '--pep-form-field-spacing';
    static FORM_SPACEING_KEY = '--pep-form-spacing';

    // Card variables keys
    static CARD_FIELD_HEIGHT_KEY = '--pep-card-field-height';
    static CARD_SPACEING_KEY = '--pep-card-spacing';
    static CARD_SHADOW_OFFSET_KEY = '--pep-shadow-card-offset';
    static CARD_BORDER_RADIUS_KEY = '--pep-card-border-radius';

    // Table variables keys
    static TABLE_FIELD_HEIGHT_KEY = '--pep-table-field-height';
    static TABLE_SPACEING_KEY = '--pep-table-spacing';
    static TABLE_BORDER_RADIUS_KEY = '--pep-table-border-radius';

    static DEFAULT_HEADER_HEIGHT = 64; // Default

    static DEFAULT_SPINNER_COLOR = '#78aa00';
    static DEFAULT_BRANDING_COLOR = '#fff';

    public hasCustomHomepage: boolean = null;
    public hasCustomHeader: boolean = null;
    public customHeaderHeight = PepCustomizationService.DEFAULT_HEADER_HEIGHT;
    public mainContHeight = 0;
    public footerHeight = new BehaviorSubject<number>(0);
    public settingsWidth = new BehaviorSubject<number>(0);

    constructor(
        private sessionService: PepSessionService,
        private fileService: PepFileService,
        public fb: FormBuilder
    ) {
        this.hideFooter();
        //
    }

    getDefaultFromGroup(field: PepFieldBase, withValidators = true): FormGroup {
        const validators = withValidators ? field.getValidators() : [];
        const group = {};
        group[field.key] = [
            { value: field.value, disabled: field.disabled },
            validators,
        ];
        return this.fb.group(group);
    }

    getFormControl(
        form: FormGroup,
        fieldKey: string,
        parentFieldKey: string = null
    ): any {
        let formControl = null;

        if (form && form.controls) {
            if (parentFieldKey === null) {
                formControl = form.controls[fieldKey];
            } else {
                formControl = form.controls[parentFieldKey]?.get(fieldKey);
            }
        }

        return formControl;
    }

    updateFormFieldValue(
        form: FormGroup,
        fieldKey: string,
        value = '',
        parentFieldKey: string = null
    ): void {
        const formControl = this.getFormControl(form, fieldKey, parentFieldKey);
        if (formControl) {
            formControl.setValue(value);
        }
    }

    updateFormField(
        form: FormGroup,
        field: PepFieldBase,
        value = '',
        parentField: PepFieldBase = null
    ): void {
        const formControl: FormControl = this.getFormControl(
            form,
            field.key,
            parentField?.key
        );
        if (formControl) {
            formControl.setValue(value);

            // If disabled has changed.
            if (formControl.disabled !== field.disabled) {
                field.disabled ? formControl.disable() : formControl.enable();

                const validators = field.getValidators();
                formControl.setValidators(validators);
            }
        }
    }

    calculateFormFieldHeight(
        withTitle = true,
        rowSpan = 1,
        standAlone = false
    ): number {
        const themeVars = this.getThemeVariables();
        const rowFieldHeight = this.getNumberThemeVariable(
            themeVars,
            PepCustomizationService.FORM_FIELD_HEIGHT_KEY
        );
        const rowFieldTitleHeight = this.getNumberThemeVariable(
            themeVars,
            PepCustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY
        );
        const rowFieldSpacingBottom = this.getNumberThemeVariable(
            themeVars,
            PepCustomizationService.FORM_SPACEING_KEY
        );

        let fieldHeight = 0;
        if (rowSpan === 1) {
            fieldHeight =
                (withTitle ? rowFieldTitleHeight : 0) + rowFieldHeight;
        } else {
            const rowSpanCalc = withTitle ? rowSpan : rowSpan - 1;
            fieldHeight =
                rowSpan * rowFieldHeight +
                rowSpanCalc * rowFieldTitleHeight +
                (standAlone ? 0 : rowSpanCalc * rowFieldSpacingBottom);
        }

        return fieldHeight;
    }

    calculateCardRowsHeight(rowsCount = 1, withSpacing = true): number {
        const themeVars = this.getThemeVariables();
        const cardFieldHeight = this.getNumberThemeVariable(
            themeVars,
            PepCustomizationService.CARD_FIELD_HEIGHT_KEY
        );
        const cardFieldSpacing = this.getNumberThemeVariable(
            themeVars,
            PepCustomizationService.CARD_SPACEING_KEY
        );

        const fieldHeight =
            rowsCount * cardFieldHeight +
            (rowsCount - 1) * (withSpacing ? cardFieldSpacing : 0);
        return fieldHeight;
    }

    calculateTableRowsHeight(rowsCount = 1, withSpacing = true): number {
        const themeVars = this.getThemeVariables();
        const tableFieldHeight = this.getNumberThemeVariable(
            themeVars,
            PepCustomizationService.TABLE_FIELD_HEIGHT_KEY
        );
        const tableFieldSpacing = this.getNumberThemeVariable(
            themeVars,
            PepCustomizationService.TABLE_SPACEING_KEY
        );

        const fieldHeight =
            rowsCount *
            (tableFieldHeight + (withSpacing ? tableFieldSpacing * 2 : 0));
        return fieldHeight;
    }

    calculateFieldHeight(layoutType = 'form', rowSpan, standAlone): string {
        let fieldHeight = 'inherit'; // Default for card (with no title)
        if (layoutType === 'table') {
            fieldHeight = this.getThemeVariable(
                PepCustomizationService.TABLE_FIELD_HEIGHT_KEY
            );
        } else if (layoutType === 'card') {
            fieldHeight =
                this.calculateCardRowsHeight(rowSpan, !standAlone) +
                PepCustomizationService.REM_STRING;
        } else {
            // Form
            fieldHeight =
                this.calculateFormFieldHeight(false, rowSpan, standAlone) +
                PepCustomizationService.REM_STRING;
        }

        return fieldHeight;
    }

    getBrandingTheme(): string {
        const themeObj = this.sessionService.getObject(
            PepCustomizationService.USER_THEME
        );
        return (themeObj && themeObj.Theme) || 'default-theme'; // 'light-theme';
    }

    getDefaultThemeLayoutVariables(themeVars: any): void {
        // Declare default screen sizes.
        themeVars['--pep-screen-max-size-2xs'] =
            '460' + PepCustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-xs'] =
            '767' + PepCustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-sm'] =
            '991' + PepCustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-md'] =
            '1199' + PepCustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-lg'] =
            '1366' + PepCustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-xl'] =
            '1920' + PepCustomizationService.PX_STRING;

        // Declare default top bar.
        themeVars[PepCustomizationService.SIDE_BAR_WIDTH_KEY] =
            '16' + PepCustomizationService.REM_STRING;

        // Declare default top bar.
        themeVars[PepCustomizationService.TOP_BAR_SPACING_TOP_KEY] =
            '1.5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.TOP_BAR_SPACING_BOTTOM_KEY] =
            '0.5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.TOP_BAR_FIELD_HEIGHT_KEY] =
            '2.5' + PepCustomizationService.REM_STRING;

        // Declare default footer.
        themeVars[PepCustomizationService.FOOTER_BAR_SPACING_TOP_KEY] =
            '0.75' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.FOOTER_BAR_SPACING_BOTTOM_KEY] =
            '1.25' + PepCustomizationService.REM_STRING;
    }

    getDefaultThemeBorderRadiusVariables(themeVars: any): void {
        themeVars[PepCustomizationService.BORDER_RADIUS_SM_KEY] =
            '0.125' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.BORDER_RADIUS_MD_KEY] =
            '0.25' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.BORDER_RADIUS_LG_KEY] =
            '0.5' + PepCustomizationService.REM_STRING;
    }

    getDefaultThemeSpacingVariables(themeVars: any): void {
        themeVars[PepCustomizationService.SPACING_SIZE_2XS_KEY] =
            '0.125' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_XS_KEY] =
            '0.25' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_SM_KEY] =
            '0.5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_MD_KEY] =
            '0.75' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_LG_KEY] =
            '1' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_XL_KEY] =
            '1.5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_2XL_KEY] =
            '2' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_3XL_KEY] =
            '2.5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_4XL_KEY] =
            '3' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_5XL_KEY] =
            '3.5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_6XL_KEY] =
            '5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_7XL_KEY] =
            '6' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_8XL_KEY] =
            '8' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.SPACING_SIZE_9XL_KEY] =
            '16' + PepCustomizationService.REM_STRING;
    }

    getDefaultThemeFontsVariables(themeVars: any): void {
        // Title font family
        themeVars[PepCustomizationService.FONT_FAMILY_TITLE_KEY] = 'Nexa';

        // Body font family
        themeVars[PepCustomizationService.FONT_FAMILY_BODY_KEY] = 'Inter';

        // Font sizes
        themeVars[PepCustomizationService.FONT_SIZE_2XS_KEY] =
            '0.625' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.FONT_SIZE_XS_KEY] =
            '0.75' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.FONT_SIZE_SM_KEY] =
            '0.875' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.FONT_SIZE_MD_KEY] =
            '1' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.FONT_SIZE_LG_KEY] =
            '1.125' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.FONT_SIZE_XL_KEY] =
            '1.25' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.FONT_SIZE_2XL_KEY] =
            '1.5' + PepCustomizationService.REM_STRING;

        // Line height
        themeVars[PepCustomizationService.LINE_HEIGHT_2XS_KEY] =
            '0.75' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.LINE_HEIGHT_XS_KEY] =
            '1' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.LINE_HEIGHT_SM_KEY] =
            '1.25' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.LINE_HEIGHT_MD_KEY] =
            '1.5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.LINE_HEIGHT_LG_KEY] =
            '1.75' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.LINE_HEIGHT_XL_KEY] =
            '2' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.LINE_HEIGHT_2XL_KEY] =
            '2.25' + PepCustomizationService.REM_STRING;

        // Font weight
        themeVars['--pep-font-weight-normal'] = 400;
        themeVars['--pep-font-weight-bold'] = 600;
        themeVars['--pep-font-weight-bolder'] = 800;
    }

    getDefaultThemeButtonsVariables(themeVars: any): void {
        themeVars['--pep-button-2xs-horizontal-spacing'] =
            '0.25' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-2xs-min-width'] =
            '1' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-2xs-height'] =
            '1' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-2xs-font-size'] =
            'var(' + PepCustomizationService.FONT_SIZE_2XS_KEY + ')';
        // themeVars['--pep-button-2xs-icon-horizontal-spacing'] = '0.125' + PepCustomizationService.REM_STRING;

        themeVars['--pep-button-xs-horizontal-spacing'] =
            '0.5' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-xs-min-width'] =
            '1.5' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-xs-height'] =
            '1.5' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-xs-font-size'] =
            'var(' + PepCustomizationService.FONT_SIZE_XS_KEY + ')';
        // themeVars['--pep-button-xs-icon-horizontal-spacing'] = '0.25' + PepCustomizationService.REM_STRING;

        themeVars['--pep-button-sm-horizontal-spacing'] =
            '0.75' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-sm-min-width'] =
            '2' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-sm-height'] =
            '2' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-sm-font-size'] =
            'var(' + PepCustomizationService.FONT_SIZE_SM_KEY + ')';
        // themeVars['--pep-button-sm-icon-horizontal-spacing'] = '0.5' + PepCustomizationService.REM_STRING;

        themeVars['--pep-button-md-horizontal-spacing'] =
            '1' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-md-min-width'] =
            '2.5' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-md-height'] =
            '2.5' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-md-font-size'] =
            'var(' + PepCustomizationService.FONT_SIZE_MD_KEY + ')';
        // themeVars['--pep-button-md-icon-horizontal-spacing'] = '0.5' + PepCustomizationService.REM_STRING;

        themeVars['--pep-button-lg-horizontal-spacing'] =
            '1' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-lg-min-width'] =
            '3' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-lg-height'] =
            '3' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-lg-font-size'] =
            'var(' + PepCustomizationService.FONT_SIZE_LG_KEY + ')';
        // themeVars['--pep-button-lg-icon-horizontal-spacing'] = '0.75' + PepCustomizationService.REM_STRING;

        themeVars['--pep-button-xl-horizontal-spacing'] =
            '1.5' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-xl-min-width'] =
            '4' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-xl-height'] =
            '4' + PepCustomizationService.REM_STRING;
        themeVars['--pep-button-xl-font-size'] =
            'var(' + PepCustomizationService.FONT_SIZE_XL_KEY + ')';
        // themeVars['--pep-button-xl-icon-horizontal-spacing'] = '1' + PepCustomizationService.REM_STRING;
    }

    getSystemPrimaryInvertColorsVariables(themeVars: any): void {
        themeVars[
            PepCustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-h'
        ] = '255';
        themeVars[
            PepCustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-s'
        ] = '100%';
        themeVars[
            PepCustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-l'
        ] = '100%';
    }

    getSystemPrimaryColorsVariables(themeVars: any): void {
        themeVars[PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h'] =
            '0';
        themeVars[PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s'] =
            '0%';
        themeVars[PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l'] =
            '10%';
    }

    getSystemSuccessColorsVariables(themeVars: any): void {
        themeVars[PepCustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-h'] =
            '100';
        themeVars[PepCustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-s'] =
            '100%';
        themeVars[PepCustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-l'] =
            '25%';
    }

    getSystemCautionColorsVariables(themeVars: any): void {
        themeVars[PepCustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-h'] =
            '360';
        themeVars[PepCustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-s'] =
            '100%';
        themeVars[PepCustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-l'] =
            '40%';
    }

    getUserPrimaryColorsVariables(themeVars: any): void {
        themeVars[PepCustomizationService.COLOR_USER_PRIMARY_KEY + '-h'] = '78';
        themeVars[PepCustomizationService.COLOR_USER_PRIMARY_KEY + '-s'] =
            '87%';
        themeVars[PepCustomizationService.COLOR_USER_PRIMARY_KEY + '-l'] =
            '27%';
    }

    getUserSecondaryColorsVariables(themeVars: any): void {
        themeVars[PepCustomizationService.COLOR_USER_SECONDARY_KEY + '-h'] =
            '77';
        themeVars[PepCustomizationService.COLOR_USER_SECONDARY_KEY + '-s'] =
            '87%';
        themeVars[PepCustomizationService.COLOR_USER_SECONDARY_KEY + '-l'] =
            '42%';
    }

    getWeakColorsVariables(themeVars: any): void {
        themeVars[PepCustomizationService.COLOR_WEAK_KEY + '-h'] =
            'var(' + PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
        themeVars[PepCustomizationService.COLOR_WEAK_KEY + '-s'] =
            'var(' + PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
        themeVars[PepCustomizationService.COLOR_WEAK_KEY + '-l'] =
            'var(' + PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
    }

    getRegularColorsVariables(themeVars: any): void {
        themeVars[PepCustomizationService.COLOR_REGULAR_KEY + '-h'] =
            'var(' + PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
        themeVars[PepCustomizationService.COLOR_REGULAR_KEY + '-s'] =
            'var(' + PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
        themeVars[PepCustomizationService.COLOR_REGULAR_KEY + '-l'] =
            'var(' + PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
    }

    getStrongColorsVariables(themeVars: any): void {
        themeVars[PepCustomizationService.COLOR_STRONG_KEY + '-h'] =
            'var(' + PepCustomizationService.COLOR_USER_PRIMARY_KEY + '-h)';
        themeVars[PepCustomizationService.COLOR_STRONG_KEY + '-s'] =
            'var(' + PepCustomizationService.COLOR_USER_PRIMARY_KEY + '-s)';
        themeVars[PepCustomizationService.COLOR_STRONG_KEY + '-l'] =
            'var(' + PepCustomizationService.COLOR_USER_PRIMARY_KEY + '-l)';
    }

    getTextColorsVariables(themeVars: any): void {
        themeVars[PepCustomizationService.COLOR_TEXT_LINK_KEY + '-h'] = '207';
        themeVars[PepCustomizationService.COLOR_TEXT_LINK_KEY + '-s'] = '76%';
        themeVars[PepCustomizationService.COLOR_TEXT_LINK_KEY + '-l'] = '37%';
    }

    getDefaultThemeColorsVariables(themeVars: any): void {
        // System primary invert colors.
        this.getSystemPrimaryInvertColorsVariables(themeVars);
        // System primary colors.
        this.getSystemPrimaryColorsVariables(themeVars);
        // System success colors.
        this.getSystemSuccessColorsVariables(themeVars);
        // System caution colors.
        this.getSystemCautionColorsVariables(themeVars);
        // User primary colors.
        this.getUserPrimaryColorsVariables(themeVars);
        // User secondary colors.
        this.getUserSecondaryColorsVariables(themeVars);

        // Weak colors.
        this.getWeakColorsVariables(themeVars);
        // Regular colors.
        this.getRegularColorsVariables(themeVars);
        // Strong colors.
        this.getStrongColorsVariables(themeVars);

        // Text colors.
        this.getTextColorsVariables(themeVars);
    }

    getDefaultThemeShadowsVariables(themeVars: any): void {
        const noneOffset = '0';
        themeVars[PepCustomizationService.SHADOW_NONE_OFFSET_KEY] = noneOffset;

        const xsOffset = '0 0.125rem 0.25rem 0';
        themeVars[PepCustomizationService.SHADOW_XS_OFFSET_KEY] = xsOffset;

        const smOffset = '0 0.25rem 0.5rem 0';
        themeVars[PepCustomizationService.SHADOW_SM_OFFSET_KEY] = smOffset;

        const mdOffset = '0 0.5rem 1rem 0';
        themeVars[PepCustomizationService.SHADOW_MD_OFFSET_KEY] = mdOffset;

        const lgOffset = '0 1rem 2rem 0';
        themeVars[PepCustomizationService.SHADOW_LG_OFFSET_KEY] = lgOffset;

        const xlOffset = '0 2rem 4rem 0';
        themeVars[PepCustomizationService.SHADOW_XL_OFFSET_KEY] = xlOffset;
    }

    getDefaultThemeFormCustomizationVariables(themeVars: any): void {
        const formFieldSpacing = 1;
        themeVars[PepCustomizationService.FORM_FIELD_HEIGHT_KEY] =
            '2.5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY] =
            '1.5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.FORM_SPACEING_KEY] =
            formFieldSpacing + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.FORM_FIELD_SPACEING_KEY] =
            formFieldSpacing + PepCustomizationService.REM_STRING;
    }

    getDefaultThemeCardCustomizationVariables(themeVars: any): void {
        themeVars[PepCustomizationService.CARD_FIELD_HEIGHT_KEY] =
            '1.5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.CARD_SPACEING_KEY] =
            'var(' + PepCustomizationService.SPACING_SIZE_XS_KEY + ')';

        themeVars[PepCustomizationService.CARD_BORDER_RADIUS_KEY] =
            'var(' + PepCustomizationService.BORDER_RADIUS_MD_KEY + ')';
        themeVars[PepCustomizationService.CARD_SHADOW_OFFSET_KEY] =
            'var(' + PepCustomizationService.SHADOW_MD_OFFSET_KEY + ')';
    }

    getDefaultThemeTableCustomizationVariables(themeVars: any): void {
        themeVars[PepCustomizationService.TABLE_FIELD_HEIGHT_KEY] =
            '2' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.TABLE_SPACEING_KEY] =
            '0.5' + PepCustomizationService.REM_STRING;
        themeVars[PepCustomizationService.TABLE_BORDER_RADIUS_KEY] =
            'var(' + PepCustomizationService.BORDER_RADIUS_MD_KEY + ')';
    }

    getDefaultThemeQSCustomizationVariables(themeVars: any): void {
        const qsState: PepStyleType = 'regular';
        themeVars[PepCustomizationService.STYLE_QS_KEY] = qsState;

        themeVars[PepCustomizationService.COLOR_QS_KEY + '-h'] =
            'var(' + PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
        themeVars[PepCustomizationService.COLOR_QS_KEY + '-s'] =
            'var(' + PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
        themeVars[PepCustomizationService.COLOR_QS_KEY + '-l'] =
            'var(' + PepCustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
    }

    getDefaultThemeTopHeaderCustomizationVariables(themeVars: any): void {
        const topHeaderState: PepStyleType = 'strong';
        themeVars[
            PepCustomizationService.STYLE_TOP_HEADER_KEY
        ] = topHeaderState;

        themeVars[PepCustomizationService.COLOR_TOP_HEADER_KEY + '-h'] = '';
        themeVars[PepCustomizationService.COLOR_TOP_HEADER_KEY + '-s'] = '';
        themeVars[PepCustomizationService.COLOR_TOP_HEADER_KEY + '-l'] = '';
    }

    getDefaultThemeVariables(): any {
        const themeVars = {};

        // Declare default layout.
        this.getDefaultThemeLayoutVariables(themeVars);

        // Declare default border radius.
        this.getDefaultThemeBorderRadiusVariables(themeVars);

        // Declare default spacing.
        this.getDefaultThemeSpacingVariables(themeVars);

        // Declare default fonts size & line height.
        this.getDefaultThemeFontsVariables(themeVars);

        // Declare default buttons.
        this.getDefaultThemeButtonsVariables(themeVars);

        // Declare default colors.
        this.getDefaultThemeColorsVariables(themeVars);

        // Declare default shadows.
        this.getDefaultThemeShadowsVariables(themeVars);

        // Declare default form customization.
        this.getDefaultThemeFormCustomizationVariables(themeVars);

        // Declare default card customization.
        this.getDefaultThemeCardCustomizationVariables(themeVars);

        // Declare default table customization.
        this.getDefaultThemeTableCustomizationVariables(themeVars);

        // Declare default qs customization.
        this.getDefaultThemeQSCustomizationVariables(themeVars);

        // Declare default top header customization.
        this.getDefaultThemeTopHeaderCustomizationVariables(themeVars);

        return themeVars;
    }

    getThemeVariables(): any {
        const ret = this.getDefaultThemeVariables();
        const themeVars = this.sessionService.getObject(
            PepCustomizationService.USER_THEME_VARIABLES
        );

        // Override defaults.
        if (themeVars) {
            for (const key in themeVars) {
                ret[key] = themeVars[key];
            }
        }

        return ret;
    }

    setThemeVariables(themeVariablesToSet = null): void {
        const themeVariables = this.getThemeVariables();

        // Override defaults.
        if (themeVariablesToSet) {
            for (const key in themeVariablesToSet) {
                themeVariables[key] = themeVariablesToSet[key];
            }
        }

        this.sessionService.setObject(
            PepCustomizationService.USER_THEME_VARIABLES,
            JSON.stringify(themeVariables)
        );

        for (const key in themeVariables) {
            if (this.isFontUrlKey(key)) {
                this.fileService.loadFontStyle(key, themeVariables[key]);
            } else {
                document.documentElement.style.setProperty(
                    key,
                    themeVariables[key]
                );
            }
        }
    }

    isFontUrlKey(key: string): boolean {
        let res = false;

        if (
            key === PepCustomizationService.FONT_FAMILY_TITLE_NORMAL_URL_KEY ||
            key === PepCustomizationService.FONT_FAMILY_TITLE_BOLD_URL_KEY ||
            key === PepCustomizationService.FONT_FAMILY_BODY_NORMAL_URL_KEY ||
            key === PepCustomizationService.FONT_FAMILY_BODY_BOLD_URL_KEY
        ) {
            res = true;
        }

        return res;
    }

    getThemeVariable(key: string): string {
        const themeVars = this.getThemeVariables();

        if (themeVars.hasOwnProperty(key)) {
            return themeVars[key];
        } else {
            return '';
        }
    }

    getNumberThemeVariable(themeVars, key: string): number {
        if (themeVars && themeVars.hasOwnProperty(key)) {
            // If it's reference to another key.
            if (themeVars[key].indexOf('var(') === 0) {
                key = themeVars[key].substr(4).split(')')[0];
            }

            const tmp = Number(
                themeVars[key].replace(PepCustomizationService.REM_STRING, '')
            );
            return tmp;
        } else {
            return 0;
        }
    }

    private setFooterHeight(height): void {
        if (this.footerHeight.getValue() !== height) {
            // it is publishing this value to all the subscribers that have already subscribed to this message
            setTimeout(() => {
                this.footerHeight.next(height);
            }, 0);
        }
        document.documentElement.style.setProperty(
            PepCustomizationService.FOOTER_HEIGHT_KEY,
            height + PepCustomizationService.REM_STRING
        );
    }

    hideFooter(): void {
        this.setFooterHeight(0);
    }

    showFooter(): void {
        const themeVars = this.getThemeVariables();

        const res =
            this.getNumberThemeVariable(
                themeVars,
                PepCustomizationService.FOOTER_BAR_SPACING_TOP_KEY
            ) +
            this.getNumberThemeVariable(
                themeVars,
                PepCustomizationService.FOOTER_BAR_SPACING_BOTTOM_KEY
            ) +
            this.getNumberThemeVariable(
                themeVars,
                PepCustomizationService.TOP_BAR_FIELD_HEIGHT_KEY
            );

        this.setFooterHeight(res);
    }

    private setSettingsWidth(width): void {
        if (this.settingsWidth.getValue() !== width) {
            // it is publishing this value to all the subscribers that have already subscribed to this message
            setTimeout(() => {
                this.settingsWidth.next(width);
            }, 0);
        }
        document.documentElement.style.setProperty(
            PepCustomizationService.SETTINGS_WIDTH_KEY,
            width + PepCustomizationService.REM_STRING
        );
    }

    hideSettings(): void {
        this.setSettingsWidth(0);
    }

    showSettings(): void {
        const themeVars = this.getThemeVariables();

        const res = this.getNumberThemeVariable(
            themeVars,
            PepCustomizationService.SIDE_BAR_WIDTH_KEY
        );

        this.setSettingsWidth(res);
    }

    getTopBarHeight(): number {
        const themeVars = this.getThemeVariables();

        const res =
            this.getNumberThemeVariable(
                themeVars,
                PepCustomizationService.TOP_BAR_SPACING_TOP_KEY
            ) +
            this.getNumberThemeVariable(
                themeVars,
                PepCustomizationService.TOP_BAR_SPACING_BOTTOM_KEY
            ) +
            this.getNumberThemeVariable(
                themeVars,
                PepCustomizationService.TOP_BAR_FIELD_HEIGHT_KEY
            );

        return res;
    }

    setOldUserTheme(res: any): void {
        // Added user theme.
        const themeObj = {
            Theme: res.Theme || 'default-theme',
        };

        this.sessionService.setObject(
            PepCustomizationService.USER_THEME,
            JSON.stringify(themeObj)
        );

        let spinnerColor;
        let brandingFontColor;

        if (this.isLightColor(res.BrandingMainColor)) {
            spinnerColor = PepCustomizationService.DEFAULT_SPINNER_COLOR;
            brandingFontColor = '#222';
        } else {
            spinnerColor = res.BrandingMainColor;
            brandingFontColor = PepCustomizationService.DEFAULT_BRANDING_COLOR;
        }

        const color = {
            BrandingSecondaryColor: res.BrandingSecondaryColor,
            BrandingMainColor: res.BrandingMainColor,
            BrandingFontColor: brandingFontColor,
            SpinnerColor: spinnerColor,
        };

        this.sessionService.setObject(
            PepCustomizationService.USER_COLOR,
            JSON.stringify(color)
        );

        this.hasCustomHeader =
            res.TopHeaderFiles &&
                res.TopHeaderFiles.length > 0 &&
                res.TopHeaderFiles[0] !== ''
                ? true
                : false;
        this.hasCustomHomepage =
            res.UserRole === 'Buyer' &&
            res.TopHeaderFiles &&
            res.TopHeaderFiles.length > 1 &&
            res.TopHeaderFiles[1] !== '';
    }

    isLegacyColor(): boolean {
        const h = document.documentElement.style.getPropertyValue(
            PepCustomizationService.COLOR_TOP_HEADER_KEY + '-h'
        );
        const s = document.documentElement.style.getPropertyValue(
            PepCustomizationService.COLOR_TOP_HEADER_KEY + '-s'
        );
        const l = document.documentElement.style.getPropertyValue(
            PepCustomizationService.COLOR_TOP_HEADER_KEY + '-l'
        );

        return !(h && s && l);
    }

    getLoadingSpinnerColor(): string {
        let spinnerColor = '';

        if (this.isLegacyColor()) {
            const color = this.sessionService.getObject(
                PepCustomizationService.USER_COLOR
            );

            if (color && color.SpinnerColor) {
                spinnerColor = color.SpinnerColor;
            } else {
                spinnerColor = PepCustomizationService.DEFAULT_SPINNER_COLOR;
            }
        }

        return spinnerColor;
    }

    getBrandingMainColor(): string {
        let brandingMainColor = '';

        if (this.isLegacyColor()) {
            const color = this.sessionService.getObject(
                PepCustomizationService.USER_COLOR
            );

            if (color && color.BrandingMainColor) {
                brandingMainColor = color.BrandingMainColor;
            } else {
                brandingMainColor =
                    PepCustomizationService.DEFAULT_BRANDING_COLOR;
            }
        }

        return brandingMainColor;
    }

    isLightColor(hexColor): boolean {
        if (!hexColor) {
            return;
        }

        let isBright = false;
        let sum = 0;
        const c = hexColor.replace(/^#/, '');

        sum = parseInt(c[0] + c[1], 16);
        sum += parseInt(c[2] + c[3], 16);
        sum += parseInt(c[4] + c[5], 16);

        if (sum > 382.6) {
            // it's bright color
            isBright = true;
        }

        return isBright;
    }
}
