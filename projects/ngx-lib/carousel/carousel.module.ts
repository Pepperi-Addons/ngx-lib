import { NgModule } from '@angular/core';

import { PepCarouselComponent } from './carousel.component';
import { PepCarouselItemDirective } from './carousel-item.directive';

@NgModule({
    exports: [PepCarouselComponent, PepCarouselItemDirective],
    declarations: [PepCarouselComponent, PepCarouselItemDirective],
})
export class PepCarouselModule {}
