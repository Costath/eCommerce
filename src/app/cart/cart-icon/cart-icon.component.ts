import { Component, OnInit } from '@angular/core';

import { CartService } from '../../core/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {
  itemsQty: number;
  // itemsQty$: Observable<number>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.itemsQty$ = this.cartService.countItems();

    // this.cartService.countItems().subscribe(n => this.itemsQty$ = n);

    this.updateIcon();
  }

  updateIcon() {
    // this.cartService.countItems().subscribe(n => this.itemsQty = n);
    this.itemsQty = this.cartService.countItems();
  }
}
