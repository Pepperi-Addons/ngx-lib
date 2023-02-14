import { Component,OnDestroy,Input,Output,EventEmitter,Renderer2,ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DEFAULT_HORIZONTAL_ALIGNMENT, IPepOption, PepCustomizationService, PepHorizontalAlignment, PepLayoutType, PepSelectField, PepGuid } from '@pepperi-addons/ngx-lib'; 
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
    
    private _numOfCol = 1;
    @Input() 
    set numOfCol(value: number){
        if (!value) {
            value = 1;
        }

        this._numOfCol = value; 
        this.setNumOfColumns();
    }
    
    private _value = '';
    @Input()
    set value(value: string) {
        if (!value) {
            value = '';
        }

        this._value = value;
    }
    get value(): string {
        return this._value;
    }

    private _options: Array<IPepOption> = [];
    @Input() 
    set options(value: Array<IPepOption>) {
        if (!value) {
            value = [];
        }
        
        this._options = value;
        this.initOptionsMap();
    }
    get options(): Array<IPepOption> {
        return this._options;
    }

    public groupName = PepGuid.newGuid();

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();
    @ViewChild('selectPanel', { static: true }) selectPanel: ElementRef;
    
    public optionsMap: Array<IPepSelectionOption> = [];

    constructor(private renderer: Renderer2, private customizationService: PepCustomizationService, private element: ElementRef) { }

    private setDefaultForm(): void {
        const pepField = new PepSelectField({
            //key: this.key,
            value: this.value,
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
        this.initOptionsMap();
      }

    ngOnDestroy(): void {
        // if (this.buttonClick) {
        //     this.buttonClick.unsubscribe();
        // }
    }

    setNumOfColumns(){
        this.renderer.setStyle(this.selectPanel.nativeElement, 'columns', this._numOfCol.toString());
    }

    initOptionsMap(): void {
        this.optionsMap = [];
        //push checked option to the returned array;
        this.options.forEach(opt => {
            this.optionsMap.push({'key': opt.key, 'value': opt.value, 'isChecked': this.isChecked(opt)});
        });
    }

    selectionChange(option, event: any): void {
       if(this.isMultiSelect){
        let tmpArr = this.value?.length ? this.value.split(';') : [];
        if (!tmpArr.includes(option.key)){
                tmpArr.push(option.key);
            }
            else{
                //remove the option from the returned array;
                tmpArr = tmpArr.filter((key) => { return  key !== option.key});
            }
            this.value = tmpArr.length ? tmpArr.join(';') : '';
           
       }
       else{
            this.value = option.key;
       }
       this.valueChange.emit(this.value);
       this.initOptionsMap();
    }

    isChecked(option: any){
        return this.value.indexOf(option.key) > -1 ;
    }

}
