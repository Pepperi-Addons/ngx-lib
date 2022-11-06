import { Component,OnDestroy,Input,Output,EventEmitter,Renderer2,ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DEFAULT_HORIZONTAL_ALIGNMENT, IPepOption, PepCustomizationService, PepHorizontalAlignment, PepLayoutType, PepSelectField } from '@pepperi-addons/ngx-lib'; 

/**
 * This is a button component that support pepperi theme
 * style & state & sizes
 *
 * @export
 * @class PepSelectPanelComponent
 * @implements {OnDestroy}
 */
@Component({
    selector: 'pep-select-panel',
    templateUrl: './select-panel.component.html',
    styleUrls: ['./select-panel.component.scss', './select-panel.component.theme.scss'],
})
export class PepSelectPanelComponent implements OnDestroy {
    
    @Input() form: FormGroup = null;
    @Input() layoutType: PepLayoutType = 'form';

    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() renderTitle = true;
    @Input() showTitle = true; 
    @Input() label = '';

    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() classNames = '';

    @Input() isMultiSelect = false;
    @Input() numOfCol = 1;
    
    private _options: Array<IPepOption> = [];
    
    @Input() 
    set options(value: Array<IPepOption>) {
        if (!value) {
            value = [];
        }

        this._options = value;
    }
    get options(): Array<IPepOption> {
        return this._options;
    }

    @Output()
    valueChange: EventEmitter<object> = new EventEmitter<object>();

    @ViewChild('selectPanel', { static: true }) selectPanel: ElementRef;
    
    private optionsMap = {}; //new Array< {key: string, value: boolean}>;

    constructor(private renderer: Renderer2, private customizationService: PepCustomizationService, private element: ElementRef) { }

    private setDefaultForm(): void {
        const pepField = new PepSelectField({
            //key: this.key,
            value: this.options,
            mandatory: this.mandatory,
            readonly: false,
            disabled: this.disabled,
        });
        this.form = this.customizationService.getDefaultFromGroup(pepField);
    }

    ngOnInit(): void {
        if (this.form === null) {
            this.setDefaultForm();
        }
    }

    ngAfterViewInit() {
        this.renderer.setStyle(this.selectPanel.nativeElement, 'columns', ('auto '+this.numOfCol.toString()));
        if(this.isMultiSelect){
            this.initOptionsMap();
        }
      }

    ngOnDestroy(): void {
        // if (this.buttonClick) {
        //     this.buttonClick.unsubscribe();
        // }
    }

    initOptionsMap(): void {
        for (var x = 0; x<this.options.length; x++) {
            this.optionsMap[this.options[x].key] =  false;
        }
    }

    selectionChange(option, event: any): void {
       if(this.isMultiSelect){
            this.optionsMap[option.key] = event.checked;
       }
       else{
            this.optionsMap = new Object();
            this.optionsMap[option.key] = event.source.checked;
       }
       this.valueChange.emit(this.optionsMap);
        // if (!this.isMulti) {
        //     this.changeValue(this.selectedValueModel);
        // }
    }

}
