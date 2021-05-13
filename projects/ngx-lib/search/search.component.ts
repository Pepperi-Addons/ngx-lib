import {
    Component,
    OnInit,
    ViewEncapsulation,
    Injectable,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChange,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    Renderer2,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';
import { FormControl } from '@angular/forms';
import { PepLayoutService, PepScreenSizeType, PepSizeType } from '@pepperi-addons/ngx-lib';
import { debounceTime, takeUntil } from 'rxjs/operators';
import {
    IPepSearchClickEvent,
    IPepSearchAutocompleteChangeEvent,
    IPepSearchStateChangeEvent,
    PepSearchType,
    PepSearchTriggerType,
} from './search.model';

@Component({
    selector: 'pep-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [
        trigger('slideInOut', [
            state(
                'close',
                style({
                    width: '0',
                    padding: '0',
                    border: 'none',
                })
            ),
            state(
                'open',
                style({
                    width: 'inherit',
                })
            ),
            transition('close => open', animate('500ms ease-in-out')),
            transition('open => close', animate('500ms ease-in-out')),
        ]),
        trigger('fadeInOut', [
            state(
                'fadeOut',
                style({
                    opacity: 0,
                    width: '1px',
                })
            ),
            state(
                'fadeIn',
                style({
                    opacity: 1,
                    width: '100%',
                })
            ),
            transition(
                'fadeOut => fadeIn',
                animate(300, style({ opacity: 1, width: '100%' }))
            ),
            transition(
                'fadeIn => fadeOut',
                animate(350, style({ opacity: 0, width: '1px' }))
            ),
        ]),
    ],
})
@Injectable()
export class PepSearchComponent implements OnInit, OnDestroy {
    @Input() triggerOn: PepSearchTriggerType = 'click';
    @Input() autoCompleteTop = 20;
    private _autoCompleteValues = [];
    @Input()
    set autoCompleteValues(val: any[]) {
        this.type = 'auto-complete';
        this._autoCompleteValues = val;
    }
    get autoCompleteValues(): any[] {
        return this._autoCompleteValues;
    }

    @Input() shrinkInSmallScreen = true;

    @Input()
    set value(val: string) {
        this.createSearchControlIfNotExist();
        this.searchControl.setValue(val);
    }
    get value(): string {
        return this.searchControl.value || '';
    }

    private _searchControl: FormControl = null;
    @Input()
    set searchControl(ctrl: FormControl) {
        this._searchControl = ctrl;
    }
    get searchControl(): FormControl {
        return this._searchControl;
    }

    private _useAsWebComponent = false;
    @Input()
    set useAsWebComponent(value: boolean) {
        if (value) {
            this.exportFunctionsOnHostElement();
        }
    }
    get useAsWebComponent(): boolean {
        return this._useAsWebComponent;
    }

    /**
     * The size of the button.
     *
     * @type {PepSizeType}
     * @memberof PepButtonComponent
     */
    @Input() sizeType: PepSizeType = 'md';

    @Output()
    search: EventEmitter<IPepSearchClickEvent> = new EventEmitter<IPepSearchClickEvent>();
    @Output()
    autocompleteChange: EventEmitter<IPepSearchAutocompleteChangeEvent> = new EventEmitter<IPepSearchAutocompleteChangeEvent>();
    @Output()
    stateChange: EventEmitter<IPepSearchStateChangeEvent> = new EventEmitter<IPepSearchStateChangeEvent>();

    @ViewChild('searchInput') searchInput: ElementRef;

    private readonly _destroyed = new Subject<void>();
    type: PepSearchType = 'regular';
    fadeState: 'fadeOut' | 'fadeIn';
    state: 'open' | 'close' = 'open';
    lastValue = null;
    showFloatSrcBtn = true;
    isRtl = false;
    isFloating = false;
    screenSize: PepScreenSizeType;

    constructor(
        private hostElement: ElementRef,
        private layoutService: PepLayoutService
    ) { }

    ngOnInit(): void {
        this.layoutService.onResize$.pipe().subscribe((size) => {
            this.screenSize = size;

            if (this.shrinkInSmallScreen) {
                this.isFloating = this.screenSize > PepScreenSizeType.SM;
            }

            // Just for the smoote animation
            if (this.isFloating) {
                this.showFloatSrcBtn = false;

                this.showFloatingButton();
            } else {
                this.fadeState = 'fadeIn';
            }
        });

        this.isRtl = this.layoutService.isRtl();
        this.createSearchControlIfNotExist();

        this.searchControl.valueChanges
            .pipe(debounceTime(1000), takeUntil(this._destroyed))
            .subscribe((newValue) => {
                if (this.type === 'auto-complete') {
                    this.autoCompleteValues = [];
                    if (
                        newValue &&
                        newValue.length > 2 &&
                        newValue !== this.lastValue
                    ) {
                        this.autocompleteChange.emit({
                            value: newValue,
                            top: this.autoCompleteTop,
                        });
                    }
                } else if (this.type === 'regular') {
                    if (this.triggerOn === 'keydown') {
                        this.emitSearchClick();
                    }
                }
            });
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }

    private exportFunctionsOnHostElement() {
        // This is for web component usage for use those functions.
        this.hostElement.nativeElement.initSearch = this.initSearch.bind(this);
    }

    private createSearchControlIfNotExist(): void {
        if (!this.searchControl) {
            this.searchControl = new FormControl();
        }
    }

    private blur() {
        setTimeout(() => {
            this.searchInput.nativeElement.blur();
        }, 0);
    }

    private showFloatingButton() {
        this.fadeState = 'fadeOut';

        setTimeout(() => {
            this.stateChange.emit({ state: 'close' });
            this.showFloatSrcBtn = true;
        }, 500);

        // close the phone keyboard
        this.blur();
    }

    initSearch() {
        this.lastValue = null;
        this.searchControl.setValue('');
    }

    onClearClicked(event: any) {
        if (this.type === 'auto-complete') {
            this.autoCompleteValues = [];
        }

        this.initSearch();
        this.search.emit({ value: '' });

        event.preventDefault();

        if (this.isFloating) {
            this.showFloatingButton();
        }
    }

    onSearchClicked() {
        if (this.isFloating) {
            this.triggerSearch();
        } else {
            if (this.state === 'open') {
                this.triggerSearch();
            } else {
                this.state = 'open';
            }
        }
    }

    onSearch(event: Event) {
        // Stop the event propagation - cause we don't want fire two events.
        event.stopPropagation();
        this.triggerSearch();
    }

    triggerSearch() {
        if (this.type === 'auto-complete') {
            this.autoCompleteValues = [];
        }

        this.blur();
        this.emitSearchClick();
    }

    animateSearch() {
        if (this.state === 'open') {
            this.fadeState =
                this.fadeState === 'fadeOut' ? 'fadeIn' : 'fadeOut';
            if (this.fadeState === 'fadeIn') {
                this.stateChange.emit({ state: 'open' });
                this.showFloatSrcBtn = false;
                this.searchInput.nativeElement.focus();
            }
        } else {
            this.fadeState = 'fadeIn';
        }
    }

    // do the emit just when done because of the line break when closing the search
    // component and showen all other components before
    animateSearchDone() {
        if (this.state !== 'open') {
            this.stateChange.emit({ state: 'close' });
        }
    }

    emitSearchClick() {
        const value = this.searchControl.value;

        if (value !== this.lastValue) {
            this.lastValue = value;
            this.search.emit({ value });
        }
    }
}
