import { Component, OnInit } from '@angular/core';

import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {
  itemsQty: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.updateCartQty.subscribe(qty => this.itemsQty = qty);
    this.cartService.countItems();
  }
}
