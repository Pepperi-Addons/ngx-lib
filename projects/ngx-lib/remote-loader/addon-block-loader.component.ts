import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
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
    @Input() inDialog: boolean = false;

    @Output() hostEvents: EventEmitter<any> = new EventEmitter<any>();
    @Output() blockLoad: EventEmitter<void> = new EventEmitter<void>();
    
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
}