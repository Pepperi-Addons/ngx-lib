import {
    Component, OnInit, ViewEncapsulation, Injectable, Input, OnChanges, OnDestroy,
    SimpleChange, Output, EventEmitter, ViewChild, ElementRef, Renderer2
} from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { LayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { debounceTime } from 'rxjs/operators';
import { PepSearchChangedData, PepSearchAutocompleteChangedData } from './search.model';

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
                    border: 'none'
                })
            ),
            state(
                'open',
                style({
                    width: 'inherit'
                })
            ),
            transition('close => open', animate('500ms ease-in-out')),
            transition('open => close', animate('500ms ease-in-out'))
        ]),
        trigger('fadeInOut', [
            state(
                'fadeOut',
                style({
                    opacity: 0,
                    width: '1px'
                })
            ),
            state(
                'fadeIn',
                style({
                    opacity: 1,
                    width: '100%'
                })
            ),
            transition('fadeOut => fadeIn', animate(300, style({ opacity: 1, width: '100%' }))),
            transition('fadeIn => fadeOut', animate(350, style({ opacity: 0, width: '1px' })))
        ])
    ]
})
@Injectable()
export class PepSearchComponent implements OnInit, OnChanges, OnDestroy {
    @Input() searchString = '';
    @Input() isFloatingSearch = false;
    @Input() actionBtnIsVisable = false;
    @Input() autoCompleteValues = [];
    
    @Output() searchStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() searchStringChanged: EventEmitter<PepSearchChangedData> = new EventEmitter<PepSearchChangedData>();
    @Output() searchAutocompleteChanged: EventEmitter<PepSearchAutocompleteChangedData> = new EventEmitter<PepSearchAutocompleteChangedData>();
    
    @ViewChild('searchInput') searchInput: ElementRef;
    @ViewChild('searchCont') searchCont: ElementRef;
    
    showFloatSrcBtn = true;
    isRtl = false;
    isFocused = false;
    autoComplete: any;
    fadeState = this.isFloatingSearch ? 'fadeOut' : 'fadeIn';
    lastSearchSTR = null;
    state = 'open';
    searchControl = new FormControl();
    searchCtrlSub: Subscription;

    constructor(private layoutService: LayoutService) {
    }

    ngOnInit(): void {
        this.isRtl = this.layoutService.isRtl();

        this.searchCtrlSub = this.searchControl.valueChanges
            .pipe(debounceTime(1000))
            .subscribe(newValue => {
                this.autoCompleteValues = [];
                if (newValue && newValue.length > 2 && newValue !== this.lastSearchSTR) {
                    this.searchAutocompleteChanged.emit(
                        new PepSearchAutocompleteChangedData({
                            value: newValue
                        })
                    );
                }
            });
    }

    ngOnChanges(changes) {
        if (changes.actionBtnIsVisable && changes.actionBtnIsVisable.firstChange) {
            this.fadeState = this.isFloatingSearch ? 'fadeOut' : 'fadeIn';
        }
        if (changes.searchString) {
            this.searchControl.setValue(changes.searchString.currentValue);
        }
    }

    ngOnDestroy(): void {
        this.searchCtrlSub.unsubscribe();
    }

    private hideKeyboard(element: any) {
        setTimeout(() => {
            element.blur();  // actually close the keyboard
        }, 0);
    }

    onClearClicked(event: any) {
        this.autoCompleteValues = [];
        this.lastSearchSTR = null;
        this.searchInput.nativeElement.value = '';
        this.searchStringChanged.emit(new PepSearchChangedData({ value: '' }));

        event.preventDefault();

        if (this.isFloatingSearch) {
            this.fadeState = 'fadeOut';

            setTimeout(() => {
                this.searchStateChanged.emit(false);
                this.showFloatSrcBtn = true;
            }, 400);

            // close the phone keyboard
            this.hideKeyboard(this.searchInput.nativeElement);
        }
    }

    onSearchClicked() {
        if (this.isFloatingSearch) {
            this.triggerSearchChanged();
        } else {
            this.autoCompleteValues = [];
            this.animateSearch();
        }
    }
    
    onEnterSearchClicked(event) {
        if (event.key === 'Enter') {
            this.triggerSearchChanged();
        }
    }

    triggerSearchChanged() {
        this.autoCompleteValues = [];
        this.searchInput.nativeElement.blur();
        this.searchChanged();
    }

    animateSearch() {
        if (this.state === 'open') {
            if (this.isFloatingSearch) {
                this.fadeState = this.fadeState === 'fadeOut' ? 'fadeIn' : 'fadeOut';
                if (this.fadeState === 'fadeIn') {
                    this.searchStateChanged.emit(true);
                    this.showFloatSrcBtn = false;
                    this.searchInput.nativeElement.focus();
                }
            } else {
                this.searchChanged();
            }
        } else {
            // state = close / fade out
            if (this.isFloatingSearch) {
                this.fadeState = 'fadeIn';
            } else {
                this.state = 'open';
            }
        }
    }

    initSearch() {
        this.lastSearchSTR = null;
        this.searchInput.nativeElement.value = '';
    }

    // do the emit just when done because of the line break when closing the search
    // component and showen all other components before
    animateSearchDone() {
        if (this.state !== 'open') {
            this.searchStateChanged.emit(false);
        }
    }

    searchChanged() {
        const value = this.searchInput.nativeElement.value;

        if (value !== this.lastSearchSTR) {
            this.lastSearchSTR = value;
            this.searchStringChanged.emit(new PepSearchChangedData({ value }));
        }
    }

}
