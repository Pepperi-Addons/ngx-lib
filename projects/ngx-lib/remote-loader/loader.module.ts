import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// import { PepNgxLibModule } from '@pepperi-addons/ngx-lib';
import { PepRemoteLoaderComponent } from './loader.component';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [PepRemoteLoaderComponent],
    declarations: [PepRemoteLoaderComponent],
})
export class PepRemoteLoaderModule {

}
