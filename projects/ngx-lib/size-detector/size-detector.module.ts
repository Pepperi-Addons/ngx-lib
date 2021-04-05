import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';

import { PepSizeDetectorComponent } from './size-detector.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        // ngx-lib modules
        PepNgxLibModule,
    ],
    exports: [PepSizeDetectorComponent],
    declarations: [PepSizeDetectorComponent],
})
export class PepSizeDetectorModule {}
