import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'pep-draggable-item',
    templateUrl: './draggable-item.component.html',
    styleUrls: ['./draggable-item.component.scss']
})
export class DraggableItemComponent implements OnInit {
    @Input() title = '';
    @Input() data: any;
    @Input() disabled = false;

    constructor() {
        //
    }

    ngOnInit(): void {
        //
    }
}
