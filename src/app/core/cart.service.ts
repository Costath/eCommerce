import { Injectable } from '@angular/core';

import { ICartProduct } from '../shared/interfaces';
import { IProduct } from '../shared/interfaces';
import { DataService } from '../core/data.service';
import { RouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: ICartProduct[] = [];
  constructor(private dataService: DataService) { }

  addItem(product: IProduct){
    const cartItem = this.cartProducts.filter(p => p.productId === product.productId);

    if (cartItem.length > 0) {
      cartItem[0].quantity++;
    }else {
      const cartProduct: ICartProduct = {
        productId: product.productId,
        quantity: 1
      };
      this.cartProducts.push(cartProduct);
    }
  }

  getCartProducts() {
    return this.cartProducts;
  }
}
