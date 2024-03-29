import { Component,Inject,Input, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type PepSkeletonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'max';


interface IPepSkeletonLoaderDialogData {
    rowHeightType: PepSkeletonSizeType;
    rowsNumber: number;
    lastRowOffset: boolean;
}

@Component({
    selector: 'pep-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
    styleUrls: ['./skeleton-loader.component.scss', './skeleton-loader.component.theme.scss'],
})
export class PepSkeletonLoaderComponent{
    @Input() rowHeightType: PepSkeletonSizeType = 'md'; // Each row heigth
    @Input() rowsNumber = 3; // number of rows
    @Input() lastRowOffset = true; // If the last row is with offset or not
    
    constructor(@Optional()
        private dialogRef: MatDialogRef<PepSkeletonLoaderComponent>,
        @Optional()
        @Inject(MAT_DIALOG_DATA)
        private data: IPepSkeletonLoaderDialogData) {

        if (dialogRef && data) {
            this.rowsNumber = data.rowsNumber || 3;
            this.rowHeightType = data.rowHeightType || 'md';
            this.lastRowOffset = data.lastRowOffset || true;
        }

        // num of rectangles - User defined, default → 3, Minimum → 2
        this.rowsNumber = this.rowsNumber >= 2 ? this.rowsNumber : 2;
    }

    counter(i: number) {
        return new Array(i);
    }
}
