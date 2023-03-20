import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PepLayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { PepDialogService, PepDialogData, PepDialogSizeType, PepDialogComponent, PepDialogActionButton } from '@pepperi-addons/ngx-lib/dialog';
import { PepDefaultDialogComponent } from 'ngx-lib/dialog/default-dialog.component';
import { PepSkeletonLoaderComponent } from '@pepperi-addons/ngx-lib/skeleton-loader';
import { DialogRef } from '@angular/cdk/dialog';



@Component({
    templateUrl: './dialog-playground.component.html',
    styleUrls: ['./dialog-playground.component.scss'],
})
export class DialogPlaygroundComponent implements OnInit {
    
    private dialogRef: MatDialogRef<any> | null;
    private dialogArr: Array<MatDialogRef<PepDefaultDialogComponent>> = [];

    @ViewChild('skeletonLoaderTempRef', { read: TemplateRef })
    skeletonLoaderTempRef: TemplateRef<any>;

    dlgIndex = 1;
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
    constructor(public layoutService: PepLayoutService, 
                private dialogService: PepDialogService,
                private dialog: MatDialog) {
        
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
        
        const actionButtons = [
            new PepDialogActionButton(
                'Close',
                'regular',
                () => this.closeDialog()
            ),
            new PepDialogActionButton(
                'Open dialog',
                'strong',
                () => this.showDefaultModal(this))
        ];

        config.hasBackdrop = this.hasBackdrop === 'true';

      
        const data = new PepDialogData({
            title: 'default modal',
            actionsType: 'custom',
            content: '<button>Open Dialog</button>',
            actionButtons,
            showClose: this.selectedOptions.includes('showClose'),
            showHeader: this.selectedOptions.includes('showHeader'),
            showFooter: this.selectedOptions.includes('showFooter'),
        });
        
        this.dialogRef = this.dialogService.openDefaultDialog(data,config);
        this.dialogArr.push(this.dialogRef);
        // config.data = data;
        //this.dialogService.openDialog(this.skeletonLoaderTempRef,config);
    }

    openSkeletomDialog(event){
        
        const config = this.dialogService.getDialogConfig(
            {
                disableClose: false,
            },
            this.modalSize,
   
        );
        
        this.dialogRef = this.dialogService.openDialog(this.skeletonLoaderTempRef,{},config);
        this.dialogArr.push(this.dialogRef);
        
        this.dialogRef.afterClosed().subscribe(result => {

         });
    }

    closeDialog(): void {
        if(this.dialogArr.length){
            this.dialogRef = this.dialogArr[this.dialogArr.length - 1];
            this.dialogRef?.close();
            this.dialogArr.pop();

        }
    }

    onValueChanged(event){
       this.selectedOptions = event;

    }
}

