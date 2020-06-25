import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  products: IProduct[] = [];
  category: string;
  searchText: string;
  orderString: string;

  @Output() searchTextChanged = new EventEmitter();

  private Search: string;
  @Input() get search() {
    return this.Search;
  }
  set search(val: string) {
    this.Search = val;
    this.searchTextChanged.emit(this.Search);
  }

  @Output() orderChanged = new EventEmitter();

  private Order: number;
  @Input() get order() {
    return this.Order;
  }
  set order(val: number) {
    this.Order = val;
    this.orderChanged.emit(this.Order);

    if (this.Order === -1) {
      this.orderString = 'Descending';
    } else if (this.Order === 1) {
      this.orderString = 'Ascending';
    } else {
      this.orderString = null;
    }
  }

  constructor(private dataService: DataService,
              private cartService: CartService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.filter(this.searchText);

    this.searchTextChanged
        .subscribe((searchText: string) => this.filter(''));

    this.orderChanged
        .subscribe((order: boolean) => this.sortProducts());
  }

  addItem(product: IProduct) {
    this.cartService.addItem(product);
    this.cartService.countItems();

    const index = this.products.indexOf(product);
    product.quantity --;
    this.products.splice(index, 1, product);
  }

  filter(searchText) {
    this.route.paramMap
      .subscribe(data => {
        this.category = data.get('cat');

        this.searchText = document.querySelector('input').value;

        if (this.searchText && this.category) {
          this.dataService.getProductsByCategory(this.category)
          .subscribe((productsList: IProduct[]) => {
            this.products = productsList.filter((p: IProduct) =>
                                        (p.name.toLowerCase()
                                              .search(this.searchText.toLowerCase()) !== -1) ? true : false);
          });
        } else if (this.searchText) {
          this.dataService.getProducts()
          .subscribe((productsList: IProduct[]) => {
            this.products = productsList.filter((p: IProduct) =>
                                        (p.name.toLowerCase()
                                              .search(this.searchText.toLowerCase()) !== -1) ? true : false);
          });
        } else if (this.category) {
          this.dataService.getProductsByCategory(this.category)
                .subscribe((productsList: IProduct[]) => this.products = productsList);
        } else {
          this.dataService.getProducts()
                .subscribe((productsList: IProduct[]) => this.products = productsList);
        }
      });
  }

  clearSearchText() {
    document.querySelector('input').value = '';
    this.searchText = '';
    this.filter('');
  }

  sortProducts() {
    if (this.order !== 0) {
      this.products.sort((a, b) => {
        const prodA = a.name;
        const prodB = b.name;

        let result = 0;

        if (prodA > prodB){
          result = 1;
        }else if (prodA < prodB){
          result = -1;
        }
        return this.order === 1 ? result : (result * -1);
      });
    } else {
      this.filter('');
    }
  }

  clearSort() {
    this.order = 0;
    this.orderString = null;

    document.querySelectorAll('app-order-items > div').forEach(element => {
      element.classList.remove('activeSortOrder');
    });
  }
}
