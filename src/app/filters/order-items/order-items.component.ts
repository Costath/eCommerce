import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  @Output() orderChanged: EventEmitter<number> = new EventEmitter<number>();

  private Order: number; // 1 for ASC, -1 for DESC, 0 for NONE
  @Input() get order() {
      return this.Order;
  }
  set order(val: number) {
      this.Order = val;
      this.orderChanged.emit(this.Order);

      if (val === 1) {
        this.orderASC = true;
        this.orderDESC = false;
      } else if (val === -1) {
        this.orderASC = false;
        this.orderDESC = true;
      } else {
        this.orderASC = false;
        this.orderDESC = false;
      }
  }

  orderASC = null;
  orderDESC = null;

  constructor() { }

  ngOnInit(): void {
  }

  sort(order) {
    if (order === this.order) {
      this.order = 0;
    } else {
      this.order = order;
    }
  }
}
