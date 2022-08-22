import { Component, OnInit, ViewChild } from '@angular/core';
import { PepChipsComponent } from 'projects/ngx-lib/chips';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';
import { ExternalSourceDialogComponent } from './external-source-dialog/external-source-dialog.component';


@Component({
    templateUrl: './chips-example.component.html',
    styleUrls: ['./chips-example.component.scss'],
})
export class ChipsExampleComponent implements OnInit {
    @ViewChild('chipsComp') chipsComp: PepChipsComponent;

    chips: any[] = [
        {
            value: 'recipient1@gmail.com'
        },
        {
            value: 'recipient2@hotmail.com',
            disabled: true
        },
        {
            value: 'recipient3@gmail.com'
        },
        {
            value: 'recipient4@hotmail.com'
        }
    ]

    chips2: any[] = [
        {
            value: 'recipient1@gmail.com'
        },
        {
            value: 'recipient2@hotmail.com'            
        },
        {
            value: 'recipient3@gmail.com'
        },
        {
            value: 'recipient4@hotmail.com'
        }
    ]

    chips3: any[] = [
        {
            value: 'Small',
            removable: false
        },
        {
            value: 'Medium',
            removable: false,
            selected: true
        },
        {
            value: 'Large',
            removable: false
        },
        {
            value: 'Extra Large',
            removable: false
        }
    ]

    constructor(private dialog: PepDialogService) {

    }

    ngOnInit(): void {

    }

    externalSourceClicked() {
        const config = this.dialog.getDialogConfig({ minWidth: '30rem' }, 'regular');
      
      
      const dialogRef = this.dialog.openDialog(ExternalSourceDialogComponent, null, config);
      dialogRef.afterClosed().subscribe((arr) => {
          if (arr) {
            let newChips: any[] = [];
            arr.forEach(chip => newChips.push({value: chip}));
            this.chipsComp.addChipsToList(newChips);
          }        
      });
    }

    onSelectionChange(value) {
      //  
    }
}