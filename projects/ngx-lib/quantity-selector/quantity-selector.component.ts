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
    AfterViewInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';
import {
    PepLayoutType,
    PepStyleType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldClickEvent,
    PepQuantitySelectorFieldType,
    PepQuantitySelectorField,
    PepUtilitiesService,
} from '@pepperi-addons/ngx-lib';
import { BehaviorSubject, fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'pep-quantity-selector',
    templateUrl: './quantity-selector.component.html',
    styleUrls: ['./quantity-selector.component.scss', './quantity-selector.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('showHide', [
            state(
                'show',
                style({
                    opacity: 1,
                    transform: 'scale(1)',
                })
            ),
            state(
                'hide',
                style({
                    opacity: 0,
                    transform: 'scale(0)',
                })
            ),
            transition('show => hide', animate('250ms ease-out')),
            transition('hide => show', animate('250ms ease-in')),
        ]),
    ],
})
export class PepQuantitySelectorComponent
    implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    public static ENTER_CHILDREN = '[EnterChildren]';
    public static ENTER_PACKAGE = '[EnterPackage]';
    public static PLUS = '[+]';
    public static MINUS = '[-]';

    @Input() key = '';

    private _value = null;
    @Input()
    set value(value: string) {
        if (!value) {
            value = '';
        }

        if (this.isDifferentValue(value)) {
            this._value = value;
        }

        this.setFormattedValue(this.value);
        this.changeDisplayValue();
    }
    get value(): string {
        return this._value;
    }
    
    get valueAsCurrentCulture(): string {
        return this.utilitiesService.changeDecimalSeparatorWhenItsComma(this.value, true);
        // let res = this.value;

        // if (this.allowDecimal) {
        //     res = this.utilitiesService.formatDecimal(this.value, this.minFractionDigits, this.maxFractionDigits, false);
        // }
        
        // return res;
    }

    protected formattedValue = '';
    // private _formattedValue = '';
    // @Input()
    // set formattedValue(value: string) {
    //     // if (!value) {
    //     //     value = '';
    //     // }

    //     // if (this._calculateFormattedValue) {
    //     //     this._calculateFormattedValue = false;
    //     // }

    //     // this.setFormattedValue(value);
    // }
    // get formattedValue(): string {
    //     return this._formattedValue;
    // }
    
    private _minFractionDigits = NaN;
    @Input()
    set minFractionDigits(value: number) {
        this._minFractionDigits = value;
        this.setFormattedValue(this.value);
        this.changeDisplayValue();
    }
    get minFractionDigits(): number {
        return this._minFractionDigits;
    }

    private _maxFractionDigits = NaN;
    @Input()
    set maxFractionDigits(value: number) {
        this._maxFractionDigits = value;
        this.setFormattedValue(this.value);
        this.changeDisplayValue();
    }
    get maxFractionDigits(): number {
        return this._maxFractionDigits;
    }

    @Input() label = '';
    @Input() type: PepQuantitySelectorFieldType = 'qs';
    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() readonly = false;

    private _textColor = '';
    @Input()
    set textColor(value: string) {
        this._textColor = value;
        this.isCaution = value === '#FF0000';
    }
    get textColor(): string {
        return this._textColor;
    }

    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    
    private _allowDecimal = false;
    @Input() 
    set allowDecimal(value: boolean) {
        this._allowDecimal = value;

        if (this.value) {
            this.setFormattedValue(this.value);
            this.changeDisplayValue();
        }
    }
    get allowDecimal(): boolean {
        return this._allowDecimal;
    }

    @Input() additionalValue = '';

    private _notificationInfo: any;
    @Input()
    set notificationInfo(value: any) {
        this._notificationInfo = value;

        const messages = value && value > 0 ? JSON.parse(value).Messages : '';
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
                serverError: 'Error',
            });

            this.sameElementInTheWantedRow = null;
            setTimeout(() => {
                if (this.QSInput && this.QSInput.nativeElement) {
                    this.QSInput.nativeElement.focus();
                }
            }, 150);
        }
    }
    get notificationInfo(): any {
        return this._notificationInfo;
    }

    private _visible = true;
    @Input()
    set visible(visible: boolean) {
        this._visible = visible;
        if (visible) {
            this.renderer.removeClass(
                this.element.nativeElement,
                'hidden-element'
            );
        } else {
            this.renderer.addClass(
                this.element.nativeElement,
                'hidden-element'
            );
        }
    }
    get visible(): boolean {
        return this._visible;
    }

    controlType = 'qs';

    @Input() form: FormGroup = null;
    @Input() showTitle = true;
    @Input() renderTitle = true;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() isActive = false;

    // Get default style from theme.
    @Input()
    styleType: PepStyleType = document.documentElement.style.getPropertyValue(
        PepCustomizationService.STYLE_QS_KEY
    ) as PepStyleType; //'strong';

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();

    @ViewChild('QSCont') QSCont: ElementRef;
    @ViewChild('QSInput') QSInput: ElementRef;

    private _calculateFormattedValue = true;
    get calculateFormattedValue(): boolean {
        return this._calculateFormattedValue;
    }

    private readonly _destroyed: Subject<void>;
    private qsWidthSubject: BehaviorSubject<number>;
    lastQsContClientWidth = 0;
    showQsBtn = true;

    standAlone = false;
    private _isInFocus = false;
    @Input()
    set isInFocus(isInFocus: boolean) {
        this._isInFocus = isInFocus;
        this.changeDisplayValue();
    }
    get isInFocus(): boolean {
        return this._isInFocus;
    }
    isMatrixFocus = false;

    isCaution = false;
    messages: Array<any> = null;

    sameElementInTheWantedRow = null;

    isEmptyKey = false;

    private _displayValueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
    get displayValue$(): Observable<string> {
        return this._displayValueSubject.asObservable().pipe(distinctUntilChanged());
    }

    constructor(
        private cd: ChangeDetectorRef,
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        private element: ElementRef,
        private translate: TranslateService,
        private utilitiesService: PepUtilitiesService
    ) {
        this._destroyed = new Subject();
        // this.qsWidthSubject = new BehaviorSubject(0);
    }

    setForm() {
        const pepField = new PepQuantitySelectorField({
            key: this.key,
            value: this.valueAsCurrentCulture,
            mandatory: this.mandatory,
            readonly: this.readonly,
            disabled: this.disabled,
        });
        this.form = this.customizationService.getDefaultFromGroup(pepField);
    }

    private setFormattedValue(value: string) {
        if (this._calculateFormattedValue) {
            if (this.allowDecimal) {
                this.formattedValue = this.utilitiesService.formatDecimal(value, this.minFractionDigits, this.maxFractionDigits);
            } else {
                this.formattedValue = this.utilitiesService.formatNumber(value);
            }
        } else {
            this.formattedValue = value;
        }
        
        this.updateFormFieldValue();
    }

    private notifyDisplayValueChange(value: string) {
        this._displayValueSubject.next(value);
    }

    private changeDisplayValue(): void {
        let res = '';

        if (this.allowDecimal) {
            res = this.isInFocus ? this.valueAsCurrentCulture : this.formattedValue;
        } else {
            res = this.isInFocus ? this.value : this.formattedValue;
        }

        this.notifyDisplayValueChange(res);
        // console.log('changeDisplayValue' + res);
    }

    private updateFormFieldValue(firstLoad = false) {
        // Set the formatted value only for the first load cause it's not formatted if we set the value (I don't know why)
        // Else we set the value - this is important to set the value only cause setting the formatted value will cause bug when the number is with thousand separator
        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            firstLoad ? this.formattedValue : this.value,
        );
    }

    // get displayValue(): string {
    //     const res = this.isInFocus
    //         ? this.utilitiesService.formatDecimal(this.value, this.minFractionDigits, this.maxFractionDigits)
    //         : this.formattedValue;
    //     return res;
    // }

    protected getDestroyer() {
        return takeUntil(this._destroyed);
    }

    ngOnInit(): void {
        if (this.form === null) {
            if (this.key === '') {
                this.isEmptyKey = true;
            }

            this.standAlone = true;
            this.setForm();

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );

            if (!this.renderTitle) {
                this.renderer.addClass(
                    this.element.nativeElement,
                    PepCustomizationService.STAND_ALONE_FIELD_NO_SPACING_CLASS_NAME
                );
            }
        }

        // this.qsWidthSubject
        //     .asObservable()
        //     .pipe(this.getDestroyer(), distinctUntilChanged())
        //     .subscribe((qsWidth: number) => {
        //         this.setupQsButtons(qsWidth);
        //     });

        this.updateFormFieldValue(true);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            debugger;
            if (this.QSCont &&
                this.QSCont.nativeElement &&
                this.QSCont.nativeElement.clientWidth > 0
            ) {
                this.showQsBtn = this.QSCont.nativeElement.clientWidth > 120;
            }

            if (!this.cd['destroyed']) {
                this.cd.detectChanges();
            }
        }, 0);
    }

    ngAfterViewChecked(): void {
        // this.setQsView();
    }

    ngOnChanges(changes: any): void {
        // Bug fix for addons when the key is '' in the ngOnInit for some reson
        if (this.isEmptyKey && this.key !== '') {
            this.setForm();
        }

        setTimeout(() => {
            this.focusToTheSameElementInTheWantedRow();
        }, 150);
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
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

        while (
            p &&
            !p?.classList?.contains(parentSelector) &&
            parentSelector !== document
        ) {
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
                parentSelector = this.getParentByClass(
                    eventTarget,
                    'line-view'
                );
            }
        }

        if (
            parentSelector.nextElementSibling === null &&
            parentSelector.previousElementSibling === null
        ) {
            sameElementInTheWantedRowByClassName = null;
        } else {
            if (isNext) {
                if (parentSelector.nextElementSibling === null) {
                    sameElementInTheWantedRowByClassName = parentSelector.parentElement.querySelectorAll(
                        '[name=' + this.key + ']'
                    )[0];
                } else {
                    sameElementInTheWantedRowByClassName = parentSelector.nextElementSibling.querySelectorAll(
                        '[name=' + this.key + ']'
                    )[0];
                }
            } else {
                if (parentSelector.previousElementSibling === null) {
                    const elementsList = parentSelector.parentElement.querySelectorAll(
                        '[name=' + this.key + ']'
                    );
                    sameElementInTheWantedRowByClassName =
                        elementsList[elementsList.length - 1];
                } else {
                    sameElementInTheWantedRowByClassName = parentSelector.previousElementSibling.querySelectorAll(
                        '[name=' + this.key + ']'
                    )[0];
                }
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
        this.isInFocus = true;

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
        this.isInFocus = true;

        // setTimeout(() => {
        //     if (this.isInFocus) {
        //         const eventTarget = event.target || event.srcElement;
        //         if (eventTarget) {
        //             eventTarget.select();
        //         }
        //     }
        // }, 0);
    }

    isDifferentValue(value: string): boolean {
        const res = this.utilitiesService.isEqualNumber(this.valueAsCurrentCulture, value) === false;
        return res;
    }

    onBlur(event: any): void {
        this.isInFocus = false;
        this.cleanError();
        const value = event.target ? event.target.value : event;

        // For decimal we need to replace the decimal separator back if it's comma (',').
        const correctValue = this.allowDecimal ? this.utilitiesService.changeDecimalSeparatorWhenItsComma(value) : value;
        
        if (correctValue !== this.valueAsCurrentCulture && this.isDifferentValue(value)) {
            this.value = correctValue;
            this.valueChange.emit(this.value);
        }
        
        this.focusToTheSameElementInTheWantedRow();
    }

    onKeydown(event): any {
        const keyboardEvent = event as KeyboardEvent;

        if (keyboardEvent.key === 'Enter') {
            this.setSameElementInTheWantedRow(
                keyboardEvent,
                !keyboardEvent.shiftKey
            );
            return true;
        }
    }

    increment(event): void {
        if (this.standAlone) {
            this.value = this.utilitiesService.incrementNumber(this.value);
        }

        this.elementClick.emit({
            key: this.key,
            value: PepQuantitySelectorComponent.PLUS,
            controlType: this.controlType,
            eventWhich: event.which,
        });
        event.stopPropagation();
    }

    decrement(event): void {
        if (this.standAlone) {
            this.value = this.utilitiesService.decrementNumber(this.value);
        }

        this.elementClick.emit({
            key: this.key,
            value: PepQuantitySelectorComponent.MINUS,
            controlType: this.controlType,
            eventWhich: event.which,
        });
        event.stopPropagation();
    }

    enterChildren(event): void {
        this.elementClick.emit({
            key: this.key,
            value: PepQuantitySelectorComponent.ENTER_CHILDREN,
            controlType: this.controlType,
            eventWhich: event.which,
        });
    }

    enterPackage(event): void {
        this.elementClick.emit({
            key: this.key,
            value: PepQuantitySelectorComponent.ENTER_PACKAGE,
            controlType: this.controlType,
            eventWhich: event.which,
            otherData: this.notificationInfo,
        });
    }

    // setupQsButtons(qsWidth: number) {
    //     this.showQsBtn = qsWidth > 120;

    //     if (!this.cd['destroyed']) {
    //         this.cd.detectChanges();
    //     }
    // }

    // setQsView(): void {
    //     if (
    //         this.QSCont &&
    //         this.QSCont.nativeElement &&
    //         this.QSCont.nativeElement.clientWidth > 0
    //     ) {
    //         setTimeout(() => {
    //             this.qsWidthSubject.next(this.QSCont.nativeElement.clientWidth);
    //         }, 0);
    //     }
    // }
}
