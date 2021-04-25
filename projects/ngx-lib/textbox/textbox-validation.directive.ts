import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit,
} from '@angular/core';
import {
    PepTextboxFieldType,
    PepValidatorService,
} from '@pepperi-addons/ngx-lib';

@Directive({
    selector: '[pepTextboxValidation]',
})
export class PepTextboxValidationDirective implements OnInit {
    @Input() type: PepTextboxFieldType = 'text';

    previousValue = '';

    constructor(
        private hostElement: ElementRef,
        private validatorService: PepValidatorService
    ) { }

    ngOnInit() {
        //
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

    @HostListener('keydown', ['$event'])
    onKeyDown(e: KeyboardEvent) {
        const originalValue: string = e.target['value'];

        if (this.isNumber()) {
            // save value before keydown event
            this.previousValue = originalValue;

            const isNumber = this.validatorService.isNumber(
                e,
                this.isDecimal()
            );
            if (isNumber) return;
            else e.preventDefault();
        } else if (this.isPhone()) {
            const isPhone = this.validatorService.isPhone(e);
            if (isPhone) return;
            else e.preventDefault();
        }
    }

    validateValue(value: string): void {
        if (this.isNumber()) {
            const newValue = this.validatorService.validateNumber(
                value,
                this.isDecimal()
            );
            this.hostElement.nativeElement['value'] = newValue ? newValue : 0;
        } else if (this.isPhone()) {
            // test phone with regular expression, when
            // phone is invalid, replace it with the previousValue
            const valid = this.validatorService.validatePhone(value);
            this.hostElement.nativeElement['value'] = valid
                ? value
                : this.previousValue;
        } else if (this.isText()) {
            this.hostElement.nativeElement['value'] = value;
        }
    }
}
