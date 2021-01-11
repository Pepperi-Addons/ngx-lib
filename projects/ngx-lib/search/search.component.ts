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
import { Subscription } from 'rxjs';
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';
import { FormControl } from '@angular/forms';
import { PepLayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { debounceTime } from 'rxjs/operators';
import {
    IPepSearchClickEvent,
    IPepSearchValueChangeEvent,
    IPepSearchStateChangeEvent,
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
export class PepSearchComponent implements OnInit, OnChanges, OnDestroy {
    @Input() value = '';
    @Input() autoCompleteValues = [];
    @Input() autoCompleteTop = 20;

    @Output()
    search: EventEmitter<IPepSearchClickEvent> = new EventEmitter<IPepSearchClickEvent>();
    @Output()
    valueChange: EventEmitter<IPepSearchValueChangeEvent> = new EventEmitter<IPepSearchValueChangeEvent>();
    @Output()
    stateChange: EventEmitter<IPepSearchStateChangeEvent> = new EventEmitter<IPepSearchStateChangeEvent>();

    @ViewChild('searchInput') searchInput: ElementRef;

    lastValue = null;
    showFloatSrcBtn = true;
    fadeState: 'fadeOut' | 'fadeIn';
    state: 'open' | 'close' = 'open';
    searchControl = new FormControl();
    searchCtrlSub: Subscription;
    isRtl = false;
    isFloating = false;
    screenSize: PepScreenSizeType;

    constructor(private layoutService: PepLayoutService) {
        this.layoutService.onResize$.pipe().subscribe((size) => {
            this.screenSize = size;
            this.isFloating = this.screenSize > PepScreenSizeType.SM;

            // Just for the smoote animation
            if (this.isFloating) {
                this.showFloatSrcBtn = false;

                this.showFloatingButton();
            } else {
                this.fadeState = 'fadeIn';
            }
        });
    }

    ngOnInit(): void {
        this.isRtl = this.layoutService.isRtl();

        this.searchCtrlSub = this.searchControl.valueChanges
            .pipe(debounceTime(1000))
            .subscribe((newValue) => {
                this.autoCompleteValues = [];
                if (
                    newValue &&
                    newValue.length > 2 &&
                    newValue !== this.lastValue
                ) {
                    this.valueChange.emit({
                        value: newValue,
                        top: this.autoCompleteTop,
                    });
                }
            });
    }

    ngOnChanges(changes) {
        if (changes.value) {
            this.searchControl.setValue(changes.value.currentValue);
        }
    }

    ngOnDestroy(): void {
        if (this.searchCtrlSub) {
            this.searchCtrlSub.unsubscribe();
        }
    }

    private blur() {
        setTimeout(() => {
            this.searchInput.nativeElement.blur();
        }, 0);
    }

    private showFloatingButton() {
        if (this.isFloating) {
            this.fadeState = 'fadeOut';

            setTimeout(() => {
                this.stateChange.emit({ state: 'close' });
                this.showFloatSrcBtn = true;
            }, 500);

            // close the phone keyboard
            this.blur();
        }
    }

    onClearClicked(event: any) {
        this.autoCompleteValues = [];
        this.lastValue = null;
        this.searchInput.nativeElement.value = '';
        this.search.emit({ value: '' });

        event.preventDefault();

        this.showFloatingButton();
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

    onEnterSearchClicked(event) {
        if (event.key === 'Enter') {
            this.triggerSearch();
        }
    }

    triggerSearch() {
        this.autoCompleteValues = [];
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

    initSearch() {
        this.lastValue = null;
        this.searchInput.nativeElement.value = '';
    }

    // do the emit just when done because of the line break when closing the search
    // component and showen all other components before
    animateSearchDone() {
        if (this.state !== 'open') {
            this.stateChange.emit({ state: 'close' });
        }
    }

    emitSearchClick() {
        const value = this.searchInput.nativeElement.value;

        if (value !== this.lastValue) {
            this.lastValue = value;
            this.search.emit({ value });
        }
    }
}