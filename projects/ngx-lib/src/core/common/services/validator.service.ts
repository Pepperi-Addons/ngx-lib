import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Injectable, Optional } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
    AbstractControl,
    ValidatorFn,
    FormControl,
    Validators,
} from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class PepValidatorService {
    //  Regular expressions
    readonly integerUnsigned = '^[0-9]*$';
    readonly integerSigned = '^-?[0-9]+$';
    decimalUnsigned = '^[0-9]+(.[0-9]+)?$';
    decimalSigned = '^-?[0-9]+(.[0-9]+)?$';
    readonly phone = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$';

    decimalSeparator = '.';

    constructor(@Optional() private translate: TranslateService = null) {
        const currentLang = this.translate?.currentLang || navigator.language;

        // Check for number with thousands separator and if === ',' then the decimal separator is '.' else ','
        const tmp = new Intl.NumberFormat(currentLang, {
            maximumSignificantDigits: 2,
        }).format(1000);
        this.decimalSeparator = tmp.indexOf(',') === 1 ? '.' : ',';

        this.decimalUnsigned = `^[0-9]+(${this.decimalSeparator}[0-9]+)?$`;
        this.decimalSigned = `^-?[0-9]+(${this.decimalSeparator}[0-9]+)?$`;
    }

    /*
        ValidatorFn functions
    */
    isEqual(target: FormControl | AbstractControl): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (control.value) {
                return target.value !== control.value
                    ? { equal: { value: true } }
                    : null;
            } else {
                return null;
            }
        };
    }

    isGreaterThan(target: FormControl | AbstractControl): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (control.value && typeof target.value === 'number') {
                return target.value > control.value
                    ? { greater: { value: true } }
                    : null;
            } else if (control.value && typeof target.value === 'string') {
                const controlValueNumer = coerceNumberProperty(control.value);
                const targetValueNumer = coerceNumberProperty(target.value);

                return targetValueNumer > controlValueNumer
                    ? { greater: { value: true } }
                    : null;
            } else {
                return null;
            }
        };
    }

    isLessThan(target: FormControl | AbstractControl): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (control.value && typeof target.value === 'number') {
                return target.value < control.value
                    ? { less: { value: true } }
                    : null;
            } else if (control.value && typeof target.value === 'string') {
                const controlValueNumer = coerceNumberProperty(control.value);
                const targetValueNumer = coerceNumberProperty(target.value);

                return targetValueNumer < controlValueNumer
                    ? { less: { value: true } }
                    : null;
            } else {
                return null;
            }
        };
    }

    checkEmails(separator?: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (control.value) {
                const emails = control.value.split(separator ? separator : ',');
                const ctrl = new FormControl('', [
                    Validators.required,
                    Validators.email,
                ]);
                const result = emails.every((val: string) => {
                    ctrl.setValue(val);
                    return ctrl.valid;
                });

                return !result ? { emails: { value: true } } : null;
            } else {
                return null;
            }
        };
    }

    zipCodeValidator(): ValidatorFn {
        return Validators.pattern(/^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/);
    }

    allowableCharactersValidator(): ValidatorFn {
        return Validators.pattern(
            /^[a-zA-Z0-9`~!@#$%^&*()_+}{|":?><,./;'\\\]\[=\- ]+$/
        );
    }

    allowableCharactersWithoutNumberValidator(): ValidatorFn {
        return Validators.pattern(
            /^[a-zA-Z`~!@#$%^&*()_+}{|":?><,./;'\\\]\[=\- ]+$/
        );
    }

    allowableCharactersWithoutSpecialValidator(): ValidatorFn {
        return Validators.pattern(/^[a-zA-Z0-9 ]+$/);
    }

    dateValidator(): ValidatorFn {
        return Validators.pattern(
            /^(?:(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)[0-9]{2})$/
        );
    }

    numberValidator(): ValidatorFn {
        return Validators.pattern(/^[0-9]*$/);
    }

    /*
        RegExp functions
    */
    validateNumber(value: string, allowDecimal: boolean): string {
        // choose the appropiate regular expression
        let regex: string;

        if (allowDecimal) {
            regex = this.decimalSigned;
        } else {
            regex = this.integerSigned;
        }

        // when a numbers begins with a decimal separator,
        // fix it adding a zero in the beginning
        const firstCharacter = value.charAt(0);
        if (firstCharacter == this.decimalSeparator) value = 0 + value;

        // when a numbers ends with a decimal separator,
        // fix it adding a zero in the end
        const lastCharacter = value.charAt(value.length - 1);
        if (lastCharacter == this.decimalSeparator) value = value + 0;

        // test number with regular expression, when
        // number is invalid, replace it with a zero
        console.log(`regex is ${regex} and value is ${value}`);
        const valid: boolean = new RegExp(regex).test(value);

        return valid ? value : null;
    }

    validatePhone(value: string): boolean {
        // test phone with regular expression, when
        // phone is invalid, replace it with the previousValue
        const valid: boolean = new RegExp(this.phone).test(value);
        return valid;
    }

    private getName(e): string {
        if (e.key) {
            return e.key;
        } else {
            // for old browsers
            if (e.keyCode && String.fromCharCode) {
                switch (e.keyCode) {
                    case 8:
                        return 'Backspace';
                    case 9:
                        return 'Tab';
                    case 27:
                        return 'Escape';
                    case 37:
                        return 'ArrowLeft';
                    case 39:
                        return 'ArrowRight';
                    case 188:
                        return ',';
                    case 190:
                        return '.';
                    case 109:
                        return '-'; // minus in numbpad
                    case 173:
                        return '-'; // minus in alphabet keyboard in firefox
                    case 189:
                        return '-'; // minus in alphabet keyboard in chrome
                    default:
                        return String.fromCharCode(e.keyCode);
                }
            }
        }
    }

    private allowKeyboardNonNumericCharacters(
        allowedKeys: Array<string>,
        key: string,
        controlOrCommand: boolean
    ): boolean {
        const defaultAllowedKeys = [
            'Backspace',
            'ArrowLeft',
            'ArrowRight',
            'Escape',
            'Tab',
            'Home',
            'End',
            'Delete',
        ];

        // allow some non-numeric characters
        if (
            defaultAllowedKeys.indexOf(key) != -1 ||
            allowedKeys.indexOf(key) != -1 ||
            // Allow: Ctrl+A and Command+A
            (key == 'a' && controlOrCommand) ||
            // Allow: Ctrl+C and Command+C
            (key == 'c' && controlOrCommand) ||
            // Allow: Ctrl+V and Command+V
            (key == 'v' && controlOrCommand) ||
            // Allow: Ctrl+X and Command+X
            (key == 'x' && controlOrCommand) ||
            key.startsWith('F')
        ) {
            // let it happen, don't do anything
            return true;
        } else {
            return false;
        }
    }

    isPhone(e: KeyboardEvent): boolean {
        const key: string = this.getName(e);
        const controlOrCommand = e.ctrlKey === true || e.metaKey === true;

        // allowed keys apart from numeric characters
        const allowedKeys = ['.', '-', '+', '(', ')', '*', '#'];

        // allow some non-numeric characters
        if (
            this.allowKeyboardNonNumericCharacters(
                allowedKeys,
                key,
                controlOrCommand
            )
        ) {
            return true;
        }

        // allow phone characters only
        const isPhone = new RegExp(this.phone).test(key);
        return isPhone;
    }

    isNumber(e: KeyboardEvent, allowDecimal: boolean): boolean {
        const cursorPosition: number = e.target['selectionStart'];
        const originalValue: string = e.target['value'];
        const key: string = this.getName(e);
        const controlOrCommand = e.ctrlKey === true || e.metaKey === true;
        const signExists = originalValue.includes('-');
        const separatorExists = originalValue.includes(this.decimalSeparator);

        // allowed keys apart from numeric characters
        const allowedKeys = [];

        // when decimals are allowed, add
        // decimal separator to allowed codes when
        // its position is not close to the the sign (-. and .-)
        const separatorIsCloseToSign = signExists && cursorPosition <= 1;
        if (allowDecimal && !separatorIsCloseToSign && !separatorExists) {
            if (this.decimalSeparator == '.') allowedKeys.push('.');
            else allowedKeys.push(',');
        }

        // when minus sign is allowed, add its
        // key to allowed key only when the
        // cursor is in the first position, and
        // first character is different from
        // decimal separator
        const firstCharacterIsSeparator =
            originalValue.charAt(0) != this.decimalSeparator;
        if (!signExists && firstCharacterIsSeparator && cursorPosition == 0) {
            allowedKeys.push('-');
        }

        // allow some non-numeric characters
        if (
            this.allowKeyboardNonNumericCharacters(
                allowedKeys,
                key,
                controlOrCommand
            )
        ) {
            return true;
        }

        // allow number characters only
        const isNumber = new RegExp(this.integerUnsigned).test(key);
        return isNumber;
    }
}
