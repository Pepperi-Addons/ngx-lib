import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepSearchModule } from '@pepperi-addons/ngx-lib/search';
import { PepMenuModule } from '@pepperi-addons/ngx-lib/menu';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { PepDraggableItemsComponent } from './draggable-items.component';
import { DraggableItemComponent } from './draggable-item/draggable-item.component';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemMove,
} from '@pepperi-addons/ngx-lib/icon';

@NgModule({
    declarations: [
        PepDraggableItemsComponent,
        DraggableItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PepNgxLibModule,
        PepButtonModule,
        PepIconModule,
        PepMenuModule,
        PepSearchModule,
        DragDropModule
    ],
    exports: [
        PepDraggableItemsComponent,
        DraggableItemComponent
    ],
})
export class PepDraggableItemsModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemMove,
        ]);
    }
}
