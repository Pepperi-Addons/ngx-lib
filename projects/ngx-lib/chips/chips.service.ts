import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPepChip } from './chips.model';

@Injectable()
export class PepChipsService {
    private _chips: IPepChip[] = [];    

    constructor() {
        //
    }

    get chips() {
        return this._chips;
    }

    get selected() {
        return this._chips.filter(chip => chip.selected).map(chip => chip.value);
    }

    initData(chips: IPepChip[]) {
        this._chips = [];      
        if (chips?.length) {
            chips.forEach(chip => this.addChip(chip));
        }        
    }

    addChip(chip: IPepChip) {        
        this._chips.push({
            key: chip.key,
            value: chip.value,
            disabled: chip.disabled !== undefined ? chip.disabled : false,
            selected: chip.selected !== undefined ? chip.selected : false,
            removable: chip.removable !== undefined ? chip.removable : true,
            selectable: chip.selectable !== undefined ? chip.selectable : true
        })
    }
}