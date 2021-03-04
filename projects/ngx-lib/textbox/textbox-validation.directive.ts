import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit,
} from '@angular/core';
import { PepTextboxFieldType, PepLayoutService } from '@pepperi-addons/ngx-lib';

@Directive({
    selector: '[pepTextboxValidation]',
})
export class PepTextboxValidationDirective implements OnInit {
    @Input() type: PepTextboxFieldType = 'text';

    // @Input() allowDecimals: boolean = true;
    // @Input() allowSign: boolean = false;
    // @Input() decimalSeparator: string = '.';

    decimalSeparator = '.';
    previousValue = '';

    // --------------------------------------
    //  Regular expressions
    integerUnsigned = '^[0-9]*$';
    integerSigned = '^-?[0-9]+$';
    // decimalUnsigned: string = '^[0-9]+(.[0-9]+)?$';
    decimalSigned = '^-?[0-9]+(.[0-9]+)?$';

    phone = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$';

    constructor(
        private hostElement: ElementRef,
        private layoutService: PepLayoutService
    ) {}

    ngOnInit() {
        this.decimalSeparator = getLocaleNumberSymbol(
            this.layoutService.getCurrentLanguage(),
            NumberSymbol.Decimal
        );
    }

    private isNumber(): boolean {
        return this.isInteger() || this.isDecimal();
    }

    private isInteger(): boolean {
        return this.type === 'int';
    }

    private isDecimal(): boolean {
        return (
            this.type === 'currency' ||
            this.type === 'percentage' ||
            this.type === 'real'
        );
    }

    private isPhone(): boolean {
        return this.type === 'phone';
    }

    private isText(): boolean {
        return (
            this.type === 'email' ||
            this.type === 'link' ||
            this.type === 'text'
        );
    }

    @HostListener('change', ['$event'])
    onChange(e) {
        this.validateValue(this.hostElement.nativeElement.value);
    }

    @HostListener('paste', ['$event'])
    onPaste(e) {
        // get and validate data from clipboard
        const value = e.clipboardData.getData('text/plain');
        this.validateValue(value);
        e.preventDefault();
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(e: KeyboardEvent) {
        const cursorPosition: number = e.target['selectionStart'];
        const originalValue: string = e.target['value'];
        const key: string = this.getName(e);
        const controlOrCommand = e.ctrlKey === true || e.metaKey === true;
        const signExists = originalValue.includes('-');
        const separatorExists = originalValue.includes(this.decimalSeparator);

        // allowed keys apart from numeric characters
        let allowedKeys = [
            'Backspace',
            'ArrowLeft',
            'ArrowRight',
            'Escape',
            'Tab',
            'Home',
            'End',
            'Delete',
        ];

        if (this.isNumber()) {
            // when decimals are allowed, add
            // decimal separator to allowed codes when
            // its position is not close to the the sign (-. and .-)
            const separatorIsCloseToSign = signExists && cursorPosition <= 1;
            if (
                this.isDecimal() &&
                !separatorIsCloseToSign &&
                !separatorExists
            ) {
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
            if (
                !signExists &&
                firstCharacterIsSeparator &&
                cursorPosition == 0
            ) {
                allowedKeys.push('-');
            }
        } else if (this.isPhone()) {
            allowedKeys = allowedKeys.concat([
                '.',
                '-',
                '+',
                '(',
                ')',
                '*',
                '#',
            ]);
        }

        // allow some non-numeric characters
        if (
            allowedKeys.indexOf(key) != -1 ||
            // Allow: Ctrl+A and Command+A
            (key == 'a' && controlOrCommand) ||
            // Allow: Ctrl+C and Command+C
            (key == 'c' && controlOrCommand) ||
            // Allow: Ctrl+V and Command+V
            (key == 'v' && controlOrCommand) ||
            // Allow: Ctrl+X and Command+X
            (key == 'x' && controlOrCommand)
        ) {
            // let it happen, don't do anything
            return;
        }

        // save value before keydown event
        this.previousValue = originalValue;

        if (this.isNumber()) {
            // allow number characters only
            const isNumber = new RegExp(this.integerUnsigned).test(key);
            if (isNumber) return;
            else e.preventDefault();
        } else if (this.isPhone()) {
            // allow phone characters only
            const isPhone = new RegExp(this.phone).test(key);
            if (isPhone) return;
            else e.preventDefault();
        }
    }

    validateValue(value: string): void {
        if (this.isNumber()) {
            // choose the appropiate regular expression
            let regex: string;

            if (this.isDecimal()) {
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
            const valid: boolean = new RegExp(regex).test(value);
            this.hostElement.nativeElement['value'] = valid ? value : 0;
        } else if (this.isPhone()) {
            // test phone with regular expression, when
            // phone is invalid, replace it with the previousValue
            const valid: boolean = new RegExp(this.phone).test(value);
            this.hostElement.nativeElement['value'] = valid
                ? value
                : this.previousValue;
        }
    }

    getName(e): string {
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
}
