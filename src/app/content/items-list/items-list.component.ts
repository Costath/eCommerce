import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from '../../shared/interfaces';
import { DataService } from '../../core/data.service';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  products: any[] = [];
  category: string;

  constructor(private dataService: DataService,
              private cartService: CartService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
        .subscribe(data => {
            this.category = data.get('id');

            if (this.category) {
              this.dataService.getFilteredProducts(this.category)
                .subscribe((productsList: IProduct[]) => this.products = productsList);
            }else{
              this.dataService.getProducts()
                .subscribe((productsList: IProduct[]) => this.products = productsList);
            }
        });
  }

  addItem(product: IProduct) {
    this.cartService.addItem(product);
    this.cartService.countItems();
  }
}
