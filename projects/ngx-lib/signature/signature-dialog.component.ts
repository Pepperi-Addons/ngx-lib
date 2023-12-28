import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignaturePad } from 'ngx-signaturepad/signature-pad';


interface IPepSignatureDialogData {
    title: string;
    value: string;
    showActionBtn: boolean;
    disabled: boolean;
}

@Component({
    templateUrl: './signature-dialog.component.html',
    styleUrls: ['./signature-dialog.component.scss'],
})
export class PepSignatureDialogComponent implements OnInit, AfterViewInit {
    private signatureURL = '';
    private acceptSignatureType = 'png';

    protected signaturePadOptions: any = {
        // passed through to szimek/signature_pad constructor
        minWidth: 2,
        canvasWidth: 500,
        canvasHeight: 300,
        penColor: 'rgb(151, 151, 151)',
    };

    @ViewChild('signaturePad') signaturePad: SignaturePad;

    constructor(
        private dialogRef: MatDialogRef<PepSignatureDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IPepSignatureDialogData
    ) {
        if (data) {
            this.signatureURL = data.value ?? '';
            this.data.showActionBtn = data.showActionBtn ?? true;
            this.data.disabled = data.disabled ?? false;
        }
    }

    ngOnInit(): void {
        // Do nothing.
    }

    ngAfterViewInit(): void {
        if (this.signatureURL && this.signatureURL !== '') {
            this.signaturePad.fromDataURL(this.signatureURL);
            this.signaturePad.off();
        }
    }

    drawComplete(): void {
        // will be notified of szimek/signature_pad's onEnd event
    }

    drawStart(): void {
        // will be notified of szimek/signature_pad's onBegin event
    }

    clearSignModal(): void {
        this.signatureURL = '';
        this.signaturePad.clear();
        this.signaturePad.on();
    }

    saveSignModal(event: any): void {
        let value: any;

        if (!this.signaturePad.isEmpty()) {
            this.signatureURL = this.signaturePad.toDataURL('image/png');
            value = {
                acceptedExtensions: this.acceptSignatureType,
                fileStr: this.signatureURL,
                fileExt: this.acceptSignatureType,
            };
        } else {
            value = '';
        }

        this.dialogRef.close(value);
    }

    closeDialog(event) {
        this.dialogRef.close(event);
    }
}
