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

  @Output() searchTextChanged = new EventEmitter();

  private Search: string;
  @Input() get search() {
    return this.Search;
  }
  set search(val: string) {
    this.Search = val;
    this.searchTextChanged.emit(this.Search);
  }

  constructor(private dataService: DataService,
              private cartService: CartService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.filterCategory();
    this.filter(this.searchText);

    this.searchTextChanged
        .subscribe((searchText: string) => this.filter(''));
  }

  // private filterCategory() {
  //   this.route.paramMap
  //     .subscribe(data => {
  //       this.category = data.get('cat');

  //       if (this.category) {
  //         this.dataService.getProductsByCategory(this.category)
  //           .subscribe((productsList: IProduct[]) => this.products = productsList);
  //       }
  //       else {
  //         this.dataService.getProducts()
  //           .subscribe((productsList: IProduct[]) => this.products = productsList);
  //       }
  //     });
  // }

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

        // this.searchText = searchText;
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
          // this.filterCategory();
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
}
