import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepSkeletonLoaderComponent } from './skeleton-loader.component';

@NgModule({
    imports: [
        CommonModule,
        PepNgxLibModule
    ],
    exports: [PepSkeletonLoaderComponent],
    declarations: [PepSkeletonLoaderComponent],
})
export class PepSkeletonLoaderModule { }
