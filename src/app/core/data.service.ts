import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder, IProduct } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';

    constructor(private http: HttpClient) { }

    // getCustomers(): Observable<ICustomer[]> {
    //     return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
    //         .pipe(
    //             catchError(this.handleError)
    //         );
    // }

    getProducts(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.baseUrl + 'products.json')
          .pipe(
              catchError(this.handleError)
          );
    }

    getFilteredProducts(category): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.baseUrl + 'products.json')
            .pipe(
              map(products => {
                  const catProducts = products.filter((product: IProduct) => product.category === category);
                  return catProducts;
            }),
                catchError(this.handleError)
            );
      }

    getCategories(): Observable<IProduct[]> {
      return this.http.get<any[]>(this.baseUrl + 'categories.json')
          .pipe(
              catchError(this.handleError)
          );
    }

    // getCustomer(id: number): Observable<ICustomer> {
    //   return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
    //     .pipe(
    //       map(customers => {
    //         const customer = customers.filter((cust: ICustomer) => cust.customerId === id);
    //         return (customer && customer.length) ? customer[0] : null;
    //       }),
    //       catchError(this.handleError)
    //     )
    // }

    // getOrders(id: number): Observable<IOrder[]> {
    //   return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
    //     .pipe(
    //       map(orders => {
    //         const custOrders = orders.filter((order: IOrder) => order.customerId === id);
    //         return custOrders;
    //       }),
    //       catchError(this.handleError)
    //     );
    // }

    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}
