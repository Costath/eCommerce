import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriesListComponent } from './categories-list/categories-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { CartModule } from '../cart/cart.module';
import { SearchBoxComponent } from './search-box/search-box.component';
import { OrderItemsComponent } from './order-items/order-items.component';

@NgModule({
  declarations: [
    CategoriesListComponent,
    SearchBoxComponent,
    OrderItemsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CartModule,
    FormsModule
  ],
  exports: [
    CategoriesListComponent,
    SearchBoxComponent,
    OrderItemsComponent
  ]
})
export class FiltersModule { }
