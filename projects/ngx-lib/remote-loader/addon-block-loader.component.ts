import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PepRemoteLoaderOptions } from './remote-loader.model';
import { PepRemoteLoaderService } from './remote-loader.service';

@Component({
    selector: 'pep-addon-block-loader',
    templateUrl: './addon-block-loader.component.html',
    styleUrls: ['./addon-block-loader.component.scss']
})
export class PepAddonBlockLoaderComponent implements OnInit {
    @ViewChild('dialogTemplate', { static: true, read: TemplateRef }) dialogTemplate!: TemplateRef<any>;
    
    private _name: string = '';
    @Input() 
    set name(value: string) {
        this._name = value;
        this.remoteLoaderService.getBlockRemoteLoaderOptions(value).then(options => {
            this.remotePathOptions = options;
        });
    }
    get name(): string {
        return this._name;
    }

    @Input() hostObject = null;
    
    private _dialogRef: MatDialogRef<any> = null;
    @Input()
    set dialogRef(value: MatDialogRef<any>) {
        this._dialogRef = value;
        this.inDialog = this._dialogRef != null;
    }
    get dialogRef(): MatDialogRef<any> {
        return this._dialogRef;
    }
    
    @Output() hostEvents: EventEmitter<any> = new EventEmitter<any>();
    @Output() blockLoad: EventEmitter<void> = new EventEmitter<void>();
    
    inDialog: boolean = false;
    remotePathOptions!: PepRemoteLoaderOptions;
    
    constructor(private remoteLoaderService: PepRemoteLoaderService) {
        //
    }
    
    ngOnInit() {
        //
    }

    onBlockLoad() {
        this.blockLoad.emit();
    }

    onHostEvents(event: any) {
        this.hostEvents.emit(event);
    }

    closeDialog(event) {
        this.dialogRef?.close(event);
    }
}