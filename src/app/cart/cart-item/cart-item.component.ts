import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() checkout: boolean;
  @Input() cartItem;
  @Output() delete = new EventEmitter();

  constructor() { }

  onDelete() {
    this.delete.emit(this.cartItem);
  }

  ngOnInit(): void {
  }

}
