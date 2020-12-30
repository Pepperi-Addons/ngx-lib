import {
    Component,
    OnInit,
    OnChanges,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    Renderer2,
    AfterViewInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import { PepLayoutType, PepStyleType, PepCustomizationService, PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT, IPepFieldValueChangeEvent, IPepFieldClickEvent,
    PepQuantitySelectorFieldType, 
    PepQuantitySelectorField} from '@pepperi-addons/ngx-lib';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'pep-quantity-selector',
    templateUrl: './quantity-selector.component.html',
    styleUrls: ['./quantity-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('showHide', [
            state(
                'show',
                style({
                    opacity: 1,
                    transform: 'scale(1)'
                })
            ),
            state(
                'hide',
                style({
                    opacity: 0,
                    transform: 'scale(0)'
                })
            ),
            transition('show => hide', animate('250ms ease-out')),
            transition('hide => show', animate('250ms ease-in'))
        ])
    ]
})
export class PepQuantitySelectorComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    public static ENTER_CHILDREN = '[EnterChildren]';
    public static ENTER_PACKAGE = '[EnterPackage]';
    public static PLUS = '[+]';
    public static MINUS = '[-]';

    @Input() key = '';
    @Input() value = '';
    @Input() formattedValue = '';
    @Input() label = '';
    @Input() type: PepQuantitySelectorFieldType = 'qs';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() textColor = '';
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    @Input() lastFocusField: any;
    @Input() alowDecimal = false;
    @Input() additionalValue = '';
    @Input() notificationInfo: any;

    controlType = 'qs';

    @Input() form: FormGroup = null;
    @Input() showTitle = true;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() isActive = false;

    @Output() valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();
    @Output() elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();

    @ViewChild('QSCont') QSCont: ElementRef;
    @ViewChild('QSInput') QSInput: ElementRef;

    standAlone = false;
    isFocus = false;
    isMatrixFocus = false;

    isCaution = false;
    messages: Array<any> = null;
    showQsBtn = false;
    resize: any;

    sameElementInTheWantedRow = null;
    styleClass: PepStyleType = 'strong';
    isEmptyKey = false;

    constructor(
        private cd: ChangeDetectorRef,
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        private element: ElementRef
    ) {}

    setForm() {
        const pepField = new PepQuantitySelectorField({
            key: this.key,
            value: this.value,
            required: this.required,
            readonly: this.readonly,
            disabled: this.disabled
        });
        this.form = this.customizationService.getDefaultFromGroup(pepField);
    }

    ngOnInit(): void {
        if (this.form === null) {
            if (this.key === '') {
                this.isEmptyKey = true;
            }

            this.standAlone = true;
            this.setForm();
            this.formattedValue = this.formattedValue || this.value;

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );
        }

        this.resize = fromEvent(window, 'resize').pipe(
            debounceTime(250)
        ).subscribe((event) => {
            this.setQsView();
        });
    }

    ngAfterViewInit() {
        this.setQsView();
    }

    // TODO: Don't un comment this cause a lot of memory usage.
    // ngAfterViewChecked(): void {
    //     setTimeout(() => {
    //         this.setQsView();
    //     }, 125);
    // }

    ngOnChanges(changes: any): void {
        if (this.standAlone) {
            this.formattedValue = this.formattedValue || this.value;
        }

        // Bug fix for addons when the key is '' in the ngOnInit for some reson
        if (this.isEmptyKey && this.key !== '') {
            this.setForm();
        }

        this.isCaution = this.textColor === '#FF0000';

        const messages =
            this.notificationInfo && this.notificationInfo.length > 0
                ? JSON.parse(this.notificationInfo).Messages
                : '';
        if (messages && messages.length > 0) {
            // Replace the msg keys.
            for (const msg of messages) {
                if (msg.Key === 'Inventory_Limit_Msg') {
                    msg.Key = 'MESSAGES.ERROR_INVENTORY_LIMIT';
                } else if (msg.Key === 'Case_Quantity_Limit_Msg') {
                    msg.Key = 'MESSAGES.ERROR_CASE_QUANTITY_LIMIT';
                } else if (msg.Key === 'Min_Quantity_Limit_Msg') {
                    msg.Key = 'MESSAGES.ERROR_MIN_QUANTITY_LIMIT';
                } else if (msg.Key === 'Max_Quantity_Limit_Msg') {
                    msg.Key = 'MESSAGES.ERROR_MAX_QUANTITY_LIMIT';
                }
            }

            this.messages = messages;

            const fieldControl = this.form.controls[this.key];
            fieldControl.setErrors({
                serverError: 'Error'
            });
            setTimeout(() => {
                if (this.QSInput && this.QSInput.nativeElement) {
                    this.QSInput.nativeElement.focus();
                }
            }, 150);
        } else {
            setTimeout(() => {
                if (this.lastFocusField) {
                    this.lastFocusField.focus();
                    this.lastFocusField = null;
                } else {
                    this.focusToTheSameElementInTheWantedRow();
                }
            }, 100);
        }
    }

    ngOnDestroy(): void {
        if (this.resize) {
            this.resize.unsubscribe();
        }

        if (this.valueChange) {
            this.valueChange.unsubscribe();
        }

        if (this.elementClick) {
            this.elementClick.unsubscribe();
        }
    }

    get getAdditionalValue(): string {
        return this.additionalValue.length > 0 ? 'show' : 'hide';
    }

    getParentByClass(el, parentSelector /* optional */): any {
        // If no parentSelector defined will bubble up all the way to *document*
        if (parentSelector === undefined) {
            parentSelector = document;
        }

        let p = el.parentNode;

        while (p && !p?.classList?.contains(parentSelector) && parentSelector !== document) {
            const o = p;
            p = o?.parentNode || null;
        }

        return p?.className.indexOf(parentSelector) > -1 ? p : null;
    }

    getSameElementInTheWantedRowByClassName(event: any, isNext = true): any {
        const eventTarget = event.target || event.srcElement;
        let sameElementInTheWantedRowByClassName;

        let parentSelector;
        if (this.layoutType === 'table') {
            parentSelector = this.getParentByClass(eventTarget, 'table-row');
        } else if (this.layoutType === 'card') {
            parentSelector = this.getParentByClass(eventTarget, 'card-view');
            if (!parentSelector) {
                parentSelector = this.getParentByClass(eventTarget, 'line-view');
            }
        }

        if (isNext) {
            if (parentSelector.nextElementSibling === null) {
                sameElementInTheWantedRowByClassName = parentSelector.parentElement.querySelectorAll('[name=' + this.key + ']')[0];
            } else {
                sameElementInTheWantedRowByClassName = parentSelector.nextElementSibling.querySelectorAll('[name=' + this.key + ']')[0];
            }
        } else {
                if (parentSelector.previousElementSibling === null) {
                const elementsList = parentSelector.parentElement.querySelectorAll('[name=' + this.key + ']');
                sameElementInTheWantedRowByClassName = elementsList[elementsList.length - 1];
            } else {
                sameElementInTheWantedRowByClassName = parentSelector.previousElementSibling.querySelectorAll('[name=' + this.key + ']')[0];
            }
        }

        return sameElementInTheWantedRowByClassName;
    }

    setSameElementInTheWantedRow(event: any, isNext = true): void {
        // Navigate to the QS in the next row.
        if (this.layoutType === 'card' || this.layoutType === 'table') {
            this.sameElementInTheWantedRow = this.getSameElementInTheWantedRowByClassName(
                event,
                isNext
            );
        }

        this.QSInput.nativeElement.blur();
    }

    focusToTheSameElementInTheWantedRow(): void {

        if (this.sameElementInTheWantedRow) {
            const elem = this.sameElementInTheWantedRow;
            // If this is regular item (qs and not button) .
            if (elem instanceof HTMLInputElement && elem.type === 'text') {
                elem.click();
                elem.select();
            } else {
                const parentElem = elem.parentNode;
                parentElem.click();
                elem.focus();
            }
            this.sameElementInTheWantedRow = null;
        }
    }

    cleanError(): void {
        const fieldControl = this.form.controls[this.key];

        // Clean the error message
        if (this.messages && this.messages.length > 0) {
            this.messages = this.notificationInfo = null;
            fieldControl.setErrors(null);
        }
    }

    onMatrixMouseEnter(event: any): void {
        this.isMatrixFocus = true;
    }

    onMatrixMouseleave(event: any): void {
        this.isMatrixFocus = false;
    }

    onMatrixClick(event: any): void {
        this.isFocus = true;

        if (this.QSInput && this.QSInput.nativeElement) {
            this.QSInput.nativeElement.focus();
        }
    }

    onMatrixBlur(event: any): void {
        if (
            !event.relatedTarget ||
            event.relatedTarget.className.indexOf('qs') < 0
        ) {
            this.isMatrixFocus = false;
        }

        this.onBlur(event);
    }

    onFocus(event: any): void {
        this.isFocus = true;
    }

    onBlur(event: any): void {
        this.isFocus = false;
        this.cleanError();

        const value = event.target ? event.target.value : event;

        if (parseFloat(this.value) !== parseFloat(value)) {
            this.value = value;
            this.formattedValue = value;
            this.customizationService.updateFormFieldValue(
                this.form,
                this.key,
                value
            );

            this.changeValue(this.value, event.relatedTarget);
        } else {
            this.focusToTheSameElementInTheWantedRow();
        }
    }

    changeValue(value: any, lastFocusedField: any = null): void {
        this.valueChange.emit({
            key: this.key,
            value,
            controlType: this.controlType,
            lastFocusedField
        });
    }

    increment(event): void {
        if (this.standAlone) {
            let tmp = parseFloat(this.value);

            this.value = this.formattedValue = (++tmp).toString();
            this.customizationService.updateFormFieldValue(
                this.form,
                this.key,
                this.value
            );
        }

        // this.changeValue('+', null);
        this.elementClick.emit({
            key: this.key,
            value: PepQuantitySelectorComponent.PLUS,
            controlType: this.controlType,
            eventWhich: event.which
        });
        event.stopPropagation();
    }

    decrement(event): void {
        if (this.standAlone) {
            let tmp = parseFloat(this.value);

            this.value = this.formattedValue = (--tmp).toString();
            this.customizationService.updateFormFieldValue(
                this.form,
                this.key,
                this.value
            );
        }

        // this.changeValue('-', null);
        this.elementClick.emit({
            key: this.key,
            value: PepQuantitySelectorComponent.MINUS,
            controlType: this.controlType,
            eventWhich: event.which
        });
        event.stopPropagation();
    }

    enterChildren(event): void {
        this.elementClick.emit({
            key: this.key,
            value: PepQuantitySelectorComponent.ENTER_CHILDREN,
            controlType: this.controlType,
            eventWhich: event.which
        });
    }

    enterPackage(event): void {
        this.elementClick.emit({
            key: this.key,
            value: PepQuantitySelectorComponent.ENTER_PACKAGE,
            controlType: this.controlType,
            eventWhich: event.which,
            otherData: this.notificationInfo
        });
    }

    setQsView(): void {
        if (this.layoutType === 'card' && this.rowSpan <= 1) {
            this.showQsBtn = false;
        } else {
            if (this.QSCont && this.QSCont.nativeElement) {
                this.showQsBtn = this.QSCont.nativeElement.clientWidth > 140;
            }
        }

        // Get state class from theme.
        // this.styleClass = this.customizationService.getThemeVariable(PepCustomizationService.STYLE_QS_KEY);
        this.styleClass = document.documentElement.style.getPropertyValue(
            PepCustomizationService.STYLE_QS_KEY
        ) as PepStyleType;

        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
    }

    onKeyPress(event): any {
        let inputChar = String.fromCharCode(event.charCode);
        const keyboardEvent = event as KeyboardEvent;

        if (keyboardEvent.key === 'Enter') {
            this.setSameElementInTheWantedRow(
                keyboardEvent,
                !keyboardEvent.shiftKey
            );
            return true;
        }

        // TODO: Make it one function like in PepTextboxComponent
        if (
            /*[8, 9, 27, 13, 190].indexOf(keyboardEvent.keyCode) !== -1 ||*/
            // Allow: Ctrl+A
            (keyboardEvent.keyCode === 65 && keyboardEvent.ctrlKey === true) ||
            // Allow: Ctrl+C
            (keyboardEvent.keyCode === 67 && keyboardEvent.ctrlKey === true) ||
            // Allow: Ctrl+V
            (keyboardEvent.keyCode === 86 && keyboardEvent.ctrlKey === true) ||
            // Allow: Ctrl+X
            (keyboardEvent.keyCode === 88 &&
                keyboardEvent.ctrlKey ===
                    true) /*||
            // Allow: home, end, left, right
            (keyboardEvent.keyCode >= 35 && keyboardEvent.keyCode <= 39)*/
        ) {
            // let it happen, don't do anything
            return true;
        }

        if (this.alowDecimal) {
            const decPoint = '.';
            const thousandSeparator = ',';
            const pattern = /^\d[\d,]*(\.\d+)?$/;
            if (keyboardEvent.keyCode === 46) {
                inputChar = inputChar + '0';
            } else if (keyboardEvent.keyCode === 44) {
                inputChar = inputChar + '000';
            }
            if (!pattern.test(event.target.value + inputChar)) {
                keyboardEvent.preventDefault();
            }
        } else {
            const pattern = /[0-9\+\-\ ]/;
            if (!pattern.test(inputChar)) {
                keyboardEvent.preventDefault();
            }
        }
    }
}
