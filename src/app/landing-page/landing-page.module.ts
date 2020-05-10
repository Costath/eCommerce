import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingPageComponent } from './landing-page.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    CarouselComponent
  ],
  imports: [
    NgbModule,
    CommonModule
  ]
})
export class LandingPageModule { }
