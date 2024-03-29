import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IPepRemoteLoaderParamsOptions, PepRemoteLoaderOptions } from './remote-loader.model';
import { PepRemoteLoaderService } from './remote-loader.service';

@Component({
    selector: 'pep-addon-block-loader',
    templateUrl: './addon-block-loader.component.html',
    styleUrls: ['./addon-block-loader.component.scss']
})
export class PepAddonBlockLoaderComponent implements OnInit, OnDestroy {
    @ViewChild('dialogTemplate', { static: true, read: TemplateRef }) dialogTemplate!: TemplateRef<any>;
    
    @Input() addonId = '';
    @Input() remoteEntry = '';
    @Input() slugName = '';

    private _blockType = 'AddonBlock';
    @Input() 
    set blockType(value: string) {
        this._blockType = value;
    }
    get blockType(): string {
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
    
    protected inDialog = false;
    protected remotePathOptions: PepRemoteLoaderOptions = null;
    protected loadElement = false;

    protected onHostEventsCallback: (event: CustomEvent) => void;

    constructor(private remoteLoaderService: PepRemoteLoaderService) {
        this.onHostEventsCallback = (event: CustomEvent) => {
            this.onHostEvents(event.detail);
        }
    }
    
    ngOnInit() {
        const options: IPepRemoteLoaderParamsOptions = {
            name: this.name,
            slugName: this.slugName,
            blockType: this.blockType,
            addonUUID: this.addonId,
            blockRemoteEntry: this.remoteEntry
        };

        this.remoteLoaderService.getBlockRemoteLoaderOptions(options).then((options: PepRemoteLoaderOptions) => {
            this.loadElement = options.elementName?.length > 0;
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