import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemClose,
    pepIconSystemSearch,
} from '@pepperi-addons/ngx-lib/icon';

import { PepSearchComponent } from './search.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        // Material modules,
        MatCommonModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        // ngx-lib modules
        PepNgxLibModule,
        PepIconModule,
        MatInputModule,
    ],
    exports: [PepSearchComponent],
    declarations: [PepSearchComponent],
})
export class PepSearchModule {
    constructor(private pepIconRegistry: PepIconRegistry) {
        this.pepIconRegistry.registerIcons([
            pepIconSystemClose,
            pepIconSystemSearch,
        ]);
    }
}
