import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LAYOUT_TYPE, STYLE_TYPE } from './customization.model';
import * as i0 from "@angular/core";
import * as i1 from "../common/services/session.service";
import * as i2 from "@angular/forms";
export class CustomizationService {
    constructor(sessionService, fb) {
        this.sessionService = sessionService;
        this.fb = fb;
        this.hasCustomHomepage = null;
        this.hasCustomHeader = null;
        this.customHeaderHeight = CustomizationService.DEFAULT_HEADER_HEIGHT;
        this.mainContHeight = 0;
        this.footerHeight = new BehaviorSubject(0);
    }
    getValidatorsForField(required, readonly, disabled, maxFieldCharacters, type, isCheckbox = false, minValue = NaN, maxValue = NaN) {
        const validators = [];
        if (required && !readonly && !disabled) {
            if (isCheckbox) {
                validators.push(Validators.requiredTrue);
            }
            else {
                validators.push(Validators.required);
            }
        }
        else {
            validators.push(Validators.nullValidator);
        }
        if (maxFieldCharacters > 0) {
            validators.push(Validators.maxLength(maxFieldCharacters));
        }
        if (type === 'email') {
            validators.push(Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
        }
        else if (type === 'phone') {
            validators.push(Validators.pattern(/^[\d\.\-\+\(\)\*\#]+$/));
        }
        else if (type === 'int' || type === 'real') {
            validators.push(Validators.pattern(/^[\.,\-\+\d]+$/));
            if (!isNaN(minValue)) {
                validators.push(Validators.min(minValue));
            }
            if (!isNaN(maxValue)) {
                validators.push(Validators.max(maxValue));
            }
        }
        return validators;
    }
    getDefaultFromGroup(key, value, required, readonly, disabled, maxFieldCharacters = 0, type = '', isCheckbox = false, withValidators = true, minValue = NaN, maxValue = NaN) {
        const validators = withValidators ?
            this.getValidatorsForField(required, readonly, disabled, maxFieldCharacters, type, isCheckbox, minValue, maxValue) : [];
        const group = {};
        group[key] = [{ value, disabled }, validators];
        return this.fb.group(group);
    }
    getFormControl(form, fieldKey, parentFieldKey = null) {
        let formControl = null;
        if (form && form.controls) {
            if (parentFieldKey === null) {
                formControl = form.controls[fieldKey];
            }
            else {
                formControl = form.controls[parentFieldKey].get(fieldKey);
            }
        }
        return formControl;
    }
    updateFormFieldValue(form, fieldKey, value = '', parentFieldKey = null) {
        const formControl = this.getFormControl(form, fieldKey, parentFieldKey);
        if (formControl) {
            formControl.setValue(value);
        }
    }
    updateFormField(form, field, value = '', parentField = null) {
        const formControl = this.getFormControl(form, field.key, parentField);
        if (formControl) {
            formControl.setValue(value);
            // If disabled has changed.
            if (formControl.disabled !== field.disabled) {
                field.disabled ? formControl.disable() : formControl.enable();
                const validators = this.getValidatorsForField(field.required, field.readonly, field.disabled, field.maxFieldCharacters, field.type, field.controlType === 'checkbox');
                formControl.setValidators(validators);
            }
        }
    }
    calculateFormFieldHeight(withTitle = true, rowSpan = 1, standAlone = false) {
        const themeVars = this.getThemeVariables();
        const rowFieldHeight = this.getNumberThemeVariable(themeVars, CustomizationService.FORM_FIELD_HEIGHT_KEY);
        const rowFieldTitleHeight = this.getNumberThemeVariable(themeVars, CustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY);
        const rowFieldSpacingBottom = this.getNumberThemeVariable(themeVars, CustomizationService.FORM_SPACEING_KEY);
        let fieldHeight = 0;
        if (rowSpan === 1) {
            fieldHeight = (withTitle ? rowFieldTitleHeight : 0) + rowFieldHeight;
        }
        else {
            const rowSpanCalc = withTitle ? rowSpan : rowSpan - 1;
            fieldHeight =
                rowSpan * rowFieldHeight +
                    rowSpanCalc * rowFieldTitleHeight +
                    (standAlone ? 0 : rowSpanCalc * rowFieldSpacingBottom);
        }
        return fieldHeight;
    }
    calculateCardRowsHeight(rowsCount = 1, withSpacing = true) {
        const themeVars = this.getThemeVariables();
        const cardFieldHeight = this.getNumberThemeVariable(themeVars, CustomizationService.CARD_FIELD_HEIGHT_KEY);
        const cardFieldSpacing = this.getNumberThemeVariable(themeVars, CustomizationService.CARD_SPACEING_KEY);
        const fieldHeight = rowsCount * cardFieldHeight + (rowsCount - 1) * (withSpacing ? cardFieldSpacing : 0);
        return fieldHeight;
    }
    calculateTableRowsHeight(rowsCount = 1, withSpacing = true) {
        const themeVars = this.getThemeVariables();
        const tableFieldHeight = this.getNumberThemeVariable(themeVars, CustomizationService.TABLE_FIELD_HEIGHT_KEY);
        const tableFieldSpacing = this.getNumberThemeVariable(themeVars, CustomizationService.TABLE_SPACEING_KEY);
        const fieldHeight = rowsCount * (tableFieldHeight + (withSpacing ? tableFieldSpacing * 2 : 0));
        return fieldHeight;
    }
    calculateFieldHeight(layoutType = LAYOUT_TYPE.PepperiForm, rowSpan, standAlone) {
        let fieldHeight = 'inherit'; // Default for card (with no title)
        if (layoutType === LAYOUT_TYPE.PepperiTable) {
            fieldHeight = this.getThemeVariable(CustomizationService.TABLE_FIELD_HEIGHT_KEY);
        }
        else if (layoutType === LAYOUT_TYPE.PepperiCard) {
            fieldHeight = this.calculateCardRowsHeight(rowSpan, !standAlone) + CustomizationService.REM_STRING;
        }
        else {
            // PepperiForm
            fieldHeight = this.calculateFormFieldHeight(false, rowSpan, standAlone) + CustomizationService.REM_STRING;
        }
        return fieldHeight;
    }
    getBrandingTheme() {
        const themeObj = this.sessionService.getObject(CustomizationService.USER_THEME);
        return (themeObj && themeObj.Theme) || 'default-theme'; // 'light-theme';
    }
    getDefaultThemeLayoutVariables(themeVars) {
        // Declare default screen sizes.
        themeVars['--pep-screen-max-size-2xs'] = '460' + CustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-xs'] = '767' + CustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-sm'] = '991' + CustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-md'] = '1199' + CustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-lg'] = '1366' + CustomizationService.PX_STRING;
        themeVars['--pep-screen-max-size-xl'] = '1920' + CustomizationService.PX_STRING;
        // Declare default top bar.
        themeVars[CustomizationService.SIDE_BAR_WIDTH_KEY] = '16' + CustomizationService.REM_STRING;
        // Declare default top bar.
        themeVars[CustomizationService.TOP_BAR_SPACING_TOP_KEY] = '1.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.TOP_BAR_SPACING_BOTTOM_KEY] = '0.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.TOP_BAR_FIELD_HEIGHT_KEY] = '2.5' + CustomizationService.REM_STRING;
        // Declare default footer.
        themeVars[CustomizationService.FOOTER_BAR_SPACING_TOP_KEY] = '0.75' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FOOTER_BAR_SPACING_BOTTOM_KEY] = '1.25' + CustomizationService.REM_STRING;
    }
    getDefaultThemeBorderRadiusVariables(themeVars) {
        themeVars[CustomizationService.BORDER_RADIUS_SM_KEY] = '0.125' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.BORDER_RADIUS_MD_KEY] = '0.25' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.BORDER_RADIUS_LG_KEY] = '0.5' + CustomizationService.REM_STRING;
    }
    getDefaultThemeSpacingVariables(themeVars) {
        themeVars[CustomizationService.SPACING_SIZE_2XS_KEY] = '0.125' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_XS_KEY] = '0.25' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_SM_KEY] = '0.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_MD_KEY] = '0.75' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_LG_KEY] = '1' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_XL_KEY] = '1.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.SPACING_SIZE_2XL_KEY] = '2' + CustomizationService.REM_STRING;
    }
    getDefaultThemeFontsVariables(themeVars) {
        // Title font family
        themeVars[CustomizationService.FONT_FAMILY_TITLE_KEY] = 'Nexa';
        // Body font family
        themeVars[CustomizationService.FONT_FAMILY_BODY_KEY] = 'Inter';
        // Font sizes
        themeVars[CustomizationService.FONT_SIZE_2XS_KEY] = '0.625' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_XS_KEY] = '0.75' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_SM_KEY] = '0.875' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_MD_KEY] = '1' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_LG_KEY] = '1.125' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_XL_KEY] = '1.25' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FONT_SIZE_2XL_KEY] = '1.5' + CustomizationService.REM_STRING;
        // Line height
        themeVars[CustomizationService.LINE_HEIGHT_2XS_KEY] = '0.75' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_XS_KEY] = '1' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_SM_KEY] = '1.25' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_MD_KEY] = '1.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_LG_KEY] = '1.75' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_XL_KEY] = '2' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.LINE_HEIGHT_2XL_KEY] = '2.25' + CustomizationService.REM_STRING;
        // Font weight
        themeVars['--pep-font-weight-normal'] = 400;
        themeVars['--pep-font-weight-bold'] = 600;
        themeVars['--pep-font-weight-bolder'] = 800;
    }
    getDefaultThemeButtonsVariables(themeVars) {
        themeVars['--pep-button-2xs-horizontal-spacing'] = '0.25' + CustomizationService.REM_STRING;
        themeVars['--pep-button-2xs-min-width'] = '1' + CustomizationService.REM_STRING;
        themeVars['--pep-button-2xs-height'] = '1' + CustomizationService.REM_STRING;
        themeVars['--pep-button-2xs-font-size'] = 'var(' + CustomizationService.FONT_SIZE_2XS_KEY + ')';
        // themeVars['--pep-button-2xs-icon-horizontal-spacing'] = '0.125' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xs-horizontal-spacing'] = '0.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xs-min-width'] = '2' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xs-height'] = '1.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xs-font-size'] = 'var(' + CustomizationService.FONT_SIZE_XS_KEY + ')';
        // themeVars['--pep-button-xs-icon-horizontal-spacing'] = '0.25' + CustomizationService.REM_STRING;
        themeVars['--pep-button-sm-horizontal-spacing'] = '0.75' + CustomizationService.REM_STRING;
        themeVars['--pep-button-sm-min-width'] = '2' + CustomizationService.REM_STRING;
        themeVars['--pep-button-sm-height'] = '2' + CustomizationService.REM_STRING;
        themeVars['--pep-button-sm-font-size'] = 'var(' + CustomizationService.FONT_SIZE_SM_KEY + ')';
        // themeVars['--pep-button-sm-icon-horizontal-spacing'] = '0.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-md-horizontal-spacing'] = '1' + CustomizationService.REM_STRING;
        themeVars['--pep-button-md-min-width'] = '2.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-md-height'] = '2.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-md-font-size'] = 'var(' + CustomizationService.FONT_SIZE_MD_KEY + ')';
        // themeVars['--pep-button-md-icon-horizontal-spacing'] = '0.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-lg-horizontal-spacing'] = '1' + CustomizationService.REM_STRING;
        themeVars['--pep-button-lg-min-width'] = '3' + CustomizationService.REM_STRING;
        themeVars['--pep-button-lg-height'] = '3' + CustomizationService.REM_STRING;
        themeVars['--pep-button-lg-font-size'] = 'var(' + CustomizationService.FONT_SIZE_LG_KEY + ')';
        // themeVars['--pep-button-lg-icon-horizontal-spacing'] = '0.75' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xl-horizontal-spacing'] = '1.5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xl-min-width'] = '5' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xl-height'] = '4' + CustomizationService.REM_STRING;
        themeVars['--pep-button-xl-font-size'] = 'var(' + CustomizationService.FONT_SIZE_XL_KEY + ')';
        // themeVars['--pep-button-xl-icon-horizontal-spacing'] = '1' + CustomizationService.REM_STRING;
    }
    getSystemPrimaryInvertColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-h'] = '255';
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-s'] = '100%';
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY + '-l'] = '100%';
    }
    getSystemPrimaryColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h'] = '0';
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s'] = '0%';
        themeVars[CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l'] = '10%';
    }
    getSystemSuccessColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-h'] = '100';
        themeVars[CustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-s'] = '100%';
        themeVars[CustomizationService.COLOR_SYSTEM_SUCCESS_KEY + '-l'] = '25%';
    }
    getSystemCautionColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-h'] = '360';
        themeVars[CustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-s'] = '100%';
        themeVars[CustomizationService.COLOR_SYSTEM_CAUTION_KEY + '-l'] = '40%';
    }
    getUserPrimaryColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_USER_PRIMARY_KEY + '-h'] = '78';
        themeVars[CustomizationService.COLOR_USER_PRIMARY_KEY + '-s'] = '87%';
        themeVars[CustomizationService.COLOR_USER_PRIMARY_KEY + '-l'] = '27%';
    }
    getUserSecondaryColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_USER_SECONDARY_KEY + '-h'] = '77';
        themeVars[CustomizationService.COLOR_USER_SECONDARY_KEY + '-s'] = '87%';
        themeVars[CustomizationService.COLOR_USER_SECONDARY_KEY + '-l'] = '42%';
    }
    getWeakColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_WEAK_KEY + '-h'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
        themeVars[CustomizationService.COLOR_WEAK_KEY + '-s'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
        themeVars[CustomizationService.COLOR_WEAK_KEY + '-l'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
    }
    getRegularColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_REGULAR_KEY + '-h'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
        themeVars[CustomizationService.COLOR_REGULAR_KEY + '-s'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
        themeVars[CustomizationService.COLOR_REGULAR_KEY + '-l'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
    }
    getStrongColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_STRONG_KEY + '-h'] = 'var(' + CustomizationService.COLOR_USER_PRIMARY_KEY + '-h)';
        themeVars[CustomizationService.COLOR_STRONG_KEY + '-s'] = 'var(' + CustomizationService.COLOR_USER_PRIMARY_KEY + '-s)';
        themeVars[CustomizationService.COLOR_STRONG_KEY + '-l'] = 'var(' + CustomizationService.COLOR_USER_PRIMARY_KEY + '-l)';
    }
    getTextColorsVariables(themeVars) {
        themeVars[CustomizationService.COLOR_TEXT_LINK_KEY + '-h'] = '207';
        themeVars[CustomizationService.COLOR_TEXT_LINK_KEY + '-s'] = '76%';
        themeVars[CustomizationService.COLOR_TEXT_LINK_KEY + '-l'] = '37%';
    }
    getDefaultThemeColorsVariables(themeVars) {
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
    getDefaultThemeShadowsVariables(themeVars) {
        const noneOffset = '0';
        themeVars[CustomizationService.SHADOW_NONE_OFFSET_KEY] = noneOffset;
        const xsOffset = '0 0.125rem 0.25rem 0';
        themeVars[CustomizationService.SHADOW_XS_OFFSET_KEY] = xsOffset;
        const smOffset = '0 0.25rem 0.5rem 0';
        themeVars[CustomizationService.SHADOW_SM_OFFSET_KEY] = smOffset;
        const mdOffset = '0 0.5rem 1rem 0';
        themeVars[CustomizationService.SHADOW_MD_OFFSET_KEY] = mdOffset;
        const lgOffset = '0 1rem 2rem 0';
        themeVars[CustomizationService.SHADOW_LG_OFFSET_KEY] = lgOffset;
        const xlOffset = '0 2rem 4rem 0';
        themeVars[CustomizationService.SHADOW_XL_OFFSET_KEY] = xlOffset;
    }
    getDefaultThemeFormCustomizationVariables(themeVars) {
        const formFieldSpacing = 1;
        themeVars[CustomizationService.FORM_FIELD_HEIGHT_KEY] = '2.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY] = '1.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FORM_SPACEING_KEY] = formFieldSpacing + CustomizationService.REM_STRING;
        themeVars[CustomizationService.FORM_FIELD_SPACEING_KEY] = formFieldSpacing + CustomizationService.REM_STRING;
    }
    getDefaultThemeCardCustomizationVariables(themeVars) {
        themeVars[CustomizationService.CARD_FIELD_HEIGHT_KEY] = '1.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.CARD_SPACEING_KEY] = 'var(' + CustomizationService.SPACING_SIZE_XS_KEY + ')';
        themeVars[CustomizationService.CARD_BORDER_RADIUS_KEY] = 'var(' + CustomizationService.BORDER_RADIUS_MD_KEY + ')';
        themeVars[CustomizationService.CARD_SHADOW_OFFSET_KEY] = 'var(' + CustomizationService.SHADOW_MD_OFFSET_KEY + ')';
    }
    getDefaultThemeTableCustomizationVariables(themeVars) {
        themeVars[CustomizationService.TABLE_FIELD_HEIGHT_KEY] = '2' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.TABLE_SPACEING_KEY] = '0.5' + CustomizationService.REM_STRING;
        themeVars[CustomizationService.TABLE_BORDER_RADIUS_KEY] = 'var(' + CustomizationService.BORDER_RADIUS_MD_KEY + ')';
    }
    getDefaultThemeQSCustomizationVariables(themeVars) {
        const qsState = STYLE_TYPE.Regular;
        themeVars[CustomizationService.STYLE_QS_KEY] = qsState;
        themeVars[CustomizationService.COLOR_QS_KEY + '-h'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-h)';
        themeVars[CustomizationService.COLOR_QS_KEY + '-s'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-s)';
        themeVars[CustomizationService.COLOR_QS_KEY + '-l'] = 'var(' + CustomizationService.COLOR_SYSTEM_PRIMARY_KEY + '-l)';
    }
    getDefaultThemeTopHeaderCustomizationVariables(themeVars) {
        const topHeaderState = STYLE_TYPE.Strong;
        themeVars[CustomizationService.STYLE_TOP_HEADER_KEY] = topHeaderState;
        themeVars[CustomizationService.COLOR_TOP_HEADER_KEY + '-h'] = '';
        themeVars[CustomizationService.COLOR_TOP_HEADER_KEY + '-s'] = '';
        themeVars[CustomizationService.COLOR_TOP_HEADER_KEY + '-l'] = '';
    }
    getDefaultThemeVariables() {
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
    getThemeVariables() {
        const ret = this.getDefaultThemeVariables();
        const themeVars = this.sessionService.getObject(CustomizationService.USER_THEME_VARIABLES);
        // Override defaults.
        if (themeVars) {
            // tslint:disable-next-line: forin
            for (const key in themeVars) {
                ret[key] = themeVars[key];
            }
        }
        return ret;
    }
    setThemeVariables(themeVariablesToSet = null) {
        const themeVariables = this.getThemeVariables();
        // Override defaults.
        if (themeVariablesToSet) {
            // tslint:disable-next-line: forin
            for (const key in themeVariablesToSet) {
                themeVariables[key] = themeVariablesToSet[key];
            }
        }
        this.sessionService.setObject(CustomizationService.USER_THEME_VARIABLES, JSON.stringify(themeVariables));
        // tslint:disable-next-line: forin
        for (const key in themeVariables) {
            document.documentElement.style.setProperty(key, themeVariables[key]);
        }
    }
    getThemeVariable(key) {
        const themeVars = this.getThemeVariables();
        if (themeVars.hasOwnProperty(key)) {
            return themeVars[key];
        }
        else {
            return '';
        }
    }
    getNumberThemeVariable(themeVars, key) {
        if (themeVars && themeVars.hasOwnProperty(key)) {
            // If it's reference to another key.
            if (themeVars[key].indexOf('var(') === 0) {
                key = themeVars[key].substr(4).split(')')[0];
            }
            const tmp = Number(themeVars[key].replace(CustomizationService.REM_STRING, ''));
            return tmp;
        }
        else {
            return 0;
        }
    }
    setFooterHeight(height) {
        const self = this;
        if (this.footerHeight.getValue() !== height) {
            // it is publishing this value to all the subscribers that have already subscribed to this message
            setTimeout(() => self.footerHeight.next(height), 0);
        }
        document.documentElement.style.setProperty(CustomizationService.FOOTER_HEIGHT_KEY, height + CustomizationService.REM_STRING);
    }
    setDefaultFooterHeight() {
        const themeVars = this.getThemeVariables();
        const res = this.getNumberThemeVariable(themeVars, CustomizationService.FOOTER_BAR_SPACING_TOP_KEY) +
            this.getNumberThemeVariable(themeVars, CustomizationService.FOOTER_BAR_SPACING_BOTTOM_KEY) +
            this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_FIELD_HEIGHT_KEY);
        this.setFooterHeight(res);
    }
    getTopBarHeight() {
        const themeVars = this.getThemeVariables();
        const res = this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_SPACING_TOP_KEY) +
            this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_SPACING_BOTTOM_KEY) +
            this.getNumberThemeVariable(themeVars, CustomizationService.TOP_BAR_FIELD_HEIGHT_KEY);
        return res;
    }
    setOldUserTheme(res) {
        // Added user theme.
        const themeObj = {
            Theme: res.Theme || 'default-theme',
        };
        this.sessionService.setObject(CustomizationService.USER_THEME, JSON.stringify(themeObj));
        let spinnerColor;
        let brandingFontColor;
        if (this.isLightColor(res.BrandingMainColor)) {
            spinnerColor = CustomizationService.DEFAULT_SPINNER_COLOR;
            brandingFontColor = '#222';
        }
        else {
            spinnerColor = res.BrandingMainColor;
            brandingFontColor = CustomizationService.DEFAULT_BRANDING_COLOR;
        }
        const color = {
            BrandingSecondaryColor: res.BrandingSecondaryColor,
            BrandingMainColor: res.BrandingMainColor,
            BrandingFontColor: brandingFontColor,
            SpinnerColor: spinnerColor,
        };
        this.sessionService.setObject(CustomizationService.USER_COLOR, JSON.stringify(color));
        this.hasCustomHeader = res.TopHeaderFiles && res.TopHeaderFiles.length > 0 && res.TopHeaderFiles[0] !== '' ? true : false;
        this.hasCustomHomepage =
            res.UserRole === 'Buyer' && res.TopHeaderFiles &&
                res.TopHeaderFiles.length > 1 && res.TopHeaderFiles[1] !== '';
    }
    isLegacyColor() {
        const h = document.documentElement.style.getPropertyValue(CustomizationService.COLOR_TOP_HEADER_KEY + '-h');
        const s = document.documentElement.style.getPropertyValue(CustomizationService.COLOR_TOP_HEADER_KEY + '-s');
        const l = document.documentElement.style.getPropertyValue(CustomizationService.COLOR_TOP_HEADER_KEY + '-l');
        return !(h && s && l);
    }
    getLoadingSpinnerColor() {
        let spinnerColor = '';
        if (this.isLegacyColor()) {
            const color = this.sessionService.getObject(CustomizationService.USER_COLOR);
            if (color && color.SpinnerColor) {
                spinnerColor = color.SpinnerColor;
            }
            else {
                spinnerColor = CustomizationService.DEFAULT_SPINNER_COLOR;
            }
        }
        return spinnerColor;
    }
    getBrandingMainColor() {
        let brandingMainColor = '';
        if (this.isLegacyColor()) {
            const color = this.sessionService.getObject(CustomizationService.USER_COLOR);
            if (color && color.BrandingMainColor) {
                brandingMainColor = color.BrandingMainColor;
            }
            else {
                brandingMainColor = CustomizationService.DEFAULT_BRANDING_COLOR;
            }
        }
        return brandingMainColor;
    }
    isLightColor(hexColor) {
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
CustomizationService.STAND_ALONE_FIELD_CLASS_NAME = 'pepperi-field';
CustomizationService.REM_STRING = 'rem';
CustomizationService.PX_STRING = 'px';
CustomizationService.USER_THEME = 'user_theme';
CustomizationService.USER_COLOR = 'user_color';
CustomizationService.USER_THEME_VARIABLES = 'user_theme_variables';
// Header height
CustomizationService.HEADER_HEIGHT_KEY = '--pep-header-height';
// Footer height
CustomizationService.FOOTER_HEIGHT_KEY = '--pep-footer-bar-height';
// Main container height
CustomizationService.MAIN_HEIGHT_KEY = '--pep-main-height';
// Colors variables keys
CustomizationService.COLOR_USER_PRIMARY_KEY = '--pep-color-user-primary';
CustomizationService.COLOR_USER_SECONDARY_KEY = '--pep-color-user-secondary';
CustomizationService.COLOR_SYSTEM_PRIMARY_INVERT_KEY = '--pep-color-system-primary-invert';
CustomizationService.COLOR_SYSTEM_PRIMARY_KEY = '--pep-color-system-primary';
CustomizationService.COLOR_TEXT_LINK_KEY = '--pep-color-text-link';
CustomizationService.COLOR_SYSTEM_CAUTION_KEY = '--pep-color-system-caution';
CustomizationService.COLOR_SYSTEM_SUCCESS_KEY = '--pep-color-system-success';
CustomizationService.COLOR_STRONG_KEY = '--pep-color-strong';
CustomizationService.COLOR_REGULAR_KEY = '--pep-color-regular';
CustomizationService.COLOR_WEAK_KEY = '--pep-color-weak';
// Top header variables keys
CustomizationService.COLOR_TOP_HEADER_KEY = '--pep-color-top-header';
CustomizationService.STYLE_TOP_HEADER_KEY = '--pep-style-top-header';
// QS variables keys
CustomizationService.COLOR_QS_KEY = '--pep-color-qs';
CustomizationService.STYLE_QS_KEY = '--pep-style-qs';
// Fonts variables keys
CustomizationService.FONT_FAMILY_TITLE_KEY = '--pep-font-family-title';
CustomizationService.FONT_FAMILY_BODY_KEY = '--pep-font-family-body';
// Border radius variables keys
CustomizationService.BORDER_RADIUS_KEY = '--pep-border-radius';
CustomizationService.BORDER_RADIUS_SM_KEY = CustomizationService.BORDER_RADIUS_KEY + '-sm';
CustomizationService.BORDER_RADIUS_MD_KEY = CustomizationService.BORDER_RADIUS_KEY + '-md';
CustomizationService.BORDER_RADIUS_LG_KEY = CustomizationService.BORDER_RADIUS_KEY + '-lg';
// Fonts variables keys
CustomizationService.FONT_SIZE_2XS_KEY = '--pep-font-size-2xs';
CustomizationService.FONT_SIZE_XS_KEY = '--pep-font-size-xs';
CustomizationService.FONT_SIZE_SM_KEY = '--pep-font-size-sm';
CustomizationService.FONT_SIZE_MD_KEY = '--pep-font-size-md';
CustomizationService.FONT_SIZE_LG_KEY = '--pep-font-size-lg';
CustomizationService.FONT_SIZE_XL_KEY = '--pep-font-size-xl';
CustomizationService.FONT_SIZE_2XL_KEY = '--pep-font-size-2xl';
// Line height variables keys
CustomizationService.LINE_HEIGHT_2XS_KEY = '--pep-line-height-2xs';
CustomizationService.LINE_HEIGHT_XS_KEY = '--pep-line-height-xs';
CustomizationService.LINE_HEIGHT_SM_KEY = '--pep-line-height-sm';
CustomizationService.LINE_HEIGHT_MD_KEY = '--pep-line-height-md';
CustomizationService.LINE_HEIGHT_LG_KEY = '--pep-line-height-lg';
CustomizationService.LINE_HEIGHT_XL_KEY = '--pep-line-height-xl';
CustomizationService.LINE_HEIGHT_2XL_KEY = '--pep-line-height-2xl';
// Shadows offset variables keys
CustomizationService.SHADOW_NONE_OFFSET_KEY = '--pep-shadow-none-offset';
CustomizationService.SHADOW_XS_OFFSET_KEY = '--pep-shadow-xs-offset';
CustomizationService.SHADOW_SM_OFFSET_KEY = '--pep-shadow-sm-offset';
CustomizationService.SHADOW_MD_OFFSET_KEY = '--pep-shadow-md-offset';
CustomizationService.SHADOW_LG_OFFSET_KEY = '--pep-shadow-lg-offset';
CustomizationService.SHADOW_XL_OFFSET_KEY = '--pep-shadow-xl-offset';
// Spacing variables keys
CustomizationService.SPACING_SIZE_2XS_KEY = '--pep-spacing-2xs';
CustomizationService.SPACING_SIZE_XS_KEY = '--pep-spacing-xs';
CustomizationService.SPACING_SIZE_SM_KEY = '--pep-spacing-sm';
CustomizationService.SPACING_SIZE_MD_KEY = '--pep-spacing-md';
CustomizationService.SPACING_SIZE_LG_KEY = '--pep-spacing-lg';
CustomizationService.SPACING_SIZE_XL_KEY = '--pep-spacing-xl';
CustomizationService.SPACING_SIZE_2XL_KEY = '--pep-spacing-2xl';
// Side bar variables keys
CustomizationService.SIDE_BAR_WIDTH_KEY = '--pep-side-bar-width';
// Top bar variables keys
CustomizationService.TOP_BAR_SPACING_TOP_KEY = '--pep-top-bar-spacing-top';
CustomizationService.TOP_BAR_SPACING_BOTTOM_KEY = '--pep-top-bar-spacing-bottom';
CustomizationService.TOP_BAR_FIELD_HEIGHT_KEY = '--pep-top-bar-field-height';
// Footer variables keys
CustomizationService.FOOTER_BAR_SPACING_TOP_KEY = '--pep-footer-bar-spacing-top';
CustomizationService.FOOTER_BAR_SPACING_BOTTOM_KEY = '--pep-footer-bar-spacing-bottom';
// Form variables keys
CustomizationService.FORM_FIELD_HEIGHT_KEY = '--pep-form-field-height';
CustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY = '--pep-form-field-title-height';
CustomizationService.FORM_FIELD_SPACEING_KEY = '--pep-form-field-spacing';
CustomizationService.FORM_SPACEING_KEY = '--pep-form-spacing';
// Card variables keys
CustomizationService.CARD_FIELD_HEIGHT_KEY = '--pep-card-field-height';
CustomizationService.CARD_SPACEING_KEY = '--pep-card-spacing';
CustomizationService.CARD_SHADOW_OFFSET_KEY = '--pep-shadow-card-offset';
CustomizationService.CARD_BORDER_RADIUS_KEY = '--pep-card-border-radius';
// Table variables keys
CustomizationService.TABLE_FIELD_HEIGHT_KEY = '--pep-table-field-height';
CustomizationService.TABLE_SPACEING_KEY = '--pep-table-spacing';
CustomizationService.TABLE_BORDER_RADIUS_KEY = '--pep-table-border-radius';
CustomizationService.DEFAULT_HEADER_HEIGHT = 64; // Default
CustomizationService.DEFAULT_SPINNER_COLOR = '#78aa00';
CustomizationService.DEFAULT_BRANDING_COLOR = '#fff';
CustomizationService.ɵfac = function CustomizationService_Factory(t) { return new (t || CustomizationService)(i0.ɵɵinject(i1.SessionService), i0.ɵɵinject(i2.FormBuilder)); };
CustomizationService.ɵprov = i0.ɵɵdefineInjectable({ token: CustomizationService, factory: CustomizationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomizationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.SessionService }, { type: i2.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9taXphdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9zcmMvY29yZS9jdXN0b21pemF0aW9uL2N1c3RvbWl6YXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBZSxVQUFVLEVBQTBCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBS2hFLE1BQU0sT0FBTyxvQkFBb0I7SUEySDdCLFlBQ1ksY0FBOEIsRUFDL0IsRUFBZTtRQURkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMvQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBUm5CLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUNsQyxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyx1QkFBa0IsR0FBRyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQztRQUNoRSxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFTLENBQUMsQ0FBQyxDQUFDO0lBSXZCLENBQUM7SUFFL0IscUJBQXFCLENBQUMsUUFBaUIsRUFBRSxRQUFpQixFQUFFLFFBQWlCLEVBQ3ZELGtCQUEwQixFQUFFLElBQVksRUFBRSxVQUFVLEdBQUcsS0FBSyxFQUM1RCxRQUFRLEdBQUcsR0FBRyxFQUFFLFFBQVEsR0FBRyxHQUFHO1FBQ2hELE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV0QixJQUFJLFFBQVEsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxJQUFJLFVBQVUsRUFBRTtnQkFDWixVQUFVLENBQUMsSUFB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LEdBQUcseUJBQXlCLENBQUM7QUFDbEQsc0NBQWlCLEdBQUcsb0JBQW9CLENBQUM7QUFDekMsMkNBQXNCLEdBQUcsMEJBQTBCLENBQUM7QUFDcEQsMkNBQXNCLEdBQUcsMEJBQTBCLENBQUM7QUFFM0QsdUJBQXVCO0FBQ2hCLDJDQUFzQixHQUFHLDBCQUEwQixDQUFDO0FBQ3BELHVDQUFrQixHQUFHLHFCQUFxQixDQUFDO0FBQzNDLDRDQUF1QixHQUFHLDJCQUEyQixDQUFDO0FBRXRELDBDQUFxQixHQUFHLEVBQUUsQ0FBQyxDQUFDLFVBQVU7QUFFdEMsMENBQXFCLEdBQUcsU0FBUyxDQUFDO0FBQ2xDLDJDQUFzQixHQUFHLE1BQU0sQ0FBQzt3RkFuSDlCLG9CQUFvQjs0REFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGakIsTUFBTTtrREFFVCxvQkFBb0I7Y0FIaEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3Nlc3Npb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExBWU9VVF9UWVBFLCBTVFlMRV9UWVBFIH0gZnJvbSAnLi9jdXN0b21pemF0aW9uLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb25TZXJ2aWNlIHtcclxuICAgIHN0YXRpYyBTVEFORF9BTE9ORV9GSUVMRF9DTEFTU19OQU1FID0gJ3BlcHBlcmktZmllbGQnO1xyXG5cclxuICAgIHN0YXRpYyBSRU1fU1RSSU5HID0gJ3JlbSc7XHJcbiAgICBzdGF0aWMgUFhfU1RSSU5HID0gJ3B4JztcclxuICAgIHN0YXRpYyBVU0VSX1RIRU1FID0gJ3VzZXJfdGhlbWUnO1xyXG4gICAgc3RhdGljIFVTRVJfQ09MT1IgPSAndXNlcl9jb2xvcic7XHJcbiAgICBzdGF0aWMgVVNFUl9USEVNRV9WQVJJQUJMRVMgPSAndXNlcl90aGVtZV92YXJpYWJsZXMnO1xyXG5cclxuICAgIC8vIEhlYWRlciBoZWlnaHRcclxuICAgIHN0YXRpYyBIRUFERVJfSEVJR0hUX0tFWSA9ICctLXBlcC1oZWFkZXItaGVpZ2h0JztcclxuXHJcbiAgICAvLyBGb290ZXIgaGVpZ2h0XHJcbiAgICBzdGF0aWMgRk9PVEVSX0hFSUdIVF9LRVkgPSAnLS1wZXAtZm9vdGVyLWJhci1oZWlnaHQnO1xyXG5cclxuICAgIC8vIE1haW4gY29udGFpbmVyIGhlaWdodFxyXG4gICAgc3RhdGljIE1BSU5fSEVJR0hUX0tFWSA9ICctLXBlcC1tYWluLWhlaWdodCc7XHJcblxyXG4gICAgLy8gQ29sb3JzIHZhcmlhYmxlcyBrZXlzXHJcbiAgICBzdGF0aWMgQ09MT1JfVVNFUl9QUklNQVJZX0tFWSA9ICctLXBlcC1jb2xvci11c2VyLXByaW1hcnknO1xyXG4gICAgc3RhdGljIENPTE9SX1VTRVJfU0VDT05EQVJZX0tFWSA9ICctLXBlcC1jb2xvci11c2VyLXNlY29uZGFyeSc7XHJcbiAgICBzdGF0aWMgQ09MT1JfU1lTVEVNX1BSSU1BUllfSU5WRVJUX0tFWSA9ICctLXBlcC1jb2xvci1zeXN0ZW0tcHJpbWFyeS1pbnZlcnQnO1xyXG4gICAgc3RhdGljIENPTE9SX1NZU1RFTV9QUklNQVJZX0tFWSA9ICctLXBlcC1jb2xvci1zeXN0ZW0tcHJpbWFyeSc7XHJcbiAgICBzdGF0aWMgQ09MT1JfVEVYVF9MSU5LX0tFWSA9ICctLXBlcC1jb2xvci10ZXh0LWxpbmsnO1xyXG4gICAgc3RhdGljIENPTE9SX1NZU1RFTV9DQVVUSU9OX0tFWSA9ICctLXBlcC1jb2xvci1zeXN0ZW0tY2F1dGlvbic7XHJcbiAgICBzdGF0aWMgQ09MT1JfU1lTVEVNX1NVQ0NFU1NfS0VZID0gJy0tcGVwLWNvbG9yLXN5c3RlbS1zdWNjZXNzJztcclxuICAgIHN0YXRpYyBDT0xPUl9TVFJPTkdfS0VZID0gJy0tcGVwLWNvbG9yLXN0cm9uZyc7XHJcbiAgICBzdGF0aWMgQ09MT1JfUkVHVUxBUl9LRVkgPSAnLS1wZXAtY29sb3ItcmVndWxhcic7XHJcbiAgICBzdGF0aWMgQ09MT1JfV0VBS19LRVkgPSAnLS1wZXAtY29sb3Itd2Vhayc7XHJcblxyXG4gICAgLy8gVG9wIGhlYWRlciB2YXJpYWJsZXMga2V5c1xyXG4gICAgc3RhdGljIENPTE9SX1RPUF9IRUFERVJfS0VZID0gJy0tcGVwLWNvbG9yLXRvcC1oZWFkZXInO1xyXG4gICAgc3RhdGljIFNUWUxFX1RPUF9IRUFERVJfS0VZID0gJy0tcGVwLXN0eWxlLXRvcC1oZWFkZXInO1xyXG5cclxuICAgIC8vIFFTIHZhcmlhYmxlcyBrZXlzXHJcbiAgICBzdGF0aWMgQ09MT1JfUVNfS0VZID0gJy0tcGVwLWNvbG9yLXFzJztcclxuICAgIHN0YXRpYyBTVFlMRV9RU19LRVkgPSAnLS1wZXAtc3R5bGUtcXMnO1xyXG5cclxuICAgIC8vIEZvbnRzIHZhcmlhYmxlcyBrZXlzXHJcbiAgICBzdGF0aWMgRk9OVF9GQU1JTFlfVElUTEVfS0VZID0gJy0tcGVwLWZvbnQtZmFtaWx5LXRpdGxlJztcclxuICAgIHN0YXRpYyBGT05UX0ZBTUlMWV9CT0RZX0tFWSA9ICctLXBlcC1mb250LWZhbWlseS1ib2R5JztcclxuXHJcbiAgICAvLyBCb3JkZXIgcmFkaXVzIHZhcmlhYmxlcyBrZXlzXHJcbiAgICBzdGF0aWMgQk9SREVSX1JBRElVU19LRVkgPSAnLS1wZXAtYm9yZGVyLXJhZGl1cyc7XHJcbiAgICBzdGF0aWMgQk9SREVSX1JBRElVU19TTV9LRVkgPSBDdXN0b21pemF0aW9uU2VydmljZS5CT1JERVJfUkFESVVTX0tFWSArICctc20nO1xyXG4gICAgc3RhdGljIEJPUkRFUl9SQURJVVNfTURfS0VZID0gQ3VzdG9taXphdGlvblNlcnZpY2UuQk9SREVSX1JBRElVU19LRVkgKyAnLW1kJztcclxuICAgIHN0YXRpYyBCT1JERVJfUkFESVVTX0xHX0tFWSA9IEN1c3RvbWl6YXRpb25TZXJ2aWNlLkJPUkRFUl9SQURJVVNfS0VZICsgJy1sZyc7XHJcblxyXG4gICAgLy8gRm9udHMgdmFyaWFibGVzIGtleXNcclxuICAgIHN0YXRpYyBGT05UX1NJWkVfMlhTX0tFWSA9ICctLXBlcC1mb250LXNpemUtMnhzJztcclxuICAgIHN0YXRpYyBGT05UX1NJWkVfWFNfS0VZID0gJy0tcGVwLWZvbnQtc2l6ZS14cyc7XHJcbiAgICBzdGF0aWMgRk9OVF9TSVpFX1NNX0tFWSA9ICctLXBlcC1mb250LXNpemUtc20nO1xyXG4gICAgc3RhdGljIEZPTlRfU0laRV9NRF9LRVkgPSAnLS1wZXAtZm9udC1zaXplLW1kJztcclxuICAgIHN0YXRpYyBGT05UX1NJWkVfTEdfS0VZID0gJy0tcGVwLWZvbnQtc2l6ZS1sZyc7XHJcbiAgICBzdGF0aWMgRk9OVF9TSVpFX1hMX0tFWSA9ICctLXBlcC1mb250LXNpemUteGwnO1xyXG4gICAgc3RhdGljIEZPTlRfU0laRV8yWExfS0VZID0gJy0tcGVwLWZvbnQtc2l6ZS0yeGwnO1xyXG5cclxuICAgIC8vIExpbmUgaGVpZ2h0IHZhcmlhYmxlcyBrZXlzXHJcbiAgICBzdGF0aWMgTElORV9IRUlHSFRfMlhTX0tFWSA9ICctLXBlcC1saW5lLWhlaWdodC0yeHMnO1xyXG4gICAgc3RhdGljIExJTkVfSEVJR0hUX1hTX0tFWSA9ICctLXBlcC1saW5lLWhlaWdodC14cyc7XHJcbiAgICBzdGF0aWMgTElORV9IRUlHSFRfU01fS0VZID0gJy0tcGVwLWxpbmUtaGVpZ2h0LXNtJztcclxuICAgIHN0YXRpYyBMSU5FX0hFSUdIVF9NRF9LRVkgPSAnLS1wZXAtbGluZS1oZWlnaHQtbWQnO1xyXG4gICAgc3RhdGljIExJTkVfSEVJR0hUX0xHX0tFWSA9ICctLXBlcC1saW5lLWhlaWdodC1sZyc7XHJcbiAgICBzdGF0aWMgTElORV9IRUlHSFRfWExfS0VZID0gJy0tcGVwLWxpbmUtaGVpZ2h0LXhsJztcclxuICAgIHN0YXRpYyBMSU5FX0hFSUdIVF8yWExfS0VZID0gJy0tcGVwLWxpbmUtaGVpZ2h0LTJ4bCc7XHJcblxyXG4gICAgLy8gU2hhZG93cyBvZmZzZXQgdmFyaWFibGVzIGtleXNcclxuICAgIHN0YXRpYyBTSEFET1dfTk9ORV9PRkZTRVRfS0VZID0gJy0tcGVwLXNoYWRvdy1ub25lLW9mZnNldCc7XHJcbiAgICBzdGF0aWMgU0hBRE9XX1hTX09GRlNFVF9LRVkgPSAnLS1wZXAtc2hhZG93LXhzLW9mZnNldCc7XHJcbiAgICBzdGF0aWMgU0hBRE9XX1NNX09GRlNFVF9LRVkgPSAnLS1wZXAtc2hhZG93LXNtLW9mZnNldCc7XHJcbiAgICBzdGF0aWMgU0hBRE9XX01EX09GRlNFVF9LRVkgPSAnLS1wZXAtc2hhZG93LW1kLW9mZnNldCc7XHJcbiAgICBzdGF0aWMgU0hBRE9XX0xHX09GRlNFVF9LRVkgPSAnLS1wZXAtc2hhZG93LWxnLW9mZnNldCc7XHJcbiAgICBzdGF0aWMgU0hBRE9XX1hMX09GRlNFVF9LRVkgPSAnLS1wZXAtc2hhZG93LXhsLW9mZnNldCc7XHJcblxyXG4gICAgLy8gU3BhY2luZyB2YXJpYWJsZXMga2V5c1xyXG4gICAgc3RhdGljIFNQQUNJTkdfU0laRV8yWFNfS0VZID0gJy0tcGVwLXNwYWNpbmctMnhzJztcclxuICAgIHN0YXRpYyBTUEFDSU5HX1NJWkVfWFNfS0VZID0gJy0tcGVwLXNwYWNpbmcteHMnO1xyXG4gICAgc3RhdGljIFNQQUNJTkdfU0laRV9TTV9LRVkgPSAnLS1wZXAtc3BhY2luZy1zbSc7XHJcbiAgICBzdGF0aWMgU1BBQ0lOR19TSVpFX01EX0tFWSA9ICctLXBlcC1zcGFjaW5nLW1kJztcclxuICAgIHN0YXRpYyBTUEFDSU5HX1NJWkVfTEdfS0VZID0gJy0tcGVwLXNwYWNpbmctbGcnO1xyXG4gICAgc3RhdGljIFNQQUNJTkdfU0laRV9YTF9LRVkgPSAnLS1wZXAtc3BhY2luZy14bCc7XHJcbiAgICBzdGF0aWMgU1BBQ0lOR19TSVpFXzJYTF9LRVkgPSAnLS1wZXAtc3BhY2luZy0yeGwnO1xyXG5cclxuICAgIC8vIFNpZGUgYmFyIHZhcmlhYmxlcyBrZXlzXHJcbiAgICBzdGF0aWMgU0lERV9CQVJfV0lEVEhfS0VZID0gJy0tcGVwLXNpZGUtYmFyLXdpZHRoJztcclxuXHJcbiAgICAvLyBUb3AgYmFyIHZhcmlhYmxlcyBrZXlzXHJcbiAgICBzdGF0aWMgVE9QX0JBUl9TUEFDSU5HX1RPUF9LRVkgPSAnLS1wZXAtdG9wLWJhci1zcGFjaW5nLXRvcCc7XHJcbiAgICBzdGF0aWMgVE9QX0JBUl9TUEFDSU5HX0JPVFRPTV9LRVkgPSAnLS1wZXAtdG9wLWJhci1zcGFjaW5nLWJvdHRvbSc7XHJcbiAgICBzdGF0aWMgVE9QX0JBUl9GSUVMRF9IRUlHSFRfS0VZID0gJy0tcGVwLXRvcC1iYXItZmllbGQtaGVpZ2h0JztcclxuXHJcbiAgICAvLyBGb290ZXIgdmFyaWFibGVzIGtleXNcclxuICAgIHN0YXRpYyBGT09URVJfQkFSX1NQQUNJTkdfVE9QX0tFWSA9ICctLXBlcC1mb290ZXItYmFyLXNwYWNpbmctdG9wJztcclxuICAgIHN0YXRpYyBGT09URVJfQkFSX1NQQUNJTkdfQk9UVE9NX0tFWSA9ICctLXBlcC1mb290ZXItYmFyLXNwYWNpbmctYm90dG9tJztcclxuXHJcbiAgICAvLyBGb3JtIHZhcmlhYmxlcyBrZXlzXHJcbiAgICBzdGF0aWMgRk9STV9GSUVMRF9IRUlHSFRfS0VZID0gJy0tcGVwLWZvcm0tZmllbGQtaGVpZ2h0JztcclxuICAgIHN0YXRpYyBGT1JNX0ZJRUxEX1RJVExFX0hFSUdIVF9LRVkgPSAnLS1wZXAtZm9ybS1maWVsZC10aXRsZS1oZWlnaHQnO1xyXG4gICAgc3RhdGljIEZPUk1fRklFTERfU1BBQ0VJTkdfS0VZID0gJy0tcGVwLWZvcm0tZmllbGQtc3BhY2luZyc7XHJcbiAgICBzdGF0aWMgRk9STV9TUEFDRUlOR19LRVkgPSAnLS1wZXAtZm9ybS1zcGFjaW5nJztcclxuXHJcbiAgICAvLyBDYXJkIHZhcmlhYmxlcyBrZXlzXHJcbiAgICBzdGF0aWMgQ0FSRF9GSUVMRF9IRUlHSFRfS0VZID0gJy0tcGVwLWNhcmQtZmllbGQtaGVpZ2h0JztcclxuICAgIHN0YXRpYyBDQVJEX1NQQUNFSU5HX0tFWSA9ICctLXBlcC1jYXJkLXNwYWNpbmcnO1xyXG4gICAgc3RhdGljIENBUkRfU0hBRE9XX09GRlNFVF9LRVkgPSAnLS1wZXAtc2hhZG93LWNhcmQtb2Zmc2V0JztcclxuICAgIHN0YXRpYyBDQVJEX0JPUkRFUl9SQURJVVNfS0VZID0gJy0tcGVwLWNhcmQtYm9yZGVyLXJhZGl1cyc7XHJcblxyXG4gICAgLy8gVGFibGUgdmFyaWFibGVzIGtleXNcclxuICAgIHN0YXRpYyBUQUJMRV9GSUVMRF9IRUlHSFRfS0VZID0gJy0tcGVwLXRhYmxlLWZpZWxkLWhlaWdodCc7XHJcbiAgICBzdGF0aWMgVEFCTEVfU1BBQ0VJTkdfS0VZID0gJy0tcGVwLXRhYmxlLXNwYWNpbmcnO1xyXG4gICAgc3RhdGljIFRBQkxFX0JPUkRFUl9SQURJVVNfS0VZID0gJy0tcGVwLXRhYmxlLWJvcmRlci1yYWRpdXMnO1xyXG5cclxuICAgIHN0YXRpYyBERUZBVUxUX0hFQURFUl9IRUlHSFQgPSA2NDsgLy8gRGVmYXVsdFxyXG5cclxuICAgIHN0YXRpYyBERUZBVUxUX1NQSU5ORVJfQ09MT1IgPSAnIzc4YWEwMCc7XHJcbiAgICBzdGF0aWMgREVGQVVMVF9CUkFORElOR19DT0xPUiA9ICcjZmZmJztcclxuXHJcbiAgICBwdWJsaWMgaGFzQ3VzdG9tSG9tZXBhZ2U6IGJvb2xlYW4gPSBudWxsO1xyXG4gICAgcHVibGljIGhhc0N1c3RvbUhlYWRlcjogYm9vbGVhbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgY3VzdG9tSGVhZGVySGVpZ2h0ID0gQ3VzdG9taXphdGlvblNlcnZpY2UuREVGQVVMVF9IRUFERVJfSEVJR0hUO1xyXG4gICAgcHVibGljIG1haW5Db250SGVpZ2h0ID0gMDtcclxuICAgIHB1YmxpYyBmb290ZXJIZWlnaHQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBzZXNzaW9uU2VydmljZTogU2Vzc2lvblNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGZiOiBGb3JtQnVpbGRlcikgeyB9XHJcblxyXG4gICAgZ2V0VmFsaWRhdG9yc0ZvckZpZWxkKHJlcXVpcmVkOiBib29sZWFuLCByZWFkb25seTogYm9vbGVhbiwgZGlzYWJsZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RmllbGRDaGFyYWN0ZXJzOiBudW1iZXIsIHR5cGU6IHN0cmluZywgaXNDaGVja2JveCA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlID0gTmFOLCBtYXhWYWx1ZSA9IE5hTik6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVpcmVkICYmICFyZWFkb25seSAmJiAhZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzQ2hlY2tib3gpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXhGaWVsZENoYXJhY3RlcnMgPiAwKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aChtYXhGaWVsZENoYXJhY3RlcnMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSAnZW1haWwnKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucGF0dGVybihcclxuICAgICAgICAgICAgICAgICAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Bob25lJykge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKC9eW1xcZFxcLlxcLVxcK1xcKFxcKVxcKlxcI10rJC8pKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdpbnQnIHx8IHR5cGUgPT09ICdyZWFsJykge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKC9eW1xcLixcXC1cXCtcXGRdKyQvKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKG1pblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluKG1pblZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaXNOYU4obWF4VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXgobWF4VmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdEZyb21Hcm91cChcclxuICAgICAgICBrZXk6IHN0cmluZyxcclxuICAgICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBib29sZWFuLFxyXG4gICAgICAgIHJlYWRvbmx5OiBib29sZWFuLFxyXG4gICAgICAgIGRpc2FibGVkOiBib29sZWFuLFxyXG4gICAgICAgIG1heEZpZWxkQ2hhcmFjdGVyczogbnVtYmVyID0gMCxcclxuICAgICAgICB0eXBlOiBzdHJpbmcgPSAnJyxcclxuICAgICAgICBpc0NoZWNrYm94ID0gZmFsc2UsXHJcbiAgICAgICAgd2l0aFZhbGlkYXRvcnMgPSB0cnVlLFxyXG4gICAgICAgIG1pblZhbHVlID0gTmFOLFxyXG4gICAgICAgIG1heFZhbHVlID0gTmFOXHJcbiAgICApOiBGb3JtR3JvdXAge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSB3aXRoVmFsaWRhdG9ycyA/XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdG9yc0ZvckZpZWxkKHJlcXVpcmVkLCByZWFkb25seSwgZGlzYWJsZWQsIG1heEZpZWxkQ2hhcmFjdGVycywgdHlwZSwgaXNDaGVja2JveCwgbWluVmFsdWUsIG1heFZhbHVlKSA6IFtdO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwID0ge307XHJcbiAgICAgICAgZ3JvdXBba2V5XSA9IFt7IHZhbHVlLCBkaXNhYmxlZCB9LCB2YWxpZGF0b3JzXTtcclxuICAgICAgICByZXR1cm4gdGhpcy5mYi5ncm91cChncm91cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb3JtQ29udHJvbChmb3JtLCBmaWVsZEtleSwgcGFyZW50RmllbGRLZXkgPSBudWxsKTogYW55IHtcclxuICAgICAgICBsZXQgZm9ybUNvbnRyb2wgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoZm9ybSAmJiBmb3JtLmNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRGaWVsZEtleSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2wgPSBmb3JtLmNvbnRyb2xzW2ZpZWxkS2V5XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sID0gZm9ybS5jb250cm9sc1twYXJlbnRGaWVsZEtleV0uZ2V0KGZpZWxkS2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcm1Db250cm9sO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUZvcm1GaWVsZFZhbHVlKGZvcm0sIGZpZWxkS2V5LCB2YWx1ZSA9ICcnLCBwYXJlbnRGaWVsZEtleSA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBmb3JtQ29udHJvbCA9IHRoaXMuZ2V0Rm9ybUNvbnRyb2woZm9ybSwgZmllbGRLZXksIHBhcmVudEZpZWxkS2V5KTtcclxuICAgICAgICBpZiAoZm9ybUNvbnRyb2wpIHtcclxuICAgICAgICAgICAgZm9ybUNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVGb3JtRmllbGQoZm9ybSwgZmllbGQsIHZhbHVlID0gJycsIHBhcmVudEZpZWxkID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IHRoaXMuZ2V0Rm9ybUNvbnRyb2woZm9ybSwgZmllbGQua2V5LCBwYXJlbnRGaWVsZCk7XHJcbiAgICAgICAgaWYgKGZvcm1Db250cm9sKSB7XHJcbiAgICAgICAgICAgIGZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIGRpc2FibGVkIGhhcyBjaGFuZ2VkLlxyXG4gICAgICAgICAgICBpZiAoZm9ybUNvbnRyb2wuZGlzYWJsZWQgIT09IGZpZWxkLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5kaXNhYmxlZCA/IGZvcm1Db250cm9sLmRpc2FibGUoKSA6IGZvcm1Db250cm9sLmVuYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLmdldFZhbGlkYXRvcnNGb3JGaWVsZChmaWVsZC5yZXF1aXJlZCwgZmllbGQucmVhZG9ubHksIGZpZWxkLmRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLm1heEZpZWxkQ2hhcmFjdGVycywgZmllbGQudHlwZSwgZmllbGQuY29udHJvbFR5cGUgPT09ICdjaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2wuc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVGb3JtRmllbGRIZWlnaHQod2l0aFRpdGxlID0gdHJ1ZSwgcm93U3BhbiA9IDEsIHN0YW5kQWxvbmUgPSBmYWxzZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgdGhlbWVWYXJzID0gdGhpcy5nZXRUaGVtZVZhcmlhYmxlcygpO1xyXG4gICAgICAgIGNvbnN0IHJvd0ZpZWxkSGVpZ2h0ID0gdGhpcy5nZXROdW1iZXJUaGVtZVZhcmlhYmxlKHRoZW1lVmFycywgQ3VzdG9taXphdGlvblNlcnZpY2UuRk9STV9GSUVMRF9IRUlHSFRfS0VZKTtcclxuICAgICAgICBjb25zdCByb3dGaWVsZFRpdGxlSGVpZ2h0ID0gdGhpcy5nZXROdW1iZXJUaGVtZVZhcmlhYmxlKHRoZW1lVmFycywgQ3VzdG9taXphdGlvblNlcnZpY2UuRk9STV9GSUVMRF9USVRMRV9IRUlHSFRfS0VZKTtcclxuICAgICAgICBjb25zdCByb3dGaWVsZFNwYWNpbmdCb3R0b20gPSB0aGlzLmdldE51bWJlclRoZW1lVmFyaWFibGUodGhlbWVWYXJzLCBDdXN0b21pemF0aW9uU2VydmljZS5GT1JNX1NQQUNFSU5HX0tFWSk7XHJcblxyXG4gICAgICAgIGxldCBmaWVsZEhlaWdodCA9IDA7XHJcbiAgICAgICAgaWYgKHJvd1NwYW4gPT09IDEpIHtcclxuICAgICAgICAgICAgZmllbGRIZWlnaHQgPSAod2l0aFRpdGxlID8gcm93RmllbGRUaXRsZUhlaWdodCA6IDApICsgcm93RmllbGRIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93U3BhbkNhbGMgPSB3aXRoVGl0bGUgPyByb3dTcGFuIDogcm93U3BhbiAtIDE7XHJcbiAgICAgICAgICAgIGZpZWxkSGVpZ2h0ID1cclxuICAgICAgICAgICAgICAgIHJvd1NwYW4gKiByb3dGaWVsZEhlaWdodCArXHJcbiAgICAgICAgICAgICAgICByb3dTcGFuQ2FsYyAqIHJvd0ZpZWxkVGl0bGVIZWlnaHQgK1xyXG4gICAgICAgICAgICAgICAgKHN0YW5kQWxvbmUgPyAwIDogcm93U3BhbkNhbGMgKiByb3dGaWVsZFNwYWNpbmdCb3R0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpZWxkSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUNhcmRSb3dzSGVpZ2h0KHJvd3NDb3VudCA9IDEsIHdpdGhTcGFjaW5nID0gdHJ1ZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgdGhlbWVWYXJzID0gdGhpcy5nZXRUaGVtZVZhcmlhYmxlcygpO1xyXG4gICAgICAgIGNvbnN0IGNhcmRGaWVsZEhlaWdodCA9IHRoaXMuZ2V0TnVtYmVyVGhlbWVWYXJpYWJsZSh0aGVtZVZhcnMsIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkNBUkRfRklFTERfSEVJR0hUX0tFWSk7XHJcbiAgICAgICAgY29uc3QgY2FyZEZpZWxkU3BhY2luZyA9IHRoaXMuZ2V0TnVtYmVyVGhlbWVWYXJpYWJsZSh0aGVtZVZhcnMsIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkNBUkRfU1BBQ0VJTkdfS0VZKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmllbGRIZWlnaHQgPSByb3dzQ291bnQgKiBjYXJkRmllbGRIZWlnaHQgKyAocm93c0NvdW50IC0gMSkgKiAod2l0aFNwYWNpbmcgPyBjYXJkRmllbGRTcGFjaW5nIDogMCk7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVRhYmxlUm93c0hlaWdodChyb3dzQ291bnQgPSAxLCB3aXRoU3BhY2luZyA9IHRydWUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lVmFycyA9IHRoaXMuZ2V0VGhlbWVWYXJpYWJsZXMoKTtcclxuICAgICAgICBjb25zdCB0YWJsZUZpZWxkSGVpZ2h0ID0gdGhpcy5nZXROdW1iZXJUaGVtZVZhcmlhYmxlKHRoZW1lVmFycywgQ3VzdG9taXphdGlvblNlcnZpY2UuVEFCTEVfRklFTERfSEVJR0hUX0tFWSk7XHJcbiAgICAgICAgY29uc3QgdGFibGVGaWVsZFNwYWNpbmcgPSB0aGlzLmdldE51bWJlclRoZW1lVmFyaWFibGUodGhlbWVWYXJzLCBDdXN0b21pemF0aW9uU2VydmljZS5UQUJMRV9TUEFDRUlOR19LRVkpO1xyXG5cclxuICAgICAgICBjb25zdCBmaWVsZEhlaWdodCA9IHJvd3NDb3VudCAqICh0YWJsZUZpZWxkSGVpZ2h0ICsgKHdpdGhTcGFjaW5nID8gdGFibGVGaWVsZFNwYWNpbmcgKiAyIDogMCkpO1xyXG4gICAgICAgIHJldHVybiBmaWVsZEhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVGaWVsZEhlaWdodChsYXlvdXRUeXBlID0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm0sIHJvd1NwYW4sIHN0YW5kQWxvbmUpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBmaWVsZEhlaWdodCA9ICdpbmhlcml0JzsgLy8gRGVmYXVsdCBmb3IgY2FyZCAod2l0aCBubyB0aXRsZSlcclxuICAgICAgICBpZiAobGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlKSB7XHJcbiAgICAgICAgICAgIGZpZWxkSGVpZ2h0ID0gdGhpcy5nZXRUaGVtZVZhcmlhYmxlKEN1c3RvbWl6YXRpb25TZXJ2aWNlLlRBQkxFX0ZJRUxEX0hFSUdIVF9LRVkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmQpIHtcclxuICAgICAgICAgICAgZmllbGRIZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZUNhcmRSb3dzSGVpZ2h0KHJvd1NwYW4sICFzdGFuZEFsb25lKSArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGVwcGVyaUZvcm1cclxuICAgICAgICAgICAgZmllbGRIZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZUZvcm1GaWVsZEhlaWdodChmYWxzZSwgcm93U3Bhbiwgc3RhbmRBbG9uZSkgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpZWxkSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyYW5kaW5nVGhlbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB0aGVtZU9iaiA9IHRoaXMuc2Vzc2lvblNlcnZpY2UuZ2V0T2JqZWN0KEN1c3RvbWl6YXRpb25TZXJ2aWNlLlVTRVJfVEhFTUUpO1xyXG4gICAgICAgIHJldHVybiAodGhlbWVPYmogJiYgdGhlbWVPYmouVGhlbWUpIHx8ICdkZWZhdWx0LXRoZW1lJzsgLy8gJ2xpZ2h0LXRoZW1lJztcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZhdWx0VGhlbWVMYXlvdXRWYXJpYWJsZXModGhlbWVWYXJzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBEZWNsYXJlIGRlZmF1bHQgc2NyZWVuIHNpemVzLlxyXG4gICAgICAgIHRoZW1lVmFyc1snLS1wZXAtc2NyZWVuLW1heC1zaXplLTJ4cyddID0gJzQ2MCcgKyBDdXN0b21pemF0aW9uU2VydmljZS5QWF9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzWyctLXBlcC1zY3JlZW4tbWF4LXNpemUteHMnXSA9ICc3NjcnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUFhfU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1snLS1wZXAtc2NyZWVuLW1heC1zaXplLXNtJ10gPSAnOTkxJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlBYX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLXNjcmVlbi1tYXgtc2l6ZS1tZCddID0gJzExOTknICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUFhfU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1snLS1wZXAtc2NyZWVuLW1heC1zaXplLWxnJ10gPSAnMTM2NicgKyBDdXN0b21pemF0aW9uU2VydmljZS5QWF9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzWyctLXBlcC1zY3JlZW4tbWF4LXNpemUteGwnXSA9ICcxOTIwJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlBYX1NUUklORztcclxuXHJcbiAgICAgICAgLy8gRGVjbGFyZSBkZWZhdWx0IHRvcCBiYXIuXHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLlNJREVfQkFSX1dJRFRIX0tFWV0gPSAnMTYnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuXHJcbiAgICAgICAgLy8gRGVjbGFyZSBkZWZhdWx0IHRvcCBiYXIuXHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLlRPUF9CQVJfU1BBQ0lOR19UT1BfS0VZXSA9ICcxLjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuVE9QX0JBUl9TUEFDSU5HX0JPVFRPTV9LRVldID0gJzAuNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5UT1BfQkFSX0ZJRUxEX0hFSUdIVF9LRVldID0gJzIuNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG5cclxuICAgICAgICAvLyBEZWNsYXJlIGRlZmF1bHQgZm9vdGVyLlxyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5GT09URVJfQkFSX1NQQUNJTkdfVE9QX0tFWV0gPSAnMC43NScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5GT09URVJfQkFSX1NQQUNJTkdfQk9UVE9NX0tFWV0gPSAnMS4yNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRUaGVtZUJvcmRlclJhZGl1c1ZhcmlhYmxlcyh0aGVtZVZhcnM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5CT1JERVJfUkFESVVTX1NNX0tFWV0gPSAnMC4xMjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQk9SREVSX1JBRElVU19NRF9LRVldID0gJzAuMjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQk9SREVSX1JBRElVU19MR19LRVldID0gJzAuNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRUaGVtZVNwYWNpbmdWYXJpYWJsZXModGhlbWVWYXJzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuU1BBQ0lOR19TSVpFXzJYU19LRVldID0gJzAuMTI1JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLlNQQUNJTkdfU0laRV9YU19LRVldID0gJzAuMjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuU1BBQ0lOR19TSVpFX1NNX0tFWV0gPSAnMC41JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLlNQQUNJTkdfU0laRV9NRF9LRVldID0gJzAuNzUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuU1BBQ0lOR19TSVpFX0xHX0tFWV0gPSAnMScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5TUEFDSU5HX1NJWkVfWExfS0VZXSA9ICcxLjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuU1BBQ0lOR19TSVpFXzJYTF9LRVldID0gJzInICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZhdWx0VGhlbWVGb250c1ZhcmlhYmxlcyh0aGVtZVZhcnM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIFRpdGxlIGZvbnQgZmFtaWx5XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkZPTlRfRkFNSUxZX1RJVExFX0tFWV0gPSAnTmV4YSc7XHJcblxyXG4gICAgICAgIC8vIEJvZHkgZm9udCBmYW1pbHlcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuRk9OVF9GQU1JTFlfQk9EWV9LRVldID0gJ0ludGVyJztcclxuXHJcbiAgICAgICAgLy8gRm9udCBzaXplc1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5GT05UX1NJWkVfMlhTX0tFWV0gPSAnMC42MjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuRk9OVF9TSVpFX1hTX0tFWV0gPSAnMC43NScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5GT05UX1NJWkVfU01fS0VZXSA9ICcwLjg3NScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5GT05UX1NJWkVfTURfS0VZXSA9ICcxJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkZPTlRfU0laRV9MR19LRVldID0gJzEuMTI1JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkZPTlRfU0laRV9YTF9LRVldID0gJzEuMjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuRk9OVF9TSVpFXzJYTF9LRVldID0gJzEuNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG5cclxuICAgICAgICAvLyBMaW5lIGhlaWdodFxyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5MSU5FX0hFSUdIVF8yWFNfS0VZXSA9ICcwLjc1JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkxJTkVfSEVJR0hUX1hTX0tFWV0gPSAnMScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5MSU5FX0hFSUdIVF9TTV9LRVldID0gJzEuMjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuTElORV9IRUlHSFRfTURfS0VZXSA9ICcxLjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuTElORV9IRUlHSFRfTEdfS0VZXSA9ICcxLjc1JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkxJTkVfSEVJR0hUX1hMX0tFWV0gPSAnMicgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5MSU5FX0hFSUdIVF8yWExfS0VZXSA9ICcyLjI1JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcblxyXG4gICAgICAgIC8vIEZvbnQgd2VpZ2h0XHJcbiAgICAgICAgdGhlbWVWYXJzWyctLXBlcC1mb250LXdlaWdodC1ub3JtYWwnXSA9IDQwMDtcclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLWZvbnQtd2VpZ2h0LWJvbGQnXSA9IDYwMDtcclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLWZvbnQtd2VpZ2h0LWJvbGRlciddID0gODAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRUaGVtZUJ1dHRvbnNWYXJpYWJsZXModGhlbWVWYXJzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLWJ1dHRvbi0yeHMtaG9yaXpvbnRhbC1zcGFjaW5nJ10gPSAnMC4yNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1snLS1wZXAtYnV0dG9uLTJ4cy1taW4td2lkdGgnXSA9ICcxJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzWyctLXBlcC1idXR0b24tMnhzLWhlaWdodCddID0gJzEnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLWJ1dHRvbi0yeHMtZm9udC1zaXplJ10gPSAndmFyKCcgKyBDdXN0b21pemF0aW9uU2VydmljZS5GT05UX1NJWkVfMlhTX0tFWSArICcpJztcclxuICAgICAgICAvLyB0aGVtZVZhcnNbJy0tcGVwLWJ1dHRvbi0yeHMtaWNvbi1ob3Jpem9udGFsLXNwYWNpbmcnXSA9ICcwLjEyNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG5cclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLWJ1dHRvbi14cy1ob3Jpem9udGFsLXNwYWNpbmcnXSA9ICcwLjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLWJ1dHRvbi14cy1taW4td2lkdGgnXSA9ICcyJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzWyctLXBlcC1idXR0b24teHMtaGVpZ2h0J10gPSAnMS41JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzWyctLXBlcC1idXR0b24teHMtZm9udC1zaXplJ10gPSAndmFyKCcgKyBDdXN0b21pemF0aW9uU2VydmljZS5GT05UX1NJWkVfWFNfS0VZICsgJyknO1xyXG4gICAgICAgIC8vIHRoZW1lVmFyc1snLS1wZXAtYnV0dG9uLXhzLWljb24taG9yaXpvbnRhbC1zcGFjaW5nJ10gPSAnMC4yNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG5cclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLWJ1dHRvbi1zbS1ob3Jpem9udGFsLXNwYWNpbmcnXSA9ICcwLjc1JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzWyctLXBlcC1idXR0b24tc20tbWluLXdpZHRoJ10gPSAnMicgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1snLS1wZXAtYnV0dG9uLXNtLWhlaWdodCddID0gJzInICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLWJ1dHRvbi1zbS1mb250LXNpemUnXSA9ICd2YXIoJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkZPTlRfU0laRV9TTV9LRVkgKyAnKSc7XHJcbiAgICAgICAgLy8gdGhlbWVWYXJzWyctLXBlcC1idXR0b24tc20taWNvbi1ob3Jpem9udGFsLXNwYWNpbmcnXSA9ICcwLjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuXHJcbiAgICAgICAgdGhlbWVWYXJzWyctLXBlcC1idXR0b24tbWQtaG9yaXpvbnRhbC1zcGFjaW5nJ10gPSAnMScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1snLS1wZXAtYnV0dG9uLW1kLW1pbi13aWR0aCddID0gJzIuNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1snLS1wZXAtYnV0dG9uLW1kLWhlaWdodCddID0gJzIuNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1snLS1wZXAtYnV0dG9uLW1kLWZvbnQtc2l6ZSddID0gJ3ZhcignICsgQ3VzdG9taXphdGlvblNlcnZpY2UuRk9OVF9TSVpFX01EX0tFWSArICcpJztcclxuICAgICAgICAvLyB0aGVtZVZhcnNbJy0tcGVwLWJ1dHRvbi1tZC1pY29uLWhvcml6b250YWwtc3BhY2luZyddID0gJzAuNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG5cclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLWJ1dHRvbi1sZy1ob3Jpem9udGFsLXNwYWNpbmcnXSA9ICcxJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzWyctLXBlcC1idXR0b24tbGctbWluLXdpZHRoJ10gPSAnMycgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1snLS1wZXAtYnV0dG9uLWxnLWhlaWdodCddID0gJzMnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLWJ1dHRvbi1sZy1mb250LXNpemUnXSA9ICd2YXIoJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkZPTlRfU0laRV9MR19LRVkgKyAnKSc7XHJcbiAgICAgICAgLy8gdGhlbWVWYXJzWyctLXBlcC1idXR0b24tbGctaWNvbi1ob3Jpem9udGFsLXNwYWNpbmcnXSA9ICcwLjc1JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcblxyXG4gICAgICAgIHRoZW1lVmFyc1snLS1wZXAtYnV0dG9uLXhsLWhvcml6b250YWwtc3BhY2luZyddID0gJzEuNScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgICAgIHRoZW1lVmFyc1snLS1wZXAtYnV0dG9uLXhsLW1pbi13aWR0aCddID0gJzUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbJy0tcGVwLWJ1dHRvbi14bC1oZWlnaHQnXSA9ICc0JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzWyctLXBlcC1idXR0b24teGwtZm9udC1zaXplJ10gPSAndmFyKCcgKyBDdXN0b21pemF0aW9uU2VydmljZS5GT05UX1NJWkVfWExfS0VZICsgJyknO1xyXG4gICAgICAgIC8vIHRoZW1lVmFyc1snLS1wZXAtYnV0dG9uLXhsLWljb24taG9yaXpvbnRhbC1zcGFjaW5nJ10gPSAnMScgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN5c3RlbVByaW1hcnlJbnZlcnRDb2xvcnNWYXJpYWJsZXModGhlbWVWYXJzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfU1lTVEVNX1BSSU1BUllfSU5WRVJUX0tFWSArICctaCddID0gJzI1NSc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1NZU1RFTV9QUklNQVJZX0lOVkVSVF9LRVkgKyAnLXMnXSA9ICcxMDAlJztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfU1lTVEVNX1BSSU1BUllfSU5WRVJUX0tFWSArICctbCddID0gJzEwMCUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN5c3RlbVByaW1hcnlDb2xvcnNWYXJpYWJsZXModGhlbWVWYXJzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfU1lTVEVNX1BSSU1BUllfS0VZICsgJy1oJ10gPSAnMCc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1NZU1RFTV9QUklNQVJZX0tFWSArICctcyddID0gJzAlJztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfU1lTVEVNX1BSSU1BUllfS0VZICsgJy1sJ10gPSAnMTAlJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTeXN0ZW1TdWNjZXNzQ29sb3JzVmFyaWFibGVzKHRoZW1lVmFyczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1NZU1RFTV9TVUNDRVNTX0tFWSArICctaCddID0gJzEwMCc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1NZU1RFTV9TVUNDRVNTX0tFWSArICctcyddID0gJzEwMCUnO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9TWVNURU1fU1VDQ0VTU19LRVkgKyAnLWwnXSA9ICcyNSUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN5c3RlbUNhdXRpb25Db2xvcnNWYXJpYWJsZXModGhlbWVWYXJzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfU1lTVEVNX0NBVVRJT05fS0VZICsgJy1oJ10gPSAnMzYwJztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfU1lTVEVNX0NBVVRJT05fS0VZICsgJy1zJ10gPSAnMTAwJSc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1NZU1RFTV9DQVVUSU9OX0tFWSArICctbCddID0gJzQwJSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlclByaW1hcnlDb2xvcnNWYXJpYWJsZXModGhlbWVWYXJzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfVVNFUl9QUklNQVJZX0tFWSArICctaCddID0gJzc4JztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfVVNFUl9QUklNQVJZX0tFWSArICctcyddID0gJzg3JSc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1VTRVJfUFJJTUFSWV9LRVkgKyAnLWwnXSA9ICcyNyUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJTZWNvbmRhcnlDb2xvcnNWYXJpYWJsZXModGhlbWVWYXJzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfVVNFUl9TRUNPTkRBUllfS0VZICsgJy1oJ10gPSAnNzcnO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9VU0VSX1NFQ09OREFSWV9LRVkgKyAnLXMnXSA9ICc4NyUnO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9VU0VSX1NFQ09OREFSWV9LRVkgKyAnLWwnXSA9ICc0MiUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdlYWtDb2xvcnNWYXJpYWJsZXModGhlbWVWYXJzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfV0VBS19LRVkgKyAnLWgnXSA9ICd2YXIoJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1NZU1RFTV9QUklNQVJZX0tFWSArICctaCknO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9XRUFLX0tFWSArICctcyddID0gJ3ZhcignICsgQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfU1lTVEVNX1BSSU1BUllfS0VZICsgJy1zKSc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1dFQUtfS0VZICsgJy1sJ10gPSAndmFyKCcgKyBDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9TWVNURU1fUFJJTUFSWV9LRVkgKyAnLWwpJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWd1bGFyQ29sb3JzVmFyaWFibGVzKHRoZW1lVmFyczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1JFR1VMQVJfS0VZICsgJy1oJ10gPSAndmFyKCcgKyBDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9TWVNURU1fUFJJTUFSWV9LRVkgKyAnLWgpJztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfUkVHVUxBUl9LRVkgKyAnLXMnXSA9ICd2YXIoJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1NZU1RFTV9QUklNQVJZX0tFWSArICctcyknO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9SRUdVTEFSX0tFWSArICctbCddID0gJ3ZhcignICsgQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfU1lTVEVNX1BSSU1BUllfS0VZICsgJy1sKSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Ryb25nQ29sb3JzVmFyaWFibGVzKHRoZW1lVmFyczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1NUUk9OR19LRVkgKyAnLWgnXSA9ICd2YXIoJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1VTRVJfUFJJTUFSWV9LRVkgKyAnLWgpJztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfU1RST05HX0tFWSArICctcyddID0gJ3ZhcignICsgQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfVVNFUl9QUklNQVJZX0tFWSArICctcyknO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9TVFJPTkdfS0VZICsgJy1sJ10gPSAndmFyKCcgKyBDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9VU0VSX1BSSU1BUllfS0VZICsgJy1sKSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dENvbG9yc1ZhcmlhYmxlcyh0aGVtZVZhcnM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9URVhUX0xJTktfS0VZICsgJy1oJ10gPSAnMjA3JztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfVEVYVF9MSU5LX0tFWSArICctcyddID0gJzc2JSc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1RFWFRfTElOS19LRVkgKyAnLWwnXSA9ICczNyUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRUaGVtZUNvbG9yc1ZhcmlhYmxlcyh0aGVtZVZhcnM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIFN5c3RlbSBwcmltYXJ5IGludmVydCBjb2xvcnMuXHJcbiAgICAgICAgdGhpcy5nZXRTeXN0ZW1QcmltYXJ5SW52ZXJ0Q29sb3JzVmFyaWFibGVzKHRoZW1lVmFycyk7XHJcbiAgICAgICAgLy8gU3lzdGVtIHByaW1hcnkgY29sb3JzLlxyXG4gICAgICAgIHRoaXMuZ2V0U3lzdGVtUHJpbWFyeUNvbG9yc1ZhcmlhYmxlcyh0aGVtZVZhcnMpO1xyXG4gICAgICAgIC8vIFN5c3RlbSBzdWNjZXNzIGNvbG9ycy5cclxuICAgICAgICB0aGlzLmdldFN5c3RlbVN1Y2Nlc3NDb2xvcnNWYXJpYWJsZXModGhlbWVWYXJzKTtcclxuICAgICAgICAvLyBTeXN0ZW0gY2F1dGlvbiBjb2xvcnMuXHJcbiAgICAgICAgdGhpcy5nZXRTeXN0ZW1DYXV0aW9uQ29sb3JzVmFyaWFibGVzKHRoZW1lVmFycyk7XHJcbiAgICAgICAgLy8gVXNlciBwcmltYXJ5IGNvbG9ycy5cclxuICAgICAgICB0aGlzLmdldFVzZXJQcmltYXJ5Q29sb3JzVmFyaWFibGVzKHRoZW1lVmFycyk7XHJcbiAgICAgICAgLy8gVXNlciBzZWNvbmRhcnkgY29sb3JzLlxyXG4gICAgICAgIHRoaXMuZ2V0VXNlclNlY29uZGFyeUNvbG9yc1ZhcmlhYmxlcyh0aGVtZVZhcnMpO1xyXG5cclxuICAgICAgICAvLyBXZWFrIGNvbG9ycy5cclxuICAgICAgICB0aGlzLmdldFdlYWtDb2xvcnNWYXJpYWJsZXModGhlbWVWYXJzKTtcclxuICAgICAgICAvLyBSZWd1bGFyIGNvbG9ycy5cclxuICAgICAgICB0aGlzLmdldFJlZ3VsYXJDb2xvcnNWYXJpYWJsZXModGhlbWVWYXJzKTtcclxuICAgICAgICAvLyBTdHJvbmcgY29sb3JzLlxyXG4gICAgICAgIHRoaXMuZ2V0U3Ryb25nQ29sb3JzVmFyaWFibGVzKHRoZW1lVmFycyk7XHJcblxyXG4gICAgICAgIC8vIFRleHQgY29sb3JzLlxyXG4gICAgICAgIHRoaXMuZ2V0VGV4dENvbG9yc1ZhcmlhYmxlcyh0aGVtZVZhcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRUaGVtZVNoYWRvd3NWYXJpYWJsZXModGhlbWVWYXJzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBub25lT2Zmc2V0ID0gJzAnO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5TSEFET1dfTk9ORV9PRkZTRVRfS0VZXSA9IG5vbmVPZmZzZXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHhzT2Zmc2V0ID0gJzAgMC4xMjVyZW0gMC4yNXJlbSAwJztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuU0hBRE9XX1hTX09GRlNFVF9LRVldID0geHNPZmZzZXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHNtT2Zmc2V0ID0gJzAgMC4yNXJlbSAwLjVyZW0gMCc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLlNIQURPV19TTV9PRkZTRVRfS0VZXSA9IHNtT2Zmc2V0O1xyXG5cclxuICAgICAgICBjb25zdCBtZE9mZnNldCA9ICcwIDAuNXJlbSAxcmVtIDAnO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5TSEFET1dfTURfT0ZGU0VUX0tFWV0gPSBtZE9mZnNldDtcclxuXHJcbiAgICAgICAgY29uc3QgbGdPZmZzZXQgPSAnMCAxcmVtIDJyZW0gMCc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLlNIQURPV19MR19PRkZTRVRfS0VZXSA9IGxnT2Zmc2V0O1xyXG5cclxuICAgICAgICBjb25zdCB4bE9mZnNldCA9ICcwIDJyZW0gNHJlbSAwJztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuU0hBRE9XX1hMX09GRlNFVF9LRVldID0geGxPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdFRoZW1lRm9ybUN1c3RvbWl6YXRpb25WYXJpYWJsZXModGhlbWVWYXJzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBmb3JtRmllbGRTcGFjaW5nID0gMTtcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuRk9STV9GSUVMRF9IRUlHSFRfS0VZXSA9ICcyLjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuRk9STV9GSUVMRF9USVRMRV9IRUlHSFRfS0VZXSA9ICcxLjUnICsgQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuRk9STV9TUEFDRUlOR19LRVldID0gZm9ybUZpZWxkU3BhY2luZyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkZPUk1fRklFTERfU1BBQ0VJTkdfS0VZXSA9IGZvcm1GaWVsZFNwYWNpbmcgKyBDdXN0b21pemF0aW9uU2VydmljZS5SRU1fU1RSSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRUaGVtZUNhcmRDdXN0b21pemF0aW9uVmFyaWFibGVzKHRoZW1lVmFyczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNBUkRfRklFTERfSEVJR0hUX0tFWV0gPSAnMS41JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNBUkRfU1BBQ0VJTkdfS0VZXSA9ICd2YXIoJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlNQQUNJTkdfU0laRV9YU19LRVkgKyAnKSc7XHJcblxyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5DQVJEX0JPUkRFUl9SQURJVVNfS0VZXSA9ICd2YXIoJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkJPUkRFUl9SQURJVVNfTURfS0VZICsgJyknO1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5DQVJEX1NIQURPV19PRkZTRVRfS0VZXSA9ICd2YXIoJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlNIQURPV19NRF9PRkZTRVRfS0VZICsgJyknO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRUaGVtZVRhYmxlQ3VzdG9taXphdGlvblZhcmlhYmxlcyh0aGVtZVZhcnM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5UQUJMRV9GSUVMRF9IRUlHSFRfS0VZXSA9ICcyJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLlRBQkxFX1NQQUNFSU5HX0tFWV0gPSAnMC41JyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLlRBQkxFX0JPUkRFUl9SQURJVVNfS0VZXSA9ICd2YXIoJyArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkJPUkRFUl9SQURJVVNfTURfS0VZICsgJyknO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRUaGVtZVFTQ3VzdG9taXphdGlvblZhcmlhYmxlcyh0aGVtZVZhcnM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHFzU3RhdGUgPSBTVFlMRV9UWVBFLlJlZ3VsYXI7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLlNUWUxFX1FTX0tFWV0gPSBxc1N0YXRlO1xyXG5cclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfUVNfS0VZICsgJy1oJ10gPSAndmFyKCcgKyBDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9TWVNURU1fUFJJTUFSWV9LRVkgKyAnLWgpJztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfUVNfS0VZICsgJy1zJ10gPSAndmFyKCcgKyBDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9TWVNURU1fUFJJTUFSWV9LRVkgKyAnLXMpJztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfUVNfS0VZICsgJy1sJ10gPSAndmFyKCcgKyBDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9TWVNURU1fUFJJTUFSWV9LRVkgKyAnLWwpJztcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZhdWx0VGhlbWVUb3BIZWFkZXJDdXN0b21pemF0aW9uVmFyaWFibGVzKHRoZW1lVmFyczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdG9wSGVhZGVyU3RhdGUgPSBTVFlMRV9UWVBFLlN0cm9uZztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuU1RZTEVfVE9QX0hFQURFUl9LRVldID0gdG9wSGVhZGVyU3RhdGU7XHJcblxyXG4gICAgICAgIHRoZW1lVmFyc1tDdXN0b21pemF0aW9uU2VydmljZS5DT0xPUl9UT1BfSEVBREVSX0tFWSArICctaCddID0gJyc7XHJcbiAgICAgICAgdGhlbWVWYXJzW0N1c3RvbWl6YXRpb25TZXJ2aWNlLkNPTE9SX1RPUF9IRUFERVJfS0VZICsgJy1zJ10gPSAnJztcclxuICAgICAgICB0aGVtZVZhcnNbQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfVE9QX0hFQURFUl9LRVkgKyAnLWwnXSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRUaGVtZVZhcmlhYmxlcygpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lVmFycyA9IHt9O1xyXG5cclxuICAgICAgICAvLyBEZWNsYXJlIGRlZmF1bHQgbGF5b3V0LlxyXG4gICAgICAgIHRoaXMuZ2V0RGVmYXVsdFRoZW1lTGF5b3V0VmFyaWFibGVzKHRoZW1lVmFycyk7XHJcblxyXG4gICAgICAgIC8vIERlY2xhcmUgZGVmYXVsdCBib3JkZXIgcmFkaXVzLlxyXG4gICAgICAgIHRoaXMuZ2V0RGVmYXVsdFRoZW1lQm9yZGVyUmFkaXVzVmFyaWFibGVzKHRoZW1lVmFycyk7XHJcblxyXG4gICAgICAgIC8vIERlY2xhcmUgZGVmYXVsdCBzcGFjaW5nLlxyXG4gICAgICAgIHRoaXMuZ2V0RGVmYXVsdFRoZW1lU3BhY2luZ1ZhcmlhYmxlcyh0aGVtZVZhcnMpO1xyXG5cclxuICAgICAgICAvLyBEZWNsYXJlIGRlZmF1bHQgZm9udHMgc2l6ZSAmIGxpbmUgaGVpZ2h0LlxyXG4gICAgICAgIHRoaXMuZ2V0RGVmYXVsdFRoZW1lRm9udHNWYXJpYWJsZXModGhlbWVWYXJzKTtcclxuXHJcbiAgICAgICAgLy8gRGVjbGFyZSBkZWZhdWx0IGJ1dHRvbnMuXHJcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0VGhlbWVCdXR0b25zVmFyaWFibGVzKHRoZW1lVmFycyk7XHJcblxyXG4gICAgICAgIC8vIERlY2xhcmUgZGVmYXVsdCBjb2xvcnMuXHJcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0VGhlbWVDb2xvcnNWYXJpYWJsZXModGhlbWVWYXJzKTtcclxuXHJcbiAgICAgICAgLy8gRGVjbGFyZSBkZWZhdWx0IHNoYWRvd3MuXHJcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0VGhlbWVTaGFkb3dzVmFyaWFibGVzKHRoZW1lVmFycyk7XHJcblxyXG4gICAgICAgIC8vIERlY2xhcmUgZGVmYXVsdCBmb3JtIGN1c3RvbWl6YXRpb24uXHJcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0VGhlbWVGb3JtQ3VzdG9taXphdGlvblZhcmlhYmxlcyh0aGVtZVZhcnMpO1xyXG5cclxuICAgICAgICAvLyBEZWNsYXJlIGRlZmF1bHQgY2FyZCBjdXN0b21pemF0aW9uLlxyXG4gICAgICAgIHRoaXMuZ2V0RGVmYXVsdFRoZW1lQ2FyZEN1c3RvbWl6YXRpb25WYXJpYWJsZXModGhlbWVWYXJzKTtcclxuXHJcbiAgICAgICAgLy8gRGVjbGFyZSBkZWZhdWx0IHRhYmxlIGN1c3RvbWl6YXRpb24uXHJcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0VGhlbWVUYWJsZUN1c3RvbWl6YXRpb25WYXJpYWJsZXModGhlbWVWYXJzKTtcclxuXHJcbiAgICAgICAgLy8gRGVjbGFyZSBkZWZhdWx0IHFzIGN1c3RvbWl6YXRpb24uXHJcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0VGhlbWVRU0N1c3RvbWl6YXRpb25WYXJpYWJsZXModGhlbWVWYXJzKTtcclxuXHJcbiAgICAgICAgLy8gRGVjbGFyZSBkZWZhdWx0IHRvcCBoZWFkZXIgY3VzdG9taXphdGlvbi5cclxuICAgICAgICB0aGlzLmdldERlZmF1bHRUaGVtZVRvcEhlYWRlckN1c3RvbWl6YXRpb25WYXJpYWJsZXModGhlbWVWYXJzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoZW1lVmFycztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaGVtZVZhcmlhYmxlcygpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IHRoaXMuZ2V0RGVmYXVsdFRoZW1lVmFyaWFibGVzKCk7XHJcbiAgICAgICAgY29uc3QgdGhlbWVWYXJzID0gdGhpcy5zZXNzaW9uU2VydmljZS5nZXRPYmplY3QoQ3VzdG9taXphdGlvblNlcnZpY2UuVVNFUl9USEVNRV9WQVJJQUJMRVMpO1xyXG5cclxuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0cy5cclxuICAgICAgICBpZiAodGhlbWVWYXJzKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZm9yaW5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhlbWVWYXJzKSB7XHJcbiAgICAgICAgICAgICAgICByZXRba2V5XSA9IHRoZW1lVmFyc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRoZW1lVmFyaWFibGVzKHRoZW1lVmFyaWFibGVzVG9TZXQgPSBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGhlbWVWYXJpYWJsZXMgPSB0aGlzLmdldFRoZW1lVmFyaWFibGVzKCk7XHJcblxyXG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHRzLlxyXG4gICAgICAgIGlmICh0aGVtZVZhcmlhYmxlc1RvU2V0KSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZm9yaW5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhlbWVWYXJpYWJsZXNUb1NldCkge1xyXG4gICAgICAgICAgICAgICAgdGhlbWVWYXJpYWJsZXNba2V5XSA9IHRoZW1lVmFyaWFibGVzVG9TZXRba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXNzaW9uU2VydmljZS5zZXRPYmplY3QoQ3VzdG9taXphdGlvblNlcnZpY2UuVVNFUl9USEVNRV9WQVJJQUJMRVMsIEpTT04uc3RyaW5naWZ5KHRoZW1lVmFyaWFibGVzKSk7XHJcblxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZm9yaW5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGVtZVZhcmlhYmxlcykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB0aGVtZVZhcmlhYmxlc1trZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGhlbWVWYXJpYWJsZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdGhlbWVWYXJzID0gdGhpcy5nZXRUaGVtZVZhcmlhYmxlcygpO1xyXG5cclxuICAgICAgICBpZiAodGhlbWVWYXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoZW1lVmFyc1trZXldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyVGhlbWVWYXJpYWJsZSh0aGVtZVZhcnMsIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhlbWVWYXJzICYmIHRoZW1lVmFycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGl0J3MgcmVmZXJlbmNlIHRvIGFub3RoZXIga2V5LlxyXG4gICAgICAgICAgICBpZiAodGhlbWVWYXJzW2tleV0uaW5kZXhPZigndmFyKCcpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB0aGVtZVZhcnNba2V5XS5zdWJzdHIoNCkuc3BsaXQoJyknKVswXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdG1wID0gTnVtYmVyKHRoZW1lVmFyc1trZXldLnJlcGxhY2UoQ3VzdG9taXphdGlvblNlcnZpY2UuUkVNX1NUUklORywgJycpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRtcDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rm9vdGVySGVpZ2h0KGhlaWdodCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmZvb3RlckhlaWdodC5nZXRWYWx1ZSgpICE9PSBoZWlnaHQpIHtcclxuICAgICAgICAgICAgLy8gaXQgaXMgcHVibGlzaGluZyB0aGlzIHZhbHVlIHRvIGFsbCB0aGUgc3Vic2NyaWJlcnMgdGhhdCBoYXZlIGFscmVhZHkgc3Vic2NyaWJlZCB0byB0aGlzIG1lc3NhZ2VcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZWxmLmZvb3RlckhlaWdodC5uZXh0KGhlaWdodCksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoQ3VzdG9taXphdGlvblNlcnZpY2UuRk9PVEVSX0hFSUdIVF9LRVksIGhlaWdodCArIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlJFTV9TVFJJTkcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlZmF1bHRGb290ZXJIZWlnaHQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGhlbWVWYXJzID0gdGhpcy5nZXRUaGVtZVZhcmlhYmxlcygpO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPVxyXG4gICAgICAgICAgICB0aGlzLmdldE51bWJlclRoZW1lVmFyaWFibGUodGhlbWVWYXJzLCBDdXN0b21pemF0aW9uU2VydmljZS5GT09URVJfQkFSX1NQQUNJTkdfVE9QX0tFWSkgK1xyXG4gICAgICAgICAgICB0aGlzLmdldE51bWJlclRoZW1lVmFyaWFibGUodGhlbWVWYXJzLCBDdXN0b21pemF0aW9uU2VydmljZS5GT09URVJfQkFSX1NQQUNJTkdfQk9UVE9NX0tFWSkgK1xyXG4gICAgICAgICAgICB0aGlzLmdldE51bWJlclRoZW1lVmFyaWFibGUodGhlbWVWYXJzLCBDdXN0b21pemF0aW9uU2VydmljZS5UT1BfQkFSX0ZJRUxEX0hFSUdIVF9LRVkpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEZvb3RlckhlaWdodChyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvcEJhckhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lVmFycyA9IHRoaXMuZ2V0VGhlbWVWYXJpYWJsZXMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID1cclxuICAgICAgICAgICAgdGhpcy5nZXROdW1iZXJUaGVtZVZhcmlhYmxlKHRoZW1lVmFycywgQ3VzdG9taXphdGlvblNlcnZpY2UuVE9QX0JBUl9TUEFDSU5HX1RPUF9LRVkpICtcclxuICAgICAgICAgICAgdGhpcy5nZXROdW1iZXJUaGVtZVZhcmlhYmxlKHRoZW1lVmFycywgQ3VzdG9taXphdGlvblNlcnZpY2UuVE9QX0JBUl9TUEFDSU5HX0JPVFRPTV9LRVkpICtcclxuICAgICAgICAgICAgdGhpcy5nZXROdW1iZXJUaGVtZVZhcmlhYmxlKHRoZW1lVmFycywgQ3VzdG9taXphdGlvblNlcnZpY2UuVE9QX0JBUl9GSUVMRF9IRUlHSFRfS0VZKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRPbGRVc2VyVGhlbWUocmVzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBBZGRlZCB1c2VyIHRoZW1lLlxyXG4gICAgICAgIGNvbnN0IHRoZW1lT2JqID0ge1xyXG4gICAgICAgICAgICBUaGVtZTogcmVzLlRoZW1lIHx8ICdkZWZhdWx0LXRoZW1lJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNlc3Npb25TZXJ2aWNlLnNldE9iamVjdChDdXN0b21pemF0aW9uU2VydmljZS5VU0VSX1RIRU1FLCBKU09OLnN0cmluZ2lmeSh0aGVtZU9iaikpO1xyXG5cclxuICAgICAgICBsZXQgc3Bpbm5lckNvbG9yO1xyXG4gICAgICAgIGxldCBicmFuZGluZ0ZvbnRDb2xvcjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNMaWdodENvbG9yKHJlcy5CcmFuZGluZ01haW5Db2xvcikpIHtcclxuICAgICAgICAgICAgc3Bpbm5lckNvbG9yID0gQ3VzdG9taXphdGlvblNlcnZpY2UuREVGQVVMVF9TUElOTkVSX0NPTE9SO1xyXG4gICAgICAgICAgICBicmFuZGluZ0ZvbnRDb2xvciA9ICcjMjIyJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGlubmVyQ29sb3IgPSByZXMuQnJhbmRpbmdNYWluQ29sb3I7XHJcbiAgICAgICAgICAgIGJyYW5kaW5nRm9udENvbG9yID0gQ3VzdG9taXphdGlvblNlcnZpY2UuREVGQVVMVF9CUkFORElOR19DT0xPUjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbG9yID0ge1xyXG4gICAgICAgICAgICBCcmFuZGluZ1NlY29uZGFyeUNvbG9yOiByZXMuQnJhbmRpbmdTZWNvbmRhcnlDb2xvcixcclxuICAgICAgICAgICAgQnJhbmRpbmdNYWluQ29sb3I6IHJlcy5CcmFuZGluZ01haW5Db2xvcixcclxuICAgICAgICAgICAgQnJhbmRpbmdGb250Q29sb3I6IGJyYW5kaW5nRm9udENvbG9yLFxyXG4gICAgICAgICAgICBTcGlubmVyQ29sb3I6IHNwaW5uZXJDb2xvcixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNlc3Npb25TZXJ2aWNlLnNldE9iamVjdChDdXN0b21pemF0aW9uU2VydmljZS5VU0VSX0NPTE9SLCBKU09OLnN0cmluZ2lmeShjb2xvcikpO1xyXG5cclxuICAgICAgICB0aGlzLmhhc0N1c3RvbUhlYWRlciA9IHJlcy5Ub3BIZWFkZXJGaWxlcyAmJiByZXMuVG9wSGVhZGVyRmlsZXMubGVuZ3RoID4gMCAmJiByZXMuVG9wSGVhZGVyRmlsZXNbMF0gIT09ICcnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGFzQ3VzdG9tSG9tZXBhZ2UgPVxyXG4gICAgICAgICAgICByZXMuVXNlclJvbGUgPT09ICdCdXllcicgJiYgcmVzLlRvcEhlYWRlckZpbGVzICYmXHJcbiAgICAgICAgICAgIHJlcy5Ub3BIZWFkZXJGaWxlcy5sZW5ndGggPiAxICYmIHJlcy5Ub3BIZWFkZXJGaWxlc1sxXSAhPT0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNMZWdhY3lDb2xvcigpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfVE9QX0hFQURFUl9LRVkgKyAnLWgnKTtcclxuICAgICAgICBjb25zdCBzID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfVE9QX0hFQURFUl9LRVkgKyAnLXMnKTtcclxuICAgICAgICBjb25zdCBsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoQ3VzdG9taXphdGlvblNlcnZpY2UuQ09MT1JfVE9QX0hFQURFUl9LRVkgKyAnLWwnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICEoaCAmJiBzICYmIGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvYWRpbmdTcGlubmVyQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgc3Bpbm5lckNvbG9yID0gJyc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTGVnYWN5Q29sb3IoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuc2Vzc2lvblNlcnZpY2UuZ2V0T2JqZWN0KEN1c3RvbWl6YXRpb25TZXJ2aWNlLlVTRVJfQ09MT1IpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbG9yICYmIGNvbG9yLlNwaW5uZXJDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgc3Bpbm5lckNvbG9yID0gY29sb3IuU3Bpbm5lckNvbG9yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3Bpbm5lckNvbG9yID0gQ3VzdG9taXphdGlvblNlcnZpY2UuREVGQVVMVF9TUElOTkVSX0NPTE9SO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3Bpbm5lckNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyYW5kaW5nTWFpbkNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGJyYW5kaW5nTWFpbkNvbG9yID0gJyc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTGVnYWN5Q29sb3IoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuc2Vzc2lvblNlcnZpY2UuZ2V0T2JqZWN0KEN1c3RvbWl6YXRpb25TZXJ2aWNlLlVTRVJfQ09MT1IpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbG9yICYmIGNvbG9yLkJyYW5kaW5nTWFpbkNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBicmFuZGluZ01haW5Db2xvciA9IGNvbG9yLkJyYW5kaW5nTWFpbkNvbG9yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJhbmRpbmdNYWluQ29sb3IgPSBDdXN0b21pemF0aW9uU2VydmljZS5ERUZBVUxUX0JSQU5ESU5HX0NPTE9SO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYnJhbmRpbmdNYWluQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgaXNMaWdodENvbG9yKGhleENvbG9yKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFoZXhDb2xvcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaXNCcmlnaHQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBjb25zdCBjID0gaGV4Q29sb3IucmVwbGFjZSgvXiMvLCAnJyk7XHJcblxyXG4gICAgICAgIHN1bSA9IHBhcnNlSW50KGNbMF0gKyBjWzFdLCAxNik7XHJcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KGNbMl0gKyBjWzNdLCAxNik7XHJcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KGNbNF0gKyBjWzVdLCAxNik7XHJcblxyXG4gICAgICAgIGlmIChzdW0gPiAzODIuNikge1xyXG4gICAgICAgICAgICAvLyBpdCdzIGJyaWdodCBjb2xvclxyXG4gICAgICAgICAgICBpc0JyaWdodCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXNCcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuIl19