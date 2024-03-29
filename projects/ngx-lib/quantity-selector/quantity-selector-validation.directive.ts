import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit,
} from '@angular/core';
import { PepUtilitiesService, PepValidatorService } from '@pepperi-addons/ngx-lib';

@Directive({
    selector: '[pepQsValidation]',
})
export class PepQuantitySelectorValidationDirective implements OnInit {
    @Input() allowDecimal: boolean;

    previousValue = '';

    constructor(
        private hostElement: ElementRef,
        private utilitiesService: PepUtilitiesService,
        private validatorService: PepValidatorService
    ) {}

    ngOnInit() {
        //
    }

    @HostListener('change', ['$event'])
    onChange(e) {
        this.validateValue(this.hostElement.nativeElement.value);
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(e: KeyboardEvent) {
        const originalValue: string = e.target['value'];

        // save value before keydown event
        this.previousValue = originalValue;

        const isNumber = this.validatorService.isNumber(e, this.allowDecimal);
        if (isNumber) return;
        else e.preventDefault();
    }

    validateValue(value: string): void {
        const newValue = this.validatorService.validateNumber(
            value,
            this.allowDecimal
        );
        // this.hostElement.nativeElement['value'] = newValue ? newValue : 0;
        this.hostElement.nativeElement['value'] = newValue ? this.utilitiesService.changeDecimalSeparatorWhenItsComma(newValue) : 0;
    }
}
