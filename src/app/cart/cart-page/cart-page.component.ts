import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IProduct } from '../../shared/interfaces';
import { ICartItem } from '../../shared/interfaces';
import { CartService } from '../../core/cart.service';
import { DataService } from '../../core/data.service';
import { CheckoutModalComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartProducts: IProduct[] = [];
  cartTotal = 0;
  cartQty = 0;

  @Output() delete = new EventEmitter();

  constructor(private cartService: CartService,
              private dataService: DataService,
              private modalService: NgbModal) {}
 ngOnInit(): void {

    const cartProductsRaw: any[] = this.cartService.getCartProducts();
    if (cartProductsRaw){
      if (cartProductsRaw.length > 1) {
        cartProductsRaw.forEach(prodRaw => {
          const prod = JSON.parse(prodRaw);
          this.dataService.getProduct(prod.productId)
            .subscribe((p: IProduct) => this.createProductObj(p, prod));
        });
      }else {
        const prod = JSON.parse(cartProductsRaw[0]);
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
    this.cartTotal += newProd.cost * newProd.quantity;
    this.cartQty = this.cartProducts.length;
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
    this.cartTotal -= product.cost;
    this.cartQty = this.cartProducts.length;
  }

  openCheckoutModal() {
    const modalRef = this.modalService.open(CheckoutModalComponent);
    modalRef.componentInstance.cartProducts = this.cartProducts;
    modalRef.componentInstance.cartTotal = this.cartTotal;
  }
}
