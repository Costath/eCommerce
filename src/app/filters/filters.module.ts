import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriesListComponent } from './categories-list/categories-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { CartModule } from '../cart/cart.module';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    CategoriesListComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CartModule,
    FormsModule
  ],
  exports: [
    CategoriesListComponent,
    SearchBoxComponent
  ]
})
export class FiltersModule { }
