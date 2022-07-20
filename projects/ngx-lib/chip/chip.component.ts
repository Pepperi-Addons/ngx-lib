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
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Fruit {
    name: string;
}

@Component({
    selector: 'pep-checkbox',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepChipComponent implements OnInit, OnDestroy {
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;
    fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

    constructor() {

    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        // Add our fruit
        if (value) {
            this.fruits.push({ name: value });
        }

        // Clear the input value
        event.chipInput!.clear();
    }

    remove(fruit: Fruit): void {
        const index = this.fruits.indexOf(fruit);

        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    } 
}