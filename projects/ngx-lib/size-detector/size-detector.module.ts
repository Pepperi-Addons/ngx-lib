
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PepperiModule } from '@pepperi-addons/ngx-lib';

import { SizeDetectorComponent} from './size-detector.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        // Pepperi modules
        PepperiModule,
    ],
    exports: [SizeDetectorComponent],
    declarations: [SizeDetectorComponent],
})
export class PepperiSizeDetectorModule {}
