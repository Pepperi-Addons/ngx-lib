import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PepBlockDataType, PepRemoteLoaderOptions } from './remote-loader.model';
import { PepRemoteLoaderService } from './remote-loader.service';

@Component({
    selector: 'pep-addon-block-loader',
    templateUrl: './addon-block-loader.component.html',
    styleUrls: ['./addon-block-loader.component.scss']
})
export class PepAddonBlockLoaderComponent implements OnInit, OnDestroy {
    @ViewChild('dialogTemplate', { static: true, read: TemplateRef }) dialogTemplate!: TemplateRef<any>;
    
    @Input() remoteEntry: string = '';

    private _blockType: PepBlockDataType = 'AddonBlock';
    @Input() 
    set blockType(value: PepBlockDataType) {
        this._blockType = value;
    }
    get blockType(): PepBlockDataType {
        return this._blockType;
    }

    private _name = '';
    @Input() 
    set name(value: string) {
        this._name = value;
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
    
    inDialog = false;
    remotePathOptions: PepRemoteLoaderOptions = null;
    
    constructor(private remoteLoaderService: PepRemoteLoaderService) {
        //
    }
    
    ngOnInit() {
        this.remoteLoaderService.getBlockRemoteLoaderOptions(this.name, this.blockType, this.remoteEntry).then(options => {
            this.remotePathOptions = options;
        });
    }

    ngOnDestroy(): void {
        if (this.dialogRef) {
            this.dialogRef = null;
        }

        this.remotePathOptions = null;
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