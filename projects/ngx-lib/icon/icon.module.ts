import { NgModule } from '@angular/core';
import { PepIconRegistry } from './icon-registry.service';
import { PepIconComponent } from './icon.component';

@NgModule({
    declarations: [PepIconComponent],
    imports: [],
    exports: [PepIconComponent],
    providers: [PepIconRegistry]
})
export class PepIconModule { }
