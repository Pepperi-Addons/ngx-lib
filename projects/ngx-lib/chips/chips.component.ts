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
import { TranslateService } from '@ngx-translate/core';
import { IPepChip, PepChipsOrientationType, PepChipsInputType } from './chips.model';
import { RouteConfigLoadStart } from '@angular/router';
import {
    PepStyleType,
    PepStyleStateType,
    PepSizeType,
} from '@pepperi-addons/ngx-lib';
import { PepChipsService } from './chips.service';

export interface Fruit {
    name: string;
}

@Component({
    selector: 'pep-chips',
    templateUrl: './chips.component.html',
    styleUrls: ['./chips.component.scss', './chips.component.theme.scss'],
    providers: [PepChipsService]
})
export class PepChipsComponent implements OnInit, OnDestroy {
    @Input()
    set chips(chips: IPepChip[]) {
        this.chipsService.initData(chips);
    }
    get chips() {
        return this.chipsService.chips;
    }

    @Input() type: PepChipsInputType = 'input';
    @Input() orientation: PepChipsOrientationType = 'horizontal'; 
    @Input() multiSelect = false;
    @Input() placeholder = '';

    @Output() fieldClick = new EventEmitter<void>();

    constructor(public chipsService: PepChipsService, private _translate: TranslateService) {
        //
    }

    //selectList: any[] = [{ key: 'sofa', text: 'Sofa' }, { key: 'chair', text: 'Chair' }, { key: 'table', text: 'Table' }]

    ngOnInit(): void {        
        this._translate.get("CHIPS.ADD_CHIP").pipe(this.chipsService.destroyer).subscribe((text: string) => this.placeholder = text);
    }  

    addChipsToList(chips: IPepChip[]) {
        chips.forEach(chip => this.chipsService.addChip(chip));
    }   

    onChipAdded(event: MatChipInputEvent): void {
        console.log('add', event);
        const value = (event.value || '').trim();

        if (value) {
            this.chipsService.addChip({
                value: value
            });
            /*this.chipsService.chips = [{
                value: value,
                disabled: false,
                selected: false,
                removable: true,
                selectable: true
            }];*/

            // clear the input value
            event.chipInput!.clear();
        }
    }

    onChipRemoved(chip: IPepChip): void {
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

    onChipsSelectClicked() {        
        this.fieldClick.emit();
    }

    /*
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
        
    } */

    ngOnDestroy(): void {
        this.chipsService.destroy();
    }
}