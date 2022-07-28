import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IPepChip } from './chips.model';

@Injectable()
export class PepChipsService {
    private readonly _destroyer: Subject<void>;
    private _chips: IPepChip[] = [];    

    constructor() {
        this._destroyer = new Subject();
    }

    get chips() {
        return this._chips;
    }

    initData(chips: IPepChip[]) {
        this._chips = [];      
        if (chips?.length) {
            chips.forEach(chip => this.addChip(chip));
        }        
    }

    addChip(chip: IPepChip) {
        this._chips.push({
            value: chip.value,
            disabled: chip.disabled !== undefined ? chip.disabled : false,
            selected: chip.selected !== undefined ? chip.selected : false,
            removable: chip.removable !== undefined ? chip.removable : true,
            selectable: chip.selectable !== undefined ? chip.selectable : true
        })
    }

    destroy() {
        this._destroyer.next();
        this._destroyer.complete();
    }

    get destroyer() {
        return takeUntil(this._destroyer);
    } 

}