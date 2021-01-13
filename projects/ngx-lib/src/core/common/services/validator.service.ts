import { Injectable } from '@angular/core';
import {
    AbstractControl,
    ValidatorFn,
    FormControl,
    Validators,
} from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class ValidatorService {
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
}
