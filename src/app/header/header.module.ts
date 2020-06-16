import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { FiltersModule } from '../filters/filters.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    FiltersModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
