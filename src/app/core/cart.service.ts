import { Injectable } from '@angular/core';

import { ICartItem } from '../shared/interfaces';
import { IProduct } from '../shared/interfaces';
import { DataService } from '../core/data.service';
import { RouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private dataService: DataService) { }

  addItem(product: IProduct){
    if (localStorage.getItem('cart') == null) {
      const firstCartProduct: ICartItem = {
        productId: product.productId,
        quantity: 1
      };
      const cart: any[] = [];
      cart.push(JSON.stringify(firstCartProduct));
      localStorage.setItem('cart', JSON.stringify(cart));
    }else{
      const cart = JSON.parse(localStorage.getItem('cart'));
      let itemIndex = -1;

      for (let i = 0; i < cart.length; i++) {
        const existingProduct: ICartItem = JSON.parse(cart[i]);
        if (existingProduct.productId === product.productId) {
          itemIndex = i;
          break;
        }
      }

      if (itemIndex === -1) {
        const newCartProduct: ICartItem = {
          productId: product.productId,
          quantity: 1
        };
        cart.push(JSON.stringify(newCartProduct));
      }else {
        const existingProduct = JSON.parse(cart[itemIndex]);
        existingProduct.quantity ++;
        cart[itemIndex] = JSON.stringify(existingProduct);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  removeItem(product: IProduct){
    const cart: any[] = JSON.parse(localStorage.getItem('cart'));
    let cartItem: ICartItem;
    let itemIndex;
    cart.forEach((itemRaw, index) => {
      const item: ICartItem = JSON.parse(itemRaw);
      if (item.productId === product.productId) {
        cartItem = item;
        itemIndex = index;
      }
    });

    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      cart.splice(itemIndex, 1, JSON.stringify(cartItem));
    }else {
      cart.splice(itemIndex, 1);
    }

    (cart.length > 0) ? localStorage.setItem('cart', JSON.stringify(cart)) : localStorage.removeItem('cart');
  }

  getCartProducts() {
    return JSON.parse(localStorage.getItem('cart'));
  }
}
