import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesListComponent } from './categories-list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CategoriesListComponent
  ]
})
export class CategoriesListModule { }
