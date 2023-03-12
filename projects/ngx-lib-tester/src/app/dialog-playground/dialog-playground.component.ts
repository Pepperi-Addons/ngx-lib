import { Component, OnInit, ViewChild } from '@angular/core';
import { PepLayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { PepDialogService, PepDialogData, PepDialogSizeType } from '@pepperi-addons/ngx-lib/dialog';
import { IPepSelectionOption } from '@pepperi-addons/ngx-lib/select-panel';

@Component({
    templateUrl: './dialog-playground.component.html',
    styleUrls: ['./dialog-playground.component.scss'],
})
export class DialogPlaygroundComponent implements OnInit {
    
    modalSize: PepDialogSizeType = 'small';
    modalSizes: any[] = [
        {
            value: 'Inline',
            key: 'inline'
        },
        {
            value: 'Small',
            key: 'small'
        },
        {
            value: 'Regular',
            key: 'regular'
        },
        {
            value: 'Large',
            key: 'large'
        },
        {
            value: 'Full-screen',
            key: 'full-screen'
        }
    ]
    constructor(public layoutService: PepLayoutService, private dialogService: PepDialogService) {
        
    }

    ngOnInit(): void {
        
    }

    showDefaultModal(event){

        const config = this.dialogService.getDialogConfig(
            {
                disableClose: false,
            },
            this.modalSize
        );
        
        const data = new PepDialogData({
            title: 'default modal',
            content: 'modal content',
        });
  
         this.dialogService.openDefaultDialog(data,config);
    }

    onModalSizeChanges(event){
        this.modalSize = event;
    }
}
