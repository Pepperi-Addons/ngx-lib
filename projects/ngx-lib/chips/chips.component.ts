import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnDestroy
} from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { MatChipInputEvent, } from '@angular/material/chips';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_HORIZONTAL_ALIGNMENT, PepHorizontalAlignment, PepLayoutType, PepStyleType, BaseDestroyerDirective } from '@pepperi-addons/ngx-lib';
import { IPepChip, PepChipsOrientationType, PepChipsInputType, IPepChipSelection } from './chips.model';
import { PepChipsService } from './chips.service';


@Component({
    selector: 'pep-chips',
    templateUrl: './chips.component.html',
    styleUrls: ['./chips.component.scss', './chips.component.theme.scss'],
    providers: [PepChipsService]
})
export class PepChipsComponent extends BaseDestroyerDirective implements OnInit {
    /**
    * The chips within the chip list.
    *    
    * @memberof PepChipsComponent
    */

    // @Input() form: FormGroup = null; // Why we need this?
    @Input() layoutType: PepLayoutType = 'form';
    @Input() inline = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() renderTitle = true;
    @Input() showTitle = true; 
    @Input() label = '';

    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() classNames = '';
    
    @Input()
    set chips(chips: IPepChip[]) {
        this.chipsService.initData(chips);
    }
    get chips() {
        return this.chipsService.chips;
    }

    /**
    * The add chip emitter type.
    *
    * @type {PepChipsInputType}
    * @memberof PepChipsComponent
    */
    @Input() type: PepChipsInputType = 'input';

    /**
    * The chip layput direction type.
    *
    * @type {PepChipsOrientationType}
    * @memberof PepChipsComponent
    */
    @Input() orientation: PepChipsOrientationType = 'horizontal';

    /**
    * The style of the button.
    *
    * @type {PepStyleType}
    * @memberof PepButtonComponent
    */
    @Input() styleType: PepStyleType = 'regular';

    /**
    * Whether chip multi select allowed.
    *    
    * @memberof PepChipsComponent
    */
    @Input() multiSelect = false;

    /**
    * Add new chip placeholder.
    *    
    * @memberof PepChipsComponent
    */
    @Input() placeholder = '';

    /**
     * Add new chip(s) event.
     *
     * @type {EventEmitter<void>}
     * @memberof PepButtonComponent
     */
    @Output() fieldClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() selectionChange: EventEmitter<IPepChipSelection> = new EventEmitter<IPepChipSelection>();

    /**
     * Selected chip(s)
     */
    get selected() {
        const selected = this.chipsService.selected;        
        if (this.multiSelect) {
            return selected.length ? selected : [];
        } else {
            return selected.length ? selected[0] : null;
        }        
    }

    constructor(public chipsService: PepChipsService, private _translate: TranslateService) {
        super();
        //
    }

    ngOnInit(): void {
      //
    }

    /**
     * Adding chip(s) to current chips list
     * @param chips Chip(s) to add
     */
    addChipsToList(chips: IPepChip[]) {
        chips.forEach(chip => this.chipsService.addChip(chip));
    }    

    /**
     * On new chip added
     * @param event Chip addition event
     */
    onChipAdded(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        if (value) {
            this.chipsService.addChip({
                value: value
            });
            // clear the input value
            event.chipInput?.clear();
        }
    }

    /**
     * On chip removed
     * @param chip Removed chip item
     */
    onChipRemoved(chip: IPepChip): void {
        const index = this.chips.indexOf(chip);

        if (index >= 0) {
            this.chips.splice(index, 1);
        }
    }

    /**
     * On chip selection status changed
     * @param isSelected Whether the chip is selected
     * @param chip Selected chip item
     */
    onSelectionChanged(isSelected: boolean, chip: IPepChip) {
        chip.selected = isSelected;

        this.selectionChange.emit({
            value: chip.value,
            isSelected: isSelected
        })
    }

    /**
     * On Add new chip(s) clicked
     */
    onChipsSelectClicked() {
        this.fieldClick.emit();
    }

}