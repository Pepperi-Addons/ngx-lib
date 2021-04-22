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
    IPepFieldValueChangeEvent,
    IPepFieldClickEvent,
    PepQuantitySelectorFieldType,
    PepQuantitySelectorField,
    PepUtilitiesService,
} from '@pepperi-addons/ngx-lib';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

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

        this._value = value;

        if (this._calculateFormattedValue) {
            this.setFormattedValue(value);
        }
    }
    get value(): string {
        return this._value;
    }

    private _formattedValue = null;
    @Input()
    set formattedValue(value: string) {
        if (!value) {
            value = '';
        }

        if (this._calculateFormattedValue) {
            this._calculateFormattedValue = false;
        }

        this.setFormattedValue(value);
    }
    get formattedValue(): string {
        return this._formattedValue;
    }

    @Input() label = '';
    @Input() type: PepQuantitySelectorFieldType = 'qs';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() textColor = '';
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    @Input() alowDecimal = false;
    @Input() additionalValue = '';
    @Input() notificationInfo: any;
    @Input() visible = true;

    controlType = 'qs';

    @Input() form: FormGroup = null;
    @Input() showTitle = true;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() isActive = false;

    // Get default style from theme.
    @Input()
    styleClass: PepStyleType = document.documentElement.style.getPropertyValue(
        PepCustomizationService.STYLE_QS_KEY
    ) as PepStyleType; //'strong';

    @Output()
    valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();
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
    isFocus = false;
    isMatrixFocus = false;

    isCaution = false;
    messages: Array<any> = null;

    sameElementInTheWantedRow = null;

    isEmptyKey = false;

    constructor(
        private cd: ChangeDetectorRef,
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        private element: ElementRef,
        private translate: TranslateService,
        private utilitiesService: PepUtilitiesService
    ) {
        this._destroyed = new Subject();
        this.qsWidthSubject = new BehaviorSubject(0);
    }

    setForm() {
        const pepField = new PepQuantitySelectorField({
            key: this.key,
            value: this.value,
            required: this.required,
            readonly: this.readonly,
            disabled: this.disabled,
        });
        this.form = this.customizationService.getDefaultFromGroup(pepField);
    }

    private setFormattedValue(value: string) {
        if (this._calculateFormattedValue) {
            this._formattedValue = this.utilitiesService.formatNumber(value);
        } else {
            this._formattedValue = value;
        }

        // Need timeout for UI.
        setTimeout(() => {
            this.customizationService.updateFormFieldValue(
                this.form,
                this.key,
                this.formattedValue
            );
        }, 0);
    }

    protected getDestroyer() {
        return takeUntil(this._destroyed);
    }

    ngOnInit(): void {
        if (this.form === null) {
            if (this.key === '') {
                this.isEmptyKey = true;
            }
            debugger;
            console.log('visible value:', this.visible);
            this.standAlone = true;
            this.setForm();

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );
        }

        // Get state class from theme.
        // this.styleClass = document.documentElement.style.getPropertyValue(
        //     PepCustomizationService.STYLE_QS_KEY
        // ) as PepStyleType;

        this.qsWidthSubject
            .asObservable()
            .pipe(this.getDestroyer(), distinctUntilChanged())
            .subscribe((qsWidth: number) => {
                this.setupQsButtons(qsWidth);
            });
    }

    ngAfterViewInit() {
        //
    }

    ngAfterViewChecked(): void {
        this.setQsView();
    }

    ngOnChanges(changes: any): void {
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
                serverError: 'Error',
            });
            setTimeout(() => {
                if (this.QSInput && this.QSInput.nativeElement) {
                    this.QSInput.nativeElement.focus();
                }
            }, 150);
        } else {
            setTimeout(() => {
                // if (this.lastFocusField) {
                //     this.lastFocusField.focus();
                //     this.lastFocusField = null;
                // } else {
                this.focusToTheSameElementInTheWantedRow();
                // }
            }, 100);
        }
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

            // If the user is setting the formatted value then set the value till the user format it and return it back.
            if (!this._calculateFormattedValue) {
                this._formattedValue = value;
            }

            this.changeValue(this.value, event.relatedTarget);
        } else {
            this.focusToTheSameElementInTheWantedRow();
        }
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

    changeValue(value: any, lastFocusedField: any = null): void {
        this.valueChange.emit({
            key: this.key,
            value,
            controlType: this.controlType,
            lastFocusedField,
        });
    }

    increment(event): void {
        if (this.standAlone) {
            let tmp = parseFloat(this.value);

            this.value = (++tmp).toString();
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
            let tmp = parseFloat(this.value);

            this.value = (--tmp).toString();
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

    setupQsButtons(qsWidth: number) {
        this.showQsBtn = qsWidth > 120;

        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
    }

    setQsView(): void {
        if (
            this.QSCont &&
            this.QSCont.nativeElement &&
            this.QSCont.nativeElement.clientWidth > 0
        ) {
            setTimeout(() => {
                this.qsWidthSubject.next(this.QSCont.nativeElement.clientWidth);
            }, 0);
        }
    }
}
