import { Component,OnDestroy,Input,Output,EventEmitter,Renderer2,ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IPepOption, PepCustomizationService, PepLayoutType, PepSelectField } from '@pepperi-addons/ngx-lib'; 


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
    
    @Input() label = '';
    @Input() renderTitle = true;
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
    valueChange: EventEmitter<string> = new EventEmitter<string>();

    public optColumnWidth = 100;

    constructor(private renderer: Renderer2, private customizationService: PepCustomizationService, private element: ElementRef) { }

  

    ngOnInit(): void {
        this.optColumnWidth = 100 / this.numOfCol;
    }

    ngOnDestroy(): void {
        // if (this.buttonClick) {
        //     this.buttonClick.unsubscribe();
        // }
    }

    selectionChange(event: any): void {
        this.valueChange.emit(event);
        // if (!this.isMulti) {
        //     this.changeValue(this.selectedValueModel);
        // }
    }

}
