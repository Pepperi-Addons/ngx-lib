import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PepLayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { PepDialogService, PepDialogData, PepDialogSizeType, PepDialogComponent, PepDialogActionButton } from '@pepperi-addons/ngx-lib/dialog';
import { PepDefaultDialogComponent } from 'ngx-lib/dialog/default-dialog.component';
import { PepSkeletonLoaderComponent } from '@pepperi-addons/ngx-lib/skeleton-loader';

let dialogRef: MatDialogRef<PepDefaultDialogComponent> = null;

@Component({
    templateUrl: './dialog-playground.component.html',
    styleUrls: ['./dialog-playground.component.scss'],
})
export class DialogPlaygroundComponent implements OnInit {
    

    modalSize: PepDialogSizeType = 'small';
    selectedOptions = 'showHeader;showClose';

    hasBackdrop = 'true';

    modalSizes = [
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

    dialogOptions = [
        {
            value: 'Show header',
            key: 'showHeader'
            
        },
        {
            value: 'Show fofooter',
            key: 'showFooter'
        }
        ,
        {
            value: 'Show Close',
            key: 'showClose'
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
            this.modalSize,
            
        );

        config.hasBackdrop = this.hasBackdrop === 'true';

      
        const data = new PepDialogData({
            title: 'default modal',
            content: '<button>Avner</button>',
            showClose: true,
            showHeader: true,
            showFooter: true
        });
        
        dialogRef = this.dialogService.openDefaultDialog(data,config);
    }

    openSkeletomDialog(event){
        
        const config = this.dialogService.getDialogConfig(
            {
                disableClose: false,
            },
            this.modalSize,
   
        );
        

        const dialogRef = this.dialogService.openDialog(
            PepSkeletonLoaderComponent,
            {
                rectNum: 6,
                rectHeight: 'sm'
            },
            config
         
        );
    }

    onValueChanged(event){
       this.selectedOptions = event;

    }
}

