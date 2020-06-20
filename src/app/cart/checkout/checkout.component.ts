import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IProduct } from '../../shared/interfaces';
import { ICartItem } from '../../shared/interfaces';
import { CartService } from '../../core/cart.service';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutModalComponent implements OnInit {
  @Input() cartProducts: IProduct[];
  @Input() cartTotal: number;

  constructor(public modal: NgbActiveModal,
              private cartService: CartService,
              private dataService: DataService) { }

  ngOnInit(): void {
  }
}
