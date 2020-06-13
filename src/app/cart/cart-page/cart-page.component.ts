import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { IProduct } from '../../shared/interfaces';
import { ICartItem } from '../../shared/interfaces';
import { CartService } from '../../core/cart.service';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartProducts: IProduct[] = [];
  cartProductsRaw: any[] = [];

  @Output() delete = new EventEmitter();

  constructor(private cartService: CartService,
              private dataService: DataService) {}
 ngOnInit(): void {

    this.cartProductsRaw = this.cartService.getCartProducts();
    if (this.cartProductsRaw){
      if (this.cartProductsRaw.length > 1) {
        this.cartProductsRaw.forEach(prodRaw => {
          const prod = JSON.parse(prodRaw);
          this.dataService.getProduct(prod.productId)
            .subscribe((p: IProduct) => this.createProductObj(p, prod));
        });
      }else {
        const prod = JSON.parse(this.cartService.getCartProducts());
        this.dataService.getProduct(prod.productId)
            .subscribe((p: IProduct) => this.createProductObj(p, prod));
      }
    }
  }

  private createProductObj(p: IProduct, prod: ICartItem) {
    const warehouseItem = p;
    const newProd: IProduct = {
      productId: prod.productId,
      quantity: prod.quantity,
      category: warehouseItem.category,
      name: warehouseItem.name,
      description: warehouseItem.description,
      cost: warehouseItem.cost
    };
    this.cartProducts.push(newProd);
  }

  removeItem(product: IProduct){
    this.cartService.removeItem(product);
    this.cartService.countItems();

    const index = this.cartProducts.indexOf(product);
    if (product.quantity > 1) {
      product.quantity--;
      this.cartProducts.splice(index, 1, product);
    }else {
      this.cartProducts.splice(index, 1);
    }
  }
}
