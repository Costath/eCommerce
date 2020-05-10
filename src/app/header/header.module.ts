import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { CategoriesListModule } from '../categories-list/categories-list.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CategoriesListModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
