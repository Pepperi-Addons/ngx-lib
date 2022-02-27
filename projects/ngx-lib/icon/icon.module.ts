import { NgModule } from '@angular/core';
import { PepIconRegistry } from './icon-registry.service';
import { PepIconComponent } from './icon.component';
import { PepIconService } from './icon.service';

@NgModule({
    declarations: [PepIconComponent],
    imports: [],
    exports: [PepIconComponent],
    providers: [PepIconRegistry, PepIconService]
})
export class PepIconModule { }
