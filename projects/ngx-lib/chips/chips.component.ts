import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    OnDestroy,
    Renderer2,
    ElementRef,
    Optional,
    OnChanges,
} from '@angular/core';
import { COMMA, ENTER, TAB, SEMICOLON } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipSelectionChange } from '@angular/material/chips';
import { IPepChip, PepChipsOrientation, PepChipsInputType } from './chips.model';
import { RouteConfigLoadStart } from '@angular/router';
import {
    PepStyleType,
    PepStyleStateType,
    PepSizeType,
} from '@pepperi-addons/ngx-lib';

export interface Fruit {
    name: string;
}

@Component({
    selector: 'pep-chips',
    templateUrl: './chips.component.html',
    styleUrls: ['./chips.component.scss', './chips.component.theme.scss'],

})
export class PepChipsComponent implements OnInit, OnDestroy {
    _chips: IPepChip[] = [];
    @Input()
    set chips(list: IPepChip[]) {
        this.setChips(list);
    }
    get chips() {
        return this._chips;
    }

    @Input() type: PepChipsInputType = 'input';
    @Input() orientation: PepChipsOrientation = 'horizontal';

    /**
    * The style of the button.
    *
    * @type {PepStyleType}
    * @memberof PepButtonComponent
    */
    @Input() styleType: PepStyleType = 'regular';

    /**
     * The size of the button.
     *
     * @type {PepSizeType}
     * @memberof PepButtonComponent
     */
    @Input() sizeType: PepSizeType = 'xs';
    @Input() placeholder = 'New chip';
   
    constructor() {

    }

    selectList: any[] = [{key: 'sofa', text: 'Sofa'}, {key: 'chair', text: 'Chair'}, {key: 'table', text: 'Table'}]
    ngOnInit(): void {
        //
    }

    setChips(list: IPepChip[]) {
        list.forEach(chip => {
            this._chips.push({
                value: chip.value,
                disabled: chip.disabled !== undefined ? chip.disabled : false,
                selected: chip.selected !== undefined ? chip.selected : false,
                removable: chip.removable !== undefined ? chip.removable : true,
                selectable: chip.selectable !== undefined ? chip.selectable : true
            })
        });
    } 

    addChip(event: MatChipInputEvent): void {
        console.log('add', event);
        const value = (event.value || '').trim();

        // Add our fruit
        if (value) {
            this.chips.push({
                value: value,
                disabled: false,
                selected: false,
                removable: true,
                selectable: true
            });
        }

        // Clear the input value
        event.chipInput!.clear();
    }

    removeChip(chip: IPepChip): void {
        console.log('remove', chip);
        const index = this.chips.indexOf(chip);

        if (index >= 0) {
            this.chips.splice(index, 1);
        }
    }

    onSelectionChanged(isSelected: boolean, chip: IPepChip) {
        console.log('onSelectionChanged isSelected', isSelected);
        console.log('onSelectionChanged chip', chip);
        chip.selected = isSelected;
    }

    onChipSelected(newChip) {
        console.log('onChipSelected', newChip);
        const index = this._chips.findIndex(chip => chip.value === newChip.text);
        if (index === -1) {
            this._chips.push({
                value: newChip.text,
                disabled: newChip.disabled !== undefined ? newChip.disabled : false,
                selected: newChip.selected !== undefined ? newChip.selected : false,
                removable: newChip.removable !== undefined ? newChip.removable : true,
                selectable: newChip.selectable !== undefined ? newChip.selectable : true
            })
        }
        
    }

    ngOnDestroy(): void {

    }
}