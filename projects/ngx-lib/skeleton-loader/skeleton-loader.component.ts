import { Component,Inject,Input, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PepSizeType } from '@pepperi-addons/ngx-lib';

interface IPepSkeletonLoaderDialogData {
    rectHeight: PepSizeType;
    rectNum: number;
    lastRectOffset: boolean;
}

@Component({
    selector: 'pep-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
    styleUrls: ['./skeleton-loader.component.scss', './skeleton-loader.component.theme.scss'],
})

export class PepSkeletonLoaderComponent{

    @Input() rectHeight: PepSizeType = 'md';
    @Input() rectNum: number = 3;
    @Input() lastRectOffset: boolean = true; 
    
   
    constructor( @Optional()
        private dialogRef: MatDialogRef<PepSkeletonLoaderComponent>,
        @Optional()
        @Inject(MAT_DIALOG_DATA)
        private data: IPepSkeletonLoaderDialogData) {

        if (dialogRef && data) {
            this.rectNum = data.rectNum || 3;
            this.rectHeight = data.rectHeight || 'md';
            this.lastRectOffset = data.lastRectOffset || true;
        }

        // num of rectangles - User defined, default → 3, Minimum → 2
        this.rectNum = this.rectNum >= 2 ? this.rectNum : 2;
    }

    counter(i: number) {
        return new Array(i);
    }
}
