import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { AppRoutingModule } from '../app-routing.module';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [CartPageComponent, CartIconComponent, CartItemComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [CartIconComponent]
})
export class CartModule { }
