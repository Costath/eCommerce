import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../shared/interfaces';
import { ICartProduct } from '../../shared/interfaces';
import { CartService } from '../../core/cart.service';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  products: IProduct[] = [];
  warehouseItem: any;
  cartProducts: ICartProduct[] = [];

  constructor(private cartService: CartService,
              private dataService: DataService) {}
 ngOnInit(): void {

    this.cartProducts = this.cartService.getCartProducts();

    this.cartService.cartProducts.forEach(prod => {
      this.dataService.getProduct(prod.productId)
        .subscribe((p: IProduct) => {
          this.warehouseItem = p;

          const newProd: IProduct = {
            productId: prod.productId,
            quantity: prod.quantity,
            category: this.warehouseItem.category,
            name: this.warehouseItem.name,
            description: this.warehouseItem.description,
            cost: this.warehouseItem.cost
          };

          this.products.push(newProd);
        });
    });
  }
}
