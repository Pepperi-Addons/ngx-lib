import { Component,OnDestroy,Input,Output,EventEmitter,Renderer2,ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DEFAULT_HORIZONTAL_ALIGNMENT, IPepOption, PepCustomizationService, PepHorizontalAlignment, PepLayoutType, PepSelectField } from '@pepperi-addons/ngx-lib'; 
import { IPepSelectionOption } from './select-panel.model';

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

    private _numOfCol: number;

    @Input() 
    set numOfCol(value: number){
        if (!value) {
            value = 1;
        }

        this._numOfCol = value; 
        this.setNumOfColumns();
    }
    
    private _options: Array<IPepSelectionOption> = [];
    
    @Input() 
    set options(value: Array<IPepSelectionOption>) {
        if (!value) {
            value = [];
        }

        this._options = value;
    }
    get options(): Array<IPepSelectionOption> {
        return this._options;
    }

    @Output()
    valueChange: EventEmitter<string[]> = new EventEmitter<string[]>();

    @ViewChild('selectPanel', { static: true }) selectPanel: ElementRef;
    
    private optionsMap = new Array<string>();

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
        this.setNumOfColumns();
        if(this.isMultiSelect){
            this.initOptionsMap();
        }
      }

    ngOnDestroy(): void {
        // if (this.buttonClick) {
        //     this.buttonClick.unsubscribe();
        // }
    }

    setNumOfColumns(){
        this.renderer.setStyle(this.selectPanel.nativeElement, 'columns', ('auto '+this._numOfCol.toString()));
    }
    initOptionsMap(): void {
        for (let x = 0; x<this.options.length; x++) {
            //push checked option to the returned array;
            if(this.options[x].isChecked){
                this.optionsMap.push(this.options[x].key);
            }
        }
    }

    selectionChange(option, event: any): void {
       if(this.isMultiSelect){
        const optIndex = this.optionsMap.indexOf(option.key);
        if ( optIndex == -1){
            this.optionsMap.push(option.key);
        }
        else{
            //remove the option from the returned array;
            this.optionsMap.splice(optIndex,1);
        }
       }
       else{
            this.optionsMap[0] = (option.key);
       }
       this.valueChange.emit(this.optionsMap);
    }

}
