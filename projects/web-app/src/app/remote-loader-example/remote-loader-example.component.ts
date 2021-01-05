import { Component, OnInit } from '@angular/core';
import { LookupService } from './lookup.service';
import { AddonOptions } from '@pepperi-addons/ngx-lib/remote-loader';

@Component({
    selector: 'app-remote-loader-example',
    templateUrl: './remote-loader-example.component.html',
    styleUrls: ['./remote-loader-example.component.scss']
})
export class RemoteLoaderExampleComponent implements OnInit {
    subAddons: AddonOptions[] = [];
    constructor(
        private lookupService: LookupService,
    ) { }

    async ngOnInit() {
        this.subAddons = await this.lookupService.lookup();

    }

}
